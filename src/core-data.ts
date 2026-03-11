type RayKey =
  | 'Red'
  | 'Orange'
  | 'Yellow'
  | 'Green'
  | 'Turquoise'
  | 'Blue'
  | 'Indigo'
  | 'Violet'
  | 'Magenta'
  | 'Omni'
  | 'Elemental'
  | 'ALL';

type WishAvailability = 'accepting' | 'full';
type AgreementStatus = 'draft' | 'signed';
type QueueStorageKey = 'pending' | 'approved' | 'returned';
type LocalOnlyStorageKey = 'wish_submissions';
type RemoteStorageKey =
  | QueueStorageKey
  | 'connections'
  | 'agreements'
  | 'authorizedCES'
  | 'securityLog'
  | 'gateLockout'
  | 'stewardPass';
type StorageKey = RemoteStorageKey | LocalOnlyStorageKey;

interface SeasonState {
  Winter: boolean;
  Spring: boolean;
  Summer: boolean;
  Fall: boolean;
}

interface ContactMethods {
  instagram: string;
  email: string;
  phone: string;
  discord: string;
  signal: string;
  whatsapp: string;
}

type ContactVisibility = Record<keyof ContactMethods, boolean>;

interface ContactMethodItem {
  label: string;
  display: string;
}

interface PortfolioItem {
  type: 'image' | 'video';
  url: string;
  caption: string;
  storagePath?: string;
  fileName?: string;
  contentType?: string;
  fileSize?: number;
  uploadedAt?: string;
}

interface StewardAlert {
  id: string;
  kind: 'media_removed' | 'audit_notice';
  message: string;
  mediaLabel?: string;
  title?: string;
  auditId?: string;
  auditStatus?: 'opened' | 'closed';
  auditOutcome?: string;
  auditStanding?: 'active' | 'suspended' | 'banned';
  createdAt: string;
  createdBy: string;
}

interface AgreementRole {
  label: string;
  beings: string;
}

interface AgreementRecord {
  id: string;
  sourceType: string;
  sourceWishId: string | null;
  sourceWishName: string;
  status: AgreementStatus;
  wishingProfileId: string;
  wishingCES: string;
  wishingName: string;
  coCreatorProfileId: string;
  coCreatorCES: string;
  coCreatorName: string;
  roles: AgreementRole[];
  portalStartPhase: string;
  portalEndPhase: string;
  portalTimeline: string;
  scope: string;
  format: string;
  exchangePathway: string;
  springMilestone: string;
  summerMilestone: string;
  fallMilestone: string;
  openingNote: string;
  replyPreference: string;
  boundaries: string;
  coCreatorBlessing: string;
  receiverBlessing: string;
  sharedContactMethods: ContactMethods;
  createdAt: string;
  updatedAt: string;
  signedAt: string | null;
}

interface ConnectionRecord {
  fromProfileId?: string;
  fromCES?: string;
  fromRay?: string;
  toProfileId?: string;
  toCES?: string;
  toRay?: string;
  timestamp?: string;
  [key: string]: unknown;
}

interface GateLockoutState {
  locked?: boolean;
  timestamp?: string;
  cesEncrypted?: string;
  [key: string]: unknown;
}

interface AuthorizedStewardEntry {
  cesPlain: string;
  cesEncrypted: string;
  name: string;
  passphrase: string;
  registeredAt: string;
}

interface SecurityLogEntry {
  timestamp?: string;
  cesEncrypted?: string;
  [key: string]: unknown;
}

interface WishEntry {
  id: string;
  [key: string]: unknown;
}

interface WishAvailabilityMeta {
  key: WishAvailability;
  emoji: string;
  label: string;
  copy: string;
}

interface CreatorRecord {
  id: string | number | undefined;
  name: string;
  pronouns: string;
  title: string;
  location: string;
  sunPlacement: string;
  moonPlacement: string;
  emoji: string;
  photo: string | null;
  ray: string;
  primaryRay: string;
  primaryRayKey: string;
  rays: string[];
  heartlight: string;
  offerings: string[];
  exchanges: string[];
  seasons: SeasonState;
  timeline: string;
  numerology: string[];
  accessibility: string[];
  consent: string;
  portfolioLink: string;
  portfolioItems: PortfolioItem[];
  stewardAlerts: StewardAlert[];
  contactMethods: ContactMethods;
  contactVisibility: ContactVisibility;
  publicContactVisibility: boolean;
  contactMethod: string;
  season_current: string;
  cesNumber: string | null;
  passphrase: string;
  wishAvailability: WishAvailability;
  directoryWishStatus: WishAvailability;
  stewardStanding: 'active' | 'suspended' | 'banned';
  stewardStandingNote: string;
  [key: string]: unknown;
}

interface StorageValueMap {
  pending: CreatorRecord[];
  approved: CreatorRecord[];
  returned: CreatorRecord[];
  connections: ConnectionRecord[];
  agreements: AgreementRecord[];
  authorizedCES: AuthorizedStewardEntry[];
  securityLog: SecurityLogEntry[];
  gateLockout: GateLockoutState | null;
  stewardPass: string | null;
  wish_submissions: WishEntry[];
}

type PartialRecord = Record<string, unknown>;

const AGREEMENT_STORAGE_KEY: 'agreements' = 'agreements';
const STORAGE_PREFIX = 'ai_';
const STORAGE_QUEUE_KEYS = new Set<QueueStorageKey>(['pending', 'approved', 'returned']);
const REMOTE_STORAGE_KEYS: RemoteStorageKey[] = [
  'pending',
  'approved',
  'returned',
  'connections',
  'agreements',
  'authorizedCES',
  'securityLog',
  'gateLockout',
  'stewardPass',
];
const REMOTE_STORAGE_ENDPOINT = '/api/store';
const LOCAL_DEMO_HOSTS = new Set(['localhost', '127.0.0.1']);
const storageCache: Partial<Record<StorageKey, unknown>> = Object.create(null);
const storageWriteQueue = new Map<StorageKey, Promise<void>>();
let storageBackend: 'unknown' | 'remote' | 'unavailable' = 'unknown';
let storageHydrationPromise: Promise<boolean> | null = null;

function isQueueStorageKey(key: StorageKey): key is QueueStorageKey {
  return STORAGE_QUEUE_KEYS.has(key as QueueStorageKey);
}

function isRemoteStorageKey(key: StorageKey): key is RemoteStorageKey {
  return REMOTE_STORAGE_KEYS.includes(key as RemoteStorageKey);
}

function cloneStorageValue<T>(value: T): T {
  if (value === null || value === undefined) return value;
  try {
    return JSON.parse(JSON.stringify(value)) as T;
  } catch (_error) {
    return value;
  }
}

function stripDemoProfiles(list: CreatorRecord[]): CreatorRecord[] {
  return list.filter(profile => !['demo1', 'demo2'].includes(String(profile?.id ?? '')));
}

function normalizeStorageValue<K extends StorageKey>(key: K, value: unknown): StorageValueMap[K] | null {
  if (value === null || value === undefined) return null;
  if (isQueueStorageKey(key)) {
    const list = Array.isArray(value) ? (value as CreatorRecord[]) : [];
    return stripDemoProfiles(list) as StorageValueMap[K];
  }
  return value as StorageValueMap[K];
}

function readLocalStorageValue<K extends StorageKey>(key: K): StorageValueMap[K] | undefined {
  try {
    const raw = localStorage.getItem(STORAGE_PREFIX + key);
    if (raw === null) return undefined;
    return normalizeStorageValue(key, JSON.parse(raw)) ?? undefined;
  } catch (_error) {
    return undefined;
  }
}

function writeLocalStorageValue<K extends StorageKey>(
  key: K,
  value: StorageValueMap[K] | null | undefined
): StorageValueMap[K] | null {
  const normalized = normalizeStorageValue(key, value);
  storageCache[key] = normalized;
  try {
    if (normalized === null || normalized === undefined) {
      localStorage.removeItem(STORAGE_PREFIX + key);
    } else {
      localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(normalized));
    }
  } catch (_error) {}
  return normalized;
}

function hasStorageValue(key: StorageKey): boolean {
  return Object.prototype.hasOwnProperty.call(storageCache, key);
}

function hasMeaningfulStorageValue(value: unknown): boolean {
  if (Array.isArray(value)) return value.length > 0;
  if (value && typeof value === 'object') return Object.keys(value).length > 0;
  return value !== null && value !== undefined && value !== '';
}

function shouldSeedLocalDemoData(): boolean {
  return LOCAL_DEMO_HOSTS.has(window.location.hostname);
}

function getStorage<K extends StorageKey>(key: K, fallback: StorageValueMap[K]): StorageValueMap[K] {
  if (!hasStorageValue(key)) {
    const localValue = readLocalStorageValue(key);
    if (localValue !== undefined) storageCache[key] = localValue;
  }
  const value = hasStorageValue(key) ? storageCache[key] : undefined;
  return value === null || value === undefined ? fallback : cloneStorageValue(value as StorageValueMap[K]);
}

function persistStorageToRemote<K extends StorageKey>(key: K, value: StorageValueMap[K] | null): Promise<void> {
  if (storageBackend === 'unavailable' || !isRemoteStorageKey(key)) {
    return Promise.resolve();
  }

  const normalized = normalizeStorageValue(key, value);
  const prior = storageWriteQueue.get(key) || Promise.resolve();
  const next = prior
    .catch(() => {})
    .then(async () => {
      const response = await fetch(REMOTE_STORAGE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key, value: normalized }),
      });
      if (!response.ok) {
        throw new Error('Storage write failed with status ' + response.status);
      }
      storageBackend = 'remote';
    });

  next.catch(error => {
    if (storageBackend === 'unknown') storageBackend = 'unavailable';
    console.warn('Remote storage write failed for "' + key + '".', error);
  });
  storageWriteQueue.set(key, next);
  return next;
}

function setStorage<K extends StorageKey>(key: K, val: StorageValueMap[K]): void {
  const normalized = writeLocalStorageValue(key, val);
  void persistStorageToRemote(key, normalized);
}

REMOTE_STORAGE_KEYS.forEach(key => {
  const localValue = readLocalStorageValue(key);
  if (localValue !== undefined) storageCache[key] = localValue;
});

async function fetchRemoteStorageValue<K extends RemoteStorageKey>(key: K): Promise<StorageValueMap[K] | null> {
  const response = await fetch(`${REMOTE_STORAGE_ENDPOINT}?key=${encodeURIComponent(key)}`, {
    cache: 'no-store',
  });
  if (!response.ok) {
    throw new Error('Storage read failed with status ' + response.status);
  }
  const data = (await response.json()) as { value?: unknown } | null;
  storageBackend = 'remote';
  return normalizeStorageValue(key, data ? data.value : null);
}

function getDemoPendingProfiles(): CreatorRecord[] {
  return [
    normalizeCreatorRecord({
      id: 'demo1',
      name: 'Isara Lune',
      photo: null,
      primaryRay: 'Indigo Ray',
      rays: ['Indigo', 'Violet'],
      heartlight: 'I tend the inner garden so others may bloom.',
      offerings: ['Astrology', 'Dream Work', 'Natal Charts'],
      exchangePathways: ['Gift Exchange', 'Gratitude Weave'],
      submittedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
      status: 'pending',
    }),
    normalizeCreatorRecord({
      id: 'demo2',
      name: 'Cael Ember',
      photo: null,
      primaryRay: 'Orange Ray',
      rays: ['Orange'],
      heartlight: 'Movement is my medicine and my message.',
      offerings: ['Somatic Practice', 'Breathwork', 'Movement Ritual'],
      exchangePathways: ['Barter', 'Time Exchange'],
      submittedAt: new Date(Date.now() - 86400000).toISOString(),
      status: 'pending',
    }),
  ];
}

function getCurrentUser(): CreatorRecord | null {
  try {
    const raw = sessionStorage.getItem('cesCurrentUser');
    if (!raw) return null;
    return normalizeCreatorRecord(JSON.parse(raw) as PartialRecord);
  } catch (_error) {
    return null;
  }
}

function setCurrentUser(profile: PartialRecord | CreatorRecord | null): void {
  try {
    if (profile === null) {
      sessionStorage.removeItem('cesCurrentUser');
      return;
    }
    sessionStorage.setItem('cesCurrentUser', JSON.stringify(profile));
  } catch (_error) {}
}

function clearCurrentUser(): void {
  try {
    sessionStorage.removeItem('cesCurrentUser');
  } catch (_error) {}
}

function initializeProfileStorageDefaults(): void {
  const authorized = getStorage('authorizedCES', []);
  if (authorized.length === 0) {
    setStorage('authorizedCES', [createDefaultStewardEntry() as AuthorizedStewardEntry]);
    return;
  }

  let changed = false;
  const migrated = authorized.map(entry => {
    if (
      entry &&
      entry.cesPlain === DEFAULT_STEWARD_CES &&
      entry.name === 'Atlas Morphoenix' &&
      String(entry.passphrase || '') === STEWARD_PASS
    ) {
      changed = true;
      return {
        ...entry,
        passphrase: DEFAULT_STEWARD_PROFILE_PASS,
      };
    }
    return entry;
  });

  if (changed) {
    setStorage('authorizedCES', migrated);
  }
}

function syncCurrentUserWithStoredProfile(): void {
  const currentUser = getCurrentUser();
  if (!currentUser) return;
  const allProfiles = (['pending', 'approved', 'returned'] as QueueStorageKey[]).flatMap(key => getStorage(key, []));
  const matchedProfile = allProfiles.find(profile =>
    profile.id === currentUser.id ||
    (currentUser.cesNumber && profile.cesNumber === currentUser.cesNumber)
  );
  if (matchedProfile) setCurrentUser(matchedProfile);
}

function rerenderStorageBoundViews(): void {
  if (typeof renderProfileCorner === 'function') renderProfileCorner();
  if (typeof renderDirectory === 'function') renderDirectory();
  if (typeof renderAdminStats === 'function') renderAdminStats();
  if (typeof renderPendingList === 'function') renderPendingList();
  if (typeof renderApprovedList === 'function') renderApprovedList();
  if (typeof renderReturnedList === 'function') renderReturnedList();
  if (typeof renderAuthorizedList === 'function') renderAuthorizedList();
  if (typeof renderSecurityLog === 'function') renderSecurityLog();
}

async function hydrateStorageFromRemote(): Promise<boolean> {
  if (storageHydrationPromise) return storageHydrationPromise;
  storageHydrationPromise = (async () => {
    const successfulReads: Array<{ key: RemoteStorageKey; value: StorageValueMap[RemoteStorageKey] | null }> = [];

    await Promise.allSettled(
      REMOTE_STORAGE_KEYS.map(async key => {
        const value = await fetchRemoteStorageValue(key);
        successfulReads.push({ key, value });
      })
    );

    if (successfulReads.length === 0) {
      storageBackend = 'unavailable';
      initializeProfileStorageDefaults();
      syncCurrentUserWithStoredProfile();
      rerenderStorageBoundViews();
      return false;
    }

    successfulReads.forEach(({ key, value }) => {
      const localValue = hasStorageValue(key) ? storageCache[key] : readLocalStorageValue(key);
      if (hasMeaningfulStorageValue(value)) {
        writeLocalStorageValue(key, value);
        return;
      }
      if (hasMeaningfulStorageValue(localValue)) {
        const normalizedLocal = writeLocalStorageValue(
          key,
          (localValue ?? null) as StorageValueMap[typeof key] | null
        );
        void persistStorageToRemote(key, normalizedLocal);
        return;
      }
      writeLocalStorageValue(key, value);
    });

    initializeProfileStorageDefaults();
    syncCurrentUserWithStoredProfile();
    rerenderStorageBoundViews();
    return true;
  })().catch(error => {
    storageBackend = 'unavailable';
    console.warn('Falling back to local profile storage.', error);
    initializeProfileStorageDefaults();
    syncCurrentUserWithStoredProfile();
    rerenderStorageBoundViews();
    return false;
  });
  return storageHydrationPromise;
}

document.addEventListener('DOMContentLoaded', function() {
  void hydrateStorageFromRemote();
});

function normalizeAgreementRoles(value: unknown): AgreementRole[] {
  const roles = Array.isArray(value) ? value : [];
  const normalized = roles
    .map(role => ({
      label: String((role as PartialRecord)?.label || '').trim(),
      beings: String((role as PartialRecord)?.beings || '').trim(),
    }))
    .filter(role => role.label || role.beings);
  return normalized.length ? normalized : [{ label: '', beings: '' }];
}

const AGREEMENT_PORTAL_PHASES = [
  'Spring Seed',
  'Summer Bloom',
  'Fall Harvest',
  'Winter Rest',
];

function normalizeAgreementExchangePathway(value: unknown = ''): string {
  const normalized = String(value || '').trim();
  switch (normalized) {
    case 'Gift exchange':
      return 'Gift Share';
    case 'Scholarship exchange':
      return 'Scholarship';
    case 'Value exchange (trade / skill swap)':
      return 'Trade';
    default:
      return normalized || 'Gift Share';
  }
}

function getAgreementPortalPhaseIndex(value = ''): number {
  const index = AGREEMENT_PORTAL_PHASES.indexOf(String(value || '').trim());
  return index >= 0 ? index : 0;
}

function inferAgreementPortalPhases(record: PartialRecord = {}): { portalStartPhase: string; portalEndPhase: string } {
  const explicitStart = String(record.portalStartPhase || '').trim();
  const explicitEnd = String(record.portalEndPhase || '').trim();
  if (AGREEMENT_PORTAL_PHASES.includes(explicitStart) && AGREEMENT_PORTAL_PHASES.includes(explicitEnd)) {
    return {
      portalStartPhase: explicitStart,
      portalEndPhase: AGREEMENT_PORTAL_PHASES[Math.max(getAgreementPortalPhaseIndex(explicitStart), getAgreementPortalPhaseIndex(explicitEnd))],
    };
  }
  const timeline = String(record.portalTimeline || '').toLowerCase();
  const matches = AGREEMENT_PORTAL_PHASES.filter(phase => timeline.includes(phase.toLowerCase()));
  const portalStartPhase = matches[0] || 'Spring Seed';
  const portalEndPhase = matches.length ? matches[matches.length - 1] : 'Fall Harvest';
  return {
    portalStartPhase,
    portalEndPhase: AGREEMENT_PORTAL_PHASES[Math.max(getAgreementPortalPhaseIndex(portalStartPhase), getAgreementPortalPhaseIndex(portalEndPhase))],
  };
}

function buildAgreementPortalTimeline(portalStartPhase = 'Spring Seed', portalEndPhase = 'Fall Harvest'): string {
  const safeStartPhase = AGREEMENT_PORTAL_PHASES.includes(portalStartPhase) ? portalStartPhase : 'Spring Seed';
  const safeEndPhase = AGREEMENT_PORTAL_PHASES.includes(portalEndPhase) ? portalEndPhase : 'Fall Harvest';
  const startIndex = getAgreementPortalPhaseIndex(safeStartPhase);
  const endIndex = Math.max(startIndex, getAgreementPortalPhaseIndex(safeEndPhase));
  return `${safeStartPhase} -> ${AGREEMENT_PORTAL_PHASES[endIndex]}`;
}

function normalizeAgreementRecord(record: PartialRecord = {}): AgreementRecord {
  const portalPhases = inferAgreementPortalPhases(record);
  return {
    id: String(record.id || `agreement_${Date.now()}`),
    sourceType: String(record.sourceType || 'template'),
    sourceWishId: record.sourceWishId ? String(record.sourceWishId) : null,
    sourceWishName: String(record.sourceWishName || ''),
    status: record.status === 'signed' ? 'signed' : 'draft',
    wishingProfileId: String(record.wishingProfileId || ''),
    wishingCES: String(record.wishingCES || ''),
    wishingName: String(record.wishingName || '').trim(),
    coCreatorProfileId: String(record.coCreatorProfileId || ''),
    coCreatorCES: String(record.coCreatorCES || ''),
    coCreatorName: String(record.coCreatorName || '').trim(),
    roles: normalizeAgreementRoles(record.roles),
    portalStartPhase: portalPhases.portalStartPhase,
    portalEndPhase: portalPhases.portalEndPhase,
    portalTimeline: String(record.portalTimeline || buildAgreementPortalTimeline(portalPhases.portalStartPhase, portalPhases.portalEndPhase)).trim(),
    scope: String(record.scope || '').trim(),
    format: String(record.format || 'Digital').trim(),
    exchangePathway: normalizeAgreementExchangePathway(record.exchangePathway),
    springMilestone: String(record.springMilestone || '').trim(),
    summerMilestone: String(record.summerMilestone || '').trim(),
    fallMilestone: String(record.fallMilestone || '').trim(),
    openingNote: String(record.openingNote || '').trim(),
    replyPreference: String(record.replyPreference || '').trim(),
    boundaries: String(record.boundaries || '').trim(),
    coCreatorBlessing: String(record.coCreatorBlessing || '').trim(),
    receiverBlessing: String(record.receiverBlessing || '').trim(),
    sharedContactMethods: normalizeContactMethods(record.sharedContactMethods) as ContactMethods,
    createdAt: String(record.createdAt || new Date().toISOString()),
    updatedAt: String(record.updatedAt || record.createdAt || new Date().toISOString()),
    signedAt: record.status === 'signed'
      ? String(record.signedAt || record.updatedAt || new Date().toISOString())
      : null,
  };
}

function getAllAgreements(): AgreementRecord[] {
  return getStorage(AGREEMENT_STORAGE_KEY, []).map(entry => normalizeAgreementRecord(entry as unknown as PartialRecord));
}

function getAgreementById(id: string): AgreementRecord | null {
  return getAllAgreements().find(entry => entry.id === id) || null;
}

function agreementMatchesProfile(agreement: AgreementRecord, profile: PartialRecord = {}): boolean {
  const match = getProfileConnectionMatch(profile);
  return (
    (match.id && (String(agreement.wishingProfileId || '') === match.id || String(agreement.coCreatorProfileId || '') === match.id)) ||
    (match.cesNumber && (String(agreement.wishingCES || '') === match.cesNumber || String(agreement.coCreatorCES || '') === match.cesNumber))
  );
}

function getProfileAgreements(profile: PartialRecord = {}): AgreementRecord[] {
  return getAllAgreements()
    .filter(entry => agreementMatchesProfile(entry, profile))
    .sort((a, b) => String(b.updatedAt || '').localeCompare(String(a.updatedAt || '')));
}

function getAgreementCounterparty(agreement: AgreementRecord, profile: PartialRecord = {}): string {
  const match = getProfileConnectionMatch(profile);
  const isWishingBeing =
    (match.id && String(agreement.wishingProfileId || '') === match.id) ||
    (match.cesNumber && String(agreement.wishingCES || '') === match.cesNumber);
  return isWishingBeing ? (agreement.coCreatorName || 'Unnamed Co-Creator') : (agreement.wishingName || 'Unnamed Wishing Being');
}

function getAgreementStatusMarkup(agreement: AgreementRecord): string {
  const signed = agreement.status === 'signed';
  const label = signed ? 'Signed With Intention' : 'Draft Agreement';
  const borderColor = signed ? 'rgba(58,155,111,0.32)' : 'rgba(200,146,42,0.28)';
  const background = signed ? 'rgba(58,155,111,0.12)' : 'rgba(200,146,42,0.12)';
  const color = signed ? '#97dfb4' : 'var(--orichalcum-light)';
  return `<span style="display:inline-flex;align-items:center;padding:0.18rem 0.55rem;border-radius:999px;border:1px solid ${borderColor};background:${background};color:${color};font-size:0.62rem;letter-spacing:0.1em;text-transform:uppercase;font-family:'Atkinson Hyperlegible',sans-serif">${escapeHtml(label)}</span>`;
}

function normalizeSeasons(profile: PartialRecord = {}): SeasonState {
  const base: SeasonState = { Winter: false, Spring: false, Summer: false, Fall: false };
  if (profile.seasons && typeof profile.seasons === 'object') {
    return { ...base, ...(profile.seasons as Partial<SeasonState>) };
  }
  if (Array.isArray(profile.seasonalCapacity)) {
    profile.seasonalCapacity.forEach(season => {
      if (Object.prototype.hasOwnProperty.call(base, season)) {
        base[season as keyof SeasonState] = true;
      }
    });
  }
  return base;
}

function normalizeWishAvailability(value: unknown): WishAvailability {
  return value === 'full' ? 'full' : 'accepting';
}

function getWishAvailabilityMeta(value: unknown): WishAvailabilityMeta {
  const normalized = normalizeWishAvailability(value);
  return normalized === 'full'
    ? {
        key: 'full',
        emoji: '🛑',
        label: 'At Full Capacity',
        copy: 'Visible in the Directory as currently full for new wishes.',
      }
    : {
        key: 'accepting',
        emoji: '✅',
        label: 'Accepting Wishes',
        copy: 'Visible in the Directory as open to receive new wishes.',
      };
}

function renderWishAvailabilityBadge(value: unknown): string {
  const meta = getWishAvailabilityMeta(value);
  return `<span class="directory-wish-status ${meta.key}" title="${escapeHtml(meta.copy)}">${meta.emoji} ${escapeHtml(meta.label)}</span>`;
}

function normalizeCreatorRecord(profile: PartialRecord = {}): CreatorRecord {
  const rayKey = String(profile.ray || String(profile.primaryRay || '').replace(/\s+Ray$/, '') || '');
  const rays = Array.isArray(profile.rays) && profile.rays.length ? (profile.rays as string[]) : (rayKey ? [rayKey] : []);
  const seasons = normalizeSeasons(profile);
  const wishAvailability = normalizeWishAvailability(profile.wishAvailability || profile.directoryWishStatus || profile.wishStatus);
  const passphrase = String(profile.passphrase || '').trim();
  const legacyContactText = String(profile.contactMethod || profile.contact || '');
  const contactMethods = normalizeContactMethods(profile.contactMethods, legacyContactText) as ContactMethods;
  const contactVisibility = normalizeContactVisibility(
    profile.contactVisibility,
    contactMethods,
    !!(profile.publicContactVisibility || profile.contactVisibility === 'public')
  ) as ContactVisibility;
  const publicContactVisibility = getPublicContactMethodItems(contactMethods, contactVisibility).length > 0;
  const contactMethodItems = getContactMethodItems(contactMethods) as ContactMethodItem[];
  const stewardStanding = ['suspended', 'banned'].includes(String(profile.stewardStanding || '').trim())
    ? String(profile.stewardStanding || '').trim() as 'suspended' | 'banned'
    : 'active';

  return {
    ...profile,
    id: profile.id as string | number | undefined,
    name: String(profile.name || 'Unnamed Being'),
    pronouns: String(profile.pronouns || ''),
    title: String(profile.title || ''),
    location: String(profile.location || ''),
    sunPlacement: String(profile.sunPlacement || profile.sun || ''),
    moonPlacement: String(profile.moonPlacement || profile.moon || ''),
    emoji: typeof profile.emoji === 'string' ? profile.emoji : '',
    photo: typeof profile.photo === 'string' ? profile.photo : null,
    ray: rayKey,
    primaryRay: String(profile.primaryRay || (rayKey ? `${rayKey} Ray` : '')),
    primaryRayKey: rayKey,
    rays,
    heartlight: String(profile.heartlight || ''),
    offerings: asArray(profile.offerings) as string[],
    exchanges: asArray(profile.exchanges && (profile.exchanges as unknown[]).length ? profile.exchanges : profile.exchangePathways) as string[],
    seasons,
    timeline: String(profile.timeline || profile.coCreationTimeline || ''),
    numerology: asArray(profile.numerology) as string[],
    accessibility: asArray(
      profile.accessibility && (profile.accessibility as unknown[]).length
        ? profile.accessibility
        : profile.accessibilityOfferings
    ) as string[],
    consent: String(profile.consent || ''),
    portfolioLink: String(profile.portfolioLink || profile.portfolio || ''),
    portfolioItems: normalizePortfolioItems(
      (Array.isArray(profile.portfolioItems) ? profile.portfolioItems : profile.mediaPortfolio) as unknown[]
    ) as PortfolioItem[],
    stewardAlerts: Array.isArray(profile.stewardAlerts)
      ? profile.stewardAlerts.map(alert => ({
          id: String(alert?.id || ''),
          kind: String(alert?.kind || '').trim() === 'audit_notice' ? 'audit_notice' as const : 'media_removed' as const,
          message: String(alert?.message || '').trim(),
          mediaLabel: String(alert?.mediaLabel || '').trim(),
          title: String(alert?.title || '').trim(),
          auditId: String(alert?.auditId || '').trim(),
          auditStatus: String(alert?.auditStatus || '').trim() === 'closed' ? 'closed' as const : 'opened' as const,
          auditOutcome: String(alert?.auditOutcome || '').trim(),
          auditStanding: ['suspended', 'banned'].includes(String(alert?.auditStanding || '').trim())
            ? String(alert?.auditStanding || '').trim() as 'suspended' | 'banned'
            : 'active' as const,
          createdAt: String(alert?.createdAt || ''),
          createdBy: String(alert?.createdBy || 'Steward').trim() || 'Steward',
        })).filter(alert => alert.id && alert.message)
      : [],
    contactMethods,
    contactVisibility,
    publicContactVisibility,
    contactMethod: hasAnyContactMethods(contactMethods)
      ? contactMethodItems.map(item => `${item.label}: ${item.display}`).join(' · ')
      : legacyContactText,
    season_current: String(profile.season_current || getSeasonBadge(seasons)),
    cesNumber: profile.cesNumber ? String(profile.cesNumber) : null,
    passphrase,
    wishAvailability,
    directoryWishStatus: wishAvailability,
    stewardStanding,
    stewardStandingNote: String(profile.stewardStandingNote || '').trim(),
  };
}

function getDirectoryProfiles(): CreatorRecord[] {
  return getStorage('approved', [])
    .map(normalizeCreatorRecord)
    .filter(profile => String(profile.cesNumber || '').trim().length === 9)
    .filter(profile => profile.stewardStanding === 'active');
}

function getCreatorById(id: string | number): CreatorRecord | undefined {
  return getDirectoryProfiles().find(profile => String(profile.id) === String(id));
}

function getAvatarLabel(profile: PartialRecord = {}): string {
  return profile.photo ? '' : (String(profile.emoji || String(profile.name || '?')[0] || '✦'));
}

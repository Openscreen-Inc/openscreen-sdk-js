import {RequestRouteSegment} from './request'
import {RequestDelete} from './request-delete'
import {RequestGet} from './request-get'
import {RequestPatch} from './request-patch'
import {RequestPost} from './request-post'
import {Resource, Resources} from './resource'

export interface NestedKeyValueObject {
  [key: string]: string | number | boolean | NestedKeyValueObject | string[]
}
// ENUMERATIONS

export enum AccountStatus {
  ACTIVE = 'ACTIVE',
  SUSPENDED = 'SUSPENDED',
}

export enum AccountUserRole {
  OWNER = 'OWNER',
  ADMINISTRATOR = 'ADMINISTRATOR',
  BILLING_CONTACT = 'BILLING_CONTACT',
  MEMBER = 'MEMBER',
  API_KEY = 'API_KEY',
  INVITATION_DECLINED = 'INVITATION_DECLINED',
}

export enum AssetByAssetTypeSortingTypes {
  MODIFIED = 'MODIFIED',
  NAME = 'NAME',
  SCAN_COUNT = 'SCAN_COUNT',
  QR_CODE_COUNT = 'QR_CODE_COUNT',
}

export enum AssetSortingTypes {
  MODIFIED = 'MODIFIED',
  NAME = 'NAME',
  SCAN_COUNT = 'SCAN_COUNT',
  QR_CODE_COUNT = 'QR_CODE_COUNT',
  ASSET_TYPE_NAME = 'ASSET_TYPE_NAME',
}

export enum AssetTypeSortingTypes {
  MODIFIED = 'MODIFIED',
  NAME = 'NAME',
}

export enum AssetTypeUsabilityState {
  PUBLISHED = 'PUBLISHED',
  DRAFT = 'DRAFT',
  ARCHIVED = 'ARCHIVED',
}

export enum AuthMessageId {
  INVALID_API_KEY = 'INVALID_API_KEY',
  INVALID_EMAIL = 'INVALID_EMAIL',
  INVALID_LEGACY_MIGRATION = 'INVALID_LEGACY_MIGRATION',
  INVALID_PASSWORD = 'INVALID_PASSWORD',
  INVALID_SCOPE = 'INVALID_SCOPE',
  INVALID_SECRET = 'INVALID_SECRET',
  INVALID_TOKEN = 'INVALID_TOKEN',
  MIGRATE_FROM_COGNITO = 'MIGRATE_FROM_COGNITO',
  NO_ACCESS_TOKEN = 'NO_ACCESS_TOKEN',
  NO_REFRESH_TOKEN = 'NO_REFRESH_TOKEN',
  RESET_PASSWORD = 'RESET_PASSWORD',
  RESET_SECRET = 'RESET_SECRET',
  SUSPENDED_OR_INACTIVE = 'SUSPENDED_OR_INACTIVE',
  TOKEN_EXPIRED = 'TOKEN_EXPIRED',
  TRY_AGAIN = 'TRY_AGAIN',
  UNABLE_TO_CONFIRM_EMAIL = 'UNABLE_TO_CONFIRM_EMAIL',
  UNCONFIRMED_EMAIL = 'UNCONFIRMED_EMAIL',
}

export enum AuthTokenScope {
  API = 'API',
  CONFIRM_EMAIL = 'CONFIRM_EMAIL',
  NEW_PASSWORD = 'NEW_PASSWORD',
  NO_SESSION = 'NO_SESSION',
}

export enum ConsentStatus {
  ACCEPTED = 'ACCEPTED',
  DECLINED = 'DECLINED',
  true = 'true',
  false = 'false',
}

export enum ConsentType {
  SMS = 'SMS',
  EMAIL = 'EMAIL',
  DATA = 'DATA',
  CUSTOM = 'CUSTOM',
}

export enum ContactAssetSortingTypes {
  MODIFIED = 'MODIFIED',
  NAME = 'NAME',
  LAST_SCAN_TIME = 'LAST_SCAN_TIME',
  LAST_SCAN_LOCATION = 'LAST_SCAN_LOCATION',
  SCAN_COUNT = 'SCAN_COUNT',
}

export enum ContactSortingTypes {
  MODIFIED = 'MODIFIED',
  NAME = 'NAME',
  ASSET_NAME = 'ASSET_NAME',
  PHONE = 'PHONE',
  EMAIL = 'EMAIL',
  LAST_SCAN_TIME = 'LAST_SCAN_TIME',
  LAST_SCAN_LOCATION = 'LAST_SCAN_LOCATION',
  SCAN_COUNT = 'SCAN_COUNT',
}

export enum OpenscreenEmails {
  SALES_EMAIL = 'SALES_EMAIL',
  SUPPORT_EMAIL = 'SUPPORT_EMAIL',
}

export enum PricePlanName {
  FREE = 'free',
  PAYASYOUGO = 'payAsYouGo',
  ADVANCED = 'advanced',
  PRO = 'pro',
  ENTERPRISE_CUSTOM = 'enterpriseCustom',
  UNLIMITED = 'unlimited',
}

export enum PricePlanPaymentPeriod {
  MONTHLY = 'monthly',
  ANNUAL = 'annual',
}

export enum PricePlanReporting {
  BASIC = 'basic',
  ADVANCED = 'advanced',
  basic = 'basic',
  advance = 'advanced',
}

export enum ProjectSortingTypes {
  MODIFIED = 'MODIFIED',
  NAME = 'NAME',
  SCAN_COUNT = 'SCAN_COUNT',
  QR_CODE_COUNT = 'QR_CODE_COUNT',
  CONTACT_COUNT = 'CONTACT_COUNT',
  ASSET_COUNT = 'ASSET_COUNT',
}

export enum ProjectStatus {
  ACTIVE = 'ACTIVE',
  SUSPENDED = 'SUSPENDED',
}

export enum QrCodeCornerDotTypes {
  dot = 'dot',
  square = 'square',
}

export enum QrCodeCornerSquareTypes {
  dot = 'dot',
  square = 'square',
  extra_rounded = 'extra-rounded',
}

export enum QrCodeDotTypes {
  classy = 'classy',
  classy_rounded = 'classy-rounded',
  dots = 'dots',
  extra_rounded = 'extra-rounded',
  rounded = 'rounded',
  square = 'square',
}

export enum QrCodeDynamicRedirectType {
  NO_SCAN_ID = 'NO_SCAN_ID',
  SCAN_ID_IN_PATH_PARAMETER = 'SCAN_ID_IN_PATH_PARAMETER',
  SCAN_ID_IN_QUERY_STRING_PARAMETER = 'SCAN_ID_IN_QUERY_STRING_PARAMETER',
  CUSTOM_QUERY_STRING_PARAMETER = 'CUSTOM_QUERY_STRING_PARAMETER',
}

export enum QrCodeErrorCorrectionLevel {
  L = 'L',
  M = 'M',
  Q = 'Q',
  H = 'H',
}

export enum QrCodeGradientTypes {
  linear = 'linear',
  radial = 'radial',
}

export enum QrCodeIntentType {
  STATIC_REDIRECT = 'STATIC_REDIRECT',
  DYNAMIC_REDIRECT = 'DYNAMIC_REDIRECT',
  DYNAMIC_REDIRECT_TO_APP = 'DYNAMIC_REDIRECT_TO_APP',
}

export enum QrCodeLocatorKeyType {
  SHORT_URL = 'SHORT_URL',
  HASHED_ID = 'HASHED_ID',
  SECURE_ID = 'SECURE_ID',
}

export enum QrCodeSortingTypes {
  MODIFIED = 'MODIFIED',
  NAME = 'NAME',
  SCAN_COUNT = 'SCAN_COUNT',
}

export enum QrCodeStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  SUSPENDED = 'SUSPENDED',
}

export enum QrCodeType {
  PNG = 'PNG',
  JPEG = 'JPEG',
  SVG = 'SVG',
  png = 'png',
  jpeg = 'jpeg',
  svg = 'svg',
}

export enum UserCredentialsStatus {
  COMPROMISED = 'COMPROMISED',
  CONFIRMED = 'CONFIRMED',
  LEGACY = 'LEGACY',
  NEW_EMAIL = 'NEW_EMAIL',
  NEW_EMAIL_CONFIRMED = 'NEW_EMAIL_CONFIRMED',
  NEW_PASSWORD = 'NEW_PASSWORD',
  SUSPENDED = 'SUSPENDED',
  UNCONFIRMED = 'UNCONFIRMED',
}

export enum UserGroups {
  appuser = 'appuser',
  appadmin = 'appadmin',
}

export enum UserSettingsDomain {
  DASHBOARD = 'DASHBOARD',
}

// APPLICATION ENTITIES

export interface Entity {}

export interface DdbEntity {
  created?: string | Date | number | null
  modified?: string | Date | number | null
}

export interface Response {
  body?: DdbEntity | null
  code: number
  created?: string | Date | number | null
  data?: NestedKeyValueObject | null
  message?: string | null
  modified?: string | Date | number | null
  name: string
  request?: string | null
  responseId: string
  source?: string | null
  stack?: Array<any> | null
  userId: string
}

export interface DdbDownstreamedEntity {
  created?: string | Date | number | null
  modified?: string | Date | number | null
}

export interface DdbHistoryEntity {
  _timestamp: string | Date | number
  created?: string | Date | number | null
  expiresAt?: string | Date | number | null
  modified?: string | Date | number | null
}

export interface Account {
  accountId: string
  assetCount: number
  collectTaxInfo?: boolean
  companyName?: string | null
  contactCount: number
  created?: string | Date | number | null
  dynamicQrCodeCount: number
  emailCount: number
  isLocked?: boolean | null
  lastScanId?: string | null
  mmsCount: number
  modified?: string | Date | number | null
  needsPaymentUpdate: boolean
  paymentFailedDate?: string | null
  projectCount: number
  qrDomain?: string | null
  scanCount: number
  smsCount: number
  staticQrCodeCount: number
  status?: AccountStatus
  stripeCustomerId: string
  userCount: number
}

export interface AccountEmailContact {
  accountId: string
  contactId: string
  created?: string | Date | number | null
  email: string
  modified?: string | Date | number | null
}

export interface AccountInstalledApp {
  accountId: string
  appAccountId: string
  appId: string
  appName: string
  created?: string | Date | number | null
  modified?: string | Date | number | null
  ownerAccountId?: string | null
}

export interface AccountInvitation {
  accountId: string
  companyName?: string | null
  created?: string | Date | number | null
  email: string
  expiresAt?: string | Date | number | null
  firstName: string
  invitationId: string
  lastName: string
  modified?: string | Date | number | null
  sendersFirstName: string
  sendersLastName: string
  sendersUserId: string
  userRole: AccountUserRole
}

export interface AccountInvitationRequestBody {
  email: string
  firstName: string
  lastName: string
  userRole: AccountUserRole
}

export interface AccountPhoneContact {
  accountId: string
  contactId: string
  created?: string | Date | number | null
  modified?: string | Date | number | null
  phone: string
}

export interface AccountPublishedApp {
  appId: string
  created?: string | Date | number | null
  modified?: string | Date | number | null
  ownerAccountId: string
}

export interface AccountResponse extends Account {
  accountId: string
  assetCount: number
  collectTaxInfo?: boolean
  companyName?: string | null
  contactCount: number
  created?: string | Date | number | null
  currentPeriod: PricePlanPeriod
  dynamicQrCodeCount: number
  emailCount: number
  isLocked?: boolean | null
  lastScanId?: string | null
  mmsCount: number
  modified?: string | Date | number | null
  needsPaymentUpdate: boolean
  paymentFailedDate?: string | null
  pricePlan: PricePlan
  projectCount: number
  qrDomain?: string | null
  scanCount: number
  smsCount: number
  staticQrCodeCount: number
  status?: AccountStatus
  stripeCustomerId: string
  userCount: number
}

export interface AccountScan {
  accountId: string
  assetId: string
  created?: string | Date | number | null
  modified?: string | Date | number | null
  scanId: string
}

export interface AccountUser {
  accountId: string
  created?: string | Date | number | null
  modified?: string | Date | number | null
  userId: string
  userRole: AccountUserRole
}

export interface ApiKey {
  apiKeyId: string
  created?: string | Date | number | null
  description?: string | null
  key: string
  modified?: string | Date | number | null
  name: string
}

export interface ApiKeyCredentials {
  algorithm?: string
  apiKeyId: string
  created?: string | Date | number | null
  description?: string | null
  invalidAttemptCount: number
  key: string
  modified?: string | Date | number | null
  name: string
  secret?: string | null
  status: string
}

export interface ApiKeySessionResponseBody {
  apiKeyId: string
  expires: string | Date | number
  scope: AuthTokenScope
}

export interface App {
  appDetailMedia?: string[] | null
  appId: string
  appName: string
  appPrice: number
  appStoreThumbnail?: string | null
  appWebhook?: string | null
  categories?: Array<any> | null
  created?: string | Date | number | null
  description?: string | null
  featured: boolean
  features?: string | null
  heroImage?: string | null
  isPublished: boolean
  keywords?: Array<any> | null
  logo?: string | null
  modified?: string | Date | number | null
  ownerAccountId: string
  pricePlanPoints?: Array<any> | null
  tagline?: string | null
  uiUrl: string
  website?: string | null
}

export interface AppAccount {
  appAccountId: string
  appId: string
  appName: string
  assetCount: number
  contactCount: number
  created?: string | Date | number | null
  dynamicQrCodeCount: number
  emailCount: number
  lastScanId?: string | null
  mainAccountId: string
  mmsCount: number
  modified?: string | Date | number | null
  projectCount: number
  qrDomain?: string | null
  scanCount: number
  smsCount: number
  staticQrCodeCount: number
  userCount: number
}

export interface AppBasicDetails {
  appId: string
  appLogo?: string | null
  appName: string
  mainAccountId: string
}

export interface AppByName {
  appId: string
  appName: string
  created?: string | Date | number | null
  modified?: string | Date | number | null
}

export interface AppByTimestamp {
  appId: string
  appName: string
  created?: string | Date | number | null
  modified?: string | Date | number | null
  timestamp: string | Date | number
}

export interface Asset {
  appAccountId?: string | null
  appId?: string | null
  assetId: string
  assetTypeId?: string | null
  category?: string | null
  childAssets?: NestedKeyValueObject | null
  created?: string | Date | number | null
  customAttributes?: NestedKeyValueObject | null
  description?: string | null
  dynamicQrCodeCount: number
  isValidChildAssets?: boolean | null
  isValidCustomAttributes?: boolean | null
  lastScanId?: string | null
  locationId?: string | null
  modified?: string | Date | number | null
  name: string
  parentAssetId?: string | null
  projectId: string
  scanCount: number
  staticQrCodeCount: number
}

export interface AssetContact {
  assetId: string
  contactId: string
  created?: string | Date | number | null
  modified?: string | Date | number | null
  type?: string | null
}

export interface AssetHistory {
  _timestamp: string | Date | number
  appAccountId?: string | null
  appId?: string | null
  assetId?: string | null
  assetTypeId?: string | null
  category?: string | null
  childAssets?: NestedKeyValueObject | null
  created?: string | Date | number | null
  customAttributes?: NestedKeyValueObject | null
  description?: string | null
  dynamicQrCodeCount?: number | null
  expiresAt?: string | Date | number | null
  isValidChildAssets?: boolean | null
  isValidCustomAttributes?: boolean | null
  lastScanId?: string | null
  locationId?: string | null
  modified?: string | Date | number | null
  name?: string | null
  parentAssetId?: string | null
  projectId?: string | null
  scanCount?: number | null
  staticQrCodeCount?: number | null
}

export interface AssetType {
  accountId: string
  appAccountId?: string | null
  assetTypeId: string
  category?: string | null
  childItems?: NestedKeyValueObject | null
  created?: string | Date | number | null
  customAttributes?: NestedKeyValueObject | null
  description?: string | null
  instanceCount: number
  instanceProperties?: NestedKeyValueObject | null
  intent: string
  managedCount: number
  modified?: string | Date | number | null
  name: string
  staticProperties?: NestedKeyValueObject | null
  usabilityState: AssetTypeUsabilityState
}

export interface AssetTypeByLocation {
  assetTypeId: string
  created?: string | Date | number | null
  instanceCount: number
  locationId: string
  locationName?: string | null
  managedCount: number
  modified?: string | Date | number | null
}

export interface Contact {
  accountId: string
  appAccountId?: string | null
  appId?: string | null
  cellPhone?: string | null
  consent?: ContactConsent[] | null
  contactId: string
  created?: string | Date | number | null
  customAttributes?: NestedKeyValueObject | null
  emailAddress?: string | null
  firstName: string
  lastName: string
  lastScan?: LastScan | null
  lastScanProjectName?: string | null
  lastSms?: string | null
  mailingAddress?: ContactMailingAddress | null
  middleName: string
  modified?: string | Date | number | null
  nickname: string
  scanCount: number
  type?: string | null
}

export interface ContactAccountCustomConsent {
  accountId: string
  consentStatus: ConsentStatus
  consentedAt: string | Date | number
  contactId: string
  created?: string | Date | number | null
  customAttributes?: NestedKeyValueObject | null
  modified?: string | Date | number | null
  url?: string | null
  urls: string[]
}

export interface ContactAccountDataConsent {
  accountId: string
  consentStatus: ConsentStatus
  consentedAt: string | Date | number
  contactId: string
  created?: string | Date | number | null
  customAttributes?: NestedKeyValueObject | null
  modified?: string | Date | number | null
  url?: string | null
  urls: string[]
}

export interface ContactAccountEmailConsent {
  accountId: string
  consentStatus: ConsentStatus
  consentedAt: string | Date | number
  contactId: string
  created?: string | Date | number | null
  customAttributes?: NestedKeyValueObject | null
  modified?: string | Date | number | null
  url?: string | null
  urls: string[]
}

export interface ContactAccountSmsConsent {
  accountId: string
  consentStatus: ConsentStatus
  consentedAt: string | Date | number
  contactId: string
  created?: string | Date | number | null
  customAttributes?: NestedKeyValueObject | null
  modified?: string | Date | number | null
  url?: string | null
  urls: string[]
}

export interface ContactConsent {
  accountId?: string | null
  accountName?: string | null
  consentStatus?: ConsentStatus | null
  consentType?: ConsentType | null
  consented: boolean
  consentedAt: string | Date | number
  contactId?: string | null
  customAttributes?: NestedKeyValueObject | null
  projectId?: string | null
  projectName?: string | null
  url?: string | null
  urls?: string[] | null
}

export interface ContactMailingAddress {
  address: string
  city: string
  country: string
  postalOrZip: string
  provinceOrState: string
}

export interface ContactProjectCustomConsent {
  consentStatus: ConsentStatus
  consentedAt: string | Date | number
  contactId: string
  created?: string | Date | number | null
  customAttributes?: NestedKeyValueObject | null
  modified?: string | Date | number | null
  projectId: string
  url?: string | null
  urls: string[]
}

export interface ContactProjectDataConsent {
  consentStatus: ConsentStatus
  consentedAt: string | Date | number
  contactId: string
  created?: string | Date | number | null
  customAttributes?: NestedKeyValueObject | null
  modified?: string | Date | number | null
  projectId: string
  url?: string | null
  urls: string[]
}

export interface ContactProjectEmailConsent {
  accountId: string
  consentStatus: ConsentStatus
  consentedAt: string | Date | number
  contactId: string
  created?: string | Date | number | null
  customAttributes?: NestedKeyValueObject | null
  modified?: string | Date | number | null
  projectId: string
  url?: string | null
  urls: string[]
}

export interface ContactProjectSmsConsent {
  accountId: string
  consentStatus: ConsentStatus
  consentedAt: string | Date | number
  contactId: string
  created?: string | Date | number | null
  customAttributes?: NestedKeyValueObject | null
  modified?: string | Date | number | null
  projectId: string
  url?: string | null
  urls: string[]
}

export interface EmailInvitation {
  accountId: string
  created?: string | Date | number | null
  email: string
  expiresAt?: string | Date | number | null
  invitationId: string
  modified?: string | Date | number | null
}

export interface LastScan {
  assetId: string
  assetName: string
  browserName?: string | null
  browserVersion?: string | null
  cpuArchitecture?: string | null
  created?: string | Date | number | null
  deviceModel?: string | null
  deviceType?: string | null
  deviceVendor?: string | null
  engineName?: string | null
  engineVersion?: string | null
  ipAddress?: string | null
  locationCityName?: string | null
  locationCountryCode?: string | null
  locationCountryName?: string | null
  locationLatitude?: string | null
  locationLongitude?: string | null
  locationPostalCode?: string | null
  locationRegionCode?: string | null
  locationRegionName?: string | null
  locationTimeZone?: string | null
  modified?: string | Date | number | null
  osName?: string | null
  osVersion?: string | null
  projectId: string
  qrCodeId?: string | null
  scanId: string
  scanTime: string | Date | number
  userAgent?: string | null
}

export interface Location {
  accountId: string
  address?: string | null
  appAccountId?: string | null
  created?: string | Date | number | null
  customAttributes?: NestedKeyValueObject | null
  description?: string | null
  locationId: string
  modified?: string | Date | number | null
  name: string
}

export interface MostScannedAssetResponse {
  assetId?: string | null
  lastScanDate?: string | Date | number | null
  name: string
  projectId?: string | null
  todaysScansCount?: number | null
  totalScansCount?: number | null
  weeklyScansCount?: number | null
}

export interface NestedAsset {
  customAttributes?: NestedKeyValueObject | null
  description?: string | null
  name: string
  qrCodes?: NestedQrCode[] | null
}

export interface NestedContact {
  asset?: NestedAsset | null
  cellPhone?: string | null
  consent?: ContactConsent[] | null
  customAttributes?: NestedKeyValueObject | null
  emailAddress?: string | null
  firstName?: string | null
  lastName?: string | null
  mailingAddress?: ContactMailingAddress | null
  middleName?: string | null
  nickname?: string | null
  type?: string | null
}

export interface NestedQrCode {
  customQueryStringParameterName?: string
  dynamicRedirectType?: QrCodeDynamicRedirectType
  imageOptions?: QrCodeImageOptions
  intent?: string | null
  intentState?: NestedKeyValueObject | null
  intentType?: QrCodeIntentType
  locatorKeyType?: QrCodeLocatorKeyType
  status?: QrCodeStatus | null
  stylingTemplateId?: string | null
  validFrom?: string | Date | number | null
  validTo?: string | Date | number | null
}

export interface NestedTypedAsset {
  childAssets?: NestedKeyValueObject | null
  customAttributes?: NestedKeyValueObject | null
  description?: string | null
  locationId?: string | null
  name?: string | null
  qrCodes?: NestedQrCode[] | null
}

export interface NewAccountByAccountId {
  _GLOBAL: string
  _prefix?: string
  accountId: string
  created?: string | Date | number | null
  mainAccountId: string
  modified?: string | Date | number | null
}

export interface NewAccountByCompanyName {
  _GLOBAL: string
  _prefix?: string
  accountId: string
  companyName: string
  created?: string | Date | number | null
  mainAccountId: string
  modified?: string | Date | number | null
  timestamp: string | Date | number
}

export interface NewAccountByContactCount {
  _GLOBAL: string
  _prefix?: string
  accountId: string
  contactCount: number
  created?: string | Date | number | null
  mainAccountId: string
  modified?: string | Date | number | null
}

export interface NewAccountByUserCount {
  _GLOBAL: string
  _prefix?: string
  accountId: string
  created?: string | Date | number | null
  mainAccountId: string
  modified?: string | Date | number | null
  userCount: number
}

export interface NewAppByName {
  _GLOBAL: string
  _prefix?: string
  appId: string
  appName: string
  created?: string | Date | number | null
  modified?: string | Date | number | null
  ownerAccountId: string
  timestamp: string | Date | number
}

export interface NewAppByTimestamp {
  _GLOBAL: string
  _prefix?: string
  appId: string
  created?: string | Date | number | null
  modified?: string | Date | number | null
  ownerAccountId: string
  timestamp: string | Date | number
}

export interface NewAssetByAssetType {
  _prefix?: string
  accountId: string
  appAccountId?: string | null
  assetId: string
  assetTypeId?: string | null
  assetTypeName: string
  created?: string | Date | number | null
  locationId?: string | null
  modified?: string | Date | number | null
  projectId: string
  timestamp: string | Date | number
}

export interface NewAssetByName {
  _prefix?: string
  accountId: string
  appAccountId?: string | null
  assetId: string
  assetName: string
  assetTypeId?: string | null
  created?: string | Date | number | null
  locationId?: string | null
  modified?: string | Date | number | null
  projectId: string
  timestamp: string | Date | number
}

export interface NewAssetByQrCodeCount {
  _prefix?: string
  accountId: string
  appAccountId?: string | null
  assetId: string
  assetTypeId?: string | null
  created?: string | Date | number | null
  locationId?: string | null
  modified?: string | Date | number | null
  projectId: string
  qrCodeCount: number
}

export interface NewAssetByScanCount {
  _prefix?: string
  accountId: string
  appAccountId?: string | null
  assetId: string
  assetTypeId?: string | null
  created?: string | Date | number | null
  locationId?: string | null
  modified?: string | Date | number | null
  projectId: string
  scanCount: number
}

export interface NewAssetByTimestamp {
  _prefix?: string
  accountId: string
  appAccountId?: string | null
  assetId: string
  assetTypeId?: string | null
  created?: string | Date | number | null
  locationId?: string | null
  modified?: string | Date | number | null
  projectId: string
  timestamp: string | Date | number
}

export interface NewProjectByAssetCount {
  _prefix?: string
  accountId: string
  appAccountId?: string | null
  assetCount: number
  created?: string | Date | number | null
  modified?: string | Date | number | null
  projectId: string
}

export interface NewProjectByContactCount {
  _prefix?: string
  accountId: string
  appAccountId?: string | null
  contactCount: number
  created?: string | Date | number | null
  modified?: string | Date | number | null
  projectId: string
}

export interface NewProjectByName {
  _prefix?: string
  accountId: string
  appAccountId?: string | null
  created?: string | Date | number | null
  modified?: string | Date | number | null
  projectId: string
  projectName: string
  timestamp: string | Date | number
}

export interface NewProjectByQrCodeCount {
  _prefix?: string
  accountId: string
  appAccountId?: string | null
  created?: string | Date | number | null
  modified?: string | Date | number | null
  projectId: string
  qrCodeCount: number
}

export interface NewProjectByScanCount {
  _prefix?: string
  accountId: string
  appAccountId?: string | null
  created?: string | Date | number | null
  modified?: string | Date | number | null
  projectId: string
  scanCount: number
}

export interface NewProjectByTimestamp {
  _prefix?: string
  accountId: string
  appAccountId?: string | null
  created?: string | Date | number | null
  modified?: string | Date | number | null
  projectId: string
  timestamp: string | Date | number
}

export interface NewPublishedAppByName {
  _GLOBAL: string
  _prefix?: string
  appId: string
  appName: string
  created?: string | Date | number | null
  modified?: string | Date | number | null
  ownerAccountId: string
  timestamp: string | Date | number
}

export interface NewPublishedAppByTimestamp {
  _GLOBAL: string
  _prefix?: string
  appId: string
  created?: string | Date | number | null
  modified?: string | Date | number | null
  ownerAccountId: string
  timestamp: string | Date | number
}

export interface NewQrCodeByAssetName {
  _prefix?: string
  accountId: string
  appAccountId?: string | null
  assetId: string
  assetName: string
  created?: string | Date | number | null
  modified?: string | Date | number | null
  projectId: string
  qrCodeId: string
  timestamp: string | Date | number
}

export interface NewQrCodeByScanCount {
  _prefix?: string
  accountId: string
  appAccountId?: string | null
  assetId: string
  created?: string | Date | number | null
  modified?: string | Date | number | null
  projectId: string
  qrCodeId: string
  scanCount: number
}

export interface NewQrCodeByTimestamp {
  _prefix?: string
  accountId: string
  appAccountId?: string | null
  assetId: string
  created?: string | Date | number | null
  modified?: string | Date | number | null
  projectId: string
  qrCodeId: string
  timestamp: string | Date | number
}

export interface NewQrCodeLogoByTimestamp {
  _prefix?: string
  accountId: string
  appAccountId?: string | null
  created?: string | Date | number | null
  modified?: string | Date | number | null
  qrCodeLogoId: string
  timestamp: string | Date | number
}

export interface NewQrCodeStylingTemplateByName {
  _prefix?: string
  accountId: string
  appAccountId?: string | null
  created?: string | Date | number | null
  modified?: string | Date | number | null
  stylingTemplateId: string
  stylingTemplateName: string
  timestamp: string | Date | number
}

export interface NewQrCodeStylingTemplateByTimestamp {
  _prefix?: string
  accountId: string
  appAccountId?: string | null
  created?: string | Date | number | null
  modified?: string | Date | number | null
  stylingTemplateId: string
  timestamp: string | Date | number
}

export interface NewScanByAssetName {
  _prefix?: string
  accountId: string
  appAccountId?: string | null
  assetId: string
  assetName: string
  contactId?: string | null
  created?: string | Date | number | null
  modified?: string | Date | number | null
  projectId: string
  scanId: string
  timestamp: string | Date | number
}

export interface NewScanByTimestamp {
  _prefix?: string
  accountId: string
  appAccountId?: string | null
  assetId: string
  contactId?: string | null
  created?: string | Date | number | null
  modified?: string | Date | number | null
  projectId: string
  scanId: string
  timestamp: string | Date | number
}

export interface PatchApp {
  appDetailMedia?: string[] | null
  appPrice?: number | null
  appStoreThumbnail?: string | null
  appWebhook?: string | null
  categories?: Array<any> | null
  created?: string | Date | number | null
  description?: string | null
  featured?: boolean | null
  features?: string | null
  heroImage?: string | null
  isPublished?: boolean | null
  keywords?: Array<any> | null
  logo?: string | null
  modified?: string | Date | number | null
  pricePlanPoints?: Array<any> | null
  tagline?: string | null
  uiUrl?: string | null
  website?: string | null
}

export interface PhoneSession {
  contactId: string
  contactPhone: string
  created?: string | Date | number | null
  expiresAt?: string | Date | number | null
  modified?: string | Date | number | null
  smsId: string
  twilioPhone: string
}

export interface PricePlan {
  annualPrice: number
  assets: number
  contacts: number
  created?: string | Date | number | null
  dataExport: boolean
  emails: number
  mms: number
  modified?: string | Date | number | null
  monthlyPrice: number
  name: string
  paymentPeriod?: string | null
  pricePerAsset: number
  pricePerContact: number
  pricePerEmail: number
  pricePerSMS: number
  pricePlanId: string
  projects: number
  qrCodes: number
  reporting?: PricePlanReporting
  roleBasedManagement: boolean
  sms: number
  stripeCustomerId: string
  stripeSubscriptionId: string
  totalScans: number
  users: number
}

export interface PricePlanPeriod {
  assetsLimit?: number | null
  assetsTotal: number
  contactsLimit?: number | null
  contactsTotal: number
  created?: string | Date | number | null
  emailsLimit?: number | null
  emailsSentThisPeriod?: number | null
  emailsTotal: number
  invoiceId?: string | null
  mmsLimit?: number | null
  mmsSentThisPeriod?: number | null
  mmsTotal: number
  modified?: string | Date | number | null
  period: string | Date | number
  periodEndDate: string | Date | number
  pricePlanId: string
  projectsLimit?: number | null
  projectsTotal: number
  qrCodesLimit?: number | null
  qrCodesTotal: number
  qrScansLimit?: number | null
  scansUsedTotal: number
  smsLimit?: number | null
  smsSentThisPeriod?: number | null
  smsTotal: number
  usersLimit?: number | null
  usersTotal: number
}

export interface Project {
  accountId: string
  appAccountId?: string | null
  appId?: string | null
  assetCount: number
  companyName?: string | null
  contactCount: number
  created?: string | Date | number | null
  description?: string | null
  dynamicQrCodeCount: number
  lastScanId?: string | null
  modified?: string | Date | number | null
  name: string
  projectId: string
  scanCount: number
  staticQrCodeCount: number
  status?: ProjectStatus
}

export interface ProjectAccount {
  accountId: string
  created?: string | Date | number | null
  modified?: string | Date | number | null
  projectId: string
}

export interface ProjectContact {
  contactId: string
  created?: string | Date | number | null
  modified?: string | Date | number | null
  projectId: string
}

export interface ProjectEmailContact {
  contactId: string
  created?: string | Date | number | null
  email: string
  modified?: string | Date | number | null
  projectId: string
}

export interface ProjectPhoneContact {
  contactId: string
  created?: string | Date | number | null
  modified?: string | Date | number | null
  phone: string
  projectId: string
}

export interface ProjectScan {
  assetId: string
  created?: string | Date | number | null
  modified?: string | Date | number | null
  projectId: string
  scanId: string
}

export interface PublishedAppByName {
  appId: string
  appName: string
  created?: string | Date | number | null
  modified?: string | Date | number | null
}

export interface PublishedAppByTimestamp {
  appId: string
  appName: string
  created?: string | Date | number | null
  modified?: string | Date | number | null
  timestamp: string | Date | number
}

export interface QrCode {
  appAccountId?: string | null
  appId?: string | null
  assetId: string
  created?: string | Date | number | null
  customQueryStringParameterName?: string
  dynamicRedirectType?: QrCodeDynamicRedirectType
  imageOptions?: QrCodeImageOptions
  intent?: string | null
  intentState?: NestedKeyValueObject | null
  intentType?: QrCodeIntentType
  locatorKey: string
  locatorKeyType?: QrCodeLocatorKeyType
  modified?: string | Date | number | null
  name: string
  projectId?: string | null
  qrCodeId: string
  qrDomain?: string | null
  scanCount: number
  status?: QrCodeStatus
  stylingTemplateId?: string | null
  validFrom?: string | Date | number | null
  validTo?: string | Date | number | null
}

export interface QrCodeImage {
  data: string
  options?: QrCodeImageOptions
}

export interface QrCodeImageOptions {
  background?: string
  backgroundGradientColors?: string | null
  backgroundGradientRotation?: number | null
  backgroundGradientType?: QrCodeGradientTypes | null
  cornerDotColor?: string | null
  cornerDotType?: QrCodeCornerDotTypes | null
  cornerSquareColor?: string | null
  cornerSquareType?: QrCodeCornerSquareTypes | null
  darkColor?: string | null
  dataUrl: boolean
  dotType?: QrCodeDotTypes | null
  errorCorrectionLevel?: QrCodeErrorCorrectionLevel
  foreground?: string
  foregroundGradientColors?: string | null
  foregroundGradientRotation?: number | null
  foregroundGradientType?: QrCodeGradientTypes | null
  format?: QrCodeType
  lightColor?: string | null
  logo?: string | null
  logoMargin?: number
  margin?: number
  qrCodeLogoId?: string | null
  saveAsBlob?: boolean | null
  scale?: number
  version?: number | null
  width?: number
}

export interface QrCodeImageOptionsNoDefaults {
  background?: string | null
  backgroundGradientColors?: string | null
  backgroundGradientRotation?: number | null
  backgroundGradientType?: QrCodeGradientTypes | null
  cornerDotColor?: string | null
  cornerDotType?: QrCodeCornerDotTypes | null
  cornerSquareColor?: string | null
  cornerSquareType?: QrCodeCornerSquareTypes | null
  darkColor?: string | null
  dataUrl?: boolean | null
  dotType?: QrCodeDotTypes | null
  errorCorrectionLevel?: QrCodeErrorCorrectionLevel | null
  foreground?: string | null
  foregroundGradientColors?: string | null
  foregroundGradientRotation?: number | null
  foregroundGradientType?: QrCodeGradientTypes | null
  format?: QrCodeType | null
  lightColor?: string | null
  logo?: string | null
  logoMargin?: number | null
  margin?: number | null
  qrCodeLogoId?: string | null
  saveAsBlob?: boolean | null
  scale?: number | null
  version?: number | null
  width?: number | null
}

export interface QrCodeLocator {
  created?: string | Date | number | null
  locatorKey: string
  modified?: string | Date | number | null
  qrCodeId: string
}

export interface QrCodeLogo {
  accountId: string
  created?: string | Date | number | null
  createdBy: string
  hidden: boolean
  lastModifiedBy: string
  modified?: string | Date | number | null
  qrCodeLogoId: string
  s3Key: string
  url: string
}

export interface QrCodeStylingTemplate {
  accountId: string
  created?: string | Date | number | null
  createdBy: string
  hidden?: boolean | null
  imageOptions?: QrCodeImageOptions
  lastModifiedBy: string
  modified?: string | Date | number | null
  name: string
  projectId?: string | null
  qrCodeLogo?: QrCodeLogo | null
  stylingTemplateId: string
}

export interface RequestApp {
  appDetailMedia?: string[] | null
  appName: string
  appPrice: number
  appStoreThumbnail?: string | null
  appWebhook?: string | null
  categories?: Array<any> | null
  created?: string | Date | number | null
  description?: string | null
  featured: boolean
  features?: string | null
  heroImage?: string | null
  isPublished: boolean
  keywords?: Array<any> | null
  logo?: string | null
  modified?: string | Date | number | null
  pricePlanPoints?: Array<any> | null
  tagline?: string | null
  uiUrl: string
  website?: string | null
}

export interface RequestQrCode {
  customQueryStringParameterName?: string
  dynamicRedirectType?: QrCodeDynamicRedirectType
  imageOptions?: QrCodeImageOptions
  intent?: string | null
  intentState?: NestedKeyValueObject | null
  intentType?: QrCodeIntentType
  locatorKeyType?: QrCodeLocatorKeyType
  status?: QrCodeStatus | null
  stylingTemplateId?: string | null
  useCustomDomain: boolean
  validFrom?: string | Date | number | null
  validTo?: string | Date | number | null
}

export interface ResponseAsset {
  appAccountId?: string | null
  appId?: string | null
  assetId: string
  assetTypeId?: string | null
  category?: string | null
  childAssets?: NestedKeyValueObject | null
  created?: string | Date | number | null
  customAttributes?: NestedKeyValueObject | null
  description?: string | null
  isValidChildAssets?: boolean | null
  isValidCustomAttributes?: boolean | null
  lastScan?: LastScan | null
  locationId?: string | null
  modified?: string | Date | number | null
  name: string
  parentAssetId?: string | null
  projectId: string
  projectName?: string | null
  qrCodes?: ResponseQrCode[] | null
  scanCount: number
}

export interface ResponseBodyUser {
  created: string | Date | number
  email: string
  expiresAt?: string | Date | number | null
  firstName: string
  invitationId?: string | null
  lastName: string
  middleName: string
  userId?: string | null
  userRole: AccountUserRole
}

export interface ResponseQrCode {
  appAccountId?: string | null
  appId?: string | null
  assetId: string
  created?: string | Date | number | null
  dynamicRedirectType?: QrCodeDynamicRedirectType
  image: QrCodeImage
  intent?: string | null
  intentState?: NestedKeyValueObject | null
  intentType?: QrCodeIntentType
  locatorKey: string
  locatorKeyType?: QrCodeLocatorKeyType
  modified?: string | Date | number | null
  name?: string | null
  projectId?: string | null
  qrCodeId: string
  scanCount: number
  status?: QrCodeStatus
  stylingTemplateId?: string | null
  validFrom?: string | Date | number | null
  validTo?: string | Date | number | null
}

export interface Scan {
  assetId: string
  assetName: string
  browserName?: string | null
  browserVersion?: string | null
  cpuArchitecture?: string | null
  created?: string | Date | number | null
  deviceModel?: string | null
  deviceType?: string | null
  deviceVendor?: string | null
  engineName?: string | null
  engineVersion?: string | null
  ipAddress?: string | null
  locationCityName?: string | null
  locationCountryCode?: string | null
  locationCountryName?: string | null
  locationLatitude?: string | null
  locationLongitude?: string | null
  locationPostalCode?: string | null
  locationRegionCode?: string | null
  locationRegionName?: string | null
  locationTimeZone?: string | null
  modified?: string | Date | number | null
  osName?: string | null
  osVersion?: string | null
  projectId: string
  qrCodeId?: string | null
  scanId: string
  scanTime: string | Date | number
  userAgent?: string | null
}

export interface ScanContact {
  assetId: string
  assetName: string
  contactId: string
  created?: string | Date | number | null
  modified?: string | Date | number | null
  projectId: string
  scanId: string
}

export interface Sms {
  body: string
  contactId: string
  created?: string | Date | number | null
  delivered?: boolean | null
  deliveredAt?: string | Date | number | null
  from: string
  inbound: boolean
  modified?: string | Date | number | null
  price?: number | null
  priceUnit: string
  projectId: string
  responses?: SmsResponse[] | null
  smsId: string
  smsTemplateName?: string | null
  status?: string | null
  to: string
}

export interface SmsResponse {
  body: string
  contactPhone: string
  smsId: string
  twilioPhone: string
}

export interface SmsTemplate {
  body?: string | null
  created?: string | Date | number | null
  modified?: string | Date | number | null
  projectId: string
  responseUrl?: string | null
  smsTemplateName: string
  statusUrl?: string | null
}

export interface SuspendedAccount {
  created?: string | Date | number | null
  isLocked: boolean
  modified?: string | Date | number | null
  paymentFailDate: string | Date | number
  suspendedAccount: string
}

export interface User {
  created?: string | Date | number | null
  email: string
  firstName: string
  lastName: string
  middleName: string
  modified?: string | Date | number | null
  userId: string
}

export interface UserSessionResponseBody {
  expires: string | Date | number
  scope: AuthTokenScope
  user?: User | null
  userId: string
}

export interface UserSettings {
  created?: string | Date | number | null
  lastSelectedAccountId?: string | null
  modified?: string | Date | number | null
  path: UserSettingsDomain
  userId: string
}

// HANDLER INTERFACE TYPES

export interface CreateAssetTypeByAccountIdPathParameters {
  accountId: string
}

export interface CreateAssetTypeByAccountIdRequestBody {
  category?: string | null
  childItems?: NestedKeyValueObject | null
  customAttributes?: NestedKeyValueObject | null
  description?: string | null
  instanceProperties?: NestedKeyValueObject | null
  intent: string
  name: string
  staticProperties?: NestedKeyValueObject | null
  usabilityState?: AssetTypeUsabilityState | null
}

export interface CreateAssetTypeByAccountIdResponseBody {
  accountId: string
  assetType: AssetType
}

export interface CreateLocationByAccountIdPathParameters {
  accountId: string
}

export interface CreateLocationByAccountIdRequestBody {
  address?: string | null
  customAttributes?: NestedKeyValueObject | null
  description?: string | null
  name: string
}

export interface CreateLocationByAccountIdResponseBody {
  accountId: string
  location: Location
}

export interface CreateProjectByAccountIdPathParameters {
  accountId: string
}

export interface CreateProjectByAccountIdRequestBody {
  companyName?: string | null
  description?: string | null
  name: string
}

export interface CreateProjectByAccountIdResponseBody {
  accountId: string
  project: Project
}

export interface CreateQrCodeLogoByAccountPathParameters {
  accountId: string
}

export interface CreateQrCodeLogoByAccountRequestBody {
  logoContentType: string
}

export interface CreateQrCodeLogoByAccountResponseBody {
  presignedUrl: string
  qrCodeLogo: QrCodeLogo
}

export interface CreateQrCodeStylingTemplateByAccountPathParameters {
  accountId: string
}

export interface CreateQrCodeStylingTemplateByAccountRequestBody {
  imageOptions?: QrCodeImageOptions
  name: string
  projectId?: string | null
}

export interface CreateQrCodeStylingTemplateByAccountResponseBody {
  accountId: string
  qrCodeStylingTemplate: QrCodeStylingTemplate
}

export interface DeleteContactsByAccountIdPathParameters {
  accountId: string
}

export interface DeleteContactsByAccountIdQueryStringParameters {
  cellPhone?: string | null
  emailAddress?: string | null
}

export interface DeleteContactsByAccountIdResponseBody {
  accountId: string
  contacts: Contact[]
}

export interface GetAssetTypesByAccountIdPathParameters {
  accountId: string
}

export interface GetAssetTypesByAccountIdQueryStringParameters {
  ascending?: boolean | null
  lastKey?: string | null
  limit?: number | null
  locationId?: string | null
  name?: string | null
  sortField?: AssetTypeSortingTypes | null
  usabilityState?: AssetTypeUsabilityState | null
}

export interface GetAssetTypesByAccountIdResponseBody {
  accountId: string
  assetTypes: AssetType[]
  assetTypesByLocation?: AssetTypeByLocation[] | null
  lastKey?: string | null
  numberOfAssetTypes: number
}

export interface GetAssetsByAccountIdPathParameters {
  accountId: string
}

export interface GetAssetsByAccountIdQueryStringParameters {
  ascending?: boolean | null
  lastKey?: string | null
  limit?: number | null
  name?: string | null
  sortField?: AssetSortingTypes | null
}

export interface GetAssetsByAccountIdResponseBody {
  accountId: string
  assets: Asset[]
  lastKey?: string | null
  numberOfAssets: number
}

export interface GetConsentByAccountIdPathParameters {
  accountId: string
}

export interface GetConsentByAccountIdQueryStringParameters {
  consentStatus?: ConsentStatus
  consentType: ConsentType
  lastKey?: string | null
  limit?: number | null
}

export interface GetConsentByAccountIdResponseBody {
  accountId: string
  consent: ContactConsent[]
  lastKey?: string | null
}

export interface GetContactsByAccountIdPathParameters {
  accountId: string
}

export interface GetContactsByAccountIdQueryStringParameters {
  ascending?: boolean | null
  assetName?: string | null
  contactName?: string | null
  email?: string | null
  lastKey?: string | null
  limit?: number | null
  phone?: string | null
  sortField?: ContactSortingTypes | null
}

export interface GetContactsByAccountIdResponseBody {
  accountId: string
  contacts: Contact[]
  lastKey?: string | null
  numberOfContacts: number
}

export interface GetLocationsByAccountIdPathParameters {
  accountId: string
}

export interface GetLocationsByAccountIdQueryStringParameters {
  ascending?: boolean | null
  lastKey?: string | null
  limit?: number | null
  name?: string | null
}

export interface GetLocationsByAccountIdResponseBody {
  accountId: string
  lastKey?: string | null
  locations: Location[]
  numberOfLocations: number
}

export interface GetProjectsByAccountIdPathParameters {
  accountId: string
}

export interface GetProjectsByAccountIdQueryStringParameters {
  ascending?: boolean | null
  lastKey?: string | null
  limit?: number | null
  name?: string | null
  sortField?: ProjectSortingTypes | null
}

export interface GetProjectsByAccountIdResponseBody {
  accountId: string
  lastKey?: string | null
  numberOfProjects: number
  projects: Project[]
}

export interface GetQrCodeLogosByAccountIdPathParameters {
  accountId: string
}

export interface GetQrCodeLogosByAccountIdQueryStringParameters {
  ascending?: boolean | null
  lastKey?: string | null
  limit?: number | null
}

export interface GetQrCodeLogosByAccountIdResponseBody {
  accountId: string
  lastKey?: string | null
  numberOfQrCodeLogos: number
  qrCodeLogos: QrCodeLogo[]
}

export interface GetQrCodeStylingTemplatesByAccountIdPathParameters {
  accountId: string
}

export interface GetQrCodeStylingTemplatesByAccountIdQueryStringParameters {
  ascending?: boolean | null
  lastKey?: string | null
  limit?: number | null
  stylingTemplateName?: string | null
}

export interface GetQrCodeStylingTemplatesByAccountIdResponseBody {
  accountId: string
  numberOfQrCodeStylingTemplates: number
  qrCodeStylingTemplates: QrCodeStylingTemplate[]
}

export interface GetQrCodesByAccountIdPathParameters {
  accountId: string
}

export interface GetQrCodesByAccountIdQueryStringParameters {
  ascending?: boolean | null
  assetName?: string | null
  lastKey?: string | null
  limit?: number | null
  sortField?: QrCodeSortingTypes | null
}

export interface GetQrCodesByAccountIdResponseBody {
  accountId: string
  lastKey?: string | null
  numberOfQrCodes: number
  qrCodes: QrCode[]
}

export interface GetScansByAccountIdPathParameters {
  accountId: string
}

export interface GetScansByAccountIdQueryStringParameters {
  ascending?: boolean | null
  assetName?: string | null
  contactId?: string | null
  lastKey?: string | null
  limit?: number | null
}

export interface GetScansByAccountIdResponseBody {
  accountId: string
  lastKey?: string | null
  numberOfScans: number
  scans: Scan[]
}

export interface UploadQrCodeLogoByAccountPathParameters {
  accountId: string
}

export interface UploadQrCodeLogoByAccountRequestBody {
  logo: string
}

export interface UploadQrCodeLogoByAccountResponseBody {
  qrCodeLogoId: string
  qrCodeLogoUrl: string
}

export interface ComposeAssetByAssetTypePathParameters {
  assetId: string
  assetTypeId: string
}

export interface ComposeAssetByAssetTypeRequestBody {
  category: string
  childItems?: NestedKeyValueObject | null
  customAttributes?: NestedKeyValueObject | null
  description?: string | null
  instanceProperties?: NestedKeyValueObject | null
  locationId?: string | null
  name?: string | null
  staticProperties?: NestedKeyValueObject | null
  totalCount: number
  usabilityState?: AssetTypeUsabilityState | null
}

export interface ComposeAssetByAssetTypeResponseBody {
  asset: Asset
  assetId: string
}

export interface CreateAssetByAssetTypePathParameters {
  assetTypeId: string
}

export interface CreateAssetByAssetTypeRequestBody {
  asset: NestedTypedAsset
  projectId: string
  stylingTemplateId?: string | null
}

export interface CreateAssetByAssetTypeResponseBody {
  asset: ResponseAsset
  assetId: string
  assetType: AssetType
}

export interface GetAssetTypeByAssetTypeIdPathParameters {
  assetTypeId: string
}

export interface GetAssetTypeByAssetTypeIdQueryStringParameters {}

export interface GetAssetTypeByAssetTypeIdResponseBody {
  assetType: AssetType
}

export interface GetAssetsByAssetTypePathParameters {
  assetTypeId: string
}

export interface GetAssetsByAssetTypeQueryStringParameters {
  ascending?: boolean | null
  lastKey?: string | null
  limit?: number | null
  name?: string | null
  sortField?: AssetByAssetTypeSortingTypes | null
}

export interface GetAssetsByAssetTypeResponseBody {
  assetTypeId: string
  assets: Asset[]
  lastKey?: string | null
  numberOfAssets: number
}

export interface GetAssetTypeCountsByLocationPathParameters {
  assetTypeId: string
}

export interface GetAssetTypeCountsByLocationQueryStringParameters {
  ascending?: boolean | null
  lastKey?: string | null
  limit?: number | null
}

export interface GetAssetTypeCountsByLocationResponseBody {
  assetType: AssetType
  assetTypesByLocation: AssetTypeByLocation[]
  count: number
  lastKey?: string | null
}

export interface UpdateAssetTypePathParameters {
  assetTypeId: string
}

export interface UpdateAssetTypeRequestBody {
  category?: string | null
  childItems?: NestedKeyValueObject | null
  customAttributes?: NestedKeyValueObject | null
  description?: string | null
  instanceProperties?: NestedKeyValueObject | null
  intent?: string | null
  name?: string | null
  staticProperties?: NestedKeyValueObject | null
  usabilityState?: AssetTypeUsabilityState | null
}

export interface UpdateAssetTypeResponseBody {
  assetType: AssetType
  assetTypeId: string
}

export interface CreateContactByAssetIdPathParameters {
  assetId: string
}

export interface CreateContactByAssetIdRequestBody {
  cellPhone?: string | null
  consent?: ContactConsent[] | null
  customAttributes?: NestedKeyValueObject | null
  emailAddress?: string | null
  firstName?: string | null
  lastName?: string | null
  mailingAddress?: ContactMailingAddress | null
  middleName?: string | null
  nickname?: string | null
  type?: string | null
}

export interface CreateContactByAssetIdResponseBody {
  asset: Asset
  assetContact: AssetContact
  assetId: string
  contact: Contact
  projectContact: ProjectContact
}

export interface CreateQrCodeByAssetIdPathParameters {
  assetId: string
}

export interface CreateQrCodeByAssetIdRequestBody extends RequestQrCode {
  customQueryStringParameterName?: string
  dynamicRedirectType?: QrCodeDynamicRedirectType
  imageOptions?: QrCodeImageOptions
  intent?: string | null
  intentState?: NestedKeyValueObject | null
  intentType?: QrCodeIntentType
  locatorKeyType?: QrCodeLocatorKeyType
  qrCodes?: RequestQrCode[]
  status?: QrCodeStatus | null
  stylingTemplateId?: string | null
  useCustomDomain: boolean
  validFrom?: string | Date | number | null
  validTo?: string | Date | number | null
}

export interface CreateQrCodeByAssetIdResponseBody {
  asset: Asset
  assetId: string
  locatorKey: string
  qrCode: ResponseQrCode
  qrCodeId: string
}

export interface CreateQrCodesByAssetIdPathParameters {
  assetId: string
}

export interface CreateQrCodesByAssetIdRequestBody {
  qrCodes?: RequestQrCode[]
}

export interface CreateQrCodesByAssetIdResponseBody {
  asset: Asset
  assetId: string
  locatorKeys: QrCodeLocator[]
  qrCodes: ResponseQrCode[]
}

export interface DeleteAssetPathParameters {
  assetId: string
}

export interface DeleteAssetResponseBody {
  asset: Asset
}

export interface GetAssetPathParameters {
  assetId: string
}

export interface GetAssetQueryStringParameters {
  background?: string | null
  backgroundGradientColors?: string | null
  backgroundGradientRotation?: number | null
  backgroundGradientType?: QrCodeGradientTypes | null
  cornerDotColor?: string | null
  cornerDotType?: QrCodeCornerDotTypes | null
  cornerSquareColor?: string | null
  cornerSquareType?: QrCodeCornerSquareTypes | null
  darkColor?: string | null
  dataUrl?: boolean | null
  dotType?: QrCodeDotTypes | null
  errorCorrectionLevel?: QrCodeErrorCorrectionLevel | null
  foreground?: string | null
  foregroundGradientColors?: string | null
  foregroundGradientRotation?: number | null
  foregroundGradientType?: QrCodeGradientTypes | null
  format?: QrCodeType | null
  lightColor?: string | null
  logo?: string | null
  logoMargin?: number | null
  margin?: number | null
  qrCodeLogoId?: string | null
  saveAsBlob?: boolean | null
  scale?: number | null
  stylingTemplateId?: string | null
  version?: number | null
  width?: number | null
}

export interface GetAssetResponseBody {
  asset: ResponseAsset
  assetId: string
}

export interface GetAssetHistoryPathParameters {
  assetId: string
}

export interface GetAssetHistoryQueryStringParameters {
  ascending?: boolean | null
  at?: string | Date | number | null
  from?: string | Date | number | null
  limit?: number | null
  to?: string | Date | number | null
}

export interface GetAssetHistoryResponseBody {
  assetId: string
  history: Asset[]
  numberOfRecords: number
}

export interface GetContactsByAssetIdPathParameters {
  assetId: string
}

export interface GetContactsByAssetIdQueryStringParameters {
  ascending?: boolean | null
  lastKey?: string | null
  limit?: number | null
  sortField?: ContactAssetSortingTypes | null
}

export interface GetContactsByAssetIdResponseBody {
  assetContacts: AssetContact[]
  assetId: string
  contacts: Contact[]
  lastKey?: string | null
  numberOfContacts: number
}

export interface GetQrCodesByAssetIdPathParameters {
  assetId: string
}

export interface GetQrCodesByAssetIdQueryStringParameters {
  ascending?: boolean | null
  background?: string | null
  backgroundGradientColors?: string | null
  backgroundGradientRotation?: number | null
  backgroundGradientType?: QrCodeGradientTypes | null
  cornerDotColor?: string | null
  cornerDotType?: QrCodeCornerDotTypes | null
  cornerSquareColor?: string | null
  cornerSquareType?: QrCodeCornerSquareTypes | null
  darkColor?: string | null
  dataUrl?: boolean | null
  dotType?: QrCodeDotTypes | null
  errorCorrectionLevel?: QrCodeErrorCorrectionLevel | null
  foreground?: string | null
  foregroundGradientColors?: string | null
  foregroundGradientRotation?: number | null
  foregroundGradientType?: QrCodeGradientTypes | null
  format?: QrCodeType | null
  lastKey?: string | null
  lightColor?: string | null
  limit?: number | null
  logo?: string | null
  logoMargin?: number | null
  margin?: number | null
  qrCodeLogoId?: string | null
  saveAsBlob?: boolean | null
  scale?: number | null
  sortField?: QrCodeSortingTypes | null
  stylingTemplateId?: string | null
  version?: number | null
  width?: number | null
}

export interface GetQrCodesByAssetIdResponseBody {
  assetId: string
  lastKey?: string | null
  numberOfQrCodes: number
  qrCodes: ResponseQrCode[]
}

export interface GetScansByAssetIdPathParameters {
  assetId: string
}

export interface GetScansByAssetIdQueryStringParameters {
  ascending?: boolean
  lastKey?: string | null
  limit?: number | null
}

export interface GetScansByAssetIdResponseBody {
  assetId: string
  lastKey?: string | null
  numberOfScans: number
  scans: Scan[]
}

export interface LinkContactToAssetPathParameters {
  assetId: string
  contactId: string
}

export interface LinkContactToAssetRequestBody {
  type?: string | null
}

export interface LinkContactToAssetResponseBody {
  assetContact: AssetContact
  projectContact: ProjectContact
}

export interface UnlinkContactToAssetPathParameters {
  assetId: string
  contactId: string
}

export interface UpdateAssetPathParameters {
  assetId: string
}

export interface UpdateAssetRequestBody {
  assetTypeId?: string | null
  category?: string | null
  customAttributes?: NestedKeyValueObject | null
  description?: string | null
  locationId?: string | null
  name?: string | null
  parentAssetId?: string | null
}

export interface UpdateAssetResponseBody {
  asset: Asset
  assetId: string
  assetType?: AssetType | null
  location?: Location | null
}

export interface CreateConsentByContactIdPathParameters {
  contactId: string
}

export interface CreateConsentByContactIdRequestBody {
  consentStatus?: ConsentStatus
  consentType: ConsentType
  consentedAt: string | Date | number
  projectId?: string | null
  url?: string | null
  urls?: string[]
}

export interface CreateConsentByContactIdResponseBody {
  consent: ContactConsent
  contactId: string
}

export interface DeleteConsentByContactIdPathParameters {
  contactId: string
}

export interface DeleteConsentByContactIdQueryStringParameters {
  consentStatus?: ConsentStatus
  consentType: ConsentType
  projectId?: string | null
}

export interface DeleteConsentByContactIdResponseBody {
  consent: ContactConsent
  contactId: string
}

export interface DeleteContactPathParameters {
  contactId: string
}

export interface DeleteContactResponseBody {
  contact: Contact
}

export interface GetConsentByContactIdPathParameters {
  contactId: string
}

export interface GetConsentByContactIdQueryStringParameters {
  consentStatus?: ConsentStatus
  consentType?: ConsentType | null
  lastKey?: string | null
  limit?: number | null
  projectId?: string | null
}

export interface GetConsentByContactIdResponseBody {
  consent: ContactConsent[]
  contactId: string
  lastKey?: string | null
}

export interface GetContactPathParameters {
  contactId: string
}

export interface GetContactResponseBody {
  contact: Contact
}

export interface GetContactExportByContactIdPathParameters {
  contactId: string
}

export interface GetContactExportByContactIdQueryStringParameters {
  format?: string
}

export interface GetContactExportByContactIdResponseBody {
  fileName: string
}

export interface GetScansByContactIdPathParameters {
  contactId: string
}

export interface GetScansByContactIdResponseBody {
  scans: Scan[]
}

export interface LinkContactToScanPathParameters {
  contactId: string
  scanId: string
}

export interface LinkContactToScanResponseBody extends ScanContact {
  assetId: string
  assetName: string
  contactId: string
  created?: string | Date | number | null
  modified?: string | Date | number | null
  projectId: string
  scanId: string
}

export interface UpdateContactPathParameters {
  contactId: string
}

export interface UpdateContactRequestBody {
  cellPhone?: string | null
  consent?: ContactConsent[] | null
  customAttributes?: NestedKeyValueObject | null
  emailAddress?: string | null
  firstName?: string | null
  lastName?: string | null
  mailingAddress?: ContactMailingAddress | null
  middleName?: string | null
  nickname?: string | null
}

export interface UpdateContactResponseBody {
  contact: Contact
  contactId: string
}

export interface UpdateAssetsLocationsPathParameters {
  locationId: string
}

export interface UpdateAssetsLocationsRequestBody {
  assetIds: Array<any>
}

export interface UpdateAssetsLocationsResponseBody {
  assets: Asset
}

export interface GetAssetTypeCountAtLocationPathParameters {
  assetTypeId: string
  locationId: string
}

export interface GetAssetTypeCountAtLocationResponseBody {
  assetType: AssetType
  assetTypeByLocation: AssetTypeByLocation
}

export interface GetAssetsByLocationIdPathParameters {
  locationId: string
}

export interface GetAssetsByLocationIdQueryStringParameters {
  ascending?: boolean | null
  lastKey?: string | null
  limit?: number | null
  name?: string | null
  sortField?: AssetSortingTypes | null
}

export interface GetAssetsByLocationIdResponseBody {
  assets: Asset[]
  lastKey?: string | null
  locationId: string
  numberOfAssets: number
}

export interface UpdateAssetTypeCountAtLocationPathParameters {
  assetTypeId: string
  locationId: string
}

export interface UpdateAssetTypeCountAtLocationRequestBody {
  count: number
  isDelta: boolean
}

export interface UpdateAssetTypeCountAtLocationResponseBody {
  assetType: AssetType
  assetTypeByLocation: AssetTypeByLocation
}

export interface UpdateLocationPathParameters {
  locationId: string
}

export interface UpdateLocationRequestBody {
  address?: string | null
  customAttributes?: NestedKeyValueObject | null
  description?: string | null
  name?: string | null
}

export interface UpdateLocationResponseBody {
  location: Location
}

export interface CreateAssetByProjectIdPathParameters {
  projectId: string
}

export interface CreateAssetByProjectIdRequestBody extends NestedAsset {
  customAttributes?: NestedKeyValueObject | null
  description?: string | null
  name: string
  qrCodes?: NestedQrCode[] | null
  useCustomDomain: boolean
}

export interface CreateAssetByProjectIdResponseBody {
  asset: ResponseAsset
  projectId: string
}

export interface CreateAssetsByProjectIdPathParameters {
  projectId: string
}

export interface CreateAssetsByProjectIdRequestBody {
  assets: NestedAsset[]
  useCustomDomain: boolean
}

export interface CreateAssetsByProjectIdResponseBody {
  assets: ResponseAsset[]
  numberOfAssets: number
  projectId: string
}

export interface CreateContactByProjectIdPathParameters {
  projectId: string
}

export interface CreateContactByProjectIdRequestBody {
  asset?: NestedAsset | null
  cellPhone?: string | null
  consent?: ContactConsent[] | null
  customAttributes?: NestedKeyValueObject | null
  emailAddress?: string | null
  firstName?: string | null
  lastName?: string | null
  mailingAddress?: ContactMailingAddress | null
  middleName?: string | null
  nickname?: string | null
  type?: string | null
}

export interface CreateContactByProjectIdResponseBody {
  asset?: Asset | null
  assetContact?: AssetContact | null
  contact: Contact
  projectContact: ProjectContact
  projectId: string
  qrCodes?: QrCode[] | null
}

export interface CreateContactsByProjectIdPathParameters {
  projectId: string
}

export interface CreateContactsByProjectIdRequestBody {
  contacts: NestedContact[]
}

export interface CreateContactsByProjectIdResponseBody {
  contacts: Array<any>
  numberOfContacts: number
  projectId: string
}

export interface CreateSmsTemplateByProjectIdPathParameters {
  projectId: string
}

export interface CreateSmsTemplateByProjectIdRequestBody {
  body?: string | null
  responseUrl?: string | null
  smsTemplateName: string
  statusUrl?: string | null
}

export interface CreateSmsTemplateByProjectIdResponseBody {
  smsTemplate: SmsTemplate
}

export interface DeleteContactsByProjectIdPathParameters {
  projectId: string
}

export interface DeleteContactsByProjectIdQueryStringParameters {
  cellPhone?: string | null
  emailAddress?: string | null
}

export interface DeleteContactsByProjectIdResponseBody {
  contacts: Contact[]
  projectId: string
}

export interface DeleteProjectPathParameters {
  projectId: string
}

export interface DeleteProjectResponseBody {
  project: Project
}

export interface DeleteSmsTemplateByProjectIdPathParameters {
  projectId: string
  smsTemplateName: string
}

export interface DeleteSmsTemplateByProjectIdResponseBody {
  body?: string | null
  projectId: string
  responseUrl?: string | null
  smsTemplateName?: string | null
  statusUrl?: string | null
}

export interface GetAssetsByProjectIdPathParameters {
  projectId: string
}

export interface GetAssetsByProjectIdQueryStringParameters {
  ascending?: boolean | null
  lastKey?: string | null
  limit?: number | null
  name?: string | null
  sortField?: AssetSortingTypes | null
}

export interface GetAssetsByProjectIdResponseBody {
  assets: Asset[]
  lastKey?: string | null
  numberOfAssets: number
  projectId: string
}

export interface GetConsentByProjectIdPathParameters {
  projectId: string
}

export interface GetConsentByProjectIdQueryStringParameters {
  consentStatus?: ConsentStatus
  consentType: ConsentType
  lastKey?: string | null
  limit?: number | null
}

export interface GetConsentByProjectIdResponseBody {
  consent: ContactConsent[]
  lastKey?: string | null
  projectId: string
}

export interface GetContactsByProjectIdPathParameters {
  projectId: string
}

export interface GetContactsByProjectIdQueryStringParameters {
  ascending?: boolean | null
  assetName?: string | null
  contactName?: string | null
  email?: string | null
  lastKey?: string | null
  limit?: number | null
  phone?: string | null
  sortField?: ContactSortingTypes | null
}

export interface GetContactsByProjectIdResponseBody {
  contacts: Contact[]
  lastKey?: string | null
  numberOfContacts: number
  projectId: string
}

export interface GetProjectByProjectIdPathParameters {
  projectId: string
}

export interface GetProjectByProjectIdResponseBody {
  project: Project
}

export interface GetQrCodesByProjectIdPathParameters {
  projectId: string
}

export interface GetQrCodesByProjectIdQueryStringParameters {
  ascending?: boolean | null
  assetName?: string | null
  lastKey?: string | null
  limit?: number | null
  sortField?: QrCodeSortingTypes | null
}

export interface GetQrCodesByProjectIdResponseBody {
  lastKey?: string | null
  numberOfQrCodes: number
  projectId: string
  qrCodes: QrCode[]
}

export interface GetScansByProjectIdPathParameters {
  projectId: string
}

export interface GetScansByProjectIdQueryStringParameters {
  ascending?: boolean | null
  assetName?: string | null
  contactId?: string | null
  lastKey?: string | null
  limit?: number | null
}

export interface GetScansByProjectIdResponseBody {
  lastKey?: string | null
  numberOfScans: number
  projectId: string
  scans: Scan[]
}

export interface GetSmsTemplateByProjectIdPathParameters {
  projectId: string
  smsTemplateName: string
}

export interface GetSmsTemplateByProjectIdResponseBody {
  body?: string | null
  projectId: string
  responseUrl?: string | null
  smsTemplateName: string
  statusUrl?: string | null
}

export interface GetSmsTemplatesByProjectIdPathParameters {
  projectId: string
}

export interface GetSmsTemplatesByProjectIdQueryStringParameters {
  lastKey?: string | null
  limit?: number | null
}

export interface GetSmsTemplatesByProjectIdResponseBody {
  lastKey?: string | null
  numberOfSmsTemplates: number
  projectId: string
  smsTemplates: SmsTemplate[]
}

export interface UpdateProjectByProjectIdPathParameters {
  projectId: string
}

export interface UpdateProjectByProjectIdRequestBody {
  companyName?: string | null
  description?: string | null
  name?: string | null
  status?: ProjectStatus | null
}

export interface UpdateProjectByProjectIdResponseBody {
  project: Project
}

export interface UpdateSmsTemplatePathParameters {
  projectId: string
  smsTemplateName: string
}

export interface UpdateSmsTemplateRequestBody {
  body?: string | null
  responseUrl?: string | null
  statusUrl?: string | null
}

export interface UpdateSmsTemplateResponseBody {
  body?: string | null
  projectId: string
  responseUrl?: string | null
  smsTemplateName?: string | null
  statusUrl?: string | null
}

export interface GetQrCodeLogoByQrCodeLogoIdPathParameters {
  qrCodeLogoId: string
}

export interface GetQrCodeLogoByQrCodeLogoIdResponseBody {
  qrCodeLogo: QrCodeLogo
  qrCodeLogoId: string
}

export interface UpdateQrCodeLogoByQrCodeLogoIdPathParameters {
  qrCodeLogoId: string
}

export interface UpdateQrCodeLogoByQrCodeLogoIdRequestBody {
  hidden?: boolean | null
}

export interface UpdateQrCodeLogoByQrCodeLogoIdResponseBody {
  qrCodeLogo: QrCodeLogo
  qrCodeLogoId: string
}

export interface DeleteQrCodePathParameters {
  qrCodeId: string
}

export interface DeleteQrCodeResponseBody {
  qrCode: QrCode
}

export interface GetQrCodePathParameters {
  qrCodeId: string
}

export interface GetQrCodeQueryStringParameters {
  background?: string | null
  backgroundGradientColors?: string | null
  backgroundGradientRotation?: number | null
  backgroundGradientType?: QrCodeGradientTypes | null
  cornerDotColor?: string | null
  cornerDotType?: QrCodeCornerDotTypes | null
  cornerSquareColor?: string | null
  cornerSquareType?: QrCodeCornerSquareTypes | null
  darkColor?: string | null
  dataUrl?: boolean | null
  dotType?: QrCodeDotTypes | null
  errorCorrectionLevel?: QrCodeErrorCorrectionLevel | null
  foreground?: string | null
  foregroundGradientColors?: string | null
  foregroundGradientRotation?: number | null
  foregroundGradientType?: QrCodeGradientTypes | null
  format?: QrCodeType | null
  lightColor?: string | null
  logo?: string | null
  logoMargin?: number | null
  margin?: number | null
  qrCodeLogoId?: string | null
  saveAsBlob?: boolean | null
  scale?: number | null
  stylingTemplateId?: string | null
  version?: number | null
  width?: number | null
}

export interface GetQrCodeResponseBody extends ResponseQrCode {
  appAccountId?: string | null
  appId?: string | null
  assetId: string
  created?: string | Date | number | null
  dynamicRedirectType?: QrCodeDynamicRedirectType
  image: QrCodeImage
  intent?: string | null
  intentState?: NestedKeyValueObject | null
  intentType?: QrCodeIntentType
  locatorKey: string
  locatorKeyType?: QrCodeLocatorKeyType
  modified?: string | Date | number | null
  name?: string | null
  projectId?: string | null
  qrCodeId: string
  scanCount: number
  status?: QrCodeStatus
  stylingTemplateId?: string | null
  validFrom?: string | Date | number | null
  validTo?: string | Date | number | null
}

export interface UpdateQrCodePathParameters {
  qrCodeId: string
}

export interface UpdateQrCodeRequestBody {
  dynamicRedirectType?: QrCodeDynamicRedirectType | null
  imageOptions?: QrCodeImageOptions | null
  intent?: string | null
  intentState?: NestedKeyValueObject | null
  status?: QrCodeStatus | null
  stylingTemplateId?: string | null
}

export interface UpdateQrCodeResponseBody {
  qrCode: ResponseQrCode
}

export interface CreateContactByScanIdPathParameters {
  scanId: string
}

export interface CreateContactByScanIdRequestBody {
  cellPhone?: string | null
  consent?: ContactConsent[] | null
  customAttributes?: NestedKeyValueObject | null
  emailAddress?: string | null
  firstName?: string | null
  lastName?: string | null
  mailingAddress?: ContactMailingAddress | null
  middleName?: string | null
  nickname?: string | null
  type?: string | null
}

export interface CreateContactByScanIdResponseBody {
  asset: Asset
  assetContact: AssetContact
  assetId: string
  contact: Contact
  projectContact: ProjectContact
  scanContact: ScanContact
}

export interface GetScanPathParameters {
  scanId: string
}

export interface GetScanResponseBody {
  asset: Asset
  contacts: Contact[]
  qrCode: QrCode
  scan: Scan
}

export interface SendSmsByScanIdPathParameters {
  scanId: string
}

export interface SendSmsByScanIdRequestBody {
  body?: string | null
  contactId: string
  customVariables?: NestedKeyValueObject | null
  smsTemplateName?: string | null
}

export interface SendSmsByScanIdResponseBody {
  sms: Sms
}

export interface DeleteQrCodeStylingTemplateByStylingTemplateIdPathParameters {
  stylingTemplateId: string
}

export interface DeleteQrCodeStylingTemplateByStylingTemplateIdResponseBody {
  qrCodeStylingTemplate: QrCodeStylingTemplate
  stylingTemplateId: string
}

export interface GetQrCodeStylingTemplateByStylingTemplateIdPathParameters {
  stylingTemplateId: string
}

export interface GetQrCodeStylingTemplateByStylingTemplateIdResponseBody {
  qrCodeStylingTemplate: QrCodeStylingTemplate
  stylingTemplateId: string
}

export interface UpdateQrCodeStylingTemplateByStylingTemplateIdPathParameters {
  stylingTemplateId: string
}

export interface UpdateQrCodeStylingTemplateByStylingTemplateIdRequestBody {
  imageOptions?: QrCodeImageOptionsNoDefaults
  name?: string | null
  qrCodeLogoId?: string | null
}

export interface UpdateQrCodeStylingTemplateByStylingTemplateIdResponseBody {
  qrCodeStylingTemplate: QrCodeStylingTemplate
  stylingTemplateId: string
}

export interface DeleteSessionApiKeySessionResponseBody {
  apiKeyId: string
  expires: string | Date | number
  scope: AuthTokenScope
}

export interface GetSessionRequestBody {
  key: string
  secret: string
}

export interface GetSessionApiKeySessionResponseBody {
  apiKeyId: string
  expires: string | Date | number
  scope: AuthTokenScope
}

export interface GetSessionRefreshApiKeySessionResponseBody {
  apiKeyId: string
  expires: string | Date | number
  scope: AuthTokenScope
}

// HANDLER REQUEST CLASSES

export class CreateAssetTypeByAccountIdRequest extends RequestPost<
  CreateAssetTypeByAccountIdPathParameters,
  undefined,
  CreateAssetTypeByAccountIdRequestBody,
  CreateAssetTypeByAccountIdResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'accountId', routePart: 'accounts', sdkPartName: 'account'},
    {routePart: 'assettypes', sdkPartName: 'assettypes'},
  ]
}

export class CreateLocationByAccountIdRequest extends RequestPost<
  CreateLocationByAccountIdPathParameters,
  undefined,
  CreateLocationByAccountIdRequestBody,
  CreateLocationByAccountIdResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'accountId', routePart: 'accounts', sdkPartName: 'account'},
    {routePart: 'locations', sdkPartName: 'locations'},
  ]
}

export class CreateProjectByAccountIdRequest extends RequestPost<
  CreateProjectByAccountIdPathParameters,
  undefined,
  CreateProjectByAccountIdRequestBody,
  CreateProjectByAccountIdResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'accountId', routePart: 'accounts', sdkPartName: 'account'},
    {routePart: 'projects', sdkPartName: 'projects'},
  ]
}

export class CreateQrCodeLogoByAccountRequest extends RequestPost<
  CreateQrCodeLogoByAccountPathParameters,
  undefined,
  CreateQrCodeLogoByAccountRequestBody,
  CreateQrCodeLogoByAccountResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'accountId', routePart: 'accounts', sdkPartName: 'account'},
    {routePart: 'qrcodelogos', sdkPartName: 'qrcodelogos'},
  ]
}

export class CreateQrCodeStylingTemplateByAccountRequest extends RequestPost<
  CreateQrCodeStylingTemplateByAccountPathParameters,
  undefined,
  CreateQrCodeStylingTemplateByAccountRequestBody,
  CreateQrCodeStylingTemplateByAccountResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'accountId', routePart: 'accounts', sdkPartName: 'account'},
    {routePart: 'stylingtemplates', sdkPartName: 'stylingtemplates'},
  ]
}

export class DeleteContactsByAccountIdRequest extends RequestDelete<
  DeleteContactsByAccountIdPathParameters,
  DeleteContactsByAccountIdQueryStringParameters,
  DeleteContactsByAccountIdResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'accountId', routePart: 'accounts', sdkPartName: 'account'},
    {routePart: 'contacts/batch', sdkPartName: 'contactsBatch'},
  ]
}

export class GetAssetTypesByAccountIdRequest extends RequestGet<
  GetAssetTypesByAccountIdPathParameters,
  GetAssetTypesByAccountIdQueryStringParameters,
  GetAssetTypesByAccountIdResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'accountId', routePart: 'accounts', sdkPartName: 'account'},
    {routePart: 'assettypes', sdkPartName: 'assettypes'},
  ]
}

export class GetAssetsByAccountIdRequest extends RequestGet<
  GetAssetsByAccountIdPathParameters,
  GetAssetsByAccountIdQueryStringParameters,
  GetAssetsByAccountIdResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'accountId', routePart: 'accounts', sdkPartName: 'account'},
    {routePart: 'assets', sdkPartName: 'assets'},
  ]
}

export class GetConsentByAccountIdRequest extends RequestGet<
  GetConsentByAccountIdPathParameters,
  GetConsentByAccountIdQueryStringParameters,
  GetConsentByAccountIdResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'accountId', routePart: 'accounts', sdkPartName: 'account'},
    {routePart: 'consent', sdkPartName: 'consent'},
  ]
}

export class GetContactsByAccountIdRequest extends RequestGet<
  GetContactsByAccountIdPathParameters,
  GetContactsByAccountIdQueryStringParameters,
  GetContactsByAccountIdResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'accountId', routePart: 'accounts', sdkPartName: 'account'},
    {routePart: 'contacts', sdkPartName: 'contacts'},
  ]
}

export class GetLocationsByAccountIdRequest extends RequestGet<
  GetLocationsByAccountIdPathParameters,
  GetLocationsByAccountIdQueryStringParameters,
  GetLocationsByAccountIdResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'accountId', routePart: 'accounts', sdkPartName: 'account'},
    {routePart: 'locations', sdkPartName: 'locations'},
  ]
}

export class GetProjectsByAccountIdRequest extends RequestGet<
  GetProjectsByAccountIdPathParameters,
  GetProjectsByAccountIdQueryStringParameters,
  GetProjectsByAccountIdResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'accountId', routePart: 'accounts', sdkPartName: 'account'},
    {routePart: 'projects', sdkPartName: 'projects'},
  ]
}

export class GetQrCodeLogosByAccountIdRequest extends RequestGet<
  GetQrCodeLogosByAccountIdPathParameters,
  GetQrCodeLogosByAccountIdQueryStringParameters,
  GetQrCodeLogosByAccountIdResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'accountId', routePart: 'accounts', sdkPartName: 'account'},
    {routePart: 'qrcodelogos', sdkPartName: 'qrcodelogos'},
  ]
}

export class GetQrCodeStylingTemplatesByAccountIdRequest extends RequestGet<
  GetQrCodeStylingTemplatesByAccountIdPathParameters,
  GetQrCodeStylingTemplatesByAccountIdQueryStringParameters,
  GetQrCodeStylingTemplatesByAccountIdResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'accountId', routePart: 'accounts', sdkPartName: 'account'},
    {routePart: 'stylingtemplates', sdkPartName: 'stylingtemplates'},
  ]
}

export class GetQrCodesByAccountIdRequest extends RequestGet<
  GetQrCodesByAccountIdPathParameters,
  GetQrCodesByAccountIdQueryStringParameters,
  GetQrCodesByAccountIdResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'accountId', routePart: 'accounts', sdkPartName: 'account'},
    {routePart: 'qrcodes', sdkPartName: 'qrCodes'},
  ]
}

export class GetScansByAccountIdRequest extends RequestGet<
  GetScansByAccountIdPathParameters,
  GetScansByAccountIdQueryStringParameters,
  GetScansByAccountIdResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'accountId', routePart: 'accounts', sdkPartName: 'account'},
    {routePart: 'scans', sdkPartName: 'scans'},
  ]
}

export class UploadQrCodeLogoByAccountRequest extends RequestPost<
  UploadQrCodeLogoByAccountPathParameters,
  undefined,
  UploadQrCodeLogoByAccountRequestBody,
  UploadQrCodeLogoByAccountResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'accountId', routePart: 'accounts', sdkPartName: 'account'},
    {routePart: 'qrcodelogos/upload', sdkPartName: 'qrcodelogosUpload'},
  ]
}

export class ComposeAssetByAssetTypeRequest extends RequestPost<
  ComposeAssetByAssetTypePathParameters,
  undefined,
  ComposeAssetByAssetTypeRequestBody,
  ComposeAssetByAssetTypeResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'assetTypeId', routePart: 'assettypes', sdkPartName: 'assettype'},
    {parm: 'assetId', routePart: 'assets', sdkPartName: 'asset'},
  ]
}

export class CreateAssetByAssetTypeRequest extends RequestPost<
  CreateAssetByAssetTypePathParameters,
  undefined,
  CreateAssetByAssetTypeRequestBody,
  CreateAssetByAssetTypeResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'assetTypeId', routePart: 'assettypes', sdkPartName: 'assettype'},
    {routePart: 'assets', sdkPartName: 'assets'},
  ]
}

export class GetAssetTypeByAssetTypeIdRequest extends RequestGet<
  GetAssetTypeByAssetTypeIdPathParameters,
  GetAssetTypeByAssetTypeIdQueryStringParameters,
  GetAssetTypeByAssetTypeIdResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [{parm: 'assetTypeId', routePart: 'assettypes', sdkPartName: 'assettype'}]
}

export class GetAssetsByAssetTypeRequest extends RequestGet<
  GetAssetsByAssetTypePathParameters,
  GetAssetsByAssetTypeQueryStringParameters,
  GetAssetsByAssetTypeResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'assetTypeId', routePart: 'assettypes', sdkPartName: 'assettype'},
    {routePart: 'assets', sdkPartName: 'assets'},
  ]
}

export class GetAssetTypeCountsByLocationRequest extends RequestGet<
  GetAssetTypeCountsByLocationPathParameters,
  GetAssetTypeCountsByLocationQueryStringParameters,
  GetAssetTypeCountsByLocationResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'assetTypeId', routePart: 'assettypes', sdkPartName: 'assettype'},
    {routePart: 'locations', sdkPartName: 'locations'},
  ]
}

export class UpdateAssetTypeRequest extends RequestPatch<
  UpdateAssetTypePathParameters,
  undefined,
  UpdateAssetTypeRequestBody,
  UpdateAssetTypeResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [{parm: 'assetTypeId', routePart: 'assettypes', sdkPartName: 'assettype'}]
}

export class CreateContactByAssetIdRequest extends RequestPost<
  CreateContactByAssetIdPathParameters,
  undefined,
  CreateContactByAssetIdRequestBody,
  CreateContactByAssetIdResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'assetId', routePart: 'assets', sdkPartName: 'asset'},
    {routePart: 'contacts', sdkPartName: 'contacts'},
  ]
}

export class CreateQrCodeByAssetIdRequest extends RequestPost<
  CreateQrCodeByAssetIdPathParameters,
  undefined,
  CreateQrCodeByAssetIdRequestBody,
  CreateQrCodeByAssetIdResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'assetId', routePart: 'assets', sdkPartName: 'asset'},
    {routePart: 'qrcodes', sdkPartName: 'qrCodes'},
  ]
}

export class CreateQrCodesByAssetIdRequest extends RequestPost<
  CreateQrCodesByAssetIdPathParameters,
  undefined,
  CreateQrCodesByAssetIdRequestBody,
  CreateQrCodesByAssetIdResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'assetId', routePart: 'assets', sdkPartName: 'asset'},
    {routePart: 'qrcodes', sdkPartName: 'qrCodes'},
  ]
}

export class DeleteAssetRequest extends RequestDelete<DeleteAssetPathParameters, undefined, DeleteAssetResponseBody> {
  routeSegments?: RequestRouteSegment[] = [{parm: 'assetId', routePart: 'assets', sdkPartName: 'asset'}]
}

export class GetAssetRequest extends RequestGet<
  GetAssetPathParameters,
  GetAssetQueryStringParameters,
  GetAssetResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [{parm: 'assetId', routePart: 'assets', sdkPartName: 'asset'}]
}

export class GetAssetHistoryRequest extends RequestGet<
  GetAssetHistoryPathParameters,
  GetAssetHistoryQueryStringParameters,
  GetAssetHistoryResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'assetId', routePart: 'assets', sdkPartName: 'asset'},
    {routePart: 'history', sdkPartName: 'history'},
  ]
}

export class GetContactsByAssetIdRequest extends RequestGet<
  GetContactsByAssetIdPathParameters,
  GetContactsByAssetIdQueryStringParameters,
  GetContactsByAssetIdResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'assetId', routePart: 'assets', sdkPartName: 'asset'},
    {routePart: 'contacts', sdkPartName: 'contacts'},
  ]
}

export class GetQrCodesByAssetIdRequest extends RequestGet<
  GetQrCodesByAssetIdPathParameters,
  GetQrCodesByAssetIdQueryStringParameters,
  GetQrCodesByAssetIdResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'assetId', routePart: 'assets', sdkPartName: 'asset'},
    {routePart: 'qrcodes', sdkPartName: 'qrCodes'},
  ]
}

export class GetScansByAssetIdRequest extends RequestGet<
  GetScansByAssetIdPathParameters,
  GetScansByAssetIdQueryStringParameters,
  GetScansByAssetIdResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'assetId', routePart: 'assets', sdkPartName: 'asset'},
    {routePart: 'scans', sdkPartName: 'scans'},
  ]
}

export class LinkContactToAssetRequest extends RequestPost<
  LinkContactToAssetPathParameters,
  undefined,
  LinkContactToAssetRequestBody,
  LinkContactToAssetResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'assetId', routePart: 'assets', sdkPartName: 'asset'},
    {parm: 'contactId', routePart: 'contacts', sdkPartName: 'contact'},
  ]
}

export class UnlinkContactToAssetRequest extends RequestDelete<
  UnlinkContactToAssetPathParameters,
  undefined,
  undefined
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'assetId', routePart: 'assets', sdkPartName: 'asset'},
    {parm: 'contactId', routePart: 'contacts', sdkPartName: 'contact'},
  ]
}

export class UpdateAssetRequest extends RequestPatch<
  UpdateAssetPathParameters,
  undefined,
  UpdateAssetRequestBody,
  UpdateAssetResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [{parm: 'assetId', routePart: 'assets', sdkPartName: 'asset'}]
}

export class CreateConsentByContactIdRequest extends RequestPost<
  CreateConsentByContactIdPathParameters,
  undefined,
  CreateConsentByContactIdRequestBody,
  CreateConsentByContactIdResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'contactId', routePart: 'contacts', sdkPartName: 'contact'},
    {routePart: 'consent', sdkPartName: 'consent'},
  ]
}

export class DeleteConsentByContactIdRequest extends RequestDelete<
  DeleteConsentByContactIdPathParameters,
  DeleteConsentByContactIdQueryStringParameters,
  DeleteConsentByContactIdResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'contactId', routePart: 'contacts', sdkPartName: 'contact'},
    {routePart: 'consent', sdkPartName: 'consent'},
  ]
}

export class DeleteContactRequest extends RequestDelete<
  DeleteContactPathParameters,
  undefined,
  DeleteContactResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [{parm: 'contactId', routePart: 'contacts', sdkPartName: 'contact'}]
}

export class GetConsentByContactIdRequest extends RequestGet<
  GetConsentByContactIdPathParameters,
  GetConsentByContactIdQueryStringParameters,
  GetConsentByContactIdResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'contactId', routePart: 'contacts', sdkPartName: 'contact'},
    {routePart: 'consent', sdkPartName: 'consent'},
  ]
}

export class GetContactRequest extends RequestGet<GetContactPathParameters, undefined, GetContactResponseBody> {
  routeSegments?: RequestRouteSegment[] = [{parm: 'contactId', routePart: 'contacts', sdkPartName: 'contact'}]
}

export class GetContactExportByContactIdRequest extends RequestGet<
  GetContactExportByContactIdPathParameters,
  GetContactExportByContactIdQueryStringParameters,
  GetContactExportByContactIdResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'contactId', routePart: 'contacts', sdkPartName: 'contact'},
    {routePart: 'export', sdkPartName: 'export'},
  ]
}

export class GetScansByContactIdRequest extends RequestGet<
  GetScansByContactIdPathParameters,
  undefined,
  GetScansByContactIdResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'contactId', routePart: 'contacts', sdkPartName: 'contact'},
    {routePart: 'scans', sdkPartName: 'scans'},
  ]
}

export class LinkContactToScanRequest extends RequestPost<
  LinkContactToScanPathParameters,
  undefined,
  undefined,
  LinkContactToScanResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'contactId', routePart: 'contacts', sdkPartName: 'contact'},
    {parm: 'scanId', routePart: 'scans', sdkPartName: 'scan'},
  ]
}

export class UpdateContactRequest extends RequestPatch<
  UpdateContactPathParameters,
  undefined,
  UpdateContactRequestBody,
  UpdateContactResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [{parm: 'contactId', routePart: 'contacts', sdkPartName: 'contact'}]
}

export class UpdateAssetsLocationsRequest extends RequestPatch<
  UpdateAssetsLocationsPathParameters,
  undefined,
  UpdateAssetsLocationsRequestBody,
  UpdateAssetsLocationsResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'locationId', routePart: 'location', sdkPartName: 'location'},
    {routePart: 'assets', sdkPartName: 'assets'},
  ]
}

export class GetAssetTypeCountAtLocationRequest extends RequestGet<
  GetAssetTypeCountAtLocationPathParameters,
  undefined,
  GetAssetTypeCountAtLocationResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'locationId', routePart: 'location', sdkPartName: 'location'},
    {parm: 'assetTypeId', routePart: 'assetType', sdkPartName: 'assetType'},
  ]
}

export class GetAssetsByLocationIdRequest extends RequestGet<
  GetAssetsByLocationIdPathParameters,
  GetAssetsByLocationIdQueryStringParameters,
  GetAssetsByLocationIdResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'locationId', routePart: 'locations', sdkPartName: 'location'},
    {routePart: 'assets', sdkPartName: 'assets'},
  ]
}

export class UpdateAssetTypeCountAtLocationRequest extends RequestPatch<
  UpdateAssetTypeCountAtLocationPathParameters,
  undefined,
  UpdateAssetTypeCountAtLocationRequestBody,
  UpdateAssetTypeCountAtLocationResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'locationId', routePart: 'location', sdkPartName: 'location'},
    {parm: 'assetTypeId', routePart: 'assettype', sdkPartName: 'assettype'},
  ]
}

export class UpdateLocationRequest extends RequestPatch<
  UpdateLocationPathParameters,
  undefined,
  UpdateLocationRequestBody,
  UpdateLocationResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [{parm: 'locationId', routePart: 'location', sdkPartName: 'location'}]
}

export class CreateAssetByProjectIdRequest extends RequestPost<
  CreateAssetByProjectIdPathParameters,
  undefined,
  CreateAssetByProjectIdRequestBody,
  CreateAssetByProjectIdResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'projectId', routePart: 'projects', sdkPartName: 'project'},
    {routePart: 'assets', sdkPartName: 'assets'},
  ]
}

export class CreateAssetsByProjectIdRequest extends RequestPost<
  CreateAssetsByProjectIdPathParameters,
  undefined,
  CreateAssetsByProjectIdRequestBody,
  CreateAssetsByProjectIdResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'projectId', routePart: 'projects', sdkPartName: 'project'},
    {routePart: 'assets/batch', sdkPartName: 'assetsBatch'},
  ]
}

export class CreateContactByProjectIdRequest extends RequestPost<
  CreateContactByProjectIdPathParameters,
  undefined,
  CreateContactByProjectIdRequestBody,
  CreateContactByProjectIdResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'projectId', routePart: 'projects', sdkPartName: 'project'},
    {routePart: 'contacts', sdkPartName: 'contacts'},
  ]
}

export class CreateContactsByProjectIdRequest extends RequestPost<
  CreateContactsByProjectIdPathParameters,
  undefined,
  CreateContactsByProjectIdRequestBody,
  CreateContactsByProjectIdResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'projectId', routePart: 'projects', sdkPartName: 'project'},
    {routePart: 'contacts/batch', sdkPartName: 'contactsBatch'},
  ]
}

export class CreateSmsTemplateByProjectIdRequest extends RequestPost<
  CreateSmsTemplateByProjectIdPathParameters,
  undefined,
  CreateSmsTemplateByProjectIdRequestBody,
  CreateSmsTemplateByProjectIdResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'projectId', routePart: 'projects', sdkPartName: 'project'},
    {routePart: 'smstemplates', sdkPartName: 'smsTemplates'},
  ]
}

export class DeleteContactsByProjectIdRequest extends RequestDelete<
  DeleteContactsByProjectIdPathParameters,
  DeleteContactsByProjectIdQueryStringParameters,
  DeleteContactsByProjectIdResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'projectId', routePart: 'projects', sdkPartName: 'project'},
    {routePart: 'contacts/batch', sdkPartName: 'contactsBatch'},
  ]
}

export class DeleteProjectRequest extends RequestDelete<
  DeleteProjectPathParameters,
  undefined,
  DeleteProjectResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [{parm: 'projectId', routePart: 'projects', sdkPartName: 'project'}]
}

export class DeleteSmsTemplateByProjectIdRequest extends RequestDelete<
  DeleteSmsTemplateByProjectIdPathParameters,
  undefined,
  DeleteSmsTemplateByProjectIdResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'projectId', routePart: 'projects', sdkPartName: 'project'},
    {parm: 'smsTemplateName', routePart: 'smstemplates', sdkPartName: 'smsTemplate'},
  ]
}

export class GetAssetsByProjectIdRequest extends RequestGet<
  GetAssetsByProjectIdPathParameters,
  GetAssetsByProjectIdQueryStringParameters,
  GetAssetsByProjectIdResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'projectId', routePart: 'projects', sdkPartName: 'project'},
    {routePart: 'assets', sdkPartName: 'assets'},
  ]
}

export class GetConsentByProjectIdRequest extends RequestGet<
  GetConsentByProjectIdPathParameters,
  GetConsentByProjectIdQueryStringParameters,
  GetConsentByProjectIdResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'projectId', routePart: 'projects', sdkPartName: 'project'},
    {routePart: 'consent', sdkPartName: 'consent'},
  ]
}

export class GetContactsByProjectIdRequest extends RequestGet<
  GetContactsByProjectIdPathParameters,
  GetContactsByProjectIdQueryStringParameters,
  GetContactsByProjectIdResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'projectId', routePart: 'projects', sdkPartName: 'project'},
    {routePart: 'contacts', sdkPartName: 'contacts'},
  ]
}

export class GetProjectByProjectIdRequest extends RequestGet<
  GetProjectByProjectIdPathParameters,
  undefined,
  GetProjectByProjectIdResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [{parm: 'projectId', routePart: 'projects', sdkPartName: 'project'}]
}

export class GetQrCodesByProjectIdRequest extends RequestGet<
  GetQrCodesByProjectIdPathParameters,
  GetQrCodesByProjectIdQueryStringParameters,
  GetQrCodesByProjectIdResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'projectId', routePart: 'projects', sdkPartName: 'project'},
    {routePart: 'qrcodes', sdkPartName: 'qrCodes'},
  ]
}

export class GetScansByProjectIdRequest extends RequestGet<
  GetScansByProjectIdPathParameters,
  GetScansByProjectIdQueryStringParameters,
  GetScansByProjectIdResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'projectId', routePart: 'projects', sdkPartName: 'project'},
    {routePart: 'scans', sdkPartName: 'scans'},
  ]
}

export class GetSmsTemplateByProjectIdRequest extends RequestGet<
  GetSmsTemplateByProjectIdPathParameters,
  undefined,
  GetSmsTemplateByProjectIdResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'projectId', routePart: 'projects', sdkPartName: 'project'},
    {parm: 'smsTemplateName', routePart: 'smstemplates', sdkPartName: 'smsTemplate'},
  ]
}

export class GetSmsTemplatesByProjectIdRequest extends RequestGet<
  GetSmsTemplatesByProjectIdPathParameters,
  GetSmsTemplatesByProjectIdQueryStringParameters,
  GetSmsTemplatesByProjectIdResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'projectId', routePart: 'projects', sdkPartName: 'project'},
    {routePart: 'smstemplates', sdkPartName: 'smsTemplates'},
  ]
}

export class UpdateProjectByProjectIdRequest extends RequestPatch<
  UpdateProjectByProjectIdPathParameters,
  undefined,
  UpdateProjectByProjectIdRequestBody,
  UpdateProjectByProjectIdResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [{parm: 'projectId', routePart: 'projects', sdkPartName: 'project'}]
}

export class UpdateSmsTemplateRequest extends RequestPatch<
  UpdateSmsTemplatePathParameters,
  undefined,
  UpdateSmsTemplateRequestBody,
  UpdateSmsTemplateResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'projectId', routePart: 'projects', sdkPartName: 'project'},
    {parm: 'smsTemplateName', routePart: 'smstemplates', sdkPartName: 'smsTemplate'},
  ]
}

export class GetQrCodeLogoByQrCodeLogoIdRequest extends RequestGet<
  GetQrCodeLogoByQrCodeLogoIdPathParameters,
  undefined,
  GetQrCodeLogoByQrCodeLogoIdResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [{parm: 'qrCodeLogoId', routePart: 'qrcodelogos', sdkPartName: 'qrcodelogo'}]
}

export class UpdateQrCodeLogoByQrCodeLogoIdRequest extends RequestPatch<
  UpdateQrCodeLogoByQrCodeLogoIdPathParameters,
  undefined,
  UpdateQrCodeLogoByQrCodeLogoIdRequestBody,
  UpdateQrCodeLogoByQrCodeLogoIdResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [{parm: 'qrCodeLogoId', routePart: 'qrcodelogos', sdkPartName: 'qrcodelogo'}]
}

export class DeleteQrCodeRequest extends RequestDelete<
  DeleteQrCodePathParameters,
  undefined,
  DeleteQrCodeResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [{parm: 'qrCodeId', routePart: 'qrcodes', sdkPartName: 'qrCode'}]
}

export class GetQrCodeRequest extends RequestGet<
  GetQrCodePathParameters,
  GetQrCodeQueryStringParameters,
  GetQrCodeResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [{parm: 'qrCodeId', routePart: 'qrcodes', sdkPartName: 'qrCode'}]
}

export class UpdateQrCodeRequest extends RequestPatch<
  UpdateQrCodePathParameters,
  undefined,
  UpdateQrCodeRequestBody,
  UpdateQrCodeResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [{parm: 'qrCodeId', routePart: 'qrcodes', sdkPartName: 'qrCode'}]
}

export class CreateContactByScanIdRequest extends RequestPost<
  CreateContactByScanIdPathParameters,
  undefined,
  CreateContactByScanIdRequestBody,
  CreateContactByScanIdResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'scanId', routePart: 'scans', sdkPartName: 'scan'},
    {routePart: 'contacts', sdkPartName: 'contacts'},
  ]
}

export class GetScanRequest extends RequestGet<GetScanPathParameters, undefined, GetScanResponseBody> {
  routeSegments?: RequestRouteSegment[] = [{parm: 'scanId', routePart: 'scans', sdkPartName: 'scan'}]
}

export class SendSmsByScanIdRequest extends RequestPost<
  SendSmsByScanIdPathParameters,
  undefined,
  SendSmsByScanIdRequestBody,
  SendSmsByScanIdResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'scanId', routePart: 'scans', sdkPartName: 'scan'},
    {routePart: 'sms', sdkPartName: 'sms'},
  ]
}

export class DeleteQrCodeStylingTemplateByStylingTemplateIdRequest extends RequestDelete<
  DeleteQrCodeStylingTemplateByStylingTemplateIdPathParameters,
  undefined,
  DeleteQrCodeStylingTemplateByStylingTemplateIdResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'stylingTemplateId', routePart: 'stylingtemplates', sdkPartName: 'stylingtemplate'},
  ]
}

export class GetQrCodeStylingTemplateByStylingTemplateIdRequest extends RequestGet<
  GetQrCodeStylingTemplateByStylingTemplateIdPathParameters,
  undefined,
  GetQrCodeStylingTemplateByStylingTemplateIdResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'stylingTemplateId', routePart: 'stylingtemplates', sdkPartName: 'stylingtemplate'},
  ]
}

export class UpdateQrCodeStylingTemplateByStylingTemplateIdRequest extends RequestPatch<
  UpdateQrCodeStylingTemplateByStylingTemplateIdPathParameters,
  undefined,
  UpdateQrCodeStylingTemplateByStylingTemplateIdRequestBody,
  UpdateQrCodeStylingTemplateByStylingTemplateIdResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [
    {parm: 'stylingTemplateId', routePart: 'stylingtemplates', sdkPartName: 'stylingtemplate'},
  ]
}

export class DeleteSessionRequest extends RequestDelete<
  undefined,
  undefined,
  GetSessionRefreshApiKeySessionResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [{routePart: 'auth/session', sdkPartName: 'authSession'}]
}

export class GetSessionRequest extends RequestPost<
  undefined,
  undefined,
  GetSessionRequestBody,
  GetSessionRefreshApiKeySessionResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [{routePart: 'auth/session', sdkPartName: 'authSession'}]
}

export class GetSessionRefreshRequest extends RequestPost<
  undefined,
  undefined,
  undefined,
  GetSessionRefreshApiKeySessionResponseBody
> {
  routeSegments?: RequestRouteSegment[] = [{routePart: 'auth/session/refresh', sdkPartName: 'refreshAuthSession'}]
}

// HANDLER RESOURCE CLASSES

export class SdkAccountAssettypesResources extends Resources {
  async create(
    requestBody: CreateAssetTypeByAccountIdRequestBody,
    options?: any,
  ): Promise<CreateAssetTypeByAccountIdResponseBody> {
    const request = new CreateAssetTypeByAccountIdRequest(this.session)
    return request.go(this.pathParameters, undefined, requestBody, options)
  }

  async get(
    queryStringParameters: GetAssetTypesByAccountIdQueryStringParameters,
    options?: any,
  ): Promise<GetAssetTypesByAccountIdResponseBody> {
    const request = new GetAssetTypesByAccountIdRequest(this.session)
    return request.go(this.pathParameters, queryStringParameters, options)
  }
}

export class SdkAccountLocationsResources extends Resources {
  async create(
    requestBody: CreateLocationByAccountIdRequestBody,
    options?: any,
  ): Promise<CreateLocationByAccountIdResponseBody> {
    const request = new CreateLocationByAccountIdRequest(this.session)
    return request.go(this.pathParameters, undefined, requestBody, options)
  }

  async get(
    queryStringParameters: GetLocationsByAccountIdQueryStringParameters,
    options?: any,
  ): Promise<GetLocationsByAccountIdResponseBody> {
    const request = new GetLocationsByAccountIdRequest(this.session)
    return request.go(this.pathParameters, queryStringParameters, options)
  }
}

export class SdkAccountProjectsResources extends Resources {
  async create(
    requestBody: CreateProjectByAccountIdRequestBody,
    options?: any,
  ): Promise<CreateProjectByAccountIdResponseBody> {
    const request = new CreateProjectByAccountIdRequest(this.session)
    return request.go(this.pathParameters, undefined, requestBody, options)
  }

  async get(
    queryStringParameters: GetProjectsByAccountIdQueryStringParameters,
    options?: any,
  ): Promise<GetProjectsByAccountIdResponseBody> {
    const request = new GetProjectsByAccountIdRequest(this.session)
    return request.go(this.pathParameters, queryStringParameters, options)
  }
}

export class SdkAccountQrcodelogosResources extends Resources {
  async create(
    requestBody: CreateQrCodeLogoByAccountRequestBody,
    options?: any,
  ): Promise<CreateQrCodeLogoByAccountResponseBody> {
    const request = new CreateQrCodeLogoByAccountRequest(this.session)
    return request.go(this.pathParameters, undefined, requestBody, options)
  }

  async get(
    queryStringParameters: GetQrCodeLogosByAccountIdQueryStringParameters,
    options?: any,
  ): Promise<GetQrCodeLogosByAccountIdResponseBody> {
    const request = new GetQrCodeLogosByAccountIdRequest(this.session)
    return request.go(this.pathParameters, queryStringParameters, options)
  }
}

export class SdkAccountStylingtemplatesResources extends Resources {
  async create(
    requestBody: CreateQrCodeStylingTemplateByAccountRequestBody,
    options?: any,
  ): Promise<CreateQrCodeStylingTemplateByAccountResponseBody> {
    const request = new CreateQrCodeStylingTemplateByAccountRequest(this.session)
    return request.go(this.pathParameters, undefined, requestBody, options)
  }

  async get(
    queryStringParameters: GetQrCodeStylingTemplatesByAccountIdQueryStringParameters,
    options?: any,
  ): Promise<GetQrCodeStylingTemplatesByAccountIdResponseBody> {
    const request = new GetQrCodeStylingTemplatesByAccountIdRequest(this.session)
    return request.go(this.pathParameters, queryStringParameters, options)
  }
}

export class SdkAccountContactsBatchResources extends Resources {
  async delete(
    queryStringParameters: DeleteContactsByAccountIdQueryStringParameters,
    options?: any,
  ): Promise<DeleteContactsByAccountIdResponseBody> {
    const request = new DeleteContactsByAccountIdRequest(this.session)
    return request.go(this.pathParameters, queryStringParameters, options)
  }
}

export class SdkAccountAssetsResources extends Resources {
  async get(
    queryStringParameters: GetAssetsByAccountIdQueryStringParameters,
    options?: any,
  ): Promise<GetAssetsByAccountIdResponseBody> {
    const request = new GetAssetsByAccountIdRequest(this.session)
    return request.go(this.pathParameters, queryStringParameters, options)
  }
}

export class SdkAccountConsentResources extends Resources {
  async get(
    queryStringParameters: GetConsentByAccountIdQueryStringParameters,
    options?: any,
  ): Promise<GetConsentByAccountIdResponseBody> {
    const request = new GetConsentByAccountIdRequest(this.session)
    return request.go(this.pathParameters, queryStringParameters, options)
  }
}

export class SdkAccountContactsResources extends Resources {
  async get(
    queryStringParameters: GetContactsByAccountIdQueryStringParameters,
    options?: any,
  ): Promise<GetContactsByAccountIdResponseBody> {
    const request = new GetContactsByAccountIdRequest(this.session)
    return request.go(this.pathParameters, queryStringParameters, options)
  }
}

export class SdkAccountQrCodesResources extends Resources {
  async get(
    queryStringParameters: GetQrCodesByAccountIdQueryStringParameters,
    options?: any,
  ): Promise<GetQrCodesByAccountIdResponseBody> {
    const request = new GetQrCodesByAccountIdRequest(this.session)
    return request.go(this.pathParameters, queryStringParameters, options)
  }
}

export class SdkAccountScansResources extends Resources {
  async get(
    queryStringParameters: GetScansByAccountIdQueryStringParameters,
    options?: any,
  ): Promise<GetScansByAccountIdResponseBody> {
    const request = new GetScansByAccountIdRequest(this.session)
    return request.go(this.pathParameters, queryStringParameters, options)
  }
}

export class SdkAccountQrcodelogosUploadResources extends Resources {
  async create(
    requestBody: UploadQrCodeLogoByAccountRequestBody,
    options?: any,
  ): Promise<UploadQrCodeLogoByAccountResponseBody> {
    const request = new UploadQrCodeLogoByAccountRequest(this.session)
    return request.go(this.pathParameters, undefined, requestBody, options)
  }
}

export class SdkAccountResource extends Resource {
  assettypes(): SdkAccountAssettypesResources {
    return new SdkAccountAssettypesResources(this.getSession(), this.pathParameters)
  }

  locations(): SdkAccountLocationsResources {
    return new SdkAccountLocationsResources(this.getSession(), this.pathParameters)
  }

  projects(): SdkAccountProjectsResources {
    return new SdkAccountProjectsResources(this.getSession(), this.pathParameters)
  }

  qrcodelogos(): SdkAccountQrcodelogosResources {
    return new SdkAccountQrcodelogosResources(this.getSession(), this.pathParameters)
  }

  stylingtemplates(): SdkAccountStylingtemplatesResources {
    return new SdkAccountStylingtemplatesResources(this.getSession(), this.pathParameters)
  }

  contactsBatch(): SdkAccountContactsBatchResources {
    return new SdkAccountContactsBatchResources(this.getSession(), this.pathParameters)
  }

  assets(): SdkAccountAssetsResources {
    return new SdkAccountAssetsResources(this.getSession(), this.pathParameters)
  }

  consent(): SdkAccountConsentResources {
    return new SdkAccountConsentResources(this.getSession(), this.pathParameters)
  }

  contacts(): SdkAccountContactsResources {
    return new SdkAccountContactsResources(this.getSession(), this.pathParameters)
  }

  qrCodes(): SdkAccountQrCodesResources {
    return new SdkAccountQrCodesResources(this.getSession(), this.pathParameters)
  }

  scans(): SdkAccountScansResources {
    return new SdkAccountScansResources(this.getSession(), this.pathParameters)
  }

  qrcodelogosUpload(): SdkAccountQrcodelogosUploadResources {
    return new SdkAccountQrcodelogosUploadResources(this.getSession(), this.pathParameters)
  }
}

export class SdkAssettypeAssetResource extends Resource {
  async compose(
    requestBody: ComposeAssetByAssetTypeRequestBody,
    options?: any,
  ): Promise<ComposeAssetByAssetTypeResponseBody> {
    const request = new ComposeAssetByAssetTypeRequest(this.session)
    return request.go(this.pathParameters, undefined, requestBody, options)
  }
}

export class SdkAssettypeAssetsResources extends Resources {
  async create(
    requestBody: CreateAssetByAssetTypeRequestBody,
    options?: any,
  ): Promise<CreateAssetByAssetTypeResponseBody> {
    const request = new CreateAssetByAssetTypeRequest(this.session)
    return request.go(this.pathParameters, undefined, requestBody, options)
  }

  async get(
    queryStringParameters: GetAssetsByAssetTypeQueryStringParameters,
    options?: any,
  ): Promise<GetAssetsByAssetTypeResponseBody> {
    const request = new GetAssetsByAssetTypeRequest(this.session)
    return request.go(this.pathParameters, queryStringParameters, options)
  }
}

export class SdkAssettypeLocationsResources extends Resources {
  async get(
    queryStringParameters: GetAssetTypeCountsByLocationQueryStringParameters,
    options?: any,
  ): Promise<GetAssetTypeCountsByLocationResponseBody> {
    const request = new GetAssetTypeCountsByLocationRequest(this.session)
    return request.go(this.pathParameters, queryStringParameters, options)
  }
}

export class SdkAssettypeResource extends Resource {
  asset(assetId: string): SdkAssettypeAssetResource {
    return new SdkAssettypeAssetResource(this.getSession(), {...this.pathParameters, assetId})
  }

  assets(): SdkAssettypeAssetsResources {
    return new SdkAssettypeAssetsResources(this.getSession(), this.pathParameters)
  }

  locations(): SdkAssettypeLocationsResources {
    return new SdkAssettypeLocationsResources(this.getSession(), this.pathParameters)
  }

  async get(
    queryStringParameters: GetAssetTypeByAssetTypeIdQueryStringParameters,
    options?: any,
  ): Promise<GetAssetTypeByAssetTypeIdResponseBody> {
    const request = new GetAssetTypeByAssetTypeIdRequest(this.session)
    return request.go(this.pathParameters, queryStringParameters, options)
  }

  async update(requestBody: UpdateAssetTypeRequestBody, options?: any): Promise<UpdateAssetTypeResponseBody> {
    const request = new UpdateAssetTypeRequest(this.session)
    return request.go(this.pathParameters, undefined, requestBody, options)
  }
}

export class SdkAssetContactsResources extends Resources {
  async create(
    requestBody: CreateContactByAssetIdRequestBody,
    options?: any,
  ): Promise<CreateContactByAssetIdResponseBody> {
    const request = new CreateContactByAssetIdRequest(this.session)
    return request.go(this.pathParameters, undefined, requestBody, options)
  }

  async get(
    queryStringParameters: GetContactsByAssetIdQueryStringParameters,
    options?: any,
  ): Promise<GetContactsByAssetIdResponseBody> {
    const request = new GetContactsByAssetIdRequest(this.session)
    return request.go(this.pathParameters, queryStringParameters, options)
  }
}

export class SdkAssetQrCodesResources extends Resources {
  async create(
    requestBody: CreateQrCodesByAssetIdRequestBody,
    options?: any,
  ): Promise<CreateQrCodesByAssetIdResponseBody> {
    const request = new CreateQrCodesByAssetIdRequest(this.session)
    return request.go(this.pathParameters, undefined, requestBody, options)
  }

  async get(
    queryStringParameters: GetQrCodesByAssetIdQueryStringParameters,
    options?: any,
  ): Promise<GetQrCodesByAssetIdResponseBody> {
    const request = new GetQrCodesByAssetIdRequest(this.session)
    return request.go(this.pathParameters, queryStringParameters, options)
  }
}

export class SdkAssetHistoryResources extends Resources {
  async get(
    queryStringParameters: GetAssetHistoryQueryStringParameters,
    options?: any,
  ): Promise<GetAssetHistoryResponseBody> {
    const request = new GetAssetHistoryRequest(this.session)
    return request.go(this.pathParameters, queryStringParameters, options)
  }
}

export class SdkAssetScansResources extends Resources {
  async get(
    queryStringParameters: GetScansByAssetIdQueryStringParameters,
    options?: any,
  ): Promise<GetScansByAssetIdResponseBody> {
    const request = new GetScansByAssetIdRequest(this.session)
    return request.go(this.pathParameters, queryStringParameters, options)
  }
}

export class SdkAssetContactResource extends Resource {
  async link(requestBody: LinkContactToAssetRequestBody, options?: any): Promise<LinkContactToAssetResponseBody> {
    const request = new LinkContactToAssetRequest(this.session)
    return request.go(this.pathParameters, undefined, requestBody, options)
  }

  async unlink(options?: any): Promise<any> {
    const request = new UnlinkContactToAssetRequest(this.session)
    return request.go(this.pathParameters, undefined, options)
  }
}

export class SdkAssetResource extends Resource {
  contacts(): SdkAssetContactsResources {
    return new SdkAssetContactsResources(this.getSession(), this.pathParameters)
  }

  qrCodes(): SdkAssetQrCodesResources {
    return new SdkAssetQrCodesResources(this.getSession(), this.pathParameters)
  }

  history(): SdkAssetHistoryResources {
    return new SdkAssetHistoryResources(this.getSession(), this.pathParameters)
  }

  scans(): SdkAssetScansResources {
    return new SdkAssetScansResources(this.getSession(), this.pathParameters)
  }

  contact(contactId: string): SdkAssetContactResource {
    return new SdkAssetContactResource(this.getSession(), {...this.pathParameters, contactId})
  }

  async delete(options?: any): Promise<DeleteAssetResponseBody> {
    const request = new DeleteAssetRequest(this.session)
    return request.go(this.pathParameters, undefined, options)
  }

  async get(queryStringParameters: GetAssetQueryStringParameters, options?: any): Promise<GetAssetResponseBody> {
    const request = new GetAssetRequest(this.session)
    return request.go(this.pathParameters, queryStringParameters, options)
  }

  async update(requestBody: UpdateAssetRequestBody, options?: any): Promise<UpdateAssetResponseBody> {
    const request = new UpdateAssetRequest(this.session)
    return request.go(this.pathParameters, undefined, requestBody, options)
  }
}

export class SdkContactConsentResources extends Resources {
  async create(
    requestBody: CreateConsentByContactIdRequestBody,
    options?: any,
  ): Promise<CreateConsentByContactIdResponseBody> {
    const request = new CreateConsentByContactIdRequest(this.session)
    return request.go(this.pathParameters, undefined, requestBody, options)
  }

  async delete(
    queryStringParameters: DeleteConsentByContactIdQueryStringParameters,
    options?: any,
  ): Promise<DeleteConsentByContactIdResponseBody> {
    const request = new DeleteConsentByContactIdRequest(this.session)
    return request.go(this.pathParameters, queryStringParameters, options)
  }

  async get(
    queryStringParameters: GetConsentByContactIdQueryStringParameters,
    options?: any,
  ): Promise<GetConsentByContactIdResponseBody> {
    const request = new GetConsentByContactIdRequest(this.session)
    return request.go(this.pathParameters, queryStringParameters, options)
  }
}

export class SdkContactExportResources extends Resources {
  async get(
    queryStringParameters: GetContactExportByContactIdQueryStringParameters,
    options?: any,
  ): Promise<GetContactExportByContactIdResponseBody> {
    const request = new GetContactExportByContactIdRequest(this.session)
    return request.go(this.pathParameters, queryStringParameters, options)
  }
}

export class SdkContactScansResources extends Resources {
  async get(options?: any): Promise<GetScansByContactIdResponseBody> {
    const request = new GetScansByContactIdRequest(this.session)
    return request.go(this.pathParameters, undefined, options)
  }
}

export class SdkContactScanResource extends Resource {
  async link(options?: any): Promise<LinkContactToScanResponseBody> {
    const request = new LinkContactToScanRequest(this.session)
    return request.go(this.pathParameters, undefined, options)
  }
}

export class SdkContactResource extends Resource {
  consent(): SdkContactConsentResources {
    return new SdkContactConsentResources(this.getSession(), this.pathParameters)
  }

  export(): SdkContactExportResources {
    return new SdkContactExportResources(this.getSession(), this.pathParameters)
  }

  scans(): SdkContactScansResources {
    return new SdkContactScansResources(this.getSession(), this.pathParameters)
  }

  scan(scanId: string): SdkContactScanResource {
    return new SdkContactScanResource(this.getSession(), {...this.pathParameters, scanId})
  }

  async delete(options?: any): Promise<DeleteContactResponseBody> {
    const request = new DeleteContactRequest(this.session)
    return request.go(this.pathParameters, undefined, options)
  }

  async get(options?: any): Promise<GetContactResponseBody> {
    const request = new GetContactRequest(this.session)
    return request.go(this.pathParameters, undefined, options)
  }

  async update(requestBody: UpdateContactRequestBody, options?: any): Promise<UpdateContactResponseBody> {
    const request = new UpdateContactRequest(this.session)
    return request.go(this.pathParameters, undefined, requestBody, options)
  }
}

export class SdkLocationAssetsResources extends Resources {
  async update(
    requestBody: UpdateAssetsLocationsRequestBody,
    options?: any,
  ): Promise<UpdateAssetsLocationsResponseBody> {
    const request = new UpdateAssetsLocationsRequest(this.session)
    return request.go(this.pathParameters, undefined, requestBody, options)
  }

  async get(
    queryStringParameters: GetAssetsByLocationIdQueryStringParameters,
    options?: any,
  ): Promise<GetAssetsByLocationIdResponseBody> {
    const request = new GetAssetsByLocationIdRequest(this.session)
    return request.go(this.pathParameters, queryStringParameters, options)
  }
}

export class SdkLocationAssetTypeResource extends Resource {
  async get(options?: any): Promise<GetAssetTypeCountAtLocationResponseBody> {
    const request = new GetAssetTypeCountAtLocationRequest(this.session)
    return request.go(this.pathParameters, undefined, options)
  }
}

export class SdkLocationAssettypeResource extends Resource {
  async update(
    requestBody: UpdateAssetTypeCountAtLocationRequestBody,
    options?: any,
  ): Promise<UpdateAssetTypeCountAtLocationResponseBody> {
    const request = new UpdateAssetTypeCountAtLocationRequest(this.session)
    return request.go(this.pathParameters, undefined, requestBody, options)
  }
}

export class SdkLocationResource extends Resource {
  assets(): SdkLocationAssetsResources {
    return new SdkLocationAssetsResources(this.getSession(), this.pathParameters)
  }

  assetType(assetTypeId: string): SdkLocationAssetTypeResource {
    return new SdkLocationAssetTypeResource(this.getSession(), {...this.pathParameters, assetTypeId})
  }

  assettype(assetTypeId: string): SdkLocationAssettypeResource {
    return new SdkLocationAssettypeResource(this.getSession(), {...this.pathParameters, assetTypeId})
  }

  async update(requestBody: UpdateLocationRequestBody, options?: any): Promise<UpdateLocationResponseBody> {
    const request = new UpdateLocationRequest(this.session)
    return request.go(this.pathParameters, undefined, requestBody, options)
  }
}

export class SdkProjectAssetsResources extends Resources {
  async create(
    requestBody: CreateAssetByProjectIdRequestBody,
    options?: any,
  ): Promise<CreateAssetByProjectIdResponseBody> {
    const request = new CreateAssetByProjectIdRequest(this.session)
    return request.go(this.pathParameters, undefined, requestBody, options)
  }

  async get(
    queryStringParameters: GetAssetsByProjectIdQueryStringParameters,
    options?: any,
  ): Promise<GetAssetsByProjectIdResponseBody> {
    const request = new GetAssetsByProjectIdRequest(this.session)
    return request.go(this.pathParameters, queryStringParameters, options)
  }
}

export class SdkProjectAssetsBatchResources extends Resources {
  async create(
    requestBody: CreateAssetsByProjectIdRequestBody,
    options?: any,
  ): Promise<CreateAssetsByProjectIdResponseBody> {
    const request = new CreateAssetsByProjectIdRequest(this.session)
    return request.go(this.pathParameters, undefined, requestBody, options)
  }
}

export class SdkProjectContactsResources extends Resources {
  async create(
    requestBody: CreateContactByProjectIdRequestBody,
    options?: any,
  ): Promise<CreateContactByProjectIdResponseBody> {
    const request = new CreateContactByProjectIdRequest(this.session)
    return request.go(this.pathParameters, undefined, requestBody, options)
  }

  async get(
    queryStringParameters: GetContactsByProjectIdQueryStringParameters,
    options?: any,
  ): Promise<GetContactsByProjectIdResponseBody> {
    const request = new GetContactsByProjectIdRequest(this.session)
    return request.go(this.pathParameters, queryStringParameters, options)
  }
}

export class SdkProjectContactsBatchResources extends Resources {
  async create(
    requestBody: CreateContactsByProjectIdRequestBody,
    options?: any,
  ): Promise<CreateContactsByProjectIdResponseBody> {
    const request = new CreateContactsByProjectIdRequest(this.session)
    return request.go(this.pathParameters, undefined, requestBody, options)
  }

  async delete(
    queryStringParameters: DeleteContactsByProjectIdQueryStringParameters,
    options?: any,
  ): Promise<DeleteContactsByProjectIdResponseBody> {
    const request = new DeleteContactsByProjectIdRequest(this.session)
    return request.go(this.pathParameters, queryStringParameters, options)
  }
}

export class SdkProjectSmsTemplatesResources extends Resources {
  async create(
    requestBody: CreateSmsTemplateByProjectIdRequestBody,
    options?: any,
  ): Promise<CreateSmsTemplateByProjectIdResponseBody> {
    const request = new CreateSmsTemplateByProjectIdRequest(this.session)
    return request.go(this.pathParameters, undefined, requestBody, options)
  }

  async get(
    queryStringParameters: GetSmsTemplatesByProjectIdQueryStringParameters,
    options?: any,
  ): Promise<GetSmsTemplatesByProjectIdResponseBody> {
    const request = new GetSmsTemplatesByProjectIdRequest(this.session)
    return request.go(this.pathParameters, queryStringParameters, options)
  }
}

export class SdkProjectSmsTemplateResource extends Resource {
  async delete(options?: any): Promise<DeleteSmsTemplateByProjectIdResponseBody> {
    const request = new DeleteSmsTemplateByProjectIdRequest(this.session)
    return request.go(this.pathParameters, undefined, options)
  }

  async get(options?: any): Promise<GetSmsTemplateByProjectIdResponseBody> {
    const request = new GetSmsTemplateByProjectIdRequest(this.session)
    return request.go(this.pathParameters, undefined, options)
  }

  async update(requestBody: UpdateSmsTemplateRequestBody, options?: any): Promise<UpdateSmsTemplateResponseBody> {
    const request = new UpdateSmsTemplateRequest(this.session)
    return request.go(this.pathParameters, undefined, requestBody, options)
  }
}

export class SdkProjectConsentResources extends Resources {
  async get(
    queryStringParameters: GetConsentByProjectIdQueryStringParameters,
    options?: any,
  ): Promise<GetConsentByProjectIdResponseBody> {
    const request = new GetConsentByProjectIdRequest(this.session)
    return request.go(this.pathParameters, queryStringParameters, options)
  }
}

export class SdkProjectQrCodesResources extends Resources {
  async get(
    queryStringParameters: GetQrCodesByProjectIdQueryStringParameters,
    options?: any,
  ): Promise<GetQrCodesByProjectIdResponseBody> {
    const request = new GetQrCodesByProjectIdRequest(this.session)
    return request.go(this.pathParameters, queryStringParameters, options)
  }
}

export class SdkProjectScansResources extends Resources {
  async get(
    queryStringParameters: GetScansByProjectIdQueryStringParameters,
    options?: any,
  ): Promise<GetScansByProjectIdResponseBody> {
    const request = new GetScansByProjectIdRequest(this.session)
    return request.go(this.pathParameters, queryStringParameters, options)
  }
}

export class SdkProjectResource extends Resource {
  assets(): SdkProjectAssetsResources {
    return new SdkProjectAssetsResources(this.getSession(), this.pathParameters)
  }

  assetsBatch(): SdkProjectAssetsBatchResources {
    return new SdkProjectAssetsBatchResources(this.getSession(), this.pathParameters)
  }

  contacts(): SdkProjectContactsResources {
    return new SdkProjectContactsResources(this.getSession(), this.pathParameters)
  }

  contactsBatch(): SdkProjectContactsBatchResources {
    return new SdkProjectContactsBatchResources(this.getSession(), this.pathParameters)
  }

  smsTemplates(): SdkProjectSmsTemplatesResources {
    return new SdkProjectSmsTemplatesResources(this.getSession(), this.pathParameters)
  }

  smsTemplate(smsTemplateName: string): SdkProjectSmsTemplateResource {
    return new SdkProjectSmsTemplateResource(this.getSession(), {...this.pathParameters, smsTemplateName})
  }

  consent(): SdkProjectConsentResources {
    return new SdkProjectConsentResources(this.getSession(), this.pathParameters)
  }

  qrCodes(): SdkProjectQrCodesResources {
    return new SdkProjectQrCodesResources(this.getSession(), this.pathParameters)
  }

  scans(): SdkProjectScansResources {
    return new SdkProjectScansResources(this.getSession(), this.pathParameters)
  }

  async delete(options?: any): Promise<DeleteProjectResponseBody> {
    const request = new DeleteProjectRequest(this.session)
    return request.go(this.pathParameters, undefined, options)
  }

  async get(options?: any): Promise<GetProjectByProjectIdResponseBody> {
    const request = new GetProjectByProjectIdRequest(this.session)
    return request.go(this.pathParameters, undefined, options)
  }

  async update(
    requestBody: UpdateProjectByProjectIdRequestBody,
    options?: any,
  ): Promise<UpdateProjectByProjectIdResponseBody> {
    const request = new UpdateProjectByProjectIdRequest(this.session)
    return request.go(this.pathParameters, undefined, requestBody, options)
  }
}

export class SdkQrcodelogoResource extends Resource {
  async get(options?: any): Promise<GetQrCodeLogoByQrCodeLogoIdResponseBody> {
    const request = new GetQrCodeLogoByQrCodeLogoIdRequest(this.session)
    return request.go(this.pathParameters, undefined, options)
  }

  async update(
    requestBody: UpdateQrCodeLogoByQrCodeLogoIdRequestBody,
    options?: any,
  ): Promise<UpdateQrCodeLogoByQrCodeLogoIdResponseBody> {
    const request = new UpdateQrCodeLogoByQrCodeLogoIdRequest(this.session)
    return request.go(this.pathParameters, undefined, requestBody, options)
  }
}

export class SdkQrCodeResource extends Resource {
  async delete(options?: any): Promise<DeleteQrCodeResponseBody> {
    const request = new DeleteQrCodeRequest(this.session)
    return request.go(this.pathParameters, undefined, options)
  }

  async get(queryStringParameters: GetQrCodeQueryStringParameters, options?: any): Promise<GetQrCodeResponseBody> {
    const request = new GetQrCodeRequest(this.session)
    return request.go(this.pathParameters, queryStringParameters, options)
  }

  async update(requestBody: UpdateQrCodeRequestBody, options?: any): Promise<UpdateQrCodeResponseBody> {
    const request = new UpdateQrCodeRequest(this.session)
    return request.go(this.pathParameters, undefined, requestBody, options)
  }
}

export class SdkScanContactsResources extends Resources {
  async create(
    requestBody: CreateContactByScanIdRequestBody,
    options?: any,
  ): Promise<CreateContactByScanIdResponseBody> {
    const request = new CreateContactByScanIdRequest(this.session)
    return request.go(this.pathParameters, undefined, requestBody, options)
  }
}

export class SdkScanSmsResources extends Resources {
  async send(requestBody: SendSmsByScanIdRequestBody, options?: any): Promise<SendSmsByScanIdResponseBody> {
    const request = new SendSmsByScanIdRequest(this.session)
    return request.go(this.pathParameters, undefined, requestBody, options)
  }
}

export class SdkScanResource extends Resource {
  contacts(): SdkScanContactsResources {
    return new SdkScanContactsResources(this.getSession(), this.pathParameters)
  }

  sms(): SdkScanSmsResources {
    return new SdkScanSmsResources(this.getSession(), this.pathParameters)
  }

  async get(options?: any): Promise<GetScanResponseBody> {
    const request = new GetScanRequest(this.session)
    return request.go(this.pathParameters, undefined, options)
  }
}

export class SdkStylingtemplateResource extends Resource {
  async delete(options?: any): Promise<DeleteQrCodeStylingTemplateByStylingTemplateIdResponseBody> {
    const request = new DeleteQrCodeStylingTemplateByStylingTemplateIdRequest(this.session)
    return request.go(this.pathParameters, undefined, options)
  }

  async get(options?: any): Promise<GetQrCodeStylingTemplateByStylingTemplateIdResponseBody> {
    const request = new GetQrCodeStylingTemplateByStylingTemplateIdRequest(this.session)
    return request.go(this.pathParameters, undefined, options)
  }

  async update(
    requestBody: UpdateQrCodeStylingTemplateByStylingTemplateIdRequestBody,
    options?: any,
  ): Promise<UpdateQrCodeStylingTemplateByStylingTemplateIdResponseBody> {
    const request = new UpdateQrCodeStylingTemplateByStylingTemplateIdRequest(this.session)
    return request.go(this.pathParameters, undefined, requestBody, options)
  }
}

export class SdkAuthSessionResources extends Resources {
  async delete(options?: any): Promise<GetSessionRefreshApiKeySessionResponseBody> {
    const request = new DeleteSessionRequest(this.session)
    return request.go(this.pathParameters, undefined, options)
  }

  async create(requestBody: GetSessionRequestBody, options?: any): Promise<GetSessionRefreshApiKeySessionResponseBody> {
    const request = new GetSessionRequest(this.session)
    return request.go(this.pathParameters, undefined, requestBody, options)
  }
}

export class SdkRefreshAuthSessionResources extends Resources {
  async create(options?: any): Promise<GetSessionRefreshApiKeySessionResponseBody> {
    const request = new GetSessionRefreshRequest(this.session)
    return request.go(this.pathParameters, undefined, options)
  }
}

export class SdkResources extends Resources {
  account(accountId: string): SdkAccountResource {
    return new SdkAccountResource(this.getSession(), {...this.pathParameters, accountId})
  }

  assettype(assetTypeId: string): SdkAssettypeResource {
    return new SdkAssettypeResource(this.getSession(), {...this.pathParameters, assetTypeId})
  }

  asset(assetId: string): SdkAssetResource {
    return new SdkAssetResource(this.getSession(), {...this.pathParameters, assetId})
  }

  contact(contactId: string): SdkContactResource {
    return new SdkContactResource(this.getSession(), {...this.pathParameters, contactId})
  }

  location(locationId: string): SdkLocationResource {
    return new SdkLocationResource(this.getSession(), {...this.pathParameters, locationId})
  }

  project(projectId: string): SdkProjectResource {
    return new SdkProjectResource(this.getSession(), {...this.pathParameters, projectId})
  }

  qrcodelogo(qrCodeLogoId: string): SdkQrcodelogoResource {
    return new SdkQrcodelogoResource(this.getSession(), {...this.pathParameters, qrCodeLogoId})
  }

  qrCode(qrCodeId: string): SdkQrCodeResource {
    return new SdkQrCodeResource(this.getSession(), {...this.pathParameters, qrCodeId})
  }

  scan(scanId: string): SdkScanResource {
    return new SdkScanResource(this.getSession(), {...this.pathParameters, scanId})
  }

  stylingtemplate(stylingTemplateId: string): SdkStylingtemplateResource {
    return new SdkStylingtemplateResource(this.getSession(), {...this.pathParameters, stylingTemplateId})
  }

  authSession(): SdkAuthSessionResources {
    return new SdkAuthSessionResources(this.getSession(), this.pathParameters)
  }

  refreshAuthSession(): SdkRefreshAuthSessionResources {
    return new SdkRefreshAuthSessionResources(this.getSession(), this.pathParameters)
  }
}

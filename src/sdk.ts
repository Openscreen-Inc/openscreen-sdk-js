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
  created?: string | Date | number
  modified?: string | Date | number
}

export interface Response {
  body?: DdbEntity
  code: number
  created?: string | Date | number
  data?: NestedKeyValueObject
  message?: string
  modified?: string | Date | number
  name: string
  request?: string
  responseId: string
  source?: string
  stack?: Array<any>
  userId: string
}

export interface Account {
  accountId: string
  assetCount: number
  collectTaxInfo?: boolean
  companyName?: string
  contactCount: number
  created?: string | Date | number
  dynamicQrCodeCount: number
  emailCount: number
  isLocked?: boolean
  lastScanId?: string
  mmsCount: number
  modified?: string | Date | number
  needsPaymentUpdate: boolean
  paymentFailedDate?: string
  projectCount: number
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
  created?: string | Date | number
  email: string
  modified?: string | Date | number
}

export interface AccountInvitation {
  accountId: string
  companyName?: string
  created?: string | Date | number
  email: string
  expiresAt?: string | Date | number
  firstName: string
  invitationId: string
  lastName: string
  modified?: string | Date | number
  sendersFirstName: string
  sendersLastName: string
  sendersUserId: string
  userRole: AccountUserRole
}

export interface AccountPhoneContact {
  accountId: string
  contactId: string
  created?: string | Date | number
  modified?: string | Date | number
  phone: string
}

export interface AccountResponse extends Account {
  accountId: string
  assetCount: number
  collectTaxInfo?: boolean
  companyName?: string
  contactCount: number
  created?: string | Date | number
  currentPeriod: PricePlanPeriod
  dynamicQrCodeCount: number
  emailCount: number
  isLocked?: boolean
  lastScanId?: string
  mmsCount: number
  modified?: string | Date | number
  needsPaymentUpdate: boolean
  paymentFailedDate?: string
  pricePlan: PricePlan
  projectCount: number
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
  created?: string | Date | number
  modified?: string | Date | number
  scanId: string
}

export interface AccountUser {
  accountId: string
  created?: string | Date | number
  modified?: string | Date | number
  userId: string
  userRole: AccountUserRole
}

export interface ApiKey {
  apiKeyId: string
  created?: string | Date | number
  description?: string
  key: string
  modified?: string | Date | number
  name: string
}

export interface ApiKeyCredentials {
  algorithm?: string
  apiKeyId: string
  created?: string | Date | number
  description?: string
  invalidAttemptCount: number
  key: string
  modified?: string | Date | number
  name: string
  secret?: string
  status: string
}

export interface ApiKeySessionResponseBody {
  apiKeyId: string
  expires: string | Date | number
  scope: AuthTokenScope
}

export interface Asset {
  assetId: string
  created?: string | Date | number
  customAttributes?: NestedKeyValueObject
  description?: string
  dynamicQrCodeCount: number
  lastScanId?: string
  modified?: string | Date | number
  name: string
  projectId: string
  scanCount: number
  staticQrCodeCount: number
}

export interface AssetContact {
  assetId: string
  contactId: string
  created?: string | Date | number
  modified?: string | Date | number
  type?: string
}

export interface Contact {
  accountId: string
  cellPhone?: string
  consent?: ContactConsent[]
  contactId: string
  created?: string | Date | number
  customAttributes?: NestedKeyValueObject
  emailAddress?: string
  firstName: string
  lastName: string
  lastScan?: LastScan
  lastScanProjectName?: string
  lastSms?: string
  mailingAddress?: ContactMailingAddress
  middleName: string
  modified?: string | Date | number
  nickname: string
  scanCount?: number
  type?: string
}

export interface ContactAccountCustomConsent {
  accountId: string
  consentStatus: ConsentStatus
  consentedAt: string | Date | number
  contactId: string
  created?: string | Date | number
  customAttributes?: NestedKeyValueObject
  modified?: string | Date | number
  url?: string
  urls: string[]
}

export interface ContactAccountDataConsent {
  accountId: string
  consentStatus: ConsentStatus
  consentedAt: string | Date | number
  contactId: string
  created?: string | Date | number
  customAttributes?: NestedKeyValueObject
  modified?: string | Date | number
  url?: string
  urls: string[]
}

export interface ContactAccountEmailConsent {
  accountId: string
  consentStatus: ConsentStatus
  consentedAt: string | Date | number
  contactId: string
  created?: string | Date | number
  customAttributes?: NestedKeyValueObject
  modified?: string | Date | number
  url?: string
  urls: string[]
}

export interface ContactAccountSmsConsent {
  accountId: string
  consentStatus: ConsentStatus
  consentedAt: string | Date | number
  contactId: string
  created?: string | Date | number
  customAttributes?: NestedKeyValueObject
  modified?: string | Date | number
  url?: string
  urls: string[]
}

export interface ContactConsent {
  accountId?: string
  accountName?: string
  consentStatus?: ConsentStatus
  consentType?: ConsentType
  consented: boolean
  consentedAt: string | Date | number
  contactId?: string
  customAttributes?: NestedKeyValueObject
  projectId?: string
  projectName?: string
  url?: string
  urls?: string[]
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
  created?: string | Date | number
  customAttributes?: NestedKeyValueObject
  modified?: string | Date | number
  projectId: string
  url?: string
  urls: string[]
}

export interface ContactProjectDataConsent {
  consentStatus: ConsentStatus
  consentedAt: string | Date | number
  contactId: string
  created?: string | Date | number
  customAttributes?: NestedKeyValueObject
  modified?: string | Date | number
  projectId: string
  url?: string
  urls: string[]
}

export interface ContactProjectEmailConsent {
  accountId: string
  consentStatus: ConsentStatus
  consentedAt: string | Date | number
  contactId: string
  created?: string | Date | number
  customAttributes?: NestedKeyValueObject
  modified?: string | Date | number
  projectId: string
  url?: string
  urls: string[]
}

export interface ContactProjectSmsConsent {
  accountId: string
  consentStatus: ConsentStatus
  consentedAt: string | Date | number
  contactId: string
  created?: string | Date | number
  customAttributes?: NestedKeyValueObject
  modified?: string | Date | number
  projectId: string
  url?: string
  urls: string[]
}

export interface EmailInvitation {
  accountId: string
  created?: string | Date | number
  email: string
  expiresAt?: string | Date | number
  invitationId: string
  modified?: string | Date | number
}

export interface LastScan {
  assetId: string
  assetName: string
  browserName?: string
  browserVersion?: string
  cpuArchitecture?: string
  created?: string | Date | number
  deviceModel?: string
  deviceType?: string
  deviceVendor?: string
  engineName?: string
  engineVersion?: string
  ipAddress?: string
  locationCityName?: string
  locationCountryCode?: string
  locationCountryName?: string
  locationLatitude?: string
  locationLongitude?: string
  locationPostalCode?: string
  locationRegionCode?: string
  locationRegionName?: string
  locationTimeZone?: string
  modified?: string | Date | number
  osName?: string
  osVersion?: string
  projectId: string
  qrCodeId?: string
  scanId: string
  scanTime: string | Date | number
  userAgent?: string
}

export interface MostScannedAssetResponse {
  assetId?: string
  lastScanDate?: string | Date | number
  name: string
  projectId?: string
  todaysScansCount?: number
  totalScansCount?: number
  weeklyScansCount?: number
}

export interface NestedAsset {
  customAttributes?: NestedKeyValueObject
  description?: string
  name: string
  qrCodes?: NestedQrCode[]
}

export interface NestedContact {
  asset?: NestedAsset
  cellPhone?: string
  consent?: ContactConsent[]
  customAttributes?: NestedKeyValueObject
  emailAddress?: string
  firstName?: string
  lastName?: string
  mailingAddress?: ContactMailingAddress
  middleName?: string
  nickname?: string
  type?: string
}

export interface NestedQrCode {
  dynamicRedirectType?: QrCodeDynamicRedirectType
  imageOptions?: QrCodeImageOptions
  intent?: string
  intentState?: NestedKeyValueObject
  intentType?: QrCodeIntentType
  locatorKeyType?: QrCodeLocatorKeyType
  status?: QrCodeStatus
  validFrom?: string | Date | number
  validTo?: string | Date | number
}

export interface PhoneSession {
  contactId: string
  contactPhone: string
  created?: string | Date | number
  expiresAt?: string | Date | number
  modified?: string | Date | number
  smsId: string
  twilioPhone: string
}

export interface PricePlan {
  annualPrice: number
  assets: number
  contacts: number
  created?: string | Date | number
  dataExport: boolean
  emails: number
  mms: number
  modified?: string | Date | number
  monthlyPrice: number
  name: string
  paymentPeriod?: string
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
  assetsLimit?: number
  assetsTotal: number
  contactsLimit?: number
  contactsTotal: number
  created?: string | Date | number
  emailsLimit?: number
  emailsSentThisPeriod?: number
  emailsTotal: number
  invoiceId?: string
  mmsLimit?: number
  mmsSentThisPeriod?: number
  mmsTotal: number
  modified?: string | Date | number
  period: string | Date | number
  periodEndDate: string | Date | number
  pricePlanId: string
  projectsLimit?: number
  projectsTotal: number
  qrCodesLimit?: number
  qrCodesTotal: number
  qrScansLimit?: number
  scansUsedTotal: number
  smsLimit?: number
  smsSentThisPeriod?: number
  smsTotal: number
  usersLimit?: number
  usersTotal: number
}

export interface Project {
  assetCount: number
  companyName?: string
  contactCount: number
  created?: string | Date | number
  description?: string
  dynamicQrCodeCount: number
  lastScanId?: string
  modified?: string | Date | number
  name: string
  projectId: string
  scanCount: number
  staticQrCodeCount: number
  status?: ProjectStatus
}

export interface ProjectAccount {
  accountId: string
  created?: string | Date | number
  modified?: string | Date | number
  projectId: string
}

export interface ProjectContact {
  contactId: string
  created?: string | Date | number
  modified?: string | Date | number
  projectId: string
}

export interface ProjectEmailContact {
  contactId: string
  created?: string | Date | number
  email: string
  modified?: string | Date | number
  projectId: string
}

export interface ProjectPhoneContact {
  contactId: string
  created?: string | Date | number
  modified?: string | Date | number
  phone: string
  projectId: string
}

export interface ProjectScan {
  assetId: string
  created?: string | Date | number
  modified?: string | Date | number
  projectId: string
  scanId: string
}

export interface QrCode {
  assetId: string
  created?: string | Date | number
  dynamicRedirectType?: QrCodeDynamicRedirectType
  imageOptions?: QrCodeImageOptions
  intent?: string
  intentState?: NestedKeyValueObject
  intentType?: QrCodeIntentType
  locatorKey: string
  locatorKeyType?: QrCodeLocatorKeyType
  modified?: string | Date | number
  qrCodeId: string
  scanCount: number
  status?: QrCodeStatus
  validFrom?: string | Date | number
  validTo?: string | Date | number
}

export interface QrCodeImage {
  data: string
  options?: QrCodeImageOptions
}

export interface QrCodeImageOptions {
  background?: string
  backgroundGradientColors?: string
  backgroundGradientRotation?: number
  backgroundGradientType?: QrCodeGradientTypes
  cornerDotColor?: string
  cornerDotType?: QrCodeCornerDotTypes
  cornerSquareColor?: string
  cornerSquareType?: QrCodeCornerSquareTypes
  darkColor?: string
  dataUrl: boolean
  dotType?: QrCodeDotTypes
  errorCorrectionLevel?: QrCodeErrorCorrectionLevel
  foreground?: string
  foregroundGradientColors?: string
  foregroundGradientRotation?: number
  foregroundGradientType?: QrCodeGradientTypes
  format?: QrCodeType
  lightColor?: string
  logo?: string
  logoMargin?: number
  margin?: number
  scale?: number
  version?: number
  width?: number
}

export interface QrCodeLocator {
  created?: string | Date | number
  locatorKey: string
  modified?: string | Date | number
  qrCodeId: string
}

export interface QrCodeNamed extends QrCode {
  assetId: string
  created?: string | Date | number
  dynamicRedirectType?: QrCodeDynamicRedirectType
  imageOptions?: QrCodeImageOptions
  intent?: string
  intentState?: NestedKeyValueObject
  intentType?: QrCodeIntentType
  locatorKey: string
  locatorKeyType?: QrCodeLocatorKeyType
  modified?: string | Date | number
  name: string
  projectId?: string
  qrCodeId: string
  scanCount: number
  status?: QrCodeStatus
  validFrom?: string | Date | number
  validTo?: string | Date | number
}

export interface ResponseAsset {
  assetId: string
  created?: string | Date | number
  customAttributes?: NestedKeyValueObject
  description?: string
  lastScan?: LastScan
  modified?: string | Date | number
  name: string
  projectId: string
  qrCodes?: ResponseQrCode[]
  scanCount: number
}

export interface ResponseBodyUser {
  created: string | Date | number
  email: string
  expiresAt?: string | Date | number
  firstName: string
  invitationId?: string
  lastName: string
  middleName: string
  userId?: string
  userRole: AccountUserRole
}

export interface ResponseQrCode {
  assetId: string
  created?: string | Date | number
  dynamicRedirectType?: QrCodeDynamicRedirectType
  image: QrCodeImage
  intent?: string
  intentState?: NestedKeyValueObject
  intentType?: QrCodeIntentType
  locatorKey: string
  locatorKeyType?: QrCodeLocatorKeyType
  modified?: string | Date | number
  name?: string
  projectId?: string
  qrCodeId: string
  scanCount: number
  status?: QrCodeStatus
  validFrom?: string | Date | number
  validTo?: string | Date | number
}

export interface Scan {
  assetId: string
  assetName: string
  browserName?: string
  browserVersion?: string
  cpuArchitecture?: string
  created?: string | Date | number
  deviceModel?: string
  deviceType?: string
  deviceVendor?: string
  engineName?: string
  engineVersion?: string
  ipAddress?: string
  locationCityName?: string
  locationCountryCode?: string
  locationCountryName?: string
  locationLatitude?: string
  locationLongitude?: string
  locationPostalCode?: string
  locationRegionCode?: string
  locationRegionName?: string
  locationTimeZone?: string
  modified?: string | Date | number
  osName?: string
  osVersion?: string
  projectId: string
  qrCodeId?: string
  scanId: string
  scanTime: string | Date | number
  userAgent?: string
}

export interface ScanContact {
  assetId: string
  assetName: string
  contactId: string
  created?: string | Date | number
  modified?: string | Date | number
  projectId: string
  scanId: string
}

export interface Sms {
  body: string
  contactId: string
  created?: string | Date | number
  delivered?: boolean
  deliveredAt?: string | Date | number
  from: string
  inbound: boolean
  modified?: string | Date | number
  price?: number
  priceUnit: string
  projectId: string
  responses?: SmsResponse[]
  smsId: string
  smsTemplateName?: string
  status?: string
  to: string
}

export interface SmsResponse {
  body: string
  contactPhone: string
  smsId: string
  twilioPhone: string
}

export interface SmsTemplate {
  body?: string
  created?: string | Date | number
  modified?: string | Date | number
  projectId: string
  responseUrl?: string
  smsTemplateName: string
  statusUrl?: string
}

export interface SuspendedAccount {
  created?: string | Date | number
  isLocked: boolean
  modified?: string | Date | number
  paymentFailDate: string | Date | number
  suspendedAccount: string
}

export interface User {
  created?: string | Date | number
  email: string
  firstName: string
  lastName: string
  middleName: string
  modified?: string | Date | number
  userId: string
}

export interface UserSessionResponseBody {
  expires: string | Date | number
  scope: AuthTokenScope
  user?: User
  userId: string
}

export interface UserSettings {
  created?: string | Date | number
  lastSelectedAccountId?: string
  modified?: string | Date | number
  path: UserSettingsDomain
  userId: string
}

// HANDLER INTERFACE TYPES

export interface CreateProjectByAccountIdPathParameters {
  accountId: string
}

export interface CreateProjectByAccountIdRequestBody {
  companyName?: string
  description?: string
  name: string
}

export interface CreateProjectByAccountIdResponseBody {
  accountId: string
  project: Project
}

export interface DeleteContactsByAccountIdPathParameters {
  accountId: string
}

export interface DeleteContactsByAccountIdQueryStringParameters {
  cellPhone?: string
  emailAddress?: string
}

export interface DeleteContactsByAccountIdResponseBody {
  accountId: string
  contacts: Contact[]
}

export interface GetAssetsByAccountIdPathParameters {
  accountId: string
}

export interface GetAssetsByAccountIdQueryStringParameters {
  lastKey?: string
  limit?: number
  name?: string
}

export interface GetAssetsByAccountIdResponseBody {
  accountId: string
  assets: Asset[]
  lastKey?: string
  numberOfAssets: number
}

export interface GetConsentByAccountIdPathParameters {
  accountId: string
}

export interface GetConsentByAccountIdQueryStringParameters {
  consentStatus?: ConsentStatus
  consentType: ConsentType
  lastKey?: string
  limit?: number
}

export interface GetConsentByAccountIdResponseBody {
  accountId: string
  consent: ContactConsent[]
  lastKey?: string
}

export interface GetContactsByAccountIdPathParameters {
  accountId: string
}

export interface GetContactsByAccountIdQueryStringParameters {
  assetName?: string
  contactName?: string
  email?: string
  lastKey?: string
  limit?: number
  phone?: string
}

export interface GetContactsByAccountIdResponseBody {
  accountId: string
  contacts: Contact[]
  lastKey?: string
  numberOfContacts: number
}

export interface GetProjectsByAccountIdPathParameters {
  accountId: string
}

export interface GetProjectsByAccountIdQueryStringParameters {
  lastKey?: string
  limit?: number
  name?: string
}

export interface GetProjectsByAccountIdResponseBody {
  accountId: string
  lastKey?: string
  next?: string
  numberOfProjects: number
  projects: Project[]
}

export interface GetQrCodesByAccountIdPathParameters {
  accountId: string
}

export interface GetQrCodesByAccountIdQueryStringParameters {
  assetName?: string
  lastKey?: string
  limit?: number
}

export interface GetQrCodesByAccountIdResponseBody {
  accountId: string
  lastKey?: string
  numberOfQrCodes: number
  qrCodes: QrCodeNamed[]
}

export interface GetScansByAccountIdPathParameters {
  accountId: string
}

export interface GetScansByAccountIdQueryStringParameters {
  ascending?: boolean
  assetName?: string
  contactId?: string
  lastKey?: string
  limit?: number
}

export interface GetScansByAccountIdResponseBody {
  accountId: string
  lastKey?: string
  numberOfScans: number
  scans: Scan[]
}

export interface CreateContactByAssetIdPathParameters {
  assetId: string
}

export interface CreateContactByAssetIdRequestBody {
  cellPhone?: string
  consent?: ContactConsent[]
  customAttributes?: NestedKeyValueObject
  emailAddress?: string
  firstName?: string
  lastName?: string
  mailingAddress?: ContactMailingAddress
  middleName?: string
  nickname?: string
  type?: string
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

export interface CreateQrCodeByAssetIdRequestBody {
  dynamicRedirectType?: QrCodeDynamicRedirectType
  imageOptions?: QrCodeImageOptions
  intent?: string
  intentState?: NestedKeyValueObject
  intentType?: QrCodeIntentType
  locatorKeyType?: QrCodeLocatorKeyType
  status?: QrCodeStatus
  validFrom?: string | Date | number
  validTo?: string | Date | number
}

export interface CreateQrCodeByAssetIdResponseBody {
  asset: Asset
  assetId: string
  locatorKey: string
  qrCode: ResponseQrCode
  qrCodeId: string
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
  background?: string
  backgroundGradientColors?: string
  backgroundGradientRotation?: number
  backgroundGradientType?: QrCodeGradientTypes
  cornerDotColor?: string
  cornerDotType?: QrCodeCornerDotTypes
  cornerSquareColor?: string
  cornerSquareType?: QrCodeCornerSquareTypes
  darkColor?: string
  dataUrl?: boolean
  dotType?: QrCodeDotTypes
  errorCorrectionLevel?: QrCodeErrorCorrectionLevel
  foreground?: string
  foregroundGradientColors?: string
  foregroundGradientRotation?: number
  foregroundGradientType?: QrCodeGradientTypes
  format?: QrCodeType
  lightColor?: string
  logo?: string
  logoMargin?: number
  margin?: number
  scale?: number
  version?: number
  width?: number
}

export interface GetAssetResponseBody {
  asset: ResponseAsset
  assetId: string
}

export interface GetContactsByAssetIdPathParameters {
  assetId: string
}

export interface GetContactsByAssetIdQueryStringParameters {
  lastKey?: string
  limit?: number
}

export interface GetContactsByAssetIdResponseBody {
  assetContacts: AssetContact[]
  assetId: string
  contacts: Contact[]
  lastKey?: string
  numberOfContacts: number
}

export interface GetQrCodesByAssetIdPathParameters {
  assetId: string
}

export interface GetQrCodesByAssetIdQueryStringParameters {
  background?: string
  backgroundGradientColors?: string
  backgroundGradientRotation?: number
  backgroundGradientType?: QrCodeGradientTypes
  cornerDotColor?: string
  cornerDotType?: QrCodeCornerDotTypes
  cornerSquareColor?: string
  cornerSquareType?: QrCodeCornerSquareTypes
  darkColor?: string
  dataUrl?: boolean
  dotType?: QrCodeDotTypes
  errorCorrectionLevel?: QrCodeErrorCorrectionLevel
  foreground?: string
  foregroundGradientColors?: string
  foregroundGradientRotation?: number
  foregroundGradientType?: QrCodeGradientTypes
  format?: QrCodeType
  lastKey?: string
  lightColor?: string
  limit?: number
  logo?: string
  logoMargin?: number
  margin?: number
  scale?: number
  version?: number
  width?: number
}

export interface GetQrCodesByAssetIdResponseBody {
  assetId: string
  lastKey?: string
  numberOfQrCodes: number
  qrCodes: ResponseQrCode[]
}

export interface GetScansByAssetIdPathParameters {
  assetId: string
}

export interface GetScansByAssetIdQueryStringParameters {
  ascending?: boolean
  lastKey?: string
  limit?: number
}

export interface GetScansByAssetIdResponseBody {
  assetId: string
  lastKey?: string
  numberOfScans: number
  scans: Scan[]
}

export interface LinkContactToAssetPathParameters {
  assetId: string
  contactId: string
}

export interface LinkContactToAssetRequestBody {
  type?: string
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
  customAttributes?: NestedKeyValueObject
  description?: string
}

export interface UpdateAssetResponseBody {
  asset: Asset
  assetId: string
}

export interface CreateConsentByContactIdPathParameters {
  contactId: string
}

export interface CreateConsentByContactIdRequestBody {
  consentStatus?: ConsentStatus
  consentType: ConsentType
  consentedAt: string | Date | number
  projectId?: string
  url?: string
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
  projectId?: string
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
  consentType?: ConsentType
  lastKey?: string
  limit?: number
  projectId?: string
}

export interface GetConsentByContactIdResponseBody {
  consent: ContactConsent[]
  contactId: string
  lastKey?: string
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
  created?: string | Date | number
  modified?: string | Date | number
  projectId: string
  scanId: string
}

export interface UpdateContactPathParameters {
  contactId: string
}

export interface UpdateContactRequestBody {
  cellPhone?: string
  consent?: ContactConsent[]
  customAttributes?: NestedKeyValueObject
  emailAddress?: string
  firstName?: string
  lastName?: string
  mailingAddress?: ContactMailingAddress
  middleName?: string
  nickname?: string
}

export interface UpdateContactResponseBody {
  contact: Contact
  contactId: string
}

export interface CreateAssetByProjectIdPathParameters {
  projectId: string
}

export interface CreateAssetByProjectIdRequestBody extends NestedAsset {
  customAttributes?: NestedKeyValueObject
  description?: string
  name: string
  qrCodes?: NestedQrCode[]
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
  asset?: NestedAsset
  cellPhone?: string
  consent?: ContactConsent[]
  customAttributes?: NestedKeyValueObject
  emailAddress?: string
  firstName?: string
  lastName?: string
  mailingAddress?: ContactMailingAddress
  middleName?: string
  nickname?: string
  type?: string
}

export interface CreateContactByProjectIdResponseBody {
  asset?: Asset
  assetContact?: AssetContact
  contact: Contact
  projectContact: ProjectContact
  projectId: string
  qrCodes?: QrCode[]
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
  body?: string
  responseUrl?: string
  smsTemplateName: string
  statusUrl?: string
}

export interface CreateSmsTemplateByProjectIdResponseBody {
  smsTemplate: SmsTemplate
}

export interface DeleteContactsByProjectIdPathParameters {
  projectId: string
}

export interface DeleteContactsByProjectIdQueryStringParameters {
  cellPhone?: string
  emailAddress?: string
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
  body?: string
  projectId: string
  responseUrl?: string
  smsTemplateName?: string
  statusUrl?: string
}

export interface GetAssetsByProjectIdPathParameters {
  projectId: string
}

export interface GetAssetsByProjectIdQueryStringParameters {
  lastKey?: string
  limit?: number
  name?: string
}

export interface GetAssetsByProjectIdResponseBody {
  assets: Asset[]
  lastKey?: string
  numberOfAssets: number
  projectId: string
}

export interface GetConsentByProjectIdPathParameters {
  projectId: string
}

export interface GetConsentByProjectIdQueryStringParameters {
  consentStatus?: ConsentStatus
  consentType: ConsentType
  lastKey?: string
  limit?: number
}

export interface GetConsentByProjectIdResponseBody {
  consent: ContactConsent[]
  lastKey?: string
  projectId: string
}

export interface GetContactsByProjectIdPathParameters {
  projectId: string
}

export interface GetContactsByProjectIdQueryStringParameters {
  assetName?: string
  contactName?: string
  email?: string
  lastKey?: string
  limit?: number
  phone?: string
}

export interface GetContactsByProjectIdResponseBody {
  contacts: Contact[]
  lastKey?: string
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
  assetName?: string
  lastKey?: string
  limit?: number
}

export interface GetQrCodesByProjectIdResponseBody {
  lastKey?: string
  numberOfQrCodes: number
  projectId: string
  qrCodes: QrCodeNamed[]
}

export interface GetScansByProjectIdPathParameters {
  projectId: string
}

export interface GetScansByProjectIdQueryStringParameters {
  ascending: boolean
  assetName?: string
  contactId?: string
  lastKey?: string
  limit?: number
}

export interface GetScansByProjectIdResponseBody {
  lastKey?: string
  numberOfScans: number
  projectId: string
  scans: Scan[]
}

export interface GetSmsTemplateByProjectIdPathParameters {
  projectId: string
  smsTemplateName: string
}

export interface GetSmsTemplateByProjectIdResponseBody {
  body?: string
  projectId: string
  responseUrl?: string
  smsTemplateName: string
  statusUrl?: string
}

export interface GetSmsTemplatesByProjectIdPathParameters {
  projectId: string
}

export interface GetSmsTemplatesByProjectIdQueryStringParameters {
  lastKey?: string
  limit?: number
}

export interface GetSmsTemplatesByProjectIdResponseBody {
  lastKey?: string
  numberOfSmsTemplates: number
  projectId: string
  smsTemplates: SmsTemplate[]
}

export interface UpdateProjectByProjectIdPathParameters {
  projectId: string
}

export interface UpdateProjectByProjectIdRequestBody {
  companyName?: string
  description?: string
  name?: string
  status?: ProjectStatus
}

export interface UpdateProjectByProjectIdResponseBody {
  project: Project
}

export interface UpdateSmsTemplatePathParameters {
  projectId: string
  smsTemplateName: string
}

export interface UpdateSmsTemplateRequestBody {
  body?: string
  responseUrl?: string
  statusUrl?: string
}

export interface UpdateSmsTemplateResponseBody {
  body?: string
  projectId: string
  responseUrl?: string
  smsTemplateName?: string
  statusUrl?: string
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
  background?: string
  backgroundGradientColors?: string
  backgroundGradientRotation?: number
  backgroundGradientType?: QrCodeGradientTypes
  cornerDotColor?: string
  cornerDotType?: QrCodeCornerDotTypes
  cornerSquareColor?: string
  cornerSquareType?: QrCodeCornerSquareTypes
  darkColor?: string
  dataUrl?: boolean
  dotType?: QrCodeDotTypes
  errorCorrectionLevel?: QrCodeErrorCorrectionLevel
  foreground?: string
  foregroundGradientColors?: string
  foregroundGradientRotation?: number
  foregroundGradientType?: QrCodeGradientTypes
  format?: QrCodeType
  lightColor?: string
  logo?: string
  logoMargin?: number
  margin?: number
  scale?: number
  version?: number
  width?: number
}

export interface GetQrCodeResponseBody extends ResponseQrCode {
  assetId: string
  created?: string | Date | number
  dynamicRedirectType?: QrCodeDynamicRedirectType
  image: QrCodeImage
  intent?: string
  intentState?: NestedKeyValueObject
  intentType?: QrCodeIntentType
  locatorKey: string
  locatorKeyType?: QrCodeLocatorKeyType
  modified?: string | Date | number
  name?: string
  projectId?: string
  qrCodeId: string
  scanCount: number
  status?: QrCodeStatus
  validFrom?: string | Date | number
  validTo?: string | Date | number
}

export interface UpdateQrCodePathParameters {
  qrCodeId: string
}

export interface UpdateQrCodeRequestBody {
  dynamicRedirectType?: QrCodeDynamicRedirectType
  imageOptions?: QrCodeImageOptions
  intent?: string
  intentState?: NestedKeyValueObject
  status?: QrCodeStatus
}

export interface UpdateQrCodeResponseBody {
  qrCode: ResponseQrCode
}

export interface CreateContactByScanIdPathParameters {
  scanId: string
}

export interface CreateContactByScanIdRequestBody {
  cellPhone?: string
  consent?: ContactConsent[]
  customAttributes?: NestedKeyValueObject
  emailAddress?: string
  firstName?: string
  lastName?: string
  mailingAddress?: ContactMailingAddress
  middleName?: string
  nickname?: string
  type?: string
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
  body?: string
  contactId: string
  customVariables?: NestedKeyValueObject
  smsTemplateName?: string
}

export interface SendSmsByScanIdResponseBody {
  sms: Sms
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

export class SdkAccountResource extends Resource {
  projects(): SdkAccountProjectsResources {
    return new SdkAccountProjectsResources(this.getSession(), this.pathParameters)
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
    requestBody: CreateQrCodeByAssetIdRequestBody,
    options?: any,
  ): Promise<CreateQrCodeByAssetIdResponseBody> {
    const request = new CreateQrCodeByAssetIdRequest(this.session)
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

  asset(assetId: string): SdkAssetResource {
    return new SdkAssetResource(this.getSession(), {...this.pathParameters, assetId})
  }

  contact(contactId: string): SdkContactResource {
    return new SdkContactResource(this.getSession(), {...this.pathParameters, contactId})
  }

  project(projectId: string): SdkProjectResource {
    return new SdkProjectResource(this.getSession(), {...this.pathParameters, projectId})
  }

  qrCode(qrCodeId: string): SdkQrCodeResource {
    return new SdkQrCodeResource(this.getSession(), {...this.pathParameters, qrCodeId})
  }

  scan(scanId: string): SdkScanResource {
    return new SdkScanResource(this.getSession(), {...this.pathParameters, scanId})
  }

  authSession(): SdkAuthSessionResources {
    return new SdkAuthSessionResources(this.getSession(), this.pathParameters)
  }

  refreshAuthSession(): SdkRefreshAuthSessionResources {
    return new SdkRefreshAuthSessionResources(this.getSession(), this.pathParameters)
  }
}

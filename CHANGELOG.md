# Openscreen Changelog

## Version 1.5.0
### Added
- New SDK endpoints for AssetTypes, Locations
- New SDK endpoints for Asset History

### Fixed
- Ability to unset certain fields using `null`, now `null` is also allowed alongside `undefined`

## Version 1.4.0
### Added
- Add new SDK endpoints for QR Code Templates:
  - `Create QR Code Styling Template by Account Id`: Creates a QR Code template using the provided image options
  - `Get QR Code Styling Templates`: Returns a list of `QrCodeStylingTemplate` objects associated to an Openscreen Account
  - `Get QR Code Styling Template by Id`: Returns a QR Code template based on the provided template ID
  - `Update QR Code Styling Template`: Modifies the image options of the `QrCodeStylingTemplate` object
  - `Delete QR Code Styling Template`: Permanently deletes a QR Code template of the given ID
- Add new SDK endpoints for upload and reuse logos using URL
  - `Upload QR Code Logo by Account Id`: Adds the logo URL to the provided Openscreen account
  - `Get QR Code Logos by Account Id`: Returns an array of `QrCodeLogos` associated to an Openscreen Account
  - `Update QR Code Logo by Id`: Modifies the QR Code logo based on the provided ID
- Add rename scanId attribute for Dynamic QR Code

### Fixed
- Fix refresh token after 48 hours

## Version 1.3.1
### Fixed
- Missing TS types

## Version 1.3.0
### Added
- Sorting on GetAssets, GetProjects and GetContacts
- Sorting type enums for Contact, Asset and QrCode sorting flags
- Renaming projects functionality

### Changed
- Project entity updated to include accountId
- QrCode entity updated to include projectId
- QrCode entity updated to include its asset's name

## Version 1.2.1
### Fixed
- Fix incorrect query parameter `next` for `GetProjectsByAccountId` endpoint.
- Fix response for `GetQRCodesByProjectId` and `GetQRCodesByAccountID` to order by modified date.
- Fix scan count increment by 2 for every QR code scan.

### Changed
- Update QR code scan and re-direct performance

## Version 1.2.0
### Added
- Add minimum 2 character requirement for Account name, Project name and Asset name fields

### Fixed
- Fix the issue where all `updateConsent` endpoints would only update one Consent at a time.

### Changed
- Update data export file name to be more relevant to the exported data
- Update ContactConsent entity to accept an array of URLs using the new field `urls` instead of legacy field `url`.

## Version 1.1.0
### Added
- Add new pricing model for all Openscreen users. Check out the new pricing at [www.openscreen.com](www.openscreen.com)
- Add new SDK endpoints:
  - `Link Contact to Scan`: Links a Contact to a QR Code Scan. Useful for creating rich scan history for Contacts.
  - `Get Scans By Contact Id`: Retrieves a list of QR Code Scan objects associated to an Openscreen Contac
  - `Get Consent By Project Id`: Returns a list of `ContactConsent` objects associated to an Openscreen Project.
  - `Get Consent By Account Id`: Returns a list of `ContactConsent` objects associated to an Openscreen Account.
  - `Get Consent By Contact Id`: Returns a list of `ContactConsent` objects associated to an Openscreen Contact.
  - `Create Consent By Contact Id`: Adds a new `ContactConsent` object for a Contact.
  - `Delete Consent By Contact Id`: Removes the `ContactConsent` object from a Contact.
  - `Delete Project`: Permanently deletes an Openscreen Project including the Assets, QR Codes and Scans associated to it.

    For detailed documentation, visit our [docs](docs.openscreen.com).

### Fixed
- Fix Contact count not being incremented at a project level whenever a new Contact is created.
- Fix for the number of items returned in `GET` calls being less than the specified `limit` field.
- Fix deleted assets and/or QR codes appearing in the `GET` calls

### Changed
- Update SDK/API user permissions to allow Project related CRUD operations.
- Update the response of retriving Assets, Projects and QR Codes APIs to sort by their `modifiedDate` field
- Refactor `ContactConsent` entity to accomodate new consent types and two scope levels - account and project.

## Version 1.0.1
### Fixed
- Regenerate build and publish latest build output

## Version 1.0.0
### Added
- Add QR code image as part of the response for creating QR codes
- Add a public python [SDK](https://pypi.org/project/openscreen/)

### Fixed
- Fix for dashboard login to gracefully handle error when cookies are blocked due to user preferences

### Changed
- Update QR Code object to allow customization through the `ImageOptions` object
- Update dependency `moment` to version `2.29.4`
- Update dependency `microbundle` to version `0.15.0`

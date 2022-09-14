# Openscreen Changelog

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

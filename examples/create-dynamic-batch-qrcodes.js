require('dotenv').config()
const {Openscreen} = require('@openscreen/sdk')

// Instantiate a new Openscreen instance with your developer credentials.
const {OS_ACCESS_KEY, OS_ACCESS_SECRET} = process.env

const os = new Openscreen().config({
  key: OS_ACCESS_KEY,
  secret: OS_ACCESS_SECRET,
})

// Replace the string below with your project ID from the Openscreen dashboard.
const OS_PROJECT_ID = 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'

async function main() {
  // Create multiple assets that each represent a different billboard. Each of these
  // billboards will direct a user to the same listing at 123 Cherry Street.
  const bulkAssets = await os
    .project(OS_PROJECT_ID)
    .assetsBatch()
    .create([
      {
        name: 'Billboard 1',
        description: 'Billboard at Yonge and Eglington for 123 Cherry Street Listing',
        qrCodes: [
          {
            intent: 'https://my-real-estate-app.com/123Cherry/',
            intentType: 'DYNAMIC_REDIRECT',
          },
        ],
      },
      {
        name: 'Billboard 2',
        description: 'Billboard at Yonge and Lawrence for 123 Cherry Street Listing',
        qrCodes: [
          {
            intent: 'https://my-real-estate-app.com/123Cherry/',
            intentType: 'DYNAMIC_REDIRECT',
          },
        ],
      },
      {
        name: 'Billboard 3',
        description: 'Billboard at Mt. Pleasant and Eglington for 123 Cherry Street Listing',
        qrCodes: [
          {
            intent: 'https://my-real-estate-app.com/123Cherry',
            intentType: 'DYNAMIC_REDIRECT',
          },
        ],
      },
    ])

  console.log('Bulk Assets:', JSON.stringify(bulkAssets, null, 2))
}

main().catch(console.error)

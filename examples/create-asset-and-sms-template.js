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
  // Create an asset for a new product LV-Premium Luggage Set 01 with id P635271-01
  const {asset} = await os
    .project(OS_PROJECT_ID)
    .assets()
    .create({
      name: 'LV-Premium Luggage Set 01',
      description: 'Premium Luggage Set by LV',
      customAttributes: {
        uniqueItemNumber: 'P635271-01',
      },
      qrCodes: [
        {
          intentType: 'DYNAMIC_REDIRECT',
          intent: 'https://my-app/id',
          dynamicRedirectType: 'SCAN_ID_IN_QUERY_STRING_PARAMETER',
          locatorKeyType: 'SHORT_URL',
        },
      ],
    })

  // Returns the scannable QR Code
  const [qrCode] = asset.qrCodes

  // Save your qr code locally
  await os.saveQrImageDataToFile(qrCode, 'LV-Premium-Luggage-Set-01.png')

  // View the newly created asset.
  console.log('Asset:', JSON.stringify(asset, null, 2))

  // Create an SMS template to be sent when the product is successfully registered.
  const smsTemplate = await os
    .project(OS_PROJECT_ID)
    .smsTemplates()
    .create({
      body: `Congratulations, your Designer Co. ${asset.name} ${asset.customAttributes.uniqueItemNumber} has been registered with us.`,
      smsTemplateName: 'firstTemplate',
    })

  console.log('created smsTemplate:', smsTemplate)
}

main().catch(console.error)

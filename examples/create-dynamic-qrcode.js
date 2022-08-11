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

// Generate your Dynamic QR Code
async function main() {
  // Create an Asset containing a Dynamic QR Code.
  const {asset} = await os
    .project(OS_PROJECT_ID)
    .assets()
    .create({
      customAttributes: {},
      description: 'QR Code with inverted Colors and dots',
      name: 'Artistic QR Code',
      qrCodes: [
        {
          intent: 'https://www.openscreen.com',
          intentType: 'DYNAMIC_REDIRECT',
          dynamicRedirectType: 'NO_SCAN_ID',
          status: 'ACTIVE',
          imageOptions: {
            background: '#000000',
            foreground: '#FFFFFF',
            cornerDotType: 'dot',
            cornerDotColor: '#FFFFFF',
            dotType: 'dots',
            cornerSquareType: 'dot',
            cornerSquareColor: '#FFFFFF',
          },
        },
      ],
    })

  const [qrCode] = asset.qrCodes

  // Returns a scannable QR Code and saves the png file in your project folder.
  await os.saveQrImageDataToFile(qrCode, 'my-qr-code.png')
}

main().catch(console.error)

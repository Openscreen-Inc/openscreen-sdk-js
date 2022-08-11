# Openscreen Node SDK

[Openscreen][OSC] is a software developer platform that allows users to easily generate unique and trackable
QR Codes at scale using our Node SDK.

Additional information on using the Node SDK can be found in our developer
[documentation][DOCS].

## Requirements

- [NodeJS](https://nodejs.org) & [NPM](https://www.npmjs.com)
- An [Openscreen][OSC] account

If you don't already have an Openscreen account, you can sign up for a free account [here](https://app.openscreen.com/signup).

## Installation / Usage

```bash
npm install @openscreen/sdk
# or using Yarn
yarn add @openscreen/sdk
```

### CommonJS

```javascript
const {Openscreen} = require('@openscreen/sdk')
```

### ES6 & TypeScript

```javascript
import {Openscreen} from '@openscreen/sdk'
```

## Getting Started

Openscreen authenticates your API requests using your account's API key and API secret key. You will
also need the ID of the project you wish to work with. Your API key, secret key and project ID can
all be found in your by logging into your Openscreen [dashboard][DASH]. The following examples
demonstrates how to use these values in the SDK to generate your first QR code.

```javascript
const {Openscreen} = require('@openscreen/sdk')

const PROJECT_ID = '**PROJECT_ID**'

const os = new Openscreen().config({
  key: '**KEY**',
  secret: '**SECRET**',
})


async function myFirstQRCode(event) {
  const res = await os
    .project(PROJECT_ID)
    .assets()
    .create({
      name: 'Openscreen website',
      description: 'Dynamic QR code to https://openscreen.com',
      qrCodes: [
        {
          intent: 'https://openscreen.com',
          intentType: 'DYNAMIC_REDIRECT',
        },
      ],
    })

  const [qrCode] = res.asset.qrCodes

  await os.saveQrImageDataToFile(qrCode, 'my-first-qr.png')
}

myFirstQRCode().catch(console.error)
```

## Links

- [Openscreen website][OSC]
- [Developer Documentation][DOCS]
- [Additional Examples and Use Cases][TUTORIALS]

[OSC]: https://openscreen.com
[DASH]: https://app.openscreen.com
[TUTORIALS]: https://docs.openscreen.com/tutorials/
[DOCS]: https://docs.openscreen.com/overview/

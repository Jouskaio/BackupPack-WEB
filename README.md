# BackupPack-WEB

Web interface of the Backup Pack project: a connected bag with several tools integrated (front camera, GPS location, detection for object forgotten)

Because NPM is too resourceful for onboard electronics, we will privilege YARN.

- Install Parcel.JS in global : `yarn global add parcel-bundler`
- Run in development : `parcel index.html`
- Run in production : `sudo yarn add parcel-bundler --dev`
- Testing mobile interface while developing on computer : `ngrok http 1234` then copy the link "forwarding" on your phone

**Framework used:** Parcel.JS

**Package Used:**
- `sass`
### Setup

https://reactnative.dev/docs/environment-setup

### Install packages

```
npm install
or
yarn
```

In this project I use yarn.

### Running your React Native application

#### You need to accept the licences before building.

```
yes | sdkmanager --licenses
```
#### For the first time installing the project

Android:
```
http://tools.android.com/tech-docs/configuration/osx-jdk
```
IOS:
```
sudo xcode-select --switch /Applications/Xcode.app
```

#### Install pod ios

```
cd ios && pod install && cd ..
```

#### Step 1: Start Metro

```
yarn start
```

#### Step 2: Start your application

##### Run with simulator

Open a new terminal inside your React Native project folder. Run the following:

on iOS:
```
yarn ios
```

on Android:
```
yarn android
```

##### Run with device Android

Android:
```
$ adb devices

List of devices attached
RFXXXXXXX	device

$ adb -s RFXXXXXXX reverse tcp:8081 tcp:8081
```

#### TODO:
- Codepush for OTA update
- Intergrate fastlane (Automation tool): https://fastlane.tools/


------------------------------
Running On Device: https://reactnative.dev/docs/running-on-device

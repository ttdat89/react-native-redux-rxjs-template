# react-native-redux-rxjs-template
Run ```yarn``` or ```npm i``` to install packages

Change project name in ```package.json``` ```index.ios.js``` ```index.android.js``` and ```app.json```

Run ```react-native upgrade``` to generate ios and android project

Run ```react-native link``` to link some modules to native projects

Add these lines to AndroidManifest if you use Android SDK < 23
    
    <uses-permission android:name="android.permission.CAMERA" />
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />

# react-native-redux-rxjs-template
1. Run ```yarn``` or ```npm i``` to install packages

2. Change project name in ```package.json``` ```index.ios.js``` ```index.android.js``` and ```app.json```

3. Run ```react-native upgrade``` to generate ios and android project

4. Run ```react-native link``` to link some modules to native projects

5. Add these lines to AndroidManifest if you use Android SDK < 23
    
    <uses-permission android:name="android.permission.CAMERA" />
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />

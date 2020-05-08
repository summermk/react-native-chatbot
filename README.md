# React Native Chatbot 
This is a simple POC to try integrating chatbot in the react native app.

![](screenshots/chatbot-app-demo.gif)

## Get started
Before attempting to run it, folow the React Native CLI Quickstart in [React Native environment setup guide](https://reactnative.dev/docs/environment-setup). 

Also you need to create `.env` file in the root folder and add the DialogFlow access token:
```
DF_ACCESS_TOKEN="add_token_here"
```
For more info on DialogFlow authentication see https://dialogflow.com/docs/reference/v2-auth-setup#curl

## Run the app

1. From the root of the project run the react native server 
```
$ npx react-native start
```

2. To run the iOS:
```
$ npx react-native run-ios
```

3. To run the Android:
```
$ npx react-native run-android
```

## Known Issues

There are some known issues with the current project. We might resolve some of them next week. 
Have a look at our project board to see the progress. 
- Android has network issues when sending the request
- The access token for DialogFlow needs to be manually set in .env file. 


## Acknowledgements
The amazing chat UI we're using is [GiftedChat](https://github.com/FaridSafi/react-native-gifted-chat)


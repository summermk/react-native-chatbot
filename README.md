# React Native Chatbot
This is a simple POC to try integrating chatbot in the React Native app.

![](screenshots/chatbot-app-demo.gif)

## Getting started
1. Follow the React Native CLI Quickstart in [React Native environment setup guide](https://reactnative.dev/docs/environment-setup)
2. Clone this project
3. Create `.env` file in the project root folder and add the DialogFlow access token:
```
DF_ACCESS_TOKEN="add_token_here"
```
> For more info on DialogFlow authentication see https://dialogflow.com/docs/reference/v2-auth-setup

## Running the app

1. From the root of the project, run the React Native server:
```
$ npx react-native start
```

2. Start a second session, and run the application in a simulator (choose your OS):
```
$ npx react-native run-ios
```

```
$ npx react-native run-android
```

## Known issues

There are some known issues with the current project.
Have a look at our project board to see the progress.
- Android has network issues when sending the request
- The access token for DialogFlow needs to be manually set in .env file.


## Acknowledgements
The amazing chat UI we're using is [GiftedChat](https://github.com/FaridSafi/react-native-gifted-chat).


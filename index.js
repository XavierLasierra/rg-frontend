/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";

import Amplify from "aws-amplify";
import { awsconfig } from "./src/libs/aws";
Amplify.configure(awsconfig);

AppRegistry.registerComponent(appName, () => App);

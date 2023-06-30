"use client";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";
import Header from "../pages/header";

function AWSAuthPage({ signOut }) {
  return (
    <View className="App ">
      {/* Header */}
      <Header signOut={signOut} />
    </View>
  );
}

export default withAuthenticator(AWSAuthPage);
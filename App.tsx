import React from "react";
import { StyleSheet, View, Platform, Image, Text } from "react-native";
import TodoList from "./components/TodoList";
import { NativeRouter, Route, Link } from "react-router-native";
import Main from "./components/Main";

export interface IAppProps {}
export interface IAppState {}

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
  }

  public render() {
    return (
      <NativeRouter>
        <Image
          source={require("./assets/bg.jpg")}
          style={styles.backgroundImage}
        />

        <Route exact path="/" component={Main} />
        <Route path="/todolist" component={TodoList} />
        <Route path="/topics" component={TodoList} />
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
  },
});

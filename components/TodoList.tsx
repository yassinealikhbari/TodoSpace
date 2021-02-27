import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ITodoItem from "./../models/ITodoItem";

export interface ITodoListProps {
  style: any;
  item: ITodoItem;
}
export default class TodoList extends React.Component<ITodoListProps> {
  constructor(prop: ITodoListProps) {
    super(prop);
  }

  public render() {
    const { item } = this.props;
    return <View style={[styles.container, this.props.style]}></View>;
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
  },
  item: {
    backgroundColor: "#FEF5D5",
    position: "relative",
    width: "90%",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
    top: 20,
  },
});

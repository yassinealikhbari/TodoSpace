import React from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import ITodoItem from "./../models/ITodoItem";

export type IPressHandlerback = (id: number) => void;

export interface ITodoItemProps {
  style: any;
  item: ITodoItem;
  pressHandler: IPressHandlerback;
}

export default class TodoItem extends React.Component<ITodoItemProps> {
  constructor(prop: ITodoItemProps) {
    super(prop);
  }

  public render() {
    const { item } = this.props;
    return (
      //   <View style={[styles.container, this.props.style]}>
      <TouchableWithoutFeedback
        onLongPress={() => this.props.pressHandler(item.id)}
      >
        <View style={[styles.item, this.props.style]}>
          <Text>{item.text}</Text>
        </View>
      </TouchableWithoutFeedback>
      //   </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#ffd369",
    position: "relative",
    width: "90%",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginTop: 10,
    // marginBottom: 10,
    borderRadius: 5,
    alignSelf: "center",
  },
});

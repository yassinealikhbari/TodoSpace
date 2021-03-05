import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native";
import ITodoItem from "./../models/ITodoItem";
import Swipeable from "react-native-swipeable";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#ffd369",
    width: "95%",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginTop: 10,
    borderRadius: 5,
    alignSelf: "center",
  },
  rightButton: {
    width: "18%",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
    paddingBottom: 10,
    marginTop: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});

export type ICompleteItemCallBack = (id: number) => void;
export type IDeleteItemCallback = (id: number) => void;

export interface ITodoItemProps {
  style: any;
  item: ITodoItem;
  deleteItem: IDeleteItemCallback;
  completeItem: ICompleteItemCallBack;
}

export default class TodoItem extends React.Component<ITodoItemProps> {
  constructor(prop: ITodoItemProps) {
    super(prop);
  }

  private rightButtons = [
    <TouchableHighlight
      onPress={() => this.props.completeItem(this.props.item.id)}
    >
      <View style={[styles.rightButton, { backgroundColor: "green" }]}>
        <AntDesign name="check" size={24} color="#fff" />
      </View>
    </TouchableHighlight>,

    <TouchableHighlight
      onPress={() => this.props.deleteItem(this.props.item.id)}
    >
      <View style={[styles.rightButton, { backgroundColor: "red" }]}>
        <MaterialIcons name="delete-forever" size={24} color="#fff" />
      </View>
    </TouchableHighlight>,
  ];

  public render() {
    const { item } = this.props;
    return (
      <Swipeable rightButtons={this.rightButtons}>
        <View style={[styles.item, this.props.style]}>
          <Text>{item.text}</Text>
        </View>
      </Swipeable>
    );
  }
}

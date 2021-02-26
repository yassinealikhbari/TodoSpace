import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";

export interface IFloatingButtonProps {
  style: any;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    position: "absolute",
  },
  floatingButton: {
    width: 60,
    height: 60,
    backgroundColor: "#FDCC51",
    bottom: 0,
    borderRadius: 60 / 2,
    justifyContent: "center",
    alignItems: "center",
    shadowRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { height: 10, width: 10 },
    elevation: 3,
  },
});

export default class FloatingButton extends React.Component<
  IFloatingButtonProps,
  {}
> {
  constructor(prop: IFloatingButtonProps) {
    super(prop);
  }

  public render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <TouchableWithoutFeedback>
          <View style={styles.floatingButton}>
            <AntDesign name="plus" size={24} color="#fff"></AntDesign>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

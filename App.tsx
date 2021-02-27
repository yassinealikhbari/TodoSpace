import React from "react";
import FloatingButton from "./components/FloatingButton";
import TodoItem from "./components/TodoItem";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  ImagePropTypes,
  ScrollViewBase,
  ScrollView,
} from "react-native";
import ITodoItem from "./models/ITodoItem";
import { GenericHelper } from "./helpers/GenericHelper";

export interface IAppProps {}
export interface IAppState {
  items: ITodoItem[];
}

const items: ITodoItem[] = [
  {
    id: 1,
    text: "Start learning react native",
    status: 2,
  },
  {
    id: 2,
    text: "Develop a todo app",
    status: 1,
  },
  {
    id: 3,
    text: "Create a new popular app",
    status: 0,
  },
  {
    id: 4,
    text:
      "Lopem ipsum yassum sinus sinetus yas sibe uberis siyasber untas yassum sinus sinetus yas sibe uberis siyasber untas",
    status: 0,
  },
];

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      items: items,
    };
  }

  public render() {
    const { items } = this.state;
    return (
      <View style={styles.container}>
        <Text
          style={{
            marginTop: 15,
            color: "#fff",
            textTransform: "uppercase",
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 15,
          }}
        >
          My Todo Space
        </Text>
        <ScrollView style={styles.scrollView}>
          {items.map((item: ITodoItem, index: number) => {
            return (
              <TodoItem
                pressHandler={(id: number) => {
                  this.handLongPress(id);
                }}
                key={index}
                item={item}
                style={{}}
              ></TodoItem>
            );
          })}
          <View style={{ height: 100 }} />
        </ScrollView>
        <FloatingButton
          pressHandler={this.addClickHandler}
          style={{ bottom: 15 }}
        ></FloatingButton>
      </View>
    );
  }

  private addClickHandler = () => {
    const { items } = this.state;

    var id = GenericHelper.isArrayNullOrEmpty(items)
      ? 1
      : this.state.items[this.state.items.length - 1].id + 1;

    const newItem: ITodoItem = {
      id: id,
      text: "I'm a new item " + id,
      status: 0,
    };
    const newItems: ITodoItem[] = [...this.state.items, newItem];
    this.setState({ items: newItems });
  };

  private handLongPress = (id: number) => {
    const newItems = this.state.items?.filter((i: ITodoItem) => i.id !== id);
    this.setState({ items: newItems });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#393e46",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    height: "100%",
  },
  scrollView: {
    flex: 1,
    width: "100%",
    height: "100%",
    paddingBottom: 50,
  },
});

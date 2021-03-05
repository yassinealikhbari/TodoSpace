import React from "react";
import FloatingButton from "./FloatingButton";
import TodoItem from "./TodoItem";
import { AntDesign } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  ScrollView,
  TextInput,
  Modal,
} from "react-native";
import ITodoItem from "./../models/ITodoItem";
import { GenericHelper } from "./../helpers/GenericHelper";

export interface ITodoListProps {}
export interface ITodoListState {
  items: ITodoItem[];
  modalVisible: boolean;
  newTodoTxt?: string;
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

export default class TodoList extends React.Component<
  ITodoListProps,
  ITodoListState
> {
  constructor(props: ITodoListProps) {
    super(props);
    this.state = {
      items: items,
      modalVisible: false,
      newTodoTxt: undefined,
    };
  }

  public render() {
    const { items } = this.state;
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setState({ modalVisible: false });
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <AntDesign
                onPress={this.closeModal}
                style={{
                  top: 10,
                  paddingLeft: 30,
                  alignSelf: "flex-end",
                }}
                name="close"
                size={24}
                color="#fff"
              ></AntDesign>

              <Text style={{ textAlign: "center", marginBottom: 20 }}>
                Add new item
              </Text>
              <TextInput
                style={{
                  minHeight: 40,
                  maxHeight: 140,
                  width: "90%",
                  backgroundColor: "#F7F7F7",
                  borderWidth: 0,
                  marginBottom: 20,
                }}
                multiline
                numberOfLines={4}
                onChangeText={(text) => this.onChangeText(text)}
                value={this.state.newTodoTxt}
              />
              <FloatingButton
                pressHandler={this.addNewItem}
                style={{ bottom: -30 }}
              ></FloatingButton>
            </View>
          </View>
        </Modal>
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
          Todo Space
        </Text>
        <ScrollView style={styles.scrollView}>
          {items.map((item: ITodoItem, index: number) => {
            return (
              <TodoItem
                deleteItem={(id: number) => {
                  this.deleteItem(id);
                }}
                completeItem={(id: number) => {
                  this.completeItem(id);
                }}
                key={index}
                item={item}
                style={{}}
              ></TodoItem>
            );
          })}
          <View style={{ height: 100 }} />
        </ScrollView>

        {!this.state.modalVisible && (
          <FloatingButton
            pressHandler={this.openModal}
            style={{ bottom: 15 }}
          ></FloatingButton>
        )}
      </View>
    );
  }

  private openModal = () => this.setState({ modalVisible: true });
  private closeModal = () => this.setState({ modalVisible: false });

  private deleteItem = (id: number) => {
    const newItems = this.state.items?.filter((i: ITodoItem) => i.id !== id);
    this.setState({ items: newItems });
  };

  private completeItem = (id: number) => {
    alert("set item as complete");
  };

  private onChangeText = (text: string) => {
    this.setState({ newTodoTxt: text });
  };

  private addNewItem = () => {
    if (GenericHelper.isStringNullOrEmpty(this.state.newTodoTxt)) return;

    const { items } = this.state;

    var id = GenericHelper.isArrayNullOrEmpty(items)
      ? 1
      : this.state.items[this.state.items.length - 1].id + 1;

    const newItem: ITodoItem = {
      id: id,
      text: this.state.newTodoTxt ? this.state.newTodoTxt.trim() : "",
      status: 0,
    };

    const newItems: ITodoItem[] = [...this.state.items, newItem];
    this.setState({
      items: newItems,
      modalVisible: false,
      newTodoTxt: undefined,
    });
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: "90%",
    margin: 20,
    backgroundColor: "#B1CDCE",
    borderRadius: 20,
    paddingBottom: 35,
    paddingRight: 15,
    paddingLeft: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#FCDC64",
    elevation: 1,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

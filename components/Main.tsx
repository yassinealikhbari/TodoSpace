import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

export type IPressHandlerback = () => void;

export interface IMainProps {}

export default class Main extends React.Component<IMainProps> {
  constructor(prop: IMainProps) {
    super(prop);
  }

  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>My Todo Space</Text>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#17B9AE", "#6473CD"]}
          style={[
            styles.line,
            {
              width: "50%",
              paddingTop: 10,
              marginTop: 1,
            },
          ]}
        />
        <Text style={styles.subTitle}>Today's Taks</Text>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#17B9AE", "#6473CD"]}
          style={styles.line}
        />
        <View style={styles.innerContainer}>
          <View style={styles.innerDailyContent}>
            <LinearGradient
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 1 }}
              colors={["#17B9AE", "#6473CD"]}
              style={styles.dailyStat}
            >
              <Text style={styles.subTitle}>Today status</Text>
            </LinearGradient>
          </View>
          <View style={[styles.innerDailyContent, { padding: 0 }]}>
            <LinearGradient
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 1 }}
              colors={["#E36F51", "#CE3D54"]}
              style={styles.daily}
            >
              <Text style={styles.subTitle}>To be done</Text>
            </LinearGradient>
            <LinearGradient
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 1 }}
              colors={["#FFD982", "#E27150"]}
              style={styles.daily}
            >
              <Text style={styles.subTitle}>On going</Text>
            </LinearGradient>
            <LinearGradient
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 1 }}
              colors={["#369A8A", "#CC3E54"]}
              style={styles.daily}
            >
              <Text style={styles.subTitle}>Completed</Text>
            </LinearGradient>
          </View>
        </View>

        <Text style={styles.subTitle}>All Time Taks</Text>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#17B9AE", "#6473CD"]}
          style={styles.line}
        />

        <View style={styles.innerContainer}>
          <View style={[styles.innerTotalContent, { padding: 0 }]}>
            <LinearGradient
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 1 }}
              colors={["#2F45B0", "#F97478"]}
              style={styles.total}
            >
              <AntDesign name="bars" size={24} style={styles.coverIcon} />
              <Text style={styles.subTitle}>To be done</Text>
            </LinearGradient>
            <LinearGradient
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 1 }}
              colors={["#8B388F", "#EE5A60"]}
              style={styles.total}
            >
              <Text style={styles.subTitle}>On going</Text>
            </LinearGradient>
            <LinearGradient
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              colors={["#163A7D", "#F16B74"]}
              style={styles.total}
            >
              <Text style={styles.subTitle}>Completed</Text>
            </LinearGradient>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: 10,
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    flexDirection: "row",
    height: "100%",
    width: "100%",
    // marginTop: 10,
    justifyContent: "space-evenly",
    // alignItems: "center",
  },
  innerDailyContent: {
    width: "50%",
    padding: 10,
  },
  innerTotalContent: {
    width: "100%",
    padding: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
  },
  title: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    zIndex: 99,
  },
  subTitle: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    marginTop: 10,
    marginBottom: 5,
  },
  line: {
    borderWidth: 0,
    width: 50,
    alignSelf: "center",
    marginBottom: 10,
    backgroundColor: "green",
    height: 3,
    borderRadius: 3,
  },
  dailyStat: {
    height: "100%",
    padding: 10,
    backgroundColor: "green",
    borderRadius: 10,
    elevation: 10,
  },
  daily: {
    // height: "100%",
    padding: 10,
    backgroundColor: "green",
    borderRadius: 10,
    elevation: 10,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    margin: 10,
  },
  total: {
    // height: "100%",
    padding: 10,
    backgroundColor: "green",
    borderRadius: 10,
    elevation: 10,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    margin: 10,
  },
  coverIcon: {
    color: "#fff",
    fontSize: 100,
    position: "absolute",
    rotation: -10,
    alignSelf: "flex-end",
    overflow: "hidden",
    opacity: 0.2,
  },
});

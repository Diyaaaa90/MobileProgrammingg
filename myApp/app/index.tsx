import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

const data = [
  { id: "1", title: "Vehicle Tax", due: "March 19", type: "Car BA" },
  { id: "2", title: "Property Tax", due: "May 15", type: "House" },
  { id: "3", title: "Estate Tax", due: "June 21", type: "Land" },
];

export default function HomeScreen() {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const toggleCheck = (id: string) => {
    if (checkedItems.includes(id)) {
      setCheckedItems(checkedItems.filter((item) => item !== id));
    } else {
      setCheckedItems([...checkedItems, id]);
    }
  };

  const renderItem = ({ item }: any) => {
    const isChecked = checkedItems.includes(item.id);

    return (
      <TouchableOpacity
        style={[styles.item, isChecked && styles.highlight]}
        onPress={() => toggleCheck(item.id)}
      >
        <View style={styles.left}>
          <Text style={styles.checkbox}>{isChecked ? "☑️" : "⬜"}</Text>
          <View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.due}>Due: {item.due}</Text>
          </View>
        </View>
        <Text>{item.type}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>TaxTrack Dashboard</Text>

      <Text style={styles.hello}>Hello, Diya 👋</Text>

      <Text style={styles.section}>Upcoming Tax Deadlines</Text>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>📅 View Calendar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  hello: {
    marginTop: 10,
    color: "gray",
  },
  section: {
    marginVertical: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    marginRight: 10,
    fontSize: 18,
  },
  title: {
    fontSize: 14,
  },
  due: {
    fontSize: 12,
    color: "gray",
  },
  highlight: {
    backgroundColor: "#e6f7ff",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#aee1f9",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
  },
});
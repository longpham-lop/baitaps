import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SuccessScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="chevron-back" size={28} color="black" />
      </TouchableOpacity>

      <Text style={styles.successText}>Payment Success, Yayy!</Text>
      <Text style={styles.infoText}>
        We will send order details and invoice in your contact no. and registered email
      </Text>

      <TouchableOpacity>
        <Text style={styles.link}>Check Details →</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.downloadButton}>
        <Text style={styles.downloadText}>Download Invoice</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#fff" },
  backButton: { position: "absolute", top: 50, left: 20 },
  successText: { fontSize: 24, fontWeight: "bold", marginBottom: 8 },
  infoText: { fontSize: 16, color: "#6b7280", textAlign: "center", marginBottom: 20 },
  link: { fontSize: 16, color: "#007bff", marginBottom: 20 },
  downloadButton: { backgroundColor: "#3b82f6", paddingVertical: 12, paddingHorizontal: 40, borderRadius: 10 },
  downloadText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});

export default SuccessScreen;

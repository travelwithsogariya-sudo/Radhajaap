import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { spiritualTheme } from "../../theme/spiritualTheme";

export function AdminPanelScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Admin Panel</Text>
      <Text style={styles.subtitle}>Manage leaderboard, rewards, and feature switches.</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Leaderboard Controls</Text>
        <Text style={styles.item}>• Weekly lock / unlock rankings</Text>
        <Text style={styles.item}>• Remove suspicious users</Text>
        <Text style={styles.item}>• Promote top 3 / top 5 / top 10 highlights</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Reward Management</Text>
        <Text style={styles.item}>• Define cash / gift / badge rewards</Text>
        <Text style={styles.item}>• Configure milestone achievements</Text>
        <Text style={styles.item}>• Publish reward campaigns</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Feature Flags</Text>
        <Text style={styles.item}>• Toggle voice counting</Text>
        <Text style={styles.item}>• Toggle public groups / satsang</Text>
        <Text style={styles.item}>• Toggle motivational notifications</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, paddingBottom: 40 },
  heading: { fontSize: 24, fontWeight: "700", color: spiritualTheme.text },
  subtitle: { color: spiritualTheme.muted, marginTop: 4, marginBottom: 12 },
  card: {
    backgroundColor: "#fff",
    borderColor: spiritualTheme.soft,
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    marginBottom: 10
  },
  cardTitle: { color: spiritualTheme.primary, fontWeight: "700", marginBottom: 8 },
  item: { color: spiritualTheme.text, marginBottom: 4 }
});

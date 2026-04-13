import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SpiritualCard } from "../../components/SpiritualCard";
import { spiritualTheme } from "../../theme/spiritualTheme";

export function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>My Profile</Text>
      <Text style={styles.subtitle}>User ID: RJ-2026-001234</Text>

      <View style={styles.avatar}>
        <Text style={styles.avatarText}>RJ</Text>
      </View>
      <Text style={styles.name}>Radha Premi</Text>

      <SpiritualCard title="Total Chants" value="1,28,432" />
      <SpiritualCard title="Current Streak" value="43 days" />
      <SpiritualCard title="Best Streak" value="108 days" />
      <SpiritualCard title="Achievements" value="12 badges" subtitle="1K, 10K, 1L milestones" />
      <SpiritualCard title="Report" value="Download & Share" subtitle="PDF / image summary" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, paddingBottom: 40, alignItems: "center" },
  heading: { fontSize: 24, fontWeight: "700", color: spiritualTheme.text, alignSelf: "flex-start" },
  subtitle: { color: spiritualTheme.muted, marginBottom: 14, alignSelf: "flex-start" },
  avatar: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: spiritualTheme.soft,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8
  },
  avatarText: { color: spiritualTheme.primary, fontWeight: "700", fontSize: 22 },
  name: { color: spiritualTheme.text, fontWeight: "700", marginBottom: 14 }
});

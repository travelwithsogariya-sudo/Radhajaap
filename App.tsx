import React, { useState } from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, Pressable } from "react-native";
import { AdminPanelScreen } from "./src/features/admin/AdminPanelScreen";
import { JaapCounterScreen } from "./src/features/counter/JaapCounterScreen";
import { AnalyticsScreen } from "./src/features/dashboard/AnalyticsScreen";
import { LeaderboardScreen } from "./src/features/leaderboard/LeaderboardScreen";
import { ProfileScreen } from "./src/features/profile/ProfileScreen";
import { spiritualTheme } from "./src/theme/spiritualTheme";

type Tab = "counter" | "analytics" | "leaderboard" | "profile" | "admin";

export default function App() {
  const [tab, setTab] = useState<Tab>("counter");

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.logo}>🕉️ RadhaJaap</Text>
        <Text style={styles.headerText}>Chant • Track • Grow</Text>
      </View>

      <ScrollView style={styles.body}>
        {tab === "counter" && <JaapCounterScreen />}
        {tab === "analytics" && <AnalyticsScreen />}
        {tab === "leaderboard" && <LeaderboardScreen />}
        {tab === "profile" && <ProfileScreen />}
        {tab === "admin" && <AdminPanelScreen />}
      </ScrollView>

      <View style={styles.nav}>
        <NavButton label="Jaap" active={tab === "counter"} onPress={() => setTab("counter")} />
        <NavButton label="Stats" active={tab === "analytics"} onPress={() => setTab("analytics")} />
        <NavButton label="Ranks" active={tab === "leaderboard"} onPress={() => setTab("leaderboard")} />
        <NavButton label="Profile" active={tab === "profile"} onPress={() => setTab("profile")} />
        <NavButton label="Admin" active={tab === "admin"} onPress={() => setTab("admin")} />
      </View>
    </SafeAreaView>
  );
}

function NavButton({ label, active, onPress }: { label: string; active: boolean; onPress: () => void }) {
  return (
    <Pressable onPress={onPress} style={[styles.navButton, active && styles.navButtonActive]}>
      <Text style={[styles.navButtonText, active && styles.navButtonTextActive]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: spiritualTheme.background },
  header: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 10,
    borderBottomColor: spiritualTheme.soft,
    borderBottomWidth: 1
  },
  logo: { fontSize: 24, fontWeight: "800", color: spiritualTheme.primary },
  headerText: { color: spiritualTheme.muted, marginTop: 2 },
  body: { flex: 1 },
  nav: {
    borderTopColor: spiritualTheme.soft,
    borderTopWidth: 1,
    backgroundColor: "#fff",
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  navButton: { paddingVertical: 8, paddingHorizontal: 10, borderRadius: 10 },
  navButtonActive: { backgroundColor: spiritualTheme.soft },
  navButtonText: { color: spiritualTheme.muted, fontSize: 12, fontWeight: "600" },
  navButtonTextActive: { color: spiritualTheme.primary }
});

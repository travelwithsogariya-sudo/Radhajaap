import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SpiritualCard } from "../../components/SpiritualCard";
import { spiritualTheme } from "../../theme/spiritualTheme";
import { AnalyticsSnapshot } from "../../types";

const mockStats: AnalyticsSnapshot = {
  daily: 324,
  weekly: 2100,
  monthly: 8400,
  yearly: 102000,
  horizon3y: 306000,
  horizon5y: 510000,
  horizon10y: 1020000,
  horizon50y: 5100000,
  horizon100y: 10200000
};

export function AnalyticsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Spiritual Analytics</Text>
      <Text style={styles.subtitle}>Your jaap growth from daily rhythm to lifelong bhakti journey.</Text>

      <SpiritualCard title="Daily" value={mockStats.daily} subtitle="today" />
      <SpiritualCard title="Weekly" value={mockStats.weekly} subtitle="last 7 days" />
      <SpiritualCard title="Monthly" value={mockStats.monthly} subtitle="current month" />
      <SpiritualCard title="Yearly" value={mockStats.yearly} subtitle="current year" />

      <View style={styles.longTermBox}>
        <Text style={styles.longTermTitle}>Long-term Projections</Text>
        <Text style={styles.longTermText}>3 Years: {mockStats.horizon3y.toLocaleString()}</Text>
        <Text style={styles.longTermText}>5 Years: {mockStats.horizon5y.toLocaleString()}</Text>
        <Text style={styles.longTermText}>10 Years: {mockStats.horizon10y.toLocaleString()}</Text>
        <Text style={styles.longTermText}>50 Years: {mockStats.horizon50y.toLocaleString()}</Text>
        <Text style={styles.longTermText}>100 Years: {mockStats.horizon100y.toLocaleString()}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, paddingBottom: 40 },
  heading: { fontSize: 24, fontWeight: "700", color: spiritualTheme.text },
  subtitle: { color: spiritualTheme.muted, marginTop: 4, marginBottom: 12 },
  longTermBox: { backgroundColor: "#fff", borderRadius: 14, padding: 14, borderColor: spiritualTheme.soft, borderWidth: 1 },
  longTermTitle: { color: spiritualTheme.primary, fontWeight: "700", marginBottom: 8 },
  longTermText: { color: spiritualTheme.text, marginBottom: 4 }
});

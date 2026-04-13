import React, { useMemo, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { spiritualTheme } from "../../theme/spiritualTheme";

const entries = Array.from({ length: 100 }).map((_, i) => ({
  rank: i + 1,
  name: `Bhakt ${i + 1}`,
  chants: 120000 - i * 777
}));

export function LeaderboardScreen() {
  const [limit, setLimit] = useState<10 | 50 | 100>(10);

  const selected = useMemo(() => entries.slice(0, limit), [limit]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Public Leaderboard</Text>
      <View style={styles.switches}>
        {[10, 50, 100].map((n) => (
          <Pressable key={n} onPress={() => setLimit(n as 10 | 50 | 100)} style={styles.switchBtn}>
            <Text style={styles.switchText}>Top {n}</Text>
          </Pressable>
        ))}
      </View>

      {selected.map((item) => (
        <View key={item.rank} style={styles.row}>
          <Text style={styles.rank}>#{item.rank}</Text>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.score}>{item.chants.toLocaleString()}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, paddingBottom: 40 },
  heading: { fontSize: 24, fontWeight: "700", color: spiritualTheme.text, marginBottom: 10 },
  switches: { flexDirection: "row", gap: 8, marginBottom: 10 },
  switchBtn: { backgroundColor: spiritualTheme.soft, borderRadius: 12, paddingVertical: 8, paddingHorizontal: 12 },
  switchText: { color: spiritualTheme.text, fontWeight: "600" },
  row: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: spiritualTheme.soft,
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center"
  },
  rank: { width: 44, color: spiritualTheme.primary, fontWeight: "700" },
  name: { flex: 1, color: spiritualTheme.text },
  score: { color: spiritualTheme.text, fontWeight: "700" }
});

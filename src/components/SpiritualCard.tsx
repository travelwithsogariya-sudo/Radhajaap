import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { spiritualTheme } from "../theme/spiritualTheme";

interface Props {
  title: string;
  value: string | number;
  subtitle?: string;
}

export function SpiritualCard({ title, value, subtitle }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: spiritualTheme.card,
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
    borderColor: spiritualTheme.soft,
    borderWidth: 1
  },
  title: { color: spiritualTheme.muted, fontSize: 13 },
  value: { color: spiritualTheme.text, fontSize: 22, fontWeight: "700", marginTop: 4 },
  subtitle: { color: spiritualTheme.muted, fontSize: 12, marginTop: 2 }
});

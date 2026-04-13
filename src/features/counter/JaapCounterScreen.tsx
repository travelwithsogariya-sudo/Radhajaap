import React, { useMemo, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { defaultMantras } from "../../data/defaultMantras";
import { spiritualTheme } from "../../theme/spiritualTheme";
import { completedMalas, MALA_BEADS, progressPercent } from "../../utils/mala";

export function JaapCounterScreen() {
  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState(defaultMantras[0]);
  const [customName, setCustomName] = useState("");
  const [targetInput, setTargetInput] = useState(String(selected.target));

  const target = Number(targetInput) > 0 ? Number(targetInput) : selected.target;
  const percent = useMemo(() => progressPercent(count, target), [count, target]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Naam Jaap Counter</Text>
      <Text style={styles.mantra}>Current: {selected.text}</Text>

      <View style={styles.chipRow}>
        {defaultMantras.slice(0, 3).map((m) => (
          <Pressable key={m.id} onPress={() => setSelected(m)} style={styles.chip}>
            <Text style={styles.chipText}>{m.text}</Text>
          </Pressable>
        ))}
      </View>

      <TextInput
        placeholder="Custom mantra name"
        value={customName}
        onChangeText={setCustomName}
        style={styles.input}
      />
      <Pressable
        style={styles.secondaryBtn}
        onPress={() => {
          if (!customName.trim()) return;
          setSelected({ id: customName.toLowerCase(), text: customName.trim(), target: 108 });
          setCustomName("");
        }}
      >
        <Text style={styles.secondaryBtnText}>Set Custom Name</Text>
      </Pressable>

      <TextInput
        placeholder="Target (108 / 1008)"
        keyboardType="numeric"
        value={targetInput}
        onChangeText={setTargetInput}
        style={styles.input}
      />

      <View style={styles.counterWrap}>
        <Text style={styles.count}>{count}</Text>
        <Text style={styles.sub}>Target: {target} • Progress: {percent}%</Text>
        <Text style={styles.sub}>Completed malas: {completedMalas(count, MALA_BEADS)}</Text>
      </View>

      <Pressable style={styles.mainBtn} onPress={() => setCount((c) => c + 1)}>
        <Text style={styles.mainBtnText}>Tap for Jaap +1</Text>
      </Pressable>
      <Pressable style={styles.secondaryBtn} onPress={() => setCount(0)}>
        <Text style={styles.secondaryBtnText}>Reset</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  heading: { fontSize: 24, fontWeight: "700", color: spiritualTheme.text },
  mantra: { marginTop: 6, color: spiritualTheme.primary, fontWeight: "600" },
  chipRow: { flexDirection: "row", gap: 8, marginTop: 10 },
  chip: { backgroundColor: spiritualTheme.soft, paddingHorizontal: 10, paddingVertical: 8, borderRadius: 20 },
  chipText: { color: spiritualTheme.text, fontSize: 12 },
  input: {
    marginTop: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderColor: spiritualTheme.soft,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 10
  },
  counterWrap: {
    marginTop: 16,
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16
  },
  count: { fontSize: 48, fontWeight: "800", color: spiritualTheme.primary },
  sub: { color: spiritualTheme.muted, marginTop: 4 },
  mainBtn: { backgroundColor: spiritualTheme.primary, borderRadius: 12, padding: 14, marginTop: 16 },
  mainBtnText: { color: "#fff", textAlign: "center", fontWeight: "700" },
  secondaryBtn: {
    backgroundColor: spiritualTheme.soft,
    borderRadius: 12,
    padding: 12,
    marginTop: 10
  },
  secondaryBtnText: { color: spiritualTheme.text, textAlign: "center", fontWeight: "600" }
});

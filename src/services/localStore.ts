import AsyncStorage from "@react-native-async-storage/async-storage";
import { MantraConfig, UserProfile } from "../types";

const PROFILE_KEY = "radhajaap.profile";
const MANTRAS_KEY = "radhajaap.mantras";

export async function loadProfile(): Promise<UserProfile | null> {
  const data = await AsyncStorage.getItem(PROFILE_KEY);
  return data ? (JSON.parse(data) as UserProfile) : null;
}

export async function saveProfile(profile: UserProfile): Promise<void> {
  await AsyncStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
}

export async function loadMantras(): Promise<MantraConfig[]> {
  const data = await AsyncStorage.getItem(MANTRAS_KEY);
  return data ? (JSON.parse(data) as MantraConfig[]) : [];
}

export async function saveMantras(mantras: MantraConfig[]): Promise<void> {
  await AsyncStorage.setItem(MANTRAS_KEY, JSON.stringify(mantras));
}

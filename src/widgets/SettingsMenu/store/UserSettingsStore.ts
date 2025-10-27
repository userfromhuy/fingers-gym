import { defineStore } from "pinia";
import { ref } from "vue";
import { UserInterfaceState } from "../types/SettingsType.ts";

export const useUserSettingsStore = defineStore('user settings', () => {

  const mode = ref<UserInterfaceState['mode']['value']>('casual')
  const color = ref<UserInterfaceState['color']['value']>('gray')
  return { mode, color }
})

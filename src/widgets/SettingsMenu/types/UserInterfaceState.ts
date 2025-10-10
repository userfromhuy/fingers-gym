import { Ref } from 'vue';
export interface UserInterfaceState {
  mode: Ref<'casual' | 'normal'>;
  color: Ref<'gray' | 'yellow' | 'skyblue' | 'purple'>;
}

import { Ref, ComputedRef } from "vue";

export interface StoreType {
  count: Ref<number>;
  name: Ref<string>;
  doubleCount: ComputedRef<number>;
  sayHi: () => void;
}

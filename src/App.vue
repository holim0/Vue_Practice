<template>
  <div>
    <h1>This is an about page</h1>
    {{ counter }}
    {{ times2 }}
    <button @click="inc">inc</button>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const counter = computed(() => store.state.counter);
    const test = computed(() => store.getters);
    const inc = () => store.commit("setCounter", counter.value + 1);

    return { counter, inc, test };
  }
};
</script>
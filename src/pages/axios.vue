<template>
  <div>home - {{ msg }}</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const msg = 'axios';
    return {
      msg,
    };
  },
});
</script>

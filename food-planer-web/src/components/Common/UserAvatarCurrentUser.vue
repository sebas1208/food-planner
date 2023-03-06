<script setup lang="ts">
// import { useMainStore } from "@/stores/main";
import UserAvatar from "./UserAvatar.vue";

// const mainStore = useMainStore();
</script>

<template>
  <UserAvatar username="Sebastian Avalos">
    <slot />
  </UserAvatar>
</template>

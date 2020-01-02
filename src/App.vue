<template>
  <div id="app">
    <shortcut-tool></shortcut-tool>
    <router-view />
  </div>
</template>
<script>
export default {
  components: {
    shortcutTool: () => import('@/components/shortcut_tool/shortcut_tool.vue'),
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
#browser {
  width: 100%;
  height: 70%;
}
#app {
  width: 100vw;
  height: 100vh;
}
</style>

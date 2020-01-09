<template>
  <div id="app">
    <shortcut-tool></shortcut-tool>
    <router-view style="height: calc(100vh - 30px);" />
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
#app {
  width: 100vw;
  height: 100vh;
}
</style>

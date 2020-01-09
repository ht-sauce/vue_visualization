<template>
  <div id="home">
    <!--属性-->
    <div class="attribute"></div>
    <!--内部内容-->
    <div class="page"></div>
    <!--组件框-->
    <div class="assembly"></div>
  </div>
</template>

<script>
export default {
  name: 'home',
  created() {},
  methods: {},
  mounted() {},
  destroyed() {},
};
</script>
<style scoped lang="scss">
@import '@/assets/css/global.scss';
#home {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  .assembly,
  .attribute {
    padding: $main-padding-spacing;
    overflow-y: auto;
  }
  .attribute {
    width: 250px;
    height: 100%;
    border-right: $main-border-color 1px solid;
    flex-shrink: 0;
  }
  .page {
    width: 100%;
    min-width: 500px;
  }
  .assembly {
    width: 250px;
    height: 100%;
    border-left: $main-border-color 1px solid;
    flex-shrink: 0;
  }
}
</style>

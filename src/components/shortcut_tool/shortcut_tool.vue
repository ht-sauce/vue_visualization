<template>
  <div id="shortcut_tool" style="-webkit-app-region: drag;">
    <div class="nav">
      <span class="title">{{ $store.state.title }}</span>
      <el-breadcrumb
        class="router-history"
        separator-class="el-icon-arrow-right"
      >
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="seting">
      <!--系统操作部分-->
      <template v-for="(item, index) in tools">
        <span
          :key="index"
          @click="item.event(item)"
          class="iconfont"
          :class="item.icon"
          v-show="item.show"
        ></span>
      </template>
    </div>
  </div>
</template>

<script>
const { BrowserWindow } = require('electron').remote;
export default {
  data() {
    return {
      tools: [
        {
          title: '缩小进入任务栏',
          show: true,
          icon: 'icon-suoxiao1',
          event: () => {
            this.BW_tool_button('minimize');
          },
        },
        {
          title: '全屏或缩小窗口',
          show: true,
          icon: 'icon-chuangkou2',
          type: 'maximize',
          event: item => {
            const focusWin = BrowserWindow.getFocusedWindow();
            this.BW_tool_button(item.type);
            // 判断窗口是否最大最小化
            if (focusWin.isMaximized()) {
              item.type = 'unmaximize';
              item.icon = 'icon-chuangkou1';
            } else {
              item.type = 'maximize';
              item.icon = 'icon-chuangkou2';
            }
          },
        },
        {
          title: '关闭窗口',
          show: true,
          icon: 'icon-guanbicuowu',
          event: () => {
            this.BW_tool_button('close');
          },
        },
        {
          title: '开发者工具',
          show: true,
          icon: 'icon-daima',
          event: () => {
            this.BW_tool_button('toggleDevTools');
          },
        },
        {
          title: '刷新页面',
          show: true,
          icon: 'icon-htmal5icon23',
          event: () => {
            this.BW_tool_button('reload');
          },
        },
      ],
      router_history: [], //路由记录表
    };
  },
  beforeCreate() {},
  created() {
    console.log(this.$router);
  },
  beforeMount() {},
  mounted() {},
  methods: {
    BW_tool_button(type) {
      const focusWin = BrowserWindow.getFocusedWindow();
      switch (type) {
        case 'reload':
          focusWin.reload();
          break;
        case 'toggleDevTools':
          focusWin.toggleDevTools();
          break;
        case 'close':
          focusWin.close();
          break;
        case 'minimize':
          focusWin.minimize();
          break;
        case 'maximize':
          focusWin.maximize();
          break;
        case 'unmaximize':
          focusWin.unmaximize();
          break;
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/css/global.scss';
#shortcut_tool {
  width: 100vw;
  height: 30px;
  background: $main-background-color;
  border-bottom: $secondary-border-color 1px solid;
  padding: 0 $main-padding-spacing;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: $h6;
  color: $main-font-color;
  > * {
    -webkit-app-region: no-drag;
  }
  .nav {
    display: flex;
    align-items: center;
    .title {
      max-width: 220px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .router-history {
      margin-left: $main-spacing-div;
      overflow: hidden;
      flex: 1;
      width: 100%;
      font-size: 10px;
    }
  }
  .seting {
    > span {
      display: inline-block;
      font-size: 18px;
      margin-left: 10px;
      line-height: 30px;
      &:hover {
        text-shadow: $occupy-font-color 0 0 5px;
        font-weight: bold;
      }
    }
  }
}
</style>

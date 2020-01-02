<template>
  <div id="shortcut_tool" style="-webkit-app-region: drag;">
    <div class="nav">
      <span class="title">{{ $store.state.title }}</span>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
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
  created() {},
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
#shortcut_tool {
  width: 100vw;
  height: 30px;
  background: #333333;
  border-bottom: #333333 1px solid;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #f9f9f9;
  > * {
    -webkit-app-region: no-drag;
  }
  .nav {
    display: flex;
    align-items: center;
  }
  .seting {
    > span {
      display: inline-block;
      font-size: 18px;
      margin-left: 10px;
      line-height: 30px;
      &:hover {
        color: #ffffff;
        text-shadow: #ffffff 0 0 2px;
        font-weight: bold;
      }
    }
  }
}
</style>

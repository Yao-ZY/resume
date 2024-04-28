<template>
    <div class = 'navigation'>
        <el-menu class = 'navigation' :default-active="active">
          <a href="javascript:void(0)" @click="goAnchor('introduce')">
            <el-menu-item index="1">
                <i class="el-icon-s-home"></i>
            </el-menu-item>
          </a>
          <a href="javascript:void(0)" @click="goAnchor('aboutMe')">
            <el-menu-item index="2">
                <i class="el-icon-user"></i>
            </el-menu-item>
          </a>
          <a href="javascript:void(0)" @click="goAnchor('work')">
            <el-menu-item index="3">
                <i class="el-icon-folder-opened"></i>
            </el-menu-item>
          </a>
          <a href="javascript:void(0)" @click="goAnchor('education')">
            <el-menu-item index="4">
              <i class="el-icon-school"></i>
            </el-menu-item>
          </a> 
        </el-menu>
    </div>
</template>

<script>
export default {
  props: {
    active: String,
    require: true
  },
  data () {
    return {
      offsetTop: 0
    }
  },
  methods: {
    goAnchor(id) {
      var anchor = document.getElementById(id);
      var detail = document.getElementById("detail");
      // chrome
      detail.scrollTop = anchor.offsetTop;
      // firefox
      detail.scrollTop = anchor.offsetTop;
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/less/navigation_style.less';
</style>

<template>
  <div id="app">
    <div id = "card">
      <PersonalCard></PersonalCard>
    </div>
    <div id = "detail">
      <PersonalDetail v-on:activeHandle="activeHandle"></PersonalDetail>
    </div>
    <div id = 'navigation'>
      <PersonalNavigation :active = "active"></PersonalNavigation>
    </div>
  </div>
</template>

<script>
import PersonalCard from '@/components/PersonalCard.vue'
import PersonalDetail from '@/components/PersonalDetail.vue'
import PersonalNavigation from '@/components/PersonalNavigation.vue'

export default {
  name: 'App',
  data () {
    return {
      active: "1"
    }
  },
  components: {
    PersonalCard,
    PersonalDetail,
    PersonalNavigation
  },
  methods: {
    activeHandle(value) {
      this.active = value + 1
    }
  }
}
</script>

<style lang="less">
@import './assets/less/global_style.less';
</style>

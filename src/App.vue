<template>
  <div id="app">
    <div id = "card">
      <PersonalCard></PersonalCard>
    </div>
    <div id = "detail">
      <PersonalDetail></PersonalDetail>
    </div>
    <div id = 'navigation'>
      <PersonalNavigation></PersonalNavigation>
    </div>
  </div>
</template>

<script>
import PersonalCard from '@/components/PersonalCard.vue'
import PersonalDetail from '@/components/PersonalDetail.vue'
import PersonalNavigation from '@/components/PersonalNavigation.vue'

export default {
  name: 'App',
  components: {
    PersonalCard,
    PersonalDetail,
    PersonalNavigation
  }
}
</script>

<style lang="less">
@import './assets/less/global_style.less';
</style>

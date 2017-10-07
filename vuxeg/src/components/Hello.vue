<template>
  <div>
    <group>
      <cell is-link title="Simple" link="/component/tabbar-simple"></cell>
      <cell is-link title="Switch icons" link="/component/tabbar-icon"></cell>
    </group>
    <tabbar>
      <tabbar-item :selected='true'>
        <span slot="label">Wechat</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <span slot="label">Message</span>
      </tabbar-item>
      <tabbar-item>
        <span slot="label">Explore</span>
      </tabbar-item>
      <tabbar-item badge="8">
        <span slot="label">News</span>
      </tabbar-item>
    </tabbar>
    <button @click='linkOut'>跳转</button>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell } from 'vux'

export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell
  },
  methods:{
    linkOut(){
      this.$router.push({ path: 'Check', query: { plan: '123' }})
    }
  }
}
</script>
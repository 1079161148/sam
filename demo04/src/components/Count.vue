<template>
  <div>
    <p>{{mqg}}</p>
    <p>{{$store.state.a.count}}</p> <!-- 类似前面的简写法 -->
    <p>
      <!-- {{$store.state.count}} -->------{{count}}</p>
    <button @click="$store.commit('add',10)">+</button>
    <button @click="reduce">-</button>
    <p>
      <button @click="addAction">+</button>
      <button @click="reduceAction">-</button>
    </p>
  </div>
</template>
<script type="text/javascript">
import store from '@/vuex/store';
import { mapState, mapMutations, mapGetters,mapActions } from 'vuex'
export default {
  data() {
    return {
      mqg: "hello vuex"
    }
  },
  //第一种
  // computed:{
  //     count(){
  //       return this.$store.state.count;
  //     }
  // },
  //第二种
  // computed:mapState({
  //   count:state=>state.count
  // }),
  //第三种
  // computed:mapState(['count']),
  // es6扩展运算符
  computed: {
    ...mapState(['count']),
    // 第一种
    // count(){
    //   return this.$store.getters.count
    // }
    //...mapGetters(['count'])
  },
  methods: {
    ...mapMutations(['add', 'reduce']),
    ...mapActions(['addAction','reduceAction'])
  },
  store
}

</script>

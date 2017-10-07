<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1 v-html='msg'></h1>
    <h1 v-text='msg'></h1>
    <h2 v-html='msg1'></h2>
    <h3 v-text='msg1'></h3>
    <p v-show='isshow'>你就是菜鸡</p>
    <p v-if="isshow">你也是垃圾</p>
    <p :class='{"black":black}'>你也牛逼</p>
    <p @click="clickme">你牛逼哄哄</p>
    <span>{{5+5}}</span></br><hr/> <!-- 支持自动计算简单的表达式 -->
    <span>{{5>3?"yes":"no"}}</span><!-- 简单的判断支持三元运算符 -->
    <a :href="url">真菜逼</a>
    <p :id="'this'+id">{{id}}</p>
    <input type="text" v-model="message">
    <input type="text" v-model.lazy="message">
    <!-- 懒加载数据绑定 -->
    <input type="text" v-model.number="message"><!-- 必须是数字才能双向绑定 -->
    <p>{{message}}</p>
    <span>{{mvg.split('').reverse().join('')}}</span><!-- 调用该对象上的方法方法 -->
    <p>{{fullName}}</p>

    <!-- <p>{{$store.state.count}}</p> -->
   <!--  <button @click="$store.commit('add')">+</button>
    <button @click="$store.commit('reduce')">-</button> -->
  </div>
</template>
<script>
//import store  from '@/vuex/store';
export default {
  data() {
    return {
      msg: '菜鸡来学vue',
      msg1: '<span>你好</span>',
      isshow: false,
      black: true,
      url:'http://www.baidu.com',
      id:'12',
      message:"",
      mvg:"12345",
      firstName: 'C',
      lastName: 'O'
    }
  },
  computed: {
        fullName: function(){
            return this.firstName + ' ' + this.lastName
        }
  },
  methods: {
    clickme() {
      alert('你个傻逼')
      window.location = 'http://www.baidu.com'; //window对象可以不写href属性
      //显示hash#后面  hostname域名 herf完整的网址 pathname"/" port:"" protocol："https"
      //reload() 方法用于重新加载当前文档。location.reload(force)
      const url = 'http://www.w3school.com.cn/tiy/t.asp?f=hdom_loc_search';
      document.write(location.search);
      //search 属性是一个可读可写的字符串，可设置或返回当前 URL 的查询部分（问号 ? 之后的部分）
      alert(3)
      //　window.onhashchange = func;
      //<body onhashchange="func();">
      //window.addEventListener("hashchange", func, false);
      const urls = 'http://example.com:1234/test.htm#part2';
       document.write(location.hash);
      //location.hash=anchorname  该字符串是 URL 的锚部分（从 # 号开始的部分）
    }
  },
  //store//完美的引用state这个状态。
}

</script>
<style scoped>
h1,
h2 {
  font-weight: normal;
}

.black {
  color: #f666e6;
}

</style>

<template>
  <div class="list" ref="wrapper">
    <div>
    <div class="area">
      <div class="title border-topbottom">当前城市</div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">{{this.currentCity}}</div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">热门城市</div>
      <div class="button-list">
        <div class="button-wrapper"
             @click="handleCityClick(item.name)" v-for="item in hot" :key="item.id">
          <div class="button">{{item.name}}</div>
        </div>
      </div>
    </div>

    <div class="area" :ref="key" v-for="(item,key) in cities" :key="key">
      <div class="title border-topbottom">{{key}}</div>
      <div class="item-list">
        <div
          @click="handleCityClick(innerItem.name)"
          class="item border-topbottom"
          v-for="innerItem in item"
          :key="innerItem.id"
        >
          {{innerItem.name}}
        </div>
      </div>
    </div>


    </div>
  </div>
</template>

<script>
  import {mapState,mapMutations} from 'vuex'
  import Bscroll from 'better-scroll'
  export default {
    name:'CityList',
    computed:{
      ...mapState({
         currentCity:'city'
      })
    },
    props:{
      hot:Array,
      cities:Object,
      letter:String
    },
    methods:{
      handleCityClick(city){
        this.changeCity(city)
        this.$router.push('/');
      },
      ...mapMutations(['changeCity'])
    },
    mounted(){
      this.scroll = new Bscroll(this.$refs.wrapper)
    },
    watch:{
      letter(){
        if(this.letter){
          const element=this.$refs[this.letter][0]
          this.scroll.scrollToElement(element)
        }

      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varlbles.styl'
  .border-topbottom
    &:before
     border-color :#ccc
    &:after
     border-color :#ccc
   .list
     overflow :hidden
     position :absolute
     top: 1.58rem
     left: 0
     right: 0
     bottom: 0
   .title
    line-height :.54rem
    background :#eee
    padding-left .2rem
    color:#666
    font-size .26rem
   .button-list
      overflow :hidden
      padding  :.1rem .6rem .1rem .1rem
     .button-wrapper
       float:left
       width:33.33%
      .button
        text-align :center
        padding :.1rem 0
        margin .1rem
        border-radius :.06rem
        border:.02rem solid #ccc
       .item-list
         .item
           line-height .76rem
           padding-left .2rem
</style>

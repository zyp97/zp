<template>
  <div class="icons">
    <swiper :options="swiperOption">
     <swiper-slide v-for="(page,index) in pages" :key="index">
    <div class="icon" v-for="item in page" :key="item.id">
      <div class="icon-img">
        <img class="icon-img-content" :src="item.imgUrl">
      </div>
      <p class="icon-desc">{{item.desc}}</p>
    </div>
     </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  import SwiperSlide from "../../../../node_modules/vue-awesome-swiper/src/slide.vue";

  export default{
    components: {SwiperSlide},
    name:'HomeIcons',
    props:{
      list:Array
   },
    data(){
      return{
        swiperOption:{
          autoplay:false
        }
      }
    },
    computed:{
      pages(){
        const pages=[];
        this.list.forEach((item,index)=>{
          const page=Math.floor(index/8);
          if(!pages[page]){
            pages[page]=[]
          }
          pages[page].push(item)
        });
        return pages
      }
    }

  }
</script>

<style lang="stylus"scoped>
  @import '~styles/varlbles.styl'
  @import '~styles/minins.styl'
   .icons >>>.swiper-container
     height:0
     padding-bottom 50%
    .icons
       margin-top .1rem
    .icon
     float:left
     height:0
     position relative
     overflow hidden
     width:25%
     padding-bottom 25%
    .icon-img
      position:absolute
      top: 0
      left: 0
      right:0
      bottom :.44rem
      box-sizing border-box
      padding :.1rem
    .icon-img-content
      height:100%
      display block
      margin 0 auto
     .icon-desc
       position:absolute
       left: 0
       right: 0
       bottom: 0
       height: .64rem
       line-height: .44rem
       text-align:center
       color:$darkTextColor
       ellipsis()


</style>

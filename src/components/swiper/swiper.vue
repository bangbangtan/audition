<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div v-for="item in list" class="swiper-slide">
        <img :src="item.img" alt="">
        <p class="title">{{item.title}}</p>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
  import Swiper from '../../../static/swiper3.4.2/js/swiper.js'

  require('../../../static/swiper3.4.2/css/swiper.min.css')
  export default {
    props: {
      list: [Array]
    },
    mounted() {
      let swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }
      })
      console.log(swiper)
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .swiper-container {
    width: 100%;
    height: 1.83rem;
    z-index: 0;
    .swiper-slide {
      position: relative;
      background-position: center;
      background-size: cover;
      width: 80%;
      height: 1.62rem;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      p {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: .37rem;
        padding: 0 .1rem;
        line-height: .37rem;
        font-size: .15rem;
        color: #fff;
        background-color: rgba(0, 0, 0, .5);
      }
    }
    .swiper-pagination-bullet-active {
      background: #000;
    }
    .swiper-pagination-bullet {
      width: 12px;
      height: 2px;
      border-radius: 0;
    }
    .swiper-pagination {
      bottom: .06rem;
    }
  }


</style>

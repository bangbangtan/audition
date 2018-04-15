<template>
  <div class="g-global">
    <div class="banner">
      <my-swiper :list="bannerList"></my-swiper>
    </div>
    <div class="news-wrapper">
      <div class="tag" v-if="tags.length!=0">
        <span class="name">关键字筛选</span>
        <span v-for="(item,index) in tags">{{item}}<i class="close" @click="deleteWord(item,index)">×</i></span>
      </div>
      <ul class="news">
        <li v-for="item in news">
          <router-link :to="{path:'detail',query: {id:item.id}}">
            <div class="news-img">
              <img :src="item.img" alt="文章图片">
            </div>
            <div class="news-info">
              <div class="text-overhidden title">{{item.title}}</div>
              <div class="text-overhidden desc">{{item.desc}}</div>
              <div class="bottom-wrapper clearfix">
                <ul class="fl">
                  <li class="tag-name">标签</li>
                  <li v-for="item in item.tags">{{item}}</li>
                </ul>
                <span class="fr">{{item.publishTime}}</span>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import mySwiper from '@/components/swiper/swiper'
  import {getNewsList} from '@/config/api'

  export default {
    data() {
      return {
        bannerList: [{
          img: 'http://gongmall-img.oss-cn-hangzhou.aliyuncs.com/test/857A4902.jpg',
          title: '独角兽峰会刷爆头条，王刚禅语四座皆惊!'
        }, {
          img: 'http://gongmall-img.oss-cn-hangzhou.aliyuncs.com/test/IMG_0752.JPG',
          title: '独角兽峰会刷爆头条，王刚禅语四座皆惊!'
        }, {
          img: 'http://gongmall-img.oss-cn-hangzhou.aliyuncs.com/test/_MG_0602.jpg',
          title: '独角兽峰会刷爆头条，王刚禅语四座皆惊!'
        }, {
          img: 'http://gongmall-img.oss-cn-hangzhou.aliyuncs.com/test/_MG_0602.jpg',
          title: '独角兽峰会刷爆头条，王刚禅语四座皆惊!'
        }],
        tags: [],
        news: [],
        num: 7,  // 一次显示多少条
        infinite: true
      }
    },
    methods: {
      deleteWord: function (item, index) {
        this.$store.commit('removeKeyWrod', index)  // 调用muation方法更改关键词
      },
      getDownData() {
        if (this.infinite) {
          getNewsList().then(res => {
            this.infinite = res.data.length >= this.num
            this.news.push.apply(this.news, res.data);
            window.removeEventListener('scroll', function () {
            }, false)
          })
        }
      }
    },
    created() {
      this.tags = this.$store.state.keyWord
      this.getDownData()
    },
    mounted() {
      let _this = this
      let $window = $(window)
      let viewHeight = $window.height()
      let contentHeight = 0
      window.addEventListener('scroll', function (e) {
        e.preventDefault()
        let scrollTop = $(this).scrollTop();    //滚动条距离顶部的高度
        let scrollHeight = $(document).height();   //当前页面的总高度
        let clientHeight = $(this).height();    //当前可视的页面高度
        // console.log("top:"+scrollTop+",doc:"+scrollHeight+",client:"+clientHeight);
        if (scrollTop + clientHeight >= scrollHeight) {   //距离顶部+当前高度 >=文档总高度 即代表滑动到底部 count++;         //每次滑动count加1
          _this.getDownData()
        }
      })
    },
    components: {
      'my-swiper': mySwiper
    }
  }
</script>
<!-- Add " scoped
    " attribute to limit CSS to this component only -->
<style scoped lang="less">
  .banner {
    padding: .05rem 0 0;
    margin-bottom: 10px;
    background-color: #fff;
  }

  .news-wrapper {
    .tag {
      padding: .05rem .15rem;
      border-bottom: 1px solid #e1e1e1;
      background-color: #fff;
      span {
        position: relative;
        display: inline-block;
        vertical-align: middle;
        border: 1px solid #ff7300;
        border-radius: 2px;
        height: .14rem;
        line-height: .14rem;
        padding: 0 .06rem;
        margin-right: .08rem;
        color: #ff7300;
        font-size: .08rem;
        i {
          display: inline-block;
          vertical-align: middle;
          height: 100%;
          font-size: .14rem;
          margin-left: .04rem;
        }
        &:first-child {
          background-color: #ff7300;
          color: #fff;
          height: .16rem;
          line-height: .16rem;
          font-size: .09rem;
          &::after {
            position: absolute;
            top: 50%;
            right: -.05rem;
            margin-top: -.05rem;
            content: '';
            width: 0;
            height: 0;
            border-top: .05rem solid transparent;
            border-left: .05rem solid #ff7300;
            border-bottom: .05rem solid transparent;
          }
        }
      }
    }
    .news {
      & > li {
        position: relative;
        margin-bottom: 10px;
        padding: .1rem .15rem .1rem 1.08rem;
        background-color: #fff;
        .news-img {
          position: absolute;
          top: .1rem;
          left: .15rem;
          width: .83rem;
          height: .6rem;
          background: url("./news_background.png") no-repeat center center/100%;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .news-info {
          .text-overhidden {
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            &.title {
              font-size: .12rem;
              color: #666;
              padding: .02rem 0;
            }
            &.desc {
              font-size: .1rem;
              color: #999;
              margin: .08rem 0;
            }
          }
          .bottom-wrapper {
            li {
              display: inline-block;
              position: relative;
              vertical-align: middle;
              border: 1px solid #e1e1e1;
              border-radius: 2px;
              height: .14rem;
              line-height: .14rem;
              padding: 0 .04rem;
              margin-right: .02rem;
              color: #999;
              font-size: .08rem;
              &.tag-name {
                background-color: #ff7300;
                color: #fff;
                height: .16rem;
                line-height: .16rem;
                font-size: .09rem;
                margin-right: .04rem;
                border: 1px solid #ff7300;
                &::after {
                  position: absolute;
                  top: 50%;
                  right: -0.05rem;
                  margin-top: -0.05rem;
                  content: '';
                  width: 0;
                  height: 0;
                  border-top: .05rem solid transparent;
                  border-left: .05rem solid #ff7300;
                  border-bottom: .05rem solid transparent;
                }
              }
            }
            & > span {
              color: #999;
              font-size: .09rem;
              margin-top: .05rem;
            }
          }
        }
      }
    }
  }
</style>

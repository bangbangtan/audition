<template>
  <div class="g-global">
    <div class="content">
      <div class="tags clearfix">
        <span @click="back()" class="fl">返回</span>
        <ul class="fr">
          <li v-for="item in news.tags" @click="addKeyWord(item)">{{item}}</li>
          <li class="tag-name">标签</li>
        </ul>
      </div>
      <div class="tips">
        <span class="origal">{{news.origal}}</span>
        <span class="time">{{news.publishTime}}</span>
      </div>
      <div class="title">{{news.title}}</div>
      <div class="summary">{{news.summary}}</div>
      <div class="content">{{news.content}}</div>
    </div>
    <div class="page">
      <span class="prev"></span>
      <span class="next"></span>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        id: 0,
        news: {
          title: '一场大咖站着讲，大牛站着听，N多CEO被拒之门外的独角兽峰会！',
          summary: '今天大咖全聚集在未来科技城海创园，是什么论坛这么火爆？2017中国（杭州）独角兽管理创新高峰论坛！',
          content: '今天大咖全聚集在未来科技城海创园，是什么论坛这么火爆？2017中国（杭州）独角兽管理创新高峰论坛！点击观看演讲视频',
          origal: '工猫科技',
          publishTime: '2017年06月15日 00:04:32',
          tags: ['古道', '独角兽', '工猫科技', '爬山']
        }
      }
    },
    methods: {
      back: function () {
        // 用vuex做返回文章的位置
        this.$router.push('news')
      },
      addKeyWord: function (keyword) {
        this.$store.commit('addKeyWrod',keyword)
      }
    },
    created () {
      this.id = this.$route.query.id
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .g-global {
    .content {
      padding: 6px 15px;
      background-color: #fff;
      .tags {
        margin-bottom: .2rem;
        span {
          width: .4rem;
          height: .25rem;
          line-height: .25rem;
          text-align: center;
          border: 1px solid #ff7300;
          border-radius: 3px;
          color: #ff7300;
          font-size: .11rem;
        }
        ul {
          li {
            display: inline-block;
            color: #999;
            border: 1px solid #e1e1e1;
            border-radius: 2px;
            padding: .03rem;
            margin: .05rem 0 0 .02rem;
            font-size: .09rem;
            &.tag-name {
              position: relative;
              margin-left: .1rem;
              border: 1px solid #ff7300;
              color: #fff;
              background-color: #ff7300;
              &::after {
                position: absolute;
                top: 50%;
                left: -.05rem;
                margin-top: -.05rem;
                content: '';
                width: 0;
                height: 0;
                border-top: .05rem solid transparent;
                border-right: .05rem solid #ff7300;
                border-bottom: .05rem solid transparent;
              }
            }
          }
        }
      }
      .tips {
        .origal {
          font-size: .1rem;
          &::before {
            content: '来源：';
            padding-left: .2rem;
            color: #999;
            background: url("./icon_1.png") no-repeat left center/.12rem;
          }
        }
      }
    }
  }
</style>

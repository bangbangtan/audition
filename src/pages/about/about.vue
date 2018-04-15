<template>
  <div class="g-global">
    <div class="banner">
      <img src="./banner.png" alt="关于我们banner">
    </div>
    <section class="introduce left">
      <h1>公司简介</h1>
      <div class="content">
        <img src="./card.png" alt="公司名片">
        <p>
          工猫致力于为5.5亿灵活用工群体，平台型公司提供财务解决方案。并以劳务外包模式，通过在线发工资、查社保、查考勤、在线工资条、公告通 知BBS、个税返还等刚需功能实现蓝领理财、小额借贷等金融服务，以低频刚需的工资领取查询业务转化为高频的蓝领金融生态。   </p>
      </div>
    </section>
    <section class="business right">
      <h1>主要业务范围</h1>
      <div class="content">
        <img src="./business.png" alt="业务图">
        <p>劳务外包、人事管理、SaaS工具软件、工资代发、社保代缴、财税咨询、蓝领理财业务、短期贷款服务为C端蓝领提供小额借贷、为B端企业提供工资垫付短期贷款服务。</p>
        <p>创始团队多来自阿里、银行。创始人有超过13年的互联网以及蓝领行业从业经验。</p>
        <p>项目由滴滴出行天使王刚、暾澜等投资。</p>
      </div>
    </section>
    <section class="media left">
      <h1>媒体报道</h1>
      <div class="content">
        <div class="media-img">
          <img src="./media.png" alt="业务图">
        </div>
        <ul>
          <li v-for="item in medias">
            <div class="img">
              <img :src="item.img" alt="媒体图标">
            </div>
            <div class="info">
              <div class="title">{{item.title}}</div>
              <div class="desc">{{item.desc}}</div>
              <a class="href" :href="item.href">{{item.href}}</a>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section class="address right">
      <h1>公司地址</h1>
      <div class="content">
        <div v-for="item in address">
          <i :class="item.className"></i>
          <span v-for="param in item.params">{{param}}</span>
        </div>
        <div class="map">
          <companymap></companymap>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import companymap from '@/components/map/map'

  export default {
    data() {
      return {
        medias: [{
          img: 'http://gongmall-img.oss-cn-hangzhou.aliyuncs.com/test/857A4902.jpg',
          title: '独角兽峰会刷爆头条，王刚禅语四座皆惊!',
          desc: '独角兽峰会刷爆头条，王刚禅语四座皆惊!',
          href: 'http://www.baidu.com'
        }, {
          img: 'http://gongmall-img.oss-cn-hangzhou.aliyuncs.com/test/857A4902.jpg',
          title: '独角兽峰会刷爆头条，王刚禅语四座皆惊!',
          desc: '独角兽峰会刷爆头条，王刚禅语四座皆惊!',
          href: 'http://www.baidu.com'
        }, {
          img: 'http://gongmall-img.oss-cn-hangzhou.aliyuncs.com/test/857A4902.jpg',
          title: '独角兽峰会刷爆头条，王刚禅语四座皆惊!',
          desc: '独角兽峰会刷爆头条，王刚禅语四座皆惊!',
          href: 'http://www.baidu.com'
        }, {
          img: 'http://gongmall-img.oss-cn-hangzhou.aliyuncs.com/test/857A4902.jpg',
          title: '独角兽峰会刷爆头条，王刚禅语四座皆惊!',
          desc: '独角兽峰会刷爆头条，王刚禅语四座皆惊!',
          href: 'http://www.baidu.com'
        }],
        address: [{
          className: 'mobile',
          params: ['4008-381-081', '工作日：9:00-18:00']
        }, {
          className: 'address',
          params: ['浙江省杭州市余杭区文一西路998号，未来科技城海创园1幢1001--1003室']
        }, {
          className: 'mail',
          params: ['db@gongmall.com']
        }]
      }
    },
    components: {
      companymap
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  img {
    width: 100%;
  }

  section {
    margin-bottom: 10px;
    padding: 0 15px 15px;
    background-color: #fff;
    & > h1 {
      font-size: .13rem;
      color: #666;
      padding: .12rem 0;
      font-weight: normal;
    }
    &.left {
      h1 {
        text-align: left;
      }
    }
    &.right {
      h1 {
        text-align: right;
      }
    }
    p {
      font-size: .1rem;
      line-height: 1.2;
      margin-top: .1rem;
      color: #666;
    }
    &.introduce {
      img {
        display: block;
        width: 186px;
        margin: 0 auto;
      }
    }
    &.media {
      padding: 0;
      & > h1 {
        padding-left: 15px;
      }
      .content {
        .media-img {
          padding: 0 15px 15px;
        }
        li {
          position: relative;
          padding: .1rem 15px .1rem 1.07rem;
          border-bottom: 1px solid #e1e1e1;
          .img {
            position: absolute;
            top: .1rem;
            left: 15px;
            width: .8rem;
            height: .54rem;
          }
          .info {
            .title {
              font-size: .12rem;
              color: #333;
            }
            .desc {
              font-size: .1rem;
              margin: .1rem 0;
              color: #666;
            }
            .href {
              font-size: .09rem;
              color: #999;
            }
          }
        }
      }
    }
    &.address {
      .content {
        & > div {
          position: relative;
          padding: .14rem .2rem .14rem .51rem;
          border: 1px solid #e1e1e1;
          border-bottom: 0;
          &:last-child {
            border-bottom: 1px solid #e1e1e1;
          }
          i {
            position: absolute;
            left: .18rem;
            top: 50%;
            margin-top: -.11rem;
            width: .21rem;
            height: .21rem;
            border: 1px solid #e1e1e1;
            border-radius: 50%;
            margin-right: .11rem;
            &.mobile {
              background: url("mobile.png") no-repeat center center/.06rem;
            }
            &.address {
              background: url("address.png") no-repeat center center/.07rem;
            }
            &.mail {
              background: url("mail.png") no-repeat center center/.08rem;
            }
          }
          span {
            margin-right: .2rem;
            font-size: .1rem;
            color: #666;
          }
          &.map {
            padding: 0;
          }
        }
      }
    }
  }
</style>

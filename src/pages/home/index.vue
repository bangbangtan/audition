<template>
  <div class="g-global">
    <section class="banner">
      <my-swiper :list="bannerList"></my-swiper>
    </section>
    <section class="saas">
      <div class="section-title">
        <h1>SaaS平台</h1>
        <small>集成五大功能，简单、高效、便捷。</small>
      </div>
      <div class="section-content">
        <div class="item" v-for="item in saasList" :class="[item.className]">
          <span class="tag" :title="item.title"></span>
          <ul>
            <li v-for="childItem in item.childList">
              <h1>{{childItem.title}}</h1>
              <i :class="[childItem.className]"></i>
              <div class="desc">
                <p v-for="desc in childItem.descList">{{desc}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="cooperation">
      <div class="section-title">
        <h1>合作流程</h1>
        <small>一站式服务，无障碍合作</small>
      </div>
      <div class="section-content">
        <div class="wrapper">
          <div class="step">
            <span v-for="(item,index) in cooperationList">{{index + 1}}</span>
          </div>
          <ul>
            <li v-for="item in cooperationList">
              <i :class="item.className"></i>
              <span class="title">{{item.title}}</span>
              <span class="desc">{{item.desc}}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="custom">
      <div class="section-title">
        <h1>典型客户</h1>
        <small>和他们一起，享受优质服务</small>
      </div>
      <div class="section-content">
      </div>
    </section>
  </div>
</template>
<script>
  import mySwiper from '@/components/swiper/swiper'

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
        saasList: [{
          className: 'right',
          title: '一键发薪',
          childList: [{
            title: '合法合规',
            className: 'icon1-1',
            descList: ['理顺平台与用户的劳务关系', '避免二次清分等法律风险', '完全符合国家税法和财务规范']
          }, {
            title: '合法合规',
            className: 'icon1-2',
            descList: ['工猫代发薪', '企业自发薪', '一键群发10万笔']
          }, {
            title: '省钱',
            className: 'icon1-3',
            descList: ['财务成本', '支付费率', '通道费', '返税']
          }]
        }, {
          className: 'left',
          title: '工资条',
          childList: [{
            title: '二维码',
            className: 'icon2-1',
            descList: ['扫码关注工猫管家', '手机查工资']
          }, {
            title: '合法合规',
            className: 'icon2-2',
            descList: ['工资明细，一目了然']
          }, {
            title: '省钱',
            className: 'icon2-3',
            descList: ['余额提现，实时到账']
          }]
        }, {
          className: 'right',
          title: '信息管理',
          childList: [{
            title: '',
            className: 'icon3-1',
            descList: ['发薪/提现/预警通知，一触即发。']
          }, {
            title: '',
            className: 'icon3-2',
            descList: ['公司发布通告，一键送达全体员工。']
          }, {
            title: '',
            className: 'icon3-3',
            descList: ['短信/微信/邮箱全方位推送，想漏掉都难。']
          }]
        }, {
          className: 'left',
          title: '智慧客服',
          childList: [{
            title: '合法合规',
            className: 'icon4-1',
            descList: ['精细化管理']
          }, {
            title: '精准定位',
            className: 'icon4-2',
            descList: ['对工资有疑问？', '咨询合同问题？']
          }, {
            title: '集约化--在线批量处理',
            className: 'icon4-3',
            descList: ['打破传统客服壁垒', '节省人力成本']
          }]
        }, {
          className: 'right',
          title: '云合同',
          childList: [{
            title: '合法合规',
            className: 'icon5-1',
            descList: ['国家监管部门权威认证', '发薪/节税有法可依']
          }, {
            title: '简单易用',
            className: 'icon5-2',
            descList: ['在线一键签署', '告别签署纸质合同的繁琐流程']
          }, {
            title: '安全可靠',
            className: 'icon5-3',
            descList: ['合同内容多重加密 ', '无需担心信息泄露']
          }]
        }],
        cooperationList: [{
          className: 'item1',
          title: '商务洽谈',
          desc: '确定合作意向'
        }, {
          className: 'item2',
          title: '签约合作',
          desc: '企业合作入驻'
        }, {
          className: 'item3',
          title: '银行打款',
          desc: '专属账户打款'
        }, {
          className: 'item4',
          title: '代理发放',
          desc: '发放员工工资'
        }]
      }
    },
    methods: {},
    components: {
      'my-swiper':
      mySwiper
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  section {
    margin-bottom: 10px;
    padding: 0 15px;
    background-color: #fff;
    &.banner {
      padding: .05rem 0 0;
    }
    .section-title {
      padding: 12px 0;
      h1 {
        display: inline-block;
        vertical-align: bottom;
        font-size: .13rem;
        color: #666;
      }
      small {
        font-size: .1rem;
        color: #999;
      }
    }
    &.saas {
      .section-content {
        .item {
          position: relative;
          padding: 15px .3rem;
          border-top: 1px solid #e1e1e1;
          .tag {
            position: absolute;
            display: block;
            top: 0;
            width: 0;
            height: 0;
            border-top: .4rem solid #6bc827;
            &::after {
              content: attr(title);
              position: absolute;
              width: .6rem;
              text-align: center;
              font-size: .08rem;
              color: #fff;
            }
          }
          &.left {
            border-left: 1px solid #e1e1e1;
            .tag {
              left: 0;
              border-right: .4rem solid transparent;
              &::after {
                top: -0.28rem;
                left: -0.14rem;
                -webkit-transform: rotate(-45deg);
                transform: rotate(-45deg);
              }
            }
          }
          &.right {
            border-right: 1px solid #e1e1e1;
            .tag {
              border-left: .4rem solid transparent;
              right: 0;
              &::after {
                top: -.28rem;
                left: -.46rem;
                -webkit-transform: rotate(45deg);
                transform: rotate(45deg);
              }
            }
          }
          ul {
            display: -webkit-flex;
            display: flex;
            li {
              flex: 1 1 auto;
              margin-right: .1rem;
              h1 {
                font-size: .1rem;
                color: #666;
                text-align: center;
              }
              i {
                display: block;
                width: .67rem;
                height: .67rem;
                margin: .08rem auto;
                background-image: url("./icon_saas.png");
                background-size: 2.01rem;
                &.icon1-1 {
                  background-position: 0 0;
                }
                &.icon1-2 {
                  background-position: -.67rem 0;
                }
                &.icon1-3 {
                  background-position: -1.34rem 0;
                }
                &.icon2-1 {
                  background-position: 0 -.68rem;
                }
                &.icon2-2 {
                  background-position: -.67rem -.67rem;
                }
                &.icon2-3 {
                  background-position: -1.34rem -.67rem;
                }
                &.icon3-1 {
                  background-position: 0 -1.34rem;
                }
                &.icon3-2 {
                  background-position: -.67rem -1.34rem;
                }
                &.icon3-3 {
                  background-position: -1.34rem -1.34rem;
                }
                &.icon4-1 {
                  background-position: 0 -2.01rem;
                }
                &.icon4-2 {
                  background-position: -.67rem -2.01rem;
                }
                &.icon4-3 {
                  background-position: -1.34rem -2.01rem;
                }
                &.icon5-1 {
                  background-position: 0 -2.68rem;
                }
                &.icon5-2 {
                  background-position: -.67rem -2.68rem;
                }
                &.icon5-3 {
                  background-position: -1.34rem -2.68rem;
                }
              }
              p {
                font-size: .08rem;
                color: #666;
                text-align: center;
                line-height: 1.3;
              }
            }
          }
        }
      }
    }
    &.cooperation {
      .section-content {
        padding-bottom: .15rem;
        .wrapper {
          position: relative;
          padding-left: .31rem;
        }
        .step {
          display: block;
          position: absolute;
          width: 0;
          height: 100%;
          border-right: 1px solid #e1e1e1;
          left: .15rem;
          top: 0;
          span {
            position: absolute;
            left: -.06rem;
            display: block;
            width: .12rem;
            height: .12rem;
            line-height: .12rem;
            text-align: center;
            margin-top: -.06rem;
            color: #666;
            font-size: .08rem;
            background-color: #e1e1e1;
            border-radius: 50%;
            &:nth-child(1) {
              top: 12.5%;
            }
            &:nth-child(2) {
              top: 37.5%;
            }
            &:nth-child(3) {
              top: 62.5%;
            }
            &:nth-child(4) {
              top: 87.5%;
            }
          }
        }
        ul {
          li {
            padding: .1rem .27rem;
            border: 1px solid #e1e1e1;
            margin-bottom: .05rem;
            i {
              display: inline-block;
              vertical-align: middle;
              margin-right: .2rem;
              width: .29rem;
              height: .29rem;
              &.item1 {
                background: url("./step1.png") no-repeat center center/.29rem;
              }
              &.item2 {
                background: url("./step2.png") no-repeat center center/.36rem;
              }
              &.item3 {
                background: url("./step3.png") no-repeat center center/.27rem;
              }
              &.item4 {
                background: url("./step4.png") no-repeat center center/.27rem;
              }
            }
            span {
              vertical-align: middle;
              font-size: .1rem;
              &.title {
                color: #666;
              }
              &.desc {
                color: #999;
              }
            }
          }
        }
      }
    }
    &.custom {
      .section-content {
        width: 3.45rem;
        height: 1.73rem;
        padding-bottom: .2rem;
        background: url("./customs.png") no-repeat center center/100%;
      }
    }
  }
</style>

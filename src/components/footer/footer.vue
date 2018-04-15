<template>
  <footer class='clearfix'>
    <i class='icon-cal' @click='cal = true'></i>
    <ul class='fr'>
      <li>
        <a href='tel:13456712310'>
          <i class='tel'></i>
          <span>客服电话</span>
        </a>
      </li>
      <li @click="getCase()">
        <i class='case'></i>
        <span>经典案例</span>
      </li>
      <li id='custom'>
        <i class='custom'></i>
        <span>在线客服</span>
      </li>
    </ul>
    <transition name='fade'>
      <div class='calculator' v-if='cal' transiton='fade'>
        <div class='cal-wrapper'>
          <div class='cal-header'>
            <h1>财税筹划计算器</h1>
            <i @click='cal = false'>×</i>
          </div>
          <div class='cal-content'>
            <input type='number' v-model='plan' pattern='[0-9]*' placeholder='请输入您的月工资流水,如1,000,000' maxlength='9'
                   @input='getChinese()'>
            <!--PC这样写-->
            <!--<input type='text' v-model='plan' placeholder='请输入您的月工资流水,如1,000,000' maxlength='11'-->
            <!--onkeypress='if((event.keyCode<48 || event.keyCode>57) && event.keyCode!=46 || /\.\d\d$/.test(value)) {event.returnValue=false;}'>-->
            <p v-if='plan.length<=9'>您输入的月工资流水为 人民币<br><span>{{planChinese}}</span>元</p>
            <p v-if='plan.length>9'>您发的工资要炸了</p>
          </div>
          <div class='cal-footer'>
            <button>财税筹划体验</button>
          </div>
        </div>
      </div>
    </transition>
  </footer>
</template>
<script>
  import util from '../../common/util'

  export default {
    data() {
      return {
        cal: false,
        plan: '',
        planChinese: 0
      }
    },
    methods: {
      getChinese() {
        if (this.plan.length <= 9) {
          this.planChinese = util.Arabia_To_SimplifiedChinese(this.plan)
        }
      },
      getCase: function () {
        this.$router.push('/story')
      }
    },
    created() {
      window.KF5SupportBoxAPI.ready(function () {
        // 移除默认按钮
        window.KF5SupportBoxAPI.removeButton();
        let custom = document.getElementById('custom')
        custom.addEventListener('click', function (e) {
          e.preventDefault();
          window.KF5SupportBoxAPI.identify({
            'name': '',
            'phone': ''
          });
          window.KF5SupportBoxAPI.open(function () {
          });
        }, false);
      });
    }
  }
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='less'>
  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: .06rem .16rem;
    background-color: #fafafa;
    border-top: 1px solid #e1e1e1;
    .icon-cal {
      position: absolute;
      bottom: .1rem;
      left: .11rem;
      width: 1.9rem;
      height: .59rem;
      background: url('./cal.png') no-repeat center center/100%;
    }
    ul {
      li {
        display: inline-block;
        text-align: center;
        margin-left: 10px;
        i {
          display: block;
          width: .33rem;
          height: .33rem;
          margin: 0 auto;
          border-radius: 50%;
          background: #ff7300 no-repeat center center/.18rem;
          &.tel {
            background-image: url('./tel.png');
          }
          &.case {
            background-image: url('./case.png');
          }
          &.custom {
            background-image: url('./custom.png');
          }
        }
        span {
          display: block;
          margin-top: 5px;
          font-size: .08rem;
          color: #999;
        }
      }
    }
    .calculator {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, .5);
      z-index: 1;
      .cal-wrapper {
        position: absolute;
        top: 50%;
        left: 50%;
        padding: .2rem .25rem;
        border-radius: 10px;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        background-color: #fff;
        .cal-header {
          position: relative;
          margin-bottom: .2rem;
          h1 {
            font-size: .13rem;
            font-weight: normal;
            color: #666;
          }
          i {
            display: block;
            position: absolute;
            right: 0;
            top: 50%;
            margin-top: -.1rem;
            font-size: .2rem;
            color: #666;
          }
        }
        .cal-content {
          input {
            width: 2.15rem;
            padding: .12rem .1rem;
            border: 1px solid #ccc;
            line-height: 1.5;
            -webkit-appearance: none;
            margin-bottom: .1rem;
          }
          p {
            font-size: .11rem;
            text-align: center;
            margin-bottom: .3rem;
            color: #666;
            line-height: 1.5;
            span {
              color: #ff7300;
            }
          }
        }
        .cal-footer {
          button {
            width: 100%;
            height: .38rem;
            background: -webkit-gradient(linear, left top, right bottom, from(#ff9860), to(#ff7300));
            border: none;
            color: #fff;
            font-size: .13rem;
          }
        }
      }
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>

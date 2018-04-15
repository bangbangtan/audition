<template>
  <div class="g-global">
    <h1>财税筹划方案</h1>
    <div class="tax">
      <span class="label">节税金额</span>
      <span class="input">{{tax}}</span>
      <span class="fluid">{{input}}</span>
    </div>
    <div class="compare clearfix">
      <div class="item fl">
        <div class="item-top">
          <span>{{enterprise}}</span>
          <span>企业自发薪</span>
        </div>
      </div>
      <div class="item fr">
        <div class="item-top">
          <span>{{gongmall}}</span>
          <span>工猫发薪</span>
        </div>
      </div>
    </div>
    <div class="param">
      <p>该方案为通用方案，根据不同的发薪需求，节税总额也会不同。<br>商务经理稍后将与您联系，为您详细解答。</p>
    </div>
  </div>
</template>
<script>
  import util from '../../common/util'

  export default {
    data() {
      return {
        input: 0,
        tax: 3530,
        enterprise: 1212,
        gongmall: 3123
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .g-global {
    & > h1 {
      padding: .11rem 15px;
      font-size: .13rem;
      color: #666;
      font-weight: normal;
      background-color: #fff;
      &::after {
        content: '支付越多，省的越多！';
        color: #999;
        font-size: .1rem;
        vertical-align: bottom;
        margin-left: .1rem;
      }
    }
    .tax {
      margin-bottom: 10px;
      padding: .22rem 0;
      background-color: #ff7300;
      text-align: center;
      span {
        display: block;
        color: #fff;
        &.label {
          margin-bottom: .05rem;
          font-size: .12rem;
        }
        &.input {
          margin-bottom: .15rem;
          font-size: .4rem;
        }
        &.fluid {
          font-size: .07rem;
          opacity: .5;
          &::before {
            content: '月工资流水：';
          }
          &::after {
            content: '元';
          }
        }
      }
      button {
        -webkit-appearance: none;
        border: none;
        width: 1rem;
        height: .24rem;
        background-color: rgba(255, 255, 255, .8);
        border-radius: 2px;
        color: #ff7300;
      }
    }
    .compare {
      margin-bottom: 10px;
      background: #fff url("./vs.png") no-repeat center .12rem;
      background-size: .72rem;
      .item {
        padding: 0 15px;
        width: 33%;
        color: #666;
        .item-top {
          padding: .25rem 0;
          span {
            display: block;
            text-align: center;
            font-size: .12rem;
            &:first-child {
              margin-bottom: .07rem;
              color: #ff7300;
            }
          }
        }
        &:last-child {
          position: relative;
          &::after {
            content: '';
            position: absolute;
            bottom: .05rem;
            left: 50%;
            margin-left: .2rem;
            width: .42rem;
            height: .36rem;
            background: url("./win.png") no-repeat center center/100%;
          }
        }
      }
    }
    .param {
      padding: .2rem 15px;
      text-align: center;
      font-size: .1rem;
      line-height: 1.5;
      color: #666;
      background-color: #fff;
    }
  }
</style>

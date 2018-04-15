<template>
  <div class="g-global">
    <h1>精准财税筹划方案</h1>
    <div class="tax">
      <span class="label">节税金额</span>
      <span>||</span>
      <span class="expression">企业自发薪税务支出 - 工猫方案税务支出 + 工猫返税</span>
      <span class="input">{{tax}}</span>
      <span class="fluid">{{input}}</span>
      <button>重新计算</button>
    </div>
    <div class="compare clearfix">
      <div class="item fl">
        <div class="item-top">
          <span>{{enterprise.all}}</span>
          <span>企业自发薪</span>
        </div>
        <div class="item-bottom">
          <div>
            <span>增值税</span>
            <span class="orange">{{enterprise.addTax}}</span>
          </div>
          <div>
            <span>个税</span>
            <span class="orange">{{enterprise.serviceTax}}</span>
          </div>
        </div>
      </div>
      <div class="item fr">
        <div class="item-top">
          <span>{{enterprise.all}}</span>
          <span>工猫发薪</span>
        </div>
        <div class="item-bottom">
          <div>
            <span>增值税</span>
            <span class="orange">{{gongmall.addTax}}</span>
          </div>
          <div>
            <span>个税</span>
            <span class="orange">{{gongmall.serviceTax}}</span>
          </div>
          <div>
            <span>增值税返税</span>
            <span class="blue">{{gongmall.addBackTax}}</span>
          </div>
          <div>
            <span>个税返税</span>
            <span class="blue">{{gongmall.personBackTax}}</span>
          </div>
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
        enterprise: {
          addTax: 0,
          serviceTax: 0,
          all: 0
        },
        gongmall: {
          addTax: 0,
          serviceTax: 0,
          addBackTax: 0,
          personBackTax: 0,
          all: 0
        }
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
        &:first-child {
          margin-bottom: .05rem;
          font-size: .12rem;
        }
        &:nth-child(2) {
          margin-bottom: .05rem;
          font-size: .07rem;
        }
        &:nth-child(3) {
          margin-bottom: .17rem;
          font-size: .07rem;
        }
        &:nth-child(4) {
          margin-bottom: .15rem;
          font-size: .4rem;
        }
        &:nth-child(5) {
          margin-bottom: .21rem;
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
          border-bottom: 1px solid #e1e1e1;
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
        .item-bottom {
          padding: .14rem 0;
          text-align: center;
          div {
            position: relative;
            display: block;
            overflow: hidden;
            span {
              display: inline-block;
              vertical-align: middle;
              font-size: .09rem;
              height: .18rem;
              line-height: .18rem;
              &:first-child {
                position: relative;
                width: .6rem;
                margin-right: .08rem;
                text-align: justify;
                &::after {
                  content: '';
                  display: inline-block;
                  vertical-align: middle;
                  width: 100%;
                  height: 0;
                }
              }
              &.orange {
                color: #ff7300;
              }
              &.blue {
                color: #28aaf8;
              }
            }
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

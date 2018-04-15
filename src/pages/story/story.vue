<template>
  <div class="g-global">
    <span @click="back()">返回</span>
    <img src="./story.png" alt="故事图片">
  </div>
</template>
<script>
  export default {
    methods: {
      back: function () {
        this.$router.go(-1)
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .g-global {
    padding: 0 15px;
    background-color: #fff;
    overflow: hidden;
    span {
      display: block;
      width: .4rem;
      height: .25rem;
      margin: 15px 0;
      line-height: .25rem;
      text-align: center;
      border: 1px solid #ff7300;
      border-radius: 3px;
      color: #ff7300;
      font-size: .11rem;
    }
    img {
      width: 100%;
    }
  }
</style>

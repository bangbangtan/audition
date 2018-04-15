<template>
  <div id="map"></div>
</template>
<script>
  import util from '../../common/util'

  export default {
    mounted() {
      util.MP('GZYG8lVxAa3kQElsZaGf3RlB').then(BMap => {
        let map = new BMap.Map("map");
        let point = new BMap.Point(120.0259113437, 30.2868613812);
        let marker = new BMap.Marker(point);  // 创建标注
        map.addOverlay(marker);              // 将标注添加到地图中
        map.centerAndZoom(point, 15);
        let opts = {
          width: 200,     // 信息窗口宽度
          height: 50,     // 信息窗口高度
          title: "杭州余杭区文一西路998号海创园", // 信息窗口标题
          enableMessage: true//设置允许信息窗发送短息
        }
        let infoWindow = new BMap.InfoWindow("1幢1001--1003室", opts);  // 创建信息窗口对象
        map.openInfoWindow(infoWindow, point);
        marker.addEventListener("click", function () {
          map.openInfoWindow(infoWindow, point); //开启信息窗口
        });
      })
    }
  }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #map {
    width: 100%;
    height: 188px;
  }
</style>

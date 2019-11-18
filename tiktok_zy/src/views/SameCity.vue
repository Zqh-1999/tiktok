<template>
  <div id="home">
    <!-- 视频 -->
    <van-swipe style="height: 100%;" vertical :show-indicators="false">
      <van-swipe-item>
        <video
          height="100%"
          autoplay
          loop
          x5-video-player-fullscreen="true"
          poster="http://bendipin.oss-cn-beijing.aliyuncs.com/images/product-1552117102331.png"
          src="http://video.jishiyoo.com/f843c93d4f3f4bee844690fe1fdfc750/28e2548c47ce4d0cb310697f0ca4c7a3-14818dd00765a9a86871da6734b1be28-ld.mp4"
        ></video>
      </van-swipe-item>
      <van-swipe-item>
        <video
          height="100%"
          autoplay
          loop
          x5-video-player-fullscreen="true"
          poster="http://bendipin.oss-cn-beijing.aliyuncs.com/images/product-1552117102331.png"
          src="http://video.jishiyoo.com/f843c93d4f3f4bee844690fe1fdfc750/28e2548c47ce4d0cb310697f0ca4c7a3-14818dd00765a9a86871da6734b1be28-ld.mp4"
        ></video>
      </van-swipe-item>
    </van-swipe>
    <!-- 头部 -->
    <!-- 右侧列表 -->
    <div>
      <ul>
        <li>
          <van-image round width="10rem" height="10rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <!-- 简介 -->
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
#home {
  height: 100%;
}
</style>

<template>
  <div id="home">
    <van-swipe style="height: 100%;" vertical :show-indicators="false">
      <van-swipe-item>
        <!-- <video  autoplay controls name="muted" >
          <source
            src="http://video.jishiyoo.com/f843c93d4f3f4bee844690fe1fdfc750/28e2548c47ce4d0cb310697f0ca4c7a3-14818dd00765a9a86871da6734b1be28-ld.mp4"
            type="video/mp4"
          />
        </video> -->
        <iframe width="100%" height="100%" allow = "autoplay" src="http://video.jishiyoo.com/f843c93d4f3f4bee844690fe1fdfc750/28e2548c47ce4d0cb310697f0ca4c7a3-14818dd00765a9a86871da6734b1be28-ld.mp4" frameborder="0"></iframe>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<style scoped>
#home {
  height: 100%;
}
</style>

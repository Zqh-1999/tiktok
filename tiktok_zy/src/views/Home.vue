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
        <!-- 右侧列表 -->
        <div class="right-list">
          <ul>
            <li>
              <van-image round width="70" height="70" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            </li>
            <li>
              <i @click="test" ref="ii"></i>
            </li>
            <li>
              <i @click="con"></i>
              <!-- 评论 -->
              <van-action-sheet v-model="show" title="401 条评论">
                <van-row>
                  <van-col span="2" offset="1">
                    <van-image
                      round
                      width="3rem"
                      height="3rem"
                      src="https://img.yzcdn.cn/vant/cat.jpeg"
                    />
                  </van-col>
                  <van-col span="17" offset="1">评论</van-col>
                  <van-col span="2" offset="1">赞</van-col>
                </van-row>
              </van-action-sheet>
            </li>
          </ul>
        </div>
        <!-- 简介 -->
        <van-row class="info">
          <van-col class="text">
            <a href="javascript:;">
              <p>@名字</p>
            </a>
            <span>太可爱啦哈哈哈哈哈哈嗝</span>
            <van-notice-bar text="名字原创的音乐哈哈哈哈哈嗝" background="none" color="#fff" />
          </van-col>
          <van-col class="img" offset="7">
            <van-image round width="4rem" height="4rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </van-col>
        </van-row>
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
        <!-- 右侧列表 -->
        <div class="right-list">
          <ul>
            <li>
              <van-image round width="70" height="70" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            </li>
            <li>
              <i @click="test" ref="i"></i>
            </li>
            <li>
              <i></i>
            </li>
          </ul>
        </div>
        <!-- 简介 -->
        <div class="info">
          <a href="javascript:;">
            <p>@name</p>
          </a>
        </div>
      </van-swipe-item>
    </van-swipe>

    <!-- 头部 -->
    <div class="top">
      <van-row>
        <van-col span="3">
          <i></i>
        </van-col>
        <van-col offset="4" style="color:#fff">
          <span>关注</span>
        </van-col>
        <van-col offset="4" style="color:#fff">
          <span class="active">推荐</span>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
    test () {
      this.$refs.ii.className = 'like-active'
    },
    con () {
      this.show = true
    }
  }
}
</script>

<style scoped>
#home {
  height: 100%;
}
.right-list {
  position: absolute;
  top: 200px;
  right: 10px;
}
.right-list li {
  width: 70px;
  height: 70px;
  margin-bottom: 10%;
}
.right-list li:nth-child(2) i {
  display: block;
  width: 100%;
  height: 100%;
  background-image: url("../../public/web_heart_animation.png");
  background-position: -38px;
  background-size: 4320px 148.5px;
}
.like-active {
  animation-timing-function: steps(28);
  animation-name: heart-burst;
  animation-duration: 0.8s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  display: inline-block;
}
@keyframes heart-burst {
  0% {
    background-position: -38px;
  }

  100% {
    background-position: -4210px;
  }
}
.right-list li:nth-child(3) > i {
  display: block;
  width: 100%;
  height: 100%;
  background-image: url("../../public/shejiyeicon4xolt01jdpz.png");
  background-position: 13px;
  background-size: 70%;
  background-repeat: no-repeat;
}
.top {
  position: absolute;
  top: 0px;
  width: 100%;
  padding: 12px 12px 0;
  box-sizing: border-box;
}
.top i {
  display: block;
  width: 50px;
  height: 50px;
  background: url("../../public/images/icons8-搜索-30.png") no-repeat;
}
.top span {
  font-size: 22px;
  line-height: 34px;
  color: rgb(178, 182, 185);
}
.top .active {
  color: white;
}
.info {
  position: absolute;
  bottom: 80px;
  left: 20px;
  width: 100%;
  color: white;
}
.van-notice-bar {
  padding: 20px 0 0;
}
.info .img {
  margin-top: 50px;
}
.info .van-image {
  animation: rotate 1s linear infinite;
}
@keyframes rotate {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(1turn);
  }
}
</style>

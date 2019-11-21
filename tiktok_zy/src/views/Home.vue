<template>
  <div id="home">
    <!-- 推荐视频 -->
    <van-swipe style="height: 100%;" vertical :show-indicators="false" @change="onChange">
      <van-swipe-item v-for="(item, index) in videoList" :key="index">
        <video
          width="100%"
          height="100%"
          :autoplay="index==0 ? true:false"
          loop
          x5-video-player-fullscreen="true"
          :poster="item.vurl"
          :src="item.url"
          ref="video"
        ></video>
        <!-- 右侧列表 -->
        <div class="right-list">
          <ul>
            <li>
              <van-image round width="70" height="70" :src="userList.photo" />
            </li>
            <li>
              <i @click="heart(index)" ref="ii"></i>
              <span>{{item.goods}}</span>
            </li>
            <li>
              <i @click="con(item.id)"></i>
            </li>
          </ul>
        </div>
        <!-- 简介 -->
        <van-row class="info">
          <van-col class="text" span="10">
            <a href="javascript:;">
              <p>@ {{userList.username}}</p>
            </a>
            <span>{{item.vtext}}</span>
            <van-notice-bar :text="item.vmusic+' '+item.vmusic+' '+item.vmusic" background="none" color="#fff" />
          </van-col>
          <van-col class="img" offset="6">
            <van-image round width="4rem" height="4rem" :src="userList.photo" />
          </van-col>
        </van-row>
      </van-swipe-item>
    </van-swipe>
    <!-- 头部 -->
    <div class="top">
      <van-row>
        <van-col span="3">
          <i></i>
        </van-col>
        <van-col offset="4" style="color:#fff">
          <span @click="status = '关注'">关注</span>
        </van-col>
        <van-col offset="4" style="color:#fff">
          <span class="active" @click="status = '推荐'">推荐</span>
        </van-col>
      </van-row>
    </div>
    <!-- 评论 -->
    <van-action-sheet v-model="show" :title="conTotal+' 条评论'" @close="close">
      <van-row v-for="(item, index) in conList" :key="index" style="padding:5px 0px">
        <van-col span="2" offset="1">
          <van-image round width="2.5rem" height="2.5rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </van-col>
        <van-col span="15" offset="3">
          <div style="color:#a4a9aa">{{item.u_id}}</div>
          <span>{{item.comment}}</span>
        </van-col>
        <van-col span="2" offset="1">赞</van-col>
      </van-row>
    </van-action-sheet>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 控制评论的弹出与关闭
      show: false,
      // 控制头部推荐和关注的切换
      status: '推荐',
      // 视频信息
      videoList: [],
      // 用户信息
      userList: {},
      // 评论列表
      conList: [],
      // 总评论
      conTotal: 0
    }
  },
  methods: {
    // 点赞
    heart (index) {
      if (this.$refs.ii[index].className === 'like-active') {
        this.$refs.ii[index].className = ''
        this.videoList[index].goods--
      } else {
        this.$refs.ii[index].className = 'like-active'
        this.videoList[index].goods++
      }
    },
    // 打开评论
    con (id) {
      this.show = true
      document.querySelector('.navigate').style.display = 'none'
      this.$Http.get(`/comment/show/${id}`).then(res => {
        console.log(res.data.data)
        this.conList = res.data.data
        this.conTotal = res.data.num
      })
    },
    // 关闭评论
    close () {
      setTimeout(() => {
        document.querySelector('.navigate').style.display = 'block'
      }, 300)
    },
    // 获取视频
    getVideoList () {
      this.$Http.get('/index').then(res => {
        if (res.data.code === 200) {
          this.videoList = res.data.data
          this.$Http.get(`/user/${this.videoList[0].user_id}`).then(res1 => {
            this.userList = res1.data.data
          })
        } else {
          // this.$
        }
      })
    },
    // 切换视频
    onChange (index) {
      this.$Http.get(`/user/${this.videoList[index].user_id}`).then(res1 => {
        this.userList = res1.data.data
      })
      let qq = document.querySelectorAll('video')
      qq.forEach(element => {
        element.pause()
        element.currentTime = 0
      })
      qq[index].play()
    }
  },
  created () {
    this.getVideoList()
  }
}
</script>

<style scoped>
#home {
  width: 100%;
  height: 100%;
}
.van-swipe {
  width: 100%;
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
  text-align: center;
}
.right-list li:nth-child(2) i {
  display: block;
  width: 100%;
  height: 100%;
  background-image: url("../../public/web_heart_animation.png");
  background-position: -38px;
  background-size: 4320px 148.5px;
}
.right-list li:nth-child(2) span {
  color: white;
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
  background: url("../../public/images/icons8-60.png") no-repeat;
  background-size: 30px 30px;
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
  padding: 10px 0 0;
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

<template>
  <div id="sameCity">
    <!-- 推荐视频 -->
    <van-swipe style="height: 100%;" vertical :show-indicators="false" @change="onChange">
      <van-swipe-item v-for="(item, index) in videoList" :key="index">
        <video
          width="100%"
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
              <van-image round width="70" height="70" :src="userList.photo" @click="user(userList.id)" />
            </li>
            <li>
              <i @click="heart(index,item)" ref="ii" :class="love.indexOf(item.id+'') == -1 ? '':'like-active'"></i>
              <span>{{item.goods}}</span>
            </li>
            <li>
              <i @click="con(item.id)"></i>
            </li>
          </ul>
        </div>
        <!-- 简介 -->
        <van-row class="info">
          <van-col class="text" span="14">
            <a href="javascript:;">
              <p>@ {{userList.username}}</p>
            </a>
            <span>{{item.vtext}}</span>
            <van-notice-bar
              :text="item.vmusic+' _ '+item.vmusic+' _ '+item.vmusic+' _ '+item.vmusic"
              background="none"
              color="#fff"
            />
          </van-col>
          <van-col class="img" offset="6" span="4">
            <van-image round width="4rem" height="4rem" :src="userList.photo" />
          </van-col>
        </van-row>
      </van-swipe-item>
    </van-swipe>
    <!-- 头部 -->
    <div class="top">
      <van-row>
        <van-col span="3">
          <i @click="search"></i>
        </van-col>
        <van-col offset="4" style="color:#fff">
          <span ref="guanzhu" @click="guanzhu">关注</span>
        </van-col>
        <van-col offset="4" style="color:#fff">
          <span class="active" ref="tuijian" @click="tuijian">推荐</span>
        </van-col>
      </van-row>
    </div>
    <!-- 评论 -->
    <van-action-sheet v-model="show" :title="conTotal+' 条评论'" @close="close">
      <van-collapse v-model="activeNames">
        <van-row v-for="(item, index) in conList" :key="index" style="padding:5px 0px">
          <van-col span="2" offset="1">
            <van-image
              round
              width="2.5rem"
              height="2.5rem"
              :src="puser[index]"
            />
          </van-col>
          <van-col span="15" offset="3">
            <div style="color:#a4a9aa" v-if="fuser.length != 0">{{fuser[index]}}</div>
            <span>{{item.comment}}</span>
          </van-col>
          <van-collapse-item
            v-if="item.arr.length > 0"
            style="text-align: center; color:#9fa4a5"
            :title="'展开'+ item.arr.length + '条回复'"
            :name="index"
          >
            <van-row v-for="(item1, index1) in item.arr" :key="index1" style="padding:5px 0px">
              <van-col span="2" offset="2">
                <van-image
                  round
                  width="2rem"
                  height="2rem"
                  :src="spuser[index1]"
                />
              </van-col>
              <van-col span="15" offset="3" style="color:#5f5f60;text-align: left">
                <div style="color:#a4a9aa" v-if="suser.length != 0">{{suser[index1]}}</div>
                <span>{{item1.comments_son}}</span>
              </van-col>
            </van-row>
          </van-collapse-item>
        </van-row>
      </van-collapse>
      <van-row>
        <van-col span="20">
          <van-cell-group>
            <van-field v-model="value" placeholder="留下你的精彩评论吧" />
          </van-cell-group>
        </van-col>
        <van-col span="2" offset="1" style="padding: 8px 0px 0px 0px; box-sizing: border-box">
          <img @click="comment" :src="value.length == 0 ? 'https://tiktokdou.oss-cn-beijing.aliyuncs.com/icons8-%E9%82%AE%E4%BB%B6%E5%8F%91%E9%80%81-48.png':'https://tiktokdou.oss-cn-beijing.aliyuncs.com/icons8-%E9%82%AE%E4%BB%B6%E5%8F%91%E9%80%81-48%20%281%29.png'" width="30px" alt="">
        </van-col>
      </van-row>
    </van-action-sheet>
  </div>
</template>

<script>
import qs from 'qs'
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
      conTotal: 0,
      activeNames: [],
      // 父评论用户
      fuser: [],
      // 子评论用户
      suser: [],
      // 评论输入内容
      value: '',
      // 当前用户ID
      userID: sessionStorage.getItem('userId') || 1,
      // 视频ID
      videoID: 0,
      puser: [],
      spuser: [],
      love: []
    }
  },
  methods: {
    // 获取当前用户关注的视频
    getLove () {
      this.$Http.get(`/user/${this.userID}`).then(res => {
        this.love = res.data.data.love.split(',')
      })
    },
    // 推荐
    tuijian () {
      this.status = '推荐'
      this.$refs.tuijian.className = 'active'
      this.$refs.guanzhu.className = ''
      this.$router.push('/')
    },
    // 关注
    guanzhu () {
      this.status = '关注'
      this.$refs.tuijian.className = ''
      this.$refs.guanzhu.className = 'active'
      this.$router.push('/subscribe')
    },
    // 点赞
    heart (index, item) {
      if (this.$refs.ii[index].className === 'like-active') {
        this.$Http
          .put(
            '/praise',
            qs.stringify({
              user_id: this.userID,
              id: item.id,
              zan: false
            })
          )
          .then(res => {
          })
        this.$refs.ii[index].className = ''
        this.videoList[index].goods--
      } else {
        this.$Http
          .put(
            '/praise',
            qs.stringify({
              user_id: this.userID,
              id: item.id,
              zan: true
            })
          )
          .then(res => {
          })
        this.$refs.ii[index].className = 'like-active'
        this.videoList[index].goods++
      }
    },
    // 打开评论
    con (id) {
      this.show = true
      this.videoID = id
      document.querySelector('.navigate').style.display = 'none'
      this.$Http.get(`/comment/show/${id}`).then(res => {
        if (res.data.ok === 1) {
          this.conList = res.data.data
          this.conTotal = res.data.num
          this.fuser = []
          this.puser = []
          this.suser = []
          this.spuser = []
          this.conList.forEach(element => {
            this.$Http.get(`/user/${element.u_id}`).then(res => {
              this.fuser.push(res.data.data.username)
              this.puser.push(res.data.data.photo)
            })
          })
          this.conList.forEach(element => {
            element.arr.forEach(element1 => {
              this.$Http.get(`/user/${element1.u_id}`).then(res => {
                this.suser.push(res.data.data.username)
                this.spuser.push(res.data.data.photo)
              })
            })
          })
        }
      })
    },
    // 发送评论
    comment () {
      if (this.value.length !== 0) {
        this.$Http.post('/comment/add', qs.stringify({
          v_id: this.videoID,
          u_id: this.userID,
          comment: this.value,
          times: Math.round(new Date().getTime() / 1000)
        })).then(res => {
          if (res.data.ok === 1) {
            this.value = ''
            this.con(this.videoID)
          }
        })
      }
    },
    // 关闭评论
    close () {
      setTimeout(() => {
        document.querySelector('.navigate').style.display = 'block'
      }, 300)
      this.activeNames = []
      this.value = ''
    },
    // 获取视频
    getVideoList () {
      this.$Http.get(`/videos`, { params: { city: '长沙' } }).then(res => {
        if (res.data.ok === 1) {
          this.videoList = res.data.data
          this.$Http.get(`/user/${this.videoList[0].user_id}`).then(res1 => {
            this.userList = res1.data.data
          })
        } else {
          this.$toast.fail('加载失败')
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
    },
    // 搜索
    search () {
      this.$router.push('/serach')
    },
    // 跳转到用户信息
    user (id) {
      this.$router.push(`/user/${id}`)
      sessionStorage.setItem('userID', id)
    }
  },
  created () {
    this.getVideoList()
    this.getLove()
  }
}
</script>

<style scoped>
#sameCity {
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
  width: 90%;
  color: white;
}
.van-notice-bar {
  padding: 10px 0 0;
}
.info .img {
  margin-top: 50px;
}
.info .van-image {
  animation: rotate 1.5s linear infinite;
  border: 10px solid;
  border-color: rgb(44, 38, 6);
  box-sizing: border-box
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

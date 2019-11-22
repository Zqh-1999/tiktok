<template>
  <div id="serach">
    <van-row class="top">
      <van-col span="20">
        <van-row class="top-search">
          <van-col span="4">
            <i></i>
          </van-col>
          <van-col span="20">
            <input type="text" v-model="value" />
          </van-col>
        </van-row>
      </van-col>
      <van-col span="3" offset="1">
        <span @click="search">搜索</span>
      </van-col>
    </van-row>
    <!-- sch -->
    <van-row class="nosch" v-if="videoList.length == 0">搜索发现更多精彩内容</van-row>
    <!-- sch -->
    <van-row class="schall" v-else>
      <van-row class="sch" v-for="(item, index) in videoList" :key="index">
        <van-row class="schpo">
          <van-col span="4">
            <van-image round width="3rem" height="3rem" :src="photo[index]" />
          </van-col>
          <van-col>
            <span offset="1">{{username[index]}}</span>
          </van-col>
        </van-row>
        <van-row class="schtitle">
          <p>{{item.vtext}}</p>
        </van-row>
        <van-row class="schvideo">
          <van-col span="20" @click="start(index)">
            <video ref="video" width="100%" :src="item.url" :poster="item.vurl" preload></video>
            <img
              ref="img"
              src="https://tiktokdou.oss-cn-beijing.aliyuncs.com/icons8-%E6%92%AD%E6%94%BE-30.png"
              alt
            />
          </van-col>
        </van-row>
      </van-row>
    </van-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      // 控制搜索时的显示隐藏
      keySch: false,
      // 搜索出来的视频
      videoList: [],
      // 用户名
      username: [],
      // 用户头像
      photo: []
    }
  },
  methods: {
    // 搜索视频
    search () {
      this.keySch = true
      this.$Http.get(`/videos`, { params: { vtext: this.value } }).then(res => {
        this.videoList = res.data.data
        if (this.videoList.length === 0) {
          this.$toast.fail('没有搜寻到视频')
        }
        this.videoList.forEach(element => {
          this.$Http.get(`/user/${element.user_id}`).then(res => {
            this.username.push(res.data.data.username)
            this.photo.push(res.data.data.photo)
          })
        })
      })
    },
    // 播放与暂停
    start (index) {
      if (this.$refs.img[index].style.display !== 'none') {
        this.$refs.video[index].play()
        this.$refs.img[index].style.display = 'none'
      } else {
        this.$refs.video[index].pause()
        this.$refs.img[index].style.display = 'block'
      }
    }
  }
}
</script>

<style scoped>
#serach {
  background-color: #171925;
  padding: 8px 12px;
  box-sizing: border-box;
}
.top {
  padding-bottom: 10px;
  border-bottom: 1px solid #34343c;
}
.top-search i {
  display: inline-block;
  width: 34px;
  height: 35px;
  background-image: url("https://tiktokdou.oss-cn-beijing.aliyuncs.com/icons8-60.png");
  background-size: 100%;
  background-repeat: no-repeat;
}
.top-search input {
  width: 100%;
  height: 35px;
  border: none;
  background-color: #34343c;
  color: #988935;
  padding: 0 10px;
  box-sizing: border-box;
}
.top span {
  color: #941a3b;
  line-height: 33px;
  font-size: 18px;
  font-weight: 700;
}
.nosch {
  height: 100%;
  text-align: center;
  font-weight: 700;
  font-size: 34px;
  padding: 280px 0 400px;
  color: aliceblue;
  box-sizing: border-box;
}
.schall {
  padding: 0 10px;
}
.schall .sch {
  padding: 18px 0;
  box-sizing: border-box;
}
.schpo span {
  color: white;
  font-size: 16px;
  line-height: 38px;
}
.schtitle p {
  color: aliceblue;
  font-size: 15px;
}
.schvideo .van-col {
  position: relative;
}
.schvideo img {
  position: absolute;
  top: 45%;
  left: 45%;
  width: 50px;
  height: 50px;
}
</style>

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
    <van-row class="nosch" v-if="keySch == false">搜索发现更多精彩内容</van-row>
    <!-- sch -->
    <van-row class="schall" v-else>
      <van-row class="sch">
        <van-row class="schpo">
          <van-col span=4>
            <van-image round width="3rem" height="3rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </van-col>
          <van-col>
            <span offset="1">居官</span>
          </van-col>
        </van-row>
        <van-row class="schtitle">
          <p>学成归来，爹就给你一个上骑都尉当当，骑五花马，披重甲，多气派。</p>
        </van-row>
        <van-row class="schvideo">
          <van-col span=20>
            <video width="100%" height="80%" src="https://doutiktok.oss-cn-beijing.aliyuncs.com/video/video/43n6gl_h.mp4"></video>
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
      keySch: false
    }
  },
  methods: {
    search () {
      this.keySch = true
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
  border-bottom: 1px solid #34343c
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
</style>

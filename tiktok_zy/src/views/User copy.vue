<template>
  <div id="userOne">
    <div class="bg-box">
      <van-image width="100%" height="120px" class="bg" src="./ttt.gif" />
    </div>
    <div class="top-box">
      <van-image
        round
        width="6rem"
        height="6rem"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
      <div class="top">
        <router-link to="/userOne" class="bj">编辑资料</router-link>
        <button><span>+</span>好友</button>
      </div>
      <div class="user-box">
        <span class="userName" v-html="userList.username"></span>
        <span class="userId">DOU号：{{ userList.id }}</span>
      </div>
      <div class="floot-box">
        <span class="jl" v-if="userList.intro == null"
          >你还没有填写个人简历，点击添加...</span
        >
        <span
          class="jl"
          v-if="userList.intro != null"
          v-html="userList.intro"
        ></span>
        <br />
        <span v-if="userList.city == null">编辑所在城市</span>
        <span v-if="userList.city != null" v-html="userList.city"></span><br />
        <span v-if="userList.love == null">关注:&nbsp;0</span>
        <span v-if="userList.love != null"
          >关注&nbsp;:&nbsp;{{ userList.love.length }}</span
        >
      </div>
    </div>
    <div class="tab-box">
      <div class="zuo">
        <span @click="zuo">作品</span>
        <div class="ship">
          <div v-for="src in imgArr" :key="src">
            <img :src="src.imgSrc" alt="" />
          </div>
        </div>
      </div>
      <div class="likes">
        <span @click="likes">喜欢</span>
        <div class="ship">
          <div v-for="src in imgArr" :key="src">
            <img :src="src.imgSrc" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  data () {
    return {
      userList: {
        username: '',
        id: '',
        intro: '',
        love: ''
      },
      id: 3,
      user_id: 3,
      imgArr: [{ imgSrc: '' }]
    }
  },
  methods: {
    zuo () {
      $('.zuo>div').css('display', 'block')
      $('.likes>div').css('display', 'none')
      $('.likes>span').css('color', '#fff')
      $('.zuo>span').css('color', 'yellow')
    },
    likes () {
      $('.likes>div').css('display', 'block')
      $('.zuo>div').css('display', 'none')
      $('.zuo>span').css('color', '#fff')
      $('.likes>span').css('color', 'yellow')
    }
  },
  created: function () {
    this.$axios.get(`/user/${this.id}`).then(res => {
      this.userList = res.data.data
    })
    this.$axios
      .get(`/videos`, { params: { user_id: this.user_id } })
      .then(res => {
        this.imgArr[0].imgSrc = res.data.data.vurl
      })
  }
}
</script>
<style lang="less" scoped>
#userOne {
  height: 100%;
  background-color: #181b27;
}
.bg-box {
  height: 120px;
  overflow: hidden;
  .bg {
    opacity: 0.2;
  }
}
.top-box {
  position: relative;
  > .van-image {
    position: absolute;
    top: -30px;
    left: 15px;
  }
  > .user-box {
    position: relative;
    height: 92px;
    border-bottom: 1px solid #3e3d4d;
    > .userName {
      position: absolute;
      margin-top: 36px;
      margin-left: 20px;
      font-size: 18px;
      color: #fff;
    }
    > .userId {
      position: absolute;
      margin-top: 64px;
      margin-left: 20px;
      font-size: 12px;
      color: #fff;
    }
  }

  > .top {
    margin-left: 150px;
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > .bj {
      display: inline-block;
      width: 130px;
      height: 36px;
      color: #fff;
      font-size: 15px;
      text-align: center;
      line-height: 36px;
      border-radius: 3px;
      background-color: #3d3e4c;
    }
    > button {
      width: 66px;
      height: 36px;
      border: 0px;
      display: inline-block;
      color: #fff;
      font-size: 15px;
      text-align: center;
      line-height: 36px;
      border-radius: 3px;
      margin-right: 23px;
      background-color: #3d3e4c;
      span {
        padding-right: 3px;
        font-size: 19px;
        font-weight: 550;
      }
    }
  }
  .floot-box {
    color: #fff;
    margin-left: 18px;
    span {
      display: inline-block;
      margin-top: 10px;
      font-size: 14px;
      margin-right: 15px;
    }
  }
}

.tab-box {
  position: relative;
  padding: 20px;
  text-align: center;
  div {
    display: inline-block;
    width: 50%;
    color: #fff;
    span {
      position: absolute;
      margin-left: -28px;
      top: 20px;
    }
    .ship {
      width: 200%;
      height: 240px;
      margin-top: 28px;
      > div {
        float: left;
        // display: inline-block;
        width: 30%;
      }
      img {
        display: inline-block;
        width: 100%;
        height: 100px;
      }
    }
  }
  .zuo {
    > span {
      color: yellow;
    }
  }
  .likes {
    .ship {
      margin-left: -167px;
      display: none;
    }
  }
}
</style>

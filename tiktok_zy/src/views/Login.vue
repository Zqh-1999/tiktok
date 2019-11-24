<template>
  <div id="home">
    <div class="background"></div>
    <div id="nav">
      <div class="login">
        <h2>验证码</h2>
        <span class="top-span"
          >输入<span class="num">{{ yzms.phoneNum }}</span
          >收到的验证码</span
        >
        <input type="text" placeholder="请输入验证码" v-model="yzms.yzm" />
        <van-button @touchstart.stop="show = true"></van-button>
        <button @click="chong" class="chong">重新发送验证码</button>
        <button @click="login" class="loginB">登录</button>
      </div>
    </div>

    <van-number-keyboard
      :show="show"
      extra-key="."
      v-model="yzms.yzm"
      close-button-text="Close"
      @blur="show = false"
      @input="onInput"
      @delete="onDelete"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      yzms: {
        phoneNum: '',
        verify: '',
        yzm: ''
      }
    }
  },

  methods: {
    onInput (value) {
      this.$toast(value)
    },
    onDelete () {
      this.$toast('delete')
    },
    async login () {
      let { data: res } = await this.$Http.get('/loginY', {
        params: this.yzms
      })
      if (res.code === 200) {
        sessionStorage.setItem('id', res.id)
        alert(res.msg)
        this.$router.push('/userOne')
      } else if (res.code === 202) {
        sessionStorage.setItem('id', res.id)
        alert(res.msg)
        this.$router.push('/user')
      } else if (res.code === 2) {
        alert(res.msg)
      }
    },
    chong () {
      sessionStorage.setItem('phoneNum', '')
      sessionStorage.setItem('verifys', '')
      this.$router.push('/')
    }
  },
  created: function () {
    this.yzms.phoneNum = sessionStorage.getItem('phoneNum')
    this.yzms.verify = sessionStorage.getItem('verifys')
  }
}
</script>

<style lang="less" scoped>
.flexs {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

#home {
  height: 100%;
  > .background {
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url("../../public/ttt.gif");
    background-position-x: -46px;
    opacity: 0.6;
  }
}

.login {
  width: 218px;
  height: 300px;
  margin-top: 35%;
  margin-left: 25%;
  position: absolute;
  .flexs;
  opacity: 1;
  > .top-span {
    margin-top: -40px;
    > .num {
      color: #3a37ff;
      margin-left: 2px;
      margin-right: 5px;
    }
  }
  > input {
    width: 82%;
    height: 40px;
    border: 0;
    color: #000;
    font-size: 24px;
    text-align: center;
    outline: none;
    background-color: rgba(255, 251, 251, 0.5);
  }
  input::-webkit-input-placeholder {
    color: #5d5c5d;
  }
  > span {
    color: #000;
    display: block;
  }
  > .router {
    width: 40px;
    height: 40px;
    color: #8b07ff;
    border-radius: 50%;
    background-color: #fff;
    text-decoration: none;
    text-align: center;
    line-height: 40px;
  }
  > .van-button {
    width: 172px;
    height: 32px;
    position: absolute;
    margin-top: 144px;
    border: 0px;
    background-color: rgba(220, 38, 38, 0);
  }
}
.loginB {
  width: 60px;
  height: 50px;
  color: black;
  border-radius: 50%;
  background-color: #fff;
  text-decoration: none;
  text-align: center;
  font-size: 18px;
  font-weight: 550;
}
.chong {
  color: rgb(100, 100, 100);
  height: 30px;
  background-color: rgb(240, 240, 240);
  text-decoration: none;
  text-align: center;
  border: 0px;
}
</style>

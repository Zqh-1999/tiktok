<template>
  <div id="home">
    <div class="background"></div>
    <div id="nav">
      <div class="login">
        <span class="top-span">手机注册与登录</span>
        <input
          type="text"
          placeholder="请输入手机号码"
          v-model="phoneNums.phoneNum"
        />
        <van-button @touchstart.stop="show = true"></van-button>
        <span>
          继续表示同意
          <a href="#">抖音用户协议</a>
        </span>
        <button class="router" @click="router">下一步</button>
      </div>
    </div>

    <van-number-keyboard
      :show="show"
      extra-key="."
      v-model="phoneNums.phoneNum"
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
      phoneNums: {
        phoneNum: ''
      },
      verify: ''
    }
  },

  methods: {
    onInput (value) {
      this.$toast(value)
    },
    onDelete () {
      this.$toast('delete')
    },
    async router () {
      let { data: res } = await this.$Http.get('/login', {
        params: this.phoneNums
      })
      if (res.code === 1) {
        this.verify = res.verifys
        alert(res.msg)
        sessionStorage.setItem('phoneNum', this.phoneNums.phoneNum)
        sessionStorage.setItem('verifys', this.verify)
        return this.$router.push('/login')
      } else if (res.code === 2) {
        alert(res.msg)
      } else if (res.code === 3) {
        alert(res.msg)
      } else {
        alert(res.msg)
      }
    }
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
  height: 260px;
  margin-top: 35%;
  margin-left: 25%;
  position: absolute;
  .flexs;
  opacity: 1;
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
  > .top-span {
    font-size: 20px;
  }
  > span {
    color: #000;
    font-weight: 600;
    display: block;
  }
  > .router {
    width: 80px;
    height: 40px;
    color: black;
    border-radius: 50%;
    background-color: #fff;
    text-decoration: none;
    text-align: center;
    // line-height: 22px;
    font-size: 18px;
    font-weight: 550;
  }
  > .van-button {
    width: 180px;
    height: 32px;
    position: absolute;
    margin-top: 75px;
    border: 0px;
    background-color: rgba(220, 38, 38, 0);
  }
}
</style>

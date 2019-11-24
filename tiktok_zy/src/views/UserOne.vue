<template>
  <div id="userOne">
    <van-nav-bar
      title="编辑个人资料"
      right-text="保存"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="uploader-box">
      <!-- <van-uploader @click="photo" :max-count="1" multiple> -->
      <van-image
        round
        width="5rem"
        height="5rem"
        :src="fileList[0].file"
        @click="photo"
      />
      <!-- </van-uploader> -->
      <span>点击更换头像</span>
    </div>
    <div class="field-box">
      <van-field
        v-model="fileList[1].username"
        label="昵称"
        placeholder="请填写昵称"
      />
      <van-field
        v-model="fileList[1].intro"
        label="简介"
        placeholder="让大家认识你"
      />
      <div class="datetime-box">
        <div class="datetime">
          <span>生日</span>
          <van-datetime-picker
            v-model="date"
            type="date"
            :show-toolbar="toolbar"
            :item-height="height"
            :visible-item-count="num"
            @change="chDate(date)"
          />
        </div>
      </div>
      <div class="dropdown-box">
        <div class="dropdown">
          <span>性别</span>
          <van-dropdown-menu>
            <van-dropdown-item v-model="fileList[1].sex" :options="option" />
          </van-dropdown-menu>
        </div>
      </div>
      <van-field
        v-model="fileList[1].dz"
        label="地址"
        placeholder="请填写地址"
      />
    </div>
  </div>
</template>

<script>
import querystring from 'querystring'
export default {
  data () {
    return {
      fileList: [
        { file: '', phone: '19805298262' },
        {
          username: '默认',
          intro: '默认',
          date: '',
          sex: 0,
          dz: '北京',
          phone: '19805'
        }
      ],
      date: new Date(),
      height: 44,
      num: 1,
      // minDate: "30",
      value1: 2,
      option: [
        { text: '男', value: 0 },
        { text: '女', value: 1 },
        { text: '保密', value: 2 }
      ],
      toolbar: false,
      activeId: 1,
      activeIndex: 0
    }
  },
  methods: {
    chDate (date) {
      let year = date.getFullYear()
      let month = date.getMonth() + 1
      let dates = date.getDate()
      this.fileList[1].date = year + '-' + month + '-' + dates
    },
    // async afterRead(file) {
    //   this.fileList[0].file = file.content;
    //   let { data: res } = await this.$axios.post(
    //     "/uploader",
    //     querystring.stringify(this.fileList[0])
    //   );
    //   window.console.log(res);
    // },
    photo () {
      alert('系统升级中，暂不支持修改头像')
    },
    onChange (picker, value, index) {
      this.$toast(`Value: ${value}, Index: ${index}`)
    },

    onClickLeft () {
      this.$router.push('/user')
    },

    async onClickRight () {
      let { data: res } = await this.$axios.post(
        '/baocun',
        querystring.stringify(this.fileList[1])
      )
      window.console.log(res)
    }
  }

  // created: function() {
  //   window.console.log(this.fileList.date);
  // }
}
</script>

<style lang="less" scoped>
.van-field {
  border-bottom: 1px solid #e6e6e6;
}
.uploader-box {
  height: 160px;
  border-bottom: 1px solid #252734;
  > div {
    margin-left: 40%;
    margin-top: 10%;
  }
  > span {
    position: absolute;
    margin-left: -80px;
    margin-top: 124px;
    font-size: 14px;
  }
}
.field-box {
  > .van-field {
    margin-top: 20px;
  }
  > .dropdown-box {
    padding-left: 16px;
  }
  .dropdown {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #cacaca;
    > span {
      width: 36px;
      text-align: center;
      padding-top: 15px;
      font-size: 14px;
    }
    > div {
      width: 100%;
      padding-top: 10px;
      > div {
        width: 180px;
      }
    }
  }
  > .datetime-box {
    padding-left: 16px;
  }
  .datetime {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 14px;
    border-bottom: 1px solid #e6e6e6;
    > span {
      width: 36px;
      text-align: center;
      font-size: 14px;
    }
    > div {
      width: 85%;
    }
    > button {
      width: 46px;
      color: #3a9cff;
      font-size: 14px;
      margin-right: 20px;
      background-color: #eeeeee;
      border-radius: 50%;
    }
  }
  .van-tree-select {
    height: 200px !important;
  }
}
</style>

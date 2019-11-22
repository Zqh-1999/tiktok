<template>
  <div id="sameCity">
    <van-uploader :after-read="afterRead" ref="uploader">
      <van-image round width="5rem" height="5rem" :src="src"></van-image>
    </van-uploader>
  </div>
</template>

<script>
// import qs from 'qs'
export default {
  data () {
    return {
      fileList: [],
      src: '',
      editItem: {
        cover: ''
      }
    }
  },
  methods: {
    toBlob (urlData, fileType) {
      let bytes = window.atob(urlData)
      let n = bytes.length
      let u8arr = new Uint8Array(n)
      while (n--) {
        u8arr[n] = bytes.charCodeAt(n)
      }
      return new Blob([u8arr], { type: fileType })
    },
    afterRead (f) {
      // console.log(f)
      const urlData = f.content
      const base64 = urlData.split(',').pop()
      const fileType = urlData.split(';').shift().split(':').pop()

      // base64转blob
      const blob = this.toBlob(base64, fileType)

      // blob转arrayBuffer
      const reader = new FileReader()
      reader.readAsArrayBuffer(blob)
      // let OSS = require('ali-oss')
      reader.onload = function (event) {
        let oss = require('ali-oss')

        const client = oss({
          region: 'oss-cn-beijing',
          accessKeyId: 'LTAI4FuaZD55WpDTVvxCkvuh',
          accessKeySecret: 'XLq4g4utOao9ohbXnCv6txpX7ABOJ2',
          bucket: 'tiktokdou'
        })
        console.log(client)
        client.putBucketCORS('tiktokdou', [
          {
            allowedOrigin: '*',
            allowedMethod: [
              'GET',
              'HEAD'
            ]
          }
        ]).then((result) => {
          console.log(result)
        })

        // 配置
        // const client = new OSS({
        //   region: 'oss-cn-shanghai',
        //   accessKeyId: 'LTAI4FuaZD55WpDTVvxCkvuh',
        //   accessKeySecret: 'XLq4g4utOao9ohbXnCv6txpX7ABOJ2'

        // })
        // const objectKey = `uploads/file/${new Date().getTime()}.${fileType.split('/').pop()}`
        // // console.log(event.target.result)
        // // arrayBuffer转Buffer
        // const buffer = new OSS.Buffer(event.target.result)
        // client.putBucketCORS('tiktokdou', [
        //   {
        //     allowedOrigin: '*',
        //     allowedMethod: [
        //       'GET',
        //       'HEAD'
        //     ]
        //   }
        // ]).then((result) => {
        //   client.putStream(objectKey, buffer).then(result => {
        //     console.log(result)
        //   /* e.g. result = {
        //         name: "Uploads/file/20171125/1511601396119.png",
        //         res: {status: 200, statusCode: 200, headers: {…}, size: 0, aborted: false, …},
        //         url: "http://bucket.oss-cn-shenzhen.aliyuncs.com/Uploads/file/20171125/1511601396119.png"
        //     } */
        //   }).catch(function (err) {
        //     console.log(err)
        //   })
        // })
        // 文件名

        // console.log(buffer)
        // console.log(client)
        // 上传
        // var path = '/shop/public/index.html'
      }
    }
  }

  // methods: {
  //   afterRead (file) {
  //     this.src = file.content
  //     let OSS = require('ali-oss')
  //     let client = new OSS({
  //       region: 'oss-cn-shanghai',
  //       bucket: 'tiktokdou',
  //       accessKeyId: 'LTAI4FuaZD55WpDTVvxCkvuh',
  //       accessKeySecret: 'XLq4g4utOao9ohbXnCv6txpX7ABOJ2'
  //     })
  //     const base64 = file.content.split(',').pop()// 出去头部image/data
  //     const fileType = file.content.split(';').shift().split(':').pop()
  //     // console.log(base64)
  //     // console.log(fileType)
  //     const blob = this.toBlob(base64, fileType)
  //     this.putBlob(client, blob)
  //   },
  //   // 异步上传图片
  //   async  putBlob (client, blob) {
  //     try {
  //       var timestamp = (new Date()).getTime()
  //       let fileName = 'mcdull/' + timestamp + '.png'
  //       let result = await client.put(fileName, qs.stringify(blob))
  //       console.log(result)
  //       this.editItem.cover = result.url
  //       this.$refs.uploader.off()
  //     } catch (e) {
  //       console.log(e)
  //     }
  //   },
  //   toBlob (urlData, fileType) {
  //     let bytes = window.atob(urlData)
  //     let n = bytes.length
  //     let u8arr = new Uint8Array(n)
  //     while (n--) {
  //       u8arr[n] = bytes.charCodeAt(n)
  //     }
  //     return new Blob([u8arr], { type: fileType })
  //   }
  // }
}
</script>

<style scoped>
#sameCity {
  height: 100%;
}
</style>

<template>
  <div>
    <span>{{id}}</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: sessionStorage.getItem('id')
    }
  },
  methods: {
  }
}
</script>

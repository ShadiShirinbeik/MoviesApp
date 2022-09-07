<template>
    <div class="result flex flex-wrap justify-between">
        <MovieCards v-for="i in 12" :key="i" />
    </div>
</template>

<script>
export default {
  name: 'Result',
  mounted () {
      this.getAgent()
  },
  methods: {
    async getAgent () {
      try {
        const {
          id,
          isAuthenticateInstagram
        } = await this.$request(this.getUrl('Movie.GetAll'))
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

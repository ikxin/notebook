export const mixin = {
  methods: {
    showName () {
      alert(this.name)
    }
  }
}

export const data = {
  data () {
    return {
      a: 1,
      b: 2
    }
  },
  mounted () {
    console.log('hello')
  }
}

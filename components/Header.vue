<template>
  <div id="header">
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  },
  head() {
    return {
      title: this.title + " | Patras Medicine - iGEM 2022"
    }
  }
}
</script>

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
      title: this.title + " | IISc - iGEM 2023"
    }
  }
}
</script>

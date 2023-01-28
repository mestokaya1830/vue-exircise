<template>
  <div>
    <h2>{{ title }}</h2>
    {{ $store.state.test }}
    <input type="button" value="Send" class="btn btn-primary">
  </div>
</template>

<script>
export default {
  name:'Home',
  data () {
    return {
      title:'Home Page'
    }
  }
};
</script>
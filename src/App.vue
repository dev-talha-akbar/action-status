<template>
  <div id="app">
    <action-status
      :scope="{
        simpleAction: 'simpleAsynchronousAction',
        errorAction: 'errorAsynchronousAction'
      }"
    >
      <div slot-scope="{ simpleAction, errorAction }">
        <button>
          <div v-if="simpleAction.isLoading">Loading</div>
          <div v-if="simpleAction.isFailed">Error</div>
          <div v-if="simpleAction.isSuccessful">Success</div>
        </button>
        <button>
          <div v-if="errorAction.isLoading">Loading</div>
          <div v-if="errorAction.isFailed">Error: {{ errorAction.error }}</div>
          <div v-if="errorAction.isSuccessful">Success</div>
        </button>
      </div>
    </action-status>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('simpleSynchronousAction')
    this.$store.dispatch('simpleAsynchronousAction')
    this.$store.dispatch('errorAsynchronousAction')
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

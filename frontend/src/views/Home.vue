<template>
  <div class="home">
    <button @click="checkApi">
      check api
    </button>
    <div>
      API-Status {{ apiState }}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      apiState: null,
    }
  },
  methods: {
    checkApi() {
      try {
        axios.post('/api/hallo').then( result => {
          this.apiState = result.data
        })
      } catch(e) {
        this.apiState = "Bin nicht am start";
      }
    }
  }
}
</script>

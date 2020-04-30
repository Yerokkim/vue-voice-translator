<template>
  <div>
    <v-flex class="results-box" md6 align-center>
      <h1>
        {{ this.tanslatedText }}
      </h1>
    </v-flex>
    <hr v-if="this.tanslatedText" />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ShowResults",
  computed: {
    ...mapState(["tanslatedText"]),
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@1,900&family=Noto+Serif:wght@700&display=swap");

h1 {
  font-family: "Noto Serif", serif;
  color: black;
  font-size: 50px;
}

hr {
  border: 2px solid black;
  width: 60px;
}

.results-box {
  padding: 15px;
}
</style>

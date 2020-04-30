<template>
  <v-app color="primary">
    <v-layout class="first" xs12 md12>
      <ShowResults />
      <!-- <v-spacer></v-spacer> -->
    </v-layout>
    <v-layout class="second" xs12 md12>
      <v-content align="center">
        <VoiceRecord />
      </v-content>
    </v-layout>
  </v-app>
</template>

<script>
import VoiceRecord from "./components/VoiceRecord";
import ShowResults from "./components/ShowResults";

export default {
  name: "App",

  components: {
    VoiceRecord,
    ShowResults,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@1,900&family=Noto+Serif:wght@700&display=swap");

#app {
  font-family: "Noto Serif", serif;
  color: #ffeb3b;
}
img {
  width: 25px;
  height: 25px;
}

.footer {
  height: 60px;
}
.first {
  width: 100%;
  height: 100%;
  background-color: #ffeb3b;
}
.second {
  width: 100%;
  height: 100%;
  background-color: black;
}
</style>

<template>
  <div id="VoiceRecord">
    <v-flex xs12 md12>
      <h1>{{ this.text }}</h1>
    </v-flex>
    <v-flex class="img-box" align="center" xs12 md12>
      <img class="sound-recorder" src="../assets/icon-recorder.png" />
    </v-flex>

    <v-flex class="footer" xs12 md12 align-self-end>
      <button class="btn" @click="this.translate">CLICK</button>
    </v-flex>
  </div>
</template>

<script>
// import { start, startRecord, getResult } from "../voice-recognition";
import { mapActions, mapState } from "vuex";

export default {
  name: "VoiceRecord",
  components: {},
  data() {
    return {
      introText: true,
    };
  },
  computed: {
    ...mapState(["text", "tanslatedText"]),
  },
  methods: {
    ...mapActions(["startRecord", "translateText", "speakTranslated"]),
    async translate() {
      this.introText = !this.introText;
      await this.startRecord();
      await setTimeout(this.translateText, 7000);
    },
  },
};
</script>
<style scoped>
#VoiceRecord {
  color: white;
}
.sound-recorder {
  width: 100px;
  height: 70px;
  color: white !important;
}
.btn {
  position: fixed;
  left: 0;
  bottom: 0;
  height: 70px;
  font-size: 30px;
  width: 100%;
  background-color: #ffeb3b;
  color: black;
}

.img-box {
  padding-top: 20%;
}
</style>

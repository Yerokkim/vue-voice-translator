import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex, axios, VueAxios);

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = "en-US";

const api_key =
  "trnsl.1.1.20190719T134213Z.173f82ca5ed13cf6.085f359a7e383196c719079493c73219abca6eaf";

export const store = new Vuex.Store({
  state: {
    text: "",
    tanslatedText: "",
  },
  mutations: {
    setText(state, text) {
      state.text = text;
    },
    setTranslated(state, tanslatedText) {
      state.tanslatedText = tanslatedText;
    },
  },
  getters: {},
  actions: {
    async startRecord({ commit }) {
      await recognition.start();
      recognition.onstart = async () => {
        console.log("hey it is start");
      };

      recognition.onresult = async (e) => {
        const results = e.results[0][0].transcript;
        commit("setText", results);
        console.log(e);
      };
    },
    async translateText({ state, commit, dispatch }) {
      const language = "de";
      const text = state.text;
      const { data } = await axios.get(
        `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${api_key}&lang=${language}&text=${text}`
      );
      const translated = data.text[0];
      commit("setTranslated", translated);
      console.log(data.text[0]);
      dispatch("speakTranslated");
    },

    async speakTranslated({ state }) {
      const speech = new SpeechSynthesisUtterance();

      if (state.tanslatedText) {
        speech.text = state.tanslatedText;
      }
      speech.lang = "de-DE";
      speech.pitch = 1;
      speech.volume = 1;
      speech.rate = 1;
      window.speechSynthesis.speak(speech);
    },
  },
});

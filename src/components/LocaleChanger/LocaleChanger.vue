<template>
  <div class="locale-changer">
    <select v-model="$i18n.locale" v-on:change="fireLanguageChangeEvent">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "locale-changer",
  methods: {
    fireLanguageChangeEvent(){
      this.$ga.event('user settings', 'language change', this.$i18n.locale);
      console.log('this.$i18n.locale :>> ', this.$i18n.locale);
    }
  },
  data() {
    return { lang: "en", langs: ["en", "esp"] };
  },
};
</script>
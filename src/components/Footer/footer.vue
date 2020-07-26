<template>
  <div class="footer">
    <h6>{{$t('list-of-words.analytics_consent_copy')}}</h6>
    <b-form-radio-group
        id="btn-radios-1"
        v-model="selected"
        :options="options"
        buttons
        button-variant="outline-primary"
        size="sm"
        name="radio-btn-outline"
        v-on:change="toggleAnalytics"
      ></b-form-radio-group>
  </div>
</template>

<script>
export default {
  methods: {
    stopGoogleAnalytics() {
      this.$ga.disable();
      this.$ga.event('user settings', 'consent switch', 'Disable');
      console.log("Analytics stopped");
    },
    engageGoogleAnalytics() {
      this.$ga.enable();
      this.$ga.event('user settings', 'consent switch', 'Enable');
      console.log("Analytics enabled");
    },
    toggleAnalytics() {
      this.selected == 'disabled' ? this.engageGoogleAnalytics() : this.stopGoogleAnalytics();
    }
  },

  computed: {
    options() {
      return [
        { text: this.$t('list-of-words.disable_analytics'), value: 'disabled'},
        { text: this.$t('list-of-words.enable_analytics'), value: 'enabled'},
      ]
    }
  },

  data() {
    return {
      selected: 'disabled'
    }
  }
};
</script>

<style>
</style>
<template>
  <div class="footer">
    <h6>This is very important information about being or being not tracked by Google Analytics</h6>
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
      this.$ga.event('analytics', 'consent switch', 'Disable');
      console.log("Analytics stopped");
    },
    engageGoogleAnalytics() {
      this.$ga.enable();
      this.$ga.event('analytics', 'consent switch', 'Enable');
      console.log("Analytics enabled");
    },
    toggleAnalytics() {
      this.selected == 'disabled' ? this.engageGoogleAnalytics() : this.stopGoogleAnalytics();
    }
  },

  data() {
    return {
      selected: 'disabled',
      options: [
        { text: this.$t('list-of-words.disable_analytics'), value: 'disabled'},
        { text: this.$t('list-of-words.enable_analytics'), value: 'enabled'},
      ]
    }
  }
};
</script>

<style>
</style>
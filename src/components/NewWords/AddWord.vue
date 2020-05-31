<template>
  <div>
    <p class="text-success">
      Came across a nice word? Let's add it!
    </p>
    <p v-if="errors.length">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="error in errors" v-bind:key="error.id">{{ error }}</li>
      </ul>
    </p>

    <p>
      <label for="front">Front</label>
      <input
        id="front"
        v-model="front"
        type="text"
        name="front"
      >
    </p>

    <p>
      <label for="back">Back</label>
      <input
        id="back"
        v-model="back"
        type="text"
        name="back"
      >
    </p>

    <p>
      <input
        type="submit"
        value="Submit"
        v-on:click="submit"
      >
    </p>

    <p v-if="submitMsg">
      <b>{{submitMsg}}</b>
    </p>
  </div>
</template>

<script>
import { required } from "validators";
import FlashCard from "../../data_objects/flashCard";
const fstore = require("../../utils/FirestoreAccess");
export default {
  name: "newFlashCardForm",

  data() {
    return {
      errors: [],
      front: null,
      back: null,
      submitMsg: null
    }
  },

  validations: {
    form: {
      front: {required},
      back: {required}
    }
  },

  methods: {
    checkForm: function (e) {
      this.errors = [];

      if (!this.front) {
        this.errors.push("Front required.");
      }
      if (!this.back) {
        this.errors.push('Back required.');
      } 

      if (!this.errors.length) {
        console.log("Check form: valid");
        return true;
      } 
      console.log("Check form: INvalid");
      e.preventDefault();
      return false;
      
    },

    submit: function (e) {
      if(this.checkForm(e)){
        console.log("Data submitted");
        fstore.addSingleWord(this.front, this.back)
        .then(resultMSG => {
          this.submitMsg = resultMSG;
        });
        this.front = null;
        this.back = null;       
      }
    }
  }

}
</script>

<style>

</style>
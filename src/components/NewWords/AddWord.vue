<template>
   <div>
      <div class="d-none d-lg-block">
         <p class="text-success">
            {{ $t('list-of-words.add-word-banner') }}
         </p>
         <p v-if="errors.length">
            <b>{{ $tc('list-of-words.add-word-error', errors.length) }}</b>
         <ul>
            <li v-for="error in errors" v-bind:key="error.id">{{ error }}</li>
         </ul>
         </p>
         <p>
            <label for="front">{{ $t('list-of-words.add-word-front') }}</label>
            <input
               id="front"
               v-model="front"
               type="text"
               name="front"
               >
         </p>
         <p>
            <label for="back">{{ $t('list-of-words.add-word-back') }}</label>
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
               v-bind:value="$t('list-of-words.add-word-submit')"
               v-on:click="submit"
               >
         </p>
         <p v-if="submitMsg">
            <b>{{submitMsg}}</b>
         </p>
      </div>
      <div class="d-block d-lg-none">
         <b-button v-b-modal.modal-add-word-rwd class="btn btn-outline-success">{{ $t('list-of-words.add-word-rwd')}}</b-button>
         <b-modal id="modal-add-word-rwd" :title="$t('list-of-words.add-word-banner')">
            <div><p>
               <label for="front">{{ $t('list-of-words.add-word-front') }}</label>
               <input
                  id="front"
                  v-model="front"
                  type="text"
                  name="front"
                  >
            </p>
            <p>
               <label for="back">{{ $t('list-of-words.add-word-back') }}</label>
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
                  v-bind:value="$t('list-of-words.add-word-submit')"
                  v-on:click="submit"
                  >
            </p>
            <p v-if="submitMsg">
               <b>{{submitMsg}}</b>
            </p></div>
         </b-modal>
      </div>
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
      this.$bvModal.hide('modal-add-word-rwd')
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
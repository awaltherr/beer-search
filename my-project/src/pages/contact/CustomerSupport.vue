<template>
  
    <div class="contact-us">
    <h1>Get in touch</h1>
    <h2>Want to get in touch? We would love to hear from you.</h2>
    <h2>Use the form below to send us your message and we will answer your question as soon as possible.</h2>
</div>
  
  <form @submit.prevent="submitMessage" autocomplete="off">
    <div class="form-control">
      <label for="user-name">Name*</label>
      <input id="user-name" name="user-name" type="text" v-model="state.name" />
      <span v-if="v$.name.$error">
        <p>Name is required</p>
      </span>
    </div>
    <div class="form-control">
      <label for="age">Age</label>
      <input id="age" name="age" type="number" />
    </div>
    <div class="form-control">
      <label for="email">Email*</label>
      <input id="email" name="email" type="email" v-model="state.email" />
      <span v-if="v$.email.$error">
      <p>Valid email is required</p>
      </span>
    </div>
    <div class="form-control">
      <label for="referrer">How did you hear about us?*</label>
      <select id="referrer" name="referrer" v-model="state.referrer">
        <option value="google">Google</option>
        <option value="wom">Word of mouth</option>
        <option value="newspaper">Social Media</option>
        <option value="other">Other</option>
      </select>
       <span v-if="v$.referrer.$error">
      <p>Please select a referrer</p>
      </span>
    </div>

    <div class="form-control">
      <label for="message">Message*</label>
      <textarea rows="5" cols="50" id="message" name="message" v-model="state.message">Aa</textarea>
      <span v-if="v$.message.$error">
      <p>Please write your message</p>
      </span>
    </div>
    <div>
       <button id="send" @click="submitForm">Send Message</button>
    </div>
  </form>
</template>

<script>

import useValidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import { reactive, computed } from 'vue'

export default {
  setup() {
    const state = reactive({
      name: '',
      email: '',
      referrer: '',
      message: ''
    })

  const rules = computed(() => {
    return {
      name: { required },
      email: { required, email },
      referrer: { required },
      message: { required }
      }
    })

    const v$ = useValidate(rules, state)

    return {
      state,
      v$
    }
  },
  methods: {
    submitForm() {
      this.v$.$validate()
      if (!this.v$.$error) {
        this.$router.push({ path: '/thankyou' })
      } 
    }
  }
}

</script>
<style scoped>

.contact-us {
  padding-top: 50px;
  margin: 1rem auto;
  max-width: 50rem;
  padding-left: 20px;
  padding-right: 20px;
  line-height: 1.5;
}

form {
  max-width: 800px;
  margin: 2rem auto;
  max-width: 50rem;
  background: white;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 20px 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  line-height: 1.5;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select, textarea {
  display: block;
  width: 100%;
  margin-top: 0.5rem;
}


select {
  width: auto;
}

#send {
  margin: 20px auto;
  width: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #283618;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

#send a {
  text-decoration: none;
  color: white;
}

#send:hover,
#send:active {
  border-color: #4f6a2f;
  background-color: #4f6a2f;
}

span {
  margin-top: 10px;
  color: red;
  font-size: 12px;
}



</style>
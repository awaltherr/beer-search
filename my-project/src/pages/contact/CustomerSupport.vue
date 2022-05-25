<template>
  <div class="container">
    <div class="contact-us">
    <h1>Get in touch</h1>
    <h2>Want to get in touch? We would love to hear from you.</h2>
    <h2>Use the form below to send us your message and we will answer your question as soon as possible.</h2>
</div>
  </div>
  <form @submit.prevent="submitMessage">
    <div class="form-control" :class="{invalid: userNameValidity === 'invalid'}">
      <label for="user-name">Name*</label>
      <input id="user-name" name="user-name" type="text" v-model.trim="userName" @blur="validateInput" />
      <p v-if="userNameValidity == 'invalid'">Name is required</p>
    </div>
    <div class="form-control">
      <label for="age">Age</label>
      <input id="age" name="age" type="number" v-model="userAge" />
    </div>
    <div class="form-control" :class="{invalid: emailValidity === 'invalid'}">
      <label for="email">Email*</label>
      <input id="email" name="email" type="email" v-model.trim="email" @blur="validateInput" />
      <p v-if="emailValidity == 'invalid'">Valid email is required</p>
    </div>
    <div class="form-control">
      <label for="referrer">How did you hear about us?</label>
      <select id="referrer" name="referrer" v-model="referrer">
        <option value="google">Google</option>
        <option value="wom">Word of mouth</option>
        <option value="newspaper">Social Media</option>
        <option value="other">Other</option>
      </select>
    </div>
    <div class="form-control" :class="{invalid: messageValidity === 'invalid'}">
      <label for="message">Message*</label>
      <textarea rows="5" cols="50" id="message" name="message" v-model.trim="message" @blur="validateInput">Aa</textarea>
      <p v-if="messageValidity == 'invalid'">Message is required</p>
    </div>
    <div id="send">
      <router-link to='/thankyou'>Send Message</router-link>
    </div>
  </form>
</template>

<script>

export default {
  data() {
    return {
      userName: '',
      userAge: null,
      referrer: 'google',
      email: '',
      message: '',
      userNameValidity: 'pending',
      emailValidity: 'pending',
      messageValidity: 'pending'
    };
  },
  methods: {
    submitMessage() {
      this.userName = '';
      this.userAge = null;
      this.email = '';
      this.referrer = 'google';
      this.message = ''
    },
    validateInput() {
      if (this.userName === ''){
        this.userNameValidity = 'invalid';
      } else {
        this.userNameValidity = 'valid';
      }
      if (!this.validEmail(this.email)) {
        this.emailValidity = 'invalid';
      } else {
        this.emailValidity = 'valid';
      }
      if (this.message === ''){
        this.messageValidity = 'invalid';
      } else {
        this.messageValidity = 'valid';
      }
    },
    validEmail: function (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
}

</script>
<style scoped>

.container {
    margin-left: auto;
    margin-right: auto;
    width: 40%;
    line-height: 1.5;
}

.contact-us {
  padding-top: 50px;
  padding-bottom: 50px;
  margin: 1rem auto;
  max-width: 50rem;
  padding-left: 20px;
  padding-right: 20px;
  line-height: 1.5;
  text-align: left;
}

form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: white;
}

.form-control {
  margin: 0.5rem 0;
}

.form-control.invalid p {
  color: red;
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




</style>
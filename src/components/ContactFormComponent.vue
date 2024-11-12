<template>
  <!-- Contact Start -->
  <div class="contact">
    <div class="">
      <div class="section-header">
        <p>Get In Touch</p>
        <h2>Get In Touch For Any Query</h2>
      </div>
      <div class="row align-items-center">
        <div class="col-md-5">
          <div class="contact-info">
            <div class="contact-icon">
              <q-icon name="map" />
            </div>
            <div class="contact-text">
              <h4>Our Head Office</h4>
              <p>ELECTRICITY HOUSE, 5TH FLOOR, P. O. BOX 935-80100, MOMBASA.</p>
            </div>
          </div>
          <div class="contact-info">
            <div class="contact-icon">
              <q-icon name="phone" />
            </div>
            <div class="contact-text">
              <h4>Call for Help</h4>
              <p>+254 725677133</p>
            </div>
          </div>
          <div class="contact-info">
            <div class="contact-icon">
              <q-icon name="email" />
            </div>
            <div class="contact-text">
              <h4>Email for Information</h4>
              <p>jaredmagolo@yahoo.com</p>
            </div>
          </div>
        </div>
        <div class="col-md-7">
          <div class="contact-form">
            <div id="success"></div>
            <q-form
              action="https://some-url.com"
              method="post"
              @submit.prevent="onSubmit"
            >
              <q-input
                outlined
                v-model="ph"
                label="Name"
                placeholder="John Doe"
                hint=""
                dense
              />
              <q-input
                outlined
                v-model="ph"
                label="Email"
                placeholder="johndoe@gmail.com"
                hint=""
                type="email"
                dense
              />
              <q-input
                outlined
                v-model="ph"
                label="Phone Number"
                placeholder="johndoe@gmail.com"
                hint=""
                type="tel"
                dense
              />
              <q-input
                outlined
                v-model="ph"
                label="Inquiry"
                placeholder="Brief explanatin of your inquiry"
                hint=""
                type="textarea"
                dense
              />
              <p>
                Any information you provide will be kept confidential and used
                solely for the purpose of responding to your inquiry.
              </p>
              <q-btn label="Submit" type="submit" class="btn" />
            </q-form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Contact End -->
</template>

<script setup>
import { ref } from "vue";

const ph = ref("");
const onSubmit = () => {
  console.log("Submited");
};
</script>

<style lang="scss" scoped>
/*******************************/
/********* Contact CSS *********/
/*******************************/
.contact {
  position: relative;
  width: 100%;
  padding: 45px 0 15px 0;
}

.contact .contact-info {
  position: relative;
  display: flex;
  padding: 30px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  transition: 0.3s;
}

.contact .contact-info:hover {
  border-color: transparent;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
}

.contact .contact-icon {
  position: relative;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.contact .contact-icon i {
  font-size: 18px;
  color: #0796fe;
}

.contact .contact-text {
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: 15px;
}

.contact .contact-text h4 {
  font-size: 16px;
  font-weight: 400;
  color: #092a49;
  letter-spacing: 1px;
  margin: 0;
}

.contact .contact-text p {
  margin: 0;
  font-size: 16px;
}

.contact .contact-form {
  position: relative;
  padding: 30px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  transition: 0.3s;
}

.contact .contact-form:hover {
  border-color: transparent;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
}

.contact .contact-form input {
  padding: 15px;
  background: none;
  border-radius: 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.contact .contact-form textarea {
  height: 100px;
  padding: 8px 15px;
  background: none;
  border-radius: 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.btn {
  padding: 15px 30px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  color: #092a49;
  background: none;
  border: 2px solid #092a49;
  border-radius: 0;
  transition: 0.3s;
}

.contact .contact-form .btn:hover {
  color: #0796fe;
  background: #092a49;
}

.contact .help-block ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
</style>

<template>
  <!-- Footer Start -->
  <div class="footer">
    <div class="container">
      <div class="row q-pa-sm">
        <div class="col-sm-7 col-xs-12">
          <div class="row">
            <div class="col-6">
              <div class="footer-contact">
                <h2>Our Head Office</h2>
                <p>
                  <i class="fa fa-map-marker-alt"></i>ELECTRICITY HOUSE, 5TH
                  FLOOR, P. O. BOX 935-80100, MOMBASA.
                </p>
                <p><i class="fa fa-phone-alt"></i>+254 725677133</p>
                <p><i class="fa fa-envelope"></i>jaredmagolo@yahoo.com</p>
                <div class="footer-social">
                  <a href=""><i class="fab fa-twitter"></i></a>
                  <a href=""><i class="fab fa-facebook-f"></i></a>
                  <a href=""><i class="fab fa-youtube"></i></a>
                  <a href=""><i class="fab fa-instagram"></i></a>
                  <a href=""><i class="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="footer-link">
                <h2>Quick Links</h2>
                <a href="">Terms of use</a>
                <a href="">Privacy policy</a>
                <a href="">Cookies</a>
                <a href="">Help</a>
                <a href="">FQAs</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-5 col-xs-12">
          <div class="footer-newsletter">
            <h2>Newsletter</h2>
            <p>
              Get the latest from J.O Magolo by subscribing to our newsletter
            </p>
            <div class="form">
              <q-input
                outlined
                v-model="email"
                label="Email"
                placeholder="Email goes here"
                hint=""
                type="email"
                filled
                bg-color="yellow"
              />
              <button class="btn">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <div class="row">
        <div class="col-6">
          <p>
            &copy; <a href="#">J.O Magolo & Company Advocates</a>, All Right
            Reserved.
          </p>
        </div>
        <div class="col-md-6">
          <!-- <p>Designed By <a href="https://htmlcodex.com">HTML Codex</a></p> -->
        </div>
      </div>
    </div>
  </div>
  <!-- Footer End -->
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
</script>

<style scoped>
/*******************************/
/********* Footer CSS **********/
/*******************************/
.footer {
  position: relative;
  margin-top: 45px;
  padding-top: 90px;
  background: #092a49;
}

.footer .footer-contact,
.footer .footer-link,
.footer .footer-newsletter {
  position: relative;
  margin-bottom: 45px;
  color: #ffffff;
}

.footer .footer-contact h2,
.footer .footer-link h2,
.footer .footer-newsletter h2 {
  position: relative;
  margin-bottom: 30px;
  padding-bottom: 10px;
  font-size: 22px;
  font-weight: 300;
  letter-spacing: 1px;
  color: #ffffff;
}

.footer .footer-contact h2::after,
.footer .footer-link h2::after,
.footer .footer-newsletter h2::after {
  position: absolute;
  content: "";
  width: 45px;
  height: 2px;
  bottom: 0;
  left: 0;
  background: #0796fe;
}

.footer .footer-link a {
  display: block;
  margin-bottom: 10px;
  color: #ffffff;
  transition: 0.3s;
}

.footer .footer-link a::before {
  position: relative;
  content: "\f105";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  margin-right: 10px;
}

.footer .footer-link a:hover {
  color: #0796fe;
  letter-spacing: 1px;
}

.footer .footer-contact p i {
  width: 25px;
}

.footer .footer-social {
  position: relative;
  margin-top: 20px;
}

.footer .footer-social a {
  display: inline-block;
}

.footer .footer-social a i {
  margin-right: 15px;
  font-size: 18px;
  color: #092a49;
}

.footer .footer-social a:last-child i {
  margin: 0;
}

.footer .footer-social a:hover i {
  color: #999999;
}

.footer .footer-newsletter .form {
  position: relative;
  width: 100%;
}

.footer .footer-newsletter input {
  height: 60px;
  border: 2px solid #1d2434;
  border-radius: 0;
}

.footer .footer-newsletter .btn {
  position: absolute;
  top: 8px;
  right: 8px;
  height: 44px;
  padding: 8px 20px;
  font-size: 14px;
  font-weight: 600;
  color: #092a49;
  background: none;
  border-radius: 0;
  border: 2px solid #092a49;
  transition: 0.3s;
}

.footer .footer-newsletter .btn:hover {
  color: #0796fe;
  background: #092a49;
}

.footer .copyright {
  padding: 0 30px;
}

.footer .copyright .row {
  padding-top: 25px;
  padding-bottom: 25px;
  border-top: 1px solid rgba(256, 256, 256, 0.1);
}

.footer .copyright p {
  margin: 0;
  color: #999999;
}

.footer .copyright .col-md-6:last-child p {
  text-align: right;
}

.footer .copyright p a {
  color: #ffffff;
}

.footer .copyright p a:hover {
  color: #0796fe;
}

@media (max-width: 767.98px) {
  .footer .copyright p,
  .footer .copyright .col-md-6:last-child p {
    margin: 5px 0;
    text-align: center;
  }
}
</style>

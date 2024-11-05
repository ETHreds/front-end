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
                                <i class="fa fa-map-marker-alt"></i>
                            </div>
                            <div class="contact-text">
                                <h3>Our Head Office</h3>
                                <p>123 Street, New York, USA</p>
                            </div>
                        </div>
                        <div class="contact-info">
                            <div class="contact-icon">
                                <i class="fa fa-phone-alt"></i>
                            </div>
                            <div class="contact-text">
                                <h3>Call for Help</h3>
                                <p>+012 345 6789</p>
                            </div>
                        </div>
                        <div class="contact-info">
                            <div class="contact-icon">
                                <i class="fa fa-envelope"></i>
                            </div>
                            <div class="contact-text">
                                <h3>Email for Information</h3>
                                <p>info@example.com</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-7">
                        <div class="contact-form">
                            <div id="success"></div>
                            <form name="sentMessage" id="contactForm" novalidate="novalidate">
                                <div class="control-group">
                                    <input type="text" class="form-control" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group">
                                    <input type="email" class="form-control" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group">
                                    <input type="text" class="form-control" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group">
                                    <textarea class="form-control" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div>
                                    <button class="btn" type="submit" id="sendMessageButton">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <p>Your privacy is important to us. Any information you provide will be kept confidential and used solely for the purpose of responding to your inquiry.</p>
        </div>
        <!-- Contact End -->
</template>

<script setup>

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
    border: 1px solid rgba(0, 0, 0, .1);
    margin-bottom: 30px;
    transition: .3s;
}

.contact .contact-info:hover {
    border-color: transparent;
    box-shadow: 0 0 30px rgba(0, 0, 0, .1);
}

.contact .contact-icon {
    position: relative;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(0, 0, 0, .1);
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

.contact .contact-text h3 {
    font-size: 16px;
    font-weight: 400;
    color: #092a49;
    letter-spacing: 1px;
}

.contact .contact-text p {
    margin: 0;
    font-size: 16px;
}

.contact .contact-form {
    position: relative;
    padding: 30px;
    border: 1px solid rgba(0, 0, 0, .1);
    margin-bottom: 30px;
    transition: .3s;
}

.contact .contact-form:hover {
    border-color: transparent;
    box-shadow: 0 0 30px rgba(0, 0, 0, .1);
}

.contact .contact-form input {
    padding: 15px;
    background: none;
    border-radius: 0;
    border: 1px solid rgba(0, 0, 0, .1);
}

.contact .contact-form textarea {
    height: 100px;
    padding: 8px 15px;
    background: none;
    border-radius: 0;
    border: 1px solid rgba(0, 0, 0, .1);
}

.contact .contact-form .btn {
    padding: 15px 30px;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    color: #092a49;
    background: none;
    border: 2px solid #092a49;
    border-radius: 0;
    transition: .3s;
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

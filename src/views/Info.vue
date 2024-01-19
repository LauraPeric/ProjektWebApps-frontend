<template>
  <div class="information-page">
    <h1 class="information-title">Informacije</h1>
    <p class="information-text">
      Ako imate bilo kakva pitanja ili želite podijeliti informacije s nama,<br />
      slobodno nas kontaktirajte na sljedeći način:
    </p>
    <div class="contact-form">
      <h2 class="contact-title">Kontaktirajte nas</h2>
      <form @submit.prevent="sendContactMessage">
        <div class="form-group">
          <label for="ime">Upišite svoje ime</label>
          <input v-model="ime" type="text" id="ime" class="form-control" />
        </div>
        <div class="form-group">
          <label for="email">Upišite svoj email</label>
          <input v-model="email" type="email" id="email" class="form-control" />
        </div>
        <div class="form-group">
          <label for="poruka">Poruka</label>
          <textarea
            v-model="poruka"
            id="poruka"
            class="form-control"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Pošalji</button>
      </form>
    </div>
    <router-link to="/" class="btn btn-primary">Nazad</router-link>
  </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  data() {
    return {
      ime: "",
      email: "",
      poruka: "",
    };
  },
  methods: {
    sendContactMessage() {
      const serviceID = "service_Chefonline";
      const templateId = "template_xlbl89e";
      const PublicKey = "e8nc97p9mbQL-mIMT";

      const templateParams = {
        to_email: this.email, // email korisnika
        from_name: "Chefonline",
        from_email: "lauraperic2002@gmail.com",
        message: "Thank you for your message. We will get back to you soon!",
      };

      //  auto-reply korisniku
      emailjs.send(serviceID, templateId, templateParams, PublicKey).then(
        () => {
          console.log("Auto-reply sent successfully!");
        },
        (error) => {
          console.error("Error sending auto-reply:", error);
        }
      );

      // poruka na moj email
      const messageParams = {
        to_email: "lauraperic2002@gmail.com", // moja email adresa
        from_name: this.ime,
        from_email: this.email,
        message: this.poruka,
      };

      emailjs
        .send(serviceID, templateId, messageParams, PublicKey)
        .then(() => {
          console.log("Message sent successfully!");
          // cista forma
          this.ime = "";
          this.email = "";
          this.poruka = "";
        })
        .catch((error) => {
          console.error("Error sending message:", error);
        });
    },
  },
};
</script>

<style scoped>
.information-page {
  background-image: url("../assets/info1.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  color: #ffffff;
  padding: 130px;
  text-align: center;
  margin-bottom: -25px;
  margin-top: -23px;
  font-family: system-ui;
}

.information-title {
  font-size: 30px;
  font-weight: bold;
  margin: 40px;
}

.information-text {
  font-size: 16px;
  margin: 40px;
}

.contact-form {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  width: 60%;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
}

.contact-title {
  font-size: 20px;
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 20px;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ffffff;
  border-radius: 5px;
  color: #473f3f;
}

.btn-primary {
  background-color: #ffffff;
  color: #000000;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: rgba(255, 255, 255, 0.8);
}
</style>

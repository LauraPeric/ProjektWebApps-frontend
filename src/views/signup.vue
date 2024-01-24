<template>
  <div class="login-page">
    <div class="login-container">
      <div class="login-content">
        <div class="image-container">
          <img src="../assets/lr.jpg" alt="Your Image" />
        </div>
        <div class="text-container">
          <h1 style="margin-bottom: 20px">Registracija</h1>
          <h5 style="margin-bottom: 50px; color: grey; font-size: 10px">
            Dobrodošli! Molimo vas unesite svoje informacije za registraciju.
          </h5>
          <form @submit.prevent="signup">
            <div v-if="errorMessage" class="alert alert-danger">
              <strong>Pogreška! </strong>{{ errorMessage }}
            </div>
            <div class="form-group">
              <label for="email" class="input-email">Email adresa</label>
              <input
                type="email"
                v-model="username"
                class="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="upišite email"
              />
              <small
                id="emailHelp"
                class="form-text text-muted"
                style="font-size: 10px"
                >Nikada nećemo djeliti vaš email s trećim strankama.</small
              >
            </div>
            <div class="form-group">
              <label for="password" class="input-email">Lozinka</label>
              <input
                type="password"
                v-model="password"
                class="form-control"
                id="password"
                placeholder="upišite lozinku"
              />
            </div>
            <div class="form-group">
              <label for="passwordrepeat" class="input-email"
                >Potvrdite lozinku</label
              >
              <input
                type="password"
                v-model="passwordrepeat"
                class="form-control"
                id="passwordrepeat"
                placeholder="ponovite lozinku"
              />
              <div v-if="passwordMismatch" class="text-danger">
                Lozinke se ne podudaraju!
              </div>
            </div>
            <div class="button-container">
              <button
                type="submit"
                class="btn btn-primary"
                style="margin-bottom: 20px; padding: 10px; margin-top: -2px"
              >
                Registriraj se
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { firebase } from "@/firebase";

export default {
  name: "Signup",
  data() {
    return {
      errorMessage: "",
      username: "",
      password: "",
      passwordrepeat: "",
      passwordMismatch: false,
    };
  },
  methods: {
    signup() {
      if (this.password !== this.passwordrepeat) {
        this.passwordMismatch = true;
        return; // Staje ako lozinke nisu iste
      } else {
        this.passwordMismatch = false;
        // Logika za registraciju
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.username, this.password)
          .then(() => {
            console.log("Uspješna registracija");
            this.$router.push("/");
          })
          .catch((error) => {
            console.error("Došlo je do greške", error);
          });
      }
    },
  },
};
</script>


<style scoped>
.login-content {
  display: flex;
}

.image-container {
  flex: 1;
}

.image-container img {
  width: 100%;
  height: auto;
  margin-left: 15px;
  border-radius: 35px;
}

.text-container {
  flex: 1;
  padding: 50px;
  margin-top: 35px;
  box-sizing: border-box;
  font-family: system-ui;
}

.form-group {
  margin-bottom: 30px;
}

.form-control {
  width: 50%;
  padding: 10px;
  margin-left: 180px;
  margin-top: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f2f2f2;
  color: #333;
  font-size: 14px;
}

.form-control:focus {
  outline: none; /* Da biste uklonili plavu boju oko pravokutnika kada je fokusiran */
  border-color: #999; /* Siva boja oko pravokutnika kada je fokusiran */
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); /* Dodajte sjenku za poboljšanje izgleda */
}

.btn-primary {
  background-color: rgb(119, 119, 119);
  border: none;
  width: 20%;
  cursor: pointer;
  padding: 10px;
  border-radius: 8px;
}

.btn-primary:hover {
  background-color: rgb(173, 173, 173);
}
</style>


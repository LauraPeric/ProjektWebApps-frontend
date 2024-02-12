<template>
  <div class="login-page">
    <div class="login-container">
      <div class="login-content">
        <div class="image-container">
          <img src="../assets/lr.jpg" alt="Your Image" />
        </div>
        <div class="text-container">
          <h1 style="margin-bottom: 20px">Prijava</h1>
          <h5 style="margin-bottom: 50px; color: grey; font-size: 10px">
            Dobrodošli natrag! Molimo vas unesite svoje podatke.
          </h5>
          <form>
            <div class="form-group">
              <label for="loginemail" class="input-email">Email adresa</label>
              <input
                type="email"
                v-model="email"
                class="form-control"
                id="loginemail"
                aria-describedby="emailHelp"
                placeholder="email"
              />
              <small
                id="emailHelp"
                class="form-text text-muted"
                style="font-size: 10px"
                >Nikada nećemo djeliti vaš email s trećim strankama.</small
              >
            </div>
            <div class="form-group">
              <label for="loginlozinka" class="input-email">Lozinka</label>
              <input
                type="password"
                v-model="password"
                class="form-control"
                id="loginlozinka"
                placeholder="upišite lozinku"
              />
            </div>
            <div class="button-container">
              <button
                type="button"
                @click="login()"
                class="btn btn-primary"
                style="margin-bottom: 20px"
              >
                Prijavi se
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post("http://localhost:5000/login", {
          email: this.email,
          password: this.password,
        });

        console.log("Uspješna prijava", response.data);

        // token se sprema u lokalnom spremištu
        localStorage.setItem("userToken", response.data.token);

        // redirekcija nakon prijave
        this.$router.push({ name: "pocetna" });
      } catch (error) {
        console.error("Greška pri prijavi:", error);
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
  box-sizing: border-box;
  font-family: system-ui;
  margin-top: 50px;
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
  outline: none;
  border-color: #999;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.btn-primary {
  background-color: rgb(119, 119, 119);
  border: none;
  width: 15%;
  cursor: pointer;
  padding: 10px;
  border-radius: 8px;
}

.btn-primary:hover {
  background-color: rgb(173, 173, 173);
}
</style>


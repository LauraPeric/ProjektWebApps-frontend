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
            Prijavi se kao admin
          </h5>
          <form @submit.prevent="loginAdmin" class="login-form">
            <div class="form-group">
              <label for="KorisničkoIme" class="input-label"
                >Korisničko ime</label
              >
              <input
                v-model="adminData.username"
                type="text"
                id="KorisničkoIme"
                class="form-control"
                placeholder="Unesite korisničko ime"
              />
            </div>
            <div class="form-group">
              <label for="Lozinka" class="input-label">Lozinka</label>
              <input
                v-model="adminData.password"
                type="password"
                id="Lozinka"
                class="form-control"
                placeholder="Unesite lozinku"
              />
            </div>
            <div class="button-container">
              <button
                type="submit"
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
export default {
  name: "login",
  data() {
    return {
      adminData: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    loginAdmin() {
      console.log("Prijavljujem administratora: " + this.adminData.username);
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


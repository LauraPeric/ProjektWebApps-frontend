<template>
  <div class="registration-container">
    <div class="registration-box">
      <h2 class="registration-title">
        Želite li koristiti stranicu kao korisnik ili administrator?
      </h2>
      <div class="sections-container">
        <div class="user-section">
          <p class="koriadmin" style="font-size: 30px">Korisnik</p>
          <router-link
            to="/login"
            class="prijireg"
            style="text-decoration: none; font-weight: bold"
            >Prijavi se</router-link
          >
          <router-link
            to="/signup"
            class="prijireg"
            style="text-decoration: none; font-weight: bold"
            >Registriraj se</router-link
          >
        </div>
        <div class="admin-section">
          <p class="koriadmin" style="font-size: 30px">Administrator</p>
          <router-link
            to="/logina"
            class="prijireg"
            style="text-decoration: none; font-weight: bold"
            >Prijavi se</router-link
          >
        </div>
      </div>
    </div>
    <div class="button-container">
      <router-link to="/" class="btn btn-back btn-block">Nazad</router-link>
    </div>
  </div>
</template>

<style scoped>
.registration-title {
  font-size: 24px;
  text-align: center;
  margin: 30px;
  color: #333;
}

.sections-container {
  display: flex;
  justify-content: space-between;
}

.user-section,
.admin-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 60%;
  max-width: 40%;
}

.prijireg,
.koriadmin {
  font-size: 18px;
  color: #555;
}

.btn {
  background-color: #444;
  color: #eee;
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn:hover {
  background-color: #333;
}

.btn-block {
  display: block;
  width: 100%;
}

.button-container {
  margin-top: 15px;
  text-align: center;
}

.registration-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 98.95vw;
  flex-direction: column;
  background-image: url("../assets/regg.png");
  background-size: cover;
  font-family: system-ui;
}

.registration-box {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  width: 1000px;
  margin: 0 auto;
  height: 40%;
}

.router-link {
  background-color: #000000;
  color: #eee;
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
}

.router-link:hover {
  background-color: #444;
}
</style>

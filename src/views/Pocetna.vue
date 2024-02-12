<template>
  <div class="home-page">
    <img
      src="../assets/pocetna3.png"
      alt="Chef Online"
      class="full-width-image"
    />
    <div class="welcome-text">
      <h1>Dobrodošli u Chef Online</h1>
      <br />
      <p>
        Mjesto gdje strast prema kuhanju postaje kreativno putovanje! Pronađite
        inspiraciju i iskušajte svoje mogućnosti u kulinarskom svijetu pomoću
        recepata i videozapisa!
      </p>
    </div>

    <div class="motto">
      <h2>Naš moto:</h2>
      <br />
      <p>
        "Izazov je: otkrij okus, <br />podijeli ga, nek' bude fokus! <br />
        Uživaj u svakom zalogaju, pravi je sukus!"
      </p>
    </div>

    <div class="image-section">
      <div class="image-with-text">
        <img
          src="../assets/img1.png"
          alt="Gurmanska jela"
          class="side-by-side-image"
        />
        <p class="text1">Okušaj se u pripravljanju gurmanskih jela</p>
      </div>
      <div class="image-with-text">
        <img
          src="../assets/img2.png"
          alt="Amatersko kuhanje"
          class="side-by-side-image"
        />
        <p class="text2">Kuhaš samo amaterski? Uvježbaj se!</p>
      </div>
    </div>
  </div>
</template>


<style scoped>
.home-page {
  text-align: center;
  padding-bottom: 20px;
  font-family: system-ui;
}

.full-width-image {
  width: 98.95vw;
  max-height: 300px;
  object-fit: cover;
}

.welcome-text {
  padding: 20px;
}

.motto {
  padding: 20px;
}

.image-section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.side-by-side-image {
  width: 400px;
  margin-bottom: 10px;

  border-radius: 50%;
}

.image-with-text {
  text-align: center;
  margin-left: 60px;
  margin-right: 60px;
}
</style>

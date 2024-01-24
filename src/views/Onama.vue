<template>
  <div class="about-us">
    <div class="container">
      <div class="left-section">
        <img src="../assets/onama1.png" alt="Slika1" />
      </div>
      <div class="middle-section">
        <div class="gray-box">
          <h1>O nama</h1>
          <p class="ulomak">
            Chef Online je online platforma koja povezuje entuzijastične kuhare,
            bilo da su amateri ili profesionalci, nudeći im prostor za
            istraživanje, dijeljenje iskustava te učenje kroz inspirativne
            recepte, interaktivne video vodiče i živahne diskusije.
            <br />
            <br />
            Na našem virtualnom kulinarskom igralištu, korisnici se potiču da
            stvaraju, komuniciraju i istražuju beskrajne mogućnosti okusa i
            tehnika kuhanja.
          </p>

          <div class="separator-line"></div>

          <p class="ulomak2">
            Chef Online pruža jedinstvenu kulinarsku avanturu, spoj ukusa i
            kreativnosti. Ponosimo se raznovrsnim receptima, bilo da su
            popularni ili gurmanski, prilagođeni svim kulinarskim
            poznavateljima, od amatera do stručnjaka.
          </p>
          <p class="ulomak2">
            Prijavom na našu stranicu, osim uživanja u receptima, korisnici mogu
            personalizirati svoj kulinarski doživljaj dodavanjem omiljenih
            recepata u privatni kalendar, planirajući svoje kulinarske avanture
            prema vlastitom rasporedu.
          </p>
        </div>
      </div>
      <div class="right-section">
        <img src="../assets/onama2.png" alt="Slika2" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "onama",
};
</script>

<style scoped>
.container {
  display: flex;
}

.separator-line {
  height: 1px;
  background-color: #000000;
  margin: 10px 0;
}

.left-section {
  flex-basis: 40%;
  margin-left: -120px;
}
.middle-section {
  flex-basis: 40%;
}

.right-section {
  flex-basis: 40%;
  margin-right: -110px;
}

.gray-box {
  background-color: #ccc;
  padding: 45px;
  height: 100%;
  font-family: system-ui;
  line-height: 1, 7;
}

.ulomak {
  padding: 5%;
}

.ulomak2 {
  padding-top: 10%;
  text-align: justify;
}

img {
  max-width: 100%;
  height: auto;
}
</style>

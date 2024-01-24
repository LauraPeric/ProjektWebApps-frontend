<template>
  <div class="recipe-card">
    <div class="header">
      <h2>Dodaj novi recept</h2>
      <label for="recipeTitle">Naziv recepta:</label>
      <input
        v-model="newRecipe.recipeTitle"
        type="text"
        id="recipeTitle"
        required
      />

      <label for="recipeDescription">Kratki opis recepta:</label>
      <textarea
        v-model="newRecipe.recipeDescription"
        id="recipeDescription"
        required
      ></textarea>

      <label for="recipePhoto">Slika recepta (URL):</label>
      <input
        v-model="newRecipe.photos[0]"
        type="text"
        id="recipePhoto"
        required
      />

      <label for="authorName">Ime autora:</label>
      <input
        v-model="newRecipe.authorName"
        type="text"
        id="authorName"
        required
      />

      <label for="recipeDetails">Detalji recepta:</label>
      <textarea
        v-model="newRecipe.recipeDetails"
        id="recipeDetails"
        required
      ></textarea>

      <button @click="submitRecipe" class="download-button">
        Dodaj recept
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newRecipe: {
        recipeTitle: "",
        recipeDescription: "",
        authorName: "Korisničko Ime",
        recipeDetails: "",
        photos: [],
        comments: [],
      },
    };
  },
  methods: {
    submitRecipe() {
      // Dodajte logiku za slanje novog recepta
      // Možete emitovati događaj koji će obavestiti roditeljsku komponentu (jelapil.vue)
      // da je dodan novi recept.
      this.$emit("addRecipe", this.newRecipe);
      // Opciono: Resetujte polja nakon dodavanja recepta
      this.newRecipe = {
        recipeTitle: "",
        recipeDescription: "",
        authorName: "Korisničko Ime",
        recipeDetails: "",
        photos: [],
        comments: [],
      };
    },
  },
};
</script>

<style scoped>
/* Dodajte stilizaciju prema potrebi */
</style>

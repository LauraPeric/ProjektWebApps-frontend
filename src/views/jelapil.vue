<template>
  <div class="recept">
    <h1 style="margin-top: 50px">- Recepti s piletinom-</h1>
    <p class="podt">
      Najbolji izbor mesnih delicija: kulinarsko putovanje kroz recepte s mesom!
    </p>
    <!-- Dodajte formu za unos novog recepta -->
    <button v-if="showToggleButton" @click="toggleForm" class="btn btn-toggle">
      Dodaj svoj recept
    </button>

    <form v-if="showForm" class="dodajrecept" @submit.prevent="addNewRecipe">
      <label>Naslov recepta:</label>
      <input v-model="newRecipeData.recipeTitle" required />
      <label>Opis recepta:</label>
      <textarea v-model="newRecipeData.recipeDescription" required></textarea>
      <label>Ime autora recepta:</label>
      <input v-model="newRecipeData.authorName" required />
      <label for="recipeImages">Fotografije recepta:</label>
      <input
        type="file"
        id="recipeImages"
        @change="handleImageUpload"
        accept="image/*"
        multiple
      />
      <label>Detalji recepta:</label>
      <textarea v-model="newRecipeData.recipeDetails" required></textarea>

      <!-- Dodajte ostale input elemente prema potrebi -->
      <button type="submit" class="btn btn-dodaj">Dodaj recept</button>
    </form>

    <div
      class="row"
      style="margin-top: -50px; margin-left: 10px; margin-right: 10px"
    >
      <div class="col-sm-4" v-for="card in filtercards" :key="card.url">
        <item-card-vue :info="card" />
      </div>
    </div>
    <div>
      <router-link to="/recepti" class="btn btn-nazad">Nazad</router-link>
    </div>
  </div>
</template>
 


<script>
import ItemCardVue from "@/components/Itemcard.vue";
import store from "@/store";
import axios from "axios";
let cards = [
  {
    url: require("@/assets/pilg.png"),
    cardtitle: "Piletina u umaku od gljiva",
    cardtext: "Piletina na sto načina: kreativni recepti za svaki dan",
    route: "/samirecept",
  },
  {
    url: require("@/assets/pils.png"),
    cardtitle: "Piletina sa sezamom",
    cardtext: "Govedina u glavnoj ulozi: odresci, gulaši i više",
    route: "",
  },
  {
    url: require("@/assets/pilp.png"),
    cardtitle: "Piletina s rižom iz pečnice",
    cardtext: "Svinjetina za prste polizati: tradicionalni i moderni recepti",
    route: "",
  },
  {
    url: require("@/assets/pilnj.png"),
    cardtitle: "Piletina s njokama",
    cardtext: "Puretina na vašem stolu: zdravi i ukusni specijaliteti",

    route: "",
  },
  {
    url: require("@/assets/pilrr.png"),
    cardtitle: "Piletina s tikvicama i rižom",
    cardtext: "Teletina za gurmanske užitke: recepti koji osvojiti svako nepce",
    route: "",
  },
  {
    url: require("@/assets/pilb.png"),
    cardtitle: "Pileći bruger",
    cardtext: "Srnetina: divljač na vašem tanjuru - recepti puni okusa",
    route: "",
  },
];
export default {
  name: "ReceptiView",
  data: function () {
    return {
      cards,
      store,
      newRecipeData: {
        recipeTitle: "",
        recipeDescription: "",
        authorName: "",
        recipeDetails: "",
        recipeImage: [],
      },
      showToggleButton: true, // Dodajte ovu liniju
      showForm: false,
    };
  },
  computed: {
    filtercards() {
      //logika koja filtrira cards
      let termin = this.store.searchterm;
      console.log("search termin:", termin);
      return this.cards.filter((card) => card.cardtitle.includes(termin));
    },
  },
  components: {
    ItemCardVue,
  },
  methods: {
    async addNewRecipe() {
      console.log(axios); // Dodajte ovu liniju

      try {
        console.log("Pokušaj slanja zahtjeva:", this.newRecipeData);

        const response = await axios.post(
          "http://localhost:5000/saverecipe",
          this.newRecipeData
        );

        console.log("Odgovor od servera:", response);

        if (response.status === 201) {
          console.log("Recept uspješno spremljen.");
          this.fetchRecipes();
        } else {
          console.error("Neuspješan zahtjev za spremanje recepta.");
        }
      } catch (error) {
        console.error(
          "Došlo je do pogreške prilikom komunikacije s backendom:",
          error
        );
      }

      this.newRecipeData = {
        recipeTitle: "",
        recipeDescription: "",
        authorName: "",
        recipeImage: "",
        recipeDetails: "",
      };

      this.showForm = false;
    },

    async fetchRecipes() {
      try {
        const response = await this.axios.get("/api/recipes");

        if (response.status === 200) {
          // Ažurirajte lokalni popis recepata s podacima dobivenim s backenda
          this.cards = response.data;
        } else {
          console.error("Neuspješan zahtjev za dobivanje recepata.");
        }
      } catch (error) {
        console.error(
          "Došlo je do pogreške prilikom komunikacije s backendom:",
          error
        );
      }
    },
    toggleForm() {
      this.showForm = !this.showForm;
      if (this.showForm) {
        this.showToggleButton = false;
      }
    },
    handleImageUpload(event) {
      // Obrada uploada slike
      const files = event.target.files;
      console.log("Uploadana slika:", file);
      this.newRecipeData.recipeImage = "putanja/do/slike.jpg";
      for (let i = 0; i < files.length; i++) {
        this.newRecipeData.recipeImages.push(files[i]);
      }
    },
  },
};
</script>

<style>
.recept {
  font-family: system-ui;
}
/* Dodajte stil za gumb koji će se koristiti za toggle */
.btn-toggle {
  background-color: rgb(160, 160, 160);
  border: none;
  cursor: pointer;
  padding: 8px 16px;
  margin-top: 100px;
  margin-bottom: -10px;
}
.btn-toggle:hover {
  background-color: rgb(128, 117, 114);
}

.dodajrecept {
  padding: 20px;
  margin-top: 90px;
  background-color: rgb(222, 215, 215);
  width: 50%;
  margin-left: 25%;
  border-radius: 30px;
}
/* Stilizacija za textarea */
.dodajrecept textarea {
  width: 50%;
  padding: 8px;
  margin-bottom: 16px;
  border-radius: 10px;
  border-color: white;
  resize: vertical; /* Omogućuje korisnicima samo proširivanje prema vertikalnoj osi */
}

.dodajrecept label {
  display: block; /* block elementi */
  margin-bottom: 8px;
}

.dodajrecept input {
  width: 50%;
  padding: 5px;
  margin-bottom: 16px;
  border-radius: 10px;
  border-color: white;
}

.btn-nazad {
  background-color: rgb(160, 160, 160);
  border: none;
  cursor: pointer;
  padding: 8px 16px;
  margin: 40px;
}
/* Stilizacija za "Opis recepta" label i input */
.dodajrecept label[for="opisRecepta"] {
  display: block;
  margin-top: 16px;
}
.dodajrecept input#opisRecepta {
  width: 50%;
  padding: 8px;
  margin-bottom: 16px;
}

.btn-dodaj {
  background-color: rgb(160, 160, 160);
  border: none;
  cursor: pointer;
  margin-top: 8px;
  margin-left: 42%;
  display: block;
}

.btn-primary:hover {
  background-color: rgb(128, 117, 114);
}

.podt {
  margin-bottom: -40px;
  margin-top: 40px;
}
</style>

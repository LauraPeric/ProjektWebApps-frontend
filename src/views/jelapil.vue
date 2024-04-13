<template>
  <div class="recept">
    <h1 style="margin-top: 50px">- Recepti s piletinom-</h1>
    <p class="podt">
      Najbolji izbor mesnih delicija: kulinarsko putovanje kroz recepte s mesom!
    </p>
    <!-- forma za unos novog recepta -->
    <button v-if="showToggleButton" @click="toggleForm" class="btn btn-toggle">
      Dodaj svoj recept
    </button>

    <form v-if="showForm" class="dodajrecept" @submit.prevent="addNewRecipe">
      <label>Naslov recepta:</label>
      <input v-model="titleInput" required />
      <label>Opis recepta:</label>
      <textarea v-model="descriptionInput" required></textarea>
      <label>Ime autora recepta:</label>
      <input v-model="authorNameInput" required />
      <label for="recipeImages">Fotografije recepta:</label>
      <input
        type="file"
        id="recipeImagesInput"
        @change="handleImageUpload"
        accept="image/*"
        multiple
      />
      <label>Detalji recepta:</label>
      <textarea v-model="newRecipeData.recipeDetails" required></textarea>
      <button type="submit" class="btn btn-dodaj">Dodaj recept</button>
    </form>

    <div
      class="row"
      style="margin-top: -50px; margin-left: 10px; margin-right: 10px"
    >
      <div class="col-sm-4" v-for="card in filtercards" :key="card.url">
        <item-card-vue :info="card" />
      </div>
      <!--<div class="col-sm-4" v-for="card in filtercards" :key="card.url">
  <item-card-vue :info="card" :applyCustomSize="true" />
</div> TREBA BIT 238 I 150 VELICINA 
 -->
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
      showToggleButton: true,
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
      try {
        const formData = new FormData();

        // slanje na api
        const response = await axios.post("https://localhost:8080" / recipe, {
          title: this.titleInput,
          description: this.descriptionInput,
          authorName: this.authorNameInput,
          recipeDetails: this.recipeDetailsInput,
          recipeImage: this.recipeImageInput,
        });
        window.location.reload();
        console.log("Note saved:", response.data);

        // ako uspijeh
        console.log("Recipe saved successfully:", response.data);

        this.cards.unshift({
          url: this.newRecipeData.recipeImage, // recipeImage
          cardtitle: this.newRecipeData.recipeTitle,
          cardtext: this.newRecipeData.recipeDescription,
          route: "/jelapil", //  rutu po želji
        });

        //  reset
        this.newRecipeData = {
          recipeTitle: "",
          recipeDescription: "",
          authorName: "",
          recipeImage: "",
          recipeDetails: "",
        };

        // sakrit formu
        this.showForm = false;
      } catch (error) {
        console.error("Error saving recipe:", error);
        //  errors
      }
    },
    toggleForm() {
      this.showForm = !this.showForm;
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
      console.log("Uploaded image:", file);
      if (file) {
        this.newRecipeData.recipeImage = URL.createObjectURL(file);
      }
    },
  },
};
</script>

<style>
.recept {
  font-family: system-ui;
}

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

.dodajrecept textarea {
  width: 50%;
  padding: 8px;
  margin-bottom: 16px;
  border-radius: 10px;
  border-color: white;
  resize: vertical;
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

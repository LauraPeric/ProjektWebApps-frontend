<template>
  <div class="recipe-card">
    <div class="row" style="margin: 10px">
      <div class="col-sm-3" v-for="recipe in filtercards" :key="recipe.id">
        <rec :rec="recipe" />
      </div>
    </div>
  </div>
</template>

<script>
import rec from "@/components/rec.vue";

export default {
  components: {
    rec,
  },
  data() {
    return {
      filtercards: [
        {
          id: 1,
          recipeTitle: "Piletina u umaku od gljiva s tjesteninom",
          recipeDescription:
            "Kratki opis: Piletina u umaku od gljiva koja kombinira nježnost piletine s bogatim i kremastim umakom od gljiva. Jelo se priprema pečenjem komada piletine na laganoj vatri te prelivanjem umaka od gljiva, uz dodatak začina i aromatičnih sastojaka čime dobivamo privlačnu kombinaciju okusa i teksture.",
          authorName: "antonelamed",
          recipeDetails: {
            cookingTime: "Oko 20-25 minuta",
            ingredients: [
              "300g spageta",
              "40dl umaka od rajčice",
              "2 češnjaka sitno nasjeckana",
              "2 žlice maslinovog ulja",
              "Svježi bosiljak",
              "FANT mješavina za špagete bolognese (PODRAVKA)- pregled klikom na footgorafiju 'Podravka'",
              "Sol i papar po ukusu",
              "Parmezan (opcionalno, za posipanje)",
              "TAJNI SASTOJAK (javorov sirup)",
            ],
            instructions: [
              "U vodi skuhajte spagete al dente.",
              "Potrebno je zagrijati maslinovo ulje i pirjati sitno nasjeckani čepnjak dok ne zamiriše",
              "Dodajte umak od rajčice u tavu i začinite svježim bosiljkom i kuhajti lagano oko 10 minuta",
              "U drugoj tavi, dodajte tajni sastojak - žlicu javorovog sirupa umaku od rajčice i kuhajte još nekoliko minuta.",
              "Nakon kuhanja tjesteninu umiješajte u umak i poslužite je ukrašenu svježe ribanim parmezanom po želji.",
            ],
            secretIngredient: "javorov sirup",
          },
          photos: [require("@/assets/rca.png"), require("@/assets/pil.png")],
          comments: [],
          newComment: "",
        },
      ],
    };
  },
};
</script>


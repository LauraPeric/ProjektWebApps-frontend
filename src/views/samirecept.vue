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
          recipeTitle: "Piletina u umaku od gljiva",
          recipeDescription:
            "Kratki opis: Piletina u umaku od gljiva koja         kombinira nježnost piletine s bogatim i kremastim umakom od gljiva. Jelo se priprema pečenjem komada piletine na laganoj vatri te prelivanjem umaka od gljiva, uz dodatak začina i aromatičnih sastojaka čime dobivamo privlačnu kombinaciju okusa i teksture.",
          authorName: "antonelamed",
          recipeDetails:
            "Vrijeme potrebno za kuhanje jela: Oko 20-25 minuta Sastojci: 300g spageta 400g umaka od rajčice 2 češnja češnjaka, sitno nasjeckana 2 žlice maslinovog ulja Svježi bosiljak Sol i papar po ukusu Parmezan (opciono, za posipanje) TAJNI SASTOJAK (javorov sirup) U vodi skuhajte spagete al dente. Zasebno na laganoj vatri, zagrijte maslinovo ulje i pirjajte sitno nasjeckani češnjak dok ne zamiriše. Dodajte umak od rajčice u tavu i začinite svježim bosiljkom, kuhajte lagano oko 10 minuta. U drugoj tavi, dodajte tajni sastojak - kapljicu javorovog sirupa umaku od rajčice i kuhajte još nekoliko minuta.  Nakon kuhanja tjesteninu umiješajte u umak i poslužite je ukrašenu svježe ribanim parmezanom po želji.",
          photos: [
            require("@/assets/pilglj.png"),
            require("@/assets/vege.png"),
            require("@/assets/pil.png"),
          ],
          comments: [],
          newComment: "",
        },
      ],
    };
  },
};
</script>


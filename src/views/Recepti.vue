<template>
  <div class="recept">
    <h1 style="margin-top: 50px">- Recepti -</h1>
    <p class="podt">
      Istražite svijet okusa kroz naše odabrane recepte i kulinarske trikove.
      Kuhinjska čarolija čeka!
    </p>
    <div class="row" style="margin: 10px">
      <div class="col-sm-3" v-for="card in filtercards" :key="card.url">
        <item-card-vue :info="card" />
      </div>
    </div>
    <div>
      <router-link to="/" class="btn btn-primary">Nazad</router-link>
    </div>
  </div>
</template>

<script>
import ItemCardVue from "@/components/Itemcard.vue";
import store from "@/store";
import { test } from "@/services";
console.log("testiranje importa", test);

let cards = [
  {
    url: require("@/assets/meso.png"),
    cardtitle: " Jela s mesom",
    cardtext:
      "Ukusna jela s različitim vrstama mesa - raznoliki recepti za ukusne obroke ",
    route: "receptimeso",
  },
  {
    url: require("@/assets/riba.png"),
    cardtitle: "Jela s ribom",
    cardtext:
      "Osvježavajuća jela s ribom - inspirativni recepti za ukusne morske specijalitete.",
  },
  {
    url: require("@/assets/vege.png"),
    cardtitle: "Vegetarijanska jela",
    cardtext:
      "Vegetarijanska jela - kreativne i hranjive ideje za ukusne obroke bez mesa.",
    route: "",
  },
  {
    url: require("@/assets/trad.png"),
    cardtitle: "Tradicionalna jela",
    cardtext:
      "Tradicionalna jela - autentični recepti za očuvanje okusa tradicije. ",
    route: "",
  },
  {
    url: require("@/assets/pasta.png"),
    cardtitle: "Jela s tjesteninom",
    cardtext:
      "Jela s tjesteninom - jednostavne kombinacije za ljubitelje tjestenine",
    route: "",
  },
  {
    url: require("@/assets/gym.png"),
    cardtitle: "Fittnes jela",
    cardtext:
      "Gym jela - energetske i proteinske opcije za podršku tjelesnom treningu",
    route: "",
  },
  {
    url: require("@/assets/student.png"),
    cardtitle: "Studentska jela",
    cardtext:
      "Studentska jela - brzi recepti prilagođeni studentskom životu i proračunu.",
    route: "",
  },
  {
    url: require("@/assets/budet.png"),
    cardtitle: "Budžet jela",
    cardtext:
      "Jela na budžetu - ekonomični recepti za ukusne obroke bez opterećenja proračuna.",
    route: "",
  },
  {
    url: require("@/assets/amater.png"),
    cardtitle: "Amaterska jela",
    cardtext:
      "Amaterska jela za sve - jednostavni recepti prilagođeni početnicima u kuhinji.",

    route: "",
  },
  {
    url: require("@/assets/profi.png"),
    cardtitle: "Profesionalna jela",
    cardtext:
      "Profesionalni recepti - od iskusnih kuharima s naprednim kulinarskim vještinama.",

    route: "",
  },
  {
    url: require("@/assets/skupoo.png"),
    cardtitle: "Jela za eksperte",
    cardtext:
      "Jela za eksperte - izazovni recepti kuhara s visokim stupnjem vještine.",

    route: "",
  },
];

export default {
  name: "ReceptiView",
  data: function () {
    return {
      cards,
      store,
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
};
</script>

<style>
.recept {
  font-family: system-ui;
}

.btn-primary {
  background-color: rgb(160, 160, 160);
  border: none;
  cursor: pointer;
  padding: 8px 16px;
  margin: 40px;
}

.btn-primary:hover {
  background-color: rgb(128, 117, 114);
}

.podt {
  margin-bottom: -40px;
  margin-top: 40px;
}
</style>

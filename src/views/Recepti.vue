<template>
  <div class="recept">
    <h1 style="margin-top: 50px">- Recepti -</h1>
    <p class="podt">
      Istražite svijet okusa kroz naše odabrane recepte i kulinarske trikove.
      Kuhinjska čarolija čeka!
    </p>
    <div class="row">
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

let cards = [
  {
    url: require("@/assets/meso.png"),
    cardtitle: " Jela s mesom",
    cardtext: "Bio krema za čišćenje lica masne kože",
    route: "/objavateme",
  },
  {
    url: require("@/assets/riba.png"),
    cardtitle: "Jela s ribom",
    cardtext: "Crna krema za čišćenje za masnog lica",
    route: "/",
  },
  {
    url: require("@/assets/vege.png"),
    cardtitle: "Vegetarijanska jela",
    cardtext: "Krema za višenamjenjsku upotrebu masne kože",
    route: "/",
  },
  {
    url: require("@/assets/trad.png"),
    cardtitle: "Tradicionalna jela",
    cardtext: "Bio krema za čišćenje za masnog lica ",
    route: "/",
  },
  {
    url: require("@/assets/pasta.png"),
    cardtitle: "Jela s tjesteninom",
    cardtext: "Bio krema za čišćenje za masnog lica ",
    route: "/",
  },
  {
    url: require("@/assets/gym.png"),
    cardtitle: "Fittnes jela",
    cardtext: "Bio krema za čišćenje za masnog lica ",
    route: "/",
  },
  {
    url: require("@/assets/student.png"),
    cardtitle: "Studentska jela",
    cardtext: "Bio krema za čišćenje za masnog lica ",
    route: "/",
  },
  {
    url: require("@/assets/budet.png"),
    cardtitle: "Budžet jela",
    cardtext: "Bio krema za čišćenje za masnog lica ",
    route: "/",
  },
  {
    url: require("@/assets/amater.png"),
    cardtitle: "Amaterska jela",
    cardtext: "Bio krema za čišćenje za masnog lica ",
    route: "/",
  },
  {
    url: require("@/assets/profi.png"),
    cardtitle: "Jela za profesionalne kuhare",
    cardtext: "Bio krema za čišćenje za masnog lica ",
    route: "/",
  },
  {
    url: require("@/assets/skupoo.png"),
    cardtitle: "Jela za eksperte",
    cardtext: "Bio krema za čišćenje za masnog lica ",
    route: "/",
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
  margin: 20px;
}

.podt {
  margin-bottom: -40px;
  margin-top: 40px;
}
</style>

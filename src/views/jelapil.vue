<template>
  <div class="recept">
    <h1 style="margin-top: 50px">- Recepti s piletinom-</h1>
    <p class="podt">
      Najbolji izbor mesnih delicija: kulinarsko putovanje kroz recepte s mesom!
    </p>
    <div
      class="row"
      style="margin-top: -50px; margin-left: 10px; margin-right: 10px"
    >
      <div class="col-sm-4" v-for="card in filtercards" :key="card.url">
        <item-card-vue :info="card" />
      </div>
    </div>
    <div>
      <router-link to="/receptimeso" class="btn btn-primary">Nazad</router-link>
    </div>
  </div>
</template>

<script>
import ItemCardVue from "@/components/Itemcard.vue";
import store from "@/store";

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

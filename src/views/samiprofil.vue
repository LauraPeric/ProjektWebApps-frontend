<template>
  <div class="profile-page">
    <profil v-for="user in users" :key="user.id" :user="user" />
  </div>
</template>

<script>
import profil from "@/components/profil.vue";

export default {
  components: {
    profil,
  },
  data() {
    return {
      users: [
        {
          id: 1,
          avatar: require("@/assets/fg.png"),
          name: "Antonela Med",
          description:
            "Za sebe smatram da sam strastvena kuharica koja obožava istraživati svijet okusa i mirisa. Volim otkrivati nove recepte, dijelim svoje kulinarske eksperimente i uživam u interakciji s drugim ljubiteljima kuhanja. Volim provoditi slobodno vrijeme kušajući nove okuse, istražujući različite kuhinje i stvarajući jela koja griju srce. ",
          level: "Level kuhara: amater",
          posts: [
            {
              url: require("@/assets/pil.png"),
              cardtitle: "Piletina u umaku od gljiva",
              cardtext: "",
              route: "/samirecept",
            },
            {
              url: require("@/assets/anp.png"),
              cardtitle: "Pizza s anansom",
              cardtext: "",
              route: "",
            },
            {
              url: require("@/assets/l.png"),
              cardtitle: "Lazanje sa sojom",
              cardtext: "",
              route: "",
            },
            // Dodati ostale objave korisnika
          ],
        },
        // Možete dodati više korisničkih objekata ovde
      ],
    };
  },
  methods: {
    showFavoriteRecipes() {
      // Logika za prikaz omiljenih recepata
    },
    showCalendar() {
      // Logika za prikaz kalendara
    },
  },
};
</script>

<style scoped>
.profile-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.user-info {
  text-align: center;
  margin-bottom: 20px;
}

.user-avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.user-description {
  margin-bottom: 10px;
}

.user-buttons button {
  margin: 5px;
  padding: 8px 16px;
  cursor: pointer;
}

.user-posts {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.post {
  margin: 10px;
  text-align: center;
}

.post-image {
  width: 200px;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
}

.post-title {
  margin-top: 5px;
}
</style>

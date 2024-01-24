<template>
  <div class="forum">
    <h1 style="margin-bottom: 40px">- Forum -</h1>
    <input
      style="padding: 7px; border-radius: 10px; border-color: black"
      type="text"
      placeholder="Pretraži teme..."
      v-model="searchTerm"
    />
    <div class="separator-line"></div>
    <div
      class="row"
      style="margin-top: -20px; margin-left: 10px; margin-right: 10px"
    >
      <div class="col-sm-4" v-for="topic in filteredTopics" :key="topic.id">
        <ForumTeme :topic="topic" />
      </div>
    </div>
  </div>
</template>


<script>
import ForumTeme from "@/components/forumteme.vue";

export default {
  data() {
    return {
      searchTerm: "",
      topics: [
        {
          id: 1,
          title: "Recepti za ukusne smoothieje",
          shortDescription:
            "Otvorena tema za dijeljenje uputa i preporuka o pravljenju različitih okusa smoothija :)",
          numPosts: 15,
          lastPostDate: "2022-01-20",
          route: "/objavateme",
        },
        {
          id: 2,
          title: "Brzi i jednostavni ručkovi",
          shortDescription:
            "Koji ručak spremiti u trenu, savršen za radne dane? upomoć molim vas!",
          numPosts: 8,
          lastPostDate: "2022-01-19",
        },
        {
          id: 3,
          title: "Specijaliteti mediteranske kuhinje",
          shortDescription:
            "Koji su vaši omiljeni recepti za specijalitete mediteranske kuhinje koje je lako pripremiti kod kuće?",
          numPosts: 20,
          lastPostDate: "2022-01-18",
        },
        {
          id: 4,
          title: "Deserti bez šećera",
          shortDescription:
            "Uživanje u slatkim receptima za ukusne deserte bez dodanog šećera, podjelimo recpete ;)",
          numPosts: 12,
          lastPostDate: "2022-01-17",
        },
        {
          id: 5,
          title: "Vegetarijanski delicije",
          shortDescription:
            "Tek počinjem istraživati svijet vegetarijanskih jela s receptima. Preporuke?",
          numPosts: 18,
          lastPostDate: "2022-01-16",
        },
        {
          id: 6,
          title: "Recepti s egzotičnim začinima",
          shortDescription:
            "Odkad kuham koristim samo osnovne začine, želim to promjeniti :) Čekam sugestije",
          numPosts: 22,
          lastPostDate: "2022-01-15",
        },
      ],
    };
  },
  components: {
    ForumTeme,
  },
  computed: {
    filteredTopics() {
      let termin = this.searchTerm;
      console.log("search termin:", termin);
      return this.topics.filter((topic) => topic.title.includes(termin));
    },
  },
};
</script>

<style scoped>
.separator-line {
  height: 1px;
  background-color: #000000;
  margin: 20px 0;
}

.forum {
  margin: 50px;
  font-family: system-ui;
}

.post-details {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  color: #555555;
}
</style>

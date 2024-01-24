<template>
  <div class="forum">
    <h1 style="margin-bottom: 40px">- Forum -</h1>

    <input type="text" placeholder="Pretraži teme..." v-model="searchTerm" />
    <div class="separator-line"></div>

    <div class="row">
      <div class="col-md-4" v-for="topic in topics" :key="topic.id">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ topic.title }}</h5>
            <p class="card-text">{{ topic.shortDescription }}</p>
            <div class="post-details">
              <span>{{ topic.numPosts }} objava</span>
              <span>{{ topic.lastPostDate }}</span>
            </div>
          </div>
        </div>
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
        },
        {
          id: 2,
          title: "Brzi i jednostavni ručkovi",
          shortDescription:
            "Koji ručak spremiti u trenu, savršen za radne dane?",
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
            "Uživajte u slatkim trenucima s receptima za ukusne deserte bez dodanog šećera, savršene za zdravu prehranu.",
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
};
</script>

<style scoped>
.separator-line {
  height: 1px;
  background-color: #000000;
  margin: 20px 0;
}

.card {
  margin-bottom: 20px;
  margin-left: 10px;
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

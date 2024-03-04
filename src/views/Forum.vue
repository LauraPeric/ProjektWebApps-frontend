<template>
  <div class="forum">
    <h1 style="margin-bottom: 40px">- Forum -</h1>
    <input
      style="padding: 7px; border-radius: 10px; border-color: black"
      type="text"
      placeholder="Pretraži teme..."
      v-model="searchTerm"
    />

    <button v-if="showToggleButton" @click="toggleForm" class="btn btn-toggle">
      Dodaj novu temu
    </button>

    <form
      v-if="showForm"
      class="dodajtemu"
      @submit.prevent="addNewTopic"
      style=""
    >
      <!-- Dodajte polja za unos podataka nove teme -->
      <label for="title">Naslov teme:</label>
      <textarea v-model="newTopicData.title" required></textarea>
      <label for="shortDescription">Kratak opis teme:</label>
      <textarea v-model="newTopicData.shortDescription" required></textarea>

      <button type="submit" class="btn btn-dodaj">Dodaj temu</button>
    </form>

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
      showForm: false,
      newTopicData: {
        title: "",
        shortDescription: "",
        createdAt: "",
      },
      showToggleButton: true, // Dodajte ovu liniju
    };
  },
  components: {
    ForumTeme,
  },
  computed: {
    allTopics() {
      return [...this.topics, this.newTopicData];
    },
    filteredTopics() {
      let termin = this.searchTerm;
      console.log("search termin:", termin);
      return this.topics.filter((topic) => topic.title.includes(termin));
    },
  },
  methods: {
    addNewTopic() {
      // Postavljanje trenutnog datuma prilikom stvaranja nove teme
      this.newTopicData.createdAt = new Date().toLocaleDateString();

      // Implementacija logike za spremanje nove teme
      this.topics.push({
        id: this.topics.length + 1,
        title: this.newTopicData.title,
        shortDescription: this.newTopicData.shortDescription,
        createdAt: this.newTopicData.createdAt,
        // Postavite ostale podatke prema potrebi
      });

      this.showForm = false;
    },
    toggleForm() {
      this.showForm = !this.showForm;
      this.showToggleButton = !this.showForm;
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
.btn-toggle {
  background-color: rgb(160, 160, 160);
  border: none;
  cursor: pointer;
  margin-left: 45%;
  margin-block: 5%;
  display: block;
}
.btn-toggle:hover {
  background-color: rgb(128, 117, 114);
}
/* Stilizacija za textarea */
.dodajtemu textarea {
  width: 50%;
  padding: 8px;
  margin-bottom: 16px;
  border-radius: 10px;
  border-color: white;
  resize: vertical; /* Omogućuje korisnicima samo proširivanje prema vertikalnoj osi */
}

.btn-dodaj {
  background-color: rgb(160, 160, 160);
  border: none;
  cursor: pointer;
  margin-top: 8px;
  margin-left: 42%;
  display: block;
}

.dodajrecept {
  padding: 25px;
  margin-top: 90px;
  background-color: rgb(222, 215, 215);
  width: 50%;
  margin-left: 25%;
  border-radius: 30px;
}

.dodajtemu label {
  display: block; /* block elementi */
  margin-bottom: 8px;
}

.dodajtemu input {
  padding: 5px;
  margin-bottom: 16px;
  border-radius: 10px;
  border-color: white;
}

.dodajtemu {
  padding: 20px;
  margin-top: 50px;
  background-color: rgb(222, 215, 215);
  width: 50%;
  height: 100%;
  margin-left: 25%;
  border-radius: 30px;
}

.post-details {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  color: #555555;
}
</style>

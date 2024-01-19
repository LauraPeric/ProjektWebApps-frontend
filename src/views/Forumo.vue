<template>
  <div class="forum">
    <div class="main-content">
      <div class="forum-naslov">Forum</div>
      <div class="topics">
        <div v-for="topic in topics" :key="topic.id" class="topic">
          <h2>{{ topic.title }}</h2>
          <p>{{ topic.content }}</p>
          <p>Autor: {{ topic.author }}</p>
          <p>Posted at: {{ formatDate(topic.posted_at) }}</p>
        </div>
      </div>
      <div class="sidebar">
        <button class="add-topic-btn" @click="showAddTopicForm = true">
          Dodaj svoju temu
        </button>
      </div>
    </div>
    <div v-if="showAddTopicForm" class="add-topic-form">
      <h2>Dodaj svoju temu</h2>

      <div class="naslovteme">
        <input v-model="newTopic.title" placeholder="Naslov teme" />
      </div>
      <textarea
        class="sadteme"
        v-model="newTopic.content"
        placeholder="Sadržaj teme"
      ></textarea>
      <button class="add-topic-gumb" @click="addTopic">Dodaj temu</button>
    </div>
    <router-link to="/" class="btn btn-primary">Nazad</router-link>
  </div>
</template>

<script>
import store from "@/store";
import { db } from "@/firebase";

export default {
  data() {
    return {
      search: "",
      showAddTopicForm: false,
      newTopic: {
        title: "",
        content: "",
        author: "",
      },
      topics: [],
    };
  },
  mounted() {
    this.getposts();
  },
  methods: {
    getposts() {
      db.collection("posts")
        .get()
        .then((query) => {
          query.forEach((doc) => {
            this.topics.push(doc.data());
          });
        })
        .catch((error) => {
          console.error("Pogreška", error);
        });
    },
    addTopic() {
      const newTopicData = {
        title: this.newTopic.title,
        content: this.newTopic.content,
        author: store.currentUser,
        posted_at: Date.now(),
      };

      db.collection("posts")
        .add(newTopicData)
        .then((docRef) => {
          newTopicData.id = docRef.id;
          this.topics.unshift(newTopicData);
          this.newTopic.title = "";
          this.newTopic.content = "";
          this.showAddTopicForm = false;
        })
        .catch((error) => {
          console.error("Error adding topic: ", error);
        });
    },
    formatDate(timestamp) {
      const date = new Date(timestamp);
      return date.toLocaleString();
    },
  },
};
</script>

<style>
.btn-primary {
  background-color: purple;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  height: 8%;
  margin-left: 10px;
  margin-top: 40%;
}

.btn-primary:hover {
  background-color: rgb(215, 125, 215);
}
.topics {
  background-color: #f9dada;
  margin-bottom: 10%;
  padding: 10px;
}
.naslovteme {
  margin-top: 10%;
  margin-bottom: 10%;
  border: 1px #000000;
}
.sadteme {
  margin-bottom: 10%;
}
.forum-naslov {
  font-size: 50px;
  margin-bottom: 10%;
  margin-top: -20%;
}

.forum {
  display: flex;
  justify-content: space-between;
  background-color: #e1b8b8;
  padding: 10%;
}

.sidebar {
  width: 25%;
  margin-left: 35%;
}

.search-bar {
  margin-bottom: 10px;
}
.add-topic-form {
  padding: 20px;
  background-color: #ba9eb9;
  border-radius: 10px;
  margin-left: 10%;
  height: 70%;
}

.add-topic-btn {
  background-color: purple;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.add-topic-gumb {
  background-color: purple;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10%;
}

.main-content {
  width: 70%;
  padding-left: 340px;
}

.topic {
  border: 1px solid #000000;
  padding: 10px;
  margin-bottom: 10px;
}
</style>

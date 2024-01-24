<template>
  <div class="profile-page">
    <!-- Korisnikova slika i opis -->
    <div class="user-info">
      <div class="prof">
        <img :src="user.avatar" alt="Korisnikova slika" class="user-avatar" />
        <p class="user-name">{{ user.name }}</p>
      </div>
      <div class="">
        <p class="user-description">{{ user.description }}</p>
        <p class="user-level">{{ user.level }}</p>
      </div>
      <div class="user-buttons">
        <button @click="showFavoriteRecipes">⭐ Omiljeni recepti</button>
        <button @click="showCalendar">📅 Kalendar</button>
      </div>
    </div>

    <div class="user-posts">
      <ItemCardVue v-for="post in user.posts" :key="post.id" :info="post" />
    </div>
  </div>
</template>

<script>
import ItemCardVue from "@/components/Itemcard.vue";

export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  components: {
    ItemCardVue,
  },
  name: "profil",
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

.prof {
  margin-top: 60px;
}

.user-avatar {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.user-description {
  margin-bottom: 10px;
  padding-top: 30px;
  padding-bottom: 50px;
  padding-left: 150px;
  padding-right: 150px;
  font-size: 20px;
  text-align: justify;
}

.user-buttons button {
  background-color: #a09f9f;
  color: #fff;
  border: none;
  height: 80px;
  width: 160px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 80px;
  margin-left: 80px;
  margin-right: 80px;
  margin-bottom: -50px;
}

.user-posts {
  display: flex;
  justify-content: center;
  margin: 20px;
}

.post-image {
  width: 100px;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
}

.post-title {
  margin-top: 5px;
}
</style>

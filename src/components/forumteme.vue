<template>
  <div class="card">
    <div class="card-body">
      <div class="card-body-container">
        <h5 class="card-title">{{ topic.title }}</h5>
        <p class="card-text">{{ topic.shortDescription }}</p>
        <div class="post-details">
          <span class="created-at">{{ topic.createdAt }}</span>
          <router-link
            :to="topic.route"
            v-if="topic.route && topic.route !== ''"
            class="btn btn-primary"
            >Pogledaj</router-link
          >
          <button v-else disabled class="btn btn-primary">
            Trenutno nedostupno
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    topic: {
      type: Object,
      required: true,
    },
  },
  name: "forumteme",
};
</script>


<style scoped>
.card {
  margin-bottom: 20px;
}
.card-body-container {
  max-height: 200px;
  overflow: hidden;
}
.created-at {
  margin-top: 20px;
}
.btn-primary {
  background-color: rgb(160, 160, 160);
  border: none;
  cursor: pointer;
  padding: 8px 16px;
}

.btn-primary:hover {
  background-color: rgb(128, 117, 114);
}
.post-details {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  color: #555555;
}
</style>

<template>
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
</template>

<script>
export default {
  props: {
    topic: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  margin-bottom: 20px;
}

.post-details {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  color: #555555;
}
</style>

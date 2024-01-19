<template>
  <div class="forum-post">
    <div class="post-header">
      <h4>{{ post.author }}</h4>
      <hr />
    </div>
    <div class="post-content">
      <p>{{ post.text }}</p>
    </div>
    <div class="post-footer">
      <span>{{ post.postDate }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.forum-post {
  width: 100%;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  padding: 15px;
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.post-header h4 {
  margin: 0;
}

.post-content {
  margin-top: 10px;
}

.post-footer {
  text-align: right;
  color: #888;
  font-size: 14px;
}
</style>

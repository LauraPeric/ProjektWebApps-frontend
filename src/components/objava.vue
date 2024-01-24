<template>
  <div class="forumtema">
    <div class="forum-post">
      <div class="post-header">
        <h4>{{ post.author }}</h4>
        <hr />
      </div>
      <div class="post-naslov">
        <p>{{ post.naslov }}</p>
      </div>
      <div class="post-content">
        <p>{{ post.text }}</p>
      </div>
      <div class="post-footer">
        <span>{{ post.postDate }}</span>
      </div>
    </div>
    <div class="comments-section">
      <textarea
        v-model="newComment"
        placeholder="Dodajte novi komentar"
      ></textarea>
      <button class="download-button" @click="addComment">
        Dodaj komentar
      </button>
      <div
        v-for="(comment, index) in post.comments"
        :key="index"
        class="comment"
      >
        <p>{{ comment }}</p>
      </div>
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
  data() {
    return {
      newComment: "",
    };
  },
  methods: {
    addComment() {
      if (this.newComment.trim() !== "") {
        this.post.comments.push(this.newComment.trim());
        this.newComment = "";
      }
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
  font-family: system-ui;
}

.download-button {
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.comment {
  margin: 20px;
  text-align: left;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding-top: 10px;
  padding-left: 10px;
  background-color: #dedede;
}

.comments-section textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.post-header h4 {
  margin: 0;
}

.post-naslov {
  margin-bottom: 40px;
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

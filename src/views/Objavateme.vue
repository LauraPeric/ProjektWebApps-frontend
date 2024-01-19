<template>
  <div class="post-view">
    <h1>Detalji objave</h1>
    <objava :post="post" />
  </div>
</template>

<script>
import Objava from "@/components/objava.vue";

export default {
  components: {
    Objava,
  },
  data() {
    return {
      post: {
        id: 1,
        author: "Ime Prezime",
        text: "Tekst objave...",
        postDate: "2022-01-21",
      },
    };
  },
};
</script>

<style scoped>
.post-view {
  margin: 20px;
  font-family: system-ui;
}
</style>

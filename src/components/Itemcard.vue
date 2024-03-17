<template>
  <div class="row">
    <div class="col-sm-6">
      <div class="card">
        <img
          :src="info.url"
          class="card-img-top"
          :class="{ 'custom-image-size': applyCustomSize }"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">{{ info.cardtitle }}</h5>
          <p class="card-text">{{ info.cardtext }}</p>
          <router-link
            :to="info.route"
            v-if="info.route && info.route !== ''"
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
  props: ["info"],
  name: "ItemCard",
  applyCustomSize: {
    type: Boolean,
    default: false,
  },
};
</script>

<style scoped>
.card-img-top {
  width: 100%;
  height: auto;
}

.custom-image-size {
  width: 338px;
  height: 150px;
  object-fit: cover;
}
.card {
  margin-bottom: 20px;
}

.card-title,
.card-text {
  margin: 10px 0;
}
.image {
  padding-bottom: 2%;
  width: 60%;
  height: 20%;
}

.cardtitle {
  padding-top: 4%;
}
.cardtext {
  padding-top: 4%;
}
.card {
  width: 150%;
  margin-bottom: 10%;
  margin-left: 25%;
  margin-top: 30%;
  border-color: #d7d7d7;
}

.card-body {
  background-color: #d7d7d7;
  padding: 10px;
}

.clickable {
  cursor: pointer;
}

.btn-primary {
  background-color: rgb(160, 160, 160);
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  margin: 7px;
}
</style>

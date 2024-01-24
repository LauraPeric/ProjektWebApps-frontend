<template>
  <div class="recipe-card" ref="recipeCard">
    <div class="header">
      <h2 class="naslov">{{ rec.recipeTitle }}</h2>
      <p class="description">{{ rec.recipeDescription }}</p>
      <p class="author">Recept od korisnika: {{ rec.authorName }}</p>
      <div class="rating">
        <span
          v-for="(star, index) in stars"
          :key="index"
          class="star"
          @click="rateRecipe(index + 1)"
        >
          {{ star }}
        </span>
      </div>
    </div>
    <div class="photo-gallery">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div
            v-for="(photo, index) in rec.photos"
            :key="index"
            :class="{ 'carousel-item': true, active: index === 0 }"
          >
            <img
              class="d-block w-100"
              :src="photo"
              :alt="'Recipe Photo ' + index"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="sr-only">Next</span>
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
      </div>
    </div>

    <div class="recipe-details">
      <div class="gray-box">
        <p>{{ rec.recipeDetails }}</p>
      </div>

      <button class="download-button" @click="generatePDF">
        Preuzmi recept
      </button>
      <div class="decorative-line"></div>

      <div class="comments-section">
        <textarea
          v-model="newComment"
          placeholder="Dodajte novi komentar"
        ></textarea>
        <button class="download-button" @click="addComment">
          Dodaj komentar
        </button>
        <div
          v-for="(comment, index) in rec.comments"
          :key="index"
          class="comment"
        >
          <p>{{ comment }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { firebase, db } from "@/firebase";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default {
  props: ["rec"],
  name: "Rec",
  computed: {
    currentPhoto() {
      return this.rec.photos[this.currentPhotoIndex];
    },
  },
  data() {
    console.log("Photos:", this.rec.photos);

    return {
      currentPhotoIndex: 0,
      newComment: "",
      stars: ["☆", "☆", "☆", "☆", "☆"],
      userId: null,
    };
  },
  methods: {
    changePhoto() {
      this.currentPhotoIndex =
        (this.currentPhotoIndex + 1) % this.rec.photos.length;
    },
    rateRecipe(rating) {
      this.stars = this.stars.map((_, index) => (index < rating ? "★" : "☆"));

      if (this.userId !== null) {
        db.collection("ratings")
          .doc(`${this.userId}_${this.rec.recipeId}`)
          .set({ rating })
          .then(() => {
            console.log("Ocjena je spremljena u Firestore");
          })
          .catch((error) => {
            console.error("Pogreška prilikom spremanja u Firestore", error);
          });
      }
    },
    addComment() {
      if (this.newComment.trim() !== "") {
        this.rec.comments.push(this.newComment.trim());
        this.newComment = "";
      }
    },
    fetchUserRating() {
      if (this.userId !== null) {
        db.collection("ratings")
          .doc(`${this.userId}_${this.rec.recipeId}`)
          .get()
          .then((doc) => {
            if (doc.exists) {
              const rating = doc.data().rating;
              this.stars = this.stars.map((_, index) =>
                index < rating ? "★" : "☆"
              );
            }
          })
          .catch((error) => {
            console.error(
              "Pogreška prilikom dohvaćanja ocjene iz Firestorea",
              error
            );
          });
      }
    },
    generatePDF() {
      const content = this.$refs.recipeCard;

      // html2canvas html za sliku
      html2canvas(content, { scale: 2, useCORS: true }).then((canvas) => {
        // visina i sirina slike
        const pdfWidth = 210;
        const imgWidth = pdfWidth;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        //nova instanca za a4 format
        const pdf = new jsPDF({
          orientation: "portrait",
          unit: "mm",
          format: "a4",
        });

        // uslikana sliak se dodaje na pdf
        pdf.addImage(
          canvas.toDataURL("image/png"),
          "PNG",
          0,
          0,
          imgWidth,
          imgHeight
        );

        // download odf
        pdf.save("COrecept.pdf");
      });
    },
  },
  created() {
    this.currentPhotoIndex = 0;
    this.userId = firebase.auth().currentUser?.uid;

    this.fetchUserRating();
  },
};
</script>



<style scoped>
.naslov {
  margin: 30px;
  font-size: 40px;
}
.recipe-card {
  width: 350%;
  margin-left: 100px;
  padding: 20px;
  border-radius: 10px;
  background-color: #f2f2f2;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: system-ui;
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

.description {
  font-size: 16px;
  text-align: left;
  padding: 40px;
  margin-bottom: -10px;
  text-align: justify;
}

.author {
  font-style: italic;
  margin-left: 40px;
  text-align: left;
  font-size: 20px;
}

.rating {
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-right: 0px;
  height: 10px;
}

.star {
  width: 10px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 50px;
  color: yellow;
}

.photo-gallery {
  margin-top: 80px;
  height: 50%;
  width: 50%;
  margin-left: 300px;
}

.recipe-details {
  margin-top: 50px;
}

.gray-box {
  background-color: #ddd;
  padding: 25px;
  border-radius: 8px;
  margin-bottom: 20px;
  text-align: justify;
}

.download-button {
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.decorative-line {
  height: 1px;
  background-color: black;
  margin: 20px 0;
}

.photo-gallery img {
  height: 50%;
  border-radius: 8px;
  cursor: pointer;
}

.comment {
  margin: 20px;
  text-align: left;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: -2px;
  background-color: #dedede;
}

.comments-section textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>

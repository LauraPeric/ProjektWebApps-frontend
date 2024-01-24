<template>
  <div class="post-view">
    <h1 style="margin-bottom: 40px">Recepti za ukusne smoothieje</h1>
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
        author: "Roben Kaul",
        naslov: "Dobrodošli na moju temu o smoothijima :)",
        text: "Dobrodošli u temu posvećenu ukusnim smoothie receptima! 🍹 Podijelite svoje omiljene kombinacije voća, povrća i dodataka kako bismo stvorili savršene napitke za osvježenje. Kako sudjelovati: Podijelite svoje recepte: Napišite sastojke i korake za pripremu vašeg omiljenog smoothieja. Možda imate posebne trikove ili tajne sastojke koje želite podijeliti s zajednicom. Isprobajte recepte drugih članova: Otvorite se za nove okuse! Isprobajte recepte koje drugi članovi dijele i podijelite svoje dojmove. Postavite pitanja: Ako imate pitanja o pripremi smoothieja ili tražite savjete, slobodno postavite pitanje. Naša zajednica voli pomoći! Fotografije: Ako imate fotografije svojih kreacija, podijelite ih s nama! Svi volimo vidjeti kako izgledaju vaši smoothieji. Savjeti: Koristite svježe voće i povrće za najbolji okus. Dodajte proteinski prah ili chia sjemenke za dodatnu hranjivost. Igrajte se s kombinacijama okusa - eksperimentirajte s voćem, zelenilom i tekućinama.  Svi smo ovdje kako bismo uživali u kulinarskim čarolijama, pa hajde da zajedno istražimo svijet ukusnih smoothieja! 🌈✨",
        postDate: "2022-01-21",
        comments: [
          "Hej Roben, imaš li neki omiljeni smoothie recept koji uvijek uspijeva? 🥤 Razmišljam o dodavanju novih sastojaka, pa bih volio čuti tvoje preporuke!",
          "Ekipa, trebam hitni savjet! Kako napraviti smoothie bez mlijeka? Ponekad mi ponestane, a želio bih alternative. Hvala unaprijed!",
          "Pitanje za sve: Kako često mijenjate svoje smoothie rutine? Tražim nove ideje za varijacije, pa bih volio čuti vaše svakodnevne favorite!",
        ],
        newComment: "",
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

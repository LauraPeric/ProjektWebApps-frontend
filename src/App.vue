<template>
  <div class="app-container">
    <nav id="nav-container" class="navbar navbar-expand-lg">
      <router-link to="/">
        <img src="@/assets/chefonline.png" alt="Logo" class="logo" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav mr-auto">
          <router-link class="nav-link" to="/registracijakilia"
            >Pridruži se</router-link
          >
          <li class="nav-item dropdown">
            <router-link
              class="nav-link dropdown-toggle"
              to="/recepti"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Recepti
            </router-link>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <router-link class="nav-link" to="/samiprofil">Profil</router-link>
          <router-link class="nav-link" to="/onama">O nama</router-link>
          <router-link class="nav-link" to="/forum">Forum</router-link>
          <router-link class="nav-link" to="/info">Informacije</router-link>
          <a href="#" @click.prevent="logout()" class="nav-link">Odjava</a>
          <form class="form-inline my-2 my-lg-0">
            <input
              v-model="store.searchterm"
              class="form-control mr-sm-2"
              type="search"
              placeholder="   Pretraži"
              aria-label="Search"
              style="
                margin-left: 300%;
                padding: 7px;
                border-radius: 20px;
                outline: none;
                box-shadow: none;
                border-color: #999;
              "
            />
          </form>
        </ul>
      </div>
    </nav>

    <router-view />
    <section class="">
      <footer class="bg-body-tertiary text-center text-md-start">
        <div class="container p-4">
          <div class="row">
            <div
              class="col-lg-6 col-md-12 mb-4 mb-md-0"
              style="margin-left: 120px; font-size: 15px"
            >
              <h5 class="naslov" style="font-size: 18px">
                Chef Online - gdje se vaše kulinarske želje pretvaraju u
                stvarnost!
              </h5>
              <p class="tekst">
                Omogučili smo vam mogućnost pohrane recepata radi kasnije
                upotrebe, preuzimanje za offline čitanje, sudjelovanje u
                forumima i brojne druge funkcionalnosti.
              </p>
            </div>
            <div class="col-lg-3 col-md-3 mb-4 mb-md-0">
              <h5 class="naslov" style="font-size: 15px">Linkovi</h5>

              <ul class="list-unstyled mb-0" style="font-size: 15px">
                <li class="mb-1">
                  <router-link to="/recepti" href="#!" style="color: #4f4f4f"
                    >Recepti</router-link
                  >
                </li>
                <li class="mb-1">
                  <router-link to="/info" href="#!" style="color: #4f4f4f"
                    >Informacije</router-link
                  >
                </li>
                <li class="mb-1">
                  <router-link to="/forum" href="#!" style="color: #4f4f4f"
                    >Forum</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="text-center p-3" style="margin-top: -20px">
          © 2020 Copyright:
          <a class="text-dark" href="https://mdbootstrap.com/"
            >MDBootstrap.com</a
          >
        </div>
      </footer>
    </section>
  </div>
</template>

<script>
import store from "@/store";
import router from "@/router";
import axios from "axios";

const backendUserEndpoint = "http://localhost:5000/api/user";

const fetchUserInfo = async () => {
  try {
    const response = await axios.get(backendUserEndpoint);
    const user = response.data;

    // postavlja informacije o korisniku u store
    store.currentUser = user.email;

    // provjeri trenutnu rutu i preusmjeri ako je potrebno
    const currentRoute = router.currentRoute;
    if (currentRoute && currentRoute.meta && !currentRoute.meta.needsUser) {
      router.push({ name: "pocetna" });
    }
  } catch (error) {
    console.error("Greška pri dohvaćanju informacija o korisniku:", error);

    // U slučaju pogreške currentUser na null
    store.currentUser = null;
  }
};
export default {
  name: "app",
  data() {
    return {
      store,
    };
  },

  methods: {
    async logout() {
      const userToken = localStorage.getItem("userToken");

      if (userToken) {
        try {
          const response = await axios.post("http://localhost:5000/logout");
          console.log("Uspješna odjava", response.data);

          // Briše token iz lokalnog spremišta
          localStorage.removeItem("userToken");

          // Redirekcija nakon odjave
          this.$router.push({ name: "pocetna" });
        } catch (error) {
          console.error("Došlo je do greške pri odjavi", error);
        }
      } else {
        console.log("Korisnik nije prijavljen, ne može se odjaviti.");
      }
    },
  },
};
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0c0c0c;
  display: flex;
  flex-direction: column;
  align-items: center;
}

nav {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  width: 98.95vw;
  height: 90px;

  .logo-container {
    margin-right: auto;
  }

  .nav-links {
    ul {
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        display: inline;
        margin-right: 10px;
      }

      a {
        font-weight: bold;
        color: rgb(255, 255, 255);
        text-decoration: none !important;
        border-bottom: none;

        &.router-link-exact-active {
          color: #42b983;
        }
      }
    }
  }
}
.row {
  padding-top: 40px;
}
.logo {
  max-width: 100px;
  height: 90px;
}
.col-lg-3 {
  margin-left: 15%;
}

.naslov {
  padding-bottom: 10px;
  margin-top: -20px;
}

.tekst {
  text-align: justify;
}

.material-icons {
  font-size: 20px;
  margin-left: 10px;
  color: gray;
  position: absolute;
  right: 10px;
}
.router-link {
  text-decoration: none;
  color: #ffffff;
}
</style>
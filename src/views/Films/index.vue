<template>
  <div class="home">
    <h1>Films</h1>
    <FilmsSearch :filters="filters" @update:filters="onFiltersUpdate" />
    <div class="main-container">
      <Loader v-if="loading" />
      <FilmsList v-else :films="films" />
    </div>
  </div>
</template>
<script>
import FilmsSearch from "./FilmsSearch";
import FilmsList from "./FilmsList";
import Loader from "@/components/Loader";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Home",
  components: {
    FilmsSearch,
    FilmsList,
    Loader
  },
  data() {
    return {
      loading: false,
      filters: {
        title: null
      }
    };
  },
  computed: {
    ...mapGetters({
      films: "films/films"
    })
  },

  async beforeMount() {
    this.loadFilms();
  },
  methods: {
    ...mapActions("films", ["fetchFilms"]),
    onFiltersUpdate(filters) {
      this.loadFilms(filters);
    },
    async loadFilms(filters = {}) {
      this.loading = true;
      try {
        await this.fetchFilms({
          ...filters
        });
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

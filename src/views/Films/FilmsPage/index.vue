<template>
  <div class="film">
    <h1>Film information</h1>
    <p><strong>Name:</strong> {{ film.title }}</p>
    <p><strong>Description:</strong> {{ film.opening_crawl }}</p>
    <p><strong>Producer:</strong> {{ film.producer }}</p>
    <p><strong>Release:</strong> {{ film.release_date }}</p>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "FilmsPage",
  data() {
    return {
      loading: false
    };
  },
  async mounted() {
    this.id = this.$route.params.id;
  },
  computed: {
    ...mapGetters({
      film: "films/film"
    })
  },
  async beforeMount() {
    const id = this.$route.params.id;
    this.loadFilm(id);
  },
  methods: {
    ...mapActions("films", ["filmsById"]),
    async loadFilm(id) {
      this.loading = true;
      try {
        await this.filmsById(id);
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>
<style lang="scss">
.film {
  text-align: left;
  p {
    font-size: 14px;
    line-height: 18px;
    padding: 5px 0;
  }
}
</style>

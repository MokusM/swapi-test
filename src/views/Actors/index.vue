<template>
  <div class="home">
    <h1>Actors</h1>
    <ActorsSearch :filters="filters" @update:filters="onFiltersUpdate" />
    <ActorsList :actors="actors" />
  </div>
</template>
<script>
import ActorsSearch from "./ActorsSearch";
import ActorsList from "./ActorsList";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Actors",
  components: {
    ActorsSearch,
    ActorsList
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
      actors: "actors/actors"
    })
  },

  async beforeMount() {
    this.loadActors();
  },
  methods: {
    ...mapActions("actors", ["fetchActors"]),
    onFiltersUpdate(filters) {
      this.loadActors(filters);
    },
    async loadActors(filters = {}) {
      this.loading = true;
      try {
        await this.fetchActors({
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

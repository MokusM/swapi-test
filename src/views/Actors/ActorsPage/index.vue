<template>
  <div>
    {{ actor.title }}
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ActorsPage",
  data() {
    return {
      loading: false
    };
  },
  computed: {
    ...mapGetters({
      actor: "actors/actor"
    })
  },
  async beforeMount() {
    const id = this.$route.params.id;
    this.loadFilm(id);
  },
  methods: {
    ...mapActions("actors", ["actorsById"]),
    async loadFilm(id) {
      this.loading = true;
      try {
        await this.actorsById(id);
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

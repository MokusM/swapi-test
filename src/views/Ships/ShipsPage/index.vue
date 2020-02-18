<template>
  <div>
    {{ ship.title }}
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
      film: "ships/ship"
    })
  },
  async beforeMount() {
    const id = this.$route.params.id;
    this.loadFilm(id);
  },
  methods: {
    ...mapActions("ships", ["shipsById"]),
    async loadFilm(id) {
      this.loading = true;
      try {
        await this.shipsById(id);
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

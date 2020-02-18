<template>
  <div class="home">
    <h1>Ships</h1>
    <ShipsSearch :filters="filters" @update:filters="onFiltersUpdate" />
    <div class="main-container">
      <Loader v-if="loading" />
      <ShipsList v-else :ships="ships" />
    </div>
  </div>
</template>
<script>
import ShipsSearch from "./ShipsSearch";
import ShipsList from "./ShipsList";
import Loader from "@/components/Loader";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Ships",
  components: {
    ShipsSearch,
    ShipsList,
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
      ships: "ships/ships"
    })
  },

  async beforeMount() {
    this.loadShips();
  },
  methods: {
    ...mapActions("ships", ["fetchShips"]),
    onFiltersUpdate(filters) {
      this.loadShips(filters);
    },
    async loadShips(filters = {}) {
      this.loading = true;
      try {
        await this.fetchShips({
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

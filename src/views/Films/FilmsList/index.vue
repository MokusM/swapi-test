<template>
  <ul class="film-list">
    <FilmsItem v-for="film in films" :key="film.id" :film="film" />
  </ul>
</template>
<script>
import FilmsItem from "./FilmsItem";
export default {
  name: "FilmsList",

  components: {
    FilmsItem
  },

  props: {
    films: {
      type: Array,
      default: () => ({}),
      required: true
    }
  }
};
</script>

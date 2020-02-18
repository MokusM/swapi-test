<template>
  <ul>
    <ActorsItem v-for="actor in actors" :key="actor.id" :actor="actor" />
  </ul>
</template>
<script>
import ActorsItem from "./ActorsItem";
export default {
  name: "ActorsList",

  components: {
    ActorsItem
  },

  props: {
    actors: {
      type: Array,
      default: () => ({}),
      required: true
    }
  }
};
</script>

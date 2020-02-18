<template>
  <ul>
    <ShipsItem v-for="ship in ships" :key="ship.id" :ship="ship" />
  </ul>
</template>
<script>
import ShipsItem from "./ShipsItem";
export default {
  name: "ShipsList",

  components: {
    ShipsItem
  },

  props: {
    ships: {
      type: Array,
      default: () => ({}),
      required: true
    }
  }
};
</script>

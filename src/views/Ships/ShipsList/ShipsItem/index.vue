<template>
  <li class="">
    <router-link :to="'/ships/' + ship.episode_id">
      {{ ship.name }}
    </router-link>
  </li>
</template>
<script>
export default {
  name: "ShipsItem",
  props: {
    ship: {
      type: Object,
      default: () => ({}),
      required: true
    }
  },
  methods: {}
};
</script>

<template>
  <li class="">
    {{ ship.name }}
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

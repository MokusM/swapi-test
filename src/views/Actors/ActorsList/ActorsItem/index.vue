<template>
  <li class="">
    {{ actor.name }}
  </li>
</template>
<script>
export default {
  name: "ActorsItem",
  props: {
    actor: {
      type: Object,
      default: () => ({}),
      required: true
    }
  },
  methods: {}
};
</script>

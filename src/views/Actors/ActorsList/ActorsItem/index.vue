<template>
  <li class="">
    <router-link :to="'/actors/' + actor.episode_id">
      {{ actor.name }}
    </router-link>
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

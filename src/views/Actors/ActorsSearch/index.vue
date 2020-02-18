<template>
  <div class="hello">
    <div class="search">
      <form>
        <input
          v-model="innerFilters.title"
          type="text"
          class="search__input"
          @keyup="updateFilters"
        />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  props: {
    filters: {
      type: Object,
      default: () => ({}),
      required: true
    }
  },
  data() {
    return {
      innerFilters: {
        title: ""
      }
    };
  },
  watch: {
    filters: {
      immediate: true,
      handler(filters) {
        this.innerFilters = { ...filters };
      }
    }
  },
  methods: {
    updateFilters() {
      this.$emit("update:filters", this.innerFilters);
    }
  }
};
</script>

<template>
  <div class="hello">
    <div class="search">
      <form>
        <input type="text" class="search__input" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  methods: {}
};
</script>
<style lang="scss">
.search {
  &__input {
    width: 100%;
    max-width: 600px;
    border: 1px solid #000;
    padding: 0 15px;
    font-size: 18px;
    line-height: 22px;
    font-weight: 700;
    height: 50px;
    text-align: center;
  }
}
</style>

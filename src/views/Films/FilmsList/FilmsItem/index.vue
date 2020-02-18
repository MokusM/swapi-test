<template>
  <li class="film-list__item">
    <router-link :to="'/films/' + film.episode_id" class="film-list__name">
      {{ film.title }}
    </router-link>
    <p class="film-list__desription">
      <strong>Description:</strong> {{ film.opening_crawl }}
    </p>
    <p class="film-list__producer">
      <strong>Producer:</strong> {{ film.producer }}
    </p>
    <p class="film-list__release">
      <strong>Release:</strong> {{ film.release_date }}
    </p>
  </li>
</template>
<script>
export default {
  name: "FilmsItem",
  props: {
    film: {
      type: Object,
      default: () => ({}),
      required: true
    }
  }
};
</script>
<style lang="scss">
.film-list {
  text-align: left;
  &__item {
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    &:last-child {
      margin-bottom: 0;
      border-bottom: none;
    }
  }
  &__name {
    display: inline-block;
    color: #000;
    border-bottom: 1px solid #000;
    font-weight: 700;
    &:hover {
      border-bottom-color: transparent;
    }
  }
  &__desription {
    padding: 15px 0 10px;
    font-size: 14px;
    line-height: 20px;
  }
  &__producer {
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 10px;
  }
  &__release {
    font-size: 14px;
    line-height: 20px;
  }
}
</style>

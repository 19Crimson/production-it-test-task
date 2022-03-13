<template>
  <main class="partners">
    <div class="partners__title">
      <span>
        Партнеры
      </span> <span class="partners__count" > ({{ partnersCount }}) </span>
    </div>
    <partners-list/>
    <div class="partners__bottom">
      <span
        class="partners__btn partners__btn--show-more"
        @click="increaseItemsPerPage"
      > Показать еще </span>
      <div class="partners__pagination">
        <img
          class="partners__btn" src="../assets/images/arrow_left.png"
          @click="setPrevPage"
        />
        <span
          v-for="page in pagesCount"
          :key="page"
          class="partners__btn"
          :class="{'partners__btn--active': currentPage === page}"
          @click="setPage(page)"
        > {{ page }} </span>
        <img
          class="partners__btn" src="../assets/images/arrow_right.png"
          @click="setNextPage"
        />
      </div>
    </div>
  </main>
</template>

<script>
import PartnersList from './PartnersList.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'PartnersComponent',
  components: {
    PartnersList,
  },
  computed: {
    ...mapGetters(['pagesCount', 'currentPage']),
    partnersCount() {
      return this.$store.getters.partners.length
    }
  },
  methods: {
    ...mapActions([
      'setPage',
      'setPrevPage',
      'setNextPage',
      'increaseItemsPerPage'
    ]),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.partners {
  width: 100%;
  height: 100%;
  font-family: "Inter";
  text-align: left;
  padding-top: 32px;
  padding-right: 56px;
  padding-bottom: 20px;
  padding-left: 64px;
}
.partners__title {
  color: #333333;
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 24px;
  margin-bottom: 28px;
}
.partners__count {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #BDBDBD;
}
.partners__bottom {
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
}
.partners__btn {
  cursor: pointer;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 16px;
  margin: 0 26px;
  color: #828282;
}
.partners__btn--active {
  color: #741D7B;
}
.partners__btn--show-more {
  color: #741D7B;
  margin: 0;
}
.partners__pagination {
  display: flex;
  justify-content: space-between;
}
</style>

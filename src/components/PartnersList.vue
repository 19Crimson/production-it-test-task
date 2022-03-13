<template>
  <div class="partners-list">
    <div class="partners-list__header">
      <div class="partners-list__date">
        <span> Дата регистрации </span>
        <img
          src="../assets/images/sort_icon.png"
          :class="{'partners-list__sorter-asc': sortByAsc}"
          @click="changeSort"
        />
      </div>
      <span> Имя </span>
      <span> Название компании </span>
      <span> Телефон </span>
      <span> E-mail </span>
      <span> Статус </span>
    </div>
    <div class="partners-list__items" v-if="isReady">
      <PartnersItem
        v-for="item, index in currentPagePartners"
        :key="index"
        :partner="item"
        @change="onChangeStatus"
      />
    </div>
  </div>
</template>

<script>
import PartnersItem from './PartnersItem.vue';
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'PartnersList',
  components: {
    PartnersItem,
  },
  data() {
    return {
      isReady: true,
    }
  },
  computed: {
    ...mapGetters(['sortByAsc', 'currentPagePartners']),
  },
  methods: {
    async onChangeStatus(param) {
      this.isReady = false;
      if (param.status === 'active') {
        await this.blockPartner(param.id);
      } else if (param.status === 'blocked') {
        await this.unblockPartner(param.id);
      }
      await this.getPartners();
      this.isReady = true;
    },
    ...mapActions([
      'getPartners',
      'blockPartner',
      'unblockPartner',
      'changeSort'
    ])
  },
  async mounted() {
    await this.getPartners();
  }
}
</script>

<style scoped>
.partners-list {
  background: white;
  width: 100%;
  height: 100%;
  font-family: "Inter";
  text-align: left;
}
.partners-list__header {
  display: grid;
  padding: 24px;
  grid-template-columns: .145fr .204fr .184fr .133fr .18fr .154fr;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #333333;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.06);
}
.partners-list__date img{
  cursor: pointer;
  margin-left: 12px;
  margin-bottom: 2px;
}
.partners-list__sorter-asc {
  transform: rotate(180deg);
}
</style>

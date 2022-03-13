<template>
  <div class="partners-item">
    <div class="partners-item__field"> {{ createdAt }} </div>
    <div class="partners-item__field"> {{ partner.name }} </div>
    <div class="partners-item__field"> {{ partner.company.name }} </div>
    <div class="partners-item__field"> {{ partner.phone }} </div>
    <div class="partners-item__field"> {{ partner.email }} </div>
    <div class="partners-item__status-wrapper">
      <partner-status :isActive="partner.status === 'active'"/>
    </div>
    <div
      class="partners-item__change-status-btn"
      @click="onChangeStatus"
    >
      <img :src="statusButtonSrc"/>
    </div>
  </div>
</template>

<script>
import PartnerStatus from './PartnerStatus.vue';

export default {
  name: 'PartnersItem',
  components: {
    PartnerStatus,
  },
  props: {
    partner: Object,
  },
  computed: {
    createdAt() {
      const date = new Date(this.partner.created);
      function pad(n) { return n < 10 ? "0" + n : n; }
      const day = pad(date.getUTCDate());
      const month = pad(date.getMonth() + 1);
      const year = pad(date.getUTCFullYear());
      return `${day}.${month}.${year}`
    },
    statusButtonSrc() {
      return this.partner.status === 'active'
        ? require('../assets/images/block.png')
        : require('../assets/images/unblock.png')
    }
  },
  methods: {
    onChangeStatus() {
      const param = {
        id: this.partner.external_id,
        status: this.partner.status
      }
      this.$emit('change', param)
    }
  }
}
</script>

<style scoped>
.partners-item {
  position: relative;
  background: white;
  font-family: "Inter";
  text-align: left;
  display: grid;
  padding-right: 24px;
  padding-left: 24px;
  height: 58px;
  grid-template-columns: .145fr .204fr .184fr .133fr .18fr .154fr;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 17px;
  color: #333333;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.06);
}
.partners-item:hover  {
  background: #F3F3FF;
}
.partners-item__field {
  display: flex;
  align-items: center;
  white-space: normal;
  word-break: break-word;
  max-width: 196px;
}
.partners-item__status-wrapper {
  max-width: 118px;
  max-height: 30px;
  margin: auto 0;
}
.partners-item__change-status-btn {
  position: absolute;
  right: 24px;
  top: 17px;
  cursor: pointer;
  display: none;
}
.partners-item:hover .partners-item__change-status-btn {
  display: block;
}
</style>

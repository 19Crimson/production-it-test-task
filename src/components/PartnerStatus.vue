<template>
  <div :class="statusClass">
    {{ statusText }}
  </div>
</template>

<script>
export default {
  name: 'PartnersItem',
  props: {
    isActive: Boolean,
  },
  computed: {
    statusClass() {
      return {
        'partner-status': true,
        'partner-status--active': this.isActive
      }
    },
    statusText() {
      return this.isActive
        ? 'активен'
        : 'заблокирован'
    }
  }
}
</script>

<style scoped>
.partner-status {
  width: 100%;
  height: 100%;
  text-align: center;
  background: #FFE2E2;
  border-radius: 20px;
  color: #EB5757;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
}
.partner-status--active {
  background: #F3F3FF;
  color: #99579E;
}
</style>

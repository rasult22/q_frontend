<script setup>
</script>

<template>
  <div class="base-card">
    <div class="base-card__heading">
      <div class="base-card__heading-left">
        <slot name="heading-left"></slot>
      </div>
      <div class="base-card__heading-right">
        <slot name="heading-right"></slot>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>

.base-card {
  padding: 16px;
  box-shadow: 0px 4px 10px 0px #0000001A;
  border-radius: 8px;
  background: #fff;
  &__heading {
    display: flex;
    justify-content: space-between;
    &-left {
      font-family: Roboto;
      font-size: 18px;
      font-weight: 600;
      line-height: 21px;
      letter-spacing: -0.01em;
      text-align: left;
    }
    &-right {
      font-family: Roboto;
      font-size: 12px;
      font-weight: 400;
      line-height: 14px;
      letter-spacing: -0.01em;
      text-align: left;
      color: #BDBDBD;
    }
  }
}

</style>

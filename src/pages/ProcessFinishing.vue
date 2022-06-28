<script setup>
import BaseButton from 'src/ui/buttons/base-button.vue'
import ImageConstructor from 'src/features/image-constructor.vue'

const onClick = () => {
  // some
}
</script>
<template>
  <div class="process-finishing">
    <ImageConstructor imageMode="read" />
    <div class="process-finishing__text">
      <p>
        А у нас новая услуга!
      </p>
      <p>
        Встречайте (наименование процедуры)!
        Время процедуры: (продолжительность процедуры) Инвентарь: (всё, что необходимо для процедуры) Мастер: (мастер процедуры)
        Цена: (цена процедуры)
        После этой процедуры вы будете сиять от удовольствия!
      </p>
      <p>
        Спешите записаться! У нас цены действительно ниже обычных.
      </p>
    </div>
    <BaseButton @click="onClick" class="process-finishing__btn">
      Опубликовать в Instagram
    </BaseButton>
  </div>
</template>

<style lang="scss" scoped>
.process-finishing {
  font-family: Roboto;
  position: relative;
  padding-bottom: 91px;
  &__text {
    padding: 16px;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: -0.01em;
    text-align: left;
  }
  &__btn {
    display: block;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
}
</style>

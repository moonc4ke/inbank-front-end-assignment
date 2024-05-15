<script setup>
import LoanPromotion from '@/components/LoanPromotion.vue';
import LoanPromotionBanner from '@/components/LoanPromotionBanner.vue';
</script>

<template>
  <main>
    <div class="max-w-[1456px] mx-auto px-4 flex flex-col xl:flex-row-reverse xl:items-start xl:h-[840px] content-center justify-center mb-10 xl:mb-20">
      <LoanPromotionBanner class="mb-4 xl:mb-0" />
      <LoanPromotion class="xl:mr-6" />
    </div>
  </main>
</template>

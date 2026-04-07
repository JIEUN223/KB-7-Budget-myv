<script setup>
import { storeToRefs } from 'pinia'
import { useTransactionStore } from '@/stores/transaction'

const emit = defineEmits(['open-date', 'open-category'])

const transactionStore = useTransactionStore()
const { hasDateFilter, hasCategoryFilter } = storeToRefs(transactionStore)
</script>

<template>
  <div class="filter-bar" role="toolbar" aria-label="거래 필터">
    <button
      type="button"
      class="filter-bar__btn"
      :class="{ 'filter-bar__btn--active': hasDateFilter }"
      @click="emit('open-date')"
    >
      <span class="filter-bar__btn-text">날짜</span>
      <span v-if="hasDateFilter" class="filter-bar__dot" aria-hidden="true" />
    </button>
    <button
      type="button"
      class="filter-bar__btn"
      :class="{ 'filter-bar__btn--active': hasCategoryFilter }"
      @click="emit('open-category')"
    >
      <span class="filter-bar__btn-text">카테고리</span>
      <span v-if="hasCategoryFilter" class="filter-bar__dot" aria-hidden="true" />
    </button>
  </div>
</template>

<style scoped>
.filter-bar {
  display: flex;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
}

.filter-bar__btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.5rem 0.875rem;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #4b5563;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 9999px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

.filter-bar__btn--active {
  border-color: #93c5fd;
  background: #eff6ff;
  color: #1d4ed8;
}

.filter-bar__dot {
  position: absolute;
  top: 0.25rem;
  right: 0.35rem;
  width: 0.375rem;
  height: 0.375rem;
  border-radius: 50%;
  background: #2563eb;
}
</style>

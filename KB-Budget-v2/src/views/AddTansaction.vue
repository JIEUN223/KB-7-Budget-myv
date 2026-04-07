<script setup>
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useCategoryStore } from '../stores/category'

const router = useRouter()
const categoryStore = useCategoryStore()
const type = ref('expense')
const selectedCategory = ref('')

const filteredCategories = computed(() =>
  categoryStore.categories.filter((category) => category.type === type.value),
)

watch(type, () => {
  selectedCategory.value = ''
})

function goHome() {
  router.push({ name: 'home' })
}
</script>

<template>
  <section class="entry-page">
    <h2 class="title">지출/수익 추가</h2>

    <form class="entry-form">
      <fieldset class="type-group">
        <legend class="field-label">유형</legend>
        <label class="type-option">
          <input v-model="type" type="radio" value="expense" name="type" />
          지출
        </label>
        <label class="type-option">
          <input v-model="type" type="radio" value="income" name="type" />
          수익
        </label>
      </fieldset>

      <div class="field-row">
        <label class="field-label" for="amount">금액</label>
        <input id="amount" type="number" placeholder="금액 입력" class="field-input" />
      </div>

      <div class="field-row">
        <label class="field-label" for="category">카테고리</label>
        <select id="category" v-model="selectedCategory" class="field-input">
          <option disabled value="">카테고리 선택</option>
          <option
            v-for="category in filteredCategories"
            :key="category.id"
            :value="category.name"
          >
            {{ category.name }}
          </option>
        </select>
      </div>

      <div class="field-row">
        <label class="field-label" for="memo">메모</label>
        <textarea id="memo" rows="3" placeholder="메모 입력" class="field-input memo-input" />
      </div>

      <div class="field-row">
        <label class="field-label" for="date">날짜</label>
        <input id="date" type="date" class="field-input" />
      </div>
    </form>

    <div class="action-row">
      <button type="button" class="action-btn save-btn" @click="goHome">저장</button>
      <button type="button" class="action-btn delete-btn" @click="goHome">삭제</button>
    </div>
  </section>
</template>

<style scoped>
.entry-page {
  max-width: 420px;
  margin: 0 auto;
  padding: 1rem;
}

.title {
  margin: 0 0 1rem;
  font-size: 1.25rem;
}

.entry-form {
  display: grid;
  gap: 0.875rem;
  padding: 1rem;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
}

.type-group {
  margin: 0;
  padding: 0;
  border: 0;
}

.type-option {
  margin-right: 1rem;
  font-size: 0.95rem;
}

.field-row {
  display: grid;
  gap: 0.375rem;
}

.field-label {
  font-size: 0.875rem;
  color: #4b5563;
}

.field-input {
  width: 100%;
  box-sizing: border-box;
  min-height: 2.5rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.95rem;
  background: #fff;
}

.memo-input {
  min-height: 5rem;
  resize: vertical;
}

.action-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.625rem;
  margin-top: 0.875rem;
}

.action-btn {
  min-height: 2.625rem;
  border: 0;
  border-radius: 0.625rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: #fff;
}

.save-btn {
  background: #2563eb;
}

.delete-btn {
  background: #ef4444;
}
</style>
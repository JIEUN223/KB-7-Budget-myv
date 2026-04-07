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
  <section>
    <h2>지출/수익 추가</h2>

    <form>
      <fieldset>
        <legend>유형</legend>
        <label>
          <input v-model="type" type="radio" value="expense" name="type" />
          지출
        </label>
        <label>
          <input v-model="type" type="radio" value="income" name="type" />
          수익
        </label>
      </fieldset>

      <div>
        <label for="amount">금액</label>
        <input id="amount" type="number" placeholder="금액 입력" />
      </div>

      <div>
        <label for="category">카테고리</label>
        <select id="category" v-model="selectedCategory">
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

      <div>
        <label for="memo">메모</label>
        <textarea id="memo" rows="3" placeholder="메모 입력" />
      </div>

      <div>
        <label for="date">날짜</label>
        <input id="date" type="date" />
      </div>
    </form>

    <div>
      <button type="button" @click="goHome">저장</button>
      <button type="button" @click="goHome">삭제</button>
    </div>
  </section>
</template>
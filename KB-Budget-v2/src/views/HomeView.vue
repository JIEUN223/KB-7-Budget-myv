<script setup>
import { ref, computed } from 'vue';
import { storeToRefs } from 'pinia';
import Filter from '@/components/Filter.vue';
import FilterModal from '@/components/FilterModal.vue';
import Transaction from '@/components/Transaction.vue';
import AddTransactionFab from '@/components/AddTransactionFab.vue'
import ReceiptPledge from '@/components/ReceiptPledge.vue'
// import FlexPanel from '@/components/FlexPanel.vue'       // 플렉스형
// import SocialPanel from '@/components/SocialPanel.vue'   // 사회형
// import DripPanel from '@/components/DripPanel.vue'       // 가랑비형
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const { currentUser } = storeToRefs(userStore)

/* 유형별 전용 컴포넌트 맵 — 컴포넌트 준비되면 import 후 여기에 추가 */
const TYPE_COMPONENT_MAP = {
  '계획형': ReceiptPledge,
  '플렉스형': null,   // FlexPanel
  '사회형': null,     // SocialPanel
  '가랑비형': null,   // DripPanel
}

const typeComponent = computed(() =>
  TYPE_COMPONENT_MAP[currentUser.value?.spendingType] ?? null
)

const filterModalOpen = ref(false);
const filterFocusSection = ref('date');

function openFilter(section) {
  filterFocusSection.value = section;
  filterModalOpen.value = true;
}
</script>

<template>
  <div class="home">
    <!-- 유형별 전용 패널 -->
    <component :is="typeComponent" v-if="typeComponent" />

    <Filter
      @open-date="openFilter('date')"
      @open-category="openFilter('category')"
    />
    <Transaction />
    <FilterModal 
      v-model="filterModalOpen"
      :focus-section="filterFocusSection"
    />
    <AddTransactionFab />
  </div>
</template>

<style scoped>
.home {
  /* app-main의 스크롤 영역을 자연스럽게 채움 */
  display: flex;
  flex-direction: column;
  padding: 1rem 0 1.25rem;
  background: var(--color-bg-page);
}
</style>

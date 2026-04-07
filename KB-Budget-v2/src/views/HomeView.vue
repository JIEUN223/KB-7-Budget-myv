<script setup></script>

<template>
  <div>
    <p>여기에 가계부 화면을 연결하면 됩니다.</p>
    <RouterLink :to="{ name: 'add-transaction' }">지출/수익 추가하기</RouterLink>
  </div>
</template>

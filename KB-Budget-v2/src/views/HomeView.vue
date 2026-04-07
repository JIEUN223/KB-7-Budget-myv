<script setup></script>

<template>
  <section class="home-page">
    <h2 class="title">홈</h2>

    <div class="home-card">
      <p class="home-message">여기에 가계부 요약 정보를 연결하면 됩니다.</p>
    </div>

    <RouterLink :to="{ name: 'add-transaction' }" class="fab-link" aria-label="지출/수익 추가">
      +
    </RouterLink>
  </section>
</template>

<style scoped>
.home-page {
  max-width: 420px;
  margin: 0 auto;
  padding: 1rem;
}

.title {
  margin: 0 0 1rem;
  font-size: 1.25rem;
}

.home-card {
  padding: 1rem;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
}

.home-message {
  margin: 0 0 0.875rem;
  color: #4b5563;
  line-height: 1.5;
  font-size: 0.9375rem;
}

.fab-link {
  position: fixed;
  right: max(1rem, calc((100vw - 430px) / 2 + 1rem));
  bottom: calc(4.5rem + env(safe-area-inset-bottom));
  z-index: 10;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3.25rem;
  height: 3.25rem;
  border-radius: 9999px;
  text-decoration: none;
  background: #2563eb;
  color: #fff;
  font-size: 1.75rem;
  line-height: 1;
  font-weight: 400;
  box-shadow:
    0 10px 20px rgba(37, 99, 235, 0.28),
    0 2px 6px rgba(0, 0, 0, 0.14);
}
</style>

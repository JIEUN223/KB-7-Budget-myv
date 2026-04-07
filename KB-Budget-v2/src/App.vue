<script setup></script>

<template>
  <div class="app-root">
    <div class="app-shell" role="application">
      <header class="app-header">
        <h1 class="app-title">가계부</h1>
      </header>
      <main class="app-main">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style>
html,
body {
  margin: 0;
  height: 100%;
  -webkit-tap-highlight-color: transparent;
}

#app {
  height: 100%;
}

body {
  font-family:
    'Pretendard Variable',
    Pretendard,
    -apple-system,
    BlinkMacSystemFont,
    system-ui,
    'Segoe UI',
    'Apple SD Gothic Neo',
    'Noto Sans KR',
    sans-serif;
  font-size: 16px;
  color: #111827;
  background: #e5e7eb;
}
</style>

<style scoped>
.app-root {
  min-height: 100%;
  min-height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: stretch;
  padding: 0;
  box-sizing: border-box;
}

.app-shell {
  width: 100%;
  max-width: 430px;
  min-height: 100%;
  min-height: 100dvh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: #f9fafb;
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.06),
    0 12px 40px rgba(0, 0, 0, 0.08);
}

@media (max-width: 430px) {
  .app-shell {
    box-shadow: none;
    max-width: none;
  }
}

.app-header {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 3.25rem;
  padding: 0.625rem 1rem;
  padding-top: max(0.625rem, env(safe-area-inset-top));
  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;
}

.app-title {
  margin: 0;
  font-size: 1.0625rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.3;
}

.app-main {
  flex: 1;
  min-height: 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
</style>

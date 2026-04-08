<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/user'

const router = useRouter()
const userStore = useUserStore()

const loginId = ref('')
const password = ref('')
const isLoading = ref(false)

async function handleLogin() {
  if (!loginId.value || !password.value) return
  isLoading.value = true
  const success = await userStore.login(loginId.value, password.value)
  isLoading.value = false
  if (success) {
    router.push('/')
  }
}
</script>

<template>
  <div class="login-page">
    <div class="login-card">
      <h1 class="title">가계부</h1>
      <p class="subtitle">로그인하고 시작하세요</p>

      <form class="form" @submit.prevent="handleLogin">
        <div class="field">
          <label for="loginId">아이디</label>
          <input
            id="loginId"
            v-model="loginId"
            type="text"
            placeholder="아이디를 입력하세요"
            autocomplete="username"
          />
        </div>

        <div class="field">
          <label for="password">비밀번호</label>
          <input
            id="password"
            v-model="password"
            type="password"
            placeholder="비밀번호를 입력하세요"
            autocomplete="current-password"
          />
        </div>

        <!-- 에러 메시지 -->
        <p v-if="userStore.loginError" class="error-msg">{{ userStore.loginError }}</p>

        <button type="submit" class="login-btn" :disabled="isLoading">
          {{ isLoading ? '로그인 중...' : '로그인' }}
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.login-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #e5e7eb;
  padding: 24px;
  box-sizing: border-box;
}

.login-card {
  background: #fff;
  border-radius: 16px;
  padding: 40px 32px;
  width: 100%;
  max-width: 360px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.title {
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 4px;
  color: #111827;
}

.subtitle {
  font-size: 14px;
  color: #6b7280;
  margin: 0 0 32px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.field label {
  font-size: 14px;
  font-weight: 500;
  color: #374151;
}

.field input {
  padding: 12px 14px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 15px;
  outline: none;
  transition: border-color 0.15s;
}

.field input:focus {
  border-color: #3b82f6;
}

.error-msg {
  font-size: 13px;
  color: #ef4444;
  margin: 0;
}

.login-btn {
  margin-top: 8px;
  padding: 14px;
  background: #3b82f6;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.15s;
}

.login-btn:hover:not(:disabled) {
  background: #2563eb;
}

.login-btn:disabled {
  background: #93c5fd;
  cursor: not-allowed;
}
</style>

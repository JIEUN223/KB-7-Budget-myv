import { ref } from 'vue'
import { defineStore } from 'pinia'
import { fetchUserByLoginId } from '../api/users'

export const useUserStore = defineStore('user', () => {
  const currentUser = ref(null)
  const loginError = ref(null)

  /**
   * loginId와 password로 로그인을 시도합니다.
   * @param {string} loginId - 사용자 아이디
   * @param {string} password - 비밀번호
   * @returns {boolean} 로그인 성공 여부
   */
  async function login(loginId, password) {
    loginError.value = null
    try {
      const user = await fetchUserByLoginId(loginId)
      if (!user || user.password !== password) {
        loginError.value = '아이디 또는 비밀번호가 올바르지 않습니다.'
        return false
      }
      currentUser.value = user
      return true
    } catch (e) {
      loginError.value = '로그인 중 오류가 발생했습니다.'
      console.error(e)
      return false
    }
  }

  /** 로그아웃: 현재 유저 정보를 초기화합니다. */
  function logout() {
    currentUser.value = null
    loginError.value = null
  }

  return {
    currentUser,
    loginError,
    login,
    logout,
  }
})

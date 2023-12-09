import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        userId: localStorage.getItem('userId') || null
    }),
    actions: {
        login(userId) {
            this.userId = userId;
            localStorage.setItem('userId', userId);
        },
        logout() {
            this.userId = null;
            localStorage.removeItem('userId');
        }
    }
});

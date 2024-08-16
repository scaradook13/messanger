<template>
    <div>
        <header class="bg-blue-900 ">
            <nav class="flex justify-between w-9/12 p-6 mx-auto text-gray-50">
                <div>
                    <router-link to="/">MESSANGER</router-link>
                </div>
                <ul v-if="!isAuthenticated" class="flex items-center gap-6">
                    <li>
                        <router-link to="/login">Login</router-link>
                    </li>
                    <li>
                        <router-link to="/register">Register</router-link>
                    </li>
                </ul>
                <ul v-if="isAuthenticated">
                    <li>
                        <button @click="logout">Logout</button>
                    </li>

                </ul>
            </nav>

        </header>
    </div>
</template>

<script setup>
import { useAuth } from '@/store/authStore';
import { useRouter } from 'vue-router'
const { isAuthenticated, checkAuth } = useAuth()
const router = useRouter()

const logout = async () => {

    localStorage.removeItem('jwt')
    await checkAuth()
    router.push('/login')
}
</script>

<style lang="scss" scoped></style>
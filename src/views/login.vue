<template>
    <div>
        <div class="w-full max-w-xs m-auto">
            <form @submit.prevent="login" class="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">   
                <div class="mb-4">
                    <label class="block mb-2 text-sm font-bold text-gray-700" for="username">
                        Username
                    </label>
                    <input v-model="userData.username"
                        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="username" type="text" placeholder="Username">
                </div>
                <div class="mb-6">
                    <label class="block mb-2 text-sm font-bold text-gray-700" for="password">
                        Password
                    </label>
                    <input v-model="userData.password"
                        class="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="password" type="password" placeholder="******************">
                    <p v-if="false" class="text-xs italic text-red-500">Please choose a password.</p>
                </div>
                <div class="flex items-center justify-between">
                    <button
                        class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                        type="submit">
                        Sign In
                    </button>

                </div>
            </form>
            <p class="text-xs text-center text-gray-500">
                &copy;2020 Acme Corp. All rights reserved.
            </p>
        </div>
    </div>
</template>

<script setup>
import apiClient from '@/config/axiosClient';
import { useRouter } from 'vue-router';
import { reactive } from 'vue'

const router = useRouter();
const userData = reactive({
    username: '',
    password: ''
})
const login = async () => {

    try {
        const newUser = await apiClient.post('/login', userData)
        localStorage.setItem('jwt', newUser.data.content)
        router.push('/')
    } catch (err) {
        console.log(err);
    }

}
</script>

<style lang="scss" scoped></style>
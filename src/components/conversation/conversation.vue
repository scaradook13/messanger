<template>
    <div class="flex items-center p-3 hover:bg-gray-100 pl-10 cursor-pointer" >
        <img class="w-9 h-9 object-fill mr-2 rounded-full" src="/public/favicon.ico" alt="">
        <span class="font-medium text-lg">{{ props.id }}</span>
    </div>
</template>

<script setup>
const props = defineProps(['id'])
</script> 
<template>
    <div class="flex flex-col" :class="{ 'items-end': props.own}">
        <div class="flex">
            <img :class="{ 'hidden': props.own}" class="w-8 h-8 rounded-full object-cover mr-3" src="/public/favicon.ico" alt="">
            <p class="p-3 rounded-3xl max-w-80"
                :class="{ 'bg-gray-200 text-black': props.own ,'text-white bg-blue-500': !props.own}"> hello vue hello world</p>
        </div>
        <div class="text-sm pt-2">1 hour ago</div>
    </div>
</template>

<script setup>
const props = defineProps(['own'])
</script>
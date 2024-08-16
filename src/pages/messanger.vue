<script setup>
import conversation from '@/components/conversation/conversation.vue';
import message from '@/components/message/message.vue';
import { ref } from 'vue';
import { useUser } from '@/store/userStore';
const { user } = useUser();
import { useConversation } from '@/store/conversation';
const { Conversation } = useConversation();
const own = ref(true)
</script>

<template>
    <div class="h-screen flex">
        <div class="w-1/4 pt-3">
            <conversation/>
        </div>
        <div class="w-1/2 pt-3">
            <div class="h-5/6 p overflow-y-scroll">
                <message :own="own" />
                <message/>
                <message :own="own"/>
            </div>
            <div class="mt-2 flex items-center justify-between">
                <textarea class="w-10/12 h-20 p-3 border-gray border-2" name="" id="" placeholder="Send a message ..."></textarea>
                <button 
                class="mr-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >Send</button>
            </div>
        </div>
        <div class="w-1/4 pt-3">{{ user._id }}</div>
    </div>
</template>
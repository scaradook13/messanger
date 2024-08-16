import apiClient from "@/config/axiosClient";
import { reactive, toRefs, computed } from "vue";
import { useUser } from '@/store/userStore';
const { user } = useUser();

const conversationStore = reactive({
    getConversation: []
})


export function useConversation() {

    const fetchConversation = async () => {
        try {
            const response = await apiClient("/getConversation/"+user._id);
            conversationStore.getConversation = response.data.content;
            console.log(user._id);

        } catch (err) {
            console.log(err);
        }
    };



    return {
        ...toRefs(conversationStore),
        fetchConversation
    };
}
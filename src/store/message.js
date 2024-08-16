import apiClient from "@/config/axiosClient";
import { reactive, toRefs} from "vue";
import { useUser } from '@/store/userStore';
const { user } = useUser();
const messageStore = reactive({
  message: []
})

 
export function useMessage() {

  const fetchMessage = async () => {
    try {
      const response = await apiClient("/getMessage/"+user._id);
      messageStore.message = response.data.content;
      
    } catch (err) {
      console.log(err);
    }
  };



  return {
    ...toRefs(messageStore),
    fetchMessage
  };
}
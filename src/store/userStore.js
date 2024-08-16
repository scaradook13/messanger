import apiClient from "@/config/axiosClient";
import { reactive, toRefs} from "vue";

const userStore = reactive({
  user: []
})

 
export function useUser() {

  const fetchUser = async () => {
    try {
      const response = await apiClient("/user");
      userStore.user = response.data.content;
    } catch (err) {
      console.log(err);
    }
  };



  return {
    ...toRefs(userStore),
    fetchUser
  };
}
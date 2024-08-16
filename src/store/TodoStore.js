import { reactive, toRefs } from "vue";
import apiClient from "@/config/axiosClient";

const taskStore = reactive ({
  taskList:[],
  IsUpdateShow: 0,
});

export function useTodo() {

  const fetchTodo = async () => {
    try {
      const response = await apiClient("/");
      taskStore.taskList = response.data.content;
    } catch (err) {
      console.log(err);
    }
  };

  const addTodo = async (taskName) => {
    try {
      const response = await apiClient.post('/task', { taskName });
      await fetchTodo();   
      console.log(err);
    }catch (err) {
      console.log(err);
    }
  };

  const toggleCheckbox = async ( id, isFinished) => {
    try {
      const checkbox = await apiClient.post('/isFinished', { id, isFinished })
      await fetchTodo();

  } catch (err) {
      console.log(err);
  }
  }

  const deleteTask = async (id) => {
    try {
      const deleteTask = await apiClient.post('/delete', { id })
      await fetchTodo();
  } catch (err) {
      console.log(err);
  }
  }

  const isUpdating = async (id) => {
    if(taskStore.IsUpdateShow !== id){
      taskStore.IsUpdateShow = id
    }
    else{
      taskStore.IsUpdateShow = ''
    }
  }

  const updatedTodo = async ( id, payload ) => {
    const task = {...payload}
    try {
      const taskName = task.name;
      const update = await apiClient.post('/update', { id, taskName })
      await fetchTodo();
      taskStore.IsUpdateShow = ''
  } catch (err) {
      console.log(err);
  }
  }


  return {
    fetchTodo,
    addTodo,
    toggleCheckbox,
    deleteTask,
    isUpdating,
    updatedTodo,
    ...toRefs(taskStore)
  };
}

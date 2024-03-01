import { baseURL } from "../assets/variables";

export const createTodoSlice = (set) => ({
  todo: { userId: 1, id: 4, title: 'et porro tempora', completed: true },

  fetchSomething: async (id) => {
    const response = await fetch(`${baseURL}${id}`);
    const data = await response.json();
    set(() => ({ todo: data }))
  }
})
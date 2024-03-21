import { User } from "../../types/jsonplaceholder";
import { SocialMediaSlice } from "../../types/store";
import { create } from "zustand";

interface configuration {
    refetchTime: number;
}

const configuration: configuration = {
    refetchTime: Math.ceil(0.1 * 60 * 1000),
};

export const useSocialMediaStore = create<SocialMediaSlice>()((set) => ({
    users: [],
    isError: false,
    isLoading: true,
    lastFetched: -1,
    fetchAllUsers: async () => {
        try {
            console.log("Started fetching");
            const response: Response = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );
            if (!response.ok) {
                throw new Error("Server reponded with not ok. Try again");
            }
            const data: User[] = await response.json();
            set({
                users: data,
                isError: false,
                isLoading: false,
                lastFetched: Date.now(),
            });
        } catch (e) {
            set((state) => {
                console.log("inside where I couldnt print");
                return {
                    lastFetched: state.lastFetched,
                    users: state.users,
                    isLoading: false,
                    isError: true,
                };
            });
            console.log(e);
        }
    },
    updateUsers: async () => {
        set((state) => {
            console.log("inside where I couldnt print");
            if (
                state.lastFetched === -1 ||
                Date.now() - state.lastFetched > configuration.refetchTime
            ) {
                state.fetchAllUsers();
            }

            return {
                lastFetched: state.lastFetched,
                users: state.users,
                isLoading: state.isLoading,
                isError: state.isError,
            };
        });
    },
}));

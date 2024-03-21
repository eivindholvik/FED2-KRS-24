import { User } from "./jsonplaceholder";

export interface SocialMediaState {
    users: User[];
    isError: boolean;
    isLoading: boolean;
    lastFetched: number;
}

export interface SocialMediaSlice extends SocialMediaState {
    fetchAllUsers: () => void;
    updateUsers: () => void;
}

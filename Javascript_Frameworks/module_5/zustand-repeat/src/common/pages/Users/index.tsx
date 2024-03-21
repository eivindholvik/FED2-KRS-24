import { useEffect, useState } from "react";
import { useSocialMediaStore } from "../../../services/store";

function Users() {
    const updateUsers = useSocialMediaStore((state) => state.updateUsers);
    const users = useSocialMediaStore((state) => state.users);
    const isLoading = useSocialMediaStore((state) => state.isLoading);
    const isError = useSocialMediaStore((state) => state.isError);

    const [refetched, setRefetched] = useState(0);

    useEffect(() => {
        updateUsers();
    }, [refetched, updateUsers]);

    if (isLoading) {
        return <>loading</>;
    }
    if (isError) {
        return <>error</>;
    }
    return (
        <>
            <button
                onClick={() => {
                    setRefetched((prev) => {
                        return prev + 1;
                    });
                }}
            >
                Reteftch
            </button>
            {users.map((user, i) => {
                return <p key={i}>{user.name}</p>;
            })}
        </>
    );
}

export default Users;

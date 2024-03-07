import { useState, useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";
import ApiLogic from "../../common/components/ApiLogic";

function Albums() {
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                setIsError(false);
                setIsLoading(true);
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/albums"
                );

                if (!response.ok) {
                    throw new Error("not ok");
                }

                const data = await response.json();

                setAlbums(data);
                setIsLoading(false);
            } catch (e) {
                console.log(e);
                setIsLoading(false);
                setIsError(true);
            }
        })();
    }, []);

    const returnComponent = (
        <>
            <Outlet />
            <ul>
                {albums.map((album) => {
                    return (
                        <li key={album.id}>
                            <NavLink to={`/albums/${album.id}`}>
                                {album.title}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </>
    );

    return (
        <>
            <ApiLogic
                isError={isError}
                isLoading={isLoading}
                component={returnComponent}
            />
        </>
    );
}

export default Albums;

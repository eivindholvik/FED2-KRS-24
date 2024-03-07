import { useParams } from "react-router-dom";
import { useApi } from "../../../services/hooks/useApi";
import ApiLogic from "../../../common/components/ApiLogic";

function Album() {
    let { id } = useParams();
    const { data, isLoading, isError } = useApi(
        `https://jsonplaceholder.typicode.com/albums/${id}`
    );

    const returnComponent = (
        <div>
            <p>id: {data.id}</p>
            <p>id: {data.title}</p>
        </div>
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

export default Album;

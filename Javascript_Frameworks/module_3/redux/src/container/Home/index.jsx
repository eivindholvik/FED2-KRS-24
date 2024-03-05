import { Box, CircularProgress, Typography, Button } from "@mui/material";
import { useGetPostsQuery } from "../../services/api.reducer";
import { debounce } from "lodash";
import { useCallback, useState } from "react";

function Home() {
    const {
        data: posts,
        isLoading,
        isErrors,
        retech,
    } = useGetPostsQuery({
        pollingInterval: 200,
    });

    const [showPosts, setShowPosts] = useState(false);

    const handleClick = useCallback(() => {
        setShowPosts((state) => !state);
    }, []);

    if (isLoading) {
        return (
            <Box>
                <CircularProgress />
            </Box>
        );
    }

    if (isErrors) {
        debounce(() => {
            retech();
        }, 1000);
        return (
            <Typography>
                Error fetching {isErrors.message}, will refetch
            </Typography>
        );
    }

    return (
        <div>
            <Button variant="outlined" onClick={handleClick}>
                Hei
            </Button>
            <div>
                {showPosts &&
                    posts?.map((post) => {
                        return (
                            <Box
                                key={post.id}
                                sx={{
                                    border: "1px solid orange",
                                    padding: "10px",
                                    margin: "10px",
                                }}
                            >
                                <Typography>Title: {post.title}</Typography>
                                <Typography>Body: {post.body}</Typography>
                            </Box>
                        );
                    })}
            </div>
        </div>
    );
}

export default Home;

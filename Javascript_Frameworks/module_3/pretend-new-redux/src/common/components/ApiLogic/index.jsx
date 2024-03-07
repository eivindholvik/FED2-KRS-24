import { Box, CircularProgress, Typography } from "@mui/material";

function ApiLogic({ isLoading, isError, component }) {
    if (isLoading) {
        return (
            <Box>
                <CircularProgress />
            </Box>
        );
    }

    if (isError) {
        return <Typography>There was an error!</Typography>;
    }

    return component;
}

export default ApiLogic;

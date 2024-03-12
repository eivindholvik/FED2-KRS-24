import { InputLabel } from "@mui/material";
import { Input } from "@mui/material";
import { Button } from "@mui/material";

function Login() {
    return (
        <div>
            <h1>Log in here</h1>
            <form>
                <InputLabel>
                    Username:
                    <Input type="text"></Input>
                </InputLabel>
                <InputLabel>
                    Password:
                    <Input type="password"></Input>
                </InputLabel>
                <Button variant="outlined">Login</Button>
            </form>
        </div>
    );
}

export default Login;

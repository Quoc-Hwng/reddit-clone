import { Button, Input } from "@chakra-ui/react"
import { useState } from "react"

export default function Login(){
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
    })
    const onSubmit = () =>{}
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoginForm((prev) =>({
            ...prev,
            [event.target.name]: event.target.value,
        }))
    }
    return(
        <form onSubmit={onSubmit}>
            <Input 
                name="email"
                placeholder="email"
                type="email"
                mb={2}
                onChange={onChange} 
                />
            <Input
                name="password"
                placeholder="password"
                type="password"
                mb={2}
                onChange={onChange} 
            />
            <Button type="submit">
                Login
            </Button>
        </form>
    )
}
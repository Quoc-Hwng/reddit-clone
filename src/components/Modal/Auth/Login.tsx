import { authModalState } from "@/src/atoms/authModalAtoms"
import { auth } from "@/src/firebase/clientApp"
import { FIREBASE_ERRORS } from "@/src/firebase/error"
import { Button, Flex, Input, Text } from "@chakra-ui/react"
import React, { useState } from "react"
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth"
import { useSetRecoilState } from "recoil"

export default function Login(){
    const setAuthModalState = useSetRecoilState(authModalState)
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
    })
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();

        signInWithEmailAndPassword(loginForm.email, loginForm.password)
    }
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoginForm((prev) =>({
            ...prev,
            [event.target.name]: event.target.value,
        }))
    }
    return(
        <form onSubmit={onSubmit}>
            <Input 
                required
                name="email"
                placeholder="email"
                type="email"
                mb={2}
                fontSize="10pt"
                _placeholder={{color: "gray.500"}}
                _hover={{
                    bg: "white",
                    border: "1px solid",
                    borderColor:"blue.500"
                }}
                _focus={{
                    outline: "none",
                    bg: "white",
                    border: "1px solid",
                    borderColor:"blue.500"
                }}
                onChange={onChange} 
                />
            <Input
                name="password"
                placeholder="password"
                type="password"
                mb={2}
                fontSize="10pt"
                _placeholder={{color: "gray.500"}}
                _hover={{
                    bg: "white",
                    border: "1px solid",
                    borderColor:"blue.500"
                }}
                _focus={{
                    outline: "none",
                    bg: "white",
                    border: "1px solid",
                    borderColor:"blue.500"
                }}
                onChange={onChange} 
            />
            <Text textAlign="center" color="red" fontSize="10pt">
                {FIREBASE_ERRORS[error?.message as keyof typeof FIREBASE_ERRORS]}
            </Text>
            <Button
                width="100%"
                height="36px"
                mt={2}
                mb={2}
                type="submit"
                isLoading={loading}
                >
                Login
            </Button>
            <Flex
                fontSize="9pt"
                justify="center"
            >
                <Text mr={1}>New here?</Text>
                <Text 
                    color="blue.500" 
                    fontWeight={700} 
                    cursor="pointer" 
                    onClick={() => 
                        setAuthModalState((prev) =>({
                        ...prev,
                        view: "signup"
                        }))
                    }
                >
                    SIGN UP
                </Text>
            </Flex>
        </form>
    )
}
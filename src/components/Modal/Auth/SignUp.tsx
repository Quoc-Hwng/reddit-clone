
import { authModalState } from "@/src/atoms/authModalAtoms"
import { Button, Flex, Input, Text } from "@chakra-ui/react"
import { useState } from "react"
import { useSetRecoilState } from "recoil"
import { useCreateUserWithEmailAndPassword} from "react-firebase-hooks/auth"
import { auth } from "@/src/firebase/clientApp"
import { FIREBASE_ERRORS } from "@/src/firebase/error"

export default function SignUp() {
    const setAuthModalState = useSetRecoilState(authModalState)
    const [signUpForm, setSignUpForm] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    })
    const [error, setError] = useState('')
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        userError,
    ] = useCreateUserWithEmailAndPassword(auth);
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
        if(error) setError('')
        if(signUpForm.password !== signUpForm.confirmPassword){
            setError('Password do not match');
            return
        }
        createUserWithEmailAndPassword(signUpForm.email, signUpForm.password)
    }
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSignUpForm((prev) =>({
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
                required
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
            <Input
                required
                name="confirmPassword"
                placeholder="confirm password"
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
            {(error || userError) && (
                <Text 
                    textAlign="center" 
                    color="red" 
                    fontSize="10pt"
                >
                    {error || FIREBASE_ERRORS[userError?.message as keyof typeof FIREBASE_ERRORS]}
                </Text>
            )}
            <Button
                width="100%"
                height="36px"
                mt={2}
                mb={2}
                type="submit"
                isLoading={loading}
                >
                Sign Up
            </Button>
            <Flex
                fontSize="9pt"
                justify="center"
            >
                <Text mr={1}>Already a Redditor?</Text>
                <Text 
                    color="blue.500" 
                    fontWeight={700} 
                    cursor="pointer" 
                    onClick={() => 
                        setAuthModalState((prev) =>({
                        ...prev,
                        view: "login"
                        }))
                    }
                >
                    LOG IN
                </Text>
            </Flex>
        </form>
    )
}
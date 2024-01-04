import { auth } from "@/src/firebase/clientApp";
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { useSignInWithGoogle} from "react-firebase-hooks/auth"

export default function OAuthButtons(){
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
    
    return(
        <Flex 
            direction="column"
            width="100%"
            mb={4}
            gap={2}
        >
            <Button 
                variant="oauth" 
                mb={2} 
                isLoading={loading} 
                onClick={() => signInWithGoogle()}
                >
                    <Image src="/images/googlelogo.png" alt="" height="20px"mr={4}/>
                    Continue with Google
            </Button>
            <Button variant="oauth">Some Other Provider</Button>
            {error && <Text>{error.message}</Text>}
        </Flex>
    )
}
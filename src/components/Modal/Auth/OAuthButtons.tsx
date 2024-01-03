import { Button, Flex, Image } from "@chakra-ui/react";

export default function OAuthButtons(){
    return(
        <Flex 
            direction="column"
            width="100%"
            mb={4}
            gap={2}
        >
            <Button variant="oauth">
                <Image src="/images/googlelogo.png" height="20px"mr={4}/>
                Continue with Google
            </Button>
            <Button>Some Other Provider</Button>
        </Flex>
    )
}
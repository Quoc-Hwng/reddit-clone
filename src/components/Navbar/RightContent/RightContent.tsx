import { auth } from "@/src/firebase/clientApp"
import { Button, Flex } from "@chakra-ui/react"
import { signOut } from "firebase/auth"
import React from "react"
import AuthModal from "../../Modal/Auth/AuthModal"
import AuthButtons from "./AuthButtons"

// type RightContentProps = {
//     user: any;
// };

export default function RightContent({user}) {
    return(
        <>
            <AuthModal/>
            <Flex justify="center" align="center">
                {user ? <Button onClick={() => signOut(auth)}>Logout</Button> : <AuthButtons/>}
            </Flex>
        </>
    )
}
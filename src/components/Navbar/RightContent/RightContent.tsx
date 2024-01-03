import { Flex } from "@chakra-ui/react"
import AuthButtons from "./AuthButtons"

type RightContentProps = {
    user: any,
}

export default function RightContent() {
    return(
        <>
        {/**/}
        <Flex justify="center" align="center">
            <AuthButtons/>
        </Flex>
        </>
    )
}
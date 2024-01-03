import { authModalState } from '@/src/atoms/authModalAtoms'
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Flex,
} from '@chakra-ui/react'
import { useRecoilState } from 'recoil'
import AuthInputs from './AuthInputs';
export default function AuthModal() {
    const [modalState, setModalState] = useRecoilState(authModalState);
    const handleClose = () =>{
        setModalState(pre => ({
            ...pre,
            open: false,
        }))
    }
    return (
        <>
            <Modal isOpen={modalState.open} onClose={handleClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        {modalState.view === 'login' && 'Login'}
                        {modalState.view === 'signup' && 'Sign Up'}
                        {modalState.view === 'resetPassword' && 'Reset Password'}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody 
                        display='flex' 
                        flexDirection='column'
                        alignItems='center'
                        justifyContent='center' 
                    >
                        <Flex
                            direction="column"
                            align="center"
                            justify="center"
                            width="70%"
                            border="1px solid red"
                        >
                            <AuthInputs/>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
import { authModalState } from '@/src/atoms/authModalAtoms'
import { auth } from '@/src/firebase/clientApp';
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
    Text,
} from '@chakra-ui/react'
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRecoilState } from 'recoil'
import AuthInputs from './AuthInputs';
import OAuthButtons from './OAuthButtons';
export default function AuthModal() {
    const [modalState, setModalState] = useRecoilState(authModalState);
    const [user, loading, error] = useAuthState(auth)
    const handleClose = () =>{
        setModalState(pre => ({
            ...pre,
            open: false,
        }))
    }
    useEffect(() => {
        if(user) handleClose()
    },[user])
    return (
            <Modal isOpen={modalState.open} onClose={handleClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader textAlign="center">
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
                        pb={6}
                    >
                        <Flex
                            direction="column"
                            align="center"
                            justify="center"
                            width="70%"
                        >
                            <OAuthButtons/>
                            <Text color="gray.500" fontWeight={700}>OR</Text>
                            <AuthInputs/>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        
    )
}
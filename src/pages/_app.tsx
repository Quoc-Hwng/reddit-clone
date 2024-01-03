// import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../chakra/theme'
import Layout from '../components/Layout/Layout'
import * as recoil from 'recoil'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <recoil.RecoilRoot>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </recoil.RecoilRoot>
  )
}

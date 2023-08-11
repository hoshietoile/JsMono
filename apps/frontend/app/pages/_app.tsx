import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider as ApiProvider, createClient } from 'urql'
import { Provider as StoreProvider } from 'react-redux'
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import store from './../store/index'
import theme from './../chakra/theme'

import Header from './../components/layouts/Header'
import Container from './../components/layouts/MainContainer'

const client = createClient({ url: 'http://localhost:3000/graphql' })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApiProvider value={client}>
      <StoreProvider store={store}>
        <ChakraProvider theme={theme}>
          <ColorModeProvider options={{ useSystemColorMode: true }}>
            <Header />
            <Container>
              <Component {...pageProps} />
            </Container>
          </ColorModeProvider>
        </ChakraProvider>
      </StoreProvider>
    </ApiProvider>
  )
}
export default MyApp

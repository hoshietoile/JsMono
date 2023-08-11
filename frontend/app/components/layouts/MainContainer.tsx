import React from 'react'
import { Flex, useColorMode } from '@chakra-ui/react'

interface MainContainerProps {
  children: React.ReactChild
}

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  const { colorMode } = useColorMode()
  const bgColor = { light: 'gray.50', dark: 'white' }
  const color = { light: 'black', dark: 'white' }
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
    >
      {children}
    </Flex>
  );
}

export default MainContainer
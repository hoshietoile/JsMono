import React from 'react'
import { Box } from '@chakra-ui/react'

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = ({ }) => {
  return (
    <Box w="100%" p={4} position="fixed">
      Title
    </Box>
  );
}

export default Header
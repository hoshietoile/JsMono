import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import { RootState } from './../store/index'
import { useSelector, useDispatch } from 'react-redux'
import { refreshUserList, User } from './../store/modules/userModule'
import styles from './../styles/Index.module.css'
import { useCreateSingleUserMutation, useFetchUserListQuery } from './../generated/graphql'
import {
  Box,
  useColorMode,
  useToast,
  createStandaloneToast,
  Switch,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption
} from '@chakra-ui/react'
// import { testUtil } from 'utils'
import { UiButton} from 'ui'
const Index: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordCnf, setPasswordCnf] = useState<string>('')
  // api
  const [, createSingleUser] = useCreateSingleUserMutation()
  const [list, fetchUserList] = useFetchUserListQuery() // 返り値any,,,
  // store
  const { users } = useSelector((state: RootState) => state.user) // 型補完は効いてない?
  const dispatch = useDispatch()
  // chakra
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  const toast = createStandaloneToast()

  const sendForm = async () => {
    setLoading(true)
    const data = {
      name,
      email,
      password,
      passwordConfirm: passwordCnf
    }
    await createSingleUser(data)
    await fetchUserList({ requestPolicy: 'network-only' })
    dispatch(refreshUserList(list.data.fetchUserList))
    toast({
      title: 'successfully sent.',
      description: 'created one user. year!',
      status: 'success',
      duration: 3000,
      isClosable: true
    })
    setLoading(false)
  }

  useEffect(() => {
    // alert(testUtil("Hello"))
    if (list.data) {
      dispatch(refreshUserList(list.data.fetchUserList))
    }
  }, [])

  return (
    <div className={styles.index}>
      <table>
        <tr>hoshi</tr>
      </table>
      <UiButton>Test</UiButton>
      <Box w="100%" p={4} color="white" borderWidth="1px" borderRadius="lg">
        <FormControl id="name" isInvalid={name.length > 10}>
          <FormLabel color="black">Name</FormLabel>
          <Input type="text" value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
          <FormErrorMessage>Name Error</FormErrorMessage>
        </FormControl>

        <FormControl id="email" isInvalid={email.length > 10}>
          <FormLabel color="black">Email</FormLabel>
          <Input type="email" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
          <FormErrorMessage>Email Error</FormErrorMessage>
        </FormControl>

        <FormControl id="password" isInvalid={false}>
          <FormLabel color="black">Password</FormLabel>
          <InputGroup size="md">
            <Input pr="4.5rem" type="password" value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" colorScheme="teal" color="white">
                Show
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>Name Error</FormErrorMessage>
        </FormControl>

        <FormControl id="password_confirm" isInvalid={false}>
          <FormLabel color="black">Password(Confirm)</FormLabel>
          <Input type="passowrd" value={passwordCnf} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPasswordCnf(e.target.value)} />
          <FormErrorMessage>Password Error</FormErrorMessage>
        </FormControl>
        <Switch position="fixed" top="1rem" right="1rem" color="green" isChecked={isDark} onChange={toggleColorMode} />
        <Button mt={4} colorScheme="teal" color="white" isLoading={loading} type="button" onClick={sendForm}>Submit</Button>
      </Box>
      <Box w="100%" mt={2} p={4} borderWidth="1px" borderRadius="lg">
        <Table variant="simple" colorScheme="whiteAlpha">
          <TableCaption>User List Test.</TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users && users.map((user: User, idx: number) => (
              <Tr key={idx}>
                <Td>{user.name}</Td>
                <Td>{user.email}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </div>
  )
}

export default Index

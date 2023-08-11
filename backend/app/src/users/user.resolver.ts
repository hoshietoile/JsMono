import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { UserService } from './user.service'
import { UserDto } from './dto/user.dto'
import { CreateUserInput } from './inputs/createUser.input'
import { UpdateUserInput } from './inputs/updateUser.input'

@Resolver()
export class UserResolver {
  constructor(
    private readonly userService: UserService
  ) { }

  @Query(() => [UserDto])
  async fetchUserList() {
    return this.userService.fetchList()
  }

  @Mutation(() => UserDto)
  async createSingleUser(@Args('input') input: CreateUserInput) {
    return this.userService.createSingle(input)
  }

  @Mutation(() => UserDto)
  async updateSingleUser(@Args('input') input: UpdateUserInput) {
    return this.userService.updateSingle(input)
  }
}
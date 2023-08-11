import { Field, ObjectType, ID } from '@nestjs/graphql'

@ObjectType()
export class UserDto {
  @Field(() => ID)
  _id: string

  @Field()
  name: string

  @Field()
  email: string

  @Field()
  readonly createdAt: Date

  @Field()
  readonly updatedAt: Date
}
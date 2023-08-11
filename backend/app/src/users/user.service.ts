import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { User } from './user.interface'
import { CreateUserInput } from './inputs/createUser.input'
import { UpdateUserInput } from './inputs/updateUser.input'

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>
  ) { }

  // usersの一覧取得
  async fetchList(): Promise<User[]> {
    const list = await this.userModel.find()
    return list
  }

  // usersの新規作成
  async createSingle(input: CreateUserInput): Promise<User> {
    const userInstance = new this.userModel(input)
    const created = await userInstance.save()
    return created
  }

  async updateSingle(input: UpdateUserInput): Promise<User> {
    const userInstance = await this.userModel.findOne({
      _id: '64d6241ffd55ae5ad38754a5',
    });
    userInstance.name = input.name;
    // userInstance.overwrite({ name: input.name, email: userInstance.email });
    await userInstance.save();
    return userInstance;
  }
}
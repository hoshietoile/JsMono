import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema()
export class User {
  @Prop()
  name: string

  @Prop()
  email: string

  @Prop({ default: Date.now })
  createdAt: Date

  @Prop({ defualt: Date.now })
  updatedAt: Date
}

export type UserDocument = User & Document
export const UserSchema = SchemaFactory.createForClass(User)
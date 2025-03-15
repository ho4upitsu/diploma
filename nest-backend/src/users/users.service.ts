import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './entities/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { FirebaseService } from 'src/firebase/firebase.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    private readonly firebaseService: FirebaseService,
  ) {}

  async register(createUserDto: CreateUserDto): Promise<User> {
    const { email, password, username } = createUserDto;

    const firebaseUser = await this.firebaseService.createUser(
      email,
      password,
      username,
    );

    const user = new this.userModel({
      username,
      email,
      firebaseUid: firebaseUser.uid,
    });
    return user.save();
  }

  async login(token: string): Promise<User> {
    const decodedToken = await this.firebaseService.verifyToken(token);
    const user = await this.userModel.findOne({
      firebaseUid: decodedToken.uid,
    });
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }
}

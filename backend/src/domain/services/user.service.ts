import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('UserRepository') private readonly userRepository: typeof User,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.identification = createUserDto.identification;
    user.birthday = createUserDto.birthday;
    user.phone = createUserDto.phone;
    user.mobile = createUserDto.mobile;
    user.address = createUserDto.address;
    return await user.save();
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.findAll<User>();
  }
}

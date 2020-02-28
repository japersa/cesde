import {
  Controller,
  Get,
  Post,
  Body,
  Response,
  HttpStatus,
} from '@nestjs/common';
import { CreateUserDto } from '../../domain/dto/create-user.dto';
import { UserService } from '../../domain/services/user.service';
import { User } from '../../domain/entities/user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  public async create(@Response() res, @Body() createUserDto: CreateUserDto) {
    const user = await this.userService.create(createUserDto);
    return res.status(HttpStatus.OK).json(user);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Response,
  HttpStatus,
} from '@nestjs/common';
import { CreateDriverDto } from '../../domain/dto/create-driver.dto';
import { DriverService } from '../../domain/services/driver.service';
import { Driver } from '../../domain/entities/driver.entity';

@Controller('drivers')
export class DriverController {
  constructor(private readonly driverService: DriverService) {}

  @Post()
  public async create(@Response() res, @Body() createUserDto: CreateDriverDto) {
    const user = await this.driverService.create(createUserDto);
    return res.status(HttpStatus.OK).json(user);
  }

  @Get()
  async findAll(): Promise<Driver[]> {
    return await this.driverService.findAll();
  }
}

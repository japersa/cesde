import { Injectable, Inject } from '@nestjs/common';
import { CreateDriverDto } from '../dto/create-driver.dto';
import { Driver } from '../entities/driver.entity';

@Injectable()
export class DriverService {
  constructor(
    @Inject('DriverRepository')
    private readonly driverRepository: typeof Driver,
  ) {}

  async create(createDriverDto: CreateDriverDto): Promise<Driver> {
    const driver = new Driver();
    driver.firstName = createDriverDto.firstName;
    driver.lastName = createDriverDto.lastName;
    driver.identification = createDriverDto.identification;
    driver.birthday = createDriverDto.birthday;
    driver.phone = createDriverDto.phone;
    driver.mobile = createDriverDto.mobile;
    driver.address = createDriverDto.address;
    return await driver.save();
  }

  async findAll(): Promise<Driver[]> {
    return await this.driverRepository.findAll<Driver>();
  }
}

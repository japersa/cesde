import {
  Controller,
  Get,
  Post,
  Body,
  Response,
  HttpStatus,
} from '@nestjs/common';
import { CreateTravelDto } from '../../domain/dto/create-travel.dto';
import { TravelService } from '../../domain/services/travel.service';
import { Travel } from '../../domain/entities/travel.entity';

@Controller('travels')
export class TravelController {
  constructor(private readonly travelService: TravelService) {}

  @Post()
  public async create(
    @Response() res,
    @Body() createTravelDto: CreateTravelDto,
  ) {
    const user = await this.travelService.create(createTravelDto);
    return res.status(HttpStatus.OK).json(user);
  }

  @Get()
  async findAll(): Promise<Travel[]> {
    return await this.travelService.findAll();
  }
}

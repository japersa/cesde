import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  readonly firstName: string;
  @IsNotEmpty()
  readonly lastName: string;
  @IsNotEmpty()
  readonly identification: string;
  @IsNotEmpty()
  readonly birthday: string;
  @IsNotEmpty()
  readonly phone: string;
  @IsNotEmpty()
  readonly mobile: string;
  @IsNotEmpty()
  readonly address: string;
}

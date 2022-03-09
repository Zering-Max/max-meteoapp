import { Controller, Get, Param, Put, Body } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { User } from '../user/models/user.entity';
import { UserUpdateDto } from './models/user-update.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async allUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }
  @Put(':id')
  async update(@Param('id') id: number, @Body() body: UserUpdateDto) {
    await this.userService.updateUser(id, body);

    return this.userService.getUser({ id });
  }
}

import { ConsoleLogger, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/models/user.entity';
import { UserCreateDto } from './models/user-create.dto';
import { UserUpdateDto } from './models/user-update.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async getUser(condition): Promise<User> {
    return this.userRepository.findOne(condition);
  }

  async createUser(data: UserCreateDto): Promise<User> {
    return this.userRepository.save(data);
  }

  async updateUser(id: number, data): Promise<any> {
    return this.userRepository.update(id, data);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { Address } from './entities/address.entity';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private adressRepository: Repository<Address>,
  ) {}

  create(createAddressDto: CreateAddressDto) {
    console.log('====================================');
    console.log('createAddressDto', createAddressDto);
    console.log('====================================');
    return 'This action adds a new address';
  }

  findAll(): Promise<Address[]> {
    return this.adressRepository.find();
  }

  findOne(id: number): Promise<Address> {
    return this.adressRepository.findOneBy({ id });
  }

  update(id: number, updateAddressDto: UpdateAddressDto) {
    return `This action updates a #${id} address`;
  }

  async remove(id: number): Promise<void> {
    await this.adressRepository.delete(id);
  }
}

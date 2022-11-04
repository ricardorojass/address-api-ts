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
    const newAddress = this.adressRepository.create(createAddressDto)
    return this.adressRepository.save(newAddress);
  }

  findAll(): Promise<Address[]> {
    return this.adressRepository.find();
  }

  findOne(id: number): Promise<Address> {
    return this.adressRepository.findOneBy({ id });
  }

  async update(id: number, updateAddress: UpdateAddressDto) {
    const address = await this.adressRepository.findOne({ where: { id } });
    this.adressRepository.merge(address, updateAddress)
    return this.adressRepository.save(address)
  }

  async remove(id: number) {
    await this.adressRepository.delete(id);
    return true;
  }
}

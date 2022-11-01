import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
export declare class AddressService {
    create(createAddressDto: CreateAddressDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAddressDto: UpdateAddressDto): string;
    remove(id: number): string;
}

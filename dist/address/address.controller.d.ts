import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
export declare class AddressController {
    private readonly addressService;
    constructor(addressService: AddressService);
    create(createAddressDto: CreateAddressDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAddressDto: UpdateAddressDto): string;
    remove(id: string): string;
}

import { AppDataSource } from "./data-source";
import { faker } from '@faker-js/faker';
import { Address } from "./address/entities/address.entity";

AppDataSource.initialize().then(async () => {


    console.log("Inserting a new address into the database...")

    const fakerRounds = 10;
    console.log('Seeding...');

    for (let i = 0; i < fakerRounds; i++) {
        const address = new Address()
        address.firstName = faker.name.firstName(),
        address.surName =  faker.name.lastName(),
        address.address = faker.address.streetAddress(),
        address.phone = faker.phone.number()
        await AppDataSource.manager.save(address)
        console.log("Saved a new address with id: " + address.id)
    }

    console.log("Loading address from the database...")
    const addresses = await AppDataSource.manager.find(Address)
    console.log("Loaded addresses: ", addresses)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))

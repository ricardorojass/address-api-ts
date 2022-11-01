import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class addresTable1667262158891 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'address',
                columns: [
                    {
                        name: 'id',
                        type: 'int4',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'firstName',
                        type: 'text',
                        isNullable: false,
                    },
                    {
                        name: 'surName',
                        type: 'text',
                        isNullable: false,
                    },
                    {
                        name: 'address',
                        type: 'text',
                        isNullable: false,
                    },
                    {
                        name: 'phone',
                        type: 'text',
                        isNullable: false,
                    },
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`DROP TABLE article`);
    }

}

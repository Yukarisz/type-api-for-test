import { MigrationInterface, QueryRunner } from "typeorm";

export class default1662413239684 implements MigrationInterface {
    name = 'default1662413239684'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "description"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ADD "description" text NOT NULL`);
    }

}

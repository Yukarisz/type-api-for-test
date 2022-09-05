import { MigrationInterface, QueryRunner } from "typeorm";

export class default1662419240307 implements MigrationInterface {
    name = 'default1662419240307'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "market" ("id" SERIAL NOT NULL, "name" text NOT NULL, "description" text, "produ" text NOT NULL, "amount" text NOT NULL, "saleDate" text NOT NULL, "payment" text NOT NULL, CONSTRAINT "PK_1e9a2963edfd331d92018e3abac" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "market_product" ("market_id" integer NOT NULL, "product_id" integer NOT NULL, CONSTRAINT "PK_e617027c2f625b8f15ef69cb03f" PRIMARY KEY ("market_id", "product_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_3d62c59c12e45740d7bf93011c" ON "market_product" ("market_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_3ecc552cbe9c741a08eb32f96d" ON "market_product" ("product_id") `);
        await queryRunner.query(`ALTER TABLE "market_product" ADD CONSTRAINT "FK_3d62c59c12e45740d7bf93011cd" FOREIGN KEY ("market_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "market_product" ADD CONSTRAINT "FK_3ecc552cbe9c741a08eb32f96d6" FOREIGN KEY ("product_id") REFERENCES "market"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "market_product" DROP CONSTRAINT "FK_3ecc552cbe9c741a08eb32f96d6"`);
        await queryRunner.query(`ALTER TABLE "market_product" DROP CONSTRAINT "FK_3d62c59c12e45740d7bf93011cd"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_3ecc552cbe9c741a08eb32f96d"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_3d62c59c12e45740d7bf93011c"`);
        await queryRunner.query(`DROP TABLE "market_product"`);
        await queryRunner.query(`DROP TABLE "market"`);
    }

}

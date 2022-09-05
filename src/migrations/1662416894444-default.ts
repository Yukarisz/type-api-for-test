import { MigrationInterface, QueryRunner } from "typeorm";

export class default1662416894444 implements MigrationInterface {
    name = 'default1662416894444'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "sales_product" ("sales_id" integer NOT NULL, "product_id" integer NOT NULL, CONSTRAINT "PK_a50f9d89228f10fee67993dceab" PRIMARY KEY ("sales_id", "product_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_9bd2580a16e86b28d4f462c774" ON "sales_product" ("sales_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_e4a6a8d75f87381b593f7dff5b" ON "sales_product" ("product_id") `);
        await queryRunner.query(`ALTER TABLE "sales" ADD "produ" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sales" ADD "amount" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sales" ADD "saleDate" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sales" ADD "payment" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sales_product" ADD CONSTRAINT "FK_9bd2580a16e86b28d4f462c774c" FOREIGN KEY ("sales_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "sales_product" ADD CONSTRAINT "FK_e4a6a8d75f87381b593f7dff5b2" FOREIGN KEY ("product_id") REFERENCES "sales"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sales_product" DROP CONSTRAINT "FK_e4a6a8d75f87381b593f7dff5b2"`);
        await queryRunner.query(`ALTER TABLE "sales_product" DROP CONSTRAINT "FK_9bd2580a16e86b28d4f462c774c"`);
        await queryRunner.query(`ALTER TABLE "sales" DROP COLUMN "payment"`);
        await queryRunner.query(`ALTER TABLE "sales" DROP COLUMN "saleDate"`);
        await queryRunner.query(`ALTER TABLE "sales" DROP COLUMN "amount"`);
        await queryRunner.query(`ALTER TABLE "sales" DROP COLUMN "produ"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e4a6a8d75f87381b593f7dff5b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9bd2580a16e86b28d4f462c774"`);
        await queryRunner.query(`DROP TABLE "sales_product"`);
    }

}

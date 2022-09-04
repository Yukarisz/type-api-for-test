import { MigrationInterface, QueryRunner } from "typeorm";

export class default1662262938397 implements MigrationInterface {
    name = 'default1662262938397'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "subjects" ("id" SERIAL NOT NULL, "name" text NOT NULL, CONSTRAINT "PK_1a023685ac2b051b4e557b0b280" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sales_subject" ("sales_id" integer NOT NULL, "subject_id" integer NOT NULL, CONSTRAINT "PK_69158f379f0e97766beafd5ad78" PRIMARY KEY ("sales_id", "subject_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_4d59f76807aec3e43ed49c532e" ON "sales_subject" ("sales_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_fc36b96971a6bb6796b814c356" ON "sales_subject" ("subject_id") `);
        await queryRunner.query(`ALTER TABLE "sales" ADD "description" text`);
        await queryRunner.query(`ALTER TABLE "sales_subject" ADD CONSTRAINT "FK_4d59f76807aec3e43ed49c532e7" FOREIGN KEY ("sales_id") REFERENCES "subjects"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "sales_subject" ADD CONSTRAINT "FK_fc36b96971a6bb6796b814c3561" FOREIGN KEY ("subject_id") REFERENCES "sales"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sales_subject" DROP CONSTRAINT "FK_fc36b96971a6bb6796b814c3561"`);
        await queryRunner.query(`ALTER TABLE "sales_subject" DROP CONSTRAINT "FK_4d59f76807aec3e43ed49c532e7"`);
        await queryRunner.query(`ALTER TABLE "sales" DROP COLUMN "description"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_fc36b96971a6bb6796b814c356"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_4d59f76807aec3e43ed49c532e"`);
        await queryRunner.query(`DROP TABLE "sales_subject"`);
        await queryRunner.query(`DROP TABLE "subjects"`);
    }

}

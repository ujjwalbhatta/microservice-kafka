import { Pool } from "pg";
import { DB_URL } from "./src/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";

async function runMigration() {
  try {
    console.log("running migration");
    const pool = new Pool({
      connectionString: DB_URL,
    });
    const db = drizzle(pool);
    await migrate(db, { migrationsFolder: "./src/db/migrations" });
    console.log("migration done");
    pool.end();
  } catch (error) {
    console.log(error);
  }
}

runMigration();

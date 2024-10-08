import { pgGenerate } from "drizzle-dbml-generator";
import * as schema from "./src/common/database/schema";

const out = "./schema.dbml";
const relational = true;
pgGenerate({ schema, out, relational });
console.log("✅ Created the schema.dbml file");
console.log("⏳ Creating the erd.svg file");

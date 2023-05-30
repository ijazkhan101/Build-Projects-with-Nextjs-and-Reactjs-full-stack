import {
    pgTable,
    serial,
    varchar,
} from "drizzle-orm/pg-core";

import { drizzle} from "drizzle-orm/vercel-postgres";
import {InferModel} from  "drizzle-orm";

export const todoTable = pgTable("Todos",{
    id: serial("id").primaryKey(),
    task : varchar("Task", { length: 255}).notNull()
})

export type Todo =  InferModel<typeof todoTable>;

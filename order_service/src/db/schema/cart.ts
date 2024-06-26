import { InferSelectModel } from "drizzle-orm";
import { pgTable, integer, serial, timestamp } from "drizzle-orm/pg-core";

export const cart = pgTable("cart", {
  id: serial("id").primaryKey(),
  customerId: integer("customer_id").notNull().unique(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export type Cart = InferSelectModel<typeof cart>;

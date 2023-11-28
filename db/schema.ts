import { sql } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const jobs = sqliteTable("jobs", {
  jobId: integer("job_id").primaryKey().notNull(),
  title: text("title").notNull(),
  company: text("company").notNull(),
  link: text("link").notNull(),
  deadline: text("deadline")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  addedDate: text("added_date")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  lastChecked: text("last_checked")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  applicationSent: integer("application_sent", { mode: "boolean" })
    .default(false)
    .notNull(),
});

export const status = sqliteTable("status", {
  statusId: integer("status_id").primaryKey().notNull(),
  status: text("status").notNull(),
});

export const statusChanges = sqliteTable("status_changes", {
  changeId: integer("change_id").primaryKey().notNull(),
  jobId: integer("job_id")
    .notNull()
    .references(() => jobs.jobId, { onDelete: "cascade" }),
  status: integer("status")
    .default(0)
    .notNull()
    .references(() => status.statusId, {
      onDelete: "set default",
      onUpdate: "cascade",
    }),
  dateUpdated: text("date_updated")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

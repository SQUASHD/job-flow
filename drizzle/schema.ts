import { sqliteTable, AnySQLiteColumn, integer, text, foreignKey, uniqueIndex, numeric } from "drizzle-orm/sqlite-core"
import { sql } from "drizzle-orm"


export const status = sqliteTable("status", {
	statusId: integer("status_id").primaryKey().notNull(),
	status: text("status").notNull(),
});

export const statusChanges = sqliteTable("status_changes", {
	changeId: integer("change_id").primaryKey().notNull(),
	jobId: integer("job_id").notNull().references(() => oldPushJobs.jobId, { onDelete: "cascade" } ),
	status: integer("status").default(0).notNull().references(() => status.statusId, { onDelete: "set default", onUpdate: "cascade" } ),
	dateUpdated: text("date_updated").default("sql`(CURRENT_TIMESTAMP)`").notNull(),
});

export const jobs = sqliteTable("jobs", {
	jobId: integer("job_id").primaryKey().notNull(),
	title: text("title").notNull(),
	company: text("company").notNull(),
	link: text("link").notNull(),
	deadline: text("deadline").default("sql`(CURRENT_TIMESTAMP)`").notNull(),
	addedDate: text("added_date").default("sql`(CURRENT_TIMESTAMP)`").notNull(),
	lastChecked: text("last_checked").default("sql`(CURRENT_TIMESTAMP)`").notNull(),
	applicationSent: integer("application_sent").default(false).notNull(),
},
(table) => {
	return {
		linkUnique: uniqueIndex("jobs_link_unique").on(table.link),
	}
});

export const drizzleMigrations = sqliteTable("__drizzle_migrations", {
	id: numeric("id").primaryKey(),
	hash: text("hash").notNull(),
	createdAt: numeric("created_at"),
});

export const users = sqliteTable("users", {
	id: text("id"),
	textModifiers: text("text_modifiers").default("sql`(CURRENT_TIMESTAMP)`").notNull(),
	intModifiers: integer("int_modifiers").default(false).notNull(),
});
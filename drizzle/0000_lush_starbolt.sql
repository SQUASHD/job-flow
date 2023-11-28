-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `status` (
	`status_id` integer PRIMARY KEY NOT NULL,
	`status` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `status_changes` (
	`change_id` integer PRIMARY KEY NOT NULL,
	`job_id` integer NOT NULL,
	`status` integer DEFAULT 0 NOT NULL,
	`date_updated` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	FOREIGN KEY (`status`) REFERENCES `status`(`status_id`) ON UPDATE cascade ON DELETE set default,
	FOREIGN KEY (`job_id`) REFERENCES `__old_push_jobs`(`job_id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `jobs` (
	`job_id` integer PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`company` text NOT NULL,
	`link` text NOT NULL,
	`deadline` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`added_date` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`last_checked` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`application_sent` integer DEFAULT false NOT NULL
);
--> statement-breakpoint
CREATE TABLE `__drizzle_migrations` (
	`id` numeric PRIMARY KEY,
	`hash` text NOT NULL,
	`created_at` numeric
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` text,
	`text_modifiers` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`int_modifiers` integer DEFAULT false NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `jobs_link_unique` ON `jobs` (`link`);
*/
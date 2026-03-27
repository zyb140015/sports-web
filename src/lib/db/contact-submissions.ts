import Database from "better-sqlite3";
import fs from "node:fs";
import path from "node:path";

import type { ContactFormValues } from "@/lib/validations/contact";

const DATABASE_DIRECTORY = path.join(process.cwd(), "data");
const DATABASE_PATH = path.join(DATABASE_DIRECTORY, "app.db");

type ContactSubmissionRecord = ContactFormValues & {
  id: string;
  submittedAt: string;
};

let databaseInstance: Database.Database | null = null;

function getDatabase() {
  if (databaseInstance) {
    return databaseInstance;
  }

  fs.mkdirSync(DATABASE_DIRECTORY, { recursive: true });

  const database = new Database(DATABASE_PATH);

  database.pragma("journal_mode = WAL");
  database.pragma("foreign_keys = ON");

  database.exec(`
    CREATE TABLE IF NOT EXISTS contact_submissions (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      phone TEXT NOT NULL,
      goal TEXT NOT NULL,
      message TEXT NOT NULL,
      submitted_at TEXT NOT NULL
    )
  `);

  databaseInstance = database;

  return database;
}

export function saveContactSubmission(input: ContactFormValues) {
  const database = getDatabase();

  const record: ContactSubmissionRecord = {
    id: crypto.randomUUID(),
    name: input.name,
    phone: input.phone,
    goal: input.goal,
    message: input.message ?? "",
    submittedAt: new Date().toISOString(),
  };

  database
    .prepare(
      `
        INSERT INTO contact_submissions (id, name, phone, goal, message, submitted_at)
        VALUES (@id, @name, @phone, @goal, @message, @submittedAt)
      `
    )
    .run(record);

  return record;
}

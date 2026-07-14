import sqlite from "sqlite3";

const sqlite3 = sqlite.verbose();

const db = new sqlite3.Database("./database/database.db", (err) => {
  if (err) {
    console.error("Erro ao conectar ao banco:", err.message);
  } else {
    console.log("Banco conectado!");
  }
});

db.serialize(() => {
  db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL,
            creation_date TEXT NOT NULL
        );
   `);

  db.run(`
        CREATE TABLE IF NOT EXISTS tasks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT,
            completed INTEGER NOT NULL DEFAULT 0,
            creation_date TEXT NOT NULL,
            completion_date TEXT,
        
            user_id INTEGER NOT NULL,

            FOREIGN KEY (user_id)
            REFERENCES users(id)
            ON DELETE CASCADE
        );
    `);
});

db.run("PRAGMA foreign_keys = ON");

export default db;

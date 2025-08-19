import sqlite3 from "sqlite3";

const sql3 = sqlite3.verbose();

const DB = new sql3.Database(
  "./userdata.db",
  sqlite3.OPEN_READWRITE,
  connected
);

function connected(err) {
  if (err) {
    console.error("Error", err.message);
    return;
  }
  console.log("Connected to DB ✅");
}

DB.run(
  `
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT
  )
`,
  [],
  (err) => {
    //callback function
    if (err) {
        console.error("Error", err.message);
        return;
    }
    console.log("Created table ✅");
  }
);

export { DB };

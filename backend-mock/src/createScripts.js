const CreateTableUsers =
  "CREATE TABLE IF NOT EXISTS Uses (id INTEGER PRIMARY KEY, name TEXT, email TEXT, password TEXT, role TEXT, status TEXT, created_at TEXT, updated_at TEXT)";

module.exports = { CreateTableUsers };

import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "localhost",
  name: "root",
  password: "magasov12345",
  database: "social",
});

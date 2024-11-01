import { db } from "../connect.js";
import bcrypt from "bcryptjs";

export const register = (req, res) => {
  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);

    if (data.length)
      return res.status(409).json("Такого пользователя уже существует");

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.hashedPassword, salt);

    const q =
      "INSERT INTO users (`username`, `email`, `name`, `password`) VALUE (?)";

    const values = [
      req.body.username,
      req.body.email,
      req.body.name,
      hashedPassword,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json("Пользователь создан");
    });
  });
};

export const login = (req, res) => {};

export const logout = (req, res) => {};

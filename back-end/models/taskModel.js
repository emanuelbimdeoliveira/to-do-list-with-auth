import db from "../database/database.js";

const create = (title, description, creation_date, userId, callback) => {
  db.run(
    `
    INSERT INTO tasks (
      title,
      description,
      completed,
      creation_date,
      user_id
    )
    VALUES (?, ?, ?, ?, ?)
    `,
    [title, description, false, creation_date, userId],

    function (err) {
      if (err) {
        return callback(err, null);
      }
      callback(null, this.lastID);
    },
  );
};

const findAll = (userId, callback) => {
  db.all("SELECT * FROM tasks WHERE user_id = ?", [userId], (err, rows) => {
    if (err) {
      return callback(err, null);
    }

    callback(null, rows);
  });
};

const findById = (id, userId, callback) => {
  db.get(
    "SELECT * FROM tasks WHERE id = ? AND user_id = ?",
    [id, userId],
    (err, row) => {
      if (err) {
        return callback(err, null);
      }

      callback(null, row);
    },
  );
};

function deleteById(id, userId, callback) {
  db.run(
    "DELETE FROM tasks WHERE id = ? AND user_id = ?",
    [id, userId],
    function (err) {
      if (err) {
        return callback(err);
      }

      callback(null, this.changes);
    },
  );
}

function update(id, title, description, completed, dateFinish, userId, callback) {
  db.run(
    `
        UPDATE tasks
        SET
            title = ?,
            description = ?,
            completed = ?,
            completion_date = ?
        WHERE id = ?
        AND user_id = ?
        `,
    [title, description, completed, dateFinish, id, userId],
    function (err) {
      if (err) {
        return callback(err);
      }

      callback(null, this.changes);
    },
  );
}
export default {
  create,
  findAll,
  findById,
  deleteById,
  update,
};

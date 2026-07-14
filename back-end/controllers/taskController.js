import taskModel from "../models/taskModel.js";
import {
  idValidator,
  validateRequiredFields,
} from "../validators/userValidators.js";

const createTask = (req, res) => {
  try {
    const { title, description } = req.body;
    validateRequiredFields({ title, description });

    const userId = Number(req.user.id);
    idValidator(userId);

    const creationDate = new Date().toISOString();

    taskModel.create(title, description, creationDate, userId, (err, id) => {
      if (err) {
        return res.status(500).json({
          erro: err.message,
        });
      }

      res.status(201).json({
        mensagem: "Tarefa criada com sucesso",
        id,
      });
    });
  } catch (error) {
    return res.status(400).json({
      mensagem: error.message,
    });
  }
};

const listTasks = (req, res) => {
  try {
    const userId = Number(req.user.id);
    idValidator(userId);

    taskModel.findAll(userId, (err, tasks) => {
      if (err) {
        return res.status(500).json({
          erro: err.message,
        });
      }

      res.json(tasks);
    });
  } catch (error) {
    return res.status(400).json({
      mensagem: error.message,
    });
  }
};

const getTaskById = (req, res) => {
  try {
    const id = Number(req.params.id);
    idValidator(id);

    const userId = Number(req.user.id);
    idValidator(userId);

    taskModel.findById(id, userId, (err, task) => {
      if (err) {
        return res.status(500).json({
          erro: err.message,
        });
      }

      if (!task) {
        return res.status(404).json({
          mensagem: "Tarefa não encontrada",
        });
      }

      res.json(task);
    });
  } catch (error) {
    return res.status(400).json({
      mensagem: error.message,
    });
  }
};

const deleteTask = (req, res) => {
  try {
    const id = Number(req.params.id);
    idValidatior(id);

    const userId = Number(req.user.id);
    idValidatior(userId);

    taskModel.deleteById(id, userId, (err, changes) => {
      if (err) {
        return res.status(500).json({
          erro: err.message,
        });
      }

      if (changes === 0) {
        return res.status(404).json({
          mensagem: "Tarefa não encontrada",
        });
      }

      res.json({
        mensagem: "Tarefa removida com sucesso",
      });
    });
  } catch (error) {
    return res.status(400).json({
      mensagem: error.message,
    });
  }
};

const updateTask = (req, res) => {
  try {
    const id = Number(req.params.id);
    idValidatior(id);

    const userId = Number(req.user.id);
    idValidator(userId);

    const { title, description, completed } = req.body;
    validateRequiredFields(title);

    const completionDate = completed ? new Date().toISOString() : null;

    taskModel.update(
      id,
      title,
      description,
      completed,
      completionDate,
      userId,
      (err, changes) => {
        if (err) {
          return res.status(500).json({
            erro: err.message,
          });
        }

        if (changes === 0) {
          return res.status(404).json({
            mensagem: "Tarefa não encontrada",
          });
        }

        res.json({
          mensagem: "Tarefa atualizada com sucesso",
        });
      },
    );
  } catch (error) {
    return res.status(400).json({
      mensagem: error.message,
    });
  }
};

export { createTask, listTasks, getTaskById, deleteTask, updateTask };

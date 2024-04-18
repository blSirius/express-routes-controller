const pool = require('../database/database');

const getTasks = async (req, res) => {
    try {
        const [tasks] = await pool.query('SELECT * FROM tasks');
        res.status(200).json({ msg:'getTasks Successfully',tasks });
    } catch (error) {
        res.status(500).json({ msg: 'Error getTasks' });
    }
};

const postTasks = async (req, res) => {
    try {
        const list = req.body.list;
        await pool.query('INSERT INTO tasks (list) VALUE (?)', [list]);
        res.status(200).json({ msg: 'postTasks Successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error postTasks' });
    }
};

const updateTasks = async (req, res) => {
    try {
        const { id, newList } = req.body;
        await pool.query('UPDATE tasks SET list = ? WHERE id = ?', [newList, id]);
        res.status(200).json({ msg: 'updateTask Successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error updateTask' });
    }
};

const deleteTasks = async (req, res) => {
    try {
        const { id } = req.body;
        await pool.query('DELETE FROM tasks WHERE id = ?', [id]);
        res.status(200).json({ msg: 'deleteTask Successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error deleteTask' });
    }
};


module.exports = { getTasks, postTasks, updateTasks, deleteTasks };
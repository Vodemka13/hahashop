const db = require('../db')
const fs = require('fs');


class ModelController {
    async createModel(req, res) {
        const {name, descr, fulldesc, bill, img} = req.body
        const newModel = await db.query(`INSERT INTO models (name, descr, fulldesc, bill, img) values ($1, $2, $3, $4, $5) RETURNING *`, [name, descr, fulldesc, bill, img])
        res.json(newModel.rows[0])
        const models = await db.query(`SELECT * FROM models`)
        const data = JSON.stringify(models.rows, '\n', ' ');
        fs.writeFile('../client/src/models.json', data, (err) => {
            if (err) {
                throw err;
            }
        });
    }
    async getModels(req, res) {
        const models = await db.query(`SELECT * FROM models`)
        res.json(models.rows)

        const data = JSON.stringify(models.rows, '\n', ' ');
        fs.writeFile('../client/src/models.json', data, (err) => {
            if (err) {
                throw err;
            }
        });
    }
    async getOneModel(req, res) {
        const id = req.params.id
        const model = await db.query(`SELECT * FROM models where id = $1`, [id])
        res.json(model.rows[0])
    }
    async updateModel(req, res) {
        const {id, name, descr, fulldesc, bill, img} = req.body
        const model = await db.query(`UPDATE models set name = $1, descr = $2, fulldesc = $3, bill = $4, img = $5 where id = $6 RETURNING *`, [name, descr, fulldesc, bill, img, id])
        res.json(model.rows[0])
        const models = await db.query(`SELECT * FROM models`)
        const data = JSON.stringify(models.rows, '\n', ' ');
        fs.writeFile('../client/src/models.json', data, (err) => {
            if (err) {
                throw err;
            }
        });
    }
    async deleteModel(req, res) {
        const id = req.params.id
        const model = await db.query(`DELETE FROM models where id = $1`, [id])
        res.json(model.rows[0])
        const models = await db.query(`SELECT * FROM models`)
        const data = JSON.stringify(models.rows, '\n', ' ');
        fs.writeFile('../client/src/models.json', data, (err) => {
            if (err) {
                throw err;
            }
        });
    }
}

module.exports = new ModelController()

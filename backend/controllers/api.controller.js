'use strict';
const model = require('../models');

// Changing  to Sequelize

exports.getAllBySport = async (req, res) => {
const type = req.params.type === "football" ? "Football" : "Basketball";
const data = await  model.Allgames.findAll({where: {Category: type}});
res.send(data);
};

// Changing  to Sequelize


exports.getComment = async (req, res) => {
    const id = req.params.id;
    const all = new Promise((resolve, reject) => {
      sqlServer.query(
        `SELECT * FROM comments WHERE game_id=${id}`,
        (err, rows) => {
          err ? reject(err) : resolve(rows);
        }
      );
    });
    try {
      const data = await all;
      res.send(data);
    } catch (e) {
      console.log(e);
    }
  };


exports.addNewComment =  async (req, res) => {
      const body = req.body.comment.body;
      const commenter = req.body.comment.commenter;
      const gameId = req.params.id;
      const datetime = req.body.comment.datetime;
      const comment = new Promise((resolve, reject) => {
          sqlServer.query(
              `INSERT INTO comments (datetime,game_id,commenter,comment_body) VALUES ("${datetime}", "${gameId}", "${commenter}", "${body}")`,
              (err) => {
                  err ? reject(err) : resolve(true);
              }
          );
      });
      try {
          const data = await comment;
          res.send(data);
      } catch (e) {
         console.log(e);
      }
  };



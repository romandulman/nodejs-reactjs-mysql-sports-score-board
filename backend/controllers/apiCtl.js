const sqlServer = require("../config/mysql");

exports.getAllBySport = async (req, res) => {
    const type = req.params.type === "football" ? "Football" : "Basketball";
    const all = new Promise((resolve, reject) => {
      sqlServer.query(
        `SELECT * FROM allgames WHERE Category="${type}"`,
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
                  err ? reject(err) : resolve();
              }
          );
      });
      try {
           await comment;
          res.status(200);
      } catch (e) {
         console.log(e);
      }
  };



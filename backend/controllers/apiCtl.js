const sqlServer = require("../config/mysql");

class ctl {
  getAllfoootball = (req, res) => {
    // sqlServer.query('SELECT * FROM allgames WHERE Category="Football"', (err, rows, fields) => {
    sqlServer.query(
      `SELECT * FROM allgames WHERE Category="Football"`,
      (err, rows, fields) => {
        if (err) throw err;
        res.send(rows);
      }
    );
  };

  getAllbasketball = (req, res) => {
    sqlServer.query(
      `SELECT * FROM allgames WHERE Category="Basketball"`,
      (err, rows, fields) => {
        if (err) throw err;
        res.send(rows);
      }
    );
  };

  getComment = (req, res) => {
    const id = req.params.id;
    sqlServer.query(
      `SELECT * FROM comments WHERE game_id=${id}`,
      (err, rows, fields) => {
        if (err) throw err;
        res.send(rows);
        console.log(rows);
      }
    );
  };
  addNewComment = (req, res) => {
    const body = req.body.comment.body;
    const commenter = req.body.comment.commenter;
    const gameId = req.params.id;
    const datetime = req.body.comment.datetime;
    sqlServer.query(
      `INSERT INTO comments (datetime,game_id,commenter,comment_body) VALUES ("${datetime}", "${gameId}", "${commenter}", "${body}")`,
      (err, rows, fields) => {
        if (err) throw err;
      }
    );
  };
}

module.exports = new ctl();

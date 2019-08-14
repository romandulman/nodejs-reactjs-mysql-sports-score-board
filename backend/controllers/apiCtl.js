const sqlServer = require('../config/mysql');

class ctl {
    getAllfoootball = (req, res) => {
       // sqlServer.query('SELECT * FROM allgames WHERE Category="Football"', (err, rows, fields) => {
        sqlServer.query('SELECT * FROM comments INNER JOIN allgames ON comments.game_id=allgames.id WHERE Category="Football"', (err, rows, fields) => {
            if (err) throw err;
            res.send(rows);
        });
    };

    getAllbasketball = (req, res) => {
        sqlServer.query('SELECT * FROM allgames WHERE Category="Basketball"', (err, rows, fields) => {
            if (err) throw err;
            res.send(rows);
        });
    };
    addNewComment = (req, res) => {
        let body = req.body.comment.body;
        let commenter = req.body.comment.commenter;
        let gameId = req.body.comment.gameid;
        let datetime = req.body.comment.datetime;

        sqlServer.query(`INSERT INTO comments (datetime,game_id,commenter,comment_body) VALUES ("${datetime}", "${gameId}", "${commenter}", "${body}")`, (err, rows, fields) => {
            if (err) throw err;

        });
    };

}

module.exports = new  ctl;
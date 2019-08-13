const sqlServer = require('../config/mysql');

class ctl {
    getAll = (req, res) => {
        sqlServer.query('SELECT * FROM posts', (err, rows, fields) => {
            if (err) throw err;
           // (req.originalUrl == '/') ? (res.render('index', {posts: rows})) : (res.send(rows))
            res.send('ok');
            console.log(rows)
        });
    };

    addNew = (req, res) => {
        let title = req.body.post.title;
        let body = req.body.post.body;
        sqlServer.query(`INSERT INTO posts (title,body) VALUES ("${title}", "${body}")`, (err, rows, fields) => {
            if (err) throw err;
            (req.originalUrl == '/') ? (res.redirect('http://localhost:3000')) : (res.send(this.allPosts()))
        });

    };
    getSingle = (req, res) => {
        let id = req.params.id;
        sqlServer.query(`SELECT * FROM posts WHERE id = ${id} LIMIT 1`, (err, rows, fields) => {
            if (err) throw err;
            res.render('single', {post: rows[0]})
        })
    };

    delSingle = (req, res) => {
        let id = req.params.id;

        sqlServer.query(`DELETE FROM posts WHERE id = ${id} LIMIT 1`, (err, rows, fields) => {
            if (err) throw err;
            (req.originalUrl == '/') ? (res.redirect('http://localhost:3000')) : (res.send(rows))
            console.log(rows);

        })
    };

    editSingle = (req, res) => {
        let id = req.params.id;
        sqlServer.query(`SELECT * FROM posts WHERE id = ${id} LIMIT 1`, (err, rows, fields) => {
            if (err) throw err;
            res.render('editpost', {post: rows[0]})
        })
    };

    updateSingle = (req, res) => {
        let id = req.params.id;
        let title = req.body.title;
        let body = req.body.body;
        sqlServer.query(`UPDATE posts SET title = "${title}" , body= "${body}" WHERE id = ${id}`, (err, rows, fields) => {
            if (err) throw err;
           // res.redirect("/");
        })
    }


}

module.exports = new  ctl;
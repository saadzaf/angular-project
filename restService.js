var app = require("express")();


function createconnection() {
    var sql = require("mysql");
    var config = {
        server: "localhost",
        user: "root",
        password: "",
        database: "cdactraining"
    }
    var con = sql.createConnection(config);
    return con;
}

app.get('/:id', (req, res) => {
    var id = req.params.id;
    var con = createconnection();
    var abc = "select * from resTable where resId =" + id;
    con.query(abc, (err, result) => {
        if (err) res.send("errored occured");
        res.send(result);
    });
})
app.get('/', (req, res) => {
    var id = req.params.id;
    var con = createconnection();
    var abc = "select * from resTable ";
    con.query(abc, (err, result) => {
        if (err) res.send("errored occured");
        res.send(result);
    });
})

app.get('/menus/:id', (req, res) => {
    var id = req.params.id;
    var con = createconnection();
    var query = "select * from menuTable where res_Id =" + id;
    con.query(query, (err, result) => {
        if (err) res.send("errored occured");
        res.send(result);
    });
})

app.listen(1234, () => {
    console.log("Server available at 1234");
})
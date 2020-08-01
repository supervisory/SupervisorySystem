const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mysql = require('mysql')
const portApi = 3030

app.use(bodyParser.json())
app.use(cors())

function execSQLQuery (sqlQry, res) {
  const connection = mysql.createConnection({
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: '',
      database: 'supervisorysystem'
  })

  connection.query(sqlQry, function(error, results, fields){
      if(error)
        res.json(error)
      else
        res.json(results)
      connection.end()
      console.log('executou!')
  })
}

app.get('/apiQuery', function(req, res) {

  req = 'SELECT * FROM sistemasupervisorioitt LIMIT 10'

  execSQLQuery(req, res)
})

app.listen(portApi, function() {
  console.log('Servidor rodando na porta:', portApi)
})
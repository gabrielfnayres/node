const express = require('express')
const app = express()
const port = 3000

// CRUD -> CREATE, READ, UPDATE, DELETE
//           POST  GET PUT DELETE


app.use(
    express.urlencoded(
        {
            extended: true  
        }
    )
)

app.get('/', (req, res) => {
    res.send(`<form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar imagem</button>
    </form
    >`)
})

app.get('/testes/:idUsers?/:parametro?', (req, res) => {
    console.log(req.params)
    console.log(req.query)
    res.send(req.params)
})



app.post('/', (req, res) => {
    console.log(res.body)
    res.send('Recebi o formulário!')
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
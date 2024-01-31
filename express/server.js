const express = require('express')
const app = express()
const port = 3000

// CRUD -> CREATE, READ, UPDATE, DELETE
//           POST  GET PUT DELETE

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/button', (req, res) => {
    res.send(`<form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form
    >`)
})

app.post('/', (req, res) => {
    res.send('Recebi o fomulário')
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
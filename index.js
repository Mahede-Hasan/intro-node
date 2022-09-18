const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())

app.use(express.json())

const users = [
    { id: 1, name: 'salman', email: 'salman@gmail.com' },
    { id: 2, name: 'shahrukh', email: 'shahrukh@gmail.com' },
    { id: 3, name: 'saif ali', email: 'saif@gmail.com' },
    { id: 4, name: 'amir', email: 'amir@gmail.com' },
    { id: 5, name: 'akshay', email: 'akshay@gmail.com' },
    { id: 6, name: 'rabir', email: 'ranbir@gmail.com' },
    { id: 7, name: 'shahed', email: 'shahed@gmail.com' }
]

app.get('/', (req, res) => {
    res.send('hello from node');
})

app.get('/users', (req, res) => {
    if(req.query.name){
        const search = req.query.name.toLocaleLowerCase();
        const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(matched)
    }
    else{
        res.send(users)
    }
   
})

app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find(u => u.id == id);
    res.send(user)
})

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user)
})

app.listen(port, () => {
    console.log('this is port', port)
})
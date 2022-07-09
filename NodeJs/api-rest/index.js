import express from 'express'; //npm i express
import {StatusCodes} from 'http-status-codes';

const app = express();
const PORT = process.env.PORT || 3000;
let users = [
    {id: 1, name: "Filipe Cayres", age:31 },
    {id: 2, name: "Cecília Agostinho", age:26 },
];

app.use(express.json()); //garante que os requests/objetos sejam enviados no formato json

app.listen(PORT, () =>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.get('/', (request, response) =>{
    return response.send('<h1> Trabalhando com servidor express.</h1>');
});

app.get('/users', (request, response) => {
    return response.send(users);
});

app.get('/users/:userId', (request, response) =>{
    const userId = request.params.userId;
    const user = users.find(user => {
       return (user.id === Number(userId))
    })
    return response.send(user);
});

app.post('/users', (request, response) =>{
    const NewUser = request.body;

    users.push(NewUser);

    return response.status(StatusCodes.CREATED).send(NewUser); //npm i http-status-codes para importar os status como se fossem uma constante
});

app.put('/users/:userId', (request, response) =>{
    const userId = request.params.userId;
    const updateUser = request.body;

    users = users.map(user => {
        if(Number(userId) === user.id) {
            return updateUser;
        }

        return user;
    });

    return response.send(updateUser);
});

app.delete('/users/:userId', (request,response) =>{
    const userId = request.params.userId;

    users = users.filter((user) => user.id !== Number(userId));

    return response.status(StatusCodes.NO_CONTENT).send();
});
import { error } from 'console';
import express , {Express} from 'express';
import path  from 'path';


const app: Express =  express()

const PORT: number = 3000


app.use(express.json())

app.use(express.static(path.join(__dirname,'../public')));

app.get('/hello',(req,res) =>{
    res.json({msg: "Hello world!"})
})

app.get('/echo/:id',(req,res)=>{
    const { id }= req.params
    res.json({id});

})

app.post('/sum', (req, res) => {
    const { numbers } = req.body;
    if (Array.isArray(numbers)) {
      const sum = numbers.reduce((acc, num) => acc + num, 0);
      res.json({ sum });
    } else {
      res.status(400).json({ error: 'numbers must be an array' });
    }
  });



type TUser = {name:string,email:string};
const users: TUser[] = [];


app.post('/users',(req, res) =>{
    const {name,email} = req.body;
    if (!name || !email) {
        res.status(400).json({ error: "Name and email are required" });
    }
        users.push({ name, email });
        res.json({ message: "User successfully added" });
})

app.get('/users', (req, res) => {
    res.status(201).json(users);
  });

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });




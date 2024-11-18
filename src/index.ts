import {Request, Response, Router} from "express";  

import fs from "fs"

import { compile } from "morgan";


const router: Router = Router()

type TUser = {name:string,email:string};
const users: TUser[] = [];

router.get("/users", (req: Request, res: Response) => {
    res.status(201).json(users);
})

router.get('/echo/:id',(req: Request,res: Response)=>{
    const { id }= req.params
    res.json({id});

})

router.get('/hello',(req,res) =>{
    res.json({msg: "Hello world!"})
})

router.post('/sum', (req: Request, res: Response) => {
    const { numbers } = req.body;
    if (Array.isArray(numbers)) {
      const sum = numbers.reduce((acc, num) => acc + num, 0);
      res.json({ sum });
    } else {
      res.status(400).json({ error: 'numbers must be an array' });
    }
  });


router.post('/users',(req, res) =>{
    const {name,email} = req.body;
    if (!name || !email) {
        res.status(400).json({ error: "Name and email are required" });
    }
        users.push({ name, email });
        res.json({ message: "User successfully added" });
})

export default router
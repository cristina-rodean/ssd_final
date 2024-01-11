import {Router} from 'express';
import { sample_users } from '../data';
import jwt from "jsonwebtoken";

const router=Router();

router.post("/login", (req, res) => {
    const {email, password} = req.body;
    const user = sample_users.find(user => user.email === email 
      && user.password === password);
  
     if(user) {
      res.send(generateTokenReponse(user));
     }
     else{
       const BAD_REQUEST = 400;
       res.status(BAD_REQUEST).send("Username or password is invalid!");
     }
  
  })

//   router.post('/register', (req, res) =>{
//       const {name, email, password, address} = req.body;
//       const user = sample_users.findOne({email});
//       if(user){
//         res.status(HTTP_BAD_REQUEST)
//         .send('User already exists, please login!');
//         return;
//       }
//   })
  
  const generateTokenReponse = (user : any) => {
    const token = jwt.sign({
      email:user.email, isAdmin: user.isAdmin
    },"SomeRandomText",{
      expiresIn:"30d"
    });
  
    user.token = token;
    return user;
  }

  export default router;
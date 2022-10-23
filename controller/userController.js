import User from "../model/userModel.js";
export const getUserController = async (req,res) =>{
    try{
         const users = await User.find();
         res.status(200).send(users);

    }catch(error){
        console.log(error);
    }
}
export const addUserController = async (req, res) => {
    const {uName, uEmail, uCell, uAge} = req.body;
    if (!uName || !uEmail|| !uCell || !uAge)
    {   
        
       return res.status(422).json({error:"plz filled all field"});   
    }
    try {
        const userExist = await User.findOne({uEmail:uEmail});
        if (userExist){
           return res.status(422).json({error:"Email already exist"});
        }

        const newUsers = new User(req.body);
        await newUsers.save();
        res.status(200).json({message:"User  Created Successfully!"});
        

    } catch(err) {
        console.log(err);
    }

}
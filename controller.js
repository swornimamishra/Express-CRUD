// import Helper from './helper.js'
// const users = [
//     {
//     id:1,
//     name:'swarnima mishra',
//     email:'swarnima@gmail.com',
//     mobile:'45621789562',
//     passward:'Admin@123'
// },
// {
//     id:2,
//     name:'sushant mishra',
//     email:'sushant@gmail.com',
//     mobile:'45621895482',
//     passward:'Admin@124'
// },
// ]
// const index = (req, res) => {
//     res.status(200).send('<h1>Express CRUD</h1>');
// };

// //now i want all the users
// const getAllUsers = (req,res)=>{
//     res.status(200).send({
//         message:"Data Fetch Successful",
//         users
//     })
// }

// const getUsersById =(req,res)=>{
//     console.log(req.params)
//     res.status(200).send({
//         message:"Data Fetch Successful",
//     })
   
// }

// export default {
//     index,
//     getAllUsers,
//     getUsersById
    
// };


import Helper from './helper.js';

const users = [
    {
        id: 1,
        name: 'Swarnima Mishra',
        email: 'swarnima@gmail.com',
        mobile: '45621789562',
        password: 'Admin@123'
    },
    {
        id: 2,
        name: 'Sushant Mishra',
        email: 'sushant@gmail.com',
        mobile: '45621895482',
        password: 'Admin@124'
    },
];

const index = (req, res) => {
    res.status(200).send('<h1>Express CRUD</h1>');
};

const getAllUsers = (req, res) => {
    res.status(200).send({
        message: "Data Fetch Successful",
        users
    });
};

const getUserById = (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const userIndex = Helper.findIndex(users, userId);
    const user = users[userIndex];

    if (user) {
        res.status(200).send({
            message: "User Found",
            user
        });
    } else {
        res.status(404).send({
            message: "User Not Found"
        });
    }
}
const createUser = (req,res)=>{
    const duplicateUser = users.filter((e)=>e.Email==req.body.Email)
    if(duplicateUser==0)       
        {
    req.body.id =  users.length?users[users.length-1].id+1:1
    users.push(req.body)                               
    console.log(req.body)
    res.status(200).send({
        message:"user created successfully",
    })
}  
else
{
    res.status(200).send({
        message:`user with ${req.body.Email} all ready exist`,
    }) 
}  
}  
const editUserById = (req, res) => {
    let{id}= req.params                              
    const index = Helper.findIndex(users, id);
    

    if (index!=-1)
         {
            req.body.id  = id
            users.splice(index,1,req.body)                       
        res.status(200).send({
            message: "User Edited Successfully ",
            // user:users[index]
        })
    } else {
        res.status(404).send({
            message: "User Not Found invalid id "
        });
    }
}
const deleteUserById = (req, res) => {
    let{id}= req.params                              
    const index = Helper.findIndex(users, id);
    

    if (index!=-1)
         {
            req.body.id  = id
            users.splice(index,1)                       
        res.status(200).send({
            message: "User Deleted Successfully ",
            // user:users[index]
        })
    } else {
        res.status(404).send({
            message: "User Not Found invalid id "
        });
    }
}


export default {
    index,
    getAllUsers,
    getUserById,
    createUser,
    editUserById,
    deleteUserById
};


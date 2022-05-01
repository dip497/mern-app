const router = require('express').Router();
// import todo model

const todoItemModel = require('../models/todoItems');

// create
router.post('/api/item', async (req,res)=>{
    try{
        const newitem = new todoItemModel({
            item : req.body.item
        })
        const saveItem = await newitem.save();
        res.status(200).json('Item Added Successfully');
    }catch(err){
        res.json(err);
    }
})


//get 

router.get('/api/items', async (req, res)=>{
    try{
        const allTodoItems = await todoItemModel.find({});
        res.status(200).json(allTodoItems)

    }catch(err){
        res.json(err);
    }
})

// update

router.put('/api/item/:id', async (req,res)=>{
    try{
        // find the ite,
        const updateItem = await todoItemModel.findByIdAndUpdate(req.params.id,{$set:req.body});
        res.status(200).json('Item Updated')


    }catch(err){
        res.json(err);
    }
})

// delete
router.delete('/api/item/:id', async (req,res)=>{
    try{
        // find the ite,
        const deleteItem = await todoItemModel.findByIdAndDelete(req.params.id);
        res.status(200).json('Item Deleted')


    }catch(err){
        res.json(err);
    }
})


// export router
module.exports = router;
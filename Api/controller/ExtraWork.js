const { extraWorkModel } = require("../Model/ExtraWorkModel")


exports.extraWork = async(req,res)=>{
    try{
        const samedata = await extraWorkModel.findOne({ consignId:req.body.data.consignId}) 
        if(samedata){
            return res.status(400).send("Data Already Exist")
        }else{
            const data = await extraWorkModel.create({
                consignId:req.body.data.consignId,
                first:req.body.first,
                second:req.body.second,
                third:req.body.third,
                five:req.body.five,
                four:req.body.four
               });
               res.status(200).send("data insert Sucessfull ");
        }
    }catch(err){
        res.status(400).send("error occur")
    }
}

exports.viewExtraWork=async(req,res)=>{
    try{
        const data = await extraWorkModel.find({consignId:req.params.id}).populate('consignId')
        res.status(200).send(data)
    }catch(err){
        res.status(400).send("error")
    } 
}
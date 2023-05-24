const { extraWorkModel } = require("../Model/ExtraWorkModel")


exports.extraWork = async(req,res)=>{
    try{
   const data = await extraWorkModel.create({
    consignId:req.body.data.consignId,
    extrawork:req.body.data.extrawork,
    first:req.body.first,
    second:req.body.second,
    third:req.body.third,
    four:req.body.four
   });
   res.status(200).send("data insert Sucessfull ");
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
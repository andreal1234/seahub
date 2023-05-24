const mongoose = require("mongoose");

const extraWorkSchema = new mongoose.Schema({
    consignId:{ type:mongoose.Schema.Types.ObjectId,ref:"consignment",required:true},
    extrawork:{type: String},
    first:[
        {
        carbooking:{type: String},
        from: {type: String},
        to: {type: String},
        forwhom: {type: String},
        purpose:{type: String}
        }
    ],
    second: [
        {
          hoterName: {type: String},
          from: {type: String},
          to: {type: String},
          forwhom: {type: String},
          purpose: {type: String}
        }
      ],
      third: [
        {
          supervisor: {type: String},
          supplyQuentity: {type: String},
          vendorname:{type: String},
          crewname: {type: String}
        }
      ],
      four: [
        { 
            crewName: {type: String}
        },
      ]
})
const extraWorkModel = new mongoose.model("extrawork",extraWorkSchema);
module.exports = {extraWorkModel};
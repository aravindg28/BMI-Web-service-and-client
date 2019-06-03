/**
 * ComputebmiController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
 calculateBMI336: function(req,res){
     let weight = req.query.weight;
     let height = req.query.height;

     let result = Math.round(weight / (height * height));
     let obj = {bmi:result};
     res.json(obj);       
  }

};


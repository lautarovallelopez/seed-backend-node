const{Country} = include('models');

class CountryController{
    static async fetch(req,res,next){
        try{
            const countries = await Country.find(req.query);
            res.send(countries);
        }catch(err){
            next(err);
        }
    };
};
module.exports = CountryController;
var Hotels = require('../models/Hotels');
// List of all Costumes
exports.Hotels_list = async function(req, res) {
    try{
        theHotels = await Hotels.find();
        res.send(theHotels);
    }
    catch(err){
        res.error(500,`{"error": ${err}}`);
    }
};
// for a specific Costume.
exports.Hotels_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Hotels detail: ' + req.params.id);
};
// Handle Costume create on POST.
// Handle Costume create on POST.
exports.Hotels_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Hotels();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costumetype":"goat", "cost":12, "size":"large"}
    document.roomType = req.body.costumetype;
    document.price = req.body.price;
    document.location = req.body.location;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
    };
// Handle Costume delete form on DELETE.
exports.Hotels_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Hotels delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.Hotels_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Hotels update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.Hotels_view_all_Page = async function(req, res) {
    try{
        theHotels = await Hotels.find();
        res.render('Hotels', { title: 'Hotels Search Results', results: theHotels });
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
};
var Gizmo = require('../models/gizmo');
// List of all Gizmos
exports.gizmo_list = async function(req, res) {
    try {
        theGizmos = await Gizmo.find();
        res.send(theGizmos);
    } catch(err) {
        res.status(500);
        res.send(`{"error":${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.gizmo_view_all_Page = async function(req, res) {
    try{
    theGizmos = await Gizmo.find();
    res.render('gizmo', { title: 'Gizmo Search Results', results: theGizmos });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

// for a specific Gizmo.
exports.gizmo_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Gizmo detail: ' + req.params.id);
};
// Handle Gizmo create on POST.
// Handle Gizmo create on POST.
exports.gizmo_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Gizmo();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"gizmo_type":"goat", "cost":12, "size":"large"}
    document.gizmo_name = req.body.gizmo_name;
    document.price = req.body.price;
    document.functionality = req.body.functionality;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// Handle Gizmo delete from on DELETE.
exports.gizmo_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Gizmo delete DELETE ' + req.params.id);
};
// Handle Gizmo update form on PUT.
exports.gizmo_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Gizmo update PUT' + req.params.id);
};

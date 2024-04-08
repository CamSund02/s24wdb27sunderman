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

// for a specific Gizmo.// for a specific gizmo.
exports.gizmo_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Gizmo.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
// Handle Gizmo delete on DELETE.
exports.gizmo_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Gizmo.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};
// Handle Gizmo update form on PUT.
exports.gizmo_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Gizmo.findById( req.params.id)
        // Do updates of properties
        if(req.body.gizmo_name)toUpdate.gizmo_name = req.body.gizmo_name;
        if(req.body.price) toUpdate.price = req.body.price;
        if(req.body.functionality) toUpdate.functionality = req.body.functionality;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}failed`);
    }
};


//Added in Assignment 14 part 4 sub 2
// Handle a show one view with id specified by query
exports.gizmo_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
        result = await Gizmo.findById( req.query.id)
        res.render('gizmodetail',
        { title: 'Gizmo Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a gizmo.
// No body, no in path parameter, no query.
// Does not need to be async
exports.gizmo_create_Page = function(req, res) {
    console.log("create view")
    try{
        res.render('gizmocreate', { title: 'Gizmo Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a gizmo.
// query provides the id
exports.gizmo_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await Gizmo.findById(req.query.id)
        res.render('gizmoupdate', { title: 'Gizmo Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
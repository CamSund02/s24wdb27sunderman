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
    res.render('costumes', { title: 'Costume Search Results', results: theGizmos });
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
exports.gizmo_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Gizmo create POST');
};
// Handle Gizmo delete from on DELETE.
exports.gizmo_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Gizmo delete DELETE ' + req.params.id);
};
// Handle Gizmo update form on PUT.
exports.gizmo_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Gizmo update PUT' + req.params.id);
};

var Gizmo = require('../models/gizmo');
// List of all Gizmos
exports.gizmo_list = function(req, res) {
res.send('NOT IMPLEMENTED: Gizmo list');
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

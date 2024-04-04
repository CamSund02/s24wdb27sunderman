var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var gizmo_controller = require('../controllers/gizmo');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// GIZMO ROUTES ///
// POST request fo creating a Gizmo.
router.post('/gizmos', gizmo_controller.gizmo_create_post);
// DELETE request to delete Gizmo.
router.delete('/gizmo/:id', gizmo_controller.gizmo_delete);
// PUT request to update Gizmo.
router.put('/gizmo/:id', gizmo_controller.gizmo_update_put);
// GET request for one Gizmo.
router.get('/gizmo/:id', gizmo_controller.gizmo_detail);
// GET request for list of all Gizmo items.
router.get('/gizmo', gizmo_controller.gizmo_list);
module.exports = router;
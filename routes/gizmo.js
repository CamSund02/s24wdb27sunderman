var express = require('express');
const gizmo_controlers= require('../controllers/gizmo');
var router = express.Router();

/* GET gizmos */
router.get('/', gizmo_controlers.gizmo_view_all_Page );

/* GET detail gizmo page */
router.get('/detail', gizmo_controlers.gizmo_view_one_Page);

/* GET create costume page */
router.get('/create', gizmo_controlers.gizmo_create_Page);

/* GET create update page */
router.get('/update', gizmo_controlers.gizmo_update_Page);

/* GET delete costume page */
router.get('/delete', gizmo_controlers.gizmo_delete_Page);



/* idk if this is supposed to be here still
 GET gizmo page. 
router.get('/', function(req, res, next) {
  res.render('gizmo', { title: 'Search Results Gizmo' });
})

module.exports = router;
*/

//Keep this at the bottom
module.exports = router;

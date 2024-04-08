var express = require('express');
const gizmo_controlers= require('../controllers/gizmo');
var router = express.Router();

/* GET gizmos */
router.get('/', gizmo_controlers.gizmo_view_all_Page );

/* GET detail gizmo page */
router.get('/detail', gizmo_controlers.gizmo_view_one_Page);


/* idk if this is supposed to be here still
 GET gizmo page. 
router.get('/', function(req, res, next) {
  res.render('gizmo', { title: 'Search Results Gizmo' });
})

module.exports = router;
*/

//Keep this at the bottom
module.exports = router;

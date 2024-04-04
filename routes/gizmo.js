var express = require('express');
const gizmo_controlers= require('../controllers/gizmo');
var router = express.Router();

/* GET gizmos */
router.get('/', gizmo_controlers.gizmo_view_all_Page );
module.exports = router;

/* idk if this is supposed to be here still
 GET gizmo page. 
router.get('/', function(req, res, next) {
  res.render('gizmo', { title: 'Search Results Gizmo' });
})

module.exports = router;
*/
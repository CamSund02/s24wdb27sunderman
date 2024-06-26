var express = require('express');
const gizmo_controlers= require('../controllers/gizmo');
var router = express.Router();

//is this supposed to be here
//I think so
const secured = (req, res, next) => {
  if (req.user){
  return next();
  }
  res.redirect("/login");
}

/* GET gizmos */
router.get('/', gizmo_controlers.gizmo_view_all_Page );

/* GET detail gizmo page */
router.get('/detail', secured, gizmo_controlers.gizmo_view_one_Page);

/* GET create gizmo page */
router.get('/create', secured, gizmo_controlers.gizmo_create_Page);

/* GET update gizmo page */
router.get('/update', secured, gizmo_controlers.gizmo_update_Page);

/* GET delete gizmo page */
router.get('/delete', secured, gizmo_controlers.gizmo_delete_Page);



/* idk if this is supposed to be here still
 GET gizmo page. 
router.get('/', function(req, res, next) {
  res.render('gizmo', { title: 'Search Results Gizmo' });
})

module.exports = router;
*/

//Keep this at the bottom
module.exports = router;

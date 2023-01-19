const express = require('express');
var route = express.Router();

const services = require('../services/render');
const controller =require('../controller/controller');

/**
 * @description Root Route
 * @method GET / 
 */

route.get('/',services.homeRoutes); 
/**
 * @description for insert student
 * @method GET / 
 */


route.get('/student/home',services.homeRoutes);
/**
 * @description for list student
 * @method GET / student/list
 */


route.get('/student/list',services.list);
route.get('/student/Delete',services.list);
/**
 * @description for update student
 * @method GET / student/update
 */


route.get('/student/update',services.update);

//API
route.post('/api/student', controller.create);
route.get('/api/student', controller.find);
route.put('/api/student/:id', controller.update);
route.delete('/api/student/:id', controller.delete);

module.exports = route
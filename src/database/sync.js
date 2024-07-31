const connection = require('./connection');

require('../models/CategoryModels');
require('../models/UserModels');
require('../models/ProductModel');

connection.sync({force: true});
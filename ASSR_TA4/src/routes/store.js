const {Router} = require("express");
const router = Router();
const{ getStore } =
require("../controller/store.controller");
router.get('/', getStore);
module.exports = router;
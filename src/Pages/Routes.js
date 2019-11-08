const router = require("express").Router();
const tankRoutes = require("../components/Tanks/Tanks");


router.use("/", tankRoutes); //create login

router.use("/login", tankRoutes);

router.use("/temp", tankRoutes); //main page with tanks

router.use("/tank/:id", tankRoutes); //single tank page

module.exports = router;



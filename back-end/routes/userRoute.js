const {Router} = require('express');



const router  = Router();

router.get('/auth/signUp',signUp);
router.get('/auth/login', login);



module.exports = router;
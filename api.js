var User = require('./models/user');

module.exports = function(router){

    router.post('/newuser', function(req,res){
        var user = new User();
        user.username = req.body.username;
        user.password = req.body.password;
        user.email = req.body.email;
        user.skills = req.body.skills;

        user.save(function(err){
            if(err){
                console.log(err);
                res.json({
                    error: err,
                    success: false,
                    message: 'User have not been saved!'
                });
            }else{
                res.json({
                    success: true,
                    message: 'User created!',
                    user: user
                });

            }
        })
    });

    router.get('/getUsers', function(req,res){

        User.find(function(err, users){
            if(err){
                res.send(err);
            }else{
                res.json(users);
            }
        })
    });

    router.get('/getUser/:username', function(req,res){

        User.find(function(err, users){
            if(err){
                res.send(err);
            }else{
                res.json(users);
            }
        })
    });

    return router;
}

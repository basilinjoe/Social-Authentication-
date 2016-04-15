/**
 * ApiController
 *
 * @description :: Server-side logic for managing apis
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	me:function(req,res){
		console.log('req.user',req.user);
		User.findOne({id:req.user})
				.then(function(user) {
    			res.send(user);
  			})
				.catch(function(err){
					res.send(500,err);
				});
	},
	unlink:function(req, res) {
  var provider = req.param('provider');
  var providers = ['facebook', 'foursquare', 'google', 'github', 'instagram',
    'linkedin', 'live', 'twitter', 'twitch', 'yahoo'];

  if (providers.indexOf(provider) === -1) {
    return res.status(400).send({ message: 'Unknown OAuth Provider' });
  }

  User.findOne({id:req.user}).then(function(user) {
    if (!user) {
      return res.status(400).send({ message: 'User Not Found' });
    }
    user[provider] = undefined;
    user.save(function() {
      res.status(200).end();
    });
  }).catch(function(err){
		return res.send(err);
	});
},
update:function(req, res) {
	console.log(req.user);
  User.findOne({id:req.user}).then(function(user) {
    if (!user) {
      return res.status(400).send({ message: 'User not found' });
    }
    user.displayName = req.param('displayName') || user.displayName;
    user.email = req.param('email') || user.email;
    user.save(function(err) {
      res.status(200).end();
    });
  }).catch(function(err){
		return res.status(500).send(err);
	});
}
};

import { User } from '../src/userModel';

let userController = {}

userController.create = (req, res) => {
  let newUser = new User(req.body);

  newUser.save((err, user) => {
    if (err) {
      res.send(err)
    }
    res.json(user)
  });
}

userController.index = (req, res, next) => {
  // res.status(200).json([{ 'name': 'Hayssa' }])
  User.find({}, (err, users) => {
    if (err) {
      res.status(500).send('EROU');
      next();
    }
    res.json(users);
  });
}

export default userController
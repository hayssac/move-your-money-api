import { User } from '../src/userModel';

let userController = {}

userController.create = (req, res) => {
  let newUser = new User(req.body);

  newUser.save((err, user) => {
    if (err) {
      res.send(err)
    }
    res.status(200).json(user)
  });
}

userController.index = (req, res, next) => {
  User.find({}, (err, users) => {
    if (err) {
      res.status(500).send('EROU');
      next();
    }
    res.status(200).json(users);
  });
}

export default userController
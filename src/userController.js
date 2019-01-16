import { User } from '../src/userModel';

let userController = {}

userController.create = (req, res) => {
  let newUser = new User(req.body);

  newUser.save((err, user) => {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
}

userController.index = (req, res) => {
  User.find((err, users) => {
    if (err) {
      res.send('err');
    }
    res.json(users);
  });
}

export default userController
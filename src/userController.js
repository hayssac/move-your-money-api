import { User } from '../src/userModel'

let userController = {}

userController.create = (req, res) => {
  let newUser = new User(req.body);

  newUser.save((err, user) => {
    if (err) {
      res.send(err)
    }
    res.status(200).json(user)
  })
}

userController.index = (req, res, next) => {
  User.find({}, (err, users) => {
    if (err) {
      res.status(500).send('EROU')
      next();
    }
    res.status(200).json(users)
  })
}

userController.show = (req, res, next) => {
  let id = req.params.id
  User.findById(id, (err, user) => {
    if (err) {
      res.status(500).send('EROU')
      next()
    }
    res.status(200).json(user)
  })
}

userController.update = (req, res, next) => {
  let id = req.params.id
  let updatedData = req.data
  User.update(id, updatedData, (err, user) => {
    if (err) {
      res.status(500).send('EROU')
      next()
    }
    res.status(200).json(user)
  })
}

userController.destroy = (req, res, next) => {
  let id = req.params.id
  User.destroy(id, (err) => {
    if (err) {
      res.status(500).send('EROU')
      next()
    }
    res.status(200).json({ 'message': 'User removed with success' })
  })
}

export default userController
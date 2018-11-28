import Mock from './userModel';

exports.index = (req, res) => {
  Mock.get(function (err, users) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Contacts retrieved successfully",
      data: users
    });
  });
};
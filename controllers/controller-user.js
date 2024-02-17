const { Thought, User } = require('../models');

module.exports = {
 getAllUsers(req, res) {
  User.find({})
   .then((user) => res.json(user))
   .catch((err) => res.status(500).json(err));
 },

 getOneUser(req, res) {
  User.findOne({ _id: req.params.userId })
   .populate("thoughts")
   .populate("friends")
   .select("-__v")
   .then((user) =>
    !user
     ? res.status(404).json({ message: "No User found with that ID!" })
     : res.json(user)
   )
   .catch((err) => res.status(500).json(err));
 },

 createUser(req, res) {
  User.create(req.body)
   .then((user) => res.json(user))
   .catch((err) => {
    console.log(err);
    return res.status(500).json(err);
   });
 },

 updateUser(req, res) {
  User.findOneAndUpdate(
   { _id: req.params.userId },
   { $set: req.body },
   { runValidators: true, new: true }
  )
   .then((user) =>
    !user
     ? res.status(404).json({ message: "No User found with this ID!" })
     : res.json(user)
   )
   .catch((err) => res.status(500).json(err));
 },

 deleteUser(req, res) {
  User.findOneAndDelete({ _id: req.params.userId })
   .then((user) =>
    !user
     ? res.status(404).json({ message: "No User found with this ID!" })
     : Thought.deleteMany({ _id: { $in: user.thoughts } })
   )
   .then(() => res.json({ message: "User and User's Thoughts deleted!" }))
   .catch((err) => res.status(500).json(err));
 },

 addFriend(req, res) {
  User.findOneAndUpdate(
   { _id: req.params.userId },
   { $addToSet: { friends: req.params.friendId } },
   { runValidators: true, new: true }
  )
   .then((user) =>
    !user
     ? res.status(404).json({ message: "No User found with this ID!" })
     : res.json(user)
   )
   .catch((err) => res.status(500).json(err));
 },

 removeFriend(req, res) {
  User.findOneAndUpdate(
   { _id: req.params.userId },
   { $pull: { friends: req.params.friendId } },
   { new: true }
  )
   .then(
    (user) =>
     !user
      ? res.status(404).json({ message: "No User found with this ID!" })
      : res.json(user)
   )
   .catch((err) => res.status(500).json(err));
 },
};
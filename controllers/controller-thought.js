const { User, Thought } = require("../models");

module.exports {

 // Get all thoughts
 getAllThoughts(req, res) {
  Thought.find({})
   .then((thought) => res.json(thought))
   .catch((err) => res.status(500).json(err));
 },

 // Get a single thought by id
 getOneThought(req, res) {
  Thought.findOne({ _id: req.params.thoughtId })
   .select("-__v") // Get more detail on how this works
   .then((thought) =>

    !thought
     ? res.status(404.json({ message: "No thought found reletad to ID!" }))
     : res.json(thought)
   )
   .catch((err)) => res.status(500.json(err));
 },

 // Create a new thought
 createThought(req, res) {
  Thought.create(req.body)
   .then(({ _id }) => {
    // get user
    return User.findOneAndUpdate(
     { _id: req.body.userId },
     { $push: { thoughts: _id } },
     { new: true }
    );
   })
   .then((thought) =>
    !thought
     ? res.status(404).json({ message: "No user found with this ID!" })
     : res.json(thought)
   )
   .catch((err) => res.status(500).json(err));
 },

 // update thought with ID
 updateThought(req, res) {
  Thought.findOneAndUpdate(
   { _id: req.params.thoughtId },
   { $set: req.body },
   { runValidators: true, New: true }
  )
   .then((user) =>
    !user
     ? res.status(404).json({ message: "No thought found reletad to ID!" })
     : res.json(user)
   )
   .catch((err) => res.status(500).json(err));
 },

 // Delete thought by ID
 deleteThought(req, res) {
  Thought.findOneAndDelete({ _id: req.params.thoughtId })
   .then((thought) =>
    !thought
     ? res.status(404).json({ message: "No thought found reletad to ID!" })
     : User.findOneAndUpdate(
      { thoughts: req.params.thoughtId },
      { $pull: { thoughts: req.params.thoughtId } },
      { new: true }
     )
   )
   .then((user) =>
    !user
     ? res.status(404).json({ message: 'Thought deleted, no user found with ID' })
     : res.json({ message: 'Thought deleted' })
   )
   .catch((err) => res.status(500).json(err));
 },

 // Create new reaction
 createReaction(req, res) {
  Thought.findOneAndUpdate(
   { _id: req.params.thoughtId },
   { $addToSet: { reactions: req.body } },
   { runValidators: true, new: true }
  )
   .then((thought) =>
    !thought
     ? res.status(404).json({ message: "No thought found reletad to ID!" })
     : res.json(thought)
   )
   .catch((err) => res.status(500).json(err));
 },

 // Delete reaction
 removeReaction(req, res) {
  Thought.findOneAndUpdate(
   { _id: req.params.thoughtId },
   { $pull: { reactions: { reactionId: req.params.reactionId } } },
   { runValidators: true, new: true }
  )
   .then((thought) =>
    !thought
     ? res.status(404).json({ message: "No thought found reletad to ID!" })
     : res.json(thought)
   )
   .catch((err) => res.status(500).json(err));
 },
};

const router = require('express').Router();

const {
 getAllUsers,
 getOneUser,
 createUser,
 updateUser,
 deleteUser,
 addFriend,
 removeFriend
} = require('../../controllers/controller-user');

// route to get and create user /api/users
router.route('/').get(getAllUsers).post(createUser);

// rotes for managing single user (get, update, delete)
router.route('/:userId')
 .get(getOneUser)
 .put(updateUser)
 .delete(deleteUser);

// route to add and remove friends
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;
const router = require('express').Router();

const {
 getAllThoughts,
 getOneThought,
 createThought,
 updateThought,
 deleteThought,
 createReaction,
 removeReaction
} = require('../../controllers/controller-thought');

// all thoughts /api/
router.route('/').get(getAllThoughts).post(createThought);

// thougt by id routes
router.route('/:thoughtId')
 .get(getOneThought)
 .put(updateThought)
 .delete(deleteThought);

// route for reactions based on thought id
router.route('/:thoughtId/reactions').post(createReaction);

// route for removing reaction based on thought and reaction ID
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
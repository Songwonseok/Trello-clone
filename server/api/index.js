const express = require('express');
const router = express.Router();

const users = require('./users/users.routes');
const columns = require('./columns/columns.routes');
const note = require('./note/note.routes');
const log = require('./log/log.routes')

router.use('/users', users);
router.use('/columns', columns);
router.use('/note', note);
router.use('/log', log);

module.exports = router;

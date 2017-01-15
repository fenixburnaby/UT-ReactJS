var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Todo = require('../models/post');

router.get('/', (req, res) => {
  Todo.find({
  },(err, docs) => {
    if (err) {
      res.send(err);
    } else {
      res.send(docs);
    }
  });
});

router.get('/:id', (req, res) => {
  Todo.findById(req.params.id, (err, doc) => {
    if (err) {
      res.send(err);
    } else {
      res.send(doc);
    }
  });
});

router.post('/', (req, res) => {
  var newTodo = new Todo(req.body);
  newTodo.save((err, doc) => {
    if (err) {
      res.send(err);
    } else {
      res.send(doc);
    }
  });
});

router.put('/:id', (req, res) => {
  Todo.findById(req.params.id, (err, doc) => {
    if (err) {
      res.send(err);
    }
    doc.data = req.body.data;
    doc.save((err, doc) => {
      if (err) {
        res.send(err);
      } else {
        res.send(doc);
      }
    });
  });
});

router.delete('/:id', (req, res) => {
  Post.remove({_id: req.params.id}, (err) => {
    if (err)
      res.send(err);
    else {
      res.send('Delete Successful');
    }
  });
});

module.exports = router;

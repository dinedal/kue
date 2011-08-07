
/*!
 * kue - RedisClient factory
 * Copyright (c) 2011 LearnBoost <tj@learnboost.com>
 * MIT Licensed
 * Author: bitprobe@gmail.com
 */

/**
 * Module dependencies.
 */

var redis = require('redis');

/**
 * Create a RedisClient
 *
 * @return {RedisClient}
 * @api private
 */

var client = null;

exports.client = client;

exports.createClient = function(host, port, password){
  if (client !== null) {
    return client;
  } else {
    client = redis.createClient(port, host);
    if(typeof password != "undefined" && password !== null) {
      client.auth(password);
    }
    return client;
  }
};
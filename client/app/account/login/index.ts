'use strict';
const angular = require('angular');
import LoginController from './login.controller';

export default angular.module('qmrApp.login', [])
  .controller('LoginController', LoginController)
  .name;

/* */
'format es6';

import angular from 'angular';
import { nnNgModules } from './index';

export var registerUiState = function (
  ngUiStateName,
  stateConfig
) {
  var configureUiState = function configureUiState ( $stateProvider ) {
    $stateProvider.state( ngUiStateName, stateConfig );
  };
  configureUiState.$inject = [ '$stateProvider' ];

  angular.module( ngUiStateName, [] )
  .config( configureUiState );

  nnNgModules.register( ngUiStateName );
};

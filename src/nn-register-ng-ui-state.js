'format es6';

import { nnNgModules } from './index';

export var registerUiState = function (
  ngUiStateName,
  stateConfig,
  ngModuleName
) {
  var configureUiState = function configureUiState ( $stateProvider ) {
    $stateProvider.state( ngUiStateName, stateConfig );
  };
  configureUiState.$inject = [ '$stateProvider' ];

  angular.module( ngModuleName, [] )
  .config( configureUiState );

  nnNgModules.register( ngModuleName );
};

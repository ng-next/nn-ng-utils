'format es6';

import { nnNgModules } from './index';

export var registerUiState = function (
  ngUiStateName,
  stateConfig,
  ngModuleName
) {
  angular.module( ngModuleName, [] )
  .config( $stateProvider => {
    'ngInject';

    $stateProvider.state( ngUiStateName, stateConfig );
  });

  nnNgModules.register( ngModuleName );
};

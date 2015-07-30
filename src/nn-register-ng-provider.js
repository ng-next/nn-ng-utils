/* */
'format es6';

import angular from 'angular';
import { nnNgModules } from './index';

export var registerFactory = (
  ngFactoryName,
  factory
) => {
  register( 'factory', ngFactoryName, factory );
};

export var registerProvider = (
  ngProviderName,
 provider
) => {
  register( 'provider', ngProviderName, provider );
};

export var registerService = (
  ngServiceName,
  constructor
) => {
  register( 'service', ngServiceName, constructor );
};

export var registerDirective = (
  ngDirectiveName,
  ddo
) => {
  if ( typeof ddo === 'object' ) {
    register( 'directive', ngDirectiveName, () => ddo );
  } else if ( typeof ddo === 'function' ) {
    register( 'directive', ngDirectiveName, ddo );
  }
};

function register (
  type,
  ngProviderName,
  constructorOrFactory
) {
  guardAgainstUnknownProviderType();
  callAngularRegisterProviderDynamicallyByType();
  nnNgModules.register( ngProviderName );

  function guardAgainstUnknownProviderType () {
    if ( type !== 'factory' &&
         type !== 'service' &&
         type !== 'provider' &&
         type !== 'directive'
    ) {
      throw new Error( `unknown angular provider type "${type}"` );
    }
  }

  function callAngularRegisterProviderDynamicallyByType () {
    angular.module( ngProviderName, [] )[ type ](
      ngProviderName, constructorOrFactory
    );
  }
}

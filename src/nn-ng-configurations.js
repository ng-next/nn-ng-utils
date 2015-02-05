'format es6';

class NnNgConfigurations {
  constructor () {
    this.runPhaseConfiguraions = [];
    this.configPhaseConfigurations = [];
  }

  registerForRunPhase ( configFunction ) {
    if ( typeof configFunction !== 'function' ) {
      throw new Error(
        'parameter "config" must be of type "Function".' );
    }

    this.runPhaseConfiguraions = this.runPhaseConfiguraions
                                 .concat( configFunction );
  }

  registerForConfigPhase ( configFunction ) {
    if ( typeof configFunction !== 'function' ) {
      throw new Error(
        'parameter "config" must be of type "Function".' );
    }

    this.configPhaseConfigurations = this.configPhaseConfigurations
                                 .concat( configFunction );
  }

  configureApp ( app ) {
    this.runPhaseConfiguraions
    .map(( configFunction ) => {
      app.run( configFunction );
    });

    this.configPhaseConfigurations
    .map(( configFunction ) => {
      app.config( configFunction );
    });
  }
}

export default new NnNgConfigurations();

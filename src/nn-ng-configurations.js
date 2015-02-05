'format es6';

class nnNgConfigurations {
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
}

export default new nnNgConfigurations();

(function() {
  'use strict';

  /**
   *  Polyfill for `Function.prototype.bind`
   */
  if (!Function.prototype.bind) {
    Function.prototype.bind = function(oThis) {
      if (typeof this !== 'function') {
        throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
      }
      var aArgs  = Array.prototype.slice.call(arguments, 1);
      var fToBind = this;
      var FNOP = function() {};
      var fBound  = function() {
        return fToBind.apply(this instanceof FNOP && oThis ? this : oThis,
          aArgs.concat(Array.prototype.slice.call(arguments)));
      };
      FNOP.prototype = this.prototype;
      fBound.prototype = new FNOP();
      return fBound;
    };
  }
})();

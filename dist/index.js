/** @license Apache-2.0 */

'use strict';

/**
* Create a two-sample Z-test single-precision floating-point results object.
*
* @module @stdlib/stats-base-ztest-two-sample-results-float32
*
* @example
* var Float32Array = require( '@stdlib/array-float32' );
* var Results = require( '@stdlib/stats-base-ztest-two-sample-results-float32' );
*
* var results = new Results();
* // returns <Results>
*
* results.alternative = 'two-sided';
* results.alpha = 0.05;
* results.nullValue = 0.0;
* results.pValue = 0.0132;
* results.statistic = 2.4773;
* results.xmean = 3.7561;
* results.ymean = 3.0129;
* results.ci = new Float32Array( [ 0.1552, 1.3311 ] );
* results.rejected = true;
*
* var str = results.toString();
* // returns <string>
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;

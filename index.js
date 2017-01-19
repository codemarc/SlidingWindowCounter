'use strict'

const counter = require('sliding-window-counter');


/**
 *
 * @author Marc J. Greenberg <codemarc@gmail.com>
 * @since 2017-01-18
 *
 */
class SlidingWindowCounter {

	constructor() {
		this.cSec = counter(1000);
		this.cMin = counter(60*1000);
		this.cHour = counter(60*60*1000);

		this.lSec = 0;
		this.lMin = 0;
		this.lHour = 0;
	}

	/**
	 * Adds a new event
	 *
	 * @param {undefined}
	 * @returns {undefined}
	 */
	increment() {
		this.cSec(1);
		this.cMin(1);
		this.cHour(1);

		this.lSec = this.cSec();
		this.lMin = this.cMin();
		this.lHour = this.cHour();
	}



	/**
	 * Returns number of events in the last second
	 *
	 * @param {undefined} 
	 * @returns {number}
	 */
	numLastSecond() {
		return this.lSec;
	}

	/**
	 * Returns number of events in the last minute
	 *
	 * @param {undefined} 
	 * @returns {number}
	 */
	numLastMinute() {
		return this.lMin;
	}

	/**
	 * Returns number of events in the last hour
	 *
	 * @param {undefined} 
	 * @returns {number}
	 */
	numLastHour() {
		return this.lHour;
	}
}

module.exports = new SlidingWindowCounter();

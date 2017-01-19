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
	}

	/**
	 * Returns number of events in the last second
	 *
	 * @param {undefined} 
	 * @returns {number}
	 */
	numLastSecond() {
		return this.cSec();
	}

	/**
	 * Returns number of events in the last minute
	 *
	 * @param {undefined} 
	 * @returns {number}
	 */
	numLastMinute() {
		return this.cMin();
	}

	/**
	 * Returns number of events in the last hour
	 *
	 * @param {undefined} 
	 * @returns {number}
	 */
	numLastHour() {
		return this.cHour();
	}
}

module.exports = new SlidingWindowCounter();

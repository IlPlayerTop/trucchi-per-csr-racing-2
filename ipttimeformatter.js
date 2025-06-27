/**
 * iptTimeFormatter - Simple Time Formatting Utility
 * Author: IlPlayerTop
 * License: Custom
 */

const iptTimeFormatter = {
    /**
     * Formats a number of seconds into MM:SS format.
     * @param {number} seconds - Time in seconds.
     * @returns {string} - Formatted time string.
     */
    format(seconds) {
        if (typeof seconds !== 'number' || seconds < 0) {
            return '00:00';
        }
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        const formattedMins = mins < 10 ? `0${mins}` : `${mins}`;
        const formattedSecs = secs < 10 ? `0${secs}` : `${secs}`;
        return `${formattedMins}:${formattedSecs}`;
    }
};

// Example usage:
// console.log(iptTimeFormatter.format(125)); // Output: 02:05

module.exports = iptTimeFormatter;

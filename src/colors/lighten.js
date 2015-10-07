module.exports = function(_) {
    // Inject internal deps
    _ = require('./randomColor')(_);

    _.mixin({

        /**
         * Lightens an RGB color.
         *
         * @param {object} color Object with "r", "g", "b" properties.
         * @param {int} lightenBy Value to lighten a color by.
         * @return {object} Color with RGB values
         */
        lighten: function(color, lightenBy) {
            lightenBy = lightenBy || 200;
            var newRed = color.r + lightenBy;
            var newGreen = color.g + lightenBy;
            var newBlue = color.b + lightenBy;

            return {
                r: _.clamp(newRed, 255),
                g: _.clamp(newGreen, 255),
                b: _.clamp(newBlue, 255)
            };
        }
    });

    return _;
};

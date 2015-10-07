module.exports = function(_) {
    _.mixin({

        /**
         * Generates a color via random RGB values.
         *
         * @return {object} Object with RGB values
         */
        randomColor: function() {
            return {
                r: _.random(0, 255),
                g: _.random(0, 255),
                b: _.random(0, 255)
            };
        }
    });

    return _;
};

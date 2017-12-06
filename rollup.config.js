// Libs
import babel from 'rollup-plugin-babel';
import path from 'path';
import uglify from 'rollup-plugin-uglify';

// Read package config
const pkgConfig = require('./package.json');

// Constants
const PROD = process.env.PROD || false;

const banner = `/* Lodash Addons
 * @version ${pkgConfig.version}
 * ${pkgConfig.repository}
 * @copyright Copyright 2015 Helion3, and other contributors
 * @license Licensed under MIT
 *          see ${pkgConfig.repository}/blob/master/LICENSE
 */`;

let plugins = [
    babel({
        exclude: 'node_modules/**'
    })
];

if (PROD) {
    plugins.push(uglify({
        output: {
            comments: /@license/
        }
    }));
}

export default {
    input: path.join('src', 'index.js'),
    external: ['lodash'],
    plugins: plugins,
    output: {
        file: path.join('dist', 'lodash-addons' + (PROD ? '.min' : '') + '.js'),
        format: 'umd',
        name: 'LodashAddons',
        banner: banner,
        globals: {
            lodash: '_'
        }
    }
};

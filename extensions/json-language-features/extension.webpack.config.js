/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

//@ts-check

'use strict';

const withDefaults = require('../shared.webpack.config');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = withDefaults({
	context: path.join(__dirname, 'client'),
	entry: {
		extension: './src/jsonMain.ts',
	},
	output: {
		filename: 'jsonMain.js',
		path: path.join(__dirname, 'client', 'dist'),
	},
	externals: {
		'./files': 'commonjs', // ignored because it doesn't exist
	}
});

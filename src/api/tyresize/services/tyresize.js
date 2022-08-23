'use strict';

/**
 * tyresize service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tyresize.tyresize');

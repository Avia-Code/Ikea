'use strict';


import generateHeader from './generateHeader.js';
import generateCatalog from './generateCatalog.js';
import generateFooter from './generateFooter.js';
import { loadData } from './loadData.js';

generateHeader();
generateCatalog();
generateFooter();
loadData();

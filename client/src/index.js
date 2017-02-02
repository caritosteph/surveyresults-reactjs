"use strict";
/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
import routes from './routes';
import './assets/styles/main.scss';
require('./favicon.ico');

const rootEl = document.getElementById('app');

render(routes,rootEl);

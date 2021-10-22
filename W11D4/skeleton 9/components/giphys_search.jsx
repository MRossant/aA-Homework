import React from 'react';
import { fetchSearchGiphys } from '../util/api_util';
import GiphysIndex from './giphys_index';
import { configureStore } from '../store/store';
import { receiveSearchGiphys } from '../actions/giphy_actions';

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore()
    window.store = store;
    window.receiveSearchGiphys = receiveSearchGiphys;
    window.fetchSearchGiphys = fetchSearchGiphys;
})


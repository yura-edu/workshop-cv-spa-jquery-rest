/**
 * main.js — Entry point. Wires everything together.
 *
 * Responsibilities:
 *  1. Load posts on DOMContentLoaded
 *  2. Search input with debounce (300 ms — implement manually, no lodash)
 *  3. Pagination navigation
 *  4. Post card click → show detail
 *  5. Back button → return to list
 *
 * Module dependencies: api.js, ui.js, pagination.js
 */

import $ from 'jquery';
import { fetchPosts, fetchPost, fetchComments } from './api.js';
import {
    renderPosts,
    renderPostDetail,
    showListView,
    showSpinner,
    hideSpinner,
    showError,
    hideError,
    updateResultCount,
} from './ui.js';
import { initPagination } from './pagination.js';

// ── State ─────────────────────────────────────────────────────────────────
let currentPage = 1;
let currentQuery = '';

// ── Debounce ──────────────────────────────────────────────────────────────
/**
 * Returns a debounced version of fn that fires after `delay` ms.
 * Implement this manually — do NOT use lodash, underscore, or any library.
 *
 * @param {function} fn
 * @param {number}   delay — milliseconds
 * @returns {function}
 */
function debounce(fn, delay) {
    // TODO: implement debounce from scratch
    // Hint: use a closure + clearTimeout / setTimeout
    throw new Error('debounce() not implemented yet');
}

// ── Load and render posts ─────────────────────────────────────────────────
async function loadPosts(page = 1, query = '') {
    // TODO:
    //  1. showSpinner(), hideError()
    //  2. Call fetchPosts(page, query)
    //  3. renderPosts(posts, handleCardClick)
    //  4. updateResultCount(total)
    //  5. initPagination(totalPages, page, loadPosts)
    //  6. hideSpinner()
    //  7. On error: hideSpinner(), showError(message, () => loadPosts(page, query))
    throw new Error('loadPosts() not implemented yet');
}

// ── Show post detail ──────────────────────────────────────────────────────
async function handleCardClick(post) {
    // TODO:
    //  1. showSpinner(), hide list
    //  2. fetchPost(post.id), fetchComments(post.id) — fetch in parallel with Promise.all
    //  3. renderPostDetail(fetchedPost, comments)
    //  4. hideSpinner()
    //  5. On error: show error
    throw new Error('handleCardClick() not implemented yet');
}

// ── Init ──────────────────────────────────────────────────────────────────
$(function () {
    // TODO: call loadPosts(1, '')

    // TODO: wire up search input with debounce(300):
    //   $('#search-input').on('input', debounce(e => {
    //       currentQuery = e.target.value.trim();
    //       currentPage = 1;
    //       loadPosts(currentPage, currentQuery);
    //   }, 300));

    // TODO: wire up back button:
    //   $('#back-btn').on('click', () => { showListView(); loadPosts(currentPage, currentQuery); });
});

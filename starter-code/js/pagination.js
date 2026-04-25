/**
 * pagination.js — Pagination controls.
 *
 * Rules:
 *  - Do NOT call the API here. Pagination only controls page state and
 *    calls the onPageChange callback, which triggers a new fetch in main.js.
 */

import $ from 'jquery';

let _currentPage = 1;
let _totalPages = 1;
let _onPageChange = null;

/**
 * Initializes the pagination UI.
 *
 * @param {number}   totalPages    — total number of pages
 * @param {number}   currentPage   — currently active page (1-based)
 * @param {function} onPageChange  — called with the new page number when user navigates
 */
export function initPagination(totalPages, currentPage, onPageChange) {
    // TODO: store params
    // TODO: update #page-indicator text: "Página X de Y"
    // TODO: enable/disable #prev-btn and #next-btn based on currentPage vs totalPages
    // TODO: show #pagination if totalPages > 1, hide if totalPages <= 1
    // TODO: attach click handlers to #prev-btn and #next-btn (replace, don't accumulate):
    //         #prev-btn: if currentPage > 1, call onPageChange(currentPage - 1)
    //         #next-btn: if currentPage < totalPages, call onPageChange(currentPage + 1)
    throw new Error('initPagination() not implemented yet');
}

/** Returns the current page number. */
export function getCurrentPage() {
    return _currentPage;
}

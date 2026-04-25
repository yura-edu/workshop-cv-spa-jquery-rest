/**
 * ui.js — DOM manipulation module.
 *
 * Rules:
 *  - This module MUST NOT make any API calls (that is api.js's job).
 *  - Use jQuery ($) for DOM manipulation.
 *  - All functions must be exported as ES modules.
 */

import $ from 'jquery';

/**
 * Renders an array of post objects as cards in #posts-container.
 * Each card must:
 *  - Have class "post-card"
 *  - Have tabindex="0" for keyboard accessibility
 *  - Display the post title (truncate body to 100 chars)
 *  - Call onCardClick(post) when clicked or Enter is pressed
 *
 * @param {object[]} posts
 * @param {function} onCardClick
 */
export function renderPosts(posts, onCardClick) {
    // TODO: clear #posts-container
    // TODO: if posts is empty, show a "No se encontraron posts." message
    // TODO: for each post, create a card and append to #posts-container
    // TODO: attach click and keydown(Enter) handlers that call onCardClick(post)
    throw new Error('renderPosts() not implemented yet');
}

/**
 * Renders the detail view for a single post + its comments.
 * Hides #posts-container and #pagination. Shows #post-detail.
 *
 * @param {object}   post
 * @param {object[]} comments
 */
export function renderPostDetail(post, comments) {
    // TODO: populate #post-detail-content with:
    //         <h2>{title}</h2>
    //         <p>{body}</p>
    //         <section class="comments-section">
    //           <h3>Comentarios ({n})</h3>
    //           {one .comment div per comment}
    //         </section>
    // TODO: show #post-detail, hide #posts-container, #pagination
    throw new Error('renderPostDetail() not implemented yet');
}

/** Shows the list view; hides the detail view. */
export function showListView() {
    // TODO: show #posts-container and #pagination, hide #post-detail
    throw new Error('showListView() not implemented yet');
}

/** Displays the loading spinner and hides everything else. */
export function showSpinner() {
    // TODO: $('#spinner').removeAttr('hidden')
    throw new Error('showSpinner() not implemented yet');
}

/** Hides the loading spinner. */
export function hideSpinner() {
    // TODO: $('#spinner').attr('hidden', '')
    throw new Error('hideSpinner() not implemented yet');
}

/**
 * Shows the error panel with a message and wires up the retry button.
 *
 * @param {string}   message
 * @param {function} onRetry — called when the user clicks "Reintentar"
 */
export function showError(message, onRetry) {
    // TODO: set #error-text content
    // TODO: attach onRetry to #retry-btn click
    // TODO: show #error-message, hide #posts-container
    throw new Error('showError() not implemented yet');
}

/** Hides the error panel. */
export function hideError() {
    // TODO: $('#error-message').attr('hidden', '')
    throw new Error('hideError() not implemented yet');
}

/**
 * Updates the result count label.
 *
 * @param {number} count — total matching posts
 */
export function updateResultCount(count) {
    // TODO: $('#result-count').text(`${count} post(s) encontrado(s)`)
    throw new Error('updateResultCount() not implemented yet');
}

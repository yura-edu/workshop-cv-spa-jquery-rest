/**
 * api.js — HTTP layer for JSONPlaceholder.
 *
 * Rules:
 *  - At least one function MUST use jQuery $.ajax() or $.get() (not just fetch).
 *  - All functions MUST handle network errors with .catch() or try/catch.
 *  - Export functions as ES modules.
 *
 * API base URL: https://jsonplaceholder.typicode.com
 * Docs: https://jsonplaceholder.typicode.com/guide/
 */

const BASE_URL = 'https://jsonplaceholder.typicode.com';

/**
 * Fetches paginated posts, optionally filtered by title.
 *
 * JSONPlaceholder does not support server-side pagination or search natively,
 * so you will need to:
 *   1. Fetch ALL posts: GET /posts
 *   2. Filter in memory by query (case-insensitive title match)
 *   3. Slice the result for the requested page (10 items per page)
 *
 * @param {number} page    — 1-based page number (default: 1)
 * @param {string} query   — title filter (default: '')
 * @returns {Promise<{ posts: object[], total: number, totalPages: number }>}
 */
export async function fetchPosts(page = 1, query = '') {
    // TODO: implement using $.ajax() or fetch()
    // TODO: filter posts by title if query is not empty
    // TODO: paginate: return 10 items per page
    // TODO: return { posts, total, totalPages }
    throw new Error('fetchPosts() not implemented yet');
}

/**
 * Fetches a single post by id.
 *
 * @param {number} id
 * @returns {Promise<object>}
 */
export async function fetchPost(id) {
    // TODO: GET /posts/:id
    // TODO: handle 404 (post not found)
    throw new Error('fetchPost() not implemented yet');
}

/**
 * Fetches the comments for a given post.
 *
 * @param {number} postId
 * @returns {Promise<object[]>}
 */
export async function fetchComments(postId) {
    // TODO: GET /posts/:postId/comments
    throw new Error('fetchComments() not implemented yet');
}

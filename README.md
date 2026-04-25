# SPA con JavaScript y consumo de API REST

> **Tipo:** CODE_QUALITY · **Duración estimada:** 240 min · **Nivel:** Medio-Alto

## Objetivo

Construir una SPA (Single Page Application) sin framework que consuma JSONPlaceholder con paginación, búsqueda con debounce de 300 ms, spinner de carga, y manejo visible de errores de red.

## Contexto

Sin React o Vue, el desarrollador gestiona manualmente el ciclo de vida: fetching, renderizado del DOM, estados de UI, paginación, y errores. Este taller entrena esa disciplina con jQuery como librería base (tecnología que encontrarás en proyectos legacy) y `fetch` para las peticiones.

## Prerequisitos

- Node.js 18+
- npm

## Estructura del starter

```
starter-code/
├── index.html                  # HTML semántico completo (NO modificar)
├── css/styles.css              # Estilos base (NO modificar)
├── js/
│   ├── api.js                  # ← TÚ implementas (fetch + jQuery AJAX)
│   ├── ui.js                   # ← TÚ implementas (manipulación del DOM)
│   ├── pagination.js           # ← TÚ implementas (lógica de paginación)
│   └── main.js                 # ← TÚ implementas (inicialización y eventos)
├── tests/
│   └── e2e/
│       └── app.spec.ts         # ← TÚ implementas ≥ 1 test E2E
├── .eslintrc.json              # ESLint preconfigurado (NO modificar)
├── playwright.config.ts        # Playwright preconfigurado (NO modificar)
├── vite.config.js              # Bundler (NO modificar)
└── package.json
```

## Instrucciones

### 1. Instala dependencias

```bash
cd starter-code
npm install
npx playwright install chromium
```

### 2. Levanta el servidor de desarrollo

```bash
npm run dev
```

Abre `http://localhost:5173`.

### 3. Implementa `js/api.js`

Funciones que debes exportar:

```js
// Obtiene posts paginados y filtrados por búsqueda
export async function fetchPosts(page = 1, query = '') { ... }

// Obtiene un post por id
export async function fetchPost(id) { ... }

// Obtiene los comentarios de un post
export async function fetchComments(postId) { ... }
```

**Reglas:**
- Usa `fetch()` o jQuery `$.ajax()` (al menos uno con jQuery)
- Maneja errores de red con `.catch()` o `try/catch`
- Exporta las funciones como módulos ES

API base: `https://jsonplaceholder.typicode.com`

### 4. Implementa `js/ui.js`

Funciones para manipulación del DOM:

```js
export function renderPosts(posts) { ... }        // Renderiza cards en #posts-container
export function renderPostDetail(post, comments) { ... }  // Muestra detalle + comentarios
export function showSpinner() { ... }             // Muestra #spinner
export function hideSpinner() { ... }             // Oculta #spinner
export function showError(message, onRetry) { ... }  // Muestra #error con botón Reintentar
export function hideError() { ... }
export function updateResultCount(count) { ... }  // Actualiza #result-count
```

### 5. Implementa `js/pagination.js`

```js
export function initPagination(totalPages, currentPage, onPageChange) { ... }
```

- Renderiza botones Anterior / Siguiente y el número de página actual
- Llama `onPageChange(page)` cuando el usuario navega

### 6. Implementa `js/main.js`

El punto de entrada que:
- Carga los posts al iniciar la página
- Conecta el input de búsqueda con debounce de **exactamente 300 ms**
- Conecta la paginación
- Maneja clics en cards para mostrar el detalle

```js
// El debounce DEBE implementarse manualmente (no lodash.debounce)
function debounce(fn, delay) { ... }
```

### 7. Escribe al menos 1 test E2E

En `tests/e2e/app.spec.ts`:

```ts
test('posts cargan en la vista inicial', async ({ page }) => {
    await page.goto('/')
    await page.waitForSelector('.post-card')
    const cards = await page.$$('.post-card')
    expect(cards.length).toBeGreaterThan(0)
})
```

Ejecuta los tests:

```bash
npm run build && npm run test:e2e
```

### 8. Verifica lint y calidad

```bash
npm run lint        # 0 errores ESLint
npm run build       # build limpio
```

### 9. Despliega en GitHub Pages

```bash
# En tu PR incluye la URL desplegada en la descripción
```

## Criterios de evaluación

| Métrica | Peso | Umbral |
|---|---|---|
| Lighthouse Performance | 25 % | ≥ 85 |
| Lighthouse Accessibility | 20 % | ≥ 90 |
| Violaciones de lint | 20 % | 0 errores ESLint |
| Manejo de errores | 15 % | Handler visible en `api.js` |
| Tests E2E | 15 % | ≥ 1 test implementado |
| Complejidad ciclomática | 5 % | CC ≤ 10 por función |

## Recursos

- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)
- [jQuery AJAX](https://api.jquery.com/jquery.ajax/)
- [Playwright Docs](https://playwright.dev/docs/intro)
- [Debounce — CSS-Tricks](https://css-tricks.com/debouncing-throttling-explained-examples/)

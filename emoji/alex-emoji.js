/**
 * <alex-emoji> — Custom emoji for alexgaming.is-a.dev
 *
 * Usage: <alex-emoji></alex-emoji>
 *
 * Only renders on alexgaming.is-a.dev (and localhost for development).
 */
(function () {
  'use strict';

  const ALLOWED_HOSTS = ['alexgaming.is-a.dev', 'localhost', '127.0.0.1'];
  const EMOJI_SRC = '/icons/favicon.png';
  const EMOJI_ALT = 'alexgamingdev';

  const hostname = window.location.hostname;
  if (!ALLOWED_HOSTS.some(h => hostname === h || hostname.endsWith('.' + h))) {
    // Not on an allowed host — do not register the element
    return;
  }

  // Force text-presentation for all Unicode symbols (arrows, math, etc.) so
  // they render as Windows-style glyphs instead of coloured Apple emoji.
  // Scoped to <body> (not :root) to avoid affecting browser-chrome rendering.
  // font-variant-emoji: text is supported in Chrome 131+, Firefox 108+, Safari 17.5+.
  (function injectSymbolCSS() {
    const style = document.createElement('style');
    style.id = 'agd-sym-presentation';
    style.textContent = [
      /* Scope to body — affects all page content, not browser chrome */
      'body { font-variant-emoji: text; }',
      /* Utility class: Segoe UI Symbol fallback for older browsers */
      '.sym { font-family: "Segoe UI Symbol","Segoe UI",Arial,sans-serif; font-variant-emoji: text; }',
    ].join('\n');
    document.head.appendChild(style);
  })();

  class AlexEmoji extends HTMLElement {
    connectedCallback() {
      if (this.shadowRoot) return;
      const shadow = this.attachShadow({ mode: 'open' });

      const style = document.createElement('style');
      style.textContent = `
        :host {
          display: inline-block;
          width: 1em;
          height: 1em;
          vertical-align: -0.15em;
          line-height: 1;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          pointer-events: none;
          user-select: none;
          -webkit-user-select: none;
        }
      `;

      const img = document.createElement('img');
      img.src = EMOJI_SRC;
      img.alt = EMOJI_ALT;
      img.draggable = false;

      shadow.appendChild(style);
      shadow.appendChild(img);
    }
  }

  if (!customElements.get('alex-emoji')) {
    customElements.define('alex-emoji', AlexEmoji);
  }
})();

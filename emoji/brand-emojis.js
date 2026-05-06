/**
 * Brand & Social Media Emoji Web Components — alexgaming.is-a.dev
 *
 * Registers custom elements for well-known brand logos, served from
 * SimpleIcons (https://simpleicons.org) — a consistent, open-source icon set.
 *
 * All elements share the same inline-emoji sizing as <alex-emoji>:
 *   width: 1em, height: 1em, vertical-align: -0.15em
 *
 * Usage examples:
 *   <github-emoji></github-emoji>
 *   <youtube-emoji></youtube-emoji>
 *   <linkedin-emoji></linkedin-emoji>
 *
 * Only renders on alexgaming.is-a.dev (and localhost for development).
 */
(function () {
  'use strict';

  const ALLOWED_HOSTS = ['alexgaming.is-a.dev', 'localhost', '127.0.0.1'];

  const hostname = window.location.hostname;
  if (!ALLOWED_HOSTS.some(h => hostname === h || hostname.endsWith('.' + h))) {
    return;
  }

  // SimpleIcons CDN: https://cdn.simpleicons.org/{slug}/{hex}
  // Note: SRI (Subresource Integrity) is not applicable here because SimpleIcons
  // generates SVGs dynamically on the CDN. The elements use <img> tags, not <script>,
  // so the blast radius of any CDN issue is limited to wrong/missing images only.
  const SI = 'https://cdn.simpleicons.org';

  /**
   * Brand registry — [ tag-name, simpleicons-slug, hex-color, accessible-label ]
   * Colors use each brand's official color for maximum recognisability.
   */
  const BRANDS = [
    ['github-emoji',     'github',       'ffffff', 'GitHub'],
    ['youtube-emoji',    'youtube',      'ff0000', 'YouTube'],
    ['twitter-emoji',    'x',            'ffffff', 'X (Twitter)'],
    ['x-emoji',          'x',            'ffffff', 'X'],
    ['linkedin-emoji',   'linkedin',     '0a66c2', 'LinkedIn'],
    ['twitch-emoji',     'twitch',       '9146ff', 'Twitch'],
    ['mastodon-emoji',   'mastodon',     '6364ff', 'Mastodon'],
    ['bluesky-emoji',    'bluesky',      '0085ff', 'Bluesky'],
    ['npm-emoji',        'npm',          'cb3837', 'npm'],
    ['discord-emoji',    'discord',      '5865f2', 'Discord'],
    ['instagram-emoji',  'instagram',    'e4405f', 'Instagram'],
    ['pinterest-emoji',  'pinterest',    'e60023', 'Pinterest'],
    ['dotnet-emoji',     'dotnet',       '512bd4', '.NET'],
    ['wikidata-emoji',   'wikidata',     'ffffff', 'Wikidata'],
    ['csharp-emoji',     'csharp',       '239120', 'C#'],
    ['vscode-emoji',     'visualstudiocode', '007acc', 'VS Code'],
    ['windows-emoji',    'windows',      '0078d4', 'Windows'],
    ['microsoft-emoji',  'microsoft',    'f25022', 'Microsoft'],
    ['docker-emoji',     'docker',       '2496ed', 'Docker'],
    ['git-emoji',        'git',          'f05032', 'Git'],
    ['nuget-emoji',      'nuget',        '004880', 'NuGet'],
    ['bluehost-emoji',   'bluehost',     '00aeef', 'Bluehost'],
    ['stackoverflow-emoji', 'stackoverflow', 'f58025', 'Stack Overflow'],
    ['reddit-emoji',     'reddit',       'ff4500', 'Reddit'],
  ];

  // Shared shadow-DOM CSS for all brand emoji elements
  const SHARED_STYLE = `
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

  function makeBrandClass(src, alt) {
    return class extends HTMLElement {
      connectedCallback() {
        if (this.shadowRoot) return;
        const shadow = this.attachShadow({ mode: 'open' });

        const style = document.createElement('style');
        style.textContent = SHARED_STYLE;

        const img = document.createElement('img');
        img.src = src;
        img.alt = alt;
        img.draggable = false;

        shadow.appendChild(style);
        shadow.appendChild(img);
      }
    };
  }

  for (const [tag, slug, hex, label] of BRANDS) {
    if (!customElements.get(tag)) {
      customElements.define(tag, makeBrandClass(`${SI}/${slug}/${hex}`, label));
    }
  }
})();

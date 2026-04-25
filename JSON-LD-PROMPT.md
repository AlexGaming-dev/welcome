# JSON-LD Prompt – alexgamingdev

Verwende die folgenden JSON-LD-Daten als **einzige Wahrheitsquelle** für alle strukturierten Daten auf der Website `https://www.alexgamingdev.tech`.

---

## Eigentümer & Ersteller

**Name:** Alexander Dennhoven  
**Online-Alias:** `alexgamingdev`  
**Wikidata-ID:** `https://www.wikidata.org/wiki/Q138410440`  
**Website:** `https://www.alexgamingdev.tech`  
**Job:** Software Developer & Architect  
**Nationalität:** Deutschland  
**Sprachen:** Deutsch (`de`), Englisch (`en`), Latein (`la`)  

---

## Kanonischer `Person`-Node (immer gleich, nie ändern)

```json
{
  "@type": "Person",
  "@id": "https://www.alexgamingdev.tech",
  "name": "Alexander Dennhoven",
  "alternateName": ["alexgamingdev", "alexander.dennhoven", "Alex Gaming Dev"],
  "image": "https://www.alexgamingdev.tech/icons/favicon.png",
  "url": "https://www.alexgamingdev.tech",
  "jobTitle": "Software Developer & Architect",
  "description": "Alexander Dennhoven (alexgamingdev) is a software architect specialized in C#, .NET, and local-first applications.",
  "nationality": { "@type": "Country", "name": "Germany" },
  "gender": "male",
  "knowsLanguage": ["de", "en", "la"],
  "knowsAbout": [
    { "@type": "Thing", "name": "Software Engineering" },
    { "@type": "Thing", "name": "CLI Tools" },
    { "@type": "Thing", "name": "Local-first Apps" },
    { "@type": "Thing", "@id": "https://www.wikidata.org/wiki/Q2370", "name": "C#" },
    { "@type": "Thing", "@id": "https://www.wikidata.org/wiki/Q3857014", "name": ".NET" },
    { "@type": "Thing", "@id": "https://www.wikidata.org/wiki/Q846636", "name": "Software Architecture" },
    { "@type": "Thing", "name": "Automation" }
  ],
  "founder": { "@id": "https://www.alexgamingdev.tech/#organization" },
  "sameAs": [
    "https://www.wikidata.org/wiki/Q138410440",
    "https://github.com/alexgamingdev",
    "https://x.com/alexgamingdev",
    "https://www.linkedin.com/in/alexgamingdev/",
    "https://www.youtube.com/@alexgamingdev",
    "https://www.youtube.com/channel/UCGjpQOhY7XNjvHdb2yj0Nyg",
    "https://www.twitch.tv/alexgamingdev",
    "https://bsky.app/profile/alexgamingdev.tech",
    "https://mastodon.social/@alexgamingdev",
    "https://www.npmjs.com/~alexgamingdev",
    "https://linktr.ee/alexgamingdev",
    "https://de.pinterest.com/alexgamingdev/",
    "https://news.alexgamingdev.tech",
    "nostr:npub1tcv7ela0kwz6ntz3qxj1he65z6x8eghkhgk8m0kw92j0jzsztvqkphn77f",
    "did:web:alexgamingdev.tech"
  ]
}
```

---

## Kanonischer `Organization`-Node (immer gleich, nie ändern)

```json
{
  "@type": "Organization",
  "@id": "https://www.alexgamingdev.tech/#organization",
  "name": "alexgamingdev",
  "url": "https://www.alexgamingdev.tech",
  "founder": { "@id": "https://www.alexgamingdev.tech" },
  "sameAs": [
    "https://github.com/alexgamingdev",
    "https://www.wikidata.org/wiki/Q138410440"
  ]
}
```

---

## Kanonischer `WebSite`-Node (immer gleich, nie ändern)

```json
{
  "@type": "WebSite",
  "@id": "https://www.alexgamingdev.tech/#website",
  "url": "https://www.alexgamingdev.tech/",
  "name": "alexgamingdev Portfolio",
  "alternateName": "alexgamingdev",
  "publisher": { "@id": "https://www.alexgamingdev.tech/#organization" },
  "author":    { "@id": "https://www.alexgamingdev.tech" },
  "mainEntity": { "@id": "https://www.alexgamingdev.tech" }
}
```

---

## `WebPage`-Node – Vorlage pro Unterseite

Passe `@id`, `url`, `name`, `description` und `@type` für jede Seite an.  
`isPartOf`, `about` und (auf der Startseite) `mainEntity` bleiben immer gleich.

```json
{
  "@type": "WebPage",
  "@id": "https://www.alexgamingdev.tech/[SEITENNAME]/#webpage",
  "url": "https://www.alexgamingdev.tech/[SEITENNAME]/",
  "name": "[SEITENTITEL] | alexgamingdev",
  "description": "[Kurzbeschreibung der Seite]",
  "isPartOf": { "@id": "https://www.alexgamingdev.tech/#website" },
  "about":    { "@id": "https://www.alexgamingdev.tech" }
}
```

**Spezielle `@type`-Werte je nach Seite:**

| Seite | `@type` |
|---|---|
| Startseite (`/`) | `["WebPage", "ProfilePage"]` + `"mainEntity": { "@id": "..." }` |
| Kontakt (`/contact/`) | `"ContactPage"` |
| Impressum (`/impressum/`) | `"WebPage"` |
| Datenschutz (`/privacy/`) | `"WebPage"` |
| Sonstige Unterseiten | `"WebPage"` |

---

## `SoftwareApplication`-Nodes (Projekte von alexgamingdev)

### alexgamingdev Portfolio (Website)

```json
{
  "@type": "WebApplication",
  "@id": "https://www.alexgamingdev.tech/#webapp",
  "name": "alexgamingdev Portfolio",
  "operatingSystem": "Web Browser",
  "applicationCategory": "WebApplication",
  "description": "Offizielles Portfolio von Alexander Dennhoven (alexgamingdev). Software Architect & Developer.",
  "author": { "@id": "https://www.alexgamingdev.tech" },
  "url": "https://www.alexgamingdev.tech"
}
```

### Officeweb

```json
{
  "@type": "SoftwareApplication",
  "@id": "https://officeweb.alexgamingdev.tech/#app",
  "name": "Officeweb",
  "operatingSystem": "Web Browser",
  "applicationCategory": "BusinessApplication",
  "description": "Local-first browser office suite. Zero cloud. Zero tracking.",
  "author": { "@id": "https://www.alexgamingdev.tech" },
  "url": "https://officeweb.alexgamingdev.tech"
}
```

### arch-it

```json
{
  "@type": "SoftwareApplication",
  "@id": "https://www.npmjs.com/package/@alexgamingdev/arch-it/#app",
  "name": "arch-it",
  "operatingSystem": "Cross-platform",
  "applicationCategory": "DeveloperApplication",
  "description": "CLI scaffolding engine. JSON blueprints to file structures.",
  "author": { "@id": "https://www.alexgamingdev.tech" },
  "url": "https://github.com/alexgaming-dev/arch-it"
}
```

### sweep-it

```json
{
  "@type": "SoftwareApplication",
  "@id": "https://github.com/alexgaming-dev/sweep-it/#app",
  "name": "sweep-it",
  "operatingSystem": "Cross-platform",
  "applicationCategory": "UtilitiesApplication",
  "description": "Directory cleaner tool. Automated sweep and cleanup of project directories.",
  "author": { "@id": "https://www.alexgamingdev.tech" },
  "url": "https://github.com/alexgaming-dev/sweep-it"
}
```

---

## Vollständiges `@graph`-Beispiel – Startseite (`/`)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.alexgamingdev.tech",
      "name": "Alexander Dennhoven",
      "alternateName": ["alexgamingdev", "alexander.dennhoven", "Alex Gaming Dev"],
      "image": "https://www.alexgamingdev.tech/icons/favicon.png",
      "url": "https://www.alexgamingdev.tech",
      "jobTitle": "Software Developer & Architect",
      "description": "Alexander Dennhoven (alexgamingdev) is a software architect specialized in C#, .NET, and local-first applications.",
      "nationality": { "@type": "Country", "name": "Germany" },
      "gender": "male",
      "knowsLanguage": ["de", "en", "la"],
      "knowsAbout": [
        { "@type": "Thing", "name": "Software Engineering" },
        { "@type": "Thing", "name": "CLI Tools" },
        { "@type": "Thing", "name": "Local-first Apps" },
        { "@type": "Thing", "@id": "https://www.wikidata.org/wiki/Q2370", "name": "C#" },
        { "@type": "Thing", "@id": "https://www.wikidata.org/wiki/Q3857014", "name": ".NET" },
        { "@type": "Thing", "@id": "https://www.wikidata.org/wiki/Q846636", "name": "Software Architecture" },
        { "@type": "Thing", "name": "Automation" }
      ],
      "founder": { "@id": "https://www.alexgamingdev.tech/#organization" },
      "sameAs": [
        "https://www.wikidata.org/wiki/Q138410440",
        "https://github.com/alexgamingdev",
        "https://x.com/alexgamingdev",
        "https://www.linkedin.com/in/alexgamingdev/",
        "https://www.youtube.com/@alexgamingdev",
        "https://www.youtube.com/channel/UCGjpQOhY7XNjvHdb2yj0Nyg",
        "https://www.twitch.tv/alexgamingdev",
        "https://bsky.app/profile/alexgamingdev.tech",
        "https://mastodon.social/@alexgamingdev",
        "https://www.npmjs.com/~alexgamingdev",
        "https://linktr.ee/alexgamingdev",
        "https://de.pinterest.com/alexgamingdev/",
        "https://news.alexgamingdev.tech",
        "nostr:npub1tcv7ela0kwz6ntz3qxj1he65z6x8eghkhgk8m0kw92j0jzsztvqkphn77f",
        "did:web:alexgamingdev.tech"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.alexgamingdev.tech/#website",
      "url": "https://www.alexgamingdev.tech/",
      "name": "alexgamingdev Portfolio",
      "alternateName": "alexgamingdev",
      "publisher":  { "@id": "https://www.alexgamingdev.tech/#organization" },
      "author":     { "@id": "https://www.alexgamingdev.tech" },
      "mainEntity": { "@id": "https://www.alexgamingdev.tech" }
    },
    {
      "@type": ["WebPage", "ProfilePage"],
      "@id": "https://www.alexgamingdev.tech/#webpage",
      "url": "https://www.alexgamingdev.tech/",
      "name": "Alexander Dennhoven | Software Architect & Developer",
      "description": "Offizielles Portfolio von Alexander Dennhoven (alexgamingdev). Entwickler von Officeweb, arch-it und sweep-it.",
      "isPartOf":   { "@id": "https://www.alexgamingdev.tech/#website" },
      "about":      { "@id": "https://www.alexgamingdev.tech" },
      "mainEntity": { "@id": "https://www.alexgamingdev.tech" }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://officeweb.alexgamingdev.tech/#app",
      "name": "Officeweb",
      "operatingSystem": "Web Browser",
      "applicationCategory": "BusinessApplication",
      "description": "Local-first browser office suite. Zero cloud. Zero tracking.",
      "author": { "@id": "https://www.alexgamingdev.tech" },
      "url": "https://officeweb.alexgamingdev.tech"
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.npmjs.com/package/@alexgamingdev/arch-it/#app",
      "name": "arch-it",
      "operatingSystem": "Cross-platform",
      "applicationCategory": "DeveloperApplication",
      "description": "CLI scaffolding engine. JSON blueprints to file structures.",
      "author": { "@id": "https://www.alexgamingdev.tech" },
      "url": "https://github.com/alexgaming-dev/arch-it"
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://github.com/alexgaming-dev/sweep-it/#app",
      "name": "sweep-it",
      "operatingSystem": "Cross-platform",
      "applicationCategory": "UtilitiesApplication",
      "description": "Directory cleaner tool. Automated sweep and cleanup of project directories.",
      "author": { "@id": "https://www.alexgamingdev.tech" },
      "url": "https://github.com/alexgaming-dev/sweep-it"
    },
    {
      "@type": "WebApplication",
      "@id": "https://www.alexgamingdev.tech/#webapp",
      "name": "alexgamingdev Portfolio",
      "operatingSystem": "Web Browser",
      "applicationCategory": "WebApplication",
      "description": "Offizielles Portfolio von Alexander Dennhoven (alexgamingdev). Software Architect & Developer.",
      "author": { "@id": "https://www.alexgamingdev.tech" },
      "url": "https://www.alexgamingdev.tech"
    }
  ]
}
```

---

## Vollständiges `@graph`-Beispiel – Unterseite (z. B. `/contact/`)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://www.alexgamingdev.tech/contact/#webpage",
      "url": "https://www.alexgamingdev.tech/contact/",
      "name": "Contact | alexgamingdev",
      "description": "Sende eine verschlüsselte Nachricht an Alexander Dennhoven.",
      "isPartOf": { "@id": "https://www.alexgamingdev.tech/#website" },
      "about":    { "@id": "https://www.alexgamingdev.tech" }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.alexgamingdev.tech/#website",
      "url": "https://www.alexgamingdev.tech/",
      "name": "alexgamingdev Portfolio",
      "alternateName": "alexgamingdev",
      "publisher":  { "@id": "https://www.alexgamingdev.tech/#organization" },
      "author":     { "@id": "https://www.alexgamingdev.tech" },
      "mainEntity": { "@id": "https://www.alexgamingdev.tech" }
    },
    {
      "@type": "Person",
      "@id": "https://www.alexgamingdev.tech",
      "name": "Alexander Dennhoven",
      "alternateName": ["alexgamingdev", "alexander.dennhoven", "Alex Gaming Dev"],
      "image": "https://www.alexgamingdev.tech/icons/favicon.png",
      "url": "https://www.alexgamingdev.tech",
      "jobTitle": "Software Developer & Architect",
      "description": "Alexander Dennhoven (alexgamingdev) is a software architect specialized in C#, .NET, and local-first applications.",
      "nationality": { "@type": "Country", "name": "Germany" },
      "gender": "male",
      "knowsLanguage": ["de", "en", "la"],
      "knowsAbout": [
        { "@type": "Thing", "name": "Software Engineering" },
        { "@type": "Thing", "name": "CLI Tools" },
        { "@type": "Thing", "name": "Local-first Apps" },
        { "@type": "Thing", "@id": "https://www.wikidata.org/wiki/Q2370", "name": "C#" },
        { "@type": "Thing", "@id": "https://www.wikidata.org/wiki/Q3857014", "name": ".NET" },
        { "@type": "Thing", "@id": "https://www.wikidata.org/wiki/Q846636", "name": "Software Architecture" },
        { "@type": "Thing", "name": "Automation" }
      ],
      "founder": { "@id": "https://www.alexgamingdev.tech/#organization" },
      "sameAs": [
        "https://www.wikidata.org/wiki/Q138410440",
        "https://github.com/alexgamingdev",
        "https://x.com/alexgamingdev",
        "https://www.linkedin.com/in/alexgamingdev/",
        "https://www.youtube.com/@alexgamingdev",
        "https://www.youtube.com/channel/UCGjpQOhY7XNjvHdb2yj0Nyg",
        "https://www.twitch.tv/alexgamingdev",
        "https://bsky.app/profile/alexgamingdev.tech",
        "https://mastodon.social/@alexgamingdev",
        "https://www.npmjs.com/~alexgamingdev",
        "https://linktr.ee/alexgamingdev",
        "https://de.pinterest.com/alexgamingdev/",
        "https://news.alexgamingdev.tech",
        "nostr:npub1tcv7ela0kwz6ntz3qxj1he65z6x8eghkhgk8m0kw92j0jzsztvqkphn77f",
        "did:web:alexgamingdev.tech"
      ]
    }
  ]
}
```

---

## Regeln für die KI

1. **`@id` des Person-Nodes** ist immer `https://www.alexgamingdev.tech` – nie ändern.
2. **`sameAs`** ist die vollständige Liste oben – keine Einträge weglassen, keine erfinden.
3. **`publisher`** des `WebSite`-Nodes verweist auf die `Organization`: `{ "@id": "https://www.alexgamingdev.tech/#organization" }`. **`author`, `about`, `mainEntity`** verweisen immer per `{ "@id": "https://www.alexgamingdev.tech" }` auf den Person-Node.
4. **`Organization`-`@id`** ist immer `https://www.alexgamingdev.tech/#organization`.
5. **`WebSite`-`@id`** ist immer `https://www.alexgamingdev.tech/#website`.
6. **`WebPage`-`@id`** folgt dem Muster `https://www.alexgamingdev.tech/[seite]/#webpage`.
7. Für **neue Seiten**: Füge `WebPage`-Node + `WebSite`-Node + `Person`-Node ins `@graph` ein. Projektspezifische `SoftwareApplication`-Nodes nur auf Seiten hinzufügen, auf denen das Projekt auch vorkommt.
8. Das JSON-LD kommt als `<script type="application/ld+json">` direkt im `<head>`.

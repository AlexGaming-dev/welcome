# AI Replication Prompt – alexgamingdev/welcome Repository

Du arbeitest am Repository `alexgamingdev/welcome` (GitHub Pages Portfolio-Website unter `https://alexgaming.is-a.dev`).

## Deine Aufgabe

Ersetze den kompletten Inhalt der folgenden 5 Dateien **exakt** mit dem unten angegebenen HTML-Code. Keine eigenen Kreativität, keine Abweichungen – **Copy-Paste exakt**.

---

## Hintergrund & Design-System

Das Design-System basiert auf `index.html` (Haupt-Portfolio-Seite) und verwendet:

- **Fonts:** Orbitron (Überschriften/Logo), Rajdhani (Body), Fira Code (Mono)
- **CDN:** `https://cdn.tailwindcss.com` + Google Fonts
- **Farben:** `--primary-black: #050505`, `--accent-blue: #00f2ff`, `--accent-purple: #bc13fe`, `--text-main: #e0e0e0`
- **Shared Components:** Starfield-Hintergrund, 3D-Loader-Spinner, Navbar mit Logo + `animated-dev` Gradient, Footer

Jede Unterseite muss diese gemeinsamen Elemente identisch enthalten. Die Seiten befinden sich unter `/[name]/index.html`.

---

## FILE 1: `impressum/index.html`

**Ziel:** Under Construction Seite – die alten Impressumsangaben werden durch eine "Under Construction"-Ansicht ersetzt. JSON-LD und Meta-Daten bleiben vollständig erhalten und werden auf den Standard von `index.html` angehoben.

Ersetze den **gesamten Inhalt** von `impressum/index.html` mit:

```html
<!DOCTYPE html>
<html lang="de-DE" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Impressum | alexgamingdev</title>
    <meta name="description" content="Impressum von Alexander Dennhoven (alexgamingdev) – Angaben gemäß § 5 DDG. Diese Seite wird gerade überarbeitet.">
    <meta name="keywords" content="Alexander Dennhoven, alexgamingdev, Impressum, Software Architect, Deutschland, DDG">
    <link rel="canonical" href="https://alexgaming.is-a.dev/impressum/">

    <link rel="icon" type="image/png" href="/icons/favicon.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png">
    <link rel="manifest" href="/icons/site.webmanifest">

    <meta property="og:title" content="Impressum | alexgamingdev">
    <meta property="og:description" content="Impressum von Alexander Dennhoven (alexgamingdev).">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://alexgaming.is-a.dev/impressum/">
    <meta property="og:image" content="https://alexgaming.is-a.dev/icons/og-main.jpg">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Impressum | alexgamingdev">
    <meta name="twitter:description" content="Impressum von Alexander Dennhoven (alexgamingdev).">
    <meta name="twitter:creator" content="@alexgamingdev">

    <link rel="me" href="https://mastodon.social/@alexgamingdev">
    <link rel="me" href="https://github.com/alexgamingdev">

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": "https://alexgaming.is-a.dev/#website",
          "name": "alexgamingdev Portfolio",
          "alternateName": "alexgamingdev",
          "url": "https://alexgaming.is-a.dev/",
          "publisher": { "@id": "https://www.wikidata.org/wiki/Q138410440" },
          "mainEntity": { "@id": "https://www.wikidata.org/wiki/Q138410440" }
        },
        {
          "@type": "WebPage",
          "@id": "https://alexgaming.is-a.dev/impressum/#webpage",
          "url": "https://alexgaming.is-a.dev/impressum/",
          "name": "Impressum | alexgamingdev",
          "isPartOf": { "@id": "https://alexgaming.is-a.dev/#website" },
          "about": { "@id": "https://www.wikidata.org/wiki/Q138410440" }
        },
        {
          "@type": "Person",
          "@id": "https://www.wikidata.org/wiki/Q138410440",
          "name": "Alexander Dennhoven",
          "alternateName": ["alexgamingdev", "Alex Gaming Dev"],
          "image": "https://alexgaming.is-a.dev/icons/favicon.png",
          "url": "https://alexgaming.is-a.dev",
          "jobTitle": "Software Developer & Architect",
          "description": "Alexander Dennhoven is a software architect specialized in C#, .NET, and local-first applications.",
          "nationality": { "@type": "Country", "name": "Germany" },
          "knowsLanguage": ["de", "en"],
          "knowsAbout": ["Software Engineering", "CLI Tools", "Local-first Apps", "C#", ".NET", "Architecture", "Automation"],
          "sameAs": [
            "https://www.wikidata.org/wiki/Q138410440",
            "https://bsky.app/profile/alexgaming.is-a.dev",
            "https://github.com/alexgamingdev",
            "https://www.linkedin.com/in/alexgamingdev/",
            "https://linktr.ee/alexgamingdev",
            "https://mastodon.social/@alexgamingdev",
            "https://www.npmjs.com/~alexgamingdev",
            "https://de.pinterest.com/alexgamingdev/",
            "https://x.com/alexgamingdev",
            "https://www.youtube.com/channel/UCGjpQOhY7XNjvHdb2yj0Nyg",
            "https://www.youtube.com/@alexgamingdev",
            "https://www.twitch.tv/alexgamingdev",
            "https://news.alexgamingdev.tech",
            "nostr:npub1tcv7ela0kwz6ntz3qxj1he65z6x8eghkhgk8m0kw92j0jzsztvqkphn77f",
            "did:web:alexgaming.is-a.dev"
          ]
        }
      ]
    }
    </script>

    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;500;700&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet">

    <style>
        :root {
            --primary-black: #050505;
            --accent-blue: #00f2ff;
            --accent-purple: #bc13fe;
            --text-main: #e0e0e0;
        }

        body {
            font-family: 'Rajdhani', sans-serif;
            background-color: var(--primary-black);
            color: var(--text-main);
            overflow-x: hidden;
            margin: 0;
            width: 100%;
        }

        h1, h2, h3, .nav-logo { font-family: 'Orbitron', sans-serif; }
        .mono { font-family: 'Fira Code', monospace; }

        .space-container {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: radial-gradient(circle at center, #0a0a0a 0%, #050505 100%);
            z-index: -1;
        }
        .star-layer { position: absolute; inset: 0; background-repeat: repeat; pointer-events: none; }

        #loader-wrapper {
            position: fixed; inset: 0; background: #090707;
            display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 1000;
            transition: opacity 0.6s ease;
        }
        .loader-3 { position: relative; width: 80px; height: 80px; border-radius: 50%; perspective: 800px; }
        .loader-3 .inner { position: absolute; width: 100%; height: 100%; border-radius: 50%; border-bottom: 3px solid var(--accent-blue); }
        .loader-3 .one { animation: rotate-one 1s linear infinite; }
        .loader-3 .two { animation: rotate-two 1s linear infinite; border-bottom: none; border-right: 3px solid var(--accent-purple); }
        .loader-3 .three { animation: rotate-three 1s linear infinite; border-bottom: none; border-top: 3px solid #fff; }

        @keyframes rotate-one { 0% { transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg); } 100% { transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg); } }
        @keyframes rotate-two { 0% { transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg); } 100% { transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg); } }
        @keyframes rotate-three { 0% { transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg); } 100% { transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg); } }

        .animated-dev {
            background: linear-gradient(90deg, #00f2ff, #bc13fe, #00f2ff);
            background-size: 200% auto;
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            animation: gradient-shift 3s linear infinite;
        }

        @keyframes gradient-shift {
            0% { background-position: 0% center; }
            100% { background-position: 200% center; }
        }

        .construction-card {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(15px);
            clip-path: polygon(0 0, 100% 0, 100% 90%, 95% 100%, 0 100%);
        }

        @keyframes move-stars { from { transform: translateY(0); } to { transform: translateY(-1000px); } }
    </style>
</head>
<body class="antialiased">

    <div class="space-container" id="space-bg"></div>

    <div id="loader-wrapper">
        <div class="loader-3 mb-8">
            <div class="inner one"></div>
            <div class="inner two"></div>
            <div class="inner three"></div>
        </div>
        <div class="mono text-xs text-blue-500 tracking-[0.5em] animate-pulse">LOADING...</div>
    </div>

    <nav class="fixed w-full z-50 px-4 md:px-8 py-4 flex justify-between items-center bg-black/60 backdrop-blur-xl border-b border-white/5">
        <div class="nav-logo text-lg md:text-xl font-black tracking-widest text-white flex items-center cursor-pointer" onclick="window.location.href='/'">
            <img src="https://alexgaming.is-a.dev/icons/favicon.png" class="w-6 h-6 md:w-8 md:h-8 mr-2 object-contain" alt="Logo">
            <span>alexgaming<span class="animated-dev">dev</span></span>
        </div>
    </nav>

    <main class="min-h-screen pt-32 pb-24 px-6 flex items-center justify-center">
        <section class="w-full max-w-2xl mx-auto text-center">
            <p class="mono text-cyan-400 mb-4 text-xs tracking-[0.3em] uppercase opacity-80">// IMPRESSUM</p>
            <h1 class="text-4xl md:text-6xl font-black mb-6 text-white tracking-tighter">
                Under <span class="animated-dev">Construction</span>
            </h1>
            <p class="mono text-white/40 mb-12 text-xs md:text-sm tracking-[0.2em] uppercase">Diese Seite wird gerade überarbeitet.</p>
            <div class="construction-card p-8 mb-12 text-left space-y-4">
                <p class="mono text-xs text-cyan-400/60 mb-4">// Verantwortlich gemäß § 5 DDG</p>
                <p class="text-white font-bold text-lg">Alexander Dennhoven</p>
                <p class="text-white/60 text-sm">Froitscheidterstraße 34a 1, 52385 Nideggen</p>
                <p class="text-white/60 text-sm"><span class="mono text-white/30 mr-2">MAIL:</span><a href="mailto:legacy@alexgamingdev.tech" class="hover:text-cyan-400 transition-colors">legacy@alexgamingdev.tech</a></p>
            </div>
            <a href="/" class="mono px-8 py-3 border border-cyan-500/50 hover:bg-cyan-500/10 transition-all font-bold uppercase tracking-[0.2em] text-cyan-400 text-xs">← Back to Terminal</a>
        </section>
    </main>

    <footer class="py-12 text-center border-t border-white/5 opacity-40 text-[10px] uppercase tracking-widest">
        <div class="flex flex-wrap justify-center gap-6 mb-4">
            <a href="/impressum/">Impressum</a>
            <a href="/privacy/">Datenschutz</a>
            <a rel="me" href="https://mastodon.social/@alexgamingdev">Mastodon</a>
            <a href="https://bsky.app/profile/alexgaming.is-a.dev">Bluesky</a>
        </div>
        © 2026 | Alexander Dennhoven (alexgamingdev)
    </footer>

    <script>
        const spaceBg = document.getElementById('space-bg');
        function createStars(count, size, duration) {
            const layer = document.createElement('div');
            layer.className = 'star-layer';
            let shadows = [];
            for(let i=0; i<count; i++) shadows.push(`${Math.random()*2000}px ${Math.random()*2000}px #fff`);
            layer.style.boxShadow = shadows.join(',');
            layer.style.width = size + 'px'; layer.style.height = size + 'px';
            layer.style.animation = `move-stars ${duration}s linear infinite`;
            spaceBg.appendChild(layer);
        }
        createStars(700, 1, 100); createStars(200, 2, 150);

        window.addEventListener('load', () => {
            setTimeout(() => {
                document.getElementById('loader-wrapper').style.opacity = '0';
                setTimeout(() => document.getElementById('loader-wrapper').style.display = 'none', 600);
            }, 1500);
        });
    </script>
</body>
</html>
```

---

## FILE 2: `privacy/index.html`

**Ziel:** Datenschutz-Seite mit vollem index.html-Design (Starfield, Loader, Navbar, Footer). Inhalt bleibt gleich, aber komplett neu gestaltet.

Ersetze den **gesamten Inhalt** von `privacy/index.html` mit:

```html
<!DOCTYPE html>
<html lang="de-DE" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Datenschutz | alexgamingdev</title>
    <meta name="description" content="Datenschutzerklärung von Alexander Dennhoven (alexgamingdev) für die Website alexgaming.is-a.dev.">
    <meta name="keywords" content="Alexander Dennhoven, alexgamingdev, Datenschutz, Privacy Policy, DSGVO, Software Architect, Deutschland">
    <link rel="canonical" href="https://alexgaming.is-a.dev/privacy/">

    <link rel="icon" type="image/png" href="/icons/favicon.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png">
    <link rel="manifest" href="/icons/site.webmanifest">

    <meta property="og:title" content="Datenschutz | alexgamingdev">
    <meta property="og:description" content="Datenschutzerklärung für die Website alexgaming.is-a.dev von Alexander Dennhoven.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://alexgaming.is-a.dev/privacy/">
    <meta property="og:image" content="https://alexgaming.is-a.dev/icons/og-main.jpg">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Datenschutz | alexgamingdev">
    <meta name="twitter:description" content="Datenschutzerklärung für die Website alexgaming.is-a.dev.">
    <meta name="twitter:creator" content="@alexgamingdev">

    <link rel="me" href="https://mastodon.social/@alexgamingdev">
    <link rel="me" href="https://github.com/alexgamingdev">

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://alexgaming.is-a.dev/privacy/#webpage",
          "url": "https://alexgaming.is-a.dev/privacy/",
          "name": "Datenschutz | alexgamingdev",
          "isPartOf": { "@id": "https://alexgaming.is-a.dev/#website" },
          "about": { "@id": "https://www.wikidata.org/wiki/Q138410440" },
          "description": "Datenschutzerklärung für die Website alexgaming.is-a.dev."
        },
        {
          "@type": "WebSite",
          "@id": "https://alexgaming.is-a.dev/#website",
          "url": "https://alexgaming.is-a.dev/",
          "name": "alexgamingdev Portfolio",
          "publisher": { "@id": "https://www.wikidata.org/wiki/Q138410440" },
          "mainEntity": { "@id": "https://www.wikidata.org/wiki/Q138410440" }
        },
        {
          "@type": "Person",
          "@id": "https://www.wikidata.org/wiki/Q138410440",
          "name": "Alexander Dennhoven",
          "alternateName": ["alexgamingdev", "Alex Gaming Dev"],
          "image": "https://alexgaming.is-a.dev/icons/favicon.png",
          "url": "https://alexgaming.is-a.dev",
          "jobTitle": "Software Developer & Architect",
          "description": "Alexander Dennhoven is a software architect specialized in C#, .NET, and local-first applications.",
          "nationality": { "@type": "Country", "name": "Germany" },
          "knowsLanguage": ["de", "en"],
          "knowsAbout": ["Software Engineering", "CLI Tools", "Local-first Apps", "C#", ".NET", "Architecture", "Automation"],
          "sameAs": [
            "https://www.wikidata.org/wiki/Q138410440",
            "https://github.com/alexgamingdev",
            "https://x.com/alexgamingdev",
            "https://www.linkedin.com/in/alexgamingdev/",
            "https://www.youtube.com/@alexgamingdev",
            "https://www.youtube.com/channel/UCGjpQOhY7XNjvHdb2yj0Nyg",
            "https://www.twitch.tv/alexgamingdev",
            "https://bsky.app/profile/alexgaming.is-a.dev",
            "https://mastodon.social/@alexgamingdev",
            "https://www.npmjs.com/~alexgamingdev",
            "https://linktr.ee/alexgamingdev",
            "https://news.alexgamingdev.tech",
            "https://de.pinterest.com/alexgamingdev/",
            "nostr:npub1tcv7ela0kwz6ntz3qxj1he65z6x8eghkhgk8m0kw92j0jzsztvqkphn77f",
            "did:web:alexgaming.is-a.dev"
          ]
        }
      ]
    }
    </script>

    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;500;700&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet">

    <style>
        :root {
            --primary-black: #050505;
            --accent-blue: #00f2ff;
            --accent-purple: #bc13fe;
            --text-main: #e0e0e0;
        }

        body {
            font-family: 'Rajdhani', sans-serif;
            background-color: var(--primary-black);
            color: var(--text-main);
            overflow-x: hidden;
            margin: 0;
            width: 100%;
        }

        h1, h2, h3, .nav-logo { font-family: 'Orbitron', sans-serif; }
        .mono { font-family: 'Fira Code', monospace; }

        .space-container {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: radial-gradient(circle at center, #0a0a0a 0%, #050505 100%);
            z-index: -1;
        }
        .star-layer { position: absolute; inset: 0; background-repeat: repeat; pointer-events: none; }

        #loader-wrapper {
            position: fixed; inset: 0; background: #090707;
            display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 1000;
            transition: opacity 0.6s ease;
        }
        .loader-3 { position: relative; width: 80px; height: 80px; border-radius: 50%; perspective: 800px; }
        .loader-3 .inner { position: absolute; width: 100%; height: 100%; border-radius: 50%; border-bottom: 3px solid var(--accent-blue); }
        .loader-3 .one { animation: rotate-one 1s linear infinite; }
        .loader-3 .two { animation: rotate-two 1s linear infinite; border-bottom: none; border-right: 3px solid var(--accent-purple); }
        .loader-3 .three { animation: rotate-three 1s linear infinite; border-bottom: none; border-top: 3px solid #fff; }

        @keyframes rotate-one { 0% { transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg); } 100% { transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg); } }
        @keyframes rotate-two { 0% { transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg); } 100% { transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg); } }
        @keyframes rotate-three { 0% { transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg); } 100% { transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg); } }

        .animated-dev {
            background: linear-gradient(90deg, #00f2ff, #bc13fe, #00f2ff);
            background-size: 200% auto;
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            animation: gradient-shift 3s linear infinite;
        }

        @keyframes gradient-shift {
            0% { background-position: 0% center; }
            100% { background-position: 200% center; }
        }

        .content-card {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(15px);
            clip-path: polygon(0 0, 100% 0, 100% 90%, 95% 100%, 0 100%);
        }

        @keyframes move-stars { from { transform: translateY(0); } to { transform: translateY(-1000px); } }
    </style>
</head>
<body class="antialiased">

    <div class="space-container" id="space-bg"></div>

    <div id="loader-wrapper">
        <div class="loader-3 mb-8">
            <div class="inner one"></div>
            <div class="inner two"></div>
            <div class="inner three"></div>
        </div>
        <div class="mono text-xs text-blue-500 tracking-[0.5em] animate-pulse">LOADING...</div>
    </div>

    <nav class="fixed w-full z-50 px-4 md:px-8 py-4 flex justify-between items-center bg-black/60 backdrop-blur-xl border-b border-white/5">
        <div class="nav-logo text-lg md:text-xl font-black tracking-widest text-white flex items-center cursor-pointer" onclick="window.location.href='/'">
            <img src="https://alexgaming.is-a.dev/icons/favicon.png" class="w-6 h-6 md:w-8 md:h-8 mr-2 object-contain" alt="Logo">
            <span>alexgaming<span class="animated-dev">dev</span></span>
        </div>
    </nav>

    <main class="pt-32 pb-24 px-6 max-w-3xl mx-auto">
        <p class="mono text-cyan-400 mb-4 text-xs tracking-[0.3em] uppercase opacity-80">// PRIVACY</p>
        <h1 class="text-3xl md:text-4xl font-black mb-12 text-white tracking-tight border-l-4 border-purple-500 pl-6">Datenschutzerklärung</h1>

        <div class="space-y-8 text-lg">
            <div class="content-card p-6">
                <h2 class="text-purple-400 font-bold uppercase text-xs mb-3 tracking-[0.2em] mono">1. Verantwortlicher</h2>
                <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist alexgamingdev (siehe <a href="/impressum/" class="text-cyan-400 hover:underline">Impressum</a>).</p>
            </div>

            <div class="content-card p-6">
                <h2 class="text-purple-400 font-bold uppercase text-xs mb-3 tracking-[0.2em] mono">2. Datenerfassung & Hosting</h2>
                <p>Diese Webseite wird bei einem externen Hostinganbieter betrieben. Personenbezogene Daten (z.B. IP-Adressen in Server-Logfiles) werden zur Bereitstellung und Sicherheit der Seite verarbeitet (Art. 6 Abs. 1 lit. f DSGVO).</p>
            </div>

            <div class="content-card p-6">
                <h2 class="text-purple-400 font-bold uppercase text-xs mb-3 tracking-[0.2em] mono">3. Externe Ressourcen (Google Fonts & Tailwind)</h2>
                <p>Zur optisch ansprechenden Darstellung nutzen wir <strong>Google Fonts</strong> und das <strong>Tailwind CDN</strong>. Dabei wird beim Aufruf der Seite eine Verbindung zu Servern (u.a. von Google) aufgebaut, wodurch deine IP-Adresse übermittelt wird. Dies erfolgt auf Basis unseres berechtigten Interesses an einem konsistenten Design (Art. 6 Abs. 1 lit. f DSGVO).</p>
            </div>

            <div class="content-card p-6">
                <h2 class="text-purple-400 font-bold uppercase text-xs mb-3 tracking-[0.2em] mono">4. Kontaktanfragen</h2>
                <p>Wenn du mir eine E-Mail schreibst, speichere ich deine Daten zur Bearbeitung deiner Anfrage. Eine Weitergabe an Dritte erfolgt nicht ohne deine Einwilligung.</p>
            </div>

            <div class="content-card p-6">
                <h2 class="text-purple-400 font-bold uppercase text-xs mb-3 tracking-[0.2em] mono">5. Deine Rechte</h2>
                <p>Du hast das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung deiner Daten. Wende dich einfach an <span class="mono text-cyan-400">legacy@alexgamingdev.tech</span>.</p>
            </div>
        </div>

        <div class="mt-12">
            <a href="/" class="mono px-8 py-3 border border-cyan-500/50 hover:bg-cyan-500/10 transition-all font-bold uppercase tracking-[0.2em] text-cyan-400 text-xs">← Back to Terminal</a>
        </div>
    </main>

    <footer class="py-12 text-center border-t border-white/5 opacity-40 text-[10px] uppercase tracking-widest">
        <div class="flex flex-wrap justify-center gap-6 mb-4">
            <a href="/impressum/">Impressum</a>
            <a href="/privacy/">Datenschutz</a>
            <a rel="me" href="https://mastodon.social/@alexgamingdev">Mastodon</a>
            <a href="https://bsky.app/profile/alexgaming.is-a.dev">Bluesky</a>
        </div>
        © 2026 | Alexander Dennhoven (alexgamingdev)
    </footer>

    <script>
        const spaceBg = document.getElementById('space-bg');
        function createStars(count, size, duration) {
            const layer = document.createElement('div');
            layer.className = 'star-layer';
            let shadows = [];
            for(let i=0; i<count; i++) shadows.push(`${Math.random()*2000}px ${Math.random()*2000}px #fff`);
            layer.style.boxShadow = shadows.join(',');
            layer.style.width = size + 'px'; layer.style.height = size + 'px';
            layer.style.animation = `move-stars ${duration}s linear infinite`;
            spaceBg.appendChild(layer);
        }
        createStars(700, 1, 100); createStars(200, 2, 150);

        window.addEventListener('load', () => {
            setTimeout(() => {
                document.getElementById('loader-wrapper').style.opacity = '0';
                setTimeout(() => document.getElementById('loader-wrapper').style.display = 'none', 600);
            }, 1500);
        });
    </script>
</body>
</html>
```

---

## FILE 3: `contact/index.html` – NUR diese zwei Änderungen

**Ändere nur Zeile 2** von:
```html
<html lang="en" class="scroll-smooth">
```
zu:
```html
<html lang="de-DE" class="scroll-smooth">
```

**Füge nach dem schließenden `</script>` des JSON-LD-Blocks (also nach Zeile 53) und vor `<script src="https://cdn.tailwindcss.com">` folgende Meta-Tags ein:**

```html
    <meta name="keywords" content="Alexander Dennhoven, alexgamingdev, Kontakt, Contact, Software Architect, Deutschland">
    <link rel="canonical" href="https://alexgaming.is-a.dev/contact/">

    <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png">
    <link rel="manifest" href="/icons/site.webmanifest">

    <meta property="og:title" content="Contact | alexgamingdev">
    <meta property="og:description" content="Sende eine verschlüsselte Nachricht an Alexander Dennhoven.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://alexgaming.is-a.dev/contact/">
    <meta property="og:image" content="https://alexgaming.is-a.dev/icons/og-main.jpg">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Contact | alexgamingdev">
    <meta name="twitter:description" content="Sende eine verschlüsselte Nachricht an Alexander Dennhoven.">
    <meta name="twitter:creator" content="@alexgamingdev">

    <link rel="me" href="https://mastodon.social/@alexgamingdev">
    <link rel="me" href="https://github.com/alexgamingdev">
```

---

## FILE 4: `about/index.html` – NUR diese Änderung

**Ändere Zeile 10** von:
```html
    <link rel="canonical" href="https://alexgaming.is-a.dev/">
```
zu:
```html
    <link rel="canonical" href="https://alexgaming.is-a.dev/about/">
```

---

## FILE 5: `referee/index.html`

**Ziel:** Das Schiri-Tool bekommt das volle index.html-Design (Navbar, Starfield, Loader, Footer). Die Tool-Funktionalität bleibt vollständig erhalten.

Ersetze den **gesamten Inhalt** von `referee/index.html` mit:

```html
<!DOCTYPE html>
<html lang="de-DE" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Schiri-Tool | alexgamingdev</title>
    <meta name="description" content="Schiri-Profi-Tool von alexgamingdev – Digitale Gelbe & Rote Karte für den Einsatz auf dem Spielfeld.">
    <meta name="keywords" content="Alexander Dennhoven, alexgamingdev, Schiedsrichter, Schiri Tool, Gelbe Karte, Rote Karte, Referee">
    <link rel="canonical" href="https://alexgaming.is-a.dev/referee/">

    <link rel="icon" type="image/png" href="/icons/favicon.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png">
    <link rel="manifest" href="/icons/site.webmanifest">

    <meta property="og:title" content="Schiri-Tool | alexgamingdev">
    <meta property="og:description" content="Digitale Gelbe & Rote Karte für den Einsatz auf dem Spielfeld.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://alexgaming.is-a.dev/referee/">
    <meta property="og:image" content="https://alexgaming.is-a.dev/icons/og-main.jpg">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Schiri-Tool | alexgamingdev">
    <meta name="twitter:description" content="Digitale Gelbe & Rote Karte für den Einsatz auf dem Spielfeld.">
    <meta name="twitter:creator" content="@alexgamingdev">

    <link rel="me" href="https://mastodon.social/@alexgamingdev">
    <link rel="me" href="https://github.com/alexgamingdev">

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://alexgaming.is-a.dev/referee/#webpage",
          "url": "https://alexgaming.is-a.dev/referee/",
          "name": "Schiri-Tool | alexgamingdev",
          "isPartOf": { "@id": "https://alexgaming.is-a.dev/#website" },
          "about": { "@id": "https://www.wikidata.org/wiki/Q138410440" },
          "description": "Digitale Gelbe & Rote Karte für Schiedsrichter."
        },
        {
          "@type": "WebSite",
          "@id": "https://alexgaming.is-a.dev/#website",
          "url": "https://alexgaming.is-a.dev/",
          "name": "alexgamingdev Portfolio",
          "publisher": { "@id": "https://www.wikidata.org/wiki/Q138410440" },
          "mainEntity": { "@id": "https://www.wikidata.org/wiki/Q138410440" }
        },
        {
          "@type": "Person",
          "@id": "https://www.wikidata.org/wiki/Q138410440",
          "name": "Alexander Dennhoven",
          "alternateName": ["alexgamingdev", "Alex Gaming Dev"],
          "image": "https://alexgaming.is-a.dev/icons/favicon.png",
          "url": "https://alexgaming.is-a.dev",
          "jobTitle": "Software Developer & Architect",
          "description": "Alexander Dennhoven is a software architect specialized in C#, .NET, and local-first applications.",
          "nationality": { "@type": "Country", "name": "Germany" },
          "knowsLanguage": ["de", "en"],
          "knowsAbout": ["Software Engineering", "CLI Tools", "Local-first Apps", "C#", ".NET", "Architecture", "Automation"],
          "sameAs": [
            "https://www.wikidata.org/wiki/Q138410440",
            "https://github.com/alexgamingdev",
            "https://x.com/alexgamingdev",
            "https://www.linkedin.com/in/alexgamingdev/",
            "https://bsky.app/profile/alexgaming.is-a.dev",
            "https://mastodon.social/@alexgamingdev",
            "https://www.npmjs.com/~alexgamingdev",
            "https://linktr.ee/alexgamingdev",
            "nostr:npub1tcv7ela0kwz6ntz3qxj1he65z6x8eghkhgk8m0kw92j0jzsztvqkphn77f",
            "did:web:alexgaming.is-a.dev"
          ]
        }
      ]
    }
    </script>

    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;500;700&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet">

    <style>
        :root {
            --primary-black: #050505;
            --accent-blue: #00f2ff;
            --accent-purple: #bc13fe;
            --text-main: #e0e0e0;
        }

        body {
            font-family: 'Rajdhani', sans-serif;
            background-color: var(--primary-black);
            color: var(--text-main);
            overflow-x: hidden;
            margin: 0;
            width: 100%;
        }

        h1, h2, h3, .nav-logo { font-family: 'Orbitron', sans-serif; }
        .mono { font-family: 'Fira Code', monospace; }

        .space-container {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: radial-gradient(circle at center, #0a0a0a 0%, #050505 100%);
            z-index: -1;
        }
        .star-layer { position: absolute; inset: 0; background-repeat: repeat; pointer-events: none; }

        #loader-wrapper {
            position: fixed; inset: 0; background: #090707;
            display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 1000;
            transition: opacity 0.6s ease;
        }
        .loader-3 { position: relative; width: 80px; height: 80px; border-radius: 50%; perspective: 800px; }
        .loader-3 .inner { position: absolute; width: 100%; height: 100%; border-radius: 50%; border-bottom: 3px solid var(--accent-blue); }
        .loader-3 .one { animation: rotate-one 1s linear infinite; }
        .loader-3 .two { animation: rotate-two 1s linear infinite; border-bottom: none; border-right: 3px solid var(--accent-purple); }
        .loader-3 .three { animation: rotate-three 1s linear infinite; border-bottom: none; border-top: 3px solid #fff; }

        @keyframes rotate-one { 0% { transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg); } 100% { transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg); } }
        @keyframes rotate-two { 0% { transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg); } 100% { transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg); } }
        @keyframes rotate-three { 0% { transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg); } 100% { transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg); } }

        .animated-dev {
            background: linear-gradient(90deg, #00f2ff, #bc13fe, #00f2ff);
            background-size: 200% auto;
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            animation: gradient-shift 3s linear infinite;
        }

        @keyframes gradient-shift {
            0% { background-position: 0% center; }
            100% { background-position: 200% center; }
        }

        @keyframes move-stars { from { transform: translateY(0); } to { transform: translateY(-1000px); } }

        /* Referee Tool Styles */
        #referee-body {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transition: background-color 0.1s ease;
            border-radius: 0;
        }

        #ui-layer {
            text-align: center;
            transition: opacity 0.2s;
        }

        .card-row {
            display: flex;
            gap: 25px;
            margin-bottom: 40px;
        }

        .card {
            width: 140px;
            height: 200px;
            border-radius: 12px;
            cursor: pointer;
            box-shadow: 0 10px 20px rgba(0,0,0,0.5);
            border: 3px solid rgba(255,255,255,0.2);
            transition: transform 0.2s ease;
        }

        .card:hover { transform: scale(1.05); }
        .yellow { background-color: #ffd700; }
        .red { background-color: #ff0000; }

        #fullscreen-overlay {
            display: none;
            position: fixed;
            inset: 0;
            z-index: 500;
            align-items: center;
            justify-content: center;
        }
    </style>
</head>
<body class="antialiased">

    <div class="space-container" id="space-bg"></div>

    <div id="loader-wrapper">
        <div class="loader-3 mb-8">
            <div class="inner one"></div>
            <div class="inner two"></div>
            <div class="inner three"></div>
        </div>
        <div class="mono text-xs text-blue-500 tracking-[0.5em] animate-pulse">LOADING...</div>
    </div>

    <!-- Fullscreen Card Overlay -->
    <div id="fullscreen-overlay" onclick="resetView()"></div>

    <nav class="fixed w-full z-50 px-4 md:px-8 py-4 flex justify-between items-center bg-black/60 backdrop-blur-xl border-b border-white/5">
        <div class="nav-logo text-lg md:text-xl font-black tracking-widest text-white flex items-center cursor-pointer" onclick="window.location.href='/'">
            <img src="https://alexgaming.is-a.dev/icons/favicon.png" class="w-6 h-6 md:w-8 md:h-8 mr-2 object-contain" alt="Logo">
            <span>alexgaming<span class="animated-dev">dev</span></span>
        </div>
    </nav>

    <main class="min-h-screen pt-32 pb-24 px-6 flex flex-col items-center justify-center">
        <p class="mono text-cyan-400 mb-4 text-xs tracking-[0.3em] uppercase opacity-80">// SCHIRI-TOOL</p>
        <h1 class="text-3xl md:text-4xl font-black mb-12 text-white tracking-tight text-center">Schiedsrichter <span class="animated-dev">Karten</span></h1>

        <div id="referee-body" class="w-full flex flex-col items-center">
            <div id="ui-layer">
                <div class="card-row">
                    <div class="card yellow" onclick="triggerCard('#ffd700', event)"></div>
                    <div class="card red" onclick="triggerCard('#ff0000', event)"></div>
                </div>
                <p class="mono text-white/40 text-xs tracking-[0.2em] uppercase">Tippe auf eine Karte</p>
            </div>
        </div>
    </main>

    <footer class="py-12 text-center border-t border-white/5 opacity-40 text-[10px] uppercase tracking-widest">
        <div class="flex flex-wrap justify-center gap-6 mb-4">
            <a href="/impressum/">Impressum</a>
            <a href="/privacy/">Datenschutz</a>
            <a rel="me" href="https://mastodon.social/@alexgamingdev">Mastodon</a>
            <a href="https://bsky.app/profile/alexgaming.is-a.dev">Bluesky</a>
        </div>
        © 2026 | Alexander Dennhoven (alexgamingdev)
    </footer>

    <script>
        const spaceBg = document.getElementById('space-bg');
        function createStars(count, size, duration) {
            const layer = document.createElement('div');
            layer.className = 'star-layer';
            let shadows = [];
            for(let i=0; i<count; i++) shadows.push(`${Math.random()*2000}px ${Math.random()*2000}px #fff`);
            layer.style.boxShadow = shadows.join(',');
            layer.style.width = size + 'px'; layer.style.height = size + 'px';
            layer.style.animation = `move-stars ${duration}s linear infinite`;
            spaceBg.appendChild(layer);
        }
        createStars(700, 1, 100); createStars(200, 2, 150);

        window.addEventListener('load', () => {
            setTimeout(() => {
                document.getElementById('loader-wrapper').style.opacity = '0';
                setTimeout(() => document.getElementById('loader-wrapper').style.display = 'none', 600);
            }, 1500);
        });

        // Referee Tool Logic
        let audioCtx = null;
        const overlay = document.getElementById('fullscreen-overlay');

        function initAudio() {
            if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }

        function playWhistle() {
            initAudio();
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'square';
            osc.frequency.setValueAtTime(2800, audioCtx.currentTime);
            gain.gain.setValueAtTime(0, audioCtx.currentTime);
            gain.gain.linearRampToValueAtTime(0.2, audioCtx.currentTime + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.6);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start();
            osc.stop(audioCtx.currentTime + 0.6);
        }

        function triggerCard(color, event) {
            event.stopPropagation();
            playWhistle();
            overlay.style.backgroundColor = color;
            overlay.style.display = 'flex';
            setTimeout(resetView, 3000);
        }

        function resetView() {
            overlay.style.display = 'none';
        }
    </script>
</body>
</html>
```

---

## Zusammenfassung der Änderungen

| Datei | Art der Änderung |
|---|---|
| `impressum/index.html` | **Komplett ersetzt** → Under Construction Page mit vollem Design + JSON-LD + Meta |
| `privacy/index.html` | **Komplett ersetzt** → Datenschutz mit vollem Design + JSON-LD + Meta |
| `contact/index.html` | **Minimale Ergänzung** → `lang="de-DE"` + fehlende Meta-Tags eingefügt |
| `about/index.html` | **Eine Zeile geändert** → canonical von `/` auf `/about/` |
| `referee/index.html` | **Komplett ersetzt** → Schiri-Tool mit vollem Design + JSON-LD + Meta, Funktionalität erhalten |

## Wichtige Regeln

- Ändere **nichts** an `index.html` (Haupt-Seite)
- Ändere **nichts** an den Fehlerseiten (`400.html`, `401.html`, etc.)
- Ändere **nichts** an `robots.txt`, `sitemap.xml`, `.htaccess`, `CNAME`
- Das gemeinsame CSS-Block (`:root`, `body`, `h1/h2/h3`, `.mono`, `.space-container`, `#loader-wrapper`, `.loader-3`, `.animated-dev`, `@keyframes`) muss auf jeder Seite **identisch** zu `index.html` sein

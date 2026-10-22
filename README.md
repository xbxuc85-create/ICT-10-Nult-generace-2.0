<!doctype html>
<html lang="cs">
<head>
  <meta charset="utf-8">
  <meta name="author" content="Sebastian Bitto">
  <title>Nultá generace počítačů</title>
  <style>
    :root {
      color-scheme: light;
      --ink: #5b8164;
      --muted: #5a635b;
      --paper: #ffffff;
      --line: #cbd2c9;
      --green: #426a4a;
      --soft-green: #eef3ec;
      --soft-yellow: #fff7dc;
      --header: #666666;
      --nav: #cccccc;
      --content: #f1f1f1;
    }

    * { box-sizing: border-box; }

    body {
      margin: 0;
      background: #ffffff;
      color: var(--ink);
      font: 16px/1.5 Arial, sans-serif;
    }

    main {
      width: 100%;
    }

    h1, h2, h3 { line-height: 1.2; }
    h1 { margin: 0; color: #ffffff; font: bold 2rem Georgia, "Times New Roman", serif; }
    h2 { margin-top: 30px; padding: 7px 10px; border-left: 4px solid var(--green); background: var(--soft-green); font-size: 1.25rem; }
    h3 { margin-top: 0; font-size: 1.08rem; }
    p { max-width: 75ch; }
    a { color: #234d34; overflow-wrap: anywhere; }
    .site-header { background: var(--header); padding: 24px 30px; text-align: center; }
    .layout { display: grid; grid-template-columns: 30% minmax(0, 70%); }
    nav { background: var(--nav); padding: 20px; }
    nav ul { list-style: none; margin: 0; padding: 0; }
    nav li + li { margin-top: 10px; }
    nav a { display: block; padding: 8px 10px; color: #202820; text-decoration: none; }
    nav a:hover, nav a:focus { background: #ffffff; text-decoration: underline; }
    .content { min-width: 0; padding: 20px; background: var(--content); }
    .content-header h2 { margin-top: 0; padding: 0; border: 0; background: transparent; }
    .intro { color: var(--muted); margin: 8px 0 22px; }
    .student { border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); padding: 10px 0; color: var(--muted); }
    .note { padding: 12px 14px; background: var(--soft-yellow); border-left: 4px solid #b58b18; }
    .diagram { margin: 16px 0 8px; padding: 10px; border: 1px solid var(--line); background: #fff; overflow-x: auto; }
    .diagram svg { display: block; width: 100%; min-width: 440px; height: auto; }
    .caption { margin: 6px 0 0; font-size: .92rem; color: var(--muted); }
    .models { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; margin-top: 14px; }
    .model { padding: 14px; border: 1px solid var(--line); background: #fff; }
    .model p { margin: 8px 0; }
    .circuit { margin: 12px 0; padding: 6px; border: 1px solid var(--line); background: #fff; overflow-x: auto; }
    .circuit svg { display: block; width: 100%; min-width: 360px; height: auto; }
    table { width: 100%; border-collapse: collapse; margin-top: 12px; font-family: Arial, sans-serif; font-size: .94rem; }
    th, td { padding: 7px 9px; border: 1px solid var(--line); text-align: left; }
    th { background: var(--soft-green); }
    .cards { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; margin-top: 14px; }
    .history-card { padding: 14px; border: 1px solid var(--line); background: #fff; }
    .history-card dl { margin: 0; }
    .history-card dt { margin-top: 9px; font-weight: bold; }
    .history-card dd { margin-left: 0; }
    .source { font-size: .9rem; }
    footer { background: #777777; margin: 0; padding: 10px 20px; color: #ffffff; text-align: center; font-size: .9rem; }
    footer p { margin: 0 auto; }

    @media (max-width: 600px) {
      .layout { grid-template-columns: 1fr; }
      .models, .cards { grid-template-columns: 1fr; }
      .site-header { padding: 22px 18px; }
      .content { padding: 18px; }
    }
  </style>
</head>
<body>
  <main>
    <header class="site-header">
      <h1>Nultá generace</h1>
    </header>

    <section class="layout">
      <nav aria-label="Obsah stránky">
        <ul>
          <li><a href="#rele">Jak funguje relé</a></li>
          <li><a href="#logika">Dva spínače a logika</a></li>
          <li><a href="#historie">Historické karty</a></li>
          <li><a href="#porovnani">Reléový stroj a kalkulačka</a></li>
          <li><a href="#omezeni">Omezení reléových počítačů</a></li>
        </ul>
      </nav>

      <article class="content">
    <header class="content-header">
      <h2>Nultá generace počítačů</h2>
      <p class="intro">Relé, jednoduchá logika a dva známé stroje z první poloviny 20. století.</p>
      <p class="student">Jméno: Sebastian Bitto    Třída: S1I    Datum: 16.10.2026.    Rozvržení práce: 15 min       čtení a plán • 55 min řešení.         • 20 min protokol a kontrola.</p>
    </header>

    <p class="note"><strong>Než začnu:</strong> Nultou generací se ve školním členění obvykle myslí elektromechanické počítače, které používaly relé. Relé je spínač ovládaný elektromagnetem. Tento protokol ukazuje jen model, žádné skutečné zapojení.</p>

    <section id="rele">
      <h2>1. Jak funguje relé</h2>
      <p>Po přivedení proudu do cívky vznikne magnetické pole. To přitáhne pohyblivou část relé a kontakty změní polohu. V jednoduchém modelu může sepnutý kontakt znamenat 1 a rozepnutý kontakt 0. Cívka a spínaný obvod jsou elektricky oddělené.</p>
      <div class="diagram">
        <svg viewBox="0 0 760 220" role="img" aria-labelledby="relay-title relay-desc">
          <title id="relay-title">Zjednodušené schéma relé</title>
          <desc id="relay-desc">Horní ovládací obvod obsahuje cívku. Přerušovaná čára naznačuje mechanické spojení s kontaktem ve spodním obvodu se žárovkou.</desc>
          <g fill="none" stroke="#202820" stroke-width="3">
            <path d="M40 63 H205 M335 63 H500 V105" />
            <path d="M40 63 V105 M40 105 H205 M335 105 H500" />
            <path d="M40 105 V164 H100 M145 164 H235 M285 164 H390 M430 164 H500 V105" />
            <path d="M235 164 H279" />
            <path d="M281 164 L322 139" />
            <path d="M281 164 H285" stroke-dasharray="5 6" />
            <path d="M270 105 V143" stroke-dasharray="5 6" />
            <path d="M40 54 V72 M48 58 V68" />
            <path d="M500 96 V114 M508 100 V110" />
            <path d="M205 48 q10 15 20 0 t20 0 t20 0 t20 0 t20 0 t20 0" />
            <circle cx="123" cy="164" r="18" />
            <path d="M112 175 L134 153 M123 146 V138" />
          </g>
          <g fill="#202820" font-family="Georgia, serif" font-size="17">
            <text x="48" y="39">ovládací obvod</text>
            <text x="236" y="31">cívka</text>
            <text x="48" y="204">napájení</text>
            <text x="100" y="204">žárovka</text>
            <text x="235" y="204">spínaný kontakt</text>
            <text x="518" y="108">spínaný obvod</text>
            <text x="326" y="132">pohyblivý kontakt</text>
          </g>
        </svg>
        <p class="caption">Vlastní zjednodušený nákres: cívka pohne kontaktem, který otevře nebo uzavře druhý obvod.</p>
      </div>
    </section>

    <section id="logika">
      <h2>2. Dva spínače a modelová žárovka</h2>
      <p>Stavy 0 a 1 znamenají rozepnutý a sepnutý spínač. U modelu za sebou musí být sepnuté oba spínače. U modelu vedle sebe stačí, aby byl sepnutý alespoň jeden.</p>
      <div class="models">
        <article class="model" data-model="series">
          <h3>Spínače za sebou (AND)</h3>
          <p>Obvod se uzavře, jen když jsou sepnuté oba spínače.</p>
          <div class="circuit">
            <svg viewBox="0 0 440 150" role="img" aria-label="Dva otevřené spínače zapojené za sebou a žárovka">
              <g fill="none" stroke="#263329" stroke-width="3">
                <path d="M45 25 H100 M145 25 H200 M245 25 H335 V55 M335 95 V125 H45 V95 M45 55 V25" />
                <path d="M100 25 L132 10 M200 25 L232 10" />
                <path d="M29 56 H61 M36 94 H54" />
                <circle cx="335" cy="75" r="20" />
                <path d="M324 86 L346 64" />
              </g>
              <g fill="#263329" font-family="Arial, sans-serif" font-size="14">
                <text x="106" y="51">S1</text><text x="206" y="51">S2</text><text x="360" y="80">žárovka</text>
              </g>
            </svg>
          </div>
          <table>
            <thead><tr><th>S1</th><th>S2</th><th>Žárovka</th></tr></thead>
            <tbody>
              <tr data-state="00"><td>0</td><td>0</td><td>0 – nesvítí</td></tr>
              <tr data-state="01"><td>0</td><td>1</td><td>0 – nesvítí</td></tr>
              <tr data-state="10"><td>1</td><td>0</td><td>0 – nesvítí</td></tr>
              <tr data-state="11"><td>1</td><td>1</td><td>1 – svítí</td></tr>
            </tbody>
          </table>
        </article>

        <article class="model" data-model="parallel">
          <h3>Spínače vedle sebe (OR)</h3>
          <p>Obvod se uzavře, když je sepnutý alespoň jeden spínač.</p>
          <div class="circuit">
            <svg viewBox="0 0 440 155" role="img" aria-label="Dva spínače zapojené vedle sebe a žárovka">
              <g fill="none" stroke="#263329" stroke-width="3">
                <path d="M45 25 H72 M100 25 H130 V45 M130 45 V105 M130 45 H175 M220 45 H330 V105 M130 105 H175 M220 105 H330 M330 45 V105 M330 105 V130 H45 V95 M45 55 V25" />
                <path d="M175 45 L207 30 M175 105 L207 90" />
                <path d="M29 56 H61 M36 94 H54" />
                <circle cx="86" cy="25" r="14" />
                <path d="M78 33 L94 17" />
              </g>
              <g fill="#263329" font-family="Arial, sans-serif" font-size="14">
                <text x="175" y="68">S1</text><text x="175" y="128">S2</text><text x="66" y="13">žárovka</text>
              </g>
            </svg>
          </div>
          <table>
            <thead><tr><th>S1</th><th>S2</th><th>Žárovka</th></tr></thead>
            <tbody>
              <tr data-state="00"><td>0</td><td>0</td><td>0 – nesvítí</td></tr>
              <tr data-state="01"><td>0</td><td>1</td><td>1 – svítí</td></tr>
              <tr data-state="10"><td>1</td><td>0</td><td>1 – svítí</td></tr>
              <tr data-state="11"><td>1</td><td>1</td><td>1 – svítí</td></tr>
            </tbody>
          </table>
        </article>
      </div>
    </section>

    <section id="historie">
      <h2>3. Historické karty</h2>
      <div class="cards">
        <article class="history-card">
          <h3>Z3</h3>
          <dl>
            <dt>Rok</dt><dd>1941</dd>
            <dt>Země</dt><dd>Německo</dd>
            <dt>Spínací prvek</dt><dd>Elektromechanická relé</dd>
            <dt>Účel</dt><dd>Experimentální programovatelný počítač; Zuse jej zamýšlel mimo jiné pro technické a aerodynamické výpočty.</dd>
          </dl>
          <p class="source"><strong>Zdroj:</strong> Computer History Museum, <a href="https://www.computerhistory.org/timeline/" target="_blank" rel="noopener noreferrer">Computer History Museum Timeline</a>. Datum citace: 16. 10. 2026.</p>
        </article>
        <article class="history-card">
          <h3>Harvard Mark I (IBM ASCC)</h3>
          <dl>
            <dt>Rok</dt><dd>1944</dd>
            <dt>Země</dt><dd>Spojené státy americké</dd>
            <dt>Spínací prvek</dt><dd>Elektromechanická relé; výpočty zároveň používaly mechanické čítače a hřídele.</dd>
            <dt>Účel</dt><dd>Automatické provádění dlouhých výpočtů, mimo jiné pro potřeby amerického námořnictva.</dd>
          </dl>
          <p class="source"><strong>Zdroj:</strong> IBM, <a href="https://www.ibm.com/history/harvard-mark-1" target="_blank" rel="noopener noreferrer">Harvard Mark I</a>. Datum citace: 16. 10. 2026.</p>
        </article>
      </div>
    </section>

    <section id="porovnani">
      <h2>4. Reléový stroj a mechanická kalkulačka</h2>
      <table>
        <thead><tr><th>Vlastnost</th><th>Reléový počítač</th><th>Mechanická kalkulačka</th></tr></thead>
        <tbody>
          <tr><td>Jak pracuje</td><td>Relé přepínají elektrické obvody; výpočet může řídit program.</td><td>Čísla zpracovávají ozubená kola a další pohyblivé součásti.</td></tr>
          <tr><td>Ovládání</td><td>Může provádět posloupnost kroků automaticky podle programu.</td><td>Obvykle ji obsluha zadává a ovládá ručně.</td></tr>
          <tr><td>Rychlost a zvuk</td><td>Rychlejší než ruční zadávání jednotlivých kroků, ale relé cvakají a nejsou okamžitá.</td><td>Rychlost závisí na obsluze; pohyb součástí je také slyšet a cítit.</td></tr>
        </tbody>
      </table>
    </section>

    <section id="omezeni">
      <h2>5. Omezení reléových počítačů</h2>
      <ol>
        <li><strong>Nižší rychlost:</strong> kontakt se musí fyzicky pohnout a ustálit, takže relé nepřepíná tak rychle jako elektronický prvek.</li>
        <li><strong>Opotřebení:</strong> při každém přepnutí se části dotknou nebo oddálí. Po mnoha cyklech se kontakty opotřebují a mohou potřebovat údržbu.</li>
        <li><strong>Nespolehlivé zákmitové přepnutí:</strong> pohyblivý kontakt může po sepnutí krátce několikrát odskočit. Obvod proto někdy musí počkat nebo přidat další řízení, než výsledek použije.</li>
      </ol>
    </section>

      </article>
    </section>
    <footer>
      <p>Tohle jsou důkladné informace, co bysme měli vědět :D</p>
    </footer>
  </main>

</body>
</html>
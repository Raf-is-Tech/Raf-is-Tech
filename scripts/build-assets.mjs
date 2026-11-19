import { mkdir, writeFile } from 'node:fs/promises';

const output = new URL('../assets/', import.meta.url);
await mkdir(output, { recursive: true });
const esc = (s) => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const text = (x, y, s, fill, size = 14, extra = '') => `<text x="${x}" y="${y}" fill="${fill}" font-family="Arial, Helvetica, sans-serif" font-size="${size}" ${extra}>${esc(s)}</text>`;
const svg = (w, h, title, desc, body) => `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-labelledby="title description"><title id="title">${esc(title)}</title><desc id="description">${esc(desc)}</desc>${body}</svg>\n`;

function hero(light = false) {
  const p = light
    ? { bg: '#f0f5f8', panel: '#ffffff', ink: '#142536', muted: '#52677b', line: '#cfdee7', cyan: '#08798c', red: '#cc294a', glow: '#b5e6ee', slab: '#dceaf1', deep: '#c6dce7' }
    : { bg: '#090d14', panel: '#121e2b', ink: '#f5f8ff', muted: '#9aaec2', line: '#253548', cyan: '#49dcff', red: '#ff3155', glow: '#163c51', slab: '#1b3346', deep: '#102332' };
  return svg(1200, 440, "Moucharaf ADEOCHUN — RAF'STECH", 'Ingénieur logiciel à Cotonou, Bénin. SaaS, web, mobile et e-commerce sur mesure. Illustration de couches logicielles connectées.', `
<defs>
  <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0H0V32" fill="none" stroke="${p.line}" stroke-width="0.7"/></pattern>
  <radialGradient id="glow"><stop stop-color="${p.glow}"/><stop offset="1" stop-color="${p.bg}" stop-opacity="0"/></radialGradient>
  <linearGradient id="edge" x2="1" y2="1"><stop stop-color="${p.cyan}"/><stop offset="1" stop-color="${p.red}"/></linearGradient>
</defs>
<rect width="1200" height="440" rx="22" fill="${p.bg}"/>
<rect x="700" y="16" width="484" height="408" rx="14" fill="url(#grid)" opacity="0.7"/>
<ellipse cx="954" cy="221" rx="260" ry="218" fill="url(#glow)"/>
<rect x="1" y="1" width="1198" height="438" rx="21" fill="none" stroke="${p.line}"/>
<path d="M38 48V30H56M1162 392V410H1144" fill="none" stroke="${p.cyan}" stroke-width="2"/>
${text(56, 56, "RAF'STECH", p.ink, 23, 'font-weight="700" letter-spacing="3"')}
<path d="M247 37V58" stroke="${p.line}"/>
${text(265, 52, 'SOFTWARE ENGINEER', p.cyan, 13, 'letter-spacing="2.5"')}
${text(56, 155, 'Moucharaf', p.ink, 76, 'font-weight="700" letter-spacing="-3"')}
${text(53, 232, 'ADEOCHUN', p.ink, 76, 'font-weight="700" letter-spacing="-3"')}
<rect x="58" y="252" width="54" height="4" rx="2" fill="${p.red}"/>
${text(56, 300, 'Du besoin utilisateur au produit.', p.muted, 25)}
${text(56, 348, 'SaaS', p.cyan, 17, 'font-weight="700"')}
<circle cx="121" cy="342" r="2.5" fill="${p.muted}"/>
${text(137, 348, 'Web & mobile', p.ink, 17)}
<circle cx="265" cy="342" r="2.5" fill="${p.muted}"/>
${text(281, 348, 'E-commerce', p.ink, 17)}
<path d="M56 375H655" stroke="${p.line}"/>
${text(56, 408, 'COTONOU, BÉNIN', p.muted, 12, 'letter-spacing="2"')}
${text(401, 408, 'CONCEVOIR / CONSTRUIRE / ÉVOLUER', p.muted, 10, 'letter-spacing="1.1"')}
<g fill="none" stroke="${p.line}"><circle cx="953" cy="217" r="156" stroke-dasharray="3 8"/><ellipse cx="953" cy="217" rx="206" ry="92" transform="rotate(-34 953 217)"/></g>
<path d="M774 277L952 184 1123 277 946 371Z" fill="${p.deep}" stroke="${p.line}"/>
<path d="M774 263L952 170 1123 263 946 357Z" fill="${p.slab}" stroke="${p.cyan}" stroke-opacity="0.5"/>
<path d="M774 263V277L946 371V357M946 357L1123 263V277" fill="none" stroke="${p.line}"/>
<path d="M802 220L953 141 1096 220 946 300Z" fill="${p.deep}" stroke="${p.line}"/>
<path d="M802 205L953 126 1096 205 946 285Z" fill="${p.panel}" stroke="${p.cyan}"/>
<path d="M802 205V220L946 300V285M946 285L1096 205V220" fill="none" stroke="${p.cyan}" stroke-opacity="0.4"/>
<path d="M839 162L953 102 1061 162 948 223Z" fill="${p.deep}" stroke="${p.line}"/>
<path d="M839 148L953 88 1061 148 948 209Z" fill="${p.panel}" stroke="url(#edge)" stroke-width="2"/>
<path d="M839 148V162L948 223V209M948 209L1061 148V162" fill="none" stroke="${p.line}"/>
<g transform="translate(945 145) rotate(-28) skewX(30)" fill="none" stroke="${p.cyan}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M-19-10L-31 0-19 10M19-10L31 0 19 10M6-16L-6 16"/></g>
<path d="M792 132H748V89H705M1093 235H1144V308H1171M948 326V391H1055" fill="none" stroke="${p.line}"/>
<circle cx="792" cy="132" r="4" fill="${p.cyan}"/><circle cx="1093" cy="235" r="4" fill="${p.red}"/><circle cx="948" cy="326" r="4" fill="${p.cyan}"/>
${text(707, 79, '01 / INTERFACE', p.muted, 10, 'letter-spacing="1.2"')}
${text(1060, 334, '02 / LOGIQUE', p.muted, 10, 'letter-spacing="1.2"')}
${text(1066, 395, '03 / DONNÉES', p.muted, 10, 'letter-spacing="1.2"')}
<path d="M1082 93L1094 81M1082 81L1094 93" stroke="${p.red}" stroke-width="2"/>
<circle cx="814" cy="320" r="5" fill="${p.bg}" stroke="${p.cyan}" stroke-width="2"/>
`);
}

function heroMobile(light = false) {
  const p = light
    ? { bg: '#f0f5f8', ink: '#142536', muted: '#52677b', line: '#cfdee7', cyan: '#08798c', red: '#cc294a', panel: '#dceaf1' }
    : { bg: '#090d14', ink: '#f5f8ff', muted: '#9aaec2', line: '#253548', cyan: '#49dcff', red: '#ff3155', panel: '#121e2b' };
  return svg(680, 460, "Moucharaf ADEOCHUN — RAF'STECH", 'Ingénieur logiciel à Cotonou, Bénin. SaaS, web, mobile et e-commerce sur mesure. Composition adaptée aux petits écrans.', `
<rect width="680" height="460" rx="22" fill="${p.bg}"/>
<rect x="1" y="1" width="678" height="458" rx="21" fill="none" stroke="${p.line}"/>
${text(36, 49, "RAF'STECH", p.ink, 25, 'font-weight="700" letter-spacing="3"')}
${text(36, 88, 'INGÉNIEUR LOGICIEL', p.cyan, 16, 'letter-spacing="2"')}
${text(32, 173, 'Moucharaf', p.ink, 68, 'font-weight="700" letter-spacing="-2"')}
${text(31, 245, 'ADEOCHUN', p.ink, 68, 'font-weight="700" letter-spacing="-2"')}
<rect x="36" y="266" width="45" height="4" rx="2" fill="${p.red}"/>
${text(36, 312, 'Du besoin utilisateur au produit.', p.muted, 27)}
${text(36, 357, 'SaaS', p.cyan, 21, 'font-weight="700"')}
<circle cx="111" cy="350" r="3" fill="${p.muted}"/>
${text(129, 357, 'Web & mobile', p.ink, 21)}
<circle cx="289" cy="350" r="3" fill="${p.muted}"/>
${text(307, 357, 'E-commerce', p.ink, 21)}
<path d="M36 386H644" stroke="${p.line}"/>
${text(36, 425, 'COTONOU, BÉNIN', p.muted, 17, 'letter-spacing="2"')}
<g transform="translate(493 89) scale(.65)">
<circle cx="100" cy="90" r="104" fill="none" stroke="${p.line}" stroke-dasharray="3 7"/>
<path d="M0 133L100 80 200 133 100 186Z" fill="${p.panel}" stroke="${p.cyan}" stroke-opacity=".4"/>
<path d="M0 95L100 42 200 95 100 148Z" fill="${p.panel}" stroke="${p.cyan}"/>
<path d="M0 57L100 4 200 57 100 110Z" fill="${p.panel}" stroke="${p.red}"/>
<path d="M81 43L66 56 81 69M119 43L134 56 119 69M107 38L93 74" fill="none" stroke="${p.cyan}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<path d="M623 41H644V62M644 41L620 65" fill="none" stroke="${p.cyan}" stroke-width="2"/>
`);
}

const c = { cyan: '#49dcff', red: '#ff5875', gold: '#f6d879', green: '#8ee6b4' };
function project(name, index, category, color, art, description) {
  return svg(560, 258, name, description, `
<defs><pattern id="dots" width="18" height="18" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="0.8" fill="#263749"/></pattern></defs>
<rect width="560" height="258" rx="14" fill="#0d1520"/>
<rect x="1" y="1" width="558" height="256" rx="13" fill="none" stroke="#263749"/>
<rect x="290" y="1" width="269" height="256" rx="13" fill="url(#dots)"/>
<rect x="26" y="27" width="5" height="12" rx="2" fill="${color}"/>
${text(42, 37, `${index} / ${category}`, color, 11, 'letter-spacing="1.5"')}
${text(25, 83, name, '#f5f8ff', 36, 'font-weight="700" letter-spacing="-1"')}
${art}
<path d="M509 36H530V57M530 36L506 60" fill="none" stroke="${color}" stroke-width="2"/>
`);
}

const arbo = project('ArboJSON', '01', 'DEVELOPER TOOLS', c.cyan, `
<rect x="26" y="109" width="216" height="122" rx="8" fill="#121f2c" stroke="#263749"/>
${text(41, 134, '{', c.cyan, 18)}
${text(54, 158, '"idea": "explore",', '#c6d7e8', 13)}
${text(54, 182, '"structure": [', '#c6d7e8', 13)}
${text(68, 205, '"tree", "graph"]', c.cyan, 13)}
${text(41, 222, '}', c.cyan, 15)}
<g fill="none" stroke="#325269" stroke-width="2"><path d="M386 136V167H314V192M386 167H462V192M314 212V231H286M462 212V231H490"/></g>
<rect x="351" y="114" width="70" height="29" rx="7" fill="#153b4c" stroke="${c.cyan}"/>
<rect x="279" y="184" width="70" height="29" rx="7" fill="#152433" stroke="#56758c"/>
<rect x="427" y="184" width="70" height="29" rx="7" fill="#152433" stroke="#56758c"/>
${text(366, 134, 'JSON', c.cyan, 12, 'font-weight="700"')}
${text(298, 204, 'tree', '#b8cadc', 12)}${text(442, 204, 'graph', '#b8cadc', 12)}
<circle cx="286" cy="231" r="5" fill="${c.cyan}"/><circle cx="490" cy="231" r="5" fill="${c.cyan}"/>
`, 'Illustration originale : un éditeur JSON connecté à un arbre de données.');

const raflane = project('Raflane', '02', 'PRODUCTIVITY', c.red, `
${[26, 198, 370].map((x, i) => `<rect x="${x}" y="110" width="158" height="122" rx="8" fill="#121f2c" stroke="#263749"/>
<circle cx="${x + 14}" cy="127" r="3" fill="${['#6c8aa0', c.red, c.green][i]}"/>
${text(x + 25, 131, ['À FAIRE', 'EN COURS', 'TERMINÉ'][i], '#b8cadc', 9, 'letter-spacing="1"')}
<rect x="${x + 10}" y="143" width="138" height="32" rx="5" fill="${i === 1 ? '#3a2534' : '#1b2b3b'}" stroke="${i === 1 ? c.red : '#2b4053'}"/>
<path d="M${x + 23} 155H${x + 111}M${x + 23} 164H${x + 77}" stroke="#657e95" stroke-width="3" stroke-linecap="round"/>
${i !== 1 ? `<rect x="${x + 10}" y="184" width="138" height="32" rx="5" fill="#1b2b3b"/><path d="M${x + 23} 196H${x + 98}M${x + 23} 205H${x + 68}" stroke="#516b83" stroke-width="3" stroke-linecap="round"/>` : ''}`).join('')}
<path d="M322 185L327 209 333 202 342 203Z" fill="${c.red}" stroke="#0d1520" stroke-width="2"/>
`, 'Illustration originale : un tableau de tâches à trois colonnes et une carte en déplacement.');

const playgrid = project('Playgrid', '03', 'PLAY / OFFLINE', c.gold, `
<g transform="translate(28 111)">${[[0, 0, '2', '#263343'], [56, 0, '4', '#3b3940'], [0, 56, '8', '#a87442'], [56, 56, '16', '#f6d879']].map(([x, y, n, bg]) => `<rect x="${x}" y="${y}" width="49" height="49" rx="7" fill="${bg}"/>${text(x + 24.5, y + 33, n, n === '16' ? '#302817' : '#ffffff', 23, 'font-weight="700" text-anchor="middle"')}`).join('')}</g>
<g fill="#172535" stroke="#365068">${[[179,111],[235,111],[179,167],[235,167]].map(([x,y],i)=>`<rect x="${x}" y="${y}" width="49" height="49" rx="7"/>${i === 0 || i === 3 ? `<path d="M${x+15} ${y+25}L${x+24} ${y+14} ${x+34} ${y+25} ${x+24} ${y+36}Z" fill="#49dcff" stroke="none"/>` : `<circle cx="${x+24}" cy="${y+25}" r="10" fill="#ff5875" stroke="none"/>`}`).join('')}</g>
<g transform="translate(365 123)" fill="none" stroke="${c.gold}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M24 10H100C111 10 116 19 120 34L130 69C135 86 123 96 111 85L91 66H33L13 85C1 96-11 86-6 69L4 34C8 19 13 10 24 10Z" fill="#29291f"/><path d="M19 36V56M9 46H29"/><circle cx="98" cy="39" r="3" fill="${c.gold}"/><circle cx="108" cy="51" r="3" fill="${c.gold}"/></g>
`, 'Illustration originale : tuiles de 2048, cartes de memory et manette de jeu.');

const covatlas = project('CovAtlas', '04', 'DATA EXPLORATION', c.green, `
<rect x="26" y="110" width="242" height="122" rx="8" fill="#121f2c" stroke="#263749"/>
<g fill="none" stroke="#294252"><path d="M26 150H268M26 191H268M86 110V232M147 110V232M208 110V232"/></g>
<path d="M62 136L85 123 110 127 120 145 108 162 117 181 102 204 86 188 80 166 59 153ZM159 143L177 126 201 130 219 151 231 155 223 176 208 178 195 198 173 190 175 167 159 159Z" fill="#255347" stroke="#65b995" stroke-width="1.5"/>
<circle cx="105" cy="153" r="5" fill="${c.green}"/><circle cx="190" cy="156" r="5" fill="${c.green}"/><circle cx="190" cy="156" r="12" fill="none" stroke="${c.green}" stroke-opacity="0.4"/>
<rect x="293" y="110" width="239" height="122" rx="8" fill="#121f2c" stroke="#263749"/>
${text(309, 132, 'EXPLORER PAR PAYS', '#9aaec2', 10, 'letter-spacing="1"')}
<path d="M310 208H515M310 148V208" fill="none" stroke="#34495e"/>
<path d="M310 197L341 186 371 191 402 166 432 174 463 149 492 158 515 143" fill="none" stroke="${c.green}" stroke-width="2.5" stroke-linejoin="round"/>
`, 'Illustration originale : carte stylisée et graphique d’exploration de données, sans valeurs réelles.');

for (const [name, content] of Object.entries({ 'hero-dark.svg': hero(), 'hero-light.svg': hero(true), 'hero-mobile-dark.svg': heroMobile(), 'hero-mobile-light.svg': heroMobile(true), 'arbojson.svg': arbo, 'raflane.svg': raflane, 'playgrid.svg': playgrid, 'covatlas.svg': covatlas })) {
  await writeFile(new URL(name, output), content, 'utf8');
  console.log(`Generated assets/${name}`);
}

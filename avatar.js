/* ===== ASSET PATHS ===== */
const A = {
  corps: {
    homme: {
      lean: {
        clair1: 'assets/LAYER 0A — CORPS DE BASE HOMME/Morphologie LEAN (runner, sec, endurant)/homme_lean_clair1.png',
        clair2: 'assets/LAYER 0A — CORPS DE BASE HOMME/Morphologie LEAN (runner, sec, endurant)/homme_lean_clair2.png',
        medium: 'assets/LAYER 0A — CORPS DE BASE HOMME/Morphologie LEAN (runner, sec, endurant)/homme_lean_medium.png',
        mat:    'assets/LAYER 0A — CORPS DE BASE HOMME/Morphologie LEAN (runner, sec, endurant)/homme_lean_mat.png',
        fonce:  'assets/LAYER 0A — CORPS DE BASE HOMME/Morphologie LEAN (runner, sec, endurant)/homme_lean_fonce.png',
        ebene:  'assets/LAYER 0A — CORPS DE BASE HOMME/Morphologie LEAN (runner, sec, endurant)/homme_lean_ebene.png',
      },
      athletic: {
        clair1: 'assets/LAYER 0A — CORPS DE BASE HOMME/Morphologie ATHLETIC (musclé équilibré — profil Hyrox idéal)/homme_athletic_clair1.png',
        clair2: 'assets/LAYER 0A — CORPS DE BASE HOMME/Morphologie ATHLETIC (musclé équilibré — profil Hyrox idéal)/homme_athletic_clair2.png',
        medium: 'assets/LAYER 0A — CORPS DE BASE HOMME/Morphologie ATHLETIC (musclé équilibré — profil Hyrox idéal)/homme_athletic_medium.png',
        mat:    'assets/LAYER 0A — CORPS DE BASE HOMME/Morphologie ATHLETIC (musclé équilibré — profil Hyrox idéal)/homme_athletic_mat.png',
        fonce:  'assets/LAYER 0A — CORPS DE BASE HOMME/Morphologie ATHLETIC (musclé équilibré — profil Hyrox idéal)/homme_athletic_fonce.png',
        ebene:  'assets/LAYER 0A — CORPS DE BASE HOMME/Morphologie ATHLETIC (musclé équilibré — profil Hyrox idéal)/homme_athletic_ebene.png',
      },
      power: {
        clair1: 'assets/LAYER 0A — CORPS DE BASE HOMME/Morphologie POWER (puissant, massif)/homme_power_clair1.png',
        clair2: 'assets/LAYER 0A — CORPS DE BASE HOMME/Morphologie POWER (puissant, massif)/homme_power_clair2.png',
        medium: 'assets/LAYER 0A — CORPS DE BASE HOMME/Morphologie POWER (puissant, massif)/homme_power_medium.png',
        mat:    'assets/LAYER 0A — CORPS DE BASE HOMME/Morphologie POWER (puissant, massif)/homme_power_mat.png',
        fonce:  'assets/LAYER 0A — CORPS DE BASE HOMME/Morphologie POWER (puissant, massif)/homme_power_fonce.png',
        ebene:  'assets/LAYER 0A — CORPS DE BASE HOMME/Morphologie POWER (puissant, massif)/homme_power_ebene.png',
      },
    },
    femme: {
      lean: {
        clair1: 'assets/LAYER 0B — CORPS DE BASE FEMME/Morphologie LEAN/femme_lean_clair1.png',
        clair2: 'assets/LAYER 0B — CORPS DE BASE FEMME/Morphologie LEAN/femme_lean_clair2.png',
        medium: 'assets/LAYER 0B — CORPS DE BASE FEMME/Morphologie LEAN/femme_lean_medium.png',
        mat:    'assets/LAYER 0B — CORPS DE BASE FEMME/Morphologie LEAN/femme_lean_mat.png',
        fonce:  'assets/LAYER 0B — CORPS DE BASE FEMME/Morphologie LEAN/femme_lean_fonce.png',
        ebene:  'assets/LAYER 0B — CORPS DE BASE FEMME/Morphologie LEAN/femme_lean_ebene.png',
      },
      athletic: {
        clair1: 'assets/LAYER 0B — CORPS DE BASE FEMME/Morphologie ATHLETIC/femme_athletic_clair1.png',
        clair2: 'assets/LAYER 0B — CORPS DE BASE FEMME/Morphologie ATHLETIC/femme_athletic_clair2.png',
        medium: 'assets/LAYER 0B — CORPS DE BASE FEMME/Morphologie ATHLETIC/femme_athletic_medium.png',
        mat:    'assets/LAYER 0B — CORPS DE BASE FEMME/Morphologie ATHLETIC/femme_athletic_mat.png',
        fonce:  'assets/LAYER 0B — CORPS DE BASE FEMME/Morphologie ATHLETIC/femme_athletic_fonce.png',
        ebene:  'assets/LAYER 0B — CORPS DE BASE FEMME/Morphologie ATHLETIC/femme_athletic_ebene.png',
      },
    },
  },
  yeux: {
    homme: {
      marron:   'assets/LAYERS YEUX/Homme/yeux_marron.png',
      noisette: 'assets/LAYERS YEUX/Homme/yeux_noisette.png',
      verts:    'assets/LAYERS YEUX/Homme/yeux_verts.png',
      bleus:    'assets/LAYERS YEUX/Homme/yeux_bleus.png',
    },
    femme: {
      marron:   'assets/LAYERS YEUX/Femme/f_yeux_marron.png',
      noisette: 'assets/LAYERS YEUX/Femme/f_yeux_noisette.png',
      verts:    'assets/LAYERS YEUX/Femme/f_yeux_verts.png',
      bleus:    'assets/LAYERS YEUX/Femme/f_yeux_bleus.png',
    },
  },
  cheveux_h: {
    rase:    c => `assets/LAYERS CHEVEUX HOMME/Style RASÉ/h_cheveux_rase_${c}.png`,
    courts:  c => `assets/LAYERS CHEVEUX HOMME/Style COURTS/h_cheveux_courts_${c}.png`,
    degrade: c => `assets/LAYERS CHEVEUX HOMME/Style DÉGRADÉ/h_cheveux_degrade_${c}.png`,
    milongs: c => `assets/LAYERS CHEVEUX HOMME/Style MI-LONGS/h_cheveux_milongs_${c}.png`,
    dreads:  c => `assets/LAYERS CHEVEUX HOMME/Style DREADLOCKS/h_cheveux_dreads_${c}.png`,
    afro:    c => `assets/LAYERS CHEVEUX HOMME/Style AFRO COURT/h_cheveux_afro_${c}.png`,
  },
  cheveux_f: {
    rase:     (c) => {
      const avail = ['chatain', 'gris', 'noir', 'roux'];
      const safe = avail.includes(c) ? c : 'noir';
      return `assets/LAYERS CHEVEUX FEMME/Style RASÉE/f_cheveux_rase_${safe}.png`;
    },
    pixie:    c => `assets/LAYERS CHEVEUX FEMME/Style PIXIE/f_cheveux_pixie_${c}.png`,
    bob:      c => `assets/LAYERS CHEVEUX FEMME/Style BOB/f_cheveux_bob_${c}.png`,
    ponytail: (c) => {
      const avail = ['blond', 'brun', 'chatain', 'gris', 'noir'];
      const safe = avail.includes(c) ? c : 'noir';
      return `assets/LAYERS CHEVEUX FEMME/Style PONYTAIL/f_cheveux_ponytail_${safe}.png`;
    },
    longs:    c => `assets/LAYERS CHEVEUX FEMME/Style LONGS LISSES/f_cheveux_longs_${c}.png`,
    afro:     c => `assets/LAYERS CHEVEUX FEMME/Style AFRO/h_cheveux_afro_${c}.png`,
    tresses:  c => `assets/LAYERS CHEVEUX FEMME/Style TRESSES/f_cheveux_tresses_${c}.png`,
    chignon:  c => `assets/LAYERS CHEVEUX FEMME/Style CHIGNON/f_cheveux_chignon_${c}.png`,
  },
  barbe: {
    rase:             'assets/LAYERS BARBE HOMME/h_barbe_rase.png',
    courte:           'assets/LAYERS BARBE HOMME/h_barbe_courte.png',
    complete_courte:  'assets/LAYERS BARBE HOMME/h_barbe_complete_courte.png',
    complete_longue:  'assets/LAYERS BARBE HOMME/h_barbe_complete_longue.png',
    moustache:        'assets/LAYERS BARBE HOMME/h_barbe_moustache.png',
    bouc1:            'assets/LAYERS BARBE HOMME/h_barbe_bouc1.png',
    bouc2:            'assets/LAYERS BARBE HOMME/h_barbe_bouc2.png',
  },
  tenue_haut_h: {
    full_black: 'assets/LAYER 1 — TENUES HAUT HOMME/tenue_haut_full_black.png',
    blanc_noir: 'assets/LAYER 1 — TENUES HAUT HOMME/tenue_haut_blanc_noir.png',
    gris_rouge: 'assets/LAYER 1 — TENUES HAUT HOMME/tenue_haut_gris_rouge.png',
    navy_blanc: 'assets/LAYER 1 — TENUES HAUT HOMME/tenue_haut_navy_blanc.png',
    noir_jaune: 'assets/LAYER 1 — TENUES HAUT HOMME/tenue_haut_noir_jaune.png',
  },
  tenue_bas_h: {
    noir:  'assets/LAYER 2 — TENUES BAS HOMME/tenue_bas_noir.png',
    blanc: 'assets/LAYER 2 — TENUES BAS HOMME/tenue_bas_blanc.png',
    gris:  'assets/LAYER 2 — TENUES BAS HOMME/tenue_bas_gris.png',
    navy:  'assets/LAYER 2 — TENUES BAS HOMME/tenue_bas_navy.png',
    rouge: 'assets/LAYER 2 — TENUES BAS HOMME/tenue_bas_rouge.png',
  },
  tenue_haut_f: {
    full_black: 'assets/TENUES HAUT FEMME/tenue_f_haut_full_black.png',
    blanc_noir: 'assets/TENUES HAUT FEMME/tenue_f_haut_blanc_noir.png',
    gris_rouge: 'assets/TENUES HAUT FEMME/tenue_f_haut_gris_rouge.png',
    navy_blanc: 'assets/TENUES HAUT FEMME/tenue_f_haut_navy_blanc.png',
    noir_jaune: 'assets/TENUES HAUT FEMME/tenue_f_haut_noir_jaune.png',
  },
  tenue_bas_f: {
    noir:  'assets/TENUES BAS FEMME/tenue_f_bas_noir.png',
    blanc: 'assets/TENUES BAS FEMME/tenue_f_bas_blanc.png',
    gris:  'assets/TENUES BAS FEMME/tenue_f_bas_gris.png',
    navy:  'assets/TENUES BAS FEMME/tenue_f_bas_navy.png',
  },
  shoes_h: {
    nike_metcon:       'assets/LAYER 4 — CHAUSSURES HOMME/shoes_h_nike_metcon.png',
    adidas_ultraboost: 'assets/LAYER 4 — CHAUSSURES HOMME/shoes_h_adidas_ultraboost.png',
    nobull:            'assets/LAYER 4 — CHAUSSURES HOMME/shoes_h_nobull.png',
    on_running:        'assets/LAYER 4 — CHAUSSURES HOMME/shoes_h_on_running.png',
  },
  shoes_f: {
    nike_metcon:       'assets/CHAUSSURES FEMME/shoes_f_nike_metcon.png',
    adidas_ultraboost: 'assets/CHAUSSURES FEMME/shoes_f_adidas_ultraboost.png',
    nobull:            'assets/CHAUSSURES FEMME/shoes_f_nobull.png',
    on_running:        'assets/CHAUSSURES FEMME/shoes_f_on_running.png',
  },
  acc_tete: {
    casquette: 'assets/LAYER 5 — ACCESSOIRES TÊTE/acc_tete_casquette.png',
    bandeau:   'assets/LAYER 5 — ACCESSOIRES TÊTE/acc_tete_bandeau.png',
    lunettes:  'assets/LAYER 5 — ACCESSOIRES TÊTE/acc_tete_lunettes.png',
  },
  acc_corps: {
    montre:        'assets/LAYER 6 — ACCESSOIRES CORPS/acc_corps_montre.png',
    genouilleres:  'assets/LAYER 6 — ACCESSOIRES CORPS/acc_corps_genouilleres.png',
    gants:         'assets/LAYER 6 — ACCESSOIRES CORPS/acc_corps_gants.png',
  },
  dossard: 'assets/LAYER 3 — DOSSARD HYROX/dossard_hyrox.png',
};

/* ===== MORPHOLOGY SCALE ===== */
const MORPHO_SCALE = {
  lean:     { sx: 0.88, sy: 1.0,  tx: 0.06, ty: 0 },
  athletic: { sx: 1.0,  sy: 1.0,  tx: 0,    ty: 0 },
  power:    { sx: 1.15, sy: 1.05, tx: -0.075, ty: 0 },
};

/* ===== PROGRAMME DATA ===== */
const PROGRAMMES = {
  lean:     { nom: 'Programme Endurance', badge: 'RUNNER', vibe: "T'es fait pour voler. On va te faire voler encore plus vite.", seances: '4x/semaine', duree: '12 semaines' },
  athletic: { nom: 'Programme Complet',   badge: 'ALL-IN',  vibe: "Le bon mix. C'est exactement ça, Hyrox.", seances: '4x/semaine', duree: '10 semaines' },
  power:    { nom: 'Programme Force',     badge: 'BEAST',   vibe: "T'as la base. On va tout canaliser.", seances: '3x/semaine', duree: '12 semaines' },
};

/* ===== STATE ===== */
let state = {
  prenom: '',
  programme: 'athletic',
  genre: 'homme',
  morpho: 'athletic',
  carnation: 'clair1',
  yeux: 'marron',
  cheveux_style: 'courts',
  cheveux_couleur: 'noir',
  barbe: 'rase',
  tenue_haut: 'full_black',
  tenue_bas: 'noir',
  shoes: 'nike_metcon',
  acc_tete: new Set(),
  acc_corps: new Set(),
};

/* ===== CANVAS SETUP ===== */
const CANVAS_W = 768;
const CANVAS_H = 1024;
let canvas, ctx, imageCache = {}, totalImages = 0, loadedImages = 0;

function getAllPaths() {
  const paths = new Set();
  const carnations = ['clair1', 'clair2', 'medium', 'mat', 'fonce', 'ebene'];
  const couleurs = ['noir', 'brun', 'chatain', 'blond', 'roux', 'gris'];

  carnations.forEach(c => {
    ['lean', 'athletic', 'power'].forEach(m => paths.add(A.corps.homme[m][c]));
    ['lean', 'athletic'].forEach(m => paths.add(A.corps.femme[m][c]));
  });

  ['homme', 'femme'].forEach(g => {
    Object.values(A.yeux[g]).forEach(p => paths.add(p));
  });

  couleurs.forEach(c => {
    Object.values(A.cheveux_h).forEach(fn => paths.add(fn(c)));
    Object.values(A.cheveux_f).forEach(fn => paths.add(fn(c)));
  });

  Object.values(A.barbe).forEach(p => paths.add(p));
  Object.values(A.tenue_haut_h).forEach(p => paths.add(p));
  Object.values(A.tenue_bas_h).forEach(p => paths.add(p));
  Object.values(A.tenue_haut_f).forEach(p => paths.add(p));
  Object.values(A.tenue_bas_f).forEach(p => paths.add(p));
  Object.values(A.shoes_h).forEach(p => paths.add(p));
  Object.values(A.shoes_f).forEach(p => paths.add(p));
  Object.values(A.acc_tete).forEach(p => paths.add(p));
  Object.values(A.acc_corps).forEach(p => paths.add(p));
  paths.add(A.dossard);

  return Array.from(paths);
}

async function preloadImages(onProgress) {
  const paths = getAllPaths();
  totalImages = paths.length;
  loadedImages = 0;

  await Promise.all(paths.map(path => new Promise(resolve => {
    if (imageCache[path]) { loadedImages++; onProgress?.(loadedImages / totalImages); resolve(); return; }
    const img = new Image();
    img.onload = () => { imageCache[path] = img; loadedImages++; onProgress?.(loadedImages / totalImages); resolve(); };
    img.onerror = () => { loadedImages++; onProgress?.(loadedImages / totalImages); resolve(); };
    img.src = path;
  })));
}

function drawLayer(src, morphScale) {
  const img = imageCache[src];
  if (!img || !img.complete || img.naturalWidth === 0) return;
  ctx.save();
  if (morphScale) {
    const { sx, sy, tx, ty } = morphScale;
    ctx.transform(sx, 0, 0, sy, tx * CANVAS_W, ty * CANVAS_H);
  }
  ctx.drawImage(img, 0, 0, CANVAS_W, CANVAS_H);
  ctx.restore();
}

function drawDossard() {
  const img = imageCache[A.dossard];
  if (!img || !img.complete) return;
  ctx.drawImage(img, 0, 0, CANVAS_W, CANVAS_H);

  ctx.save();
  ctx.font = `bold 34px Syne, 'Arial Black', sans-serif`;
  ctx.fillStyle = '#FFE000';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(state.prenom.toUpperCase().slice(0, 12), CANVAS_W * 0.5, CANVAS_H * 0.555);
  ctx.restore();
}

function renderAvatar() {
  if (!ctx) return;
  ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);

  const genre = state.genre;
  const morpho = state.morpho;
  const carn = state.carnation;

  // 1. Corps
  const corpsData = A.corps[genre];
  const morphoKey = (genre === 'femme' && morpho === 'power') ? 'athletic' : morpho;
  const corpsPath = corpsData?.[morphoKey]?.[carn];
  if (corpsPath) drawLayer(corpsPath);

  // 2. Yeux
  const yeuxPath = A.yeux[genre]?.[state.yeux];
  if (yeuxPath) drawLayer(yeuxPath);

  // 3. Cheveux
  const chevData = genre === 'homme' ? A.cheveux_h : A.cheveux_f;
  const chevFn = chevData[state.cheveux_style];
  if (chevFn) drawLayer(chevFn(state.cheveux_couleur));

  // 4. Barbe (homme uniquement)
  if (genre === 'homme' && state.barbe !== 'rase') {
    const barbePath = A.barbe[state.barbe];
    if (barbePath) drawLayer(barbePath);
  }

  // 5. Tenue bas
  const ms = MORPHO_SCALE[morpho];
  const basData = genre === 'homme' ? A.tenue_bas_h : A.tenue_bas_f;
  const basKey = (genre === 'femme' && state.tenue_bas === 'rouge') ? 'noir' : state.tenue_bas;
  const basPath = basData[basKey];
  if (basPath) drawLayer(basPath, ms);

  // 6. Tenue haut
  const hautData = genre === 'homme' ? A.tenue_haut_h : A.tenue_haut_f;
  const hautPath = hautData[state.tenue_haut];
  if (hautPath) drawLayer(hautPath, ms);

  // 7. Chaussures
  const shoesData = genre === 'homme' ? A.shoes_h : A.shoes_f;
  const shoesPath = shoesData[state.shoes];
  if (shoesPath) drawLayer(shoesPath, ms);

  // 8. Accessoires corps
  state.acc_corps.forEach(key => {
    const p = A.acc_corps[key];
    if (p) drawLayer(p);
  });

  // 9. Accessoires tête
  state.acc_tete.forEach(key => {
    const p = A.acc_tete[key];
    if (p) drawLayer(p);
  });

  // 10. Dossard (toujours en dernier)
  drawDossard();
}

/* ===== UI BUILDERS ===== */
function buildUI() {
  buildGenreTab();
  buildMorphoTab();
  buildPeauTab();
  buildVisageTab();
  buildCoiffureTab();
  buildTenueTab();
  buildShoesTab();
  buildAccessTab();
  updateProgrammeCard();
}

function selectOption(container, selector, key) {
  container.querySelectorAll(selector).forEach(el => {
    el.classList.toggle('selected', el.dataset.key === key);
  });
}

function buildGenreTab() {
  const panel = document.getElementById('tab-genre');
  if (!panel) return;
  panel.innerHTML = `
    <div class="option-grid">
      <div class="option-card genre-card ${state.genre === 'homme' ? 'selected' : ''}" data-key="homme">
        <div class="genre-icon">♂</div>
        <div class="option-card-title">Homme</div>
      </div>
      <div class="option-card genre-card ${state.genre === 'femme' ? 'selected' : ''}" data-key="femme">
        <div class="genre-icon">♀</div>
        <div class="option-card-title">Femme</div>
      </div>
    </div>`;
  panel.querySelectorAll('.option-card').forEach(el => {
    el.addEventListener('click', () => {
      state.genre = el.dataset.key;
      if (state.genre === 'femme') {
        state.cheveux_style = 'longs';
        if (state.tenue_bas === 'rouge') state.tenue_bas = 'noir';
        document.querySelectorAll('.barbe-section').forEach(s => s.style.display = 'none');
      } else {
        state.cheveux_style = 'courts';
        document.querySelectorAll('.barbe-section').forEach(s => s.style.display = '');
      }
      buildUI();
      renderAvatar();
    });
  });
}

function buildMorphoTab() {
  const panel = document.getElementById('tab-morpho');
  if (!panel) return;
  const morphos = [
    { key: 'lean',     label: 'LEAN',     sub: 'Runner. Léger. Rapide.' },
    { key: 'athletic', label: 'ATHLETIC', sub: 'Équilibré. Complet. Hyrox.' },
    { key: 'power',    label: 'POWER',    sub: 'Puissant. Massif. Dominant.' },
  ];
  panel.innerHTML = `<div class="option-grid">${morphos.map(m => `
    <div class="option-card ${state.morpho === m.key ? 'selected' : ''}" data-key="${m.key}">
      ${state.programme === m.key ? '<div class="morpho-badge">Recommandé</div>' : ''}
      <div class="option-card-title">${m.label}</div>
      <div class="option-card-sub">${m.sub}</div>
    </div>`).join('')}</div>`;
  panel.querySelectorAll('.option-card').forEach(el => {
    el.addEventListener('click', () => {
      state.morpho = el.dataset.key;
      selectOption(panel, '.option-card', state.morpho);
      updateProgrammeCard();
      renderAvatar();
    });
  });
}

function buildPeauTab() {
  const panel = document.getElementById('tab-peau');
  if (!panel) return;
  const skins = [
    { key: 'clair1', color: '#F5D5B8', label: 'Très clair' },
    { key: 'clair2', color: '#E8B88A', label: 'Clair' },
    { key: 'medium', color: '#C68642', label: 'Médium' },
    { key: 'mat',    color: '#8D5524', label: 'Mat' },
    { key: 'fonce',  color: '#5C3317', label: 'Foncé' },
    { key: 'ebene',  color: '#2C1A10', label: 'Ébène' },
  ];
  panel.innerHTML = `<p class="tab-label">Carnation</p><div class="skin-options">
    ${skins.map(s => `<button class="skin-swatch ${state.carnation === s.key ? 'selected' : ''}" data-key="${s.key}" title="${s.label}" style="background:${s.color}" aria-label="${s.label}"></button>`).join('')}
  </div>`;
  panel.querySelectorAll('.skin-swatch').forEach(el => {
    el.addEventListener('click', () => {
      state.carnation = el.dataset.key;
      selectOption(panel, '.skin-swatch', state.carnation);
      renderAvatar();
    });
  });
}

function buildVisageTab() {
  const panel = document.getElementById('tab-visage');
  if (!panel) return;
  const eyes = [
    { key: 'marron',   color: '#4A2912', label: 'Marron' },
    { key: 'noisette', color: '#8B6914', label: 'Noisette' },
    { key: 'verts',    color: '#3A6B35', label: 'Verts' },
    { key: 'bleus',    color: '#2E6B9E', label: 'Bleus' },
  ];
  const barbes = [
    { key: 'rase',            label: 'Rasé' },
    { key: 'courte',          label: 'Courte' },
    { key: 'complete_courte', label: 'Complète courte' },
    { key: 'complete_longue', label: 'Complète longue' },
    { key: 'moustache',       label: 'Moustache' },
    { key: 'bouc1',           label: 'Bouc 1' },
    { key: 'bouc2',           label: 'Bouc 2' },
  ];
  panel.innerHTML = `
    <p class="tab-label">Yeux</p>
    <div class="eye-options">
      ${eyes.map(e => `<button class="eye-swatch ${state.yeux === e.key ? 'selected' : ''}" data-key="${e.key}" title="${e.label}" style="background:${e.color}" aria-label="${e.label}"></button>`).join('')}
    </div>
    <div class="barbe-section" style="display:${state.genre === 'femme' ? 'none' : ''}">
      <p class="tab-label">Barbe</p>
      <div class="option-grid option-grid-3">${barbes.map(b => `
        <div class="option-card ${state.barbe === b.key ? 'selected' : ''}" data-key="${b.key}" data-type="barbe">
          <div class="option-card-title" style="font-size:0.75rem">${b.label}</div>
        </div>`).join('')}
      </div>
    </div>`;
  panel.querySelectorAll('.eye-swatch').forEach(el => {
    el.addEventListener('click', () => { state.yeux = el.dataset.key; selectOption(panel, '.eye-swatch', state.yeux); renderAvatar(); });
  });
  panel.querySelectorAll('[data-type="barbe"]').forEach(el => {
    el.addEventListener('click', () => { state.barbe = el.dataset.key; selectOption(panel, '[data-type="barbe"]', state.barbe); renderAvatar(); });
  });
}

function buildCoiffureTab() {
  const panel = document.getElementById('tab-coiffure');
  if (!panel) return;
  const stylesH = [
    { key: 'rase',    label: 'Rasé' },
    { key: 'courts',  label: 'Courts' },
    { key: 'degrade', label: 'Dégradé' },
    { key: 'milongs', label: 'Mi-longs' },
    { key: 'dreads',  label: 'Dreads' },
    { key: 'afro',    label: 'Afro' },
  ];
  const stylesF = [
    { key: 'rase',     label: 'Rasée' },
    { key: 'pixie',    label: 'Pixie' },
    { key: 'bob',      label: 'Bob' },
    { key: 'ponytail', label: 'Ponytail' },
    { key: 'longs',    label: 'Longs' },
    { key: 'afro',     label: 'Afro' },
    { key: 'tresses',  label: 'Tresses' },
    { key: 'chignon',  label: 'Chignon' },
  ];
  const couleurs = [
    { key: 'noir',    color: '#1A1A1A', label: 'Noir' },
    { key: 'brun',    color: '#3B1F0C', label: 'Brun' },
    { key: 'chatain', color: '#6B3A2A', label: 'Châtain' },
    { key: 'blond',   color: '#C9A84C', label: 'Blond' },
    { key: 'roux',    color: '#8B3A0F', label: 'Roux' },
    { key: 'gris',    color: '#888888', label: 'Gris' },
  ];
  const styles = state.genre === 'homme' ? stylesH : stylesF;
  if (!styles.find(s => s.key === state.cheveux_style)) state.cheveux_style = styles[0].key;

  panel.innerHTML = `
    <p class="tab-label">Style</p>
    <div class="option-grid option-grid-3">${styles.map(s => `
      <div class="option-card ${state.cheveux_style === s.key ? 'selected' : ''}" data-key="${s.key}" data-type="style">
        <div class="option-card-title" style="font-size:0.75rem">${s.label}</div>
      </div>`).join('')}
    </div>
    <p class="tab-label" style="margin-top:1.5rem">Couleur</p>
    <div class="color-row">
      ${couleurs.map(c => `<button class="color-dot ${state.cheveux_couleur === c.key ? 'selected' : ''}" data-key="${c.key}" title="${c.label}" style="background:${c.color}" aria-label="${c.label}"></button>`).join('')}
    </div>`;
  panel.querySelectorAll('[data-type="style"]').forEach(el => {
    el.addEventListener('click', () => { state.cheveux_style = el.dataset.key; selectOption(panel, '[data-type="style"]', state.cheveux_style); renderAvatar(); });
  });
  panel.querySelectorAll('.color-dot').forEach(el => {
    el.addEventListener('click', () => { state.cheveux_couleur = el.dataset.key; selectOption(panel, '.color-dot', state.cheveux_couleur); renderAvatar(); });
  });
}

function buildTenueTab() {
  const panel = document.getElementById('tab-tenue');
  if (!panel) return;
  const hauts = [
    { key: 'full_black', label: 'Full Black',   c1: '#0A0A0A', c2: '#0A0A0A' },
    { key: 'blanc_noir', label: 'Blanc / Noir',  c1: '#F0F0F0', c2: '#0A0A0A' },
    { key: 'gris_rouge', label: 'Gris / Rouge',  c1: '#888888', c2: '#C0392B' },
    { key: 'navy_blanc', label: 'Navy / Blanc',  c1: '#1B2A4A', c2: '#F0F0F0' },
    { key: 'noir_jaune', label: 'Noir / Jaune',  c1: '#0A0A0A', c2: '#FFE000' },
  ];
  const basH = [
    { key: 'noir',  label: 'Noir',  c: '#0A0A0A' },
    { key: 'blanc', label: 'Blanc', c: '#F0F0F0' },
    { key: 'gris',  label: 'Gris',  c: '#888888' },
    { key: 'navy',  label: 'Navy',  c: '#1B2A4A' },
    { key: 'rouge', label: 'Rouge', c: '#C0392B' },
  ];
  const basF = basH.filter(b => b.key !== 'rouge');
  const bas = state.genre === 'femme' ? basF : basH;

  panel.innerHTML = `
    <p class="tab-label">Haut</p>
    ${hauts.map(h => `
      <div class="tenue-option ${state.tenue_haut === h.key ? 'selected' : ''}" data-key="${h.key}" data-type="haut">
        <div class="tenue-color-preview">
          <span style="background:${h.c1}"></span>
          <span style="background:${h.c2}"></span>
        </div>
        ${h.label}
      </div>`).join('')}
    <p class="tab-label" style="margin-top:1.5rem">Bas</p>
    ${bas.map(b => `
      <div class="tenue-option ${state.tenue_bas === b.key ? 'selected' : ''}" data-key="${b.key}" data-type="bas">
        <div class="tenue-color-preview">
          <span style="background:${b.c}; width:32px"></span>
        </div>
        ${b.label}
      </div>`).join('')}`;
  panel.querySelectorAll('[data-type="haut"]').forEach(el => {
    el.addEventListener('click', () => { state.tenue_haut = el.dataset.key; selectOption(panel, '[data-type="haut"]', state.tenue_haut); renderAvatar(); });
  });
  panel.querySelectorAll('[data-type="bas"]').forEach(el => {
    el.addEventListener('click', () => { state.tenue_bas = el.dataset.key; selectOption(panel, '[data-type="bas"]', state.tenue_bas); renderAvatar(); });
  });
}

function buildShoesTab() {
  const panel = document.getElementById('tab-shoes');
  if (!panel) return;
  const shoes = [
    { key: 'nike_metcon',       label: 'Nike Metcon' },
    { key: 'adidas_ultraboost', label: 'Adidas Ultraboost' },
    { key: 'nobull',            label: 'NOBULL' },
    { key: 'on_running',        label: 'On Running' },
  ];
  panel.innerHTML = `<div class="option-grid">${shoes.map(s => `
    <div class="option-card ${state.shoes === s.key ? 'selected' : ''}" data-key="${s.key}">
      <div class="option-card-title" style="font-size:0.8rem">${s.label}</div>
    </div>`).join('')}</div>`;
  panel.querySelectorAll('.option-card').forEach(el => {
    el.addEventListener('click', () => { state.shoes = el.dataset.key; selectOption(panel, '.option-card', state.shoes); renderAvatar(); });
  });
}

function buildAccessTab() {
  const panel = document.getElementById('tab-access');
  if (!panel) return;
  const tete = [
    { key: 'casquette', label: 'Casquette' },
    { key: 'bandeau',   label: 'Bandeau' },
    { key: 'lunettes',  label: 'Lunettes' },
  ];
  const corps = [
    { key: 'montre',       label: 'Montre' },
    { key: 'genouilleres', label: 'Genouillères' },
    { key: 'gants',        label: 'Gants' },
  ];

  function buildToggles(items, setRef, typeKey) {
    return items.map(item => `
      <div class="acc-toggle" data-key="${item.key}" data-set="${typeKey}">
        <span>${item.label}</span>
        <div class="toggle-switch ${setRef.has(item.key) ? 'on' : ''}" aria-label="${item.label}"></div>
      </div>`).join('');
  }

  panel.innerHTML = `
    <p class="tab-label">Tête</p>
    ${buildToggles(tete, state.acc_tete, 'tete')}
    <p class="tab-label" style="margin-top:1.5rem">Corps</p>
    ${buildToggles(corps, state.acc_corps, 'corps')}`;

  panel.querySelectorAll('.acc-toggle').forEach(el => {
    el.addEventListener('click', () => {
      const key = el.dataset.key;
      const setRef = el.dataset.set === 'tete' ? state.acc_tete : state.acc_corps;
      if (setRef.has(key)) setRef.delete(key); else setRef.add(key);
      const toggle = el.querySelector('.toggle-switch');
      toggle?.classList.toggle('on', setRef.has(key));
      renderAvatar();
    });
  });
}

function updateProgrammeCard() {
  const prog = PROGRAMMES[state.morpho] || PROGRAMMES.athletic;
  const card = document.getElementById('avatar-programme-panel');
  if (!card) return;
  card.innerHTML = `
    <div class="programme-rec-badge">${prog.badge}</div>
    <div class="programme-rec-title">${prog.nom} — ${prog.seances} · ${prog.duree}</div>
    <div class="programme-rec-vibe">"${prog.vibe}"</div>`;
}

/* ===== TABS NAVIGATION ===== */
function initTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('tab-' + target)?.classList.add('active');
    });
  });
}

/* ===== DOWNLOAD ===== */
function downloadAvatar() {
  const tmpCanvas = document.createElement('canvas');
  tmpCanvas.width = CANVAS_W;
  tmpCanvas.height = CANVAS_H;
  const tmpCtx = tmpCanvas.getContext('2d');
  tmpCtx.drawImage(canvas, 0, 0);

  tmpCtx.save();
  tmpCtx.font = '14px DM Sans, sans-serif';
  tmpCtx.fillStyle = 'rgba(255,224,0,0.45)';
  tmpCtx.textAlign = 'center';
  tmpCtx.fillText('FROX — frox.fr', CANVAS_W * 0.5, CANVAS_H - 18);
  tmpCtx.restore();

  const link = document.createElement('a');
  link.download = `frox-avatar-${(state.prenom || 'frox').toLowerCase().replace(/\s+/g, '-')}.png`;
  link.href = tmpCanvas.toDataURL('image/png');
  link.click();

  window.showToast?.("Avatar téléchargé ! Partage-le avec #FROX");
}

/* ===== MAIN INIT ===== */
function initAvatarModal(prenom, programme) {
  canvas = document.getElementById('avatar-canvas');
  if (!canvas) return;
  canvas.width = CANVAS_W;
  canvas.height = CANVAS_H;
  ctx = canvas.getContext('2d');

  state.prenom = prenom || '';
  state.programme = programme || 'athletic';
  state.morpho = programme || 'athletic';

  const welcomeEl = document.querySelector('.avatar-welcome-text');
  if (welcomeEl) {
    const fx = new TextScramble(welcomeEl);
    fx.setText(`Yo ${prenom} ! Crée ton avatar Frox. C'est le tien, personne d'autre.`);
  }

  const loadingEl = document.querySelector('.avatar-loading');
  const loadBar = document.querySelector('.loading-bar');
  const loadText = document.querySelector('.loading-text');
  if (loadingEl) loadingEl.classList.remove('hidden');

  preloadImages(progress => {
    if (loadBar) loadBar.style.width = (progress * 100) + '%';
    if (loadText) loadText.textContent = `Chargement ${Math.round(progress * 100)}%`;
  }).then(() => {
    if (loadingEl) loadingEl.classList.add('hidden');
    initTabs();
    buildUI();
    renderAvatar();
  });

  document.getElementById('avatar-download-btn')?.addEventListener('click', downloadAvatar);
}

window.initAvatarModal = initAvatarModal;

/* ===== ASSET PATHS (Cloudinary CDN) ===== */
const A = {
  corps: {
    homme: {
      lean: {
        clair1: "https://res.cloudinary.com/dsbgqfcd3/image/upload/homme_lean_clair1_ld7hjt.png",
        clair2: "https://res.cloudinary.com/dsbgqfcd3/image/upload/homme_lean_clair2_mvvtix.png",
        medium: "https://res.cloudinary.com/dsbgqfcd3/image/upload/homme_lean_medium_xx4imo.png",
        mat: "https://res.cloudinary.com/dsbgqfcd3/image/upload/homme_lean_mat_xohuoz.png",
        fonce: "https://res.cloudinary.com/dsbgqfcd3/image/upload/homme_lean_fonce_s4z2do.png",
        ebene: "https://res.cloudinary.com/dsbgqfcd3/image/upload/homme_lean_ebene_ma4jrc.png",
      },
      athletic: {
        clair1: "https://res.cloudinary.com/dsbgqfcd3/image/upload/homme_athletic_clair1_z3pito.png",
        clair2: "https://res.cloudinary.com/dsbgqfcd3/image/upload/homme_athletic_clair2_z65svs.png",
        medium: "https://res.cloudinary.com/dsbgqfcd3/image/upload/homme_athletic_medium_bwpfld.png",
        mat: "https://res.cloudinary.com/dsbgqfcd3/image/upload/homme_athletic_mat_in6gpe.png",
        fonce: "https://res.cloudinary.com/dsbgqfcd3/image/upload/homme_athletic_fonce_cbnfnu.png",
        ebene: "https://res.cloudinary.com/dsbgqfcd3/image/upload/homme_athletic_ebene_o7cogk.png",
      },
      power: {
        clair1: "https://res.cloudinary.com/dsbgqfcd3/image/upload/homme_power_clair1_eu7dex.png",
        clair2: "https://res.cloudinary.com/dsbgqfcd3/image/upload/homme_power_clair2_accj59.png",
        medium: "https://res.cloudinary.com/dsbgqfcd3/image/upload/homme_power_medium_jkbqea.png",
        mat: "https://res.cloudinary.com/dsbgqfcd3/image/upload/homme_power_mat_zj5kok.png",
        fonce: "https://res.cloudinary.com/dsbgqfcd3/image/upload/homme_power_fonce_ajdxh9.png",
        ebene: "https://res.cloudinary.com/dsbgqfcd3/image/upload/homme_power_ebene_jduzio.png",
      },
    },
    femme: {
      lean: {
        clair1: "https://res.cloudinary.com/dsbgqfcd3/image/upload/femme_lean_clair1_dqeonw.png",
        clair2: "https://res.cloudinary.com/dsbgqfcd3/image/upload/femme_lean_clair2_yuvleu.png",
        medium: "https://res.cloudinary.com/dsbgqfcd3/image/upload/femme_lean_medium_cbamgv.png",
        mat: "https://res.cloudinary.com/dsbgqfcd3/image/upload/femme_lean_mat_vv58si.png",
        fonce: "https://res.cloudinary.com/dsbgqfcd3/image/upload/femme_lean_fonce_ahxvqc.png",
        ebene: "https://res.cloudinary.com/dsbgqfcd3/image/upload/femme_lean_ebene_nbyygg.png",
      },
      athletic: {
        clair1: "https://res.cloudinary.com/dsbgqfcd3/image/upload/femme_athletic_clair1_hqoxyn.png",
        clair2: "https://res.cloudinary.com/dsbgqfcd3/image/upload/femme_athletic_clair2_lsfnp5.png",
        medium: "https://res.cloudinary.com/dsbgqfcd3/image/upload/femme_athletic_medium_krgte8.png",
        mat: "https://res.cloudinary.com/dsbgqfcd3/image/upload/femme_athletic_mat_gltymg.png",
        fonce: "https://res.cloudinary.com/dsbgqfcd3/image/upload/femme_athletic_fonce_zum095.png",
        ebene: "https://res.cloudinary.com/dsbgqfcd3/image/upload/femme_athletic_ebene_jeokt7.png",
      },
    },
  },
  yeux: {
    homme: {
      marron: "https://res.cloudinary.com/dsbgqfcd3/image/upload/yeux_marron_djzpin.png",
      noisette: "https://res.cloudinary.com/dsbgqfcd3/image/upload/yeux_noisette_bonv8k.png",
      verts: "https://res.cloudinary.com/dsbgqfcd3/image/upload/yeux_verts_pwosf2.png",
      bleus: "https://res.cloudinary.com/dsbgqfcd3/image/upload/yeux_bleus_y4sifi.png",
    },
    femme: {
      marron: "https://res.cloudinary.com/dsbgqfcd3/image/upload/f_yeux_marron_tshwls.png",
      noisette: "https://res.cloudinary.com/dsbgqfcd3/image/upload/f_yeux_noisette_1_nwmxj8.png",
      verts: "https://res.cloudinary.com/dsbgqfcd3/image/upload/f_yeux_verts_mbmiyi.png",
      bleus: "https://res.cloudinary.com/dsbgqfcd3/image/upload/f_yeux_bleus_sebnie.png",
    },
  },
  cheveux_h: {
    courts: c => {
      const CLOUD_URLS = {
        "noir": "https://res.cloudinary.com/dsbgqfcd3/image/upload/h_cheveux_courts_noir_c6uvvx.png",
        "brun": "https://res.cloudinary.com/dsbgqfcd3/image/upload/h_cheveux_courts_brun_ioapjc.png",
        "chatain": "https://res.cloudinary.com/dsbgqfcd3/image/upload/h_cheveux_courts_chatain_bmrc3g.png",
        "blond": "https://res.cloudinary.com/dsbgqfcd3/image/upload/h_cheveux_courts_blond_s6wnat.png",
        "roux": "https://res.cloudinary.com/dsbgqfcd3/image/upload/h_cheveux_courts_roux_nuqoop.png",
        "gris": "https://res.cloudinary.com/dsbgqfcd3/image/upload/h_cheveux_courts_gris_hfodq9.png",
      };
      return CLOUD_URLS[c] || CLOUD_URLS["noir"];
    },
    rase: c => {
      const CLOUD_URLS = {
        "noir": "https://res.cloudinary.com/dsbgqfcd3/image/upload/h_cheveux_rase_noir_pp9rcj.png",
        "brun": "https://res.cloudinary.com/dsbgqfcd3/image/upload/h_cheveux_rase_brun_ymszjd.png",
        "chatain": "https://res.cloudinary.com/dsbgqfcd3/image/upload/h_cheveux_rase_chatain_p0kuki.png",
        "blond": "https://res.cloudinary.com/dsbgqfcd3/image/upload/h_cheveux_rase_blond_ztiquv.png",
        "roux": "https://res.cloudinary.com/dsbgqfcd3/image/upload/h_cheveux_rase_roux_pzxfgc.png",
        "gris": "https://res.cloudinary.com/dsbgqfcd3/image/upload/h_cheveux_rase_gris_nveylc.png",
      };
      return CLOUD_URLS[c] || CLOUD_URLS["noir"];
    },
    degrade: c => {
      const CLOUD_URLS = {
        "noir": "https://res.cloudinary.com/dsbgqfcd3/image/upload/h_cheveux_degrade_noir_afl1xo.png",
        "brun": "https://res.cloudinary.com/dsbgqfcd3/image/upload/h_cheveux_degrade_brun_fgbayf.png",
        "chatain": "https://res.cloudinary.com/dsbgqfcd3/image/upload/h_cheveux_degrade_chatain_t8jame.png",
        "blond": "https://res.cloudinary.com/dsbgqfcd3/image/upload/h_cheveux_degrade_blond_wykwih.png",
        "roux": "https://res.cloudinary.com/dsbgqfcd3/image/upload/h_cheveux_degrade_roux_s9m0vp.png",
        "gris": "https://res.cloudinary.com/dsbgqfcd3/image/upload/h_cheveux_degrade_gris_qdxfie.png",
      };
      return CLOUD_URLS[c] || CLOUD_URLS["noir"];
    },
    milongs: c => {
      const CLOUD_URLS = {
        "noir": "https://res.cloudinary.com/dsbgqfcd3/image/upload/h_cheveux_milongs_noir_vxdko3.png",
        "brun": "https://res.cloudinary.com/dsbgqfcd3/image/upload/h_cheveux_milongs_brun_r3uupm.png",
        "chatain": "https://res.cloudinary.com/dsbgqfcd3/image/upload/h_cheveux_milongs_chatain_uenuum.png",
        "blond": "https://res.cloudinary.com/dsbgqfcd3/image/upload/h_cheveux_milongs_blond_yucc1x.png",
        "gris": "https://res.cloudinary.com/dsbgqfcd3/image/upload/h_cheveux_milongs_gris_uqugz6.png",
      };
      return CLOUD_URLS[c] || CLOUD_URLS["noir"];
    },
    dreads: c => {
      const CLOUD_URLS = {
        "noir": "https://res.cloudinary.com/dsbgqfcd3/image/upload/h_cheveux_dreads_noir_hg3mp3.png",
        "roux": "https://res.cloudinary.com/dsbgqfcd3/image/upload/h_cheveux_dreads_roux_qnqc36.png",
        "gris": "https://res.cloudinary.com/dsbgqfcd3/image/upload/h_cheveux_dreads_gris_bika2a.png",
      };
      return CLOUD_URLS[c] || CLOUD_URLS["noir"];
    },
    afro: c => {
      const CLOUD_URLS = {
        "noir": "https://res.cloudinary.com/dsbgqfcd3/image/upload/h_cheveux_afro_noir_dsej9h.png",
        "brun": "https://res.cloudinary.com/dsbgqfcd3/image/upload/h_cheveux_afro_brun_n3xhzo.png",
        "chatain": "https://res.cloudinary.com/dsbgqfcd3/image/upload/h_cheveux_afro_chatain_ecy5gg.png",
        "blond": "https://res.cloudinary.com/dsbgqfcd3/image/upload/h_cheveux_afro_blond_tidn9h.png",
        "roux": "https://res.cloudinary.com/dsbgqfcd3/image/upload/h_cheveux_afro_roux_lo82tu.png",
        "gris": "https://res.cloudinary.com/dsbgqfcd3/image/upload/h_cheveux_afro_gris_nmvnca.png",
      };
      return CLOUD_URLS[c] || CLOUD_URLS["noir"];
    },
  },
  cheveux_f: {
    longs: c => {
      const CLOUD_URLS = {
        "noir": "https://res.cloudinary.com/dsbgqfcd3/image/upload/f_cheveux_longs_noir_un31kp.png",
        "brun": "https://res.cloudinary.com/dsbgqfcd3/image/upload/f_cheveux_longs_brun_pqmbzx.png",
        "chatain": "https://res.cloudinary.com/dsbgqfcd3/image/upload/f_cheveux_longs_chatain_spa0xc.png",
        "blond": "https://res.cloudinary.com/dsbgqfcd3/image/upload/f_cheveux_longs_blond_emd7vk.png",
        "roux": "https://res.cloudinary.com/dsbgqfcd3/image/upload/f_cheveux_longs_roux_sagvf2.png",
        "gris": "https://res.cloudinary.com/dsbgqfcd3/image/upload/f_cheveux_longs_gris_idaxdg.png",
      };
      return CLOUD_URLS[c] || CLOUD_URLS["noir"];
    },
    pixie: c => {
      const CLOUD_URLS = {
        "noir": "https://res.cloudinary.com/dsbgqfcd3/image/upload/f_cheveux_pixie_noir_ppsrom.png",
        "brun": "https://res.cloudinary.com/dsbgqfcd3/image/upload/f_cheveux_pixie_brun_yu32pa.png",
        "chatain": "https://res.cloudinary.com/dsbgqfcd3/image/upload/f_cheveux_pixie_chatain_yutlgy.png",
        "blond": "https://res.cloudinary.com/dsbgqfcd3/image/upload/f_cheveux_pixie_blond_bnbmpa.png",
        "roux": "https://res.cloudinary.com/dsbgqfcd3/image/upload/f_cheveux_pixie_roux_kigh3b.png",
        "gris": "https://res.cloudinary.com/dsbgqfcd3/image/upload/f_cheveux_pixie_gris_bsq7br.png",
      };
      return CLOUD_URLS[c] || CLOUD_URLS["noir"];
    },
    bob: c => {
      const CLOUD_URLS = {
        "noir": "https://res.cloudinary.com/dsbgqfcd3/image/upload/f_cheveux_bob_noir_hnzupf.png",
        "brun": "https://res.cloudinary.com/dsbgqfcd3/image/upload/f_cheveux_bob_brun_gfxeqy.png",
        "chatain": "https://res.cloudinary.com/dsbgqfcd3/image/upload/f_cheveux_bob_chatain_ab3mxh.png",
        "blond": "https://res.cloudinary.com/dsbgqfcd3/image/upload/f_cheveux_bob_blond_baa206.png",
        "roux": "https://res.cloudinary.com/dsbgqfcd3/image/upload/f_cheveux_bob_roux_m9daod.png",
        "gris": "https://res.cloudinary.com/dsbgqfcd3/image/upload/f_cheveux_bob_gris_kpippq.png",
      };
      return CLOUD_URLS[c] || CLOUD_URLS["noir"];
    },
    ponytail: c => {
      const CLOUD_URLS = {
        "noir": "https://res.cloudinary.com/dsbgqfcd3/image/upload/f_cheveux_ponytail_noir_p3tukk.png",
        "chatain": "https://res.cloudinary.com/dsbgqfcd3/image/upload/f_cheveux_ponytail_chatain_g8zsed.png",
        "blond": "https://res.cloudinary.com/dsbgqfcd3/image/upload/f_cheveux_ponytail_blond_aw2tn5.png",
        "gris": "https://res.cloudinary.com/dsbgqfcd3/image/upload/f_cheveux_ponytail_gris_e6jozv.png",
      };
      return CLOUD_URLS[c] || CLOUD_URLS["noir"];
    },
    tresses: c => {
      const CLOUD_URLS = {
        "noir": "https://res.cloudinary.com/dsbgqfcd3/image/upload/f_cheveux_tresses_noir_zzu4ho.png",
        "brun": "https://res.cloudinary.com/dsbgqfcd3/image/upload/f_cheveux_tresses_brun_mc3xlc.png",
        "chatain": "https://res.cloudinary.com/dsbgqfcd3/image/upload/f_cheveux_tresses_chatain_ek5edp.png",
        "blond": "https://res.cloudinary.com/dsbgqfcd3/image/upload/f_cheveux_tresses_blond_zrieuk.png",
        "roux": "https://res.cloudinary.com/dsbgqfcd3/image/upload/f_cheveux_tresses_roux_xeztuf.png",
        "gris": "https://res.cloudinary.com/dsbgqfcd3/image/upload/f_cheveux_tresses_gris_wmyysc.png",
      };
      return CLOUD_URLS[c] || CLOUD_URLS["noir"];
    },
    chignon: c => {
      const CLOUD_URLS = {
        "noir": "https://res.cloudinary.com/dsbgqfcd3/image/upload/f_cheveux_chignon_noir_vhrj3s.png",
        "brun": "https://res.cloudinary.com/dsbgqfcd3/image/upload/f_cheveux_chignon_brun_jlid2o.png",
        "chatain": "https://res.cloudinary.com/dsbgqfcd3/image/upload/f_cheveux_chignon_chatain_evf4au.png",
        "gris": "https://res.cloudinary.com/dsbgqfcd3/image/upload/f_cheveux_chignon_gris_zc3x4n.png",
      };
      return CLOUD_URLS[c] || CLOUD_URLS["noir"];
    },
    rase: c => {
      const CLOUD_URLS = {
        "noir": "https://res.cloudinary.com/dsbgqfcd3/image/upload/f_cheveux_rase_noir_a9n7md.png",
        "chatain": "https://res.cloudinary.com/dsbgqfcd3/image/upload/f_cheveux_rase_chatain_lpiddg.png",
        "roux": "https://res.cloudinary.com/dsbgqfcd3/image/upload/f_cheveux_rase_roux_iijx5t.png",
        "gris": "https://res.cloudinary.com/dsbgqfcd3/image/upload/f_cheveux_rase_gris_vper5f.png",
      };
      return CLOUD_URLS[c] || CLOUD_URLS["noir"];
    },
    afro: () => null, // asset non disponible
  },
  barbe: {
    rase: "https://res.cloudinary.com/dsbgqfcd3/image/upload/h_barbe_rase_k3rcmv.png",
    courte: "https://res.cloudinary.com/dsbgqfcd3/image/upload/h_barbe_courte_uhrnlc.png",
    complete_courte: "https://res.cloudinary.com/dsbgqfcd3/image/upload/h_barbe_complete_courte_lnn2ce.png",
    complete_longue: "https://res.cloudinary.com/dsbgqfcd3/image/upload/h_barbe_complete_longue_tpr9fx.png",
    moustache: "https://res.cloudinary.com/dsbgqfcd3/image/upload/h_barbe_moustache_sfxtr0.png",
    bouc1: "https://res.cloudinary.com/dsbgqfcd3/image/upload/h_barbe_bouc1_uvwubp.png",
    bouc2: "https://res.cloudinary.com/dsbgqfcd3/image/upload/h_barbe_bouc2_vqncrf.png",
  },
  tenue_haut_h: {
    full_black: "https://res.cloudinary.com/dsbgqfcd3/image/upload/tenue_haut_full_black_kmmr5c.png",
    blanc_noir: "https://res.cloudinary.com/dsbgqfcd3/image/upload/tenue_haut_blanc_noir_zjwjai.png",
    gris_rouge: "https://res.cloudinary.com/dsbgqfcd3/image/upload/tenue_haut_gris_rouge_frombh.png",
    navy_blanc: "https://res.cloudinary.com/dsbgqfcd3/image/upload/tenue_haut_navy_blanc_taq24y.png",
    noir_jaune: "https://res.cloudinary.com/dsbgqfcd3/image/upload/tenue_f_haut_noir_jaune_hbhz0t.png",
  },
  tenue_bas_h: {
    noir: "https://res.cloudinary.com/dsbgqfcd3/image/upload/tenue_bas_noir_wr8kba.png",
    blanc: "https://res.cloudinary.com/dsbgqfcd3/image/upload/tenue_bas_blanc_iesfqz.png",
    gris: "https://res.cloudinary.com/dsbgqfcd3/image/upload/tenue_bas_gris_m6feut.png",
    navy: "https://res.cloudinary.com/dsbgqfcd3/image/upload/tenue_bas_navy_uwzyip.png",
    rouge: "https://res.cloudinary.com/dsbgqfcd3/image/upload/tenue_bas_rouge_wr7flj.png",
  },
  tenue_haut_f: {
    full_black: "https://res.cloudinary.com/dsbgqfcd3/image/upload/tenue_f_haut_full_black_c9ague.png",
    blanc_noir: "https://res.cloudinary.com/dsbgqfcd3/image/upload/tenue_f_haut_blanc_noir_r09wb6.png",
    gris_rouge: "https://res.cloudinary.com/dsbgqfcd3/image/upload/tenue_f_haut_gris_rouge_ntrq9n.png",
    navy_blanc: "https://res.cloudinary.com/dsbgqfcd3/image/upload/tenue_f_haut_navy_blanc_jmzrud.png",
    noir_jaune: "https://res.cloudinary.com/dsbgqfcd3/image/upload/tenue_f_haut_noir_jaune_hbhz0t.png",
  },
  tenue_bas_f: {
    noir: "https://res.cloudinary.com/dsbgqfcd3/image/upload/tenue_f_bas_noir_eiqkfb.png",
    blanc: "https://res.cloudinary.com/dsbgqfcd3/image/upload/tenue_f_bas_blanc_t9y0gb.png",
    gris: "https://res.cloudinary.com/dsbgqfcd3/image/upload/tenue_f_bas_gris_vusuyu.png",
    navy: "https://res.cloudinary.com/dsbgqfcd3/image/upload/tenue_f_bas_navy_j0ahn8.png",
  },
  shoes_h: {
    nike_metcon: "https://res.cloudinary.com/dsbgqfcd3/image/upload/shoes_f_nike_metcon_w4vztc.png",
    adidas_ultraboost: "https://res.cloudinary.com/dsbgqfcd3/image/upload/shoes_f_adidas_ultraboost_qyhhsu.png",
    nobull: "https://res.cloudinary.com/dsbgqfcd3/image/upload/shoes_f_nobull_ekz2vj.png",
    on_running: "https://res.cloudinary.com/dsbgqfcd3/image/upload/shoes_f_on_running_socmn9.png",
  },
  shoes_f: {
    nike_metcon: "https://res.cloudinary.com/dsbgqfcd3/image/upload/shoes_f_nike_metcon_w4vztc.png",
    adidas_ultraboost: "https://res.cloudinary.com/dsbgqfcd3/image/upload/shoes_f_adidas_ultraboost_qyhhsu.png",
    nobull: "https://res.cloudinary.com/dsbgqfcd3/image/upload/shoes_f_nobull_ekz2vj.png",
    on_running: "https://res.cloudinary.com/dsbgqfcd3/image/upload/shoes_f_on_running_socmn9.png",
  },
  acc_tete: {
    casquette: "https://res.cloudinary.com/dsbgqfcd3/image/upload/acc_tete_casquette_kjprzc.png",
    bandeau: "https://res.cloudinary.com/dsbgqfcd3/image/upload/acc_tete_bandeau_uxffnw.png",
    lunettes: "https://res.cloudinary.com/dsbgqfcd3/image/upload/acc_tete_lunettes_stm2vp.png",
  },
  acc_corps: {
    montre: "https://res.cloudinary.com/dsbgqfcd3/image/upload/acc_corps_montre_j0cww1.png",
    genouilleres: "https://res.cloudinary.com/dsbgqfcd3/image/upload/acc_corps_genouilleres_tiabpb.png",
    gants: "https://res.cloudinary.com/dsbgqfcd3/image/upload/acc_corps_gants_lu8ay0.png",
  },
  dossard: "https://res.cloudinary.com/dsbgqfcd3/image/upload/dossard_hyrox_nfu1g7.png",
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
  morpho: 'athletic',   // LEAN | ATHLETIC | POWER — détermine la variante de chaque layer
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
    Object.values(A.cheveux_h).forEach(fn => { const p = fn(c); if (p) paths.add(p); });
    Object.values(A.cheveux_f).forEach(fn => { const p = fn(c); if (p) paths.add(p); });
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

  // Filter out any null/undefined from missing assets (ex: afro femme)
  return Array.from(paths).filter(p => typeof p === 'string' && p.length > 0);
}

async function preloadImages(onProgress) {
  const paths = getAllPaths();
  const total = paths.length;
  let loaded = 0;

  await Promise.all(paths.map(path => new Promise(resolve => {
    if (imageCache[path]) { loaded++; onProgress?.(loaded / total); resolve(); return; }
    const img = new Image();
    img.crossOrigin = 'anonymous'; // requis pour canvas cross-origin (Cloudinary)
    img.onload = () => { imageCache[path] = img; loaded++; onProgress?.(loaded / total); resolve(); };
    img.onerror = () => { loaded++; onProgress?.(loaded / total); resolve(); };
    img.src = path;
  })));
}

// Tous les layers : même position, même taille — aucune transform
function drawLayer(src) {
  const img = imageCache[src];
  if (!img || !img.complete || img.naturalWidth === 0) return;
  ctx.drawImage(img, 0, 0, CANVAS_W, CANVAS_H);
}

function drawDossard() {
  const img = imageCache[A.dossard];
  if (!img || !img.complete || img.naturalWidth === 0) return;
  ctx.drawImage(img, 0, 0, CANVAS_W, CANVAS_H);

  // Prénom rendu directement sur le dossard PNG, à la place de "ELITE RUNNER"
  // Ajuste nameX/nameY si la position ne correspond pas exactement au PNG
  ctx.save();
  ctx.font = `bold 20px 'DM Sans', Arial, sans-serif`;
  ctx.fillStyle = '#FFFFFF';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(state.prenom.toUpperCase().slice(0, 14), CANVAS_W * 0.62, CANVAS_H * 0.872);
  ctx.restore();
}

// Rendu brut — appelé uniquement par renderAvatar (via fade)
// PRINCIPE : tous les layers = ctx.drawImage(img, 0, 0, CANVAS_W, CANVAS_H), aucune transform
// MORPHO = quelle variante de fichier charger, pas comment le dessiner
function _renderFrame() {
  if (!ctx) return;
  ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);

  // Layer 0 — fond noir absolu (+ background CSS sur #avatar-canvas en secours)
  ctx.fillStyle = '#0a0a0a';
  ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);

  const g = state.genre;
  const morpho = (g === 'femme' && state.morpho === 'power') ? 'athletic' : state.morpho;

  // 1. Corps de base (PNG morpho-spécifique — référence absolue)
  const corpsPath = A.corps[g]?.[morpho]?.[state.carnation];
  if (corpsPath) drawLayer(corpsPath);

  // 2. Yeux
  const yeuxPath = A.yeux[g]?.[state.yeux];
  if (yeuxPath) drawLayer(yeuxPath);

  // 3. Cheveux
  const chevFn = (g === 'homme' ? A.cheveux_h : A.cheveux_f)[state.cheveux_style];
  if (chevFn) { const p = chevFn(state.cheveux_couleur); if (p) drawLayer(p); }

  // 4. Barbe (homme uniquement, hors rase)
  if (g === 'homme' && state.barbe !== 'rase') {
    const p = A.barbe[state.barbe]; if (p) drawLayer(p);
  }

  // 5. Tenue bas
  const basKey = (g === 'femme' && state.tenue_bas === 'rouge') ? 'noir' : state.tenue_bas;
  const basPath = (g === 'homme' ? A.tenue_bas_h : A.tenue_bas_f)[basKey];
  if (basPath) drawLayer(basPath);

  // 6. Tenue haut
  const hautPath = (g === 'homme' ? A.tenue_haut_h : A.tenue_haut_f)[state.tenue_haut];
  if (hautPath) drawLayer(hautPath);

  // 7. Chaussures
  const shoesPath = (g === 'homme' ? A.shoes_h : A.shoes_f)[state.shoes];
  if (shoesPath) drawLayer(shoesPath);

  // 8. Accessoires corps
  state.acc_corps.forEach(key => { const p = A.acc_corps[key]; if (p) drawLayer(p); });

  // 9. Accessoires tête
  state.acc_tete.forEach(key => { const p = A.acc_tete[key]; if (p) drawLayer(p); });

  // 10. Dossard — toujours dernier layer
  drawDossard();
}

// Rendu avec fade 150ms (70ms out → render → 80ms in)
let _fadeTl = null;
function renderAvatar() {
  if (_fadeTl) { _fadeTl.kill(); _fadeTl = null; }
  if (!canvas || !ctx) return;
  gsap.set(canvas, { opacity: 1 }); // reset si tween tué en cours de route
  _fadeTl = gsap.timeline({ onComplete: () => { _fadeTl = null; } })
    .to(canvas, { opacity: 0.55, duration: 0.07, ease: 'power1.in' })
    .call(_renderFrame)
    .to(canvas, { opacity: 1, duration: 0.08, ease: 'power1.out' });
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
  canvas.style.opacity = '0';
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
  const loadBarWrap = document.querySelector('.loading-bar-wrap');
  if (loadingEl) loadingEl.classList.remove('hidden');

  preloadImages(progress => {
    const pct = Math.round(progress * 100);
    if (loadBar) loadBar.style.width = pct + '%';
    if (loadBarWrap) loadBarWrap.setAttribute('aria-valuenow', pct);
    if (loadText) loadText.textContent = `Chargement des layers — ${pct}%`;
  }).then(() => {
    // Cacher le spinner avec fondu
    if (loadingEl) {
      gsap.to(loadingEl, {
        opacity: 0, duration: 0.3, ease: 'power2.in',
        onComplete: () => loadingEl.classList.add('hidden'),
      });
    }
    initTabs();
    buildUI();
    // Premier rendu direct + reveal animé du canvas
    _renderFrame();
    gsap.fromTo(canvas, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: 'power2.out' });
  });

  document.getElementById('avatar-download-btn')?.addEventListener('click', downloadAvatar);
}

window.initAvatarModal = initAvatarModal;

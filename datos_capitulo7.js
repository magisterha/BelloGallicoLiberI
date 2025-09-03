const corpus = {
    titulus_principalis: "De Bello Gallico, I, 7",
    auctor: "C. Iulius Caesar",
    titulus_secundarius: {
        es: "Primera respuesta de César y tácticas dilatorias",
        en: "Caesar's Initial Response and Delaying Tactics",
        zh: "凱撒的初步反應與拖延戰術"
    },
    introductio: {
        es: {
            titulus: "Introducción al Capítulo 7",
            contentus: `<p>Al enterarse de que los helvecios intentaban cruzar la provincia romana, César actúa con una celeridad extraordinaria. Viaja a marchas forzadas desde Roma hasta Ginebra, donde ordena destruir el puente sobre el Ródano y recluta el máximo número de soldados posible. Cuando los embajadores helvecios llegan para solicitar paso pacífico, César, recordando una derrota romana anterior a manos de ellos, se niega a acceder de inmediato. En su lugar, utiliza una táctica dilatoria: les dice que necesita tiempo para deliberar y que vuelvan en una fecha posterior, ganando así un tiempo precioso para que sus refuerzos militares se reúnan.</p>`
        },
        en: {
            titulus: "Introduction to Chapter 7",
            contentus: `<p>Upon learning that the Helvetii were attempting to cross the Roman province, Caesar acts with extraordinary speed. He force-marches from Rome to Geneva, where he orders the bridge over the Rhone to be destroyed and conscripts the largest possible number of soldiers. When the Helvetian ambassadors arrive to request peaceful passage, Caesar, remembering a prior Roman defeat at their hands, refuses to grant it immediately. Instead, he employs a delaying tactic: he tells them he needs time to deliberate and that they should return on a later date, thus buying precious time for his military reinforcements to assemble.</p>`
        },
        zh: {
            titulus: "第 7 章介紹",
            contentus: `<p>凱撒得知赫爾維蒂人企圖穿越羅馬行省後，便以驚人的速度採取行動。他從羅馬強行軍至日內瓦，下令摧毀羅納河上的橋樑，並徵召了盡可能多的士兵。當赫爾維蒂的使者前來請求和平通過時，凱撒因記得羅馬人過去曾敗於其手，故未立即應允。他採用了拖延戰術：告訴使者他需要時間考慮，讓他們日後再來，從而為集結軍事增援贏得了寶貴的時間。</p>`
        }
    },
    textus: {
        id: 7,
        capitula: [
            {
                id_capituli: 7,
                orationes: [
                    {
                        id_orationis: 'o1',
                        original_lat: "Caesari cum id nuntiatum esset, eos per prouinciam nostram iter facere conari, maturat ab urbe proficisci et quam maximis potest itineribus in Galliam ulteriorem contendit et ad Genauam peruenit.",
                        verba: [
                            { textus: "Caesari", lemma: "Caesar", morphologia: "Sustantivo, masculino, dativo singular", syntaxis: "Objeto Indirecto", translatio: { es: "A César", en: "To Caesar", zh: "向凱撒" } },
                            { textus: "cum", lemma: "cum", morphologia: "Conjunción subordinante (cum histórico)", syntaxis: "Nexo", translatio: { es: "cuando", en: "when", zh: "當" } },
                            { textus: "id", lemma: "is", morphologia: "Pronombre, neutro, nominativo singular", syntaxis: "Sujeto de 'nuntiatum esset'", translatio: { es: "esto", en: "it", zh: "這消息" } },
                            { textus: "nuntiatum esset", lemma: "nuntio", morphologia: "Verbo, 3ª p. sg., pretérito pluscuamperfecto, subjuntivo, pasivo", syntaxis: "Verbo de la subordinada", translatio: { es: "le fue anunciado", en: "it had been announced", zh: "傳來" } },
                            { textus: "eos", lemma: "is", morphologia: "Pronombre, masculino, acusativo plural", syntaxis: "Sujeto de la infinitiva 'conari'", translatio: { es: "que ellos", en: "that they", zh: "他們" } },
                            { textus: "per", lemma: "per", morphologia: "Preposición de acusativo", syntaxis: "Nexo", translatio: { es: "a través de", en: "through", zh: "穿越" } },
                            { textus: "prouinciam", lemma: "provincia", morphologia: "Sustantivo, femenino, acusativo singular", syntaxis: "Complemento de 'per'", translatio: { es: "la provincia", en: "the province", zh: "行省" } },
                            { textus: "nostram", lemma: "noster", morphologia: "Adjetivo posesivo, femenino, acusativo singular", syntaxis: "Atributo de 'prouinciam'", translatio: { es: "nuestra", en: "our", zh: "我方" } },
                            { textus: "iter", lemma: "iter", morphologia: "Sustantivo, neutro, acusativo singular", syntaxis: "Objeto Directo de 'facere'", translatio: { es: "un viaje", en: "a journey", zh: "" } },
                            { textus: "facere", lemma: "facio", morphologia: "Verbo, infinitivo presente, activo", syntaxis: "Infinitivo (complemento de 'conari')", translatio: { es: "hacer", en: "to make", zh: "" } },
                            { textus: "conari", lemma: "conor", morphologia: "Verbo, infinitivo presente, deponente", syntaxis: "Verbo de la oración de infinitivo", translatio: { es: "intentaban", en: "were attempting", zh: "企圖" } },
                            { textus: "maturat", lemma: "maturo", morphologia: "Verbo, 3ª p. sg., presente, indicativo, activo", syntaxis: "Verbo principal", translatio: { es: "se apresura", en: "he hastens", zh: "便迅速" } },
                            { textus: "ab", lemma: "ab", morphologia: "Preposición de ablativo", syntaxis: "Nexo", translatio: { es: "de", en: "from", zh: "從" } },
                            { textus: "urbe", lemma: "urbs", morphologia: "Sustantivo, femenino, ablativo singular", syntaxis: "Complemento de 'ab'", translatio: { es: "la ciudad", en: "the city", zh: "羅馬城" } },
                            { textus: "proficisci", lemma: "proficiscor", morphologia: "Verbo, infinitivo presente, deponente", syntaxis: "Infinitivo (complemento de 'maturat')", translatio: { es: "a partir", en: "to set out", zh: "出發" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "並" } },
                            { textus: "quam maximis", lemma: "quam maximus", morphologia: "Adverbio + Adjetivo superlativo, neutro, ablativo plural", syntaxis: "Modificador de 'itineribus' (valor intensivo)", translatio: { es: "con las más grandes", en: "by the greatest possible", zh: "以盡可能快的" } },
                            { textus: "potest", lemma: "possum", morphologia: "Verbo, 3ª p. sg., presente, indicativo, activo", syntaxis: "Parte de la locución 'quam...potest'", translatio: { es: "que puede", en: "he can", zh: "" } },
                            { textus: "itineribus", lemma: "iter", morphologia: "Sustantivo, neutro, ablativo plural", syntaxis: "C.C. de Modo/Medio", translatio: { es: "marchas", en: "marches", zh: "速度" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición de acusativo", syntaxis: "Nexo", translatio: { es: "a", en: "into", zh: "趕往" } },
                            { textus: "Galliam", lemma: "Gallia", morphologia: "Sustantivo, femenino, acusativo singular", syntaxis: "Complemento de 'in'", translatio: { es: "la Galia", en: "Gaul", zh: "高盧" } },
                            { textus: "ulteriorem", lemma: "ulterior", morphologia: "Adjetivo comparativo, femenino, acusativo singular", syntaxis: "Atributo de 'Galliam'", translatio: { es: "Ulterior", en: "Further", zh: "外" } },
                            { textus: "contendit", lemma: "contendo", morphologia: "Verbo, 3ª p. sg., presente, indicativo, activo", syntaxis: "Verbo principal (coordinado)", translatio: { es: "se dirige", en: "pushes on", zh: "" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "並" } },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición de acusativo", syntaxis: "Nexo", translatio: { es: "a", en: "at", zh: "" } },
                            { textus: "Genauam", lemma: "Genava", morphologia: "Sustantivo, femenino, acusativo singular", syntaxis: "Complemento de 'ad'", translatio: { es: "Ginebra", en: "Geneva", zh: "日內瓦" } },
                            { textus: "peruenit", lemma: "pervenio", morphologia: "Verbo, 3ª p. sg., presente (histórico) o perfecto, indicativo, activo", syntaxis: "Verbo principal (coordinado)", translatio: { es: "llega", en: "arrives", zh: "抵達" } }
                        ],
                        ordo_syntacticus: "Cum id nuntiatum esset Caesari, eos conari facere iter per prouinciam nostram, maturat proficisci ab urbe et contendit in Galliam ulteriorem quam maximis itineribus potest et peruenit ad Genauam.",
                        notae: "El sujeto de 'nuntiatum esset' es la oración de infinitivo 'eos...conari'. El tiempo principal es el presente histórico ('maturat', 'contendit', 'peruenit') que le da viveza a la narración.",
                        translationes: {
                            es: "Cuando le fue anunciado a César esto, que ellos intentaban hacer un viaje a través de nuestra provincia, se apresura a partir de la ciudad (Roma) y con las marchas más grandes que puede se dirige a la Galia Ulterior y llega a Ginebra.",
                            en: "When it had been announced to Caesar that they were attempting to make a journey through our province, he hastens to set out from the city and pushes on into Further Gaul by the greatest marches possible, and arrives at Geneva.",
                            zh: "當凱撒得知他們企圖穿越我方行省的消息後，便迅速從羅馬城出發，以盡可能快的速度日夜兼程趕往外高盧，並抵達日內瓦。"
                        }
                    },
                    {
                        id_orationis: 'o2',
                        original_lat: "Prouinciae toti quam maximum potest militum numerum imperat (erat omnino in Gallia ulteriore legio una), pontem qui erat ad Genauam iubet rescindi.",
                        verba: [
                            { textus: "Prouinciae", lemma: "provincia", morphologia: "Sustantivo, femenino, dativo singular", syntaxis: "Objeto Indirecto de 'imperat'", translatio: { es: "A la provincia", en: "from the province", zh: "向行省" } },
                            { textus: "toti", lemma: "totus", morphologia: "Adjetivo, femenino, dativo singular", syntaxis: "Atributo de 'Prouinciae'", translatio: { es: "toda", en: "whole", zh: "整個" } },
                            { textus: "quam maximum", lemma: "quam maximus", morphologia: "Adverbio + Adjetivo superlativo, masculino, acusativo singular", syntaxis: "Modificador de 'numerum' (valor intensivo)", translatio: { es: "el mayor posible", en: "the largest possible", zh: "盡可能多的" } },
                            { textus: "potest", lemma: "possum", morphologia: "Verbo, 3ª p. sg., presente, indicativo, activo", syntaxis: "Parte de la locución 'quam...potest'", translatio: { es: "que puede", en: "he can", zh: "" } },
                            { textus: "militum", lemma: "miles", morphologia: "Sustantivo, masculino, genitivo plural", syntaxis: "Complemento del Nombre (partitivo) de 'numerum'", translatio: { es: "de soldados", en: "of soldiers", zh: "士兵" } },
                            { textus: "numerum", lemma: "numerus", morphologia: "Sustantivo, masculino, acusativo singular", syntaxis: "Objeto Directo de 'imperat'", translatio: { es: "número", en: "number", zh: "" } },
                            { textus: "imperat", lemma: "impero", morphologia: "Verbo, 3ª p. sg., presente, indicativo, activo", syntaxis: "Verbo principal", translatio: { es: "ordena", en: "He orders", zh: "徵召了" } },
                            { textus: "erat", lemma: "sum", morphologia: "Verbo, 3ª p. sg., pretérito imperfecto, indicativo, activo", syntaxis: "Verbo (en paréntesis)", translatio: { es: "había", en: "there was", zh: "有" } },
                            { textus: "omnino", lemma: "omnino", morphologia: "Adverbio", syntaxis: "Modificador circunstancial", translatio: { es: "en total", en: "in all", zh: "總共" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición de ablativo", syntaxis: "Nexo", translatio: { es: "en", en: "in", zh: "在" } },
                            { textus: "Gallia", lemma: "Gallia", morphologia: "Sustantivo, femenino, ablativo singular", syntaxis: "Complemento de 'in'", translatio: { es: "la Galia", en: "Gaul", zh: "高盧" } },
                            { textus: "ulteriore", lemma: "ulterior", morphologia: "Adjetivo comparativo, femenino, ablativo singular", syntaxis: "Atributo de 'Gallia'", translatio: { es: "Ulterior", en: "Further", zh: "外" } },
                            { textus: "legio", lemma: "legio", morphologia: "Sustantivo, femenino, nominativo singular", syntaxis: "Sujeto de 'erat'", translatio: { es: "una legión", en: "one legion", zh: "一個軍團" } },
                            { textus: "una", lemma: "unus", morphologia: "Adjetivo numeral, femenino, nominativo singular", syntaxis: "Atributo de 'legio'", translatio: { es: "sola", en: "only", zh: "只" } },
                            { textus: "pontem", lemma: "pons", morphologia: "Sustantivo, masculino, acusativo singular", syntaxis: "Sujeto de la infinitiva 'rescindi'", translatio: { es: "el puente", en: "the bridge", zh: "橋樑" } },
                            { textus: "qui", lemma: "qui", morphologia: "Pronombre relativo, masculino, nominativo singular", syntaxis: "Sujeto de 'erat' y Nexo", translatio: { es: "que", en: "that", zh: "" } },
                            { textus: "erat", lemma: "sum", morphologia: "Verbo, 3ª p. sg., pretérito imperfecto, indicativo, activo", syntaxis: "Verbo de la subordinada de relativo", translatio: { es: "estaba", en: "was", zh: "在" } },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición de acusativo", syntaxis: "Nexo", translatio: { es: "junto a", en: "near", zh: "附近" } },
                            { textus: "Genauam", lemma: "Genava", morphologia: "Sustantivo, femenino, acusativo singular", syntaxis: "Complemento de 'ad'", translatio: { es: "Ginebra", en: "Geneva", zh: "日內瓦" } },
                            { textus: "iubet", lemma: "iubeo", morphologia: "Verbo, 3ª p. sg., presente, indicativo, activo", syntaxis: "Verbo principal", translatio: { es: "manda", en: "orders", zh: "下令" } },
                            { textus: "rescindi", lemma: "rescindo", morphologia: "Verbo, infinitivo presente, pasivo", syntaxis: "Verbo de la oración de infinitivo", translatio: { es: "que sea cortado", en: "to be cut down", zh: "拆除" } }
                        ],
                        ordo_syntacticus: "Imperat prouinciae toti quam maximum numerum militum potest (omnino erat una legio in Gallia ulteriore), iubet pontem, qui erat ad Genauam, rescindi.",
                        notae: "La construcción 'iubet + acusativo + infinitivo pasivo' es muy común y significa 'ordena que (algo) sea (hecho)'.",
                        translationes: {
                            es: "Ordena a toda la provincia el mayor número de soldados que puede (había en total en la Galia Ulterior una sola legión), y manda que el puente que estaba junto a Ginebra sea cortado.",
                            en: "He orders from the whole province the largest number of soldiers he can (there was in all in Further Gaul only one legion), and orders the bridge that was near Geneva to be cut down.",
                            zh: "他向整個行省徵召了盡可能多的士兵（當時在外高盧總共只有一個軍團），並下令拆除日內瓦附近的橋樑。"
                        }
                    },
                    {
                        id_orationis: 'o3',
                        original_lat: "Vbi de eius aduentu Heluetii certiores facti sunt, legatos ad eum mittunt nobilissimos ciuitatis, cuius legationis Nammeius et Verucloetius principem locum obtinebant, qui dicerent sibi esse in animo sine ullo maleficio iter per prouinciam facere, propterea quod aliud iter haberent nullum; rogare ut eius uoluntate id sibi facere liceat.",
                        verba: [
                            { textus: "Vbi", lemma: "ubi", morphologia: "Conjunción subordinante temporal", syntaxis: "Nexo", translatio: { es: "Cuando", en: "When", zh: "當" } },
                            { textus: "de", lemma: "de", morphologia: "Preposición de ablativo", syntaxis: "Nexo", translatio: { es: "de", en: "of", zh: "" } },
                            { textus: "eius", lemma: "is", morphologia: "Pronombre, masculino, genitivo singular", syntaxis: "Atributo de 'aduentu'", translatio: { es: "su", en: "his", zh: "他" } },
                            { textus: "aduentu", lemma: "adventus", morphologia: "Sustantivo, masculino, ablativo singular", syntaxis: "Complemento de 'de'", translatio: { es: "llegada", en: "arrival", zh: "抵達的" } },
                            { textus: "Heluetii", lemma: "Helvetii", morphologia: "Sustantivo, masculino, nominativo plural", syntaxis: "Sujeto", translatio: { es: "los helvecios", en: "the Helvetii", zh: "赫爾維蒂人" } },
                            { textus: "certiores", lemma: "certus", morphologia: "Adjetivo comparativo, masculino, nominativo plural", syntaxis: "Atributo predicativo del sujeto", translatio: { es: "informados", en: "informed", zh: "得知" } },
                            { textus: "facti sunt", lemma: "fio", morphologia: "Verbo, 3ª p. pl., perfecto, indicativo, semideponente", syntaxis: "Verbo de la subordinada ('ser informado')", translatio: { es: "fueron hechos", en: "were made", zh: "消息後" } },
                            { textus: "legatos", lemma: "legatus", morphologia: "Sustantivo, masculino, acusativo plural", syntaxis: "Objeto Directo", translatio: { es: "legados", en: "legates", zh: "使者" } },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición de acusativo", syntaxis: "Nexo", translatio: { es: "a", en: "to", zh: "去見" } },
                            { textus: "eum", lemma: "is", morphologia: "Pronombre, masculino, acusativo singular", syntaxis: "Complemento de 'ad'", translatio: { es: "él", en: "him", zh: "他" } },
                            { textus: "mittunt", lemma: "mitto", morphologia: "Verbo, 3ª p. pl., presente, indicativo, activo", syntaxis: "Verbo principal", translatio: { es: "envían", en: "they sent", zh: "便派遣了" } },
                            { textus: "nobilissimos", lemma: "nobilis", morphologia: "Adjetivo superlativo, masculino, acusativo plural", syntaxis: "Aposición de 'legatos'", translatio: { es: "los más nobles", en: "the most noble", zh: "最尊貴的" } },
                            { textus: "ciuitatis", lemma: "civitas", morphologia: "Sustantivo, femenino, genitivo singular", syntaxis: "Complemento del Nombre de 'legatos'", translatio: { es: "de la ciudad", en: "of their state", zh: "國中" } },
                            { textus: "cuius", lemma: "qui", morphologia: "Pronombre relativo, femenino, genitivo singular", syntaxis: "Atributo de 'legationis' y Nexo", translatio: { es: "de cuya", en: "of which", zh: "其中" } },
                            { textus: "legationis", lemma: "legatio", morphologia: "Sustantivo, femenino, genitivo singular", syntaxis: "Complemento del Nombre (posesivo)", translatio: { es: "legación", en: "legation", zh: "使團的" } },
                            { textus: "Nammeius", lemma: "Nammeius", morphologia: "Sustantivo, masculino, nominativo singular", syntaxis: "Sujeto", translatio: { es: "Nameyo", en: "Nammeius", zh: "南梅烏斯" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "和" } },
                            { textus: "Verucloetius", lemma: "Verucloetius", morphologia: "Sustantivo, masculino, nominativo singular", syntaxis: "Sujeto", translatio: { es: "Veruclecio", en: "Verucloetius", zh: "維魯克洛提烏斯" } },
                            { textus: "principem", lemma: "princeps", morphologia: "Adjetivo, masculino, acusativo singular", syntaxis: "Atributo de 'locum'", translatio: { es: "principal", en: "chief", zh: "首領" } },
                            { textus: "locum", lemma: "locus", morphologia: "Sustantivo, masculino, acusativo singular", syntaxis: "Objeto Directo", translatio: { es: "el lugar", en: "the position", zh: "" } },
                            { textus: "obtinebant", lemma: "obtineo", morphologia: "Verbo, 3ª p. pl., pretérito imperfecto, indicativo, activo", syntaxis: "Verbo de la subordinada de relativo", translatio: { es: "ocupaban", en: "held", zh: "是" } },
                            { textus: "qui", lemma: "qui", morphologia: "Pronombre relativo, masculino, nominativo plural", syntaxis: "Sujeto de 'dicerent' y Nexo", translatio: { es: "para que", en: "to", zh: "他們奉命" } },
                            { textus: "dicerent", lemma: "dico", morphologia: "Verbo, 3ª p. pl., pretérito imperfecto, subjuntivo, activo", syntaxis: "Verbo de la subordinada de relativo (con valor final)", translatio: { es: "dijeran", en: "say", zh: "前去說明" } },
                            { textus: "sibi", lemma: "sui", morphologia: "Pronombre reflexivo, dativo", syntaxis: "Dativo posesivo en la infinitiva", translatio: { es: "que ellos", en: "it was their", zh: "他們" } },
                            { textus: "esse", lemma: "sum", morphologia: "Verbo, infinitivo presente", syntaxis: "Verbo de la oración de infinitivo", translatio: { es: "tenían", en: "", zh: "" } },
                            { textus: "in animo", lemma: "in animo", morphologia: "Preposición + ablativo", syntaxis: "Locución adverbial ('tener la intención')", translatio: { es: "la intención", en: "intention", zh: "打算" } },
                            { textus: "sine", lemma: "sine", morphologia: "Preposición de ablativo", syntaxis: "Nexo", translatio: { es: "sin", en: "without", zh: "" } },
                            { textus: "ullo", lemma: "ullus", morphologia: "Adjetivo, neutro, ablativo singular", syntaxis: "Atributo de 'maleficio'", translatio: { es: "ningún", en: "any", zh: "" } },
                            { textus: "maleficio", lemma: "maleficium", morphologia: "Sustantivo, neutro, ablativo singular", syntaxis: "Complemento de 'sine'", translatio: { es: "daño", en: "mischief", zh: "無害地" } },
                            { textus: "iter", lemma: "iter", morphologia: "Sustantivo, neutro, acusativo singular", syntaxis: "Objeto Directo de 'facere'", translatio: { es: "el viaje", en: "the journey", zh: "" } },
                            { textus: "per", lemma: "per", morphologia: "Preposición de acusativo", syntaxis: "Nexo", translatio: { es: "por", en: "through", zh: "通過" } },
                            { textus: "prouinciam", lemma: "provincia", morphologia: "Sustantivo, femenino, acusativo singular", syntaxis: "Complemento de 'per'", translatio: { es: "la provincia", en: "the province", zh: "行省" } },
                            { textus: "facere", lemma: "facio", morphologia: "Verbo, infinitivo presente, activo", syntaxis: "Infinitivo (sujeto de 'esse in animo')", translatio: { es: "hacer", en: "to make", zh: "" } },
                            { textus: "propterea", lemma: "propterea", morphologia: "Adverbio", syntaxis: "Nexo causal", translatio: { es: "por esto", en: "for this reason", zh: "" } },
                            { textus: "quod", lemma: "quod", morphologia: "Conjunción subordinante causal", syntaxis: "Nexo", translatio: { es: "porque", en: "because", zh: "因為" } },
                            { textus: "aliud", lemma: "alius", morphologia: "Adjetivo, neutro, acusativo singular", syntaxis: "Atributo de 'iter'", translatio: { es: "otro", en: "other", zh: "別的" } },
                            { textus: "iter", lemma: "iter", morphologia: "Sustantivo, neutro, acusativo singular", syntaxis: "Objeto Directo de 'haberent'", translatio: { es: "camino", en: "route", zh: "路線" } },
                            { textus: "haberent", lemma: "habeo", morphologia: "Verbo, 3ª p. pl., pretérito imperfecto, subjuntivo, activo", syntaxis: "Verbo de la subordinada causal", translatio: { es: "tenían", en: "they had", zh: "他們有" } },
                            { textus: "nullum", lemma: "nullus", morphologia: "Adjetivo, neutro, acusativo singular", syntaxis: "Atributo predicativo de 'iter'", translatio: { es: "ningún", en: "no", zh: "沒有" } },
                            { textus: "rogare", lemma: "rogo", morphologia: "Verbo, infinitivo presente, activo", syntaxis: "Infinitivo histórico (o dependiente de 'dicerent')", translatio: { es: "pedir", en: "to ask", zh: "請求" } },
                            { textus: "ut", lemma: "ut", morphologia: "Conjunción subordinante", syntaxis: "Nexo (completivo)", translatio: { es: "que", en: "that", zh: "" } },
                            { textus: "eius", lemma: "is", morphologia: "Pronombre, masculino, genitivo singular", syntaxis: "Atributo de 'uoluntate'", translatio: { es: "con su", en: "with his", zh: "凱撒" } },
                            { textus: "uoluntate", lemma: "voluntas", morphologia: "Sustantivo, femenino, ablativo singular", syntaxis: "C.C. de Causa/Modo", translatio: { es: "consentimiento", en: "consent", zh: "" } },
                            { textus: "id", lemma: "is", morphologia: "Pronombre, neutro, acusativo singular", syntaxis: "Objeto Directo de 'facere'", translatio: { es: "esto", en: "this", zh: "這樣做" } },
                            { textus: "sibi", lemma: "sui", morphologia: "Pronombre reflexivo, dativo", syntaxis: "Objeto Indirecto", translatio: { es: "les", en: "for them", zh: "他們" } },
                            { textus: "facere", lemma: "facio", morphologia: "Verbo, infinitivo presente, activo", syntaxis: "Infinitivo (sujeto de 'liceat')", translatio: { es: "hacer", en: "to do", zh: "" } },
                            { textus: "liceat", lemma: "licet", morphologia: "Verbo, 3ª p. sg., presente, subjuntivo, activo, impersonal", syntaxis: "Verbo de la subordinada completiva", translatio: { es: "fuera lícito", en: "it might be permitted", zh: "准許" } }
                        ],
                        ordo_syntacticus: "Vbi Heluetii facti sunt certiores de eius aduentu, mittunt ad eum legatos nobilissimos ciuitatis (Nammeius et Verucloetius obtinebant principem locum cuius legationis), qui dicerent sibi esse in animo facere iter per prouinciam sine ullo maleficio, propterea quod haberent nullum aliud iter; [et] rogare ut liceat sibi facere id eius uoluntate.",
                        notae: "Oración muy compleja. 'qui dicerent' es una final de relativo. Dentro de ella, en estilo indirecto, se encuentra la infinitiva 'sibi esse...', la causal 'quod haberent' (en subjuntivo por estar en estilo indirecto) y la completiva 'ut liceat'. 'Rogare' funciona como un infinitivo histórico, dando agilidad a la narración.",
                        translationes: {
                            es: "Cuando los helvecios fueron informados de su llegada, le envían los más nobles legados de la ciudad, de cuya legación Nameyo y Veruclecio ocupaban el lugar principal, para que dijeran que tenían la intención de hacer el viaje por la provincia sin ningún daño, porque no tenían ningún otro camino; (y) para pedir que, con su consentimiento, les fuera lícito hacerlo.",
                            en: "When the Helvetii were informed of his arrival, they sent the most noble legates of their state to him, a legation of which Nammeius and Verucloetius held the chief position, to say that it was their intention to make the journey through the province without any mischief, because they had no other route; (and) to ask that it might be permitted for them to do this with his consent.",
                            zh: "赫爾維蒂人得知他抵達的消息後，便派遣了國中最尊貴的使者去見他，其中南梅烏斯和維魯克洛提烏斯是使團的首領。他們奉命前去說明，他們打算無害地通過行省，因為他們沒有別的路線可走；並請求凱撒准許他們這樣做。"
                        }
                    },
                    {
                        id_orationis: 'o4',
                        original_lat: "Caesar, quod memoria tenebat L. Cassium consulem occisum exercitumque eius ab Heluetiis pulsum et sub iugum missum, concedendum non putabat;",
                        verba: [
                            { textus: "Caesar", lemma: "Caesar", morphologia: "Sustantivo, masculino, nominativo singular", syntaxis: "Sujeto", translatio: { es: "César", en: "Caesar", zh: "凱撒" } },
                            { textus: "quod", lemma: "quod", morphologia: "Conjunción subordinante causal", syntaxis: "Nexo", translatio: { es: "porque", en: "because", zh: "因為" } },
                            { textus: "memoria", lemma: "memoria", morphologia: "Sustantivo, femenino, ablativo singular", syntaxis: "Ablativo de medio/instrumento con 'tenebat'", translatio: { es: "en la memoria", en: "in memory", zh: "" } },
                            { textus: "tenebat", lemma: "teneo", morphologia: "Verbo, 3ª p. sg., pretérito imperfecto, indicativo, activo", syntaxis: "Verbo de la subordinada causal", translatio: { es: "recordaba", en: "he held", zh: "記得" } },
                            { textus: "L.", lemma: "Lucium", morphologia: "Praenomen, masculino, acusativo singular", syntaxis: "Sujeto de la infinitiva 'occisum (esse)'", translatio: { es: "Lucio", en: "Lucius", zh: "盧基烏斯" } },
                            { textus: "Cassium", lemma: "Cassius", morphologia: "Cognomen, masculino, acusativo singular", syntaxis: "Sujeto de la infinitiva", translatio: { es: "Casio", en: "Cassius", zh: "卡西烏斯" } },
                            { textus: "consulem", lemma: "consul", morphologia: "Sustantivo, masculino, acusativo singular", syntaxis: "Aposición de 'Cassium'", translatio: { es: "el cónsul", en: "the consul", zh: "執政官" } },
                            { textus: "occisum", lemma: "occido", morphologia: "Verbo, participio perfecto pasivo, masculino, acusativo singular", syntaxis: "Verbo (con 'esse' elíptico) de la oración de infinitivo", translatio: { es: "había sido asesinado", en: "had been killed", zh: "曾被殺害" } },
                            { textus: "exercitumque", lemma: "exercitus-que", morphologia: "Sustantivo, masculino, acusativo singular + conjunción enclítica", syntaxis: "Sujeto de las infinitivas 'pulsum' y 'missum'", translatio: { es: "y su ejército", en: "and his army", zh: "其軍隊也" } },
                            { textus: "eius", lemma: "is", morphologia: "Pronombre, masculino, genitivo singular", syntaxis: "Atributo de 'exercitum'", translatio: { es: "", en: "", zh: "" } },
                            { textus: "ab", lemma: "ab", morphologia: "Preposición de ablativo", syntaxis: "Nexo", translatio: { es: "por", en: "by", zh: "被" } },
                            { textus: "Heluetiis", lemma: "Helvetii", morphologia: "Sustantivo, masculino, ablativo plural", syntaxis: "Complemento Agente", translatio: { es: "los helvecios", en: "the Helvetii", zh: "赫爾維蒂人" } },
                            { textus: "pulsum", lemma: "pello", morphologia: "Verbo, participio perfecto pasivo, masculino, acusativo singular", syntaxis: "Verbo (con 'esse' elíptico) de la oración de infinitivo", translatio: { es: "derrotado", en: "routed", zh: "擊敗" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "並" } },
                            { textus: "sub iugum", lemma: "sub iugum", morphologia: "Preposición + acusativo", syntaxis: "C.C. de Lugar", translatio: { es: "bajo el yugo", en: "under the yoke", zh: "從軛下通過的" } },
                            { textus: "missum", lemma: "mitto", morphologia: "Verbo, participio perfecto pasivo, masculino, acusativo singular", syntaxis: "Verbo (con 'esse' elíptico) de la oración de infinitivo", translatio: { es: "enviado", en: "sent", zh: "恥辱" } },
                            { textus: "concedendum", lemma: "concedo", morphologia: "Verbo, gerundivo, neutro, acusativo singular", syntaxis: "Parte del predicado de la infinitiva ('concedendum esse')", translatio: { es: "que debía concederlo", en: "that it should be granted", zh: "應應允" } },
                            { textus: "non", lemma: "non", morphologia: "Adverbio de negación", syntaxis: "Modificador verbal", translatio: { es: "no", en: "not", zh: "不" } },
                            { textus: "putabat", lemma: "puto", morphologia: "Verbo, 3ª p. sg., pretérito imperfecto, indicativo, activo", syntaxis: "Verbo principal", translatio: { es: "creía", en: "did think", zh: "認為" } }
                        ],
                        ordo_syntacticus: "Caesar non putabat concedendum [esse], quod tenebat memoria L. Cassium consulem [esse] occisum exercitumque eius [esse] pulsum ab Heluetiis et missum sub iugum.",
                        notae: "La oración de infinitivo 'concedendum non [esse]' es el objeto directo de 'putabat'. Es una construcción de gerundivo de obligación que expresa 'que no se debía conceder'. La causa de esto se explica con 'quod tenebat memoria' y otra serie de infinitivas.",
                        translationes: {
                            es: "César, porque recordaba que el cónsul Lucio Casio había sido asesinado y su ejército derrotado por los helvecios y enviado bajo el yugo, no creía que debía concederlo;",
                            en: "Caesar, because he held in memory that the consul Lucius Cassius had been killed and his army routed by the Helvetii and sent under the yoke, did not think that it should be granted;",
                            zh: "凱撒因為記得執政官盧基烏斯·卡西烏斯曾被赫爾維蒂人殺害，其軍隊也被擊敗並蒙受了從軛下通過的恥辱，所以認為不應應允；"
                        }
                    },
                    {
                        id_orationis: 'o5',
                        original_lat: "neque homines inimico animo data facultate per prouinciam itineris faciundi temperaturos ab iniuria et maleficio existimabat.",
                        verba: [
                            { textus: "neque", lemma: "neque", morphologia: "Conjunción copulativa negativa", syntaxis: "Nexo", translatio: { es: "y no", en: "nor", zh: "他也不" } },
                            { textus: "homines", lemma: "homo", morphologia: "Sustantivo, masculino, acusativo plural", syntaxis: "Sujeto de la infinitiva 'temperaturos (esse)'", translatio: { es: "hombres", en: "men", zh: "人" } },
                            { textus: "inimico", lemma: "inimicus", morphologia: "Adjetivo, masculino, ablativo singular", syntaxis: "Atributo de 'animo'", translatio: { es: "hostil", en: "hostile", zh: "敵意" } },
                            { textus: "animo", lemma: "animus", morphologia: "Sustantivo, masculino, ablativo singular", syntaxis: "Ablativo de cualidad", translatio: { es: "de espíritu", en: "of spirit", zh: "的" } },
                            { textus: "data", lemma: "do", morphologia: "Verbo, participio perfecto pasivo, femenino, ablativo singular", syntaxis: "Participio del ablativo absoluto", translatio: { es: "una vez dada", en: "having been given", zh: "一旦讓" } },
                            { textus: "facultate", lemma: "facultas", morphologia: "Sustantivo, femenino, ablativo singular", syntaxis: "Sustantivo del ablativo absoluto", translatio: { es: "la oportunidad", en: "the opportunity", zh: "這些...有機會" } },
                            { textus: "per", lemma: "per", morphologia: "Preposición de acusativo", syntaxis: "Nexo", translatio: { es: "a través de", en: "through", zh: "穿越" } },
                            { textus: "prouinciam", lemma: "provincia", morphologia: "Sustantivo, femenino, acusativo singular", syntaxis: "Complemento de 'per'", translatio: { es: "la provincia", en: "the province", zh: "行省" } },
                            { textus: "itineris", lemma: "iter", morphologia: "Sustantivo, neutro, genitivo singular", syntaxis: "Complemento del Nombre de 'faciundi'", translatio: { es: "de un viaje", en: "of a journey", zh: "" } },
                            { textus: "faciundi", lemma: "facio", morphologia: "Verbo, gerundivo, neutro, genitivo singular", syntaxis: "Atributo de 'itineris'", translatio: { es: "de hacer", en: "of making", zh: "" } },
                            { textus: "temperaturos", lemma: "tempero", morphologia: "Verbo, participio futuro activo, masculino, acusativo plural", syntaxis: "Verbo (con 'esse' elíptico) de la oración de infinitivo", translatio: { es: "se abstendrían", en: "would refrain", zh: "會" } },
                            { textus: "ab", lemma: "ab", morphologia: "Preposición de ablativo", syntaxis: "Nexo", translatio: { es: "de", en: "from", zh: "" } },
                            { textus: "iniuria", lemma: "iniuria", morphologia: "Sustantivo, femenino, ablativo singular", syntaxis: "Complemento de 'ab'", translatio: { es: "la injusticia", en: "injury", zh: "傷害" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "或" } },
                            { textus: "maleficio", lemma: "maleficium", morphologia: "Sustantivo, neutro, ablativo singular", syntaxis: "Complemento de 'ab'", translatio: { es: "el daño", en: "mischief", zh: "惡行" } },
                            { textus: "existimabat", lemma: "existimo", morphologia: "Verbo, 3ª p. sg., pretérito imperfecto, indicativo, activo", syntaxis: "Verbo principal", translatio: { es: "consideraba", en: "did he think", zh: "認為" } }
                        ],
                        ordo_syntacticus: "neque existimabat homines inimico animo temperaturos [esse] ab iniuria et maleficio, data facultate itineris faciundi per prouinciam.",
                        notae: "La oración principal es 'neque existimabat', cuyo objeto directo es la oración de infinitivo futuro 'homines...temperaturos [esse]'. Dentro de esta, hay un ablativo absoluto 'data facultate'. 'faciundi' es una forma arcaica de 'faciendi'.",
                        translationes: {
                            es: "y no consideraba que hombres de espíritu hostil, una vez dada la oportunidad de hacer un viaje a través de la provincia, se abstendrían de la injusticia y el daño.",
                            en: "nor did he think that men of hostile spirit, having been given the opportunity of making a journey through the province, would refrain from injury and mischief.",
                            zh: "他也不認為，一旦讓這些懷有敵意的人有機會穿越行省，他們會不做任何傷害或惡行。"
                        }
                    },
                    {
                        id_orationis: 'o6',
                        original_lat: "Tamen, ut spatium intercedere posset dum milites quos imperauerat conuenirent, legatis respondit diem se ad deliberandum sumpturum:",
                        verba: [
                            { textus: "Tamen", lemma: "tamen", morphologia: "Adverbio", syntaxis: "Conector adversativo", translatio: { es: "Sin embargo", en: "Nevertheless", zh: "然而" } },
                            { textus: "ut", lemma: "ut", morphologia: "Conjunción subordinante final", syntaxis: "Nexo", translatio: { es: "para que", en: "so that", zh: "為了" } },
                            { textus: "spatium", lemma: "spatium", morphologia: "Sustantivo, neutro, nominativo singular", syntaxis: "Sujeto de 'posset'", translatio: { es: "un lapso de tiempo", en: "a period of time", zh: "時間" } },
                            { textus: "intercedere", lemma: "intercedo", morphologia: "Verbo, infinitivo presente, activo", syntaxis: "Infinitivo (complemento de 'posset')", translatio: { es: "transcurrir", en: "pass", zh: "" } },
                            { textus: "posset", lemma: "possum", morphologia: "Verbo, 3ª p. sg., pretérito imperfecto, subjuntivo, activo", syntaxis: "Verbo de la subordinada final", translatio: { es: "pudiera", en: "could", zh: "爭取" } },
                            { textus: "dum", lemma: "dum", morphologia: "Conjunción subordinante temporal", syntaxis: "Nexo", translatio: { es: "mientras", en: "while", zh: "以便" } },
                            { textus: "milites", lemma: "miles", morphologia: "Sustantivo, masculino, nominativo plural", syntaxis: "Sujeto de 'conuenirent'", translatio: { es: "los soldados", en: "the soldiers", zh: "士兵" } },
                            { textus: "quos", lemma: "qui", morphologia: "Pronombre relativo, masculino, acusativo plural", syntaxis: "Objeto Directo de 'imperauerat' y Nexo", translatio: { es: "que", en: "whom", zh: "他所" } },
                            { textus: "imperauerat", lemma: "impero", morphologia: "Verbo, 3ª p. sg., pretérito pluscuamperfecto, indicativo, activo", syntaxis: "Verbo de la subordinada de relativo", translatio: { es: "había ordenado", en: "he had ordered", zh: "徵召的" } },
                            { textus: "conuenirent", lemma: "convenio", morphologia: "Verbo, 3ª p. pl., pretérito imperfecto, subjuntivo, activo", syntaxis: "Verbo de la subordinada temporal", translatio: { es: "se reunían", en: "were assembling", zh: "能夠集結" } },
                            { textus: "legatis", lemma: "legatus", morphologia: "Sustantivo, masculino, dativo plural", syntaxis: "Objeto Indirecto de 'respondit'", translatio: { es: "a los legados", en: "to the legates", zh: "他回答使者" } },
                            { textus: "respondit", lemma: "respondeo", morphologia: "Verbo, 3ª p. sg., perfecto, indicativo, activo", syntaxis: "Verbo principal", translatio: { es: "respondió", en: "he replied", zh: "說" } },
                            { textus: "diem", lemma: "dies", morphologia: "Sustantivo, masculino, acusativo singular", syntaxis: "Objeto Directo de 'sumpturum (esse)'", translatio: { es: "un día", en: "a day", zh: "一天時間" } },
                            { textus: "se", lemma: "sui", morphologia: "Pronombre reflexivo, acusativo", syntaxis: "Sujeto de la infinitiva 'sumpturum (esse)'", translatio: { es: "que él", en: "that he", zh: "他" } },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición de acusativo", syntaxis: "Nexo", translatio: { es: "para", en: "to", zh: "來" } },
                            { textus: "deliberandum", lemma: "delibero", morphologia: "Verbo, gerundio, acusativo singular", syntaxis: "Complemento final de 'ad'", translatio: { es: "deliberar", en: "deliberate", zh: "考慮" } },
                            { textus: "sumpturum", lemma: "sumo", morphologia: "Verbo, participio futuro activo, masculino, acusativo singular", syntaxis: "Verbo (con 'esse' elíptico) de la oración de infinitivo", translatio: { es: "se tomaría", en: "would take", zh: "需要" } }
                        ],
                        ordo_syntacticus: "Tamen, ut spatium posset intercedere dum milites, quos imperauerat, conuenirent, respondit legatis se sumpturum [esse] diem ad deliberandum.",
                        notae: "La cláusula con 'dum' lleva el verbo en subjuntivo ('conuenirent') porque expresa una idea de expectación o propósito dentro de la cláusula final principal ('ut...posset').",
                        translationes: {
                            es: "Sin embargo, para que pudiera transcurrir un lapso de tiempo mientras se reunían los soldados que había ordenado, respondió a los legados que se tomaría un día para deliberar:",
                            en: "Nevertheless, so that a period of time could pass while the soldiers whom he had ordered were assembling, he replied to the legates that he would take a day to deliberate:",
                            zh: "然而，為了爭取時間，以便他所徵召的士兵能夠集結，他回答使者說，他需要一天時間來考慮："
                        }
                    },
                    {
                        id_orationis: 'o7',
                        original_lat: "si quid uellent, ad Id. Apr. reuerterentur.",
                        verba: [
                            { textus: "si", lemma: "si", morphologia: "Conjunción subordinante condicional", syntaxis: "Nexo", translatio: { es: "si", en: "if", zh: "如果" } },
                            { textus: "quid", lemma: "quis", morphologia: "Pronombre indefinido, neutro, acusativo singular", syntaxis: "Objeto Directo de 'uellent'", translatio: { es: "algo", en: "anything", zh: "有任何請求" } },
                            { textus: "uellent", lemma: "volo", morphologia: "Verbo, 3ª p. pl., pretérito imperfecto, subjuntivo, activo", syntaxis: "Verbo de la subordinada condicional", translatio: { es: "querían", en: "they wanted", zh: "他們" } },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición de acusativo", syntaxis: "Nexo", translatio: { es: "para", en: "on", zh: "在" } },
                            { textus: "Id.", lemma: "Idus", morphologia: "Sustantivo, femenino, acusativo plural (abreviado)", syntaxis: "Complemento de 'ad'", translatio: { es: "los Idus", en: "the Ides", zh: "伊杜節" } },
                            { textus: "Apr.", lemma: "Aprilis", morphologia: "Adjetivo, femenino, acusativo plural (abreviado)", syntaxis: "Atributo de 'Idus'", translatio: { es: "de Abril", en: "of April", zh: "四月的" } },
                            { textus: "reuerterentur", lemma: "revertor", morphologia: "Verbo, 3ª p. pl., pretérito imperfecto, subjuntivo, deponente", syntaxis: "Verbo principal (en estilo indirecto)", translatio: { es: "que regresaran", en: "they should return", zh: "那天回來" } }
                        ],
                        ordo_syntacticus: "reuerterentur ad Idus Apriles, si uellent quid.",
                        notae: "Esta es la conclusión de la respuesta de César en estilo indirecto. Representa una orden ('Revertimini!') en un período condicional. El subjuntivo imperfecto es necesario por la secuencia de tiempos con el verbo principal en pasado ('respondit').",
                        translationes: {
                            es: "si algo querían, que regresaran para los Idus de Abril.",
                            en: "if they wanted anything, they should return on the Ides of April.",
                            zh: "如果他們有任何請求，就在四月的伊杜節那天回來。"
                        }
                    }
                ]
            }
        ]
    }
};

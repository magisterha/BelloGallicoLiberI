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
                            { textus: "Caesari", lemma: "Caesar", morphologia: "Sustantivo, masculino, dativo singular", syntaxis: "Objeto Indirecto" },
                            { textus: "cum", lemma: "cum", morphologia: "Conjunción subordinante (cum histórico)", syntaxis: "Nexo" },
                            { textus: "id", lemma: "is", morphologia: "Pronombre, neutro, nominativo singular", syntaxis: "Sujeto de 'nuntiatum esset'" },
                            { textus: "nuntiatum esset", lemma: "nuntio", morphologia: "Verbo, 3ª p. sg., pretérito pluscuamperfecto, subjuntivo, pasivo", syntaxis: "Verbo de la subordinada" },
                            { textus: "eos", lemma: "is", morphologia: "Pronombre, masculino, acusativo plural", syntaxis: "Sujeto de la infinitiva 'conari'" },
                            { textus: "per", lemma: "per", morphologia: "Preposición de acusativo", syntaxis: "Nexo" },
                            { textus: "prouinciam", lemma: "provincia", morphologia: "Sustantivo, femenino, acusativo singular", syntaxis: "Complemento de 'per'" },
                            { textus: "nostram", lemma: "noster", morphologia: "Adjetivo posesivo, femenino, acusativo singular", syntaxis: "Atributo de 'prouinciam'" },
                            { textus: "iter", lemma: "iter", morphologia: "Sustantivo, neutro, acusativo singular", syntaxis: "Objeto Directo de 'facere'" },
                            { textus: "facere", lemma: "facio", morphologia: "Verbo, infinitivo presente, activo", syntaxis: "Infinitivo (complemento de 'conari')" },
                            { textus: "conari", lemma: "conor", morphologia: "Verbo, infinitivo presente, deponente", syntaxis: "Verbo de la oración de infinitivo" },
                            { textus: "maturat", lemma: "maturo", morphologia: "Verbo, 3ª p. sg., presente, indicativo, activo", syntaxis: "Verbo principal" },
                            { textus: "ab", lemma: "ab", morphologia: "Preposición de ablativo", syntaxis: "Nexo" },
                            { textus: "urbe", lemma: "urbs", morphologia: "Sustantivo, femenino, ablativo singular", syntaxis: "Complemento de 'ab'" },
                            { textus: "proficisci", lemma: "proficiscor", morphologia: "Verbo, infinitivo presente, deponente", syntaxis: "Infinitivo (complemento de 'maturat')" },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo" },
                            { textus: "quam maximis", lemma: "quam maximus", morphologia: "Adverbio + Adjetivo superlativo, neutro, ablativo plural", syntaxis: "Modificador de 'itineribus' (valor intensivo)" },
                            { textus: "potest", lemma: "possum", morphologia: "Verbo, 3ª p. sg., presente, indicativo, activo", syntaxis: "Parte de la locución 'quam...potest'" },
                            { textus: "itineribus", lemma: "iter", morphologia: "Sustantivo, neutro, ablativo plural", syntaxis: "C.C. de Modo/Medio" },
                            { textus: "in", lemma: "in", morphologia: "Preposición de acusativo", syntaxis: "Nexo" },
                            { textus: "Galliam", lemma: "Gallia", morphologia: "Sustantivo, femenino, acusativo singular", syntaxis: "Complemento de 'in'" },
                            { textus: "ulteriorem", lemma: "ulterior", morphologia: "Adjetivo comparativo, femenino, acusativo singular", syntaxis: "Atributo de 'Galliam'" },
                            { textus: "contendit", lemma: "contendo", morphologia: "Verbo, 3ª p. sg., presente, indicativo, activo", syntaxis: "Verbo principal (coordinado)" },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo" },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición de acusativo", syntaxis: "Nexo" },
                            { textus: "Genauam", lemma: "Genava", morphologia: "Sustantivo, femenino, acusativo singular", syntaxis: "Complemento de 'ad'" },
                            { textus: "peruenit", lemma: "pervenio", morphologia: "Verbo, 3ª p. sg., presente (histórico) o perfecto, indicativo, activo", syntaxis: "Verbo principal (coordinado)" }
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
                            { textus: "Prouinciae", lemma: "provincia", morphologia: "Sustantivo, femenino, dativo singular", syntaxis: "Objeto Indirecto de 'imperat'" },
                            { textus: "toti", lemma: "totus", morphologia: "Adjetivo, femenino, dativo singular", syntaxis: "Atributo de 'Prouinciae'" },
                            { textus: "quam maximum", lemma: "quam maximus", morphologia: "Adverbio + Adjetivo superlativo, masculino, acusativo singular", syntaxis: "Modificador de 'numerum' (valor intensivo)" },
                            { textus: "potest", lemma: "possum", morphologia: "Verbo, 3ª p. sg., presente, indicativo, activo", syntaxis: "Parte de la locución 'quam...potest'" },
                            { textus: "militum", lemma: "miles", morphologia: "Sustantivo, masculino, genitivo plural", syntaxis: "Complemento del Nombre (partitivo) de 'numerum'" },
                            { textus: "numerum", lemma: "numerus", morphologia: "Sustantivo, masculino, acusativo singular", syntaxis: "Objeto Directo de 'imperat'" },
                            { textus: "imperat", lemma: "impero", morphologia: "Verbo, 3ª p. sg., presente, indicativo, activo", syntaxis: "Verbo principal" },
                            { textus: "erat", lemma: "sum", morphologia: "Verbo, 3ª p. sg., pretérito imperfecto, indicativo, activo", syntaxis: "Verbo (en paréntesis)" },
                            { textus: "omnino", lemma: "omnino", morphologia: "Adverbio", syntaxis: "Modificador circunstancial" },
                            { textus: "in", lemma: "in", morphologia: "Preposición de ablativo", syntaxis: "Nexo" },
                            { textus: "Gallia", lemma: "Gallia", morphologia: "Sustantivo, femenino, ablativo singular", syntaxis: "Complemento de 'in'" },
                            { textus: "ulteriore", lemma: "ulterior", morphologia: "Adjetivo comparativo, femenino, ablativo singular", syntaxis: "Atributo de 'Gallia'" },
                            { textus: "legio", lemma: "legio", morphologia: "Sustantivo, femenino, nominativo singular", syntaxis: "Sujeto de 'erat'" },
                            { textus: "una", lemma: "unus", morphologia: "Adjetivo numeral, femenino, nominativo singular", syntaxis: "Atributo de 'legio'" },
                            { textus: "pontem", lemma: "pons", morphologia: "Sustantivo, masculino, acusativo singular", syntaxis: "Sujeto de la infinitiva 'rescindi'" },
                            { textus: "qui", lemma: "qui", morphologia: "Pronombre relativo, masculino, nominativo singular", syntaxis: "Sujeto de 'erat' y Nexo" },
                            { textus: "erat", lemma: "sum", morphologia: "Verbo, 3ª p. sg., pretérito imperfecto, indicativo, activo", syntaxis: "Verbo de la subordinada de relativo" },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición de acusativo", syntaxis: "Nexo" },
                            { textus: "Genauam", lemma: "Genava", morphologia: "Sustantivo, femenino, acusativo singular", syntaxis: "Complemento de 'ad'" },
                            { textus: "iubet", lemma: "iubeo", morphologia: "Verbo, 3ª p. sg., presente, indicativo, activo", syntaxis: "Verbo principal" },
                            { textus: "rescindi", lemma: "rescindo", morphologia: "Verbo, infinitivo presente, pasivo", syntaxis: "Verbo de la oración de infinitivo" }
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
                            { textus: "Vbi", lemma: "ubi", morphologia: "Conjunción subordinante temporal", syntaxis: "Nexo" },
                            { textus: "de", lemma: "de", morphologia: "Preposición de ablativo", syntaxis: "Nexo" },
                            { textus: "eius", lemma: "is", morphologia: "Pronombre, masculino, genitivo singular", syntaxis: "Atributo de 'aduentu'" },
                            { textus: "aduentu", lemma: "adventus", morphologia: "Sustantivo, masculino, ablativo singular", syntaxis: "Complemento de 'de'" },
                            { textus: "Heluetii", lemma: "Helvetii", morphologia: "Sustantivo, masculino, nominativo plural", syntaxis: "Sujeto" },
                            { textus: "certiores", lemma: "certus", morphologia: "Adjetivo comparativo, masculino, nominativo plural", syntaxis: "Atributo predicativo del sujeto" },
                            { textus: "facti sunt", lemma: "fio", morphologia: "Verbo, 3ª p. pl., perfecto, indicativo, semideponente", syntaxis: "Verbo de la subordinada ('ser informado')" },
                            { textus: "legatos", lemma: "legatus", morphologia: "Sustantivo, masculino, acusativo plural", syntaxis: "Objeto Directo" },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición de acusativo", syntaxis: "Nexo" },
                            { textus: "eum", lemma: "is", morphologia: "Pronombre, masculino, acusativo singular", syntaxis: "Complemento de 'ad'" },
                            { textus: "mittunt", lemma: "mitto", morphologia: "Verbo, 3ª p. pl., presente, indicativo, activo", syntaxis: "Verbo principal" },
                            { textus: "nobilissimos", lemma: "nobilis", morphologia: "Adjetivo superlativo, masculino, acusativo plural", syntaxis: "Aposición de 'legatos'" },
                            { textus: "ciuitatis", lemma: "civitas", morphologia: "Sustantivo, femenino, genitivo singular", syntaxis: "Complemento del Nombre de 'legatos'" },
                            { textus: "cuius", lemma: "qui", morphologia: "Pronombre relativo, femenino, genitivo singular", syntaxis: "Atributo de 'legationis' y Nexo" },
                            { textus: "legationis", lemma: "legatio", morphologia: "Sustantivo, femenino, genitivo singular", syntaxis: "Complemento del Nombre (posesivo)" },
                            { textus: "Nammeius", lemma: "Nammeius", morphologia: "Sustantivo, masculino, nominativo singular", syntaxis: "Sujeto" },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo" },
                            { textus: "Verucloetius", lemma: "Verucloetius", morphologia: "Sustantivo, masculino, nominativo singular", syntaxis: "Sujeto" },
                            { textus: "principem", lemma: "princeps", morphologia: "Adjetivo, masculino, acusativo singular", syntaxis: "Atributo de 'locum'" },
                            { textus: "locum", lemma: "locus", morphologia: "Sustantivo, masculino, acusativo singular", syntaxis: "Objeto Directo" },
                            { textus: "obtinebant", lemma: "obtineo", morphologia: "Verbo, 3ª p. pl., pretérito imperfecto, indicativo, activo", syntaxis: "Verbo de la subordinada de relativo" },
                            { textus: "qui", lemma: "qui", morphologia: "Pronombre relativo, masculino, nominativo plural", syntaxis: "Sujeto de 'dicerent' y Nexo" },
                            { textus: "dicerent", lemma: "dico", morphologia: "Verbo, 3ª p. pl., pretérito imperfecto, subjuntivo, activo", syntaxis: "Verbo de la subordinada de relativo (con valor final)" },
                            { textus: "sibi", lemma: "sui", morphologia: "Pronombre reflexivo, dativo", syntaxis: "Dativo posesivo en la infinitiva" },
                            { textus: "esse", lemma: "sum", morphologia: "Verbo, infinitivo presente", syntaxis: "Verbo de la oración de infinitivo" },
                            { textus: "in animo", lemma: "in animo", morphologia: "Preposición + ablativo", syntaxis: "Locución adverbial ('tener la intención')" },
                            { textus: "sine", lemma: "sine", morphologia: "Preposición de ablativo", syntaxis: "Nexo" },
                            { textus: "ullo", lemma: "ullus", morphologia: "Adjetivo, neutro, ablativo singular", syntaxis: "Atributo de 'maleficio'" },
                            { textus: "maleficio", lemma: "maleficium", morphologia: "Sustantivo, neutro, ablativo singular", syntaxis: "Complemento de 'sine'" },
                            { textus: "iter", lemma: "iter", morphologia: "Sustantivo, neutro, acusativo singular", syntaxis: "Objeto Directo de 'facere'" },
                            { textus: "per", lemma: "per", morphologia: "Preposición de acusativo", syntaxis: "Nexo" },
                            { textus: "prouinciam", lemma: "provincia", morphologia: "Sustantivo, femenino, acusativo singular", syntaxis: "Complemento de 'per'" },
                            { textus: "facere", lemma: "facio", morphologia: "Verbo, infinitivo presente, activo", syntaxis: "Infinitivo (sujeto de 'esse in animo')" },
                            { textus: "propterea", lemma: "propterea", morphologia: "Adverbio", syntaxis: "Nexo causal" },
                            { textus: "quod", lemma: "quod", morphologia: "Conjunción subordinante causal", syntaxis: "Nexo" },
                            { textus: "aliud", lemma: "alius", morphologia: "Adjetivo, neutro, acusativo singular", syntaxis: "Atributo de 'iter'" },
                            { textus: "iter", lemma: "iter", morphologia: "Sustantivo, neutro, acusativo singular", syntaxis: "Objeto Directo de 'haberent'" },
                            { textus: "haberent", lemma: "habeo", morphologia: "Verbo, 3ª p. pl., pretérito imperfecto, subjuntivo, activo", syntaxis: "Verbo de la subordinada causal" },
                            { textus: "nullum", lemma: "nullus", morphologia: "Adjetivo, neutro, acusativo singular", syntaxis: "Atributo predicativo de 'iter'" },
                            { textus: "rogare", lemma: "rogo", morphologia: "Verbo, infinitivo presente, activo", syntaxis: "Infinitivo histórico (o dependiente de 'dicerent')" },
                            { textus: "ut", lemma: "ut", morphologia: "Conjunción subordinante", syntaxis: "Nexo (completivo)" },
                            { textus: "eius", lemma: "is", morphologia: "Pronombre, masculino, genitivo singular", syntaxis: "Atributo de 'uoluntate'" },
                            { textus: "uoluntate", lemma: "voluntas", morphologia: "Sustantivo, femenino, ablativo singular", syntaxis: "C.C. de Causa/Modo" },
                            { textus: "id", lemma: "is", morphologia: "Pronombre, neutro, acusativo singular", syntaxis: "Objeto Directo de 'facere'" },
                            { textus: "sibi", lemma: "sui", morphologia: "Pronombre reflexivo, dativo", syntaxis: "Objeto Indirecto" },
                            { textus: "facere", lemma: "facio", morphologia: "Verbo, infinitivo presente, activo", syntaxis: "Infinitivo (sujeto de 'liceat')" },
                            { textus: "liceat", lemma: "licet", morphologia: "Verbo, 3ª p. sg., presente, subjuntivo, activo, impersonal", syntaxis: "Verbo de la subordinada completiva" }
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
                            { textus: "Caesar", lemma: "Caesar", morphologia: "Sustantivo, masculino, nominativo singular", syntaxis: "Sujeto" },
                            { textus: "quod", lemma: "quod", morphologia: "Conjunción subordinante causal", syntaxis: "Nexo" },
                            { textus: "memoria", lemma: "memoria", morphologia: "Sustantivo, femenino, ablativo singular", syntaxis: "Ablativo de medio/instrumento con 'tenebat'" },
                            { textus: "tenebat", lemma: "teneo", morphologia: "Verbo, 3ª p. sg., pretérito imperfecto, indicativo, activo", syntaxis: "Verbo de la subordinada causal" },
                            { textus: "L.", lemma: "Lucium", morphologia: "Praenomen, masculino, acusativo singular", syntaxis: "Sujeto de la infinitiva 'occisum (esse)'" },
                            { textus: "Cassium", lemma: "Cassius", morphologia: "Cognomen, masculino, acusativo singular", syntaxis: "Sujeto de la infinitiva" },
                            { textus: "consulem", lemma: "consul", morphologia: "Sustantivo, masculino, acusativo singular", syntaxis: "Aposición de 'Cassium'" },
                            { textus: "occisum", lemma: "occido", morphologia: "Verbo, participio perfecto pasivo, masculino, acusativo singular", syntaxis: "Verbo (con 'esse' elíptico) de la oración de infinitivo" },
                            { textus: "exercitumque", lemma: "exercitus-que", morphologia: "Sustantivo, masculino, acusativo singular + conjunción enclítica", syntaxis: "Sujeto de las infinitivas 'pulsum' y 'missum'" },
                            { textus: "eius", lemma: "is", morphologia: "Pronombre, masculino, genitivo singular", syntaxis: "Atributo de 'exercitum'" },
                            { textus: "ab", lemma: "ab", morphologia: "Preposición de ablativo", syntaxis: "Nexo" },
                            { textus: "Heluetiis", lemma: "Helvetii", morphologia: "Sustantivo, masculino, ablativo plural", syntaxis: "Complemento Agente" },
                            { textus: "pulsum", lemma: "pello", morphologia: "Verbo, participio perfecto pasivo, masculino, acusativo singular", syntaxis: "Verbo (con 'esse' elíptico) de la oración de infinitivo" },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo" },
                            { textus: "sub iugum", lemma: "sub iugum", morphologia: "Preposición + acusativo", syntaxis: "C.C. de Lugar" },
                            { textus: "missum", lemma: "mitto", morphologia: "Verbo, participio perfecto pasivo, masculino, acusativo singular", syntaxis: "Verbo (con 'esse' elíptico) de la oración de infinitivo" },
                            { textus: "concedendum", lemma: "concedo", morphologia: "Verbo, gerundivo, neutro, acusativo singular", syntaxis: "Parte del predicado de la infinitiva ('concedendum esse')" },
                            { textus: "non", lemma: "non", morphologia: "Adverbio de negación", syntaxis: "Modificador verbal" },
                            { textus: "putabat", lemma: "puto", morphologia: "Verbo, 3ª p. sg., pretérito imperfecto, indicativo, activo", syntaxis: "Verbo principal" }
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
                            { textus: "neque", lemma: "neque", morphologia: "Conjunción copulativa negativa", syntaxis: "Nexo" },
                            { textus: "homines", lemma: "homo", morphologia: "Sustantivo, masculino, acusativo plural", syntaxis: "Sujeto de la infinitiva 'temperaturos (esse)'" },
                            { textus: "inimico", lemma: "inimicus", morphologia: "Adjetivo, masculino, ablativo singular", syntaxis: "Atributo de 'animo'" },
                            { textus: "animo", lemma: "animus", morphologia: "Sustantivo, masculino, ablativo singular", syntaxis: "Ablativo de cualidad" },
                            { textus: "data", lemma: "do", morphologia: "Verbo, participio perfecto pasivo, femenino, ablativo singular", syntaxis: "Participio del ablativo absoluto" },
                            { textus: "facultate", lemma: "facultas", morphologia: "Sustantivo, femenino, ablativo singular", syntaxis: "Sustantivo del ablativo absoluto" },
                            { textus: "per", lemma: "per", morphologia: "Preposición de acusativo", syntaxis: "Nexo" },
                            { textus: "prouinciam", lemma: "provincia", morphologia: "Sustantivo, femenino, acusativo singular", syntaxis: "Complemento de 'per'" },
                            { textus: "itineris", lemma: "iter", morphologia: "Sustantivo, neutro, genitivo singular", syntaxis: "Complemento del Nombre de 'faciundi'" },
                            { textus: "faciundi", lemma: "facio", morphologia: "Verbo, gerundivo, neutro, genitivo singular", syntaxis: "Atributo de 'itineris'" },
                            { textus: "temperaturos", lemma: "tempero", morphologia: "Verbo, participio futuro activo, masculino, acusativo plural", syntaxis: "Verbo (con 'esse' elíptico) de la oración de infinitivo" },
                            { textus: "ab", lemma: "ab", morphologia: "Preposición de ablativo", syntaxis: "Nexo" },
                            { textus: "iniuria", lemma: "iniuria", morphologia: "Sustantivo, femenino, ablativo singular", syntaxis: "Complemento de 'ab'" },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo" },
                            { textus: "maleficio", lemma: "maleficium", morphologia: "Sustantivo, neutro, ablativo singular", syntaxis: "Complemento de 'ab'" },
                            { textus: "existimabat", lemma: "existimo", morphologia: "Verbo, 3ª p. sg., pretérito imperfecto, indicativo, activo", syntaxis: "Verbo principal" }
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
                            { textus: "Tamen", lemma: "tamen", morphologia: "Adverbio", syntaxis: "Conector adversativo" },
                            { textus: "ut", lemma: "ut", morphologia: "Conjunción subordinante final", syntaxis: "Nexo" },
                            { textus: "spatium", lemma: "spatium", morphologia: "Sustantivo, neutro, nominativo singular", syntaxis: "Sujeto de 'posset'" },
                            { textus: "intercedere", lemma: "intercedo", morphologia: "Verbo, infinitivo presente, activo", syntaxis: "Infinitivo (complemento de 'posset')" },
                            { textus: "posset", lemma: "possum", morphologia: "Verbo, 3ª p. sg., pretérito imperfecto, subjuntivo, activo", syntaxis: "Verbo de la subordinada final" },
                            { textus: "dum", lemma: "dum", morphologia: "Conjunción subordinante temporal", syntaxis: "Nexo" },
                            { textus: "milites", lemma: "miles", morphologia: "Sustantivo, masculino, nominativo plural", syntaxis: "Sujeto de 'conuenirent'" },
                            { textus: "quos", lemma: "qui", morphologia: "Pronombre relativo, masculino, acusativo plural", syntaxis: "Objeto Directo de 'imperauerat' y Nexo" },
                            { textus: "imperauerat", lemma: "impero", morphologia: "Verbo, 3ª p. sg., pretérito pluscuamperfecto, indicativo, activo", syntaxis: "Verbo de la subordinada de relativo" },
                            { textus: "conuenirent", lemma: "convenio", morphologia: "Verbo, 3ª p. pl., pretérito imperfecto, subjuntivo, activo", syntaxis: "Verbo de la subordinada temporal" },
                            { textus: "legatis", lemma: "legatus", morphologia: "Sustantivo, masculino, dativo plural", syntaxis: "Objeto Indirecto de 'respondit'" },
                            { textus: "respondit", lemma: "respondeo", morphologia: "Verbo, 3ª p. sg., perfecto, indicativo, activo", syntaxis: "Verbo principal" },
                            { textus: "diem", lemma: "dies", morphologia: "Sustantivo, masculino, acusativo singular", syntaxis: "Objeto Directo de 'sumpturum (esse)'" },
                            { textus: "se", lemma: "sui", morphologia: "Pronombre reflexivo, acusativo", syntaxis: "Sujeto de la infinitiva 'sumpturum (esse)'" },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición de acusativo", syntaxis: "Nexo" },
                            { textus: "deliberandum", lemma: "delibero", morphologia: "Verbo, gerundio, acusativo singular", syntaxis: "Complemento final de 'ad'" },
                            { textus: "sumpturum", lemma: "sumo", morphologia: "Verbo, participio futuro activo, masculino, acusativo singular", syntaxis: "Verbo (con 'esse' elíptico) de la oración de infinitivo" }
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
                            { textus: "si", lemma: "si", morphologia: "Conjunción subordinante condicional", syntaxis: "Nexo" },
                            { textus: "quid", lemma: "quis", morphologia: "Pronombre indefinido, neutro, acusativo singular", syntaxis: "Objeto Directo de 'uellent'" },
                            { textus: "uellent", lemma: "volo", morphologia: "Verbo, 3ª p. pl., pretérito imperfecto, subjuntivo, activo", syntaxis: "Verbo de la subordinada condicional" },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición de acusativo", syntaxis: "Nexo" },
                            { textus: "Id.", lemma: "Idus", morphologia: "Sustantivo, femenino, acusativo plural (abreviado)", syntaxis: "Complemento de 'ad'" },
                            { textus: "Apr.", lemma: "Aprilis", morphologia: "Adjetivo, femenino, acusativo plural (abreviado)", syntaxis: "Atributo de 'Idus'" },
                            { textus: "reuerterentur", lemma: "revertor", morphologia: "Verbo, 3ª p. pl., pretérito imperfecto, subjuntivo, deponente", syntaxis: "Verbo principal (en estilo indirecto)" }
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

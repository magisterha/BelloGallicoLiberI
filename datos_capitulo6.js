const corpus = {
    titulus_principalis: "De Bello Gallico, I, 6",
    auctor: "C. Iulius Caesar",
    titulus_secundarius: {
        es: "Las dos rutas para salir del territorio helvecio",
        en: "The two routes out of the Helvetian territory",
        zh: "離開赫爾維蒂領土的兩條路線"
    },
    introductio: {
        es: {
            titulus: "Introducción al Capítulo 6",
            contentus: `<p>En este capítulo, César describe detalladamente las dos únicas rutas por las que los helvecios podían abandonar su territorio. Una, a través de los sécuanos, era extremadamente estrecha y peligrosa, fácilmente defendible por unos pocos. La otra, a través de la provincia romana, era mucho más fácil. Los helvecios, confiando en su capacidad para persuadir o forzar a los alóbroges, deciden prepararse para la partida y fijan una fecha para reunirse todos en la ribera del Ródano.</p>`
        },
        en: {
            titulus: "Introduction to Chapter 6",
            contentus: `<p>In this chapter, Caesar describes in detail the only two routes by which the Helvetii could leave their territory. One, through the Sequani, was extremely narrow and dangerous, easily defended by a few. The other, through the Roman province, was much easier. The Helvetii, confident in their ability to persuade or force the Allobroges, decide to prepare for their departure and set a date to all meet on the bank of the Rhone.</p>`
        },
        zh: {
            titulus: "第 6 章介紹",
            contentus: `<p>在本章中，凱撒詳細描述了赫爾維蒂人離開其領土僅有的兩條路線。一條是穿過塞夸尼人的領地，極為狹窄和危險，少數人便能輕易防守。另一條則穿過羅馬行省，要容易得多。赫爾維蒂人相信他們能夠說服或強迫阿洛布羅基人，因此決定準備出發，並確定了一個全體在羅納河畔集會的日期。</p>`
        }
    },
    textus: {
        id: 6,
        capitula: [
            {
                id_capituli: 6,
                orationes: [
                    {
                        id_orationis: 'o1',
                        original_lat: "Erant omnino itinera duo, quibus itineribus domo exire possent:",
                        verba: [
                            { textus: "Erant", lemma: "sum", morphologia: "Verbo, 3ª p. pl., pretérito imperfecto, indicativo, activo", syntaxis: "Verbo principal" },
                            { textus: "omnino", lemma: "omnino", morphologia: "Adverbio", syntaxis: "Modificador circunstancial" },
                            { textus: "itinera", lemma: "iter", morphologia: "Sustantivo, neutro, nominativo/acusativo plural", syntaxis: "Sujeto" },
                            { textus: "duo", lemma: "duo", morphologia: "Adjetivo numeral, neutro, nominativo/acusativo plural", syntaxis: "Atributo de 'itinera'" },
                            { textus: "quibus", lemma: "qui", morphologia: "Pronombre relativo, neutro, ablativo plural", syntaxis: "Nexo y C.C. de lugar (por donde)" },
                            { textus: "itineribus", lemma: "iter", morphologia: "Sustantivo, neutro, ablativo plural", syntaxis: "Aposición de 'quibus'" },
                            { textus: "domo", lemma: "domus", morphologia: "Sustantivo, femenino, ablativo singular (locativo)", syntaxis: "C.C. de lugar (de donde)" },
                            { textus: "exire", lemma: "exeo", morphologia: "Verbo, infinitivo presente, activo", syntaxis: "Infinitivo (parte de perífrasis verbal)" },
                            { textus: "possent", lemma: "possum", morphologia: "Verbo, 3ª p. pl., pretérito imperfecto, subjuntivo, activo", syntaxis: "Verbo de la subordinada de relativo" }
                        ],
                        ordo_syntacticus: "Omnino erant duo itinera, quibus itineribus possent exire domo.",
                        notae: "La oración de relativo 'quibus...possent' tiene un matiz final o consecutivo, explicando la naturaleza de los caminos.",
                        translationes: {
                            es: "Había en total dos caminos por los cuales podían salir de su tierra:",
                            en: "There were only two routes by which they could leave their home:",
                            zh: "總共只有兩條路，他們可以藉此離開家園："
                        }
                    },
                    {
                        id_orationis: 'o2',
                        original_lat: "unum per Sequanos, angustum et difficile, inter montem Iuram et flumen Rhodanum, uix qua singuli carri ducerentur;",
                        verba: [
                            { textus: "unum", lemma: "unus", morphologia: "Adjetivo numeral, neutro, acusativo singular", syntaxis: "Aposición de 'iter' (elíptico)" },
                            { textus: "per", lemma: "per", morphologia: "Preposición de acusativo", syntaxis: "Nexo" },
                            { textus: "Sequanos", lemma: "Sequani", morphologia: "Sustantivo, masculino, acusativo plural", syntaxis: "Complemento de 'per'" },
                            { textus: "angustum", lemma: "angustus", morphologia: "Adjetivo, neutro, acusativo singular", syntaxis: "Atributo de 'unum (iter)'" },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo" },
                            { textus: "difficile", lemma: "difficilis", morphologia: "Adjetivo, neutro, acusativo singular", syntaxis: "Atributo de 'unum (iter)'" },
                            { textus: "inter", lemma: "inter", morphologia: "Preposición de acusativo", syntaxis: "Nexo" },
                            { textus: "montem", lemma: "mons", morphologia: "Sustantivo, masculino, acusativo singular", syntaxis: "Complemento de 'inter'" },
                            { textus: "Iuram", lemma: "Iura", morphologia: "Sustantivo, masculino, acusativo singular", syntaxis: "Aposición de 'montem'" },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo" },
                            { textus: "flumen", lemma: "flumen", morphologia: "Sustantivo, neutro, acusativo singular", syntaxis: "Complemento de 'inter'" },
                            { textus: "Rhodanum", lemma: "Rhodanus", morphologia: "Sustantivo, masculino, acusativo singular", syntaxis: "Aposición de 'flumen'" },
                            { textus: "uix", lemma: "vix", morphologia: "Adverbio", syntaxis: "Modificador circunstancial" },
                            { textus: "qua", lemma: "qui", morphologia: "Adverbio relativo de lugar", syntaxis: "Nexo y C.C. de lugar" },
                            { textus: "singuli", lemma: "singuli", morphologia: "Adjetivo, masculino, nominativo plural", syntaxis: "Atributo de 'carri'" },
                            { textus: "carri", lemma: "carrus", morphologia: "Sustantivo, masculino, nominativo plural", syntaxis: "Sujeto" },
                            { textus: "ducerentur", lemma: "duco", morphologia: "Verbo, 3ª p. pl., pretérito imperfecto, subjuntivo, pasivo", syntaxis: "Verbo de la subordinada" }
                        ],
                        ordo_syntacticus: "(Iter) unum per Sequanos, (iter) angustum et difficile, inter montem Iuram et flumen Rhodanum, qua uix singuli carri ducerentur.",
                        notae: "La oración está elíptica, describiendo el primer camino ('unum iter'). La cláusula con 'qua' tiene un valor consecutivo ('tan estrecho que...').",
                        translationes: {
                            es: "uno a través de los sécuanos, estrecho y difícil, entre el monte Jura y el río Ródano, por donde apenas podrían pasar los carros de uno en uno;",
                            en: "one through the Sequani, narrow and difficult, between the Jura Mountain and the river Rhone, where carts could scarcely be led one at a time;",
                            zh: "一條是穿過塞夸尼人的領地，狹窄而艱難，位於侏羅山和羅納河之間，車輛幾乎只能一輛一輛地通過；"
                        }
                    },
                    {
                        id_orationis: 'o3',
                        original_lat: "mons autem altissimus inpendebat, ut facile perpauci prohibere possent;",
                        verba: [
                            { textus: "mons", lemma: "mons", morphologia: "Sustantivo, masculino, nominativo singular", syntaxis: "Sujeto" },
                            { textus: "autem", lemma: "autem", morphologia: "Conjunción adversativa", syntaxis: "Nexo" },
                            { textus: "altissimus", lemma: "altus", morphologia: "Adjetivo, masculino, nominativo singular, superlativo", syntaxis: "Atributo de 'mons'" },
                            { textus: "inpendebat", lemma: "impendeo", morphologia: "Verbo, 3ª p. sg., pretérito imperfecto, indicativo, activo", syntaxis: "Verbo principal" },
                            { textus: "ut", lemma: "ut", morphologia: "Conjunción subordinante", syntaxis: "Nexo (introduce subordinada consecutiva)" },
                            { textus: "facile", lemma: "facile", morphologia: "Adverbio", syntaxis: "Modificador de 'prohibere possent'" },
                            { textus: "perpauci", lemma: "perpauci", morphologia: "Adjetivo, masculino, nominativo plural", syntaxis: "Sujeto de 'possent'" },
                            { textus: "prohibere", lemma: "prohibeo", morphologia: "Verbo, infinitivo presente, activo", syntaxis: "Infinitivo (parte de perífrasis verbal)" },
                            { textus: "possent", lemma: "possum", morphologia: "Verbo, 3ª p. pl., pretérito imperfecto, subjuntivo, activo", syntaxis: "Verbo de la subordinada" }
                        ],
                        ordo_syntacticus: "Autem altissimus mons inpendebat, ut perpauci facile possent prohibere.",
                        notae: "La oración subordinada con 'ut' es consecutiva, indicando el resultado de la montaña que se cernía sobre el camino.",
                        translationes: {
                            es: "además, una montaña altísima se cernía sobre ellos, de modo que muy pocos podían fácilmente impedirles el paso;",
                            en: "moreover, a very high mountain overhung, so that a very few could easily block them;",
                            zh: "此外，一座極高的山脈懸於其上，因此極少數人便能輕易地阻止他們通過；"
                        }
                    },
                    {
                        id_orationis: 'o4',
                        original_lat: "alterum per prouinciam nostram, multo facilius atque expeditius, propterea quod inter fines Heluetiorum et Allobrogum, qui nuper pacati erant, Rhodanus fluit isque non nullis locis uado transitur.",
                        verba: [
                            { textus: "alterum", lemma: "alter", morphologia: "Pronombre/Adjetivo, neutro, acusativo singular", syntaxis: "Aposición de 'iter' (elíptico)" },
                            { textus: "per", lemma: "per", morphologia: "Preposición de acusativo", syntaxis: "Nexo" },
                            { textus: "prouinciam", lemma: "provincia", morphologia: "Sustantivo, femenino, acusativo singular", syntaxis: "Complemento de 'per'" },
                            { textus: "nostram", lemma: "noster", morphologia: "Adjetivo posesivo, femenino, acusativo singular", syntaxis: "Atributo de 'prouinciam'" },
                            { textus: "multo", lemma: "multus", morphologia: "Adverbio (ablativo de grado)", syntaxis: "Modificador de 'facilius' y 'expeditius'" },
                            { textus: "facilius", lemma: "facilis", morphologia: "Adjetivo/Adverbio comparativo, neutro", syntaxis: "Atributo de 'alterum (iter)'" },
                            { textus: "atque", lemma: "atque", morphologia: "Conjunción copulativa", syntaxis: "Nexo" },
                            { textus: "expeditius", lemma: "expeditus", morphologia: "Adjetivo/Adverbio comparativo, neutro", syntaxis: "Atributo de 'alterum (iter)'" },
                            { textus: "propterea", lemma: "propterea", morphologia: "Adverbio", syntaxis: "Nexo causal" },
                            { textus: "quod", lemma: "quod", morphologia: "Conjunción subordinante causal", syntaxis: "Nexo" },
                            { textus: "inter", lemma: "inter", morphologia: "Preposición de acusativo", syntaxis: "Nexo" },
                            { textus: "fines", lemma: "finis", morphologia: "Sustantivo, masculino, acusativo plural", syntaxis: "Complemento de 'inter'" },
                            { textus: "Heluetiorum", lemma: "Helvetii", morphologia: "Sustantivo, masculino, genitivo plural", syntaxis: "Complemento del Nombre de 'fines'" },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo" },
                            { textus: "Allobrogum", lemma: "Allobroges", morphologia: "Sustantivo, masculino, genitivo plural", syntaxis: "Complemento del Nombre de 'fines'" },
                            { textus: "qui", lemma: "qui", morphologia: "Pronombre relativo, masculino, nominativo plural", syntaxis: "Sujeto de 'erant' y nexo" },
                            { textus: "nuper", lemma: "nuper", morphologia: "Adverbio", syntaxis: "Modificador circunstancial" },
                            { textus: "pacati", lemma: "paco", morphologia: "Verbo, participio perfecto, pasivo, masculino, nominativo plural", syntaxis: "Atributo de 'qui'" },
                            { textus: "erant", lemma: "sum", morphologia: "Verbo, 3ª p. pl., pretérito pluscuamperfecto, indicativo, activo", syntaxis: "Verbo de la subordinada de relativo" },
                            { textus: "Rhodanus", lemma: "Rhodanus", morphologia: "Sustantivo, masculino, nominativo singular", syntaxis: "Sujeto de 'fluit'" },
                            { textus: "fluit", lemma: "fluo", morphologia: "Verbo, 3ª p. sg., presente, indicativo, activo", syntaxis: "Verbo de la subordinada causal" },
                            { textus: "isque", lemma: "is-que", morphologia: "Pronombre + conjunción, masculino, nominativo singular", syntaxis: "Sujeto de 'transitur' y nexo" },
                            { textus: "non", lemma: "non", morphologia: "Adverbio de negación", syntaxis: "Modificador de 'nullis'" },
                            { textus: "nullis", lemma: "nullus", morphologia: "Adjetivo, neutro, ablativo plural", syntaxis: "Atributo de 'locis' (non nullis = algunos)" },
                            { textus: "locis", lemma: "locus", morphologia: "Sustantivo, neutro, ablativo plural", syntaxis: "C.C. de lugar" },
                            { textus: "uado", lemma: "vadum", morphologia: "Sustantivo, neutro, ablativo singular", syntaxis: "C.C. de medio/modo" },
                            { textus: "transitur", lemma: "transeo", morphologia: "Verbo, 3ª p. sg., presente, indicativo, pasivo", syntaxis: "Verbo de la coordinada" }
                        ],
                        ordo_syntacticus: "(Iter) alterum per prouinciam nostram, multo facilius atque expeditius, propterea quod Rhodanus fluit inter fines Heluetiorum et Allobrogum, qui nuper pacati erant, isque transitur uado non nullis locis.",
                        notae: "Otra oración elíptica ('iter erat'). 'propterea quod' introduce una cláusula causal que explica por qué este segundo camino es más fácil.",
                        translationes: {
                            es: "el otro, a través de nuestra provincia, mucho más fácil y rápido, porque entre los territorios de los helvecios y los alóbroges, que habían sido recientemente pacificados, fluye el Ródano y este se cruza por un vado en algunos lugares.",
                            en: "the other, through our province, much easier and more expeditious, because the Rhone flows between the territories of the Helvetii and the Allobroges, who had recently been pacified, and it is crossed by a ford in several places.",
                            zh: "另一條路是穿過我們的行省，這條路要容易和便捷得多，因為羅納河流經赫爾維蒂人和最近剛被平定的阿洛布羅基人領土之間，並且在一些地方可以涉水而過。"
                        }
                    },
                    {
                        id_orationis: 'o5',
                        original_lat: "Extremum oppidum Allobrogum est proximumque Heluetiorum finibus Genaua.",
                        verba: [
                            { textus: "Extremum", lemma: "extremus", morphologia: "Adjetivo, neutro, nominativo singular", syntaxis: "Atributo de 'oppidum'" },
                            { textus: "oppidum", lemma: "oppidum", morphologia: "Sustantivo, neutro, nominativo singular", syntaxis: "Sujeto" },
                            { textus: "Allobrogum", lemma: "Allobroges", morphologia: "Sustantivo, masculino, genitivo plural", syntaxis: "Complemento del Nombre de 'oppidum'" },
                            { textus: "est", lemma: "sum", morphologia: "Verbo, 3ª p. sg., presente, indicativo, activo", syntaxis: "Cópula" },
                            { textus: "proximumque", lemma: "proximus-que", morphologia: "Adjetivo, neutro, nominativo singular, superlativo + conjunción enclítica", syntaxis: "Atributo de 'Genaua' y nexo" },
                            { textus: "Heluetiorum", lemma: "Helvetii", morphologia: "Sustantivo, masculino, genitivo plural", syntaxis: "Complemento del Nombre de 'finibus'" },
                            { textus: "finibus", lemma: "finis", morphologia: "Sustantivo, masculino, dativo plural", syntaxis: "Complemento de 'proximum'" },
                            { textus: "Genaua", lemma: "Genava", morphologia: "Sustantivo, femenino, nominativo singular", syntaxis: "Sujeto/Atributo" }
                        ],
                        ordo_syntacticus: "Genaua est extremum oppidum Allobrogum proximumque finibus Heluetiorum.",
                        notae: "Genaua es el sujeto. 'oppidum' y 'proximum' son atributos predicativos.",
                        translationes: {
                            es: "Ginebra es la última ciudad de los alóbroges y la más próxima al territorio de los helvecios.",
                            en: "Geneva is the last town of the Allobroges and the nearest to the territory of the Helvetii.",
                            zh: "日內瓦是阿洛布羅基人最遠的城鎮，也是最靠近赫爾維蒂人領土的地方。"
                        }
                    },
                    {
                        id_orationis: 'o6',
                        original_lat: "Ex eo oppido pons ad Heluetios pertinet.",
                        verba: [
                            { textus: "Ex", lemma: "ex", morphologia: "Preposición de ablativo", syntaxis: "Nexo" },
                            { textus: "eo", lemma: "is", morphologia: "Pronombre demostrativo, neutro, ablativo singular", syntaxis: "Atributo de 'oppido'" },
                            { textus: "oppido", lemma: "oppidum", morphologia: "Sustantivo, neutro, ablativo singular", syntaxis: "Complemento de 'Ex'" },
                            { textus: "pons", lemma: "pons", morphologia: "Sustantivo, masculino, nominativo singular", syntaxis: "Sujeto" },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición de acusativo", syntaxis: "Nexo" },
                            { textus: "Heluetios", lemma: "Helvetii", morphologia: "Sustantivo, masculino, acusativo plural", syntaxis: "Complemento de 'ad'" },
                            { textus: "pertinet", lemma: "pertineo", morphologia: "Verbo, 3ª p. sg., presente, indicativo, activo", syntaxis: "Verbo principal" }
                        ],
                        ordo_syntacticus: "Pons pertinet ex eo oppido ad Heluetios.",
                        notae: "",
                        translationes: {
                            es: "Desde esa ciudad un puente se extiende hasta los helvecios.",
                            en: "From that town a bridge extends to the Helvetii.",
                            zh: "從那座城鎮有一座橋通往赫爾維蒂人的地區。"
                        }
                    },
                    {
                        id_orationis: 'o7',
                        original_lat: "Allobrogibus sese uel persuasuros, quod nondum bono animo in populum Romanum uiderentur, existimabant, uel ui coacturos, ut per suos fines eos ire paterentur.",
                        verba: [
                            { textus: "Allobrogibus", lemma: "Allobroges", morphologia: "Sustantivo, masculino, dativo plural", syntaxis: "Objeto indirecto de 'persuasuros'" },
                            { textus: "sese", lemma: "sui", morphologia: "Pronombre reflexivo, acusativo", syntaxis: "Sujeto de la infinitiva" },
                            { textus: "uel", lemma: "vel", morphologia: "Conjunción disyuntiva", syntaxis: "Nexo" },
                            { textus: "persuasuros", lemma: "persuadeo", morphologia: "Verbo, participio futuro, activo, acusativo, masculino, plural", syntaxis: "Verbo (predicado) de la infinitiva" },
                            { textus: "quod", lemma: "quod", morphologia: "Conjunción subordinante causal", syntaxis: "Nexo" },
                            { textus: "nondum", lemma: "nondum", morphologia: "Adverbio", syntaxis: "Modificador circunstancial" },
                            { textus: "bono", lemma: "bonus", morphologia: "Adjetivo, masculino, ablativo singular", syntaxis: "Atributo de 'animo'" },
                            { textus: "animo", lemma: "animus", morphologia: "Sustantivo, masculino, ablativo singular", syntaxis: "C.C. de modo" },
                            { textus: "in", lemma: "in", morphologia: "Preposición de acusativo", syntaxis: "Nexo" },
                            { textus: "populum", lemma: "populus", morphologia: "Sustantivo, masculino, acusativo singular", syntaxis: "Complemento de 'in'" },
                            { textus: "Romanum", lemma: "Romanus", morphologia: "Adjetivo, masculino, acusativo singular", syntaxis: "Atributo de 'populum'" },
                            { textus: "uiderentur", lemma: "video", morphologia: "Verbo, 3ª p. pl., pretérito imperfecto, subjuntivo, pasivo", syntaxis: "Verbo de la subordinada causal" },
                            { textus: "existimabant", lemma: "existimo", morphologia: "Verbo, 3ª p. pl., pretérito imperfecto, indicativo, activo", syntaxis: "Verbo principal" },
                            { textus: "uel", lemma: "vel", morphologia: "Conjunción disyuntiva", syntaxis: "Nexo" },
                            { textus: "ui", lemma: "vis", morphologia: "Sustantivo, femenino, ablativo singular", syntaxis: "C.C. de instrumento" },
                            { textus: "coacturos", lemma: "cogo", morphologia: "Verbo, participio futuro, activo, acusativo, masculino, plural", syntaxis: "Verbo (predicado) de la infinitiva" },
                            { textus: "ut", lemma: "ut", morphologia: "Conjunción subordinante", syntaxis: "Nexo (introduce subordinada final)" },
                            { textus: "per", lemma: "per", morphologia: "Preposición de acusativo", syntaxis: "Nexo" },
                            { textus: "suos", lemma: "suus", morphologia: "Adjetivo posesivo, masculino, acusativo plural", syntaxis: "Atributo de 'fines'" },
                            { textus: "fines", lemma: "finis", morphologia: "Sustantivo, masculino, acusativo plural", syntaxis: "Complemento de 'per'" },
                            { textus: "eos", lemma: "is", morphologia: "Pronombre, masculino, acusativo plural", syntaxis: "Sujeto de la infinitiva 'ire'" },
                            { textus: "ire", lemma: "eo", morphologia: "Verbo, infinitivo presente, activo", syntaxis: "Verbo de la infinitiva" },
                            { textus: "paterentur", lemma: "patior", morphologia: "Verbo, 3ª p. pl., pretérito imperfecto, subjuntivo, deponente", syntaxis: "Verbo de la subordinada final" }
                        ],
                        ordo_syntacticus: "Existimabant sese uel persuasuros Allobrogibus (quod nondum uiderentur bono animo in populum Romanum) uel coacturos [eos] ui, ut paterentur eos ire per suos fines.",
                        notae: "La estructura principal es una oración de infinitivo con sujeto acusativo (sese) dependiente de 'existimabant'. Dentro, hay dos opciones introducidas por 'vel...vel'. 'persuasuros' y 'coacturos' son participios de futuro concertando con 'sese', con 'esse' elíptico.",
                        translationes: {
                            es: "Pensaban que, o bien persuadirían a los alóbroges, porque no parecían aún tener buenas disposiciones hacia el pueblo romano, o bien los obligarían por la fuerza a que les permitieran pasar por su territorio.",
                            en: "They thought that they would either persuade the Allobroges, because they did not yet seem well-disposed towards the Roman people, or they would compel them by force to allow them to go through their territory.",
                            zh: "他們認為，他們要麼能說服阿洛布羅基人，因為他們對羅馬人民似乎還沒有好感；要麼就用武力強迫他們，讓他們允許自己通過其領土。"
                        }
                    },
                    {
                        id_orationis: 'o8',
                        original_lat: "Omnibus rebus ab profectionem conparatis diem dicunt, qua die ad ripam Rhodani omnes conueniant.",
                        verba: [
                            { textus: "Omnibus", lemma: "omnis", morphologia: "Adjetivo, femenino, ablativo plural", syntaxis: "Atributo de 'rebus'" },
                            { textus: "rebus", lemma: "res", morphologia: "Sustantivo, femenino, ablativo plural", syntaxis: "Sujeto del ablativo absoluto" },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición de acusativo", syntaxis: "Nexo" },
                            { textus: "profectionem", lemma: "profectio", morphologia: "Sustantivo, femenino, acusativo singular", syntaxis: "Complemento de 'ad'" },
                            { textus: "conparatis", lemma: "comparo", morphologia: "Verbo, participio perfecto, pasivo, femenino, ablativo plural", syntaxis: "Verbo (predicado) del ablativo absoluto" },
                            { textus: "diem", lemma: "dies", morphologia: "Sustantivo, femenino, acusativo singular", syntaxis: "Objeto directo" },
                            { textus: "dicunt", lemma: "dico", morphologia: "Verbo, 3ª p. pl., presente, indicativo, activo", syntaxis: "Verbo principal" },
                            { textus: "qua", lemma: "qui", morphologia: "Pronombre relativo, femenino, ablativo singular", syntaxis: "Nexo y C.C. de tiempo" },
                            { textus: "die", lemma: "dies", morphologia: "Sustantivo, femenino, ablativo singular", syntaxis: "Aposición de 'qua'" },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición de acusativo", syntaxis: "Nexo" },
                            { textus: "ripam", lemma: "ripa", morphologia: "Sustantivo, femenino, acusativo singular", syntaxis: "Complemento de 'ad'" },
                            { textus: "Rhodani", lemma: "Rhodanus", morphologia: "Sustantivo, masculino, genitivo singular", syntaxis: "Complemento del Nombre de 'ripam'" },
                            { textus: "omnes", lemma: "omnis", morphologia: "Adjetivo, masculino, nominativo plural", syntaxis: "Sujeto de 'conueniant'" },
                            { textus: "conueniant", lemma: "convenio", morphologia: "Verbo, 3ª p. pl., presente, subjuntivo, activo", syntaxis: "Verbo de la subordinada de relativo" }
                        ],
                        ordo_syntacticus: "Omnibus rebus conparatis ad profectionem, dicunt diem, qua die omnes conueniant ad ripam Rhodani.",
                        notae: "La oración comienza con un ablativo absoluto. La cláusula de relativo con 'conueniant' en subjuntivo tiene un valor final, indicando el propósito de fijar la fecha.",
                        translationes: {
                            es: "Una vez preparadas todas las cosas para la partida, fijan un día en el cual todos se reúnan en la ribera del Ródano.",
                            en: "When all things were prepared for the departure, they set a day on which they should all assemble on the bank of the Rhone.",
                            zh: "為出發準備好一切後，他們確定了一個日期，以便全體人員在羅納河畔集會。"
                        }
                    },
                    {
                        id_orationis: 'o9',
                        original_lat: "Is dies erat a. d. V. Kal. Apr. L. Pisone A. Gabinio consulibus.",
                        verba: [
                            { textus: "Is", lemma: "is", morphologia: "Pronombre demostrativo, masculino, nominativo singular", syntaxis: "Atributo de 'dies'" },
                            { textus: "dies", lemma: "dies", morphologia: "Sustantivo, masculino, nominativo singular", syntaxis: "Sujeto" },
                            { textus: "erat", lemma: "sum", morphologia: "Verbo, 3ª p. sg., pretérito imperfecto, indicativo, activo", syntaxis: "Cópula" },
                            { textus: "a.", lemma: "ante", morphologia: "Preposición (abreviada)", syntaxis: "Parte de la datación" },
                            { textus: "d.", lemma: "diem", morphologia: "Sustantivo (abreviado)", syntaxis: "Parte de la datación" },
                            { textus: "V.", lemma: "quintum", morphologia: "Numeral (abreviado)", syntaxis: "Parte de la datación" },
                            { textus: "Kal.", lemma: "Kalendas", morphologia: "Sustantivo (abreviado)", syntaxis: "Parte de la datación" },
                            { textus: "Apr.", lemma: "Apriles", morphologia: "Adjetivo (abreviado)", syntaxis: "Parte de la datación" },
                            { textus: "L.", lemma: "Lucio", morphologia: "Praenomen, ablativo singular", syntaxis: "Sujeto del ablativo absoluto" },
                            { textus: "Pisone", lemma: "Piso", morphologia: "Cognomen, ablativo singular", syntaxis: "Sujeto del ablativo absoluto" },
                            { textus: "A.", lemma: "Aulo", morphologia: "Praenomen, ablativo singular", syntaxis: "Sujeto del ablativo absoluto" },
                            { textus: "Gabinio", lemma: "Gabinius", morphologia: "Cognomen, ablativo singular", syntaxis: "Sujeto del ablativo absoluto" },
                            { textus: "consulibus", lemma: "consul", morphologia: "Sustantivo, masculino, ablativo plural", syntaxis: "Aposición de 'Pisone' y 'Gabinio' (predicado del ablativo absoluto)" }
                        ],
                        ordo_syntacticus: "Is dies erat ante diem quintum Kalendas Apriles, Lucio Pisone (et) Aulo Gabinio consulibus.",
                        notae: "La fecha 'ante diem V Kalendas Apriles' significa 'el quinto día antes de las calendas de abril', que es el 28 de marzo. La datación del año se da con un ablativo absoluto, indicando quiénes eran los cónsules.",
                        translationes: {
                            es: "Ese día era el quinto antes de las calendas de abril, siendo cónsules Lucio Pisón y Aulo Gabinio.",
                            en: "That day was the fifth before the Kalends of April, during the consulship of Lucius Piso and Aulus Gabinius.",
                            zh: "那一天是四月一日前的第五天，當時的執政官是盧基烏斯·皮索和奧盧斯·加比尼烏斯。"
                        }
                    }
                ]
            }
        ]
    }
};

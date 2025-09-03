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
                            { textus: "Erant", lemma: "sum", morphologia: "Verbo, 3ª p. pl., pretérito imperfecto, indicativo, activo", syntaxis: "Verbo principal", translatio: { es: "Había", en: "There were", zh: "有" } },
                            { textus: "omnino", lemma: "omnino", morphologia: "Adverbio", syntaxis: "Modificador circunstancial", translatio: { es: "en total", en: "in all", zh: "總共" } },
                            { textus: "itinera", lemma: "iter", morphologia: "Sustantivo, neutro, nominativo/acusativo plural", syntaxis: "Sujeto", translatio: { es: "caminos", en: "routes", zh: "路" } },
                            { textus: "duo", lemma: "duo", morphologia: "Adjetivo numeral, neutro, nominativo/acusativo plural", syntaxis: "Atributo de 'itinera'", translatio: { es: "dos", en: "two", zh: "兩條" } },
                            { textus: "quibus", lemma: "qui", morphologia: "Pronombre relativo, neutro, ablativo plural", syntaxis: "Nexo y C.C. de lugar (por donde)", translatio: { es: "por los cuales", en: "by which", zh: "藉此" } },
                            { textus: "itineribus", lemma: "iter", morphologia: "Sustantivo, neutro, ablativo plural", syntaxis: "Aposición de 'quibus'", translatio: { es: "caminos", en: "routes", zh: "" } },
                            { textus: "domo", lemma: "domus", morphologia: "Sustantivo, femenino, ablativo singular (locativo)", syntaxis: "C.C. de lugar (de donde)", translatio: { es: "de su tierra", en: "from their home", zh: "離開家園" } },
                            { textus: "exire", lemma: "exeo", morphologia: "Verbo, infinitivo presente, activo", syntaxis: "Infinitivo (parte de perífrasis verbal)", translatio: { es: "salir", en: "leave", zh: "" } },
                            { textus: "possent", lemma: "possum", morphologia: "Verbo, 3ª p. pl., pretérito imperfecto, subjuntivo, activo", syntaxis: "Verbo de la subordinada de relativo", translatio: { es: "podían", en: "they could", zh: "他們可以" } }
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
                            { textus: "unum", lemma: "unus", morphologia: "Adjetivo numeral, neutro, acusativo singular", syntaxis: "Aposición de 'iter' (elíptico)", translatio: { es: "uno", en: "one", zh: "一條" } },
                            { textus: "per", lemma: "per", morphologia: "Preposición de acusativo", syntaxis: "Nexo", translatio: { es: "a través de", en: "through", zh: "穿過" } },
                            { textus: "Sequanos", lemma: "Sequani", morphologia: "Sustantivo, masculino, acusativo plural", syntaxis: "Complemento de 'per'", translatio: { es: "los sécuanos", en: "the Sequani", zh: "塞夸尼人的領地" } },
                            { textus: "angustum", lemma: "angustus", morphologia: "Adjetivo, neutro, acusativo singular", syntaxis: "Atributo de 'unum (iter)'", translatio: { es: "estrecho", en: "narrow", zh: "狹窄" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "而" } },
                            { textus: "difficile", lemma: "difficilis", morphologia: "Adjetivo, neutro, acusativo singular", syntaxis: "Atributo de 'unum (iter)'", translatio: { es: "difícil", en: "difficult", zh: "艱難" } },
                            { textus: "inter", lemma: "inter", morphologia: "Preposición de acusativo", syntaxis: "Nexo", translatio: { es: "entre", en: "between", zh: "位於" } },
                            { textus: "montem", lemma: "mons", morphologia: "Sustantivo, masculino, acusativo singular", syntaxis: "Complemento de 'inter'", translatio: { es: "el monte", en: "the Mountain", zh: "山" } },
                            { textus: "Iuram", lemma: "Iura", morphologia: "Sustantivo, masculino, acusativo singular", syntaxis: "Aposición de 'montem'", translatio: { es: "Jura", en: "Jura", zh: "侏羅" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "和" } },
                            { textus: "flumen", lemma: "flumen", morphologia: "Sustantivo, neutro, acusativo singular", syntaxis: "Complemento de 'inter'", translatio: { es: "el río", en: "the river", zh: "河" } },
                            { textus: "Rhodanum", lemma: "Rhodanus", morphologia: "Sustantivo, masculino, acusativo singular", syntaxis: "Aposición de 'flumen'", translatio: { es: "Ródano", en: "Rhone", zh: "羅納" } },
                            { textus: "uix", lemma: "vix", morphologia: "Adverbio", syntaxis: "Modificador circunstancial", translatio: { es: "apenas", en: "scarcely", zh: "幾乎" } },
                            { textus: "qua", lemma: "qui", morphologia: "Adverbio relativo de lugar", syntaxis: "Nexo y C.C. de lugar", translatio: { es: "por donde", en: "where", zh: "只能" } },
                            { textus: "singuli", lemma: "singuli", morphologia: "Adjetivo, masculino, nominativo plural", syntaxis: "Atributo de 'carri'", translatio: { es: "de uno en uno", en: "one at a time", zh: "一輛一輛地" } },
                            { textus: "carri", lemma: "carrus", morphologia: "Sustantivo, masculino, nominativo plural", syntaxis: "Sujeto", translatio: { es: "los carros", en: "carts", zh: "車輛" } },
                            { textus: "ducerentur", lemma: "duco", morphologia: "Verbo, 3ª p. pl., pretérito imperfecto, subjuntivo, pasivo", syntaxis: "Verbo de la subordinada", translatio: { es: "pudieran ser conducidos", en: "could be led", zh: "通過" } }
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
                            { textus: "mons", lemma: "mons", morphologia: "Sustantivo, masculino, nominativo singular", syntaxis: "Sujeto", translatio: { es: "una montaña", en: "a mountain", zh: "一座山脈" } },
                            { textus: "autem", lemma: "autem", morphologia: "Conjunción adversativa", syntaxis: "Nexo", translatio: { es: "además", en: "moreover", zh: "此外" } },
                            { textus: "altissimus", lemma: "altus", morphologia: "Adjetivo, masculino, nominativo singular, superlativo", syntaxis: "Atributo de 'mons'", translatio: { es: "altísima", en: "very high", zh: "極高的" } },
                            { textus: "inpendebat", lemma: "impendeo", morphologia: "Verbo, 3ª p. sg., pretérito imperfecto, indicativo, activo", syntaxis: "Verbo principal", translatio: { es: "se cernía", en: "overhung", zh: "懸於其上" } },
                            { textus: "ut", lemma: "ut", morphologia: "Conjunción subordinante", syntaxis: "Nexo (introduce subordinada consecutiva)", translatio: { es: "de modo que", en: "so that", zh: "因此" } },
                            { textus: "facile", lemma: "facile", morphologia: "Adverbio", syntaxis: "Modificador de 'prohibere possent'", translatio: { es: "fácilmente", en: "easily", zh: "輕易地" } },
                            { textus: "perpauci", lemma: "perpauci", morphologia: "Adjetivo, masculino, nominativo plural", syntaxis: "Sujeto de 'possent'", translatio: { es: "muy pocos", en: "a very few", zh: "極少數人" } },
                            { textus: "prohibere", lemma: "prohibeo", morphologia: "Verbo, infinitivo presente, activo", syntaxis: "Infinitivo (parte de perífrasis verbal)", translatio: { es: "impedir el paso", en: "block them", zh: "阻止他們通過" } },
                            { textus: "possent", lemma: "possum", morphologia: "Verbo, 3ª p. pl., pretérito imperfecto, subjuntivo, activo", syntaxis: "Verbo de la subordinada", translatio: { es: "podían", en: "could", zh: "便能" } }
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
                            { textus: "alterum", lemma: "alter", morphologia: "Pronombre/Adjetivo, neutro, acusativo singular", syntaxis: "Aposición de 'iter' (elíptico)", translatio: { es: "el otro", en: "the other", zh: "另一條路" } },
                            { textus: "per", lemma: "per", morphologia: "Preposición de acusativo", syntaxis: "Nexo", translatio: { es: "a través de", en: "through", zh: "穿過" } },
                            { textus: "prouinciam", lemma: "provincia", morphologia: "Sustantivo, femenino, acusativo singular", syntaxis: "Complemento de 'per'", translatio: { es: "la provincia", en: "the province", zh: "行省" } },
                            { textus: "nostram", lemma: "noster", morphologia: "Adjetivo posesivo, femenino, acusativo singular", syntaxis: "Atributo de 'prouinciam'", translatio: { es: "nuestra", en: "our", zh: "我們的" } },
                            { textus: "multo", lemma: "multus", morphologia: "Adverbio (ablativo de grado)", syntaxis: "Modificador de 'facilius' y 'expeditius'", translatio: { es: "mucho", en: "much", zh: "要...得多" } },
                            { textus: "facilius", lemma: "facilis", morphologia: "Adjetivo/Adverbio comparativo, neutro", syntaxis: "Atributo de 'alterum (iter)'", translatio: { es: "más fácil", en: "easier", zh: "容易" } },
                            { textus: "atque", lemma: "atque", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "和" } },
                            { textus: "expeditius", lemma: "expeditus", morphologia: "Adjetivo/Adverbio comparativo, neutro", syntaxis: "Atributo de 'alterum (iter)'", translatio: { es: "más rápido", en: "more expeditious", zh: "便捷" } },
                            { textus: "propterea", lemma: "propterea", morphologia: "Adverbio", syntaxis: "Nexo causal", translatio: { es: "por esto", en: "for this reason", zh: "" } },
                            { textus: "quod", lemma: "quod", morphologia: "Conjunción subordinante causal", syntaxis: "Nexo", translatio: { es: "porque", en: "because", zh: "因為" } },
                            { textus: "inter", lemma: "inter", morphologia: "Preposición de acusativo", syntaxis: "Nexo", translatio: { es: "entre", en: "between", zh: "之間" } },
                            { textus: "fines", lemma: "finis", morphologia: "Sustantivo, masculino, acusativo plural", syntaxis: "Complemento de 'inter'", translatio: { es: "los territorios", en: "the territories", zh: "領土" } },
                            { textus: "Heluetiorum", lemma: "Helvetii", morphologia: "Sustantivo, masculino, genitivo plural", syntaxis: "Complemento del Nombre de 'fines'", translatio: { es: "de los helvecios", en: "of the Helvetii", zh: "赫爾維蒂人" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "和" } },
                            { textus: "Allobrogum", lemma: "Allobroges", morphologia: "Sustantivo, masculino, genitivo plural", syntaxis: "Complemento del Nombre de 'fines'", translatio: { es: "de los alóbroges", en: "the Allobroges", zh: "阿洛布羅基人" } },
                            { textus: "qui", lemma: "qui", morphologia: "Pronombre relativo, masculino, nominativo plural", syntaxis: "Sujeto de 'erant' y nexo", translatio: { es: "que", en: "who", zh: "他們" } },
                            { textus: "nuper", lemma: "nuper", morphologia: "Adverbio", syntaxis: "Modificador circunstancial", translatio: { es: "recientemente", en: "recently", zh: "最近" } },
                            { textus: "pacati", lemma: "paco", morphologia: "Verbo, participio perfecto, pasivo, masculino, nominativo plural", syntaxis: "Atributo de 'qui'", translatio: { es: "pacificados", en: "pacified", zh: "被平定" } },
                            { textus: "erant", lemma: "sum", morphologia: "Verbo, 3ª p. pl., pretérito pluscuamperfecto, indicativo, activo", syntaxis: "Verbo de la subordinada de relativo", translatio: { es: "habían sido", en: "had been", zh: "剛" } },
                            { textus: "Rhodanus", lemma: "Rhodanus", morphologia: "Sustantivo, masculino, nominativo singular", syntaxis: "Sujeto de 'fluit'", translatio: { es: "el Ródano", en: "the Rhone", zh: "羅納河" } },
                            { textus: "fluit", lemma: "fluo", morphologia: "Verbo, 3ª p. sg., presente, indicativo, activo", syntaxis: "Verbo de la subordinada causal", translatio: { es: "fluye", en: "flows", zh: "流經" } },
                            { textus: "isque", lemma: "is-que", morphologia: "Pronombre + conjunción, masculino, nominativo singular", syntaxis: "Sujeto de 'transitur' y nexo", translatio: { es: "y este", en: "and it", zh: "並且" } },
                            { textus: "non", lemma: "non", morphologia: "Adverbio de negación", syntaxis: "Modificador de 'nullis'", translatio: { es: "no", en: "not", zh: "不僅" } },
                            { textus: "nullis", lemma: "nullus", morphologia: "Adjetivo, neutro, ablativo plural", syntaxis: "Atributo de 'locis' (non nullis = algunos)", translatio: { es: "ningunos", en: "none", zh: "沒有" } },
                            { textus: "locis", lemma: "locus", morphologia: "Sustantivo, neutro, ablativo plural", syntaxis: "C.C. de lugar", translatio: { es: "en lugares", en: "in places", zh: "在一些地方" } },
                            { textus: "uado", lemma: "vadum", morphologia: "Sustantivo, neutro, ablativo singular", syntaxis: "C.C. de medio/modo", translatio: { es: "por un vado", en: "by a ford", zh: "可以涉水" } },
                            { textus: "transitur", lemma: "transeo", morphologia: "Verbo, 3ª p. sg., presente, indicativo, pasivo", syntaxis: "Verbo de la coordinada", translatio: { es: "se cruza", en: "is crossed", zh: "而過" } }
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
                            { textus: "Extremum", lemma: "extremus", morphologia: "Adjetivo, neutro, nominativo singular", syntaxis: "Atributo de 'oppidum'", translatio: { es: "La última", en: "The last", zh: "最遠的" } },
                            { textus: "oppidum", lemma: "oppidum", morphologia: "Sustantivo, neutro, nominativo singular", syntaxis: "Sujeto", translatio: { es: "ciudad", en: "town", zh: "城鎮" } },
                            { textus: "Allobrogum", lemma: "Allobroges", morphologia: "Sustantivo, masculino, genitivo plural", syntaxis: "Complemento del Nombre de 'oppidum'", translatio: { es: "de los alóbroges", en: "of the Allobroges", zh: "阿洛布羅基人的" } },
                            { textus: "est", lemma: "sum", morphologia: "Verbo, 3ª p. sg., presente, indicativo, activo", syntaxis: "Cópula", translatio: { es: "es", en: "is", zh: "是" } },
                            { textus: "proximumque", lemma: "proximus-que", morphologia: "Adjetivo, neutro, nominativo singular, superlativo + conjunción enclítica", syntaxis: "Atributo de 'Genaua' y nexo", translatio: { es: "y la más próxima", en: "and the nearest", zh: "也是最靠近" } },
                            { textus: "Heluetiorum", lemma: "Helvetii", morphologia: "Sustantivo, masculino, genitivo plural", syntaxis: "Complemento del Nombre de 'finibus'", translatio: { es: "de los helvecios", en: "of the Helvetii", zh: "赫爾維蒂人" } },
                            { textus: "finibus", lemma: "finis", morphologia: "Sustantivo, masculino, dativo plural", syntaxis: "Complemento de 'proximum'", translatio: { es: "al territorio", en: "to the territory", zh: "領土的地方" } },
                            { textus: "Genaua", lemma: "Genava", morphologia: "Sustantivo, femenino, nominativo singular", syntaxis: "Sujeto/Atributo", translatio: { es: "Ginebra", en: "Geneva", zh: "日內瓦" } }
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
                            { textus: "Ex", lemma: "ex", morphologia: "Preposición de ablativo", syntaxis: "Nexo", translatio: { es: "Desde", en: "From", zh: "從" } },
                            { textus: "eo", lemma: "is", morphologia: "Pronombre demostrativo, neutro, ablativo singular", syntaxis: "Atributo de 'oppido'", translatio: { es: "esa", en: "that", zh: "那座" } },
                            { textus: "oppido", lemma: "oppidum", morphologia: "Sustantivo, neutro, ablativo singular", syntaxis: "Complemento de 'Ex'", translatio: { es: "ciudad", en: "town", zh: "城鎮" } },
                            { textus: "pons", lemma: "pons", morphologia: "Sustantivo, masculino, nominativo singular", syntaxis: "Sujeto", translatio: { es: "un puente", en: "a bridge", zh: "一座橋" } },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición de acusativo", syntaxis: "Nexo", translatio: { es: "hasta", en: "to", zh: "通往" } },
                            { textus: "Heluetios", lemma: "Helvetii", morphologia: "Sustantivo, masculino, acusativo plural", syntaxis: "Complemento de 'ad'", translatio: { es: "los helvecios", en: "the Helvetii", zh: "赫爾維蒂人的地區" } },
                            { textus: "pertinet", lemma: "pertineo", morphologia: "Verbo, 3ª p. sg., presente, indicativo, activo", syntaxis: "Verbo principal", translatio: { es: "se extiende", en: "extends", zh: "" } }
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
                            { textus: "Allobrogibus", lemma: "Allobroges", morphologia: "Sustantivo, masculino, dativo plural", syntaxis: "Objeto indirecto de 'persuasuros'", translatio: { es: "a los alóbroges", en: "the Allobroges", zh: "阿洛布羅基人" } },
                            { textus: "sese", lemma: "sui", morphologia: "Pronombre reflexivo, acusativo", syntaxis: "Sujeto de la infinitiva", translatio: { es: "que ellos", en: "that they", zh: "他們" } },
                            { textus: "uel", lemma: "vel", morphologia: "Conjunción disyuntiva", syntaxis: "Nexo", translatio: { es: "o bien", en: "either", zh: "要麼" } },
                            { textus: "persuasuros", lemma: "persuadeo", morphologia: "Verbo, participio futuro, activo, acusativo, masculino, plural", syntaxis: "Verbo (predicado) de la infinitiva", translatio: { es: "persuadirían", en: "would persuade", zh: "能說服" } },
                            { textus: "quod", lemma: "quod", morphologia: "Conjunción subordinante causal", syntaxis: "Nexo", translatio: { es: "porque", en: "because", zh: "因為" } },
                            { textus: "nondum", lemma: "nondum", morphologia: "Adverbio", syntaxis: "Modificador circunstancial", translatio: { es: "aún no", en: "not yet", zh: "還沒有" } },
                            { textus: "bono", lemma: "bonus", morphologia: "Adjetivo, masculino, ablativo singular", syntaxis: "Atributo de 'animo'", translatio: { es: "buenas", en: "well", zh: "好" } },
                            { textus: "animo", lemma: "animus", morphologia: "Sustantivo, masculino, ablativo singular", syntaxis: "C.C. de modo", translatio: { es: "con disposiciones", en: "disposed", zh: "感" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición de acusativo", syntaxis: "Nexo", translatio: { es: "hacia", en: "towards", zh: "對" } },
                            { textus: "populum", lemma: "populus", morphologia: "Sustantivo, masculino, acusativo singular", syntaxis: "Complemento de 'in'", translatio: { es: "el pueblo", en: "the people", zh: "人民" } },
                            { textus: "Romanum", lemma: "Romanus", morphologia: "Adjetivo, masculino, acusativo singular", syntaxis: "Atributo de 'populum'", translatio: { es: "romano", en: "Roman", zh: "羅馬" } },
                            { textus: "uiderentur", lemma: "video", morphologia: "Verbo, 3ª p. pl., pretérito imperfecto, subjuntivo, pasivo", syntaxis: "Verbo de la subordinada causal", translatio: { es: "parecían", en: "they did seem", zh: "似乎" } },
                            { textus: "existimabant", lemma: "existimo", morphologia: "Verbo, 3ª p. pl., pretérito imperfecto, indicativo, activo", syntaxis: "Verbo principal", translatio: { es: "pensaban", en: "they thought", zh: "他們認為" } },
                            { textus: "uel", lemma: "vel", morphologia: "Conjunción disyuntiva", syntaxis: "Nexo", translatio: { es: "o bien", en: "or", zh: "要麼" } },
                            { textus: "ui", lemma: "vis", morphologia: "Sustantivo, femenino, ablativo singular", syntaxis: "C.C. de instrumento", translatio: { es: "por la fuerza", en: "by force", zh: "用武力" } },
                            { textus: "coacturos", lemma: "cogo", morphologia: "Verbo, participio futuro, activo, acusativo, masculino, plural", syntaxis: "Verbo (predicado) de la infinitiva", translatio: { es: "los obligarían", en: "they would compel them", zh: "強迫他們" } },
                            { textus: "ut", lemma: "ut", morphologia: "Conjunción subordinante", syntaxis: "Nexo (introduce subordinada final)", translatio: { es: "a que", en: "to", zh: "讓他們" } },
                            { textus: "per", lemma: "per", morphologia: "Preposición de acusativo", syntaxis: "Nexo", translatio: { es: "por", en: "through", zh: "通過" } },
                            { textus: "suos", lemma: "suus", morphologia: "Adjetivo posesivo, masculino, acusativo plural", syntaxis: "Atributo de 'fines'", translatio: { es: "su", en: "their", zh: "其" } },
                            { textus: "fines", lemma: "finis", morphologia: "Sustantivo, masculino, acusativo plural", syntaxis: "Complemento de 'per'", translatio: { es: "territorio", en: "territory", zh: "領土" } },
                            { textus: "eos", lemma: "is", morphologia: "Pronombre, masculino, acusativo plural", syntaxis: "Sujeto de la infinitiva 'ire'", translatio: { es: "a ellos", en: "them", zh: "自己" } },
                            { textus: "ire", lemma: "eo", morphologia: "Verbo, infinitivo presente, activo", syntaxis: "Verbo de la infinitiva", translatio: { es: "pasar", en: "to go", zh: "通過" } },
                            { textus: "paterentur", lemma: "patior", morphologia: "Verbo, 3ª p. pl., pretérito imperfecto, subjuntivo, deponente", syntaxis: "Verbo de la subordinada final", translatio: { es: "permitieran", en: "allow", zh: "允許" } }
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
                            { textus: "Omnibus", lemma: "omnis", morphologia: "Adjetivo, femenino, ablativo plural", syntaxis: "Atributo de 'rebus'", translatio: { es: "Todas", en: "All", zh: "一切" } },
                            { textus: "rebus", lemma: "res", morphologia: "Sustantivo, femenino, ablativo plural", syntaxis: "Sujeto del ablativo absoluto", translatio: { es: "las cosas", en: "things", zh: "事物" } },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición de acusativo", syntaxis: "Nexo", translatio: { es: "para", en: "for", zh: "為" } },
                            { textus: "profectionem", lemma: "profectio", morphologia: "Sustantivo, femenino, acusativo singular", syntaxis: "Complemento de 'ad'", translatio: { es: "la partida", en: "the departure", zh: "出發" } },
                            { textus: "conparatis", lemma: "comparo", morphologia: "Verbo, participio perfecto, pasivo, femenino, ablativo plural", syntaxis: "Verbo (predicado) del ablativo absoluto", translatio: { es: "preparadas", en: "prepared", zh: "準備好後" } },
                            { textus: "diem", lemma: "dies", morphologia: "Sustantivo, femenino, acusativo singular", syntaxis: "Objeto directo", translatio: { es: "un día", en: "a day", zh: "一個日期" } },
                            { textus: "dicunt", lemma: "dico", morphologia: "Verbo, 3ª p. pl., presente, indicativo, activo", syntaxis: "Verbo principal", translatio: { es: "fijan", en: "they set", zh: "他們確定了" } },
                            { textus: "qua", lemma: "qui", morphologia: "Pronombre relativo, femenino, ablativo singular", syntaxis: "Nexo y C.C. de tiempo", translatio: { es: "en el cual", en: "on which", zh: "以便" } },
                            { textus: "die", lemma: "dies", morphologia: "Sustantivo, femenino, ablativo singular", syntaxis: "Aposición de 'qua'", translatio: { es: "día", en: "day", zh: "" } },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición de acusativo", syntaxis: "Nexo", translatio: { es: "en", en: "on", zh: "在" } },
                            { textus: "ripam", lemma: "ripa", morphologia: "Sustantivo, femenino, acusativo singular", syntaxis: "Complemento de 'ad'", translatio: { es: "la ribera", en: "the bank", zh: "河畔" } },
                            { textus: "Rhodani", lemma: "Rhodanus", morphologia: "Sustantivo, masculino, genitivo singular", syntaxis: "Complemento del Nombre de 'ripam'", translatio: { es: "del Ródano", en: "of the Rhone", zh: "羅納" } },
                            { textus: "omnes", lemma: "omnis", morphologia: "Adjetivo, masculino, nominativo plural", syntaxis: "Sujeto de 'conueniant'", translatio: { es: "todos", en: "they all", zh: "全體人員" } },
                            { textus: "conueniant", lemma: "convenio", morphologia: "Verbo, 3ª p. pl., presente, subjuntivo, activo", syntaxis: "Verbo de la subordinada de relativo", translatio: { es: "se reúnan", en: "should assemble", zh: "集會" } }
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
                            { textus: "Is", lemma: "is", morphologia: "Pronombre demostrativo, masculino, nominativo singular", syntaxis: "Atributo de 'dies'", translatio: { es: "Ese", en: "That", zh: "那" } },
                            { textus: "dies", lemma: "dies", morphologia: "Sustantivo, masculino, nominativo singular", syntaxis: "Sujeto", translatio: { es: "día", en: "day", zh: "一天" } },
                            { textus: "erat", lemma: "sum", morphologia: "Verbo, 3ª p. sg., pretérito imperfecto, indicativo, activo", syntaxis: "Cópula", translatio: { es: "era", en: "was", zh: "是" } },
                            { textus: "a.", lemma: "ante", morphologia: "Preposición (abreviada)", syntaxis: "Parte de la datación", translatio: { es: "antes del", en: "before the", zh: "前的" } },
                            { textus: "d.", lemma: "diem", morphologia: "Sustantivo (abreviado)", syntaxis: "Parte de la datación", translatio: { es: "día", en: "day", zh: "天" } },
                            { textus: "V.", lemma: "quintum", morphologia: "Numeral (abreviado)", syntaxis: "Parte de la datación", translatio: { es: "quinto", en: "fifth", zh: "第五" } },
                            { textus: "Kal.", lemma: "Kalendas", morphologia: "Sustantivo (abreviado)", syntaxis: "Parte de la datación", translatio: { es: "las Calendas", en: "the Kalends", zh: "一日" } },
                            { textus: "Apr.", lemma: "Apriles", morphologia: "Adjetivo (abreviado)", syntaxis: "Parte de la datación", translatio: { es: "de Abril", en: "of April", zh: "四月" } },
                            { textus: "L.", lemma: "Lucio", morphologia: "Praenomen, ablativo singular", syntaxis: "Sujeto del ablativo absoluto", translatio: { es: "Lucio", en: "Lucius", zh: "盧基烏斯" } },
                            { textus: "Pisone", lemma: "Piso", morphologia: "Cognomen, ablativo singular", syntaxis: "Sujeto del ablativo absoluto", translatio: { es: "Pisón", en: "Piso", zh: "皮索" } },
                            { textus: "A.", lemma: "Aulo", morphologia: "Praenomen, ablativo singular", syntaxis: "Sujeto del ablativo absoluto", translatio: { es: "Aulo", en: "Aulus", zh: "和奧盧斯" } },
                            { textus: "Gabinio", lemma: "Gabinius", morphologia: "Cognomen, ablativo singular", syntaxis: "Sujeto del ablativo absoluto", translatio: { es: "Gabinio", en: "Gabinius", zh: "加比尼烏斯" } },
                            { textus: "consulibus", lemma: "consul", morphologia: "Sustantivo, masculino, ablativo plural", syntaxis: "Aposición de 'Pisone' y 'Gabinio' (predicado del ablativo absoluto)", translatio: { es: "siendo cónsules", en: "during the consulship of", zh: "擔任執政官時" } }
                        ],
                        ordo_syntacticus: "Is dies erat ante diem quintum Kalendas Apriles, Lucio Pisone (et) Aulo Gabinio consulibus.",
                        notae: "La fecha 'ante diem V Kalendas Apriles' significa 'el quinto día antes de las calendas de abril', que es el 28 de marzo. La datación del año se da con un ablativo absoluto, indicando quiénes eran los cónsules.",
                        translationes: {
                            es: "Ese día era el quinto antes de las calendas de abril (28 de marzo), siendo cónsules Lucio Pisón y Aulo Gabinio.",
                            en: "That day was the fifth before the Kalends of April (March 28), during the consulship of Lucius Piso and Aulus Gabinius.",
                            zh: "那一天是四月一日前的第五天（即3月28日），當時的執政官是盧基烏斯·皮索和奧盧斯·加比尼烏斯。"
                        }
                    }
                ]
            }
        ]
    }
};

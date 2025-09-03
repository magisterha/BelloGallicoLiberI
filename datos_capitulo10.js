const corpus = {
    titulus_principalis: "De Bello Gallico, I, 10",
    auctor: "C. Iulius Caesar",
    titulus_secundarius: {
        es: "La rápida reacción de César",
        en: "Caesar's Swift Reaction",
        zh: "凱撒的迅速反應"
    },
    introductio: {
        es: {
            titulus: "Introducción al Capítulo 10",
            contentus: `<p>En este capítulo se informa a César de las intenciones de los helvecios: marchar a través de territorio aliado de Roma hacia la costa atlántica, un movimiento que él percibe como una amenaza directa para la provincia romana de la Galia Transalpina. Su reacción es inmediata y contundente. Deja a su legado, Tito Labieno, al mando de las fortificaciones, viaja a marchas forzadas a Italia, recluta dos nuevas legiones y reúne otras tres que invernaban en Aquilea. Con un ejército de cinco legiones, cruza los Alpes a toda velocidad, superando la resistencia de las tribus locales, y se adentra en la Galia para interceptar a los helvecios.</p>`
        },
        en: {
            titulus: "Introduction to Chapter 10",
            contentus: `<p>In this chapter, Caesar is informed of the Helvetii's intentions: to march through Roman-allied territory towards the Atlantic coast, a move he perceives as a direct threat to the Roman province of Transalpine Gaul. His reaction is immediate and decisive. He leaves his legate, Titus Labienus, in command of the fortifications, travels by forced marches to Italy, conscripts two new legions, and gathers three others that were wintering in Aquileia. With an army of five legions, he crosses the Alps at full speed, overcoming resistance from local tribes, and enters Gaul to intercept the Helvetii.</p>`
        },
        zh: {
            titulus: "第 10 章介紹",
            contentus: `<p>在本章中，凱撒得知了赫爾維蒂人的意圖：他們計畫穿越羅馬盟友的領土，向大西洋沿岸進軍。凱撒認為此舉對羅馬的外高盧行省構成了直接威脅。他的反應是立即而果斷的。他命令副將提圖斯·拉比埃努斯負責防禦工事，自己則強行軍前往義大利，徵募了兩個新的軍團，並集結了在阿奎萊亞過冬的另外三個軍團。隨後，他率領這五個軍團，全速翻越阿爾卑斯山，克服了當地部落的抵抗，進入高盧以攔截赫爾維蒂人。</p>`
        }
    },
    textus: {
        id: 10,
        capitula: [
            {
                id_capituli: 10,
                orationes: [
                    {
                        id_orationis: 'o1',
                        original_lat: "Caesari renuntiatur Heluetiis esse in animo per agrum Sequanorum et Haeduorum iter in Santonum fines facere, qui non longe a Tolosatium finibus absunt, quae ciuitas est in prouincia.",
                        verba: [
                            { textus: "Caesari", lemma: "Caesar", morphologia: "Sustantivo, dativo masculino singular", syntaxis: "Complemento Indirecto", translatio: { es: "a César", en: "to Caesar", zh: "向凱撒" } },
                            { textus: "renuntiatur", lemma: "renuntio", morphologia: "Verbo, 3ª p. sg., presente pasivo, indicativo", syntaxis: "Verbo principal (impersonal)", translatio: { es: "se le anuncia", en: "it is reported", zh: "報告" } },
                            { textus: "Heluetiis", lemma: "Helvetii", morphologia: "Sustantivo, dativo masculino plural", syntaxis: "Dativo posesivo en la Oración de Infinitivo", translatio: { es: "los helvecios", en: "the Helvetii", zh: "赫爾維蒂人" } },
                            { textus: "esse", lemma: "sum", morphologia: "Verbo, infinitivo presente", syntaxis: "Verbo de la Oración de Infinitivo", translatio: { es: "ser / estar", en: "to be", zh: "有" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición (+ ablativo)", syntaxis: "Preposición", translatio: { es: "en", en: "in", zh: "在" } },
                            { textus: "animo", lemma: "animus", morphologia: "Sustantivo, ablativo masculino singular", syntaxis: "Complemento regido por 'in'", translatio: { es: "la intención", en: "mind / intention", zh: "意圖" } },
                            { textus: "per", lemma: "per", morphologia: "Preposición (+ acusativo)", syntaxis: "Preposición", translatio: { es: "a través de", en: "through", zh: "通過" } },
                            { textus: "agrum", lemma: "ager", morphologia: "Sustantivo, acusativo masculino singular", syntaxis: "Complemento regido por 'per'", translatio: { es: "el campo", en: "the territory", zh: "領土" } },
                            { textus: "Sequanorum", lemma: "Sequani", morphologia: "Sustantivo, genitivo masculino plural", syntaxis: "Complemento del Nombre", translatio: { es: "de los sécuanos", en: "of the Sequani", zh: "塞夸尼人的" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "和" } },
                            { textus: "Haeduorum", lemma: "Haedui", morphologia: "Sustantivo, genitivo masculino plural", syntaxis: "Complemento del Nombre", translatio: { es: "de los heduos", en: "of the Aedui", zh: "埃杜伊人的" } },
                            { textus: "iter", lemma: "iter", morphologia: "Sustantivo, acusativo neutro singular", syntaxis: "Objeto Directo de 'facere'", translatio: { es: "un viaje", en: "a journey", zh: "行軍" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición (+ acusativo)", syntaxis: "Preposición", translatio: { es: "hacia", en: "into", zh: "進入" } },
                            { textus: "Santonum", lemma: "Santones", morphologia: "Sustantivo, genitivo masculino plural", syntaxis: "Complemento del Nombre", translatio: { es: "de los santones", en: "of the Santones", zh: "桑通人" } },
                            { textus: "fines", lemma: "finis", morphologia: "Sustantivo, acusativo masculino plural", syntaxis: "Complemento regido por 'in'", translatio: { es: "el territorio", en: "the territory", zh: "的領土" } },
                            { textus: "facere", lemma: "facio", morphologia: "Verbo, infinitivo presente activo", syntaxis: "Infinitivo (parte de 'esse in animo facere')", translatio: { es: "hacer", en: "to make", zh: "進行" } },
                            { textus: ",", lemma: ",", morphologia: "Signo de puntuación", syntaxis: "Puntuación", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "qui", lemma: "qui", morphologia: "Pronombre relativo, nominativo masculino plural", syntaxis: "Sujeto de 'absunt'", translatio: { es: "los cuales", en: "who", zh: "他們" } },
                            { textus: "non", lemma: "non", morphologia: "Adverbio de negación", syntaxis: "Modificador adverbial", translatio: { es: "no", en: "not", zh: "不" } },
                            { textus: "longe", lemma: "longe", morphologia: "Adverbio", syntaxis: "Modificador verbal", translatio: { es: "lejos", en: "far", zh: "遠" } },
                            { textus: "a", lemma: "a/ab", morphologia: "Preposición (+ ablativo)", syntaxis: "Preposición", translatio: { es: "de", en: "from", zh: "離" } },
                            { textus: "Tolosatium", lemma: "Tolosates", morphologia: "Sustantivo, genitivo masculino plural", syntaxis: "Complemento del Nombre", translatio: { es: "de los tolosates", en: "of the Tolosates", zh: "托洛薩特人" } },
                            { textus: "finibus", lemma: "finis", morphologia: "Sustantivo, ablativo masculino plural", syntaxis: "Complemento regido por 'a'", translatio: { es: "del territorio", en: "the territory", zh: "的領土" } },
                            { textus: "absunt", lemma: "absum", morphologia: "Verbo, 3ª p. pl., presente activo, indicativo", syntaxis: "Verbo de la subordinada de relativo", translatio: { es: "distan", en: "are distant", zh: "相距" } },
                            { textus: ",", lemma: ",", morphologia: "Signo de puntuación", syntaxis: "Puntuación", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "quae", lemma: "qui", morphologia: "Pronombre relativo, nominativo femenino singular", syntaxis: "Sujeto de 'est'", translatio: { es: "la cual", en: "which", zh: "它" } },
                            { textus: "ciuitas", lemma: "civitas", morphologia: "Sustantivo, nominativo femenino singular", syntaxis: "Sujeto", translatio: { es: "ciudad", en: "state", zh: "城邦" } },
                            { textus: "est", lemma: "sum", morphologia: "Verbo, 3ª p. sg., presente activo, indicativo", syntaxis: "Verbo de la subordinada de relativo", translatio: { es: "está", en: "is", zh: "是" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición (+ ablativo)", syntaxis: "Preposición", translatio: { es: "en", en: "in", zh: "在" } },
                            { textus: "prouincia", lemma: "provincia", morphologia: "Sustantivo, ablativo femenino singular", syntaxis: "Complemento regido por 'in'", translatio: { es: "la provincia", en: "the province", zh: "行省" } },
                            { textus: ".", lemma: ".", morphologia: "Signo de puntuación", syntaxis: "Puntuación", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "La oración se estructura en torno al verbo impersonal 'renuntiatur', que introduce una oración subordinada de infinitivo con sujeto en dativo ('Heluetiis'). Esta, a su vez, contiene dos proposiciones de relativo ('qui... absunt' y 'quae... est').",
                        notae: "La construcción 'esse in animo + dativo' es una locución idiomática que significa 'tener la intención de'. El sujeto de esta intención se expresa en dativo.",
                        translationes: {
                            es: "Se le anuncia a César que los helvecios tienen la intención de hacer un viaje a través del territorio de los sécuanos y de los heduos hacia el territorio de los santones, los cuales no distan mucho del territorio de los tolosates, ciudad que está en la provincia.",
                            en: "It is reported to Caesar that the Helvetii have in mind to make a journey through the territory of the Sequani and the Aedui into the territory of the Santones, who are not far from the territory of the Tolosates, which state is in the Province.",
                            zh: "有人向凱撒報告，赫爾維蒂人意圖穿越塞夸尼人和埃杜伊人的領土，進入桑通人的領土，桑通人離托洛薩特人的領土不遠，而托洛薩特這個城邦是屬於羅馬行省的。"
                        }
                    },
                    {
                        id_orationis: 'o2',
                        original_lat: "Id si fieret, intellegebat magno cum periculo prouinciae futurum ut homines bellicosos, populi Romani inimicos, locis patentibus maximeque frumentariis finitimos haberet.",
                        verba: [
                            { textus: "Id", lemma: "is", morphologia: "Pronombre, nominativo neutro singular", syntaxis: "Sujeto de 'fieret'", translatio: { es: "esto", en: "this", zh: "這" } },
                            { textus: "si", lemma: "si", morphologia: "Conjunción condicional", syntaxis: "Nexo", translatio: { es: "si", en: "if", zh: "如果" } },
                            { textus: "fieret", lemma: "fio", morphologia: "Verbo, 3ª p. sg., pretérito imperfecto subjuntivo", syntaxis: "Verbo de la prótasis condicional", translatio: { es: "sucediera", en: "it were to happen", zh: "發生" } },
                            { textus: ",", lemma: ",", morphologia: "Signo de puntuación", syntaxis: "Puntuación", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "intellegebat", lemma: "intellego", morphologia: "Verbo, 3ª p. sg., pretérito imperfecto activo, indicativo", syntaxis: "Verbo principal de la apódosis", translatio: { es: "comprendía", en: "he understood", zh: "他明白" } },
                            { textus: "magno", lemma: "magnus", morphologia: "Adjetivo, ablativo neutro singular", syntaxis: "Atributo de 'periculo'", translatio: { es: "con gran", en: "with great", zh: "巨大的" } },
                            { textus: "cum", lemma: "cum", morphologia: "Preposición (+ ablativo)", syntaxis: "Preposición", translatio: { es: "con", en: "with", zh: "伴隨著" } },
                            { textus: "periculo", lemma: "periculum", morphologia: "Sustantivo, ablativo neutro singular", syntaxis: "Complemento regido por 'cum'", translatio: { es: "peligro", en: "danger", zh: "危險" } },
                            { textus: "prouinciae", lemma: "provincia", morphologia: "Sustantivo, genitivo femenino singular", syntaxis: "Complemento del Nombre", translatio: { es: "para la provincia", en: "for the province", zh: "對行省" } },
                            { textus: "futurum", lemma: "sum", morphologia: "Participio futuro (futurum esse)", syntaxis: "Verbo de la Oración de Infinitivo", translatio: { es: "que sería", en: "it would be", zh: "將會" } },
                            { textus: "ut", lemma: "ut", morphologia: "Conjunción subordinante", syntaxis: "Nexo (explicativo)", translatio: { es: "que", en: "that", zh: "即" } },
                            { textus: "homines", lemma: "homo", morphologia: "Sustantivo, acusativo masculino plural", syntaxis: "Objeto Directo de 'haberet'", translatio: { es: "a hombres", en: "men", zh: "人民" } },
                            { textus: "bellicosos", lemma: "bellicosus", morphologia: "Adjetivo, acusativo masculino plural", syntaxis: "Atributo de 'homines'", translatio: { es: "belicosos", en: "warlike", zh: "好戰的" } },
                            { textus: ",", lemma: ",", morphologia: "Signo de puntuación", syntaxis: "Puntuación", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "populi", lemma: "populus", morphologia: "Sustantivo, genitivo masculino singular", syntaxis: "Complemento del Nombre", translatio: { es: "del pueblo", en: "of the people", zh: "人民的" } },
                            { textus: "Romani", lemma: "Romanus", morphologia: "Adjetivo, genitivo masculino singular", syntaxis: "Atributo de 'populi'", translatio: { es: "romano", en: "Roman", zh: "羅馬" } },
                            { textus: "inimicos", lemma: "inimicus", morphologia: "Adjetivo, acusativo masculino plural", syntaxis: "Aposición de 'homines'", translatio: { es: "enemigos", en: "enemies", zh: "敵人" } },
                            { textus: ",", lemma: ",", morphologia: "Signo de puntuación", syntaxis: "Puntuación", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "locis", lemma: "locus", morphologia: "Sustantivo, dativo/ablativo masculino/neutro plural", syntaxis: "Complemento de 'finitimos'", translatio: { es: "a lugares", en: "to places", zh: "地區" } },
                            { textus: "patentibus", lemma: "patens", morphologia: "Adjetivo, dativo/ablativo plural", syntaxis: "Atributo de 'locis'", translatio: { es: "abiertos", en: "open", zh: "開闊的" } },
                            { textus: "maximeque", lemma: "maxime, -que", morphologia: "Adverbio + Conjunción enclítica", syntaxis: "Modificador y nexo", translatio: { es: "y sobre todo", en: "and especially", zh: "特別是" } },
                            { textus: "frumentariis", lemma: "frumentarius", morphologia: "Adjetivo, dativo/ablativo plural", syntaxis: "Atributo de 'locis'", translatio: { es: "ricos en trigo", en: "rich in grain", zh: "產糧的" } },
                            { textus: "finitimos", lemma: "finitimus", morphologia: "Adjetivo, acusativo masculino plural", syntaxis: "Predicativo de 'homines'", translatio: { es: "como vecinos", en: "as neighbors", zh: "作為鄰居" } },
                            { textus: "haberet", lemma: "habeo", morphologia: "Verbo, 3ª p. sg., pretérito imperfecto subjuntivo", syntaxis: "Verbo de la subordinada con 'ut'", translatio: { es: "tuviera", en: "it would have", zh: "擁有" } },
                            { textus: ".", lemma: ".", morphologia: "Signo de puntuación", syntaxis: "Puntuación", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Periodo hipotético de la irrealidad (presente/futuro). La prótasis (condición) es 'Id si fieret', y la apódosis (consecuencia) es 'intellegebat...'. El verbo principal 'intellegebat' rige una oración de infinitivo ('futurum esse') cuyo significado se explica con una subordinada completiva introducida por 'ut'.",
                        notae: "El sujeto de 'haberet' es 'prouincia', elidido. 'Futurum' es una forma corta de 'futurum esse'. El 'ut' aquí no es final ni consecutivo, sino explicativo del peligro.",
                        translationes: {
                            es: "Si esto sucediera, comprendía que sería un gran peligro para la provincia el tener como vecinos a hombres belicosos, enemigos del pueblo romano, en lugares abiertos y, sobre todo, ricos en trigo.",
                            en: "If this were to happen, he understood that it would be with great danger to the province that it would have as neighbors warlike men, enemies of the Roman people, in open and especially grain-rich territories.",
                            zh: "他明白，如果這種情況發生，行省將面臨巨大的危險，即在開闊且特別是產糧豐富的地區，擁有好戰的、羅馬人民的敵人作為鄰居。"
                        }
                    },
                    {
                        id_orationis: 'o3',
                        original_lat: "Ob eas causas ei munitioni quam fecerat T. Labienum legatum praefecit; ipse in Italiam magnis itineribus contendit duasque ibi legiones conscribit et tres, quae circum Aquileiam hiemabant, ex hibernis educit et, qua proximum iter in ulteriorem Galliam per Alpes erat, cum his quinque legionibus ire contendit.",
                        verba: [
                            { textus: "Ob", lemma: "ob", morphologia: "Preposición (+ acusativo)", syntaxis: "Preposición", translatio: { es: "por", en: "on account of", zh: "由於" } },
                            { textus: "eas", lemma: "is", morphologia: "Pronombre, acusativo femenino plural", syntaxis: "Atributo de 'causas'", translatio: { es: "estas", en: "these", zh: "這些" } },
                            { textus: "causas", lemma: "causa", morphologia: "Sustantivo, acusativo femenino plural", syntaxis: "Complemento regido por 'ob'", translatio: { es: "razones", en: "reasons", zh: "原因" } },
                            { textus: "ei", lemma: "is", morphologia: "Pronombre, dativo femenino singular", syntaxis: "Complemento Indirecto de 'praefecit'", translatio: { es: "a esa", en: "that", zh: "那個" } },
                            { textus: "munitioni", lemma: "munitio", morphologia: "Sustantivo, dativo femenino singular", syntaxis: "Complemento Indirecto de 'praefecit'", translatio: { es: "fortificación", en: "fortification", zh: "防禦工事" } },
                            { textus: "quam", lemma: "qui", morphologia: "Pronombre relativo, acusativo femenino singular", syntaxis: "Objeto Directo de 'fecerat'", translatio: { es: "que", en: "which", zh: "那個" } },
                            { textus: "fecerat", lemma: "facio", morphologia: "Verbo, 3ª p. sg., pluscuamperfecto activo, indicativo", syntaxis: "Verbo de la subordinada de relativo", translatio: { es: "había hecho", en: "he had made", zh: "他建造的" } },
                            { textus: "T.", lemma: "Titus", morphologia: "Praenomen, acusativo", syntaxis: "Parte del Objeto Directo", translatio: { es: "T.", en: "T.", zh: "提圖斯" } },
                            { textus: "Labienum", lemma: "Labienus", morphologia: "Sustantivo, acusativo masculino singular", syntaxis: "Objeto Directo de 'praefecit'", translatio: { es: "a Labieno", en: "Labienus", zh: "拉比埃努斯" } },
                            { textus: "legatum", lemma: "legatus", morphologia: "Sustantivo, acusativo masculino singular", syntaxis: "Predicativo del Objeto Directo", translatio: { es: "como legado", en: "as legate", zh: "作為副將" } },
                            { textus: "praefecit", lemma: "praeficio", morphologia: "Verbo, 3ª p. sg., perfecto activo, indicativo", syntaxis: "Verbo", translatio: { es: "puso al mando", en: "he placed in command", zh: "任命...負責" } },
                            { textus: ";", lemma: ";", morphologia: "Signo de puntuación", syntaxis: "Puntuación", translatio: { es: ";", en: ";", zh: "；" } },
                            { textus: "ipse", lemma: "ipse", morphologia: "Pronombre, nominativo masculino singular", syntaxis: "Sujeto", translatio: { es: "él mismo", en: "he himself", zh: "他親自" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición (+ acusativo)", syntaxis: "Preposición", translatio: { es: "a", en: "into", zh: "進入" } },
                            { textus: "Italiam", lemma: "Italia", morphologia: "Sustantivo, acusativo femenino singular", syntaxis: "Complemento regido por 'in'", translatio: { es: "Italia", en: "Italy", zh: "義大利" } },
                            { textus: "magnis", lemma: "magnus", morphologia: "Adjetivo, ablativo plural", syntaxis: "Atributo de 'itineribus'", translatio: { es: "a grandes", en: "by great", zh: "快速的" } },
                            { textus: "itineribus", lemma: "iter", morphologia: "Sustantivo, ablativo neutro plural", syntaxis: "C.C. de Modo", translatio: { es: "marchas", en: "marches", zh: "行軍" } },
                            { textus: "contendit", lemma: "contendo", morphologia: "Verbo, 3ª p. sg., presente activo, indicativo", syntaxis: "Verbo", translatio: { es: "se apresura", en: "he hastens", zh: "趕赴" } },
                            { textus: "duasque", lemma: "duo, -que", morphologia: "Numeral (acusativo) + Conjunción enclítica", syntaxis: "Objeto Directo y Nexo", translatio: { es: "y dos", en: "and two", zh: "並徵募了兩個" } },
                            { textus: "ibi", lemma: "ibi", morphologia: "Adverbio", syntaxis: "C.C. de Lugar", translatio: { es: "allí", en: "there", zh: "在那裡" } },
                            { textus: "legiones", lemma: "legio", morphologia: "Sustantivo, acusativo femenino plural", syntaxis: "Objeto Directo de 'conscribit'", translatio: { es: "legiones", en: "legions", zh: "軍團" } },
                            { textus: "conscribit", lemma: "conscribo", morphologia: "Verbo, 3ª p. sg., presente activo, indicativo", syntaxis: "Verbo", translatio: { es: "recluta", en: "he enrols", zh: "徵募" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "並且" } },
                            { textus: "tres", lemma: "tres", morphologia: "Numeral, acusativo", syntaxis: "Objeto Directo de 'educit'", translatio: { es: "tres", en: "three", zh: "三個" } },
                            { textus: ",", lemma: ",", morphologia: "Signo de puntuación", syntaxis: "Puntuación", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "quae", lemma: "qui", morphologia: "Pronombre relativo, nominativo femenino plural", syntaxis: "Sujeto de 'hiemabant'", translatio: { es: "que", en: "which", zh: "那些" } },
                            { textus: "circum", lemma: "circum", morphologia: "Preposición (+ acusativo)", syntaxis: "Preposición", translatio: { es: "alrededor de", en: "around", zh: "在...附近" } },
                            { textus: "Aquileiam", lemma: "Aquileia", morphologia: "Sustantivo, acusativo femenino singular", syntaxis: "Complemento regido por 'circum'", translatio: { es: "Aquilea", en: "Aquileia", zh: "阿奎萊亞" } },
                            { textus: "hiemabant", lemma: "hiemo", morphologia: "Verbo, 3ª p. pl., imperfecto activo, indicativo", syntaxis: "Verbo de la subordinada de relativo", translatio: { es: "invernaban", en: "were wintering", zh: "正在過冬" } },
                            { textus: ",", lemma: ",", morphologia: "Signo de puntuación", syntaxis: "Puntuación", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "ex", lemma: "ex", morphologia: "Preposición (+ ablativo)", syntaxis: "Preposición", translatio: { es: "de", en: "out of", zh: "從" } },
                            { textus: "hibernis", lemma: "hiberna", morphologia: "Sustantivo, ablativo neutro plural", syntaxis: "Complemento regido por 'ex'", translatio: { es: "los cuarteles de invierno", en: "winter quarters", zh: "冬營" } },
                            { textus: "educit", lemma: "educo", morphologia: "Verbo, 3ª p. sg., presente activo, indicativo", syntaxis: "Verbo", translatio: { es: "saca", en: "he leads out", zh: "帶出" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "並且" } },
                            { textus: ",", lemma: ",", morphologia: "Signo de puntuación", syntaxis: "Puntuación", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "qua", lemma: "qua", morphologia: "Adverbio relativo de lugar", syntaxis: "Nexo", translatio: { es: "por donde", en: "where", zh: "從...地方" } },
                            { textus: "proximum", lemma: "proximus", morphologia: "Adjetivo, nominativo neutro singular", syntaxis: "Atributo de 'iter'", translatio: { es: "el más cercano", en: "the nearest", zh: "最近的" } },
                            { textus: "iter", lemma: "iter", morphologia: "Sustantivo, nominativo neutro singular", syntaxis: "Sujeto de 'erat'", translatio: { es: "camino", en: "route", zh: "路線" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición (+ acusativo)", syntaxis: "Preposición", translatio: { es: "hacia", en: "into", zh: "通往" } },
                            { textus: "ulteriorem", lemma: "ulterior", morphologia: "Adjetivo, acusativo femenino singular", syntaxis: "Atributo de 'Galliam'", translatio: { es: "la ulterior", en: "further", zh: "更遠的" } },
                            { textus: "Galliam", lemma: "Gallia", morphologia: "Sustantivo, acusativo femenino singular", syntaxis: "Complemento regido por 'in'", translatio: { es: "Galia", en: "Gaul", zh: "高盧" } },
                            { textus: "per", lemma: "per", morphologia: "Preposición (+ acusativo)", syntaxis: "Preposición", translatio: { es: "a través de", en: "through", zh: "穿越" } },
                            { textus: "Alpes", lemma: "Alpes", morphologia: "Sustantivo, acusativo femenino plural", syntaxis: "Complemento regido por 'per'", translatio: { es: "los Alpes", en: "the Alps", zh: "阿爾卑斯山" } },
                            { textus: "erat", lemma: "sum", morphologia: "Verbo, 3ª p. sg., imperfecto activo, indicativo", syntaxis: "Verbo de la subordinada de relativo", translatio: { es: "era", en: "was", zh: "是" } },
                            { textus: ",", lemma: ",", morphologia: "Signo de puntuación", syntaxis: "Puntuación", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "cum", lemma: "cum", morphologia: "Preposición (+ ablativo)", syntaxis: "Preposición", translatio: { es: "con", en: "with", zh: "與" } },
                            { textus: "his", lemma: "hic", morphologia: "Pronombre, ablativo femenino plural", syntaxis: "Atributo de 'legionibus'", translatio: { es: "estas", en: "these", zh: "這些" } },
                            { textus: "quinque", lemma: "quinque", morphologia: "Numeral", syntaxis: "Atributo de 'legionibus'", translatio: { es: "cinco", en: "five", zh: "五個" } },
                            { textus: "legionibus", lemma: "legio", morphologia: "Sustantivo, ablativo femenino plural", syntaxis: "Complemento regido por 'cum'", translatio: { es: "legiones", en: "legions", zh: "軍團" } },
                            { textus: "ire", lemma: "eo", morphologia: "Verbo, infinitivo presente activo", syntaxis: "Infinitivo (complemento de 'contendit')", translatio: { es: "ir", en: "to go", zh: "前往" } },
                            { textus: "contendit", lemma: "contendo", morphologia: "Verbo, 3ª p. sg., presente activo, indicativo", syntaxis: "Verbo", translatio: { es: "se apresura", en: "he hastens", zh: "趕赴" } },
                            { textus: ".", lemma: ".", morphologia: "Signo de puntuación", syntaxis: "Puntuación", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Oración muy extensa compuesta de múltiples cláusulas coordinadas que describen una secuencia de acciones rápidas. El uso del presente histórico ('contendit', 'conscribit', 'educit') añade viveza a la narración.",
                        notae: "'Magnis itineribus' es una expresión técnica militar para 'a marchas forzadas'. La oración muestra la capacidad logística y estratégica de César en su máxima expresión.",
                        translationes: {
                            es: "Por estas razones, puso al legado T. Labieno al mando de la fortificación que había construido; él mismo se apresuró a Italia a marchas forzadas y allí recluta dos legiones, y saca de sus cuarteles de invierno a tres que invernaban cerca de Aquilea y, por donde era el camino más cercano hacia la Galia Ulterior a través de los Alpes, con estas cinco legiones se apresura a ir.",
                            en: "For these reasons, he placed the legate T. Labienus in command of the fortification which he had built; he himself hastens to Italy by forced marches and enrols two legions there, and leads out from their winter quarters the three that were wintering near Aquileia, and, where the nearest route into Further Gaul through the Alps was, he hastens to go with these five legions.",
                            zh: "由於這些原因，他任命副將提圖斯·拉比埃努斯負責他所建造的防禦工事；他親自強行軍趕赴義大利，並在那裡徵募了兩個軍團，同時將正在阿奎萊亞附近過冬的三個軍團帶出冬營，然後沿著穿越阿爾卑斯山進入遠高盧的最近路線，率領這五個軍團急速前進。"
                        }
                    },
                    {
                        id_orationis: 'o4',
                        original_lat: "Ibi Ceutrones et Graioceli et Caturiges locis superioribus occupatis itinere exercitum prohibere conantur.",
                        verba: [
                            { textus: "Ibi", lemma: "ibi", morphologia: "Adverbio", syntaxis: "C.C. de Lugar", translatio: { es: "allí", en: "there", zh: "在那裡" } },
                            { textus: "Ceutrones", lemma: "Ceutrones", morphologia: "Sustantivo, nominativo masculino plural", syntaxis: "Sujeto", translatio: { es: "los ceutrones", en: "the Ceutrones", zh: "切烏特羅涅斯人" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "和" } },
                            { textus: "Graioceli", lemma: "Graioceli", morphologia: "Sustantivo, nominativo masculino plural", syntaxis: "Sujeto", translatio: { es: "los grayócelos", en: "the Graioceli", zh: "格賴奧克利人" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "和" } },
                            { textus: "Caturiges", lemma: "Caturiges", morphologia: "Sustantivo, nominativo masculino plural", syntaxis: "Sujeto", translatio: { es: "los caturiges", en: "the Caturiges", zh: "卡圖里吉人" } },
                            { textus: "locis", lemma: "locus", morphologia: "Sustantivo, ablativo masculino plural", syntaxis: "Sujeto del ablativo absoluto", translatio: { es: "posiciones", en: "places", zh: "地點" } },
                            { textus: "superioribus", lemma: "superior", morphologia: "Adjetivo, ablativo masculino plural", syntaxis: "Atributo de 'locis'", translatio: { es: "más altas", en: "higher", zh: "較高的" } },
                            { textus: "occupatis", lemma: "occupo", morphologia: "Participio, perfecto pasivo, ablativo plural", syntaxis: "Participio del ablativo absoluto", translatio: { es: "una vez ocupadas", en: "having been seized", zh: "被佔領後" } },
                            { textus: "itinere", lemma: "iter", morphologia: "Sustantivo, ablativo neutro singular", syntaxis: "Ablativo de separación", translatio: { es: "del camino", en: "from the route", zh: "從路線上" } },
                            { textus: "exercitum", lemma: "exercitus", morphologia: "Sustantivo, acusativo masculino singular", syntaxis: "Objeto Directo", translatio: { es: "al ejército", en: "the army", zh: "軍隊" } },
                            { textus: "prohibere", lemma: "prohibeo", morphologia: "Verbo, infinitivo presente activo", syntaxis: "Infinitivo (complemento de 'conantur')", translatio: { es: "impedir el paso", en: "to block", zh: "阻止" } },
                            { textus: "conantur", lemma: "conor", morphologia: "Verbo, 3ª p. pl., presente deponente, indicativo", syntaxis: "Verbo principal", translatio: { es: "intentan", en: "they try", zh: "試圖" } },
                            { textus: ".", lemma: ".", morphologia: "Signo de puntuación", syntaxis: "Puntuación", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Oración simple con un sujeto múltiple y una construcción de ablativo absoluto ('locis superioribus occupatis') que indica la circunstancia previa a la acción principal.",
                        notae: "El verbo 'prohibeo' se construye con un acusativo de persona/cosa a la que se le impide el paso y un ablativo de separación ('itinere') para indicar de qué se le aparta.",
                        translationes: {
                            es: "Allí, los ceutrones, los grayócelos y los caturiges, una vez ocupadas las posiciones más altas, intentan impedir el paso al ejército.",
                            en: "There the Ceutrones, the Graioceli, and the Caturiges, after seizing the higher ground, try to block the army from its route.",
                            zh: "在那裡，切烏特羅涅斯人、格賴奧克利人和卡圖里吉人佔領了高地，試圖阻止羅馬軍隊前進。"
                        }
                    },
                    {
                        id_orationis: 'o5',
                        original_lat: "Conpluribus his proeliis pulsis ab Ocelo, quod est citerioris prouinciae extremum, in fines Vocontiorum ulterioris prouinciae die septimo peruenit; inde in Allobrogum fines, ab Allobrogibus in Segusiavos exercitum ducit.",
                        verba: [
                            { textus: "Conpluribus", lemma: "complures", morphologia: "Adjetivo, ablativo plural", syntaxis: "Atributo de 'proeliis'", translatio: { es: "tras varios", en: "several", zh: "幾次" } },
                            { textus: "his", lemma: "hic", morphologia: "Pronombre, ablativo plural", syntaxis: "Atributo de 'proeliis'", translatio: { es: "estos", en: "these", zh: "這些" } },
                            { textus: "proeliis", lemma: "proelium", morphologia: "Sustantivo, ablativo neutro plural", syntaxis: "Sujeto del ablativo absoluto", translatio: { es: "combates", en: "battles", zh: "戰鬥" } },
                            { textus: "pulsis", lemma: "pello", morphologia: "Participio, perfecto pasivo, ablativo plural", syntaxis: "Participio del ablativo absoluto", translatio: { es: "rechazados (ellos)", en: "having been routed", zh: "被擊退後" } },
                            { textus: "ab", lemma: "a/ab", morphologia: "Preposición (+ ablativo)", syntaxis: "Preposición", translatio: { es: "desde", en: "from", zh: "從" } },
                            { textus: "Ocelo", lemma: "Ocelum", morphologia: "Sustantivo, ablativo neutro singular", syntaxis: "Complemento regido por 'ab'", translatio: { es: "Ocelo", en: "Ocelum", zh: "奧克盧姆" } },
                            { textus: ",", lemma: ",", morphologia: "Signo de puntuación", syntaxis: "Puntuación", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "quod", lemma: "qui", morphologia: "Pronombre relativo, nominativo neutro singular", syntaxis: "Sujeto de 'est'", translatio: { es: "que", en: "which", zh: "它" } },
                            { textus: "est", lemma: "sum", morphologia: "Verbo, 3ª p. sg., presente activo, indicativo", syntaxis: "Verbo de la subordinada de relativo", translatio: { es: "es", en: "is", zh: "是" } },
                            { textus: "citerioris", lemma: "citerior", morphologia: "Adjetivo, genitivo singular", syntaxis: "Atributo de 'prouinciae'", translatio: { es: "de la (provincia) Citerior", en: "of the Citerior", zh: "近" } },
                            { textus: "prouinciae", lemma: "provincia", morphologia: "Sustantivo, genitivo femenino singular", syntaxis: "Complemento del Nombre", translatio: { es: "de la provincia", en: "province", zh: "行省的" } },
                            { textus: "extremum", lemma: "extremum", morphologia: "Sustantivo, nominativo neutro singular", syntaxis: "Atributo", translatio: { es: "el extremo", en: "the furthest point", zh: "盡頭" } },
                            { textus: ",", lemma: ",", morphologia: "Signo de puntuación", syntaxis: "Puntuación", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición (+ acusativo)", syntaxis: "Preposición", translatio: { es: "al", en: "into", zh: "進入" } },
                            { textus: "fines", lemma: "finis", morphologia: "Sustantivo, acusativo masculino plural", syntaxis: "Complemento regido por 'in'", translatio: { es: "territorio", en: "the territory", zh: "領土" } },
                            { textus: "Vocontiorum", lemma: "Vocontii", morphologia: "Sustantivo, genitivo masculino plural", syntaxis: "Complemento del Nombre", translatio: { es: "de los voconcios", en: "of the Vocontii", zh: "沃孔蒂人" } },
                            { textus: "ulterioris", lemma: "ulterior", morphologia: "Adjetivo, genitivo singular", syntaxis: "Atributo de 'prouinciae'", translatio: { es: "de la (provincia) Ulterior", en: "of the Ulterior", zh: "遠" } },
                            { textus: "prouinciae", lemma: "provincia", morphologia: "Sustantivo, genitivo femenino singular", syntaxis: "Complemento del Nombre", translatio: { es: "de la provincia", en: "province", zh: "行省的" } },
                            { textus: "die", lemma: "dies", morphologia: "Sustantivo, ablativo masculino singular", syntaxis: "C.C. de Tiempo", translatio: { es: "en el día", en: "on the day", zh: "在第...天" } },
                            { textus: "septimo", lemma: "septimus", morphologia: "Adjetivo, ablativo masculino singular", syntaxis: "Atributo de 'die'", translatio: { es: "séptimo", en: "seventh", zh: "七" } },
                            { textus: "peruenit", lemma: "pervenio", morphologia: "Verbo, 3ª p. sg., perfecto activo, indicativo", syntaxis: "Verbo", translatio: { es: "llegó", en: "he arrives", zh: "到達" } },
                            { textus: ";", lemma: ";", morphologia: "Signo de puntuación", syntaxis: "Puntuación", translatio: { es: ";", en: ";", zh: "；" } },
                            { textus: "inde", lemma: "inde", morphologia: "Adverbio", syntaxis: "C.C. de Lugar", translatio: { es: "desde allí", en: "thence", zh: "從那裡" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición (+ acusativo)", syntaxis: "Preposición", translatio: { es: "al", en: "into", zh: "進入" } },
                            { textus: "Allobrogum", lemma: "Allobroges", morphologia: "Sustantivo, genitivo masculino plural", syntaxis: "Complemento del Nombre", translatio: { es: "de los alóbroges", en: "of the Allobroges", zh: "阿洛布羅吉人" } },
                            { textus: "fines", lemma: "finis", morphologia: "Sustantivo, acusativo masculino plural", syntaxis: "Complemento regido por 'in'", translatio: { es: "territorio", en: "territory", zh: "的領土" } },
                            { textus: ",", lemma: ",", morphologia: "Signo de puntuación", syntaxis: "Puntuación", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "ab", lemma: "a/ab", morphologia: "Preposición (+ ablativo)", syntaxis: "Preposición", translatio: { es: "desde (el territorio de)", en: "from", zh: "從" } },
                            { textus: "Allobrogibus", lemma: "Allobroges", morphologia: "Sustantivo, ablativo masculino plural", syntaxis: "Complemento regido por 'ab'", translatio: { es: "los alóbroges", en: "the Allobroges", zh: "阿洛布羅吉人" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición (+ acusativo)", syntaxis: "Preposición", translatio: { es: "al (territorio de)", en: "into", zh: "進入" } },
                            { textus: "Segusiavos", lemma: "Segusiavi", morphologia: "Sustantivo, acusativo masculino plural", syntaxis: "Complemento regido por 'in'", translatio: { es: "los segusiavos", en: "the Segusiavi", zh: "塞古西亞維人" } },
                            { textus: "exercitum", lemma: "exercitus", morphologia: "Sustantivo, acusativo masculino singular", syntaxis: "Objeto Directo", translatio: { es: "al ejército", en: "the army", zh: "軍隊" } },
                            { textus: "ducit", lemma: "duco", morphologia: "Verbo, 3ª p. sg., presente activo, indicativo", syntaxis: "Verbo", translatio: { es: "conduce", en: "he leads", zh: "率領" } },
                            { textus: ".", lemma: ".", morphologia: "Signo de puntuación", syntaxis: "Puntuación", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Oración compuesta con una cláusula inicial de ablativo absoluto ('Conpluribus... pulsis'), una principal ('peruenit') y una segunda cláusula principal coordinada asindéticamente ('inde... ducit').",
                        notae: "El sujeto de 'peruenit' y 'ducit' es César. El autor describe la ruta con una precisión geográfica y temporal casi militar, propia de un parte de campaña.",
                        translationes: {
                            es: "Tras rechazar a estos en varios combates, desde Ocelo, que es el punto extremo de la provincia Citerior, llegó en el séptimo día al territorio de los voconcios, en la provincia Ulterior; desde allí conduce al ejército al territorio de los alóbroges, y desde los alóbroges al de los segusiavos.",
                            en: "Having routed these in several battles, from Ocelum, which is the furthest point of the Citerior province, he arrives on the seventh day in the territory of the Vocontii of the Ulterior province; thence he leads the army into the territory of the Allobroges, and from the Allobroges into that of the Segusiavi.",
                            zh: "在幾次戰鬥中擊退他們之後，他從近行省最遠端的奧克盧姆出發，於第七天到達遠行省沃孔蒂人的領土；然後他率領軍隊進入阿洛布羅吉人的領土，又從阿洛布羅吉人那裡進入塞古西亞維人的領土。"
                        }
                    },
                    {
                        id_orationis: 'o6',
                        original_lat: "Hi sunt extra prouinciam trans Rhodanum primi.",
                        verba: [
                            { textus: "Hi", lemma: "hic", morphologia: "Pronombre, nominativo masculino plural", syntaxis: "Sujeto", translatio: { es: "estos", en: "these", zh: "他們" } },
                            { textus: "sunt", lemma: "sum", morphologia: "Verbo, 3ª p. pl., presente activo, indicativo", syntaxis: "Verbo copulativo", translatio: { es: "son", en: "are", zh: "是" } },
                            { textus: "extra", lemma: "extra", morphologia: "Preposición (+ acusativo)", syntaxis: "Preposición", translatio: { es: "fuera de", en: "outside", zh: "在...之外" } },
                            { textus: "prouinciam", lemma: "provincia", morphologia: "Sustantivo, acusativo femenino singular", syntaxis: "Complemento regido por 'extra'", translatio: { es: "la provincia", en: "the province", zh: "行省" } },
                            { textus: "trans", lemma: "trans", morphologia: "Preposición (+ acusativo)", syntaxis: "Preposición", translatio: { es: "al otro lado de", en: "across", zh: "越過" } },
                            { textus: "Rhodanum", lemma: "Rhodanus", morphologia: "Sustantivo, acusativo masculino singular", syntaxis: "Complemento regido por 'trans'", translatio: { es: "el Ródano", en: "the Rhone", zh: "羅納河" } },
                            { textus: "primi", lemma: "primus", morphologia: "Adjetivo, nominativo masculino plural", syntaxis: "Atributo", translatio: { es: "los primeros", en: "the first", zh: "第一個" } },
                            { textus: ".", lemma: ".", morphologia: "Signo de puntuación", syntaxis: "Puntuación", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Oración copulativa simple que sirve para ubicar geográficamente al último pueblo mencionado.",
                        notae: "Una frase corta y fáctica que cierra el capítulo, subrayando que César ha llevado a su ejército más allá de los límites de la autoridad romana directa, preparando el escenario para el conflicto inminente.",
                        translationes: {
                            es: "Estos son los primeros fuera de la provincia, al otro lado del Ródano.",
                            en: "These are the first outside the province, across the Rhone.",
                            zh: "他們是行省之外、羅納河對岸的第一個部落。"
                        }
                    }
                ]
            }
        ]
    }
};

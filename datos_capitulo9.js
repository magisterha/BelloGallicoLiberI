const corpus = {
    titulus_principalis: "De Bello Gallico, I, 9",
    auctor: "C. Iulius Caesar",
    titulus_secundarius: {
        es: "La intervención diplomática de Dúmnorix",
        en: "The diplomatic intervention of Dumnorix",
        zh: "杜姆诺里克斯的外交干预"
    },
    introductio: {
        es: {
            titulus: "Introducción al Capítulo 9",
            contentus: `<p>En este capítulo, César detalla el único camino que les quedaba a los helvecios: la ruta a través del territorio de los sécuanos. Ante la imposibilidad de pasar sin su consentimiento debido a la estrechez del terreno, los helvecios recurren a la diplomacia. Envían una embajada a Dúmnorix, un noble heduo de gran influencia, para que interceda por ellos. César describe las motivaciones de Dúmnorix: su poder, sus alianzas (estaba casado con la hija de Orgétorix), su ambición de reinar y su deseo de tener a cuantos más pueblos mejor vinculados a él por lazos de gratitud.</p>`
        },
        en: {
            titulus: "Introduction to Chapter 9",
            contentus: `<p>In this chapter, Caesar details the only remaining route for the Helvetii: the path through the territory of the Sequani. Unable to pass without their consent due to the narrowness of the terrain, the Helvetii resort to diplomacy. They send an embassy to Dumnorix, an Aeduan nobleman of great influence, to intercede on their behalf. Caesar describes Dumnorix's motivations: his power, his alliances (he was married to Orgetorix's daughter), his ambition to rule, and his desire to have as many peoples as possible bound to him by ties of gratitude.</p>`
        },
        zh: {
            titulus: "第 9 章介绍",
            contentus: `<p>在本章中，凯撒详细描述了赫尔维蒂人剩下的唯一路线：通过塞夸尼人的领土。由于地形狭窄，未经他们同意无法通过，赫尔维蒂人诉诸外交。他们派使团前往杜姆诺里克斯，一位极具影响力的埃杜伊贵族，请求他为他们斡旋。凯撒描述了杜姆诺里克斯的动机：他的权力、他的联盟（他娶了奥格托里克斯的女儿）、他统治的野心，以及他希望通过恩惠尽可能多地将各个部落与自己联系在一起的愿望。</p>`
        }
    },
    textus: {
        id: 9,
        capitula: [
            {
                id_capituli: 9,
                orationes: [
                    {
                        id_orationis: 'o1',
                        original_lat: "Relinquebatur una per Sequanos uia, qua Sequanis inuitis propter angustias ire non poterant.",
                        verba: [
                            { textus: "Relinquebatur", lemma: "relinquo", morphologia: "Verbo, 3ª p. sg., pretérito imperfecto pasivo, indicativo", syntaxis: "Verbo principal", translatio: { es: "quedaba", en: "was left", zh: "剩下" } },
                            { textus: "una", lemma: "unus", morphologia: "Adjetivo, nominativo femenino singular", syntaxis: "Atributo de 'uia'", translatio: { es: "una (sola)", en: "one", zh: "一条" } },
                            { textus: "per", lemma: "per", morphologia: "Preposición (+ acusativo)", syntaxis: "Preposición", translatio: { es: "a través de", en: "through", zh: "通过" } },
                            { textus: "Sequanos", lemma: "Sequani", morphologia: "Sustantivo, acusativo masculino plural", syntaxis: "Complemento regido por 'per'", translatio: { es: "los sécuanos", en: "the Sequani", zh: "塞夸尼人" } },
                            { textus: "uia", lemma: "via", morphologia: "Sustantivo, nominativo femenino singular", syntaxis: "Sujeto", translatio: { es: "vía / camino", en: "way / route", zh: "道路" } },
                            { textus: ",", lemma: ",", morphologia: "Signo de puntuación", syntaxis: "Puntuación", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "qua", lemma: "qui", morphologia: "Pronombre relativo, ablativo femenino singular", syntaxis: "Nexo y C.C. de Lugar", translatio: { es: "por la cual", en: "by which", zh: "由此" } },
                            { textus: "Sequanis", lemma: "Sequani", morphologia: "Sustantivo, ablativo masculino plural", syntaxis: "Sujeto del ablativo absoluto", translatio: { es: "los sécuanos", en: "the Sequani", zh: "塞夸尼人" } },
                            { textus: "inuitis", lemma: "invitus", morphologia: "Adjetivo, ablativo masculino plural", syntaxis: "Atributo (Ablativo absoluto)", translatio: { es: "en contra de su voluntad", en: "being unwilling", zh: "不情愿" } },
                            { textus: "propter", lemma: "propter", morphologia: "Preposición (+ acusativo)", syntaxis: "Preposición", translatio: { es: "a causa de", en: "because of", zh: "由于" } },
                            { textus: "angustias", lemma: "angustiae", morphologia: "Sustantivo, acusativo femenino plural", syntaxis: "Complemento regido por 'propter'", translatio: { es: "la estrechez", en: "the narrows", zh: "狭窄" } },
                            { textus: "ire", lemma: "eo", morphologia: "Verbo, infinitivo presente activo", syntaxis: "Infinitivo (verbo principal de la subordinada)", translatio: { es: "ir", en: "to go", zh: "通行" } },
                            { textus: "non", lemma: "non", morphologia: "Adverbio de negación", syntaxis: "Modificador verbal", translatio: { es: "no", en: "not", zh: "不" } },
                            { textus: "poterant", lemma: "possum", morphologia: "Verbo, 3ª p. pl., pretérito imperfecto activo, indicativo", syntaxis: "Verbo de la subordinada", translatio: { es: "podían", en: "they could", zh: "能够" } },
                            { textus: ".", lemma: ".", morphologia: "Signo de puntuación", syntaxis: "Puntuación", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Oración principal con sujeto 'uia' y verbo pasivo 'Relinquebatur'. Incluye una proposición subordinada de relativo introducida por 'qua', que contiene un ablativo absoluto ('Sequanis invitis').",
                        notae: "El ablativo absoluto 'Sequanis invitis' (lit. 'siendo los sécuanos no deseosos') es una construcción concisa y elegante para expresar una condición.",
                        translationes: {
                            es: "Quedaba un solo camino a través de los sécuanos, por el cual no podían pasar contra la voluntad de estos debido a la estrechez.",
                            en: "There remained one route through the Sequani, by which they could not go against the will of the Sequani on account of the narrow passes.",
                            zh: "只剩下通过塞夸尼人领土的一条路，但由于通道狭窄，如果塞夸尼人不同意，他们就无法通过。"
                        }
                    },
                    {
                        id_orationis: 'o2',
                        original_lat: "His cum sua sponte persuadere non possent, legatos ad Dumnorigem Haeduum mittunt, ut eo deprecatore a Sequanis impetrarent.",
                        verba: [
                            { textus: "His", lemma: "hic", morphologia: "Pronombre demostrativo, dativo masculino plural", syntaxis: "Complemento Indirecto de 'persuadere'", translatio: { es: "a estos", en: "these", zh: "对他们" } },
                            { textus: "cum", lemma: "cum", morphologia: "Conjunción subordinante", syntaxis: "Nexo (cum histórico)", translatio: { es: "como / puesto que", en: "since", zh: "由于" } },
                            { textus: "sua", lemma: "suus", morphologia: "Adjetivo posesivo, ablativo femenino singular", syntaxis: "Atributo de 'sponte'", translatio: { es: "su propia", en: "their own", zh: "他们自己的" } },
                            { textus: "sponte", lemma: "spons", morphologia: "Sustantivo, ablativo femenino singular", syntaxis: "C.C. de Modo", translatio: { es: "por iniciativa", en: "initiative / will", zh: "主动地" } },
                            { textus: "persuadere", lemma: "persuadeo", morphologia: "Verbo, infinitivo presente activo", syntaxis: "Infinitivo (verbo principal de la subordinada)", translatio: { es: "persuadir", en: "to persuade", zh: "说服" } },
                            { textus: "non", lemma: "non", morphologia: "Adverbio de negación", syntaxis: "Modificador verbal", translatio: { es: "no", en: "not", zh: "不" } },
                            { textus: "possent", lemma: "possum", morphologia: "Verbo, 3ª p. pl., pretérito imperfecto activo, subjuntivo", syntaxis: "Verbo de la subordinada", translatio: { es: "pudieran", en: "they were able", zh: "能够" } },
                            { textus: ",", lemma: ",", morphologia: "Signo de puntuación", syntaxis: "Puntuación", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "legatos", lemma: "legatus", morphologia: "Sustantivo, acusativo masculino plural", syntaxis: "Objeto Directo", translatio: { es: "embajadores", en: "envoys", zh: "使者" } },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición (+ acusativo)", syntaxis: "Preposición", translatio: { es: "a", en: "to", zh: "向" } },
                            { textus: "Dumnorigem", lemma: "Dumnorix", morphologia: "Sustantivo, acusativo masculino singular", syntaxis: "Complemento regido por 'ad'", translatio: { es: "Dúmnorix", en: "Dumnorix", zh: "杜姆诺里克斯" } },
                            { textus: "Haeduum", lemma: "Haeduus", morphologia: "Adjetivo, acusativo masculino singular", syntaxis: "Aposición de 'Dumnorigem'", translatio: { es: "heduo", en: "the Aeduan", zh: "埃杜伊人" } },
                            { textus: "mittunt", lemma: "mitto", morphologia: "Verbo, 3ª p. pl., presente activo, indicativo", syntaxis: "Verbo principal", translatio: { es: "envían", en: "they send", zh: "派遣" } },
                            { textus: ",", lemma: ",", morphologia: "Signo de puntuación", syntaxis: "Puntuación", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "ut", lemma: "ut", morphologia: "Conjunción subordinante", syntaxis: "Nexo (final)", translatio: { es: "para que", en: "so that", zh: "以便" } },
                            { textus: "eo", lemma: "is", morphologia: "Pronombre, ablativo masculino singular", syntaxis: "Sujeto del ablativo absoluto", translatio: { es: "él", en: "he", zh: "他" } },
                            { textus: "deprecatore", lemma: "deprecator", morphologia: "Sustantivo, ablativo masculino singular", syntaxis: "Atributo (Ablativo absoluto)", translatio: { es: "como intercesor", en: "as intercessor", zh: "作为调解人" } },
                            { textus: "a", lemma: "a/ab", morphologia: "Preposición (+ ablativo)", syntaxis: "Preposición", translatio: { es: "de", en: "from", zh: "从" } },
                            { textus: "Sequanis", lemma: "Sequani", morphologia: "Sustantivo, ablativo masculino plural", syntaxis: "Complemento regido por 'a'", translatio: { es: "los sécuanos", en: "the Sequani", zh: "塞夸尼人" } },
                            { textus: "impetrarent", lemma: "impetro", morphologia: "Verbo, 3ª p. pl., pretérito imperfecto activo, subjuntivo", syntaxis: "Verbo de la subordinada final", translatio: { es: "obtuvieran", en: "they might obtain (their request)", zh: "获得" } },
                            { textus: ".", lemma: ".", morphologia: "Signo de puntuación", syntaxis: "Puntuación", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "La oración se estructura con una proposición subordinada causal con 'cum' histórico, seguida de la principal ('legatos... mittunt'), y finaliza con una proposición subordinada final introducida por 'ut', que contiene otro ablativo absoluto ('eo deprecatore').",
                        notae: "El 'cum histórico' (+ subjuntivo imperfecto) indica las circunstancias que llevan a la acción principal. El verbo 'impetro' aquí tiene un objeto directo elidido: 'su petición'.",
                        translationes: {
                            es: "Como no podían persuadirlos por su propia iniciativa, envían embajadores al heduo Dúmnorix para, con él como intercesor, obtener el permiso de los sécuanos.",
                            en: "Since they could not persuade them by their own efforts, they send envoys to Dumnorix the Aeduan, so that with him as an intercessor they might obtain their request from the Sequani.",
                            zh: "由于无法靠自己的力量说服他们，他们便派遣使者去见埃杜伊人杜姆诺里克斯，以便通过他的斡旋，从塞夸尼人那里获得许可。"
                        }
                    },
                    {
                        id_orationis: 'o3',
                        original_lat: "Dumnorix gratia et largitione apud Sequanos plurimum poterat et Heluetiis erat amicus, quod ex ea ciuitate Orgetorigis filiam in matrimonium duxerat, et cupiditate regni adductus nouis rebus studebat et quam plurimas ciuitates suo beneficio habere obstrictas uolebat.",
                        verba: [
                            { textus: "Dumnorix", lemma: "Dumnorix", morphologia: "Sustantivo, nominativo masculino singular", syntaxis: "Sujeto", translatio: { es: "Dúmnorix", en: "Dumnorix", zh: "杜姆诺里克斯" } },
                            { textus: "gratia", lemma: "gratia", morphologia: "Sustantivo, ablativo femenino singular", syntaxis: "C.C. de Causa/Medio", translatio: { es: "por su influencia", en: "by his influence", zh: "凭借影响力" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "和" } },
                            { textus: "largitione", lemma: "largitio", morphologia: "Sustantivo, ablativo femenino singular", syntaxis: "C.C. de Causa/Medio", translatio: { es: "por su generosidad", en: "by his bribery/generosity", zh: "凭借慷慨" } },
                            { textus: "apud", lemma: "apud", morphologia: "Preposición (+ acusativo)", syntaxis: "Preposición", translatio: { es: "entre", en: "among", zh: "在...之中" } },
                            { textus: "Sequanos", lemma: "Sequani", morphologia: "Sustantivo, acusativo masculino plural", syntaxis: "Complemento regido por 'apud'", translatio: { es: "los sécuanos", en: "the Sequani", zh: "塞夸尼人" } },
                            { textus: "plurimum", lemma: "multus", morphologia: "Adverbio (superlativo)", syntaxis: "Modificador verbal", translatio: { es: "muchísimo", en: "very much / most", zh: "极大地" } },
                            { textus: "poterat", lemma: "possum", morphologia: "Verbo, 3ª p. sg., pretérito imperfecto activo, indicativo", syntaxis: "Verbo copulativo (poder/influencia)", translatio: { es: "podía / valía", en: "he was very powerful", zh: "有权势" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "并且" } },
                            { textus: "Heluetiis", lemma: "Helvetii", morphologia: "Sustantivo, dativo masculino plural", syntaxis: "Complemento de 'amicus'", translatio: { es: "para los helvecios", en: "to the Helvetii", zh: "对赫尔维蒂人" } },
                            { textus: "erat", lemma: "sum", morphologia: "Verbo, 3ª p. sg., pretérito imperfecto activo, indicativo", syntaxis: "Verbo copulativo", translatio: { es: "era", en: "he was", zh: "是" } },
                            { textus: "amicus", lemma: "amicus", morphologia: "Adjetivo, nominativo masculino singular", syntaxis: "Atributo", translatio: { es: "amigo", en: "a friend", zh: "朋友" } },
                            { textus: ",", lemma: ",", morphologia: "Signo de puntuación", syntaxis: "Puntuación", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "quod", lemma: "quod", morphologia: "Conjunción subordinante", syntaxis: "Nexo (causal)", translatio: { es: "porque", en: "because", zh: "因为" } },
                            { textus: "ex", lemma: "ex", morphologia: "Preposición (+ ablativo)", syntaxis: "Preposición", translatio: { es: "de", en: "from", zh: "从" } },
                            { textus: "ea", lemma: "is", morphologia: "Pronombre, ablativo femenino singular", syntaxis: "Atributo de 'ciuitate'", translatio: { es: "esa", en: "that", zh: "那个" } },
                            { textus: "ciuitate", lemma: "civitas", morphologia: "Sustantivo, ablativo femenino singular", syntaxis: "Complemento regido por 'ex'", translatio: { es: "tribu", en: "state", zh: "部落" } },
                            { textus: "Orgetorigis", lemma: "Orgetorix", morphologia: "Sustantivo, genitivo masculino singular", syntaxis: "Complemento del Nombre de 'filiam'", translatio: { es: "de Orgétorix", en: "of Orgetorix", zh: "奥格托里克斯的" } },
                            { textus: "filiam", lemma: "filia", morphologia: "Sustantivo, acusativo femenino singular", syntaxis: "Objeto Directo de 'duxerat'", translatio: { es: "a la hija", en: "the daughter", zh: "女儿" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición (+ acusativo)", syntaxis: "Preposición", translatio: { es: "en", en: "in", zh: "作为" } },
                            { textus: "matrimonium", lemma: "matrimonium", morphologia: "Sustantivo, acusativo neutro singular", syntaxis: "Complemento regido por 'in'", translatio: { es: "matrimonio", en: "marriage", zh: "婚姻" } },
                            { textus: "duxerat", lemma: "duco", morphologia: "Verbo, 3ª p. sg., pretérito pluscuamperfecto activo, indicativo", syntaxis: "Verbo", translatio: { es: "había tomado", en: "he had married", zh: "娶了" } },
                            { textus: ",", lemma: ",", morphologia: "Signo de puntuación", syntaxis: "Puntuación", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "而且" } },
                            { textus: "cupiditate", lemma: "cupiditas", morphologia: "Sustantivo, ablativo femenino singular", syntaxis: "C.C. de Causa", translatio: { es: "por el deseo", en: "by the desire", zh: "由于渴望" } },
                            { textus: "regni", lemma: "regnum", morphologia: "Sustantivo, genitivo neutro singular", syntaxis: "Complemento del Nombre de 'cupiditate'", translatio: { es: "de reinar", en: "of kingship", zh: "王权" } },
                            { textus: "adductus", lemma: "adduco", morphologia: "Participio, perfecto pasivo, nominativo masculino singular", syntaxis: "Participio concertado con el sujeto", translatio: { es: "movido / inducido", en: "influenced", zh: "被驱使" } },
                            { textus: "nouis", lemma: "novus", morphologia: "Adjetivo, dativo femenino plural", syntaxis: "Complemento de 'studebat'", translatio: { es: "a cosas nuevas / a una revolución", en: "new things / revolution", zh: "新的事物" } },
                            { textus: "rebus", lemma: "res", morphologia: "Sustantivo, dativo femenino plural", syntaxis: "Complemento de 'studebat'", translatio: { es: "(ver 'nouis')", en: "(see 'nouis')", zh: "（见'nouis'）" } },
                            { textus: "studebat", lemma: "studeo", morphologia: "Verbo, 3ª p. sg., pretérito imperfecto activo, indicativo", syntaxis: "Verbo", translatio: { es: "aspiraba a", en: "he was eager for", zh: "热衷于" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "并且" } },
                            { textus: "quam plurimas", lemma: "quam plurimus", morphologia: "Locución adjetival, acusativo femenino plural", syntaxis: "Atributo de 'ciuitates'", translatio: { es: "al mayor número posible de", en: "as many as possible", zh: "尽可能多的" } },
                            { textus: "ciuitates", lemma: "civitas", morphologia: "Sustantivo, acusativo femenino plural", syntaxis: "Sujeto de la oración de infinitivo", translatio: { es: "tribus", en: "states", zh: "部落" } },
                            { textus: "suo", lemma: "suus", morphologia: "Adjetivo posesivo, ablativo neutro singular", syntaxis: "Atributo de 'beneficio'", translatio: { es: "por su", en: "by his", zh: "他的" } },
                            { textus: "beneficio", lemma: "beneficium", morphologia: "Sustantivo, ablativo neutro singular", syntaxis: "C.C. de Medio", translatio: { es: "favor", en: "kindness / favor", zh: "恩惠" } },
                            { textus: "habere", lemma: "habeo", morphologia: "Verbo, infinitivo presente activo", syntaxis: "Verbo de la oración de infinitivo", translatio: { es: "tener", en: "to have", zh: "拥有" } },
                            { textus: "obstrictas", lemma: "obstringo", morphologia: "Participio, perfecto pasivo, acusativo femenino plural", syntaxis: "Predicativo del sujeto de la oración de infinitivo", translatio: { es: "obligadas / vinculadas", en: "bound", zh: "束缚" } },
                            { textus: "uolebat", lemma: "volo", morphologia: "Verbo, 3ª p. sg., pretérito imperfecto activo, indicativo", syntaxis: "Verbo", translatio: { es: "quería", en: "he wanted", zh: "想要" } },
                            { textus: ".", lemma: ".", morphologia: "Signo de puntuación", syntaxis: "Puntuación", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Oración muy larga y compleja, coordinada por 'et'. Describe a Dúmnorix en varias facetas: su poder ('poterat'), su amistad ('erat amicus') justificada por una causal con 'quod', y sus ambiciones, introducidas por un participio concertado ('adductus') y desarrolladas en dos verbos coordinados ('studebat' y 'volebat'), el último de los cuales rige una construcción de acusativo con infinitivo ('quam plurimas ciuitates... habere obstrictas').",
                        notae: "La expresión 'nouis rebus studere' es un eufemismo común en latín para 'desear una revolución' o un cambio de régimen. La oración muestra la habilidad de César para construir perfiles psicológicos complejos de sus adversarios.",
                        translationes: {
                            es: "Dúmnorix, por su influencia y su generosidad, tenía muchísimo poder entre los sécuanos y era amigo de los helvecios, porque de esa tribu había tomado en matrimonio a la hija de Orgétorix; y, movido por el deseo de reinar, aspiraba a una revolución y quería tener al mayor número posible de tribus vinculadas por sus favores.",
                            en: "Dumnorix, by his influence and bribery, was very powerful among the Sequani and was a friend to the Helvetii, because from that state he had married the daughter of Orgetorix; and, influenced by a desire for kingship, he was eager for a revolution and wanted to have as many states as possible bound to him by his own kindness.",
                            zh: "杜姆诺里克斯凭借其影响力和慷慨，在塞夸尼人中极有权势，并且是赫尔维蒂人的朋友，因为他从那个部落娶了奥格托里克斯的女儿为妻；而且，在王权欲望的驱使下，他热衷于变革，并希望通过自己的恩惠尽可能多地将各个部落维系在自己身边。"
                        }
                    },
                    {
                        id_orationis: 'o4',
                        original_lat: "Itaque rem suscipit et a Sequanis impetrat ut per fines suos Heluetios ire patiantur, obsidesque uti inter sese dent perficit: Sequani, ne itinere Heluetios prohibeant, Heluetii, ut sine maleficio et iniuria transeant.",
                        verba: [
                            { textus: "Itaque", lemma: "itaque", morphologia: "Conjunción ilativa", syntaxis: "Nexo", translatio: { es: "así pues", en: "and so / therefore", zh: "因此" } },
                            { textus: "rem", lemma: "res", morphologia: "Sustantivo, acusativo femenino singular", syntaxis: "Objeto Directo", translatio: { es: "el asunto", en: "the task", zh: "这件事" } },
                            { textus: "suscipit", lemma: "suscipio", morphologia: "Verbo, 3ª p. sg., presente activo, indicativo", syntaxis: "Verbo", translatio: { es: "emprende", en: "he undertakes", zh: "承担" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "并且" } },
                            { textus: "a", lemma: "a/ab", morphologia: "Preposición (+ ablativo)", syntaxis: "Preposición", translatio: { es: "de", en: "from", zh: "从" } },
                            { textus: "Sequanis", lemma: "Sequani", morphologia: "Sustantivo, ablativo masculino plural", syntaxis: "Complemento regido por 'a'", translatio: { es: "los sécuanos", en: "the Sequani", zh: "塞夸尼人" } },
                            { textus: "impetrat", lemma: "impetro", morphologia: "Verbo, 3ª p. sg., presente activo, indicativo", syntaxis: "Verbo", translatio: { es: "obtiene", en: "he obtains (his request)", zh: "获得" } },
                            { textus: "ut", lemma: "ut", morphologia: "Conjunción subordinante", syntaxis: "Nexo (completivo)", translatio: { es: "que", en: "that", zh: "让" } },
                            { textus: "per", lemma: "per", morphologia: "Preposición (+ acusativo)", syntaxis: "Preposición", translatio: { es: "a través de", en: "through", zh: "通过" } },
                            { textus: "fines", lemma: "finis", morphologia: "Sustantivo, acusativo masculino plural", syntaxis: "Complemento regido por 'per'", translatio: { es: "el territorio", en: "the territory", zh: "领土" } },
                            { textus: "suos", lemma: "suus", morphologia: "Adjetivo posesivo, acusativo masculino plural", syntaxis: "Atributo de 'fines'", translatio: { es: "suyo", en: "their", zh: "他们的" } },
                            { textus: "Heluetios", lemma: "Helvetii", morphologia: "Sustantivo, acusativo masculino plural", syntaxis: "Sujeto de la oración de infinitivo", translatio: { es: "a los helvecios", en: "the Helvetii", zh: "赫尔维蒂人" } },
                            { textus: "ire", lemma: "eo", morphologia: "Verbo, infinitivo presente activo", syntaxis: "Verbo de la oración de infinitivo", translatio: { es: "pasar", en: "to go", zh: "通过" } },
                            { textus: "patiantur", lemma: "patior", morphologia: "Verbo, 3ª p. pl., presente deponente, subjuntivo", syntaxis: "Verbo de la subordinada completiva", translatio: { es: "permitan", en: "they should allow", zh: "允许" } },
                            { textus: ",", lemma: ",", morphologia: "Signo de puntuación", syntaxis: "Puntuación", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "obsidesque", lemma: "obses, -que", morphologia: "Sustantivo (acusativo pl.) + Conjunción enclítica", syntaxis: "Objeto Directo de 'dent'", translatio: { es: "y que rehenes", en: "and that hostages", zh: "并且人质" } },
                            { textus: "uti", lemma: "ut", morphologia: "Conjunción subordinante (forma arcaica)", syntaxis: "Nexo (completivo)", translatio: { es: "que", en: "that", zh: "为了" } },
                            { textus: "inter", lemma: "inter", morphologia: "Preposición (+ acusativo)", syntaxis: "Preposición", translatio: { es: "entre", en: "between", zh: "在...之间" } },
                            { textus: "sese", lemma: "sui", morphologia: "Pronombre reflexivo, acusativo", syntaxis: "Complemento regido por 'inter'", translatio: { es: "sí", en: "themselves", zh: "他们自己" } },
                            { textus: "dent", lemma: "do", morphologia: "Verbo, 3ª p. pl., presente activo, subjuntivo", syntaxis: "Verbo de la subordinada completiva", translatio: { es: "se den", en: "they give", zh: "交换" } },
                            { textus: "perficit", lemma: "perficio", morphologia: "Verbo, 3ª p. sg., presente activo, indicativo", syntaxis: "Verbo", translatio: { es: "consigue", en: "he brings it about", zh: "他促成" } },
                            { textus: ":", lemma: ":", morphologia: "Signo de puntuación", syntaxis: "Puntuación", translatio: { es: ":", en: ":", zh: "：" } },
                            { textus: "Sequani", lemma: "Sequani", morphologia: "Sustantivo, nominativo masculino plural", syntaxis: "Sujeto (elíptico)", translatio: { es: "los sécuanos", en: "the Sequani", zh: "塞夸尼人" } },
                            { textus: ",", lemma: ",", morphologia: "Signo de puntuación", syntaxis: "Puntuación", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "ne", lemma: "ne", morphologia: "Conjunción subordinante", syntaxis: "Nexo (final negativo)", translatio: { es: "para no", en: "not to", zh: "以免" } },
                            { textus: "itinere", lemma: "iter", morphologia: "Sustantivo, ablativo neutro singular", syntaxis: "C.C. de Separación", translatio: { es: "del camino", en: "from the path", zh: "从道路上" } },
                            { textus: "Heluetios", lemma: "Helvetii", morphologia: "Sustantivo, acusativo masculino plural", syntaxis: "Objeto Directo", translatio: { es: "a los helvecios", en: "the Helvetii", zh: "赫尔维蒂人" } },
                            { textus: "prohibeant", lemma: "prohibeo", morphologia: "Verbo, 3ª p. pl., presente activo, subjuntivo", syntaxis: "Verbo", translatio: { es: "impidan el paso", en: "hinder", zh: "阻拦" } },
                            { textus: ",", lemma: ",", morphologia: "Signo de puntuación", syntaxis: "Puntuación", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "Heluetii", lemma: "Helvetii", morphologia: "Sustantivo, nominativo masculino plural", syntaxis: "Sujeto (elíptico)", translatio: { es: "los helvecios", en: "the Helvetii", zh: "赫尔维蒂人" } },
                            { textus: ",", lemma: ",", morphologia: "Signo de puntuación", syntaxis: "Puntuación", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "ut", lemma: "ut", morphologia: "Conjunción subordinante", syntaxis: "Nexo (final)", translatio: { es: "para", en: "to", zh: "以便" } },
                            { textus: "sine", lemma: "sine", morphologia: "Preposición (+ ablativo)", syntaxis: "Preposición", translatio: { es: "sin", en: "without", zh: "没有" } },
                            { textus: "maleficio", lemma: "maleficium", morphologia: "Sustantivo, ablativo neutro singular", syntaxis: "Complemento regido por 'sine'", translatio: { es: "daño", en: "mischief", zh: "伤害" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "和" } },
                            { textus: "iniuria", lemma: "iniuria", morphologia: "Sustantivo, ablativo femenino singular", syntaxis: "Complemento regido por 'sine'", translatio: { es: "injusticia", en: "injury", zh: "不法行为" } },
                            { textus: "transeant", lemma: "transeo", morphologia: "Verbo, 3ª p. pl., presente activo, subjuntivo", syntaxis: "Verbo", translatio: { es: "pasen", en: "they may pass", zh: "通过" } },
                            { textus: ".", lemma: ".", morphologia: "Signo de puntuación", syntaxis: "Puntuación", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Oración compuesta por coordinación y subordinación. 'Itaque' introduce la consecuencia. Dúmnorix realiza dos acciones coordinadas: 'suscipit' e 'impetrat... perficit'. 'Impetrat' rige una completiva con 'ut'. 'Perficit' rige otra completiva ('uti... dent'). La oración concluye con una construcción elíptica que explica el propósito del intercambio de rehenes para cada parte, utilizando proposiciones finales ('ne prohibeant' y 'ut transeant').",
                        notae: "La estructura final (Sequani, ne...; Helvetii, ut...) es un ejemplo magnífico de la concisión cesariana, omitiendo el verbo principal ('dan rehenes') y yendo directamente al propósito (la 'finalidad') de la acción para cada uno de los implicados.",
                        translationes: {
                            es: "Así pues, emprende el asunto y obtiene de los sécuanos que permitan a los helvecios pasar por su territorio, y consigue que se den rehenes mutuamente: los sécuanos, para no impedir el paso a los helvecios; los helvecios, para pasar sin cometer daños ni injusticias.",
                            en: "Therefore, he undertakes the affair and obtains from the Sequani that they should allow the Helvetii to go through their territories, and he brings it about that they exchange hostages: the Sequani, not to hinder the Helvetii from their march; the Helvetii, to pass without mischief and injury.",
                            zh: "因此，他承担了这件事，并从塞夸尼人那里获得了允许赫尔维蒂人通过他们领土的许可，他还促成了双方交换人质：塞夸尼人保证不阻拦赫尔维蒂人行军，赫尔维蒂人则保证通过时不进行任何破坏和不法行为。"
                        }
                    }
                ]
            }
        ]
    }
};

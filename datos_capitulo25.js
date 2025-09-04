const corpus = {
    titulus_principalis: "De Bello Gallico, I, 25",
    auctor: "C. Iulius Caesar",
    titulus_secundarius: {
        es: "La batalla de Bibracte: primera fase y contraataque",
        en: "The Battle of Bibracte: First Phase and Counterattack",
        zh: "比布拉克特之戰：第一階段與反擊"
    },
    introductio: {
        es: {
            titulus: "Introducción al Capítulo 25",
            contentus: `<p>Este capítulo narra el desarrollo de la batalla de Bibracte. César inicia con un gesto de liderazgo, haciendo retirar su caballo y los de sus oficiales para eliminar toda esperanza de huida e igualar el riesgo para todos. Tras arengar a sus tropas, da la orden de ataque. Los legionarios, desde su posición elevada, lanzan sus pila (jabalinas pesadas), que destrozan la falange helvecia. César describe con detalle técnico cómo los pila, al doblarse tras el impacto, unían varios escudos, inutilizándolos y forzando a muchos galos a luchar sin protección. A la descarga de jabalinas le sigue una carga con espadas. Los helvecios, diezmados, retroceden a una colina. Pero cuando la victoria romana parece segura, la retaguardia enemiga (los boyos y los túlingos) llega y ataca el flanco romano. Esto envalentona a los helvecios, que vuelven al combate. En una brillante maniobra táctica, César ordena a su tercera línea girar para hacer frente a la nueva amenaza, luchando así en dos frentes de forma organizada.</p>`
        },
        en: {
            titulus: "Introduction to Chapter 25",
            contentus: `<p>This chapter narrates the development of the Battle of Bibracte. Caesar begins with a leadership gesture, removing his own horse and those of his officers to eliminate all hope of flight and equalize the risk for everyone. After exhorting his troops, he gives the order to attack. The legionaries, from their higher position, hurl their pila (heavy javelins), which shatter the Helvetian phalanx. Caesar describes in technical detail how the pila, by bending on impact, pinned several shields together, rendering them useless and forcing many Gauls to fight unprotected. The volley of javelins is followed by a sword charge. The Helvetii, decimated, fall back to a hill. But just when Roman victory seems certain, the enemy rearguard (the Boii and Tulingi) arrives and attacks the Roman flank. This emboldens the Helvetii, who return to the fight. In a brilliant tactical maneuver, Caesar orders his third line to pivot to face the new threat, thus fighting on two fronts in an organized manner.</p>`
        },
        zh: {
            titulus: "第 25 章介紹",
            contentus: `<p>本章敘述了比布拉克特戰役的進程。凱撒首先以一個領導者的姿態，下令將他自己和所有軍官的馬匹移開，以消除所有逃跑的希望，並使所有人的風險均等。在激勵部隊後，他下令進攻。軍團士兵從高處投擲他們的重標槍（pila），粉碎了赫爾維蒂人的方陣。凱撒以技術性的細節描述了重標槍如何在撞擊後彎曲，將幾個盾牌釘在一起，使其失效，迫使許多高盧人在沒有保護的情況下戰鬥。標槍投擲之後是劍的衝鋒。被重創的赫爾維蒂人退到一座小山上。但就在羅馬的勝利似乎已成定局時，敵人的後衛（波伊人和圖靈吉人）趕到並攻擊羅馬的側翼。這鼓舞了赫爾維蒂人，他們重返戰場。在一次出色的戰術調動中，凱撒命令他的第三道防線轉向以應對新的威脅，從而有組織地在兩條戰線上作戰。</p>`
        }
    },
    textus: {
        id: 25,
        capitula: [
            {
                id_capituli: 25,
                orationes: [
                    {
                        id_orationis: 'o1',
                        original_lat: "Caesar primum suo, deinde omnium ex conspectu remotis equis, ut aequato omnium periculo spem fugae tolleret, cohortatus suos proelium commisit.",
                        verba: [
                            { textus: "Caesar", lemma: "Caesar", morphologia: "Sustantivo, nominativo, singular, masculino", syntaxis: "Sujeto", translatio: { es: "César", en: "Caesar", zh: "凱撒" } },
                            { textus: "primum", lemma: "primum", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "primero", en: "first", zh: "首先" } },
                            { textus: "suo", lemma: "suus", morphologia: "Pronombre posesivo, ablativo, singular, masculino", syntaxis: "Sujeto (de ablativo absoluto)", translatio: { es: "su propio", en: "his own", zh: "他自己的" } },
                            { textus: "deinde", lemma: "deinde", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "luego", en: "then", zh: "然後" } },
                            { textus: "omnium", lemma: "omnis", morphologia: "Adjetivo, genitivo, plural, masculino", syntaxis: "C. del Nombre", translatio: { es: "de todos", en: "of all", zh: "所有的" } },
                            { textus: "ex", lemma: "ex", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "de", en: "from", zh: "從" } },
                            { textus: "conspectu", lemma: "conspectus", morphologia: "Sustantivo, ablativo, singular, masculino", syntaxis: "C. preposicional", translatio: { es: "la vista", en: "the sight", zh: "視線中" } },
                            { textus: "remotis", lemma: "remoueo", morphologia: "Verbo, participio, perfecto, pasivo, ablativo, plural, masculino", syntaxis: "Verbo (de ablativo absoluto)", translatio: { es: "tras retirar", en: "having removed", zh: "移開" } },
                            { textus: "equis", lemma: "equus", morphologia: "Sustantivo, ablativo, plural, masculino", syntaxis: "Sujeto (de ablativo absoluto)", translatio: { es: "los caballos", en: "the horses", zh: "馬匹" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "ut", lemma: "ut", morphologia: "Conjunción", syntaxis: "Nexo (finalidad)", translatio: { es: "para", en: "so that", zh: "為了" } },
                            { textus: "aequato", lemma: "aequo", morphologia: "Verbo, participio, perfecto, pasivo, ablativo, singular, neutro", syntaxis: "Verbo (de ablativo absoluto)", translatio: { es: "igualado", en: "having been equalized", zh: "使" } },
                            { textus: "omnium", lemma: "omnis", morphologia: "Adjetivo, genitivo, plural, masculino", syntaxis: "C. del Nombre", translatio: { es: "de todos", en: "of all", zh: "所有人的" } },
                            { textus: "periculo", lemma: "periculum", morphologia: "Sustantivo, ablativo, singular, neutro", syntaxis: "Sujeto (de ablativo absoluto)", translatio: { es: "el peligro", en: "the danger", zh: "風險" } },
                            { textus: "spem", lemma: "spes", morphologia: "Sustantivo, acusativo, singular, femenino", syntaxis: "Objeto Directo", translatio: { es: "la esperanza", en: "the hope", zh: "均等並消除" } },
                            { textus: "fugae", lemma: "fuga", morphologia: "Sustantivo, genitivo, singular, femenino", syntaxis: "C. del Nombre", translatio: { es: "de huida", en: "of flight", zh: "逃跑的" } },
                            { textus: "tolleret", lemma: "tollo", morphologia: "Verbo, 3ª p, singular, imperfecto, subjuntivo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "eliminar", en: "he might remove", zh: "希望" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "cohortatus", lemma: "cohortor", morphologia: "Verbo, participio, perfecto, deponente, nominativo, singular, masculino", syntaxis: "Participio concertado", translatio: { es: "tras arengar a", en: "having encouraged", zh: "激勵了" } },
                            { textus: "suos", lemma: "suus", morphologia: "Pronombre, acusativo, plural, masculino", syntaxis: "Objeto Directo", translatio: { es: "los suyos", en: "his men", zh: "自己的士兵後" } },
                            { textus: "proelium", lemma: "proelium", morphologia: "Sustantivo, acusativo, singular, neutro", syntaxis: "Objeto Directo", translatio: { es: "combate", en: "battle", zh: "戰鬥" } },
                            { textus: "commisit", lemma: "committo", morphologia: "Verbo, 3ª p, singular, perfecto, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "entabló", en: "he joined", zh: "發起了" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Oración compleja con el verbo principal 'commisit'. Contiene dos ablativos absolutos ('remotis equis', 'aequato periculo') y una cláusula de finalidad ('ut... tolleret').",
                        notae: "La acción de retirar los caballos, empezando por el suyo, es un gesto de liderazgo para demostrar que la única opción es la victoria o la muerte, infundiendo valor a las tropas.",
                        translationes: {
                            es: "César, tras retirar de la vista primero su propio caballo y luego los de todos, para, igualado el peligro para todos, eliminar la esperanza de huida, arengó a los suyos y entabló combate.",
                            en: "Caesar, having first removed his own horse and then those of all others from sight, so that, with the danger equalized for all, he might take away the hope of flight, encouraged his men and joined battle.",
                            zh: "凱撒首先將他自己的、然後將所有人的馬匹從視線中移開，為了使所有人的風險均等並消除逃跑的希望，在激勵了自己的士兵後，發起了戰鬥。"
                        }
                    },
                    {
                        id_orationis: 'o2',
                        original_lat: "Milites e loco superiore pilis missis facile hostium phalangem perfregerunt.",
                        verba: [
                            { textus: "Milites", lemma: "miles", morphologia: "Sustantivo, nominativo, plural, masculino", syntaxis: "Sujeto", translatio: { es: "Los soldados", en: "The soldiers", zh: "士兵們" } },
                            { textus: "e", lemma: "ex", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "desde", en: "from", zh: "從" } },
                            { textus: "loco", lemma: "locus", morphologia: "Sustantivo, ablativo, singular, masculino", syntaxis: "C. preposicional", translatio: { es: "su posición", en: "their position", zh: "較高的" } },
                            { textus: "superiore", lemma: "superior", morphologia: "Adjetivo, ablativo, singular, masculino, comparativo", syntaxis: "Modificador", translatio: { es: "más elevada", en: "higher", zh: "位置" } },
                            { textus: "pilis", lemma: "pilum", morphologia: "Sustantivo, ablativo, plural, neutro", syntaxis: "Sujeto (de ablativo absoluto)", translatio: { es: "sus jabalinas", en: "their javelins", zh: "投出" } },
                            { textus: "missis", lemma: "mitto", morphologia: "Verbo, participio, perfecto, pasivo, ablativo, plural, neutro", syntaxis: "Verbo (de ablativo absoluto)", translatio: { es: "lanzadas", en: "having been thrown", zh: "標槍後" } },
                            { textus: "facile", lemma: "facile", morphologia: "Adverbio", syntaxis: "Modificador verbal", translatio: { es: "fácilmente", en: "easily", zh: "輕易地" } },
                            { textus: "hostium", lemma: "hostis", morphologia: "Sustantivo, genitivo, plural, masculino", syntaxis: "C. del Nombre", translatio: { es: "de los enemigos", en: "of the enemy", zh: "敵人的" } },
                            { textus: "phalangem", lemma: "phalanx", morphologia: "Sustantivo, acusativo, singular, femenino", syntaxis: "Objeto Directo", translatio: { es: "la falange", en: "the phalanx", zh: "方陣" } },
                            { textus: "perfregerunt", lemma: "perfringo", morphologia: "Verbo, 3ª p, plural, perfecto, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "rompieron", en: "they broke through", zh: "擊破了" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Oración simple con un ablativo absoluto ('pilis missis') que describe la acción que permite el resultado.",
                        notae: "",
                        translationes: {
                            es: "Los soldados, desde su posición más elevada, lanzadas sus jabalinas, rompieron fácilmente la falange de los enemigos.",
                            en: "The soldiers, from their higher position, having thrown their javelins, easily broke through the enemy's phalanx.",
                            zh: "士兵們從較高的位置投出標槍後，輕易地擊破了敵人的方陣。"
                        }
                    },
                    {
                        id_orationis: 'o3',
                        original_lat: "Ea disiecta gladiis destrictis in eos impetum fecerunt.",
                        verba: [
                            { textus: "Ea", lemma: "is", morphologia: "Pronombre, ablativo, singular, femenino", syntaxis: "Sujeto (de ablativo absoluto)", translatio: { es: "esta", en: "it", zh: "它" } },
                            { textus: "disiecta", lemma: "disicio", morphologia: "Verbo, participio, perfecto, pasivo, ablativo, singular, femenino", syntaxis: "Verbo (de ablativo absoluto)", translatio: { es: "una vez desbaratada", en: "having been scattered", zh: "被擊潰後" } },
                            { textus: "gladiis", lemma: "gladius", morphologia: "Sustantivo, ablativo, plural, masculino", syntaxis: "Sujeto (de ablativo absoluto)", translatio: { es: "las espadas", en: "their swords", zh: "拔出" } },
                            { textus: "destrictis", lemma: "destringo", morphologia: "Verbo, participio, perfecto, pasivo, ablativo, plural, masculino", syntaxis: "Verbo (de ablativo absoluto)", translatio: { es: "desenvainadas", en: "having been drawn", zh: "劍" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "contra", en: "against", zh: "向" } },
                            { textus: "eos", lemma: "is", morphologia: "Pronombre, acusativo, plural, masculino", syntaxis: "C. preposicional", translatio: { es: "ellos", en: "them", zh: "他們" } },
                            { textus: "impetum", lemma: "impetus", morphologia: "Sustantivo, acusativo, singular, masculino", syntaxis: "Objeto Directo", translatio: { es: "un ataque", en: "an attack", zh: "發動了" } },
                            { textus: "fecerunt", lemma: "facio", morphologia: "Verbo, 3ª p, plural, perfecto, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "hicieron", en: "they made", zh: "衝鋒" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Oración simple con dos ablativos absolutos ('Ea disiecta', 'gladiis destrictis') que marcan la secuencia de acciones.",
                        notae: "La secuencia 'pilum-gladius' (jabalina y luego espada) era la táctica de infantería romana por excelencia.",
                        translationes: {
                            es: "Una vez desbaratada esta, desenvainadas las espadas, hicieron un ataque contra ellos.",
                            en: "With it (the phalanx) having been scattered, their swords having been drawn, they made an attack against them.",
                            zh: "在它（方陣）被擊潰後，士兵們拔出劍，向他們發動了衝鋒。"
                        }
                    },
                    {
                        id_orationis: 'o4',
                        original_lat: "Gallis magno ad pugnam erat impedimento quod, pluribus eorum scutis uno ictu pilorum transfixis et conligatis, cum ferrum se inflexisset, neque euellere neque sinistra impedita satis commode pugnare poterant, multi ut diu iactato brachio praeoptarent scuta e manu emittere et nudo corpore pugnare.",
                        verba: [
                            { textus: "Gallis", lemma: "Gallus", morphologia: "Sustantivo, dativo, plural, masculino", syntaxis: "Dativo de interés", translatio: { es: "para los galos", en: "for the Gauls", zh: "對高盧人來說" } },
                            { textus: "magno", lemma: "magnus", morphologia: "Adjetivo, dativo, singular, neutro", syntaxis: "Dativo de finalidad", translatio: { es: "de gran", en: "a great", zh: "巨大的" } },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "para", en: "for", zh: "在" } },
                            { textus: "pugnam", lemma: "pugna", morphologia: "Sustantivo, acusativo, singular, femenino", syntaxis: "C. preposicional", translatio: { es: "la lucha", en: "the fight", zh: "戰鬥中" } },
                            { textus: "erat", lemma: "sum", morphologia: "Verbo, 3ª p, singular, imperfecto, indicativo", syntaxis: "Verbo Principal", translatio: { es: "era", en: "it was", zh: "是" } },
                            { textus: "impedimento", lemma: "impedimentum", morphologia: "Sustantivo, dativo, singular, neutro", syntaxis: "Dativo de finalidad", translatio: { es: "impedimento", en: "a hindrance", zh: "障礙" } },
                            { textus: "quod", lemma: "quod", morphologia: "Conjunción", syntaxis: "Nexo (explicativo)", translatio: { es: "el hecho de que", en: "the fact that", zh: "，因為" } },
                            { textus: "pluribus", lemma: "multus", morphologia: "Adjetivo, ablativo, plural, neutro", syntaxis: "Sujeto (de ablativo absoluto)", translatio: { es: "muchos", en: "several", zh: "他們的" } },
                            { textus: "eorum", lemma: "is", morphologia: "Pronombre, genitivo, plural, masculino", syntaxis: "Genitivo partitivo", translatio: { es: "de sus", en: "of their", zh: "許多" } },
                            { textus: "scutis", lemma: "scutum", morphologia: "Sustantivo, ablativo, plural, neutro", syntaxis: "Sujeto (de ablativo absoluto)", translatio: { es: "escudos", en: "shields", zh: "盾牌" } },
                            { textus: "uno", lemma: "unus", morphologia: "Adjetivo, ablativo, singular, masculino", syntaxis: "Modificador", translatio: { es: "con un solo", en: "by one", zh: "被一" } },
                            { textus: "ictu", lemma: "ictus", morphologia: "Sustantivo, ablativo, singular, masculino", syntaxis: "C.C. de Medio", translatio: { es: "golpe", en: "blow", zh: "擊" } },
                            { textus: "pilorum", lemma: "pilum", morphologia: "Sustantivo, genitivo, plural, neutro", syntaxis: "C. del Nombre", translatio: { es: "de las jabalinas", en: "of the javelins", zh: "標槍" } },
                            { textus: "transfixis", lemma: "transfigo", morphologia: "Verbo, participio, perfecto, pasivo, ablativo, plural, neutro", syntaxis: "Verbo (de ablativo absoluto)", translatio: { es: "atravesados", en: "having been pierced", zh: "刺穿" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "並" } },
                            { textus: "conligatis", lemma: "conligo", morphologia: "Verbo, participio, perfecto, pasivo, ablativo, plural, neutro", syntaxis: "Verbo (de ablativo absoluto)", translatio: { es: "unidos", en: "pinned together", zh: "釘在了一起" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "cum", lemma: "cum", morphologia: "Conjunción", syntaxis: "Nexo (causal)", translatio: { es: "como", en: "since", zh: "當" } },
                            { textus: "ferrum", lemma: "ferrum", morphologia: "Sustantivo, nominativo, singular, neutro", syntaxis: "Sujeto", translatio: { es: "el hierro", en: "the iron", zh: "鐵頭" } },
                            { textus: "se", lemma: "sui", morphologia: "Pronombre, acusativo, singular", syntaxis: "Objeto Directo", translatio: { es: "se", en: "itself", zh: "自身" } },
                            { textus: "inflexisset", lemma: "inflecto", morphologia: "Verbo, 3ª p, singular, pluscuamperfecto, subjuntivo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "se había doblado", en: "had bent", zh: "彎曲後" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "neque", lemma: "neque", morphologia: "Conjunción", syntaxis: "Nexo (correlativo)", translatio: { es: "ni", en: "neither", zh: "他們既" } },
                            { textus: "euellere", lemma: "euello", morphologia: "Verbo, infinitivo, presente, activo", syntaxis: "Verbo (infinitivo)", translatio: { es: "sacarlas", en: "to pull them out", zh: "拔不出" } },
                            { textus: "neque", lemma: "neque", morphologia: "Conjunción", syntaxis: "Nexo (correlativo)", translatio: { es: "ni", en: "nor", zh: "也" } },
                            { textus: "sinistra", lemma: "sinister", morphologia: "Adjetivo, ablativo, singular, femenino", syntaxis: "Sujeto (de ablativo absoluto)", translatio: { es: "la (mano) izquierda", en: "their left hand", zh: "因左手" } },
                            { textus: "impedita", lemma: "impedio", morphologia: "Verbo, participio, perfecto, pasivo, ablativo, singular, femenino", syntaxis: "Verbo (de ablativo absoluto)", translatio: { es: "obstaculizada", en: "being encumbered", zh: "受阻" } },
                            { textus: "satis", lemma: "satis", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "con bastante", en: "sufficiently", zh: "無法" } },
                            { textus: "commode", lemma: "commode", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "comodidad", en: "comfortably", zh: "靈活地" } },
                            { textus: "pugnare", lemma: "pugno", morphologia: "Verbo, infinitivo, presente, activo", syntaxis: "Verbo (infinitivo)", translatio: { es: "luchar", en: "to fight", zh: "戰鬥" } },
                            { textus: "poterant", lemma: "possum", morphologia: "Verbo, 3ª p, plural, imperfecto, indicativo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "podían", en: "they were able", zh: "" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "multi", lemma: "multus", morphologia: "Adjetivo, nominativo, plural, masculino", syntaxis: "Sujeto", translatio: { es: "muchos", en: "many", zh: "以至於許多人" } },
                            { textus: "ut", lemma: "ut", morphologia: "Conjunción", syntaxis: "Nexo (consecutivo)", translatio: { es: "de modo que", en: "so that", zh: "" } },
                            { textus: "diu", lemma: "diu", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "largo rato", en: "for a long time", zh: "在長時間" } },
                            { textus: "iactato", lemma: "iacto", morphologia: "Verbo, participio, perfecto, pasivo, ablativo, singular, masculino", syntaxis: "Verbo (de ablativo absoluto)", translatio: { es: "tras agitar", en: "having tossed", zh: "揮動" } },
                            { textus: "brachio", lemma: "brachium", morphologia: "Sustantivo, ablativo, singular, neutro", syntaxis: "Sujeto (de ablativo absoluto)", translatio: { es: "el brazo", en: "their arm", zh: "手臂後" } },
                            { textus: "praeoptarent", lemma: "praeopto", morphologia: "Verbo, 3ª p, plural, imperfecto, subjuntivo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "preferían", en: "they preferred", zh: "寧願" } },
                            { textus: "scuta", lemma: "scutum", morphologia: "Sustantivo, acusativo, plural, neutro", syntaxis: "Objeto Directo", translatio: { es: "los escudos", en: "the shields", zh: "扔掉" } },
                            { textus: "e", lemma: "ex", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "de", en: "from", zh: "" } },
                            { textus: "manu", lemma: "manus", morphologia: "Sustantivo, ablativo, singular, femenino", syntaxis: "C. preposicional", translatio: { es: "la mano", en: "their hand", zh: "手中的盾牌" } },
                            { textus: "emittere", lemma: "emitto", morphologia: "Verbo, infinitivo, presente, activo", syntaxis: "Verbo (infinitivo)", translatio: { es: "arrojar", en: "to cast away", zh: "" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "並" } },
                            { textus: "nudo", lemma: "nudus", morphologia: "Adjetivo, ablativo, singular, neutro", syntaxis: "Modificador", translatio: { es: "desnudo", en: "unprotected", zh: "赤裸" } },
                            { textus: "corpore", lemma: "corpus", morphologia: "Sustantivo, ablativo, singular, neutro", syntaxis: "Ablativo de modo", translatio: { es: "con el cuerpo", en: "with their body", zh: "身體" } },
                            { textus: "pugnare", lemma: "pugno", morphologia: "Verbo, infinitivo, presente, activo", syntaxis: "Verbo (infinitivo)", translatio: { es: "luchar", en: "to fight", zh: "戰鬥" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Larga oración construida en torno a una construcción de doble dativo ('Gallis... erat impedimento'). El impedimento se explica con una cláusula con 'quod', que contiene a su vez ablativos absolutos y una cláusula con 'cum'. Todo esto desemboca en una cláusula consecutiva ('ut... praeoptarent').",
                        notae: "Este pasaje ofrece una descripción técnica muy detallada del efecto del 'pilum' romano, un arma diseñada no solo para herir, sino para inutilizar la principal defensa del enemigo, su escudo.",
                        translationes: {
                            es: "Para los galos era un gran impedimento para la lucha el hecho de que, atravesados y unidos muchos de sus escudos por un solo golpe de las jabalinas, como el hierro se había doblado, no podían ni sacarlas ni luchar con bastante comodidad con la mano izquierda obstaculizada, de modo que muchos, tras agitar el brazo largo rato, preferían arrojar los escudos de la mano y luchar con el cuerpo desnudo.",
                            en: "It was a great hindrance to the Gauls for the fight that, since several of their shields had been pierced through and pinned together by a single blow of the javelins, as the iron had bent, they could neither pull them out nor fight comfortably enough with their left hand being encumbered, so that many, after tossing their arm for a long time, preferred to cast the shields from their hand and to fight with their body unprotected.",
                            zh: "對高盧人來說，在戰鬥中有一個巨大的障礙，因為他們的許多盾牌被一擊標槍刺穿並釘在了一起，當鐵頭彎曲後，他們既拔不出標槍，也因左手受阻而無法靈活地戰鬥，以至於許多人在長時間揮動手臂後，寧願扔掉手中的盾牌，赤裸身體戰鬥。"
                        }
                    },
                    {
                        id_orationis: 'o5',
                        original_lat: "Tandem uulneribus defessi et pedem referre et, quod mons suberat circiter mille passuum, eo se recipere coeperunt.",
                        verba: [
                            { textus: "Tandem", lemma: "tandem", morphologia: "Adverbio", syntaxis: "Modificador temporal", translatio: { es: "Finalmente", en: "At last", zh: "最後" } },
                            { textus: "uulneribus", lemma: "uulnus", morphologia: "Sustantivo, ablativo, plural, neutro", syntaxis: "C.C. de Causa", translatio: { es: "por las heridas", en: "by their wounds", zh: "因傷" } },
                            { textus: "defessi", lemma: "defetiscor", morphologia: "Verbo, participio, perfecto, deponente, nominativo, plural, masculino", syntaxis: "Participio concertado", translatio: { es: "agotados", en: "exhausted", zh: "疲憊不堪" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción", syntaxis: "Nexo (correlativo)", translatio: { es: "", en: "", zh: "" } },
                            { textus: "pedem", lemma: "pes", morphologia: "Sustantivo, acusativo, singular, masculino", syntaxis: "Objeto Directo", translatio: { es: "a retroceder", en: "to retreat", zh: "開始" } },
                            { textus: "referre", lemma: "refero", morphologia: "Verbo, infinitivo, presente, activo", syntaxis: "Verbo (infinitivo)", translatio: { es: "", en: "", zh: "撤退" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción", syntaxis: "Nexo (correlativo)", translatio: { es: "y", en: "and", zh: "並" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "quod", lemma: "quod", morphologia: "Conjunción", syntaxis: "Nexo (causal)", translatio: { es: "como", en: "because", zh: "因為" } },
                            { textus: "mons", lemma: "mons", morphologia: "Sustantivo, nominativo, singular, masculino", syntaxis: "Sujeto", translatio: { es: "un monte", en: "a mountain", zh: "有座山" } },
                            { textus: "suberat", lemma: "subsum", morphologia: "Verbo, 3ª p, singular, imperfecto, indicativo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "estaba cerca", en: "was nearby", zh: "在附近" } },
                            { textus: "circiter", lemma: "circiter", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "a cerca de", en: "about", zh: "大約" } },
                            { textus: "mille", lemma: "mille", morphologia: "Adjetivo numeral", syntaxis: "C.C. de Distancia", translatio: { es: "mil", en: "a thousand", zh: "一千" } },
                            { textus: "passuum", lemma: "passus", morphologia: "Sustantivo, genitivo, plural, masculino", syntaxis: "Genitivo partitivo", translatio: { es: "pasos", en: "paces", zh: "步遠" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "eo", lemma: "eo", morphologia: "Adverbio", syntaxis: "Modificador de lugar", translatio: { es: "allí", en: "there", zh: "向那裡" } },
                            { textus: "se", lemma: "sui", morphologia: "Pronombre, acusativo, singular", syntaxis: "Objeto Directo", translatio: { es: "a retirarse", en: "to betake themselves", zh: "撤退" } },
                            { textus: "recipere", lemma: "recipio", morphologia: "Verbo, infinitivo, presente, activo", syntaxis: "Verbo (infinitivo)", translatio: { es: "", en: "", zh: "" } },
                            { textus: "coeperunt", lemma: "coepi", morphologia: "Verbo, 3ª p, plural, perfecto, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "comenzaron", en: "they began", zh: "" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Oración principal ('coeperunt') que rige dos infinitivos coordinados ('referre et... recipere').",
                        notae: "'Pedem referre' es una locución militar para 'retroceder'.",
                        translationes: {
                            es: "Finalmente, agotados por las heridas, comenzaron a retroceder y, como había un monte cerca a unos mil pasos, a retirarse allí.",
                            en: "At last, exhausted by their wounds, they began both to retreat and, because there was a mountain nearby about a thousand paces away, to betake themselves there.",
                            zh: "最後，他們因傷疲憊不堪，開始撤退，並且因為附近大約一千步遠有座山，便向那裡撤退。"
                        }
                    },
                    {
                        id_orationis: 'o6',
                        original_lat: "Capto monte et succedentibus nostris Boii et Tulingi, qui hominum milibus circiter XV agmen hostium claudebant et nouissimis praesidio erant, ex itinere nostros latere aperto adgressi circumuenire et id conspicati Heluetii qui in montem sese receperant rursus instare et proelium redintegrare coeperunt.",
                        verba: [
                            { textus: "Capto", lemma: "capio", morphologia: "Verbo, participio, perfecto, pasivo, ablativo, singular, masculino", syntaxis: "Verbo (de ablativo absoluto)", translatio: { es: "tomado", en: "having been captured", zh: "在山" } },
                            { textus: "monte", lemma: "mons", morphologia: "Sustantivo, ablativo, singular, masculino", syntaxis: "Sujeto (de ablativo absoluto)", translatio: { es: "el monte", en: "the mountain", zh: "被佔領" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "且" } },
                            { textus: "succedentibus", lemma: "succedo", morphologia: "Verbo, participio, presente, activo, ablativo, plural, masculino", syntaxis: "Verbo (de ablativo absoluto)", translatio: { es: "mientras subían", en: "were advancing up", zh: "我方人員" } },
                            { textus: "nostris", lemma: "noster", morphologia: "Pronombre, ablativo, plural, masculino", syntaxis: "Sujeto (de ablativo absoluto)", translatio: { es: "los nuestros", en: "our men", zh: "逼近時" } },
                            { textus: "Boii", lemma: "Boii", morphologia: "Sustantivo, nominativo, plural, masculino", syntaxis: "Sujeto", translatio: { es: "los boyos", en: "the Boii", zh: "波伊人" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "和" } },
                            { textus: "Tulingi", lemma: "Tulingi", morphologia: "Sustantivo, nominativo, plural, masculino", syntaxis: "Sujeto", translatio: { es: "túlingos", en: "Tulingi", zh: "圖靈吉人" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "qui", lemma: "qui", morphologia: "Pronombre relativo, nominativo, plural, masculino", syntaxis: "Sujeto", translatio: { es: "que", en: "who", zh: "他們" } },
                            { textus: "hominum", lemma: "homo", morphologia: "Sustantivo, genitivo, plural, masculino", syntaxis: "Genitivo partitivo", translatio: { es: "de hombres", en: "of men", zh: "人" } },
                            { textus: "milibus", lemma: "mille", morphologia: "Sustantivo, ablativo, plural, neutro", syntaxis: "Ablativo de medida", translatio: { es: "con unos ... mil", en: "with about ... thousand", zh: "大約一萬五千" } },
                            { textus: "circiter", lemma: "circiter", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "", en: "", zh: "" } },
                            { textus: "XV", lemma: "quindecim", morphologia: "Adjetivo numeral", syntaxis: "Modificador", translatio: { es: "quince", en: "fifteen", zh: "" } },
                            { textus: "agmen", lemma: "agmen", morphologia: "Sustantivo, acusativo, singular, neutro", syntaxis: "Objeto Directo", translatio: { es: "la columna", en: "the column", zh: "在敵人" } },
                            { textus: "hostium", lemma: "hostis", morphologia: "Sustantivo, genitivo, plural, masculino", syntaxis: "C. del Nombre", translatio: { es: "enemiga", en: "of the enemy", zh: "" } },
                            { textus: "claudebant", lemma: "claudo", morphologia: "Verbo, 3ª p, plural, imperfecto, indicativo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "cerraban", en: "were closing", zh: "隊列的末尾" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "並" } },
                            { textus: "nouissimis", lemma: "nouissimus", morphologia: "Adjetivo, dativo, plural, masculino", syntaxis: "Dativo de interés", translatio: { es: "a la retaguardia", en: "for the rearguard", zh: "充當" } },
                            { textus: "praesidio", lemma: "praesidium", morphologia: "Sustantivo, dativo, singular, neutro", syntaxis: "Dativo de finalidad", translatio: { es: "de protección", en: "as a guard", zh: "後衛的" } },
                            { textus: "erant", lemma: "sum", morphologia: "Verbo, 3ª p, plural, imperfecto, indicativo", syntaxis: "Verbo (de subordinada)", translatio: { es: "servían", en: "they were", zh: "護衛" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "ex", lemma: "ex", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "desde", en: "from", zh: "從" } },
                            { textus: "itinere", lemma: "iter", morphologia: "Sustantivo, ablativo, singular, neutro", syntaxis: "C. preposicional", translatio: { es: "la marcha", en: "the march", zh: "行軍途中" } },
                            { textus: "nostros", lemma: "noster", morphologia: "Pronombre, acusativo, plural, masculino", syntaxis: "Objeto Directo", translatio: { es: "a los nuestros", en: "our men", zh: "在我方" } },
                            { textus: "latere", lemma: "latus", morphologia: "Sustantivo, ablativo, singular, neutro", syntaxis: "C.C. de Lugar (por donde)", translatio: { es: "por el flanco", en: "on the flank", zh: "暴露的" } },
                            { textus: "aperto", lemma: "apertus", morphologia: "Adjetivo, ablativo, singular, neutro", syntaxis: "Modificador", translatio: { es: "abierto", en: "open", zh: "側翼" } },
                            { textus: "adgressi", lemma: "adgredior", morphologia: "Verbo, participio, perfecto, deponente, nominativo, plural, masculino", syntaxis: "Participio concertado", translatio: { es: "atacando", en: "having attacked", zh: "發起攻擊" } },
                            { textus: "circumuenire", lemma: "circumuenio", morphologia: "Verbo, infinitivo, presente, activo", syntaxis: "Verbo (infinitivo)", translatio: { es: "a rodear", en: "to surround", zh: "試圖包圍" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "；" } },
                            { textus: "id", lemma: "is", morphologia: "Pronombre, acusativo, singular, neutro", syntaxis: "Objeto Directo", translatio: { es: "esto", en: "this", zh: "看見" } },
                            { textus: "conspicati", lemma: "conspicor", morphologia: "Verbo, participio, perfecto, deponente, nominativo, plural, masculino", translatio: { es: "habiendo visto", en: "having caught sight of", zh: "這情況" } },
                            { textus: "Heluetii", lemma: "Heluetii", morphologia: "Sustantivo, nominativo, plural, masculino", syntaxis: "Sujeto", translatio: { es: "los helvecios", en: "the Helvetii", zh: "的赫爾維蒂人" } },
                            { textus: "qui", lemma: "qui", morphologia: "Pronombre relativo, nominativo, plural, masculino", syntaxis: "Sujeto", translatio: { es: "que", en: "who", zh: "那些" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "al", en: "onto", zh: "到" } },
                            { textus: "montem", lemma: "mons", morphologia: "Sustantivo, acusativo, singular, masculino", syntaxis: "C. preposicional", translatio: { es: "monte", en: "the mountain", zh: "山上" } },
                            { textus: "sese", lemma: "sui", morphologia: "Pronombre, acusativo, singular", syntaxis: "Objeto Directo", translatio: { es: "se", en: "themselves", zh: "" } },
                            { textus: "receperant", lemma: "recipio", morphologia: "Verbo, 3ª p, plural, pluscuamperfecto, indicativo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "se habían retirado", en: "had retreated", zh: "撤退的" } },
                            { textus: "rursus", lemma: "rursus", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "de nuevo", en: "again", zh: "再次" } },
                            { textus: "instare", lemma: "insto", morphologia: "Verbo, infinitivo, presente, activo", syntaxis: "Verbo (infinitivo)", translatio: { es: "a presionar", en: "to press on", zh: "施壓" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "並" } },
                            { textus: "proelium", lemma: "proelium", morphologia: "Sustantivo, acusativo, singular, neutro", syntaxis: "Objeto Directo", translatio: { es: "el combate", en: "the battle", zh: "戰鬥" } },
                            { textus: "redintegrare", lemma: "redintegro", morphologia: "Verbo, infinitivo, presente, activo", syntaxis: "Verbo (infinitivo)", translatio: { es: "a reanudar", en: "to renew", zh: "重啟" } },
                            { textus: "coeperunt", lemma: "coepi", morphologia: "Verbo, 3ª p, plural, perfecto, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "comenzaron", en: "began", zh: "開始" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Oración muy compleja con múltiples sujetos y acciones. Se inicia con dos ablativos absolutos. El primer sujeto ('Boii et Tulingi') ataca. El segundo sujeto ('Heluetii'), al ver esto, también reanuda el combate. Ambas acciones culminan en el verbo principal 'coeperunt'.",
                        notae: "'latere aperto' se refiere al flanco derecho de los legionarios, el que no estaba protegido por el escudo. 'Praesidio esse' es una construcción de doble dativo.",
                        translationes: {
                            es: "Tomado el monte y mientras subían los nuestros, los boyos y los túlingos, que con unos quince mil hombres cerraban la columna enemiga y servían de protección a la retaguardia, atacando a los nuestros por el flanco abierto desde la marcha, comenzaron a rodearlos; y habiendo visto esto los helvecios que se habían retirado al monte, comenzaron de nuevo a presionar y a reanudar el combate.",
                            en: "With the mountain captured and our men advancing up, the Boii and Tulingi, who with about fifteen thousand men were closing the enemy's column and were serving as a guard for the rearguard, having attacked our men on the open flank from their march, began to surround them; and the Helvetii who had retreated to the mountain, having caught sight of this, began again to press on and to renew the battle.",
                            zh: "在我方佔領山頭並逼近時，大約一萬五千人的波伊人和圖靈吉人（他們負責敵軍隊列的末尾並充當後衛的護衛）從行軍途中在我方暴露的側翼發起攻擊，試圖包圍我們；而撤退到山上的赫爾維蒂人看見這情況，也再次開始施壓並重啟戰鬥。"
                        }
                    },
                    {
                        id_orationis: 'o7',
                        original_lat: "Romani conuersa signa bipertito intulerunt: prima et secunda acies, ut uictis ac submotis resisteret, tertia, ut uenientes sustineret.",
                        verba: [
                            { textus: "Romani", lemma: "Romanus", morphologia: "Sustantivo, nominativo, plural, masculino", syntaxis: "Sujeto", translatio: { es: "Los romanos", en: "The Romans", zh: "羅馬人" } },
                            { textus: "conuersa", lemma: "conuerto", morphologia: "Verbo, participio, perfecto, pasivo, acusativo, plural, neutro", syntaxis: "Participio concertado", translatio: { es: "vueltas", en: "having turned", zh: "轉變" } },
                            { textus: "signa", lemma: "signum", morphologia: "Sustantivo, acusativo, plural, neutro", syntaxis: "Objeto Directo", translatio: { es: "las insignias", en: "their standards", zh: "軍旗" } },
                            { textus: "bipertito", lemma: "bipertito", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "en dos formaciones", en: "in two divisions", zh: "兵分兩路" } },
                            { textus: "intulerunt", lemma: "infero", morphologia: "Verbo, 3ª p, plural, perfecto, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "avanzaron", en: "advanced", zh: "迎敵" } },
                            { textus: ":", lemma: ":", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ":", en: ":", zh: "：" } },
                            { textus: "prima", lemma: "primus", morphologia: "Adjetivo, nominativo, singular, femenino", syntaxis: "Sujeto", translatio: { es: "la primera", en: "the first", zh: "第一" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "和" } },
                            { textus: "secunda", lemma: "secundus", morphologia: "Adjetivo, nominativo, singular, femenino", syntaxis: "Sujeto", translatio: { es: "segunda", en: "second", zh: "第二" } },
                            { textus: "acies", lemma: "acies", morphologia: "Sustantivo, nominativo, singular, femenino", syntaxis: "Sujeto", translatio: { es: "línea", en: "line", zh: "戰線" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "ut", lemma: "ut", morphologia: "Conjunción", syntaxis: "Nexo (finalidad)", translatio: { es: "para", en: "in order to", zh: "為了" } },
                            { textus: "uictis", lemma: "uinco", morphologia: "Verbo, participio, perfecto, pasivo, dativo, plural, masculino", syntaxis: "Objeto Indirecto", translatio: { es: "a los vencidos", en: "the conquered", zh: "抵抗" } },
                            { textus: "ac", lemma: "ac", morphologia: "Conjunción", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "和" } },
                            { textus: "submotis", lemma: "submoueo", morphologia: "Verbo, participio, perfecto, pasivo, dativo, plural, masculino", syntaxis: "Objeto Indirecto", translatio: { es: "rechazados", en: "driven back", zh: "被擊退的" } },
                            { textus: "resisteret", lemma: "resisto", morphologia: "Verbo, 3ª p, singular, imperfecto, subjuntivo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "hacer frente", en: "resist", zh: "敵人" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "tertia", lemma: "tertius", morphologia: "Adjetivo, nominativo, singular, femenino", syntaxis: "Sujeto", translatio: { es: "la tercera", en: "the third", zh: "第三戰線" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "ut", lemma: "ut", morphologia: "Conjunción", syntaxis: "Nexo (finalidad)", translatio: { es: "para", en: "in order to", zh: "為了" } },
                            { textus: "uenientes", lemma: "uenio", morphologia: "Verbo, participio, presente, activo, acusativo, plural, masculino", syntaxis: "Objeto Directo", translatio: { es: "a los que llegaban", en: "those arriving", zh: "抵擋" } },
                            { textus: "sustineret", lemma: "sustineo", morphologia: "Verbo, 3ª p, singular, imperfecto, subjuntivo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "contener", en: "withstand", zh: "新來的" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Oración principal ('Romani... intulerunt') seguida de una explicación distributiva, compuesta por dos cláusulas de finalidad que detallan la misión de cada parte del ejército.",
                        notae: "'Conuersa signa inferre' es una frase técnica militar que significa cambiar de frente. 'Bipertito' significa 'en dos partes/direcciones'.",
                        translationes: {
                            es: "Los romanos, vueltas las insignias, avanzaron en dos formaciones: la primera y segunda línea, para hacer frente a los vencidos y rechazados; la tercera, para contener a los que llegaban.",
                            en: "The Romans, having turned their standards, advanced in two divisions: the first and second lines, to resist the conquered and driven back; the third, to withstand those who were arriving.",
                            zh: "羅馬人轉變軍旗，兵分兩路迎敵：第一和第二戰線，為了抵抗已被擊敗和擊退的敵人；第三戰線，為了抵擋新來的敵人。"
                        }
                    }
                ]
            }
        ]
    }
};

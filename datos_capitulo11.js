const corpus = {
    titulus_principalis: "De Bello Gallico, I, 11",
    auctor: "C. Iulius Caesar",
    titulus_secundarius: {
        es: "Las súplicas de los aliados",
        en: "The Pleas of the Allies",
        zh: "盟友的懇求"
    },
    introductio: {
        es: {
            titulus: "Introducción al Capítulo 11",
            contentus: `<p>En este capítulo, la migración helvecia se convierte en una invasión en toda regla. Tras cruzar el territorio de los sécuanos, entran en las tierras de los heduos —aliados de Roma— y comienzan a devastarlas. Incapaces de defenderse, los heduos envían una embajada a César para solicitar auxilio. Su discurso apela a su lealtad histórica y a la humillación que supone ser atacados casi a la vista del ejército romano. A estas quejas se suman las de otros pueblos aliados, los ambarros y los alóbroges. Ante la inminente ruina de sus socios y el avance enemigo, César decide que no puede esperar más y debe intervenir de inmediato.</p>`
        },
        en: {
            titulus: "Introduction to Chapter 11",
            contentus: `<p>In this chapter, the Helvetian migration turns into a full-blown invasion. After crossing the territory of the Sequani, they enter the lands of the Aedui—allies of Rome—and begin to ravage them. Unable to defend themselves, the Aedui send an embassy to Caesar to request aid. Their speech appeals to their historical loyalty and the humiliation of being attacked almost within sight of the Roman army. These complaints are joined by those of other allied peoples, the Ambarri and the Allobroges. Faced with the imminent ruin of his partners and the enemy's advance, Caesar decides he can wait no longer and must intervene immediately.</p>`
        },
        zh: {
            titulus: "第 11 章介紹",
            contentus: `<p>在本章中，赫爾維蒂人的遷徙演變成了一場全面的入侵。在穿越塞夸尼人的領土後，他們進入了羅馬盟友埃杜伊人的土地並開始蹂躏。由於無法自衛，埃杜伊人派使團向凱撒求援。他們的言辭訴諸於他們對羅馬歷史性的忠誠，以及在羅馬軍隊幾乎眼皮底下遭受攻擊的恥辱。其他盟友部落，如安巴里人和阿洛布羅基人，也紛紛前來申訴。面對盟友即將毀滅和敵軍步步緊逼的局面，凱撒決定他不能再等，必須立即干預。</p>`
        }
    },
    textus: {
        id: 11,
        capitula: [
            {
                id_capituli: 11,
                orationes: [
                    {
                        id_orationis: 'o1',
                        original_lat: "Heluetii iam per angustias et fines Sequanorum suas copias traduxerant et in Haeduorum fines peruenerant eorumque agros populabantur.",
                        verba: [
                            { textus: "Heluetii", lemma: "Helvetii", morphologia: "Sustantivo, nominativo masculino plural", syntaxis: "Sujeto", translatio: { es: "los helvecios", en: "the Helvetii", zh: "赫爾維蒂人" } },
                            { textus: "iam", lemma: "iam", morphologia: "Adverbio", syntaxis: "Modificador temporal", translatio: { es: "ya", en: "already", zh: "已經" } },
                            { textus: "per", lemma: "per", morphologia: "Preposición (+ acusativo)", syntaxis: "Preposición", translatio: { es: "a través de", en: "through", zh: "通過" } },
                            { textus: "angustias", lemma: "angustiae", morphologia: "Sustantivo, acusativo femenino plural", syntaxis: "Complemento regido por 'per'", translatio: { es: "los desfiladeros", en: "the narrow passes", zh: "狹窄的通道" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "和" } },
                            { textus: "fines", lemma: "finis", morphologia: "Sustantivo, acusativo masculino plural", syntaxis: "Complemento regido por 'per'", translatio: { es: "el territorio", en: "the territory", zh: "領土" } },
                            { textus: "Sequanorum", lemma: "Sequani", morphologia: "Sustantivo, genitivo masculino plural", syntaxis: "Complemento del Nombre", translatio: { es: "de los sécuanos", en: "of the Sequani", zh: "塞夸尼人的" } },
                            { textus: "suas", lemma: "suus", morphologia: "Adjetivo posesivo, acusativo femenino plural", syntaxis: "Atributo de 'copias'", translatio: { es: "sus", en: "their", zh: "他們的" } },
                            { textus: "copias", lemma: "copia", morphologia: "Sustantivo, acusativo femenino plural", syntaxis: "Objeto Directo", translatio: { es: "tropas", en: "forces", zh: "軍隊" } },
                            { textus: "traduxerant", lemma: "traduco", morphologia: "Verbo, 3ª p. pl., pluscuamperfecto activo, indicativo", syntaxis: "Verbo", translatio: { es: "habían hecho pasar", en: "they had led across", zh: "已經帶領...通過" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "並且" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición (+ acusativo)", syntaxis: "Preposición", translatio: { es: "al", en: "into", zh: "進入" } },
                            { textus: "Haeduorum", lemma: "Haedui", morphologia: "Sustantivo, genitivo masculino plural", syntaxis: "Complemento del Nombre", translatio: { es: "de los heduos", en: "of the Aedui", zh: "埃杜伊人的" } },
                            { textus: "fines", lemma: "finis", morphologia: "Sustantivo, acusativo masculino plural", syntaxis: "Complemento regido por 'in'", translatio: { es: "territorio", en: "territory", zh: "領土" } },
                            { textus: "peruenerant", lemma: "pervenio", morphologia: "Verbo, 3ª p. pl., pluscuamperfecto activo, indicativo", syntaxis: "Verbo", translatio: { es: "habían llegado", en: "they had arrived", zh: "已經到達" } },
                            { textus: "eorumque", lemma: "is, -que", morphologia: "Pronombre (genitivo plural) + Conjunción enclítica", syntaxis: "Complemento del Nombre y Nexo", translatio: { es: "y de ellos", en: "and their", zh: "並蹂躏他們的" } },
                            { textus: "agros", lemma: "ager", morphologia: "Sustantivo, acusativo masculino plural", syntaxis: "Objeto Directo", translatio: { es: "los campos", en: "the fields", zh: "田野" } },
                            { textus: "populabantur", lemma: "populor", morphologia: "Verbo, 3ª p. pl., imperfecto deponente, indicativo", syntaxis: "Verbo", translatio: { es: "devastaban", en: "they were ravaging", zh: "正在蹂躏" } },
                            { textus: ".", lemma: ".", morphologia: "Signo de puntuación", syntaxis: "Puntuación", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Oración compuesta por tres cláusulas coordinadas. Las dos primeras usan el pluscuamperfecto para señalar acciones completadas ('traduxerant', 'peruenerant'), mientras que la tercera cambia al imperfecto ('populabantur') para describir una acción en curso.",
                        notae: "Este cambio de tiempo verbal es deliberado y efectivo: el paso y la llegada son hechos pasados, pero la devastación es una acción continua y presente desde la perspectiva de la narración, lo que añade dramatismo.",
                        translationes: {
                            es: "Los helvecios ya habían hecho pasar sus tropas a través de los desfiladeros y del territorio de los sécuanos, habían llegado al territorio de los heduos y devastaban sus campos.",
                            en: "The Helvetii had already led their forces through the narrow passes and the territory of the Sequani, and had arrived in the territory of the Aedui, and were ravaging their fields.",
                            zh: "赫爾維蒂人已經帶領他們的軍隊通過了塞夸尼人的狹窄通道和領土，到達了埃杜伊人的領土，並正在蹂躏他們的田野。"
                        }
                    },
                    {
                        id_orationis: 'o2',
                        original_lat: "Haedui, cum se suaque ab iis defendere non possent, legatos ad Caesarem mittunt rogatum auxilium: ita se omni tempore de populo Romano meritos esse, ut paene in conspectu exercitus nostri agri uastari, liberi eorum in seruitutem abduci, oppida expugnari non debuerint.",
                        verba: [
                            { textus: "Haedui", lemma: "Haedui", morphologia: "Sustantivo, nominativo masculino plural", syntaxis: "Sujeto", translatio: { es: "los heduos", en: "the Aedui", zh: "埃杜伊人" } },
                            { textus: ",", lemma: ",", morphologia: "Signo de puntuación", syntaxis: "Puntuación", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "cum", lemma: "cum", morphologia: "Conjunción subordinante", syntaxis: "Nexo (cum histórico)", translatio: { es: "como", en: "since", zh: "由於" } },
                            { textus: "se", lemma: "sui", morphologia: "Pronombre reflexivo, acusativo", syntaxis: "Objeto Directo", translatio: { es: "a sí mismos", en: "themselves", zh: "他們自己" } },
                            { textus: "suaque", lemma: "suus, -que", morphologia: "Adjetivo posesivo (acusativo neutro plural) + Conjunción", syntaxis: "Objeto Directo y Nexo", translatio: { es: "y sus cosas", en: "and their possessions", zh: "和他們的財產" } },
                            { textus: "ab", lemma: "a/ab", morphologia: "Preposición (+ ablativo)", syntaxis: "Preposición", translatio: { es: "de", en: "from", zh: "從" } },
                            { textus: "iis", lemma: "is", morphologia: "Pronombre, ablativo masculino plural", syntaxis: "Complemento regido por 'ab'", translatio: { es: "ellos", en: "them", zh: "他們" } },
                            { textus: "defendere", lemma: "defendo", morphologia: "Verbo, infinitivo presente activo", syntaxis: "Infinitivo (complemento de 'possent')", translatio: { es: "defender", en: "to defend", zh: "保衛" } },
                            { textus: "non", lemma: "non", morphologia: "Adverbio de negación", syntaxis: "Modificador verbal", translatio: { es: "no", en: "not", zh: "不" } },
                            { textus: "possent", lemma: "possum", morphologia: "Verbo, 3ª p. pl., imperfecto subjuntivo", syntaxis: "Verbo de la subordinada con 'cum'", translatio: { es: "pudieran", en: "they were able", zh: "能夠" } },
                            { textus: ",", lemma: ",", morphologia: "Signo de puntuación", syntaxis: "Puntuación", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "legatos", lemma: "legatus", morphologia: "Sustantivo, acusativo masculino plural", syntaxis: "Objeto Directo", translatio: { es: "embajadores", en: "envoys", zh: "使者" } },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición (+ acusativo)", syntaxis: "Preposición", translatio: { es: "a", en: "to", zh: "向" } },
                            { textus: "Caesarem", lemma: "Caesar", morphologia: "Sustantivo, acusativo masculino singular", syntaxis: "Complemento regido por 'ad'", translatio: { es: "César", en: "Caesar", zh: "凱撒" } },
                            { textus: "mittunt", lemma: "mitto", morphologia: "Verbo, 3ª p. pl., presente activo, indicativo", syntaxis: "Verbo principal", translatio: { es: "envían", en: "they send", zh: "派遣" } },
                            { textus: "rogatum", lemma: "rogo", morphologia: "Supino, acusativo", syntaxis: "Supino de finalidad", translatio: { es: "a pedir", en: "to ask for", zh: "請求" } },
                            { textus: "auxilium", lemma: "auxilium", morphologia: "Sustantivo, acusativo neutro singular", syntaxis: "Objeto del Supino", translatio: { es: "ayuda", en: "help", zh: "援助" } },
                            { textus: ":", lemma: ":", morphologia: "Signo de puntuación", syntaxis: "Puntuación", translatio: { es: ":", en: ":", zh: "：" } },
                            { textus: "ita", lemma: "ita", morphologia: "Adverbio", syntaxis: "Modificador (introduce 'ut')", translatio: { es: "de tal modo", en: "so", zh: "如此" } },
                            { textus: "se", lemma: "sui", morphologia: "Pronombre reflexivo, acusativo", syntaxis: "Sujeto de la Oración de Infinitivo", translatio: { es: "ellos", en: "they", zh: "他們" } },
                            { textus: "omni", lemma: "omnis", morphologia: "Adjetivo, ablativo singular", syntaxis: "Atributo de 'tempore'", translatio: { es: "en todo", en: "at all", zh: "在所有" } },
                            { textus: "tempore", lemma: "tempus", morphologia: "Sustantivo, ablativo neutro singular", syntaxis: "C.C. de Tiempo", translatio: { es: "tiempo", en: "time", zh: "時候" } },
                            { textus: "de", lemma: "de", morphologia: "Preposición (+ ablativo)", syntaxis: "Preposición", translatio: { es: "para con", en: "towards", zh: "對" } },
                            { textus: "populo", lemma: "populus", morphologia: "Sustantivo, ablativo masculino singular", syntaxis: "Complemento regido por 'de'", translatio: { es: "el pueblo", en: "the people", zh: "人民" } },
                            { textus: "Romano", lemma: "Romanus", morphologia: "Adjetivo, ablativo masculino singular", syntaxis: "Atributo de 'populo'", translatio: { es: "romano", en: "Roman", zh: "羅馬" } },
                            { textus: "meritos esse", lemma: "mereor", morphologia: "Verbo, infinitivo perfecto deponente", syntaxis: "Verbo de la Oración de Infinitivo", translatio: { es: "habían sido meritorios", en: "had deserved well", zh: "立下功勞" } },
                            { textus: ",", lemma: ",", morphologia: "Signo de puntuación", syntaxis: "Puntuación", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "ut", lemma: "ut", morphologia: "Conjunción subordinante", syntaxis: "Nexo (consecutivo)", translatio: { es: "que", en: "that", zh: "以至於" } },
                            { textus: "paene", lemma: "paene", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "casi", en: "almost", zh: "幾乎" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición (+ ablativo)", syntaxis: "Preposición", translatio: { es: "a", en: "in", zh: "在" } },
                            { textus: "conspectu", lemma: "conspectus", morphologia: "Sustantivo, ablativo masculino singular", syntaxis: "Complemento regido por 'in'", translatio: { es: "la vista", en: "the sight", zh: "視野內" } },
                            { textus: "exercitus", lemma: "exercitus", morphologia: "Sustantivo, genitivo masculino singular", syntaxis: "Complemento del Nombre", translatio: { es: "del ejército", en: "of the army", zh: "軍隊的" } },
                            { textus: "nostri", lemma: "noster", morphologia: "Adjetivo posesivo, genitivo masculino singular", syntaxis: "Atributo de 'exercitus'", translatio: { es: "nuestro", en: "our", zh: "我們的" } },
                            { textus: "agri", lemma: "ager", morphologia: "Sustantivo, nominativo masculino plural", syntaxis: "Sujeto de 'uastari'", translatio: { es: "sus campos", en: "their fields", zh: "田野" } },
                            { textus: "uastari", lemma: "vasto", morphologia: "Verbo, infinitivo presente pasivo", syntaxis: "Infinitivo (Sujeto de 'debuerint')", translatio: { es: "ser devastados", en: "to be laid waste", zh: "被蹂躏" } },
                            { textus: ",", lemma: ",", morphologia: "Signo de puntuación", syntaxis: "Puntuación", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "liberi", lemma: "liberi", morphologia: "Sustantivo, nominativo masculino plural", syntaxis: "Sujeto de 'abduci'", translatio: { es: "sus hijos", en: "their children", zh: "孩子" } },
                            { textus: "eorum", lemma: "is", morphologia: "Pronombre, genitivo masculino plural", syntaxis: "Complemento del Nombre", translatio: { es: "de ellos", en: "their", zh: "他們的" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición (+ acusativo)", syntaxis: "Preposición", translatio: { es: "a", en: "into", zh: "淪為" } },
                            { textus: "seruitutem", lemma: "servitus", morphologia: "Sustantivo, acusativo femenino singular", syntaxis: "Complemento regido por 'in'", translatio: { es: "la esclavitud", en: "slavery", zh: "奴隸" } },
                            { textus: "abduci", lemma: "abduco", morphologia: "Verbo, infinitivo presente pasivo", syntaxis: "Infinitivo (Sujeto de 'debuerint')", translatio: { es: "ser llevados", en: "to be led away", zh: "被帶走" } },
                            { textus: ",", lemma: ",", morphologia: "Signo de puntuación", syntaxis: "Puntuación", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "oppida", lemma: "oppidum", morphologia: "Sustantivo, nominativo neutro plural", syntaxis: "Sujeto de 'expugnari'", translatio: { es: "sus ciudades", en: "their towns", zh: "城鎮" } },
                            { textus: "expugnari", lemma: "expugno", morphologia: "Verbo, infinitivo presente pasivo", syntaxis: "Infinitivo (Sujeto de 'debuerint')", translatio: { es: "ser tomadas", en: "to be stormed", zh: "被攻陷" } },
                            { textus: "non", lemma: "non", morphologia: "Adverbio de negación", syntaxis: "Modificador verbal", translatio: { es: "no", en: "not", zh: "不" } },
                            { textus: "debuerint", lemma: "debeo", morphologia: "Verbo, 3ª p. pl., perfecto activo, subjuntivo", syntaxis: "Verbo de la cláusula consecutiva", translatio: { es: "debieran haber", en: "ought to have", zh: "應該" } },
                            { textus: ".", lemma: ".", morphologia: "Signo de puntuación", syntaxis: "Puntuación", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Oración compleja que contiene: una cláusula de 'cum' histórico; una principal ('mittunt'); un supino de finalidad ('rogatum'); y, explicando la petición, una oración de infinitivo ('se... meritos esse') que a su vez introduce una cláusula consecutiva con 'ut' ('ut... non debuerint'), cuyo sujeto es la serie de infinitivos pasivos ('uastari, abduci, expugnari').",
                        notae: "El discurso de los heduos es una pieza retórica. 'Meritos esse' apela a la lealtad pasada. La cláusula con 'ut' expresa un resultado inesperado y injusto, enfatizando la gravedad de la situación.",
                        translationes: {
                            es: "Los heduos, como no podían defenderse a sí mismos y a sus bienes de ellos, envían embajadores a César para pedirle ayuda: (diciendo) que de tal modo habían sido en todo tiempo leales al pueblo romano que sus campos no debieran haber sido devastados, sus hijos llevados a la esclavitud ni sus ciudades tomadas, casi a la vista de nuestro ejército.",
                            en: "The Aedui, since they were not able to defend themselves and their possessions from them, send envoys to Caesar to ask for help: (saying) that they had at all times deserved so well of the Roman people that their fields ought not to have been laid waste, their children led away into slavery, their towns stormed, almost in sight of our army.",
                            zh: "由於埃杜伊人無法保衛自己和他們的財產免受赫爾維蒂人的侵害，他們派遣使者向凱撒請求援助：（他們說）他們一直以來對羅馬人民功勳卓著，所以他們的田野、他們的孩子被掠為奴隸、他們的城鎮被攻陷，這幾乎就在我們軍隊眼皮底下發生的事情，本不應該發生。"
                        }
                    },
                    {
                        id_orationis: 'o3',
                        original_lat: "Eodem tempore [Haedui] Ambarri, necessarii et consanguinei Haeduorum, Caesarem certiorem faciunt sese depopulatis agris non facile ab oppidis uim hostium prohibere.",
                        verba: [
                            { textus: "Eodem", lemma: "idem", morphologia: "Adjetivo, ablativo neutro singular", syntaxis: "Atributo de 'tempore'", translatio: { es: "al mismo", en: "at the same", zh: "在同一" } },
                            { textus: "tempore", lemma: "tempus", morphologia: "Sustantivo, ablativo neutro singular", syntaxis: "C.C. de Tiempo", translatio: { es: "tiempo", en: "time", zh: "時間" } },
                            { textus: "Ambarri", lemma: "Ambarri", morphologia: "Sustantivo, nominativo masculino plural", syntaxis: "Sujeto", translatio: { es: "los ambarros", en: "the Ambarri", zh: "安巴里人" } },
                            { textus: ",", lemma: ",", morphologia: "Signo de puntuación", syntaxis: "Puntuación", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "necessarii", lemma: "necessarius", morphologia: "Sustantivo, nominativo masculino plural", syntaxis: "Aposición de 'Ambarri'", translatio: { es: "aliados", en: "kinsmen", zh: "親密盟友" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "和" } },
                            { textus: "consanguinei", lemma: "consanguineus", morphologia: "Sustantivo, nominativo masculino plural", syntaxis: "Aposición de 'Ambarri'", translatio: { es: "parientes", en: "blood-relatives", zh: "同族" } },
                            { textus: "Haeduorum", lemma: "Haedui", morphologia: "Sustantivo, genitivo masculino plural", syntaxis: "Complemento del Nombre", translatio: { es: "de los heduos", en: "of the Aedui", zh: "埃杜伊人的" } },
                            { textus: ",", lemma: ",", morphologia: "Signo de puntuación", syntaxis: "Puntuación", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "Caesarem", lemma: "Caesar", morphologia: "Sustantivo, acusativo masculino singular", syntaxis: "Objeto Directo", translatio: { es: "a César", en: "Caesar", zh: "凱撒" } },
                            { textus: "certiorem", lemma: "certus", morphologia: "Adjetivo, acusativo singular (comparativo)", syntaxis: "Parte de la locución verbal", translatio: { es: "más cierto (informan)", en: "more certain (inform)", zh: "更確信(通知)" } },
                            { textus: "faciunt", lemma: "facio", morphologia: "Verbo, 3ª p. pl., presente activo, indicativo", syntaxis: "Verbo principal", translatio: { es: "hacen (informan)", en: "they make (inform)", zh: "使(通知)" } },
                            { textus: "sese", lemma: "sui", morphologia: "Pronombre reflexivo, acusativo", syntaxis: "Sujeto de la Oración de Infinitivo", translatio: { es: "que ellos", en: "that they", zh: "他們" } },
                            { textus: "depopulatis", lemma: "depopulor", morphologia: "Participio, perfecto pasivo, ablativo plural", syntaxis: "Participio del ablativo absoluto", translatio: { es: "una vez devastados", en: "having been devastated", zh: "被蹂躏後" } },
                            { textus: "agris", lemma: "ager", morphologia: "Sustantivo, ablativo masculino plural", syntaxis: "Sujeto del ablativo absoluto", translatio: { es: "sus campos", en: "their fields", zh: "田野" } },
                            { textus: "non", lemma: "non", morphologia: "Adverbio de negación", syntaxis: "Modificador adverbial", translatio: { es: "no", en: "not", zh: "不" } },
                            { textus: "facile", lemma: "facile", morphologia: "Adverbio", syntaxis: "Modificador verbal", translatio: { es: "fácilmente", en: "easily", zh: "輕易地" } },
                            { textus: "ab", lemma: "a/ab", morphologia: "Preposición (+ ablativo)", syntaxis: "Preposición", translatio: { es: "de", en: "from", zh: "從" } },
                            { textus: "oppidis", lemma: "oppidum", morphologia: "Sustantivo, ablativo neutro plural", syntaxis: "Complemento regido por 'ab'", translatio: { es: "sus ciudades", en: "their towns", zh: "城鎮" } },
                            { textus: "uim", lemma: "vis", morphologia: "Sustantivo, acusativo femenino singular", syntaxis: "Objeto Directo", translatio: { es: "la violencia", en: "the violence", zh: "暴力" } },
                            { textus: "hostium", lemma: "hostis", morphologia: "Sustantivo, genitivo masculino plural", syntaxis: "Complemento del Nombre", translatio: { es: "de los enemigos", en: "of the enemy", zh: "敵人的" } },
                            { textus: "prohibere", lemma: "prohibeo", morphologia: "Verbo, infinitivo presente activo", syntaxis: "Verbo de la Oración de Infinitivo", translatio: { es: "apartaban", en: "were keeping off", zh: "抵擋" } },
                            { textus: ".", lemma: ".", morphologia: "Signo de puntuación", syntaxis: "Puntuación", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "La oración principal tiene como sujeto a 'Ambarri' y verbo la locución 'certiorem faciunt', que introduce una oración de infinitivo ('sese... prohibere'). Dentro de esta, se inserta una cláusula de ablativo absoluto ('depopulatis agris').",
                        notae: "La locución 'certiorem facere' significa 'informar'. El término '[Haedui]' antes de 'Ambarri' es una conjetura editorial en muchos textos, sugiriendo que los Ambarri eran una rama de los heduos.",
                        translationes: {
                            es: "Al mismo tiempo, los ambarros, aliados y parientes de los heduos, informan a César de que, una vez devastados sus campos, no apartaban fácilmente de sus ciudades la violencia de los enemigos.",
                            en: "At the same time, the Ambarri, kinsmen and blood-relatives of the Aedui, inform Caesar that, with their fields devastated, they were not easily keeping the violence of the enemy from their towns.",
                            zh: "與此同時，埃杜伊人的親密盟友和同族安巴里人通知凱撒，他們的田野被蹂躏後，他們已無法輕易地從他們的城鎮抵擋敵人的暴力。"
                        }
                    },
                    {
                        id_orationis: 'o4',
                        original_lat: "Item Allobroges qui trans Rhodanum uicos possessionesque habebant fuga se ad Caesarem recipiunt et demonstrant sibi praeter agri solum nihil esse reliqui.",
                        verba: [
                            { textus: "Item", lemma: "item", morphologia: "Adverbio", syntaxis: "Modificador oracional", translatio: { es: "igualmente", en: "likewise", zh: "同樣地" } },
                            { textus: "Allobroges", lemma: "Allobroges", morphologia: "Sustantivo, nominativo masculino plural", syntaxis: "Sujeto", translatio: { es: "los alóbroges", en: "the Allobroges", zh: "阿洛布羅基人" } },
                            { textus: "qui", lemma: "qui", morphologia: "Pronombre relativo, nominativo masculino plural", syntaxis: "Sujeto de 'habebant'", translatio: { es: "que", en: "who", zh: "他們" } },
                            { textus: "trans", lemma: "trans", morphologia: "Preposición (+ acusativo)", syntaxis: "Preposición", translatio: { es: "al otro lado de", en: "across", zh: "在...對岸" } },
                            { textus: "Rhodanum", lemma: "Rhodanus", morphologia: "Sustantivo, acusativo masculino singular", syntaxis: "Complemento regido por 'trans'", translatio: { es: "el Ródano", en: "the Rhone", zh: "羅納河" } },
                            { textus: "uicos", lemma: "vicus", morphologia: "Sustantivo, acusativo masculino plural", syntaxis: "Objeto Directo", translatio: { es: "aldeas", en: "villages", zh: "村莊" } },
                            { textus: "possessionesque", lemma: "possessio, -que", morphologia: "Sustantivo (acusativo plural) + Conjunción enclítica", syntaxis: "Objeto Directo y Nexo", translatio: { es: "y posesiones", en: "and possessions", zh: "和財產" } },
                            { textus: "habebant", lemma: "habeo", morphologia: "Verbo, 3ª p. pl., imperfecto activo, indicativo", syntaxis: "Verbo de la subordinada de relativo", translatio: { es: "tenían", en: "had", zh: "擁有" } },
                            { textus: "fuga", lemma: "fuga", morphologia: "Sustantivo, ablativo femenino singular", syntaxis: "C.C. de Modo", translatio: { es: "en su huida", en: "in flight", zh: "逃跑" } },
                            { textus: "se", lemma: "sui", morphologia: "Pronombre reflexivo, acusativo", syntaxis: "Objeto Directo", translatio: { es: "se", en: "themselves", zh: "他們自己" } },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición (+ acusativo)", syntaxis: "Preposición", translatio: { es: "ante", en: "to", zh: "到...那裡" } },
                            { textus: "Caesarem", lemma: "Caesar", morphologia: "Sustantivo, acusativo masculino singular", syntaxis: "Complemento regido por 'ad'", translatio: { es: "César", en: "Caesar", zh: "凱撒" } },
                            { textus: "recipiunt", lemma: "recipio", morphologia: "Verbo, 3ª p. pl., presente activo, indicativo", syntaxis: "Verbo principal", translatio: { es: "se refugian", en: "they betake", zh: "投奔" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "並且" } },
                            { textus: "demonstrant", lemma: "demonstro", morphologia: "Verbo, 3ª p. pl., presente activo, indicativo", syntaxis: "Verbo principal", translatio: { es: "muestran", en: "they point out", zh: "表明" } },
                            { textus: "sibi", lemma: "sui", morphologia: "Pronombre reflexivo, dativo", syntaxis: "Dativo posesivo", translatio: { es: "para ellos (que no les...)", en: "to them (that they had...)", zh: "他們" } },
                            { textus: "praeter", lemma: "praeter", morphologia: "Preposición (+ acusativo)", syntaxis: "Preposición", translatio: { es: "excepto", en: "besides", zh: "除了" } },
                            { textus: "agri", lemma: "ager", morphologia: "Sustantivo, genitivo masculino singular", syntaxis: "Complemento del Nombre", translatio: { es: "del campo", en: "of their land", zh: "土地的" } },
                            { textus: "solum", lemma: "solum", morphologia: "Sustantivo, acusativo neutro singular", syntaxis: "Complemento regido por 'praeter'", translatio: { es: "el suelo", en: "the soil", zh: "土壤" } },
                            { textus: "nihil", lemma: "nihil", morphologia: "Pronombre, nominativo/acusativo neutro", syntaxis: "Sujeto de la Oración de Infinitivo", translatio: { es: "nada", en: "nothing", zh: "什麼都" } },
                            { textus: "esse", lemma: "sum", morphologia: "Verbo, infinitivo presente", syntaxis: "Verbo de la Oración de Infinitivo", translatio: { es: "quedaba", en: "was", zh: "沒有" } },
                            { textus: "reliqui", lemma: "reliquus", morphologia: "Adjetivo, genitivo partitivo", syntaxis: "Genitivo partitivo", translatio: { es: "restante", en: "left", zh: "剩下" } },
                            { textus: ".", lemma: ".", morphologia: "Signo de puntuación", syntaxis: "Puntuación", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Oración con un sujeto ('Allobroges') modificado por una cláusula de relativo ('qui... habebant'). El sujeto realiza dos acciones coordinadas: 'se recipiunt' y 'demonstrant'. La segunda introduce una oración de infinitivo ('sibi... nihil esse reliqui').",
                        notae: "'Nihil reliqui' es una construcción con genitivo partitivo: literalmente 'nada de restante', que se traduce como 'nada restante'. 'Sibi esse' es una forma de expresar posesión con el dativo.",
                        translationes: {
                            es: "Igualmente, los alóbroges que tenían aldeas y posesiones al otro lado del Ródano se refugian ante César en su huida y le muestran que no les quedaba nada restante, excepto el suelo de sus campos.",
                            en: "Likewise, the Allobroges who had villages and possessions across the Rhone betake themselves in flight to Caesar and point out that they had nothing left, besides the soil of their land.",
                            zh: "同樣地，在羅納河對岸擁有村莊和財產的阿洛布羅基人也逃到凱撒那裡，並向他表明，除了土地本身，他們已經一無所有了。"
                        }
                    },
                    {
                        id_orationis: 'o5',
                        original_lat: "Quibus rebus adductus Caesar non exspectandum sibi statuit dum, omnibus fortunis sociorum consumptis, in Santonos Heluetii peruenirent.",
                        verba: [
                            { textus: "Quibus", lemma: "qui", morphologia: "Pronombre relativo, ablativo plural", syntaxis: "Nexo y C.C. de Causa", translatio: { es: "por estas", en: "by which", zh: "由於這些" } },
                            { textus: "rebus", lemma: "res", morphologia: "Sustantivo, ablativo femenino plural", syntaxis: "C.C. de Causa", translatio: { es: "razones", en: "things", zh: "事情" } },
                            { textus: "adductus", lemma: "adduco", morphologia: "Participio, perfecto pasivo, nominativo masculino singular", syntaxis: "Participio concertado con 'Caesar'", translatio: { es: "movido", en: "influenced", zh: "被...所驅使" } },
                            { textus: "Caesar", lemma: "Caesar", morphologia: "Sustantivo, nominativo masculino singular", syntaxis: "Sujeto", translatio: { es: "César", en: "Caesar", zh: "凱撒" } },
                            { textus: "non", lemma: "non", morphologia: "Adverbio de negación", syntaxis: "Modificador verbal", translatio: { es: "no", en: "not", zh: "不" } },
                            { textus: "exspectandum", lemma: "exspecto", morphologia: "Gerundivo (forma de 'esse')", syntaxis: "Verbo (perifrástica pasiva) de la Oración de Infinitivo", translatio: { es: "que debía esperar", en: "to be waited", zh: "應該等待" } },
                            { textus: "sibi", lemma: "sui", morphologia: "Pronombre reflexivo, dativo", syntaxis: "Dativo agente", translatio: { es: "por él", en: "by him", zh: "他" } },
                            { textus: "statuit", lemma: "statuo", morphologia: "Verbo, 3ª p. sg., perfecto activo, indicativo", syntaxis: "Verbo principal", translatio: { es: "decidió", en: "he decided", zh: "決定" } },
                            { textus: "dum", lemma: "dum", morphologia: "Conjunción subordinante", syntaxis: "Nexo (temporal/de intención)", translatio: { es: "hasta que", en: "until", zh: "直到" } },
                            { textus: ",", lemma: ",", morphologia: "Signo de puntuación", syntaxis: "Puntuación", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "omnibus", lemma: "omnis", morphologia: "Adjetivo, ablativo plural", syntaxis: "Atributo de 'fortunis'", translatio: { es: "todas", en: "all", zh: "所有" } },
                            { textus: "fortunis", lemma: "fortuna", morphologia: "Sustantivo, ablativo femenino plural", syntaxis: "Sujeto del ablativo absoluto", translatio: { es: "las riquezas", en: "the fortunes", zh: "財產" } },
                            { textus: "sociorum", lemma: "socius", morphologia: "Sustantivo, genitivo masculino plural", syntaxis: "Complemento del Nombre", translatio: { es: "de los aliados", en: "of the allies", zh: "盟友的" } },
                            { textus: "consumptis", lemma: "consumo", morphologia: "Participio, perfecto pasivo, ablativo plural", syntaxis: "Participio del ablativo absoluto", translatio: { es: "una vez agotadas", en: "having been exhausted", zh: "被耗盡後" } },
                            { textus: ",", lemma: ",", morphologia: "Signo de puntuación", syntaxis: "Puntuación", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición (+ acusativo)", syntaxis: "Preposición", translatio: { es: "al (territorio de)", en: "into", zh: "進入" } },
                            { textus: "Santonos", lemma: "Santones", morphologia: "Sustantivo, acusativo masculino plural", syntaxis: "Complemento regido por 'in'", translatio: { es: "los santones", en: "the Santoni", zh: "桑通人的領土" } },
                            { textus: "Heluetii", lemma: "Helvetii", morphologia: "Sustantivo, nominativo masculino plural", syntaxis: "Sujeto de 'peruenirent'", translatio: { es: "los helvecios", en: "the Helvetii", zh: "赫爾維蒂人" } },
                            { textus: "peruenirent", lemma: "pervenio", morphologia: "Verbo, 3ª p. pl., imperfecto subjuntivo", syntaxis: "Verbo de la subordinada con 'dum'", translatio: { es: "llegaran", en: "should arrive", zh: "到達" } },
                            { textus: ".", lemma: ".", morphologia: "Signo de puntuación", syntaxis: "Puntuación", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "La oración principal es 'Caesar statuit', con el sujeto modificado por un participio ('adductus'). El verbo rige una oración de infinitivo que contiene una perífrasis pasiva de obligación ('non exspectandum [esse] sibi'). A su vez, esta construcción se ve matizada por una cláusula con 'dum' + subjuntivo, que incluye en su interior un ablativo absoluto ('omnibus... consumptis').",
                        notae: "La construcción 'non exspectandum sibi' es clave: 'decidió que no debía esperar' (literalmente, 'que no era para ser esperado por él'). El subjuntivo con 'dum' indica la intención de César de actuar antes de que el hecho ocurra.",
                        translationes: {
                            es: "Movido por estas razones, César decidió que no debía esperar hasta que, una vez agotadas todas las riquezas de sus aliados, los helvecios llegaran al territorio de los santones.",
                            en: "Influenced by these events, Caesar decided that he must not wait until, with all the fortunes of the allies exhausted, the Helvetii should arrive among the Santoni.",
                            zh: "由於這些事情的驅使，凱撒決定他不能等到盟友的所有財產都被耗盡，赫爾維蒂人到達桑通人的領土之時。"
                        }
                    }
                ]
            }
        ]
    }
};

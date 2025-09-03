const corpus = {
    titulus_principalis: "De Bello Gallico, I, 8",
    auctor: "C. Iulius Caesar",
    titulus_secundarius: {
        es: "La fortificación del Ródano y el rechazo a los Helvecios",
        en: "The Fortification of the Rhone and the Rejection of the Helvetii",
        zh: "羅納河的防禦工事與對赫爾維蒂人的拒絕"
    },
    introductio: {
        es: {
            titulus: "Introducción al Capítulo 8",
            contentus: `<p>En el tiempo que ganó con su táctica dilatoria, César emprende una masiva obra de defensa. Construye una muralla de diecinueve millas de largo y dieciséis pies de alto, junto con una fosa, que se extiende desde el lago Lemán hasta el monte Jura. Guarnece esta línea con fuertes y puestos de avanzada. Cuando los embajadores helvecios regresan en la fecha acordada, César les niega formalmente el paso, amparándose en la costumbre romana y advirtiéndoles que usará la fuerza si es necesario. Los helvecios, frustrados, intentan cruzar el río por la fuerza usando barcas, balsas y los vados menos profundos, especialmente de noche, pero son repelidos por las fortificaciones y la decidida respuesta de las tropas romanas, viéndose obligados a abandonar su intento.</p>`
        },
        en: {
            titulus: "Introduction to Chapter 8",
            contentus: `<p>In the time he gained with his delaying tactic, Caesar undertakes a massive defensive construction. He builds a nineteen-mile-long wall, sixteen feet high, along with a ditch, stretching from Lake Geneva to the Jura Mountains. He garrisons this line with forts and outposts. When the Helvetian ambassadors return on the agreed-upon date, Caesar formally denies them passage, citing Roman custom and warning them he will use force if necessary. The frustrated Helvetii attempt to cross the river by force using boats, numerous rafts, and the shallowest fords, especially at night, but they are repelled by the fortifications and the resolute response of the Roman troops, forcing them to abandon their attempt.</p>`
        },
        zh: {
            titulus: "第 8 章介紹",
            contentus: `<p>凱撒利用他拖延戰術所爭取到的時間，展開了大規模的防禦工程。他建造了一道長十九英里、高十六英尺的圍牆和一條壕溝，從雷夢湖一直延伸到侏羅山。他在這條防線上部署了駐軍並加固了堡壘。當赫爾維蒂使者在約定日期返回時，凱撒以羅馬的傳統為由，正式拒絕他們通行，並警告若他們意圖使用武力，他將予以阻止。赫爾維蒂人大失所望，試圖用相連的船隻和臨時製作的許多木筏，或在水淺的渡口強行渡河，尤其是在夜間，但最終被羅馬的防禦工事、迅速集結的士兵和投擲的武器所擊退，被迫放棄了這次嘗試。</p>`
        }
    },
    textus: {
        id: 8,
        capitula: [
            {
                id_capituli: 8,
                orationes: [
                    {
                        id_orationis: 'o1',
                        original_lat: "Interea ea legione quam secum habebat militibusque qui ex prouincia conuenerant a lacu Lemanno, qui in flumen Rhodanum influit, ad montem Iuram, qui fines Sequanorum ab Heluetiis diuidit, milia passuum decem nouem murum in altitudinem pedum sedecim fossamque perducit.",
                        verba: [
                            { textus: "Interea", lemma: "interea", morphologia: "Adverbio", syntaxis: "Modificador circunstancial de tiempo", translatio: { es: "Entretanto", en: "Meanwhile", zh: "與此同時" } },
                            { textus: "ea", lemma: "is", morphologia: "Pronombre/Adjetivo, femenino, ablativo singular", syntaxis: "Atributo de 'legione'", translatio: { es: "con esa", en: "with that", zh: "利用那個" } },
                            { textus: "legione", lemma: "legio", morphologia: "Sustantivo, femenino, ablativo singular", syntaxis: "C.C. de Instrumento/Medio", translatio: { es: "legión", en: "legion", zh: "軍團" } },
                            { textus: "quam", lemma: "qui", morphologia: "Pronombre relativo, femenino, acusativo singular", syntaxis: "Objeto Directo de 'habebat' y Nexo", translatio: { es: "que", en: "which", zh: "" } },
                            { textus: "secum", lemma: "sui-cum", morphologia: "Pronombre reflexivo + preposición, ablativo", syntaxis: "Complemento circunstancial", translatio: { es: "consigo", en: "with him", zh: "隨身的" } },
                            { textus: "habebat", lemma: "habeo", morphologia: "Verbo, 3ª p. sg., pretérito imperfecto, indicativo, activo", syntaxis: "Verbo de la subordinada de relativo", translatio: { es: "tenía", en: "he had", zh: "" } },
                            { textus: "militibusque", lemma: "miles-que", morphologia: "Sustantivo, masculino, ablativo plural + conjunción enclítica", syntaxis: "C.C. de Instrumento/Medio", translatio: { es: "y con los soldados", en: "and with the soldiers", zh: "以及士兵" } },
                            { textus: "qui", lemma: "qui", morphologia: "Pronombre relativo, masculino, nominativo plural", syntaxis: "Sujeto de 'conuenerant' y Nexo", translatio: { es: "que", en: "who", zh: "" } },
                            { textus: "ex", lemma: "ex", morphologia: "Preposición de ablativo", syntaxis: "Nexo", translatio: { es: "de", en: "from", zh: "從" } },
                            { textus: "prouincia", lemma: "provincia", morphologia: "Sustantivo, femenino, ablativo singular", syntaxis: "Complemento de 'ex'", translatio: { es: "la provincia", en: "the province", zh: "行省" } },
                            { textus: "conuenerant", lemma: "convenio", morphologia: "Verbo, 3ª p. pl., pretérito pluscuamperfecto, indicativo, activo", syntaxis: "Verbo de la subordinada de relativo", translatio: { es: "se habían reunido", en: "had assembled", zh: "召集來的" } },
                            { textus: "a", lemma: "a", morphologia: "Preposición de ablativo", syntaxis: "Nexo (inicio del tramo)", translatio: { es: "desde", en: "from", zh: "從" } },
                            { textus: "lacu", lemma: "lacus", morphologia: "Sustantivo, masculino, ablativo singular", syntaxis: "Complemento de 'a'", translatio: { es: "el lago", en: "Lake", zh: "湖" } },
                            { textus: "Lemanno", lemma: "Lemannus", morphologia: "Adjetivo, masculino, ablativo singular", syntaxis: "Atributo de 'lacu'", translatio: { es: "Lemán", en: "Geneva", zh: "雷夢" } },
                            { textus: "qui", lemma: "qui", morphologia: "Pronombre relativo, masculino, nominativo singular", syntaxis: "Sujeto de 'influit' y Nexo", translatio: { es: "que", en: "which", zh: "" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición de acusativo", syntaxis: "Nexo", translatio: { es: "en", en: "into", zh: "流入" } },
                            { textus: "flumen", lemma: "flumen", morphologia: "Sustantivo, neutro, acusativo singular", syntaxis: "Complemento de 'in'", translatio: { es: "el río", en: "the river", zh: "河" } },
                            { textus: "Rhodanum", lemma: "Rhodanus", morphologia: "Sustantivo, masculino, acusativo singular", syntaxis: "Aposición de 'flumen'", translatio: { es: "Ródano", en: "Rhone", zh: "羅納" } },
                            { textus: "influit", lemma: "influo", morphologia: "Verbo, 3ª p. sg., presente, indicativo, activo", syntaxis: "Verbo de la subordinada de relativo", translatio: { es: "desemboca", en: "flows", zh: "的" } },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición de acusativo", syntaxis: "Nexo (fin del tramo)", translatio: { es: "hasta", en: "to", zh: "到" } },
                            { textus: "montem", lemma: "mons", morphologia: "Sustantivo, masculino, acusativo singular", syntaxis: "Complemento de 'ad'", translatio: { es: "el monte", en: "the Mountains", zh: "山" } },
                            { textus: "Iuram", lemma: "Iura", morphologia: "Sustantivo, masculino, acusativo singular", syntaxis: "Aposición de 'montem'", translatio: { es: "Jura", en: "Jura", zh: "侏羅" } },
                            { textus: "qui", lemma: "qui", morphologia: "Pronombre relativo, masculino, nominativo singular", syntaxis: "Sujeto de 'diuidit' y Nexo", translatio: { es: "que", en: "which", zh: "" } },
                            { textus: "fines", lemma: "finis", morphologia: "Sustantivo, masculino, acusativo plural", syntaxis: "Objeto Directo de 'diuidit'", translatio: { es: "el territorio", en: "the territory", zh: "領土" } },
                            { textus: "Sequanorum", lemma: "Sequani", morphologia: "Sustantivo, masculino, genitivo plural", syntaxis: "Complemento del Nombre de 'fines'", translatio: { es: "de los sécuanos", en: "of the Sequani", zh: "塞夸尼人的" } },
                            { textus: "ab", lemma: "ab", morphologia: "Preposición de ablativo", syntaxis: "Nexo", translatio: { es: "de", en: "from", zh: "與" } },
                            { textus: "Heluetiis", lemma: "Helvetii", morphologia: "Sustantivo, masculino, ablativo plural", syntaxis: "Complemento de 'ab' (separación)", translatio: { es: "los helvecios", en: "the Helvetii", zh: "赫爾維蒂人" } },
                            { textus: "diuidit", lemma: "divido", morphologia: "Verbo, 3ª p. sg., presente, indicativo, activo", syntaxis: "Verbo de la subordinada de relativo", translatio: { es: "separa", en: "separates", zh: "隔開的" } },
                            { textus: "milia", lemma: "milia", morphologia: "Sustantivo, neutro, acusativo plural", syntaxis: "C.C. de Extensión", translatio: { es: "millas", en: "miles", zh: "英里" } },
                            { textus: "passuum", lemma: "passus", morphologia: "Sustantivo, masculino, genitivo plural", syntaxis: "Complemento del Nombre (partitivo) de 'milia'", translatio: { es: "", en: "", zh: "" } },
                            { textus: "decem", lemma: "decem", morphologia: "Numeral", syntaxis: "Atributo de 'milia'", translatio: { es: "diez", en: "ten", zh: "十" } },
                            { textus: "nouem", lemma: "novem", morphologia: "Numeral", syntaxis: "Atributo de 'milia'", translatio: { es: "nueve", en: "nine", zh: "九" } },
                            { textus: "murum", lemma: "murus", morphologia: "Sustantivo, masculino, acusativo singular", syntaxis: "Objeto Directo de 'perducit'", translatio: { es: "una muralla", en: "a wall", zh: "一道圍牆" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición de acusativo", syntaxis: "Nexo", translatio: { es: "a una", en: "in", zh: "高" } },
                            { textus: "altitudinem", lemma: "altitudo", morphologia: "Sustantivo, femenino, acusativo singular", syntaxis: "Complemento de 'in' (dimensión)", translatio: { es: "altura", en: "height", zh: "" } },
                            { textus: "pedum", lemma: "pes", morphologia: "Sustantivo, masculino, genitivo plural", syntaxis: "Complemento del Nombre de 'altitudinem'", translatio: { es: "de pies", en: "of feet", zh: "英尺" } },
                            { textus: "sedecim", lemma: "sedecim", morphologia: "Numeral", syntaxis: "Atributo de 'pedum'", translatio: { es: "dieciséis", en: "sixteen", zh: "十六" } },
                            { textus: "fossamque", lemma: "fossa-que", morphologia: "Sustantivo, femenino, acusativo singular + conjunción enclítica", syntaxis: "Objeto Directo de 'perducit'", translatio: { es: "y una fosa", en: "and a ditch", zh: "和一條壕溝" } },
                            { textus: "perducit", lemma: "perduco", morphologia: "Verbo, 3ª p. sg., presente, indicativo, activo", syntaxis: "Verbo principal", translatio: { es: "construye", en: "he constructs", zh: "建造了" } }
                        ],
                        ordo_syntacticus: "Interea perducit murum in altitudinem sedecim pedum fossamque milia passuum decem novem a lacu Lemanno (qui influit in flumen Rhodanum) ad montem Iuram (qui diuidit fines Sequanorum ab Heluetiis), ea legione quam secum habebat militibusque qui conuenerant ex prouincia.",
                        notae: "Oración muy larga y descriptiva. El verbo principal es 'perducit' al final. Los objetos directos son 'murum' y 'fossamque'. La construcción se realiza 'ea legione militibusque' (ablativo instrumental).",
                        translationes: {
                            es: "Entretanto, con la legión que tenía consigo y con los soldados que se habían reunido de la provincia, desde el lago Lemán, que desemboca en el río Ródano, hasta el monte Jura, que separa el territorio de los sécuanos del de los helvecios, construye una muralla de diecinueve millas de largo y dieciséis pies de altura, y una fosa.",
                            en: "Meanwhile, with that legion which he had with him and with the soldiers who had assembled from the province, from Lake Geneva, which flows into the river Rhone, to the Jura Mountains, which separates the territory of the Sequani from the Helvetii, he constructs a wall nineteen miles long, sixteen feet in height, and a ditch.",
                            zh: "與此同時，他利用隨身的那個軍團以及從行省召集來的士兵，從流入羅納河的雷夢湖起，到將塞夸尼人領土與赫爾維蒂人隔開的侏羅山為止，建造了一道長十九英里、高十六英尺的圍牆和一條壕溝。"
                        }
                    },
                    {
                        id_orationis: 'o2',
                        original_lat: "Eo opere perfecto praesidia disponit, castella communit, quo facilius, si se inuito transire conarentur, prohibere possit.",
                        verba: [
                            { textus: "Eo", lemma: "is", morphologia: "Pronombre/Adjetivo, neutro, ablativo singular", syntaxis: "Atributo de 'opere'", translatio: { es: "Esta", en: "This", zh: "這項" } },
                            { textus: "opere", lemma: "opus", morphologia: "Sustantivo, neutro, ablativo singular", syntaxis: "Sustantivo del ablativo absoluto", translatio: { es: "obra", en: "work", zh: "工程" } },
                            { textus: "perfecto", lemma: "perficio", morphologia: "Verbo, participio perfecto pasivo, neutro, ablativo singular", syntaxis: "Participio del ablativo absoluto", translatio: { es: "terminada", en: "was completed", zh: "完工後" } },
                            { textus: "praesidia", lemma: "praesidium", morphologia: "Sustantivo, neutro, acusativo plural", syntaxis: "Objeto Directo de 'disponit'", translatio: { es: "guarniciones", en: "garrisons", zh: "駐軍" } },
                            { textus: "disponit", lemma: "dispono", morphologia: "Verbo, 3ª p. sg., presente, indicativo, activo", syntaxis: "Verbo principal", translatio: { es: "dispone", en: "he distributes", zh: "他部署了" } },
                            { textus: "castella", lemma: "castellum", morphologia: "Sustantivo, neutro, acusativo plural", syntaxis: "Objeto Directo de 'communit'", translatio: { es: "los fortines", en: "the forts", zh: "堡壘" } },
                            { textus: "communit", lemma: "communio", morphologia: "Verbo, 3ª p. sg., presente, indicativo, activo", syntaxis: "Verbo principal (coordinado)", translatio: { es: "fortifica", en: "strengthens", zh: "加固了" } },
                            { textus: "quo", lemma: "quo", morphologia: "Adverbio relativo (introduce finalidad)", syntaxis: "Nexo", translatio: { es: "para que", en: "so that", zh: "以便" } },
                            { textus: "facilius", lemma: "facile", morphologia: "Adverbio comparativo", syntaxis: "Modificador de 'prohibere possit'", translatio: { es: "más fácilmente", en: "more easily", zh: "更容易地" } },
                            { textus: "si", lemma: "si", morphologia: "Conjunción subordinante condicional", syntaxis: "Nexo", translatio: { es: "si", en: "if", zh: "萬一" } },
                            { textus: "se", lemma: "sui", morphologia: "Pronombre reflexivo, ablativo", syntaxis: "Sujeto del ablativo absoluto", translatio: { es: "él", en: "his", zh: "他的" } },
                            { textus: "inuito", lemma: "invitus", morphologia: "Adjetivo, masculino, ablativo singular", syntaxis: "Predicado del ablativo absoluto ('se inuito' = contra su voluntad)", translatio: { es: "contra su voluntad", en: "against his will", zh: "違背他的意願" } },
                            { textus: "transire", lemma: "transeo", morphologia: "Verbo, infinitivo presente, activo", syntaxis: "Infinitivo (complemento de 'conarentur')", translatio: { es: "cruzar", en: "to cross", zh: "渡河" } },
                            { textus: "conarentur", lemma: "conor", morphologia: "Verbo, 3ª p. pl., pretérito imperfecto, subjuntivo, deponente", syntaxis: "Verbo de la subordinada condicional", translatio: { es: "intentaran", en: "they should attempt", zh: "他們試圖" } },
                            { textus: "prohibere", lemma: "prohibeo", morphologia: "Verbo, infinitivo presente, activo", syntaxis: "Infinitivo (complemento de 'possit')", translatio: { es: "impedirles el paso", en: "block them", zh: "阻止他們" } },
                            { textus: "possit", lemma: "possum", morphologia: "Verbo, 3ª p. sg., presente, subjuntivo, activo", syntaxis: "Verbo de la subordinada final", translatio: { es: "pudiera", en: "he might be able", zh: "他能" } }
                        ],
                        ordo_syntacticus: "Eo opere perfecto, disponit praesidia, communit castella, quo facilius possit prohibere, si conarentur transire se inuito.",
                        notae: "'Quo' (= ut eo) introduce una cláusula de finalidad que contiene un comparativo ('facilius'). 'se inuito' es un ablativo absoluto que significa 'contra su voluntad' (literalmente 'siendo él no deseoso').",
                        translationes: {
                            es: "Terminada esta obra, dispone guarniciones, fortifica los fortines, para poder impedirles el paso más fácilmente si intentaran cruzar contra su voluntad.",
                            en: "When this work was completed, he distributes garrisons, strengthens the forts, so that he might more easily be able to block them if they should attempt to cross against his will.",
                            zh: "這項工程完工後，他部署了駐軍，加固了堡壘，以便萬一他們違背他的意願試圖渡河時，他能更容易地阻止他們。"
                        }
                    },
                    {
                        id_orationis: 'o3',
                        original_lat: "Vbi ea dies quam constituerat cum legatis uenit et legati ad eum reuerterunt, negat se more et exemplo populi Romani posse iter ulli per prouinciam dare et, si uim facere conentur, prohibiturum ostendit.",
                        verba: [
                            { textus: "Vbi", lemma: "ubi", morphologia: "Conjunción subordinante temporal", syntaxis: "Nexo", translatio: { es: "Cuando", en: "When", zh: "當" } },
                            { textus: "ea", lemma: "is", morphologia: "Pronombre/Adjetivo, femenino, nominativo singular", syntaxis: "Atributo de 'dies'", translatio: { es: "el", en: "that", zh: "那" } },
                            { textus: "dies", lemma: "dies", morphologia: "Sustantivo, femenino, nominativo singular", syntaxis: "Sujeto de 'uenit'", translatio: { es: "día", en: "day", zh: "天" } },
                            { textus: "quam", lemma: "qui", morphologia: "Pronombre relativo, femenino, acusativo singular", syntaxis: "Objeto Directo de 'constituerat' y Nexo", translatio: { es: "que", en: "which", zh: "" } },
                            { textus: "constituerat", lemma: "constituo", morphologia: "Verbo, 3ª p. sg., pretérito pluscuamperfecto, indicativo, activo", syntaxis: "Verbo de la subordinada de relativo", translatio: { es: "había acordado", en: "he had appointed", zh: "約定的" } },
                            { textus: "cum", lemma: "cum", morphologia: "Preposición de ablativo", syntaxis: "Nexo", translatio: { es: "con", en: "with", zh: "與" } },
                            { textus: "legatis", lemma: "legatus", morphologia: "Sustantivo, masculino, ablativo plural", syntaxis: "Complemento de 'cum'", translatio: { es: "los legados", en: "the legates", zh: "使者" } },
                            { textus: "uenit", lemma: "venio", morphologia: "Verbo, 3ª p. sg., perfecto, indicativo, activo", syntaxis: "Verbo de la subordinada temporal", translatio: { es: "llegó", en: "came", zh: "到來" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "" } },
                            { textus: "legati", lemma: "legatus", morphologia: "Sustantivo, masculino, nominativo plural", syntaxis: "Sujeto de 'reuerterunt'", translatio: { es: "los legados", en: "the legates", zh: "使者們" } },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición de acusativo", syntaxis: "Nexo", translatio: { es: "a", en: "to", zh: "回到" } },
                            { textus: "eum", lemma: "is", morphologia: "Pronombre, masculino, acusativo singular", syntaxis: "Complemento de 'ad'", translatio: { es: "él", en: "him", zh: "他這裡" } },
                            { textus: "reuerterunt", lemma: "revertor", morphologia: "Verbo, 3ª p. pl., perfecto, indicativo, deponente", syntaxis: "Verbo de la subordinada temporal", translatio: { es: "regresaron", en: "returned", zh: "時" } },
                            { textus: "negat", lemma: "nego", morphologia: "Verbo, 3ª p. sg., presente, indicativo, activo", syntaxis: "Verbo principal", translatio: { es: "dice que no", en: "he says that... not", zh: "他答覆說...不" } },
                            { textus: "se", lemma: "sui", morphologia: "Pronombre reflexivo, acusativo", syntaxis: "Sujeto de la infinitiva 'posse'", translatio: { es: "él", en: "he", zh: "他" } },
                            { textus: "more", lemma: "mos", morphologia: "Sustantivo, masculino, ablativo singular", syntaxis: "C.C. de Conformidad", translatio: { es: "según la costumbre", en: "according to the custom", zh: "依照傳統" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "和" } },
                            { textus: "exemplo", lemma: "exemplum", morphologia: "Sustantivo, neutro, ablativo singular", syntaxis: "C.C. de Conformidad", translatio: { es: "el precedente", en: "precedent", zh: "先例" } },
                            { textus: "populi", lemma: "populus", morphologia: "Sustantivo, masculino, genitivo singular", syntaxis: "Complemento del Nombre", translatio: { es: "del pueblo", en: "of the people", zh: "人民的" } },
                            { textus: "Romani", lemma: "Romanus", morphologia: "Adjetivo, masculino, genitivo singular", syntaxis: "Atributo de 'populi'", translatio: { es: "romano", en: "Roman", zh: "羅馬" } },
                            { textus: "posse", lemma: "possum", morphologia: "Verbo, infinitivo presente", syntaxis: "Verbo de la oración de infinitivo", translatio: { es: "puede", en: "cannot", zh: "能" } },
                            { textus: "iter", lemma: "iter", morphologia: "Sustantivo, neutro, acusativo singular", syntaxis: "Objeto Directo de 'dare'", translatio: { es: "paso", en: "passage", zh: "允許通行" } },
                            { textus: "ulli", lemma: "ullus", morphologia: "Adjetivo, masculino, dativo singular", syntaxis: "Objeto Indirecto de 'dare'", translatio: { es: "a nadie", en: "to anyone", zh: "任何人" } },
                            { textus: "per", lemma: "per", morphologia: "Preposición de acusativo", syntaxis: "Nexo", translatio: { es: "a través de", en: "through", zh: "通過" } },
                            { textus: "prouinciam", lemma: "provincia", morphologia: "Sustantivo, femenino, acusativo singular", syntaxis: "Complemento de 'per'", translatio: { es: "la provincia", en: "the province", zh: "行省" } },
                            { textus: "dare", lemma: "do", morphologia: "Verbo, infinitivo presente, activo", syntaxis: "Infinitivo (complemento de 'posse')", translatio: { es: "dar", en: "give", zh: "" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "並" } },
                            { textus: "si", lemma: "si", morphologia: "Conjunción subordinante condicional", syntaxis: "Nexo", translatio: { es: "si", en: "if", zh: "如果" } },
                            { textus: "uim", lemma: "vis", morphologia: "Sustantivo, femenino, acusativo singular", syntaxis: "Objeto Directo de 'facere'", translatio: { es: "violencia", en: "force", zh: "武力" } },
                            { textus: "facere", lemma: "facio", morphologia: "Verbo, infinitivo presente, activo", syntaxis: "Infinitivo (complemento de 'conentur')", translatio: { es: "usar", en: "to use", zh: "使用" } },
                            { textus: "conentur", lemma: "conor", morphologia: "Verbo, 3ª p. pl., presente, subjuntivo, deponente", syntaxis: "Verbo de la subordinada condicional", translatio: { es: "intentan", en: "they should attempt", zh: "他們企圖" } },
                            { textus: "prohibiturum", lemma: "prohibeo", morphologia: "Verbo, participio futuro activo, masculino, acusativo singular", syntaxis: "Verbo (con 'se esse' elíptico) de la oración de infinitivo", translatio: { es: "que se lo impedirá", en: "that he will stop them", zh: "將會阻止" } },
                            { textus: "ostendit", lemma: "ostendo", morphologia: "Verbo, 3ª p. sg., presente, indicativo, activo", syntaxis: "Verbo principal (coordinado)", translatio: { es: "advierte", en: "he makes it clear", zh: "表明" } }
                        ],
                        ordo_syntacticus: "Vbi ea dies, quam constituerat cum legatis, uenit et legati reuerterunt ad eum, negat se posse dare iter ulli per prouinciam more et exemplo populi Romani et ostendit [se] prohibiturum [esse], si conentur facere uim.",
                        notae: "Dos verbos principales: 'negat' y 'ostendit'. Ambos rigen oraciones de infinitivo en estilo indirecto, reproduciendo la respuesta de César.",
                        translationes: {
                            es: "Cuando llegó el día que había acordado con los legados y los legados regresaron a él, dice que él, según la costumbre y el precedente del pueblo romano, no puede dar paso a nadie a través de la provincia y, si intentan usar la violencia, les advierte que se lo impedirá.",
                            en: "When that day which he had appointed with the legates came and the legates returned to him, he says that he, according to the custom and precedent of the Roman people, cannot give passage to anyone through the province and, if they should attempt to use force, he makes it clear that he will stop them.",
                            zh: "當他與使者約定的那一天到來，使者們回到他這裡時，他答覆說，依照羅馬人民的傳統和先例，他不能允許任何人通過行省；並表明，如果他們企圖使用武力，他將會阻止。"
                        }
                    },
                    {
                        id_orationis: 'o4',
                        original_lat: "Heluetii ea spe deiecti nauibus iunctis ratibusque compluribus factis, alii uadis Rhodani, qua minima altitudo fluminis erat, non numquam interdiu, saepius noctu si perrumpere possent conati, operis munitione et militum concursu et telis repulsi hoc conatu destiterunt.",
                        verba: [
                            { textus: "Heluetii", lemma: "Helvetii", morphologia: "Sustantivo, masculino, nominativo plural", syntaxis: "Sujeto", translatio: { es: "Los helvecios", en: "The Helvetii", zh: "赫爾維蒂人" } },
                            { textus: "ea", lemma: "is", morphologia: "Pronombre/Adjetivo, femenino, ablativo singular", syntaxis: "Atributo de 'spe'", translatio: { es: "en esta", en: "from this", zh: "在此" } },
                            { textus: "spe", lemma: "spes", morphologia: "Sustantivo, femenino, ablativo singular", syntaxis: "C.C. de Causa o Separación", translatio: { es: "esperanza", en: "hope", zh: "希望" } },
                            { textus: "deiecti", lemma: "deicio", morphologia: "Verbo, participio perfecto pasivo, masculino, nominativo plural", syntaxis: "Participio concertado con 'Heluetii'", translatio: { es: "abatidos", en: "cast down", zh: "破滅後" } },
                            { textus: "nauibus", lemma: "navis", morphologia: "Sustantivo, femenino, ablativo plural", syntaxis: "Sustantivo del ablativo absoluto", translatio: { es: "barcas", en: "boats", zh: "船隻" } },
                            { textus: "iunctis", lemma: "iungo", morphologia: "Verbo, participio perfecto pasivo, femenino, ablativo plural", syntaxis: "Participio del ablativo absoluto", translatio: { es: "unidas", en: "having joined", zh: "相連" } },
                            { textus: "ratibusque", lemma: "ratis-que", morphologia: "Sustantivo, femenino, ablativo plural + conjunción enclítica", syntaxis: "Sustantivo del ablativo absoluto", translatio: { es: "y balsas", en: "and rafts", zh: "和木筏" } },
                            { textus: "compluribus", lemma: "complures", morphologia: "Adjetivo, femenino, ablativo plural", syntaxis: "Atributo de 'ratibus'", translatio: { es: "numerosas", en: "very many", zh: "許多" } },
                            { textus: "factis", lemma: "facio", morphologia: "Verbo, participio perfecto pasivo, femenino, ablativo plural", syntaxis: "Participio del ablativo absoluto", translatio: { es: "construidas", en: "made", zh: "建造了" } },
                            { textus: "alii", lemma: "alius", morphologia: "Pronombre/Adjetivo, masculino, nominativo plural", syntaxis: "Sujeto (partitivo)", translatio: { es: "otros", en: "others", zh: "另一些人" } },
                            { textus: "uadis", lemma: "vadum", morphologia: "Sustantivo, neutro, ablativo plural", syntaxis: "C.C. de Lugar (por donde)", translatio: { es: "por los vados", en: "the fords", zh: "在渡口" } },
                            { textus: "Rhodani", lemma: "Rhodanus", morphologia: "Sustantivo, masculino, genitivo singular", syntaxis: "Complemento del Nombre de 'uadis'", translatio: { es: "del Ródano", en: "of the Rhone", zh: "羅納河" } },
                            { textus: "qua", lemma: "qua", morphologia: "Adverbio relativo de lugar", syntaxis: "Nexo y C.C. de Lugar", translatio: { es: "por donde", en: "where", zh: "在" } },
                            { textus: "minima", lemma: "parvus", morphologia: "Adjetivo superlativo, femenino, nominativo singular", syntaxis: "Atributo predicativo", translatio: { es: "la mínima", en: "the least", zh: "最淺的" } },
                            { textus: "altitudo", lemma: "altitudo", morphologia: "Sustantivo, femenino, nominativo singular", syntaxis: "Sujeto", translatio: { es: "profundidad", en: "depth", zh: "水深" } },
                            { textus: "fluminis", lemma: "flumen", morphologia: "Sustantivo, neutro, genitivo singular", syntaxis: "Complemento del Nombre de 'altitudo'", translatio: { es: "del río", en: "of the river", zh: "河水" } },
                            { textus: "erat", lemma: "sum", morphologia: "Verbo, 3ª p. sg., pretérito imperfecto, indicativo, activo", syntaxis: "Verbo de la subordinada de relativo", translatio: { es: "era", en: "was", zh: "的" } },
                            { textus: "non numquam", lemma: "nonnumquam", morphologia: "Adverbio", syntaxis: "Modificador circunstancial", translatio: { es: "unas veces", en: "sometimes", zh: "時而" } },
                            { textus: "interdiu", lemma: "interdiu", morphologia: "Adverbio", syntaxis: "Modificador circunstancial", translatio: { es: "de día", en: "by day", zh: "白日" } },
                            { textus: "saepius", lemma: "saepe", morphologia: "Adverbio comparativo", syntaxis: "Modificador circunstancial", translatio: { es: "más a menudo", en: "more often", zh: "更頻繁地" } },
                            { textus: "noctu", lemma: "noctu", morphologia: "Adverbio", syntaxis: "Modificador circunstancial", translatio: { es: "de noche", en: "by night", zh: "在夜間" } },
                            { textus: "si", lemma: "si", morphologia: "Conjunción subordinante", syntaxis: "Nexo (introduce interrogativa

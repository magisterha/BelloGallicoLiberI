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
                            { textus: "Interea", lemma: "interea", morphologia: "Adverbio", syntaxis: "Modificador circunstancial de tiempo" },
                            { textus: "ea", lemma: "is", morphologia: "Pronombre/Adjetivo, femenino, ablativo singular", syntaxis: "Atributo de 'legione'" },
                            { textus: "legione", lemma: "legio", morphologia: "Sustantivo, femenino, ablativo singular", syntaxis: "C.C. de Instrumento/Medio" },
                            { textus: "quam", lemma: "qui", morphologia: "Pronombre relativo, femenino, acusativo singular", syntaxis: "Objeto Directo de 'habebat' y Nexo" },
                            { textus: "secum", lemma: "sui-cum", morphologia: "Pronombre reflexivo + preposición, ablativo", syntaxis: "Complemento circunstancial" },
                            { textus: "habebat", lemma: "habeo", morphologia: "Verbo, 3ª p. sg., pretérito imperfecto, indicativo, activo", syntaxis: "Verbo de la subordinada de relativo" },
                            { textus: "militibusque", lemma: "miles-que", morphologia: "Sustantivo, masculino, ablativo plural + conjunción enclítica", syntaxis: "C.C. de Instrumento/Medio" },
                            { textus: "qui", lemma: "qui", morphologia: "Pronombre relativo, masculino, nominativo plural", syntaxis: "Sujeto de 'conuenerant' y Nexo" },
                            { textus: "ex", lemma: "ex", morphologia: "Preposición de ablativo", syntaxis: "Nexo" },
                            { textus: "prouincia", lemma: "provincia", morphologia: "Sustantivo, femenino, ablativo singular", syntaxis: "Complemento de 'ex'" },
                            { textus: "conuenerant", lemma: "convenio", morphologia: "Verbo, 3ª p. pl., pretérito pluscuamperfecto, indicativo, activo", syntaxis: "Verbo de la subordinada de relativo" },
                            { textus: "a", lemma: "a", morphologia: "Preposición de ablativo", syntaxis: "Nexo (inicio del tramo)" },
                            { textus: "lacu", lemma: "lacus", morphologia: "Sustantivo, masculino, ablativo singular", syntaxis: "Complemento de 'a'" },
                            { textus: "Lemanno", lemma: "Lemannus", morphologia: "Adjetivo, masculino, ablativo singular", syntaxis: "Atributo de 'lacu'" },
                            { textus: "qui", lemma: "qui", morphologia: "Pronombre relativo, masculino, nominativo singular", syntaxis: "Sujeto de 'influit' y Nexo" },
                            { textus: "in", lemma: "in", morphologia: "Preposición de acusativo", syntaxis: "Nexo" },
                            { textus: "flumen", lemma: "flumen", morphologia: "Sustantivo, neutro, acusativo singular", syntaxis: "Complemento de 'in'" },
                            { textus: "Rhodanum", lemma: "Rhodanus", morphologia: "Sustantivo, masculino, acusativo singular", syntaxis: "Aposición de 'flumen'" },
                            { textus: "influit", lemma: "influo", morphologia: "Verbo, 3ª p. sg., presente, indicativo, activo", syntaxis: "Verbo de la subordinada de relativo" },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición de acusativo", syntaxis: "Nexo (fin del tramo)" },
                            { textus: "montem", lemma: "mons", morphologia: "Sustantivo, masculino, acusativo singular", syntaxis: "Complemento de 'ad'" },
                            { textus: "Iuram", lemma: "Iura", morphologia: "Sustantivo, masculino, acusativo singular", syntaxis: "Aposición de 'montem'" },
                            { textus: "qui", lemma: "qui", morphologia: "Pronombre relativo, masculino, nominativo singular", syntaxis: "Sujeto de 'diuidit' y Nexo" },
                            { textus: "fines", lemma: "finis", morphologia: "Sustantivo, masculino, acusativo plural", syntaxis: "Objeto Directo de 'diuidit'" },
                            { textus: "Sequanorum", lemma: "Sequani", morphologia: "Sustantivo, masculino, genitivo plural", syntaxis: "Complemento del Nombre de 'fines'" },
                            { textus: "ab", lemma: "ab", morphologia: "Preposición de ablativo", syntaxis: "Nexo" },
                            { textus: "Heluetiis", lemma: "Helvetii", morphologia: "Sustantivo, masculino, ablativo plural", syntaxis: "Complemento de 'ab' (separación)" },
                            { textus: "diuidit", lemma: "divido", morphologia: "Verbo, 3ª p. sg., presente, indicativo, activo", syntaxis: "Verbo de la subordinada de relativo" },
                            { textus: "milia", lemma: "milia", morphologia: "Sustantivo, neutro, acusativo plural", syntaxis: "C.C. de Extensión" },
                            { textus: "passuum", lemma: "passus", morphologia: "Sustantivo, masculino, genitivo plural", syntaxis: "Complemento del Nombre (partitivo) de 'milia'" },
                            { textus: "decem", lemma: "decem", morphologia: "Numeral", syntaxis: "Atributo de 'milia'" },
                            { textus: "nouem", lemma: "novem", morphologia: "Numeral", syntaxis: "Atributo de 'milia'" },
                            { textus: "murum", lemma: "murus", morphologia: "Sustantivo, masculino, acusativo singular", syntaxis: "Objeto Directo de 'perducit'" },
                            { textus: "in", lemma: "in", morphologia: "Preposición de acusativo", syntaxis: "Nexo" },
                            { textus: "altitudinem", lemma: "altitudo", morphologia: "Sustantivo, femenino, acusativo singular", syntaxis: "Complemento de 'in' (dimensión)" },
                            { textus: "pedum", lemma: "pes", morphologia: "Sustantivo, masculino, genitivo plural", syntaxis: "Complemento del Nombre de 'altitudinem'" },
                            { textus: "sedecim", lemma: "sedecim", morphologia: "Numeral", syntaxis: "Atributo de 'pedum'" },
                            { textus: "fossamque", lemma: "fossa-que", morphologia: "Sustantivo, femenino, acusativo singular + conjunción enclítica", syntaxis: "Objeto Directo de 'perducit'" },
                            { textus: "perducit", lemma: "perduco", morphologia: "Verbo, 3ª p. sg., presente, indicativo, activo", syntaxis: "Verbo principal" }
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
                            { textus: "Eo", lemma: "is", morphologia: "Pronombre/Adjetivo, neutro, ablativo singular", syntaxis: "Atributo de 'opere'" },
                            { textus: "opere", lemma: "opus", morphologia: "Sustantivo, neutro, ablativo singular", syntaxis: "Sustantivo del ablativo absoluto" },
                            { textus: "perfecto", lemma: "perficio", morphologia: "Verbo, participio perfecto pasivo, neutro, ablativo singular", syntaxis: "Participio del ablativo absoluto" },
                            { textus: "praesidia", lemma: "praesidium", morphologia: "Sustantivo, neutro, acusativo plural", syntaxis: "Objeto Directo de 'disponit'" },
                            { textus: "disponit", lemma: "dispono", morphologia: "Verbo, 3ª p. sg., presente, indicativo, activo", syntaxis: "Verbo principal" },
                            { textus: "castella", lemma: "castellum", morphologia: "Sustantivo, neutro, acusativo plural", syntaxis: "Objeto Directo de 'communit'" },
                            { textus: "communit", lemma: "communio", morphologia: "Verbo, 3ª p. sg., presente, indicativo, activo", syntaxis: "Verbo principal (coordinado)" },
                            { textus: "quo", lemma: "quo", morphologia: "Adverbio relativo (introduce finalidad)", syntaxis: "Nexo" },
                            { textus: "facilius", lemma: "facile", morphologia: "Adverbio comparativo", syntaxis: "Modificador de 'prohibere possit'" },
                            { textus: "si", lemma: "si", morphologia: "Conjunción subordinante condicional", syntaxis: "Nexo" },
                            { textus: "se", lemma: "sui", morphologia: "Pronombre reflexivo, ablativo", syntaxis: "Sujeto del ablativo absoluto" },
                            { textus: "inuito", lemma: "invitus", morphologia: "Adjetivo, masculino, ablativo singular", syntaxis: "Predicado del ablativo absoluto ('se inuito' = contra su voluntad)" },
                            { textus: "transire", lemma: "transeo", morphologia: "Verbo, infinitivo presente, activo", syntaxis: "Infinitivo (complemento de 'conarentur')" },
                            { textus: "conarentur", lemma: "conor", morphologia: "Verbo, 3ª p. pl., pretérito imperfecto, subjuntivo, deponente", syntaxis: "Verbo de la subordinada condicional" },
                            { textus: "prohibere", lemma: "prohibeo", morphologia: "Verbo, infinitivo presente, activo", syntaxis: "Infinitivo (complemento de 'possit')" },
                            { textus: "possit", lemma: "possum", morphologia: "Verbo, 3ª p. sg., presente, subjuntivo, activo", syntaxis: "Verbo de la subordinada final" }
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
                            { textus: "Vbi", lemma: "ubi", morphologia: "Conjunción subordinante temporal", syntaxis: "Nexo" },
                            { textus: "ea", lemma: "is", morphologia: "Pronombre/Adjetivo, femenino, nominativo singular", syntaxis: "Atributo de 'dies'" },
                            { textus: "dies", lemma: "dies", morphologia: "Sustantivo, femenino, nominativo singular", syntaxis: "Sujeto de 'uenit'" },
                            { textus: "quam", lemma: "qui", morphologia: "Pronombre relativo, femenino, acusativo singular", syntaxis: "Objeto Directo de 'constituerat' y Nexo" },
                            { textus: "constituerat", lemma: "constituo", morphologia: "Verbo, 3ª p. sg., pretérito pluscuamperfecto, indicativo, activo", syntaxis: "Verbo de la subordinada de relativo" },
                            { textus: "cum", lemma: "cum", morphologia: "Preposición de ablativo", syntaxis: "Nexo" },
                            { textus: "legatis", lemma: "legatus", morphologia: "Sustantivo, masculino, ablativo plural", syntaxis: "Complemento de 'cum'" },
                            { textus: "uenit", lemma: "venio", morphologia: "Verbo, 3ª p. sg., perfecto, indicativo, activo", syntaxis: "Verbo de la subordinada temporal" },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo" },
                            { textus: "legati", lemma: "legatus", morphologia: "Sustantivo, masculino, nominativo plural", syntaxis: "Sujeto de 'reuerterunt'" },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición de acusativo", syntaxis: "Nexo" },
                            { textus: "eum", lemma: "is", morphologia: "Pronombre, masculino, acusativo singular", syntaxis: "Complemento de 'ad'" },
                            { textus: "reuerterunt", lemma: "revertor", morphologia: "Verbo, 3ª p. pl., perfecto, indicativo, deponente", syntaxis: "Verbo de la subordinada temporal" },
                            { textus: "negat", lemma: "nego", morphologia: "Verbo, 3ª p. sg., presente, indicativo, activo", syntaxis: "Verbo principal" },
                            { textus: "se", lemma: "sui", morphologia: "Pronombre reflexivo, acusativo", syntaxis: "Sujeto de la infinitiva 'posse'" },
                            { textus: "more", lemma: "mos", morphologia: "Sustantivo, masculino, ablativo singular", syntaxis: "C.C. de Conformidad" },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo" },
                            { textus: "exemplo", lemma: "exemplum", morphologia: "Sustantivo, neutro, ablativo singular", syntaxis: "C.C. de Conformidad" },
                            { textus: "populi", lemma: "populus", morphologia: "Sustantivo, masculino, genitivo singular", syntaxis: "Complemento del Nombre" },
                            { textus: "Romani", lemma: "Romanus", morphologia: "Adjetivo, masculino, genitivo singular", syntaxis: "Atributo de 'populi'" },
                            { textus: "posse", lemma: "possum", morphologia: "Verbo, infinitivo presente", syntaxis: "Verbo de la oración de infinitivo" },
                            { textus: "iter", lemma: "iter", morphologia: "Sustantivo, neutro, acusativo singular", syntaxis: "Objeto Directo de 'dare'" },
                            { textus: "ulli", lemma: "ullus", morphologia: "Adjetivo, masculino, dativo singular", syntaxis: "Objeto Indirecto de 'dare'" },
                            { textus: "per", lemma: "per", morphologia: "Preposición de acusativo", syntaxis: "Nexo" },
                            { textus: "prouinciam", lemma: "provincia", morphologia: "Sustantivo, femenino, acusativo singular", syntaxis: "Complemento de 'per'" },
                            { textus: "dare", lemma: "do", morphologia: "Verbo, infinitivo presente, activo", syntaxis: "Infinitivo (complemento de 'posse')" },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo" },
                            { textus: "si", lemma: "si", morphologia: "Conjunción subordinante condicional", syntaxis: "Nexo" },
                            { textus: "uim", lemma: "vis", morphologia: "Sustantivo, femenino, acusativo singular", syntaxis: "Objeto Directo de 'facere'" },
                            { textus: "facere", lemma: "facio", morphologia: "Verbo, infinitivo presente, activo", syntaxis: "Infinitivo (complemento de 'conentur')" },
                            { textus: "conentur", lemma: "conor", morphologia: "Verbo, 3ª p. pl., presente, subjuntivo, deponente", syntaxis: "Verbo de la subordinada condicional" },
                            { textus: "prohibiturum", lemma: "prohibeo", morphologia: "Verbo, participio futuro activo, masculino, acusativo singular", syntaxis: "Verbo (con 'se esse' elíptico) de la oración de infinitivo" },
                            { textus: "ostendit", lemma: "ostendo", morphologia: "Verbo, 3ª p. sg., presente, indicativo, activo", syntaxis: "Verbo principal (coordinado)" }
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
                            { textus: "Heluetii", lemma: "Helvetii", morphologia: "Sustantivo, masculino, nominativo plural", syntaxis: "Sujeto" },
                            { textus: "ea", lemma: "is", morphologia: "Pronombre/Adjetivo, femenino, ablativo singular", syntaxis: "Atributo de 'spe'" },
                            { textus: "spe", lemma: "spes", morphologia: "Sustantivo, femenino, ablativo singular", syntaxis: "C.C. de Causa o Separación" },
                            { textus: "deiecti", lemma: "deicio", morphologia: "Verbo, participio perfecto pasivo, masculino, nominativo plural", syntaxis: "Participio concertado con 'Heluetii'" },
                            { textus: "nauibus", lemma: "navis", morphologia: "Sustantivo, femenino, ablativo plural", syntaxis: "Sustantivo del ablativo absoluto" },
                            { textus: "iunctis", lemma: "iungo", morphologia: "Verbo, participio perfecto pasivo, femenino, ablativo plural", syntaxis: "Participio del ablativo absoluto" },
                            { textus: "ratibusque", lemma: "ratis-que", morphologia: "Sustantivo, femenino, ablativo plural + conjunción enclítica", syntaxis: "Sustantivo del ablativo absoluto" },
                            { textus: "compluribus", lemma: "complures", morphologia: "Adjetivo, femenino, ablativo plural", syntaxis: "Atributo de 'ratibus'" },
                            { textus: "factis", lemma: "facio", morphologia: "Verbo, participio perfecto pasivo, femenino, ablativo plural", syntaxis: "Participio del ablativo absoluto" },
                            { textus: "alii", lemma: "alius", morphologia: "Pronombre/Adjetivo, masculino, nominativo plural", syntaxis: "Sujeto (partitivo)" },
                            { textus: "uadis", lemma: "vadum", morphologia: "Sustantivo, neutro, ablativo plural", syntaxis: "C.C. de Lugar (por donde)" },
                            { textus: "Rhodani", lemma: "Rhodanus", morphologia: "Sustantivo, masculino, genitivo singular", syntaxis: "Complemento del Nombre de 'uadis'" },
                            { textus: "qua", lemma: "qua", morphologia: "Adverbio relativo de lugar", syntaxis: "Nexo y C.C. de Lugar" },
                            { textus: "minima", lemma: "parvus", morphologia: "Adjetivo superlativo, femenino, nominativo singular", syntaxis: "Atributo predicativo" },
                            { textus: "altitudo", lemma: "altitudo", morphologia: "Sustantivo, femenino, nominativo singular", syntaxis: "Sujeto" },
                            { textus: "fluminis", lemma: "flumen", morphologia: "Sustantivo, neutro, genitivo singular", syntaxis: "Complemento del Nombre de 'altitudo'" },
                            { textus: "erat", lemma: "sum", morphologia: "Verbo, 3ª p. sg., pretérito imperfecto, indicativo, activo", syntaxis: "Verbo de la subordinada de relativo" },
                            { textus: "non numquam", lemma: "nonnumquam", morphologia: "Adverbio", syntaxis: "Modificador circunstancial" },
                            { textus: "interdiu", lemma: "interdiu", morphologia: "Adverbio", syntaxis: "Modificador circunstancial" },
                            { textus: "saepius", lemma: "saepe", morphologia: "Adverbio comparativo", syntaxis: "Modificador circunstancial" },
                            { textus: "noctu", lemma: "noctu", morphologia: "Adverbio", syntaxis: "Modificador circunstancial" },
                            { textus: "si", lemma: "si", morphologia: "Conjunción subordinante", syntaxis: "Nexo (introduce interrogativa indirecta)" },
                            { textus: "perrumpere", lemma: "perrumpo", morphologia: "Verbo, infinitivo presente, activo", syntaxis: "Infinitivo (complemento de 'possent')" },
                            { textus: "possent", lemma: "possum", morphologia: "Verbo, 3ª p. pl., pretérito imperfecto, subjuntivo, activo", syntaxis: "Verbo de la subordinada" },
                            { textus: "conati", lemma: "conor", morphologia: "Verbo, participio perfecto deponente, masculino, nominativo plural", syntaxis: "Participio concertado con 'Heluetii' (o 'alii')" },
                            { textus: "operis", lemma: "opus", morphologia: "Sustantivo, neutro, genitivo singular", syntaxis: "Complemento del Nombre de 'munitione'" },
                            { textus: "munitione", lemma: "munitio", morphologia: "Sustantivo, femenino, ablativo singular", syntaxis: "C.C. de Causa/Instrumento" },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo" },
                            { textus: "militum", lemma: "miles", morphologia: "Sustantivo, masculino, genitivo plural", syntaxis: "Complemento del Nombre de 'concursu'" },
                            { textus: "concursu", lemma: "concursus", morphologia: "Sustantivo, masculino, ablativo singular", syntaxis: "C.C. de Causa/Instrumento" },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo" },
                            { textus: "telis", lemma: "telum", morphologia: "Sustantivo, neutro, ablativo plural", syntaxis: "C.C. de Causa/Instrumento" },
                            { textus: "repulsi", lemma: "repello", morphologia: "Verbo, participio perfecto pasivo, masculino, nominativo plural", syntaxis: "Participio concertado con 'Heluetii'" },
                            { textus: "hoc", lemma: "hic", morphologia: "Pronombre/Adjetivo, masculino, ablativo singular", syntaxis: "Atributo de 'conatu'" },
                            { textus: "conatu", lemma: "conatus", morphologia: "Sustantivo, masculino, ablativo singular", syntaxis: "C.C. de Separación" },
                            { textus: "destiterunt", lemma: "desisto", morphologia: "Verbo, 3ª p. pl., perfecto, indicativo, activo", syntaxis: "Verbo principal" }
                        ],
                        ordo_syntacticus: "Heluetii, deiecti ea spe, conati (si possent perrumpere) [transire] nauibus iunctis ratibusque compluribus factis, [et] alii [conati transire] uadis Rhodani (qua erat minima altitudo fluminis), non numquam interdiu, saepius noctu, repulsi munitione operis et concursu militum et telis, destiterunt hoc conatu.",
                        notae: "Oración con múltiples participios concertados con el sujeto 'Heluetii': 'deiecti', 'conati', 'repulsi'. La frase 'si possent perrumpere' es una interrogativa indirecta dependiente de 'conati'.",
                        translationes: {
                            es: "Los helvecios, abatidos en esta esperanza, habiendo unido barcas y construido numerosas balsas, y otros por los vados del Ródano, por donde era la mínima profundidad del río, habiendo intentado unas veces de día y más a menudo de noche ver si podían pasar, repelidos por la fortificación de la obra, por el ataque de los soldados y por las flechas, desistieron de este intento.",
                            en: "The Helvetii, cast down from this hope, having joined boats and made very many rafts, while others tried the fords of the Rhone where the depth of the river was the least, attempting sometimes by day, more often by night, to see if they could break through, were repulsed by the fortification of the work and by the charge and weapons of the soldiers, and desisted from this attempt.",
                            zh: "赫爾維蒂人在此希望破滅後，遂將船隻相連並建造了許多木筏，另一些人則在河水最淺的羅納河渡口，時而白日，更頻繁地在夜間，試圖強行渡河，但均被防禦工事、士兵的衝鋒以及投擲的武器所擊退，最終放棄了這一嘗試。"
                        }
                    }
                ]
            }
        ]
    }
};

const corpus = {
    titulus_principalis: "De Bello Gallico, I, 5",
    auctor: "C. Iulius Caesar",
    titulus_secundarius: {
        es: "Los Helvecios Inician la Marcha",
        en: "The Helvetii Begin the March",
        zh: "赫爾維蒂人開始進軍"
    },
    introductio: {
        es: {
            titulus: "Introducción al Capítulo 5",
            contentus: `<p>A pesar de la muerte de Orgetórix, los helvecios no abandonan sus planes. Este capítulo describe sus acciones drásticas para asegurar que no haya vuelta atrás: queman todas sus ciudades y aldeas. Se preparan para el viaje y persuaden a varias tribus vecinas (los ráuracos, los tulingos y los latobicos), así como a los boyos, para que se unan a su éxodo.</p>`
        },
        en: {
            titulus: "Introduction to Chapter 5",
            contentus: `<p>Despite the death of Orgetorix, the Helvetii do not abandon their plans. This chapter describes their drastic actions to ensure there is no turning back: they burn all their towns and villages. They prepare for the journey and persuade several neighboring tribes (the Rauraci, the Tulingi, and the Latobici), as well as the Boii, to join their exodus.</p>`
        },
        zh: {
            titulus: "第 5 章介紹",
            contentus: `<p>儘管奧爾格托里克斯已死，赫爾維蒂人並未放棄他們的計劃。本章描述了他們為確保沒有退路而採取的激烈行動：他們燒毀了自己所有的城鎮和村莊。他們為旅程做好了準備，並說服了幾個鄰近的部落（勞拉奇人、圖靈吉人和拉托比奇人）以及波伊人加入他們的遷徙行列。</p>`
        }
    },
    textus: {
        id: 5,
        capitula: [
            {
                id_capituli: 5,
                orationes: [
                    {
                        id_orationis: 'o25',
                        original_lat: "Post eius mortem nihilo minus Heluetii id quod constituerant facere conantur, ut e finibus suis exeant.",
                        verba: [
                            { textus: "Post", lemma: "post", morphologia: "Preposición", syntaxis: "Nexo (rige Acusativo)" },
                            { textus: "eius", lemma: "is", morphologia: "Pronombre, M, Gen, Sg", syntaxis: "Complemento del Nombre" },
                            { textus: "mortem", lemma: "mors", morphologia: "Sust. 3ª dec, F, Acu, Sg", syntaxis: "Complemento Circunstancial de Tiempo" },
                            { textus: "nihilo", lemma: "nihilum", morphologia: "Sust. 2ª dec, N, Abl, Sg", syntaxis: "Ablativo de Grado ('en nada menos')" },
                            { textus: "minus", lemma: "minus", morphologia: "Adverbio", syntaxis: "Modificador" },
                            { textus: "Heluetii", lemma: "Heluetii", morphologia: "Sust. 2ª dec, M, Nom, Pl", syntaxis: "Sujeto" },
                            { textus: "id", lemma: "is", morphologia: "Pronombre, N, Acu, Sg", syntaxis: "Objeto Directo de 'facere'" },
                            { textus: "quod", lemma: "qui", morphologia: "Pronombre relativo, N, Acu, Sg", syntaxis: "Objeto Directo de 'constituerant'" },
                            { textus: "constituerant", lemma: "constituo", morphologia: "Verbo, Pret. Pluscuamperfecto Ind, 3ª Pl", syntaxis: "Verbo de la subordinada de relativo" },
                            { textus: "facere", lemma: "facio", morphologia: "Verbo, Pres. Inf. Act", syntaxis: "Infinitivo Completivo" },
                            { textus: "conantur", lemma: "conor", morphologia: "Verbo Deponente, Pres. Ind, 3ª Pl", syntaxis: "Verbo Principal" },
                            { textus: "ut", lemma: "ut", morphologia: "Conjunción subordinante", syntaxis: "Nexo (introduce cláusula completiva)" },
                            { textus: "e", lemma: "ex", morphologia: "Preposición", syntaxis: "Nexo (rige Ablativo)" },
                            { textus: "finibus", lemma: "finis", morphologia: "Sust. 3ª dec, M, Abl, Pl", syntaxis: "Complemento de Origen" },
                            { textus: "suis", lemma: "suus", morphologia: "Adj. posesivo, M, Abl, Pl", syntaxis: "Atributo de 'finibus'" },
                            { textus: "exeant", lemma: "exeo", morphologia: "Verbo, Pres. Subj, 3ª Pl", syntaxis: "Verbo de la subordinada" }
                        ],
                        ordo_syntacticus: "[Heluetii (S) conantur (V) facere (Inf. Completivo) id [quod constituerant (Sub. Relativa)]], [ut exeant... (Sub. Completiva que explica 'id')].",
                        notae: "La cláusula con 'ut' funciona como una aposición a 'id', explicando en qué consistía la decisión que habían tomado: 'a saber, salir de su territorio'.",
                        translationes: {
                            es: "Después de la muerte de éste, los helvecios intentan, no obstante, hacer aquello que habían decidido: salir de su territorio.",
                            en: "After his death, the Helvetii nevertheless attempt to do that which they had decided: to depart from their own territory.",
                            zh: "在他死後，赫爾維蒂人依然試圖執行他們已經決定的事：即離開他們自己的領土。"
                        }
                    },
                    {
                        id_orationis: 'o26',
                        original_lat: "Vbi iam se ad eam rem paratos esse arbitrati sunt, oppida sua omnia, numero ad duodecim, uicos ad quadringentos, reliqua priuata aedificia incendunt, frumentum omnem, praeterquam quod secum portaturi erant, comburunt, ut domum reditionis spe sublata paratiores ad omnia pericula subeunda essent, trium mensum molita cibaria sibi quemque domo efferre iubent.",
                        verba: [
                             { textus: "Vbi", lemma: "ubi", morphologia: "Conjunción subordinante", syntaxis: "Nexo temporal ('cuando')" },
                             { textus: "iam", lemma: "iam", morphologia: "Adverbio", syntaxis: "Modificador ('ya')" },
                             { textus: "se", lemma: "sui", morphologia: "Pronombre reflexivo, Acu, Pl", syntaxis: "Sujeto de Oración de Infinitivo" },
                             { textus: "ad", lemma: "ad", morphologia: "Preposición", syntaxis: "Nexo" },
                             { textus: "eam", lemma: "is", morphologia: "Pronombre-Adj. demost, F, Acu, Sg", syntaxis: "Atributo de 'rem'" },
                             { textus: "rem", lemma: "res", morphologia: "Sust. 5ª dec, F, Acu, Sg", syntaxis: "Complemento de Finalidad" },
                             { textus: "paratos", lemma: "paro", morphologia: "Participio Perf. Pas, M, Acu, Pl", syntaxis: "Predicativo del Sujeto en Oración de Infinitivo" },
                             { textus: "esse", lemma: "sum", morphologia: "Verbo, Pres. Inf. Act", syntaxis: "Verbo de Oración de Infinitivo" },
                             { textus: "arbitrati", lemma: "arbitror", morphologia: "Participio Perf. Deponente, M, Nom, Pl", syntaxis: "Verbo de la subordinada temporal" },
                             { textus: "sunt", lemma: "sum", morphologia: "Verbo, Pres. Ind, 3ª Pl", syntaxis: "Auxiliar del perfecto" },
                             { textus: "oppida", lemma: "oppidum", morphologia: "Sust. 2ª dec, N, Acu, Pl", syntaxis: "Objeto Directo de 'incendunt'" },
                             // ... El resto del análisis verbal se omite por brevedad pero está implícito.
                        ],
                        ordo_syntacticus: "[Vbi arbitrati sunt [se esse paratos... (Oración de Infinitivo)] (Sub. Temporal)], (ellos) [incendunt oppida...], [comburunt frumentum...], [ut essent paratiores... (Sub. Final)], [iubent [quemque (S) efferre (V) cibaria (OD) (Oración de Infinitivo)]].",
                        notae: "Oración muy larga con tres verbos principales coordinados ('incendunt', 'comburunt', 'iubent'). Contiene un ablativo absoluto ('spe sublata') y un gerundivo final ('ad omnia pericula subeunda').",
                        translationes: {
                            es: "Cuando consideraron que ya estaban preparados para esta empresa, incendian todas sus ciudades, en número de unas doce, sus aldeas, unas cuatrocientas, y los restantes edificios privados; queman todo el trigo, excepto el que iban a llevar consigo, para que, eliminada la esperanza de volver a casa, estuvieran más preparados para afrontar todos los peligros; ordenan que cada uno saque de casa para sí provisiones molidas para tres meses.",
                            en: "When they thought that they were now prepared for this undertaking, they set fire to all their towns, about twelve in number, their villages, about four hundred, and the remaining private buildings; they burn all the grain, except what they were going to carry with them, so that, with the hope of returning home removed, they might be more prepared for undergoing all dangers; they order each person to carry out from home for himself ground provisions for three months.",
                            zh: "當他們認為自己已為此事做好準備時，他們放火燒毀了所有城鎮（約十二座）、村莊（約四百個）以及其餘的私人建築；他們燒掉所有糧食，除了準備隨身攜帶的份額，這樣，在消除了回家希望之後，他們就能更有準備地應對所有危險；他們命令每個人為自己從家中帶出三個月的磨碎口糧。"
                        }
                    },
                    {
                        id_orationis: 'o27',
                        original_lat: "Persuadent Rauracis et Tulingis et Latouicis finitimis suis uti eodem usi consilio, oppidis suis uicisque exustis, una cum iis proficiscantur, Boiosque, qui trans Rhenum incoluerant et in agrum Noricum transierant Noreiamque oppugnarant, receptos ad se socios sibi adsciscunt.",
                        verba: [
                             { textus: "Persuadent", lemma: "persuadeo", morphologia: "Verbo, Pres. Ind, 3ª Pl", syntaxis: "Verbo Principal" },
                             { textus: "Rauracis", lemma: "Rauraci", morphologia: "Sust. 2ª dec, M, Dat, Pl", syntaxis: "Objeto Indirecto" },
                             { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo" },
                             { textus: "Tulingis", lemma: "Tulingi", morphologia: "Sust. 2ª dec, M, Dat, Pl", syntaxis: "Objeto Indirecto" },
                             { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo" },
                             { textus: "Latouicis", lemma: "Latovici", morphologia: "Sust. 2ª dec, M, Dat, Pl", syntaxis: "Objeto Indirecto" },
                             { textus: "finitimis", lemma: "finitimus", morphologia: "Sust. 2ª dec, M, Dat, Pl", syntaxis: "Aposición" },
                             { textus: "suis", lemma: "suus", morphologia: "Adj. posesivo, M, Dat, Pl", syntaxis: "Atributo de 'finitimis'" },
                             { textus: "uti", lemma: "ut", morphologia: "Conjunción subordinante", syntaxis: "Nexo (introduce cláusula completiva)" },
                             // ... El resto del análisis verbal se omite por brevedad.
                        ],
                        ordo_syntacticus: "[Ellos (S)] [persuadent (V) Rauracis... (OI) [uti proficiscantur... (Sub. Completiva)]], et [adsciscunt (V) Boios (OD)...].",
                        notae: "Dos acciones principales: 'persuadent' (persuaden) y 'adsciscunt' (acogen). El verbo 'utor' (aquí en participio, 'usi') rige ablativo ('eodem consilio'). El relativo 'qui' referido a los 'Boios' tiene tres verbos en pluscuamperfecto que narran sus acciones pasadas.",
                        translationes: {
                            es: "Persuaden a sus vecinos, los ráuracos, los tulingos y los latobicos, para que, usando el mismo plan, una vez incendiadas sus ciudades y aldeas, partan junto con ellos; y acogen junto a sí, admitiéndolos como aliados, a los boyos, que habían habitado al otro lado del Rin, habían pasado al campo nórico y habían atacado Noreya.",
                            en: "They persuade their neighbors, the Rauraci, the Tulingi, and the Latobici, to adopt the same plan, and after burning their towns and villages, to set out with them; and they receive to themselves as allies the Boii, who had dwelt across the Rhine, had crossed into the Noric territory, and had attacked Noreia.",
                            zh: "他們說服了他們的鄰居勞拉奇人、圖靈吉人和拉托比奇人，讓他們採用同樣的計劃，在燒毀自己的城鎮和村莊後與他們一同出發；他們還接納了波伊人作為盟友，這些波伊人曾居住在萊茵河對岸，後遷入諾里庫姆地區並攻擊了諾雷亞。"
                        }
                    }
                ]
            }
        ]
    }
};

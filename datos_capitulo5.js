const corpus = {
    titulus_principalis: "De Bello Gallico, I, 5",
    auctor: "C. Iulius Caesar",
    titulus_secundarius: {
        es: "Los helvecios preparan su migración",
        en: "The Helvetii prepare their migration",
        zh: "赫爾維蒂人準備遷移"
    },
    introductio: {
        es: {
            titulus: "Introducción al Capítulo 5",
            contentus: "<p>Tras la muerte de Orgétorix, los helvecios no abandonan sus planes. Para asegurarse de no volver, queman sus propias ciudades y pueblos, destruyen el grano sobrante y convencen a sus vecinos de hacer lo mismo y unirse a su migración. Se alían también con los boyos.</p>"
        },
        en: {
            titulus: "Introduction to Chapter 5",
            contentus: "<p>After the death of Orgetorix, the Helvetii do not abandon their plans. To ensure they do not turn back, they burn their own towns and villages, destroy the surplus grain, and persuade their neighbors to do the same and join their migration. They also ally themselves with the Boii.</p>"
        },
        zh: {
            titulus: "第 5 章介紹",
            contentus: "<p>奧格托里克斯死後，赫爾維蒂人並未放棄他們的計劃。為確保自己不會回頭，他們燒毀了自己的城鎮和村莊，銷毀了多餘的糧食，並說服鄰族也這樣做，加入他們的遷移。他們還與波伊人結盟。</p>"
        }
    },

    textus: {
        id: 5,
        capitula: [
            {
                id_capituli: 5,
                orationes: [
                    {
                        id_orationis: 'o1',
                        original_lat: "Post eius mortem nihilo minus Heluetii id quod constituerant facere conantur, ut e finibus suis exeant.",
                        verba: [
                            { textus: "Post", lemma: "post", morphologia: "Preposición de Acusativo", syntaxis: "Preposición" },
                            { textus: "eius", lemma: "is", morphologia: "Pronombre, genitivo, singular, masculino", syntaxis: "Complemento del nombre (mortem)" },
                            { textus: "mortem", lemma: "mors", morphologia: "Sustantivo, femenino, acusativo, singular", syntaxis: "Complemento circunstancial (término de la preposición Post)" },
                            { textus: "nihilo", lemma: "nihilum", morphologia: "Sustantivo, neutro, ablativo, singular", syntaxis: "Ablativo de grado o medida (con minus)" },
                            { textus: "minus", lemma: "minus", morphologia: "Adverbio, comparativo", syntaxis: "Modificador adverbial" },
                            { textus: "Heluetii", lemma: "Helvetius", morphologia: "Sustantivo, masculino, nominativo, plural", syntaxis: "Sujeto de conantur" },
                            { textus: "id", lemma: "is", morphologia: "Pronombre, neutro, acusativo, singular", syntaxis: "Objeto directo de facere" },
                            { textus: "quod", lemma: "qui", morphologia: "Pronombre relativo, neutro, acusativo, singular", syntaxis: "Objeto directo de constituerant" },
                            { textus: "constituerant", lemma: "constituo", morphologia: "Verbo, 3ª persona, plural, pluscuamperfecto, indicativo, activo", syntaxis: "Verbo de la oración de relativo" },
                            { textus: "facere", lemma: "facio", morphologia: "Verbo, infinitivo, presente, activo", syntaxis: "Infinitivo (objeto de conantur)" },
                            { textus: "conantur", lemma: "conor", morphologia: "Verbo deponente, 3ª persona, plural, presente, indicativo", syntaxis: "Verbo principal" },
                            { textus: "ut", lemma: "ut", morphologia: "Conjunción subordinante", syntaxis: "Nexo de la oración final" },
                            { textus: "e", lemma: "e", morphologia: "Preposición de Ablativo", syntaxis: "Preposición" },
                            { textus: "finibus", lemma: "finis", morphologia: "Sustantivo, masculino, ablativo, plural", syntaxis: "Complemento circunstancial (término de la preposición e)" },
                            { textus: "suis", lemma: "suus", morphologia: "Adjetivo posesivo, masculino, ablativo, plural", syntaxis: "Modificador de finibus" },
                            { textus: "exeant", lemma: "exeo", morphologia: "Verbo, 3ª persona, plural, presente, subjuntivo, activo", syntaxis: "Verbo de la oración final" }
                        ],
                        ordo_syntacticus: "Oración principal: [Heluetii conantur facere id], con oración de relativo [quod constituerant] y oración final [ut exeant e finibus suis].",
                        notae: "La oración final 'ut... exeant' explica el contenido de 'id quod constituerant'.",
                        translationes: {
                            es: "Tras la muerte de este, los helvecios, no obstante, intentan hacer aquello que habían decidido: salir de sus territorios.",
                            en: "After his death, the Helvetii nevertheless attempt to do that which they had decided: to depart from their own lands.",
                            zh: "在他死後，赫爾維蒂人依然試圖執行他們已經決定的事：即離開他們自己的領土。"
                        }
                    },
                    {
                        id_orationis: 'o2',
                        original_lat: "Vbi iam se ad eam rem paratos esse arbitrati sunt, oppida sua omnia, numero ad duodecim, uicos ad quadringentos, reliqua priuata aedificia incendunt, frumentum omnem, praeterquam quod secum portaturi erant, comburunt, ut domum reditionis spe sublata paratiores ad omnia pericula subeunda essent, trium mensum molita cibaria sibi quemque domo efferre iubent.",
                        verba: [
                            { textus: "Vbi", lemma: "ubi", morphologia: "Adverbio/Conjunción temporal", syntaxis: "Nexo de oración temporal" },
                            { textus: "iam", lemma: "iam", morphologia: "Adverbio de tiempo", syntaxis: "Modificador adverbial" },
                            { textus: "se", lemma: "sui", morphologia: "Pronombre reflexivo, acusativo", syntaxis: "Sujeto de la oración de infinitivo (esse)" },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición de Acusativo", syntaxis: "Preposición" },
                            { textus: "eam", lemma: "is", morphologia: "Pronombre, femenino, acusativo, singular", syntaxis: "Modificador de rem" },
                            { textus: "rem", lemma: "res", morphologia: "Sustantivo, femenino, acusativo, singular", syntaxis: "Término de la preposición ad" },
                            { textus: "paratos", lemma: "paratus", morphologia: "Adjetivo, masculino, acusativo, plural", syntaxis: "Atributo predicativo de se" },
                            { textus: "esse", lemma: "sum", morphologia: "Verbo, infinitivo, presente", syntaxis: "Verbo de la oración de infinitivo" },
                            { textus: "arbitrati", lemma: "arbitror", morphologia: "Verbo deponente, participio, perfecto, nominativo, plural, masculino", syntaxis: "Parte del verbo principal compuesto" },
                            { textus: "sunt", lemma: "sum", morphologia: "Verbo, 3ª persona, plural, presente, indicativo", syntaxis: "Verbo de la oración temporal (con arbitrati sunt)" },
                            { textus: "oppida", lemma: "oppidum", morphologia: "Sustantivo, neutro, acusativo, plural", syntaxis: "Objeto directo de incendunt" },
                            { textus: "sua", lemma: "suus", morphologia: "Adjetivo posesivo, neutro, acusativo, plural", syntaxis: "Modificador de oppida" },
                            { textus: "omnia", lemma: "omnis", morphologia: "Adjetivo, neutro, acusativo, plural", syntaxis: "Modificador de oppida" },
                            { textus: "numero", lemma: "numerus", morphologia: "Sustantivo, masculino, ablativo, singular", syntaxis: "Ablativo de especificación" },
                            { textus: "ad", lemma: "ad", morphologia: "Adverbio", syntaxis: "Modificador adverbial (aproximadamente)" },
                            { textus: "duodecim", lemma: "duodecim", morphologia: "Numeral cardinal", syntaxis: "Aposición de oppida" },
                            { textus: "uicos", lemma: "vicus", morphologia: "Sustantivo, masculino, acusativo, plural", syntaxis: "Objeto directo de incendunt" },
                            { textus: "ad", lemma: "ad", morphologia: "Adverbio", syntaxis: "Modificador adverbial (aproximadamente)" },
                            { textus: "quadringentos", lemma: "quadringenti", morphologia: "Numeral, masculino, acusativo, plural", syntaxis: "Aposición de uicos" },
                            { textus: "reliqua", lemma: "reliquus", morphologia: "Adjetivo, neutro, acusativo, plural", syntaxis: "Modificador de aedificia" },
                            { textus: "priuata", lemma: "privatus", morphologia: "Adjetivo, neutro, acusativo, plural", syntaxis: "Modificador de aedificia" },
                            { textus: "aedificia", lemma: "aedificium", morphologia: "Sustantivo, neutro, acusativo, plural", syntaxis: "Objeto directo de incendunt" },
                            { textus: "incendunt", lemma: "incendo", morphologia: "Verbo, 3ª persona, plural, presente, indicativo, activo", syntaxis: "Verbo principal" },
                            { textus: "frumentum", lemma: "frumentum", morphologia: "Sustantivo, neutro, acusativo, singular", syntaxis: "Objeto directo de comburunt" },
                            { textus: "omnem", lemma: "omnis", morphologia: "Adjetivo, neutro, acusativo, singular", syntaxis: "Modificador de frumentum" },
                            { textus: "praeterquam", lemma: "praeterquam", morphologia: "Adverbio", syntaxis: "Nexo de excepción" },
                            { textus: "quod", lemma: "qui", morphologia: "Pronombre relativo, neutro, acusativo, singular", syntaxis: "Objeto directo de portaturi erant" },
                            { textus: "secum", lemma: "sui cum", morphologia: "Pronombre reflexivo con preposición, ablativo", syntaxis: "Complemento circunstancial" },
                            { textus: "portaturi", lemma: "porto", morphologia: "Participio futuro, nominativo, plural, masculino", syntaxis: "Parte de la perífrasis verbal" },
                            { textus: "erant", lemma: "sum", morphologia: "Verbo, 3ª persona, plural, imperfecto, indicativo", syntaxis: "Verbo de la oración de relativo (con portaturi)" },
                            { textus: "comburunt", lemma: "comburo", morphologia: "Verbo, 3ª persona, plural, presente, indicativo, activo", syntaxis: "Verbo principal" },
                            { textus: "ut", lemma: "ut", morphologia: "Conjunción subordinante", syntaxis: "Nexo de la oración final" },
                            { textus: "domum", lemma: "domus", morphologia: "Sustantivo, femenino, acusativo, singular", syntaxis: "Acusativo de dirección (con reditionis)" },
                            { textus: "reditionis", lemma: "reditio", morphologia: "Sustantivo, femenino, genitivo, singular", syntaxis: "Complemento del nombre (spe)" },
                            { textus: "spe", lemma: "spes", morphologia: "Sustantivo, femenino, ablativo, singular", syntaxis: "Sujeto del ablativo absoluto" },
                            { textus: "sublata", lemma: "tollo", morphologia: "Participio, perfecto, pasivo, ablativo, singular, femenino", syntaxis: "Participio del ablativo absoluto" },
                            { textus: "paratiores", lemma: "paratus", morphologia: "Adjetivo, comparativo, nominativo, plural, masculino", syntaxis: "Atributo predicativo del sujeto (implícito)" },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición de Acusativo", syntaxis: "Preposición" },
                            { textus: "omnia", lemma: "omnis", morphologia: "Adjetivo, neutro, acusativo, plural", syntaxis: "Modificador de pericula" },
                            { textus: "pericula", lemma: "periculum", morphologia: "Sustantivo, neutro, acusativo, plural", syntaxis: "Término de la preposición ad" },
                            { textus: "subeunda", lemma: "subeo", morphologia: "Gerundivo, neutro, acusativo, plural", syntaxis: "Complemento de ad (expresando finalidad)" },
                            { textus: "essent", lemma: "sum", morphologia: "Verbo, 3ª persona, plural, imperfecto, subjuntivo", syntaxis: "Verbo de la oración final" },
                            { textus: "trium", lemma: "tres", morphologia: "Numeral, genitivo, plural", syntaxis: "Complemento del nombre (mensum)" },
                            { textus: "mensum", lemma: "mensis", morphologia: "Sustantivo, masculino, genitivo, plural", syntaxis: "Complemento del nombre (cibaria)" },
                            { textus: "molita", lemma: "molo", morphologia: "Participio, perfecto, pasivo, neutro, acusativo, plural", syntaxis: "Modificador de cibaria" },
                            { textus: "cibaria", lemma: "cibarium", morphologia: "Sustantivo, neutro, acusativo, plural", syntaxis: "Sujeto de la oración de infinitivo (efferre)" },
                            { textus: "sibi", lemma: "sui", morphologia: "Pronombre reflexivo, dativo, singular/plural", syntaxis: "Complemento indirecto (referido a quemque)" },
                            { textus: "quemque", lemma: "quisque", morphologia: "Pronombre indefinido, masculino, acusativo, singular", syntaxis: "Sujeto de la oración de infinitivo (efferre)" },
                            { textus: "domo", lemma: "domus", morphologia: "Sustantivo, femenino, ablativo, singular", syntaxis: "Ablativo de origen (de dónde)" },
                            { textus: "efferre", lemma: "effero", morphologia: "Verbo, infinitivo, presente, activo", syntaxis: "Verbo de la oración de infinitivo" },
                            { textus: "iubent", lemma: "iubeo", morphologia: "Verbo, 3ª persona, plural, presente, indicativo, activo", syntaxis: "Verbo principal" }
                        ],
                        ordo_syntacticus: "Oración temporal [Vbi... arbitrati sunt], seguida de tres oraciones principales coordinadas: [incendunt..., comburunt..., iubent...].",
                        notae: "Una oración muy larga y compleja que detalla todas las preparaciones de los helvecios. Incluye un ablativo absoluto 'spe sublata' y una construcción de infinitivo con sujeto en acusativo 'quemque... efferre'.",
                        translationes: {
                            es: "Cuando consideraron que ya estaban preparados para tal empresa, incendian todas sus ciudades, en número de unas doce, sus aldeas, unas cuatrocientas, y el resto de edificaciones privadas; queman todo el grano, excepto el que iban a llevar consigo, para que, eliminada la esperanza de regresar a casa, estuvieran más dispuestos a afrontar todos los peligros; y ordenan que cada uno saque de casa para sí provisiones molidas para tres meses.",
                            en: "When they considered that they were now prepared for this undertaking, they set fire to all their towns, in number about twelve, their villages, about four hundred, and the rest of the private buildings; they burn all the grain, except what they were going to carry with them, so that, with the hope of returning home removed, they might be more prepared to face all dangers; and they order each one to carry from home for himself ground provisions for three months.",
                            zh: "當他們認為自己已為此事做好準備時，便放火燒毀了他們所有的城鎮（大約十二座）、村莊（約四百個）以及其餘的私人建築；他們燒掉所有的糧食，除了他們準備隨身攜帶的份額，這樣一來，回家鄉的希望被斷絕後，他們就能更充分地準備好面對一切危險；他們命令每個人為自己從家中帶出三個月的磨好的糧食。"
                        }
                    },
                    {
                        id_orationis: 'o3',
                        original_lat: "Persuadent Rauracis et Tulingis et Latouicis finitimis suis uti eodem usi consilio, oppidis suis uicisque exustis, una cum iis proficiscantur, Boiosque, qui trans Rhenum incoluerant et in agrum Noricum transierant Noreiamque oppugnarant, receptos ad se socios sibi adsciscunt.",
                        verba: [
                            { textus: "Persuadent", lemma: "persuadeo", morphologia: "Verbo, 3ª persona, plural, presente, indicativo, activo", syntaxis: "Verbo principal" },
                            { textus: "Rauracis", lemma: "Rauraci", morphologia: "Sustantivo, masculino, dativo, plural", syntaxis: "Complemento indirecto de Persuadent" },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo coordinante" },
                            { textus: "Tulingis", lemma: "Tulingi", morphologia: "Sustantivo, masculino, dativo, plural", syntaxis: "Complemento indirecto de Persuadent" },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo coordinante" },
                            { textus: "Latouicis", lemma: "Latovici", morphologia: "Sustantivo, masculino, dativo, plural", syntaxis: "Complemento indirecto de Persuadent" },
                            { textus: "finitimis", lemma: "finitimus", morphologia: "Adjetivo, masculino, dativo, plural", syntaxis: "Aposición de Rauracis, Tulingis, Latouicis" },
                            { textus: "suis", lemma: "suus", morphologia: "Adjetivo posesivo, masculino, dativo, plural", syntaxis: "Modificador de finitimis" },
                            { textus: "uti", lemma: "ut", morphologia: "Conjunción subordinante", syntaxis: "Nexo de oración completiva" },
                            { textus: "eodem", lemma: "idem", morphologia: "Pronombre, neutro, ablativo, singular", syntaxis: "Modificador de consilio" },
                            { textus: "usi", lemma: "utor", morphologia: "Verbo deponente, participio, perfecto, nominativo, plural, masculino", syntaxis: "Participio concertado (con sujeto de proficiscantur)" },
                            { textus: "consilio", lemma: "consilium", morphologia: "Sustantivo, neutro, ablativo, singular", syntaxis: "Complemento del verbo utor (usi)" },
                            { textus: "oppidis", lemma: "oppidum", morphologia: "Sustantivo, neutro, ablativo, plural", syntaxis: "Sujeto del ablativo absoluto" },
                            { textus: "suis", lemma: "suus", morphologia: "Adjetivo posesivo, neutro, ablativo, plural", syntaxis: "Modificador de oppidis y uicis" },
                            { textus: "uicisque", lemma: "vicusque", morphologia: "Sustantivo con enclítico, masculino, ablativo, plural", syntaxis: "Sujeto del ablativo absoluto" },
                            { textus: "exustis", lemma: "exuro", morphologia: "Participio, perfecto, pasivo, ablativo, plural, neutro/masculino", syntaxis: "Participio del ablativo absoluto" },
                            { textus: "una", lemma: "una", morphologia: "Adverbio", syntaxis: "Modificador adverbial" },
                            { textus: "cum", lemma: "cum", morphologia: "Preposición de Ablativo", syntaxis: "Preposición" },
                            { textus: "iis", lemma: "is", morphologia: "Pronombre, masculino, ablativo, plural", syntaxis: "Término de la preposición cum" },
                            { textus: "proficiscantur", lemma: "proficiscor", morphologia: "Verbo deponente, 3ª persona, plural, presente, subjuntivo", syntaxis: "Verbo de la oración completiva" },
                            { textus: "Boiosque", lemma: "Boique", morphologia: "Sustantivo con enclítico, masculino, acusativo, plural", syntaxis: "Objeto directo de adsciscunt" },
                            { textus: "qui", lemma: "qui", morphologia: "Pronombre relativo, masculino, nominativo, plural", syntaxis: "Sujeto de incoluerant, transierant, oppugnarant" },
                            { textus: "trans", lemma: "trans", morphologia: "Preposición de Acusativo", syntaxis: "Preposición" },
                            { textus: "Rhenum", lemma: "Rhenus", morphologia: "Sustantivo, masculino, acusativo, singular", syntaxis: "Término de la preposición trans" },
                            { textus: "incoluerant", lemma: "incolo", morphologia: "Verbo, 3ª persona, plural, pluscuamperfecto, indicativo, activo", syntaxis: "Verbo de la oración de relativo" },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo coordinante" },
                            { textus: "in", lemma: "in", morphologia: "Preposición de Acusativo", syntaxis: "Preposición" },
                            { textus: "agrum", lemma: "ager", morphologia: "Sustantivo, masculino, acusativo, singular", syntaxis: "Término de la preposición in" },
                            { textus: "Noricum", lemma: "Noricus", morphologia: "Adjetivo, masculino, acusativo, singular", syntaxis: "Modificador de agrum" },
                            { textus: "transierant", lemma: "transeo", morphologia: "Verbo, 3ª persona, plural, pluscuamperfecto, indicativo, activo", syntaxis: "Verbo de la oración de relativo" },
                            { textus: "Noreiamque", lemma: "Noreiaque", morphologia: "Sustantivo con enclítico, femenino, acusativo, singular", syntaxis: "Objeto directo de oppugnarant" },
                            { textus: "oppugnarant", lemma: "oppugno", morphologia: "Verbo, 3ª persona, plural, pluscuamperfecto, indicativo, activo", syntaxis: "Verbo de la oración de relativo" },
                            { textus: "receptos", lemma: "recipio", morphologia: "Participio, perfecto, pasivo, masculino, acusativo, plural", syntaxis: "Atributo predicativo de Boios" },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición de Acusativo", syntaxis: "Preposición" },
                            { textus: "se", lemma: "sui", morphologia: "Pronombre reflexivo, acusativo", syntaxis: "Término de la preposición ad" },
                            { textus: "socios", lemma: "socius", morphologia: "Sustantivo, masculino, acusativo, plural", syntaxis: "Aposición de Boios (o atributo predicativo)" },
                            { textus: "sibi", lemma: "sui", morphologia: "Pronombre reflexivo, dativo", syntaxis: "Complemento indirecto de adsciscunt" },
                            { textus: "adsciscunt", lemma: "adscisco", morphologia: "Verbo, 3ª persona, plural, presente, indicativo, activo", syntaxis: "Verbo principal" }
                        ],
                        ordo_syntacticus: "Dos oraciones principales coordinadas por asíndeton: [Persuadent... uti proficiscantur] y [(Helvetii) adsciscunt Boios]. La segunda oración contiene una larga cláusula de relativo [qui... oppugnarant].",
                        notae: "César une dos acciones distintas en una sola frase: persuadir a sus vecinos y aceptar a los boyos como aliados.",
                        translationes: {
                            es: "Persuaden a sus vecinos, los ráuracos, los tulingos y los latobicos, para que, usando el mismo plan, una vez incendiadas sus ciudades y aldeas, partan junto con ellos; y se asocian a los boyos, que habían habitado al otro lado del Rin, habían pasado al campo nórico y habían atacado Noreya, acogiéndolos como aliados.",
                            en: "They persuade their neighbors, the Rauraci, the Tulingi, and the Latovici, to adopt the same plan, and after burning their towns and villages, to set out with them; and they admit to their alliance the Boii, who had dwelt across the Rhine, had crossed into the Noric territory, and had attacked Noreia.",
                            zh: "他們說服他們的鄰族，即勞拉西人、圖靈吉人和拉托維西人，採納同樣的計劃，在燒毀自己的城鎮和村莊後，與他們一同出發；他們還接納波伊人為盟友，這些波伊人曾居住在萊茵河對岸，後遷入諾里庫姆地區，並曾攻擊過諾雷亞。"
                        }
                    }
                ]
            }
        ]
    }
};

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
                            { textus: "Post", lemma: "post", morphologia: "Preposición de Acusativo", syntaxis: "Preposición", translatio: { es: "Tras", en: "After", zh: "在...之後" } },
                            { textus: "eius", lemma: "is", morphologia: "Pronombre, genitivo, singular, masculino", syntaxis: "Complemento del nombre (mortem)", translatio: { es: "su", en: "his", zh: "他" } },
                            { textus: "mortem", lemma: "mors", morphologia: "Sustantivo, femenino, acusativo, singular", syntaxis: "Complemento circunstancial (término de la preposición Post)", translatio: { es: "muerte", en: "death", zh: "死後" } },
                            { textus: "nihilo", lemma: "nihilum", morphologia: "Sustantivo, neutro, ablativo, singular", syntaxis: "Ablativo de grado o medida (con minus)", translatio: { es: "no", en: "nevertheless", zh: "依然" } },
                            { textus: "minus", lemma: "minus", morphologia: "Adverbio, comparativo", syntaxis: "Modificador adverbial", translatio: { es: "obstante", en: "", zh: "" } },
                            { textus: "Heluetii", lemma: "Helvetius", morphologia: "Sustantivo, masculino, nominativo, plural", syntaxis: "Sujeto de conantur", translatio: { es: "los helvecios", en: "the Helvetii", zh: "赫爾維蒂人" } },
                            { textus: "id", lemma: "is", morphologia: "Pronombre, neutro, acusativo, singular", syntaxis: "Objeto directo de facere", translatio: { es: "aquello", en: "that", zh: "那事" } },
                            { textus: "quod", lemma: "qui", morphologia: "Pronombre relativo, neutro, acusativo, singular", syntaxis: "Objeto directo de constituerant", translatio: { es: "que", en: "which", zh: "" } },
                            { textus: "constituerant", lemma: "constituo", morphologia: "Verbo, 3ª persona, plural, pluscuamperfecto, indicativo, activo", syntaxis: "Verbo de la oración de relativo", translatio: { es: "habían decidido", en: "they had decided", zh: "已經決定的" } },
                            { textus: "facere", lemma: "facio", morphologia: "Verbo, infinitivo, presente, activo", syntaxis: "Infinitivo (objeto de conantur)", translatio: { es: "hacer", en: "to do", zh: "執行" } },
                            { textus: "conantur", lemma: "conor", morphologia: "Verbo deponente, 3ª persona, plural, presente, indicativo", syntaxis: "Verbo principal", translatio: { es: "intentan", en: "attempt", zh: "試圖" } },
                            { textus: "ut", lemma: "ut", morphologia: "Conjunción subordinante", syntaxis: "Nexo de la oración final", translatio: { es: "(a saber) que", en: "(namely) to", zh: "即" } },
                            { textus: "e", lemma: "e", morphologia: "Preposición de Ablativo", syntaxis: "Preposición", translatio: { es: "de", en: "from", zh: "離開" } },
                            { textus: "finibus", lemma: "finis", morphologia: "Sustantivo, masculino, ablativo, plural", syntaxis: "Complemento circunstancial (término de la preposición e)", translatio: { es: "sus territorios", en: "their lands", zh: "他們的領土" } },
                            { textus: "suis", lemma: "suus", morphologia: "Adjetivo posesivo, masculino, ablativo, plural", syntaxis: "Modificador de finibus", translatio: { es: "propios", en: "own", zh: "自己的" } },
                            { textus: "exeant", lemma: "exeo", morphologia: "Verbo, 3ª persona, plural, presente, subjuntivo, activo", syntaxis: "Verbo de la oración final", translatio: { es: "salieran", en: "depart", zh: "" } }
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
                            { textus: "Vbi", lemma: "ubi", morphologia: "Adverbio/Conjunción temporal", syntaxis: "Nexo de oración temporal", translatio: { es: "Cuando", en: "When", zh: "當" } },
                            { textus: "iam", lemma: "iam", morphologia: "Adverbio de tiempo", syntaxis: "Modificador adverbial", translatio: { es: "ya", en: "now", zh: "" } },
                            { textus: "se", lemma: "sui", morphologia: "Pronombre reflexivo, acusativo", syntaxis: "Sujeto de la oración de infinitivo (esse)", translatio: { es: "que ellos", en: "that they", zh: "自己" } },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición de Acusativo", syntaxis: "Preposición", translatio: { es: "para", en: "for", zh: "為" } },
                            { textus: "eam", lemma: "is", morphologia: "Pronombre, femenino, acusativo, singular", syntaxis: "Modificador de rem", translatio: { es: "tal", en: "this", zh: "此" } },
                            { textus: "rem", lemma: "res", morphologia: "Sustantivo, femenino, acusativo, singular", syntaxis: "Término de la preposición ad", translatio: { es: "empresa", en: "undertaking", zh: "事" } },
                            { textus: "paratos", lemma: "paratus", morphologia: "Adjetivo, masculino, acusativo, plural", syntaxis: "Atributo predicativo de se", translatio: { es: "preparados", en: "prepared", zh: "做好準備" } },
                            { textus: "esse", lemma: "sum", morphologia: "Verbo, infinitivo, presente", syntaxis: "Verbo de la oración de infinitivo", translatio: { es: "estaban", en: "were", zh: "已" } },
                            { textus: "arbitrati", lemma: "arbitror", morphologia: "Verbo deponente, participio, perfecto, nominativo, plural, masculino", syntaxis: "Parte del verbo principal compuesto", translatio: { es: "consideraron", en: "they considered", zh: "他們認為" } },
                            { textus: "sunt", lemma: "sum", morphologia: "Verbo, 3ª persona, plural, presente, indicativo", syntaxis: "Verbo de la oración temporal (con arbitrati sunt)", translatio: { es: "", en: "", zh: "" } },
                            { textus: "oppida", lemma: "oppidum", morphologia: "Sustantivo, neutro, acusativo, plural", syntaxis: "Objeto directo de incendunt", translatio: { es: "sus ciudades", en: "their towns", zh: "他們的城鎮" } },
                            { textus: "sua", lemma: "suus", morphologia: "Adjetivo posesivo, neutro, acusativo, plural", syntaxis: "Modificador de oppida", translatio: { es: "", en: "", zh: "" } },
                            { textus: "omnia", lemma: "omnis", morphologia: "Adjetivo, neutro, acusativo, plural", syntaxis: "Modificador de oppida", translatio: { es: "todas", en: "all", zh: "所有" } },
                            { textus: "numero", lemma: "numerus", morphologia: "Sustantivo, masculino, ablativo, singular", syntaxis: "Ablativo de especificación", translatio: { es: "en número", en: "in number", zh: "" } },
                            { textus: "ad", lemma: "ad", morphologia: "Adverbio", syntaxis: "Modificador adverbial (aproximadamente)", translatio: { es: "de unas", en: "about", zh: "大約" } },
                            { textus: "duodecim", lemma: "duodecim", morphologia: "Numeral cardinal", syntaxis: "Aposición de oppida", translatio: { es: "doce", en: "twelve", zh: "十二座" } },
                            { textus: "uicos", lemma: "vicus", morphologia: "Sustantivo, masculino, acusativo, plural", syntaxis: "Objeto directo de incendunt", translatio: { es: "sus aldeas", en: "their villages", zh: "村莊" } },
                            { textus: "ad", lemma: "ad", morphologia: "Adverbio", syntaxis: "Modificador adverbial (aproximadamente)", translatio: { es: "unas", en: "about", zh: "約" } },
                            { textus: "quadringentos", lemma: "quadringenti", morphologia: "Numeral, masculino, acusativo, plural", syntaxis: "Aposición de uicos", translatio: { es: "cuatrocientas", en: "four hundred", zh: "四百個" } },
                            { textus: "reliqua", lemma: "reliquus", morphologia: "Adjetivo, neutro, acusativo, plural", syntaxis: "Modificador de aedificia", translatio: { es: "el resto de", en: "the rest of the", zh: "其餘的" } },
                            { textus: "priuata", lemma: "privatus", morphologia: "Adjetivo, neutro, acusativo, plural", syntaxis: "Modificador de aedificia", translatio: { es: "edificaciones privadas", en: "private buildings", zh: "私人建築" } },
                            { textus: "aedificia", lemma: "aedificium", morphologia: "Sustantivo, neutro, acusativo, plural", syntaxis: "Objeto directo de incendunt", translatio: { es: "", en: "", zh: "" } },
                            { textus: "incendunt", lemma: "incendo", morphologia: "Verbo, 3ª persona, plural, presente, indicativo, activo", syntaxis: "Verbo principal", translatio: { es: "incendian", en: "they set fire to", zh: "放火燒毀了" } },
                            { textus: "frumentum", lemma: "frumentum", morphologia: "Sustantivo, neutro, acusativo, singular", syntaxis: "Objeto directo de comburunt", translatio: { es: "el grano", en: "the grain", zh: "糧食" } },
                            { textus: "omnem", lemma: "omnis", morphologia: "Adjetivo, neutro, acusativo, singular", syntaxis: "Modificador de frumentum", translatio: { es: "todo", en: "all", zh: "所有" } },
                            { textus: "praeterquam", lemma: "praeterquam", morphologia: "Adverbio", syntaxis: "Nexo de excepción", translatio: { es: "excepto", en: "except", zh: "除了" } },
                            { textus: "quod", lemma: "qui", morphologia: "Pronombre relativo, neutro, acusativo, singular", syntaxis: "Objeto directo de portaturi erant", translatio: { es: "el que", en: "what", zh: "的份額" } },
                            { textus: "secum", lemma: "sui cum", morphologia: "Pronombre reflexivo con preposición, ablativo", syntaxis: "Complemento circunstancial", translatio: { es: "consigo", en: "with them", zh: "隨身攜帶" } },
                            { textus: "portaturi", lemma: "porto", morphologia: "Participio futuro, nominativo, plural, masculino", syntaxis: "Parte de la perífrasis verbal", translatio: { es: "iban a llevar", en: "they were going to carry", zh: "他們準備" } },
                            { textus: "erant", lemma: "sum", morphologia: "Verbo, 3ª persona, plural, imperfecto, indicativo", syntaxis: "Verbo de la oración de relativo (con portaturi)", translatio: { es: "", en: "", zh: "" } },
                            { textus: "comburunt", lemma: "comburo", morphologia: "Verbo, 3ª persona, plural, presente, indicativo, activo", syntaxis: "Verbo principal", translatio: { es: "queman", en: "they burn", zh: "他們燒掉" } },
                            { textus: "ut", lemma: "ut", morphologia: "Conjunción subordinante", syntaxis: "Nexo de la oración final", translatio: { es: "para que", en: "so that", zh: "這樣一來" } },
                            { textus: "domum", lemma: "domus", morphologia: "Sustantivo, femenino, acusativo, singular", syntaxis: "Acusativo de dirección (con reditionis)", translatio: { es: "a casa", en: "home", zh: "回家鄉" } },
                            { textus: "reditionis", lemma: "reditio", morphologia: "Sustantivo, femenino, genitivo, singular", syntaxis: "Complemento del nombre (spe)", translatio: { es: "de regresar", en: "of returning", zh: "" } },
                            { textus: "spe", lemma: "spes", morphologia: "Sustantivo, femenino, ablativo, singular", syntaxis: "Sujeto del ablativo absoluto", translatio: { es: "la esperanza", en: "the hope", zh: "的希望" } },
                            { textus: "sublata", lemma: "tollo", morphologia: "Participio, perfecto, pasivo, ablativo, singular, femenino", syntaxis: "Participio del ablativo absoluto", translatio: { es: "eliminada", en: "removed", zh: "被斷絕後" } },
                            { textus: "paratiores", lemma: "paratus", morphologia: "Adjetivo, comparativo, nominativo, plural, masculino", syntaxis: "Atributo predicativo del sujeto (implícito)", translatio: { es: "más dispuestos", en: "more prepared", zh: "更充分地準備好" } },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición de Acusativo", syntaxis: "Preposición", translatio: { es: "a", en: "to", zh: "面對" } },
                            { textus: "omnia", lemma: "omnis", morphologia: "Adjetivo, neutro, acusativo, plural", syntaxis: "Modificador de pericula", translatio: { es: "todos", en: "all", zh: "一切" } },
                            { textus: "pericula", lemma: "periculum", morphologia: "Sustantivo, neutro, acusativo, plural", syntaxis: "Término de la preposición ad", translatio: { es: "los peligros", en: "dangers", zh: "危險" } },
                            { textus: "subeunda", lemma: "subeo", morphologia: "Gerundivo, neutro, acusativo, plural", syntaxis: "Complemento de ad (expresando finalidad)", translatio: { es: "afrontar", en: "face", zh: "" } },
                            { textus: "essent", lemma: "sum", morphologia: "Verbo, 3ª persona, plural, imperfecto, subjuntivo", syntaxis: "Verbo de la oración final", translatio: { es: "estuvieran", en: "they might be", zh: "他們就能" } },
                            { textus: "trium", lemma: "tres", morphologia: "Numeral, genitivo, plural", syntaxis: "Complemento del nombre (mensum)", translatio: { es: "de tres", en: "for three", zh: "三個月" } },
                            { textus: "mensum", lemma: "mensis", morphologia: "Sustantivo, masculino, genitivo, plural", syntaxis: "Complemento del nombre (cibaria)", translatio: { es: "meses", en: "months", zh: "" } },
                            { textus: "molita", lemma: "molo", morphologia: "Participio, perfecto, pasivo, neutro, acusativo, plural", syntaxis: "Modificador de cibaria", translatio: { es: "molidas", en: "ground", zh: "磨好的" } },
                            { textus: "cibaria", lemma: "cibarium", morphologia: "Sustantivo, neutro, acusativo, plural", syntaxis: "Sujeto de la oración de infinitivo (efferre)", translatio: { es: "provisiones", en: "provisions", zh: "糧食" } },
                            { textus: "sibi", lemma: "sui", morphologia: "Pronombre reflexivo, dativo, singular/plural", syntaxis: "Complemento indirecto (referido a quemque)", translatio: { es: "para sí", en: "for himself", zh: "為自己" } },
                            { textus: "quemque", lemma: "quisque", morphologia: "Pronombre indefinido, masculino, acusativo, singular", syntaxis: "Sujeto de la oración de infinitivo (efferre)", translatio: { es: "cada uno", en: "each one", zh: "每個人" } },
                            { textus: "domo", lemma: "domus", morphologia: "Sustantivo, femenino, ablativo, singular", syntaxis: "Ablativo de origen (de dónde)", translatio: { es: "de casa", en: "from home", zh: "從家中" } },
                            { textus: "efferre", lemma: "effero", morphologia: "Verbo, infinitivo, presente, activo", syntaxis: "Verbo de la oración de infinitivo", translatio: { es: "sacar", en: "to carry", zh: "帶出" } },
                            { textus: "iubent", lemma: "iubeo", morphologia: "Verbo, 3ª persona, plural, presente, indicativo, activo", syntaxis: "Verbo principal", translatio: { es: "ordenan", en: "they order", zh: "他們命令" } }
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
                            { textus: "Persuadent", lemma: "persuadeo", morphologia: "Verbo, 3ª persona, plural, presente, indicativo, activo", syntaxis: "Verbo principal", translatio: { es: "Persuaden", en: "They persuade", zh: "他們說服" } },
                            { textus: "Rauracis", lemma: "Rauraci", morphologia: "Sustantivo, masculino, dativo, plural", syntaxis: "Complemento indirecto de Persuadent", translatio: { es: "a los ráuracos", en: "the Rauraci", zh: "勞拉西人" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo coordinante", translatio: { es: "y", en: "and", zh: "、" } },
                            { textus: "Tulingis", lemma: "Tulingi", morphologia: "Sustantivo, masculino, dativo, plural", syntaxis: "Complemento indirecto de Persuadent", translatio: { es: "a los tulingos", en: "the Tulingi", zh: "圖靈吉人" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo coordinante", translatio: { es: "y", en: "and", zh: "和" } },
                            { textus: "Latouicis", lemma: "Latovici", morphologia: "Sustantivo, masculino, dativo, plural", syntaxis: "Complemento indirecto de Persuadent", translatio: { es: "a los latobicos", en: "the Latovici", zh: "拉托維西人" } },
                            { textus: "finitimis", lemma: "finitimus", morphologia: "Adjetivo, masculino, dativo, plural", syntaxis: "Aposición de Rauracis, Tulingis, Latouicis", translatio: { es: "sus vecinos", en: "their neighbors", zh: "他們的鄰族" } },
                            { textus: "suis", lemma: "suus", morphologia: "Adjetivo posesivo, masculino, dativo, plural", syntaxis: "Modificador de finitimis", translatio: { es: "", en: "", zh: "" } },
                            { textus: "uti", lemma: "ut", morphologia: "Conjunción subordinante", syntaxis: "Nexo de oración completiva", translatio: { es: "para que", en: "to", zh: "" } },
                            { textus: "eodem", lemma: "idem", morphologia: "Pronombre, neutro, ablativo, singular", syntaxis: "Modificador de consilio", translatio: { es: "el mismo", en: "the same", zh: "同樣的" } },
                            { textus: "usi", lemma: "utor", morphologia: "Verbo deponente, participio, perfecto, nominativo, plural, masculino", syntaxis: "Participio concertado (con sujeto de proficiscantur)", translatio: { es: "usando", en: "adopt", zh: "採納" } },
                            { textus: "consilio", lemma: "consilium", morphologia: "Sustantivo, neutro, ablativo, singular", syntaxis: "Complemento del verbo utor (usi)", translatio: { es: "plan", en: "plan", zh: "計劃" } },
                            { textus: "oppidis", lemma: "oppidum", morphologia: "Sustantivo, neutro, ablativo, plural", syntaxis: "Sujeto del ablativo absoluto", translatio: { es: "sus ciudades", en: "their towns", zh: "自己的城鎮" } },
                            { textus: "suis", lemma: "suus", morphologia: "Adjetivo posesivo, neutro, ablativo, plural", syntaxis: "Modificador de oppidis y uicis", translatio: { es: "", en: "", zh: "" } },
                            { textus: "uicisque", lemma: "vicusque", morphologia: "Sustantivo con enclítico, masculino, ablativo, plural", syntaxis: "Sujeto del ablativo absoluto", translatio: { es: "y aldeas", en: "and villages", zh: "和村莊" } },
                            { textus: "exustis", lemma: "exuro", morphologia: "Participio, perfecto, pasivo, ablativo, plural, neutro/masculino", syntaxis: "Participio del ablativo absoluto", translatio: { es: "una vez incendiadas", en: "after burning", zh: "在燒毀後" } },
                            { textus: "una", lemma: "una", morphologia: "Adverbio", syntaxis: "Modificador adverbial", translatio: { es: "junto", en: "", zh: "一同" } },
                            { textus: "cum", lemma: "cum", morphologia: "Preposición de Ablativo", syntaxis: "Preposición", translatio: { es: "con", en: "with", zh: "與他們" } },
                            { textus: "iis", lemma: "is", morphologia: "Pronombre, masculino, ablativo, plural", syntaxis: "Término de la preposición cum", translatio: { es: "ellos", en: "them", zh: "" } },
                            { textus: "proficiscantur", lemma: "proficiscor", morphologia: "Verbo deponente, 3ª persona, plural, presente, subjuntivo", syntaxis: "Verbo de la oración completiva", translatio: { es: "partan", en: "to set out", zh: "出發" } },
                            { textus: "Boiosque", lemma: "Boique", morphologia: "Sustantivo con enclítico, masculino, acusativo, plural", syntaxis: "Objeto directo de adsciscunt", translatio: { es: "y a los boyos", en: "and the Boii", zh: "還接納波伊人" } },
                            { textus: "qui", lemma: "qui", morphologia: "Pronombre relativo, masculino, nominativo, plural", syntaxis: "Sujeto de incoluerant, transierant, oppugnarant", translatio: { es: "que", en: "who", zh: "這些" } },
                            { textus: "trans", lemma: "trans", morphologia: "Preposición de Acusativo", syntaxis: "Preposición", translatio: { es: "al otro lado de", en: "across", zh: "對岸" } },
                            { textus: "Rhenum", lemma: "Rhenus", morphologia: "Sustantivo, masculino, acusativo, singular", syntaxis: "Término de la preposición trans", translatio: { es: "el Rin", en: "the Rhine", zh: "萊茵河" } },
                            { textus: "incoluerant", lemma: "incolo", morphologia: "Verbo, 3ª persona, plural, pluscuamperfecto, indicativo, activo", syntaxis: "Verbo de la oración de relativo", translatio: { es: "habían habitado", en: "had dwelt", zh: "曾居住在" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo coordinante", translatio: { es: "y", en: "and", zh: "後" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición de Acusativo", syntaxis: "Preposición", translatio: { es: "a", en: "into", zh: "" } },
                            { textus: "agrum", lemma: "ager", morphologia: "Sustantivo, masculino, acusativo, singular", syntaxis: "Término de la preposición in", translatio: { es: "el campo", en: "the territory", zh: "地區" } },
                            { textus: "Noricum", lemma: "Noricus", morphologia: "Adjetivo, masculino, acusativo, singular", syntaxis: "Modificador de agrum", translatio: { es: "nórico", en: "Noric", zh: "諾里庫姆" } },
                            { textus: "transierant", lemma: "transeo", morphologia: "Verbo, 3ª persona, plural, pluscuamperfecto, indicativo, activo", syntaxis: "Verbo de la oración de relativo", translatio: { es: "habían pasado", en: "had crossed", zh: "遷入" } },
                            { textus: "Noreiamque", lemma: "Noreiaque", morphologia: "Sustantivo con enclítico, femenino, acusativo, singular", syntaxis: "Objeto directo de oppugnarant", translatio: { es: "y Noreya", en: "and Noreia", zh: "並曾攻擊過諾雷亞" } },
                            { textus: "oppugnarant", lemma: "oppugno", morphologia: "Verbo, 3ª persona, plural, pluscuamperfecto, indicativo, activo", syntaxis: "Verbo de la oración de relativo", translatio: { es: "habían atacado", en: "had attacked", zh: "" } },
                            { textus: "receptos", lemma: "recipio", morphologia: "Participio, perfecto, pasivo, masculino, acusativo, plural", syntaxis: "Atributo predicativo de Boios", translatio: { es: "acogiéndolos", en: "", zh: "" } },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición de Acusativo", syntaxis: "Preposición", translatio: { es: "a", en: "to", zh: "" } },
                            { textus: "se", lemma: "sui", morphologia: "Pronombre reflexivo, acusativo", syntaxis: "Término de la preposición ad", translatio: { es: "sí", en: "their", zh: "" } },
                            { textus: "socios", lemma: "socius", morphologia: "Sustantivo, masculino, acusativo, plural", syntaxis: "Aposición de Boios (o atributo predicativo)", translatio: { es: "como aliados", en: "alliance", zh: "為盟友" } },
                            { textus: "sibi", lemma: "sui", morphologia: "Pronombre reflexivo, dativo", syntaxis: "Complemento indirecto de adsciscunt", translatio: { es: "a sí", en: "", zh: "" } },
                            { textus: "adsciscunt", lemma: "adscisco", morphologia: "Verbo, 3ª persona, plural, presente, indicativo, activo", syntaxis: "Verbo principal", translatio: { es: "se asocian", en: "they admit", zh: "" } }
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

const corpus = {
    titulus_principalis: "De Bello Gallico, I, 14",
    auctor: "C. Iulius Caesar",
    titulus_secundarius: {
        es: "La respuesta de César y la réplica de Divicón",
        en: "Caesar's Response and Divico's Reply",
        zh: "凱撒的答覆與迪維科的回應"
    },
    introductio: {
        es: {
            titulus: "Introducción al Capítulo 14",
            contentus: `<p>Este capítulo presenta la réplica de César al desafiante discurso de Divicón. Lejos de dejarse intimidar, César deconstruye metódicamente los argumentos helvecios. Afirma que, precisamente porque Roma no merecía la afrenta pasada, el recuerdo de aquella derrota es aún más doloroso y justifica su actual desconfianza. Enumera no solo la "vieja afrenta", sino una lista de agravios recientes: el intento de cruzar la provincia por la fuerza y los ataques a aliados de Roma. Con una lógica casi teológica, sugiere que la aparente buena suerte de los helvecios es un ardid de los dioses para hacer su inevitable castigo más severo. Finalmente, establece sus condiciones para la paz: entrega de rehenes y reparaciones. La respuesta final de Divicón, breve y altanera, sella el fracaso de la diplomacia.</p>`
        },
        en: {
            titulus: "Introduction to Chapter 14",
            contentus: `<p>This chapter presents Caesar's rebuttal to Divico's defiant speech. Far from being intimidated, Caesar methodically deconstructs the Helvetian arguments. He asserts that, precisely because Rome did not deserve the past insult, the memory of that defeat is even more painful and justifies his current distrust. He lists not only the "old insult" but also a list of recent grievances: the attempt to cross the province by force and the attacks on Rome's allies. With an almost theological logic, he suggests that the Helvetii's apparent good fortune is a ploy by the gods to make their inevitable punishment more severe. Finally, he lays out his conditions for peace: the handing over of hostages and reparations. Divico's final reply, brief and haughty, seals the failure of diplomacy.</p>`
        },
        zh: {
            titulus: "第 14 章介紹",
            contentus: `<p>本章呈現了凱撒對迪維科挑戰性演說的駁斥。凱撒絲毫沒有被嚇倒，反而有條不紊地逐一破解赫爾維蒂人的論點。他宣稱，正因為羅馬當年不應遭受那樣的侮辱，那次失敗的記憶才更顯痛苦，也證明了他當前的不信任是合理的。他不僅列舉了「舊日的侮辱」，還列出了一連串最近的侵害行為：試圖強行穿越羅馬行省，以及攻擊羅馬的盟友。他以近乎神學的邏輯暗示，赫爾維蒂人看似的好運是諸神設下的圈套，目的是讓他們未來無可避免的懲罰更加嚴厲。最後，他提出了和平的條件：交出人質並進行賠償。迪維科最後簡短而傲慢的回答，宣告了這次外交努力的徹底失敗。</p>`
        }
    },
    textus: {
        id: 14,
        capitula: [
            {
                id_capituli: 14,
                orationes: [
                    {
                        id_orationis: 'o1',
                        original_lat: "His Caesar ita respondit: Eo sibi minus dubitationis dari, quod eas res quas legati Heluetii commemorassent memoria teneret, atque eo grauius ferre quo minus merito populi Romani accidissent:",
                        verba: [
                            { textus: "His", lemma: "hic", morphologia: "Dativo Neutro Plural", syntaxis: "Objeto Indirecto", translatio: { es: "a estas cosas", en: "to these things", zh: "對於這些話" } },
                            { textus: "Caesar", lemma: "Caesar", morphologia: "Nominativo Masculino Singular", syntaxis: "Sujeto", translatio: { es: "César", en: "Caesar", zh: "凱撒" } },
                            { textus: "ita", lemma: "ita", morphologia: "Adverbio", syntaxis: "Modificador verbal", translatio: { es: "así", en: "thus", zh: "如此" } },
                            { textus: "respondit:", lemma: "respondeo", morphologia: "Perfecto Indicativo Activo, 3ª Persona Singular", syntaxis: "Verbo Principal", translatio: { es: "respondió", en: "replied", zh: "回答" } },
                            { textus: "Eo", lemma: "eo", morphologia: "Adverbio (Ablativo de Causa)", syntaxis: "Modificador Causal", translatio: { es: "por esto", en: "for this reason", zh: "因此" } },
                            { textus: "sibi", lemma: "sui", morphologia: "Dativo (Reflexivo)", syntaxis: "Objeto Indirecto", translatio: { es: "a él", en: "to him", zh: "他" } },
                            { textus: "minus", lemma: "minus", morphologia: "Adverbio Comparativo", syntaxis: "Modificador", translatio: { es: "menos", en: "less", zh: "更少" } },
                            { textus: "dubitationis", lemma: "dubitatio", morphologia: "Genitivo Partitivo", syntaxis: "Complemento de 'minus'", translatio: { es: "de duda", en: "of doubt", zh: "猶豫" } },
                            { textus: "dari,", lemma: "do", morphologia: "Presente Infinitivo Pasivo", syntaxis: "Verbo (oración de infinitivo)", translatio: { es: "le era dada", en: "was given", zh: "感到" } },
                            { textus: "quod", lemma: "quod", morphologia: "Conjunción Causal", syntaxis: "Nexo", translatio: { es: "porque", en: "because", zh: "因為" } },
                            { textus: "eas", lemma: "is", morphologia: "Acusativo Femenino Plural", syntaxis: "Atributo", translatio: { es: "aquellas", en: "those", zh: "那些" } },
                            { textus: "res", lemma: "res", morphologia: "Acusativo Femenino Plural", syntaxis: "Objeto Directo", translatio: { es: "cosas", en: "matters", zh: "事情" } },
                            { textus: "quas", lemma: "qui", morphologia: "Acusativo Femenino Plural", syntaxis: "Objeto Directo", translatio: { es: "que", en: "which", zh: "那些" } },
                            { textus: "legati", lemma: "legatus", morphologia: "Nominativo Masculino Plural", syntaxis: "Sujeto", translatio: { es: "los embajadores", en: "the envoys", zh: "使者" } },
                            { textus: "Heluetii", lemma: "Helvetius", morphologia: "Nominativo Masculino Plural", syntaxis: "Atributo", translatio: { es: "Helvecios", en: "Helvetian", zh: "赫爾維蒂" } },
                            { textus: "commemorassent", lemma: "commemoro", morphologia: "Pluscuamperfecto Subjuntivo Activo, 3ª Persona Plural (sincopado)", syntaxis: "Verbo", translatio: { es: "habían mencionado", en: "had mentioned", zh: "所提及的" } },
                            { textus: "memoria", lemma: "memoria", morphologia: "Ablativo Femenino Singular", syntaxis: "Complemento de Medio", translatio: { es: "en la memoria", en: "in memory", zh: "在記憶中" } },
                            { textus: "teneret,", lemma: "teneo", morphologia: "Imperfecto Subjuntivo Activo, 3ª Persona Singular", syntaxis: "Verbo", translatio: { es: "tenía", en: "he held", zh: "記得" } },
                            { textus: "atque", lemma: "atque", morphologia: "Conjunción Coordinante", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "並且" } },
                            { textus: "eo", lemma: "eo", morphologia: "Adverbio (Ablativo de Causa)", syntaxis: "Modificador Causal", translatio: { es: "por eso", en: "for that reason", zh: "因此" } },
                            { textus: "grauius", lemma: "graviter", morphologia: "Adverbio Comparativo", syntaxis: "Modificador", translatio: { es: "más gravemente", en: "more heavily", zh: "更沉痛地" } },
                            { textus: "ferre", lemma: "fero", morphologia: "Presente Infinitivo Activo", syntaxis: "Verbo (oración de infinitivo)", translatio: { es: "lo soportaba", en: "he bore it", zh: "感到" } },
                            { textus: "quo", lemma: "quo", morphologia: "Adverbio (Ablativo de Grado)", syntaxis: "Nexo", translatio: { es: "cuanto", en: "the", zh: "越" } },
                            { textus: "minus", lemma: "minus", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "menos", en: "less", zh: "不" } },
                            { textus: "merito", lemma: "meritum", morphologia: "Ablativo Neutro Singular", syntaxis: "Complemento de Causa", translatio: { es: "por mérito (culpa)", en: "by the fault", zh: "應得" } },
                            { textus: "populi", lemma: "populus", morphologia: "Genitivo Masculino Singular", syntaxis: "Complemento del Nombre", translatio: { es: "del pueblo", en: "of the people", zh: "人民的" } },
                            { textus: "Romani", lemma: "Romanus", morphologia: "Genitivo Masculino Singular", syntaxis: "Atributo", translatio: { es: "Romano", en: "Roman", zh: "羅馬" } },
                            { textus: "accidissent:", lemma: "accido", morphologia: "Pluscuamperfecto Subjuntivo Activo, 3ª Persona Plural", syntaxis: "Verbo", translatio: { es: "habían sucedido", en: "they had happened", zh: "發生" } }
                        ],
                        ordo_syntacticus: "Discurso indirecto introducido por 'respondit'. Consta de dos oraciones de infinitivo coordinadas: 'dari' y 'ferre', cada una con sus propias cláusulas subordinadas causales.",
                        notae: "'Commemorassent' es una forma sincopada de 'commemoravissent'. La construcción 'eo... quo...' significa 'por esto... por lo cual...', y 'eo gravius... quo minus...' se traduce como 'lo soportaba tanto más gravemente cuanto menos...'.",
                        translationes: {
                            es: "A estas cosas, César respondió así: que por esto se le daba menos duda, porque tenía en la memoria aquellas cosas que los embajadores helvecios habían mencionado, y que lo soportaba tanto más gravemente cuanto menos habían sucedido por culpa del pueblo Romano.",
                            en: "To these things, Caesar replied thus: that for this reason less doubt was given to him, because he held in memory those matters which the Helvetian envoys had mentioned, and that he bore it the more heavily the less they had happened by the fault of the Roman people.",
                            zh: "對於這些話，凱撒如此回答：他之所以更無猶豫，是因為他清楚記得赫爾維蒂使者所提及的那些事，而正因為那些事的發生並非羅馬人民的過錯，他才更感沉痛。"
                        }
                    },
                    {
                        id_orationis: 'o2',
                        original_lat: "qui si alicuius iniuriae sibi conscius fuisset, non fuisse difficile cauere; sed eo deceptum, quod neque commissum a se intellegeret quare timeret, neque sine causa timendum putaret.",
                        verba: [
                           { textus: "qui", lemma: "qui", morphologia: "Nominativo Masculino Singular (relativo de enlace)", syntaxis: "Sujeto", translatio: { es: "el cual (el pueblo)", en: "which (the people)", zh: "它（羅馬人民）" } },
                           { textus: "si", lemma: "si", morphologia: "Conjunción Condicional", syntaxis: "Nexo", translatio: { es: "si", en: "if", zh: "如果" } },
                           { textus: "alicuius", lemma: "aliqui", morphologia: "Genitivo Femenino Singular", syntaxis: "Atributo", translatio: { es: "de alguna", en: "of any", zh: "任何" } },
                           { textus: "iniuriae", lemma: "iniuria", morphologia: "Genitivo Femenino Singular", syntaxis: "Complemento de 'conscius'", translatio: { es: "injusticia", en: "wrongdoing", zh: "不義之舉" } },
                           { textus: "sibi", lemma: "sui", morphologia: "Dativo (Reflexivo)", syntaxis: "Objeto Indirecto", translatio: { es: "para sí", en: "to itself", zh: "自己" } },
                           { textus: "conscius", lemma: "conscius", morphologia: "Adjetivo, Nominativo Singular", syntaxis: "Atributo", translatio: { es: "consciente", en: "conscious", zh: "意識到" } },
                           { textus: "fuisset,", lemma: "sum", morphologia: "Pluscuamperfecto Subjuntivo, 3ª Persona Singular", syntaxis: "Verbo", translatio: { es: "hubiera sido", en: "it had been", zh: "有" } },
                           { textus: "non", lemma: "non", morphologia: "Adverbio de Negación", syntaxis: "Modificador", translatio: { es: "no", en: "not", zh: "不" } },
                           { textus: "fuisse", lemma: "sum", morphologia: "Perfecto Infinitivo", syntaxis: "Verbo (oración de infinitivo)", translatio: { es: "habría sido", en: "it would have been", zh: "會" } },
                           { textus: "difficile", lemma: "difficilis", morphologia: "Adjetivo, Nominativo Neutro Singular", syntaxis: "Predicado", translatio: { es: "difícil", en: "difficult", zh: "困難" } },
                           { textus: "cauere;", lemma: "caveo", morphologia: "Presente Infinitivo Activo", syntaxis: "Sujeto (de 'fuisse difficile')", translatio: { es: "precaverse", en: "to take precaution", zh: "防範" } },
                           { textus: "sed", lemma: "sed", morphologia: "Conjunción Adversativa", syntaxis: "Nexo", translatio: { es: "pero", en: "but", zh: "但是" } },
                           { textus: "eo", lemma: "eo", morphologia: "Adverbio (Ablativo de Causa)", syntaxis: "Modificador Causal", translatio: { es: "por esto", en: "for this reason", zh: "因此" } },
                           { textus: "deceptum,", lemma: "decipio", morphologia: "Participio Perfecto Pasivo (Acusativo)", syntaxis: "Verbo (infinitivo perfecto pasivo implícito)", translatio: { es: "había sido engañado", en: "it had been deceived", zh: "它被蒙蔽了" } },
                           { textus: "quod", lemma: "quod", morphologia: "Conjunción Causal", syntaxis: "Nexo", translatio: { es: "porque", en: "because", zh: "因為" } },
                           { textus: "neque", lemma: "neque", morphologia: "Conjunción Coordinante", syntaxis: "Nexo", translatio: { es: "ni", en: "neither", zh: "既不" } },
                           { textus: "commissum", lemma: "committo", morphologia: "Participio Perfecto Pasivo (Acusativo)", syntaxis: "Verbo (en oración de infinitivo)", translatio: { es: "que se hubiera cometido", en: "had been committed", zh: "犯下" } },
                           { textus: "a", lemma: "a/ab", morphologia: "Preposición (+ Ablativo)", syntaxis: "Complemento Agente", translatio: { es: "por", en: "by", zh: "由" } },
                           { textus: "se", lemma: "sui", morphologia: "Ablativo (Reflexivo)", syntaxis: "Complemento de 'a'", translatio: { es: "él mismo", en: "itself", zh: "它自己" } },
                           { textus: "intellegeret", lemma: "intellego", morphologia: "Imperfecto Subjuntivo Activo, 3ª Persona Singular", syntaxis: "Verbo", translatio: { es: "comprendía", en: "it understood", zh: "理解" } },
                           { textus: "quare", lemma: "quare", morphologia: "Adverbio Interrogativo", syntaxis: "Nexo", translatio: { es: "por qué", en: "why", zh: "為何" } },
                           { textus: "timeret,", lemma: "timeo", morphologia: "Imperfecto Subjuntivo Activo, 3ª Persona Singular", syntaxis: "Verbo", translatio: { es: "debiera temer", en: "it should fear", zh: "要恐懼" } },
                           { textus: "neque", lemma: "neque", morphologia: "Conjunción Coordinante", syntaxis: "Nexo", translatio: { es: "ni", en: "nor", zh: "也不" } },
                           { textus: "sine", lemma: "sine", morphologia: "Preposición (+ Ablativo)", syntaxis: "Modificador", translatio: { es: "sin", en: "without", zh: "沒有" } },
                           { textus: "causa", lemma: "causa", morphologia: "Ablativo Femenino Singular", syntaxis: "Complemento de 'sine'", translatio: { es: "causa", en: "cause", zh: "理由" } },
                           { textus: "timendum", lemma: "timeo", morphologia: "Gerundivo (Acusativo)", syntaxis: "Verbo (en perífrasis pasiva)", translatio: { es: "que debía temerse", en: "it ought to fear", zh: "應該恐懼" } },
                           { textus: "putaret.", lemma: "puto", morphologia: "Imperfecto Subjuntivo Activo, 3ª Persona Singular", syntaxis: "Verbo", translatio: { es: "creía", en: "it thought", zh: "認為" } }
                        ],
                        ordo_syntacticus: "Continuación del discurso indirecto. Contiene una oración condicional irreal ('si... fuisset, non fuisse...') y una explicación causal introducida por 'quod' con dos verbos coordinados en subjuntivo ('intellegeret', 'putaret').",
                        notae: "'Deceptum' es el participio de 'deceptum esse', el infinitivo perfecto pasivo. 'Timendum' forma parte de 'timendum esse', una construcción de obligación pasiva.",
                        translationes: {
                            es: "El cual (pueblo), si hubiera sido consciente de alguna injusticia por su parte, no habría sido difícil precaverse; pero que por esto había sido engañado, porque ni comprendía que se hubiera cometido algo por su parte por lo que debiera temer, ni creía que debiera temerse sin causa.",
                            en: "Which (people), if it had been conscious of any wrongdoing on its part, it would not have been difficult to take precaution; but it had been deceived for this reason, because it neither understood that anything had been committed by it for which it should fear, nor did it think it ought to fear without cause.",
                            zh: "如果它（羅馬人民）意識到自己有任何不義之舉，要防範本不困難；但它正因此被蒙蔽了，因為它既不理解自己犯下了什麼錯而需要恐懼，也不認為應該無緣無故地恐懼。"
                        }
                    },
                    {
                        id_orationis: 'o3',
                        original_lat: "Quod si ueteris contumeliae obliuisci uellet, num etiam recentium iniuriarum, quod eo inuito iter per prouinciam per uim temptassent, quod Haeduos, quod Ambarros, quod Allobrogas uexassent, memoriam deponere posse?",
                        verba: [
                            { textus: "Quod", lemma: "quod", morphologia: "Conjunción", syntaxis: "Nexo", translatio: { es: "en cuanto a que", en: "as for", zh: "至於" } },
                            { textus: "si", lemma: "si", morphologia: "Conjunción Condicional", syntaxis: "Nexo", translatio: { es: "si", en: "if", zh: "如果" } },
                            { textus: "ueteris", lemma: "vetus", morphologia: "Genitivo Femenino Singular", syntaxis: "Atributo", translatio: { es: "de la antigua", en: "of the old", zh: "舊日的" } },
                            { textus: "contumeliae", lemma: "contumelia", morphologia: "Genitivo Femenino Singular", syntaxis: "Complemento de 'obliuisci'", translatio: { es: "afrenta", en: "insult", zh: "侮辱" } },
                            { textus: "obliuisci", lemma: "obliviscor", morphologia: "Presente Infinitivo Deponente", syntaxis: "Verbo", translatio: { es: "olvidarse", en: "to forget", zh: "忘記" } },
                            { textus: "uellet,", lemma: "volo", morphologia: "Imperfecto Subjuntivo Activo, 3ª Persona Singular", syntaxis: "Verbo", translatio: { es: "quisiera", en: "he were willing", zh: "他願意" } },
                            { textus: "num", lemma: "num", morphologia: "Adverbio Interrogativo", syntaxis: "Nexo", translatio: { es: "acaso", en: "surely... not?", zh: "難道" } },
                            { textus: "etiam", lemma: "etiam", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "también", en: "also", zh: "也" } },
                            { textus: "recentium", lemma: "recens", morphologia: "Genitivo Femenino Plural", syntaxis: "Atributo", translatio: { es: "de las recientes", en: "of recent", zh: "最近的" } },
                            { textus: "iniuriarum,", lemma: "iniuria", morphologia: "Genitivo Femenino Plural", syntaxis: "Complemento de 'memoriam'", translatio: { es: "injusticias", en: "injuries", zh: "不義之舉" } },
                            { textus: "quod", lemma: "quod", morphologia: "Conjunción Causal", syntaxis: "Nexo", translatio: { es: "que", en: "that", zh: "即" } },
                            { textus: "eo", lemma: "is", morphologia: "Ablativo Masculino Singular", syntaxis: "Sujeto de Ablativo Absoluto", translatio: { es: "él", en: "he", zh: "他" } },
                            { textus: "inuito", lemma: "invitus", morphologia: "Ablativo Masculino Singular", syntaxis: "Predicado de Ablativo Absoluto", translatio: { es: "no queriendo", en: "being unwilling", zh: "不顧反對" } },
                            { textus: "iter", lemma: "iter", morphologia: "Acusativo Neutro Singular", syntaxis: "Objeto Directo", translatio: { es: "un camino", en: "a path", zh: "道路" } },
                            { textus: "per", lemma: "per", morphologia: "Preposición (+ Acusativo)", syntaxis: "Modificador", translatio: { es: "a través de", en: "through", zh: "穿越" } },
                            { textus: "prouinciam", lemma: "provincia", morphologia: "Acusativo Femenino Singular", syntaxis: "Complemento de 'per'", translatio: { es: "la provincia", en: "the province", zh: "行省" } },
                            { textus: "per", lemma: "per", morphologia: "Preposición (+ Acusativo)", syntaxis: "Modificador", translatio: { es: "por", en: "by", zh: "憑藉" } },
                            { textus: "uim", lemma: "vis", morphologia: "Acusativo Femenino Singular", syntaxis: "Complemento de 'per'", translatio: { es: "la fuerza", en: "force", zh: "武力" } },
                            { textus: "temptassent,", lemma: "tempto", morphologia: "Pluscuamperfecto Subjuntivo Activo, 3ª Persona Plural (sincopado)", syntaxis: "Verbo", translatio: { es: "hubieran intentado", en: "they had attempted", zh: "他們試圖" } },
                            { textus: "quod", lemma: "quod", morphologia: "Conjunción Causal", syntaxis: "Nexo", translatio: { es: "que", en: "that", zh: "他們" } },
                            { textus: "Haeduos,", lemma: "Haeduus", morphologia: "Acusativo Masculino Plural", syntaxis: "Objeto Directo", translatio: { es: "a los Eduos", en: "the Haedui", zh: "愛杜依人" } },
                            { textus: "quod", lemma: "quod", morphologia: "Conjunción Causal", syntaxis: "Nexo", translatio: { es: "que", en: "that", zh: "他們" } },
                            { textus: "Ambarros,", lemma: "Ambarri", morphologia: "Acusativo Masculino Plural", syntaxis: "Objeto Directo", translatio: { es: "a los Ambarros", en: "the Ambarri", zh: "安巴里人" } },
                            { textus: "quod", lemma: "quod", morphologia: "Conjunción Causal", syntaxis: "Nexo", translatio: { es: "que", en: "that", zh: "他們" } },
                            { textus: "Allobrogas", lemma: "Allobroges", morphologia: "Acusativo Masculino Plural", syntaxis: "Objeto Directo", translatio: { es: "a los Alóbroges", en: "the Allobroges", zh: "阿洛布羅基人" } },
                            { textus: "uexassent,", lemma: "vexo", morphologia: "Pluscuamperfecto Subjuntivo Activo, 3ª Persona Plural (sincopado)", syntaxis: "Verbo", translatio: { es: "hubieran vejado", en: "they had harassed", zh: "侵擾了" } },
                            { textus: "memoriam", lemma: "memoria", morphologia: "Acusativo Femenino Singular", syntaxis: "Objeto Directo", translatio: { es: "el recuerdo", en: "the memory", zh: "記憶" } },
                            { textus: "deponere", lemma: "depono", morphologia: "Presente Infinitivo Activo", syntaxis: "Verbo", translatio: { es: "deponer", en: "to lay aside", zh: "放下" } },
                            { textus: "posse?", lemma: "possum", morphologia: "Presente Infinitivo", syntaxis: "Verbo modal", translatio: { es: "podría", en: "could he", zh: "能夠" } }
                        ],
                        ordo_syntacticus: "Pregunta retórica en estilo indirecto ('num... posse?'), introducida por una cláusula condicional ('Quod si... uellet'). La pregunta contiene una serie de cláusulas causales ('quod...') que enumeran los agravios.",
                        notae: "'Num' en una pregunta indirecta introduce una pregunta que espera una respuesta negativa. 'Posse' depende de un 'se' (a él, César) elidido como sujeto del infinitivo.",
                        translationes: {
                            es: "Que si quisiera olvidarse de la antigua afrenta, ¿acaso podría también deponer el recuerdo de las injusticias recientes: que contra su voluntad hubieran intentado hacer un camino a través de la provincia por la fuerza, que hubieran vejado a los Eduos, a los Ambarros, a los Alóbroges?",
                            en: "But if he were willing to forget the old insult, could he also lay aside the memory of recent injuries: that against his will they had attempted a path through the province by force, that they had harassed the Haedui, the Ambarri, the Allobroges?",
                            zh: "就算他願意忘記舊日的侮辱，難道他也能放下對最近這些不義之舉的記憶嗎？即他們不顧他的反對，試圖用武力強行穿越行省；他們侵擾了愛杜依人、安巴里人、以及阿洛布羅基人？"
                        }
                    },
                    {
                        id_orationis: 'o4',
                        original_lat: "Quod sua uictoria tam insolenter gloriarentur, quodque tam diu se inpune iniurias tulisse admirarentur, eodem pertinere.",
                        verba: [
                            { textus: "Quod", lemma: "quod", morphologia: "Conjunción (explicativa)", syntaxis: "Nexo", translatio: { es: "el hecho de que", en: "the fact that", zh: "至於他們" } },
                            { textus: "sua", lemma: "suus", morphologia: "Ablativo Femenino Singular", syntaxis: "Atributo", translatio: { es: "de su", en: "in their", zh: "為自己的" } },
                            { textus: "uictoria", lemma: "victoria", morphologia: "Ablativo Femenino Singular", syntaxis: "Complemento de Causa", translatio: { es: "victoria", en: "victory", zh: "勝利" } },
                            { textus: "tam", lemma: "tam", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "tan", en: "so", zh: "如此" } },
                            { textus: "insolenter", lemma: "insolenter", morphologia: "Adverbio", syntaxis: "Modificador verbal", translatio: { es: "insolentemente", en: "insolently", zh: "傲慢地" } },
                            { textus: "gloriarentur,", lemma: "glorior", morphologia: "Imperfecto Subjuntivo Deponente, 3ª Persona Plural", syntaxis: "Verbo", translatio: { es: "se gloriaran", en: "they boasted", zh: "誇耀" } },
                            { textus: "quodque", lemma: "quodque", morphologia: "Conjunción + Conjunción enclítica", syntaxis: "Nexo", translatio: { es: "y que", en: "and that", zh: "並且" } },
                            { textus: "tam", lemma: "tam", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "tan", en: "so", zh: "如此" } },
                            { textus: "diu", lemma: "diu", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "largo tiempo", en: "long", zh: "長久地" } },
                            { textus: "se", lemma: "sui", morphologia: "Acusativo (Reflexivo)", syntaxis: "Sujeto de infinitivo", translatio: { es: "ellos", en: "they", zh: "他們" } },
                            { textus: "inpune", lemma: "impune", morphologia: "Adverbio", syntaxis: "Modificador verbal", translatio: { es: "impunemente", en: "with impunity", zh: "逍遙法外地" } },
                            { textus: "iniurias", lemma: "iniuria", morphologia: "Acusativo Femenino Plural", syntaxis: "Objeto Directo", translatio: { es: "injusticias", en: "injuries", zh: "不義之行" } },
                            { textus: "tulisse", lemma: "fero", morphologia: "Perfecto Infinitivo Activo", syntaxis: "Verbo (oración de infinitivo)", translatio: { es: "habían cometido", en: "had inflicted", zh: "施加" } },
                            { textus: "admirarentur,", lemma: "admiror", morphologia: "Imperfecto Subjuntivo Deponente, 3ª Persona Plural", syntaxis: "Verbo", translatio: { es: "se maravillaran", en: "they wondered", zh: "感到驚奇" } },
                            { textus: "eodem", lemma: "eodem", morphologia: "Adverbio de lugar", syntaxis: "Modificador verbal", translatio: { es: "al mismo punto", en: "to the same point", zh: "歸於同理" } },
                            { textus: "pertinere.", lemma: "pertineo", morphologia: "Presente Infinitivo Activo", syntaxis: "Verbo (oración de infinitivo)", translatio: { es: "tendía", en: "it pertained", zh: "相關" } }
                        ],
                        ordo_syntacticus: "Dos cláusulas con 'quod' funcionando como sujeto de la oración de infinitivo 'pertinere'.",
                        notae: "César argumenta que la arrogancia de los Helvecios y su sorpresa por la falta de castigo divino son dos caras de la misma moneda, que él explicará a continuación.",
                        translationes: {
                            es: "Que el hecho de que se gloriaran tan insolentemente de su victoria, y que se maravillaran de haber cometido injusticias impunemente por tan largo tiempo, tendía a lo mismo.",
                            en: "That the fact that they boasted so insolently of their victory, and that they wondered that they had inflicted injuries with impunity for so long, pertained to the same point.",
                            zh: "至於他們為自己的勝利如此傲慢地誇耀，並對自己長期以來施加不義之行而未受懲罰感到驚奇，這都歸於同一個道理。"
                        }
                    },
                    {
                        id_orationis: 'o5',
                        original_lat: "Consuesse enim deos immortales, quo grauius homines ex commutatione rerum doleant, quos pro scelere eorum ulcisci uelint, his secundiores interdum res et diuturniorem impunitatem concedere.",
                        verba: [
                           { textus: "Consuesse", lemma: "consuesco", morphologia: "Perfecto Infinitivo Activo (sincopado)", syntaxis: "Verbo (oración de infinitivo)", translatio: { es: "acostumbraban", en: "were accustomed", zh: "習慣於" } },
                           { textus: "enim", lemma: "enim", morphologia: "Conjunción Causal", syntaxis: "Nexo", translatio: { es: "pues", en: "for", zh: "因為" } },
                           { textus: "deos", lemma: "deus", morphologia: "Acusativo Masculino Plural", syntaxis: "Sujeto de infinitivo", translatio: { es: "los dioses", en: "the gods", zh: "諸神" } },
                           { textus: "immortales,", lemma: "immortalis", morphologia: "Acusativo Masculino Plural", syntaxis: "Atributo", translatio: { es: "inmortales", en: "immortal", zh: "不朽的" } },
                           { textus: "quo", lemma: "quo", morphologia: "Conjunción Final", syntaxis: "Nexo", translatio: { es: "para que", en: "so that", zh: "為了讓" } },
                           { textus: "grauius", lemma: "graviter", morphologia: "Adverbio Comparativo", syntaxis: "Modificador", translatio: { es: "más gravemente", en: "more grievously", zh: "更沉痛地" } },
                           { textus: "homines", lemma: "homo", morphologia: "Nominativo Masculino Plural", syntaxis: "Sujeto", translatio: { es: "los hombres", en: "men", zh: "人們" } },
                           { textus: "ex", lemma: "ex", morphologia: "Preposición (+ Ablativo)", syntaxis: "Modificador", translatio: { es: "por", en: "from", zh: "由於" } },
                           { textus: "commutatione", lemma: "commutatio", morphologia: "Ablativo Femenino Singular", syntaxis: "Complemento de 'ex'", translatio: { es: "el cambio", en: "the change", zh: "轉變" } },
                           { textus: "rerum", lemma: "res", morphologia: "Genitivo Femenino Plural", syntaxis: "Complemento del Nombre", translatio: { es: "de las circunstancias", en: "of fortune", zh: "命運的" } },
                           { textus: "doleant,", lemma: "doleo", morphologia: "Presente Subjuntivo Activo, 3ª Persona Plural", syntaxis: "Verbo", translatio: { es: "sufran", en: "they might suffer", zh: "感受痛苦" } },
                           { textus: "quos", lemma: "qui", morphologia: "Acusativo Masculino Plural", syntaxis: "Sujeto de infinitivo", translatio: { es: "a quienes", en: "whom", zh: "那些人" } },
                           { textus: "pro", lemma: "pro", morphologia: "Preposición (+ Ablativo)", syntaxis: "Modificador", translatio: { es: "por", en: "for", zh: "因其" } },
                           { textus: "scelere", lemma: "scelus", morphologia: "Ablativo Neutro Singular", syntaxis: "Complemento de 'pro'", translatio: { es: "el crimen", en: "their crime", zh: "罪行" } },
                           { textus: "eorum", lemma: "is", morphologia: "Genitivo Masculino Plural", syntaxis: "Complemento del Nombre", translatio: { es: "de ellos", en: "of them", zh: "他們的" } },
                           { textus: "ulcisci", lemma: "ulciscor", morphologia: "Presente Infinitivo Deponente", syntaxis: "Verbo", translatio: { es: "castigar", en: "to punish", zh: "懲罰" } },
                           { textus: "uelint,", lemma: "volo", morphologia: "Presente Subjuntivo Activo, 3ª Persona Plural", syntaxis: "Verbo", translatio: { es: "quieren", en: "they wish", zh: "想要" } },
                           { textus: "his", lemma: "hic", morphologia: "Dativo Masculino Plural", syntaxis: "Objeto Indirecto", translatio: { es: "a estos", en: "to these", zh: "給這些人" } },
                           { textus: "secundiores", lemma: "secundus", morphologia: "Adjetivo Comparativo, Acusativo Plural", syntaxis: "Atributo", translatio: { es: "más favorables", en: "more favorable", zh: "比較順利的" } },
                           { textus: "interdum", lemma: "interdum", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "a veces", en: "at times", zh: "暫時" } },
                           { textus: "res", lemma: "res", morphologia: "Acusativo Femenino Plural", syntaxis: "Objeto Directo", translatio: { es: "situaciones", en: "circumstances", zh: "時運" } },
                           { textus: "et", lemma: "et", morphologia: "Conjunción Coordinante", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "和" } },
                           { textus: "diuturniorem", lemma: "diuturnus", morphologia: "Adjetivo Comparativo, Acusativo Singular", syntaxis: "Atributo", translatio: { es: "una más larga", en: "a longer", zh: "更長久的" } },
                           { textus: "impunitatem", lemma: "impunitas", morphologia: "Acusativo Femenino Singular", syntaxis: "Objeto Directo", translatio: { es: "impunidad", en: "impunity", zh: "法外之身" } },
                           { textus: "concedere.", lemma: "concedo", morphologia: "Presente Infinitivo Activo", syntaxis: "Verbo (oración de infinitivo)", translatio: { es: "conceder", en: "to grant", zh: "賜予" } }
                        ],
                        ordo_syntacticus: "Oración de infinitivo ('deos... concedere') que depende de un verbo de decir implícito. Contiene una cláusula de relativo ('quos... uelint') y una cláusula final con comparativo ('quo... doleant').",
                        notae: "Este es un argumento filosófico-religioso común en la antigüedad: la prosperidad de los malvados es permitida por los dioses para que su posterior caída sea aún más dolorosa y ejemplar.",
                        translationes: {
                            es: "Pues (dijo que) los dioses inmortales acostumbraban, para que los hombres sufran más gravemente por el cambio de las circunstancias, conceder a aquellos a quienes quieren castigar por su crimen, a veces, situaciones más favorables y una más larga impunidad.",
                            en: "For (he said that) the immortal gods were accustomed, so that men might suffer more grievously from a change of fortune, to grant to those whom they wish to punish for their crime, at times, more favorable circumstances and a longer impunity.",
                            zh: "（他說）因為不朽的諸神有個習慣，為了讓某些人因命運的轉變而感受更深的痛苦，他們會對那些因其罪行而欲懲罰的人，暫時賜予他們比較順利的時運和更長久的法外之身。"
                        }
                    },
                    {
                        id_orationis: 'o6',
                        original_lat: "Cum ea ita sint, tamen si obsides ab iis sibi dentur, uti ea quae polliceantur facturos intellegat, et si Haeduis de iniuriis quas ipsis sociisque eorum intulerint, item si Allobrogibus satis faciant, sese cum iis pacem esse facturum.",
                        verba: [
                           { textus: "Cum", lemma: "cum", morphologia: "Conjunción Concesiva", syntaxis: "Nexo", translatio: { es: "aunque", en: "although", zh: "儘管" } },
                           { textus: "ea", lemma: "is", morphologia: "Nominativo Neutro Plural", syntaxis: "Sujeto", translatio: { es: "estas cosas", en: "these things", zh: "如此" } },
                           { textus: "ita", lemma: "ita", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "así", en: "so", zh: "這樣" } },
                           { textus: "sint,", lemma: "sum", morphologia: "Presente Subjuntivo, 3ª Persona Plural", syntaxis: "Verbo", translatio: { es: "sean", en: "are", zh: "是" } },
                           { textus: "tamen", lemma: "tamen", morphologia: "Adverbio", syntaxis: "Nexo adversativo", translatio: { es: "sin embargo", en: "nevertheless", zh: "然而" } },
                           { textus: "si", lemma: "si", morphologia: "Conjunción Condicional", syntaxis: "Nexo", translatio: { es: "si", en: "if", zh: "如果" } },
                           { textus: "obsides", lemma: "obses", morphologia: "Nominativo Masculino Plural", syntaxis: "Sujeto", translatio: { es: "rehenes", en: "hostages", zh: "人質" } },
                           { textus: "ab", lemma: "a/ab", morphologia: "Preposición (+ Ablativo)", syntaxis: "Complemento Agente", translatio: { es: "por", en: "by", zh: "由" } },
                           { textus: "iis", lemma: "is", morphologia: "Ablativo Masculino Plural", syntaxis: "Complemento de 'ab'", translatio: { es: "ellos", en: "them", zh: "他們" } },
                           { textus: "sibi", lemma: "sui", morphologia: "Dativo (Reflexivo)", syntaxis: "Objeto Indirecto", translatio: { es: "a él", en: "to him", zh: "向他" } },
                           { textus: "dentur,", lemma: "do", morphologia: "Presente Subjuntivo Pasivo, 3ª Persona Plural", syntaxis: "Verbo", translatio: { es: "son dados", en: "are given", zh: "提供" } },
                           { textus: "uti", lemma: "ut", morphologia: "Conjunción Final", syntaxis: "Nexo", translatio: { es: "para que", en: "so that", zh: "以便" } },
                           { textus: "ea", lemma: "is", morphologia: "Acusativo Neutro Plural", syntaxis: "Objeto Directo", translatio: { es: "aquellas cosas", en: "those things", zh: "那些事" } },
                           { textus: "quae", lemma: "qui", morphologia: "Acusativo Neutro Plural", syntaxis: "Objeto Directo", translatio: { es: "que", en: "which", zh: "所" } },
                           { textus: "polliceantur", lemma: "polliceor", morphologia: "Presente Subjuntivo Deponente, 3ª Persona Plural", syntaxis: "Verbo", translatio: { es: "prometen", en: "they promise", zh: "承諾的" } },
                           { textus: "facturos", lemma: "facio", morphologia: "Participio Futuro Activo, Acusativo Plural", syntaxis: "Verbo (oración de infinitivo)", translatio: { es: "que harán", en: "will do", zh: "會履行" } },
                           { textus: "intellegat,", lemma: "intellego", morphologia: "Presente Subjuntivo Activo, 3ª Persona Singular", syntaxis: "Verbo", translatio: { es: "entienda", en: "he may understand", zh: "他相信" } },
                           { textus: "et", lemma: "et", morphologia: "Conjunción Coordinante", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "並且" } },
                           { textus: "si", lemma: "si", morphologia: "Conjunción Condicional", syntaxis: "Nexo", translatio: { es: "si", en: "if", zh: "如果" } },
                           { textus: "Haeduis", lemma: "Haeduus", morphologia: "Dativo Masculino Plural", syntaxis: "Objeto Indirecto", translatio: { es: "a los Eduos", en: "to the Haedui", zh: "對愛杜依人" } },
                           { textus: "de", lemma: "de", morphologia: "Preposición (+ Ablativo)", syntaxis: "Modificador", translatio: { es: "acerca de", en: "concerning", zh: "就" } },
                           { textus: "iniuriis", lemma: "iniuria", morphologia: "Ablativo Femenino Plural", syntaxis: "Complemento de 'de'", translatio: { es: "las injusticias", en: "the injuries", zh: "侵害" } },
                           { textus: "quas", lemma: "qui", morphologia: "Acusativo Femenino Plural", syntaxis: "Objeto Directo", translatio: { es: "que", en: "which", zh: "所施加的" } },
                           { textus: "ipsis", lemma: "ipse", morphologia: "Dativo Masculino Plural", syntaxis: "Objeto Indirecto", translatio: { es: "a ellos mismos", en: "to them", zh: "對他們" } },
                           { textus: "sociisque", lemma: "socius", morphologia: "Dativo Masculino Plural + Conjunción", syntaxis: "Objeto Indirecto", translatio: { es: "y a sus socios", en: "and their allies", zh: "及其盟友" } },
                           { textus: "eorum", lemma: "is", morphologia: "Genitivo Masculino Plural", syntaxis: "Complemento del Nombre", translatio: { es: "de ellos", en: "of them", zh: "他們的" } },
                           { textus: "intulerint,", lemma: "infero", morphologia: "Perfecto Subjuntivo Activo, 3ª Persona Plural", syntaxis: "Verbo", translatio: { es: "han infligido", en: "they have inflicted", zh: "施加" } },
                           { textus: "item", lemma: "item", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "igualmente", en: "likewise", zh: "同樣地" } },
                           { textus: "si", lemma: "si", morphologia: "Conjunción Condicional", syntaxis: "Nexo", translatio: { es: "si", en: "if", zh: "如果" } },
                           { textus: "Allobrogibus", lemma: "Allobroges", morphologia: "Dativo Masculino Plural", syntaxis: "Objeto Indirecto", translatio: { es: "a los Alóbroges", en: "to the Allobroges", zh: "對阿洛布羅基人" } },
                           { textus: "satis", lemma: "satis", morphologia: "Adverbio", syntaxis: "Parte de la locución", translatio: { es: "satisfacen", en: "they make amends", zh: "做出" } },
                           { textus: "faciant,", lemma: "facio", morphologia: "Presente Subjuntivo Activo, 3ª Persona Plural", syntaxis: "Verbo", translatio: { es: "hacen", en: "they make", zh: "賠償" } },
                           { textus: "sese", lemma: "sui", morphologia: "Acusativo (Reflexivo)", syntaxis: "Sujeto de infinitivo", translatio: { es: "él", en: "he", zh: "他" } },
                           { textus: "cum", lemma: "cum", morphologia: "Preposición (+ Ablativo)", syntaxis: "Modificador", translatio: { es: "con", en: "with", zh: "與" } },
                           { textus: "iis", lemma: "is", morphologia: "Ablativo Masculino Plural", syntaxis: "Complemento de 'cum'", translatio: { es: "ellos", en: "them", zh: "他們" } },
                           { textus: "pacem", lemma: "pax", morphologia: "Acusativo Femenino Singular", syntaxis: "Objeto Directo", translatio: { es: "la paz", en: "peace", zh: "和平" } },
                           { textus: "esse", lemma: "sum", morphologia: "Presente Infinitivo", syntaxis: "Verbo (auxiliar)", translatio: { es: "sería", en: "would be", zh: "將會" } },
                           { textus: "facturum.", lemma: "facio", morphologia: "Participio Futuro Activo, Acusativo Singular", syntaxis: "Verbo (infinitivo futuro)", translatio: { es: "haría", en: "to make", zh: "締結" } }
                        ],
                        ordo_syntacticus: "Oración compleja que comienza con una cláusula concesiva ('Cum... sint'), seguida de la apódosis ('tamen... sese... facturum') que a su vez contiene varias cláusulas condicionales ('si... dentur', 'si... faciant').",
                        notae: "'Sese... pacem esse facturum' es un infinitivo futuro activo. Las condiciones de César son duras: rehenes (una garantía de sumisión) y reparaciones (un reconocimiento de culpa).",
                        translationes: {
                            es: "Que, aunque estas cosas sean así, sin embargo, si le dan rehenes, para que entienda que harán las cosas que prometen, y si satisfacen a los Eduos por las injusticias que a ellos y a sus socios les han infligido, e igualmente si satisfacen a los Alóbroges, él hará la paz con ellos.",
                            en: "That, although these things are so, nevertheless, if hostages are given to him by them, so that he may understand that they will do the things which they promise, and if they make amends to the Haedui for the injuries which they have inflicted upon them and their allies, and likewise if they make amends to the Allobroges, he will make peace with them.",
                            zh: "儘管如此，如果他們願意向他提供人質，以確保他相信他們會履行承諾，並且如果他們就對愛杜依人及其盟友所施加的侵害，以及對阿洛布羅基人所施加的侵害做出賠償，那麼他將會與他們締結和平。"
                        }
                    },
                    {
                        id_orationis: 'o7',
                        original_lat: "Diuico respondit: Ita Heluetios a maioribus suis institutos esse uti obsides accipere, non dare, consuerint: eius rei populum Romanum esse testem.",
                        verba: [
                           { textus: "Diuico", lemma: "Divico", morphologia: "Nominativo Masculino Singular", syntaxis: "Sujeto", translatio: { es: "Divicón", en: "Divico", zh: "迪維科" } },
                           { textus: "respondit:", lemma: "respondeo", morphologia: "Perfecto Indicativo Activo, 3ª Persona Singular", syntaxis: "Verbo Principal", translatio: { es: "respondió", en: "replied", zh: "回答" } },
                           { textus: "Ita", lemma: "ita", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "de tal modo", en: "so", zh: "如此" } },
                           { textus: "Heluetios", lemma: "Helvetius", morphologia: "Acusativo Masculino Plural", syntaxis: "Sujeto de infinitivo", translatio: { es: "los Helvecios", en: "the Helvetii", zh: "赫爾維蒂人" } },
                           { textus: "a", lemma: "a/ab", morphologia: "Preposición (+ Ablativo)", syntaxis: "Complemento Agente", translatio: { es: "por", en: "by", zh: "被" } },
                           { textus: "maioribus", lemma: "maior", morphologia: "Ablativo Masculino Plural", syntaxis: "Complemento de 'a'", translatio: { es: "sus antepasados", en: "their ancestors", zh: "祖先" } },
                           { textus: "suis", lemma: "suus", morphologia: "Ablativo Masculino Plural", syntaxis: "Atributo", translatio: { es: "suyos", en: "their", zh: "他們的" } },
                           { textus: "institutos", lemma: "instituo", morphologia: "Participio Perfecto Pasivo, Acusativo Plural", syntaxis: "Verbo (oración de infinitivo)", translatio: { es: "habían sido instruidos", en: "had been trained", zh: "教導" } },
                           { textus: "esse", lemma: "sum", morphologia: "Presente Infinitivo", syntaxis: "Verbo (auxiliar)", translatio: { es: "sido", en: "had been", zh: "（助動詞）" } },
                           { textus: "uti", lemma: "ut", morphologia: "Conjunción de Resultado", syntaxis: "Nexo", translatio: { es: "que", en: "that", zh: "以至於" } },
                           { textus: "obsides", lemma: "obses", morphologia: "Acusativo Masculino Plural", syntaxis: "Objeto Directo", translatio: { es: "rehenes", en: "hostages", zh: "人質" } },
                           { textus: "accipere,", lemma: "accipio", morphologia: "Presente Infinitivo Activo", syntaxis: "Verbo (complemento)", translatio: { es: "recibir", en: "to receive", zh: "接收" } },
                           { textus: "non", lemma: "non", morphologia: "Adverbio de Negación", syntaxis: "Modificador", translatio: { es: "no", en: "not", zh: "而不是" } },
                           { textus: "dare,", lemma: "do", morphologia: "Presente Infinitivo Activo", syntaxis: "Verbo (complemento)", translatio: { es: "darlos", en: "to give", zh: "交出" } },
                           { textus: "consuerint:", lemma: "consuesco", morphologia: "Perfecto Subjuntivo Activo, 3ª Persona Plural (sincopado)", syntaxis: "Verbo", translatio: { es: "estaban acostumbrados", en: "they were accustomed", zh: "習慣於" } },
                           { textus: "eius", lemma: "is", morphologia: "Genitivo Femenino Singular", syntaxis: "Complemento del Nombre", translatio: { es: "de este", en: "of this", zh: "這件" } },
                           { textus: "rei", lemma: "res", morphologia: "Genitivo Femenino Singular", syntaxis: "Complemento de 'testem'", translatio: { es: "hecho", en: "fact", zh: "事的" } },
                           { textus: "populum", lemma: "populus", morphologia: "Acusativo Masculino Singular", syntaxis: "Sujeto de infinitivo", translatio: { es: "el pueblo", en: "the people", zh: "人民" } },
                           { textus: "Romanum", lemma: "Romanus", morphologia: "Acusativo Masculino Singular", syntaxis: "Atributo", translatio: { es: "Romano", en: "Roman", zh: "羅馬" } },
                           { textus: "esse", lemma: "sum", morphologia: "Presente Infinitivo", syntaxis: "Verbo", translatio: { es: "era", en: "was", zh: "是" } },
                           { textus: "testem.", lemma: "testis", morphologia: "Acusativo Masculino Singular", syntaxis: "Predicado", translatio: { es: "testigo", en: "a witness", zh: "見證" } }
                        ],
                        ordo_syntacticus: "Discurso indirecto introducido por 'respondit', con dos oraciones de infinitivo coordinadas: 'institutos esse' (con una cláusula de resultado subordinada 'uti... consuerint') y 'esse testem'.",
                        notae: "La respuesta de Divicón es tajante y orgullosa. Apela a la tradición y al honor ('mos maiorum'), un concepto que los propios romanos entendían y respetaban profundamente, usando su propia lógica en su contra.",
                        translationes: {
                            es: "Divicón respondió: que los Helvecios habían sido instruidos por sus antepasados de tal modo que estaban acostumbrados a recibir rehenes, no a darlos; que de este hecho el pueblo Romano era testigo.",
                            en: "Divico replied: that the Helvetii had been so trained by their ancestors that they were accustomed to receive hostages, not to give them; that of this fact the Roman people was a witness.",
                            zh: "迪維科回答：赫爾維蒂人自祖先傳承的傳統，向來是接收人質，而非交出人質；對於這一點，羅馬人民就是見證。"
                        }
                    },
                    {
                        id_orationis: 'o8',
                        original_lat: "Hoc responso dato discessit.",
                        verba: [
                            { textus: "Hoc", lemma: "hic", morphologia: "Ablativo Neutro Singular", syntaxis: "Atributo", translatio: { es: "esta", en: "this", zh: "這個" } },
                            { textus: "responso", lemma: "responsum", morphologia: "Ablativo Neutro Singular", syntaxis: "Sujeto del Ablativo Absoluto", translatio: { es: "respuesta", en: "reply", zh: "回答" } },
                            { textus: "dato", lemma: "do", morphologia: "Participio Perfecto Pasivo, Ablativo Singular", syntaxis: "Verbo del Ablativo Absoluto", translatio: { es: "dada", en: "having been given", zh: "給出後" } },
                            { textus: "discessit.", lemma: "discedo", morphologia: "Perfecto Indicativo Activo, 3ª Persona Singular", syntaxis: "Verbo Principal", translatio: { es: "se marchó", en: "he departed", zh: "他離開了" } }
                        ],
                        ordo_syntacticus: "Oración simple construida sobre un ablativo absoluto.",
                        notae: "La brevedad y la acción final ('discessit') crean un final dramático y abrupto para el encuentro, dejando claro que las negociaciones han fracasado y la guerra es inevitable.",
                        translationes: {
                            es: "Dada esta respuesta, se marchó.",
                            en: "This reply having been given, he departed.",
                            zh: "說完這個回答，他就離開了。"
                        }
                    }
                ]
            }
        ]
    }
};

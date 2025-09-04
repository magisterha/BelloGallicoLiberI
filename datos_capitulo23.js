const corpus = {
    titulus_principalis: "De Bello Gallico, I, 23",
    auctor: "C. Iulius Caesar",
    titulus_secundarius: {
        es: "Giro hacia Bibracte y el ataque de los helvecios",
        en: "The Turn Towards Bibracte and the Attack of the Helvetii",
        zh: "轉向比布拉克特與赫爾維蒂人的攻擊"
    },
    introductio: {
        es: {
            titulus: "Introducción al Capítulo 23",
            contentus: `<p>Este capítulo marca un punto de inflexión decisivo. Obligado por la necesidad logística, ya que a su ejército solo le quedan dos días de grano, César toma la pragmática decisión de interrumpir la persecución de los helvecios para dirigirse a Bibracte, la ciudad más grande de los heduos, y reabastecerse. Este movimiento es comunicado a los helvecios por desertores de la caballería gala. Los helvecios interpretan erróneamente la maniobra de César de dos maneras: o bien creen que los romanos huyen por miedo, especialmente tras no haber luchado el día anterior, o bien confían en que pueden cortarles el suministro de alimentos. Basándose en esta falsa premisa, cambian audazmente de estrategia, dan media vuelta y comienzan a atacar y hostigar la retaguardia de la columna romana en marcha.</p>`
        },
        en: {
            titulus: "Introduction to Chapter 23",
            contentus: `<p>This chapter marks a decisive turning point. Forced by logistical necessity, as his army has only two days of grain remaining, Caesar makes the pragmatic decision to break off the pursuit of the Helvetii to head towards Bibracte, the largest Aeduan town, to resupply. This movement is reported to the Helvetii by deserters from the Gallic cavalry. The Helvetii misinterpret Caesar's maneuver in one of two ways: they either believe the Romans are fleeing out of fear, especially after not having fought the previous day, or they are confident they can cut them off from their food supply. Based on this false premise, they boldly change their strategy, reverse their course, and begin to attack and harass the rearguard of the marching Roman column.</p>`
        },
        zh: {
            titulus: "第 23 章介紹",
            contentus: `<p>本章標誌著一個決定性的轉折點。由於軍隊僅剩兩天的糧食，凱撒出於後勤需要，做出了務實的決定：停止追擊赫爾維蒂人，轉而前往埃杜伊人最大的城鎮比布拉克特進行補給。高盧騎兵中的逃兵將這一行動報告給了赫爾維蒂人。赫爾維蒂人對凱撒的調動產生了兩種錯誤的解讀：他們要麼認為羅馬人是出於恐懼而逃跑，尤其是在前一天沒有交戰之後；要麼他們自信可以切斷羅馬人的糧食供應。基於這種錯誤的判斷，他們大膽地改變了策略，掉轉行軍方向，開始攻擊和騷擾正在行進中的羅馬軍隊的後衛。</p>`
        }
    },
    textus: {
        id: 23,
        capitula: [
            {
                id_capituli: 23,
                orationes: [
                    {
                        id_orationis: 'o1',
                        original_lat: "Postridie eius diei, quod omnino biduum supererat, cum exercitui frumentum metiri oporteret, et quod a Bibracte, oppido Haeduorum longe maximo et copiosissimo, non amplius milibus passuum XVIII aberat, rei frumentariae prospiciendum existimauit: iter ab Heluetiis auertit ac Bibracte ire contendit.",
                        verba: [
                            { textus: "Postridie", lemma: "postridie", morphologia: "Adverbio", syntaxis: "Modificador temporal", translatio: { es: "al día siguiente", en: "on the next day", zh: "第二天" } },
                            { textus: "eius", lemma: "is", morphologia: "Pronombre, genitivo, singular, masculino", syntaxis: "C. del adverbio", translatio: { es: "de ese", en: "of that", zh: "" } },
                            { textus: "diei", lemma: "dies", morphologia: "Sustantivo, genitivo, singular, masculino", syntaxis: "C. del adverbio", translatio: { es: "día", en: "day", zh: "" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "quod", lemma: "quod", morphologia: "Conjunción", syntaxis: "Nexo (causal)", translatio: { es: "porque", en: "because", zh: "因為" } },
                            { textus: "omnino", lemma: "omnino", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "en total", en: "in all", zh: "總共" } },
                            { textus: "biduum", lemma: "biduum", morphologia: "Sustantivo, nominativo, singular, neutro", syntaxis: "Sujeto", translatio: { es: "dos días", en: "two days", zh: "只剩兩天" } },
                            { textus: "supererat", lemma: "supersum", morphologia: "Verbo, 3ª p, singular, imperfecto, indicativo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "quedaban", en: "remained", zh: "" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "cum", lemma: "cum", morphologia: "Conjunción", syntaxis: "Nexo (causal)", translatio: { es: "dado que", en: "since", zh: "並且" } },
                            { textus: "exercitui", lemma: "exercitus", morphologia: "Sustantivo, dativo, singular, masculino", syntaxis: "Objeto Indirecto", translatio: { es: "al ejército", en: "to the army", zh: "給軍隊" } },
                            { textus: "frumentum", lemma: "frumentum", morphologia: "Sustantivo, acusativo, singular, neutro", syntaxis: "Objeto Directo", translatio: { es: "el grano", en: "the grain", zh: "分配糧食" } },
                            { textus: "metiri", lemma: "metior", morphologia: "Verbo, infinitivo, presente, deponente", syntaxis: "Verbo (de infinitiva)", translatio: { es: "medir", en: "to measure out", zh: "" } },
                            { textus: "oporteret", lemma: "oportet", morphologia: "Verbo, 3ª p, singular, imperfecto, subjuntivo, activo", syntaxis: "Verbo (de subordinada, impersonal)", translatio: { es: "era necesario", en: "it was necessary", zh: "是必要的" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "又" } },
                            { textus: "quod", lemma: "quod", morphologia: "Conjunción", syntaxis: "Nexo (causal)", translatio: { es: "porque", en: "because", zh: "因為" } },
                            { textus: "a", lemma: "a", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "de", en: "from", zh: "離" } },
                            { textus: "Bibracte", lemma: "Bibracte", morphologia: "Nombre propio, ablativo, singular, neutro", syntaxis: "C. preposicional", translatio: { es: "Bibracte", en: "Bibracte", zh: "比布拉克特" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "oppido", lemma: "oppidum", morphologia: "Sustantivo, ablativo, singular, neutro", syntaxis: "Aposición", translatio: { es: "ciudad", en: "a town", zh: "一座城鎮" } },
                            { textus: "Haeduorum", lemma: "Haeduus", morphologia: "Sustantivo, genitivo, plural, masculino", syntaxis: "C. del Nombre", translatio: { es: "de los heduos", en: "of the Aedui", zh: "埃杜伊人的" } },
                            { textus: "longe", lemma: "longe", morphologia: "Adverbio", syntaxis: "Modificador (de maximo)", translatio: { es: "con mucho", en: "by far", zh: "遠遠" } },
                            { textus: "maximo", lemma: "magnus", morphologia: "Adjetivo, ablativo, singular, neutro, superlativo", syntaxis: "Modificador (de oppido)", translatio: { es: "la más grande", en: "the largest", zh: "最大" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "且" } },
                            { textus: "copiosissimo", lemma: "copiosus", morphologia: "Adjetivo, ablativo, singular, neutro, superlativo", syntaxis: "Modificador (de oppido)", translatio: { es: "abastecida", en: "most well-stocked", zh: "最富饒的" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "non", lemma: "non", morphologia: "Adverbio", syntaxis: "Negación", translatio: { es: "no", en: "not", zh: "不" } },
                            { textus: "amplius", lemma: "amplus", morphologia: "Adverbio, comparativo", syntaxis: "Modificador", translatio: { es: "más de", en: "more than", zh: "超過" } },
                            { textus: "milibus", lemma: "mille", morphologia: "Sustantivo, ablativo, plural, neutro", syntaxis: "Ablativo de comparación", translatio: { es: "millas", en: "miles", zh: "里" } },
                            { textus: "passuum", lemma: "passus", morphologia: "Sustantivo, genitivo, plural, masculino", syntaxis: "Genitivo partitivo", translatio: { es: "de pasos", en: "of paces", zh: "步" } },
                            { textus: "XVIII", lemma: "duodeuiginti", morphologia: "Adjetivo numeral", syntaxis: "Modificador", translatio: { es: "18", en: "18", zh: "十八" } },
                            { textus: "aberat", lemma: "absum", morphologia: "Verbo, 3ª p, singular, imperfecto, indicativo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "distaba", en: "he was away", zh: "遠" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "rei", lemma: "res", morphologia: "Sustantivo, dativo, singular, femenino", syntaxis: "Objeto Indirecto", translatio: { es: "del asunto", en: "for the matter", zh: "對" } },
                            { textus: "frumentariae", lemma: "frumentarius", morphologia: "Adjetivo, dativo, singular, femenino", syntaxis: "Modificador", translatio: { es: "del grano", en: "of grain", zh: "糧食問題" } },
                            { textus: "prospiciendum", lemma: "prospicio", morphologia: "Verbo, gerundivo, nominativo, singular, neutro", syntaxis: "Verbo (de infinitiva)", translatio: { es: "debía ocuparse", en: "provision had to be made", zh: "必須要" } },
                            { textus: "existimauit", lemma: "existimo", morphologia: "Verbo, 3ª p, singular, perfecto, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "consideró que", en: "he thought", zh: "他認為" } },
                            { textus: ":", lemma: ":", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ":", en: ":", zh: "，" } },
                            { textus: "iter", lemma: "iter", morphologia: "Sustantivo, acusativo, singular, neutro", syntaxis: "Objeto Directo", translatio: { es: "su rumbo", en: "his course", zh: "於是改變" } },
                            { textus: "ab", lemma: "ab", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "de", en: "from", zh: "不再追擊" } },
                            { textus: "Heluetiis", lemma: "Heluetii", morphologia: "Sustantivo, ablativo, plural, masculino", syntaxis: "C. preposicional", translatio: { es: "los helvecios", en: "the Helvetii", zh: "赫爾維蒂人" } },
                            { textus: "auertit", lemma: "auerto", morphologia: "Verbo, 3ª p, singular, presente, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "desvió", en: "he turned", zh: "行軍路線" } },
                            { textus: "ac", lemma: "ac", morphologia: "Conjunción", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "並" } },
                            { textus: "Bibracte", lemma: "Bibracte", morphologia: "Nombre propio, acusativo, singular, neutro", syntaxis: "C.C. de Lugar (a donde)", translatio: { es: "a Bibracte", en: "to Bibracte", zh: "往比布拉克特" } },
                            { textus: "ire", lemma: "eo", morphologia: "Verbo, infinitivo, presente", syntaxis: "Infinitivo (complemento de contendit)", translatio: { es: "a ir", en: "to go", zh: "" } },
                            { textus: "contendit", lemma: "contendo", morphologia: "Verbo, 3ª p, singular, presente, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "se dirigió", en: "he hastened", zh: "趕去" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Oración compleja. El verbo principal 'existimauit' rige una oración de infinitivo con un gerundivo de obligación ('rei frumentariae prospiciendum [esse]'). Las razones se exponen en cláusulas causales con 'quod' y 'cum'. Le siguen dos verbos principales más, coordinados ('auertit ac... contendit').",
                        notae: "'prospiciendum [esse]' es una construcción impersonal de obligación. 'Bibracte' como acusativo de dirección no necesita preposición.",
                        translationes: {
                            es: "Al día siguiente, como en total solo quedaban dos días para cuando fuera necesario medir el grano para el ejército, y como no distaba de Bibracte, la ciudad de los heduos con mucho la más grande y abastecida, no más de 18 millas, consideró que debía ocuparse del asunto del grano: desvió su rumbo de los helvecios y se dirigió a Bibracte.",
                            en: "On the next day, because in all only two days remained until it would be necessary to measure out the grain for the army, and because he was not more than 18 miles away from Bibracte, by far the largest and most well-stocked town of the Aedui, he thought that he must provide for the grain supply: he turned his course from the Helvetii and hastened to go to Bibracte.",
                            zh: "第二天，因為總共只剩兩天就必須給軍隊分配糧食，並且因為他離埃杜伊人最大且最富饒的城鎮比布拉克特不過十八里遠，他認為必須要解決糧食問題，於是改變了不再追擊赫爾維蒂人的行軍路線，並趕往比布拉克特。"
                        }
                    },
                    {
                        id_orationis: 'o2',
                        original_lat: "Ea res per fugitiuos L. Aemilii, decurionis equitum Gallorum, hostibus nuntiatur.",
                        verba: [
                            { textus: "Ea", lemma: "is", morphologia: "Pronombre, nominativo, singular, femenino", syntaxis: "Modificador (de res)", translatio: { es: "este", en: "this", zh: "這件" } },
                            { textus: "res", lemma: "res", morphologia: "Sustantivo, nominativo, singular, femenino", syntaxis: "Sujeto", translatio: { es: "hecho", en: "matter", zh: "事" } },
                            { textus: "per", lemma: "per", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "por medio de", en: "through", zh: "被" } },
                            { textus: "fugitiuos", lemma: "fugitiuus", morphologia: "Sustantivo, acusativo, plural, masculino", syntaxis: "C. preposicional", translatio: { es: "desertores", en: "deserters", zh: "逃兵" } },
                            { textus: "L.", lemma: "Lucius", morphologia: "Nombre propio, genitivo, singular, masculino", syntaxis: "C. del Nombre", translatio: { es: "de Lucio", en: "of Lucius", zh: "盧基烏斯" } },
                            { textus: "Aemilii", lemma: "Aemilius", morphologia: "Nombre propio, genitivo, singular, masculino", syntaxis: "C. del Nombre", translatio: { es: "Emilio", en: "Aemilius", zh: "埃米利烏斯" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "decurionis", lemma: "decurio", morphologia: "Sustantivo, genitivo, singular, masculino", syntaxis: "Aposición", translatio: { es: "decurión", en: "a decurion", zh: "一名十夫長" } },
                            { textus: "equitum", lemma: "eques", morphologia: "Sustantivo, genitivo, plural, masculino", syntaxis: "C. del Nombre", translatio: { es: "de los jinetes", en: "of the Gallic", zh: "高盧" } },
                            { textus: "Gallorum", lemma: "Gallus", morphologia: "Adjetivo, genitivo, plural, masculino", syntaxis: "Modificador", translatio: { es: "galos", en: "cavalry", zh: "騎兵的" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "hostibus", lemma: "hostis", morphologia: "Sustantivo, dativo, plural, masculino", syntaxis: "Objeto Indirecto", translatio: { es: "a los enemigos", en: "to the enemy", zh: "報告給了敵人" } },
                            { textus: "nuntiatur", lemma: "nuntio", morphologia: "Verbo, 3ª p, singular, presente, indicativo, pasivo", syntaxis: "Verbo Principal", translatio: { es: "es anunciado", en: "is reported", zh: "" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Oración simple en voz pasiva.",
                        notae: "",
                        translationes: {
                            es: "Este hecho es anunciado a los enemigos por medio de desertores de Lucio Emilio, decurión de los jinetes galos.",
                            en: "This matter is reported to the enemy through deserters from Lucius Aemilius, a decurion of the Gallic cavalry.",
                            zh: "這件事被盧基烏斯·埃米利烏斯（一名高盧騎兵的十夫長）手下的逃兵報告給了敵人。"
                        }
                    },
                    {
                        id_orationis: 'o3',
                        original_lat: "Heluetii, seu quod timore perterritos Romanos discedere a se existimarent, eo magis quod pridie superioribus locis occupatis proelium non commisissent, siue eo quod re frumentaria intercludi posse confiderent, commutato consilio atque itinere conuerso nostros a nouissimo agmine insequi ac lacessere coeperunt.",
                        verba: [
                            { textus: "Heluetii", lemma: "Heluetii", morphologia: "Sustantivo, nominativo, plural, masculino", syntaxis: "Sujeto", translatio: { es: "Los helvecios", en: "The Helvetii", zh: "赫爾維蒂人" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "seu", lemma: "siue", morphologia: "Conjunción", syntaxis: "Nexo (disyuntivo)", translatio: { es: "o bien porque", en: "either because", zh: "要麼因為" } },
                            { textus: "quod", lemma: "quod", morphologia: "Conjunción", syntaxis: "Nexo (causal)", translatio: { es: "", en: "", zh: "" } },
                            { textus: "timore", lemma: "timor", morphologia: "Sustantivo, ablativo, singular, masculino", syntaxis: "C.C. de Causa", translatio: { es: "por el miedo", en: "by fear", zh: "因恐懼" } },
                            { textus: "perterritos", lemma: "perterreo", morphologia: "Verbo, participio, perfecto, pasivo, acusativo, plural, masculino", syntaxis: "Participio concertado", translatio: { es: "aterrorizados", en: "terrified", zh: "而驚慌失措" } },
                            { textus: "Romanos", lemma: "Romanus", morphologia: "Sustantivo, acusativo, plural, masculino", syntaxis: "Sujeto (de infinitiva)", translatio: { es: "a los romanos", en: "the Romans", zh: "羅馬人" } },
                            { textus: "discedere", lemma: "discedo", morphologia: "Verbo, infinitivo, presente, activo", syntaxis: "Verbo (de infinitiva)", translatio: { es: "se alejaban", en: "were departing", zh: "正離開" } },
                            { textus: "a", lemma: "a", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "de", en: "from", zh: "" } },
                            { textus: "se", lemma: "sui", morphologia: "Pronombre, ablativo, singular", syntaxis: "C. preposicional", translatio: { es: "ellos", en: "them", zh: "他們" } },
                            { textus: "existimarent", lemma: "existimo", morphologia: "Verbo, 3ª p, plural, imperfecto, subjuntivo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "juzgaban que", en: "they thought", zh: "他們認為" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "eo", lemma: "eo", morphologia: "Adverbio", syntaxis: "Modificador (de magis)", translatio: { es: "tanto", en: "all the", zh: "更" } },
                            { textus: "magis", lemma: "magis", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "más", en: "more", zh: "是" } },
                            { textus: "quod", lemma: "quod", morphologia: "Conjunción", syntaxis: "Nexo (causal)", translatio: { es: "cuanto que", en: "because", zh: "因為" } },
                            { textus: "pridie", lemma: "pridie", morphologia: "Adverbio", syntaxis: "Modificador temporal", translatio: { es: "el día anterior", en: "the day before", zh: "前一天" } },
                            { textus: "superioribus", lemma: "superior", morphologia: "Adjetivo, ablativo, plural, neutro, comparativo", syntaxis: "Sujeto (de ablativo absoluto)", translatio: { es: "posiciones más altas", en: "the higher positions", zh: "佔據了" } },
                            { textus: "locis", lemma: "locus", morphologia: "Sustantivo, ablativo, plural, neutro", syntaxis: "Sujeto (de ablativo absoluto)", translatio: { es: "", en: "", zh: "高處" } },
                            { textus: "occupatis", lemma: "occupo", morphologia: "Verbo, participio, perfecto, pasivo, ablativo, plural, neutro", syntaxis: "Verbo (de ablativo absoluto)", translatio: { es: "habiendo ocupado", en: "having been occupied", zh: "之後" } },
                            { textus: "proelium", lemma: "proelium", morphologia: "Sustantivo, acusativo, singular, neutro", syntaxis: "Objeto Directo", translatio: { es: "combate", en: "battle", zh: "戰鬥" } },
                            { textus: "non", lemma: "non", morphologia: "Adverbio", syntaxis: "Negación", translatio: { es: "no", en: "not", zh: "沒有" } },
                            { textus: "commisissent", lemma: "committo", morphologia: "Verbo, 3ª p, plural, pluscuamperfecto, subjuntivo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "habían entablado", en: "they had joined", zh: "發起" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "siue", lemma: "siue", morphologia: "Conjunción", syntaxis: "Nexo (disyuntivo)", translatio: { es: "o bien porque", en: "or because", zh: "要麼" } },
                            { textus: "eo", lemma: "is", morphologia: "Pronombre, ablativo, singular, neutro", syntaxis: "C.C. de Causa", translatio: { es: "por el hecho", en: "for the reason", zh: "因為" } },
                            { textus: "quod", lemma: "quod", morphologia: "Conjunción", syntaxis: "Nexo (causal)", translatio: { es: "de que", en: "that", zh: "" } },
                            { textus: "re", lemma: "res", morphologia: "Sustantivo, ablativo, singular, femenino", syntaxis: "Ablativo de separación", translatio: { es: "del suministro", en: "from their grain", zh: "糧食" } },
                            { textus: "frumentaria", lemma: "frumentarius", morphologia: "Adjetivo, ablativo, singular, femenino", syntaxis: "Modificador", translatio: { es: "de grano", en: "supply", zh: "供應" } },
                            { textus: "intercludi", lemma: "intercludo", morphologia: "Verbo, infinitivo, presente, pasivo", syntaxis: "Verbo (de infinitiva)", translatio: { es: "ser aislados", en: "could be cut off", zh: "被切斷" } },
                            { textus: "posse", lemma: "possum", morphologia: "Verbo, infinitivo, presente", syntaxis: "Verbo (modal)", translatio: { es: "podían", en: "", zh: "能夠" } },
                            { textus: "confiderent", lemma: "confido", morphologia: "Verbo, 3ª p, plural, imperfecto, subjuntivo, semideponente", syntaxis: "Verbo (de subordinada)", translatio: { es: "confiaban en que", en: "they were confident", zh: "他們自信" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "commutato", lemma: "commuto", morphologia: "Verbo, participio, perfecto, pasivo, ablativo, singular, neutro", syntaxis: "Verbo (de ablativo absoluto)", translatio: { es: "cambiado", en: "having changed", zh: "改變了" } },
                            { textus: "consilio", lemma: "consilium", morphologia: "Sustantivo, ablativo, singular, neutro", syntaxis: "Sujeto (de ablativo absoluto)", translatio: { es: "su plan", en: "their plan", zh: "計劃" } },
                            { textus: "atque", lemma: "atque", morphologia: "Conjunción", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "並且" } },
                            { textus: "itinere", lemma: "iter", morphologia: "Sustantivo, ablativo, singular, neutro", syntaxis: "Sujeto (de ablativo absoluto)", translatio: { es: "su rumbo", en: "their route", zh: "掉轉了" } },
                            { textus: "conuerso", lemma: "conuerto", morphologia: "Verbo, participio, perfecto, pasivo, ablativo, singular, neutro", syntaxis: "Verbo (de ablativo absoluto)", translatio: { es: "dado la vuelta", en: "having reversed", zh: "方向" } },
                            { textus: "nostros", lemma: "noster", morphologia: "Pronombre, acusativo, plural, masculino", syntaxis: "Objeto Directo", translatio: { es: "a los nuestros", en: "our men", zh: "我方" } },
                            { textus: "a", lemma: "a", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "por", en: "at", zh: "從" } },
                            { textus: "nouissimo", lemma: "nouissimus", morphologia: "Adjetivo, ablativo, singular, neutro, superlativo", syntaxis: "Modificador", translatio: { es: "la retaguardia", en: "the rear", zh: "最後" } },
                            { textus: "agmine", lemma: "agmen", morphologia: "Sustantivo, ablativo, singular, neutro", syntaxis: "C. preposicional", translatio: { es: "", en: "of the column", zh: "的隊列" } },
                            { textus: "insequi", lemma: "insequor", morphologia: "Verbo, infinitivo, presente, deponente", syntaxis: "Infinitivo (complemento de coeperunt)", translatio: { es: "a perseguir", en: "to pursue", zh: "追擊" } },
                            { textus: "ac", lemma: "ac", morphologia: "Conjunción", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "並" } },
                            { textus: "lacessere", lemma: "lacesso", morphologia: "Verbo, infinitivo, presente, activo", syntaxis: "Infinitivo (complemento de coeperunt)", translatio: { es: "hostigar", en: "to harass", zh: "騷擾" } },
                            { textus: "coeperunt", lemma: "coepi", morphologia: "Verbo, 3ª p, plural, perfecto, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "comenzaron", en: "they began", zh: "開始" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Oración compleja. El verbo principal 'coeperunt' rige dos infinitivos. Las motivaciones de los helvecios se presentan como dos alternativas ('seu... siue...'), ambas introducidas por 'quod' y con verbos en subjuntivo para indicar que es su percepción. Dos ablativos absolutos ('commutato consilio atque itinere conuerso') describen la acción resultante.",
                        notae: "El uso del subjuntivo ('existimarent', 'commisissent', 'confiderent') es clave, pues César no afirma que los romanos tuvieran miedo, sino que los helvecios *creían* que lo tenían. Es una forma de distanciamiento autoral.",
                        translationes: {
                            es: "Los helvecios, o bien porque juzgaban que los romanos se alejaban de ellos aterrorizados por el miedo, tanto más cuanto que el día anterior, habiendo ocupado posiciones más altas, no habían entablado combate, o bien porque confiaban en que podían ser aislados del suministro de grano, cambiado su plan y dado la vuelta a su rumbo, comenzaron a perseguir y a hostigar a los nuestros por la retaguardia.",
                            en: "The Helvetii, either because they thought that the Romans, terrified by fear, were departing from them, all the more so because on the previous day, though they had occupied higher positions, they had not joined battle, or because they were confident that they could be cut off from the grain supply, having changed their plan and reversed their route, began to pursue and to harass our men at the rearguard.",
                            zh: "赫爾維蒂人要麼因為他們認為羅馬人因恐懼而驚慌失措地正離開他們——更是因為前一天在佔據了高處之後並沒有發起戰鬥——要麼因為他們自信能夠切斷羅馬人的糧食供應，於是改變了計劃並且掉轉了行軍方向，開始從最後的隊列追擊並騷擾我方人員。"
                        }
                    }
                ]
            }
        ]
    }
};

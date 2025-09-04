const corpus = {
    titulus_principalis: "De Bello Gallico, I, 26",
    auctor: "C. Iulius Caesar",
    titulus_secundarius: {
        es: "El fin de la batalla y la huida de los helvecios",
        en: "The End of the Battle and the Flight of the Helvetii",
        zh: "戰役的結束與赫爾維蒂人的逃亡"
    },
    introductio: {
        es: {
            titulus: "Introducción al Capítulo 26",
            contentus: `<p>Este capítulo detalla las fases finales y las consecuencias inmediatas de la batalla de Bibracte. La lucha, librada en dos frentes, fue excepcionalmente larga y encarnizada, extendiéndose desde la una de la tarde hasta el anochecer. César subraya la valentía de los helvecios, señalando que ningún romano vio a un enemigo huir durante el combate principal. La resistencia continuó hasta bien entrada la noche en el campamento de carros de los helvecios. Finalmente, los romanos se apoderaron de todo. Del desastre sobrevivieron unos 130,000 helvecios, que iniciaron una huida desesperada y sin descanso. Los romanos, impedidos por el cuidado de sus heridos y el entierro de sus muertos, no pudieron iniciar la persecución hasta tres días después. Sin embargo, César actuó con celeridad diplomática, enviando mensajeros a la tribu de los lingones para prohibirles, bajo severas amenazas, que prestaran cualquier tipo de ayuda a los fugitivos.</p>`
        },
        en: {
            titulus: "Introduction to Chapter 26",
            contentus: `<p>This chapter details the final phases and immediate aftermath of the Battle of Bibracte. The two-front battle was exceptionally long and fierce, lasting from the early afternoon until dusk. Caesar emphasizes the bravery of the Helvetii, noting that no Roman saw an enemy flee during the main engagement. Resistance continued late into the night at the Helvetian wagon-laager. Eventually, the Romans captured everything. About 130,000 Helvetii survived the disaster and began a desperate, non-stop flight. The Romans, delayed by tending to their wounded and burying their dead, could not begin the pursuit for three days. However, Caesar acted with diplomatic speed, sending messengers to the Lingones tribe to forbid them, under severe threats, from providing any aid to the fugitives.</p>`
        },
        zh: {
            titulus: "第 26 章介紹",
            contentus: `<p>本章詳細描述了比布拉克特戰役的最後階段和直接後果。這場雙線作戰異常漫長而激烈，從下午一點一直持續到黃昏。凱撒強調了赫爾維蒂人的英勇，指出在主要戰鬥中沒有一個羅馬人看到敵人轉身逃跑。抵抗一直持續到深夜，地點在赫爾維蒂人的車陣營地。最終，羅馬人佔領了所有。大約十三萬赫爾維蒂人在這場災難中倖存下來，開始了絕望而不間斷的逃亡。羅馬人由於需要照顧傷員和埋葬死者，三天後才得以開始追擊。然而，凱撒在外交上迅速採取行動，派遣信使前往林貢斯部落，以嚴厲的威脅禁止他們向逃亡者提供任何形式的援助。</p>`
        }
    },
    textus: {
        id: 26,
        capitula: [
            {
                id_capituli: 26,
                orationes: [
                    {
                        id_orationis: 'o1',
                        original_lat: "Ita ancipiti proelio diu atque acriter pugnatum est.",
                        verba: [
                            { textus: "Ita", lemma: "ita", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "Así", en: "Thus", zh: "就這樣" } },
                            { textus: "ancipiti", lemma: "anceps", morphologia: "Adjetivo, ablativo, singular, neutro", syntaxis: "Modificador", translatio: { es: "en un combate", en: "in a two-fronted", zh: "雙線" } },
                            { textus: "proelio", lemma: "proelium", morphologia: "Sustantivo, ablativo, singular, neutro", syntaxis: "Ablativo de modo", translatio: { es: "en dos frentes", en: "battle", zh: "作戰中" } },
                            { textus: "diu", lemma: "diu", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "largo tiempo", en: "for a long time", zh: "長時間" } },
                            { textus: "atque", lemma: "atque", morphologia: "Conjunción", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "且" } },
                            { textus: "acriter", lemma: "acriter", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "encarnizadamente", en: "fiercely", zh: "激烈地" } },
                            { textus: "pugnatum", lemma: "pugno", morphologia: "Verbo, participio, perfecto, pasivo, nominativo, singular, neutro", syntaxis: "Verbo (impersonal)", translatio: { es: "se luchó", en: "it was fought", zh: "戰鬥" } },
                            { textus: "est", lemma: "sum", morphologia: "Verbo, 3ª p, singular, presente, indicativo", syntaxis: "Verbo (auxiliar)", translatio: { es: "", en: "", zh: "進行著" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Oración simple con verbo impersonal pasivo ('pugnatum est').",
                        notae: "'Ancipiti proelio' significa literalmente 'en un combate de dos cabezas', es decir, en dos frentes.",
                        translationes: {
                            es: "Así se luchó largo tiempo y encarnizadamente en un combate en dos frentes.",
                            en: "Thus it was fought for a long time and fiercely in a two-fronted battle.",
                            zh: "就這樣，在一場雙線作戰中，戰鬥長時間激烈地進行著。"
                        }
                    },
                    {
                        id_orationis: 'o2',
                        original_lat: "Diutius cum sustinere nostrorum impetus non possent, alteri se, ut coeperant, in montem receperunt, alteri ad impedimenta et carros suos se contulerunt.",
                        verba: [
                            { textus: "Diutius", lemma: "diu", morphologia: "Adverbio, comparativo", syntaxis: "Modificador", translatio: { es: "más tiempo", en: "any longer", zh: "更久" } },
                            { textus: "cum", lemma: "cum", morphologia: "Conjunción", syntaxis: "Nexo (Cum histórico)", translatio: { es: "como", en: "since", zh: "由於" } },
                            { textus: "sustinere", lemma: "sustineo", morphologia: "Verbo, infinitivo, presente, activo", syntaxis: "Infinitivo (complemento de possent)", translatio: { es: "soportar", en: "to withstand", zh: "抵擋" } },
                            { textus: "nostrorum", lemma: "noster", morphologia: "Pronombre, genitivo, plural, masculino", syntaxis: "C. del Nombre", translatio: { es: "de los nuestros", en: "of our men", zh: "我方人員的" } },
                            { textus: "impetus", lemma: "impetus", morphologia: "Sustantivo, acusativo, plural, masculino", syntaxis: "Objeto Directo", translatio: { es: "los ataques", en: "the attacks", zh: "攻擊" } },
                            { textus: "non", lemma: "non", morphologia: "Adverbio", syntaxis: "Negación", translatio: { es: "no", en: "not", zh: "無法" } },
                            { textus: "possent", lemma: "possum", morphologia: "Verbo, 3ª p, plural, imperfecto, subjuntivo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "pudieron", en: "they were able", zh: "" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "alteri", lemma: "alter", morphologia: "Pronombre, nominativo, plural, masculino", syntaxis: "Sujeto", translatio: { es: "unos", en: "the one party", zh: "一部分人" } },
                            { textus: "se", lemma: "sui", morphologia: "Pronombre, acusativo, singular", syntaxis: "Objeto Directo", translatio: { es: "se", en: "themselves", zh: "" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "ut", lemma: "ut", morphologia: "Conjunción", syntaxis: "Nexo (comparativo)", translatio: { es: "como", en: "as", zh: "像" } },
                            { textus: "coeperant", lemma: "coepi", morphologia: "Verbo, 3ª p, plural, pluscuamperfecto, indicativo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "habían comenzado", en: "they had begun", zh: "之前開始那樣" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "al", en: "onto", zh: "撤退到" } },
                            { textus: "montem", lemma: "mons", morphologia: "Sustantivo, acusativo, singular, masculino", syntaxis: "C. preposicional", translatio: { es: "monte", en: "the mountain", zh: "山上" } },
                            { textus: "receperunt", lemma: "recipio", morphologia: "Verbo, 3ª p, plural, perfecto, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "se retiraron", en: "retreated", zh: "" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "alteri", lemma: "alter", morphologia: "Pronombre, nominativo, plural, masculino", syntaxis: "Sujeto", translatio: { es: "otros", en: "the other party", zh: "另一部分人" } },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "hacia", en: "to", zh: "則" } },
                            { textus: "impedimenta", lemma: "impedimentum", morphologia: "Sustantivo, acusativo, plural, neutro", syntaxis: "C. preposicional", translatio: { es: "los bagajes", en: "the baggage", zh: "撤向" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "和" } },
                            { textus: "carros", lemma: "carrus", morphologia: "Sustantivo, acusativo, plural, masculino", syntaxis: "C. preposicional", translatio: { es: "carros", en: "their carts", zh: "他們的車輛" } },
                            { textus: "suos", lemma: "suus", morphologia: "Adjetivo posesivo, acusativo, plural, masculino", syntaxis: "Modificador", translatio: { es: "sus", en: "", zh: "" } },
                            { textus: "se", lemma: "sui", morphologia: "Pronombre, acusativo, singular", syntaxis: "Objeto Directo", translatio: { es: "se", en: "themselves", zh: "" } },
                            { textus: "contulerunt", lemma: "confero", morphologia: "Verbo, 3ª p, plural, perfecto, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "se dirigieron", en: "betook", zh: "" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Una cláusula 'cum' causal introduce dos oraciones principales coordinadas por la correlación 'alteri... alteri...'.",
                        notae: "",
                        translationes: {
                            es: "Como no pudieron soportar más tiempo los ataques de los nuestros, unos se retiraron al monte, como habían comenzado a hacer, y otros se dirigieron hacia los bagajes y sus carros.",
                            en: "Since they could not withstand the attacks of our men any longer, the one party retreated to the mountain, as they had begun to do, the other betook themselves to the baggage and their carts.",
                            zh: "由於無法再抵擋我方人員的攻擊，一部分人像之前開始那樣撤退到山上，另一部分人則撤向他們的輜重和車輛。"
                        }
                    },
                    {
                        id_orationis: 'o3',
                        original_lat: "Nam hoc toto proelio, cum ab hora septima ad uesperum pugnatum sit, auersum hostem uidere nemo potuit.",
                        verba: [
                            { textus: "Nam", lemma: "nam", morphologia: "Conjunción", syntaxis: "Nexo (explicativo)", translatio: { es: "Pues", en: "For", zh: "因為" } },
                            { textus: "hoc", lemma: "hic", morphologia: "Adjetivo demostrativo, ablativo, singular, neutro", syntaxis: "Modificador", translatio: { es: "en toda esta", en: "in this whole", zh: "在" } },
                            { textus: "toto", lemma: "totus", morphologia: "Adjetivo, ablativo, singular, neutro", syntaxis: "Modificador", translatio: { es: "", en: "", zh: "整場" } },
                            { textus: "proelio", lemma: "proelium", morphologia: "Sustantivo, ablativo, singular, neutro", syntaxis: "Ablativo de Tiempo", translatio: { es: "batalla", en: "battle", zh: "戰鬥中" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "cum", lemma: "cum", morphologia: "Conjunción", syntaxis: "Nexo (concesivo)", translatio: { es: "aunque", en: "although", zh: "儘管" } },
                            { textus: "ab", lemma: "ab", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "desde", en: "from", zh: "從" } },
                            { textus: "hora", lemma: "hora", morphologia: "Sustantivo, ablativo, singular, femenino", syntaxis: "C. preposicional", translatio: { es: "la hora", en: "the hour", zh: "第七" } },
                            { textus: "septima", lemma: "septimus", morphologia: "Adjetivo, ablativo, singular, femenino", syntaxis: "Modificador", translatio: { es: "séptima", en: "seventh", zh: "時" } },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "hasta", en: "to", zh: "戰到" } },
                            { textus: "uesperum", lemma: "uesper", morphologia: "Sustantivo, acusativo, singular, masculino", syntaxis: "C. preposicional", translatio: { es: "el atardecer", en: "evening", zh: "黃昏" } },
                            { textus: "pugnatum", lemma: "pugno", morphologia: "Verbo, participio, perfecto, pasivo, nominativo, singular, neutro", syntaxis: "Verbo (impersonal)", translatio: { es: "se luchó", en: "it was fought", zh: "" } },
                            { textus: "sit", lemma: "sum", morphologia: "Verbo, 3ª p, singular, presente, subjuntivo", syntaxis: "Verbo (de subordinada)", translatio: { es: "", en: "", zh: "" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "auersum", lemma: "auerto", morphologia: "Verbo, participio, perfecto, pasivo, acusativo, singular, masculino", syntaxis: "Predicativo del O.D.", translatio: { es: "de espaldas", en: "turned away", zh: "轉身" } },
                            { textus: "hostem", lemma: "hostis", morphologia: "Sustantivo, acusativo, singular, masculino", syntaxis: "Objeto Directo", translatio: { es: "a un enemigo", en: "an enemy", zh: "的敵人" } },
                            { textus: "uidere", lemma: "uideo", morphologia: "Verbo, infinitivo, presente, activo", syntaxis: "Infinitivo (complemento de potuit)", translatio: { es: "ver", en: "to see", zh: "看見" } },
                            { textus: "nemo", lemma: "nemo", morphologia: "Pronombre, nominativo, singular", syntaxis: "Sujeto", translatio: { es: "nadie", en: "no one", zh: "沒有人能" } },
                            { textus: "potuit", lemma: "possum", morphologia: "Verbo, 3ª p, singular, perfecto, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "pudo", en: "was able", zh: "" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Oración principal ('nemo potuit...') con una cláusula 'cum' concesiva insertada ('cum... pugnatum sit').",
                        notae: "La 'hora séptima' para los romanos correspondía aproximadamente a la 1 de la tarde. Este elogio a la valentía del enemigo engrandece, por supuesto, la propia victoria de César.",
                        translationes: {
                            es: "Pues en toda esta batalla, aunque se luchó desde la hora séptima hasta el atardecer, nadie pudo ver a un enemigo de espaldas.",
                            en: "For in this whole battle, although it was fought from the seventh hour until evening, no one was able to see an enemy turned away (in flight).",
                            zh: "因為在整場戰鬥中，儘管從第七時戰到黃昏，沒有人能看見一個轉身逃跑的敵人。"
                        }
                    },
                    {
                        id_orationis: 'o4',
                        original_lat: "Ad multam noctem etiam ad impedimenta pugnatum est, propterea quod pro uallo carros obiecerant et loco superiore in nostros uenientes tela coniciebant, et non nulli inter carros rotasque mataras ac tragulas subiciebant nostrosque uulnerabant.",
                        verba: [
                            { textus: "Ad", lemma: "ad", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "hasta", en: "until", zh: "直到" } },
                            { textus: "multam", lemma: "multus", morphologia: "Adjetivo, acusativo, singular, femenino", syntaxis: "Modificador", translatio: { es: "bien entrada", en: "late", zh: "深夜" } },
                            { textus: "noctem", lemma: "nox", morphologia: "Sustantivo, acusativo, singular, femenino", syntaxis: "C. preposicional", translatio: { es: "la noche", en: "into the night", zh: "" } },
                            { textus: "etiam", lemma: "etiam", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "incluso", en: "even", zh: "在" } },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "junto a", en: "at", zh: "輜重處" } },
                            { textus: "impedimenta", lemma: "impedimentum", morphologia: "Sustantivo, acusativo, plural, neutro", syntaxis: "C. preposicional", translatio: { es: "los bagajes", en: "the baggage", zh: "的戰鬥" } },
                            { textus: "pugnatum", lemma: "pugno", morphologia: "Verbo, participio, perfecto, pasivo, nominativo, singular, neutro", syntaxis: "Verbo (impersonal)", translatio: { es: "se luchó", en: "it was fought", zh: "也" } },
                            { textus: "est", lemma: "sum", morphologia: "Verbo, 3ª p, singular, presente, indicativo", syntaxis: "Verbo (auxiliar)", translatio: { es: "", en: "", zh: "持續著" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "propterea", lemma: "propterea", morphologia: "Adverbio", syntaxis: "Correlativo", translatio: { es: "por el hecho", en: "for the reason", zh: "原因是" } },
                            { textus: "quod", lemma: "quod", morphologia: "Conjunción", syntaxis: "Nexo (causal)", translatio: { es: "de que", en: "that", zh: "" } },
                            { textus: "pro", lemma: "pro", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "a modo de", en: "as a", zh: "他們" } },
                            { textus: "uallo", lemma: "uallum", morphologia: "Sustantivo, ablativo, singular, neutro", syntaxis: "C. preposicional", translatio: { es: "empalizada", en: "rampart", zh: "用車輛" } },
                            { textus: "carros", lemma: "carrus", morphologia: "Sustantivo, acusativo, plural, masculino", syntaxis: "Objeto Directo", translatio: { es: "los carros", en: "their carts", zh: "充當" } },
                            { textus: "obiecerant", lemma: "obicio", morphologia: "Verbo, 3ª p, plural, pluscuamperfecto, indicativo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "habían colocado", en: "they had placed", zh: "防禦工事" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "並" } },
                            { textus: "loco", lemma: "locus", morphologia: "Sustantivo, ablativo, singular, masculino", syntaxis: "C.C. de Lugar (desde donde)", translatio: { es: "desde una posición", en: "from a higher position", zh: "從" } },
                            { textus: "superiore", lemma: "superior", morphologia: "Adjetivo, ablativo, singular, masculino, comparativo", syntaxis: "Modificador", translatio: { es: "más elevada", en: "", zh: "高處" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "contra", en: "at", zh: "向" } },
                            { textus: "nostros", lemma: "noster", morphologia: "Pronombre, acusativo, plural, masculino", syntaxis: "C. preposicional", translatio: { es: "los nuestros", en: "our men", zh: "我方" } },
                            { textus: "uenientes", lemma: "uenio", morphologia: "Verbo, participio, presente, activo, acusativo, plural, masculino", syntaxis: "Participio concertado", translatio: { es: "que se acercaban", en: "as they approached", zh: "前來的士兵" } },
                            { textus: "tela", lemma: "telum", morphologia: "Sustantivo, acusativo, plural, neutro", syntaxis: "Objeto Directo", translatio: { es: "proyectiles", en: "javelins", zh: "投擲" } },
                            { textus: "coniciebant", lemma: "conicio", morphologia: "Verbo, 3ª p, plural, imperfecto, indicativo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "arrojaban", en: "they were hurling", zh: "武器" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "還有些" } },
                            { textus: "non", lemma: "non", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "", en: "", zh: "" } },
                            { textus: "nulli", lemma: "nullus", morphologia: "Adjetivo, nominativo, plural, masculino", syntaxis: "Sujeto", translatio: { es: "algunos", en: "some", zh: "人" } },
                            { textus: "inter", lemma: "inter", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "entre", en: "from between", zh: "從" } },
                            { textus: "carros", lemma: "carrus", morphologia: "Sustantivo, acusativo, plural, masculino", syntaxis: "C. preposicional", translatio: { es: "los carros", en: "the carts", zh: "車輛" } },
                            { textus: "rotasque", lemma: "rotaque", morphologia: "Sustantivo y conjunción, acusativo, plural, femenino", syntaxis: "C. preposicional", translatio: { es: "y las ruedas", en: "and wheels", zh: "和輪子之間" } },
                            { textus: "mataras", lemma: "matara", morphologia: "Sustantivo, acusativo, plural, femenino", syntaxis: "Objeto Directo", translatio: { es: "picas", en: "pikes", zh: "刺出" } },
                            { textus: "ac", lemma: "ac", morphologia: "Conjunción", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "和" } },
                            { textus: "tragulas", lemma: "tragula", morphologia: "Sustantivo, acusativo, plural, femenino", syntaxis: "Objeto Directo", translatio: { es: "jabalinas", en: "javelins", zh: "標槍" } },
                            { textus: "subiciebant", lemma: "subicio", morphologia: "Verbo, 3ª p, plural, imperfecto, indicativo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "lanzaban desde abajo", en: "they were thrusting", zh: "" } },
                            { textus: "nostrosque", lemma: "nosterque", morphologia: "Pronombre y conjunción, acusativo, plural, masculino", syntaxis: "Objeto Directo", translatio: { es: "y a los nuestros", en: "and our men", zh: "傷害我方士兵" } },
                            { textus: "uulnerabant", lemma: "uulnero", morphologia: "Verbo, 3ª p, plural, imperfecto, indicativo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "herían", en: "they were wounding", zh: "" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Oración principal impersonal ('pugnatum est') seguida de una larga cláusula causal ('propterea quod...') con varios verbos coordinados que describen la defensa de los helvecios.",
                        notae: "Los carros formaban una 'laager' o fortaleza de carros, una táctica defensiva común entre los pueblos migratorios.",
                        translationes: {
                            es: "Se luchó incluso junto a los bagajes hasta bien entrada la noche, por el hecho de que habían colocado los carros a modo de empalizada y desde una posición más elevada arrojaban proyectiles contra los nuestros que se acercaban, y algunos, entre los carros y las ruedas, lanzaban picas y jabalinas desde abajo y herían a los nuestros.",
                            en: "It was fought even at the baggage train until late into the night, for the reason that they had placed their carts as a rampart and from a higher position were hurling javelins at our men as they approached, and some, from between the carts and wheels, were thrusting pikes and javelins and were wounding our men.",
                            zh: "直到深夜，在輜重處的戰鬥也持續著，原因是他們用車輛充當防禦工事，並從高處向我方前來的士兵投擲武器，還有些人從車輛和輪子之間刺出長矛和標槍，傷害我方士兵。"
                        }
                    },
                    {
                        id_orationis: 'o5',
                        original_lat: "Diu cum esset pugnatum, impedimentis castrisque nostri potiti sunt.",
                        verba: [
                            { textus: "Diu", lemma: "diu", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "largo tiempo", en: "for a long time", zh: "在長時間" } },
                            { textus: "cum", lemma: "cum", morphologia: "Conjunción", syntaxis: "Nexo (Cum histórico)", translatio: { es: "tras", en: "since", zh: "戰鬥後" } },
                            { textus: "esset", lemma: "sum", morphologia: "Verbo, 3ª p, singular, imperfecto, subjuntivo", syntaxis: "Verbo (de subordinada)", translatio: { es: "haberse", en: "it had been", zh: "" } },
                            { textus: "pugnatum", lemma: "pugno", morphologia: "Verbo, participio, perfecto, pasivo, nominativo, singular, neutro", syntaxis: "Verbo (impersonal)", translatio: { es: "luchado", en: "fought", zh: "" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "impedimentis", lemma: "impedimentum", morphologia: "Sustantivo, ablativo, plural, neutro", syntaxis: "Complemento de potiti sunt", translatio: { es: "de los bagajes", en: "of the baggage", zh: "輜重" } },
                            { textus: "castrisque", lemma: "castrumque", morphologia: "Sustantivo y conjunción, ablativo, plural, neutro", syntaxis: "Complemento de potiti sunt", translatio: { es: "y del campamento", en: "and the camp", zh: "和營地" } },
                            { textus: "nostri", lemma: "noster", morphologia: "Pronombre, nominativo, plural, masculino", syntaxis: "Sujeto", translatio: { es: "los nuestros", en: "our men", zh: "我方人員" } },
                            { textus: "potiti", lemma: "potior", morphologia: "Verbo, participio, perfecto, deponente, nominativo, plural, masculino", syntaxis: "Parte del verbo", translatio: { es: "se apoderaron", en: "gained possession", zh: "佔領了" } },
                            { textus: "sunt", lemma: "sum", morphologia: "Verbo, 3ª p, plural, presente, indicativo", syntaxis: "Verbo (auxiliar)", translatio: { es: "", en: "", zh: "" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Oración compuesta por una cláusula 'cum' histórica y una oración principal.",
                        notae: "El verbo 'potior' (apoderarse de) rige un complemento en ablativo.",
                        translationes: {
                            es: "Tras haberse luchado largo tiempo, los nuestros se apoderaron de los bagajes y del campamento.",
                            en: "When it had been fought for a long time, our men gained possession of the baggage and the camp.",
                            zh: "在長時間戰鬥後，我方人員佔領了敵人的輜重和營地。"
                        }
                    },
                    {
                        id_orationis: 'o6',
                        original_lat: "Ibi Orgetorigis filia atque unus e filiis captus est.",
                        verba: [
                            { textus: "Ibi", lemma: "ibi", morphologia: "Adverbio", syntaxis: "Modificador de lugar", translatio: { es: "Allí", en: "There", zh: "在那裡" } },
                            { textus: "Orgetorigis", lemma: "Orgetorix", morphologia: "Nombre propio, genitivo, singular, masculino", syntaxis: "C. del Nombre", translatio: { es: "de Orgétorix", en: "of Orgetorix", zh: "奧格托里克斯的" } },
                            { textus: "filia", lemma: "filia", morphologia: "Sustantivo, nominativo, singular, femenino", syntaxis: "Sujeto", translatio: { es: "la hija", en: "a daughter", zh: "一個女兒" } },
                            { textus: "atque", lemma: "atque", morphologia: "Conjunción", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "和" } },
                            { textus: "unus", lemma: "unus", morphologia: "Adjetivo numeral, nominativo, singular, masculino", syntaxis: "Sujeto", translatio: { es: "uno", en: "one", zh: "一個" } },
                            { textus: "e", lemma: "ex", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "de", en: "of", zh: "" } },
                            { textus: "filiis", lemma: "filius", morphologia: "Sustantivo, ablativo, plural, masculino", syntaxis: "C. preposicional", translatio: { es: "sus hijos", en: "his sons", zh: "兒子" } },
                            { textus: "captus", lemma: "capio", morphologia: "Verbo, participio, perfecto, pasivo, nominativo, singular, masculino", syntaxis: "Verbo", translatio: { es: "fue capturado", en: "was captured", zh: "被俘" } },
                            { textus: "est", lemma: "sum", morphologia: "Verbo, 3ª p, singular, presente, indicativo", syntaxis: "Verbo (auxiliar)", translatio: { es: "", en: "", zh: "" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Oración simple pasiva con sujeto compuesto.",
                        notae: "El verbo 'captus est' está en singular, concordando con el elemento más cercano del sujeto compuesto ('unus').",
                        translationes: {
                            es: "Allí, la hija de Orgétorix y uno de sus hijos fue capturado.",
                            en: "There, a daughter of Orgetorix and one of his sons was captured.",
                            zh: "在那裡，奧格托里克斯的一個女兒和一個兒子被俘。"
                        }
                    },
                    {
                        id_orationis: 'o7',
                        original_lat: "Ex eo proelio circiter milia hominum CXXX superfuerunt eaque tota nocte continenter ierunt:",
                        verba: [
                            { textus: "Ex", lemma: "ex", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "de", en: "From", zh: "從" } },
                            { textus: "eo", lemma: "is", morphologia: "Pronombre, ablativo, singular, neutro", syntaxis: "Modificador", translatio: { es: "esa", en: "that", zh: "那場" } },
                            { textus: "proelio", lemma: "proelium", morphologia: "Sustantivo, ablativo, singular, neutro", syntaxis: "C. preposicional", translatio: { es: "batalla", en: "battle", zh: "戰役中" } },
                            { textus: "circiter", lemma: "circiter", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "cerca de", en: "about", zh: "大約" } },
                            { textus: "milia", lemma: "mille", morphologia: "Sustantivo, nominativo, plural, neutro", syntaxis: "Sujeto", translatio: { es: "mil", en: "thousand", zh: "萬" } },
                            { textus: "hominum", lemma: "homo", morphologia: "Sustantivo, genitivo, plural, masculino", syntaxis: "Genitivo partitivo", translatio: { es: "personas", en: "people", zh: "人" } },
                            { textus: "CXXX", lemma: "centum triginta", morphologia: "Adjetivo numeral", syntaxis: "Modificador", translatio: { es: "130", en: "130", zh: "十三" } },
                            { textus: "superfuerunt", lemma: "supersum", morphologia: "Verbo, 3ª p, plural, perfecto, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "sobrevivieron", en: "survived", zh: "倖存下來" } },
                            { textus: "eaque", lemma: "isque", morphologia: "Pronombre y conjunción, nominativo, plural, neutro", syntaxis: "Sujeto", translatio: { es: "y estos", en: "and they", zh: "他們" } },
                            { textus: "tota", lemma: "totus", morphologia: "Adjetivo, ablativo, singular, femenino", syntaxis: "Modificador", translatio: { es: "toda", en: "the whole", zh: "整夜" } },
                            { textus: "nocte", lemma: "nox", morphologia: "Sustantivo, ablativo, singular, femenino", syntaxis: "Ablativo de Tiempo", translatio: { es: "la noche", en: "night", zh: "" } },
                            { textus: "continenter", lemma: "continenter", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "sin interrupción", en: "continuously", zh: "不停地" } },
                            { textus: "ierunt", lemma: "eo", morphologia: "Verbo, 3ª p, plural, perfecto, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "marcharon", en: "they went", zh: "行軍" } },
                            { textus: ":", lemma: ":", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ":", en: ":", zh: "。" } }
                        ],
                        ordo_syntacticus: "Dos oraciones principales coordinadas por '-que'.",
                        notae: "",
                        translationes: {
                            es: "De esa batalla sobrevivieron cerca de 130.000 personas, y estas marcharon sin interrupción toda la noche:",
                            en: "From that battle, about 130 thousand people survived, and they marched continuously the whole night:",
                            zh: "從那場戰役中，大約十三萬人倖存下來，他們整夜不停地行軍。"
                        }
                    },
                    {
                        id_orationis: 'o8',
                        original_lat: "nullam partem noctis itinere intermisso in fines Lingonum die quarto peruenerunt, cum et propter uulnera militum et propter sepulturam occisorum nostri triduum morati eos sequi non potuissent.",
                        verba: [
                            { textus: "nullam", lemma: "nullus", morphologia: "Adjetivo, acusativo, singular, femenino", syntaxis: "Modificador", translatio: { es: "ninguna", en: "no", zh: "沒有" } },
                            { textus: "partem", lemma: "pars", morphologia: "Sustantivo, acusativo, singular, femenino", syntaxis: "Acusativo de duración", translatio: { es: "parte de", en: "part of", zh: "" } },
                            { textus: "noctis", lemma: "nox", morphologia: "Sustantivo, genitivo, singular, femenino", syntaxis: "C. del Nombre", translatio: { es: "la noche", en: "the night", zh: "任何" } },
                            { textus: "itinere", lemma: "iter", morphologia: "Sustantivo, ablativo, singular, neutro", syntaxis: "Sujeto (de ablativo absoluto)", translatio: { es: "la marcha", en: "their journey", zh: "中斷" } },
                            { textus: "intermisso", lemma: "intermitto", morphologia: "Verbo, participio, perfecto, pasivo, ablativo, singular, neutro", syntaxis: "Verbo (de ablativo absoluto)", translatio: { es: "interrumpida", en: "being interrupted", zh: "行程" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "al", en: "into", zh: "在" } },
                            { textus: "fines", lemma: "finis", morphologia: "Sustantivo, acusativo, plural, masculino", syntaxis: "C. preposicional", translatio: { es: "territorio", en: "the territory", zh: "第四天" } },
                            { textus: "Lingonum", lemma: "Lingones", morphologia: "Sustantivo, genitivo, plural, masculino", syntaxis: "C. del Nombre", translatio: { es: "de los lingones", en: "of the Lingones", zh: "到達了" } },
                            { textus: "die", lemma: "dies", morphologia: "Sustantivo, ablativo, singular, masculino", syntaxis: "Ablativo de Tiempo", translatio: { es: "al cuarto día", en: "on the fourth day", zh: "林貢斯的" } },
                            { textus: "quarto", lemma: "quartus", morphologia: "Adjetivo, ablativo, singular, masculino", syntaxis: "Modificador", translatio: { es: "", en: "", zh: "領土" } },
                            { textus: "peruenerunt", lemma: "peruenio", morphologia: "Verbo, 3ª p, plural, perfecto, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "llegaron", en: "they arrived", zh: "" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "cum", lemma: "cum", morphologia: "Conjunción", syntaxis: "Nexo (causal)", translatio: { es: "puesto que", en: "since", zh: "因為" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción", syntaxis: "Nexo (correlativo)", translatio: { es: "tanto", en: "both", zh: "由於" } },
                            { textus: "propter", lemma: "propter", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "por", en: "on account of", zh: "" } },
                            { textus: "uulnera", lemma: "uulnus", morphologia: "Sustantivo, acusativo, plural, neutro", syntaxis: "C. preposicional", translatio: { es: "las heridas", en: "the wounds", zh: "士兵的" } },
                            { textus: "militum", lemma: "miles", morphologia: "Sustantivo, genitivo, plural, masculino", syntaxis: "C. del Nombre", translatio: { es: "de los soldados", en: "of the soldiers", zh: "傷勢" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción", syntaxis: "Nexo (correlativo)", translatio: { es: "como por", en: "and", zh: "和" } },
                            { textus: "propter", lemma: "propter", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "", en: "on account of", zh: "" } },
                            { textus: "sepulturam", lemma: "sepultura", morphologia: "Sustantivo, acusativo, singular, femenino", syntaxis: "C. preposicional", translatio: { es: "la sepultura", en: "the burial", zh: "埋葬" } },
                            { textus: "occisorum", lemma: "occido", morphologia: "Verbo, participio, perfecto, pasivo, genitivo, plural, masculino", syntaxis: "C. del Nombre", translatio: { es: "de los caídos", en: "of the slain", zh: "陣亡者" } },
                            { textus: "nostri", lemma: "noster", morphologia: "Pronombre, nominativo, plural, masculino", syntaxis: "Sujeto", translatio: { es: "los nuestros", en: "our men", zh: "我方人員" } },
                            { textus: "triduum", lemma: "triduum", morphologia: "Sustantivo, acusativo, singular, neutro", syntaxis: "Acusativo de duración", translatio: { es: "tres días", en: "for three days", zh: "耽擱了三天" } },
                            { textus: "morati", lemma: "moror", morphologia: "Verbo, participio, perfecto, deponente, nominativo, plural, masculino", syntaxis: "Participio concertado", translatio: { es: "habiendo tardado", en: "having delayed", zh: "" } },
                            { textus: "eos", lemma: "is", morphologia: "Pronombre, acusativo, plural, masculino", syntaxis: "Objeto Directo", translatio: { es: "a ellos", en: "them", zh: "" } },
                            { textus: "sequi", lemma: "sequor", morphologia: "Verbo, infinitivo, presente, deponente", syntaxis: "Infinitivo (complemento de potuissent)", translatio: { es: "seguirlos", en: "to follow", zh: "追擊他們" } },
                            { textus: "non", lemma: "non", morphologia: "Adverbio", syntaxis: "Negación", translatio: { es: "no", en: "not", zh: "未能" } },
                            { textus: "potuissent", lemma: "possum", morphologia: "Verbo, 3ª p, plural, pluscuamperfecto, subjuntivo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "habían podido", en: "had been able", zh: "" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Oración principal ('peruenerunt') con un ablativo absoluto ('itinere intermisso') y una cláusula 'cum' causal que explica el retraso de los romanos.",
                        notae: "La forma verbal 'potuisset' (singular) no concuerda con el sujeto 'nostri' (plural). La forma correcta sería 'potuissent'. Esto puede deberse a un error de copia en los manuscritos.",
                        translationes: {
                            es: "sin interrumpir la marcha en ninguna parte de la noche, llegaron al cuarto día al territorio de los lingones, puesto que los nuestros, habiendo tardado tres días tanto por las heridas de los soldados como por la sepultura de los caídos, no habían podido seguirlos.",
                            en: "without interrupting their journey for any part of the night, they arrived on the fourth day in the territory of the Lingones, since our men, having delayed for three days on account of both the wounds of the soldiers and the burial of the slain, had not been able to follow them.",
                            zh: "他們夜間的行程沒有任何中斷，在第四天到達了林貢斯的領土，因為我方人員由於士兵的傷勢和埋葬陣亡者而耽擱了三天，未能追擊他們。"
                        }
                    },
                    {
                        id_orationis: 'o9',
                        original_lat: "Caesar ad Lingonas litteras nuntiosque misit, ne eo frumento neue alia re iuuarent:",
                        verba: [
                            { textus: "Caesar", lemma: "Caesar", morphologia: "Sustantivo, nominativo, singular, masculino", syntaxis: "Sujeto", translatio: { es: "César", en: "Caesar", zh: "凱撒" } },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "a", en: "to", zh: "向" } },
                            { textus: "Lingonas", lemma: "Lingones", morphologia: "Sustantivo, acusativo, plural, masculino", syntaxis: "C. preposicional", translatio: { es: "los lingones", en: "the Lingones", zh: "林貢斯人" } },
                            { textus: "litteras", lemma: "littera", morphologia: "Sustantivo, acusativo, plural, femenino", syntaxis: "Objeto Directo", translatio: { es: "cartas", en: "letters", zh: "信件" } },
                            { textus: "nuntiosque", lemma: "nuntiusque", morphologia: "Sustantivo y conjunción, acusativo, plural, masculino", syntaxis: "Objeto Directo", translatio: { es: "y mensajeros", en: "and messengers", zh: "和信使" } },
                            { textus: "misit", lemma: "mitto", morphologia: "Verbo, 3ª p, singular, perfecto, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "envió", en: "sent", zh: "派出" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "ne", lemma: "ne", morphologia: "Conjunción", syntaxis: "Nexo (finalidad negativa)", translatio: { es: "para que no", en: "that they should not", zh: "命令他們不要" } },
                            { textus: "eo", lemma: "is", morphologia: "Pronombre, ablativo, singular, neutro", syntaxis: "Ablativo de medio", translatio: { es: "con grano", en: "with grain", zh: "用糧食" } },
                            { textus: "frumento", lemma: "frumentum", morphologia: "Sustantivo, ablativo, singular, neutro", syntaxis: "Ablativo de medio", translatio: { es: "", en: "", zh: "" } },
                            { textus: "neue", lemma: "neue", morphologia: "Conjunción", syntaxis: "Nexo (finalidad negativa)", translatio: { es: "ni con", en: "or with", zh: "或" } },
                            { textus: "alia", lemma: "alius", morphologia: "Adjetivo, ablativo, singular, femenino", syntaxis: "Modificador", translatio: { es: "otra", en: "any other", zh: "其他" } },
                            { textus: "re", lemma: "res", morphologia: "Sustantivo, ablativo, singular, femenino", syntaxis: "Ablativo de medio", translatio: { es: "cosa", en: "thing", zh: "任何東西" } },
                            { textus: "iuuarent", lemma: "iuuo", morphologia: "Verbo, 3ª p, plural, imperfecto, subjuntivo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "los ayudaran", en: "help them", zh: "幫助他們" } },
                            { textus: ":", lemma: ":", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ":", en: ":", zh: "，" } }
                        ],
                        ordo_syntacticus: "Oración principal ('Caesar... misit') seguida de una cláusula completiva de finalidad negativa ('ne... iuuarent').",
                        notae: "Los 'litterae' (cartas) llevaban el mensaje oficial, los 'nuntii' (mensajeros) podían elaborarlo y negociar.",
                        translationes: {
                            es: "César envió cartas y mensajeros a los lingones, para que no los ayudaran con grano ni con ninguna otra cosa:",
                            en: "Caesar sent letters and messengers to the Lingones, (ordering) that they should not help them with grain or with any other thing:",
                            zh: "凱撒向林貢斯人派出信件和信使，命令他們不要用糧食或其他任何東西幫助赫爾維蒂人，"
                        }
                    },
                    {
                        id_orationis: 'o10',
                        original_lat: "qui si iuuissent, se eodem loco quo Heluetios habiturum.",
                        verba: [
                            { textus: "qui", lemma: "qui", morphologia: "Pronombre relativo (conectivo)", syntaxis: "Sujeto (de iuuissent)", translatio: { es: "si ellos", en: "if they", zh: "如果他們" } },
                            { textus: "si", lemma: "si", morphologia: "Conjunción", syntaxis: "Nexo (condicional)", translatio: { es: "", en: "", zh: "" } },
                            { textus: "iuuissent", lemma: "iuuo", morphologia: "Verbo, 3ª p, plural, pluscuamperfecto, subjuntivo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "los hubieran ayudado", en: "should have helped", zh: "幫助了他們" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "se", lemma: "sui", morphologia: "Pronombre, acusativo, singular", syntaxis: "Sujeto (de infinitiva)", translatio: { es: "él", en: "he", zh: "他" } },
                            { textus: "eodem", lemma: "idem", morphologia: "Adjetivo, ablativo, singular, neutro", syntaxis: "Modificador", translatio: { es: "en el mismo", en: "in the same", zh: "就會將他們" } },
                            { textus: "loco", lemma: "locus", morphologia: "Sustantivo, ablativo, singular, neutro", syntaxis: "Ablativo de modo", translatio: { es: "lugar", en: "place", zh: "" } },
                            { textus: "quo", lemma: "qui", morphologia: "Pronombre relativo, ablativo, singular, masculino", syntaxis: "Término de comparación", translatio: { es: "que", en: "as", zh: "與赫爾維蒂人" } },
                            { textus: "Heluetios", lemma: "Heluetii", morphologia: "Sustantivo, acusativo, plural, masculino", syntaxis: "Objeto Directo", translatio: { es: "a los helvecios", en: "the Helvetii", zh: "" } },
                            { textus: "habiturum", lemma: "habeo", morphologia: "Verbo, participio, futuro, activo, acusativo, singular", syntaxis: "Verbo (de infinitiva)", translatio: { es: "los consideraría", en: "would hold", zh: "同等對待" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Oración condicional en estilo indirecto. Depende de un verbo de decir implícito. La prótasis (condición) está en subjuntivo pluscuamperfecto, y la apódosis (resultado) en infinitivo futuro ('habiturum [esse]').",
                        notae: "'Eodem loco habere' es una locución que significa 'considerar de la misma manera', en este contexto, 'tratar como enemigos'.",
                        translationes: {
                            es: "(advirtiendo que) si los hubieran ayudado, los consideraría en el mismo lugar que a los helvecios.",
                            en: "(warning that) if they should have helped them, he would hold them in the same place as the Helvetii.",
                            zh: "（警告說）如果他們幫助了赫爾維蒂人，他就會將他們與赫爾維蒂人同等對待。"
                        }
                    },
                    {
                        id_orationis: 'o11',
                        original_lat: "Ipse triduo intermisso cum omnibus copiis eos sequi coepit.",
                        verba: [
                            { textus: "Ipse", lemma: "ipse", morphologia: "Pronombre, nominativo, singular, masculino", syntaxis: "Sujeto", translatio: { es: "Él mismo", en: "He himself", zh: "他自己" } },
                            { textus: "triduo", lemma: "triduum", morphologia: "Sustantivo, ablativo, singular, neutro", syntaxis: "Sujeto (de ablativo absoluto)", translatio: { es: "tres días", en: "three days", zh: "三天" } },
                            { textus: "intermisso", lemma: "intermitto", morphologia: "Verbo, participio, perfecto, pasivo, ablativo, singular, neutro", syntaxis: "Verbo (de ablativo absoluto)", translatio: { es: "transcurridos", en: "having passed", zh: "過去後" } },
                            { textus: "cum", lemma: "cum", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "con", en: "with", zh: "率領" } },
                            { textus: "omnibus", lemma: "omnis", morphologia: "Adjetivo, ablativo, plural, femenino", syntaxis: "Modificador", translatio: { es: "todas", en: "all", zh: "所有" } },
                            { textus: "copiis", lemma: "copia", morphologia: "Sustantivo, ablativo, plural, femenino", syntaxis: "C.C. de Compañía", translatio: { es: "sus tropas", en: "his troops", zh: "部隊" } },
                            { textus: "eos", lemma: "is", morphologia: "Pronombre, acusativo, plural, masculino", syntaxis: "Objeto Directo", translatio: { es: "a ellos", en: "them", zh: "" } },
                            { textus: "sequi", lemma: "sequor", morphologia: "Verbo, infinitivo, presente, deponente", syntaxis: "Infinitivo (complemento de coepit)", translatio: { es: "a seguirlos", en: "to follow", zh: "追擊他們" } },
                            { textus: "coepit", lemma: "coepi", morphologia: "Verbo, 3ª p, singular, perfecto, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "comenzó", en: "he began", zh: "開始" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Oración simple con un ablativo absoluto ('triduo intermisso') y un verbo principal que rige un infinitivo.",
                        notae: "",
                        translationes: {
                            es: "Él mismo, transcurridos tres días, comenzó a seguirlos con todas sus tropas.",
                            en: "He himself, after three days had passed, began to follow them with all his troops.",
                            zh: "他自己在三天過去後，率領所有部隊開始追擊他們。"
                        }
                    }
                ]
            }
        ]
    }
};

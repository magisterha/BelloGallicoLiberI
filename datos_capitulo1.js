const corpus = {
    titulus_principalis: "De Bello Gallico, I, 1-4",
    auctor: "C. Iulius Caesar",
    titulus_secundarius: {
        es: "La Conspiración de Orgetórix",
        en: "The Conspiracy of Orgetorix",
        zh: "奧爾格托里克斯的陰謀"
    },
    introductio: {
        es: {
            titulus: "Introducción Contextual (Cap. 1-4)",
            contentus: `<p>Los primeros capítulos de "De Bello Gallico" sientan las bases de toda la obra. César comienza con una descripción geográfica y etnográfica de la Galia, dividiéndola en sus tres partes principales. Inmediatamente después, introduce al personaje catalizador del conflicto: Orgetórix, un noble helvecio cuya ambición por el poder le lleva a organizar una migración masiva de su pueblo.</p><p>Esta sección es crucial, pues no solo presenta a los helvecios como una amenaza que justifica la intervención romana, sino que también revela las tensioniones internas y las rivalidades entre las tribus galas, un factor que César explotará magistralmente a lo largo de sus campañas.</p>`
        },
        en: {
            titulus: "Contextual Introduction (Ch. 1-4)",
            contentus: `<p>The opening chapters of "De Bello Gallico" lay the groundwork for the entire work. Caesar begins with a geographical and ethnographic description of Gaul, dividing it into its three main parts. Immediately after, he introduces the character who catalyzes the conflict: Orgetorix, a Helvetian noble whose ambition for power leads him to organize a mass migration of his people.</p><p>This section is crucial, as it not only presents the Helvetii as a threat justifying Roman intervention but also reveals the internal tensions and rivalries among the Gallic tribes, a factor that Caesar will masterfully exploit throughout his campaigns.</p>`
        },
        zh: {
            titulus: "背景介紹 (1-4章)",
            contentus: `<p>《高盧戰記》的開篇章節為整部著作奠定了基礎。凱撒首先對高盧進行了地理和民族描述，將其劃分為三個主要部分。緊接著，他介紹了引發衝突的關鍵人物：奧爾格托里克斯，一位赫爾維蒂貴族，其對權力的野心促使他組織了整個部落的大規模遷徙。</p><p>這一部分至關重要，因為它不僅將赫爾維蒂人描繪成一個證明羅馬干預正當性的威脅，還揭示了高盧各部落之間的內部緊張和敵對關係——這正是凱撒在其整個戰役中巧妙利用的一個因素。</p>`
        }
    },
    textus: {
        id: 1,
        capitula: [
            {
                id_capituli: 1,
                orationes: [
                    {
                        id_orationis: 'o1',
                        original_lat: "Gallia est omnis diuisa in partes tres, quarum unam incolunt Belgae, aliam Aquitani, tertiam qui ipsorum lingua Celtae, nostra Galli appellantur.",
                        verba: [
                            { textus: "Gallia", lemma: "Gallia", morphologia: "Sust. 1ª dec, F, Nom, Sg", syntaxis: "Sujeto", translatio: { es: "La Galia", en: "Gaul", zh: "高盧" } },
                            { textus: "est", lemma: "sum", morphologia: "Verbo, Pres. Ind, 3ª Sg", syntaxis: "Verbo Copulativo", translatio: { es: "es / está", en: "is", zh: "是" } },
                            { textus: "omnis", lemma: "omnis", morphologia: "Adj. 3ª dec, F, Nom, Sg", syntaxis: "Atributo del sujeto", translatio: { es: "toda", en: "all", zh: "全部的" } },
                            { textus: "diuisa", lemma: "diuido", morphologia: "Participio Perf. Pas, F, Nom, Sg", syntaxis: "Predicativo del Sujeto (forma la voz pasiva perifrática con 'est')", translatio: { es: "dividida", en: "divided", zh: "被劃分的" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición", syntaxis: "Nexo (rige Acusativo)", translatio: { es: "en", en: "into", zh: "成" } },
                            { textus: "partes", lemma: "pars", morphologia: "Sust. 3ª dec, F, Acu, Pl", syntaxis: "Complemento Circunstancial de Dirección (con 'in')", translatio: { es: "partes", en: "parts", zh: "部分" } },
                            { textus: "tres", lemma: "tres", morphologia: "Adj. numeral, F, Acu, Pl", syntaxis: "Atributo de 'partes'", translatio: { es: "tres", en: "three", zh: "三" } },
                            { textus: "quarum", lemma: "qui", morphologia: "Pronombre relativo, F, Gen, Pl", syntaxis: "Complemento del Nombre (de unam, aliam, tertiam)", translatio: { es: "de las cuales", en: "of which", zh: "其中的" } },
                            { textus: "unam", lemma: "unus", morphologia: "Adj. pronominal, F, Acu, Sg", syntaxis: "Objeto Directo", translatio: { es: "una", en: "one", zh: "一個" } },
                            { textus: "incolunt", lemma: "incolo", morphologia: "Verbo, Pres. Ind, 3ª Pl", syntaxis: "Verbo Principal (de la subordinada de relativo)", translatio: { es: "habitan", en: "inhabit", zh: "居住" } },
                            { textus: "Belgae", lemma: "Belgae", morphologia: "Sust. 1ª dec, M, Nom, Pl", syntaxis: "Sujeto (de 'incolunt')", translatio: { es: "los belgas", en: "the Belgae", zh: "比利時人" } },
                            { textus: "aliam", lemma: "alius", morphologia: "Adj. pronominal, F, Acu, Sg", syntaxis: "Objeto Directo (verbo 'incolunt' elidido)", translatio: { es: "otra", en: "another", zh: "另一個" } },
                            { textus: "Aquitani", lemma: "Aquitani", morphologia: "Sust. 2ª dec, M, Nom, Pl", syntaxis: "Sujeto (verbo 'incolunt' elidido)", translatio: { es: "los aquitanos", en: "the Aquitani", zh: "阿基坦人" } },
                            { textus: "tertiam", lemma: "tertius", morphologia: "Adj. pronominal, F, Acu, Sg", syntaxis: "Objeto Directo (verbo elidido, referente a 'ii' o 'illi')", translatio: { es: "la tercera", en: "the third", zh: "第三個" } },
                            { textus: "qui", lemma: "qui", morphologia: "Pronombre relativo, M, Nom, Pl", syntaxis: "Sujeto (de 'appellantur')", translatio: { es: "quienes", en: "those who", zh: "那些人" } },
                            { textus: "ipsorum", lemma: "ipse", morphologia: "Pronombre-Adj. demost, M, Gen, Pl", syntaxis: "Complemento del Nombre (de 'lingua')", translatio: { es: "de ellos mismos / su propia", en: "their own", zh: "他們自己的" } },
                            { textus: "lingua", lemma: "lingua", morphologia: "Sust. 1ª dec, F, Abl, Sg", syntaxis: "Ablativo de Especificación o Respecto", translatio: { es: "en lengua", en: "in language", zh: "用語言" } },
                            { textus: "Celtae", lemma: "Celtae", morphologia: "Sust. 1ª dec, M, Nom, Pl", syntaxis: "Predicativo del Sujeto (de 'qui')", translatio: { es: "celtas", en: "Celts", zh: "凱爾特人" } },
                            { textus: "nostra", lemma: "noster", morphologia: "Adj. posesivo, F, Abl, Sg", syntaxis: "Atributo (de 'lingua', elidido)", translatio: { es: "en nuestra", en: "in our", zh: "用我們的" } },
                            { textus: "Galli", lemma: "Galli", morphologia: "Sust. 2ª dec, M, Nom, Pl", syntaxis: "Predicativo del Sujeto (de 'qui')", translatio: { es: "galos", en: "Gauls", zh: "高盧人" } },
                            { textus: "appellantur", lemma: "appello", morphologia: "Verbo, Pres. Ind. Pas, 3ª Pl", syntaxis: "Verbo Principal (de la subordinada de relativo)", translatio: { es: "son llamados", en: "are called", zh: "被稱為" } }
                        ],
                        ordo_syntacticus: "[Gallia (S) est omnis diuisa (V)] [in partes tres (CC)], quarum [unam (OD) incolunt (V) Belgae (S)], [aliam (OD) (incolunt) Aquitani (S)], [tertiam (OD) (incolunt ii) [qui (S) appellantur (V) Celtae (PVO) (lingua ipsorum) / Galli (PVO) (nostra lingua)]]].",
                        translationes: {
                            es: "Toda la Galia está dividida en tres partes, de las cuales una la habitan los belgas, otra los aquitanos, y la tercera aquellos que en su propia lengua se llaman celtas y en la nuestra, galos.",
                            en: "All Gaul is divided into three parts, one of which the Belgae inhabit, another the Aquitani, the third those who in their own language are called Celts, in ours, Gauls.",
                            zh: "高盧全境分為三個部分，其中一部分由比利時人居住，另一部分由阿基坦人居住，第三部分由那些在自己的語言中稱為凱爾特人，在我們的語言中稱為高盧人的人居住。"
                        }
                    },
                    {
                        id_orationis: 'o2',
                        original_lat: "Hi omnes lingua, institutis, legibus inter se differunt.",
                        verba: [
                            { textus: "Hi", lemma: "hic", morphologia: "Pronombre demost, M, Nom, Pl", syntaxis: "Sujeto", translatio: { es: "Estos", en: "These", zh: "這些人" } },
                            { textus: "omnes", lemma: "omnis", morphologia: "Adj. 3ª dec, M, Nom, Pl", syntaxis: "Atributo de 'Hi'", translatio: { es: "todos", en: "all", zh: "全部" } },
                            { textus: "lingua", lemma: "lingua", morphologia: "Sust. 1ª dec, F, Abl, Sg", syntaxis: "Ablativo de Especificación", translatio: { es: "en lengua", en: "in language", zh: "在語言上" } },
                            { textus: "institutis", lemma: "institutum", morphologia: "Sust. 2ª dec, N, Abl, Pl", syntaxis: "Ablativo de Especificación", translatio: { es: "en instituciones", en: "in institutions", zh: "在制度上" } },
                            { textus: "legibus", lemma: "lex", morphologia: "Sust. 3ª dec, F, Abl, Pl", syntaxis: "Ablativo de Especificación", translatio: { es: "en leyes", en: "in laws", zh: "在法律上" } },
                            { textus: "inter", lemma: "inter", morphologia: "Preposición", syntaxis: "Nexo (rige Acusativo)", translatio: { es: "entre", en: "from", zh: "之間" } },
                            { textus: "se", lemma: "sui", morphologia: "Pronombre reflexivo, Acu, Pl", syntaxis: "Complemento de 'inter'", translatio: { es: "sí", en: "each other", zh: "彼此" } },
                            { textus: "differunt", lemma: "differo", morphologia: "Verbo, Pres. Ind, 3ª Pl", syntaxis: "Verbo Principal", translatio: { es: "se diferencian", en: "differ", zh: "不同" } }
                        ],
                        ordo_syntacticus: "[Hi omnes (S) differunt (V) inter se (CC)] [lingua, institutis, legibus (CC de Especificación)].",
                        translationes: {
                            es: "Todos estos se diferencian entre sí por la lengua, las instituciones y las leyes.",
                            en: "All these differ from each other in language, institutions, and laws.",
                            zh: "所有這些民族在語言、制度和法律方面彼此不同。"
                        }
                    },
                    {
                        id_orationis: 'o3',
                        original_lat: "Gallos ab Aquitanis Garumna flumen, a Belgis Matrona et Sequana diuidit.",
                        verba: [
                            { textus: "Gallos", lemma: "Galli", morphologia: "Sust. 2ª dec, M, Acu, Pl", syntaxis: "Objeto Directo", translatio: { es: "a los galos", en: "the Gauls", zh: "高盧人(賓格)" } },
                            { textus: "ab", lemma: "ab", morphologia: "Preposición", syntaxis: "Nexo (rige Ablativo)", translatio: { es: "de", en: "from", zh: "從" } },
                            { textus: "Aquitanis", lemma: "Aquitani", morphologia: "Sust. 2ª dec, M, Abl, Pl", syntaxis: "Complemento Agente o de Separación", translatio: { es: "los aquitanos", en: "the Aquitani", zh: "阿基坦人" } },
                            { textus: "Garumna", lemma: "Garumna", morphologia: "Sust. 1ª dec, M, Nom, Sg", syntaxis: "Sujeto (en aposición a 'flumen')", translatio: { es: "el Garona", en: "the Garonne", zh: "加龍" } },
                            { textus: "flumen", lemma: "flumen", morphologia: "Sust. 3ª dec, N, Nom, Sg", syntaxis: "Sujeto", translatio: { es: "río", en: "river", zh: "河" } },
                            { textus: "a", lemma: "a", morphologia: "Preposición", syntaxis: "Nexo (rige Ablativo)", translatio: { es: "de", en: "from", zh: "從" } },
                            { textus: "Belgis", lemma: "Belgae", morphologia: "Sust. 1ª dec, M, Abl, Pl", syntaxis: "Complemento Agente o de Separación", translatio: { es: "los belgas", en: "the Belgae", zh: "比利時人" } },
                            { textus: "Matrona", lemma: "Matrona", morphologia: "Sust. 1ª dec, M, Nom, Sg", syntaxis: "Sujeto", translatio: { es: "el Marne", en: "the Marne", zh: "馬恩" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "和" } },
                            { textus: "Sequana", lemma: "Sequana", morphologia: "Sust. 1ª dec, M, Nom, Sg", syntaxis: "Sujeto", translatio: { es: "el Sena", en: "the Seine", zh: "塞納" } },
                            { textus: "diuidit", lemma: "diuido", morphologia: "Verbo, Pres. Ind, 3ª Sg", syntaxis: "Verbo Principal", translatio: { es: "divide", en: "separates", zh: "分開" } }
                        ],
                        ordo_syntacticus: "[Garumna flumen (S) diuidit (V) Gallos (OD) ab Aquitanis (C. Agente)], [(et) Matrona et Sequana (S) (diuidunt) (Gallos) a Belgis (C. Agente)].",
                        notae: "El verbo 'diuidit' está en singular concertando con el sujeto más cercano 'Garumna flumen', pero se entiende que 'Matrona et Sequana' realizan la misma acción.",
                        translationes: {
                            es: "A los galos los separa de los aquitanos el río Garona, y de los belgas, el Marne y el Sena.",
                            en: "The river Garonne separates the Gauls from the Aquitani; the Marne and the Seine separate them from the Belgae.",
                            zh: "加龍河將高盧人與阿基坦人分開，馬恩河和塞納河將他們與比利時人分開。"
                        }
                    },
                    {
                        id_orationis: 'o4',
                        original_lat: "Horum omnium fortissimi sunt Belgae, propterea quod a cultu atque humanitate prouinciae longissime absunt, minimeque ad eos mercatores saepe commeant atque ea quae ad effeminandos animos pertinent inportant, proximique sunt Germanis, qui trans Rhenum incolunt, quibuscum continenter bellum gerunt.",
                        notae: "Esta es una oración compleja con múltiples cláusulas subordinadas. La analizaré en segmentos lógicos dentro del array 'verba'.",
                        verba: [
                            { textus: "Horum", lemma: "hic", morphologia: "Pronombre demost, M, Gen, Pl", syntaxis: "Complemento Partitivo de 'fortissimi'", translatio: { es: "De estos", en: "Of these", zh: "在這些人中" } },
                            { textus: "omnium", lemma: "omnis", morphologia: "Adj. 3ª dec, M, Gen, Pl", syntaxis: "Complemento Partitivo de 'fortissimi'", translatio: { es: "de todos", en: "of all", zh: "所有的" } },
                            { textus: "fortissimi", lemma: "fortis", morphologia: "Adj. 3ª dec, M, Nom, Pl, Superlativo", syntaxis: "Atributo o Predicativo del Sujeto", translatio: { es: "los más fuertes", en: "the bravest", zh: "最勇敢的" } },
                            { textus: "sunt", lemma: "sum", morphologia: "Verbo, Pres. Ind, 3ª Pl", syntaxis: "Verbo Copulativo", translatio: { es: "son", en: "are", zh: "是" } },
                            { textus: "Belgae", lemma: "Belgae", morphologia: "Sust. 1ª dec, M, Nom, Pl", syntaxis: "Sujeto", translatio: { es: "los belgas", en: "the Belgae", zh: "比利時人" } },
                            { textus: "propterea", lemma: "propterea", morphologia: "Adverbio", syntaxis: "Nexo causal", translatio: { es: "por esto", en: "for this reason", zh: "因為這個緣故" } },
                            { textus: "quod", lemma: "quod", morphologia: "Conjunción subordinante", syntaxis: "Nexo causal", translatio: { es: "porque", en: "because", zh: "因為" } },
                            { textus: "a", lemma: "a", morphologia: "Preposición", syntaxis: "Nexo (rige Ablativo)", translatio: { es: "de", en: "from", zh: "從" } },
                            { textus: "cultu", lemma: "cultus", morphologia: "Sust. 4ª dec, M, Abl, Sg", syntaxis: "Complemento de Separación", translatio: { es: "la cultura", en: "the civilization", zh: "文明" } },
                            { textus: "atque", lemma: "atque", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "以及" } },
                            { textus: "humanitate", lemma: "humanitas", morphologia: "Sust. 3ª dec, F, Abl, Sg", syntaxis: "Complemento de Separación", translatio: { es: "la civilización", en: "refinement", zh: "教化" } },
                            { textus: "prouinciae", lemma: "prouincia", morphologia: "Sust. 1ª dec, F, Gen, Sg", syntaxis: "Complemento del Nombre", translatio: { es: "de la provincia", en: "of the Province", zh: "省的" } },
                            { textus: "longissime", lemma: "longe", morphologia: "Adverbio, Superlativo", syntaxis: "Complemento Circunstancial de Lugar", translatio: { es: "muy lejos", en: "furthest", zh: "最遠地" } },
                            { textus: "absunt", lemma: "absum", morphologia: "Verbo, Pres. Ind, 3ª Pl", syntaxis: "Verbo (subordinada causal)", translatio: { es: "están alejados", en: "they are", zh: "他們遠離" } },
                            { textus: "minimeque", lemma: "minime", morphologia: "Adverbio, Superlativo + '-que' enclítico", syntaxis: "Complemento Circunstancial de Cantidad / Nexo", translatio: { es: "y muy poco", en: "and least", zh: "並且最少地" } },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición", syntaxis: "Nexo (rige Acusativo)", translatio: { es: "a", en: "to", zh: "向" } },
                            { textus: "eos", lemma: "is", morphologia: "Pronombre personal, M, Acu, Pl", syntaxis: "Complemento de Dirección", translatio: { es: "ellos", en: "them", zh: "他們" } },
                            { textus: "mercatores", lemma: "mercator", morphologia: "Sust. 3ª dec, M, Nom, Pl", syntaxis: "Sujeto", translatio: { es: "los mercaderes", en: "merchants", zh: "商人" } },
                            { textus: "saepe", lemma: "saepe", morphologia: "Adverbio", syntaxis: "Complemento Circunstancial de Tiempo/Frecuencia", translatio: { es: "a menudo", en: "frequently", zh: "經常" } },
                            { textus: "commeant", lemma: "commeo", morphologia: "Verbo, Pres. Ind, 3ª Pl", syntaxis: "Verbo", translatio: { es: "visitan", en: "resort", zh: "往來" } },
                            { textus: "atque", lemma: "atque", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "並且" } },
                            { textus: "ea", lemma: "is", morphologia: "Pronombre, N, Acu, Pl", syntaxis: "Objeto Directo", translatio: { es: "aquellas cosas", en: "those things", zh: "那些東西" } },
                            { textus: "quae", lemma: "qui", morphologia: "Pronombre relativo, N, Nom/Acu, Pl", syntaxis: "Sujeto (de 'pertinent')", translatio: { es: "que", en: "which", zh: "它們" } },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición", syntaxis: "Nexo (rige Acusativo)", translatio: { es: "para", en: "to", zh: "對於" } },
                            { textus: "effeminandos", lemma: "effemino", morphologia: "Gerundivo, M, Acu, Pl", syntaxis: "Atributo de 'animos' (con valor final)", translatio: { es: "afeminar", en: "effeminate", zh: "使...軟弱" } },
                            { textus: "animos", lemma: "animus", morphologia: "Sust. 2ª dec, M, Acu, Pl", syntaxis: "Complemento de 'ad'", translatio: { es: "los ánimos", en: "the mind", zh: "心靈" } },
                            { textus: "pertinent", lemma: "pertineo", morphologia: "Verbo, Pres. Ind, 3ª Pl", syntaxis: "Verbo (subordinada de relativo)", translatio: { es: "tienden a", en: "tend", zh: "有助於" } },
                            { textus: "inportant", lemma: "inporto", morphologia: "Verbo, Pres. Ind, 3ª Pl", syntaxis: "Verbo", translatio: { es: "llevan", en: "import", zh: "引進" } },
                            { textus: "proximique", lemma: "proximus", morphologia: "Adj. 1ª/2ª dec, M, Nom, Pl, Superlativo + '-que' enclítico", syntaxis: "Atributo o Predicativo del Sujeto / Nexo", translatio: { es: "y los más próximos", en: "and they are the nearest", zh: "並且最接近的" } },
                            { textus: "sunt", lemma: "sum", morphologia: "Verbo, Pres. Ind, 3ª Pl", syntaxis: "Verbo Copulativo", translatio: { es: "son", en: "are", zh: "是" } },
                            { textus: "Germanis", lemma: "Germani", morphologia: "Sust. 2ª dec, M, Dat, Pl", syntaxis: "Complemento del Adjetivo 'proximi'", translatio: { es: "a los germanos", en: "to the Germans", zh: "日耳曼人" } },
                            { textus: "qui", lemma: "qui", morphologia: "Pronombre relativo, M, Nom, Pl", syntaxis: "Sujeto", translatio: { es: "quienes", en: "who", zh: "他們" } },
                            { textus: "trans", lemma: "trans", morphologia: "Preposición", syntaxis: "Nexo (rige Acusativo)", translatio: { es: "al otro lado de", en: "beyond", zh: "在...對面" } },
                            { textus: "Rhenum", lemma: "Rhenus", morphologia: "Sust. 2ª dec, M, Acu, Sg", syntaxis: "Complemento de 'trans'", translatio: { es: "el Rin", en: "the Rhine", zh: "萊茵河" } },
                            { textus: "incolunt", lemma: "incolo", morphologia: "Verbo, Pres. Ind, 3ª Pl", syntaxis: "Verbo (subordinada de relativo)", translatio: { es: "habitan", en: "dwell", zh: "居住" } },
                            { textus: "quibuscum", lemma: "qui + cum", morphologia: "Pronombre relativo, M, Abl, Pl + prep. 'cum'", syntaxis: "Complemento Circunstancial de Compañía", translatio: { es: "con quienes", en: "with whom", zh: "與他們" } },
                            { textus: "continenter", lemma: "continenter", morphologia: "Adverbio", syntaxis: "Complemento Circunstancial de Modo/Tiempo", translatio: { es: "continuamente", en: "continually", zh: "持續地" } },
                            { textus: "bellum", lemma: "bellum", morphologia: "Sust. 2ª dec, N, Acu, Sg", syntaxis: "Objeto Directo", translatio: { es: "la guerra", en: "war", zh: "戰爭" } },
                            { textus: "gerunt", lemma: "gero", morphologia: "Verbo, Pres. Ind, 3ª Pl", syntaxis: "Verbo", translatio: { es: "hacen", en: "they wage", zh: "進行" } }
                        ],
                        ordo_syntacticus: "Complejo. [Belgae (S) sunt fortissimi (Atributo) horum omnium (CN Partitivo)], [propterea quod (Nexo Causal)...]",
                        translationes: {
                            es: "De todos estos, los más fuertes son los belgas, porque están muy alejados del refinamiento y la civilización de la provincia, y muy raras veces los mercaderes llegan hasta ellos y les llevan las cosas que contribuyen a afeminar los ánimos, y son los más próximos a los germanos, que habitan al otro lado del Rin, con quienes continuamente hacen la guerra.",
                            en: "Of all these, the bravest are the Belgae, because they are furthest from the civilization and refinement of the Province, and merchants least frequently resort to them and import those things which tend to effeminate the mind, and they are the nearest to the Germans, who dwell beyond the Rhine, with whom they are continually waging war.",
                            zh: "在所有這些民族中，比利時人最為勇敢，因為他們距離羅馬行省的文明和教化最遠，商人最少去他們那裡，帶去的那些足以軟化人心的東西也最少，而且他們最靠近居住在萊茵河對岸的日耳曼人，並與他們持續作戰。"
                        }
                    },
                    {
                        id_orationis: 'o5',
                        original_lat: "Qua de causa Heluetii quoque reliquos Gallos uirtute praecedunt, quod fere cotidianis proeliis cum Germanis contendunt, cum aut suis finibus eos prohibent, aut ipsi in eorum finibus bellum gerunt.",
                        verba: [
                            { textus: "Qua", lemma: "qui", morphologia: "Pronombre-Adj. relativo, F, Abl, Sg", syntaxis: "Atributo de 'causa'", translatio: { es: "Por la cual", en: "For which", zh: "為此" } },
                            { textus: "de", lemma: "de", morphologia: "Preposición", syntaxis: "Nexo (rige Ablativo)", translatio: { es: "de / por", en: "from / for", zh: "關於" } },
                            { textus: "causa", lemma: "causa", morphologia: "Sust. 1ª dec, F, Abl, Sg", syntaxis: "Complemento Circunstancial de Causa", translatio: { es: "razón", en: "reason", zh: "原因" } },
                            { textus: "Heluetii", lemma: "Heluetii", morphologia: "Sust. 2ª dec, M, Nom, Pl", syntaxis: "Sujeto", translatio: { es: "los helvecios", en: "the Helvetii", zh: "赫爾維蒂人" } },
                            { textus: "quoque", lemma: "quoque", morphologia: "Adverbio", syntaxis: "Modificador (también)", translatio: { es: "también", en: "also", zh: "也" } },
                            { textus: "reliquos", lemma: "reliquus", morphologia: "Adj. 1ª/2ª dec, M, Acu, Pl", syntaxis: "Atributo de 'Gallos'", translatio: { es: "a los restantes", en: "the rest of the", zh: "其餘的" } },
                            { textus: "Gallos", lemma: "Galli", morphologia: "Sust. 2ª dec, M, Acu, Pl", syntaxis: "Objeto Directo", translatio: { es: "galos", en: "Gauls", zh: "高盧人" } },
                            { textus: "uirtute", lemma: "uirtus", morphologia: "Sust. 3ª dec, F, Abl, Sg", syntaxis: "Ablativo de Especificación", translatio: { es: "en valor", en: "in valor", zh: "在勇氣上" } },
                            { textus: "praecedunt", lemma: "praecedo", morphologia: "Verbo, Pres. Ind, 3ª Pl", syntaxis: "Verbo Principal", translatio: { es: "aventajan", en: "surpass", zh: "超越" } },
                            { textus: "quod", lemma: "quod", morphologia: "Conjunción subordinante", syntaxis: "Nexo causal", translatio: { es: "porque", en: "because", zh: "因為" } },
                            { textus: "fere", lemma: "fere", morphologia: "Adverbio", syntaxis: "Modificador (casi)", translatio: { es: "casi", en: "almost", zh: "幾乎" } },
                            { textus: "cotidianis", lemma: "cotidianus", morphologia: "Adj. 1ª/2ª dec, N, Abl, Pl", syntaxis: "Atributo de 'proeliis'", translatio: { es: "diarias", en: "daily", zh: "每日的" } },
                            { textus: "proeliis", lemma: "proelium", morphologia: "Sust. 2ª dec, N, Abl, Pl", syntaxis: "Ablativo Instrumental o de Modo", translatio: { es: "en batallas", en: "in battles", zh: "在戰鬥中" } },
                            { textus: "cum", lemma: "cum", morphologia: "Preposición", syntaxis: "Nexo (rige Ablativo)", translatio: { es: "con", en: "with", zh: "與" } },
                            { textus: "Germanis", lemma: "Germani", morphologia: "Sust. 2ª dec, M, Abl, Pl", syntaxis: "Complemento de Compañía", translatio: { es: "los germanos", en: "the Germans", zh: "日耳曼人" } },
                            { textus: "contendunt", lemma: "contendo", morphologia: "Verbo, Pres. Ind, 3ª Pl", syntaxis: "Verbo (subordinada causal)", translatio: { es: "combaten", en: "they contend", zh: "鬥爭" } },
                            { textus: "cum", lemma: "cum", morphologia: "Conjunción subordinante", syntaxis: "Nexo temporal/causal", translatio: { es: "cuando", en: "when", zh: "當" } },
                            { textus: "aut", lemma: "aut", morphologia: "Conjunción disyuntiva", syntaxis: "Nexo", translatio: { es: "o", en: "either", zh: "或者" } },
                            { textus: "suis", lemma: "suus", morphologia: "Adj. posesivo, M, Abl, Pl", syntaxis: "Atributo de 'finibus'", translatio: { es: "de sus propias", en: "from their own", zh: "從他們自己的" } },
                            { textus: "finibus", lemma: "finis", morphologia: "Sust. 3ª dec, M, Abl, Pl", syntaxis: "Ablativo de Separación", translatio: { es: "fronteras", en: "territories", zh: "領土" } },
                            { textus: "eos", lemma: "is", morphologia: "Pronombre, M, Acu, Pl", syntaxis: "Objeto Directo", translatio: { es: "a ellos", en: "them", zh: "他們" } },
                            { textus: "prohibent", lemma: "prohibeo", morphologia: "Verbo, Pres. Ind, 3ª Pl", syntaxis: "Verbo (subordinada)", translatio: { es: "alejan", en: "they repel", zh: "阻止" } },
                            { textus: "aut", lemma: "aut", morphologia: "Conjunción disyuntiva", syntaxis: "Nexo", translatio: { es: "o", en: "or", zh: "或者" } },
                            { textus: "ipsi", lemma: "ipse", morphologia: "Pronombre-Adj. demost, M, Nom, Pl", syntaxis: "Sujeto (Heluetii)", translatio: { es: "ellos mismos", en: "themselves", zh: "他們自己" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición", syntaxis: "Nexo (rige Ablativo)", translatio: { es: "en", en: "on", zh: "在" } },
                            { textus: "eorum", lemma: "is", morphologia: "Pronombre, M, Gen, Pl", syntaxis: "Complemento del Nombre (de 'finibus')", translatio: { es: "de ellos", en: "their", zh: "他們的" } },
                            { textus: "finibus", lemma: "finis", morphologia: "Sust. 3ª dec, M, Abl, Pl", syntaxis: "Complemento Circunstancial de Lugar", translatio: { es: "las fronteras", en: "frontiers", zh: "邊界上" } },
                            { textus: "bellum", lemma: "bellum", morphologia: "Sust. 2ª dec, N, Acu, Sg", syntaxis: "Objeto Directo", translatio: { es: "la guerra", en: "war", zh: "戰爭" } },
                            { textus: "gerunt", lemma: "gero", morphologia: "Verbo, Pres. Ind, 3ª Pl", syntaxis: "Verbo (subordinada)", translatio: { es: "hacen", en: "wage", zh: "發動" } }
                        ],
                        translationes: {
                            es: "Por esta razón, los helvecios también aventajan en valor a los demás galos, porque combaten con los germanos en batallas casi diarias, ya sea apartándolos de sus propias fronteras, ya sea haciendo ellos mismos la guerra en las fronteras de aquellos.",
                            en: "For this reason, the Helvetii also surpass the rest of the Gauls in valor, as they contend with the Germans in almost daily battles, when they either repel them from their own territories, or themselves wage war on their frontiers.",
                            zh: "因此，赫爾維蒂人也在勇氣上超過了其他高盧人，因為他們幾乎每天都與日耳曼人作戰，要麼是將他們逐出自己的領土，要麼是自己在對方的領土上發動戰爭。"
                        }
                    },
                    {
                        id_orationis: 'o6',
                        original_lat: "Eorum una pars, quam Gallos optinere dictum est, initium capit a flumine Rhodano, continentur Garumna flumine, Oceano, finibus Belgarum, attingit etiam ab Sequanis et Heluetiis flumen Rhenum, uergit ad septentriones.",
                        notae: "Oración con varios verbos y sujetos implícitos que se refieren a 'una pars'. El verbo 'continentur' está en plural, un caso de silepsis (concordancia según el sentido, 'los territorios de esa parte').",
                        verba: [
                            { textus: "Eorum", lemma: "is", morphologia: "Pronombre, M, Gen, Pl", syntaxis: "Complemento Partitivo de 'una pars'", translatio: { es: "De ellos", en: "Of these", zh: "他們的" } },
                            { textus: "una", lemma: "unus", morphologia: "Adj. numeral, F, Nom, Sg", syntaxis: "Atributo de 'pars'", translatio: { es: "Una", en: "One", zh: "一個" } },
                            { textus: "pars", lemma: "pars", morphologia: "Sust. 3ª dec, F, Nom, Sg", syntaxis: "Sujeto", translatio: { es: "parte", en: "part", zh: "部分" } },
                            { textus: "quam", lemma: "qui", morphologia: "Pronombre relativo, F, Acu, Sg", syntaxis: "Sujeto de la Oración de Infinitivo", translatio: { es: "la cual", en: "which", zh: "那一個" } },
                            { textus: "Gallos", lemma: "Galli", morphologia: "Sust. 2ª dec, M, Acu, Pl", syntaxis: "Sujeto de la Oración de Infinitivo (alternativo, el sujeto es 'quam')", translatio: { es: "los galos", en: "(that the) Gauls", zh: "高盧人" } },
                            { textus: "optinere", lemma: "optineo", morphologia: "Verbo, Pres. Inf. Act", syntaxis: "Verbo de la Oración de Infinitivo", translatio: { es: "ocupan", en: "occupy", zh: "佔據" } },
                            { textus: "dictum", lemma: "dico", morphologia: "Participio Perf. Pas, N, Nom, Sg", syntaxis: "Verbo (forma impersonal con 'est')", translatio: { es: "se ha dicho", en: "it has been said", zh: "據說" } },
                            { textus: "est", lemma: "sum", morphologia: "Verbo, Pres. Ind, 3ª Sg", syntaxis: "Verbo", translatio: { es: "que", en: "(that)", zh: "" } },
                            { textus: "initium", lemma: "initium", morphologia: "Sust. 2ª dec, N, Acu, Sg", syntaxis: "Objeto Directo de 'capit'", translatio: { es: "comienzo", en: "beginning", zh: "開始" } },
                            { textus: "capit", lemma: "capio", morphologia: "Verbo, Pres. Ind, 3ª Sg", syntaxis: "Verbo", translatio: { es: "toma", en: "takes", zh: "取得" } },
                            { textus: "a", lemma: "a", morphologia: "Preposición", syntaxis: "Nexo (rige Ablativo)", translatio: { es: "desde", en: "at", zh: "從" } },
                            { textus: "flumine", lemma: "flumen", morphologia: "Sust. 3ª dec, N, Abl, Sg", syntaxis: "Complemento de Origen/Separación", translatio: { es: "el río", en: "the river", zh: "河" } },
                            { textus: "Rhodano", lemma: "Rhodanus", morphologia: "Sust. 2ª dec, M, Abl, Sg", syntaxis: "Aposición a 'flumine'", translatio: { es: "Ródano", en: "Rhone", zh: "羅訥" } },
                            { textus: "continentur", lemma: "contineo", morphologia: "Verbo, Pres. Ind. Pas, 3ª Pl", syntaxis: "Verbo", translatio: { es: "está limitada", en: "it is bounded", zh: "被包圍" } },
                            { textus: "Garumna", lemma: "Garumna", morphologia: "Sust. 1ª dec, M, Abl, Sg", syntaxis: "Ablativo Instrumental o de Límite", translatio: { es: "por el Garona", en: "by the Garonne", zh: "被加龍" } },
                            { textus: "flumine", lemma: "flumen", morphologia: "Sust. 3ª dec, N, Abl, Sg", syntaxis: "Ablativo Instrumental o de Límite", translatio: { es: "río", en: "River", zh: "河" } },
                            { textus: "Oceano", lemma: "Oceanus", morphologia: "Sust. 2ª dec, M, Abl, Sg", syntaxis: "Ablativo Instrumental o de Límite", translatio: { es: "por el Océano", en: "by the Ocean", zh: "被大西洋" } },
                            { textus: "finibus", lemma: "finis", morphologia: "Sust. 3ª dec, M, Abl, Pl", syntaxis: "Ablativo Instrumental o de Límite", translatio: { es: "por el territorio", en: "by the territories", zh: "被領土" } },
                            { textus: "Belgarum", lemma: "Belgae", morphologia: "Sust. 1ª dec, M, Gen, Pl", syntaxis: "Complemento del Nombre", translatio: { es: "de los belgas", en: "of the Belgae", zh: "比利時人的" } },
                            { textus: "attingit", lemma: "attingo", morphologia: "Verbo, Pres. Ind, 3ª Sg", syntaxis: "Verbo", translatio: { es: "toca", en: "it touches", zh: "接觸" } },
                            { textus: "etiam", lemma: "etiam", morphologia: "Adverbio", syntaxis: "Modificador (también)", translatio: { es: "también", en: "also", zh: "也" } },
                            { textus: "ab", lemma: "ab", morphologia: "Preposición", syntaxis: "Nexo (rige Ablativo)", translatio: { es: "por el lado de", en: "on the side of", zh: "從...一邊" } },
                            { textus: "Sequanis", lemma: "Sequani", morphologia: "Sust. 2ª dec, M, Abl, Pl", syntaxis: "Complemento Circunstancial de Procedencia ('desde la zona de')", translatio: { es: "los sécuanos", en: "the Sequani", zh: "塞夸尼人" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "和" } },
                            { textus: "Heluetiis", lemma: "Heluetii", morphologia: "Sust. 2ª dec, M, Abl, Pl", syntaxis: "Complemento Circunstancial de Procedencia", translatio: { es: "los helvecios", en: "the Helvetii", zh: "赫爾維蒂人" } },
                            { textus: "flumen", lemma: "flumen", morphologia: "Sust. 3ª dec, N, Acu, Sg", syntaxis: "Objeto Directo de 'attingit'", translatio: { es: "el río", en: "the river", zh: "河" } },
                            { textus: "Rhenum", lemma: "Rhenus", morphologia: "Sust. 2ª dec, M, Acu, Sg", syntaxis: "Aposición a 'flumen'", translatio: { es: "Rin", en: "Rhine", zh: "萊茵" } },
                            { textus: "uergit", lemma: "uergo", morphologia: "Verbo, Pres. Ind, 3ª Sg", syntaxis: "Verbo", translatio: { es: "se extiende", en: "it verges", zh: "朝向" } },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición", syntaxis: "Nexo (rige Acusativo)", translatio: { es: "hacia", en: "toward", zh: "向" } },
                            { textus: "septentriones", lemma: "septentriones", morphologia: "Sust. 3ª dec, M, Acu, Pl", syntaxis: "Complemento de Dirección", translatio: { es: "el norte", en: "the north", zh: "北方" } }
                        ],
                        translationes: {
                            es: "Una parte de estos [pueblos], la que se ha dicho que ocupan los galos, toma su inicio en el río Ródano; está limitada por el río Garona, el Océano y el territorio de los belgas; por la parte de los sécuanos y los helvecios, toca también el río Rin; y se extiende hacia el norte.",
                            en: "One part of these, which it has been said that the Gauls occupy, takes its beginning at the river Rhone; it is bounded by the Garonne River, the Ocean, and the territories of the Belgae; it also touches, on the side of the Sequani and the Helvetii, the river Rhine; and it verges toward the north.",
                            zh: "其中一部分，即前面所說的高盧人所佔據的部分，始於羅訥河；它以加龍河、大西洋和比利時人的領土為界；在塞夸尼人和赫爾維蒂人那邊，它還接觸到萊茵河；並朝向北方延伸。"
                        }
                    },
                    {
                        id_orationis: 'o7',
                        original_lat: "Belgae ab extremis Galliae finibus oriuntur, pertinent ad inferiorem partem fluminis Rheni, spectant in septentrionem et orientem solem.",
                        verba: [
                            { textus: "Belgae", lemma: "Belgae", morphologia: "Sust. 1ª dec, M, Nom, Pl", syntaxis: "Sujeto", translatio: { es: "Los belgas", en: "The Belgae", zh: "比利時人" } },
                            { textus: "ab", lemma: "ab", morphologia: "Preposición", syntaxis: "Nexo (rige Ablativo)", translatio: { es: "desde", en: "from", zh: "從" } },
                            { textus: "extremis", lemma: "extremus", morphologia: "Adj. 1ª/2ª dec, M, Abl, Pl, Superlativo", syntaxis: "Atributo de 'finibus'", translatio: { es: "los más alejados", en: "the farthest", zh: "最遠的" } },
                            { textus: "Galliae", lemma: "Gallia", morphologia: "Sust. 1ª dec, F, Gen, Sg", syntaxis: "Complemento del Nombre", translatio: { es: "de la Galia", en: "of Gaul", zh: "高盧的" } },
                            { textus: "finibus", lemma: "finis", morphologia: "Sust. 3ª dec, M, Abl, Pl", syntaxis: "Complemento de Origen", translatio: { es: "confines", en: "frontiers", zh: "邊界" } },
                            { textus: "oriuntur", lemma: "orior", morphologia: "Verbo Deponente, Pres. Ind, 3ª Pl", syntaxis: "Verbo", translatio: { es: "se originan", en: "arise", zh: "源於" } },
                            { textus: "pertinent", lemma: "pertineo", morphologia: "Verbo, Pres. Ind, 3ª Pl", syntaxis: "Verbo", translatio: { es: "se extienden", en: "extend", zh: "延伸" } },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición", syntaxis: "Nexo (rige Acusativo)", translatio: { es: "hasta", en: "to", zh: "到" } },
                            { textus: "inferiorem", lemma: "inferior", morphologia: "Adj. 3ª dec, F, Acu, Sg, Comparativo", syntaxis: "Atributo de 'partem'", translatio: { es: "la inferior", en: "the lower", zh: "下游的" } },
                            { textus: "partem", lemma: "pars", morphologia: "Sust. 3ª dec, F, Acu, Sg", syntaxis: "Complemento de Dirección", translatio: { es: "parte", en: "part", zh: "部分" } },
                            { textus: "fluminis", lemma: "flumen", morphologia: "Sust. 3ª dec, N, Gen, Sg", syntaxis: "Complemento del Nombre", translatio: { es: "del río", en: "of the river", zh: "河的" } },
                            { textus: "Rheni", lemma: "Rhenus", morphologia: "Sust. 2ª dec, M, Gen, Sg", syntaxis: "Complemento del Nombre", translatio: { es: "Rin", en: "Rhine", zh: "萊茵" } },
                            { textus: "spectant", lemma: "specto", morphologia: "Verbo, Pres. Ind, 3ª Pl", syntaxis: "Verbo", translatio: { es: "miran", en: "look", zh: "朝向" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición", syntaxis: "Nexo (rige Acusativo)", translatio: { es: "hacia", en: "toward", zh: "向" } },
                            { textus: "septentrionem", lemma: "septentrio", morphologia: "Sust. 3ª dec, M, Acu, Sg", syntaxis: "Complemento de Dirección", translatio: { es: "el norte", en: "the north", zh: "北方" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "和" } },
                            { textus: "orientem", lemma: "oriens", morphologia: "Participio Pres. Act. (sustantivado), M, Acu, Sg", syntaxis: "Atributo de 'solem' (sol naciente)", translatio: { es: "naciente", en: "rising", zh: "升起的" } },
                            { textus: "solem", lemma: "sol", morphologia: "Sust. 3ª dec, M, Acu, Sg", syntaxis: "Complemento de Dirección (con 'in', elidido)", translatio: { es: "sol", en: "sun", zh: "太陽" } }
                        ],
                        translationes: {
                            es: "Los belgas tienen su origen en los confines más alejados de la Galia, se extienden hasta la parte inferior del río Rin y miran hacia el norte y el sol naciente (el este).",
                            en: "The Belgae arise from the farthest frontiers of Gaul, extend to the lower part of the river Rhine, and look toward the north and the rising sun (the east).",
                            zh: "比利時人源於高盧最遠的邊界，延伸至萊茵河下游，朝向北方和日出（東方）。"
                        }
                    },
                    {
                        id_orationis: 'o8',
                        original_lat: "Aquitania a Garumna flumine ad Pyrenaeos montes et eam partem Oceani quae est ad Hispaniam pertinet; spectat inter occasum solis et septentriones.",
                        verba: [
                            { textus: "Aquitania", lemma: "Aquitania", morphologia: "Sust. 1ª dec, F, Nom, Sg", syntaxis: "Sujeto", translatio: { es: "Aquitania", en: "Aquitania", zh: "阿基坦尼亞" } },
                            { textus: "a", lemma: "a", morphologia: "Preposición", syntaxis: "Nexo (rige Ablativo)", translatio: { es: "desde", en: "from", zh: "從" } },
                            { textus: "Garumna", lemma: "Garumna", morphologia: "Sust. 1ª dec, M, Abl, Sg", syntaxis: "Aposición a 'flumine'", translatio: { es: "el Garona", en: "the Garonne", zh: "加龍" } },
                            { textus: "flumine", lemma: "flumen", morphologia: "Sust. 3ª dec, N, Abl, Sg", syntaxis: "Complemento de Origen/Lugar", translatio: { es: "río", en: "River", zh: "河" } },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición", syntaxis: "Nexo (rige Acusativo)", translatio: { es: "hasta", en: "to", zh: "到" } },
                            { textus: "Pyrenaeos", lemma: "Pyrenaeus", morphologia: "Adj. 1ª/2ª dec, M, Acu, Pl", syntaxis: "Atributo de 'montes'", translatio: { es: "los Pirineos", en: "the Pyrenees", zh: "庇里牛斯" } },
                            { textus: "montes", lemma: "mons", morphologia: "Sust. 3ª dec, M, Acu, Pl", syntaxis: "Complemento de Dirección", translatio: { es: "montes", en: "mountains", zh: "山脈" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "和" } },
                            { textus: "eam", lemma: "is", morphologia: "Pronombre-Adj. demost, F, Acu, Sg", syntaxis: "Atributo de 'partem'", translatio: { es: "aquella", en: "that", zh: "那" } },
                            { textus: "partem", lemma: "pars", morphologia: "Sust. 3ª dec, F, Acu, Sg", syntaxis: "Complemento de Dirección", translatio: { es: "parte", en: "part", zh: "部分" } },
                            { textus: "Oceani", lemma: "Oceanus", morphologia: "Sust. 2ª dec, M, Gen, Sg", syntaxis: "Complemento del Nombre", translatio: { es: "del Océano", en: "of the Ocean", zh: "大西洋的" } },
                            { textus: "quae", lemma: "qui", morphologia: "Pronombre relativo, F, Nom, Sg", syntaxis: "Sujeto", translatio: { es: "que", en: "which", zh: "它" } },
                            { textus: "est", lemma: "sum", morphologia: "Verbo, Pres. Ind, 3ª Sg", syntaxis: "Verbo (subordinada de relativo)", translatio: { es: "está", en: "is", zh: "是" } },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición", syntaxis: "Nexo (rige Acusativo)", translatio: { es: "junto a", en: "near", zh: "靠近" } },
                            { textus: "Hispaniam", lemma: "Hispania", morphologia: "Sust. 1ª dec, F, Acu, Sg", syntaxis: "Complemento de Lugar ('junto a')", translatio: { es: "Hispania", en: "Spain", zh: "西班牙" } },
                            { textus: "pertinet", lemma: "pertineo", morphologia: "Verbo, Pres. Ind, 3ª Sg", syntaxis: "Verbo Principal", translatio: { es: "se extiende", en: "extends", zh: "延伸" } },
                            { textus: "spectat", lemma: "specto", morphologia: "Verbo, Pres. Ind, 3ª Sg", syntaxis: "Verbo", translatio: { es: "mira", en: "it looks", zh: "朝向" } },
                            { textus: "inter", lemma: "inter", morphologia: "Preposición", syntaxis: "Nexo (rige Acusativo)", translatio: { es: "entre", en: "between", zh: "在...之間" } },
                            { textus: "occasum", lemma: "occasus", morphologia: "Sust. 4ª dec, M, Acu, Sg", syntaxis: "Complemento de 'inter'", translatio: { es: "el ocaso", en: "the setting", zh: "落下" } },
                            { textus: "solis", lemma: "sol", morphologia: "Sust. 3ª dec, M, Gen, Sg", syntaxis: "Complemento del Nombre", translatio: { es: "del sol", en: "of the sun", zh: "太陽的" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "和" } },
                            { textus: "septentriones", lemma: "septentriones", morphologia: "Sust. 3ª dec, M, Acu, Pl", syntaxis: "Complemento de 'inter'", translatio: { es: "el norte", en: "the north", zh: "北方" } }
                        ],
                        translationes: {
                            es: "Aquitania se extiende desde el río Garona hasta los montes Pirineos y esa parte del Océano que está junto a Hispania; mira entre el ocaso del sol (el oeste) y el norte.",
                            en: "Aquitania extends from the Garonne River to the Pyrenees mountains and to that part of the Ocean which is near Spain; it looks between the setting of the sun (the west) and the north.",
                            zh: "阿基坦尼亞從加龍河延伸至庇里牛斯山脈和靠近西班牙的那部分大西洋；它朝向日落（西方）和北方之間。"
                        }
                    }
                ]
            }
        ]
    }
};

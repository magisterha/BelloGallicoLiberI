const corpus = {
    titulus_principalis: "De Bello Gallico, I, 13",
    auctor: "C. Iulius Caesar",
    titulus_secundarius: {
        es: "La embajada de Divicón y el discurso de los Helvecios",
        en: "The Embassy of Divico and the Speech of the Helvetii",
        zh: "迪維科使團與赫爾維蒂人的演說"
    },
    introductio: {
        es: {
            titulus: "Introducción al Capítulo 13",
            contentus: `<p>Tras la rápida victoria de César, este capítulo cambia el escenario de la batalla al de la negociación. Impresionados por la proeza de ingeniería de César —construir en un día un puente que a ellos les tomó veinte días para cruzar el río—, los Helvecios envían una embajada. El líder de esta delegación es Divicón, el mismo caudillo que había derrotado a un ejército romano décadas atrás. Su discurso es una obra maestra de la retórica bárbara: una mezcla de orgullo, amenazas veladas y una oferta de paz condicional. Intenta minimizar la reciente victoria de César y apela a la legendaria valentía helvecia, advirtiendo a Roma que no subestime a su pueblo.</p>`
        },
        en: {
            titulus: "Introduction to Chapter 13",
            contentus: `<p>Following Caesar's swift victory, this chapter shifts the scene from battle to negotiation. Impressed by Caesar's engineering feat—building a bridge in one day to cross the river that took them twenty days—the Helvetii send an embassy. The leader of this delegation is Divico, the same chieftain who had defeated a Roman army decades earlier. His speech is a masterpiece of barbarian rhetoric: a mix of pride, veiled threats, and a conditional peace offer. He attempts to downplay Caesar's recent victory and appeals to the legendary Helvetian valor, warning Rome not to underestimate his people.</p>`
        },
        zh: {
            titulus: "第 13 章介紹",
            contentus: `<p>在凱撒迅速取得勝利後，本章場景從戰場轉向談判桌。赫爾維蒂人對凱撒的工程技術深感震驚——他們花了二十天才渡過的河流，凱撒僅用一天就建好了一座橋——於是派遣使團前來。使團的領袖是迪維科，正是幾十年前曾擊敗羅馬軍隊的同一位酋長。他的演說堪稱一篇蠻族修辭的傑作：融合了驕傲、含蓄的威脅和有條件的和平提議。他試圖淡化凱撒最近的勝利，並訴諸赫爾維蒂人傳說中的英勇，警告羅馬不要低估他的人民。</p>`
        }
    },
    textus: {
        id: 13,
        capitula: [
            {
                id_capituli: 13,
                orationes: [
                    {
                        id_orationis: 'o1',
                        original_lat: "Hoc proelio facto, reliquas copias Heluetiorum ut consequi posset pontem in Arare faciendum curat atque ita exercitum traducit.",
                        verba: [
                            { textus: "Hoc", lemma: "hic", morphologia: "Ablativo Neutro Singular", syntaxis: "Atributo", translatio: { es: "esta", en: "this", zh: "這次" } },
                            { textus: "proelio", lemma: "proelium", morphologia: "Ablativo Neutro Singular", syntaxis: "Sujeto del Ablativo Absoluto", translatio: { es: "batalla", en: "battle", zh: "戰鬥" } },
                            { textus: "facto,", lemma: "facio", morphologia: "Participio Perfecto Pasivo, Ablativo Singular", syntaxis: "Verbo del Ablativo Absoluto", translatio: { es: "hecha", en: "having been done", zh: "結束後" } },
                            { textus: "reliquas", lemma: "reliquus", morphologia: "Acusativo Femenino Plural", syntaxis: "Atributo", translatio: { es: "a las restantes", en: "the remaining", zh: "剩餘的" } },
                            { textus: "copias", lemma: "copia", morphologia: "Acusativo Femenino Plural", syntaxis: "Objeto Directo (de 'consequi')", translatio: { es: "tropas", en: "forces", zh: "部隊" } },
                            { textus: "Heluetiorum", lemma: "Helvetius", morphologia: "Genitivo Masculino Plural", syntaxis: "Complemento del Nombre", translatio: { es: "de los Helvecios", en: "of the Helvetii", zh: "赫爾維蒂人的" } },
                            { textus: "ut", lemma: "ut", morphologia: "Conjunción Subordinante Final", syntaxis: "Nexo", translatio: { es: "para", en: "so that", zh: "為了" } },
                            { textus: "consequi", lemma: "consequor", morphologia: "Presente Infinitivo Deponente", syntaxis: "Verbo de la cláusula final", translatio: { es: "alcanzar", en: "he could pursue", zh: "追上" } },
                            { textus: "posset", lemma: "possum", morphologia: "Imperfecto Subjuntivo Activo, 3ª Persona Singular", syntaxis: "Verbo Modal", translatio: { es: "poder", en: "might be able", zh: "能夠" } },
                            { textus: "pontem", lemma: "pons", morphologia: "Acusativo Masculino Singular", syntaxis: "Objeto Directo (de 'faciendum')", translatio: { es: "un puente", en: "a bridge", zh: "一座橋" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición (+ Ablativo)", syntaxis: "Modificador Preposicional", translatio: { es: "sobre", en: "over", zh: "在...之上" } },
                            { textus: "Arare", lemma: "Arar", morphologia: "Ablativo Masculino Singular", syntaxis: "Complemento de 'in'", translatio: { es: "el Arar", en: "the Arar", zh: "阿拉爾河" } },
                            { textus: "faciendum", lemma: "facio", morphologia: "Gerundivo, Acusativo Singular", syntaxis: "Parte de la perífrasis verbal", translatio: { es: "hacer", en: "to be made", zh: "建造" } },
                            { textus: "curat", lemma: "curo", morphologia: "Presente Indicativo Activo, 3ª Persona Singular", syntaxis: "Verbo Principal", translatio: { es: "se encarga de", en: "he ensures", zh: "安排" } },
                            { textus: "atque", lemma: "atque", morphologia: "Conjunción Coordinante", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "並且" } },
                            { textus: "ita", lemma: "ita", morphologia: "Adverbio", syntaxis: "Modificador Adverbial", translatio: { es: "así", en: "thus", zh: "如此" } },
                            { textus: "exercitum", lemma: "exercitus", morphologia: "Acusativo Masculino Singular", syntaxis: "Objeto Directo", translatio: { es: "al ejército", en: "the army", zh: "軍隊" } },
                            { textus: "traducit.", lemma: "traduco", morphologia: "Presente Indicativo Activo, 3ª Persona Singular", syntaxis: "Verbo Principal", translatio: { es: "hace pasar", en: "he leads across", zh: "渡過" } }
                        ],
                        ordo_syntacticus: "Oración compuesta con un ablativo absoluto inicial, una cláusula final ('ut... posset'), y dos verbos principales coordinados ('curat' y 'traducit').",
                        notae: "La construcción 'pontem faciendum curat' (se encarga de que se haga un puente) es una forma elegante y concisa de expresar la orden y supervisión de la construcción.",
                        translationes: {
                            es: "Terminada esta batalla, para poder alcanzar a las restantes tropas de los Helvecios, se encarga de que se haga un puente sobre el Arar y así hace pasar al ejército.",
                            en: "This battle having been finished, so that he might be able to pursue the remaining forces of the Helvetii, he ensures a bridge is made over the Arar and thus leads his army across.",
                            zh: "這次戰鬥結束後，為了能夠追上赫爾維蒂人剩餘的部隊，他安排在阿拉爾河上建造一座橋，並就這樣讓軍隊渡了過去。"
                        }
                    },
                    {
                        id_orationis: 'o2',
                        original_lat: "Heluetii, repentino eius aduentu commoti, cum id quod ipsi diebus XX aegerrime confecerant, ut flumen transirent, illum uno die fecisse intellegerent, legatos ad eum mittunt;",
                        verba: [
                            { textus: "Heluetii,", lemma: "Helvetius", morphologia: "Nominativo Masculino Plural", syntaxis: "Sujeto", translatio: { es: "los Helvecios", en: "The Helvetii", zh: "赫爾維蒂人" } },
                            { textus: "repentino", lemma: "repentinus", morphologia: "Ablativo Masculino Singular", syntaxis: "Atributo", translatio: { es: "repentina", en: "sudden", zh: "突然的" } },
                            { textus: "eius", lemma: "is", morphologia: "Genitivo Masculino Singular", syntaxis: "Complemento del Nombre", translatio: { es: "su", en: "his", zh: "他的" } },
                            { textus: "aduentu", lemma: "adventus", morphologia: "Ablativo Masculino Singular", syntaxis: "Complemento Agente", translatio: { es: "llegada", en: "arrival", zh: "到來" } },
                            { textus: "commoti,", lemma: "commoveo", morphologia: "Participio Perfecto Pasivo, Nominativo Plural", syntaxis: "Aposición", translatio: { es: "conmovidos", en: "alarmed", zh: "被震驚" } },
                            { textus: "cum", lemma: "cum", morphologia: "Conjunción Subordinante Causal", syntaxis: "Nexo", translatio: { es: "al", en: "since", zh: "由於" } },
                            { textus: "id", lemma: "is", morphologia: "Acusativo Neutro Singular", syntaxis: "Objeto Directo (de 'fecisse')", translatio: { es: "aquello", en: "that", zh: "那件事" } },
                            { textus: "quod", lemma: "qui", morphologia: "Acusativo Neutro Singular", syntaxis: "Objeto Directo (de 'confecerant')", translatio: { es: "que", en: "which", zh: "那件" } },
                            { textus: "ipsi", lemma: "ipse", morphologia: "Nominativo Masculino Plural", syntaxis: "Sujeto", translatio: { es: "ellos mismos", en: "they themselves", zh: "他們自己" } },
                            { textus: "diebus", lemma: "dies", morphologia: "Ablativo Masculino Plural", syntaxis: "Complemento Circunstancial de Tiempo", translatio: { es: "en días", en: "in days", zh: "天內" } },
                            { textus: "XX", lemma: "viginti", morphologia: "Numeral, Indeclinable", syntaxis: "Atributo", translatio: { es: "veinte", en: "twenty", zh: "二十" } },
                            { textus: "aegerrime", lemma: "aegre", morphologia: "Adverbio Superlativo", syntaxis: "Modificador Verbal", translatio: { es: "con suma dificultad", en: "with the greatest difficulty", zh: "極其艱難地" } },
                            { textus: "confecerant,", lemma: "conficio", morphologia: "Pluscuamperfecto Indicativo Activo, 3ª Persona Plural", syntaxis: "Verbo", translatio: { es: "habían realizado", en: "had accomplished", zh: "完成了" } },
                            { textus: "ut", lemma: "ut", morphologia: "Conjunción Subordinante (Explicativa)", syntaxis: "Nexo", translatio: { es: "a saber, que", en: "namely", zh: "即" } },
                            { textus: "flumen", lemma: "flumen", morphologia: "Acusativo Neutro Singular", syntaxis: "Objeto Directo", translatio: { es: "el río", en: "the river", zh: "河流" } },
                            { textus: "transirent,", lemma: "transeo", morphologia: "Imperfecto Subjuntivo Activo, 3ª Persona Plural", syntaxis: "Verbo", translatio: { es: "cruzaran", en: "to cross", zh: "渡過" } },
                            { textus: "illum", lemma: "ille", morphologia: "Acusativo Masculino Singular", syntaxis: "Sujeto de Infinitivo", translatio: { es: "él", en: "he", zh: "他" } },
                            { textus: "uno", lemma: "unus", morphologia: "Ablativo Masculino Singular", syntaxis: "Atributo", translatio: { es: "en un", en: "in one", zh: "一天" } },
                            { textus: "die", lemma: "dies", morphologia: "Ablativo Masculino Singular", syntaxis: "Complemento Circunstancial de Tiempo", translatio: { es: "día", en: "day", zh: "內" } },
                            { textus: "fecisse", lemma: "facio", morphologia: "Perfecto Infinitivo Activo", syntaxis: "Verbo de la oración de infinitivo", translatio: { es: "había hecho", en: "had done", zh: "完成了" } },
                            { textus: "intellegerent,", lemma: "intellego", morphologia: "Imperfecto Subjuntivo Activo, 3ª Persona Plural", syntaxis: "Verbo de la cláusula 'cum'", translatio: { es: "comprendieran", en: "they understood", zh: "了解到" } },
                            { textus: "legatos", lemma: "legatus", morphologia: "Acusativo Masculino Plural", syntaxis: "Objeto Directo", translatio: { es: "embajadores", en: "envoys", zh: "使者" } },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición (+ Acusativo)", syntaxis: "Modificador Preposicional", translatio: { es: "a", en: "to", zh: "向" } },
                            { textus: "eum", lemma: "is", morphologia: "Acusativo Masculino Singular", syntaxis: "Complemento de 'ad'", translatio: { es: "él", en: "him", zh: "他" } },
                            { textus: "mittunt;", lemma: "mitto", morphologia: "Presente Indicativo Activo, 3ª Persona Plural", syntaxis: "Verbo Principal", translatio: { es: "envían", en: "they send", zh: "派遣" } }
                        ],
                        ordo_syntacticus: "Oración compleja con el sujeto ('Heluetii') modificado por un participio ('commoti'), seguida de una larga cláusula causal con 'cum' que contiene una oración de infinitivo.",
                        notae: "La cláusula 'ut flumen transirent' funciona aquí como una aposición explicativa de 'id quod... confecerant' (aquello que habían realizado, a saber, cruzar el río).",
                        translationes: {
                            es: "Los Helvecios, conmovidos por su repentina llegada, al comprender que él en un solo día había hecho aquello que ellos mismos habían realizado con suma dificultad en veinte días, a saber, cruzar el río, le envían embajadores.",
                            en: "The Helvetii, alarmed by his sudden arrival, since they understood that he had done in one day that which they themselves had accomplished with the greatest difficulty in twenty days, namely, to cross the river, send envoys to him.",
                            zh: "赫爾維蒂人對他的突然到來感到震驚，當他們了解到，他們自己花了二十天才極其艱難地完成的事（即渡過那條河），他卻在一天之內就完成了，於是派遣使者去見他。"
                        }
                    },
                    {
                        id_orationis: 'o3',
                        original_lat: "cuius legationis Diuico princeps fuit, qui bello Cassiano dux Heluetiorum fuerat.",
                        verba: [
                            { textus: "cuius", lemma: "qui", morphologia: "Genitivo Femenino Singular", syntaxis: "Complemento del Nombre", translatio: { es: "de cuya", en: "of which", zh: "這次" } },
                            { textus: "legationis", lemma: "legatio", morphologia: "Genitivo Femenino Singular", syntaxis: "Complemento del Nombre", translatio: { es: "embajada", en: "embassy", zh: "使團的" } },
                            { textus: "Diuico", lemma: "Divico", morphologia: "Nominativo Masculino Singular", syntaxis: "Sujeto", translatio: { es: "Divicón", en: "Divico", zh: "迪維科" } },
                            { textus: "princeps", lemma: "princeps", morphologia: "Nominativo Masculino Singular", syntaxis: "Atributo", translatio: { es: "el jefe", en: "the leader", zh: "領袖" } },
                            { textus: "fuit,", lemma: "sum", morphologia: "Perfecto Indicativo Activo, 3ª Persona Singular", syntaxis: "Verbo", translatio: { es: "fue", en: "was", zh: "是" } },
                            { textus: "qui", lemma: "qui", morphologia: "Nominativo Masculino Singular", syntaxis: "Sujeto", translatio: { es: "quien", en: "who", zh: "他" } },
                            { textus: "bello", lemma: "bellum", morphologia: "Ablativo Neutro Singular", syntaxis: "Complemento Circunstancial de Tiempo", translatio: { es: "en la guerra", en: "in the war", zh: "在戰爭中" } },
                            { textus: "Cassiano", lemma: "Cassianus", morphologia: "Ablativo Neutro Singular", syntaxis: "Atributo", translatio: { es: "de Casio", en: "Cassian", zh: "卡西烏斯的" } },
                            { textus: "dux", lemma: "dux", morphologia: "Nominativo Masculino Singular", syntaxis: "Atributo", translatio: { es: "el general", en: "the leader", zh: "統帥" } },
                            { textus: "Heluetiorum", lemma: "Helvetius", morphologia: "Genitivo Masculino Plural", syntaxis: "Complemento del Nombre", translatio: { es: "de los Helvecios", en: "of the Helvetii", zh: "赫爾維蒂人的" } },
                            { textus: "fuerat.", lemma: "sum", morphologia: "Pluscuamperfecto Indicativo Activo, 3ª Persona Singular", syntaxis: "Verbo", translatio: { es: "había sido", en: "had been", zh: "曾是" } }
                        ],
                        ordo_syntacticus: "Oración principal ('Diuico princeps fuit') con un genitivo relativo ('cuius legationis') y una cláusula de relativo explicativa ('qui... fuerat').",
                        notae: "César nombra específicamente a Divicón para recordar a su audiencia la humillante derrota romana en la Guerra de Casio (107 a.C.), preparando el escenario para un tenso enfrentamiento.",
                        translationes: {
                            es: "El jefe de esta embajada fue Divicón, quien en la guerra de Casio había sido el general de los Helvecios.",
                            en: "The leader of this embassy was Divico, who in the Cassian war had been the leader of the Helvetii.",
                            zh: "這次使團的領袖是迪維科，他曾在卡西烏斯戰爭中擔任赫爾維蒂人的統帥。"
                        }
                    },
                    {
                        id_orationis: 'o4',
                        original_lat: "Is ita cum Caesare egit: Si pacem populus Romanus cum Heluetiis faceret, in eam partem ituros atque ibi futuros Heluetios ubi eos Caesar constituisset atque esse uoluisset:",
                        verba: [
                            { textus: "Is", lemma: "is", morphologia: "Nominativo Masculino Singular", syntaxis: "Sujeto", translatio: { es: "éste", en: "he", zh: "他" } },
                            { textus: "ita", lemma: "ita", morphologia: "Adverbio", syntaxis: "Modificador verbal", translatio: { es: "así", en: "thus", zh: "如此" } },
                            { textus: "cum", lemma: "cum", morphologia: "Preposición (+ Ablativo)", syntaxis: "Modificador preposicional", translatio: { es: "con", en: "with", zh: "與" } },
                            { textus: "Caesare", lemma: "Caesar", morphologia: "Ablativo Masculino Singular", syntaxis: "Complemento de 'cum'", translatio: { es: "César", en: "Caesar", zh: "凱撒" } },
                            { textus: "egit:", lemma: "ago", morphologia: "Perfecto Indicativo Activo, 3ª Persona Singular", syntaxis: "Verbo principal", translatio: { es: "negoció", en: "negotiated", zh: "交涉" } },
                            { textus: "Si", lemma: "si", morphologia: "Conjunción condicional", syntaxis: "Nexo", translatio: { es: "si", en: "if", zh: "如果" } },
                            { textus: "pacem", lemma: "pax", morphologia: "Acusativo Femenino Singular", syntaxis: "Objeto directo", translatio: { es: "la paz", en: "peace", zh: "和平" } },
                            { textus: "populus", lemma: "populus", morphologia: "Nominativo Masculino Singular", syntaxis: "Sujeto (de 'faceret')", translatio: { es: "el pueblo", en: "the people", zh: "人民" } },
                            { textus: "Romanus", lemma: "Romanus", morphologia: "Nominativo Masculino Singular", syntaxis: "Atributo", translatio: { es: "Romano", en: "Roman", zh: "羅馬" } },
                            { textus: "cum", lemma: "cum", morphologia: "Preposición (+ Ablativo)", syntaxis: "Modificador preposicional", translatio: { es: "con", en: "with", zh: "與" } },
                            { textus: "Heluetiis", lemma: "Helvetius", morphologia: "Ablativo Masculino Plural", syntaxis: "Complemento de 'cum'", translatio: { es: "los Helvecios", en: "the Helvetii", zh: "赫爾維蒂人" } },
                            { textus: "faceret,", lemma: "facio", morphologia: "Imperfecto Subjuntivo Activo, 3ª Persona Singular", syntaxis: "Verbo (en estilo indirecto)", translatio: { es: "hiciera", en: "were to make", zh: "締結" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición (+ Acusativo)", syntaxis: "Modificador preposicional", translatio: { es: "hacia", en: "to", zh: "往" } },
                            { textus: "eam", lemma: "is", morphologia: "Acusativo Femenino Singular", syntaxis: "Atributo", translatio: { es: "aquella", en: "that", zh: "那個" } },
                            { textus: "partem", lemma: "pars", morphologia: "Acusativo Femenino Singular", syntaxis: "Complemento de 'in'", translatio: { es: "parte", en: "part", zh: "地方" } },
                            { textus: "ituros", lemma: "eo", morphologia: "Participio Futuro Activo, Acusativo Plural", syntaxis: "Verbo (infinitivo futuro)", translatio: { es: "irían", en: "would go", zh: "將會去" } },
                            { textus: "atque", lemma: "atque", morphologia: "Conjunción coordinante", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "並且" } },
                            { textus: "ibi", lemma: "ibi", morphologia: "Adverbio de lugar", syntaxis: "Modificador adverbial", translatio: { es: "allí", en: "there", zh: "在那裡" } },
                            { textus: "futuros", lemma: "sum", morphologia: "Participio Futuro Activo, Acusativo Plural", syntaxis: "Verbo (infinitivo futuro)", translatio: { es: "permanecerían", en: "would be", zh: "將會待" } },
                            { textus: "Heluetios", lemma: "Helvetius", morphologia: "Acusativo Masculino Plural", syntaxis: "Sujeto de infinitivo", translatio: { es: "los Helvecios", en: "the Helvetii", zh: "赫爾維蒂人" } },
                            { textus: "ubi", lemma: "ubi", morphologia: "Adverbio relativo", syntaxis: "Nexo", translatio: { es: "donde", en: "where", zh: "在...地方" } },
                            { textus: "eos", lemma: "is", morphologia: "Acusativo Masculino Plural", syntaxis: "Objeto directo", translatio: { es: "los", en: "them", zh: "他們" } },
                            { textus: "Caesar", lemma: "Caesar", morphologia: "Nominativo Masculino Singular", syntaxis: "Sujeto (de 'constituisset')", translatio: { es: "César", en: "Caesar", zh: "凱撒" } },
                            { textus: "constituisset", lemma: "constituo", morphologia: "Pluscuamperfecto Subjuntivo Activo, 3ª Persona Singular", syntaxis: "Verbo", translatio: { es: "hubiera establecido", en: "had established", zh: "安置" } },
                            { textus: "atque", lemma: "atque", morphologia: "Conjunción coordinante", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "並且" } },
                            { textus: "esse", lemma: "sum", morphologia: "Presente Infinitivo", syntaxis: "Verbo", translatio: { es: "que estuvieran", en: "them to be", zh: "他們在" } },
                            { textus: "uoluisset:", lemma: "volo", morphologia: "Pluscuamperfecto Subjuntivo Activo, 3ª Persona Singular", syntaxis: "Verbo", translatio: { es: "hubiera querido", en: "had wanted", zh: "希望" } }
                        ],
                        ordo_syntacticus: "Introducción al discurso indirecto ('Is... egit'), seguido de una oración condicional cuya apódosis son dos oraciones de infinitivo futuro ('ituros [esse]', 'futuros [esse]').",
                        notae: "El discurso de Divicón se presenta en estilo indirecto, lo que significa que los verbos principales están en infinitivo y los verbos subordinados en subjuntivo, siguiendo las reglas de la 'consecutio temporum'.",
                        translationes: {
                            es: "Éste negoció así con César: (dijo) que si el pueblo Romano hiciera la paz con los Helvecios, los Helvecios irían a aquella parte y permanecerían allí donde César los hubiera establecido y querido que estuvieran.",
                            en: "He negotiated with Caesar thus: that if the Roman people were to make peace with the Helvetii, the Helvetii would go to that part and would be there where Caesar had established them and had wanted them to be.",
                            zh: "他如此與凱撒交涉：如果羅馬人民與赫爾維蒂人締結和平，赫爾維蒂人將會去往凱撒安置他們並希望他們待在的那個地方，並留在那裡。"
                        }
                    },
                    {
                        id_orationis: 'o5',
                        original_lat: "sin bello persequi perseueraret, reminisceretur et ueteris incommodi populi Romani et pristinae uirtutis Heluetiorum.",
                        verba: [
                             { textus: "sin", lemma: "si non", morphologia: "Conjunción condicional", syntaxis: "Nexo", translatio: { es: "pero si", en: "but if", zh: "但如果" } },
                            { textus: "bello", lemma: "bellum", morphologia: "Ablativo Neutro Singular", syntaxis: "Complemento de medio", translatio: { es: "con la guerra", en: "with war", zh: "用戰爭" } },
                            { textus: "persequi", lemma: "persequor", morphologia: "Presente Infinitivo Deponente", syntaxis: "Complemento de 'perseueraret'", translatio: { es: "perseguir", en: "to pursue", zh: "繼續追擊" } },
                            { textus: "perseueraret,", lemma: "persevero", morphologia: "Imperfecto Subjuntivo Activo, 3ª Persona Singular", syntaxis: "Verbo", translatio: { es: "perseverara", en: "he should persist", zh: "他堅持" } },
                            { textus: "reminisceretur", lemma: "reminiscor", morphologia: "Imperfecto Subjuntivo Deponente, 3ª Persona Singular", syntaxis: "Verbo (exhortación indirecta)", translatio: { es: "que recordara", en: "he should remember", zh: "他就應該回想" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción (correlativa)", syntaxis: "Nexo", translatio: { es: "tanto", en: "both", zh: "既要...也要..." } },
                            { textus: "ueteris", lemma: "vetus", morphologia: "Genitivo Neutro Singular", syntaxis: "Atributo", translatio: { es: "del antiguo", en: "of the old", zh: "舊日的" } },
                            { textus: "incommodi", lemma: "incommodum", morphologia: "Genitivo Neutro Singular", syntaxis: "Complemento de 'reminisceretur'", translatio: { es: "desastre", en: "disaster", zh: "災禍" } },
                            { textus: "populi", lemma: "populus", morphologia: "Genitivo Masculino Singular", syntaxis: "Complemento del nombre", translatio: { es: "del pueblo", en: "of the people", zh: "人民的" } },
                            { textus: "Romani", lemma: "Romanus", morphologia: "Genitivo Masculino Singular", syntaxis: "Atributo", translatio: { es: "Romano", en: "Roman", zh: "羅馬" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción (correlativa)", syntaxis: "Nexo", translatio: { es: "como", en: "and", zh: "也要..." } },
                            { textus: "pristinae", lemma: "pristinus", morphologia: "Genitivo Femenino Singular", syntaxis: "Atributo", translatio: { es: "de la antigua", en: "of the former", zh: "往昔的" } },
                            { textus: "uirtutis", lemma: "virtus", morphologia: "Genitivo Femenino Singular", syntaxis: "Complemento de 'reminisceretur'", translatio: { es: "valentía", en: "valor", zh: "勇氣" } },
                            { textus: "Heluetiorum.", lemma: "Helvetius", morphologia: "Genitivo Masculino Plural", syntaxis: "Complemento del nombre", translatio: { es: "de los Helvecios", en: "of the Helvetii", zh: "赫爾維蒂人的" } }
                        ],
                        ordo_syntacticus: "Segunda parte de la oración condicional ('sin...'), cuya apódosis es una exhortación en subjuntivo ('reminisceretur').",
                        notae: "Divicón recuerda veladamente la derrota de L. Casio, usando el eufemismo 'incommodum' (inconveniente, desastre) en lugar de 'clades' (derrota aplastante).",
                        translationes: {
                            es: "pero si perseverara en perseguirlos con la guerra, que recordara tanto el antiguo desastre del pueblo Romano como la antigua valentía de los Helvecios.",
                            en: "but if he should persist in pursuing them with war, he should remember both the old disaster of the Roman people and the former valor of the Helvetii.",
                            zh: "但如果他堅持用戰爭繼續追擊，他就應該回想一下羅馬人民舊日的災禍，以及赫爾維蒂人往昔的勇氣。"
                        }
                    },
                    {
                        id_orationis: 'o6',
                        original_lat: "Quod inprouiso unum pagum adortus esset, cum ii qui flumen transisset suis auxilium ferre non possent, ne ob eam rem aut suae magnopere uirtuti tribueret aut ipsos despiceret.",
                        verba: [
                             { textus: "Quod", lemma: "quod", morphologia: "Conjunción (causal/explicativa)", syntaxis: "Nexo", translatio: { es: "en cuanto a que", en: "as for the fact that", zh: "至於" } },
                            { textus: "inprouiso", lemma: "improvisus", morphologia: "Adverbio", syntaxis: "Modificador verbal", translatio: { es: "por sorpresa", en: "unexpectedly", zh: "出其不意地" } },
                            { textus: "unum", lemma: "unus", morphologia: "Acusativo Masculino Singular", syntaxis: "Atributo", translatio: { es: "a un solo", en: "one", zh: "一個" } },
                            { textus: "pagum", lemma: "pagus", morphologia: "Acusativo Masculino Singular", syntaxis: "Objeto directo", translatio: { es: "clan", en: "canton", zh: "部落" } },
                            { textus: "adortus", lemma: "adorior", morphologia: "Participio Perfecto Deponente, Nominativo Singular", syntaxis: "Parte del verbo", translatio: { es: "hubiera atacado", en: "he had attacked", zh: "攻擊了" } },
                            { textus: "esset,", lemma: "sum", morphologia: "Imperfecto Subjuntivo, 3ª Persona Singular", syntaxis: "Verbo", translatio: { es: "hubiera", en: "he had", zh: "（助動詞）" } },
                            { textus: "cum", lemma: "cum", morphologia: "Conjunción (causal)", syntaxis: "Nexo", translatio: { es: "cuando", en: "since", zh: "當時" } },
                            { textus: "ii", lemma: "is", morphologia: "Nominativo Masculino Plural", syntaxis: "Sujeto (de 'possent')", translatio: { es: "aquellos", en: "those", zh: "那些人" } },
                            { textus: "qui", lemma: "qui", morphologia: "Nominativo Masculino Plural", syntaxis: "Sujeto (de 'transisset')", translatio: { es: "que", en: "who", zh: "他們" } },
                            { textus: "flumen", lemma: "flumen", morphologia: "Acusativo Neutro Singular", syntaxis: "Objeto directo", translatio: { es: "el río", en: "the river", zh: "河流" } },
                            { textus: "transisset", lemma: "transeo", morphologia: "Pluscuamperfecto Subjuntivo Activo, 3ª Persona Plural (forma arcaica/sincopada por 'transissent')", syntaxis: "Verbo", translatio: { es: "habían cruzado", en: "had crossed", zh: "已經渡河" } },
                            { textus: "suis", lemma: "suus", morphologia: "Dativo Masculino Plural", syntaxis: "Objeto indirecto", translatio: { es: "a los suyos", en: "to their own", zh: "給自己的同胞" } },
                            { textus: "auxilium", lemma: "auxilium", morphologia: "Acusativo Neutro Singular", syntaxis: "Objeto directo", translatio: { es: "ayuda", en: "aid", zh: "援助" } },
                            { textus: "ferre", lemma: "fero", morphologia: "Presente Infinitivo Activo", syntaxis: "Verbo (complemento)", translatio: { es: "llevar", en: "to bring", zh: "提供" } },
                            { textus: "non", lemma: "non", morphologia: "Adverbio de negación", syntaxis: "Modificador verbal", translatio: { es: "no", en: "not", zh: "不" } },
                            { textus: "possent,", lemma: "possum", morphologia: "Imperfecto Subjuntivo Activo, 3ª Persona Plural", syntaxis: "Verbo", translatio: { es: "podían", en: "were able", zh: "能夠" } },
                            { textus: "ne", lemma: "ne", morphologia: "Conjunción (exhortación negativa)", syntaxis: "Nexo", translatio: { es: "que no", en: "he should not", zh: "不要" } },
                            { textus: "ob", lemma: "ob", morphologia: "Preposición (+ Acusativo)", syntaxis: "Modificador preposicional", translatio: { es: "por", en: "on account of", zh: "因為" } },
                            { textus: "eam", lemma: "is", morphologia: "Acusativo Femenino Singular", syntaxis: "Atributo", translatio: { es: "ese", en: "that", zh: "那件" } },
                            { textus: "rem", lemma: "res", morphologia: "Acusativo Femenino Singular", syntaxis: "Complemento de 'ob'", translatio: { es: "motivo", en: "matter", zh: "事" } },
                            { textus: "aut", lemma: "aut", morphologia: "Conjunción disyuntiva", syntaxis: "Nexo", translatio: { es: "o", en: "either", zh: "或者" } },
                            { textus: "suae", lemma: "suus", morphologia: "Dativo Femenino Singular", syntaxis: "Atributo", translatio: { es: "a su propia", en: "to his own", zh: "他自己的" } },
                            { textus: "magnopere", lemma: "magnopere", morphologia: "Adverbio", syntaxis: "Modificador verbal", translatio: { es: "en gran medida", en: "greatly", zh: "過多地" } },
                            { textus: "uirtuti", lemma: "virtus", morphologia: "Dativo Femenino Singular", syntaxis: "Objeto indirecto", translatio: { es: "valentía", en: "valor", zh: "勇氣" } },
                            { textus: "tribueret", lemma: "tribuero", morphologia: "Imperfecto Subjuntivo Activo, 3ª Persona Singular", syntaxis: "Verbo", translatio: { es: "atribuyera", en: "attribute", zh: "歸功於" } },
                            { textus: "aut", lemma: "aut", morphologia: "Conjunción disyuntiva", syntaxis: "Nexo", translatio: { es: "ni", en: "or", zh: "也不要" } },
                            { textus: "ipsos", lemma: "ipse", morphologia: "Acusativo Masculino Plural", syntaxis: "Objeto directo", translatio: { es: "a ellos", en: "them", zh: "他們" } },
                            { textus: "despiceret.", lemma: "despicio", morphologia: "Imperfecto Subjuntivo Activo, 3ª Persona Singular", syntaxis: "Verbo", translatio: { es: "despreciara", en: "despise", zh: "輕視" } }
                        ],
                        ordo_syntacticus: "Serie de cláusulas en estilo indirecto: una causal ('Quod... esset'), otra causal ('cum... possent') y una exhortación negativa ('ne... tribueret aut... despiceret').",
                        notae: "Divicón minimiza la victoria de César, atribuyéndola a un ataque sorpresa ('inprouiso') y no a la superioridad militar ('uirtus'). La forma 'transisset' es probablemente un error de copia por 'transissent'.",
                        translationes: {
                            es: "Que en cuanto al hecho de que hubiera atacado por sorpresa a un solo clan, cuando aquellos que habían cruzado el río no podían llevar ayuda a los suyos, que por ese motivo no lo atribuyera en gran medida a su propia valentía ni los despreciara a ellos.",
                            en: "As for the fact that he had attacked one canton unexpectedly, when those who had crossed the river could not bring aid to their own, he should not on account of that matter greatly attribute it to his own valor nor despise them.",
                            zh: "至於他出其不意地攻擊了一個部落，當時那些已經渡河的人無法給自己的同胞提供援助，他不要因此就把功勞過多地歸於自己的勇氣，也不要輕視他們。"
                        }
                    },
                    {
                        id_orationis: 'o7',
                        original_lat: "Se ita a patribus maioribusque suis didicisse, ut magis uirtute quam dolo contenderent aut insidiis niterentur.",
                        verba: [
                            { textus: "Se", lemma: "sui", morphologia: "Acusativo (Reflexivo)", syntaxis: "Sujeto de infinitivo", translatio: { es: "que ellos", en: "that they", zh: "他們" } },
                            { textus: "ita", lemma: "ita", morphologia: "Adverbio", syntaxis: "Modificador verbal", translatio: { es: "así", en: "so", zh: "如此" } },
                            { textus: "a", lemma: "a/ab", morphologia: "Preposición (+ Ablativo)", syntaxis: "Modificador preposicional", translatio: { es: "de", en: "from", zh: "從" } },
                            { textus: "patribus", lemma: "pater", morphologia: "Ablativo Masculino Plural", syntaxis: "Complemento de 'a'", translatio: { es: "sus padres", en: "their fathers", zh: "父輩" } },
                            { textus: "maioribusque", lemma: "maior", morphologia: "Ablativo Masculino Plural + Conjunción", syntaxis: "Complemento de 'a'", translatio: { es: "y antepasados", en: "and ancestors", zh: "和祖先" } },
                            { textus: "suis", lemma: "suus", morphologia: "Ablativo Masculino Plural", syntaxis: "Atributo", translatio: { es: "suyos", en: "their", zh: "他們的" } },
                            { textus: "didicisse,", lemma: "disco", morphologia: "Perfecto Infinitivo Activo", syntaxis: "Verbo (oración de infinitivo)", translatio: { es: "habían aprendido", en: "had learned", zh: "學到" } },
                            { textus: "ut", lemma: "ut", morphologia: "Conjunción (Resultado)", syntaxis: "Nexo", translatio: { es: "a", en: "to", zh: "要" } },
                            { textus: "magis", lemma: "magis", morphologia: "Adverbio comparativo", syntaxis: "Modificador", translatio: { es: "más", en: "more", zh: "更多地" } },
                            { textus: "uirtute", lemma: "virtus", morphologia: "Ablativo Femenino Singular", syntaxis: "Complemento de medio", translatio: { es: "con valor", en: "by valor", zh: "依靠勇氣" } },
                            { textus: "quam", lemma: "quam", morphologia: "Adverbio (comparativo)", syntaxis: "Nexo comparativo", translatio: { es: "que", en: "than", zh: "而不是" } },
                            { textus: "dolo", lemma: "dolus", morphologia: "Ablativo Masculino Singular", syntaxis: "Complemento de medio", translatio: { es: "con engaño", en: "by deceit", zh: "依靠欺詐" } },
                            { textus: "contenderent", lemma: "contendo", morphologia: "Imperfecto Subjuntivo Activo, 3ª Persona Plural", syntaxis: "Verbo", translatio: { es: "lucharan", en: "they should contend", zh: "作戰" } },
                            { textus: "aut", lemma: "aut", morphologia: "Conjunción disyuntiva", syntaxis: "Nexo", translatio: { es: "o", en: "or", zh: "或者" } },
                            { textus: "insidiis", lemma: "insidiae", morphologia: "Ablativo Femenino Plural", syntaxis: "Complemento de medio", translatio: { es: "con emboscadas", en: "on ambushes", zh: "依靠詭計" } },
                            { textus: "niterentur.", lemma: "nitor", morphologia: "Imperfecto Subjuntivo Deponente, 3ª Persona Plural", syntaxis: "Verbo", translatio: { es: "se apoyaran", en: "rely on", zh: "依賴" } }
                        ],
                        ordo_syntacticus: "Oración de infinitivo ('Se... didicisse') seguida de una cláusula de resultado ('ut... contenderent aut... niterentur').",
                        notae: "Aquí Divicón contrapone la 'virtus' (valor en combate abierto), que atribuye a los Helvecios, con el 'dolus' (engaño) y las 'insidiae' (emboscadas), que implícitamente achaca a César.",
                        translationes: {
                            es: "(Dijo) que ellos habían aprendido así de sus padres y antepasados, a luchar más con valor que con engaño o a recurrir a emboscadas.",
                            en: "(He said) that they had learned so from their fathers and ancestors, to contend more by valor than by deceit or to rely on ambushes.",
                            zh: "他說他們從父輩和祖先那裡學到的是，要更多地依靠勇氣而不是欺詐或詭計來作戰。"
                        }
                    },
                    {
                        id_orationis: 'o8',
                        original_lat: "Quare ne committeret ut is locus ubi constitissent ex calamitate populi Romani et internecione exercitus nomen caperet aut memoriam proderet.",
                        verba: [
                            { textus: "Quare", lemma: "quare", morphologia: "Adverbio (conector)", syntaxis: "Nexo conclusivo", translatio: { es: "por lo cual", en: "therefore", zh: "因此" } },
                            { textus: "ne", lemma: "ne", morphologia: "Conjunción (exhortación negativa)", syntaxis: "Nexo", translatio: { es: "que no", en: "he should not", zh: "不要" } },
                            { textus: "committeret", lemma: "committo", morphologia: "Imperfecto Subjuntivo Activo, 3ª Persona Singular", syntaxis: "Verbo", translatio: { es: "permitiera", en: "allow", zh: "讓" } },
                            { textus: "ut", lemma: "ut", morphologia: "Conjunción (completiva)", syntaxis: "Nexo", translatio: { es: "que", en: "that", zh: "以至於" } },
                            { textus: "is", lemma: "is", morphologia: "Nominativo Masculino Singular", syntaxis: "Atributo", translatio: { es: "este", en: "this", zh: "這個" } },
                            { textus: "locus", lemma: "locus", morphologia: "Nominativo Masculino Singular", syntaxis: "Sujeto", translatio: { es: "lugar", en: "place", zh: "地方" } },
                            { textus: "ubi", lemma: "ubi", morphologia: "Adverbio relativo", syntaxis: "Nexo", translatio: { es: "donde", en: "where", zh: "在...地方" } },
                            { textus: "constitissent", lemma: "consisto", morphologia: "Pluscuamperfecto Subjuntivo Activo, 3ª Persona Plural", syntaxis: "Verbo", translatio: { es: "se habían detenido", en: "they had taken a stand", zh: "他們停駐" } },
                            { textus: "ex", lemma: "ex", morphologia: "Preposición (+ Ablativo)", syntaxis: "Modificador preposicional", translatio: { es: "a partir de", en: "from", zh: "從" } },
                            { textus: "calamitate", lemma: "calamitas", morphologia: "Ablativo Femenino Singular", syntaxis: "Complemento de 'ex'", translatio: { es: "la calamidad", en: "the disaster", zh: "災難" } },
                            { textus: "populi", lemma: "populus", morphologia: "Genitivo Masculino Singular", syntaxis: "Complemento del nombre", translatio: { es: "del pueblo", en: "of the people", zh: "人民的" } },
                            { textus: "Romani", lemma: "Romanus", morphologia: "Genitivo Masculino Singular", syntaxis: "Atributo", translatio: { es: "Romano", en: "Roman", zh: "羅馬" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción coordinante", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "和" } },
                            { textus: "internecione", lemma: "internecio", morphologia: "Ablativo Femenino Singular", syntaxis: "Complemento de 'ex'", translatio: { es: "la aniquilación", en: "the slaughter", zh: "覆滅" } },
                            { textus: "exercitus", lemma: "exercitus", morphologia: "Genitivo Masculino Singular", syntaxis: "Complemento del nombre", translatio: { es: "de un ejército", en: "of an army", zh: "軍隊的" } },
                            { textus: "nomen", lemma: "nomen", morphologia: "Acusativo Neutro Singular", syntaxis: "Objeto directo", translatio: { es: "nombre", en: "its name", zh: "名字" } },
                            { textus: "caperet", lemma: "capio", morphologia: "Imperfecto Subjuntivo Activo, 3ª Persona Singular", syntaxis: "Verbo", translatio: { es: "tomara", en: "take", zh: "得名" } },
                            { textus: "aut", lemma: "aut", morphologia: "Conjunción disyuntiva", syntaxis: "Nexo", translatio: { es: "o", en: "or", zh: "或者" } },
                            { textus: "memoriam", lemma: "memoria", morphologia: "Acusativo Femenino Singular", syntaxis: "Objeto directo", translatio: { es: "el recuerdo", en: "the memory", zh: "記憶" } },
                            { textus: "proderet.", lemma: "prodo", morphologia: "Imperfecto Subjuntivo Activo, 3ª Persona Singular", syntaxis: "Verbo", translatio: { es: "perpetuara", en: "hand down", zh: "流傳" } }
                        ],
                        ordo_syntacticus: "Exhortación negativa ('ne committeret') seguida de una cláusula completiva de resultado ('ut... caperet aut... proderet').",
                        notae: "La advertencia final es una amenaza directa: 'no permitas que este lugar se haga famoso por otra catástrofe romana'.",
                        translationes: {
                            es: "Por lo cual, que no permitiera que este lugar donde se habían detenido tomara su nombre de una calamidad del pueblo Romano y de la aniquilación de un ejército, o perpetuara su recuerdo.",
                            en: "Therefore, he should not allow this place where they had taken their stand to take its name from a disaster of the Roman people and the slaughter of an army, or to hand down the memory of it.",
                            zh: "因此，他不要讓他們停駐的這個地方，因羅馬人民的災難和軍隊的覆滅而得名，或留下這樣的記憶。"
                        }
                    }
                ]
            }
        ]
    }
};

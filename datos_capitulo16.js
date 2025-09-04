const corpus = {
    titulus_principalis: "De Bello Gallico, I, 16",
    auctor: "C. Iulius Caesar",
    titulus_secundarius: {
        es: "El problema del grano y la acusación a los Eduos",
        en: "The Grain Problem and the Accusation against the Haedui",
        zh: "糧食問題與對愛杜依人的指控"
    },
    introductio: {
        es: {
            titulus: "Introducción al Capítulo 16",
            contentus: `<p>Este capítulo desvela la primera gran crisis logística de la campaña de César. La persecución de los Helvecios se ve amenazada por una acuciante falta de grano. César describe las dificultades (el clima frío, la inmadurez de las cosechas) y revela la frustrante inacción de sus aliados, los Eduos, que habían prometido públicamente el suministro. Día tras día, los Eduos posponen la entrega con excusas. Al borde del colapso logístico, César convoca a los líderes eduos presentes en su campamento, incluyendo figuras clave como Diviciaco y Lisco, el magistrado supremo de los Eduos (el Vergobreto). En una tensa reunión, César los acusa gravemente de negligencia y abandono en un momento crítico, recordándoles que emprendió la guerra en gran medida a petición de ellos. La tensión dentro de la alianza galo-romana sale a la superficie.</p>`
        },
        en: {
            titulus: "Introduction to Chapter 16",
            contentus: `<p>This chapter unveils the first major logistical crisis of Caesar's campaign. The pursuit of the Helvetii is threatened by a pressing lack of grain. Caesar describes the difficulties (the cold climate, the unripened crops) and reveals the frustrating inaction of his allies, the Haedui, who had publicly promised the supply. Day after day, the Haedui postpone the delivery with excuses. On the verge of a logistical collapse, Caesar summons the Haeduan leaders present in his camp, including key figures like Diviciacus and Liscus, the chief magistrate of the Haedui (the Vergobretus). In a tense meeting, Caesar harshly accuses them of negligence and abandonment at a critical moment, reminding them that he undertook the war largely at their request. The tension within the Gallo-Roman alliance comes to the surface.</p>`
        },
        zh: {
            titulus: "第 16 章介紹",
            contentus: `<p>本章揭示了凱撒戰役中的第一次重大後勤危機。對赫爾維蒂人的追擊因糧食的嚴重短缺而受到威脅。凱撒描述了當時的困難（寒冷的氣候、未成熟的莊稼），並揭示了他的盟友愛杜依人令人沮沮喪的不作為，他們曾公開承諾供應糧食。日復一日，愛杜依人以藉口推遲交付。在後勤崩潰的邊緣，凱撒召集了在他營中的愛杜依領袖們，包括像迪維奇亞科和利斯庫斯（愛杜依人的最高行政長官，維哥布雷特）這樣的關鍵人物。在一場緊張的會議中，凱撒嚴厲指責他們在關鍵時刻的疏忽和背棄，並提醒他們，他發動這場戰爭在很大程度上是應他們的要求。高盧與羅馬聯盟內部的緊張關係浮出水面。</p>`
        }
    },
    textus: {
        id: 16,
        capitula: [
            {
                id_capituli: 16,
                orationes: [
                    {
                        id_orationis: 'o1',
                        original_lat: "Interim cotidie Caesar Haeduos frumentum quod essent publice polliciti flagitare.",
                        verba: [
                            { textus: "Interim", lemma: "interim", morphologia: "Adverbio", syntaxis: "Modificador Temporal", translatio: { es: "entretanto", en: "meanwhile", zh: "與此同時" } },
                            { textus: "cotidie", lemma: "cotidie", morphologia: "Adverbio", syntaxis: "Modificador Temporal", translatio: { es: "cada día", en: "daily", zh: "每天" } },
                            { textus: "Caesar", lemma: "Caesar", morphologia: "Nominativo Masculino Singular", syntaxis: "Sujeto", translatio: { es: "César", en: "Caesar", zh: "凱撒" } },
                            { textus: "Haeduos", lemma: "Haeduus", morphologia: "Acusativo Masculino Plural", syntaxis: "Objeto Directo", translatio: { es: "a los Eduos", en: "the Haedui", zh: "向愛杜依人" } },
                            { textus: "frumentum", lemma: "frumentum", morphologia: "Acusativo Neutro Singular", syntaxis: "Objeto Secundario", translatio: { es: "el grano", en: "the grain", zh: "糧食" } },
                            { textus: "quod", lemma: "qui", morphologia: "Acusativo Neutro Singular", syntaxis: "Objeto Directo", translatio: { es: "que", en: "which", zh: "那些" } },
                            { textus: "essent", lemma: "sum", morphologia: "Imperfecto Subjuntivo, 3ª Persona Plural", syntaxis: "Verbo (auxiliar)", translatio: { es: "habían", en: "they had", zh: "他們" } },
                            { textus: "publice", lemma: "publice", morphologia: "Adverbio", syntaxis: "Modificador verbal", translatio: { es: "públicamente", en: "publicly", zh: "公開" } },
                            { textus: "polliciti", lemma: "polliceor", morphologia: "Participio Perfecto Deponente, Nominativo Plural", syntaxis: "Verbo", translatio: { es: "prometido", en: "promised", zh: "承諾的" } },
                            { textus: "flagitare.", lemma: "flagito", morphologia: "Presente Infinitivo Histórico", syntaxis: "Verbo Principal", translatio: { es: "reclamaba", en: "demanded", zh: "不斷要求" } }
                        ],
                        ordo_syntacticus: "Oración con infinitivo histórico ('flagitare') que le da viveza a la acción. El verbo 'flagitare' rige doble acusativo ('Haeduos' y 'frumentum').",
                        notae: "El infinitivo histórico se usa como verbo principal en narraciones para presentar la acción de forma más dramática y continua. 'Essent polliciti' es el pluscuamperfecto de subjuntivo, típico de una cláusula de relativo en un contexto de discurso indirecto implícito.",
                        translationes: {
                            es: "Entretanto, cada día, César reclamaba a los Eduos el grano que habían prometido públicamente.",
                            en: "Meanwhile, daily, Caesar kept demanding from the Haedui the grain which they had publicly promised.",
                            zh: "與此同時，凱撒每天不斷向愛杜依人催討他們曾公開承諾的糧食。"
                        }
                    },
                    {
                        id_orationis: 'o2',
                        original_lat: "Nam propter frigora, quod Gallia sub septentrionibus, ut ante dictum est, posita est, non modo frumenta in agris matura non erant, sed ne pabuli quidem satis magna copia suppetebat:",
                        verba: [
                            { textus: "Nam", lemma: "nam", morphologia: "Conjunción Causal", syntaxis: "Nexo", translatio: { es: "pues", en: "for", zh: "因為" } },
                            { textus: "propter", lemma: "propter", morphologia: "Preposición (+ Acusativo)", syntaxis: "Modificador Causal", translatio: { es: "a causa de", en: "on account of", zh: "由於" } },
                            { textus: "frigora,", lemma: "frigus", morphologia: "Acusativo Neutro Plural", syntaxis: "Complemento de 'propter'", translatio: { es: "los fríos", en: "the cold spells", zh: "寒冷" } },
                            { textus: "quod", lemma: "quod", morphologia: "Conjunción Causal", syntaxis: "Nexo", translatio: { es: "porque", en: "because", zh: "因為" } },
                            { textus: "Gallia", lemma: "Gallia", morphologia: "Nominativo Femenino Singular", syntaxis: "Sujeto", translatio: { es: "la Galia", en: "Gaul", zh: "高盧" } },
                            { textus: "sub", lemma: "sub", morphologia: "Preposición (+ Ablativo)", syntaxis: "Modificador Preposicional", translatio: { es: "bajo", en: "under", zh: "在...之下" } },
                            { textus: "septentrionibus,", lemma: "septentriones", morphologia: "Ablativo Masculino Plural", syntaxis: "Complemento de 'sub'", translatio: { es: "el norte", en: "the north", zh: "北方" } },
                            { textus: "ut", lemma: "ut", morphologia: "Adverbio Comparativo", syntaxis: "Nexo", translatio: { es: "como", en: "as", zh: "正如" } },
                            { textus: "ante", lemma: "ante", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "antes", en: "before", zh: "之前" } },
                            { textus: "dictum", lemma: "dico", morphologia: "Participio Perfecto Pasivo, Nominativo Singular", syntaxis: "Parte del verbo", translatio: { es: "dicho", en: "been said", zh: "所說" } },
                            { textus: "est,", lemma: "sum", morphologia: "Presente Indicativo, 3ª Persona Singular", syntaxis: "Verbo", translatio: { es: "se ha", en: "it has", zh: "那樣" } },
                            { textus: "posita", lemma: "pono", morphologia: "Participio Perfecto Pasivo, Nominativo Singular", syntaxis: "Parte del verbo", translatio: { es: "está situada", en: "is situated", zh: "位於" } },
                            { textus: "est,", lemma: "sum", morphologia: "Presente Indicativo, 3ª Persona Singular", syntaxis: "Verbo", translatio: { es: "está", en: "is", zh: "是" } },
                            { textus: "non", lemma: "non", morphologia: "Adverbio", syntaxis: "Parte de 'non modo'", translatio: { es: "no", en: "not", zh: "不僅" } },
                            { textus: "modo", lemma: "modo", morphologia: "Adverbio", syntaxis: "Parte de 'non modo'", translatio: { es: "sólo", en: "only", zh: "僅僅" } },
                            { textus: "frumenta", lemma: "frumentum", morphologia: "Nominativo Neutro Plural", syntaxis: "Sujeto", translatio: { es: "los cereales", en: "the grain crops", zh: "莊稼" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición (+ Ablativo)", syntaxis: "Modificador", translatio: { es: "en", en: "in", zh: "在" } },
                            { textus: "agris", lemma: "ager", morphologia: "Ablativo Masculino Plural", syntaxis: "Complemento de 'in'", translatio: { es: "los campos", en: "the fields", zh: "田野裡" } },
                            { textus: "matura", lemma: "maturus", morphologia: "Nominativo Neutro Plural", syntaxis: "Predicativo", translatio: { es: "maduros", en: "ripe", zh: "成熟" } },
                            { textus: "non", lemma: "non", morphologia: "Adverbio de Negación", syntaxis: "Modificador", translatio: { es: "no", en: "not", zh: "不" } },
                            { textus: "erant,", lemma: "sum", morphologia: "Imperfecto Indicativo, 3ª Persona Plural", syntaxis: "Verbo", translatio: { es: "estaban", en: "were", zh: "是" } },
                            { textus: "sed", lemma: "sed", morphologia: "Conjunción Adversativa", syntaxis: "Nexo", translatio: { es: "sino que", en: "but", zh: "而且" } },
                            { textus: "ne", lemma: "ne", morphologia: "Adverbio", syntaxis: "Parte de 'ne... quidem'", translatio: { es: "ni", en: "not even", zh: "甚至連" } },
                            { textus: "pabuli", lemma: "pabulum", morphologia: "Genitivo Neutro Singular", syntaxis: "Genitivo Partitivo", translatio: { es: "de forraje", en: "of fodder", zh: "草料" } },
                            { textus: "quidem", lemma: "quidem", morphologia: "Adverbio", syntaxis: "Parte de 'ne... quidem'", translatio: { es: "siquiera", en: "even", zh: "也" } },
                            { textus: "satis", lemma: "satis", morphologia: "Adverbio de Cantidad", syntaxis: "Modificador", translatio: { es: "suficiente", en: "enough", zh: "足夠" } },
                            { textus: "magna", lemma: "magnus", morphologia: "Nominativo Femenino Singular", syntaxis: "Atributo", translatio: { es: "gran", en: "large", zh: "大的" } },
                            { textus: "copia", lemma: "copia", morphologia: "Nominativo Femenino Singular", syntaxis: "Sujeto", translatio: { es: "cantidad", en: "supply", zh: "供應量" } },
                            { textus: "suppetebat:", lemma: "suppeto", morphologia: "Imperfecto Indicativo Activo, 3ª Persona Singular", syntaxis: "Verbo", translatio: { es: "había", en: "was available", zh: "都充足" } }
                        ],
                        ordo_syntacticus: "Oración causal ('Nam...') que contiene dos cláusulas coordinadas con la estructura 'non modo... sed ne... quidem' (no solo... sino que ni siquiera...).",
                        notae: "'Septentriones' (literalmente 'siete bueyes de tiro') es el nombre que daban los romanos a la constelación de la Osa Mayor y, por extensión, al Norte.",
                        translationes: {
                            es: "Pues, a causa de los fríos, porque la Galia está situada al norte, como se ha dicho antes, no solo los cereales en los campos no estaban maduros, sino que ni siquiera había disponible una cantidad suficientemente grande de forraje.",
                            en: "For, on account of the cold spells, because Gaul is situated in the north, as has been said before, not only were the grain crops in the fields not ripe, but not even a large enough supply of fodder was available.",
                            zh: "因為氣候寒冷（因為如前所述，高盧位於北方），不僅田野裡的莊稼尚未成熟，甚至連足夠多的草料供應都沒有。"
                        }
                    },
                    {
                        id_orationis: 'o3',
                        original_lat: "eo autem frumento quod flumine Arare nauibus subuexerat, propterea minus uti poterat quod iter ab Arare Heluetii auerterant, a quibus discedere nolebat.",
                        verba: [
                            { textus: "eo", lemma: "is", morphologia: "Ablativo Neutro Singular", syntaxis: "Atributo", translatio: { es: "de aquel", en: "that", zh: "那些" } },
                            { textus: "autem", lemma: "autem", morphologia: "Conjunción Adversativa", syntaxis: "Nexo", translatio: { es: "además", en: "moreover", zh: "此外" } },
                            { textus: "frumento", lemma: "frumentum", morphologia: "Ablativo Neutro Singular", syntaxis: "Complemento de 'uti'", translatio: { es: "grano", en: "grain", zh: "糧食" } },
                            { textus: "quod", lemma: "qui", morphologia: "Acusativo Neutro Singular", syntaxis: "Objeto Directo", translatio: { es: "que", en: "which", zh: "那些" } },
                            { textus: "flumine", lemma: "flumen", morphologia: "Ablativo Neutro Singular", syntaxis: "Complemento de Medio/Ruta", translatio: { es: "por el río", en: "on the river", zh: "沿著河" } },
                            { textus: "Arare", lemma: "Arar", morphologia: "Ablativo Masculino Singular", syntaxis: "Aposición", translatio: { es: "Arar", en: "Arar", zh: "阿拉爾" } },
                            { textus: "nauibus", lemma: "navis", morphologia: "Ablativo Femenino Plural", syntaxis: "Complemento de Medio", translatio: { es: "con naves", en: "by ships", zh: "用船" } },
                            { textus: "subuexerat,", lemma: "subveho", morphologia: "Pluscuamperfecto Indicativo Activo, 3ª Persona Singular", syntaxis: "Verbo", translatio: { es: "había transportado", en: "he had brought up", zh: "運來的" } },
                            { textus: "propterea", lemma: "propterea", morphologia: "Adverbio Causal", syntaxis: "Modificador", translatio: { es: "por esta razón", en: "for this reason", zh: "因此" } },
                            { textus: "minus", lemma: "minus", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "menos", en: "less", zh: "更少地" } },
                            { textus: "uti", lemma: "utor", morphologia: "Presente Infinitivo Deponente", syntaxis: "Verbo", translatio: { es: "usar", en: "to use", zh: "使用" } },
                            { textus: "poterat", lemma: "possum", morphologia: "Imperfecto Indicativo Activo, 3ª Persona Singular", syntaxis: "Verbo Modal", translatio: { es: "podía", en: "he was able", zh: "能夠" } },
                            { textus: "quod", lemma: "quod", morphologia: "Conjunción Causal", syntaxis: "Nexo", translatio: { es: "porque", en: "because", zh: "因為" } },
                            { textus: "iter", lemma: "iter", morphologia: "Acusativo Neutro Singular", syntaxis: "Objeto Directo", translatio: { es: "la ruta", en: "their route", zh: "路線" } },
                            { textus: "ab", lemma: "a/ab", morphologia: "Preposición (+ Ablativo)", syntaxis: "Modificador", translatio: { es: "del", en: "from", zh: "從" } },
                            { textus: "Arare", lemma: "Arar", morphologia: "Ablativo Masculino Singular", syntaxis: "Complemento de 'ab'", translatio: { es: "Arar", en: "the Arar", zh: "阿拉爾河" } },
                            { textus: "Heluetii", lemma: "Helvetius", morphologia: "Nominativo Masculino Plural", syntaxis: "Sujeto", translatio: { es: "los Helvecios", en: "the Helvetii", zh: "赫爾維蒂人" } },
                            { textus: "auerterant,", lemma: "averto", morphologia: "Pluscuamperfecto Indicativo Activo, 3ª Persona Plural", syntaxis: "Verbo", translatio: { es: "habían desviado", en: "had turned away", zh: "已經轉向離開" } },
                            { textus: "a", lemma: "a/ab", morphologia: "Preposición (+ Ablativo)", syntaxis: "Modificador", translatio: { es: "de", en: "from", zh: "離開" } },
                            { textus: "quibus", lemma: "qui", morphologia: "Ablativo Masculino Plural", syntaxis: "Complemento de 'a'", translatio: { es: "quienes", en: "whom", zh: "他們" } },
                            { textus: "discedere", lemma: "discedo", morphologia: "Presente Infinitivo Activo", syntaxis: "Verbo (complemento)", translatio: { es: "alejarse", en: "to depart", zh: "脫離" } },
                            { textus: "nolebat.", lemma: "nolo", morphologia: "Imperfecto Indicativo Activo, 3ª Persona Singular", syntaxis: "Verbo", translatio: { es: "no quería", en: "he did not want", zh: "不想" } }
                        ],
                        ordo_syntacticus: "Oración principal ('minus uti poterat') con dos cláusulas subordinadas, una de relativo ('quod... subuexerat') y una causal ('quod... auerterant'), que a su vez contiene otra de relativo ('a quibus...').",
                        notae: "El verbo 'utor' rige un complemento en ablativo, por eso 'eo frumento' está en ese caso.",
                        translationes: {
                            es: "Además, podía usar menos aquel grano que había transportado con naves por el río Arar, porque los Helvecios habían desviado su ruta del Arar, de quienes no quería alejarse.",
                            en: "Moreover, he was less able to use that grain which he had brought up by ships on the river Arar, for the reason that the Helvetii had turned their route away from the Arar, from whom he did not want to depart.",
                            zh: "此外，他更無法使用他用船沿阿拉爾河運來的那批糧食，因為赫爾維蒂人已經轉向離開了阿拉爾河，而他不想脫離對他們的追擊。"
                        }
                    },
                    {
                        id_orationis: 'o4',
                        original_lat: "Diem ex die ducere Haedui: conferri, conportari, adesse dicere.",
                        verba: [
                            { textus: "Diem", lemma: "dies", morphologia: "Acusativo Masculino Singular", syntaxis: "Objeto Directo", translatio: { es: "el día", en: "the day", zh: "拖延" } },
                            { textus: "ex", lemma: "ex", morphologia: "Preposición (+ Ablativo)", syntaxis: "Modificador", translatio: { es: "tras", en: "from", zh: "日復一日" } },
                            { textus: "die", lemma: "dies", morphologia: "Ablativo Masculino Singular", syntaxis: "Complemento de 'ex'", translatio: { es: "día", en: "day", zh: "地" } },
                            { textus: "ducere", lemma: "duco", morphologia: "Presente Infinitivo Histórico", syntaxis: "Verbo", translatio: { es: "daban largas", en: "delayed", zh: "（拖延）" } },
                            { textus: "Haedui:", lemma: "Haeduus", morphologia: "Nominativo Masculino Plural", syntaxis: "Sujeto", translatio: { es: "los Eduos", en: "the Haedui", zh: "愛杜依人" } },
                            { textus: "conferri,", lemma: "confero", morphologia: "Presente Infinitivo Pasivo", syntaxis: "Verbo (oración de infinitivo)", translatio: { es: "que se estaba reuniendo", en: "was being collected", zh: "正在集中" } },
                            { textus: "conportari,", lemma: "comporto", morphologia: "Presente Infinitivo Pasivo", syntaxis: "Verbo (oración de infinitivo)", translatio: { es: "transportando", en: "was being transported", zh: "正在運輸" } },
                            { textus: "adesse", lemma: "adsum", morphologia: "Presente Infinitivo", syntaxis: "Verbo (oración de infinitivo)", translatio: { es: "y que estaba al llegar", en: "was at hand", zh: "就在眼前" } },
                            { textus: "dicere.", lemma: "dico", morphologia: "Presente Infinitivo Histórico", syntaxis: "Verbo", translatio: { es: "decían", en: "they said", zh: "他們說" } }
                        ],
                        ordo_syntacticus: "Serie de infinitivos históricos. 'Ducere' y 'dicere' son los verbos principales de los Eduos. Los infinitivos pasivos 'conferri', 'conportari' y 'adesse' forman una oración de infinitivo que es el objeto directo de 'dicere'.",
                        notae: "La frase 'diem ex die ducere' es una locución que significa 'dar largas, posponer día tras día'. El asíndeton (ausencia de conjunciones) entre los infinitivos pasivos crea un efecto de excusas rápidas y repetitivas.",
                        translationes: {
                            es: "Los Eduos daban largas día tras día: decían que se estaba reuniendo, que se estaba transportando, que estaba al llegar.",
                            en: "The Haedui kept delaying from day to day: they said it was being collected, was being transported, was at hand.",
                            zh: "愛杜依人日復一日地拖延：他們說糧食正在集中、正在運輸、就在眼前了。"
                        }
                    },
                    {
                        id_orationis: 'o5',
                        original_lat: "Vbi se diutius duci intellexit et diem instare, quo die frumentum militibus metiri oporteret, conuocatis eorum principibus, quorum magnam copiam in castris habebat, in his Diuiciaco et Lisco,",
                        verba: [
                            { textus: "Vbi", lemma: "ubi", morphologia: "Conjunción Temporal", syntaxis: "Nexo", translatio: { es: "cuando", en: "when", zh: "當" } },
                            { textus: "se", lemma: "sui", morphologia: "Acusativo (Reflexivo)", syntaxis: "Sujeto de Infinitivo", translatio: { es: "que se", en: "that he", zh: "自己" } },
                            { textus: "diutius", lemma: "diu", morphologia: "Adverbio Comparativo", syntaxis: "Modificador", translatio: { es: "demasiado tiempo", en: "for too long", zh: "太久" } },
                            { textus: "duci", lemma: "duco", morphologia: "Presente Infinitivo Pasivo", syntaxis: "Verbo", translatio: { es: "le estaba dando largas", en: "was being put off", zh: "被拖延" } },
                            { textus: "intellexit", lemma: "intellego", morphologia: "Perfecto Indicativo Activo, 3ª Persona Singular", syntaxis: "Verbo", translatio: { es: "comprendió", en: "he understood", zh: "了解到" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción Coordinante", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "並且" } },
                            { textus: "diem", lemma: "dies", morphologia: "Acusativo Masculino Singular", syntaxis: "Sujeto de Infinitivo", translatio: { es: "que el día", en: "that the day", zh: "日子" } },
                            { textus: "instare,", lemma: "insto", morphologia: "Presente Infinitivo Activo", syntaxis: "Verbo", translatio: { es: "apremiaba", en: "was pressing on", zh: "即將來臨" } },
                            { textus: "quo", lemma: "qui", morphologia: "Ablativo Masculino Singular", syntaxis: "Nexo", translatio: { es: "en el cual", en: "on which", zh: "在那天" } },
                            { textus: "die", lemma: "dies", morphologia: "Ablativo Masculino Singular", syntaxis: "Antecedente de 'quo'", translatio: { es: "día", en: "day", zh: "（日子）" } },
                            { textus: "frumentum", lemma: "frumentum", morphologia: "Acusativo Neutro Singular", syntaxis: "Objeto Directo", translatio: { es: "el grano", en: "the grain", zh: "糧食" } },
                            { textus: "militibus", lemma: "miles", morphologia: "Dativo Masculino Plural", syntaxis: "Objeto Indirecto", translatio: { es: "a los soldados", en: "to the soldiers", zh: "給士兵" } },
                            { textus: "metiri", lemma: "metior", morphologia: "Presente Infinitivo Pasivo", syntaxis: "Verbo", translatio: { es: "repartir", en: "to be measured out", zh: "配給" } },
                            { textus: "oporteret,", lemma: "oportet", morphologia: "Imperfecto Subjuntivo Impersonal", syntaxis: "Verbo", translatio: { es: "era preciso", en: "it was necessary", zh: "必須" } },
                            { textus: "conuocatis", lemma: "convoco", morphologia: "Participio Perfecto Pasivo, Ablativo Plural", syntaxis: "Verbo (Ablativo Absoluto)", translatio: { es: "convocados", en: "having been summoned", zh: "召集了" } },
                            { textus: "eorum", lemma: "is", morphologia: "Genitivo Masculino Plural", syntaxis: "Complemento del Nombre", translatio: { es: "de ellos", en: "their", zh: "他們的" } },
                            { textus: "principibus,", lemma: "princeps", morphologia: "Ablativo Masculino Plural", syntaxis: "Sujeto (Ablativo Absoluto)", translatio: { es: "los príncipes", en: "the chiefs", zh: "領袖們" } },
                            { textus: "quorum", lemma: "qui", morphologia: "Genitivo Masculino Plural", syntaxis: "Complemento del Nombre", translatio: { es: "de los cuales", en: "of whom", zh: "其中" } },
                            { textus: "magnam", lemma: "magnus", morphologia: "Acusativo Femenino Singular", syntaxis: "Atributo", translatio: { es: "una gran", en: "a great", zh: "許多" } },
                            { textus: "copiam", lemma: "copia", morphologia: "Acusativo Femenino Singular", syntaxis: "Objeto Directo", translatio: { es: "cantidad", en: "number", zh: "數量" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición (+ Ablativo)", syntaxis: "Modificador", translatio: { es: "en", en: "in", zh: "在" } },
                            { textus: "castris", lemma: "castra", morphologia: "Ablativo Neutro Plural", syntaxis: "Complemento de 'in'", translatio: { es: "el campamento", en: "the camp", zh: "營中" } },
                            { textus: "habebat,", lemma: "habeo", morphologia: "Imperfecto Indicativo Activo, 3ª Persona Singular", syntaxis: "Verbo", translatio: { es: "tenía", en: "he had", zh: "擁有" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición (+ Ablativo)", syntaxis: "Modificador", translatio: { es: "entre", en: "among", zh: "在...之中" } },
                            { textus: "his", lemma: "hic", morphologia: "Ablativo Masculino Plural", syntaxis: "Complemento de 'in'", translatio: { es: "ellos", en: "them", zh: "他們" } },
                            { textus: "Diuiciaco", lemma: "Diviciacus", morphologia: "Ablativo Masculino Singular", syntaxis: "Aposición", translatio: { es: "Diviciaco", en: "Diviciacus", zh: "迪維奇亞科" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción Coordinante", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "和" } },
                            { textus: "Lisco,", lemma: "Liscus", morphologia: "Ablativo Masculino Singular", syntaxis: "Aposición", translatio: { es: "Lisco", en: "Liscus", zh: "利斯庫斯" } }
                        ],
                        ordo_syntacticus: "Oración compleja que comienza con una cláusula temporal ('Vbi... intellexit'), seguida de un ablativo absoluto ('conuocatis... principibus'). El verbo principal está en la siguiente oración ('accusat').",
                        notae: "Esta larga oración prepara el escenario para la confrontación, acumulando información y aumentando la tensión antes de llegar a la acción principal.",
                        translationes: {
                            es: "Cuando comprendió que se le estaba dando largas demasiado tiempo y que apremiaba el día en el cual era preciso repartir el grano a los soldados, convocados los príncipes de ellos, de los cuales tenía una gran cantidad en el campamento, entre ellos Diviciaco y Lisco,",
                            en: "When he understood that he was being put off for too long and that the day was pressing on which it was necessary to measure out the grain to the soldiers, having summoned their chiefs, of whom he had a great number in his camp, among them Diviciacus and Liscus,",
                            zh: "當凱撒了解到自己被拖延太久，而必須配給士兵糧食的日子即將來臨時，他召集了愛杜依人的領袖們（他在營中有許多這些領袖），其中包括迪維奇亞科和利斯庫斯，"
                        }
                    },
                    {
                        id_orationis: 'o6',
                        original_lat: "qui summo magistratui praeerat, quem uergobretum appellant Haedui, qui creatur annuus et uitae necisque in suos habet potestatem,",
                        verba: [
                            { textus: "qui", lemma: "qui", morphologia: "Nominativo Masculino Singular", syntaxis: "Sujeto", translatio: { es: "el cual", en: "who", zh: "這位" } },
                            { textus: "summo", lemma: "summus", morphologia: "Dativo Masculino Singular", syntaxis: "Atributo", translatio: { es: "a la suprema", en: "the highest", zh: "最高的" } },
                            { textus: "magistratui", lemma: "magistratus", morphologia: "Dativo Masculino Singular", syntaxis: "Objeto Indirecto", translatio: { es: "magistratura", en: "magistracy", zh: "行政職位" } },
                            { textus: "praeerat,", lemma: "praesum", morphologia: "Imperfecto Indicativo Activo, 3ª Persona Singular", syntaxis: "Verbo", translatio: { es: "estaba al frente de", en: "presided over", zh: "擔任" } },
                            { textus: "quem", lemma: "qui", morphologia: "Acusativo Masculino Singular", syntaxis: "Objeto Directo", translatio: { es: "a la que", en: "which", zh: "這個職位" } },
                            { textus: "uergobretum", lemma: "vergobretus", morphologia: "Acusativo Masculino Singular", syntaxis: "Predicativo del Objeto", translatio: { es: "'vergobreto'", en: "'vergobretus'", zh: "維哥布雷特" } },
                            { textus: "appellant", lemma: "appello", morphologia: "Presente Indicativo Activo, 3ª Persona Plural", syntaxis: "Verbo", translatio: { es: "llaman", en: "they call", zh: "稱之為" } },
                            { textus: "Haedui,", lemma: "Haeduus", morphologia: "Nominativo Masculino Plural", syntaxis: "Sujeto", translatio: { es: "los Eduos", en: "the Haedui", zh: "愛杜依人" } },
                            { textus: "qui", lemma: "qui", morphologia: "Nominativo Masculino Singular", syntaxis: "Sujeto", translatio: { es: "que", en: "who", zh: "該職位" } },
                            { textus: "creatur", lemma: "creo", morphologia: "Presente Indicativo Pasivo, 3ª Persona Singular", syntaxis: "Verbo", translatio: { es: "es elegido", en: "is elected", zh: "被選舉" } },
                            { textus: "annuus", lemma: "annuus", morphologia: "Adjetivo, Nominativo Singular", syntaxis: "Predicativo", translatio: { es: "anualmente", en: "annually", zh: "每年" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción Coordinante", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "並且" } },
                            { textus: "uitae", lemma: "vita", morphologia: "Genitivo Femenino Singular", syntaxis: "Complemento de 'potestatem'", translatio: { es: "de vida", en: "of life", zh: "生" } },
                            { textus: "necisque", lemma: "nex", morphologia: "Genitivo Femenino Singular + Conjunción", syntaxis: "Complemento de 'potestatem'", translatio: { es: "y muerte", en: "and death", zh: "殺" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición (+ Acusativo)", syntaxis: "Modificador", translatio: { es: "sobre", en: "over", zh: "對" } },
                            { textus: "suos", lemma: "suus", morphologia: "Acusativo Masculino Plural", syntaxis: "Complemento de 'in'", translatio: { es: "los suyos", en: "his people", zh: "其人民" } },
                            { textus: "habet", lemma: "habeo", morphologia: "Presente Indicativo Activo, 3ª Persona Singular", syntaxis: "Verbo", translatio: { es: "tiene", en: "has", zh: "擁有" } },
                            { textus: "potestatem,", lemma: "potestas", morphologia: "Acusativo Femenino Singular", syntaxis: "Objeto Directo", translatio: { es: "poder", en: "the power", zh: "大權" } }
                        ],
                        ordo_syntacticus: "Serie de cláusulas de relativo que describen a Lisco y su cargo, funcionando como una digresión explicativa.",
                        notae: "César a menudo incluye estas notas etnográficas. La descripción del poder del 'vergobreto' ('vitae necisque... potestas') subraya la importancia de la persona a la que se va a dirigir.",
                        translationes: {
                            es: "el cual estaba al frente de la suprema magistratura, a la que los Eduos llaman 'vergobreto', que es elegido anualmente y tiene poder de vida y muerte sobre los suyos,",
                            en: "who presided over the highest magistracy, which the Haedui call 'vergobretus', who is elected annually and has the power of life and death over his people,",
                            zh: "這位利斯庫斯擔任著最高的行政職位，愛杜依人稱之為「維哥布雷特」，該職位每年選舉一次，並對其人民擁有生殺大權，"
                        }
                    },
                    {
                        id_orationis: 'o7',
                        original_lat: "grauiter eos accusat quod, cum neque emi neque ex agris sumi posset, tam necessario tempore, tam propinquis hostibus ab iis non subleuetur, praesertim cum magna ex parte eorum precibus adductus bellum susceperit;",
                        verba: [
                            { textus: "grauiter", lemma: "graviter", morphologia: "Adverbio", syntaxis: "Modificador verbal", translatio: { es: "gravemente", en: "gravely", zh: "嚴厲地" } },
                            { textus: "eos", lemma: "is", morphologia: "Acusativo Masculino Plural", syntaxis: "Objeto Directo", translatio: { es: "los", en: "them", zh: "他們" } },
                            { textus: "accusat", lemma: "accuso", morphologia: "Presente Indicativo Activo, 3ª Persona Singular", syntaxis: "Verbo Principal", translatio: { es: "acusa", en: "he accuses", zh: "指責" } },
                            { textus: "quod,", lemma: "quod", morphologia: "Conjunción Causal", syntaxis: "Nexo", translatio: { es: "porque", en: "because", zh: "因為" } },
                            { textus: "cum", lemma: "cum", morphologia: "Conjunción (Causal/Circunstancial)", syntaxis: "Nexo", translatio: { es: "no pudiendo", en: "since", zh: "由於" } },
                            { textus: "neque", lemma: "neque", morphologia: "Conjunción", syntaxis: "Nexo", translatio: { es: "ni", en: "neither", zh: "既不" } },
                            { textus: "emi", lemma: "emo", morphologia: "Presente Infinitivo Pasivo", syntaxis: "Verbo", translatio: { es: "comprarse", en: "be bought", zh: "能買到" } },
                            { textus: "neque", lemma: "neque", morphologia: "Conjunción", syntaxis: "Nexo", translatio: { es: "ni", en: "nor", zh: "也不" } },
                            { textus: "ex", lemma: "ex", morphologia: "Preposición (+ Ablativo)", syntaxis: "Modificador", translatio: { es: "de", en: "from", zh: "從" } },
                            { textus: "agris", lemma: "ager", morphologia: "Ablativo Masculino Plural", syntaxis: "Complemento de 'ex'", translatio: { es: "los campos", en: "the fields", zh: "田野裡" } },
                            { textus: "sumi", lemma: "sumo", morphologia: "Presente Infinitivo Pasivo", syntaxis: "Verbo", translatio: { es: "tomarse", en: "be taken", zh: "能取得" } },
                            { textus: "posset,", lemma: "possum", morphologia: "Imperfecto Subjuntivo Activo, 3ª Persona Singular", syntaxis: "Verbo Modal", translatio: { es: "se pudiera", en: "it could", zh: "能夠" } },
                            { textus: "tam", lemma: "tam", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "tan", en: "so", zh: "如此" } },
                            { textus: "necessario", lemma: "necessarius", morphologia: "Ablativo Neutro Singular", syntaxis: "Atributo (Ablativo Absoluto)", translatio: { es: "necesario", en: "necessary", zh: "必要的" } },
                            { textus: "tempore,", lemma: "tempus", morphologia: "Ablativo Neutro Singular", syntaxis: "Sujeto (Ablativo Absoluto)", translatio: { es: "momento", en: "a time", zh: "時刻" } },
                            { textus: "tam", lemma: "tam", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "tan", en: "so", zh: "如此" } },
                            { textus: "propinquis", lemma: "propinquus", morphologia: "Ablativo Masculino Plural", syntaxis: "Atributo (Ablativo Absoluto)", translatio: { es: "cerca", en: "near", zh: "接近的" } },
                            { textus: "hostibus", lemma: "hostis", morphologia: "Ablativo Masculino Plural", syntaxis: "Sujeto (Ablativo Absoluto)", translatio: { es: "los enemigos", en: "the enemy", zh: "敵人" } },
                            { textus: "ab", lemma: "a/ab", morphologia: "Preposición (+ Ablativo)", syntaxis: "Complemento Agente", translatio: { es: "por", en: "by", zh: "被" } },
                            { textus: "iis", lemma: "is", morphologia: "Ablativo Masculino Plural", syntaxis: "Complemento de 'ab'", translatio: { es: "ellos", en: "them", zh: "他們" } },
                            { textus: "non", lemma: "non", morphologia: "Adverbio de Negación", syntaxis: "Modificador", translatio: { es: "no", en: "not", zh: "不" } },
                            { textus: "subleuetur,", lemma: "sublevo", morphologia: "Presente Subjuntivo Pasivo, 3ª Persona Singular", syntaxis: "Verbo", translatio: { es: "es ayudado", en: "he was being helped", zh: "援助" } },
                            { textus: "praesertim", lemma: "praesertim", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "sobre todo", en: "especially", zh: "尤其" } },
                            { textus: "cum", lemma: "cum", morphologia: "Conjunción Causal", syntaxis: "Nexo", translatio: { es: "cuando", en: "since", zh: "考慮到" } },
                            { textus: "magna", lemma: "magnus", morphologia: "Ablativo Femenino Singular", syntaxis: "Atributo", translatio: { es: "gran", en: "a large", zh: "很大" } },
                            { textus: "ex", lemma: "ex", morphologia: "Preposición (+ Ablativo)", syntaxis: "Modificador", translatio: { es: "de", en: "from", zh: "從" } },
                            { textus: "parte", lemma: "pars", morphologia: "Ablativo Femenino Singular", syntaxis: "Complemento de 'ex'", translatio: { es: "parte", en: "part", zh: "程度上" } },
                            { textus: "eorum", lemma: "is", morphologia: "Genitivo Masculino Plural", syntaxis: "Complemento del Nombre", translatio: { es: "de ellos", en: "their", zh: "他們的" } },
                            { textus: "precibus", lemma: "prex", morphologia: "Ablativo Femenino Plural", syntaxis: "Complemento de Causa", translatio: { es: "por los ruegos", en: "by the prayers", zh: "請求" } },
                            { textus: "adductus", lemma: "adduco", morphologia: "Participio Perfecto Pasivo, Nominativo Singular", syntaxis: "Aposición", translatio: { es: "inducido", en: "induced", zh: "受到影響" } },
                            { textus: "bellum", lemma: "bellum", morphologia: "Acusativo Neutro Singular", syntaxis: "Objeto Directo", translatio: { es: "la guerra", en: "the war", zh: "戰爭" } },
                            { textus: "susceperit;", lemma: "suscipio", morphologia: "Perfecto Subjuntivo Activo, 3ª Persona Singular", syntaxis: "Verbo", translatio: { es: "había emprendido", en: "he had undertaken", zh: "發動" } }
                        ],
                        ordo_syntacticus: "Oración principal ('accusat') con una larga cláusula causal subordinada con 'quod'. Dentro de esta, hay dos cláusulas con 'cum' que aportan más información circunstancial y causal.",
                        notae: "'Tam necessario tempore, tam propinquis hostibus' es un ablativo absoluto sin participio, común para expresar circunstancias.",
                        translationes: {
                            es: "los acusa gravemente porque, no pudiendo ni comprarse ni tomarse de los campos, en un momento tan necesario, con los enemigos tan cerca, no es ayudado por ellos, sobre todo cuando, inducido en gran parte por sus ruegos, había emprendido la guerra;",
                            en: "he accuses them gravely because, since it could neither be bought nor taken from the fields, at so necessary a time, with the enemy so near, he was not being helped by them, especially since, induced in large part by their prayers, he had undertaken the war;",
                            zh: "凱撒嚴厲地指責他們，因為在這樣一個必要的時刻，敵人如此之近，糧食既不能買到，也無法從田野裡取得，而他卻沒有得到他們的援助，尤其是考慮到他之所以發動這場戰爭，很大程度上是受到他們請求的影響；"
                        }
                    },
                    {
                        id_orationis: 'o8',
                        original_lat: "multo etiam grauius quod sit destitutus queritur.",
                        verba: [
                            { textus: "multo", lemma: "multus", morphologia: "Ablativo de Grado de Diferencia", syntaxis: "Modificador", translatio: { es: "mucho", en: "much", zh: "更加" } },
                            { textus: "etiam", lemma: "etiam", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "aún", en: "even", zh: "還" } },
                            { textus: "grauius", lemma: "graviter", morphologia: "Adverbio Comparativo", syntaxis: "Modificador verbal", translatio: { es: "más gravemente", en: "more gravely", zh: "嚴重地" } },
                            { textus: "quod", lemma: "quod", morphologia: "Conjunción (explicativa)", syntaxis: "Nexo", translatio: { es: "de que", en: "that", zh: "因為" } },
                            { textus: "sit", lemma: "sum", morphologia: "Presente Subjuntivo, 3ª Persona Singular", syntaxis: "Verbo (auxiliar)", translatio: { es: "haya sido", en: "he had been", zh: "他" } },
                            { textus: "destitutus", lemma: "destituo", morphologia: "Participio Perfecto Pasivo, Nominativo Singular", syntaxis: "Verbo", translatio: { es: "abandonado", en: "abandoned", zh: "被拋棄了" } },
                            { textus: "queritur.", lemma: "queror", morphologia: "Presente Indicativo Deponente, 3ª Persona Singular", syntaxis: "Verbo Principal", translatio: { es: "se queja", en: "he complains", zh: "他抱怨" } }
                        ],
                        ordo_syntacticus: "Oración simple con una cláusula completiva introducida por 'quod'.",
                        notae: "La oración final resume el sentimiento de César: no es solo un fallo logístico, es una traición.",
                        translationes: {
                            es: "se queja aún mucho más gravemente de que haya sido abandonado.",
                            en: "he complains even much more gravely that he had been abandoned.",
                            zh: "他甚至更嚴重地抱怨自己被拋棄了。"
                        }
                    }
                ]
            }
        ]
    }
};

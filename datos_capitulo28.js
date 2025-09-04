const corpus = {
    titulus_principalis: "De Bello Gallico, I, 28",
    auctor: "C. Iulius Caesar",
    titulus_secundarius: {
        es: "El asentamiento de la posguerra y la estrategia de César",
        en: "The Post-War Settlement and Caesar's Strategy",
        zh: "戰後安置與凱撒的戰略"
    },
    introductio: {
        es: {
            titulus: "Introducción al Capítulo 28",
            contentus: `<p>Este capítulo detalla la gestión de César de las secuelas de la guerra. Al enterarse de la fuga de los verbigenos, actúa con rapidez: ordena a las tribus de la región que los capturen y los devuelvan. Trata a los fugitivos retornados como enemigos (implicando su ejecución o venta como esclavos), estableciendo un duro precedente para quienes rompen una rendición. Al resto de los helvecios y sus aliados, tras recibir las armas y rehenes, les ordena volver a sus territorios de origen y reconstruir sus aldeas. Para evitar que mueran de hambre, manda a los alóbroges que les suministren grano. César explica su lógica: no quería que las fértiles tierras helvecias quedaran vacías, pues esto podría atraer a tribus germánicas del otro lado del Rin, creando una nueva amenaza en la frontera de la provincia romana. Finalmente, a petición de sus aliados heduos, permite que el valiente pueblo de los boyos se asiente en territorio heduo, integrándolos en la estructura de poder local.</p>`
        },
        en: {
            titulus: "Introduction to Chapter 28",
            contentus: `<p>This chapter details Caesar's management of the war's aftermath. Upon learning of the Verbigeni's flight, he acts swiftly, ordering the regional tribes to capture and return them. He treats the returned fugitives as enemies (implying their execution or sale into slavery), setting a harsh precedent for those who break a surrender. He orders the rest of the Helvetii and their allies, after receiving the weapons and hostages, to return to their original territories and rebuild their villages. To prevent them from starving, he commands the Allobroges to supply them with grain. Caesar explains his logic: he did not want the fertile Helvetian lands to remain empty, as this might attract Germanic tribes from across the Rhine, creating a new threat on the border of the Roman province. Finally, at the request of his Aeduan allies, he allows the valiant Boii people to settle in Aeduan territory, integrating them into the local power structure.</p>`
        },
        zh: {
            titulus: "第 28 章介紹",
            contentus: `<p>本章詳細介紹了凱撒對戰後事宜的處理。得知維比根人逃跑後，他迅速採取行動，命令該地區的部落將他們抓回。他將被送回的逃亡者視為敵人對待（意指處決或賣為奴隸），為破壞投降協議者立下了嚴厲的先例。在接收了武器和人質後，他命令其餘的赫爾維蒂人及其盟友返回他們原來的領土並重建村莊。為防止他們餓死，他命令阿洛布羅基人為他們提供糧食。凱撒解釋了他的邏輯：他不希望肥沃的赫爾維蒂土地空置，因為這可能會吸引萊茵河對岸的日耳曼部落，從而在羅馬行省的邊界上造成新的威脅。最後，應其埃杜伊盟友的請求，他允許英勇的波伊人定居在埃杜伊人的領土上，將他們融入當地的權力結構中。</p>`
        }
    },
    textus: {
        id: 28,
        capitula: [
            {
                id_capituli: 28,
                orationes: [
                    {
                        id_orationis: 'o1',
                        original_lat: "Quod ubi Caesar resciit, quorum per fines ierant, his uti conquirerent et reducerent, si sibi purgati esse uellent, imperauit:",
                        verba: [
                            { textus: "Quod", lemma: "qui", morphologia: "Pronombre relativo (conectivo)", syntaxis: "Acusativo de relación", translatio: { es: "esto", en: "This", zh: "這件事" } },
                            { textus: "ubi", lemma: "ubi", morphologia: "Conjunción", syntaxis: "Nexo (temporal)", translatio: { es: "cuando", en: "when", zh: "當" } },
                            { textus: "Caesar", lemma: "Caesar", morphologia: "Sustantivo, nominativo, singular, masculino", syntaxis: "Sujeto", translatio: { es: "César", en: "Caesar", zh: "凱撒" } },
                            { textus: "resciit", lemma: "rescisco", morphologia: "Verbo, 3ª p, singular, perfecto, indicativo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "se enteró de", en: "found out", zh: "得知" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "quorum", lemma: "qui", morphologia: "Pronombre relativo, genitivo, plural, masculino", syntaxis: "C. del Nombre", translatio: { es: "de aquellos por", en: "of those through", zh: "那些" } },
                            { textus: "per", lemma: "per", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "", en: "", zh: "" } },
                            { textus: "fines", lemma: "finis", morphologia: "Sustantivo, acusativo, plural, masculino", syntaxis: "C. preposicional", translatio: { es: "cuyo territorio", en: "whose territory", zh: "他們" } },
                            { textus: "ierant", lemma: "eo", morphologia: "Verbo, 3ª p, plural, pluscuamperfecto, indicativo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "habían pasado", en: "they had gone", zh: "經過的" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "" } },
                            { textus: "his", lemma: "hic", morphologia: "Pronombre, dativo, plural, masculino", syntaxis: "Objeto Indirecto", translatio: { es: "a estos", en: "them", zh: "部落" } },
                            { textus: "uti", lemma: "ut", morphologia: "Conjunción", syntaxis: "Nexo (completivo)", translatio: { es: "que", en: "that", zh: "去搜捕" } },
                            { textus: "conquirerent", lemma: "conquiro", morphologia: "Verbo, 3ª p, plural, imperfecto, subjuntivo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "los buscaran", en: "they should search for", zh: "" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "並" } },
                            { textus: "reducerent", lemma: "reduco", morphologia: "Verbo, 3ª p, plural, imperfecto, subjuntivo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "los trajeran de vuelta", en: "bring them back", zh: "帶回" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "si", lemma: "si", morphologia: "Conjunción", syntaxis: "Nexo (condicional)", translatio: { es: "si", en: "if", zh: "如果" } },
                            { textus: "sibi", lemma: "sui", morphologia: "Pronombre, dativo, singular", syntaxis: "Objeto Indirecto", translatio: { es: "ante él", en: "before him", zh: "他們" } },
                            { textus: "purgati", lemma: "purgo", morphologia: "Verbo, participio, perfecto, pasivo, nominativo, plural, masculino", syntaxis: "Atributo", translatio: { es: "exculpados", en: "cleared", zh: "想在他面前" } },
                            { textus: "esse", lemma: "sum", morphologia: "Verbo, infinitivo, presente", syntaxis: "Verbo (de infinitiva)", translatio: { es: "querían estar", en: "they wished to be", zh: "洗清" } },
                            { textus: "uellent", lemma: "uolo", morphologia: "Verbo, 3ª p, plural, imperfecto, subjuntivo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "", en: "", zh: "嫌疑" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "imperauit", lemma: "impero", morphologia: "Verbo, 3ª p, singular, perfecto, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "ordenó", en: "he ordered", zh: "他命令" } },
                            { textus: ":", lemma: ":", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ":", en: ":", zh: "。" } }
                        ],
                        ordo_syntacticus: "La oración principal ('imperauit') está al final. Rige una cláusula completiva ('uti...') y tiene un objeto indirecto ('his') que es el antecedente de la relativa precedente ('quorum...').",
                        notae: "César utiliza a las tribus locales como sus agentes, una táctica de 'divide y vencerás' y de administración indirecta.",
                        translationes: {
                            es: "Cuando César se enteró de esto, ordenó a aquellos por cuyo territorio habían pasado que los buscaran y los trajeran de vuelta, si querían estar exculpados ante él.",
                            en: "When Caesar found out about this, he ordered those through whose territory they had gone, that they should search for and bring them back, if they wished to be cleared of blame before him.",
                            zh: "當凱撒得知這件事後，他命令那些逃亡者經過其領土的部落，去搜捕他們並將他們帶回，如果他們想在凱撒面前洗清嫌疑的話。"
                        }
                    },
                    {
                        id_orationis: 'o2',
                        original_lat: "reductos in hostium numero habuit;",
                        verba: [
                            { textus: "reductos", lemma: "reduco", morphologia: "Verbo, participio, perfecto, pasivo, acusativo, plural, masculino", syntaxis: "Objeto Directo", translatio: { es: "a los que fueron traídos de vuelta", en: "those who were brought back", zh: "被帶回的人" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "en", en: "in", zh: "當作" } },
                            { textus: "hostium", lemma: "hostis", morphologia: "Sustantivo, genitivo, plural, masculino", syntaxis: "C. del Nombre", translatio: { es: "de enemigos", en: "of enemies", zh: "敵人" } },
                            { textus: "numero", lemma: "numerus", morphologia: "Sustantivo, ablativo, singular, masculino", syntaxis: "C. preposicional", translatio: { es: "el número", en: "the number", zh: "對待" } },
                            { textus: "habuit", lemma: "habeo", morphologia: "Verbo, 3ª p, singular, perfecto, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "los consideró", en: "he held", zh: "他將" } },
                            { textus: ";", lemma: ";", morphologia: "Puntuación", syntaxis: "Fin de cláusula", translatio: { es: ";", en: ";", zh: "；" } }
                        ],
                        ordo_syntacticus: "Oración simple.",
                        notae: "'In hostium numero habere' es una locución que significa 'considerar como enemigos', implicando que perdían cualquier derecho y podían ser ejecutados o vendidos como esclavos.",
                        translationes: {
                            es: "A los que fueron traídos de vuelta los consideró en el número de enemigos;",
                            en: "He held those who were brought back in the number of enemies;",
                            zh: "他將被帶回的人當作敵人對待；"
                        }
                    },
                    {
                        id_orationis: 'o3',
                        original_lat: "reliquos omnes obsidibus, armis perfugis traditis in deditione accepit.",
                        verba: [
                            { textus: "reliquos", lemma: "reliquus", morphologia: "Adjetivo, acusativo, plural, masculino", syntaxis: "Objeto Directo", translatio: { es: "a todos los demás", en: "all the rest", zh: "所有其餘的人" } },
                            { textus: "omnes", lemma: "omnis", morphologia: "Adjetivo, acusativo, plural, masculino", syntaxis: "Modificador", translatio: { es: "", en: "", zh: "" } },
                            { textus: "obsidibus", lemma: "obses", morphologia: "Sustantivo, ablativo, plural, masculino", syntaxis: "Sujeto (de ablativo absoluto)", translatio: { es: "los rehenes", en: "hostages", zh: "在人質" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "、" } },
                            { textus: "armis", lemma: "arma", morphologia: "Sustantivo, ablativo, plural, neutro", syntaxis: "Sujeto (de ablativo absoluto)", translatio: { es: "las armas", en: "weapons", zh: "武器" } },
                            { textus: "perfugis", lemma: "perfuga", morphologia: "Sustantivo, ablativo, plural, masculino", syntaxis: "Sujeto (de ablativo absoluto)", translatio: { es: "y los desertores", en: "and deserters", zh: "和逃兵" } },
                            { textus: "traditis", lemma: "trado", morphologia: "Verbo, participio, perfecto, pasivo, ablativo, plural", syntaxis: "Verbo (de ablativo absoluto)", translatio: { es: "una vez entregados", en: "having been handed over", zh: "被交出後" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "bajo", en: "in", zh: "接受了" } },
                            { textus: "deditione", lemma: "deditio", morphologia: "Sustantivo, ablativo, singular, femenino", syntaxis: "C. preposicional", translatio: { es: "rendición", en: "surrender", zh: "他們的投降" } },
                            { textus: "accepit", lemma: "accipio", morphologia: "Verbo, 3ª p, singular, perfecto, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "aceptó", en: "he received", zh: "" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Oración simple con un ablativo absoluto ('obsidibus... traditis') que describe las condiciones de la rendición.",
                        notae: "",
                        translationes: {
                            es: "Aceptó la rendición de todos los demás, una vez entregados los rehenes, las armas y los desertores.",
                            en: "He received all the rest in surrender, after the hostages, weapons, and deserters had been handed over.",
                            zh: "在人質、武器和逃兵被交出後，他接受了所有其餘的人的投降。"
                        }
                    },
                    {
                        id_orationis: 'o4',
                        original_lat: "Heluetios, Tulingos, Latouicos in fines suos, unde erant profecti, reuerti iussit",
                        verba: [
                            { textus: "Heluetios", lemma: "Heluetii", morphologia: "Sustantivo, acusativo, plural, masculino", syntaxis: "Sujeto (de infinitiva)", translatio: { es: "a los helvecios", en: "the Helvetii", zh: "赫爾維蒂人" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "、" } },
                            { textus: "Tulingos", lemma: "Tulingi", morphologia: "Sustantivo, acusativo, plural, masculino", syntaxis: "Sujeto (de infinitiva)", translatio: { es: "túlingos", en: "the Tulingi", zh: "圖靈吉人" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "、" } },
                            { textus: "Latouicos", lemma: "Latouici", morphologia: "Sustantivo, acusativo, plural, masculino", syntaxis: "Sujeto (de infinitiva)", translatio: { es: "y latóvicos", en: "and the Latovici", zh: "和拉托維西人" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "a", en: "to", zh: "返回" } },
                            { textus: "fines", lemma: "finis", morphologia: "Sustantivo, acusativo, plural, masculino", syntaxis: "C. preposicional", translatio: { es: "sus territorios", en: "their own territories", zh: "他們" } },
                            { textus: "suos", lemma: "suus", morphologia: "Adjetivo posesivo, acusativo, plural, masculino", syntaxis: "Modificador", translatio: { es: "", en: "", zh: "自己的領土" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "unde", lemma: "unde", morphologia: "Adverbio", syntaxis: "Nexo (relativo)", translatio: { es: "de donde", en: "from where", zh: "即" } },
                            { textus: "erant", lemma: "sum", morphologia: "Verbo, 3ª p, plural, imperfecto, indicativo", syntaxis: "Verbo (de subordinada)", translatio: { es: "habían", en: "they had", zh: "他們" } },
                            { textus: "profecti", lemma: "proficiscor", morphologia: "Verbo, participio, perfecto, deponente", syntaxis: "Verbo (de subordinada)", translatio: { es: "partido", en: "set out", zh: "出發的地方" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "reuerti", lemma: "reuertor", morphologia: "Verbo, infinitivo, presente, deponente", syntaxis: "Verbo (de infinitiva)", translatio: { es: "regresar", en: "to return", zh: "" } },
                            { textus: "iussit", lemma: "iubeo", morphologia: "Verbo, 3ª p, singular, perfecto, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "ordenó", en: "he ordered", zh: "他命令" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "" } }
                        ],
                        ordo_syntacticus: "Oración principal ('iussit') que rige una oración de acusativo con infinitivo.",
                        notae: "",
                        translationes: {
                            es: "Ordenó a los helvecios, túlingos y latóvicos regresar a sus territorios, de donde habían partido,",
                            en: "He ordered the Helvetii, the Tulingi, and the Latovici to return to their own territories, from where they had set out,",
                            zh: "他命令赫爾維蒂人、圖靈吉人和拉托維西人返回他們自己的領土，即他們出發的地方，"
                        }
                    },
                    {
                        id_orationis: 'o5',
                        original_lat: "et, quod omnibus fructibus amissis domi nihil erat quo famem tolerarent, Allobrogibus imperauit ut iis frumenti copiam facerent;",
                        verba: [
                            { textus: "et", lemma: "et", morphologia: "Conjunción", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "並且" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "quod", lemma: "quod", morphologia: "Conjunción", syntaxis: "Nexo (causal)", translatio: { es: "como", en: "because", zh: "由於" } },
                            { textus: "omnibus", lemma: "omnis", morphologia: "Adjetivo, ablativo, plural, masculino", syntaxis: "Sujeto (de ablativo absoluto)", translatio: { es: "todos", en: "all", zh: "所有的" } },
                            { textus: "fructibus", lemma: "fructus", morphologia: "Sustantivo, ablativo, plural, masculino", syntaxis: "Sujeto (de ablativo absoluto)", translatio: { es: "los frutos", en: "their produce", zh: "農作物" } },
                            { textus: "amissis", lemma: "amitto", morphologia: "Verbo, participio, perfecto, pasivo, ablativo, plural, masculino", syntaxis: "Verbo (de ablativo absoluto)", translatio: { es: "perdidos", en: "having been lost", zh: "都已失去" } },
                            { textus: "domi", lemma: "domus", morphologia: "Sustantivo, locativo, singular, femenino", syntaxis: "C.C. de Lugar", translatio: { es: "en su tierra", en: "at home", zh: "家鄉" } },
                            { textus: "nihil", lemma: "nihil", morphologia: "Pronombre, nominativo, singular, neutro", syntaxis: "Sujeto", translatio: { es: "nada", en: "nothing", zh: "沒有" } },
                            { textus: "erat", lemma: "sum", morphologia: "Verbo, 3ª p, singular, imperfecto, indicativo", syntaxis: "Verbo (de subordinada)", translatio: { es: "había", en: "there was", zh: "" } },
                            { textus: "quo", lemma: "qui", morphologia: "Pronombre relativo, ablativo, singular, neutro", syntaxis: "C.C. de Medio", translatio: { es: "con que", en: "with which", zh: "可以" } },
                            { textus: "famem", lemma: "fames", morphologia: "Sustantivo, acusativo, singular, femenino", syntaxis: "Objeto Directo", translatio: { es: "el hambre", en: "their hunger", zh: "忍受" } },
                            { textus: "tolerarent", lemma: "tolero", morphologia: "Verbo, 3ª p, plural, imperfecto, subjuntivo, activo", syntaxis: "Verbo (de subordinada final)", translatio: { es: "soportar", en: "they might endure", zh: "飢餓的" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "Allobrogibus", lemma: "Allobroges", morphologia: "Sustantivo, dativo, plural, masculino", syntaxis: "Objeto Indirecto", translatio: { es: "a los alóbroges", en: "the Allobroges", zh: "他命令阿洛布羅基人" } },
                            { textus: "imperauit", lemma: "impero", morphologia: "Verbo, 3ª p, singular, perfecto, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "ordenó", en: "he ordered", zh: "" } },
                            { textus: "ut", lemma: "ut", morphologia: "Conjunción", syntaxis: "Nexo (completivo)", translatio: { es: "que", en: "that", zh: "為他們" } },
                            { textus: "iis", lemma: "is", morphologia: "Pronombre, dativo, plural, masculino", syntaxis: "Objeto Indirecto", translatio: { es: "les", en: "to them", zh: "" } },
                            { textus: "frumenti", lemma: "frumentum", morphologia: "Sustantivo, genitivo, singular, neutro", syntaxis: "Genitivo partitivo", translatio: { es: "de grano", en: "of grain", zh: "糧食" } },
                            { textus: "copiam", lemma: "copia", morphologia: "Sustantivo, acusativo, singular, femenino", syntaxis: "Objeto Directo", translatio: { es: "abundancia", en: "a supply", zh: "供應" } },
                            { textus: "facerent", lemma: "facio", morphologia: "Verbo, 3ª p, plural, imperfecto, subjuntivo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "proporcionaran", en: "they should provide", zh: "" } },
                            { textus: ";", lemma: ";", morphologia: "Puntuación", syntaxis: "Fin de cláusula", translatio: { es: ";", en: ";", zh: "；" } }
                        ],
                        ordo_syntacticus: "Oración principal ('imperauit') que rige una cláusula completiva ('ut...'). Contiene una cláusula causal ('quod...') para justificar la orden.",
                        notae: "",
                        translationes: {
                            es: "y, como, perdidos todos los frutos, no había en su tierra nada con que soportar el hambre, ordenó a los alóbroges que les proporcionaran abundancia de grano;",
                            en: "and, because, with all their produce having been lost, there was nothing at home with which they might endure their hunger, he ordered the Allobroges to provide them with a supply of grain;",
                            zh: "並且，由於所有的農作物都已失去，家鄉沒有東西可以讓他們忍受飢餓，他命令阿洛布羅基人為他們提供糧食供應；"
                        }
                    },
                    {
                        id_orationis: 'o6',
                        original_lat: "ipsos oppida uicosque quos incenderant restituere iussit.",
                        verba: [
                            { textus: "ipsos", lemma: "ipse", morphologia: "Pronombre, acusativo, plural, masculino", syntaxis: "Sujeto (de infinitiva)", translatio: { es: "a ellos mismos", en: "them", zh: "他命令他們" } },
                            { textus: "oppida", lemma: "oppidum", morphologia: "Sustantivo, acusativo, plural, neutro", syntaxis: "Objeto Directo", translatio: { es: "las ciudades", en: "the towns", zh: "重建" } },
                            { textus: "uicosque", lemma: "uicusque", morphologia: "Sustantivo y conjunción, acusativo, plural, masculino", syntaxis: "Objeto Directo", translatio: { es: "y aldeas", en: "and villages", zh: "他們" } },
                            { textus: "quos", lemma: "qui", morphologia: "Pronombre relativo, acusativo, plural, masculino", syntaxis: "Objeto Directo", translatio: { es: "que", en: "which", zh: "燒毀的" } },
                            { textus: "incenderant", lemma: "incendo", morphologia: "Verbo, 3ª p, plural, pluscuamperfecto, indicativo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "habían incendiado", en: "they had burned", zh: "" } },
                            { textus: "restituere", lemma: "restituo", morphologia: "Verbo, infinitivo, presente, activo", syntaxis: "Verbo (de infinitiva)", translatio: { es: "reconstruir", en: "to rebuild", zh: "城鎮和村莊" } },
                            { textus: "iussit", lemma: "iubeo", morphologia: "Verbo, 3ª p, singular, perfecto, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "les ordenó", en: "he ordered", zh: "" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Oración principal ('iussit') que rige una oración de acusativo con infinitivo.",
                        notae: "",
                        translationes: {
                            es: "les ordenó a ellos mismos reconstruir las ciudades y aldeas que habían incendiado.",
                            en: "he ordered them themselves to rebuild the towns and villages which they had burned.",
                            zh: "他命令他們自己重建他們燒毀的城鎮和村莊。"
                        }
                    },
                    {
                        id_orationis: 'o7',
                        original_lat: "Id ea maxime ratione fecit, quod noluit eum locum unde Heluetii discesserant uacare, ne propter bonitatem agrorum Germani qui trans Rhenum incolunt e suis finibus in Heluetiorum fines transirent et finitimi Galliae prouinciae Allobrogibusque essent.",
                        verba: [
                            { textus: "Id", lemma: "is", morphologia: "Pronombre, acusativo, singular, neutro", syntaxis: "Objeto Directo", translatio: { es: "Esto", en: "This", zh: "他這麼做" } },
                            { textus: "ea", lemma: "is", morphologia: "Pronombre, ablativo, singular, femenino", syntaxis: "Modificador", translatio: { es: "por esta", en: "for this", zh: "主要" } },
                            { textus: "maxime", lemma: "maxime", morphologia: "Adverbio, superlativo", syntaxis: "Modificador", translatio: { es: "principal", en: "main", zh: "" } },
                            { textus: "ratione", lemma: "ratio", morphologia: "Sustantivo, ablativo, singular, femenino", syntaxis: "Ablativo de causa", translatio: { es: "razón", en: "reason", zh: "是出於這個原因" } },
                            { textus: "fecit", lemma: "facio", morphologia: "Verbo, 3ª p, singular, perfecto, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "lo hizo", en: "he did", zh: "" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "quod", lemma: "quod", morphologia: "Conjunción", syntaxis: "Nexo (causal)", translatio: { es: "porque", en: "because", zh: "因為" } },
                            { textus: "noluit", lemma: "nolo", morphologia: "Verbo, 3ª p, singular, perfecto, indicativo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "no quiso", en: "he did not want", zh: "他不希望" } },
                            { textus: "eum", lemma: "is", morphologia: "Pronombre, acusativo, singular, masculino", syntaxis: "Sujeto (de infinitiva)", translatio: { es: "aquel", en: "that", zh: "" } },
                            { textus: "locum", lemma: "locus", morphologia: "Sustantivo, acusativo, singular, masculino", syntaxis: "Sujeto (de infinitiva)", translatio: { es: "lugar", en: "place", zh: "赫爾維蒂人" } },
                            { textus: "unde", lemma: "unde", morphologia: "Adverbio", syntaxis: "Nexo (relativo)", translatio: { es: "del que", en: "from which", zh: "離開的" } },
                            { textus: "Heluetii", lemma: "Heluetii", morphologia: "Sustantivo, nominativo, plural, masculino", syntaxis: "Sujeto", translatio: { es: "los helvecios", en: "the Helvetii", zh: "" } },
                            { textus: "discesserant", lemma: "discedo", morphologia: "Verbo, 3ª p, plural, pluscuamperfecto, indicativo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "habían partido", en: "had departed", zh: "" } },
                            { textus: "uacare", lemma: "uaco", morphologia: "Verbo, infinitivo, presente, activo", syntaxis: "Verbo (de infinitiva)", translatio: { es: "quedara vacío", en: "to be empty", zh: "那塊地方空著" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "ne", lemma: "ne", morphologia: "Conjunción", syntaxis: "Nexo (finalidad negativa)", translatio: { es: "para que no", en: "lest", zh: "以免" } },
                            { textus: "propter", lemma: "propter", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "por", en: "on account of", zh: "因" } },
                            { textus: "bonitatem", lemma: "bonitas", morphologia: "Sustantivo, acusativo, singular, femenino", syntaxis: "C. preposicional", translatio: { es: "la fertilidad", en: "the excellence", zh: "土地的" } },
                            { textus: "agrorum", lemma: "ager", morphologia: "Sustantivo, genitivo, plural, masculino", syntaxis: "C. del Nombre", translatio: { es: "de los campos", en: "of the fields", zh: "肥沃" } },
                            { textus: "Germani", lemma: "Germani", morphologia: "Sustantivo, nominativo, plural, masculino", syntaxis: "Sujeto", translatio: { es: "los germanos", en: "the Germans", zh: "日耳曼人" } },
                            { textus: "qui", lemma: "qui", morphologia: "Pronombre relativo, nominativo, plural, masculino", syntaxis: "Sujeto", translatio: { es: "que", en: "who", zh: "" } },
                            { textus: "trans", lemma: "trans", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "al otro lado de", en: "across", zh: "居住在" } },
                            { textus: "Rhenum", lemma: "Rhenus", morphologia: "Sustantivo, acusativo, singular, masculino", syntaxis: "C. preposicional", translatio: { es: "el Rin", en: "the Rhine", zh: "萊茵河對岸的" } },
                            { textus: "incolunt", lemma: "incolo", morphologia: "Verbo, 3ª p, plural, presente, indicativo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "habitan", en: "dwell", zh: "" } },
                            { textus: "e", lemma: "ex", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "de", en: "from", zh: "從" } },
                            { textus: "suis", lemma: "suus", morphologia: "Adjetivo posesivo, ablativo, plural, masculino", syntaxis: "Modificador", translatio: { es: "sus", en: "their own", zh: "他們自己的" } },
                            { textus: "finibus", lemma: "finis", morphologia: "Sustantivo, ablativo, plural, masculino", syntaxis: "C. preposicional", translatio: { es: "territorios", en: "territory", zh: "領土" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "al", en: "into", zh: "進入" } },
                            { textus: "Heluetiorum", lemma: "Heluetii", morphologia: "Sustantivo, genitivo, plural, masculino", syntaxis: "C. del Nombre", translatio: { es: "de los helvecios", en: "of the Helvetii", zh: "赫爾維蒂人的" } },
                            { textus: "fines", lemma: "finis", morphologia: "Sustantivo, acusativo, plural, masculino", syntaxis: "C. preposicional", translatio: { es: "territorio", en: "territory", zh: "領土" } },
                            { textus: "transirent", lemma: "transeo", morphologia: "Verbo, 3ª p, plural, imperfecto, subjuntivo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "pasaran", en: "should cross over", zh: "遷入" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "並" } },
                            { textus: "finitimi", lemma: "finitimus", morphologia: "Adjetivo, nominativo, plural, masculino", syntaxis: "Atributo", translatio: { es: "vecinos", en: "neighbors", zh: "成為" } },
                            { textus: "Galliae", lemma: "Gallia", morphologia: "Sustantivo, genitivo, singular, femenino", syntaxis: "C. del Nombre", translatio: { es: "de la Galia", en: "of the province", zh: "高盧" } },
                            { textus: "prouinciae", lemma: "prouincia", morphologia: "Sustantivo, dativo, singular, femenino", syntaxis: "Objeto Indirecto", translatio: { es: "provincia", en: "of Gaul", zh: "行省" } },
                            { textus: "Allobrogibusque", lemma: "Allobrogesque", morphologia: "Sustantivo y conjunción, dativo, plural, masculino", syntaxis: "Objeto Indirecto", translatio: { es: "y de los alóbroges", en: "and the Allobroges", zh: "和阿洛布羅基人的" } },
                            { textus: "essent", lemma: "sum", morphologia: "Verbo, 3ª p, plural, imperfecto, subjuntivo", syntaxis: "Verbo (de subordinada)", translatio: { es: "se convirtieran en", en: "become", zh: "鄰居" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "La oración principal ('Id... fecit') es explicada por una cláusula causal con 'quod', la cual contiene una oración de infinitivo ('eum locum... uacare') y una larga cláusula de finalidad negativa ('ne...') que expone las razones geopolíticas de César.",
                        notae: "Esta es una de las frases más importantes del libro, ya que revela explícitamente la estrategia a largo plazo de César: utilizar a las tribus galas como un estado tapón ('buffer state') contra las incursiones germánicas.",
                        translationes: {
                            es: "Hizo esto principalmente por esta razón: porque no quiso que aquel lugar del que habían partido los helvecios quedara vacío, para que, por la fertilidad de los campos, los germanos que habitan al otro lado del Rin no pasaran de sus territorios al territorio de los helvecios y se convirtieran en vecinos de la provincia de la Galia y de los alóbroges.",
                            en: "He did this for this main reason: because he did not want that place from which the Helvetii had departed to be empty, lest on account of the excellence of the fields the Germans who dwell across the Rhine should cross over from their own territory into the territory of the Helvetii and become neighbors to the province of Gaul and to the Allobroges.",
                            zh: "他這麼做主要是出於這個原因：因為他不希望赫爾維蒂人離開的那塊地方空著，以免居住在萊茵河對岸的日耳曼人因土地的肥沃而從他們自己的領土遷入赫爾維蒂人的領土，並成為高盧行省和阿洛布羅基人的鄰居。"
                        }
                    },
                    {
                        id_orationis: 'o8',
                        original_lat: "Boios petentibus Haeduis, quod egregia uirtute erant cogniti, ut in finibus suis conlocarent concessit;",
                        verba: [
                            { textus: "Boios", lemma: "Boii", morphologia: "Sustantivo, acusativo, plural, masculino", syntaxis: "Objeto Directo", translatio: { es: "a los boyos", en: "the Boii", zh: "波伊人" } },
                            { textus: "petentibus", lemma: "peto", morphologia: "Verbo, participio, presente, activo, ablativo, plural, masculino", syntaxis: "Verbo (de ablativo absoluto)", translatio: { es: "pidiéndolo", en: "requesting", zh: "請求" } },
                            { textus: "Haeduis", lemma: "Haeduus", morphologia: "Sustantivo, ablativo, plural, masculino", syntaxis: "Sujeto (de ablativo absoluto)", translatio: { es: "los heduos", en: "the Aedui", zh: "在埃杜伊人" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "quod", lemma: "quod", morphologia: "Conjunción", syntaxis: "Nexo (causal)", translatio: { es: "porque", en: "because", zh: "因為" } },
                            { textus: "egregia", lemma: "egregius", morphologia: "Adjetivo, ablativo, singular, femenino", syntaxis: "Modificador", translatio: { es: "extraordinaria", en: "outstanding", zh: "卓越的" } },
                            { textus: "uirtute", lemma: "uirtus", morphologia: "Sustantivo, ablativo, singular, femenino", syntaxis: "Ablativo de cualidad", translatio: { es: "de valor", en: "valor", zh: "勇氣" } },
                            { textus: "erant", lemma: "sum", morphologia: "Verbo, 3ª p, plural, imperfecto, indicativo", syntaxis: "Verbo (auxiliar)", translatio: { es: "eran", en: "they were", zh: "以" } },
                            { textus: "cogniti", lemma: "cognosco", morphologia: "Verbo, participio, perfecto, pasivo", syntaxis: "Verbo (de subordinada)", translatio: { es: "conocidos", en: "known", zh: "而聞名" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "ut", lemma: "ut", morphologia: "Conjunción", syntaxis: "Nexo (completivo)", translatio: { es: "que", en: "that", zh: "讓他們" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "en", en: "in", zh: "在" } },
                            { textus: "finibus", lemma: "finis", morphologia: "Sustantivo, ablativo, plural, masculino", syntaxis: "C.C. de Lugar", translatio: { es: "sus territorios", en: "their own territory", zh: "自己的" } },
                            { textus: "suis", lemma: "suus", morphologia: "Adjetivo posesivo, ablativo, plural, masculino", syntaxis: "Modificador", translatio: { es: "", en: "", zh: "領土上" } },
                            { textus: "conlocarent", lemma: "conloco", morphologia: "Verbo, 3ª p, plural, imperfecto, subjuntivo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "los establecieran", en: "they might settle them", zh: "安置" } },
                            { textus: "concessit", lemma: "concedo", morphologia: "Verbo, 3ª p, singular, perfecto, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "les concedió", en: "he granted", zh: "他允許" } },
                            { textus: ";", lemma: ";", morphologia: "Puntuación", syntaxis: "Fin de cláusula", translatio: { es: ";", en: ";", zh: "；" } }
                        ],
                        ordo_syntacticus: "Oración principal ('concessit') que rige una cláusula completiva ('ut...'). Un ablativo absoluto ('petentibus Haeduis') establece la circunstancia.",
                        notae: "",
                        translationes: {
                            es: "A petición de los heduos, les concedió que establecieran a los boyos en sus territorios, porque eran conocidos por su extraordinario valor;",
                            en: "At the request of the Aedui, he granted that they might settle the Boii in their own territory, because they were known for their outstanding valor;",
                            zh: "在埃杜伊人的請求下，他允許他們將波伊人安置在自己的領土上，因為波伊人以其卓越的勇氣而聞名；"
                        }
                    },
                    {
                        id_orationis: 'o9',
                        original_lat: "quibus illi agros dederunt quosque postea in parem iuris libertatisque condicionem atque ipsi erant receperunt.",
                        verba: [
                            { textus: "quibus", lemma: "qui", morphologia: "Pronombre relativo, dativo, plural, masculino", syntaxis: "Objeto Indirecto", translatio: { es: "a los cuales", en: "to whom", zh: "他們" } },
                            { textus: "illi", lemma: "ille", morphologia: "Pronombre, nominativo, plural, masculino", syntaxis: "Sujeto", translatio: { es: "aquellos (los heduos)", en: "they (the Aedui)", zh: "（埃杜伊人）" } },
                            { textus: "agros", lemma: "ager", morphologia: "Sustantivo, acusativo, plural, masculino", syntaxis: "Objeto Directo", translatio: { es: "tierras", en: "lands", zh: "給了他們土地" } },
                            { textus: "dederunt", lemma: "do", morphologia: "Verbo, 3ª p, plural, perfecto, indicativo, activo", syntaxis: "Verbo", translatio: { es: "dieron", en: "gave", zh: "" } },
                            { textus: "quosque", lemma: "quique", morphologia: "Pronombre y conjunción, acusativo, plural, masculino", syntaxis: "Objeto Directo", translatio: { es: "y a los que", en: "and whom", zh: "後來" } },
                            { textus: "postea", lemma: "postea", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "después", en: "afterwards", zh: "" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "a", en: "into", zh: "接納他們" } },
                            { textus: "parem", lemma: "par", morphologia: "Adjetivo, acusativo, singular, femenino", syntaxis: "Modificador", translatio: { es: "una igual", en: "an equal", zh: "享有" } },
                            { textus: "iuris", lemma: "ius", morphologia: "Sustantivo, genitivo, singular, neutro", syntaxis: "C. del Nombre", translatio: { es: "de derecho", en: "of rights", zh: "法律" } },
                            { textus: "libertatisque", lemma: "libertasque", morphologia: "Sustantivo y conjunción, genitivo, singular, femenino", syntaxis: "C. del Nombre", translatio: { es: "y de libertad", en: "and of liberty", zh: "和自由" } },
                            { textus: "condicionem", lemma: "condicio", morphologia: "Sustantivo, acusativo, singular, femenino", syntaxis: "C. preposicional", translatio: { es: "condición", en: "condition", zh: "與他們自己" } },
                            { textus: "atque", lemma: "atque", morphologia: "Conjunción", syntaxis: "Nexo (comparativo)", translatio: { es: "que", en: "as", zh: "相同的" } },
                            { textus: "ipsi", lemma: "ipse", morphologia: "Pronombre, nominativo, plural, masculino", syntaxis: "Sujeto", translatio: { es: "ellos mismos", en: "they themselves", zh: "" } },
                            { textus: "erant", lemma: "sum", morphologia: "Verbo, 3ª p, plural, imperfecto, indicativo", syntaxis: "Verbo", translatio: { es: "tenían", en: "were", zh: "地位" } },
                            { textus: "receperunt", lemma: "recipio", morphologia: "Verbo, 3ª p, plural, perfecto, indicativo, activo", syntaxis: "Verbo", translatio: { es: "acogieron", en: "they received", zh: "" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Dos cláusulas relativas coordinadas que complementan al antecedente 'Boios' de la oración anterior.",
                        notae: "",
                        translationes: {
                            es: "a los cuales aquellos les dieron tierras y a los que después acogieron en una condición de derecho y de libertad igual a la que ellos mismos tenían.",
                            en: "to whom they (the Aedui) gave lands, and whom they afterwards received into a condition of rights and of liberty equal to that which they themselves had.",
                            zh: "埃杜伊人給了他們土地，後來又接納他們，享有與他們自己相同的法律和自由地位。"
                        }
                    }
                ]
            }
        ]
    }
};

const corpus = {
    titulus_principalis: "De Bello Gallico, I, 15",
    auctor: "C. Iulius Caesar",
    titulus_secundarius: {
        es: "Escaramuzas de caballería y la nueva estrategia de César",
        en: "Cavalry Skirmishes and Caesar's New Strategy",
        zh: "騎兵前哨戰與凱撒的新戰略"
    },
    introductio: {
        es: {
            titulus: "Introducción al Capítulo 15",
            contentus: `<p>Fracasada la diplomacia, este capítulo marca el reinicio de las operaciones militares. César comienza a seguir a los Helvecios, utilizando su caballería para reconocer el terreno. Sin embargo, un exceso de confianza por parte de su caballería, compuesta mayormente por aliados galos, resulta en una escaramuza desfavorable. Este pequeño revés envalentona a los Helvecios, que empiezan a hostigar a la retaguardia romana con más audacia. En respuesta, César demuestra su pragmatismo como comandante: en lugar de buscar una batalla campal inmediata para vengar la afrenta, adopta una estrategia de contención, limitándose a seguir al enemigo a una distancia segura y a impedir sus actividades de saqueo y forrajeo. Se establece así un tenso juego del gato y el ratón que durará unos quince días.</p>`
        },
        en: {
            titulus: "Introduction to Chapter 15",
            contentus: `<p>With diplomacy having failed, this chapter marks the resumption of military operations. Caesar begins to follow the Helvetii, using his cavalry to scout their route. However, overconfidence on the part of his cavalry, composed mostly of Gallic allies, results in an unfavorable skirmish. This minor setback emboldens the Helvetii, who begin to harass the Roman rearguard more audaciously. In response, Caesar demonstrates his pragmatism as a commander: instead of seeking an immediate pitched battle to avenge the affront, he adopts a strategy of containment, limiting himself to following the enemy at a safe distance and preventing their raiding and foraging activities. A tense cat-and-mouse game is thus established, which will last for about fifteen days.</p>`
        },
        zh: {
            titulus: "第 15 章介紹",
            contentus: `<p>外交失敗後，本章標誌著軍事行動的重新開始。凱撒開始追隨赫爾維蒂人，並派遣騎兵偵察其路線。然而，他主要由高盧盟友組成的騎兵部隊因過於自信而陷入一場不利的前哨戰。這次小小的挫敗使赫爾維蒂人士氣大振，開始更大膽地騷擾羅馬的後衛部隊。作為回應，凱撒展現了他作為指揮官的實用主義：他沒有為了雪恥而立即尋求決戰，而是採取了遏制戰略，滿足於在安全距離內跟隨敵人，並阻止其搶劫和搜集糧草的活動。一場持續約十五天的緊張貓鼠遊戲就此展開。</p>`
        }
    },
    textus: {
        id: 15,
        capitula: [
            {
                id_capituli: 15,
                orationes: [
                    {
                        id_orationis: 'o1',
                        original_lat: "Postero die castra ex eo loco mouent.",
                        verba: [
                            { textus: "Postero", lemma: "posterus", morphologia: "Ablativo Masculino Singular", syntaxis: "Atributo", translatio: { es: "al siguiente", en: "on the next", zh: "第二天" } },
                            { textus: "die", lemma: "dies", morphologia: "Ablativo Masculino Singular", syntaxis: "Complemento Circunstancial de Tiempo", translatio: { es: "día", en: "day", zh: "日" } },
                            { textus: "castra", lemma: "castra", morphologia: "Acusativo Neutro Plural", syntaxis: "Objeto Directo", translatio: { es: "el campamento", en: "the camp", zh: "營地" } },
                            { textus: "ex", lemma: "ex", morphologia: "Preposición (+ Ablativo)", syntaxis: "Modificador Preposicional", translatio: { es: "de", en: "from", zh: "從" } },
                            { textus: "eo", lemma: "is", morphologia: "Ablativo Masculino Singular", syntaxis: "Atributo", translatio: { es: "aquel", en: "that", zh: "那個" } },
                            { textus: "loco", lemma: "locus", morphologia: "Ablativo Masculino Singular", syntaxis: "Complemento de 'ex'", translatio: { es: "lugar", en: "place", zh: "地方" } },
                            { textus: "mouent.", lemma: "moveo", morphologia: "Presente Indicativo Activo, 3ª Persona Plural", syntaxis: "Verbo", translatio: { es: "mueven", en: "they move", zh: "移動" } }
                        ],
                        ordo_syntacticus: "Oración simple con sujeto elíptico (los Helvecios).",
                        notae: "El sujeto 'Helvetii' se sobreentiende por el contexto del capítulo anterior.",
                        translationes: {
                            es: "Al día siguiente mueven el campamento de aquel lugar.",
                            en: "On the next day, they move the camp from that place.",
                            zh: "第二天，他們從那個地方移動了營地。"
                        }
                    },
                    {
                        id_orationis: 'o2',
                        original_lat: "Idem facit Caesar equitatumque omnem ad numerum quattuor milium, quem ex omni prouincia et Haeduis atque eorum sociis coactum habebat, praemittit, qui uideant quas in partes hostes iter faciant.",
                        verba: [
                            { textus: "Idem", lemma: "idem", morphologia: "Acusativo Neutro Singular", syntaxis: "Objeto Directo", translatio: { es: "lo mismo", en: "the same", zh: "同樣地" } },
                            { textus: "facit", lemma: "facio", morphologia: "Presente Indicativo Activo, 3ª Persona Singular", syntaxis: "Verbo", translatio: { es: "hace", en: "does", zh: "做" } },
                            { textus: "Caesar", lemma: "Caesar", morphologia: "Nominativo Masculino Singular", syntaxis: "Sujeto", translatio: { es: "César", en: "Caesar", zh: "凱撒" } },
                            { textus: "equitatumque", lemma: "equitatus", morphologia: "Acusativo Masculino Singular + Conjunción", syntaxis: "Objeto Directo", translatio: { es: "y a la caballería", en: "and the cavalry", zh: "以及騎兵" } },
                            { textus: "omnem", lemma: "omnis", morphologia: "Acusativo Masculino Singular", syntaxis: "Atributo", translatio: { es: "toda", en: "all", zh: "全部" } },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición (+ Acusativo)", syntaxis: "Modificador", translatio: { es: "hasta", en: "to", zh: "大約" } },
                            { textus: "numerum", lemma: "numerus", morphologia: "Acusativo Masculino Singular", syntaxis: "Complemento de 'ad'", translatio: { es: "un número", en: "the number", zh: "數量" } },
                            { textus: "quattuor", lemma: "quattuor", morphologia: "Numeral, Indeclinable", syntaxis: "Atributo", translatio: { es: "de cuatro", en: "of four", zh: "四" } },
                            { textus: "milium,", lemma: "mille", morphologia: "Genitivo Plural", syntaxis: "Complemento de 'numerum'", translatio: { es: "mil", en: "thousand", zh: "千" } },
                            { textus: "quem", lemma: "qui", morphologia: "Acusativo Masculino Singular", syntaxis: "Objeto Directo", translatio: { es: "la cual", en: "which", zh: "這支" } },
                            { textus: "ex", lemma: "ex", morphologia: "Preposición (+ Ablativo)", syntaxis: "Modificador Preposicional", translatio: { es: "de", en: "from", zh: "從" } },
                            { textus: "omni", lemma: "omnis", morphologia: "Ablativo Femenino Singular", syntaxis: "Atributo", translatio: { es: "toda", en: "the whole", zh: "整個" } },
                            { textus: "prouincia", lemma: "provincia", morphologia: "Ablativo Femenino Singular", syntaxis: "Complemento de 'ex'", translatio: { es: "la provincia", en: "province", zh: "行省" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción Coordinante", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "和" } },
                            { textus: "Haeduis", lemma: "Haeduus", morphologia: "Ablativo Masculino Plural", syntaxis: "Complemento de 'ex'", translatio: { es: "los Eduos", en: "the Haedui", zh: "愛杜依人" } },
                            { textus: "atque", lemma: "atque", morphologia: "Conjunción Coordinante", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "以及" } },
                            { textus: "eorum", lemma: "is", morphologia: "Genitivo Masculino Plural", syntaxis: "Complemento del Nombre", translatio: { es: "de sus", en: "their", zh: "他們" } },
                            { textus: "sociis", lemma: "socius", morphologia: "Ablativo Masculino Plural", syntaxis: "Complemento de 'ex'", translatio: { es: "aliados", en: "allies", zh: "的盟友" } },
                            { textus: "coactum", lemma: "cogo", morphologia: "Participio Perfecto Pasivo, Acusativo Singular", syntaxis: "Predicativo del Objeto", translatio: { es: "reunida", en: "collected", zh: "集結的" } },
                            { textus: "habebat,", lemma: "habeo", morphologia: "Imperfecto Indicativo Activo, 3ª Persona Singular", syntaxis: "Verbo", translatio: { es: "tenía", en: "he had", zh: "擁有" } },
                            { textus: "praemittit,", lemma: "praemitto", morphologia: "Presente Indicativo Activo, 3ª Persona Singular", syntaxis: "Verbo", translatio: { es: "envía por delante", en: "he sends ahead", zh: "派遣" } },
                            { textus: "qui", lemma: "qui", morphologia: "Nominativo Masculino Plural", syntaxis: "Sujeto", translatio: { es: "para que", en: "to", zh: "他們去" } },
                            { textus: "uideant", lemma: "video", morphologia: "Presente Subjuntivo Activo, 3ª Persona Plural", syntaxis: "Verbo (cláusula final)", translatio: { es: "vieran", en: "see", zh: "偵察" } },
                            { textus: "quas", lemma: "qui", morphologia: "Acusativo Femenino Plural", syntaxis: "Atributo", translatio: { es: "a qué", en: "into which", zh: "往哪個" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición (+ Acusativo)", syntaxis: "Modificador", translatio: { es: "hacia", en: "into", zh: "向" } },
                            { textus: "partes", lemma: "pars", morphologia: "Acusativo Femenino Plural", syntaxis: "Complemento de 'in'", translatio: { es: "partes", en: "parts", zh: "方向" } },
                            { textus: "hostes", lemma: "hostis", morphologia: "Nominativo Masculino Plural", syntaxis: "Sujeto", translatio: { es: "los enemigos", en: "the enemy", zh: "敵人" } },
                            { textus: "iter", lemma: "iter", morphologia: "Acusativo Neutro Singular", syntaxis: "Objeto Directo", translatio: { es: "la marcha", en: "their march", zh: "行軍路線" } },
                            { textus: "faciant.", lemma: "facio", morphologia: "Presente Subjuntivo Activo, 3ª Persona Plural", syntaxis: "Verbo", translatio: { es: "hacían", en: "were making", zh: "前進" } }
                        ],
                        ordo_syntacticus: "Oración compuesta con dos verbos principales para 'Caesar' ('facit' y 'praemittit'), una cláusula de relativo ('quem... habebat') y una cláusula final ('qui uideant') que contiene una interrogativa indirecta ('quas... faciant').",
                        notae: "'Coactum habebat' es una construcción perifrástica común que enfatiza el estado resultante de la acción: 'tenía reunida'.",
                        translationes: {
                            es: "César hace lo mismo y envía por delante a toda la caballería, hasta un número de cuatro mil, que tenía reunida de toda la provincia y de los Eduos y sus aliados, para que vieran hacia qué partes hacían la marcha los enemigos.",
                            en: "Caesar does the same and sends ahead all the cavalry, to the number of four thousand, which he had collected from the whole province and from the Haedui and their allies, to see into which parts the enemy were making their march.",
                            zh: "凱撒也同樣行動，並派遣全部約四千人的騎兵先行，這支騎兵是他從整個行省、愛杜依人及其盟友那裡集結而來的，目的是偵察敵人正朝哪個方向行軍。"
                        }
                    },
                    {
                        id_orationis: 'o3',
                        original_lat: "Qui cupidius nouissimum agmen insecuti alieno loco cum equitatu Heluetiorum proelium committunt; et pauci de nostris cadunt.",
                        verba: [
                            { textus: "Qui", lemma: "qui", morphologia: "Nominativo Masculino Plural", syntaxis: "Sujeto", translatio: { es: "estos", en: "they", zh: "他們" } },
                            { textus: "cupidius", lemma: "cupide", morphologia: "Adverbio Comparativo", syntaxis: "Modificador verbal", translatio: { es: "demasiado ansiosamente", en: "too eagerly", zh: "過於急切地" } },
                            { textus: "nouissimum", lemma: "novissimus", morphologia: "Acusativo Neutro Singular", syntaxis: "Atributo", translatio: { es: "la retaguardia", en: "the rearmost", zh: "最後的" } },
                            { textus: "agmen", lemma: "agmen", morphologia: "Acusativo Neutro Singular", syntaxis: "Objeto Directo", translatio: { es: "columna", en: "column", zh: "行軍隊列" } },
                            { textus: "insecuti", lemma: "insequor", morphologia: "Participio Perfecto Deponente, Nominativo Plural", syntaxis: "Aposición", translatio: { es: "habiendo perseguido", en: "having pursued", zh: "追擊" } },
                            { textus: "alieno", lemma: "alienus", morphologia: "Ablativo Neutro Singular", syntaxis: "Atributo", translatio: { es: "desfavorable", en: "an unfavorable", zh: "不利的" } },
                            { textus: "loco", lemma: "locus", morphologia: "Ablativo Neutro Singular", syntaxis: "Complemento Circunstancial de Lugar", translatio: { es: "lugar", en: "place", zh: "地點" } },
                            { textus: "cum", lemma: "cum", morphologia: "Preposición (+ Ablativo)", syntaxis: "Modificador Preposicional", translatio: { es: "con", en: "with", zh: "與" } },
                            { textus: "equitatu", lemma: "equitatus", morphologia: "Ablativo Masculino Singular", syntaxis: "Complemento de 'cum'", translatio: { es: "la caballería", en: "the cavalry", zh: "騎兵" } },
                            { textus: "Heluetiorum", lemma: "Helvetius", morphologia: "Genitivo Masculino Plural", syntaxis: "Complemento del Nombre", translatio: { es: "de los Helvecios", en: "of the Helvetii", zh: "赫爾維蒂人的" } },
                            { textus: "proelium", lemma: "proelium", morphologia: "Acusativo Neutro Singular", syntaxis: "Objeto Directo", translatio: { es: "combate", en: "battle", zh: "戰鬥" } },
                            { textus: "committunt;", lemma: "committo", morphologia: "Presente Indicativo Activo, 3ª Persona Plural", syntaxis: "Verbo", translatio: { es: "entablan", en: "they commit", zh: "展開" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción Coordinante", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "並且" } },
                            { textus: "pauci", lemma: "pauci", morphologia: "Nominativo Masculino Plural", syntaxis: "Sujeto", translatio: { es: "unos pocos", en: "a few", zh: "少數" } },
                            { textus: "de", lemma: "de", morphologia: "Preposición (+ Ablativo)", syntaxis: "Modificador (Partitivo)", translatio: { es: "de", en: "of", zh: "從" } },
                            { textus: "nostris", lemma: "noster", morphologia: "Ablativo Masculino Plural", syntaxis: "Complemento de 'de'", translatio: { es: "los nuestros", en: "our men", zh: "我方人員中" } },
                            { textus: "cadunt.", lemma: "cado", morphologia: "Presente Indicativo Activo, 3ª Persona Plural", syntaxis: "Verbo", translatio: { es: "caen", en: "fall", zh: "陣亡" } }
                        ],
                        ordo_syntacticus: "Oración compuesta por dos cláusulas coordinadas por '; et'.",
                        notae: "La expresión 'proelium committere' es una locución estándar para 'entablar combate'. 'Novissimum agmen' se refiere a la retaguardia de una columna en marcha.",
                        translationes: {
                            es: "Estos, habiendo perseguido con demasiada ansia la retaguardia, entablan combate en un lugar desfavorable con la caballería de los Helvecios; y unos pocos de los nuestros caen.",
                            en: "They, having pursued the rearmost column too eagerly, engage in battle in an unfavorable place with the cavalry of the Helvetii; and a few of our men fall.",
                            zh: "他們過於急切地追擊敵軍的後衛，在一個不利的地點與赫爾維蒂人的騎兵展開了戰鬥；我方有少數人陣亡。"
                        }
                    },
                    {
                        id_orationis: 'o4',
                        original_lat: "Quo proelio sublati Heluetii, quod quingentis equitibus tantam multitudinem equitum propulerant, audacius subsistere non numquam et nouissimo agmine proelio nostros lacessere coeperunt.",
                        verba: [
                            { textus: "Quo", lemma: "qui", morphologia: "Ablativo Neutro Singular", syntaxis: "Atributo", translatio: { es: "por esta", en: "by this", zh: "因為這次" } },
                            { textus: "proelio", lemma: "proelium", morphologia: "Ablativo Neutro Singular", syntaxis: "Complemento de Causa", translatio: { es: "batalla", en: "battle", zh: "戰鬥" } },
                            { textus: "sublati", lemma: "tollo", morphologia: "Participio Perfecto Pasivo, Nominativo Plural", syntaxis: "Aposición", translatio: { es: "envalentonados", en: "emboldened", zh: "受到鼓舞" } },
                            { textus: "Heluetii,", lemma: "Helvetius", morphologia: "Nominativo Masculino Plural", syntaxis: "Sujeto", translatio: { es: "los Helvecios", en: "the Helvetii", zh: "赫爾維蒂人" } },
                            { textus: "quod", lemma: "quod", morphologia: "Conjunción Causal", syntaxis: "Nexo", translatio: { es: "porque", en: "because", zh: "因為" } },
                            { textus: "quingentis", lemma: "quingenti", morphologia: "Ablativo Masculino Plural", syntaxis: "Atributo", translatio: { es: "con quinientos", en: "with five hundred", zh: "用五百名" } },
                            { textus: "equitibus", lemma: "eques", morphologia: "Ablativo Masculino Plural", syntaxis: "Complemento de Medio", translatio: { es: "jinetes", en: "horsemen", zh: "騎兵" } },
                            { textus: "tantam", lemma: "tantus", morphologia: "Acusativo Femenino Singular", syntaxis: "Atributo", translatio: { es: "a tan gran", en: "so great", zh: "如此龐大的" } },
                            { textus: "multitudinem", lemma: "multitudo", morphologia: "Acusativo Femenino Singular", syntaxis: "Objeto Directo", translatio: { es: "multitud", en: "a multitude", zh: "數量的" } },
                            { textus: "equitum", lemma: "eques", morphologia: "Genitivo Masculino Plural", syntaxis: "Complemento del Nombre", translatio: { es: "de jinetes", en: "of horsemen", zh: "騎兵" } },
                            { textus: "propulerant,", lemma: "propello", morphologia: "Pluscuamperfecto Indicativo Activo, 3ª Persona Plural", syntaxis: "Verbo", translatio: { es: "habían hecho retroceder", en: "they had driven back", zh: "擊退了" } },
                            { textus: "audacius", lemma: "audacter", morphologia: "Adverbio Comparativo", syntaxis: "Modificador verbal", translatio: { es: "más audazmente", en: "more boldly", zh: "更大膽地" } },
                            { textus: "subsistere", lemma: "subsisto", morphologia: "Presente Infinitivo Activo", syntaxis: "Verbo (Infinitivo histórico)", translatio: { es: "hacer alto", en: "to halt", zh: "停下來" } },
                            { textus: "non", lemma: "non", morphologia: "Adverbio de Negación", syntaxis: "Modificador", translatio: { es: "no", en: "not", zh: "不" } },
                            { textus: "numquam", lemma: "numquam", morphologia: "Adverbio de Tiempo", syntaxis: "Modificador", translatio: { es: "nunca (a veces)", en: "never (sometimes)", zh: "從不 (有時)" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción Coordinante", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "並且" } },
                            { textus: "nouissimo", lemma: "novissimus", morphologia: "Ablativo Neutro Singular", syntaxis: "Atributo", translatio: { es: "con su retaguardia", en: "from their rearmost", zh: "用後衛" } },
                            { textus: "agmine", lemma: "agmen", morphologia: "Ablativo Neutro Singular", syntaxis: "Complemento de Medio", translatio: { es: "columna", en: "column", zh: "部隊" } },
                            { textus: "proelio", lemma: "proelium", morphologia: "Ablativo Neutro Singular", syntaxis: "Complemento de Medio", translatio: { es: "con combate", en: "with battle", zh: "以戰鬥" } },
                            { textus: "nostros", lemma: "noster", morphologia: "Acusativo Masculino Plural", syntaxis: "Objeto Directo", translatio: { es: "a los nuestros", en: "our men", zh: "我方人員" } },
                            { textus: "lacessere", lemma: "lacesso", morphologia: "Presente Infinitivo Activo", syntaxis: "Verbo (Infinitivo histórico)", translatio: { es: "hostigar", en: "to harass", zh: "騷擾" } },
                            { textus: "coeperunt.", lemma: "coepi", morphologia: "Perfecto Indicativo Activo, 3ª Persona Plural", syntaxis: "Verbo", translatio: { es: "comenzaron", en: "they began", zh: "開始" } }
                        ],
                        ordo_syntacticus: "Oración principal ('Heluetii... coeperunt') con el sujeto modificado por un participio ('sublati') y una cláusula causal ('quod... propulerant'). El verbo 'coeperunt' rige dos infinitivos históricos ('subsistere' y 'lacessere').",
                        notae: "'Non numquam' es una locución que significa 'a veces'. Los infinitivos históricos se usan para dar más viveza a la narración.",
                        translationes: {
                            es: "Envalentonados por esta batalla, porque con quinientos jinetes habían hecho retroceder a tan gran multitud de jinetes, comenzaron a hacer alto a veces más audazmente y a hostigar a los nuestros con su retaguardia en combate.",
                            en: "Emboldened by this battle, because with five hundred horsemen they had driven back so great a multitude of horsemen, they began to halt more boldly at times and to harass our men from their rearmost column with battle.",
                            zh: "赫爾維蒂人因這次戰鬥而受到鼓舞，因為他們僅用五百名騎兵就擊退了如此龐大數量的敵軍騎兵，於是他們開始更大膽地不時停下來，並用後衛部隊與我方人員戰鬥騷擾。"
                        }
                    },
                    {
                        id_orationis: 'o5',
                        original_lat: "Caesar suos a proelio continebat ac satis habebat in praesentia hostem rapinis, pabulationibus populationibusque prohibere.",
                        verba: [
                            { textus: "Caesar", lemma: "Caesar", morphologia: "Nominativo Masculino Singular", syntaxis: "Sujeto", translatio: { es: "César", en: "Caesar", zh: "凱撒" } },
                            { textus: "suos", lemma: "suus", morphologia: "Acusativo Masculino Plural", syntaxis: "Objeto Directo", translatio: { es: "a los suyos", en: "his men", zh: "自己的部下" } },
                            { textus: "a", lemma: "a/ab", morphologia: "Preposición (+ Ablativo)", syntaxis: "Modificador", translatio: { es: "del", en: "from", zh: "遠離" } },
                            { textus: "proelio", lemma: "proelium", morphologia: "Ablativo Neutro Singular", syntaxis: "Complemento de 'a'", translatio: { es: "combate", en: "battle", zh: "戰鬥" } },
                            { textus: "continebat", lemma: "contineo", morphologia: "Imperfecto Indicativo Activo, 3ª Persona Singular", syntaxis: "Verbo", translatio: { es: "contenía", en: "was restraining", zh: "約束" } },
                            { textus: "ac", lemma: "ac", morphologia: "Conjunción Coordinante", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "並且" } },
                            { textus: "satis", lemma: "satis", morphologia: "Adverbio", syntaxis: "Parte de locución", translatio: { es: "suficiente", en: "it sufficient", zh: "滿足於" } },
                            { textus: "habebat", lemma: "habeo", morphologia: "Imperfecto Indicativo Activo, 3ª Persona Singular", syntaxis: "Verbo", translatio: { es: "consideraba", en: "he considered", zh: "認為" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición (+ Ablativo)", syntaxis: "Modificador", translatio: { es: "por", en: "for", zh: "目前" } },
                            { textus: "praesentia", lemma: "praesentia", morphologia: "Ablativo Neutro Plural", syntaxis: "Complemento de 'in'", translatio: { es: "el presente", en: "the present", zh: "暫時" } },
                            { textus: "hostem", lemma: "hostis", morphologia: "Acusativo Masculino Singular", syntaxis: "Sujeto de Infinitivo", translatio: { es: "al enemigo", en: "the enemy", zh: "敵人" } },
                            { textus: "rapinis,", lemma: "rapina", morphologia: "Ablativo Femenino Plural", syntaxis: "Complemento de Separación", translatio: { es: "de pillajes", en: "from plunder", zh: "搶劫" } },
                            { textus: "pabulationibus", lemma: "pabulatio", morphologia: "Ablativo Femenino Plural", syntaxis: "Complemento de Separación", translatio: { es: "forrajeos", en: "foraging", zh: "搜集糧草" } },
                            { textus: "populationibusque", lemma: "populatio", morphologia: "Ablativo Femenino Plural + Conjunción", syntaxis: "Complemento de Separación", translatio: { es: "y devastaciones", en: "and raiding", zh: "以及劫掠" } },
                            { textus: "prohibere.", lemma: "prohibeo", morphologia: "Presente Infinitivo Activo", syntaxis: "Verbo (Complemento Directo)", translatio: { es: "impedir", en: "to prevent", zh: "阻止" } }
                        ],
                        ordo_syntacticus: "Oración compuesta por dos cláusulas coordinadas por 'ac'. La segunda cláusula tiene una construcción de infinitivo ('hostem... prohibere') como complemento de 'satis habebat'.",
                        notae: "La locución 'satis habere' + infinitivo significa 'considerar suficiente...', 'darse por satisfecho con...'. El uso del imperfecto ('continebat', 'habebat') denota una acción continuada o habitual.",
                        translationes: {
                            es: "César contenía a los suyos del combate y consideraba suficiente por el momento impedir al enemigo los pillajes, forrajeos y devastaciones.",
                            en: "Caesar was restraining his men from battle and considered it sufficient for the present to prevent the enemy from plunder, foraging, and raiding.",
                            zh: "凱撒約束自己的部下避免戰鬥，並且暫時滿足於阻止敵人進行搶劫、搜集糧草以及劫掠。"
                        }
                    },
                    {
                        id_orationis: 'o6',
                        original_lat: "Ita dies circiter quindecim iter fecerunt, uti inter nouissimum hostium agmen et nostrum primum non amplius quinis aut senis milibus passuum interesset.",
                        verba: [
                            { textus: "Ita", lemma: "ita", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "así", en: "thus", zh: "就這樣" } },
                            { textus: "dies", lemma: "dies", morphologia: "Acusativo Masculino Plural", syntaxis: "Complemento Circunstancial de Tiempo", translatio: { es: "días", en: "days", zh: "天" } },
                            { textus: "circiter", lemma: "circiter", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "aproximadamente", en: "about", zh: "大約" } },
                            { textus: "quindecim", lemma: "quindecim", morphologia: "Numeral, Indeclinable", syntaxis: "Atributo", translatio: { es: "quince", en: "fifteen", zh: "十五" } },
                            { textus: "iter", lemma: "iter", morphologia: "Acusativo Neutro Singular", syntaxis: "Objeto Directo", translatio: { es: "marcha", en: "march", zh: "行軍" } },
                            { textus: "fecerunt,", lemma: "facio", morphologia: "Perfecto Indicativo Activo, 3ª Persona Plural", syntaxis: "Verbo", translatio: { es: "hicieron", en: "they made", zh: "進行了" } },
                            { textus: "uti", lemma: "ut", morphologia: "Conjunción de Resultado", syntaxis: "Nexo", translatio: { es: "de modo que", en: "so that", zh: "以至於" } },
                            { textus: "inter", lemma: "inter", morphologia: "Preposición (+ Acusativo)", syntaxis: "Modificador Preposicional", translatio: { es: "entre", en: "between", zh: "在...之間" } },
                            { textus: "nouissimum", lemma: "novissimus", morphologia: "Acusativo Neutro Singular", syntaxis: "Atributo", translatio: { es: "la retaguardia", en: "the rearmost", zh: "最後的" } },
                            { textus: "hostium", lemma: "hostis", morphologia: "Genitivo Masculino Plural", syntaxis: "Complemento del Nombre", translatio: { es: "de los enemigos", en: "of the enemy", zh: "敵軍的" } },
                            { textus: "agmen", lemma: "agmen", morphologia: "Acusativo Neutro Singular", syntaxis: "Complemento de 'inter'", translatio: { es: "columna", en: "column", zh: "隊列" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción Coordinante", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "和" } },
                            { textus: "nostrum", lemma: "noster", morphologia: "Acusativo Neutro Singular", syntaxis: "Atributo", translatio: { es: "nuestra", en: "our", zh: "我方的" } },
                            { textus: "primum", lemma: "primus", morphologia: "Acusativo Neutro Singular", syntaxis: "Atributo", translatio: { es: "primera", en: "first", zh: "前鋒" } },
                            { textus: "non", lemma: "non", morphologia: "Adverbio de Negación", syntaxis: "Modificador", translatio: { es: "no", en: "not", zh: "不" } },
                            { textus: "amplius", lemma: "amplus", morphologia: "Adverbio Comparativo", syntaxis: "Modificador", translatio: { es: "más", en: "more", zh: "超過" } },
                            { textus: "quinis", lemma: "quini", morphologia: "Numeral Distributivo, Ablativo Plural", syntaxis: "Atributo", translatio: { es: "cinco", en: "five", zh: "五" } },
                            { textus: "aut", lemma: "aut", morphologia: "Conjunción Disyuntiva", syntaxis: "Nexo", translatio: { es: "o", en: "or", zh: "或" } },
                            { textus: "senis", lemma: "seni", morphologia: "Numeral Distributivo, Ablativo Plural", syntaxis: "Atributo", translatio: { es: "seis", en: "six", zh: "六" } },
                            { textus: "milibus", lemma: "mille", morphologia: "Ablativo Neutro Plural", syntaxis: "Complemento de Medida", translatio: { es: "mil", en: "thousand", zh: "千" } },
                            { textus: "passuum", lemma: "passus", morphologia: "Genitivo Masculino Plural", syntaxis: "Complemento del Nombre", translatio: { es: "pasos", en: "of paces", zh: "步" } },
                            { textus: "interesset.", lemma: "intersum", morphologia: "Imperfecto Subjuntivo, 3ª Persona Singular", syntaxis: "Verbo", translatio: { es: "hubiera", en: "there was", zh: "相隔" } }
                        ],
                        ordo_syntacticus: "Oración principal ('iter fecerunt') seguida de una cláusula de resultado ('uti... interesset').",
                        notae: "Se usan los numerales distributivos ('quinis', 'senis') en lugar de los cardinales porque se refieren a una distancia que se mantenía constantemente día a día. 'Milia passuum' (mil pasos) es la milla romana.",
                        translationes: {
                            es: "Así marcharon durante unos quince días, de modo que entre la retaguardia de los enemigos y nuestra vanguardia no hubiera más de cinco o seis millas.",
                            en: "Thus they marched for about fifteen days, so that between the rearmost column of the enemy and our first there was not more than five or six miles.",
                            zh: "他們就這樣行軍了大約十五天，以至於敵軍的後衛與我軍的前鋒之間，相隔不超過五或六羅馬里。"
                        }
                    }
                ]
            }
        ]
    }
};

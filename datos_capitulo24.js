const corpus = {
    titulus_principalis: "De Bello Gallico, I, 24",
    auctor: "C. Iulius Caesar",
    titulus_secundarius: {
        es: "Disposición de batalla en la colina",
        en: "Battle Array on the Hill",
        zh: "山丘上的戰鬥部署"
    },
    introductio: {
        es: {
            titulus: "Introducción al Capítulo 24",
            contentus: `<p>Este capítulo describe la reacción táctica de César ante el repentino ataque de los helvecios a su retaguardia. Dejando de ser el perseguidor para convertirse en el defensor, César aprovecha inmediatamente el terreno. Retira sus fuerzas a una colina cercana y envía a su caballería para frenar el asalto enemigo y ganar tiempo. En la ladera, despliega a sus cuatro legiones veteranas en la formidable formación de triple línea de batalla (*triplex acies*). En la cima, posiciona a las dos legiones recién reclutadas junto con todas las tropas auxiliares, asignándoles la doble tarea de proteger el bagaje y actuar como reserva. Mientras los helvecios agrupan sus carros, rechazan a la caballería romana y, formando una densa falange, avanzan cuesta arriba para enfrentarse a la primera línea de César. La batalla está a punto de comenzar.</p>`
        },
        en: {
            titulus: "Introduction to Chapter 24",
            contentus: `<p>This chapter describes Caesar's tactical reaction to the Helvetii's sudden attack on his rearguard. No longer the pursuer but the defender, Caesar immediately takes advantage of the terrain. He withdraws his forces to a nearby hill and sends his cavalry to slow the enemy assault and buy time. On the hillside, he deploys his four veteran legions in the formidable triple battle line formation (*triplex acies*). On the summit, he positions the two newly recruited legions along with all the auxiliary troops, assigning them the dual task of protecting the baggage and acting as a reserve. As the Helvetii gather their carts, drive back the Roman cavalry, and, forming a dense phalanx, advance uphill to engage Caesar's first line, the battle is about to commence.</p>`
        },
        zh: {
            titulus: "第 24 章介紹",
            contentus: `<p>本章描述了凱撒對赫爾維蒂人突襲其後衛的戰術反應。凱撒不再是追擊者，而是防禦者，他立即利用了地形優勢。他將部隊撤至附近的山丘，並派出騎兵以減緩敵人的攻勢並爭取時間。在山坡上，他將他的四個精銳軍團部署成強大的三重戰線（triplex acies）。在山頂上，他部署了兩個新招募的軍團以及所有輔助部隊，賦予他們保護輜重和充當預備隊的雙重任務。與此同時，赫爾維蒂人集結了他們的戰車，擊退了羅馬騎兵，並組成密集的方陣，向山上推進，準備與凱撒的第一道防線交戰。大戰一觸即發。</p>`
        }
    },
    textus: {
        id: 24,
        capitula: [
            {
                id_capituli: 24,
                orationes: [
                    {
                        id_orationis: 'o1',
                        original_lat: "Postquam id animum aduertit, copias suas Caesar in proximum collem subducit equitatumque, qui sustineret hostium impetum, misit.",
                        verba: [
                            { textus: "Postquam", lemma: "postquam", morphologia: "Conjunción", syntaxis: "Nexo (temporal)", translatio: { es: "Después de que", en: "After", zh: "在...之後" } },
                            { textus: "id", lemma: "is", morphologia: "Pronombre, acusativo, singular, neutro", syntaxis: "Objeto Directo", translatio: { es: "esto", en: "this", zh: "這點" } },
                            { textus: "animum", lemma: "animus", morphologia: "Sustantivo, acusativo, singular, masculino", syntaxis: "Parte de locución", translatio: { es: "advirtió", en: "he noticed", zh: "注意到" } },
                            { textus: "aduertit", lemma: "aduerto", morphologia: "Verbo, 3ª p, singular, perfecto, indicativo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "", en: "", zh: "" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "copias", lemma: "copia", morphologia: "Sustantivo, acusativo, plural, femenino", syntaxis: "Objeto Directo", translatio: { es: "sus tropas", en: "his troops", zh: "他的部隊" } },
                            { textus: "suas", lemma: "suus", morphologia: "Adjetivo posesivo, acusativo, plural, femenino", syntaxis: "Modificador", translatio: { es: "", en: "", zh: "" } },
                            { textus: "Caesar", lemma: "Caesar", morphologia: "Sustantivo, nominativo, singular, masculino", syntaxis: "Sujeto", translatio: { es: "César", en: "Caesar", zh: "凱撒" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "a", en: "onto", zh: "到" } },
                            { textus: "proximum", lemma: "proximus", morphologia: "Adjetivo, acusativo, singular, masculino, superlativo", syntaxis: "Modificador", translatio: { es: "cercana", en: "the nearest", zh: "最近的" } },
                            { textus: "collem", lemma: "collis", morphologia: "Sustantivo, acusativo, singular, masculino", syntaxis: "C. preposicional", translatio: { es: "una colina", en: "hill", zh: "山丘上" } },
                            { textus: "subducit", lemma: "subduco", morphologia: "Verbo, 3ª p, singular, presente, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "retira", en: "withdraws", zh: "撤退" } },
                            { textus: "equitatumque", lemma: "equitatusque", morphologia: "Sustantivo y conjunción, acusativo, singular, masculino", syntaxis: "Objeto Directo", translatio: { es: "y la caballería", en: "and the cavalry", zh: "並派遣騎兵" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "qui", lemma: "qui", morphologia: "Pronombre relativo, nominativo, singular, masculino", syntaxis: "Sujeto", translatio: { es: "para que", en: "which", zh: "去" } },
                            { textus: "sustineret", lemma: "sustineo", morphologia: "Verbo, 3ª p, singular, imperfecto, subjuntivo, activo", syntaxis: "Verbo (de subordinada final)", translatio: { es: "contuviera", en: "was to sustain", zh: "抵擋" } },
                            { textus: "hostium", lemma: "hostis", morphologia: "Sustantivo, genitivo, plural, masculino", syntaxis: "C. del Nombre", translatio: { es: "de los enemigos", en: "of the enemy", zh: "敵人的" } },
                            { textus: "impetum", lemma: "impetus", morphologia: "Sustantivo, acusativo, singular, masculino", syntaxis: "Objeto Directo", translatio: { es: "el ataque", en: "the attack", zh: "衝擊" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "misit", lemma: "mitto", morphologia: "Verbo, 3ª p, singular, perfecto, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "envió", en: "he sent", zh: "" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Una cláusula temporal ('Postquam...') introduce dos oraciones principales coordinadas. La segunda ('equitatumque... misit') contiene una cláusula relativa de finalidad ('qui sustineret').",
                        notae: "'Animum aduertere' es una locución verbal que significa 'darse cuenta' o 'notar'.",
                        translationes: {
                            es: "Después de que advirtió esto, César retira sus tropas a una colina cercana y envió a la caballería para que contuviera el ataque de los enemigos.",
                            en: "After he noticed this, Caesar withdraws his troops to the nearest hill and sent the cavalry to sustain the enemy's attack.",
                            zh: "凱撒注意到這點後，將他的部隊撤退到最近的山丘上，並派遣騎兵去抵擋敵人的衝擊。"
                        }
                    },
                    {
                        id_orationis: 'o2',
                        original_lat: "Ipse interim in colle medio triplicem aciem instruxit legionum quattuor ueteranarum, ita uti supra se in summo iugo duas legiones quas in Gallia citeriore proxime conscripserat et omnia auxilia conlocaret ac totum montem hominibus compleret;",
                        verba: [
                            { textus: "Ipse", lemma: "ipse", morphologia: "Pronombre, nominativo, singular, masculino", syntaxis: "Sujeto", translatio: { es: "Él mismo", en: "He himself", zh: "他自己" } },
                            { textus: "interim", lemma: "interim", morphologia: "Adverbio", syntaxis: "Modificador temporal", translatio: { es: "entretanto", en: "meanwhile", zh: "同時" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "en medio de", en: "in the middle of", zh: "在" } },
                            { textus: "colle", lemma: "collis", morphologia: "Sustantivo, ablativo, singular, masculino", syntaxis: "C.C. de Lugar", translatio: { es: "la colina", en: "the hill", zh: "山坡" } },
                            { textus: "medio", lemma: "medius", morphologia: "Adjetivo, ablativo, singular, masculino", syntaxis: "Modificador", translatio: { es: "", en: "", zh: "中部" } },
                            { textus: "triplicem", lemma: "triplex", morphologia: "Adjetivo, acusativo, singular, femenino", syntaxis: "Modificador", translatio: { es: "una triple", en: "a triple", zh: "三重" } },
                            { textus: "aciem", lemma: "acies", morphologia: "Sustantivo, acusativo, singular, femenino", syntaxis: "Objeto Directo", translatio: { es: "línea de batalla", en: "line of battle", zh: "戰線" } },
                            { textus: "instruxit", lemma: "instruo", morphologia: "Verbo, 3ª p, singular, perfecto, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "desplegó", en: "he drew up", zh: "部署了" } },
                            { textus: "legionum", lemma: "legio", morphologia: "Sustantivo, genitivo, plural, femenino", syntaxis: "Genitivo de descripción", translatio: { es: "de las legiones", en: "of the legions", zh: "個" } },
                            { textus: "quattuor", lemma: "quattuor", morphologia: "Adjetivo numeral", syntaxis: "Modificador", translatio: { es: "cuatro", en: "four", zh: "四" } },
                            { textus: "ueteranarum", lemma: "ueteranus", morphologia: "Adjetivo, genitivo, plural, femenino", syntaxis: "Modificador", translatio: { es: "veteranas", en: "veteran", zh: "精銳軍團的" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "ita", lemma: "ita", morphologia: "Adverbio", syntaxis: "Correlativo", translatio: { es: "de tal modo", en: "in such a way", zh: "部署方式" } },
                            { textus: "uti", lemma: "ut", morphologia: "Conjunción", syntaxis: "Nexo (consecutivo)", translatio: { es: "que", en: "that", zh: "是" } },
                            { textus: "supra", lemma: "supra", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "por encima de", en: "above", zh: "在他上方" } },
                            { textus: "se", lemma: "sui", morphologia: "Pronombre, acusativo, singular", syntaxis: "C. preposicional", translatio: { es: "sí", en: "himself", zh: "" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "en", en: "on", zh: "的" } },
                            { textus: "summo", lemma: "summus", morphologia: "Adjetivo, ablativo, singular, neutro", syntaxis: "Modificador", translatio: { es: "la cima de", en: "the top of", zh: "最高" } },
                            { textus: "iugo", lemma: "iugum", morphologia: "Sustantivo, ablativo, singular, neutro", syntaxis: "C.C. de Lugar", translatio: { es: "la colina", en: "the ridge", zh: "山脊上" } },
                            { textus: "duas", lemma: "duo", morphologia: "Adjetivo numeral, acusativo, plural, femenino", syntaxis: "Modificador", translatio: { es: "las dos", en: "the two", zh: "兩個" } },
                            { textus: "legiones", lemma: "legio", morphologia: "Sustantivo, acusativo, plural, femenino", syntaxis: "Objeto Directo", translatio: { es: "legiones", en: "legions", zh: "軍團" } },
                            { textus: "quas", lemma: "qui", morphologia: "Pronombre relativo, acusativo, plural, femenino", syntaxis: "Objeto Directo", translatio: { es: "que", en: "which", zh: "即" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "en", en: "in", zh: "在" } },
                            { textus: "Gallia", lemma: "Gallia", morphologia: "Sustantivo, ablativo, singular, femenino", syntaxis: "C. preposicional", translatio: { es: "la Galia", en: "Gaul", zh: "山南高盧" } },
                            { textus: "citeriore", lemma: "citerior", morphologia: "Adjetivo, ablativo, singular, femenino, comparativo", syntaxis: "Modificador", translatio: { es: "Citerior", en: "Cisalpine", zh: "" } },
                            { textus: "proxime", lemma: "proxime", morphologia: "Adverbio, superlativo", syntaxis: "Modificador temporal", translatio: { es: "recientemente", en: "recently", zh: "最近" } },
                            { textus: "conscripserat", lemma: "conscribo", morphologia: "Verbo, 3ª p, singular, pluscuamperfecto, indicativo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "había reclutado", en: "he had enrolled", zh: "招募的" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "和" } },
                            { textus: "omnia", lemma: "omnis", morphologia: "Adjetivo, acusativo, plural, neutro", syntaxis: "Modificador", translatio: { es: "todas", en: "all", zh: "所有" } },
                            { textus: "auxilia", lemma: "auxilium", morphologia: "Sustantivo, acusativo, plural, neutro", syntaxis: "Objeto Directo", translatio: { es: "las tropas auxiliares", en: "the auxiliary troops", zh: "輔助部隊" } },
                            { textus: "conlocaret", lemma: "conloco", morphologia: "Verbo, 3ª p, singular, imperfecto, subjuntivo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "colocó", en: "he placed", zh: "安置" } },
                            { textus: "ac", lemma: "ac", morphologia: "Conjunción", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "並" } },
                            { textus: "totum", lemma: "totus", morphologia: "Adjetivo, acusativo, singular, masculino", syntaxis: "Modificador", translatio: { es: "todo", en: "the whole", zh: "用士兵" } },
                            { textus: "montem", lemma: "mons", morphologia: "Sustantivo, acusativo, singular, masculino", syntaxis: "Objeto Directo", translatio: { es: "el monte", en: "mountain", zh: "佔滿" } },
                            { textus: "hominibus", lemma: "homo", morphologia: "Sustantivo, ablativo, plural, masculino", syntaxis: "Ablativo de medio", translatio: { es: "con hombres", en: "with men", zh: "整座山" } },
                            { textus: "compleret", lemma: "compleo", morphologia: "Verbo, 3ª p, singular, imperfecto, subjuntivo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "llenó", en: "he filled", zh: "" } },
                            { textus: ";", lemma: ";", morphologia: "Puntuación", syntaxis: "Fin de cláusula", translatio: { es: ";", en: ";", zh: "；" } }
                        ],
                        ordo_syntacticus: "Oración principal ('Ipse... instruxit') seguida de una cláusula consecutiva o modal introducida por 'ita uti' que detalla la disposición de las tropas.",
                        notae: "'Triplicem aciem' es la formación de batalla romana estándar, con tres líneas de cohortes que permitían rotación y apoyo.",
                        translationes: {
                            es: "Él mismo, entretanto, en medio de la colina, desplegó una triple línea de batalla de las cuatro legiones veteranas, de tal modo que por encima de sí, en la cima de la colina, colocó las dos legiones que había reclutado recientemente en la Galia Citerior y todas las tropas auxiliares, y llenó todo el monte de hombres;",
                            en: "He himself, meanwhile, in the middle of the hill, drew up a triple line of battle of the four veteran legions, in such a way that above him, on the highest ridge, he placed the two legions which he had recently enrolled in Cisalpine Gaul and all the auxiliary troops, and filled the whole mountain with men;",
                            zh: "他自己則同時在山坡中部部署了由四個精銳軍團組成的三重戰線，部署方式是在他上方的最高山脊上，安置了他在山南高盧最近招募的兩個軍團和所有輔助部隊，並用士兵佔滿了整座山；"
                        }
                    },
                    {
                        id_orationis: 'o3',
                        original_lat: "interea sarcinas in unum locum conferri et eum ab his qui in superiore acie constiterant muniri iussit.",
                        verba: [
                            { textus: "interea", lemma: "interea", morphologia: "Adverbio", syntaxis: "Modificador temporal", translatio: { es: "entretanto", en: "in the meantime", zh: "與此同時" } },
                            { textus: "sarcinas", lemma: "sarcina", morphologia: "Sustantivo, acusativo, plural, femenino", syntaxis: "Sujeto (de infinitiva)", translatio: { es: "los bagajes", en: "the baggage", zh: "輜重" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "a", en: "into", zh: "集中到" } },
                            { textus: "unum", lemma: "unus", morphologia: "Adjetivo, acusativo, singular, masculino", syntaxis: "Modificador", translatio: { es: "un solo", en: "one", zh: "一個" } },
                            { textus: "locum", lemma: "locus", morphologia: "Sustantivo, acusativo, singular, masculino", syntaxis: "C. preposicional", translatio: { es: "lugar", en: "place", zh: "地方" } },
                            { textus: "conferri", lemma: "confero", morphologia: "Verbo, infinitivo, presente, pasivo", syntaxis: "Verbo (de infinitiva)", translatio: { es: "ser reunidos", en: "to be collected", zh: "" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "並且" } },
                            { textus: "eum", lemma: "is", morphologia: "Pronombre, acusativo, singular, masculino", syntaxis: "Sujeto (de infinitiva)", translatio: { es: "este (lugar)", en: "it", zh: "由" } },
                            { textus: "ab", lemma: "ab", morphologia: "Preposición", syntaxis: "Enlace (Agente)", translatio: { es: "por", en: "by", zh: "" } },
                            { textus: "his", lemma: "hic", morphologia: "Pronombre, ablativo, plural, masculino", syntaxis: "C. Agente", translatio: { es: "aquellos", en: "those", zh: "那些" } },
                            { textus: "qui", lemma: "qui", morphologia: "Pronombre relativo, nominativo, plural, masculino", syntaxis: "Sujeto", translatio: { es: "que", en: "who", zh: "" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "en", en: "on", zh: "在" } },
                            { textus: "superiore", lemma: "superior", morphologia: "Adjetivo, ablativo, singular, femenino, comparativo", syntaxis: "Modificador", translatio: { es: "más alta", en: "the higher", zh: "上方" } },
                            { textus: "acie", lemma: "acies", morphologia: "Sustantivo, ablativo, singular, femenino", syntaxis: "C.C. de Lugar", translatio: { es: "la línea", en: "line of battle", zh: "戰線" } },
                            { textus: "constiterant", lemma: "consisto", morphologia: "Verbo, 3ª p, plural, pluscuamperfecto, indicativo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "se habían situado", en: "had taken their stand", zh: "部署的" } },
                            { textus: "muniri", lemma: "munio", morphologia: "Verbo, infinitivo, presente, pasivo", syntaxis: "Verbo (de infinitiva)", translatio: { es: "ser fortificado", en: "to be fortified", zh: "士兵" } },
                            { textus: "iussit", lemma: "iubeo", morphologia: "Verbo, 3ª p, singular, perfecto, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "ordenó", en: "he ordered", zh: "來構築防禦工事" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Oración principal ('iussit') cuyo objeto directo son dos oraciones de infinitivo pasivo coordinadas ('sarcinas... conferri et eum... muniri').",
                        notae: "",
                        translationes: {
                            es: "entretanto, ordenó que los bagajes fueran reunidos en un solo lugar y que este fuera fortificado por aquellos que se habían situado en la línea más alta.",
                            en: "in the meantime, he ordered the baggage to be collected into one place and for that place to be fortified by those who had taken their stand on the higher line of battle.",
                            zh: "與此同時，他命令將輜重集中到一個地方，並由那些部署在上方戰線的士兵來為這個地方構築防禦工事。"
                        }
                    },
                    {
                        id_orationis: 'o4',
                        original_lat: "Heluetii cum omnibus suis carris secuti impedimenta in unum locum contulerunt;",
                        verba: [
                            { textus: "Heluetii", lemma: "Heluetii", morphologia: "Sustantivo, nominativo, plural, masculino", syntaxis: "Sujeto", translatio: { es: "Los helvecios", en: "The Helvetii", zh: "赫爾維蒂人" } },
                            { textus: "cum", lemma: "cum", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "con", en: "with", zh: "" } },
                            { textus: "omnibus", lemma: "omnis", morphologia: "Adjetivo, ablativo, plural, masculino", syntaxis: "Modificador", translatio: { es: "todos", en: "all", zh: "" } },
                            { textus: "suis", lemma: "suus", morphologia: "Adjetivo posesivo, ablativo, plural, masculino", syntaxis: "Modificador", translatio: { es: "sus", en: "their", zh: "" } },
                            { textus: "carris", lemma: "carrus", morphologia: "Sustantivo, ablativo, plural, masculino", syntaxis: "C.C. de Compañía", translatio: { es: "carros", en: "carts", zh: "" } },
                            { textus: "secuti", lemma: "sequor", morphologia: "Verbo, participio, perfecto, deponente, nominativo, plural, masculino", syntaxis: "Participio concertado", translatio: { es: "siguiendo", en: "having followed", zh: "跟著" } },
                            { textus: "impedimenta", lemma: "impedimentum", morphologia: "Sustantivo, acusativo, plural, neutro", syntaxis: "Objeto Directo", translatio: { es: "sus bagajes", en: "their baggage", zh: "將他們的輜重" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "a", en: "into", zh: "集中到" } },
                            { textus: "unum", lemma: "unus", morphologia: "Adjetivo, acusativo, singular, masculino", syntaxis: "Modificador", translatio: { es: "un solo", en: "one", zh: "一個" } },
                            { textus: "locum", lemma: "locus", morphologia: "Sustantivo, acusativo, singular, masculino", syntaxis: "C. preposicional", translatio: { es: "lugar", en: "place", zh: "地方" } },
                            { textus: "contulerunt", lemma: "confero", morphologia: "Verbo, 3ª p, plural, perfecto, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "reunieron", en: "they collected", zh: "" } },
                            { textus: ";", lemma: ";", morphologia: "Puntuación", syntaxis: "Fin de cláusula", translatio: { es: ";", en: ";", zh: "；" } }
                        ],
                        ordo_syntacticus: "Oración simple con un participio ('secuti') concertado con el sujeto.",
                        notae: "La acción de los helvecios de agrupar sus carros y bagajes indica que se están preparando para una batalla decisiva, no para una simple escaramuza.",
                        translationes: {
                            es: "Los helvecios, siguiendo con todos sus carros, reunieron sus bagajes en un solo lugar;",
                            en: "The Helvetii, having followed with all their carts, collected their baggage into one place;",
                            zh: "赫爾維蒂人帶著他們所有的戰車跟了上來，將他們的輜重集中到一個地方；"
                        }
                    },
                    {
                        id_orationis: 'o5',
                        original_lat: "ipsi confertissima acie reiecto nostro equitatu phalange facta sub primam nostram aciem successerunt.",
                        verba: [
                            { textus: "ipsi", lemma: "ipse", morphologia: "Pronombre, nominativo, plural, masculino", syntaxis: "Sujeto", translatio: { es: "ellos mismos", en: "they themselves", zh: "他們自己" } },
                            { textus: "confertissima", lemma: "confertus", morphologia: "Adjetivo, ablativo, singular, femenino, superlativo", syntaxis: "Modificador", translatio: { es: "muy densa", en: "very dense", zh: "非常密集的" } },
                            { textus: "acie", lemma: "acies", morphologia: "Sustantivo, ablativo, singular, femenino", syntaxis: "Ablativo de Modo", translatio: { es: "en una formación", en: "in a line", zh: "隊形" } },
                            { textus: "reiecto", lemma: "reicio", morphologia: "Verbo, participio, perfecto, pasivo, ablativo, singular, masculino", syntaxis: "Verbo (de ablativo absoluto)", translatio: { es: "tras rechazar", en: "having rejected", zh: "擊退了" } },
                            { textus: "nostro", lemma: "noster", morphologia: "Adjetivo posesivo, ablativo, singular, masculino", syntaxis: "Modificador", translatio: { es: "nuestra", en: "our", zh: "我方" } },
                            { textus: "equitatu", lemma: "equitatus", morphologia: "Sustantivo, ablativo, singular, masculino", syntaxis: "Sujeto (de ablativo absoluto)", translatio: { es: "caballería", en: "cavalry", zh: "騎兵後" } },
                            { textus: "phalange", lemma: "phalanx", morphologia: "Sustantivo, ablativo, singular, femenino", syntaxis: "Sujeto (de ablativo absoluto)", translatio: { es: "una falange", en: "a phalanx", zh: "組成" } },
                            { textus: "facta", lemma: "facio", morphologia: "Verbo, participio, perfecto, pasivo, ablativo, singular, femenino", syntaxis: "Verbo (de ablativo absoluto)", translatio: { es: "formada", en: "having been made", zh: "方陣" } },
                            { textus: "sub", lemma: "sub", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "hasta", en: "up to", zh: "前進到" } },
                            { textus: "primam", lemma: "primus", morphologia: "Adjetivo, acusativo, singular, femenino", syntaxis: "Modificador", translatio: { es: "la primera", en: "the first", zh: "我方第一道" } },
                            { textus: "nostram", lemma: "noster", morphologia: "Adjetivo posesivo, acusativo, singular, femenino", syntaxis: "Modificador", translatio: { es: "nuestra", en: "our", zh: "" } },
                            { textus: "aciem", lemma: "acies", morphologia: "Sustantivo, acusativo, singular, femenino", syntaxis: "C. preposicional", translatio: { es: "línea", en: "line", zh: "戰線下" } },
                            { textus: "successerunt", lemma: "succedo", morphologia: "Verbo, 3ª p, plural, perfecto, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "avanzaron", en: "they advanced", zh: "" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Oración principal ('ipsi... successerunt') con dos ablativos absolutos ('reiecto nostro equitatu', 'phalange facta') que describen acciones previas y simultáneas.",
                        notae: "La 'falange' era una formación de infantería muy compacta, efectiva para el choque frontal pero menos flexible que la legión.",
                        translationes: {
                            es: "ellos mismos, en una formación muy densa, tras rechazar a nuestra caballería y formada una falange, avanzaron hasta nuestra primera línea.",
                            en: "they themselves, in a very dense line, having rejected our cavalry and formed a phalanx, advanced up to our first line.",
                            zh: "他們自己則以非常密集的隊形，在擊退我方騎兵後，組成方陣，前進到我方第一道戰線下。"
                        }
                    }
                ]
            }
        ]
    }
};

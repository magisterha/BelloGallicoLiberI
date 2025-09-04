const corpus = {
    titulus_principalis: "De Bello Gallico, I, 27",
    auctor: "C. Iulius Caesar",
    titulus_secundarius: {
        es: "La rendición de los helvecios y la fuga de los verbigenos",
        en: "The Surrender of the Helvetii and the Flight of the Verbigeni",
        zh: "赫爾維蒂人的投降與維比根人的逃亡"
    },
    introductio: {
        es: {
            titulus: "Introducción al Capítulo 27",
            contentus: `<p>Este capítulo narra la rendición formal de los helvecios y un inmediato acto de insubordinación por parte de uno de sus clanes. Completamente desprovistos de recursos tras la batalla y la huida, los helvecios envían una embajada a César para negociar la paz. Los embajadores, en un acto de súplica total, se postran a sus pies llorando. César les ordena esperar su llegada en el lugar donde se encuentran. Una vez allí, impone sus términos: la entrega de rehenes, la totalidad de sus armas y la devolución de los esclavos que se habían pasado a su bando. Mientras se lleva a cabo esta recolección, unos 6.000 hombres del clan de los verbigenos, temiendo ser ejecutados o esperando pasar desapercibidos, escapan del campamento al amparo de la noche e intentan huir hacia el Rin y Germania.</p>`
        },
        en: {
            titulus: "Introduction to Chapter 27",
            contentus: `<p>This chapter narrates the formal surrender of the Helvetii and an immediate act of insubordination by one of their clans. Completely destitute of all resources after the battle and flight, the Helvetii send envoys to Caesar to negotiate peace. The envoys, in an act of total supplication, prostrate themselves at his feet, weeping. Caesar orders them to await his arrival at their current location. Once there, he imposes his terms: the surrender of hostages, all their weapons, and the return of slaves who had deserted to their side. While this collection is underway, about 6,000 men from the Verbigenus clan, either fearing execution or hoping to go unnoticed, escape from the camp under the cover of night and attempt to flee towards the Rhine and Germany.</p>`
        },
        zh: {
            titulus: "第 27 章介紹",
            contentus: `<p>本章敘述了赫爾維蒂人的正式投降以及其中一個部族的即時反抗行為。在戰鬥和逃亡後完全陷入資源枯竭的赫爾維蒂人派遣使者向凱撒求和。使者們以完全懇求的姿態，哭泣著俯伏在凱撒腳下。凱撒命令他們在原地等待他到達。抵達後，他提出了他的條件：交出人質、全部武器以及歸還投奔他們的奴隸。在收集這些物品的過程中，維比根部族約六千人，或許是害怕被處決，或許是希望能不被注意，趁著夜色逃離營地，試圖逃往萊茵河和日耳曼地區。</p>`
        }
    },
    textus: {
        id: 27,
        capitula: [
            {
                id_capituli: 27,
                orationes: [
                    {
                        id_orationis: 'o1',
                        original_lat: "Heluetii omnium rerum inopia adducti legatos de deditione ad eum miserunt.",
                        verba: [
                            { textus: "Heluetii", lemma: "Heluetii", morphologia: "Sustantivo, nominativo, plural, masculino", syntaxis: "Sujeto", translatio: { es: "Los helvecios", en: "The Helvetii", zh: "赫爾維蒂人" } },
                            { textus: "omnium", lemma: "omnis", morphologia: "Adjetivo, genitivo, plural, femenino", syntaxis: "Modificador", translatio: { es: "de todas", en: "of all", zh: "一切" } },
                            { textus: "rerum", lemma: "res", morphologia: "Sustantivo, genitivo, plural, femenino", syntaxis: "C. del Nombre", translatio: { es: "las cosas", en: "things", zh: "物資" } },
                            { textus: "inopia", lemma: "inopia", morphologia: "Sustantivo, ablativo, singular, femenino", syntaxis: "C.C. de Causa", translatio: { es: "por la escasez", en: "by the lack", zh: "的匱乏" } },
                            { textus: "adducti", lemma: "adduco", morphologia: "Verbo, participio, perfecto, pasivo, nominativo, plural, masculino", syntaxis: "Participio concertado", translatio: { es: "impulsados", en: "compelled", zh: "所迫" } },
                            { textus: "legatos", lemma: "legatus", morphologia: "Sustantivo, acusativo, plural, masculino", syntaxis: "Objeto Directo", translatio: { es: "embajadores", en: "envoys", zh: "派遣了使者" } },
                            { textus: "de", lemma: "de", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "para tratar sobre", en: "concerning", zh: "商討" } },
                            { textus: "deditione", lemma: "deditio", morphologia: "Sustantivo, ablativo, singular, femenino", syntaxis: "C. preposicional", translatio: { es: "la rendición", en: "surrender", zh: "投降事宜" } },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "ante", en: "to", zh: "到" } },
                            { textus: "eum", lemma: "is", morphologia: "Pronombre, acusativo, singular, masculino", syntaxis: "C. preposicional", translatio: { es: "él", en: "him", zh: "他那裡" } },
                            { textus: "miserunt", lemma: "mitto", morphologia: "Verbo, 3ª p, plural, perfecto, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "enviaron", en: "they sent", zh: "" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Oración simple con un participio ('adducti') concertado con el sujeto.",
                        notae: "",
                        translationes: {
                            es: "Los helvecios, impulsados por la escasez de todas las cosas, enviaron ante él embajadores para tratar sobre la rendición.",
                            en: "The Helvetii, compelled by the lack of all things, sent envoys to him concerning surrender.",
                            zh: "赫爾維蒂人因一切物資的匱乏所迫，派遣了使者到他那裡商討投降事宜。"
                        }
                    },
                    {
                        id_orationis: 'o2',
                        original_lat: "Qui cum eum in itinere conuenissent seque ad pedes proiecissent suppliciterque locuti flentes pacem petissent, atque eos in eo loco quo tum essent suum aduentum exspectare iussisset, paruerunt.",
                        verba: [
                            { textus: "Qui", lemma: "qui", morphologia: "Pronombre relativo (conectivo)", syntaxis: "Sujeto", translatio: { es: "Estos", en: "These", zh: "他們" } },
                            { textus: "cum", lemma: "cum", morphologia: "Conjunción", syntaxis: "Nexo (Cum histórico)", translatio: { es: "como", en: "when", zh: "在" } },
                            { textus: "eum", lemma: "is", morphologia: "Pronombre, acusativo, singular, masculino", syntaxis: "Objeto Directo", translatio: { es: "lo", en: "him", zh: "" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "en", en: "on", zh: "途中" } },
                            { textus: "itinere", lemma: "iter", morphologia: "Sustantivo, ablativo, singular, neutro", syntaxis: "C.C. de Lugar", translatio: { es: "el camino", en: "the march", zh: "" } },
                            { textus: "conuenissent", lemma: "conuenio", morphologia: "Verbo, 3ª p, plural, pluscuamperfecto, subjuntivo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "se hubieran encontrado con", en: "they had met", zh: "遇見他" } },
                            { textus: "seque", lemma: "seque", morphologia: "Pronombre y conjunción, acusativo, singular", syntaxis: "Objeto Directo", translatio: { es: "y se", en: "and themselves", zh: "並" } },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "a", en: "at", zh: "" } },
                            { textus: "pedes", lemma: "pes", morphologia: "Sustantivo, acusativo, plural, masculino", syntaxis: "C. preposicional", translatio: { es: "sus pies", en: "his feet", zh: "俯伏在他腳下" } },
                            { textus: "proiecissent", lemma: "proicio", morphologia: "Verbo, 3ª p, plural, pluscuamperfecto, subjuntivo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "hubieran arrojado", en: "had thrown", zh: "" } },
                            { textus: "suppliciterque", lemma: "suppliciterque", morphologia: "Adverbio y conjunción", syntaxis: "Modificador", translatio: { es: "y suplicantemente", en: "and as suppliants", zh: "言辭" } },
                            { textus: "locuti", lemma: "loquor", morphologia: "Verbo, participio, perfecto, deponente", syntaxis: "Verbo (de subordinada)", translatio: { es: "habiendo hablado", en: "having spoken", zh: "恭敬" } },
                            { textus: "flentes", lemma: "fleo", morphologia: "Verbo, participio, presente, activo", syntaxis: "Participio concertado", translatio: { es: "llorando", en: "weeping", zh: "哭泣著" } },
                            { textus: "pacem", lemma: "pax", morphologia: "Sustantivo, acusativo, singular, femenino", syntaxis: "Objeto Directo", translatio: { es: "la paz", en: "peace", zh: "請求" } },
                            { textus: "petissent", lemma: "peto", morphologia: "Verbo, 3ª p, plural, pluscuamperfecto, subjuntivo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "hubieran pedido", en: "they had sought", zh: "和平" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "atque", lemma: "atque", morphologia: "Conjunción", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "而他" } },
                            { textus: "eos", lemma: "is", morphologia: "Pronombre, acusativo, plural, masculino", syntaxis: "Sujeto (de infinitiva)", translatio: { es: "él", en: "them", zh: "" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "en", en: "in", zh: "在" } },
                            { textus: "eo", lemma: "is", morphologia: "Pronombre, ablativo, singular, neutro", syntaxis: "Modificador", translatio: { es: "el", en: "that", zh: "他們" } },
                            { textus: "loco", lemma: "locus", morphologia: "Sustantivo, ablativo, singular, neutro", syntaxis: "C.C. de Lugar", translatio: { es: "lugar", en: "place", zh: "當時所在的" } },
                            { textus: "quo", lemma: "qui", morphologia: "Pronombre relativo, ablativo, singular, neutro", syntaxis: "C.C. de Lugar", translatio: { es: "en el que", en: "where", zh: "地方" } },
                            { textus: "tum", lemma: "tum", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "entonces", en: "then", zh: "" } },
                            { textus: "essent", lemma: "sum", morphologia: "Verbo, 3ª p, plural, imperfecto, subjuntivo", syntaxis: "Verbo (de subordinada)", translatio: { es: "estaban", en: "they were", zh: "" } },
                            { textus: "suum", lemma: "suus", morphologia: "Adjetivo posesivo, acusativo, singular, masculino", syntaxis: "Modificador", translatio: { es: "su", en: "his", zh: "等待" } },
                            { textus: "aduentum", lemma: "aduentus", morphologia: "Sustantivo, acusativo, singular, masculino", syntaxis: "Objeto Directo", translatio: { es: "llegada", en: "arrival", zh: "他的到來" } },
                            { textus: "exspectare", lemma: "exspecto", morphologia: "Verbo, infinitivo, presente, activo", syntaxis: "Verbo (de infinitiva)", translatio: { es: "esperaran", en: "to await", zh: "" } },
                            { textus: "iussisset", lemma: "iubeo", morphologia: "Verbo, 3ª p, singular, pluscuamperfecto, subjuntivo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "les hubiera ordenado", en: "he had ordered", zh: "命令" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "paruerunt", lemma: "pareo", morphologia: "Verbo, 3ª p, plural, perfecto, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "obedecieron", en: "they obeyed", zh: "他們服從了" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Oración muy larga cuya acción principal es 'paruerunt'. La mayor parte de la oración es una cláusula 'cum' histórica con múltiples verbos coordinados en subjuntivo que describen la acción de los embajadores y la orden de César.",
                        notae: "La postración ('se ad pedes proiecissent') era un gesto formal de rendición y súplica en la Antigüedad.",
                        translationes: {
                            es: "Como estos se hubieran encontrado con él en el camino, se hubieran arrojado a sus pies, y habiendo hablado suplicantemente, llorando, hubieran pedido la paz, y él les hubiera ordenado que esperaran su llegada en el lugar en el que entonces estaban, obedecieron.",
                            en: "When these men had met him on the march, and had thrown themselves at his feet, and having spoken as suppliants, weeping, had sought peace, and he had ordered them to await his arrival in that place where they then were, they obeyed.",
                            zh: "他們在途中遇見凱撒後，俯伏在他腳下，言辭恭敬，哭泣著請求和平，而凱撒命令他們在當時所在的地方等待他的到來，他們服從了。"
                        }
                    },
                    {
                        id_orationis: 'o3',
                        original_lat: "Eo postquam Caesar peruenit, obsides, arma, seruos qui ad eos perfugissent poposcit.",
                        verba: [
                            { textus: "Eo", lemma: "eo", morphologia: "Adverbio", syntaxis: "Modificador de lugar", translatio: { es: "allí", en: "There", zh: "凱撒" } },
                            { textus: "postquam", lemma: "postquam", morphologia: "Conjunción", syntaxis: "Nexo (temporal)", translatio: { es: "después de que", en: "after", zh: "到達" } },
                            { textus: "Caesar", lemma: "Caesar", morphologia: "Sustantivo, nominativo, singular, masculino", syntaxis: "Sujeto", translatio: { es: "César", en: "Caesar", zh: "" } },
                            { textus: "peruenit", lemma: "peruenio", morphologia: "Verbo, 3ª p, singular, perfecto, indicativo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "llegó", en: "arrived", zh: "那裡後" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "obsides", lemma: "obses", morphologia: "Sustantivo, acusativo, plural, masculino", syntaxis: "Objeto Directo", translatio: { es: "rehenes", en: "hostages", zh: "人質" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "、" } },
                            { textus: "arma", lemma: "arma", morphologia: "Sustantivo, acusativo, plural, neutro", syntaxis: "Objeto Directo", translatio: { es: "armas", en: "weapons", zh: "武器" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "、" } },
                            { textus: "seruos", lemma: "seruus", morphologia: "Sustantivo, acusativo, plural, masculino", syntaxis: "Objeto Directo", translatio: { es: "esclavos", en: "slaves", zh: "以及" } },
                            { textus: "qui", lemma: "qui", morphologia: "Pronombre relativo, nominativo, plural, masculino", syntaxis: "Sujeto", translatio: { es: "que", en: "who", zh: "投奔" } },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "a", en: "to", zh: "他們" } },
                            { textus: "eos", lemma: "is", morphologia: "Pronombre, acusativo, plural, masculino", syntaxis: "C. preposicional", translatio: { es: "ellos", en: "them", zh: "那裡的" } },
                            { textus: "perfugissent", lemma: "perfugio", morphologia: "Verbo, 3ª p, plural, pluscuamperfecto, subjuntivo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "se habían refugiado", en: "had fled for refuge", zh: "奴隸" } },
                            { textus: "poposcit", lemma: "posco", morphologia: "Verbo, 3ª p, singular, perfecto, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "exigió", en: "he demanded", zh: "他要求交出" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Oración principal ('poposcit') precedida por una cláusula temporal ('Eo postquam... peruenit').",
                        notae: "El subjuntivo 'perfugissent' en la relativa es característico del estilo de César para indicar una clase o categoría de personas.",
                        translationes: {
                            es: "Después de que César llegó allí, exigió rehenes, armas y los esclavos que se habían refugiado entre ellos.",
                            en: "After Caesar arrived there, he demanded hostages, weapons, and the slaves who had fled for refuge to them.",
                            zh: "凱撒到達那裡後，要求交出人質、武器、以及投奔他們那裡的奴隸。"
                        }
                    },
                    {
                        id_orationis: 'o4',
                        original_lat: "Dum ea conquiruntur et conferuntur nocte intermissa, circiter hominum milia VI eius pagi qui Verbigenus appellatur, siue timore perterriti, ne armis traditis supplicio adficerentur, siue spe salutis inducti, quod in tanta multitudine dediticiorum suam fugam aut occultari aut omnino ignorari posse existimarent, prima nocte e castris Heluetiorum egressi ad Rhenum finesque Germanorum contenderunt.",
                        verba: [
                            { textus: "Dum", lemma: "dum", morphologia: "Conjunción", syntaxis: "Nexo (temporal)", translatio: { es: "Mientras", en: "While", zh: "在" } },
                            { textus: "ea", lemma: "is", morphologia: "Pronombre, nominativo, plural, neutro", syntaxis: "Sujeto", translatio: { es: "estas cosas", en: "these things", zh: "搜集" } },
                            { textus: "conquiruntur", lemma: "conquiro", morphologia: "Verbo, 3ª p, plural, presente, indicativo, pasivo", syntaxis: "Verbo (de subordinada)", translatio: { es: "se buscaban", en: "were being sought out", zh: "和" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "" } },
                            { textus: "conferuntur", lemma: "confero", morphologia: "Verbo, 3ª p, plural, presente, indicativo, pasivo", syntaxis: "Verbo (de subordinada)", translatio: { es: "se reunían", en: "brought together", zh: "彙集" } },
                            { textus: "nocte", lemma: "nox", morphologia: "Sustantivo, ablativo, singular, femenino", syntaxis: "Sujeto (de ablativo absoluto)", translatio: { es: "pasada la", en: "a night", zh: "這些東西" } },
                            { textus: "intermissa", lemma: "intermitto", morphologia: "Verbo, participio, perfecto, pasivo, ablativo, singular, femenino", syntaxis: "Verbo (de ablativo absoluto)", translatio: { es: "noche", en: "having intervened", zh: "時" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "circiter", lemma: "circiter", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "cerca de", en: "about", zh: "大約" } },
                            { textus: "hominum", lemma: "homo", morphologia: "Sustantivo, genitivo, plural, masculino", syntaxis: "Genitivo partitivo", translatio: { es: "hombres", en: "men", zh: "人" } },
                            { textus: "milia", lemma: "mille", morphologia: "Sustantivo, nominativo, plural, neutro", syntaxis: "Sujeto", translatio: { es: "mil", en: "thousand", zh: "六千" } },
                            { textus: "VI", lemma: "sex", morphologia: "Adjetivo numeral", syntaxis: "Modificador", translatio: { es: "seis", en: "six", zh: "" } },
                            { textus: "eius", lemma: "is", morphologia: "Pronombre, genitivo, singular, masculino", syntaxis: "Modificador", translatio: { es: "de ese", en: "of that", zh: "一個" } },
                            { textus: "pagi", lemma: "pagus", morphologia: "Sustantivo, genitivo, singular, masculino", syntaxis: "Genitivo partitivo", translatio: { es: "distrito", en: "canton", zh: "稱為" } },
                            { textus: "qui", lemma: "qui", morphologia: "Pronombre relativo, nominativo, singular, masculino", syntaxis: "Sujeto", translatio: { es: "que", en: "which", zh: "" } },
                            { textus: "Verbigenus", lemma: "Verbigenus", morphologia: "Nombre propio, nominativo, singular, masculino", syntaxis: "Predicativo", translatio: { es: "Verbigeno", en: "Verbigenus", zh: "維比根" } },
                            { textus: "appellatur", lemma: "appello", morphologia: "Verbo, 3ª p, singular, presente, indicativo, pasivo", syntaxis: "Verbo (de subordinada)", translatio: { es: "se llama", en: "is called", zh: "的地區的" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "siue", lemma: "siue", morphologia: "Conjunción", syntaxis: "Nexo (disyuntivo)", translatio: { es: "ya fuera", en: "either", zh: "要麼" } },
                            { textus: "timore", lemma: "timor", morphologia: "Sustantivo, ablativo, singular, masculino", syntaxis: "C.C. de Causa", translatio: { es: "por el miedo", en: "by fear", zh: "因恐懼" } },
                            { textus: "perterriti", lemma: "perterreo", morphologia: "Verbo, participio, perfecto, pasivo, nominativo, plural, masculino", syntaxis: "Participio concertado", translatio: { es: "aterrorizados", en: "terrified", zh: "而驚慌" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "ne", lemma: "ne", morphologia: "Conjunción", syntaxis: "Nexo (cláusula de temor)", translatio: { es: "de que", en: "lest", zh: "擔心" } },
                            { textus: "armis", lemma: "arma", morphologia: "Sustantivo, ablativo, plural, neutro", syntaxis: "Sujeto (de ablativo absoluto)", translatio: { es: "las armas", en: "their arms", zh: "交出" } },
                            { textus: "traditis", lemma: "trado", morphologia: "Verbo, participio, perfecto, pasivo, ablativo, plural, neutro", syntaxis: "Verbo (de ablativo absoluto)", translatio: { es: "entregadas", en: "being handed over", zh: "武器後" } },
                            { textus: "supplicio", lemma: "supplicium", morphologia: "Sustantivo, dativo, singular, neutro", syntaxis: "Objeto Indirecto", translatio: { es: "al suplicio", en: "to punishment", zh: "會遭受" } },
                            { textus: "adficerentur", lemma: "adficio", morphologia: "Verbo, 3ª p, plural, imperfecto, subjuntivo, pasivo", syntaxis: "Verbo (de subordinada)", translatio: { es: "fueran sometidos", en: "they should be afflicted", zh: "懲罰" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "siue", lemma: "siue", morphologia: "Conjunción", syntaxis: "Nexo (disyuntivo)", translatio: { es: "ya fuera", en: "or", zh: "要麼" } },
                            { textus: "spe", lemma: "spes", morphologia: "Sustantivo, ablativo, singular, femenino", syntaxis: "C.C. de Causa", translatio: { es: "por la esperanza", en: "by the hope", zh: "被" } },
                            { textus: "salutis", lemma: "salus", morphologia: "Sustantivo, genitivo, singular, femenino", syntaxis: "C. del Nombre", translatio: { es: "de salvación", en: "of safety", zh: "生還的希望" } },
                            { textus: "inducti", lemma: "induco", morphologia: "Verbo, participio, perfecto, pasivo, nominativo, plural, masculino", syntaxis: "Participio concertado", translatio: { es: "inducidos", en: "induced", zh: "所引誘" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "quod", lemma: "quod", morphologia: "Conjunción", syntaxis: "Nexo (causal)", translatio: { es: "porque", en: "because", zh: "因為" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "en", en: "in", zh: "在" } },
                            { textus: "tanta", lemma: "tantus", morphologia: "Adjetivo, ablativo, singular, femenino", syntaxis: "Modificador", translatio: { es: "tan gran", en: "so great", zh: "如此眾多" } },
                            { textus: "multitudine", lemma: "multitudo", morphologia: "Sustantivo, ablativo, singular, femenino", syntaxis: "C.C. de Lugar", translatio: { es: "multitud", en: "a multitude", zh: "的" } },
                            { textus: "dediticiorum", lemma: "dediticius", morphologia: "Sustantivo, genitivo, plural, masculino", syntaxis: "C. del Nombre", translatio: { es: "de rendidos", en: "of surrendered people", zh: "投降者中" } },
                            { textus: "suam", lemma: "suus", morphologia: "Adjetivo posesivo, acusativo, singular, femenino", syntaxis: "Modificador", translatio: { es: "su", en: "their", zh: "他們的" } },
                            { textus: "fugam", lemma: "fuga", morphologia: "Sustantivo, acusativo, singular, femenino", syntaxis: "Sujeto (de infinitiva)", translatio: { es: "huida", en: "flight", zh: "逃亡" } },
                            { textus: "aut", lemma: "aut", morphologia: "Conjunción", syntaxis: "Nexo (disyuntivo)", translatio: { es: "o", en: "either", zh: "要麼" } },
                            { textus: "occultari", lemma: "occulto", morphologia: "Verbo, infinitivo, presente, pasivo", syntaxis: "Verbo (de infinitiva)", translatio: { es: "ser ocultada", en: "could be hidden", zh: "被隱藏" } },
                            { textus: "aut", lemma: "aut", morphologia: "Conjunción", syntaxis: "Nexo (disyuntivo)", translatio: { es: "o", en: "or", zh: "要麼" } },
                            { textus: "omnino", lemma: "omnino", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "completamente", en: "altogether", zh: "完全" } },
                            { textus: "ignorari", lemma: "ignoro", morphologia: "Verbo, infinitivo, presente, pasivo", syntaxis: "Verbo (de infinitiva)", translatio: { es: "ser ignorada", en: "be overlooked", zh: "被忽略" } },
                            { textus: "posse", lemma: "possum", morphologia: "Verbo, infinitivo, presente", syntaxis: "Verbo (modal)", translatio: { es: "podía", en: "", zh: "能夠" } },
                            { textus: "existimarent", lemma: "existimo", morphologia: "Verbo, 3ª p, plural, imperfecto, subjuntivo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "pensaban que", en: "they thought", zh: "他們認為" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "prima", lemma: "primus", morphologia: "Adjetivo, ablativo, singular, femenino", syntaxis: "Modificador", translatio: { es: "al principio de", en: "at the beginning of", zh: "在" } },
                            { textus: "nocte", lemma: "nox", morphologia: "Sustantivo, ablativo, singular, femenino", syntaxis: "Ablativo de Tiempo", translatio: { es: "la noche", en: "the night", zh: "初夜" } },
                            { textus: "e", lemma: "ex", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "del", en: "from", zh: "離開" } },
                            { textus: "castris", lemma: "castra", morphologia: "Sustantivo, ablativo, plural, neutro", syntaxis: "C. preposicional", translatio: { es: "campamento", en: "the camp", zh: "赫爾維蒂人的" } },
                            { textus: "Heluetiorum", lemma: "Heluetii", morphologia: "Sustantivo, genitivo, plural, masculino", syntaxis: "C. del Nombre", translatio: { es: "de los helvecios", en: "of the Helvetii", zh: "營地" } },
                            { textus: "egressi", lemma: "egredior", morphologia: "Verbo, participio, perfecto, deponente, nominativo, plural, masculino", syntaxis: "Participio concertado", translatio: { es: "habiendo salido", en: "having departed", zh: "" } },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "hacia", en: "towards", zh: "向" } },
                            { textus: "Rhenum", lemma: "Rhenus", morphologia: "Sustantivo, acusativo, singular, masculino", syntaxis: "C. preposicional", translatio: { es: "el Rin", en: "the Rhine", zh: "萊茵河" } },
                            { textus: "finesque", lemma: "finisque", morphologia: "Sustantivo y conjunción, acusativo, plural, masculino", syntaxis: "C. preposicional", translatio: { es: "y el territorio", en: "and the territory", zh: "與" } },
                            { textus: "Germanorum", lemma: "Germani", morphologia: "Sustantivo, genitivo, plural, masculino", syntaxis: "C. del Nombre", translatio: { es: "de los germanos", en: "of the Germans", zh: "日耳曼人的領土" } },
                            { textus: "contenderunt", lemma: "contendo", morphologia: "Verbo, 3ª p, plural, perfecto, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "se dirigieron", en: "they hastened", zh: "趕去" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Larga oración cuyo sujeto ('milia') y verbo principal ('contenderunt') están al final. La acción principal está enmarcada por una cláusula temporal con 'Dum' y dos participios que explican las motivaciones alternativas de los fugitivos ('siue... siue...').",
                        notae: "Nuevamente, César utiliza el subjuntivo ('existimarent') para adentrarse en la psicología de sus enemigos, exponiendo sus cálculos y esperanzas al huir.",
                        translationes: {
                            es: "Mientras estas cosas se buscaban y se reunían, pasada una noche, cerca de seis mil hombres de ese distrito que se llama Verbigeno, ya fuera aterrorizados por el miedo de que, entregadas las armas, fueran sometidos al suplicio, ya fuera inducidos por la esperanza de salvación, porque pensaban que en tan gran multitud de rendidos su huida podía o ser ocultada o ser completamente ignorada, habiendo salido del campamento de los helvecios al principio de la noche, se dirigieron hacia el Rin y el territorio de los germanos.",
                            en: "While these things were being sought out and brought together, after a night had intervened, about six thousand men of that canton which is called Verbigenus, either terrified by the fear that, with their arms handed over, they might be subjected to punishment, or induced by the hope of safety, because they thought that in so great a multitude of surrendered people their flight could either be hidden or be overlooked altogether, having departed from the camp of the Helvetii at the beginning of the night, hastened towards the Rhine and the territory of the Germans.",
                            zh: "在搜集和彙集這些東西時，過了一夜，大約六千名來自一個稱為維比根地區的人，要麼因恐懼而驚慌，擔心交出武器後會遭受懲罰，要麼被生還的希望所引誘，因為他們認為在如此眾多的投降者中，他們的逃亡要麼可以被隱藏，要麼可以完全被忽略，於是在初夜時分離開赫爾維蒂人的營地，向萊茵河與日耳曼人的領土趕去。"
                        }
                    }
                ]
            }
        ]
    }
};

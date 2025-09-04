const corpus = {
    titulus_principalis: "De Bello Gallico, I, 21",
    auctor: "C. Iulius Caesar",
    titulus_secundarius: {
        es: "El plan de César para cercar a los helvecios",
        en: "Caesar's Plan to Encircle the Helvetii",
        zh: "凱撒包圍赫爾維蒂人的計劃"
    },
    introductio: {
        es: {
            titulus: "Introducción al Capítulo 21",
            contentus: `<p>Este capítulo detalla una maniobra táctica clásica de César. Habiendo sido informado por sus exploradores de la posición del campamento helvecio al pie de una montaña, César inmediatamente pone en marcha un plan para rodearlos. Envía una expedición de reconocimiento para evaluar la montaña y sus accesos. Al recibir noticias favorables, ordena a su legado más competente, Tito Labieno, que tome dos legiones durante la noche y ascienda a la cumbre por una ruta oculta. Mientras tanto, el propio César planea avanzar frontalmente unas horas más tarde, creando un movimiento de pinza. Para liderar la vanguardia de exploradores, elige a Publio Considio, un veterano de gran experiencia. El capítulo es un ejemplo de planificación militar meticulosa y proactiva.</p>`
        },
        en: {
            titulus: "Introduction to Chapter 21",
            contentus: `<p>This chapter details a classic tactical maneuver by Caesar. Having been informed by his scouts of the Helvetii's camp position at the foot of a mountain, Caesar immediately sets in motion a plan to surround them. He sends a reconnaissance expedition to assess the mountain and its access routes. Upon receiving favorable reports, he orders his most competent legate, Titus Labienus, to take two legions during the night and ascend to the summit via a hidden route. Meanwhile, Caesar himself plans to advance frontally a few hours later, creating a pincer movement. To lead the vanguard of scouts, he chooses Publius Considius, a veteran of great experience. The chapter is an example of meticulous and proactive military planning.</p>`
        },
        zh: {
            titulus: "第 21 章介紹",
            contentus: `<p>本章詳細描述了凱撒的一次經典戰術行動。在從偵察兵那裡得知赫爾維蒂人在山腳下的營地位置後，凱撒立即啟動了一個包圍他們的計劃。他派遣一支偵察隊去評估那座山及其通道。在收到有利的報告後，他命令他最得力的副將提圖斯·拉比努斯在夜間率領兩個軍團，經由一條隱蔽的路線登上山頂。與此同時，凱撒本人計劃在幾小時後從正面進攻，形成鉗形攻勢。為了領導偵察兵的先頭部隊，他選擇了經驗豐富的老兵普布利烏斯·康西迪烏斯。本章是精心和主動軍事規劃的一個範例。</p>`
        }
    },
    textus: {
        id: 21,
        capitula: [
            {
                id_capituli: 21,
                orationes: [
                    {
                        id_orationis: 'o1',
                        original_lat: "Eodem die ab exploratoribus certior factus hostes sub monte consedisse milia passuum ab ipsius castris octo, qualis esset natura montis et qualis in circuitu ascensus qui cognoscerent misit.",
                        verba: [
                            { textus: "Eodem", lemma: "idem", morphologia: "Adjetivo, ablativo, singular, masculino", syntaxis: "Modificador (de die)", translatio: { es: "el mismo", en: "on the same", zh: "在同一" } },
                            { textus: "die", lemma: "dies", morphologia: "Sustantivo, ablativo, singular, masculino", syntaxis: "C.C. de Tiempo", translatio: { es: "día", en: "day", zh: "天" } },
                            { textus: "ab", lemma: "ab", morphologia: "Preposición", syntaxis: "Enlace (Agente)", translatio: { es: "por", en: "by", zh: "被" } },
                            { textus: "exploratoribus", lemma: "explorator", morphologia: "Sustantivo, ablativo, plural, masculino", syntaxis: "C. Agente", translatio: { es: "los exploradores", en: "the scouts", zh: "偵察兵" } },
                            { textus: "certior", lemma: "certus", morphologia: "Adjetivo, nominativo, singular, masculino, comparativo", syntaxis: "Atributo", translatio: { es: "informado", en: "informed", zh: "被告知" } },
                            { textus: "factus", lemma: "facio", morphologia: "Verbo, participio, perfecto, pasivo, nominativo, singular, masculino", syntaxis: "Participio concertado", translatio: { es: "habiendo sido hecho", en: "having been made", zh: "" } },
                            { textus: "hostes", lemma: "hostis", morphologia: "Sustantivo, acusativo, plural, masculino", syntaxis: "Sujeto (de infinitiva)", translatio: { es: "que los enemigos", en: "that the enemy", zh: "敵人" } },
                            { textus: "sub", lemma: "sub", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "al pie de", en: "at the foot of", zh: "在山" } },
                            { textus: "monte", lemma: "mons", morphologia: "Sustantivo, ablativo, singular, masculino", syntaxis: "C. preposicional", translatio: { es: "un monte", en: "a mountain", zh: "腳下" } },
                            { textus: "consedisse", lemma: "consido", morphologia: "Verbo, infinitivo, perfecto, activo", syntaxis: "Verbo (de infinitiva)", translatio: { es: "se habían asentado", en: "had settled", zh: "已經紮營" } },
                            { textus: "milia", lemma: "mille", morphologia: "Sustantivo, acusativo, plural, neutro", syntaxis: "C.C. de Distancia", translatio: { es: "a millas", en: "miles", zh: "里" } },
                            { textus: "passuum", lemma: "passus", morphologia: "Sustantivo, genitivo, plural, masculino", syntaxis: "Genitivo partitivo", translatio: { es: "de pasos", en: "of paces", zh: "步" } },
                            { textus: "ab", lemma: "ab", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "de", en: "from", zh: "距離" } },
                            { textus: "ipsius", lemma: "ipse", morphologia: "Pronombre, genitivo, singular, masculino", syntaxis: "C. del Nombre", translatio: { es: "su propio", en: "his own", zh: "他自己的" } },
                            { textus: "castris", lemma: "castra", morphologia: "Sustantivo, ablativo, plural, neutro", syntaxis: "C. preposicional", translatio: { es: "campamento", en: "camp", zh: "營地" } },
                            { textus: "octo", lemma: "octo", morphologia: "Adjetivo numeral, indeclinable", syntaxis: "Modificador (de milia)", translatio: { es: "ocho", en: "eight", zh: "八" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "qualis", lemma: "qualis", morphologia: "Adjetivo interrogativo, nominativo, singular, femenino", syntaxis: "Atributo", translatio: { es: "cuál", en: "what", zh: "什麼樣的" } },
                            { textus: "esset", lemma: "sum", morphologia: "Verbo, 3ª p, singular, imperfecto, subjuntivo", syntaxis: "Verbo (de subordinada)", translatio: { es: "era", en: "was", zh: "是" } },
                            { textus: "natura", lemma: "natura", morphologia: "Sustantivo, nominativo, singular, femenino", syntaxis: "Sujeto", translatio: { es: "la naturaleza", en: "the nature", zh: "地形" } },
                            { textus: "montis", lemma: "mons", morphologia: "Sustantivo, genitivo, singular, masculino", syntaxis: "C. del Nombre", translatio: { es: "del monte", en: "of the mountain", zh: "山的" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "以及" } },
                            { textus: "qualis", lemma: "qualis", morphologia: "Adjetivo interrogativo, nominativo, singular, masculino", syntaxis: "Atributo", translatio: { es: "cuál", en: "what", zh: "什麼樣的" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "por", en: "by", zh: "環繞" } },
                            { textus: "circuitu", lemma: "circuitus", morphologia: "Sustantivo, ablativo, singular, masculino", syntaxis: "C. preposicional", translatio: { es: "un rodeo", en: "a detour", zh: "上去的" } },
                            { textus: "ascensus", lemma: "ascensus", morphologia: "Sustantivo, nominativo, singular, masculino", syntaxis: "Sujeto", translatio: { es: "la subida", en: "the ascent", zh: "路線" } },
                            { textus: "qui", lemma: "qui", morphologia: "Pronombre relativo, nominativo, plural, masculino", syntaxis: "Sujeto", translatio: { es: "quienes", en: "who", zh: "一些人" } },
                            { textus: "cognoscerent", lemma: "cognosco", morphologia: "Verbo, 3ª p, plural, imperfecto, subjuntivo, activo", syntaxis: "Verbo (de subordinada final)", translatio: { es: "para que averiguaran", en: "to find out", zh: "去探查" } },
                            { textus: "misit", lemma: "mitto", morphologia: "Verbo, 3ª p, singular, perfecto, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "envió", en: "he sent", zh: "他派遣了" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Oración compleja. El sujeto (César) está omitido. El verbo principal 'misit' rige un objeto directo implícito ('hombres') que es el antecedente de una cláusula relativa de finalidad ('qui cognoscerent'). Lo que debían averiguar se expresa en dos interrogativas indirectas coordinadas ('qualis... et qualis...'). La primera parte de la oración es una construcción de participio ('certior factus') que explica el motivo de la acción.",
                        notae: "'Certior factus' es una expresión idiomática que significa 'habiendo sido informado'.",
                        translationes: {
                            es: "El mismo día, informado por los exploradores de que los enemigos se habían asentado al pie de un monte a ocho millas de su propio campamento, envió a quienes averiguaran cuál era la naturaleza del monte y cuál la subida por un rodeo.",
                            en: "On the same day, having been informed by scouts that the enemy had settled at the foot of a mountain eight miles from his own camp, he sent men to find out what the nature of the mountain was and what the ascent by a roundabout way was like.",
                            zh: "同一天，凱撒從偵察兵那裡得知敵人已在距他自己營地八里遠的一座山腳下紮營，他便派遣了一些人去探查那座山的地形如何，以及環繞上去的路線是怎樣的。"
                        }
                    },
                    {
                        id_orationis: 'o2',
                        original_lat: "Renuntiatum est facile esse.",
                        verba: [
                            { textus: "Renuntiatum", lemma: "renuntio", morphologia: "Verbo, participio, perfecto, pasivo, nominativo, singular, neutro", syntaxis: "Verbo (forma impersonal)", translatio: { es: "se informó", en: "it was reported", zh: "據報告" } },
                            { textus: "est", lemma: "sum", morphologia: "Verbo, 3ª p, singular, presente, indicativo", syntaxis: "Verbo (auxiliar)", translatio: { es: "", en: "", zh: "" } },
                            { textus: "facile", lemma: "facilis", morphologia: "Adjetivo, acusativo, singular, neutro", syntaxis: "Atributo", translatio: { es: "fácil", en: "easy", zh: "容易的" } },
                            { textus: "esse", lemma: "sum", morphologia: "Verbo, infinitivo, presente", syntaxis: "Verbo (de infinitiva)", translatio: { es: "que era", en: "that it was", zh: "是" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Oración impersonal. El sujeto lógico es la oración de infinitivo 'facile esse' (que era fácil).",
                        notae: "",
                        translationes: {
                            es: "Se informó que era fácil.",
                            en: "It was reported that it was easy.",
                            zh: "據報告，（路線）是容易的。"
                        }
                    },
                    {
                        id_orationis: 'o3',
                        original_lat: "De tertia uigilia T. Labienum, legatum pro praetore, cum duabus legionibus et iis ducibus qui iter cognouerant, summum iugum montis ascendere iubet;",
                        verba: [
                            { textus: "De", lemma: "de", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "hacia", en: "at", zh: "在" } },
                            { textus: "tertia", lemma: "tertius", morphologia: "Adjetivo, ablativo, singular, femenino", syntaxis: "Modificador", translatio: { es: "la tercera", en: "the third", zh: "第三" } },
                            { textus: "uigilia", lemma: "uigilia", morphologia: "Sustantivo, ablativo, singular, femenino", syntaxis: "C.C. de Tiempo", translatio: { es: "vigilia", en: "watch", zh: "更" } },
                            { textus: "T.", lemma: "Titus", morphologia: "Nombre propio, acusativo, singular, masculino", syntaxis: "Sujeto (de infinitiva)", translatio: { es: "a Tito", en: "Titus", zh: "提圖斯" } },
                            { textus: "Labienum", lemma: "Labienus", morphologia: "Nombre propio, acusativo, singular, masculino", syntaxis: "Sujeto (de infinitiva)", translatio: { es: "Labieno", en: "Labienus", zh: "拉比努斯" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "legatum", lemma: "legatus", morphologia: "Sustantivo, acusativo, singular, masculino", syntaxis: "Aposición", translatio: { es: "su legado", en: "his legate", zh: "副將" } },
                            { textus: "pro", lemma: "pro", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "con rango de", en: "with the rank of", zh: "擁有" } },
                            { textus: "praetore", lemma: "praetor", morphologia: "Sustantivo, ablativo, singular, masculino", syntaxis: "C. preposicional", translatio: { es: "pretor", en: "praetor", zh: "裁判官" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "cum", lemma: "cum", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "con", en: "with", zh: "率領" } },
                            { textus: "duabus", lemma: "duo", morphologia: "Adjetivo numeral, ablativo, plural, femenino", syntaxis: "Modificador", translatio: { es: "dos", en: "two", zh: "兩個" } },
                            { textus: "legionibus", lemma: "legio", morphologia: "Sustantivo, ablativo, plural, femenino", syntaxis: "C.C. de Compañía", translatio: { es: "legiones", en: "legions", zh: "軍團" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "以及" } },
                            { textus: "iis", lemma: "is", morphologia: "Pronombre, ablativo, plural, masculino", syntaxis: "C.C. de Compañía", translatio: { es: "aquellos", en: "those", zh: "那些" } },
                            { textus: "ducibus", lemma: "dux", morphologia: "Sustantivo, ablativo, plural, masculino", syntaxis: "C.C. de Compañía", translatio: { es: "guías", en: "guides", zh: "嚮導" } },
                            { textus: "qui", lemma: "qui", morphologia: "Pronombre relativo, nominativo, plural, masculino", syntaxis: "Sujeto", translatio: { es: "que", en: "who", zh: "他們" } },
                            { textus: "iter", lemma: "iter", morphologia: "Sustantivo, acusativo, singular, neutro", syntaxis: "Objeto Directo", translatio: { es: "el camino", en: "the route", zh: "路線" } },
                            { textus: "cognouerant", lemma: "cognosco", morphologia: "Verbo, 3ª p, plural, pluscuamperfecto, indicativo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "conocían", en: "knew", zh: "熟悉" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "summum", lemma: "summus", morphologia: "Adjetivo, acusativo, singular, neutro", syntaxis: "Modificador", translatio: { es: "la más alta", en: "the highest", zh: "最高的" } },
                            { textus: "iugum", lemma: "iugum", morphologia: "Sustantivo, acusativo, singular, neutro", syntaxis: "Objeto Directo", translatio: { es: "cumbre", en: "ridge", zh: "山脊" } },
                            { textus: "montis", lemma: "mons", morphologia: "Sustantivo, genitivo, singular, masculino", syntaxis: "C. del Nombre", translatio: { es: "del monte", en: "of the mountain", zh: "山的" } },
                            { textus: "ascendere", lemma: "ascendo", morphologia: "Verbo, infinitivo, presente, activo", syntaxis: "Verbo (de infinitiva)", translatio: { es: "subir a", en: "to ascend", zh: "登上" } },
                            { textus: "iubet", lemma: "iubeo", morphologia: "Verbo, 3ª p, singular, presente, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "ordena", en: "he orders", zh: "他命令" } },
                            { textus: ";", lemma: ";", morphologia: "Puntuación", syntaxis: "Fin de cláusula", translatio: { es: ";", en: ";", zh: "；" } }
                        ],
                        ordo_syntacticus: "Oración principal ('iubet') que rige una construcción de acusativo con infinitivo ('T. Labienum... ascendere').",
                        notae: "La 'tercera vigilia' era el período de la noche justo después de la medianoche. 'Legatus pro praetore' era un legado con autoridad de propretor, el rango más alto para un lugarteniente.",
                        translationes: {
                            es: "Hacia la tercera vigilia, ordena a T. Labieno, su legado propretor, subir a la cumbre más alta del monte con dos legiones y aquellos guías que conocían el camino;",
                            en: "At the third watch, he orders Titus Labienus, his legate with praetorian power, to ascend the highest ridge of the mountain with two legions and those guides who knew the route;",
                            zh: "在第三更時分，他命令擁有裁判官權力的副將提圖斯·拉比努斯，率領兩個軍團以及那些熟悉路線的嚮導，登上那座山的最高山脊；"
                        }
                    },
                    {
                        id_orationis: 'o4',
                        original_lat: "quid sui consilii sit ostendit.",
                        verba: [
                            { textus: "quid", lemma: "quis", morphologia: "Pronombre interrogativo, nominativo, singular, neutro", syntaxis: "Sujeto", translatio: { es: "cuál", en: "what", zh: "是什麼" } },
                            { textus: "sui", lemma: "suus", morphologia: "Adjetivo posesivo, genitivo, singular, neutro", syntaxis: "Modificador", translatio: { es: "su", en: "his", zh: "他的" } },
                            { textus: "consilii", lemma: "consilium", morphologia: "Sustantivo, genitivo, singular, neutro", syntaxis: "Genitivo partitivo", translatio: { es: "plan", en: "plan", zh: "計劃" } },
                            { textus: "sit", lemma: "sum", morphologia: "Verbo, 3ª p, singular, presente, subjuntivo", syntaxis: "Verbo (de subordinada)", translatio: { es: "es", en: "is", zh: "" } },
                            { textus: "ostendit", lemma: "ostendo", morphologia: "Verbo, 3ª p, singular, presente, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "le explica", en: "he shows him", zh: "他說明了" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Oración principal ('ostendit') cuyo objeto directo es una interrogativa indirecta ('quid... sit').",
                        notae: "'quid consilii' es una construcción con genitivo partitivo ('qué de plan').",
                        translationes: {
                            es: "le explica cuál es su plan.",
                            en: "he shows him what his plan is.",
                            zh: "他向拉比努斯說明了自己的計劃。"
                        }
                    },
                    {
                        id_orationis: 'o5',
                        original_lat: "Ipse de quarta uigilia eodem itinere quo hostes ierant ad eos contendit equitatumque omnem ante se mittit.",
                        verba: [
                            { textus: "Ipse", lemma: "ipse", morphologia: "Pronombre, nominativo, singular, masculino", syntaxis: "Sujeto", translatio: { es: "Él mismo", en: "He himself", zh: "他自己" } },
                            { textus: "de", lemma: "de", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "hacia", en: "at", zh: "在" } },
                            { textus: "quarta", lemma: "quartus", morphologia: "Adjetivo, ablativo, singular, femenino", syntaxis: "Modificador", translatio: { es: "la cuarta", en: "the fourth", zh: "第四" } },
                            { textus: "uigilia", lemma: "uigilia", morphologia: "Sustantivo, ablativo, singular, femenino", syntaxis: "C.C. de Tiempo", translatio: { es: "vigilia", en: "watch", zh: "更" } },
                            { textus: "eodem", lemma: "idem", morphologia: "Adjetivo, ablativo, singular, neutro", syntaxis: "Modificador", translatio: { es: "por el mismo", en: "by the same", zh: "沿著" } },
                            { textus: "itinere", lemma: "iter", morphologia: "Sustantivo, ablativo, singular, neutro", syntaxis: "C.C. de Lugar (por donde)", translatio: { es: "camino", en: "route", zh: "同一條路" } },
                            { textus: "quo", lemma: "qui", morphologia: "Pronombre relativo, ablativo, singular, neutro", syntaxis: "C.C. de Lugar (por donde)", translatio: { es: "por el que", en: "by which", zh: "那條" } },
                            { textus: "hostes", lemma: "hostis", morphologia: "Sustantivo, nominativo, plural, masculino", syntaxis: "Sujeto", translatio: { es: "los enemigos", en: "the enemy", zh: "敵人" } },
                            { textus: "ierant", lemma: "eo", morphologia: "Verbo, 3ª p, plural, pluscuamperfecto, indicativo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "habían ido", en: "had gone", zh: "走過的" } },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "hacia", en: "towards", zh: "向" } },
                            { textus: "eos", lemma: "is", morphologia: "Pronombre, acusativo, plural, masculino", syntaxis: "C. preposicional", translatio: { es: "ellos", en: "them", zh: "他們" } },
                            { textus: "contendit", lemma: "contendo", morphologia: "Verbo, 3ª p, singular, presente, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "marcha", en: "he marches", zh: "前進" } },
                            { textus: "equitatumque", lemma: "equitatusque", morphologia: "Sustantivo y conjunción, acusativo, singular, masculino", syntaxis: "Objeto Directo", translatio: { es: "y la caballería", en: "and the cavalry", zh: "並派遣" } },
                            { textus: "omnem", lemma: "omnis", morphologia: "Adjetivo, acusativo, singular, masculino", syntaxis: "Modificador", translatio: { es: "toda", en: "all", zh: "所有的" } },
                            { textus: "ante", lemma: "ante", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "delante de", en: "before", zh: "在他" } },
                            { textus: "se", lemma: "sui", morphologia: "Pronombre, acusativo, singular", syntaxis: "C. preposicional", translatio: { es: "sí", en: "himself", zh: "自己前面" } },
                            { textus: "mittit", lemma: "mitto", morphologia: "Verbo, 3ª p, singular, presente, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "envía", en: "he sends", zh: "騎兵" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Dos oraciones principales coordinadas por la partícula enclítica '-que'. La primera contiene una cláusula relativa ('quo... ierant').",
                        notae: "La 'cuarta vigilia' era el último período de la noche, justo antes del amanecer.",
                        translationes: {
                            es: "Él mismo, hacia la cuarta vigilia, marcha hacia ellos por el mismo camino por el que habían ido los enemigos y envía toda la caballería delante de sí.",
                            en: "He himself, at the fourth watch, marches towards them by the same route by which the enemy had gone and sends all the cavalry before him.",
                            zh: "凱撒自己在第四更時分，沿著敵人走過的那條路向他們前進，並派遣所有的騎兵走在他自己前面。"
                        }
                    },
                    {
                        id_orationis: 'o6',
                        original_lat: "P. Considius, qui rei militaris peritissimus habebatur et in exercitu L. Sullae et postea in M. Crassi fuerat, cum exploratoribus praemittitur.",
                        verba: [
                            { textus: "P.", lemma: "Publius", morphologia: "Nombre propio, nominativo, singular, masculino", syntaxis: "Sujeto", translatio: { es: "Publio", en: "Publius", zh: "普布利烏斯" } },
                            { textus: "Considius", lemma: "Considius", morphologia: "Nombre propio, nominativo, singular, masculino", syntaxis: "Sujeto", translatio: { es: "Considio", en: "Considius", zh: "康西迪烏斯" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "qui", lemma: "qui", morphologia: "Pronombre relativo, nominativo, singular, masculino", syntaxis: "Sujeto (de habebatur, fuerat)", translatio: { es: "quien", en: "who", zh: "他" } },
                            { textus: "rei", lemma: "res", morphologia: "Sustantivo, genitivo, singular, femenino", syntaxis: "C. del adjetivo", translatio: { es: "del arte", en: "of military", zh: "軍事" } },
                            { textus: "militaris", lemma: "militaris", morphologia: "Adjetivo, genitivo, singular, femenino", syntaxis: "Modificador", translatio: { es: "militar", en: "affairs", zh: "事務" } },
                            { textus: "peritissimus", lemma: "peritus", morphologia: "Adjetivo, nominativo, singular, masculino, superlativo", syntaxis: "Predicativo", translatio: { es: "muy experto", en: "most skilled", zh: "非常精通" } },
                            { textus: "habebatur", lemma: "habeo", morphologia: "Verbo, 3ª p, singular, imperfecto, indicativo, pasivo", syntaxis: "Verbo (de subordinada)", translatio: { es: "era considerado", en: "was considered", zh: "被認為" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción", syntaxis: "Nexo (correlativo)", translatio: { es: "tanto", en: "both", zh: "曾在" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "en", en: "in", zh: "" } },
                            { textus: "exercitu", lemma: "exercitus", morphologia: "Sustantivo, ablativo, singular, masculino", syntaxis: "C. preposicional", translatio: { es: "el ejército", en: "the army", zh: "軍隊中" } },
                            { textus: "L.", lemma: "Lucius", morphologia: "Nombre propio, genitivo, singular, masculino", syntaxis: "C. del Nombre", translatio: { es: "de Lucio", en: "of Lucius", zh: "盧基烏斯" } },
                            { textus: "Sullae", lemma: "Sulla", morphologia: "Nombre propio, genitivo, singular, masculino", syntaxis: "C. del Nombre", translatio: { es: "Sila", en: "Sulla", zh: "蘇拉的" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción", syntaxis: "Nexo (correlativo)", translatio: { es: "como", en: "and", zh: "後來" } },
                            { textus: "postea", lemma: "postea", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "después", en: "afterwards", zh: "又曾在" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "en el de", en: "in that of", zh: "軍隊中" } },
                            { textus: "M.", lemma: "Marcus", morphologia: "Nombre propio, genitivo, singular, masculino", syntaxis: "C. del Nombre", translatio: { es: "Marco", en: "Marcus", zh: "馬爾庫斯" } },
                            { textus: "Crassi", lemma: "Crassus", morphologia: "Nombre propio, genitivo, singular, masculino", syntaxis: "C. del Nombre", translatio: { es: "Craso", en: "Crassus", zh: "克拉蘇的" } },
                            { textus: "fuerat", lemma: "sum", morphologia: "Verbo, 3ª p, singular, pluscuamperfecto, indicativo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "había estado", en: "had been", zh: "服役" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "cum", lemma: "cum", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "con", en: "with", zh: "與" } },
                            { textus: "exploratoribus", lemma: "explorator", morphologia: "Sustantivo, ablativo, plural, masculino", syntaxis: "C.C. de Compañía", translatio: { es: "los exploradores", en: "the scouts", zh: "偵察兵們" } },
                            { textus: "praemittitur", lemma: "praemitto", morphologia: "Verbo, 3ª p, singular, presente, indicativo, pasivo", syntaxis: "Verbo Principal", translatio: { es: "es enviado por delante", en: "is sent ahead", zh: "被派往前方" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Oración simple ('P. Considius... praemittitur') con una larga cláusula relativa explicativa que describe la experiencia de Considio.",
                        notae: "La mención de Sila y Craso sirve para subrayar la vasta experiencia de Considio, habiendo servido en ejércitos de comandantes muy famosos de la generación anterior.",
                        translationes: {
                            es: "P. Considio, que era considerado muy experto en el arte militar y había estado tanto en el ejército de L. Sila como después en el de M. Craso, es enviado por delante con los exploradores.",
                            en: "Publius Considius, who was considered most skilled in military affairs and had been both in the army of Lucius Sulla and afterwards in that of Marcus Crassus, is sent ahead with the scouts.",
                            zh: "普布利烏斯·康西迪烏斯，此人被認為非常精通軍事，並曾在盧基烏斯·蘇拉和後來的馬爾庫斯·克拉蘇的軍隊中服役，他與偵察兵們一同被派往前方。"
                        }
                    }
                ]
            }
        ]
    }
};

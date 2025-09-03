const corpus = {
    titulus_principalis: "De Bello Gallico, I, 4",
    auctor: "C. Iulius Caesar",
    titulus_secundarius: {
        es: "El Juicio y la Muerte de Orgetórix",
        en: "The Trial and Death of Orgetorix",
        zh: "奧爾格托里克斯的審判與死亡"
    },
    introductio: {
        es: {
            titulus: "Introducción al Capítulo 4",
            contentus: `<p>En este capítulo, la conspiración de Orgetórix es descubierta. Sometido a juicio según las costumbres helvecias, Orgetórix evita la condena reuniendo a una multitud de seguidores. Sin embargo, mientras el estado intenta hacer valer su autoridad, él muere misteriosamente, levantando sospechas de suicidio.</p>`
        },
        en: {
            titulus: "Introduction to Chapter 4",
            contentus: `<p>In this chapter, Orgetorix's conspiracy is discovered. Put on trial according to Helvetian custom, Orgetorix avoids condemnation by gathering a multitude of his followers. However, as the state attempts to enforce its authority, he dies mysteriously, raising suspicions of suicide.</p>`
        },
        zh: {
            titulus: "第 4 章介紹",
            contentus: `<p>在本章中，奧爾格托里克斯的陰謀被揭發。根據赫爾維蒂人的習俗，他被送上法庭，但奧爾格托里克斯召集了大量追隨者，從而避免了定罪。然而，正當城邦試圖執行其權威時，他神秘死亡，引發了人們對其自殺的懷疑。</p>`
        }
    },
    textus: {
        id: 4,
        capitula: [
            {
                id_capituli: 4,
                orationes: [
                    {
                        id_orationis: 'o21',
                        original_lat: "Ea res ut est Heluetiis per indicium enuntiata, moribus suis Orgetorigem ex uinculis causam dicere coegerunt.",
                        verba: [
                            { textus: "Ea", lemma: "is", morphologia: "Pronombre-Adj. demost, F, Nom, Sg", syntaxis: "Atributo de 'res'", translatio: { es: "Este", en: "This", zh: "這件" } },
                            { textus: "res", lemma: "res", morphologia: "Sust. 5ª dec, F, Nom, Sg", syntaxis: "Sujeto de 'est enuntiata'", translatio: { es: "asunto", en: "matter", zh: "事" } },
                            { textus: "ut", lemma: "ut", morphologia: "Conjunción subordinante", syntaxis: "Nexo temporal ('cuando, como')", translatio: { es: "Cuando", en: "When", zh: "當" } },
                            { textus: "est", lemma: "sum", morphologia: "Verbo, Pres. Ind, 3ª Sg", syntaxis: "Auxiliar del perfecto pasivo", translatio: { es: "fue", en: "was", zh: "被" } },
                            { textus: "Heluetiis", lemma: "Heluetii", morphologia: "Sust. 2ª dec, M, Dat, Pl", syntaxis: "Dativo de Interés", translatio: { es: "a los helvecios", en: "to the Helvetii", zh: "給赫爾維蒂人" } },
                            { textus: "per", lemma: "per", morphologia: "Preposición", syntaxis: "Nexo (rige Acusativo)", translatio: { es: "por medio de", en: "through", zh: "通過" } },
                            { textus: "indicium", lemma: "indicium", morphologia: "Sust. 2ª dec, N, Acu, Sg", syntaxis: "Complemento ('a través de una delación')", translatio: { es: "una delación", en: "an informant", zh: "告密者" } },
                            { textus: "enuntiata", lemma: "enuntio", morphologia: "Participio Perf. Pas, F, Nom, Sg", syntaxis: "Verbo de la subordinada temporal", translatio: { es: "denunciado", en: "revealed", zh: "揭露" } },
                            { textus: "moribus", lemma: "mos", morphologia: "Sust. 3ª dec, M, Abl, Pl", syntaxis: "Ablativo de Conformidad", translatio: { es: "según sus costumbres", en: "according to their customs", zh: "按照他們的習俗" } },
                            { textus: "suis", lemma: "suus", morphologia: "Adj. posesivo, M, Abl, Pl", syntaxis: "Atributo de 'moribus'", translatio: { es: "", en: "", zh: "" } },
                            { textus: "Orgetorigem", lemma: "Orgetorix", morphologia: "Sust. 3ª dec, M, Acu, Sg", syntaxis: "Sujeto de la Oración de Infinitivo", translatio: { es: "a Orgetórige", en: "Orgetorix", zh: "奧爾格托里克斯" } },
                            { textus: "ex", lemma: "ex", morphologia: "Preposición", syntaxis: "Nexo (rige Ablativo)", translatio: { es: "desde", en: "in", zh: "戴著" } },
                            { textus: "uinculis", lemma: "uinculum", morphologia: "Sust. 2ª dec, N, Abl, Pl", syntaxis: "Complemento ('encadenado')", translatio: { es: "las cadenas", en: "chains", zh: "鐐銬" } },
                            { textus: "causam", lemma: "causa", morphologia: "Sust. 1ª dec, F, Acu, Sg", syntaxis: "Objeto Directo de 'dicere'", translatio: { es: "su causa", en: "his case", zh: "為自己" } },
                            { textus: "dicere", lemma: "dico", morphologia: "Verbo, Pres. Inf. Act", syntaxis: "Verbo de la Oración de Infinitivo", translatio: { es: "defender", en: "to plead", zh: "辯護" } },
                            { textus: "coegerunt", lemma: "cogo", morphologia: "Verbo, Pret. Perfecto Ind, 3ª Pl", syntaxis: "Verbo Principal", translatio: { es: "obligaron", en: "they compelled", zh: "他們強迫" } }
                        ],
                        ordo_syntacticus: "[Ut ea res est enuntiata (Sub. Temporal)], [ellos (S elíptico) coegerunt (V) Orgetorigem (S) dicere (V) causam (OD) (Oración de Infinitivo - OD de coegerunt)].",
                        notae: "'Causam dicere' es una frase hecha que significa 'defenderse en un juicio' o 'pleitear'.",
                        translationes: {
                            es: "Cuando este asunto fue denunciado a los helvecios por medio de una delación, según sus costumbres, obligaron a Orgetórige a defender su causa encadenado.",
                            en: "When this matter was revealed to the Helvetii through an informant, according to their customs, they compelled Orgetorix to plead his case in chains.",
                            zh: "當這件事通過告密者被揭露給赫爾維蒂人後，他們按照自己的習俗，強迫奧爾格托里克斯戴著鐐銬為自己辯護。"
                        }
                    },
                    {
                        id_orationis: 'o22',
                        original_lat: "Damnatum poenam sequi oportebat, ut igni cremaretur.",
                        verba: [
                            { textus: "Damnatum", lemma: "damno", morphologia: "Participio Perf. Pas (sustantivado), M, Acu, Sg", syntaxis: "Sujeto de la Oración de Infinitivo ('al condenado')", translatio: { es: "Al condenado", en: "The condemned man", zh: "對被定罪者" } },
                            { textus: "poenam", lemma: "poena", morphologia: "Sust. 1ª dec, F, Acu, Sg", syntaxis: "Objeto Directo de 'sequi'", translatio: { es: "la pena", en: "the penalty", zh: "懲罰" } },
                            { textus: "sequi", lemma: "sequor", morphologia: "Verbo Deponente, Pres. Inf", syntaxis: "Verbo de la Oración de Infinitivo", translatio: { es: "que le siguiera", en: "should be", zh: "必須接受" } },
                            { textus: "oportebat", lemma: "oportet", morphologia: "Verbo impersonal, Pret. Imperfecto Ind, 3ª Sg", syntaxis: "Verbo Principal ('era necesario')", translatio: { es: "era preciso", en: "It was necessary that", zh: "來說" } },
                            { textus: "ut", lemma: "ut", morphologia: "Conjunción subordinante", syntaxis: "Nexo (introduce cláusula completiva)", translatio: { es: "de que", en: "to be", zh: "即" } },
                            { textus: "igni", lemma: "ignis", morphologia: "Sust. 3ª dec, M, Abl, Sg", syntaxis: "Ablativo de Instrumento", translatio: { es: "con fuego", en: "with fire", zh: "被火" } },
                            { textus: "cremaretur", lemma: "cremo", morphologia: "Verbo, Pret. Imperfecto Subj. Pas, 3ª Sg", syntaxis: "Verbo de la subordinada", translatio: { es: "fuera quemado", en: "burned", zh: "燒死" } }
                        ],
                        ordo_syntacticus: "[Oportebat (V impersonal)] [damnatum (S) sequi (V) poenam (OD) (Oración de Infinitivo - Sujeto de oportebat)], [ut cremaretur igni (Sub. Completiva explicando la pena)].",
                        notae: "La construcción con el verbo impersonal 'oportebat' rige una oración de infinitivo que funciona como sujeto lógico. La cláusula con 'ut' explica en qué consistía la pena ('poenam').",
                        translationes: {
                            es: "Era preciso que al condenado le siguiera la pena de ser quemado en el fuego.",
                            en: "It was necessary that the penalty for the condemned man should be to be burned with fire.",
                            zh: "對被定罪者來說，必須接受的懲罰是被火燒死。"
                        }
                    },
                    {
                        id_orationis: 'o23',
                        original_lat: "Die constituta causae dictionis, Orgetorix ad iudicium omnem suam familiam, ad hominum milia X undique coegit, et omnes clientes, obaeratosque suos, quorum magnum numerum habebat, eodem conduxit: per eos, ne causam diceret, se eripuit.",
                        verba: [
                            { textus: "Die", lemma: "dies", morphologia: "Sust. 5ª dec, F, Abl, Sg", syntaxis: "Sujeto del Ablativo Absoluto", translatio: { es: "En el día", en: "On the day", zh: "在...日子" } },
                            { textus: "constituta", lemma: "constituo", morphologia: "Participio Perf. Pas, F, Abl, Sg", syntaxis: "Participio del Ablativo Absoluto", translatio: { es: "fijado", en: "appointed", zh: "指定的" } },
                            { textus: "causae", lemma: "causa", morphologia: "Sust. 1ª dec, F, Gen, Sg", syntaxis: "Complemento del Nombre", translatio: { es: "de la causa", en: "of his case", zh: "案件" } },
                            { textus: "dictionis", lemma: "dictio", morphologia: "Sust. 3ª dec, F, Gen, Sg", syntaxis: "Complemento del Nombre", translatio: { es: "para la defensa", en: "for the pleading", zh: "辯護的" } },
                            { textus: "Orgetorix", lemma: "Orgetorix", morphologia: "Sust. 3ª dec, M, Nom, Sg", syntaxis: "Sujeto", translatio: { es: "Orgetórige", en: "Orgetorix", zh: "奧爾格托里克斯" } },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición", syntaxis: "Nexo (rige Acusativo)", translatio: { es: "al", en: "to", zh: "到" } },
                            { textus: "iudicium", lemma: "iudicium", morphologia: "Sust. 2ª dec, N, Acu, Sg", syntaxis: "Complemento de Dirección", translatio: { es: "juicio", en: "the trial", zh: "審判地" } },
                            { textus: "omnem", lemma: "omnis", morphologia: "Adj. 3ª dec, F, Acu, Sg", syntaxis: "Atributo de 'familiam'", translatio: { es: "a toda", en: "all", zh: "所有的" } },
                            { textus: "suam", lemma: "suus", morphologia: "Adj. posesivo, F, Acu, Sg", syntaxis: "Atributo de 'familiam'", translatio: { es: "su", en: "his", zh: "他的" } },
                            { textus: "familiam", lemma: "familia", morphologia: "Sust. 1ª dec, F, Acu, Sg", syntaxis: "Objeto Directo de 'coegit'", translatio: { es: "séquito", en: "retinue", zh: "隨從" } },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición", syntaxis: "Nexo ('hasta, cerca de')", translatio: { es: "hasta", en: "to the number of about", zh: "大約" } },
                            { textus: "hominum", lemma: "homo", morphologia: "Sust. 3ª dec, M, Gen, Pl", syntaxis: "Genitivo Partitivo", translatio: { es: "de hombres", en: "men", zh: "人" } },
                            { textus: "milia", lemma: "milia", morphologia: "Sust. 3ª dec, N, Acu, Pl", syntaxis: "Complemento", translatio: { es: "diez mil", en: "ten thousand", zh: "一萬" } },
                            { textus: "X", lemma: "decem", morphologia: "Numeral", syntaxis: "Atributo", translatio: { es: "", en: "", zh: "" } },
                            { textus: "undique", lemma: "undique", morphologia: "Adverbio", syntaxis: "Complemento de Lugar", translatio: { es: "de todas partes", en: "from all sides", zh: "從四面八方" } },
                            { textus: "coegit", lemma: "cogo", morphologia: "Verbo, Pret. Perfecto Ind, 3ª Sg", syntaxis: "Verbo Principal", translatio: { es: "reunió", en: "gathered", zh: "召集了" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "並將" } },
                            { textus: "omnes", lemma: "omnis", morphologia: "Adj. 3ª dec, M, Acu, Pl", syntaxis: "Atributo de 'clientes' y 'obaeratos'", translatio: { es: "a todos", en: "all", zh: "所有" } },
                            { textus: "clientes", lemma: "cliens", morphologia: "Sust. 3ª dec, M, Acu, Pl", syntaxis: "Objeto Directo de 'conduxit'", translatio: { es: "sus clientes", en: "his clients", zh: "他的門客" } },
                            { textus: "obaeratosque", lemma: "obaeratus", morphologia: "Sust. 2ª dec, M, Acu, Pl + '-que'", syntaxis: "Objeto Directo de 'conduxit' / Nexo", translatio: { es: "y deudores", en: "and his debtors", zh: "和債務人" } },
                            { textus: "suos", lemma: "suus", morphologia: "Adj. posesivo, M, Acu, Pl", syntaxis: "Atributo", translatio: { es: "suyos", en: "", zh: "" } },
                            { textus: "quorum", lemma: "qui", morphologia: "Pronombre relativo, M, Gen, Pl", syntaxis: "Complemento del Nombre", translatio: { es: "de los cuales", en: "of whom", zh: "其中" } },
                            { textus: "magnum", lemma: "magnus", morphologia: "Adj. 1ª/2ª dec, M, Acu, Sg", syntaxis: "Atributo de 'numerum'", translatio: { es: "un gran", en: "a great", zh: "很多" } },
                            { textus: "numerum", lemma: "numerus", morphologia: "Sust. 2ª dec, M, Acu, Sg", syntaxis: "Objeto Directo de 'habebat'", translatio: { es: "número", en: "number", zh: "" } },
                            { textus: "habebat", lemma: "habeo", morphologia: "Verbo, Pret. Imperfecto Ind, 3ª Sg", syntaxis: "Verbo de subordinada de relativo", translatio: { es: "tenía", en: "he had", zh: "他有" } },
                            { textus: "eodem", lemma: "eodem", morphologia: "Adverbio", syntaxis: "Complemento de Lugar ('al mismo lugar')", translatio: { es: "al mismo lugar", en: "to the same place", zh: "到同一個地方" } },
                            { textus: "conduxit", lemma: "conduco", morphologia: "Verbo, Pret. Perfecto Ind, 3ª Sg", syntaxis: "Verbo Principal", translatio: { es: "condujo", en: "brought", zh: "帶到了" } },
                            { textus: "per", lemma: "per", morphologia: "Preposición", syntaxis: "Nexo (rige Acusativo)", translatio: { es: "por medio de", en: "through", zh: "通過" } },
                            { textus: "eos", lemma: "is", morphologia: "Pronombre, M, Acu, Pl", syntaxis: "Complemento Instrumental", translatio: { es: "ellos", en: "them", zh: "這些人" } },
                            { textus: "ne", lemma: "ne", morphologia: "Conjunción subordinante", syntaxis: "Nexo (introduce cláusula final negativa)", translatio: { es: "para no", en: "from", zh: "免於" } },
                            { textus: "causam", lemma: "causa", morphologia: "Sust. 1ª dec, F, Acu, Sg", syntaxis: "Objeto Directo de 'diceret'", translatio: { es: "la causa", en: "his case", zh: "為自己" } },
                            { textus: "diceret", lemma: "dico", morphologia: "Verbo, Pret. Imperfecto Subj, 3ª Sg", syntaxis: "Verbo de la subordinada final", translatio: { es: "defender", en: "pleading", zh: "辯護" } },
                            { textus: "se", lemma: "sui", morphologia: "Pronombre reflexivo, Acu, Sg", syntaxis: "Objeto Directo", translatio: { es: "se", en: "he", zh: "他" } },
                            { textus: "eripuit", lemma: "eripio", morphologia: "Verbo, Pret. Perfecto Ind, 3ª Sg", syntaxis: "Verbo Principal", translatio: { es: "libró", en: "escaped", zh: "得以逃脫" } }
                        ],
                        ordo_syntacticus: "[Die constituta... (Abl. Absoluto)], [Orgetorix (S) coegit (V1)... et conduxit (V2)...]; [eripuit (V3) se per eos, ne diceret causam (Sub. Final)].",
                        notae: "'Familia' en este contexto no significa solo la familia nuclear, sino todo el séquito, incluyendo esclavos y sirvientes.",
                        translationes: {
                            es: "En el día fijado para la defensa de la causa, Orgetórige reunió de todas partes para el juicio a todo su séquito, hasta unos diez mil hombres, y condujo al mismo lugar a todos sus clientes y deudores, de los cuales tenía un gran número: por medio de ellos se libró de tener que defender su causa.",
                            en: "On the day appointed for the pleading of his case, Orgetorix gathered from all sides to the trial all his retinue, to the number of about ten thousand men, and brought to the same place all his clients and his debtors, of whom he had a great number: through them, he escaped from pleading his case.",
                            zh: "在為案件辯護的指定日子，奧爾格托里克斯從四面八方召集了他所有的隨從到審判地，大約有一萬人，並將他所有的門客和債務人（他有很多人）也帶到了同一個地方：通過這些人，他得以逃脫，免於為自己辯護。"
                        }
                    },
                    {
                        id_orationis: 'o24',
                        original_lat: "Cum ciuitas, ob eam rem incitata, armis ius suum exsequi conaretur, multitudinemque hominum ex agris magistratus cogerent, Orgetorix mortuus est, neque abest suspicio, ut Heluetii arbitrabantur, quin ipse sibi mortem consciuerit.",
                        verba: [
                            { textus: "Cum", lemma: "cum", morphologia: "Conjunción subordinante", syntaxis: "Nexo ('como, mientras')", translatio: { es: "Mientras", en: "While", zh: "當" } },
                            { textus: "ciuitas", lemma: "ciuitas", morphologia: "Sust. 3ª dec, F, Nom, Sg", syntaxis: "Sujeto de 'conaretur'", translatio: { es: "la ciudad", en: "the state", zh: "城邦" } },
                            { textus: "ob", lemma: "ob", morphologia: "Preposición", syntaxis: "Nexo (rige Acusativo)", translatio: { es: "por", en: "by", zh: "因" } },
                            { textus: "eam", lemma: "is", morphologia: "Pronombre-Adj. demost, F, Acu, Sg", syntaxis: "Atributo de 'rem'", translatio: { es: "este", en: "this", zh: "這件" } },
                            { textus: "rem", lemma: "res", morphologia: "Sust. 5ª dec, F, Acu, Sg", syntaxis: "Complemento Causal", translatio: { es: "suceso", en: "event", zh: "事" } },
                            { textus: "incitata", lemma: "incito", morphologia: "Participio Perf. Pas, F, Nom, Sg", syntaxis: "Participio concertado con 'ciuitas'", translatio: { es: "enardecida", en: "enraged", zh: "被激怒" } },
                            { textus: "armis", lemma: "arma", morphologia: "Sust. 2ª dec, N, Abl, Pl", syntaxis: "Ablativo de Instrumento", translatio: { es: "por las armas", en: "by arms", zh: "用武力" } },
                            { textus: "ius", lemma: "ius", morphologia: "Sust. 3ª dec, N, Acu, Sg", syntaxis: "Objeto Directo de 'exsequi'", translatio: { es: "su derecho", en: "its law", zh: "其法律" } },
                            { textus: "suum", lemma: "suus", morphologia: "Adj. posesivo, N, Acu, Sg", syntaxis: "Atributo de 'ius'", translatio: { es: "", en: "", zh: "" } },
                            { textus: "exsequi", lemma: "exsequor", morphologia: "Verbo Deponente, Pres. Inf", syntaxis: "Infinitivo Completivo", translatio: { es: "hacer valer", en: "to enforce", zh: "執行" } },
                            { textus: "conaretur", lemma: "conor", morphologia: "Verbo Deponente, Pret. Imperfecto Subj, 3ª Sg", syntaxis: "Verbo de la subordinada (cum histórico)", translatio: { es: "intentaba", en: "was trying", zh: "試圖" } },
                            { textus: "multitudinemque", lemma: "multitudo", morphologia: "Sust. 3ª dec, F, Acu, Sg + '-que'", syntaxis: "Objeto Directo de 'cogerent' / Nexo", translatio: { es: "y una multitud", en: "and a multitude", zh: "而...大批" } },
                            { textus: "hominum", lemma: "homo", morphologia: "Sust. 3ª dec, M, Gen, Pl", syntaxis: "Complemento del Nombre", translatio: { es: "de hombres", en: "of men", zh: "人手" } },
                            { textus: "ex", lemma: "ex", morphologia: "Preposición", syntaxis: "Nexo (rige Ablativo)", translatio: { es: "de", en: "from", zh: "從" } },
                            { textus: "agris", lemma: "ager", morphologia: "Sust. 2ª dec, M, Abl, Pl", syntaxis: "Complemento de Origen", translatio: { es: "los campos", en: "the fields", zh: "鄉間" } },
                            { textus: "magistratus", lemma: "magistratus", morphologia: "Sust. 4ª dec, M, Nom, Pl", syntaxis: "Sujeto de 'cogerent'", translatio: { es: "los magistrados", en: "the magistrates", zh: "官員們" } },
                            { textus: "cogerent", lemma: "cogo", morphologia: "Verbo, Pret. Imperfecto Subj, 3ª Pl", syntaxis: "Verbo de la subordinada", translatio: { es: "reunían", en: "were gathering", zh: "正召集" } },
                            { textus: "Orgetorix", lemma: "Orgetorix", morphologia: "Sust. 3ª dec, M, Nom, Sg", syntaxis: "Sujeto", translatio: { es: "Orgetórige", en: "Orgetorix", zh: "奧爾格托里克斯" } },
                            { textus: "mortuus", lemma: "morior", morphologia: "Participio Perf. (con valor de verbo), M, Nom, Sg", syntaxis: "Verbo Principal", translatio: { es: "murió", en: "died", zh: "死了" } },
                            { textus: "est", lemma: "sum", morphologia: "Verbo, Pres. Ind, 3ª Sg", syntaxis: "Auxiliar del perfecto", translatio: { es: "", en: "", zh: "" } },
                            { textus: "neque", lemma: "neque", morphologia: "Conjunción copulativa negativa", syntaxis: "Nexo", translatio: { es: "y no", en: "and... is not", zh: "並且不" } },
                            { textus: "abest", lemma: "absum", morphologia: "Verbo, Pres. Ind, 3ª Sg", syntaxis: "Verbo Principal", translatio: { es: "falta", en: "wanting", zh: "乏" } },
                            { textus: "suspicio", lemma: "suspicio", morphologia: "Sust. 3ª dec, F, Nom, Sg", syntaxis: "Sujeto de 'abest'", translatio: { es: "la sospecha", en: "the suspicion", zh: "這樣的懷疑" } },
                            { textus: "ut", lemma: "ut", morphologia: "Adverbio", syntaxis: "Nexo ('como')", translatio: { es: "como", en: "as", zh: "正如" } },
                            { textus: "Heluetii", lemma: "Heluetii", morphologia: "Sust. 2ª dec, M, Nom, Pl", syntaxis: "Sujeto de 'arbitrabantur'", translatio: { es: "los helvecios", en: "the Helvetii", zh: "赫爾維蒂人" } },
                            { textus: "arbitrabantur", lemma: "arbitror", morphologia: "Verbo Deponente, Pret. Imperfecto Ind, 3ª Pl", syntaxis: "Verbo de cláusula parentética", translatio: { es: "pensaban", en: "thought", zh: "所認為的" } },
                            { textus: "quin", lemma: "quin", morphologia: "Conjunción subordinante", syntaxis: "Nexo (introduce cláusula de duda)", translatio: { es: "de que", en: "that", zh: "即" } },
                            { textus: "ipse", lemma: "ipse", morphologia: "Pronombre-Adj. enfático, M, Nom, Sg", syntaxis: "Sujeto", translatio: { es: "él mismo", en: "he himself", zh: "他自己" } },
                            { textus: "sibi", lemma: "sui", morphologia: "Pronombre reflexivo, Dat, Sg", syntaxis: "Dativo de Interés", translatio: { es: "para sí", en: "for himself", zh: "自己" } },
                            { textus: "mortem", lemma: "mors", morphologia: "Sust. 3ª dec, F, Acu, Sg", syntaxis: "Objeto Directo", translatio: { es: "la muerte", en: "death", zh: "結束了" } },
                            { textus: "consciuerit", lemma: "conscisco", morphologia: "Verbo, Pret. Perfecto Subj, 3ª Sg", syntaxis: "Verbo de la subordinada de duda", translatio: { es: "se hubiera dado", en: "decided on", zh: "生命" } }
                        ],
                        ordo_syntacticus: "[Cum ciuitas... conaretur... magistratusque cogerent (Sub. cum histórico)], [Orgetorix (S) mortuus est (V)], neque [suspicio (S) abest (V) [quin ipse... consciuerit (Sub. de duda)]].",
                        notae: "'Mortem sibi consciscere' es el idiotismo latino para 'suicidarse'. La cláusula con 'quin' depende de 'neque abest suspicio', una expresión de duda.",
                        translationes: {
                            es: "Mientras la ciudad, enardecida por este suceso, intentaba hacer valer su derecho por las armas y los magistrados reunían a una multitud de hombres de los campos, Orgetórige murió; y no falta la sospecha, como pensaban los helvecios, de que él mismo se hubiera dado muerte.",
                            en: "While the state, enraged by this event, was trying to enforce its law by arms, and the magistrates were gathering a multitude of men from the fields, Orgetorix died; and the suspicion is not wanting, as the Helvetii thought, that he himself decided on death for himself (committed suicide).",
                            zh: "當城邦因這件事被激怒，試圖用武力執行其法律，而官員們正從鄉間召集大批人手時，奧爾格托里克斯死了；並且不乏這樣的懷疑，正如赫爾維蒂人所認為的那樣，是他自己結束了自己的生命。"
                        }
                    }
                ]
            }
        ]
    }
};

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
                            { textus: "Ea", lemma: "is", morphologia: "Pronombre-Adj. demost, F, Nom, Sg", syntaxis: "Atributo de 'res'" },
                            { textus: "res", lemma: "res", morphologia: "Sust. 5ª dec, F, Nom, Sg", syntaxis: "Sujeto de 'est enuntiata'" },
                            { textus: "ut", lemma: "ut", morphologia: "Conjunción subordinante", syntaxis: "Nexo temporal ('cuando, como')" },
                            { textus: "est", lemma: "sum", morphologia: "Verbo, Pres. Ind, 3ª Sg", syntaxis: "Auxiliar del perfecto pasivo" },
                            { textus: "Heluetiis", lemma: "Heluetii", morphologia: "Sust. 2ª dec, M, Dat, Pl", syntaxis: "Dativo de Interés" },
                            { textus: "per", lemma: "per", morphologia: "Preposición", syntaxis: "Nexo (rige Acusativo)" },
                            { textus: "indicium", lemma: "indicium", morphologia: "Sust. 2ª dec, N, Acu, Sg", syntaxis: "Complemento ('a través de una delación')" },
                            { textus: "enuntiata", lemma: "enuntio", morphologia: "Participio Perf. Pas, F, Nom, Sg", syntaxis: "Verbo de la subordinada temporal" },
                            { textus: "moribus", lemma: "mos", morphologia: "Sust. 3ª dec, M, Abl, Pl", syntaxis: "Ablativo de Conformidad" },
                            { textus: "suis", lemma: "suus", morphologia: "Adj. posesivo, M, Abl, Pl", syntaxis: "Atributo de 'moribus'" },
                            { textus: "Orgetorigem", lemma: "Orgetorix", morphologia: "Sust. 3ª dec, M, Acu, Sg", syntaxis: "Sujeto de la Oración de Infinitivo" },
                            { textus: "ex", lemma: "ex", morphologia: "Preposición", syntaxis: "Nexo (rige Ablativo)" },
                            { textus: "uinculis", lemma: "uinculum", morphologia: "Sust. 2ª dec, N, Abl, Pl", syntaxis: "Complemento ('encadenado')" },
                            { textus: "causam", lemma: "causa", morphologia: "Sust. 1ª dec, F, Acu, Sg", syntaxis: "Objeto Directo de 'dicere'" },
                            { textus: "dicere", lemma: "dico", morphologia: "Verbo, Pres. Inf. Act", syntaxis: "Verbo de la Oración de Infinitivo" },
                            { textus: "coegerunt", lemma: "cogo", morphologia: "Verbo, Pret. Perfecto Ind, 3ª Pl", syntaxis: "Verbo Principal" }
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
                            { textus: "Damnatum", lemma: "damno", morphologia: "Participio Perf. Pas (sustantivado), M, Acu, Sg", syntaxis: "Sujeto de la Oración de Infinitivo ('al condenado')" },
                            { textus: "poenam", lemma: "poena", morphologia: "Sust. 1ª dec, F, Acu, Sg", syntaxis: "Objeto Directo de 'sequi'" },
                            { textus: "sequi", lemma: "sequor", morphologia: "Verbo Deponente, Pres. Inf", syntaxis: "Verbo de la Oración de Infinitivo" },
                            { textus: "oportebat", lemma: "oportet", morphologia: "Verbo impersonal, Pret. Imperfecto Ind, 3ª Sg", syntaxis: "Verbo Principal ('era necesario')" },
                            { textus: "ut", lemma: "ut", morphologia: "Conjunción subordinante", syntaxis: "Nexo (introduce cláusula completiva)" },
                            { textus: "igni", lemma: "ignis", morphologia: "Sust. 3ª dec, M, Abl, Sg", syntaxis: "Ablativo de Instrumento" },
                            { textus: "cremaretur", lemma: "cremo", morphologia: "Verbo, Pret. Imperfecto Subj. Pas, 3ª Sg", syntaxis: "Verbo de la subordinada" }
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
                            { textus: "Die", lemma: "dies", morphologia: "Sust. 5ª dec, F, Abl, Sg", syntaxis: "Sujeto del Ablativo Absoluto" },
                            { textus: "constituta", lemma: "constituo", morphologia: "Participio Perf. Pas, F, Abl, Sg", syntaxis: "Participio del Ablativo Absoluto" },
                            { textus: "causae", lemma: "causa", morphologia: "Sust. 1ª dec, F, Gen, Sg", syntaxis: "Complemento del Nombre" },
                            { textus: "dictionis", lemma: "dictio", morphologia: "Sust. 3ª dec, F, Gen, Sg", syntaxis: "Complemento del Nombre" },
                            { textus: "Orgetorix", lemma: "Orgetorix", morphologia: "Sust. 3ª dec, M, Nom, Sg", syntaxis: "Sujeto" },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición", syntaxis: "Nexo (rige Acusativo)" },
                            { textus: "iudicium", lemma: "iudicium", morphologia: "Sust. 2ª dec, N, Acu, Sg", syntaxis: "Complemento de Dirección" },
                            { textus: "omnem", lemma: "omnis", morphologia: "Adj. 3ª dec, F, Acu, Sg", syntaxis: "Atributo de 'familiam'" },
                            { textus: "suam", lemma: "suus", morphologia: "Adj. posesivo, F, Acu, Sg", syntaxis: "Atributo de 'familiam'" },
                            { textus: "familiam", lemma: "familia", morphologia: "Sust. 1ª dec, F, Acu, Sg", syntaxis: "Objeto Directo de 'coegit'" },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición", syntaxis: "Nexo ('hasta, cerca de')" },
                            { textus: "hominum", lemma: "homo", morphologia: "Sust. 3ª dec, M, Gen, Pl", syntaxis: "Genitivo Partitivo" },
                            { textus: "milia", lemma: "milia", morphologia: "Sust. 3ª dec, N, Acu, Pl", syntaxis: "Complemento" },
                            { textus: "X", lemma: "decem", morphologia: "Numeral", syntaxis: "Atributo" },
                            { textus: "undique", lemma: "undique", morphologia: "Adverbio", syntaxis: "Complemento de Lugar" },
                            { textus: "coegit", lemma: "cogo", morphologia: "Verbo, Pret. Perfecto Ind, 3ª Sg", syntaxis: "Verbo Principal" },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo" },
                            { textus: "omnes", lemma: "omnis", morphologia: "Adj. 3ª dec, M, Acu, Pl", syntaxis: "Atributo de 'clientes' y 'obaeratos'" },
                            { textus: "clientes", lemma: "cliens", morphologia: "Sust. 3ª dec, M, Acu, Pl", syntaxis: "Objeto Directo de 'conduxit'" },
                            { textus: "obaeratosque", lemma: "obaeratus", morphologia: "Sust. 2ª dec, M, Acu, Pl + '-que'", syntaxis: "Objeto Directo de 'conduxit' / Nexo" },
                            { textus: "suos", lemma: "suus", morphologia: "Adj. posesivo, M, Acu, Pl", syntaxis: "Atributo" },
                            { textus: "quorum", lemma: "qui", morphologia: "Pronombre relativo, M, Gen, Pl", syntaxis: "Complemento del Nombre" },
                            { textus: "magnum", lemma: "magnus", morphologia: "Adj. 1ª/2ª dec, M, Acu, Sg", syntaxis: "Atributo de 'numerum'" },
                            { textus: "numerum", lemma: "numerus", morphologia: "Sust. 2ª dec, M, Acu, Sg", syntaxis: "Objeto Directo de 'habebat'" },
                            { textus: "habebat", lemma: "habeo", morphologia: "Verbo, Pret. Imperfecto Ind, 3ª Sg", syntaxis: "Verbo de subordinada de relativo" },
                            { textus: "eodem", lemma: "eodem", morphologia: "Adverbio", syntaxis: "Complemento de Lugar ('al mismo lugar')" },
                            { textus: "conduxit", lemma: "conduco", morphologia: "Verbo, Pret. Perfecto Ind, 3ª Sg", syntaxis: "Verbo Principal" },
                            { textus: "per", lemma: "per", morphologia: "Preposición", syntaxis: "Nexo (rige Acusativo)" },
                            { textus: "eos", lemma: "is", morphologia: "Pronombre, M, Acu, Pl", syntaxis: "Complemento Instrumental" },
                            { textus: "ne", lemma: "ne", morphologia: "Conjunción subordinante", syntaxis: "Nexo (introduce cláusula final negativa)" },
                            { textus: "causam", lemma: "causa", morphologia: "Sust. 1ª dec, F, Acu, Sg", syntaxis: "Objeto Directo de 'diceret'" },
                            { textus: "diceret", lemma: "dico", morphologia: "Verbo, Pret. Imperfecto Subj, 3ª Sg", syntaxis: "Verbo de la subordinada final" },
                            { textus: "se", lemma: "sui", morphologia: "Pronombre reflexivo, Acu, Sg", syntaxis: "Objeto Directo" },
                            { textus: "eripuit", lemma: "eripio", morphologia: "Verbo, Pret. Perfecto Ind, 3ª Sg", syntaxis: "Verbo Principal" }
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
                            { textus: "Cum", lemma: "cum", morphologia: "Conjunción subordinante", syntaxis: "Nexo ('como, mientras')" },
                            { textus: "ciuitas", lemma: "ciuitas", morphologia: "Sust. 3ª dec, F, Nom, Sg", syntaxis: "Sujeto de 'conaretur'" },
                            { textus: "ob", lemma: "ob", morphologia: "Preposición", syntaxis: "Nexo (rige Acusativo)" },
                            { textus: "eam", lemma: "is", morphologia: "Pronombre-Adj. demost, F, Acu, Sg", syntaxis: "Atributo de 'rem'" },
                            { textus: "rem", lemma: "res", morphologia: "Sust. 5ª dec, F, Acu, Sg", syntaxis: "Complemento Causal" },
                            { textus: "incitata", lemma: "incito", morphologia: "Participio Perf. Pas, F, Nom, Sg", syntaxis: "Participio concertado con 'ciuitas'" },
                            { textus: "armis", lemma: "arma", morphologia: "Sust. 2ª dec, N, Abl, Pl", syntaxis: "Ablativo de Instrumento" },
                            { textus: "ius", lemma: "ius", morphologia: "Sust. 3ª dec, N, Acu, Sg", syntaxis: "Objeto Directo de 'exsequi'" },
                            { textus: "suum", lemma: "suus", morphologia: "Adj. posesivo, N, Acu, Sg", syntaxis: "Atributo de 'ius'" },
                            { textus: "exsequi", lemma: "exsequor", morphologia: "Verbo Deponente, Pres. Inf", syntaxis: "Infinitivo Completivo" },
                            { textus: "conaretur", lemma: "conor", morphologia: "Verbo Deponente, Pret. Imperfecto Subj, 3ª Sg", syntaxis: "Verbo de la subordinada (cum histórico)" },
                            { textus: "multitudinemque", lemma: "multitudo", morphologia: "Sust. 3ª dec, F, Acu, Sg + '-que'", syntaxis: "Objeto Directo de 'cogerent' / Nexo" },
                            { textus: "hominum", lemma: "homo", morphologia: "Sust. 3ª dec, M, Gen, Pl", syntaxis: "Complemento del Nombre" },
                            { textus: "ex", lemma: "ex", morphologia: "Preposición", syntaxis: "Nexo (rige Ablativo)" },
                            { textus: "agris", lemma: "ager", morphologia: "Sust. 2ª dec, M, Abl, Pl", syntaxis: "Complemento de Origen" },
                            { textus: "magistratus", lemma: "magistratus", morphologia: "Sust. 4ª dec, M, Nom, Pl", syntaxis: "Sujeto de 'cogerent'" },
                            { textus: "cogerent", lemma: "cogo", morphologia: "Verbo, Pret. Imperfecto Subj, 3ª Pl", syntaxis: "Verbo de la subordinada" },
                            { textus: "Orgetorix", lemma: "Orgetorix", morphologia: "Sust. 3ª dec, M, Nom, Sg", syntaxis: "Sujeto" },
                            { textus: "mortuus", lemma: "morior", morphologia: "Participio Perf. (con valor de verbo), M, Nom, Sg", syntaxis: "Verbo Principal" },
                            { textus: "est", lemma: "sum", morphologia: "Verbo, Pres. Ind, 3ª Sg", syntaxis: "Auxiliar del perfecto" },
                            { textus: "neque", lemma: "neque", morphologia: "Conjunción copulativa negativa", syntaxis: "Nexo" },
                            { textus: "abest", lemma: "absum", morphologia: "Verbo, Pres. Ind, 3ª Sg", syntaxis: "Verbo Principal" },
                            { textus: "suspicio", lemma: "suspicio", morphologia: "Sust. 3ª dec, F, Nom, Sg", syntaxis: "Sujeto de 'abest'" },
                            { textus: "ut", lemma: "ut", morphologia: "Adverbio", syntaxis: "Nexo ('como')" },
                            { textus: "Heluetii", lemma: "Heluetii", morphologia: "Sust. 2ª dec, M, Nom, Pl", syntaxis: "Sujeto de 'arbitrabantur'" },
                            { textus: "arbitrabantur", lemma: "arbitror", morphologia: "Verbo Deponente, Pret. Imperfecto Ind, 3ª Pl", syntaxis: "Verbo de cláusula parentética" },
                            { textus: "quin", lemma: "quin", morphologia: "Conjunción subordinante", syntaxis: "Nexo (introduce cláusula de duda)" },
                            { textus: "ipse", lemma: "ipse", morphologia: "Pronombre-Adj. enfático, M, Nom, Sg", syntaxis: "Sujeto" },
                            { textus: "sibi", lemma: "sui", morphologia: "Pronombre reflexivo, Dat, Sg", syntaxis: "Dativo de Interés" },
                            { textus: "mortem", lemma: "mors", morphologia: "Sust. 3ª dec, F, Acu, Sg", syntaxis: "Objeto Directo" },
                            { textus: "consciuerit", lemma: "conscisco", morphologia: "Verbo, Pret. Perfecto Subj, 3ª Sg", syntaxis: "Verbo de la subordinada de duda" }
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

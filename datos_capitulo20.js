const corpus = {
    titulus_principalis: "De Bello Gallico, I, 20",
    auctor: "C. Iulius Caesar",
    titulus_secundarius: {
        es: "La súplica de Diviciaco y el perdón de César",
        en: "The Plea of Diviciacus and the Pardon of Caesar",
        zh: "迪維西亞庫斯的懇求與凱撒的寬恕"
    },
    introductio: {
        es: {
            titulus: "Introducción al Capítulo 20",
            contentus: `<p>Este capítulo narra la emotiva intercesión de Diviciaco en favor de su hermano Dúmnorix. Con lágrimas, Diviciaco admite la veracidad de las acusaciones, pero suplica clemencia. Argumenta que el poder de Dúmnorix, ahora usado para fines destructivos, creció gracias a su propia influencia, lo que le causa un profundo dolor. Teme que un castigo severo sobre su hermano sea percibido por los galos como una decisión influenciada por él, destruyendo su propia reputación. Conmovido por la lealtad y la angustia de Diviciaco, y valorando su amistad, César decide perdonar a Dúmnorix. No obstante, lo hace de manera pragmática: tras reprender a Dúmnorix en presencia de su hermano, le advierte severamente y lo pone bajo vigilancia para controlar sus futuras acciones.</p>`
        },
        en: {
            titulus: "Introduction to Chapter 20",
            contentus: `<p>This chapter narrates the emotional intercession of Diviciacus on behalf of his brother Dumnorix. In tears, Diviciacus admits the truth of the accusations but begs for mercy. He argues that Dumnorix's power, now used for destructive ends, grew thanks to his own influence, which causes him deep pain. He fears that a severe punishment for his brother would be perceived by the Gauls as a decision influenced by him, thus destroying his own reputation. Moved by Diviciacus's loyalty and anguish, and valuing his friendship, Caesar decides to pardon Dumnorix. However, he does so pragmatically: after reprimanding Dumnorix in his brother's presence, he sternly warns him and places him under surveillance to monitor his future actions.</p>`
        },
        zh: {
            titulus: "第 20 章介紹",
            contentus: `<p>本章敘述了迪維西亞庫斯為其兄弟杜姆諾里格斯所作的情感豐富的求情。迪維西亞庫斯含淚承認指控的真實性，但請求寬恕。他辯稱，杜姆諾里格斯如今用於破壞目的的權力，是得益於他自己的影響力才得以增長，這讓他深感痛苦。他擔心，對他兄弟的嚴厲懲罰會被高盧人視為是受他影響的決定，從而毀掉他自己的聲譽。凱撒被迪維西亞庫斯的忠誠和痛苦所感動，並珍視他們的友誼，決定寬恕杜姆諾里格斯。然而，他的做法非常務實：在迪維西亞庫斯在場的情況下訓斥了杜姆諾里格斯後，他嚴厲警告他，並將他置於監視之下，以控制其未來的行動。</p>`
        }
    },
    textus: {
        id: 20,
        capitula: [
            {
                id_capituli: 20,
                orationes: [
                    {
                        id_orationis: 'o1',
                        original_lat: "Diuiciacus multis cum lacrimis Caesarem complexus obsecrare coepit ne quid grauius in fratrem statueret:",
                        verba: [
                            { textus: "Diuiciacus", lemma: "Diuiciacus", morphologia: "Sustantivo, nominativo, singular, masculino", syntaxis: "Sujeto", translatio: { es: "Diviciaco", en: "Diviciacus", zh: "迪維西亞庫斯" } },
                            { textus: "multis", lemma: "multus", morphologia: "Adjetivo, ablativo, plural, femenino", syntaxis: "Modificador (de lacrimis)", translatio: { es: "con muchas", en: "with many", zh: "流著許多" } },
                            { textus: "cum", lemma: "cum", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "con", en: "with", zh: "" } },
                            { textus: "lacrimis", lemma: "lacrima", morphologia: "Sustantivo, ablativo, plural, femenino", syntaxis: "C.C. de Modo", translatio: { es: "lágrimas", en: "tears", zh: "眼淚" } },
                            { textus: "Caesarem", lemma: "Caesar", morphologia: "Sustantivo, acusativo, singular, masculino", syntaxis: "Objeto Directo", translatio: { es: "a César", en: "Caesar", zh: "凱撒" } },
                            { textus: "complexus", lemma: "complector", morphologia: "Verbo, participio, perfecto, deponente, nominativo, singular, masculino", syntaxis: "Participio concertado", translatio: { es: "abrazando", en: "having embraced", zh: "擁抱著" } },
                            { textus: "obsecrare", lemma: "obsecro", morphologia: "Verbo, infinitivo, presente, activo", syntaxis: "Infinitivo (complemento de coepit)", translatio: { es: "suplicar", en: "to beg", zh: "懇求" } },
                            { textus: "coepit", lemma: "coepi", morphologia: "Verbo, 3ª p, singular, perfecto, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "comenzó a", en: "began", zh: "開始" } },
                            { textus: "ne", lemma: "ne", morphologia: "Conjunción", syntaxis: "Nexo (finalidad negativa)", translatio: { es: "que no", en: "that not", zh: "不要" } },
                            { textus: "quid", lemma: "aliquis", morphologia: "Pronombre, acusativo, singular, neutro", syntaxis: "Objeto Directo", translatio: { es: "nada", en: "anything", zh: "任何" } },
                            { textus: "grauius", lemma: "grauis", morphologia: "Adjetivo, acusativo, singular, neutro, comparativo", syntaxis: "Predicativo del O.D.", translatio: { es: "demasiado severo", en: "too severe", zh: "太嚴厲的" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "contra", en: "against", zh: "對" } },
                            { textus: "fratrem", lemma: "frater", morphologia: "Sustantivo, acusativo, singular, masculino", syntaxis: "C. preposicional", translatio: { es: "su hermano", en: "his brother", zh: "他的兄弟" } },
                            { textus: "statueret", lemma: "statuo", morphologia: "Verbo, 3ª p, singular, imperfecto, subjuntivo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "decidiera", en: "he should decide", zh: "做出裁決" } },
                            { textus: ":", lemma: ":", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ":", en: ":", zh: "：" } }
                        ],
                        ordo_syntacticus: "Oración principal con verbo 'coepit' que rige un infinitivo ('obsecrare'). El participio 'complexus' está concertado con el sujeto. 'obsecrare' introduce una cláusula de finalidad negativa ('ne... statueret').",
                        notae: "'multis cum lacrimis' es una forma enfática de escribir 'cum multis lacrimis'.",
                        translationes: {
                            es: "Diviciaco, con muchas lágrimas, abrazando a César, comenzó a suplicarle que no decidiera nada demasiado severo contra su hermano:",
                            en: "Diviciacus, with many tears, having embraced Caesar, began to beg him not to decide anything too severe against his brother:",
                            zh: "迪維西亞庫斯淚流滿面地擁抱著凱撒，開始懇求他不要對他的兄弟做出任何過於嚴厲的裁決："
                        }
                    },
                    {
                        id_orationis: 'o2',
                        original_lat: "Scire se illa esse uera, nec quemquam ex eo plus quam se doloris capere, propterea quod, cum ipse gratia plurimum domi atque in reliqua Gallia, ille minimum propter adulescentiam posset, per se creuisset: quibus opibus ac neruis non solum ad minuendam gratiam, sed paene ad perniciem suam uteretur.",
                        verba: [
                            { textus: "Scire", lemma: "scio", morphologia: "Verbo, infinitivo, presente, activo", syntaxis: "Verbo (de infinitiva)", translatio: { es: "que sabía", en: "that he knew", zh: "他知道" } },
                            { textus: "se", lemma: "sui", morphologia: "Pronombre, acusativo, singular", syntaxis: "Sujeto (de infinitiva)", translatio: { es: "él", en: "he", zh: "" } },
                            { textus: "illa", lemma: "ille", morphologia: "Pronombre, acusativo, plural, neutro", syntaxis: "Sujeto (de esse)", translatio: { es: "aquellas cosas", en: "those things", zh: "那些事" } },
                            { textus: "esse", lemma: "sum", morphologia: "Verbo, infinitivo, presente", syntaxis: "Verbo (de infinitiva)", translatio: { es: "eran", en: "were", zh: "是" } },
                            { textus: "uera", lemma: "uerus", morphologia: "Adjetivo, acusativo, plural, neutro", syntaxis: "Atributo", translatio: { es: "ciertas", en: "true", zh: "真的" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "nec", lemma: "neque", morphologia: "Conjunción", syntaxis: "Nexo", translatio: { es: "y que no", en: "and that not", zh: "並且沒有" } },
                            { textus: "quemquam", lemma: "quisquam", morphologia: "Pronombre, acusativo, singular", syntaxis: "Sujeto (de capere)", translatio: { es: "nadie", en: "anyone", zh: "任何人" } },
                            { textus: "ex", lemma: "ex", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "por", en: "from", zh: "從中" } },
                            { textus: "eo", lemma: "is", morphologia: "Pronombre, ablativo, singular, neutro", syntaxis: "C. preposicional", translatio: { es: "ello", en: "it", zh: "" } },
                            { textus: "plus", lemma: "multus", morphologia: "Adverbio, comparativo", syntaxis: "Modificador", translatio: { es: "más", en: "more", zh: "比" } },
                            { textus: "quam", lemma: "quam", morphologia: "Conjunción", syntaxis: "Nexo (comparativo)", translatio: { es: "que", en: "than", zh: "" } },
                            { textus: "se", lemma: "sui", morphologia: "Pronombre, acusativo, singular", syntaxis: "Término de comparación", translatio: { es: "él", en: "he", zh: "他" } },
                            { textus: "doloris", lemma: "dolor", morphologia: "Sustantivo, genitivo, singular, masculino", syntaxis: "Genitivo partitivo", translatio: { es: "dolor", en: "of pain", zh: "感到" } },
                            { textus: "capere", lemma: "capio", morphologia: "Verbo, infinitivo, presente, activo", syntaxis: "Verbo (de infinitiva)", translatio: { es: "sentía", en: "felt", zh: "更多的痛苦" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "propterea", lemma: "propterea", morphologia: "Adverbio", syntaxis: "Correlativo", translatio: { es: "por el hecho", en: "for the reason", zh: "原因是" } },
                            { textus: "quod", lemma: "quod", morphologia: "Conjunción", syntaxis: "Nexo (causal)", translatio: { es: "de que", en: "that", zh: "" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "cum", lemma: "cum", morphologia: "Conjunción", syntaxis: "Nexo (adversativo)", translatio: { es: "mientras", en: "while", zh: "當" } },
                            { textus: "ipse", lemma: "ipse", morphologia: "Pronombre, nominativo, singular, masculino", syntaxis: "Sujeto", translatio: { es: "él mismo", en: "he himself", zh: "他自己" } },
                            { textus: "gratia", lemma: "gratia", morphologia: "Sustantivo, ablativo, singular, femenino", syntaxis: "Ablativo de respecto", translatio: { es: "en influencia", en: "in influence", zh: "在影響力方面" } },
                            { textus: "plurimum", lemma: "multum", morphologia: "Adverbio, superlativo", syntaxis: "Modificador", translatio: { es: "era muy poderoso", en: "was very powerful", zh: "權勢極大" } },
                            { textus: "domi", lemma: "domus", morphologia: "Sustantivo, locativo, singular, femenino", syntaxis: "C.C. de Lugar", translatio: { es: "en su patria", en: "at home", zh: "在國內" } },
                            { textus: "atque", lemma: "atque", morphologia: "Conjunción", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "以及" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "en", en: "in", zh: "在" } },
                            { textus: "reliqua", lemma: "reliquus", morphologia: "Adjetivo, ablativo, singular, femenino", syntaxis: "Modificador", translatio: { es: "el resto de", en: "the rest of", zh: "其餘的" } },
                            { textus: "Gallia", lemma: "Gallia", morphologia: "Sustantivo, ablativo, singular, femenino", syntaxis: "C. preposicional", translatio: { es: "la Galia", en: "Gaul", zh: "高盧" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "ille", lemma: "ille", morphologia: "Pronombre, nominativo, singular, masculino", syntaxis: "Sujeto", translatio: { es: "aquel", en: "that one", zh: "那個人" } },
                            { textus: "minimum", lemma: "parum", morphologia: "Adverbio, superlativo", syntaxis: "Modificador", translatio: { es: "era muy débil", en: "was very weak", zh: "權勢極小" } },
                            { textus: "propter", lemma: "propter", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "a causa de", en: "on account of", zh: "由於" } },
                            { textus: "adulescentiam", lemma: "adulescentia", morphologia: "Sustantivo, acusativo, singular, femenino", syntaxis: "C. preposicional", translatio: { es: "su juventud", en: "his youth", zh: "年輕" } },
                            { textus: "posset", lemma: "possum", morphologia: "Verbo, 3ª p, plural, imperfecto, subjuntivo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "", en: "", zh: "" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "per", lemma: "per", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "gracias a", en: "through", zh: "通過" } },
                            { textus: "se", lemma: "sui", morphologia: "Pronombre, acusativo, singular", syntaxis: "C. preposicional", translatio: { es: "él", en: "him", zh: "他" } },
                            { textus: "creuisset", lemma: "cresco", morphologia: "Verbo, 3ª p, singular, pluscuamperfecto, subjuntivo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "había prosperado", en: "he had risen", zh: "才得以崛起" } },
                            { textus: ":", lemma: ":", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ":", en: ":", zh: "；" } },
                            { textus: "quibus", lemma: "qui", morphologia: "Pronombre relativo, ablativo, plural, femenino", syntaxis: "Complemento de uteretur", translatio: { es: "estos", en: "which", zh: "而這些" } },
                            { textus: "opibus", lemma: "ops", morphologia: "Sustantivo, ablativo, plural, femenino", syntaxis: "Complemento de uteretur", translatio: { es: "recursos", en: "resources", zh: "資源" } },
                            { textus: "ac", lemma: "ac", morphologia: "Conjunción", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "和" } },
                            { textus: "neruis", lemma: "neruus", morphologia: "Sustantivo, ablativo, plural, masculino", syntaxis: "Complemento de uteretur", translatio: { es: "poder", en: "power", zh: "權力" } },
                            { textus: "non", lemma: "non", morphologia: "Adverbio", syntaxis: "Negación", translatio: { es: "no", en: "not", zh: "不僅" } },
                            { textus: "solum", lemma: "solum", morphologia: "Adverbio", syntaxis: "Correlativo", translatio: { es: "solo", en: "only", zh: "被用來" } },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "para", en: "for", zh: "" } },
                            { textus: "minuendam", lemma: "minuo", morphologia: "Verbo, gerundivo, acusativo, singular, femenino", syntaxis: "Modificador", translatio: { es: "disminuir", en: "diminishing", zh: "削弱" } },
                            { textus: "gratiam", lemma: "gratia", morphologia: "Sustantivo, acusativo, singular, femenino", syntaxis: "C. preposicional", translatio: { es: "su influencia", en: "his influence", zh: "他的影響力" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "sed", lemma: "sed", morphologia: "Conjunción", syntaxis: "Nexo", translatio: { es: "sino", en: "but", zh: "甚至" } },
                            { textus: "paene", lemma: "paene", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "casi", en: "almost", zh: "幾乎" } },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "para", en: "for", zh: "導致" } },
                            { textus: "perniciem", lemma: "pernicies", morphologia: "Sustantivo, acusativo, singular, femenino", syntaxis: "C. preposicional", translatio: { es: "su propia ruina", en: "his own destruction", zh: "他自己的毀滅" } },
                            { textus: "suam", lemma: "suus", morphologia: "Adjetivo posesivo, acusativo, singular, femenino", syntaxis: "Modificador", translatio: { es: "", en: "", zh: "" } },
                            { textus: "uteretur", lemma: "utor", morphologia: "Verbo, 3ª p, singular, imperfecto, subjuntivo, deponente", syntaxis: "Verbo (de subordinada)", translatio: { es: "estaba usando", en: "he was using", zh: "" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Larga declaración en estilo indirecto. Comienza con dos oraciones de infinitivo coordinadas. Le sigue una cláusula causal ('propterea quod') que contiene una cláusula 'cum' adversativa y una relativa final ('quibus... uteretur').",
                        notae: "'plus doloris' es un genitivo partitivo ('más de dolor'). 'utor' rige ablativo ('opibus ac neruis').",
                        translationes: {
                            es: "Que él sabía que aquello era cierto, y que nadie sentía más dolor por ello que él, por el hecho de que, mientras él mismo era muy poderoso en influencia en su patria y en el resto de la Galia, y aquel era muy débil a causa de su juventud, había prosperado gracias a él; y estos recursos y poder los estaba usando no solo para disminuir su influencia, sino casi para su propia ruina.",
                            en: "That he knew those things were true, and that no one felt more pain from it than he, for the reason that, while he himself was very powerful in influence at home and in the rest of Gaul, and that one was very weak on account of his youth, he had risen through him; and he was using these resources and power not only for diminishing his influence, but almost for his own destruction.",
                            zh: "他說，他知道那些事是真的，而且沒有人比他從中感到更痛苦，原因是，當他自己憑藉影響力在國內和高盧其餘地區權勢極大，而那個人（杜姆諾里格斯）因年輕而權勢極小時，他卻是通過自己才得以崛起；而這些資源和權力，他不僅用來削弱自己的影響力，甚至幾乎要導致自己的毀滅。"
                        }
                    },
                    {
                        id_orationis: 'o3',
                        original_lat: "Sese tamen et amore fraterno et existimatione uulgi commoueri.",
                        verba: [
                            { textus: "Sese", lemma: "sui", morphologia: "Pronombre, acusativo, singular", syntaxis: "Sujeto (de infinitiva)", translatio: { es: "que él", en: "that he", zh: "然而他" } },
                            { textus: "tamen", lemma: "tamen", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "sin embargo", en: "nevertheless", zh: "" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción", syntaxis: "Nexo (correlativo)", translatio: { es: "tanto por", en: "both by", zh: "被" } },
                            { textus: "amore", lemma: "amor", morphologia: "Sustantivo, ablativo, singular, masculino", syntaxis: "C.C. de Causa", translatio: { es: "el amor", en: "the love", zh: "兄弟之愛" } },
                            { textus: "fraterno", lemma: "fraternus", morphologia: "Adjetivo, ablativo, singular, masculino", syntaxis: "Modificador", translatio: { es: "fraterno", en: "fraternal", zh: "" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción", syntaxis: "Nexo (correlativo)", translatio: { es: "como por", en: "and by", zh: "和" } },
                            { textus: "existimatione", lemma: "existimatio", morphologia: "Sustantivo, ablativo, singular, femenino", syntaxis: "C.C. de Causa", translatio: { es: "la opinión", en: "the opinion", zh: "民眾的" } },
                            { textus: "uulgi", lemma: "uulgus", morphologia: "Sustantivo, genitivo, singular, neutro", syntaxis: "C. del Nombre", translatio: { es: "del pueblo", en: "of the common people", zh: "看法" } },
                            { textus: "commoueri", lemma: "commoueo", morphologia: "Verbo, infinitivo, presente, pasivo", syntaxis: "Verbo (de infinitiva)", translatio: { es: "estaba conmovido", en: "was moved", zh: "所打動" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Oración de infinitivo en estilo indirecto, continuación del discurso de Diviciaco.",
                        notae: "",
                        translationes: {
                            es: "Que él, sin embargo, estaba conmovido tanto por el amor fraterno como por la opinión del pueblo.",
                            en: "That he, nevertheless, was moved both by fraternal love and by the opinion of the common people.",
                            zh: "然而他說，他被兄弟之愛和民眾的看法所打動。"
                        }
                    },
                    {
                        id_orationis: 'o4',
                        original_lat: "Quod si quid ei a Caesare grauius accidisset, cum ipse eum locum amicitiae apud eum teneret, neminem existimaturum non sua uoluntate factum: qua ex re futurum uti totius Galliae animi a se auerterentur.",
                        verba: [
                            { textus: "Quod", lemma: "quod", morphologia: "Conjunción", syntaxis: "Nexo", translatio: { es: "Por eso", en: "Therefore", zh: "因此" } },
                            { textus: "si", lemma: "si", morphologia: "Conjunción", syntaxis: "Nexo (condicional)", translatio: { es: "si", en: "if", zh: "如果" } },
                            { textus: "quid", lemma: "aliquis", morphologia: "Pronombre, nominativo, singular, neutro", syntaxis: "Sujeto", translatio: { es: "algo", en: "anything", zh: "任何" } },
                            { textus: "ei", lemma: "is", morphologia: "Pronombre, dativo, singular, masculino", syntaxis: "Objeto Indirecto", translatio: { es: "a él", en: "to him", zh: "在他身上" } },
                            { textus: "a", lemma: "a", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "por parte de", en: "by", zh: "由" } },
                            { textus: "Caesare", lemma: "Caesar", morphologia: "Sustantivo, ablativo, singular, masculino", syntaxis: "C. Agente", translatio: { es: "César", en: "Caesar", zh: "凱撒" } },
                            { textus: "grauius", lemma: "grauis", morphologia: "Adjetivo, nominativo, singular, neutro, comparativo", syntaxis: "Atributo", translatio: { es: "demasiado severo", en: "too severe", zh: "過於嚴厲的事" } },
                            { textus: "accidisset", lemma: "accido", morphologia: "Verbo, 3ª p, singular, pluscuamperfecto, subjuntivo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "le hubiera sucedido", en: "should have happened", zh: "發生" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "cum", lemma: "cum", morphologia: "Conjunción", syntaxis: "Nexo (causal)", translatio: { es: "dado que", en: "since", zh: "由於" } },
                            { textus: "ipse", lemma: "ipse", morphologia: "Pronombre, nominativo, singular, masculino", syntaxis: "Sujeto", translatio: { es: "él mismo", en: "he himself", zh: "他自己" } },
                            { textus: "eum", lemma: "is", morphologia: "Pronombre, acusativo, singular, masculino", syntaxis: "Modificador", translatio: { es: "tal", en: "such", zh: "那樣的" } },
                            { textus: "locum", lemma: "locus", morphologia: "Sustantivo, acusativo, singular, masculino", syntaxis: "Objeto Directo", translatio: { es: "lugar", en: "a position", zh: "地位" } },
                            { textus: "amicitiae", lemma: "amicitia", morphologia: "Sustantivo, genitivo, singular, femenino", syntaxis: "C. del Nombre", translatio: { es: "de amistad", en: "of friendship", zh: "友誼" } },
                            { textus: "apud", lemma: "apud", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "ante", en: "with", zh: "在...心中" } },
                            { textus: "eum", lemma: "is", morphologia: "Pronombre, acusativo, singular, masculino", syntaxis: "C. preposicional", translatio: { es: "él", en: "him", zh: "他（凱撒）" } },
                            { textus: "teneret", lemma: "teneo", morphologia: "Verbo, 3ª p, singular, imperfecto, subjuntivo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "ocupaba", en: "held", zh: "擁有" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "neminem", lemma: "nemo", morphologia: "Pronombre, acusativo, singular", syntaxis: "Sujeto (de infinitiva)", translatio: { es: "nadie", en: "no one", zh: "沒有人" } },
                            { textus: "existimaturum", lemma: "existimo", morphologia: "Verbo, participio, futuro, activo, acusativo, singular", syntaxis: "Verbo (de infinitiva)", translatio: { es: "pensaría", en: "would think", zh: "會認為" } },
                            { textus: "non", lemma: "non", morphologia: "Adverbio", syntaxis: "Negación", translatio: { es: "no", en: "not", zh: "不是" } },
                            { textus: "sua", lemma: "suus", morphologia: "Adjetivo posesivo, ablativo, singular, femenino", syntaxis: "Modificador", translatio: { es: "por su", en: "by his", zh: "出於他的" } },
                            { textus: "uoluntate", lemma: "uoluntas", morphologia: "Sustantivo, ablativo, singular, femenino", syntaxis: "C.C. de Causa", translatio: { es: "voluntad", en: "will", zh: "意願" } },
                            { textus: "factum", lemma: "facio", morphologia: "Verbo, participio, perfecto, pasivo, acusativo, singular, neutro", syntaxis: "Verbo (de infinitiva)", translatio: { es: "que se había hecho", en: "it was done", zh: "才發生的" } },
                            { textus: ":", lemma: ":", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ":", en: ":", zh: "；" } },
                            { textus: "qua", lemma: "qui", morphologia: "Pronombre relativo, ablativo, singular, femenino", syntaxis: "Modificador", translatio: { es: "por esta", en: "from this", zh: "因此" } },
                            { textus: "ex", lemma: "ex", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "", en: "", zh: "" } },
                            { textus: "re", lemma: "res", morphologia: "Sustantivo, ablativo, singular, femenino", syntaxis: "C. preposicional", translatio: { es: "razón", en: "matter", zh: "" } },
                            { textus: "futurum", lemma: "sum", morphologia: "Verbo, participio, futuro, activo, acusativo, singular, neutro", syntaxis: "Verbo (de infinitiva)", translatio: { es: "sucedería", en: "it would happen", zh: "將會導致" } },
                            { textus: "uti", lemma: "ut", morphologia: "Conjunción", syntaxis: "Nexo (completivo)", translatio: { es: "que", en: "that", zh: "整個" } },
                            { textus: "totius", lemma: "totus", morphologia: "Adjetivo, genitivo, singular, femenino", syntaxis: "Modificador", translatio: { es: "de toda", en: "of all", zh: "" } },
                            { textus: "Galliae", lemma: "Gallia", morphologia: "Sustantivo, genitivo, singular, femenino", syntaxis: "C. del Nombre", translatio: { es: "la Galia", en: "Gaul", zh: "高盧的" } },
                            { textus: "animi", lemma: "animus", morphologia: "Sustantivo, nominativo, plural, masculino", syntaxis: "Sujeto", translatio: { es: "los corazones", en: "the hearts", zh: "人心" } },
                            { textus: "a", lemma: "a", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "de", en: "from", zh: "背離" } },
                            { textus: "se", lemma: "sui", morphologia: "Pronombre, ablativo, singular", syntaxis: "C. preposicional", translatio: { es: "él", en: "him", zh: "他" } },
                            { textus: "auerterentur", lemma: "auerto", morphologia: "Verbo, 3ª p, plural, imperfecto, subjuntivo, pasivo", syntaxis: "Verbo (de subordinada)", translatio: { es: "se apartaran", en: "would be turned away", zh: "" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Período condicional en estilo indirecto. La condición ('si... accidisset') va seguida de la consecuencia ('neminem existimaturum...'), que a su vez introduce otra infinitiva. La cláusula final ('qua ex re futurum uti...') presenta un resultado ulterior.",
                        notae: "'existimaturum' y 'futurum' son participios de futuro que forman, con un 'esse' omitido, el infinitivo de futuro.",
                        translationes: {
                            es: "Que si algo demasiado severo le hubiera sucedido a él por parte de César, dado que él mismo ocupaba tal lugar de amistad ante él, nadie pensaría que no se había hecho por su voluntad; y por esta razón sucedería que los corazones de toda la Galia se apartarían de él.",
                            en: "That if anything too severe should have happened to him from Caesar, since he himself held such a position of friendship with him, no one would think it had not been done with his consent; and from this matter it would happen that the hearts of all Gaul would be turned away from him.",
                            zh: "如果凱撒對他（杜姆諾里格斯）做出任何過於嚴厲的處置，由於他本人在凱撒心中擁有那樣的友誼地位，沒有人會認為這不是出於他的意願才發生的；因此，將會導致整個高盧的人心都背離他。"
                        }
                    },
                    {
                        id_orationis: 'o5',
                        original_lat: "Haec cum pluribus uerbis flens a Caesare peteret, Caesar eius dextram prendit:",
                        verba: [
                            { textus: "Haec", lemma: "hic", morphologia: "Pronombre, acusativo, plural, neutro", syntaxis: "Objeto Directo", translatio: { es: "estas cosas", en: "these things", zh: "這些話" } },
                            { textus: "cum", lemma: "cum", morphologia: "Conjunción", syntaxis: "Nexo (Cum histórico)", translatio: { es: "mientras", en: "while", zh: "當" } },
                            { textus: "pluribus", lemma: "multus", morphologia: "Adjetivo, ablativo, plural, neutro", syntaxis: "Modificador", translatio: { es: "con muchas", en: "with many", zh: "用許多" } },
                            { textus: "uerbis", lemma: "uerbum", morphologia: "Sustantivo, ablativo, plural, neutro", syntaxis: "C.C. de Modo", translatio: { es: "palabras", en: "words", zh: "話" } },
                            { textus: "flens", lemma: "fleo", morphologia: "Verbo, participio, presente, activo, nominativo, singular, masculino", syntaxis: "Participio concertado", translatio: { es: "llorando", en: "weeping", zh: "哭著" } },
                            { textus: "a", lemma: "a", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "a", en: "from", zh: "向" } },
                            { textus: "Caesare", lemma: "Caesar", morphologia: "Sustantivo, ablativo, singular, masculino", syntaxis: "C. preposicional", translatio: { es: "César", en: "Caesar", zh: "凱撒" } },
                            { textus: "peteret", lemma: "peto", morphologia: "Verbo, 3ª p, singular, imperfecto, subjuntivo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "pedía", en: "he was asking", zh: "請求時" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "Caesar", lemma: "Caesar", morphologia: "Sustantivo, nominativo, singular, masculino", syntaxis: "Sujeto", translatio: { es: "César", en: "Caesar", zh: "凱撒" } },
                            { textus: "eius", lemma: "is", morphologia: "Pronombre, genitivo, singular, masculino", syntaxis: "C. del Nombre", translatio: { es: "su", en: "his", zh: "他的" } },
                            { textus: "dextram", lemma: "dextra", morphologia: "Sustantivo, acusativo, singular, femenino", syntaxis: "Objeto Directo", translatio: { es: "mano derecha", en: "right hand", zh: "右手" } },
                            { textus: "prendit", lemma: "prendo", morphologia: "Verbo, 3ª p, singular, presente, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "toma", en: "grasps", zh: "抓住" } },
                            { textus: ":", lemma: ":", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ":", en: ":", zh: "：" } }
                        ],
                        ordo_syntacticus: "Oración compuesta con una cláusula 'cum' histórica y un verbo principal en presente histórico ('prendit').",
                        notae: "",
                        translationes: {
                            es: "Mientras él, llorando, pedía estas cosas a César con muchas palabras, César toma su mano derecha:",
                            en: "While he, weeping, was asking these things from Caesar with many words, Caesar grasps his right hand:",
                            zh: "當他哭著用許多話向凱撒請求這些時，凱撒抓住了他的右手："
                        }
                    },
                    {
                        id_orationis: 'o6',
                        original_lat: "consolatus rogat finem orandi faciat: tanti eius apud se gratiam esse ostendit, uti et rei publicae iniuriam et suum dolorem eius uoluntati ac precibus condonet.",
                        verba: [
                            { textus: "consolatus", lemma: "consolor", morphologia: "Verbo, participio, perfecto, deponente, nominativo, singular, masculino", syntaxis: "Participio concertado", translatio: { es: "tras consolarlo", en: "having consoled him", zh: "安慰他後" } },
                            { textus: "rogat", lemma: "rogo", morphologia: "Verbo, 3ª p, singular, presente, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "le pide", en: "he asks", zh: "請求他" } },
                            { textus: "finem", lemma: "finis", morphologia: "Sustantivo, acusativo, singular, masculino", syntaxis: "Objeto Directo", translatio: { es: "fin", en: "an end", zh: "結束" } },
                            { textus: "orandi", lemma: "oro", morphologia: "Verbo, gerundio, genitivo", syntaxis: "C. del Nombre", translatio: { es: "a sus ruegos", en: "of speaking", zh: "祈求" } },
                            { textus: "faciat", lemma: "facio", morphologia: "Verbo, 3ª p, singular, presente, subjuntivo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "que ponga", en: "to make", zh: "停止" } },
                            { textus: ":", lemma: ":", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ":", en: ":", zh: "；" } },
                            { textus: "tanti", lemma: "tantus", morphologia: "Adjetivo, genitivo, singular, neutro", syntaxis: "Genitivo de precio", translatio: { es: "de tanto valor", en: "of such great value", zh: "如此之高" } },
                            { textus: "eius", lemma: "is", morphologia: "Pronombre, genitivo, singular, masculino", syntaxis: "C. del Nombre", translatio: { es: "su", en: "his", zh: "他的" } },
                            { textus: "apud", lemma: "apud", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "para", en: "with", zh: "在他心中的" } },
                            { textus: "se", lemma: "sui", morphologia: "Pronombre, acusativo, singular", syntaxis: "C. preposicional", translatio: { es: "él", en: "him", zh: "" } },
                            { textus: "gratiam", lemma: "gratia", morphologia: "Sustantivo, acusativo, singular, femenino", syntaxis: "Sujeto (de infinitiva)", translatio: { es: "influencia", en: "influence", zh: "情面" } },
                            { textus: "esse", lemma: "sum", morphologia: "Verbo, infinitivo, presente", syntaxis: "Verbo (de infinitiva)", translatio: { es: "es", en: "is", zh: "是" } },
                            { textus: "ostendit", lemma: "ostendo", morphologia: "Verbo, 3ª p, singular, presente, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "le muestra que", en: "he shows", zh: "他表明" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "uti", lemma: "ut", morphologia: "Conjunción", syntaxis: "Nexo (consecutivo)", translatio: { es: "que", en: "that", zh: "以至於" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción", syntaxis: "Nexo (correlativo)", translatio: { es: "tanto", en: "both", zh: "他願意" } },
                            { textus: "rei", lemma: "res", morphologia: "Sustantivo, genitivo, singular, femenino", syntaxis: "Modificador", translatio: { es: "pública", en: "public", zh: "" } },
                            { textus: "publicae", lemma: "publicus", morphologia: "Adjetivo, genitivo, singular, femenino", syntaxis: "C. del Nombre", translatio: { es: "del estado", en: "of the republic", zh: "對國家的" } },
                            { textus: "iniuriam", lemma: "iniuria", morphologia: "Sustantivo, acusativo, singular, femenino", syntaxis: "Objeto Directo", translatio: { es: "la ofensa", en: "the injury", zh: "傷害" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción", syntaxis: "Nexo (correlativo)", translatio: { es: "como", en: "and", zh: "和" } },
                            { textus: "suum", lemma: "suus", morphologia: "Adjetivo posesivo, acusativo, singular, masculino", syntaxis: "Modificador", translatio: { es: "su propio", en: "his own", zh: "他自己的" } },
                            { textus: "dolorem", lemma: "dolor", morphologia: "Sustantivo, acusativo, singular, masculino", syntaxis: "Objeto Directo", translatio: { es: "dolor", en: "grief", zh: "傷痛" } },
                            { textus: "eius", lemma: "is", morphologia: "Pronombre, genitivo, singular, masculino", syntaxis: "C. del Nombre", translatio: { es: "a su", en: "to his", zh: "看在他的" } },
                            { textus: "uoluntati", lemma: "uoluntas", morphologia: "Sustantivo, dativo, singular, femenino", syntaxis: "Objeto Indirecto", translatio: { es: "voluntad", en: "will", zh: "情面" } },
                            { textus: "ac", lemma: "ac", morphologia: "Conjunción", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "與" } },
                            { textus: "precibus", lemma: "prex", morphologia: "Sustantivo, dativo, plural, femenino", syntaxis: "Objeto Indirecto", translatio: { es: "súplicas", en: "prayers", zh: "懇求上" } },
                            { textus: "condonet", lemma: "condono", morphologia: "Verbo, 3ª p, singular, presente, subjuntivo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "perdona", en: "he forgives", zh: "而寬恕" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Dos oraciones principales yuxtapuestas. 'rogat' introduce una cláusula completiva ('[ut]... faciat'). 'ostendit' introduce una infinitiva ('gratiam esse') seguida de una cláusula consecutiva ('uti... condonet').",
                        notae: "'tanti' es un genitivo de precio o valor. 'finem orandi facere' es una locución para 'dejar de hablar/rogar'.",
                        translationes: {
                            es: "tras consolarlo, le pide que ponga fin a sus ruegos; le muestra que su influencia es de tanto valor para él que por su voluntad y sus súplicas perdona tanto la ofensa al estado como su propio dolor.",
                            en: "having consoled him, he asks him to make an end of speaking; he shows that his influence is of such great value to him that for his will and prayers he forgives both the injury to the republic and his own grief.",
                            zh: "安慰他後，凱撒請求他停止祈求；他表明，迪維西亞庫斯的情面在他心中份量如此之高，以至於他願意看在他的情面與懇求上，寬恕對國家的傷害和他自己的傷痛。"
                        }
                    },
                    {
                        id_orationis: 'o7',
                        original_lat: "Dumnorigem ad se uocat, fratrem adhibet:",
                        verba: [
                            { textus: "Dumnorigem", lemma: "Dumnorix", morphologia: "Sustantivo, acusativo, singular, masculino", syntaxis: "Objeto Directo", translatio: { es: "a Dúmnorix", en: "Dumnorix", zh: "杜姆諾里格斯" } },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "ante", en: "to", zh: "到" } },
                            { textus: "se", lemma: "sui", morphologia: "Pronombre, acusativo, singular", syntaxis: "C. preposicional", translatio: { es: "sí", en: "him", zh: "自己面前" } },
                            { textus: "uocat", lemma: "uoco", morphologia: "Verbo, 3ª p, singular, presente, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "llama", en: "he calls", zh: "他召來" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "fratrem", lemma: "frater", morphologia: "Sustantivo, acusativo, singular, masculino", syntaxis: "Objeto Directo", translatio: { es: "a su hermano", en: "his brother", zh: "並叫來他的兄弟" } },
                            { textus: "adhibet", lemma: "adhibeo", morphologia: "Verbo, 3ª p, singular, presente, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "hace venir", en: "he summons", zh: "" } },
                            { textus: ":", lemma: ":", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ":", en: ":", zh: "：" } }
                        ],
                        ordo_syntacticus: "Dos oraciones principales coordinadas por yuxtaposición, con verbos en presente histórico.",
                        notae: "",
                        translationes: {
                            es: "Llama a Dúmnorix ante sí, hace venir a su hermano:",
                            en: "He calls Dumnorix to him, he summons his brother:",
                            zh: "他將杜姆諾里格斯召到自己面前，並叫來他的兄弟："
                        }
                    },
                    {
                        id_orationis: 'o8',
                        original_lat: "quae in eo reprehendat ostendit:",
                        verba: [
                            { textus: "quae", lemma: "qui", morphologia: "Pronombre interrogativo, acusativo, plural, neutro", syntaxis: "Objeto Directo", translatio: { es: "qué cosas", en: "what things", zh: "哪些" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "en", en: "in", zh: "在他身上" } },
                            { textus: "eo", lemma: "is", morphologia: "Pronombre, ablativo, singular, masculino", syntaxis: "C. preposicional", translatio: { es: "él", en: "him", zh: "" } },
                            { textus: "reprehendat", lemma: "reprehendo", morphologia: "Verbo, 3ª p, singular, presente, subjuntivo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "desaprueba", en: "he censures", zh: "他指責的" } },
                            { textus: "ostendit", lemma: "ostendo", morphologia: "Verbo, 3ª p, singular, presente, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "le expone", en: "he points out", zh: "他指出" } },
                            { textus: ":", lemma: ":", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ":", en: ":", zh: "；" } }
                        ],
                        ordo_syntacticus: "Oración simple cuyo objeto directo es una interrogativa indirecta ('quae... reprehendat').",
                        notae: "",
                        translationes: {
                            es: "le expone qué cosas desaprueba en él;",
                            en: "he points out what things he censures in him;",
                            zh: "他指出了他對杜姆諾里格斯所不滿之處；"
                        }
                    },
                    {
                        id_orationis: 'o9',
                        original_lat: "quae ipse intellegat, quae ciuitas quaerat proponit:",
                        verba: [
                            { textus: "quae", lemma: "qui", morphologia: "Pronombre interrogativo, acusativo, plural, neutro", syntaxis: "Objeto Directo", translatio: { es: "qué cosas", en: "what things", zh: "哪些事" } },
                            { textus: "ipse", lemma: "ipse", morphologia: "Pronombre, nominativo, singular, masculino", syntaxis: "Sujeto", translatio: { es: "él mismo", en: "he himself", zh: "他自己" } },
                            { textus: "intellegat", lemma: "intellego", morphologia: "Verbo, 3ª p, singular, presente, subjuntivo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "sabe", en: "understands", zh: "知道" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "quae", lemma: "qui", morphologia: "Pronombre interrogativo, acusativo, plural, neutro", syntaxis: "Objeto Directo", translatio: { es: "de qué cosas", en: "what things", zh: "以及哪些事" } },
                            { textus: "ciuitas", lemma: "ciuitas", morphologia: "Sustantivo, nominativo, singular, femenino", syntaxis: "Sujeto", translatio: { es: "el estado", en: "the state", zh: "邦國" } },
                            { textus: "quaerat", lemma: "quaero", morphologia: "Verbo, 3ª p, singular, presente, subjuntivo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "se queja", en: "complains of", zh: "所抱怨的" } },
                            { textus: "proponit", lemma: "propono", morphologia: "Verbo, 3ª p, singular, presente, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "le expone", en: "he sets forth", zh: "他闡明了" } },
                            { textus: ":", lemma: ":", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ":", en: ":", zh: "；" } }
                        ],
                        ordo_syntacticus: "Oración simple cuyo objeto directo son dos interrogativas indirectas coordinadas.",
                        notae: "",
                        translationes: {
                            es: "le expone qué cosas sabe él mismo y de qué cosas se queja el estado;",
                            en: "he sets forth what things he himself understands, and what things the state complains of;",
                            zh: "他闡明了自己所了解的情況，以及邦國所抱怨的事情；"
                        }
                    },
                    {
                        id_orationis: 'o10',
                        original_lat: "monet ut in reliquum tempus omnes suspiciones uitet;",
                        verba: [
                            { textus: "monet", lemma: "moneo", morphologia: "Verbo, 3ª p, singular, presente, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "le advierte", en: "he warns", zh: "他警告" } },
                            { textus: "ut", lemma: "ut", morphologia: "Conjunción", syntaxis: "Nexo (completivo)", translatio: { es: "que", en: "that", zh: "他" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "en", en: "for", zh: "在" } },
                            { textus: "reliquum", lemma: "reliquus", morphologia: "Adjetivo, acusativo, singular, neutro", syntaxis: "Modificador", translatio: { es: "el futuro", en: "the future", zh: "未來" } },
                            { textus: "tempus", lemma: "tempus", morphologia: "Sustantivo, acusativo, singular, neutro", syntaxis: "C. preposicional", translatio: { es: "", en: "time", zh: "的時間裡" } },
                            { textus: "omnes", lemma: "omnis", morphologia: "Adjetivo, acusativo, plural, femenino", syntaxis: "Modificador", translatio: { es: "toda", en: "all", zh: "一切" } },
                            { textus: "suspiciones", lemma: "suspicio", morphologia: "Sustantivo, acusativo, plural, femenino", syntaxis: "Objeto Directo", translatio: { es: "sospecha", en: "suspicions", zh: "懷疑" } },
                            { textus: "uitet", lemma: "uito", morphologia: "Verbo, 3ª p, singular, presente, subjuntivo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "evite", en: "he should avoid", zh: "要避免" } },
                            { textus: ";", lemma: ";", morphologia: "Puntuación", syntaxis: "Fin de cláusula", translatio: { es: ";", en: ";", zh: "；" } }
                        ],
                        ordo_syntacticus: "Oración principal ('monet') que rige una cláusula completiva introducida por 'ut'.",
                        notae: "",
                        translationes: {
                            es: "le advierte que en el futuro evite toda sospecha;",
                            en: "he warns him to avoid all suspicions for the future;",
                            zh: "他警告杜姆諾里格斯在未來要避免一切懷疑；"
                        }
                    },
                    {
                        id_orationis: 'o11',
                        original_lat: "praeterita se Diuiciaco fratri condonare dicit.",
                        verba: [
                            { textus: "praeterita", lemma: "praetereo", morphologia: "Verbo, participio, perfecto, pasivo, acusativo, plural, neutro", syntaxis: "Objeto Directo", translatio: { es: "lo pasado", en: "the past", zh: "過去的" } },
                            { textus: "se", lemma: "sui", morphologia: "Pronombre, acusativo, singular", syntaxis: "Sujeto (de infinitiva)", translatio: { es: "él", en: "he", zh: "他" } },
                            { textus: "Diuiciaco", lemma: "Diuiciacus", morphologia: "Sustantivo, dativo, singular, masculino", syntaxis: "Objeto Indirecto", translatio: { es: "a Diviciaco", en: "to Diviciacus", zh: "看在迪維西亞庫斯" } },
                            { textus: "fratri", lemma: "frater", morphologia: "Sustantivo, dativo, singular, masculino", syntaxis: "Aposición", translatio: { es: "su hermano", en: "his brother", zh: "——他兄弟的份上" } },
                            { textus: "condonare", lemma: "condono", morphologia: "Verbo, infinitivo, presente, activo", syntaxis: "Verbo (de infinitiva)", translatio: { es: "se lo perdona", en: "forgives", zh: "而原諒" } },
                            { textus: "dicit", lemma: "dico", morphologia: "Verbo, 3ª p, singular, presente, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "dice que", en: "he says", zh: "他說" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Oración principal ('dicit') que rige una oración de infinitivo ('se... condonare').",
                        notae: "",
                        translationes: {
                            es: "dice que le perdona lo pasado por su hermano Diviciaco.",
                            en: "he says that he forgives the past for the sake of his brother Diviciacus.",
                            zh: "他說，看在他兄弟迪維西亞庫斯的份上，他原諒過去的事。"
                        }
                    },
                    {
                        id_orationis: 'o12',
                        original_lat: "Dumnorigi custodes ponit, ut quae agat, quibuscum loquatur scire possit.",
                        verba: [
                            { textus: "Dumnorigi", lemma: "Dumnorix", morphologia: "Sustantivo, dativo, singular, masculino", syntaxis: "Objeto Indirecto", translatio: { es: "a Dúmnorix", en: "on Dumnorix", zh: "給杜姆諾里格斯" } },
                            { textus: "custodes", lemma: "custos", morphologia: "Sustantivo, acusativo, plural, masculino", syntaxis: "Objeto Directo", translatio: { es: "vigilantes", en: "guards", zh: "派了守衛" } },
                            { textus: "ponit", lemma: "pono", morphologia: "Verbo, 3ª p, singular, presente, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "le pone", en: "he places", zh: "" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "ut", lemma: "ut", morphologia: "Conjunción", syntaxis: "Nexo (finalidad)", translatio: { es: "para", en: "so that", zh: "以便" } },
                            { textus: "quae", lemma: "qui", morphologia: "Pronombre interrogativo, acusativo, plural, neutro", syntaxis: "Objeto Directo", translatio: { es: "qué hace", en: "what he does", zh: "他做什麼" } },
                            { textus: "agat", lemma: "ago", morphologia: "Verbo, 3ª p, singular, presente, subjuntivo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "", en: "", zh: "" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "quibuscum", lemma: "qui-cum", morphologia: "Pronombre y preposición, ablativo, plural", syntaxis: "C. preposicional", translatio: { es: "con quién habla", en: "with whom he speaks", zh: "和誰說話" } },
                            { textus: "loquatur", lemma: "loquor", morphologia: "Verbo, 3ª p, singular, presente, subjuntivo, deponente", syntaxis: "Verbo (de subordinada)", translatio: { es: "", en: "", zh: "" } },
                            { textus: "scire", lemma: "scio", morphologia: "Verbo, infinitivo, presente, activo", syntaxis: "Verbo (de infinitiva)", translatio: { es: "saber", en: "to know", zh: "知道" } },
                            { textus: "possit", lemma: "possum", morphologia: "Verbo, 3ª p, singular, presente, subjuntivo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "pudiera", en: "he might be able", zh: "他能夠" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Oración principal seguida de una cláusula de finalidad ('ut... possit'), la cual a su vez contiene dos interrogativas indirectas ('quae agat, quibuscum loquatur').",
                        notae: "",
                        translationes: {
                            es: "Pone vigilantes a Dúmnorix para poder saber qué hace y con quién habla.",
                            en: "He places guards on Dumnorix, so that he might be able to know what he does and with whom he speaks.",
                            zh: "他給杜姆諾里格斯派了守衛，以便能夠知道他做什麼、和誰說話。"
                        }
                    }
                ]
            }
        ]
    }
};

const corpus = {
    titulus_principalis: "De Bello Gallico, I, 12",
    auctor: "C. Iulius Caesar",
    titulus_secundarius: {
        es: "El ataque de César a los Tigurinos en el río Arar",
        en: "Caesar's Attack on the Tigurini at the Arar River",
        zh: "凱撒在阿拉爾河對提古里尼人的攻擊"
    },
    introductio: {
        es: {
            titulus: "Introducción al Capítulo 12",
            contentus: `<p>En este capítulo, César demuestra su célebre celeridad y decisión táctica. Al enterarse de que los Helvecios están cruzando el río Arar (el actual Saona) de forma lenta y laboriosa, aprovecha la oportunidad. Identifica que una cuarta parte de ellos, el clan de los Tigurinos, aún no ha cruzado y lanza un ataque sorpresa. Este ataque no solo es una maniobra militar estratégica, sino que también tiene un componente de venganza personal y estatal, ya que los Tigurinos habían derrotado y matado a un cónsul romano y al abuelo de su propio suegro en el pasado.</p>`
        },
        en: {
            titulus: "Introduction to Chapter 12",
            contentus: `<p>In this chapter, Caesar demonstrates his famous speed and tactical decisiveness. Learning that the Helvetii are slowly and laboriously crossing the Arar River (the modern Saône), he seizes the opportunity. He identifies that a quarter of them, the Tigurini clan, have not yet crossed and launches a surprise attack. This attack is not only a strategic military maneuver but also has an element of personal and state revenge, as the Tigurini had previously defeated and killed a Roman consul and the grandfather of his own father-in-law.</p>`
        },
        zh: {
            titulus: "第 12 章介紹",
            contentus: `<p>在這一章中，凱撒展示了他著名的迅捷和戰術決斷力。當得知赫爾維蒂人正在緩慢而費力地渡過阿拉爾河（即今日的索恩河）時，他抓住了機會。他發現其中四分之一的提古里尼部落尚未渡河，於是發動了突襲。這次攻擊不僅是一次戰略性的軍事行動，還帶有個人和國家的復仇成分，因為提古里尼人過去曾擊敗並殺死了一位羅馬執政官以及他自己岳父的祖父。</p>`
        }
    },
    textus: {
        id: 12,
        capitula: [
            {
                id_capituli: 12,
                orationes: [
                    {
                        id_orationis: 'o1',
                        original_lat: "Flumen est Arar, quod per fines Haeduorum et Sequanorum in Rhodanum influit, incredibili lenitate, ita ut oculis in utram partem fluat iudicari non possit.",
                        verba: [
                            { textus: "Flumen", lemma: "flumen", morphologia: "Nominativo Neutro Singular", syntaxis: "Sujeto", translatio: { es: "un río", en: "a river", zh: "一條河流" } },
                            { textus: "est", lemma: "sum", morphologia: "Presente Indicativo Activo, 3ª Persona Singular", syntaxis: "Verbo Copulativo", translatio: { es: "es", en: "is", zh: "是" } },
                            { textus: "Arar,", lemma: "Arar", morphologia: "Nominativo Masculino Singular", syntaxis: "Atributo", translatio: { es: "el Arar", en: "the Arar", zh: "阿拉爾河" } },
                            { textus: "quod", lemma: "qui", morphologia: "Nominativo Neutro Singular", syntaxis: "Sujeto (de 'influit')", translatio: { es: "que", en: "which", zh: "它" } },
                            { textus: "per", lemma: "per", morphologia: "Preposición (+ Acusativo)", syntaxis: "Modificador Preposicional", translatio: { es: "a través de", en: "through", zh: "穿過" } },
                            { textus: "fines", lemma: "finis", morphologia: "Acusativo Masculino Plural", syntaxis: "Complemento de 'per'", translatio: { es: "los territorios", en: "the territories", zh: "領土" } },
                            { textus: "Haeduorum", lemma: "Haeduus", morphologia: "Genitivo Masculino Plural", syntaxis: "Complemento del Nombre", translatio: { es: "de los Eduos", en: "of the Haedui", zh: "愛杜依人的" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción Coordinante", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "和" } },
                            { textus: "Sequanorum", lemma: "Sequanus", morphologia: "Genitivo Masculino Plural", syntaxis: "Complemento del Nombre", translatio: { es: "de los Sécanos", en: "of the Sequani", zh: "塞夸尼人的" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición (+ Acusativo)", syntaxis: "Modificador Preposicional", translatio: { es: "en", en: "into", zh: "流入" } },
                            { textus: "Rhodanum", lemma: "Rhodanus", morphologia: "Acusativo Masculino Singular", syntaxis: "Complemento de 'in'", translatio: { es: "el Ródano", en: "the Rhodanus", zh: "羅納河" } },
                            { textus: "influit,", lemma: "influo", morphologia: "Presente Indicativo Activo, 3ª Persona Singular", syntaxis: "Verbo", translatio: { es: "desemboca", en: "flows", zh: "流入" } },
                            { textus: "incredibili", lemma: "incredibilis", morphologia: "Ablativo Femenino Singular", syntaxis: "Atributo", translatio: { es: "con increíble", en: "with incredible", zh: "以難以置信的" } },
                            { textus: "lenitate,", lemma: "lenitas", morphologia: "Ablativo Femenino Singular", syntaxis: "Complemento Circunstancial de Modo", translatio: { es: "suavidad", en: "gentleness", zh: "平緩" } },
                            { textus: "ita", lemma: "ita", morphologia: "Adverbio", syntaxis: "Nexo Consecutivo", translatio: { es: "de tal manera", en: "so", zh: "如此" } },
                            { textus: "ut", lemma: "ut", morphologia: "Conjunción Subordinante", syntaxis: "Nexo", translatio: { es: "que", en: "that", zh: "以至於" } },
                            { textus: "oculis", lemma: "oculus", morphologia: "Ablativo Masculino Plural", syntaxis: "Complemento Circunstancial de Instrumento", translatio: { es: "con los ojos", en: "with the eyes", zh: "用眼睛" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición (+ Acusativo)", syntaxis: "Modificador Preposicional", translatio: { es: "hacia", en: "to", zh: "向" } },
                            { textus: "utram", lemma: "uter", morphologia: "Acusativo Femenino Singular", syntaxis: "Atributo", translatio: { es: "qué", en: "which", zh: "哪個" } },
                            { textus: "partem", lemma: "pars", morphologia: "Acusativo Femenino Singular", syntaxis: "Complemento de 'in'", translatio: { es: "dirección", en: "direction", zh: "方向" } },
                            { textus: "fluat", lemma: "fluo", morphologia: "Presente Subjuntivo Activo, 3ª Persona Singular", syntaxis: "Verbo", translatio: { es: "fluye", en: "it flows", zh: "流動" } },
                            { textus: "iudicari", lemma: "iudico", morphologia: "Presente Infinitivo Pasivo", syntaxis: "Verbo", translatio: { es: "ser juzgado", en: "to be judged", zh: "被判斷" } },
                            { textus: "non", lemma: "non", morphologia: "Adverbio de Negación", syntaxis: "Modificador Verbal", translatio: { es: "no", en: "not", zh: "不" } },
                            { textus: "possit.", lemma: "possum", morphologia: "Presente Subjuntivo Activo, 3ª Persona Singular", syntaxis: "Verbo Modal", translatio: { es: "pueda", en: "it can", zh: "能" } }
                        ],
                        ordo_syntacticus: "Oración principal con verbo copulativo, seguida de una cláusula de relativo y una cláusula consecutiva.",
                        notae: "La descripción de la 'increíble suavidad' del Arar es un detalle geográfico preciso y un recurso literario para enfatizar la lentitud del cruce de los Helvecios.",
                        translationes: {
                            es: "Hay un río, el Arar, que a través de los territorios de los Eduos y los Sécanos desemboca en el Ródano con increíble suavidad, de tal manera que no puede juzgarse con los ojos hacia qué dirección fluye.",
                            en: "There is a river, the Arar, which flows through the territories of the Haedui and the Sequani into the Rhodanus with incredible gentleness, so that it cannot be judged by the eyes in which direction it flows.",
                            zh: "有一條河流，名為阿拉爾河，它流經愛杜依人和塞夸尼人的領土，匯入羅納河，水流異常平緩，以至於用眼睛無法判斷它流向哪個方向。"
                        }
                    },
                    {
                        id_orationis: 'o2',
                        original_lat: "Id Heluetii ratibus ac lintribus iunctis transibant.",
                        verba: [
                            { textus: "Id", lemma: "is", morphologia: "Acusativo Neutro Singular", syntaxis: "Objeto Directo", translatio: { es: "éste (el río)", en: "it (the river)", zh: "這條河" } },
                            { textus: "Heluetii", lemma: "Helvetius", morphologia: "Nominativo Masculino Plural", syntaxis: "Sujeto", translatio: { es: "los Helvecios", en: "the Helvetii", zh: "赫爾維蒂人" } },
                            { textus: "ratibus", lemma: "ratis", morphologia: "Ablativo Femenino Plural", syntaxis: "Complemento Circunstancial de Medio", translatio: { es: "con balsas", en: "with rafts", zh: "用木筏" } },
                            { textus: "ac", lemma: "ac", morphologia: "Conjunción Coordinante", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "和" } },
                            { textus: "lintribus", lemma: "linter", morphologia: "Ablativo Femenino Plural", syntaxis: "Complemento Circunstancial de Medio", translatio: { es: "barcas", en: "boats", zh: "小船" } },
                            { textus: "iunctis", lemma: "iungo", morphologia: "Participio Perfecto Pasivo, Ablativo Plural", syntaxis: "Atributo (Ablativo Absoluto)", translatio: { es: "unidas", en: "joined", zh: "連接起來的" } },
                            { textus: "transibant.", lemma: "transeo", morphologia: "Imperfecto Indicativo Activo, 3ª Persona Plural", syntaxis: "Verbo", translatio: { es: "cruzaban", en: "were crossing", zh: "正在渡過" } }
                        ],
                        ordo_syntacticus: "Oración simple con sujeto, verbo, objeto directo y un ablativo absoluto funcionando como complemento de medio.",
                        notae: "El uso del imperfecto 'transibant' indica una acción en progreso, subrayando la duración y dificultad del cruce.",
                        translationes: {
                            es: "Éste (río) los Helvecios lo cruzaban con balsas y barcas unidas.",
                            en: "The Helvetii were crossing it with rafts and joined boats.",
                            zh: "赫爾維蒂人正用連接起來的木筏和小船渡過這條河。"
                        }
                    },
                    {
                        id_orationis: 'o3',
                        original_lat: "Vbi per exploratores Caesar certior factus est tres iam partes copiarum Heluetios id flumen traduxisse, quartam fere partem citra flumen Ararim reliquam esse, de tertia uigilia cum legionibus tribus e castris profectus ad eam partem peruenit quae nondum flumen transierat.",
                        verba: [
                            { textus: "Vbi", lemma: "ubi", morphologia: "Adverbio/Conjunción Temporal", syntaxis: "Nexo Temporal", translatio: { es: "cuando", en: "when", zh: "當" } },
                            { textus: "per", lemma: "per", morphologia: "Preposición (+ Acusativo)", syntaxis: "Modificador Preposicional", translatio: { es: "por medio de", en: "through", zh: "通過" } },
                            { textus: "exploratores", lemma: "explorator", morphologia: "Acusativo Masculino Plural", syntaxis: "Complemento de 'per'", translatio: { es: "exploradores", en: "scouts", zh: "偵察兵" } },
                            { textus: "Caesar", lemma: "Caesar", morphologia: "Nominativo Masculino Singular", syntaxis: "Sujeto (de 'factus est' y 'peruenit')", translatio: { es: "César", en: "Caesar", zh: "凱撒" } },
                            { textus: "certior", lemma: "certus", morphologia: "Adjetivo Comparativo, Nominativo Masculino Singular", syntaxis: "Predicativo del Sujeto", translatio: { es: "más seguro / informado", en: "more certain / informed", zh: "更確信／被告知" } },
                            { textus: "factus", lemma: "facio", morphologia: "Participio Perfecto Pasivo, Nominativo Singular", syntaxis: "Parte de la perífrasis verbal pasiva", translatio: { es: "hecho", en: "was made", zh: "被使得" } },
                            { textus: "est", lemma: "sum", morphologia: "Presente Indicativo Activo, 3ª Persona Singular", syntaxis: "Verbo (auxiliar)", translatio: { es: "fue", en: "was", zh: "是" } },
                            { textus: "tres", lemma: "tres", morphologia: "Numeral, Acusativo Femenino Plural", syntaxis: "Atributo", translatio: { es: "tres", en: "three", zh: "三" } },
                            { textus: "iam", lemma: "iam", morphologia: "Adverbio", syntaxis: "Modificador Adverbial", translatio: { es: "ya", en: "already", zh: "已經" } },
                            { textus: "partes", lemma: "pars", morphologia: "Acusativo Femenino Plural", syntaxis: "Sujeto (de la oración de infinitivo)", translatio: { es: "partes", en: "parts", zh: "部分" } },
                            { textus: "copiarum", lemma: "copia", morphologia: "Genitivo Femenino Plural", syntaxis: "Complemento del Nombre", translatio: { es: "de las tropas", en: "of the forces", zh: "軍隊的" } },
                            { textus: "Heluetios", lemma: "Helvetius", morphologia: "Acusativo Masculino Plural", syntaxis: "Sujeto (de la oración de infinitivo)", translatio: { es: "los Helvecios", en: "the Helvetii", zh: "赫爾維蒂人" } },
                            { textus: "id", lemma: "is", morphologia: "Acusativo Neutro Singular", syntaxis: "Atributo", translatio: { es: "ese", en: "that", zh: "那條" } },
                            { textus: "flumen", lemma: "flumen", morphologia: "Acusativo Neutro Singular", syntaxis: "Objeto Directo (de 'traduxisse')", translatio: { es: "río", en: "river", zh: "河流" } },
                            { textus: "traduxisse,", lemma: "traduco", morphologia: "Perfecto Infinitivo Activo", syntaxis: "Verbo (de la oración de infinitivo)", translatio: { es: "habían cruzado", en: "had crossed", zh: "已經渡過" } },
                            { textus: "quartam", lemma: "quartus", morphologia: "Adjetivo, Acusativo Femenino Singular", syntaxis: "Atributo", translatio: { es: "una cuarta", en: "a fourth", zh: "第四" } },
                            { textus: "fere", lemma: "fere", morphologia: "Adverbio", syntaxis: "Modificador Adverbial", translatio: { es: "casi", en: "almost", zh: "幾乎" } },
                            { textus: "partem", lemma: "pars", morphologia: "Acusativo Femenino Singular", syntaxis: "Sujeto (de la oración de infinitivo)", translatio: { es: "parte", en: "part", zh: "部分" } },
                            { textus: "citra", lemma: "citra", morphologia: "Preposición (+ Acusativo)", syntaxis: "Modificador Preposicional", translatio: { es: "a este lado de", en: "on this side of", zh: "在這邊" } },
                            { textus: "flumen", lemma: "flumen", morphologia: "Acusativo Neutro Singular", syntaxis: "Complemento de 'citra'", translatio: { es: "el río", en: "the river", zh: "河流" } },
                            { textus: "Ararim", lemma: "Arar", morphologia: "Acusativo Masculino Singular", syntaxis: "Aposición", translatio: { es: "Arar", en: "Arar", zh: "阿拉爾" } },
                            { textus: "reliquam", lemma: "reliquus", morphologia: "Adjetivo, Acusativo Femenino Singular", syntaxis: "Predicativo", translatio: { es: "restante", en: "remaining", zh: "剩餘的" } },
                            { textus: "esse,", lemma: "sum", morphologia: "Presente Infinitivo", syntaxis: "Verbo (de la oración de infinitivo)", translatio: { es: "quedaba", en: "was", zh: "是" } },
                            { textus: "de", lemma: "de", morphologia: "Preposición (+ Ablativo)", syntaxis: "Modificador Preposicional", translatio: { es: "durante", en: "during", zh: "在...期間" } },
                            { textus: "tertia", lemma: "tertius", morphologia: "Ablativo Femenino Singular", syntaxis: "Atributo", translatio: { es: "la tercera", en: "the third", zh: "第三" } },
                            { textus: "uigilia", lemma: "vigilia", morphologia: "Ablativo Femenino Singular", syntaxis: "Complemento de 'de'", translatio: { es: "vigilia", en: "watch", zh: "更次" } },
                            { textus: "cum", lemma: "cum", morphologia: "Preposición (+ Ablativo)", syntaxis: "Modificador Preposicional", translatio: { es: "con", en: "with", zh: "與" } },
                            { textus: "legionibus", lemma: "legio", morphologia: "Ablativo Femenino Plural", syntaxis: "Complemento de 'cum'", translatio: { es: "legiones", en: "legions", zh: "軍團" } },
                            { textus: "tribus", lemma: "tres", morphologia: "Numeral, Ablativo Plural", syntaxis: "Atributo", translatio: { es: "tres", en: "three", zh: "三" } },
                            { textus: "e", lemma: "e/ex", morphologia: "Preposición (+ Ablativo)", syntaxis: "Modificador Preposicional", translatio: { es: "desde", en: "from", zh: "從" } },
                            { textus: "castris", lemma: "castra", morphologia: "Ablativo Neutro Plural", syntaxis: "Complemento de 'e'", translatio: { es: "el campamento", en: "the camp", zh: "營地" } },
                            { textus: "profectus", lemma: "proficiscor", morphologia: "Participio Perfecto, Nominativo Singular", syntaxis: "Aposición", translatio: { es: "habiendo partido", en: "having set out", zh: "出發後" } },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición (+ Acusativo)", syntaxis: "Modificador Preposicional", translatio: { es: "hacia", en: "to", zh: "往" } },
                            { textus: "eam", lemma: "is", morphologia: "Acusativo Femenino Singular", syntaxis: "Atributo", translatio: { es: "aquella", en: "that", zh: "那個" } },
                            { textus: "partem", lemma: "pars", morphologia: "Acusativo Femenino Singular", syntaxis: "Complemento de 'ad'", translatio: { es: "parte", en: "part", zh: "部分" } },
                            { textus: "peruenit", lemma: "pervenio", morphologia: "Perfecto Indicativo Activo, 3ª Persona Singular", syntaxis: "Verbo Principal", translatio: { es: "llegó", en: "he arrived", zh: "到達了" } },
                            { textus: "quae", lemma: "qui", morphologia: "Nominativo Femenino Singular", syntaxis: "Sujeto (de 'transierat')", translatio: { es: "que", en: "which", zh: "那" } },
                            { textus: "nondum", lemma: "nondum", morphologia: "Adverbio", syntaxis: "Modificador Verbal", translatio: { es: "aún no", en: "not yet", zh: "尚未" } },
                            { textus: "flumen", lemma: "flumen", morphologia: "Acusativo Neutro Singular", syntaxis: "Objeto Directo", translatio: { es: "el río", en: "the river", zh: "河流" } },
                            { textus: "transierat.", lemma: "transeo", morphologia: "Pluscuamperfecto Indicativo Activo, 3ª Persona Singular", syntaxis: "Verbo", translatio: { es: "había cruzado", en: "had crossed", zh: "渡過" } }
                        ],
                        ordo_syntacticus: "Oración compleja con una cláusula temporal ('Ubi...'), que contiene dos oraciones de infinitivo coordinadas, seguida de la oración principal ('Caesar... peruenit') y una cláusula de relativo ('quae... transierat').",
                        notae: "La frase 'certior factus est' es una locución común en César que significa 'fue informado'. La tercera vigilia corresponde a la medianoche hasta las 3 a.m. aproximadamente, destacando la rapidez y el sigilo de la operación.",
                        translationes: {
                            es: "Cuando César fue informado por los exploradores de que ya tres partes de las tropas de los Helvecios habían cruzado ese río, y que casi una cuarta parte quedaba a este lado del río Arar, partiendo desde el campamento durante la tercera vigilia con tres legiones, llegó hacia aquella parte que aún no había cruzado el río.",
                            en: "When Caesar was informed by the scouts that three parts of the Helvetii's forces had already crossed that river, and that almost a fourth part remained on this side of the Arar river, having set out from the camp during the third watch with three legions, he arrived at that part which had not yet crossed the river.",
                            zh: "當凱撒通過偵察兵得知，赫爾維蒂人已有四分之三的部隊渡過了那條河，而將近四分之一的部隊還留在阿拉爾河這邊時，他便在第三更次（約午夜至凌晨三點）率領三個軍團從營地出發，抵達了那尚未渡河的部隊所在之處。"
                        }
                    },
                    {
                        id_orationis: 'o4',
                        original_lat: "Eos impeditos et inopinantes adgressus magnam partem eorum concidit: reliqui sese fugae mandarunt atque in proximas siluas abdiderunt.",
                        verba: [
                            { textus: "Eos", lemma: "is", morphologia: "Acusativo Masculino Plural", syntaxis: "Objeto Directo", translatio: { es: "a ellos", en: "them", zh: "他們" } },
                            { textus: "impeditos", lemma: "impedio", morphologia: "Participio Perfecto Pasivo, Acusativo Plural", syntaxis: "Predicativo del Objeto Directo", translatio: { es: "obstaculizados", en: "hindered", zh: "陷入困境" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción Coordinante", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "並且" } },
                            { textus: "inopinantes", lemma: "inopinans", morphologia: "Participio Presente Activo, Acusativo Plural", syntaxis: "Predicativo del Objeto Directo", translatio: { es: "desprevenidos", en: "unexpecting", zh: "毫無防備" } },
                            { textus: "adgressus", lemma: "aggredior", morphologia: "Participio Perfecto, Nominativo Singular", syntaxis: "Aposición", translatio: { es: "habiendo atacado", en: "having attacked", zh: "攻擊了" } },
                            { textus: "magnam", lemma: "magnus", morphologia: "Adjetivo, Acusativo Femenino Singular", syntaxis: "Atributo", translatio: { es: "gran", en: "a great", zh: "大部分" } },
                            { textus: "partem", lemma: "pars", morphologia: "Acusativo Femenino Singular", syntaxis: "Objeto Directo", translatio: { es: "parte", en: "part", zh: "部分" } },
                            { textus: "eorum", lemma: "is", morphologia: "Genitivo Masculino Plural", syntaxis: "Complemento del Nombre", translatio: { es: "de ellos", en: "of them", zh: "他們的" } },
                            { textus: "concidit:", lemma: "concido", morphologia: "Perfecto Indicativo Activo, 3ª Persona Singular", syntaxis: "Verbo", translatio: { es: "aniquiló", en: "he cut down", zh: "斬殺了" } },
                            { textus: "reliqui", lemma: "reliquus", morphologia: "Nominativo Masculino Plural", syntaxis: "Sujeto", translatio: { es: "los restantes", en: "the rest", zh: "剩下的人" } },
                            { textus: "sese", lemma: "sui", morphologia: "Pronombre Reflexivo, Acusativo", syntaxis: "Objeto Directo", translatio: { es: "se", en: "themselves", zh: "他們自己" } },
                            { textus: "fugae", lemma: "fuga", morphologia: "Dativo Femenino Singular", syntaxis: "Objeto Indirecto", translatio: { es: "a la fuga", en: "to flight", zh: "逃跑" } },
                            { textus: "mandarunt", lemma: "mando", morphologia: "Perfecto Indicativo Activo, 3ª Persona Plural (Forma sincopada de 'mandaverunt')", syntaxis: "Verbo", translatio: { es: "se entregaron", en: "they entrusted", zh: "投身於" } },
                            { textus: "atque", lemma: "atque", morphologia: "Conjunción Coordinante", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "並且" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición (+ Acusativo)", syntaxis: "Modificador Preposicional", translatio: { es: "en", en: "into", zh: "到" } },
                            { textus: "proximas", lemma: "proximus", morphologia: "Adjetivo Superlativo, Acusativo Femenino Plural", syntaxis: "Atributo", translatio: { es: "los más cercanos", en: "the nearest", zh: "最近的" } },
                            { textus: "siluas", lemma: "silva", morphologia: "Acusativo Femenino Plural", syntaxis: "Complemento de 'in'", translatio: { es: "bosques", en: "woods", zh: "森林" } },
                            { textus: "abdiderunt.", lemma: "abdo", morphologia: "Perfecto Indicativo Activo, 3ª Persona Plural", syntaxis: "Verbo", translatio: { es: "se escondieron", en: "hid themselves", zh: "躲藏起來" } }
                        ],
                        ordo_syntacticus: "Oración compuesta por dos cláusulas coordinadas. La primera tiene un sujeto elíptico (César). La segunda tiene 'reliqui' como sujeto.",
                        notae: "'Sese fugae mandare' es una expresión idiomática que significa 'darse a la fuga'. 'Mandarunt' es una forma sincopada de 'mandaverunt', común en la prosa de César.",
                        translationes: {
                            es: "Habiéndolos atacado mientras estaban obstaculizados y desprevenidos, aniquiló a una gran parte de ellos: los restantes se dieron a la fuga y se escondieron en los bosques más cercanos.",
                            en: "Having attacked them while they were hindered and unexpecting, he cut down a great part of them: the rest entrusted themselves to flight and hid in the nearest woods.",
                            zh: "他攻擊了這些陷入困境且毫無防備的人，斬殺了其中大部分人：剩下的人則倉皇逃跑，躲進了最近的森林裡。"
                        }
                    },
                    {
                        id_orationis: 'o5',
                        original_lat: "Is pagus appellabatur Tigurinus: nam omnis ciuitas Heluetia in quattuor pagos diuisa est.",
                        verba: [
                            { textus: "Is", lemma: "is", morphologia: "Nominativo Masculino Singular", syntaxis: "Atributo (pronominal)", translatio: { es: "aquel", en: "that", zh: "那個" } },
                            { textus: "pagus", lemma: "pagus", morphologia: "Nominativo Masculino Singular", syntaxis: "Sujeto", translatio: { es: "clan", en: "canton / clan", zh: "部落" } },
                            { textus: "appellabatur", lemma: "appello", morphologia: "Imperfecto Indicativo Pasivo, 3ª Persona Singular", syntaxis: "Verbo", translatio: { es: "era llamado", en: "was called", zh: "被稱為" } },
                            { textus: "Tigurinus:", lemma: "Tigurinus", morphologia: "Nominativo Masculino Singular", syntaxis: "Predicativo del Sujeto", translatio: { es: "Tigurino", en: "Tigurinus", zh: "提古里尼" } },
                            { textus: "nam", lemma: "nam", morphologia: "Conjunción Causal", syntaxis: "Nexo", translatio: { es: "pues", en: "for", zh: "因為" } },
                            { textus: "omnis", lemma: "omnis", morphologia: "Nominativo Femenino Singular", syntaxis: "Atributo", translatio: { es: "toda", en: "all", zh: "整個" } },
                            { textus: "ciuitas", lemma: "civitas", morphologia: "Nominativo Femenino Singular", syntaxis: "Sujeto", translatio: { es: "la nación", en: "the state", zh: "邦國" } },
                            { textus: "Heluetia", lemma: "Helvetius", morphologia: "Nominativo Femenino Singular", syntaxis: "Aposición", translatio: { es: "Helvecia", en: "Helvetian", zh: "赫爾維蒂" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición (+ Acusativo)", syntaxis: "Modificador Preposicional", translatio: { es: "en", en: "into", zh: "分成" } },
                            { textus: "quattuor", lemma: "quattuor", morphologia: "Numeral, Indeclinable", syntaxis: "Atributo", translatio: { es: "cuatro", en: "four", zh: "四個" } },
                            { textus: "pagos", lemma: "pagus", morphologia: "Acusativo Masculino Plural", syntaxis: "Complemento de 'in'", translatio: { es: "clanes", en: "cantons / clans", zh: "部落" } },
                            { textus: "diuisa", lemma: "divido", morphologia: "Participio Perfecto Pasivo, Nominativo Singular", syntaxis: "Parte del verbo", translatio: { es: "dividida", en: "divided", zh: "被劃分" } },
                            { textus: "est.", lemma: "sum", morphologia: "Presente Indicativo Activo, 3ª Persona Singular", syntaxis: "Verbo (auxiliar)", translatio: { es: "está", en: "is", zh: "是" } }
                        ],
                        ordo_syntacticus: "Oración compuesta por dos cláusulas coordinadas por la conjunción causal 'nam'.",
                        notae: "Un 'pagus' era una subdivisión tribal o territorial. César utiliza esta explicación para contextualizar la importancia del grupo que acaba de derrotar.",
                        translationes: {
                            es: "Aquel clan era llamado Tigurino: pues toda la nación Helvecia está dividida en cuatro clanes.",
                            en: "That canton was called the Tigurinus: for the entire Helvetian state is divided into four cantons.",
                            zh: "那個部落被稱為提古里尼：因為整個赫爾維蒂邦國被劃分為四個部落。"
                        }
                    },
                    {
                        id_orationis: 'o6',
                        original_lat: "Hic pagus unus cum domo exisset patrum nostrorum memoria L. Cassium consulem interfecerat et eius exercitum sub iugum miserat.",
                        verba: [
                            { textus: "Hic", lemma: "hic", morphologia: "Nominativo Masculino Singular", syntaxis: "Atributo", translatio: { es: "este", en: "this", zh: "這個" } },
                            { textus: "pagus", lemma: "pagus", morphologia: "Nominativo Masculino Singular", syntaxis: "Sujeto", translatio: { es: "clan", en: "canton", zh: "部落" } },
                            { textus: "unus", lemma: "unus", morphologia: "Nominativo Masculino Singular", syntaxis: "Aposición", translatio: { es: "solo", en: "alone", zh: "單獨" } },
                            { textus: "cum", lemma: "cum", morphologia: "Preposición (+ Ablativo)", syntaxis: "Modificador Preposicional", translatio: { es: "de", en: "from", zh: "從" } },
                            { textus: "domo", lemma: "domus", morphologia: "Ablativo Femenino Singular", syntaxis: "Complemento de 'exisset'", translatio: { es: "casa", en: "home", zh: "家園" } },
                            { textus: "exisset", lemma: "exeo", morphologia: "Pluscuamperfecto Subjuntivo Activo, 3ª Persona Singular", syntaxis: "Verbo (en cláusula 'cum' histórico)", translatio: { es: "había salido", en: "had gone out", zh: "離開" } },
                            { textus: "patrum", lemma: "pater", morphologia: "Genitivo Masculino Plural", syntaxis: "Complemento del Nombre", translatio: { es: "de nuestros padres", en: "of our fathers", zh: "我們父輩的" } },
                            { textus: "nostrorum", lemma: "noster", morphologia: "Genitivo Masculino Plural", syntaxis: "Atributo", translatio: { es: "nuestros", en: "our", zh: "我們的" } },
                            { textus: "memoria", lemma: "memoria", morphologia: "Ablativo Femenino Singular", syntaxis: "Complemento Circunstancial de Tiempo", translatio: { es: "en el recuerdo", en: "in the memory", zh: "在記憶中" } },
                            { textus: "L.", lemma: "Lucius", morphologia: "Abreviatura, Acusativo Masculino Singular", syntaxis: "Parte del Objeto Directo", translatio: { es: "a Lucio", en: "Lucius", zh: "盧基烏斯" } },
                            { textus: "Cassium", lemma: "Cassius", morphologia: "Acusativo Masculino Singular", syntaxis: "Objeto Directo", translatio: { es: "Casio", en: "Cassius", zh: "卡西烏斯" } },
                            { textus: "consulem", lemma: "consul", morphologia: "Acusativo Masculino Singular", syntaxis: "Aposición del Objeto Directo", translatio: { es: "el cónsul", en: "the consul", zh: "執政官" } },
                            { textus: "interfecerat", lemma: "interficio", morphologia: "Pluscuamperfecto Indicativo Activo, 3ª Persona Singular", syntaxis: "Verbo", translatio: { es: "había matado", en: "had killed", zh: "殺害了" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción Coordinante", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "並且" } },
                            { textus: "eius", lemma: "is", morphologia: "Genitivo Masculino Singular", syntaxis: "Complemento del Nombre", translatio: { es: "su", en: "his", zh: "他的" } },
                            { textus: "exercitum", lemma: "exercitus", morphologia: "Acusativo Masculino Singular", syntaxis: "Objeto Directo", translatio: { es: "ejército", en: "army", zh: "軍隊" } },
                            { textus: "sub", lemma: "sub", morphologia: "Preposición (+ Acusativo)", syntaxis: "Modificador Preposicional", translatio: { es: "bajo", en: "under", zh: "在...之下" } },
                            { textus: "iugum", lemma: "iugum", morphologia: "Acusativo Neutro Singular", syntaxis: "Complemento de 'sub'", translatio: { es: "el yugo", en: "the yoke", zh: "軛" } },
                            { textus: "miserat.", lemma: "mitto", morphologia: "Pluscuamperfecto Indicativo Activo, 3ª Persona Singular", syntaxis: "Verbo", translatio: { es: "había enviado", en: "had sent", zh: "送" } }
                        ],
                        ordo_syntacticus: "Oración principal ('Hic pagus... interfecerat et... miserat') con una cláusula subordinada temporal ('cum domo exisset') y un complemento de tiempo ('patrum nostrorum memoria').",
                        notae: "Hacer pasar un ejército 'bajo el yugo' era un ritual de humillación extrema para un ejército derrotado. César recuerda este desastre (ocurrido en el 107 a.C.) para justificar la dureza de su represalia.",
                        translationes: {
                            es: "Este clan solo, en el recuerdo de nuestros padres, cuando había salido de su tierra, había matado al cónsul Lucio Casio y había hecho pasar a su ejército bajo el yugo.",
                            en: "This one canton, in the memory of our fathers, when it had gone out from its home, had killed the consul Lucius Cassius and had sent his army under the yoke.",
                            zh: "在我們父輩的記憶中，僅這一個部落，在離開家園後，就殺害了執政官盧基烏斯·卡西烏斯，並讓他的軍隊從軛下通過（以示羞辱）。"
                        }
                    },
                    {
                        id_orationis: 'o7',
                        original_lat: "Ita siue casu siue consilio deorum immortalium, quae pars ciuitatis Heluetiae insignem calamitatem populo Romano intulerat, ea princeps poenas persoluit.",
                        verba: [
                            { textus: "Ita", lemma: "ita", morphologia: "Adverbio", syntaxis: "Modificador Oracional", translatio: { es: "así", en: "thus", zh: "因此" } },
                            { textus: "siue", lemma: "sive", morphologia: "Conjunción Disyuntiva", syntaxis: "Nexo", translatio: { es: "ya sea", en: "whether", zh: "無論是" } },
                            { textus: "casu", lemma: "casus", morphologia: "Ablativo Masculino Singular", syntaxis: "Complemento Circunstancial de Causa", translatio: { es: "por azar", en: "by chance", zh: "由於偶然" } },
                            { textus: "siue", lemma: "sive", morphologia: "Conjunción Disyuntiva", syntaxis: "Nexo", translatio: { es: "o", en: "or", zh: "還是" } },
                            { textus: "consilio", lemma: "consilium", morphologia: "Ablativo Neutro Singular", syntaxis: "Complemento Circunstancial de Causa", translatio: { es: "por designio", en: "by the design", zh: "由於計議" } },
                            { textus: "deorum", lemma: "deus", morphologia: "Genitivo Masculino Plural", syntaxis: "Complemento del Nombre", translatio: { es: "de los dioses", en: "of the gods", zh: "神的" } },
                            { textus: "immortalium,", lemma: "immortalis", morphologia: "Genitivo Masculino Plural", syntaxis: "Atributo", translatio: { es: "inmortales", en: "immortal", zh: "不朽的" } },
                            { textus: "quae", lemma: "qui", morphologia: "Nominativo Femenino Singular", syntaxis: "Sujeto (de 'intulerat')", translatio: { es: "la cual", en: "which", zh: "那個" } },
                            { textus: "pars", lemma: "pars", morphologia: "Nominativo Femenino Singular", syntaxis: "Sujeto (de 'intulerat')", translatio: { es: "parte", en: "part", zh: "部分" } },
                            { textus: "ciuitatis", lemma: "civitas", morphologia: "Genitivo Femenino Singular", syntaxis: "Complemento del Nombre", translatio: { es: "de la nación", en: "of the state", zh: "邦國的" } },
                            { textus: "Heluetiae", lemma: "Helvetius", morphologia: "Genitivo Femenino Singular", syntaxis: "Aposición", translatio: { es: "Helvecia", en: "Helvetian", zh: "赫爾維蒂的" } },
                            { textus: "insignem", lemma: "insignis", morphologia: "Acusativo Femenino Singular", syntaxis: "Atributo", translatio: { es: "una señalada", en: "a notable", zh: "顯著的" } },
                            { textus: "calamitatem", lemma: "calamitas", morphologia: "Acusativo Femenino Singular", syntaxis: "Objeto Directo", translatio: { es: "calamidad", en: "disaster", zh: "災難" } },
                            { textus: "populo", lemma: "populus", morphologia: "Dativo Masculino Singular", syntaxis: "Objeto Indirecto", translatio: { es: "al pueblo", en: "to the people", zh: "給人民" } },
                            { textus: "Romano", lemma: "Romanus", morphologia: "Dativo Masculino Singular", syntaxis: "Atributo", translatio: { es: "Romano", en: "Roman", zh: "羅馬的" } },
                            { textus: "intulerat,", lemma: "infero", morphologia: "Pluscuamperfecto Indicativo Activo, 3ª Persona Singular", syntaxis: "Verbo", translatio: { es: "había infligido", en: "had inflicted", zh: "施加了" } },
                            { textus: "ea", lemma: "is", morphologia: "Nominativo Femenino Singular", syntaxis: "Sujeto (de 'persoluit')", translatio: { es: "esa", en: "that one", zh: "那個" } },
                            { textus: "princeps", lemma: "princeps", morphologia: "Adverbio (forma de Nominativo)", syntaxis: "Modificador Adverbial", translatio: { es: "la primera", en: "first", zh: "首先" } },
                            { textus: "poenas", lemma: "poena", morphologia: "Acusativo Femenino Plural", syntaxis: "Objeto Directo", translatio: { es: "el castigo", en: "the penalty", zh: "懲罰" } },
                            { textus: "persoluit.", lemma: "persolvo", morphologia: "Perfecto Indicativo Activo, 3ª Persona Singular", syntaxis: "Verbo", translatio: { es: "pagó", en: "paid", zh: "付出了" } }
                        ],
                        ordo_syntacticus: "Oración principal ('ea princeps poenas persoluit') precedida por complementos circunstanciales y una cláusula de relativo explicativa ('quae pars... intulerat').",
                        notae: "La expresión 'poenas persolvere' significa 'pagar las penas' o 'recibir el castigo'. César atribuye el resultado a la suerte o a la justicia divina, una forma de propaganda para legitimar sus acciones.",
                        translationes: {
                            es: "Así, ya sea por azar o por designio de los dioses inmortales, aquella parte de la nación Helvecia que había infligido una señalada calamidad al pueblo Romano, esa fue la primera en pagar el castigo.",
                            en: "Thus, whether by chance or by the design of the immortal gods, that part of the Helvetian state which had inflicted a notable disaster upon the Roman people, that one was the first to pay the penalty.",
                            zh: "因此，無論是出於偶然還是不朽之神的計議，赫爾維蒂邦國中曾給羅馬人民帶來顯著災難的那一部分，首先付出了代價。"
                        }
                    },
                    {
                        id_orationis: 'o8',
                        original_lat: "Qua in re Caesar non solum publicas, sed etiam priuatas iniurias ultus est, quod eius soceri L. Pisonis auum, L. Pisonem legatum, Tigurini eodem proelio quo Cassium interfecerant.",
                        verba: [
                            { textus: "Qua", lemma: "qui", morphologia: "Ablativo Femenino Singular", syntaxis: "Nexo Relativo", translatio: { es: "en el cual", en: "in which", zh: "在這件" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición (+ Ablativo)", syntaxis: "Parte del nexo", translatio: { es: "en", en: "in", zh: "在" } },
                            { textus: "re", lemma: "res", morphologia: "Ablativo Femenino Singular", syntaxis: "Complemento de 'in'", translatio: { es: "asunto", en: "matter", zh: "事情中" } },
                            { textus: "Caesar", lemma: "Caesar", morphologia: "Nominativo Masculino Singular", syntaxis: "Sujeto", translatio: { es: "César", en: "Caesar", zh: "凱撒" } },
                            { textus: "non", lemma: "non", morphologia: "Adverbio", syntaxis: "Parte de la correlación 'non solum... sed etiam'", translatio: { es: "no", en: "not", zh: "不僅" } },
                            { textus: "solum", lemma: "solum", morphologia: "Adverbio", syntaxis: "Parte de la correlación", translatio: { es: "solo", en: "only", zh: "僅僅" } },
                            { textus: "publicas,", lemma: "publicus", morphologia: "Acusativo Femenino Plural", syntaxis: "Atributo", translatio: { es: "públicas", en: "public", zh: "公共的" } },
                            { textus: "sed", lemma: "sed", morphologia: "Conjunción Adversativa", syntaxis: "Nexo", translatio: { es: "sino", en: "but", zh: "而且" } },
                            { textus: "etiam", lemma: "etiam", morphologia: "Adverbio", syntaxis: "Nexo", translatio: { es: "también", en: "also", zh: "也" } },
                            { textus: "priuatas", lemma: "privatus", morphologia: "Acusativo Femenino Plural", syntaxis: "Atributo", translatio: { es: "privadas", en: "private", zh: "私人的" } },
                            { textus: "iniurias", lemma: "iniuria", morphologia: "Acusativo Femenino Plural", syntaxis: "Objeto Directo", translatio: { es: "injusticias", en: "injustices", zh: "冤屈" } },
                            { textus: "ultus", lemma: "ulciscor", morphologia: "Participio Perfecto, Nominativo Singular", syntaxis: "Parte del verbo", translatio: { es: "vengado", en: "avenged", zh: "報了" } },
                            { textus: "est,", lemma: "sum", morphologia: "Presente Indicativo Activo, 3ª Persona Singular", syntaxis: "Verbo (auxiliar)", translatio: { es: "vengó", en: "avenged", zh: "報了...仇" } },
                            { textus: "quod", lemma: "quod", morphologia: "Conjunción Causal", syntaxis: "Nexo", translatio: { es: "porque", en: "because", zh: "因為" } },
                            { textus: "eius", lemma: "is", morphologia: "Genitivo Masculino Singular", syntaxis: "Complemento del Nombre", translatio: { es: "de su", en: "his", zh: "他的" } },
                            { textus: "soceri", lemma: "socer", morphologia: "Genitivo Masculino Singular", syntaxis: "Complemento del Nombre", translatio: { es: "suegro", en: "father-in-law", zh: "岳父" } },
                            { textus: "L.", lemma: "Lucius", morphologia: "Abreviatura, Genitivo Masculino Singular", syntaxis: "Parte del Complemento del Nombre", translatio: { es: "Lucio", en: "Lucius", zh: "盧基烏斯" } },
                            { textus: "Pisonis", lemma: "Piso", morphologia: "Genitivo Masculino Singular", syntaxis: "Aposición", translatio: { es: "Pisón", en: "Piso", zh: "皮索" } },
                            { textus: "auum,", lemma: "avus", morphologia: "Acusativo Masculino Singular", syntaxis: "Objeto Directo", translatio: { es: "al abuelo", en: "the grandfather", zh: "祖父" } },
                            { textus: "L.", lemma: "Lucius", morphologia: "Abreviatura, Acusativo Masculino Singular", syntaxis: "Parte de la aposición", translatio: { es: "a Lucio", en: "Lucius", zh: "盧基烏斯" } },
                            { textus: "Pisonem", lemma: "Piso", morphologia: "Acusativo Masculino Singular", syntaxis: "Aposición del Objeto Directo", translatio: { es: "Pisón", en: "Piso", zh: "皮索" } },
                            { textus: "legatum,", lemma: "legatus", morphologia: "Acusativo Masculino Singular", syntaxis: "Aposición del Objeto Directo", translatio: { es: "el legado", en: "the legate", zh: "副將" } },
                            { textus: "Tigurini", lemma: "Tigurinus", morphologia: "Nominativo Masculino Plural", syntaxis: "Sujeto", translatio: { es: "los Tigurinos", en: "the Tigurini", zh: "提古里尼人" } },
                            { textus: "eodem", lemma: "idem", morphologia: "Ablativo Neutro Singular", syntaxis: "Atributo", translatio: { es: "en la misma", en: "in the same", zh: "在同一場" } },
                            { textus: "proelio", lemma: "proelium", morphologia: "Ablativo Neutro Singular", syntaxis: "Complemento Circunstancial", translatio: { es: "batalla", en: "battle", zh: "戰鬥中" } },
                            { textus: "quo", lemma: "qui", morphologia: "Ablativo Neutro Singular", syntaxis: "Nexo Relativo", translatio: { es: "en la que", en: "as", zh: "如同" } },
                            { textus: "Cassium", lemma: "Cassius", morphologia: "Acusativo Masculino Singular", syntaxis: "Objeto Directo", translatio: { es: "a Casio", en: "Cassius", zh: "卡西烏斯" } },
                            { textus: "interfecerant.", lemma: "interficio", morphologia: "Pluscuamperfecto Indicativo Activo, 3ª Persona Plural", syntaxis: "Verbo", translatio: { es: "habían matado", en: "they had killed", zh: "他們殺害了" } }
                        ],
                        ordo_syntacticus: "Oración principal ('Caesar... ultus est') seguida de una cláusula causal ('quod... interfecerant').",
                        notae: "César concluye el capítulo revelando su motivación personal: vengar al abuelo de su suegro, L. Calpurnius Piso Caesoninus (cónsul en 58 a.C.). Esta mezcla de deber público y honor familiar era un poderoso argumento para la audiencia romana.",
                        translationes: {
                            es: "En este asunto, César vengó no solo las injusticias públicas, sino también las privadas, porque los Tigurinos, en la misma batalla en la que (mataron) a Casio, habían matado al legado Lucio Pisón, abuelo de su suegro Lucio Pisón.",
                            en: "In this matter, Caesar avenged not only public injustices, but also private ones, because the Tigurini, in the same battle in which they had killed Cassius, had killed the legate Lucius Piso, the grandfather of his father-in-law Lucius Piso.",
                            zh: "在這件事上，凱撒不僅報了公家的冤屈，也報了私人的冤屈，因為提古里尼人在殺害卡西烏斯的那場戰鬥中，也殺害了他岳父盧基烏斯·皮索的祖父、副將盧基烏斯·皮索。"
                        }
                    }
                ]
            }
        ]
    }
};

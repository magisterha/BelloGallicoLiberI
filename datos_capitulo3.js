const corpus = {
    titulus_principalis: "De Bello Gallico, I, 3",
    auctor: "C. Iulius Caesar",
    titulus_secundarius: {
        es: "Preparativos y Diplomacia Secreta",
        en: "Preparations and Secret Diplomacy",
        zh: "準備與秘密外交"
    },
    introductio: {
        es: {
            titulus: "Introducción al Capítulo 3",
            contentus: `<p>Este capítulo detalla los preparativos logísticos de los helvecios para su migración. Se elige a Orgetórix para dirigir la operación, quien aprovecha su rol para iniciar una conspiración diplomática, convenciendo a Cástico de los sécuanos y a Dumnórige de los eduos para que tomen el poder en sus respectivas tribus, formando así una alianza tripartita para dominar toda la Galia.</p>`
        },
        en: {
            titulus: "Introduction to Chapter 3",
            contentus: `<p>This chapter details the logistical preparations of the Helvetii for their migration. Orgetorix is chosen to lead the operation, and he uses his role to initiate a diplomatic conspiracy, convincing Casticus of the Sequani and Dumnorix of the Aedui to seize power in their respective tribes, thereby forming a tripartite alliance to dominate all of Gaul.</p>`
        },
        zh: {
            titulus: "第 3 章介紹",
            contentus: `<p>本章詳細描述了赫爾維蒂人為其遷徙所做的後勤準備。奧爾格托里克斯被選為行動的領導者，他利用這一職位發起了一場外交陰謀，說服塞夸尼人的卡斯蒂庫斯和愛杜依人的杜姆諾里格斯在各自的部落中奪取權力，從而形成一個旨在統治整個高盧的三方聯盟。</p>`
        }
    },
    textus: {
        id: 3,
        capitula: [
            {
                id_capituli: 3,
                orationes: [
                    {
                        id_orationis: 'o14',
                        original_lat: "His rebus adducti et auctoritate Orgetorigis permoti constituerunt ea quae ad proficiscendum pertinerent comparare, iumentorum et carrorum quam maximum numerum coemere, sementes quam maximas facere, ut in itinere copia frumenti suppeteret, cum proximis ciuitatibus pacem et amicitiam confirmare.",
                        verba: [
                            { textus: "His", lemma: "hic", morphologia: "Pronombre-Adj. demost, F, Abl, Pl", syntaxis: "Atributo de 'rebus'", translatio: { es: "Por estas", en: "By these", zh: "受這些" } },
                            { textus: "rebus", lemma: "res", morphologia: "Sust. 5ª dec, F, Abl, Pl", syntaxis: "Ablativo de Causa", translatio: { es: "razones", en: "reasons", zh: "事物" } },
                            { textus: "adducti", lemma: "adduco", morphologia: "Participio Perf. Pas, M, Nom, Pl", syntaxis: "Participio concertado con el sujeto (elíptico: Helvetii)", translatio: { es: "inducidos", en: "influenced", zh: "影響" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "以及" } },
                            { textus: "auctoritate", lemma: "auctoritas", morphologia: "Sust. 3ª dec, F, Abl, Sg", syntaxis: "Ablativo de Causa", translatio: { es: "por la autoridad", en: "by the authority", zh: "權威的" } },
                            { textus: "Orgetorigis", lemma: "Orgetorix", morphologia: "Sust. 3ª dec, M, Gen, Sg", syntaxis: "Complemento del Nombre", translatio: { es: "de Orgetórige", en: "of Orgetorix", zh: "奧爾格托里克斯的" } },
                            { textus: "permoti", lemma: "permoueo", morphologia: "Participio Perf. Pas, M, Nom, Pl", syntaxis: "Participio concertado con el sujeto", translatio: { es: "movidos", en: "stirred", zh: "驅使" } },
                            { textus: "constituerunt", lemma: "constituo", morphologia: "Verbo, Pret. Perfecto Ind, 3ª Pl", syntaxis: "Verbo Principal", translatio: { es: "decidieron", en: "they decided", zh: "他們決定" } },
                            { textus: "ea", lemma: "is", morphologia: "Pronombre, N, Acu, Pl", syntaxis: "Objeto Directo de 'comparare'", translatio: { es: "aquellas cosas", en: "those things", zh: "那些事物" } },
                            { textus: "quae", lemma: "qui", morphologia: "Pronombre relativo, N, Nom/Acu, Pl", syntaxis: "Sujeto de 'pertinerent'", translatio: { es: "que", en: "which", zh: "它們" } },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición", syntaxis: "Nexo (rige Acusativo)", translatio: { es: "para", en: "for", zh: "為了" } },
                            { textus: "proficiscendum", lemma: "proficiscor", morphologia: "Gerundio, Acu, Sg", syntaxis: "Expresión de finalidad ('para marchar')", translatio: { es: "la partida", en: "departing", zh: "出發" } },
                            { textus: "pertinerent", lemma: "pertineo", morphologia: "Verbo, Pret. Imperfecto Subj, 3ª Pl", syntaxis: "Verbo de subordinada de relativo con matiz final", translatio: { es: "concernían", en: "pertained", zh: "關於" } },
                            { textus: "comparare", lemma: "comparo", morphologia: "Verbo, Pres. Inf. Act", syntaxis: "Infinitivo Completivo (OD de 'constituerunt')", translatio: { es: "preparar", en: "to prepare", zh: "準備" } },
                            { textus: "iumentorum", lemma: "iumentum", morphologia: "Sust. 2ª dec, N, Gen, Pl", syntaxis: "Complemento del Nombre", translatio: { es: "de las bestias de carga", en: "of pack animals", zh: "牲口的" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "和" } },
                            { textus: "carrorum", lemma: "carrus", morphologia: "Sust. 2ª dec, M, Gen, Pl", syntaxis: "Complemento del Nombre", translatio: { es: "de los carros", en: "of carts", zh: "車輛的" } },
                            { textus: "quam", lemma: "quam", morphologia: "Adverbio", syntaxis: "Modificador del superlativo ('el ... posible')", translatio: { es: "lo más", en: "as ... as possible", zh: "盡可能" } },
                            { textus: "maximum", lemma: "magnus", morphologia: "Adj. 1ª/2ª dec, M, Acu, Sg, Superlativo", syntaxis: "Atributo de 'numerum'", translatio: { es: "grande", en: "greatest", zh: "大的" } },
                            { textus: "numerum", lemma: "numerus", morphologia: "Sust. 2ª dec, M, Acu, Sg", syntaxis: "Objeto Directo de 'coemere'", translatio: { es: "número", en: "number", zh: "數量" } },
                            { textus: "coemere", lemma: "coemo", morphologia: "Verbo, Pres. Inf. Act", syntaxis: "Infinitivo Completivo", translatio: { es: "comprar", en: "to buy up", zh: "購買" } },
                            { textus: "sementes", lemma: "sementis", morphologia: "Sust. 3ª dec, F, Acu, Pl", syntaxis: "Objeto Directo de 'facere'", translatio: { es: "siembras", en: "sowings", zh: "播種" } },
                            { textus: "quam", lemma: "quam", morphologia: "Adverbio", syntaxis: "Modificador del superlativo", translatio: { es: "lo más", en: "as ... as possible", zh: "盡可能" } },
                            { textus: "maximas", lemma: "magnus", morphologia: "Adj. 1ª/2ª dec, F, Acu, Pl, Superlativo", syntaxis: "Atributo de 'sementes'", translatio: { es: "grandes", en: "largest", zh: "大的" } },
                            { textus: "facere", lemma: "facio", morphologia: "Verbo, Pres. Inf. Act", syntaxis: "Infinitivo Completivo", translatio: { es: "hacer", en: "to make", zh: "進行" } },
                            { textus: "ut", lemma: "ut", morphologia: "Conjunción subordinante", syntaxis: "Nexo (introduce cláusula final)", translatio: { es: "para que", en: "so that", zh: "以便" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición", syntaxis: "Nexo (rige Ablativo)", translatio: { es: "en", en: "on", zh: "在" } },
                            { textus: "itinere", lemma: "iter", morphologia: "Sust. 3ª dec, N, Abl, Sg", syntaxis: "Complemento Circunstancial de Lugar", translatio: { es: "el camino", en: "the march", zh: "路上" } },
                            { textus: "copia", lemma: "copia", morphologia: "Sust. 1ª dec, F, Nom, Sg", syntaxis: "Sujeto de 'suppeteret'", translatio: { es: "la abundancia", en: "a supply", zh: "供應" } },
                            { textus: "frumenti", lemma: "frumentum", morphologia: "Sust. 2ª dec, N, Gen, Sg", syntaxis: "Complemento del Nombre", translatio: { es: "de trigo", en: "of grain", zh: "糧食的" } },
                            { textus: "suppeteret", lemma: "suppeto", morphologia: "Verbo, Pret. Imperfecto Subj, 3ª Sg", syntaxis: "Verbo de la subordinada final", translatio: { es: "estuviera disponible", en: "would be available", zh: "充足" } },
                            { textus: "cum", lemma: "cum", morphologia: "Preposición", syntaxis: "Nexo (rige Ablativo)", translatio: { es: "con", en: "with", zh: "與" } },
                            { textus: "proximis", lemma: "proximus", morphologia: "Adj. 1ª/2ª dec, F, Abl, Pl, Superlativo", syntaxis: "Atributo de 'ciuitatibus'", translatio: { es: "las vecinas", en: "the neighboring", zh: "鄰近的" } },
                            { textus: "ciuitatibus", lemma: "ciuitas", morphologia: "Sust. 3ª dec, F, Abl, Pl", syntaxis: "Complemento Circunstancial de Compañía", translatio: { es: "ciudades", en: "states", zh: "邦國" } },
                            { textus: "pacem", lemma: "pax", morphologia: "Sust. 3ª dec, F, Acu, Sg", syntaxis: "Objeto Directo de 'confirmare'", translatio: { es: "la paz", en: "peace", zh: "和平" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "與" } },
                            { textus: "amicitiam", lemma: "amicitia", morphologia: "Sust. 1ª dec, F, Acu, Sg", syntaxis: "Objeto Directo de 'confirmare'", translatio: { es: "la amistad", en: "friendship", zh: "友誼" } },
                            { textus: "confirmare", lemma: "confirmo", morphologia: "Verbo, Pres. Inf. Act", syntaxis: "Infinitivo Completivo", translatio: { es: "consolidar", en: "to establish", zh: "鞏固" } }
                        ],
                        ordo_syntacticus: "[Los Helvecios (S elíptico), adducti... et permoti..., constituerunt (V)] + serie de infinitivos completivos: [comparare ea quae...], [coemere numerum...], [facere sementes...], [confirmare pacem...].",
                        notae: "El verbo principal 'constituerunt' (decidieron) rige una serie de cuatro infinitivos que actúan como su objeto directo, detallando las decisiones tomadas.",
                        translationes: {
                            es: "Inducidos por estas razones y movidos por la autoridad de Orgetórige, decidieron preparar lo que concernía a la partida, comprar el mayor número posible de bestias de carga y de carros, hacer las mayores siembras posibles para que en el camino hubiera abundancia de trigo, y consolidar la paz y la amistad con las ciudades vecinas.",
                            en: "Influenced by these factors and stirred by the authority of Orgetorix, they decided to prepare what was necessary for the departure, to buy up the greatest possible number of pack animals and carts, to make the largest possible sowings so that a supply of grain would be available on the march, and to establish peace and friendship with the neighboring states.",
                            zh: "受這些事物的影響以及奧爾格托里克斯權威的驅使，他們決定準備出發所需的一切，購買盡可能多的牲口和車輛，進行盡可能大規模的播種，以便在路上有充足的糧食供應，並與鄰近的邦國鞏固和平與友誼。"
                        }
                    },
                    {
                        id_orationis: 'o15',
                        original_lat: "Ad eas res conficiendas biennium sibi satis esse duxerunt; in tertium annum profectionem lege confirmant.",
                        verba: [
                            { textus: "Ad", lemma: "ad", morphologia: "Preposición", syntaxis: "Nexo (rige Acusativo)", translatio: { es: "Para", en: "To", zh: "為了" } },
                            { textus: "eas", lemma: "is", morphologia: "Pronombre-Adj. demost, F, Acu, Pl", syntaxis: "Atributo de 'res'", translatio: { es: "estas", en: "these", zh: "這些" } },
                            { textus: "res", lemma: "res", morphologia: "Sust. 5ª dec, F, Acu, Pl", syntaxis: "Complemento", translatio: { es: "cosas", en: "things", zh: "事" } },
                            { textus: "conficiendas", lemma: "conficio", morphologia: "Gerundivo, F, Acu, Pl", syntaxis: "Atributo de 'res' (con valor final)", translatio: { es: "llevar a cabo", en: "complete", zh: "完成" } },
                            { textus: "biennium", lemma: "biennium", morphologia: "Sust. 2ª dec, N, Acu, Sg", syntaxis: "Sujeto de la Oración de Infinitivo", translatio: { es: "un bienio", en: "a period of two years", zh: "兩年" } },
                            { textus: "sibi", lemma: "sui", morphologia: "Pronombre reflexivo, Dat, Pl", syntaxis: "Dativo de Interés", translatio: { es: "para ellos", en: "for them", zh: "對他們來說" } },
                            { textus: "satis", lemma: "satis", morphologia: "Adverbio/Adj. indeclinable", syntaxis: "Atributo", translatio: { es: "suficiente", en: "sufficient", zh: "足夠的" } },
                            { textus: "esse", lemma: "sum", morphologia: "Verbo, Pres. Inf. Act", syntaxis: "Verbo de la Oración de Infinitivo", translatio: { es: "ser", en: "was", zh: "是" } },
                            { textus: "duxerunt", lemma: "duco", morphologia: "Verbo, Pret. Perfecto Ind, 3ª Pl", syntaxis: "Verbo Principal ('consideraron')", translatio: { es: "consideraron", en: "they considered", zh: "他們認為" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición", syntaxis: "Nexo (rige Acusativo)", translatio: { es: "para", en: "for", zh: "在" } },
                            { textus: "tertium", lemma: "tertius", morphologia: "Adj. numeral, M, Acu, Sg", syntaxis: "Atributo de 'annum'", translatio: { es: "el tercer", en: "the third", zh: "第三" } },
                            { textus: "annum", lemma: "annus", morphologia: "Sust. 2ª dec, M, Acu, Sg", syntaxis: "Complemento Circunstancial de Tiempo", translatio: { es: "año", en: "year", zh: "年" } },
                            { textus: "profectionem", lemma: "profectio", morphologia: "Sust. 3ª dec, F, Acu, Sg", syntaxis: "Objeto Directo", translatio: { es: "la partida", en: "the departure", zh: "出發" } },
                            { textus: "lege", lemma: "lex", morphologia: "Sust. 3ª dec, F, Abl, Sg", syntaxis: "Ablativo de Medio", translatio: { es: "por ley", en: "by law", zh: "依法" } },
                            { textus: "confirmant", lemma: "confirmo", morphologia: "Verbo, Pres. Ind, 3ª Pl", syntaxis: "Verbo Principal", translatio: { es: "fijan", en: "they confirm", zh: "他們確定" } }
                        ],
                        ordo_syntacticus: "[Ellos (S elíptico) duxerunt (V)] [biennium (S) esse (V) satis (Atributo) sibi (CI) (Oración de Infinitivo-OD)]; [confirmant (V) profectionem (OD) lege (CCM) in tertium annum (CCT)].",
                        notae: "La frase 'Ad eas res conficiendas' es un gerundivo con 'ad' que expresa finalidad: 'para llevar a cabo estas cosas'.",
                        translationes: {
                            es: "Para llevar a cabo estas cosas, consideraron que un bienio les era suficiente; para el tercer año, fijan por ley la partida.",
                            en: "To complete these things, they considered that a period of two years was sufficient for them; for the third year, they confirm the departure by law.",
                            zh: "為了完成這些事，他們認為兩年時間對他們來說是足夠的；他們依法將出發日期定在第三年。"
                        }
                    },
                    {
                        id_orationis: 'o16',
                        original_lat: "Ad eas res conficiendas Orgetorix deligitur.",
                        verba: [
                            { textus: "Ad", lemma: "ad", morphologia: "Preposición", syntaxis: "Nexo (rige Acusativo)", translatio: { es: "Para", en: "To", zh: "為了" } },
                            { textus: "eas", lemma: "is", morphologia: "Pronombre-Adj. demost, F, Acu, Pl", syntaxis: "Atributo de 'res'", translatio: { es: "estas", en: "these", zh: "這些" } },
                            { textus: "res", lemma: "res", morphologia: "Sust. 5ª dec, F, Acu, Pl", syntaxis: "Complemento", translatio: { es: "cosas", en: "tasks", zh: "事" } },
                            { textus: "conficiendas", lemma: "conficio", morphologia: "Gerundivo, F, Acu, Pl", syntaxis: "Atributo de 'res' (con valor final)", translatio: { es: "llevar a cabo", en: "accomplish", zh: "完成" } },
                            { textus: "Orgetorix", lemma: "Orgetorix", morphologia: "Sust. 3ª dec, M, Nom, Sg", syntaxis: "Sujeto", translatio: { es: "Orgetórige", en: "Orgetorix", zh: "奧爾格托里克斯" } },
                            { textus: "deligitur", lemma: "deligo", morphologia: "Verbo, Pres. Ind. Pas, 3ª Sg", syntaxis: "Verbo", translatio: { es: "es elegido", en: "is chosen", zh: "被選中" } }
                        ],
                        ordo_syntacticus: "[Orgetorix (S) deligitur (V)] [Ad eas res conficiendas (CC Finalidad)].",
                        notae: "",
                        translationes: {
                            es: "Para llevar a cabo estas cosas, Orgetórige es elegido.",
                            en: "To accomplish these tasks, Orgetorix is chosen.",
                            zh: "為了完成這些事，奧爾格托里克斯被選中。"
                        }
                    },
                    {
                        id_orationis: 'o17',
                        original_lat: "Is sibi legationem ad ciuitates suscepit.",
                        verba: [
                            { textus: "Is", lemma: "is", morphologia: "Pronombre, M, Nom, Sg", syntaxis: "Sujeto", translatio: { es: "Él", en: "He", zh: "他" } },
                            { textus: "sibi", lemma: "sui", morphologia: "Pronombre reflexivo, Dat, Sg", syntaxis: "Dativo de Interés", translatio: { es: "para sí", en: "for himself", zh: "為自己" } },
                            { textus: "legationem", lemma: "legatio", morphologia: "Sust. 3ª dec, F, Acu, Sg", syntaxis: "Objeto Directo", translatio: { es: "la embajada", en: "the embassy", zh: "使團任務" } },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición", syntaxis: "Nexo (rige Acusativo)", translatio: { es: "a", en: "to", zh: "前往" } },
                            { textus: "ciuitates", lemma: "ciuitas", morphologia: "Sust. 3ª dec, F, Acu, Pl", syntaxis: "Complemento de Dirección", translatio: { es: "las ciudades", en: "the states", zh: "各邦國" } },
                            { textus: "suscepit", lemma: "suscipio", morphologia: "Verbo, Pret. Perfecto Ind, 3ª Sg", syntaxis: "Verbo", translatio: { es: "emprendió", en: "undertook", zh: "承擔了" } }
                        ],
                        ordo_syntacticus: "[Is (S) suscepit (V) sibi (CI) legationem ad ciuitates (OD)].",
                        notae: "",
                        translationes: {
                            es: "Éste tomó para sí la embajada ante las ciudades.",
                            en: "He undertook for himself the embassy to the states.",
                            zh: "他親自承擔了前往各邦國的使團任務。"
                        }
                    },
                    {
                        id_orationis: 'o18',
                        original_lat: "In eo itinere persuadet Castico, Catamantaloedis filio, Sequano, cuius pater regnum in Sequanis multos annos obtinuerat et a senatu populi Romani amicus appellatus erat, ut regnum in ciuitate sua occuparet quod pater ante habuerat; itemque Dumnorigi Haeduo, fratri Diuiciaci, qui eo tempore principatum in ciuitate optinebat ac maxime plebi acceptus erat, ut idem conaretur persuadet eique filiam suam in matrimonium dat.",
                        verba: [
                            { textus: "In", lemma: "in", morphologia: "Preposición", syntaxis: "Nexo (rige Ablativo)", translatio: { es: "En", en: "On", zh: "在" } },
                            { textus: "eo", lemma: "is", morphologia: "Pronombre-Adj. demost, N, Abl, Sg", syntaxis: "Atributo de 'itinere'", translatio: { es: "ese", en: "that", zh: "那次" } },
                            { textus: "itinere", lemma: "iter", morphologia: "Sust. 3ª dec, N, Abl, Sg", syntaxis: "Complemento Circunstancial de Tiempo/Lugar", translatio: { es: "viaje", en: "journey", zh: "行程中" } },
                            { textus: "persuadet", lemma: "persuadeo", morphologia: "Verbo, Pres. Ind, 3ª Sg", syntaxis: "Verbo Principal", translatio: { es: "persuade", en: "he persuades", zh: "他說服" } },
                            { textus: "Castico", lemma: "Casticus", morphologia: "Sust. 2ª dec, M, Dat, Sg", syntaxis: "Objeto Indirecto", translatio: { es: "a Cástico", en: "Casticus", zh: "卡斯蒂庫斯" } },
                            { textus: "Catamantaloedis", lemma: "Catamantaloedes", morphologia: "Sust. 3ª dec, M, Gen, Sg", syntaxis: "Complemento del Nombre", translatio: { es: "de Catamantaledes", en: "of Catamantaloedes", zh: "卡塔曼塔洛德斯" } },
                            { textus: "filio", lemma: "filius", morphologia: "Sust. 2ª dec, M, Dat, Sg", syntaxis: "Aposición de 'Castico'", translatio: { es: "hijo", en: "son", zh: "之子" } },
                            { textus: "Sequano", lemma: "Sequanus", morphologia: "Sust. 2ª dec, M, Dat, Sg", syntaxis: "Aposición de 'Castico'", translatio: { es: "sécuauno", en: "a Sequan", zh: "塞夸尼人" } },
                            { textus: "cuius", lemma: "qui", morphologia: "Pronombre relativo, M, Gen, Sg", syntaxis: "CN ('cuyo')", translatio: { es: "cuyo", en: "whose", zh: "其" } },
                            { textus: "pater", lemma: "pater", morphologia: "Sust. 3ª dec, M, Nom, Sg", syntaxis: "Sujeto", translatio: { es: "padre", en: "father", zh: "父" } },
                            { textus: "regnum", lemma: "regnum", morphologia: "Sust. 2ª dec, N, Acu, Sg", syntaxis: "Objeto Directo", translatio: { es: "el reino", en: "the kingship", zh: "王權" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición", syntaxis: "Nexo (rige Ablativo)", translatio: { es: "entre", en: "among", zh: "在...中" } },
                            { textus: "Sequanis", lemma: "Sequani", morphologia: "Sust. 2ª dec, M, Abl, Pl", syntaxis: "CCL", translatio: { es: "los sécuanos", en: "the Sequani", zh: "塞夸尼人" } },
                            { textus: "multos", lemma: "multus", morphologia: "Adj. 1ª/2ª dec, M, Acu, Pl", syntaxis: "Atributo", translatio: { es: "muchos", en: "many", zh: "多年" } },
                            { textus: "annos", lemma: "annus", morphologia: "Sust. 2ª dec, M, Acu, Pl", syntaxis: "Acusativo de Duración", translatio: { es: "años", en: "years", zh: "" } },
                            { textus: "obtinuerat", lemma: "obtineo", morphologia: "Verbo, Plusc. Ind, 3ª Sg", syntaxis: "Verbo", translatio: { es: "había mantenido", en: "had held", zh: "曾擁有" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "並" } },
                            { textus: "a", lemma: "a", morphologia: "Preposición", syntaxis: "Nexo (rige Ablativo)", translatio: { es: "por", en: "by", zh: "被" } },
                            { textus: "senatu", lemma: "senatus", morphologia: "Sust. 4ª dec, M, Abl, Sg", syntaxis: "C. Agente", translatio: { es: "el senado", en: "the senate", zh: "元老院" } },
                            { textus: "populi", lemma: "populus", morphologia: "Sust. 2ª dec, M, Gen, Sg", syntaxis: "CN", translatio: { es: "del pueblo", en: "of the people", zh: "人民的" } },
                            { textus: "Romani", lemma: "Romanus", morphologia: "Adj. 1ª/2ª dec, M, Gen, Sg", syntaxis: "Atributo", translatio: { es: "romano", en: "Roman", zh: "羅馬" } },
                            { textus: "amicus", lemma: "amicus", morphologia: "Sust. 2ª dec, M, Nom, Sg", syntaxis: "Predicativo", translatio: { es: "amigo", en: "friend", zh: "朋友" } },
                            { textus: "appellatus", lemma: "appello", morphologia: "Participio Perf. Pas, M, Nom, Sg", syntaxis: "Verbo", translatio: { es: "llamado", en: "called", zh: "稱為" } },
                            { textus: "erat", lemma: "sum", morphologia: "Verbo, Plusc. Ind, 3ª Sg", syntaxis: "Auxiliar", translatio: { es: "había sido", en: "had been", zh: "" } },
                            { textus: "ut", lemma: "ut", morphologia: "Conjunción", syntaxis: "Nexo (completivo)", translatio: { es: "para que", en: "to", zh: "讓他" } },
                            { textus: "regnum", lemma: "regnum", morphologia: "Sust. 2ª dec, N, Acu, Sg", syntaxis: "OD", translatio: { es: "el reino", en: "the kingship", zh: "王權" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición", syntaxis: "Nexo (rige Ablativo)", translatio: { es: "en", en: "in", zh: "在" } },
                            { textus: "ciuitate", lemma: "ciuitas", morphologia: "Sust. 3ª dec, F, Abl, Sg", syntaxis: "CCL", translatio: { es: "la ciudad", en: "the state", zh: "邦國中" } },
                            { textus: "sua", lemma: "suus", morphologia: "Adj. posesivo, F, Abl, Sg", syntaxis: "Atributo", translatio: { es: "su", en: "his own", zh: "自己的" } },
                            { textus: "occuparet", lemma: "occupo", morphologia: "Verbo, Imp. Subj, 3ª Sg", syntaxis: "Verbo", translatio: { es: "ocupara", en: "seize", zh: "奪取" } },
                            { textus: "quod", lemma: "qui", morphologia: "Pronombre relativo, N, Acu, Sg", syntaxis: "OD", translatio: { es: "que", en: "which", zh: "那" } },
                            { textus: "pater", lemma: "pater", morphologia: "Sust. 3ª dec, M, Nom, Sg", syntaxis: "Sujeto", translatio: { es: "su padre", en: "his father", zh: "其父" } },
                            { textus: "ante", lemma: "ante", morphologia: "Adverbio", syntaxis: "CCT", translatio: { es: "antes", en: "before", zh: "曾" } },
                            { textus: "habuerat", lemma: "habeo", morphologia: "Verbo, Plusc. Ind, 3ª Sg", syntaxis: "Verbo", translatio: { es: "había tenido", en: "had held", zh: "擁有的" } },
                            { textus: "itemque", lemma: "itemque", morphologia: "Adverbio", syntaxis: "Nexo", translatio: { es: "y del mismo modo", en: "and likewise", zh: "同樣地" } },
                            { textus: "Dumnorigi", lemma: "Dumnorix", morphologia: "Sust. 3ª dec, M, Dat, Sg", syntaxis: "OI", translatio: { es: "a Dumnórige", en: "Dumnorix", zh: "杜姆諾里格斯" } },
                            { textus: "Haeduo", lemma: "Haeduus", morphologia: "Adj. 1ª/2ª dec, M, Dat, Sg", syntaxis: "Aposición", translatio: { es: "eduo", en: "an Aeduan", zh: "愛杜依人" } },
                            { textus: "fratri", lemma: "frater", morphologia: "Sust. 3ª dec, M, Dat, Sg", syntaxis: "Aposición", translatio: { es: "hermano", en: "the brother", zh: "之弟" } },
                            { textus: "Diuiciaci", lemma: "Diuiciacus", morphologia: "Sust. 2ª dec, M, Gen, Sg", syntaxis: "CN", translatio: { es: "de Diviciaco", en: "of Diviciacus", zh: "狄維基亞庫斯" } },
                            { textus: "qui", lemma: "qui", morphologia: "Pronombre relativo, M, Nom, Sg", syntaxis: "Sujeto", translatio: { es: "quien", en: "who", zh: "他" } },
                            { textus: "eo", lemma: "is", morphologia: "Pronombre-Adj. demost, N, Abl, Sg", syntaxis: "Atributo", translatio: { es: "ese", en: "that", zh: "當時" } },
                            { textus: "tempore", lemma: "tempus", morphologia: "Sust. 3ª dec, N, Abl, Sg", syntaxis: "CCT", translatio: { es: "tiempo", en: "time", zh: "" } },
                            { textus: "principatum", lemma: "principatus", morphologia: "Sust. 4ª dec, M, Acu, Sg", syntaxis: "OD", translatio: { es: "el poder", en: "the chief power", zh: "首領地位" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición", syntaxis: "Nexo", translatio: { es: "en", en: "in", zh: "在" } },
                            { textus: "ciuitate", lemma: "ciuitas", morphologia: "Sust. 3ª dec, F, Abl, Sg", syntaxis: "CCL", translatio: { es: "la ciudad", en: "the state", zh: "邦國中" } },
                            { textus: "optinebat", lemma: "optineo", morphologia: "Verbo, Imp. Ind, 3ª Sg", syntaxis: "Verbo", translatio: { es: "ostentaba", en: "held", zh: "擔任" } },
                            { textus: "ac", lemma: "ac", morphologia: "Conjunción", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "並" } },
                            { textus: "maxime", lemma: "maxime", morphologia: "Adverbio", syntaxis: "CCM", translatio: { es: "muy", en: "very", zh: "非常" } },
                            { textus: "plebi", lemma: "plebs", morphologia: "Sust. 5ª dec, F, Dat, Sg", syntaxis: "Dativo ('para la plebe')", translatio: { es: "a la plebe", en: "with the common people", zh: "受平民" } },
                            { textus: "acceptus", lemma: "acceptus", morphologia: "Adj. 1ª/2ª dec, M, Nom, Sg", syntaxis: "Atributo", translatio: { es: "aceptado", en: "popular", zh: "愛戴" } },
                            { textus: "erat", lemma: "sum", morphologia: "Verbo, Imp. Ind, 3ª Sg", syntaxis: "Verbo", translatio: { es: "era", en: "was", zh: "" } },
                            { textus: "ut", lemma: "ut", morphologia: "Conjunción", syntaxis: "Nexo (completivo)", translatio: { es: "para que", en: "to", zh: "讓他" } },
                            { textus: "idem", lemma: "idem", morphologia: "Pronombre, N, Acu, Sg", syntaxis: "OD", translatio: { es: "lo mismo", en: "the same thing", zh: "同樣的事情" } },
                            { textus: "conaretur", lemma: "conor", morphologia: "Verbo Dep., Imp. Subj, 3ª Sg", syntaxis: "Verbo", translatio: { es: "intentara", en: "attempt", zh: "嘗試" } },
                            { textus: "persuadet", lemma: "persuadeo", morphologia: "Verbo, Pres. Ind, 3ª Sg", syntaxis: "Verbo", translatio: { es: "persuade", en: "he persuades", zh: "說服" } },
                            { textus: "eique", lemma: "is-que", morphologia: "Pronombre+Nexo", syntaxis: "OI", translatio: { es: "y a él", en: "and to him", zh: "並給他" } },
                            { textus: "filiam", lemma: "filiam", morphologia: "Sust. 1ª dec, F, Acu, Sg", syntaxis: "OD", translatio: { es: "a su hija", en: "his daughter", zh: "女兒" } },
                            { textus: "suam", lemma: "suus", morphologia: "Adj. posesivo, F, Acu, Sg", syntaxis: "Atributo", translatio: { es: "suya", en: "his own", zh: "自己的" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición", syntaxis: "Nexo", translatio: { es: "en", en: "in", zh: "作為" } },
                            { textus: "matrimonium", lemma: "matrimonium", morphologia: "Sust. 2ª dec, N, Acu, Sg", syntaxis: "CC Finalidad", translatio: { es: "matrimonio", en: "marriage", zh: "婚姻" } },
                            { textus: "dat", lemma: "do", morphologia: "Verbo, Pres. Ind, 3ª Sg", syntaxis: "Verbo", translatio: { es: "da", en: "gives", zh: "嫁給" } }
                        ],
                        ordo_syntacticus: "Estructura paralela: [Orgetorix (S)] [persuadet (V) Castico (OI) [ut occuparet... (Sub. Completiva)]] itemque [persuadet (V) Dumnorigi (OI) [ut conaretur... (Sub. Completiva)]] et [dat (V) ei (OI) filiam (OD)].",
                        notae: "Oración extremadamente larga y compleja. César utiliza aposiciones y cláusulas de relativo para añadir mucha información sobre Cástico y Dumnórige antes de indicar la acción principal.",
                        translationes: {
                            es: "En ese viaje, persuade a Cástico, hijo de Catamantaledes, sécuano, cuyo padre había obtenido el reino entre los sécuanos durante muchos años y había sido llamado 'amigo' por el senado del pueblo romano, para que ocupara en su ciudad el reino que su padre había tenido antes; y del mismo modo persuade a Dumnórige, eduo, hermano de Diviciaco, que en ese tiempo ostentaba el poder en la ciudad y era muy aceptado por la plebe, para que intentara lo mismo, y le da a su propia hija en matrimonio.",
                            en: "On that journey, he persuades Casticus, son of Catamantaloedes, a Sequan, whose father had held the kingship among the Sequani for many years and had been called 'friend' by the senate of the Roman people, to seize the kingship in his own state, which his father had held before; and likewise he persuades Dumnorix, an Aeduan, the brother of Diviciacus, who at that time held the chief power in the state and was very popular with the common people, to attempt the same thing, and gives him his own daughter in marriage.",
                            zh: "在那次行程中，他說服了塞夸尼人卡斯蒂庫斯（卡塔曼塔洛德斯之子），其父曾在塞夸尼人中統治多年，並被羅馬元老院稱為“羅馬人民之友”，讓他在自己的邦國中奪取其父曾擁有的王權；同樣地，他也說服了愛杜依人杜姆諾里格斯（狄維基亞庫斯之弟），他當時在邦國中擔任首領，深受平民愛戴，讓他嘗試同樣的事情，並將自己的女兒嫁給他。"
                        }
                    },
                    {
                        id_orationis: 'o19',
                        original_lat: "Perfacile factu esse illis probat conata perficere, propterea quod ipse suae ciuitatis imperium obtenturus esset: non esse dubium quin totius Galliae plurimum Heluetii possent; se suis copiis suoque exercitu illis regna conciliaturum confirmat.",
                        verba: [
                            { textus: "Perfacile", lemma: "perfacilis", morphologia: "Adj. 3ª dec, N, Nom/Acu, Sg", syntaxis: "Atributo en Oración de Infinitivo", translatio: { es: "muy fácil", en: "very easy", zh: "輕而易舉的" } },
                            { textus: "factu", lemma: "facio", morphologia: "Supino, Abl, Sg", syntaxis: "Ablativo de Respecto ('de hacer')", translatio: { es: "de hacer", en: "to do", zh: "事" } },
                            { textus: "esse", lemma: "sum", morphologia: "Verbo, Pres. Inf. Act", syntaxis: "Verbo en Oración de Infinitivo", translatio: { es: "ser", en: "was", zh: "是" } },
                            { textus: "illis", lemma: "ille", morphologia: "Pronombre, M, Dat, Pl", syntaxis: "Objeto Indirecto", translatio: { es: "a ellos", en: "to them", zh: "向他們" } },
                            { textus: "probat", lemma: "probo", morphologia: "Verbo, Pres. Ind, 3ª Sg", syntaxis: "Verbo Principal ('demuestra')", translatio: { es: "demuestra", en: "He proves", zh: "他證明" } },
                            { textus: "conata", lemma: "conatum", morphologia: "Sust. 2ª dec, N, Acu, Pl", syntaxis: "Objeto Directo de 'perficere'", translatio: { es: "los intentos", en: "their attempts", zh: "企圖" } },
                            { textus: "perficere", lemma: "perficio", morphologia: "Verbo, Pres. Inf. Act", syntaxis: "Sujeto en Oración de Infinitivo", translatio: { es: "llevar a cabo", en: "to accomplish", zh: "完成" } },
                            { textus: "propterea", lemma: "propterea", morphologia: "Adverbio", syntaxis: "Nexo causal", translatio: { es: "por esto", en: "for this reason", zh: "因此" } },
                            { textus: "quod", lemma: "quod", morphologia: "Conjunción", syntaxis: "Nexo", translatio: { es: "porque", en: "because", zh: "因為" } },
                            { textus: "ipse", lemma: "ipse", morphologia: "Pronombre, M, Nom, Sg", syntaxis: "Sujeto", translatio: { es: "él mismo", en: "he himself", zh: "他自己" } },
                            { textus: "suae", lemma: "suus", morphologia: "Adj. posesivo, F, Gen, Sg", syntaxis: "Atributo", translatio: { es: "de su", en: "of his own", zh: "自己的" } },
                            { textus: "ciuitatis", lemma: "ciuitas", morphologia: "Sust. 3ª dec, F, Gen, Sg", syntaxis: "CN", translatio: { es: "ciudad", en: "state", zh: "邦國的" } },
                            { textus: "imperium", lemma: "imperium", morphologia: "Sust. 2ª dec, N, Acu, Sg", syntaxis: "OD", translatio: { es: "el poder", en: "the supreme power", zh: "統治權" } },
                            { textus: "obtenturus", lemma: "obtineo", morphologia: "Participio Fut. Act, M, Nom, Sg", syntaxis: "Parte de perífrasis verbal", translatio: { es: "a punto de obtener", en: "about to obtain", zh: "即將獲得" } },
                            { textus: "esset", lemma: "sum", morphologia: "Verbo, Imp. Subj, 3ª Sg", syntaxis: "Verbo", translatio: { es: "estaba", en: "was", zh: "" } },
                            { textus: "non", lemma: "non", morphologia: "Adverbio", syntaxis: "Negación", translatio: { es: "no", en: "no", zh: "不" } },
                            { textus: "esse", lemma: "sum", morphologia: "Verbo, Pres. Inf. Act", syntaxis: "Verbo", translatio: { es: "haber", en: "was", zh: "是" } },
                            { textus: "dubium", lemma: "dubius", morphologia: "Adj. 2ª dec, N, Nom/Acu, Sg", syntaxis: "Atributo", translatio: { es: "duda", en: "doubt", zh: "疑問" } },
                            { textus: "quin", lemma: "quin", morphologia: "Conjunción", syntaxis: "Nexo", translatio: { es: "de que", en: "that", zh: "ว่า" } },
                            { textus: "totius", lemma: "totus", morphologia: "Adj. pronominal, F, Gen, Sg", syntaxis: "Atributo", translatio: { es: "de toda", en: "of all", zh: "整個" } },
                            { textus: "Galliae", lemma: "Gallia", morphologia: "Sust. 1ª dec, F, Gen, Sg", syntaxis: "Genitivo partitivo", translatio: { es: "la Galia", en: "Gaul", zh: "高盧的" } },
                            { textus: "plurimum", lemma: "multum", morphologia: "Adverbio, Superlativo", syntaxis: "Modificador", translatio: { es: "muchísimo", en: "the most", zh: "最強大的" } },
                            { textus: "Heluetii", lemma: "Heluetii", morphologia: "Sust. 2ª dec, M, Nom, Pl", syntaxis: "Sujeto", translatio: { es: "los helvecios", en: "the Helvetii", zh: "赫爾維蒂人" } },
                            { textus: "possent", lemma: "possum", morphologia: "Verbo, Imp. Subj, 3ª Pl", syntaxis: "Verbo", translatio: { es: "podían", en: "were powerful", zh: "是" } },
                            { textus: "se", lemma: "sui", morphologia: "Pronombre reflexivo, Acu, Sg", syntaxis: "Sujeto de Infinitivo", translatio: { es: "él", en: "he", zh: "他" } },
                            { textus: "suis", lemma: "suus", morphologia: "Adj. posesivo, F, Abl, Pl", syntaxis: "Atributo", translatio: { es: "con sus", en: "with his own", zh: "用自己的" } },
                            { textus: "copiis", lemma: "copia", morphologia: "Sust. 1ª dec, F, Abl, Pl", syntaxis: "Ablativo Instrumental", translatio: { es: "tropas", en: "forces", zh: "部隊" } },
                            { textus: "suoque", lemma: "suus-que", morphologia: "Adj. posesivo + Nexo", syntaxis: "Atributo", translatio: { es: "y con su", en: "and his own", zh: "和自己的" } },
                            { textus: "exercitu", lemma: "exercitus", morphologia: "Sust. 4ª dec, M, Abl, Sg", syntaxis: "Ablativo Instrumental", translatio: { es: "ejército", en: "army", zh: "軍隊" } },
                            { textus: "illis", lemma: "ille", morphologia: "Pronombre, M, Dat, Pl", syntaxis: "OI", translatio: { es: "a ellos", en: "for them", zh: "為他們" } },
                            { textus: "regna", lemma: "regnum", morphologia: "Sust. 2ª dec, N, Acu, Pl", syntaxis: "OD", translatio: { es: "los reinos", en: "the kingdoms", zh: "王國" } },
                            { textus: "conciliaturum", lemma: "concilio", morphologia: "Participio Fut. Act, Acu, Sg", syntaxis: "Parte de perífrasis verbal", translatio: { es: "conseguiría", en: "would secure", zh: "贏得" } },
                            { textus: "confirmat", lemma: "confirmo", morphologia: "Verbo, Pres. Ind, 3ª Sg", syntaxis: "Verbo Principal", translatio: { es: "asegura", en: "he affirms", zh: "保證" } }
                        ],
                        ordo_syntacticus: "[Él (S)] [probat (V) illis (OI) [perficere conata (S) esse perfacile factu (Atributo) (Oración Infinitivo 1)]] propterea quod...; [Él (S)] [confirmat (V) [non esse dubium quin... (Oración Infinitivo 2)] et [se... conciliaturum [esse] (Oración Infinitivo 3)]].",
                        notae: "Esta oración contiene una cascada de discurso indirecto. Orgetórige 'probat' (demuestra) y 'confirmat' (asegura) varias cosas, todas expresadas mediante oraciones de infinitivo.",
                        translationes: {
                            es: "Les demuestra que llevar a cabo sus intentos era muy fácil de hacer, porque él mismo estaba a punto de obtener el poder de su propia ciudad; (dice que) no había duda de que los helvecios eran los más poderosos de toda la Galia; asegura que él, con sus propias tropas y su propio ejército, les conseguiría los reinos.",
                            en: "He proves to them that to accomplish their attempts was a very easy thing to do, because he himself was about to obtain the supreme power of his own state; (he says that) there was no doubt that the Helvetii were the most powerful of all Gaul; he affirms that he, with his own forces and his own army, would secure the kingdoms for them.",
                            zh: "他向他們證明，完成他們的企圖是輕而易舉的事，因為他自己即將獲得他自己邦國的統治權；（他說）毫無疑問，赫爾維蒂人是全高盧最強大的；他保證他會用自己的部隊和軍隊為他們贏得王國。"
                        }
                    },
                    {
                        id_orationis: 'o20',
                        original_lat: "Hac oratione adducti inter se fidem et ius iurandum dant et regno occupato per tres potentissimos ac firmissimos populos totius Galliae sese potiri posse sperant.",
                        verba: [
                            { textus: "Hac", lemma: "hic", morphologia: "Pronombre-Adj. demost, F, Abl, Sg", syntaxis: "Atributo de 'oratione'", translatio: { es: "Por este", en: "By this", zh: "受此" } },
                            { textus: "oratione", lemma: "oratio", morphologia: "Sust. 3ª dec, F, Abl, Sg", syntaxis: "Ablativo de Causa/Instrumento", translatio: { es: "discurso", en: "speech", zh: "番言論" } },
                            { textus: "adducti", lemma: "adduco", morphologia: "Participio Perf. Pas, M, Nom, Pl", syntaxis: "Participio concertado con el sujeto (elíptico)", translatio: { es: "inducidos", en: "Influenced", zh: "的影響" } },
                            { textus: "inter", lemma: "inter", morphologia: "Preposición", syntaxis: "Nexo (rige Acusativo)", translatio: { es: "entre", en: "to", zh: "彼此" } },
                            { textus: "se", lemma: "sui", morphologia: "Pronombre reflexivo, Acu, Pl", syntaxis: "Complemento ('entre sí')", translatio: { es: "sí", en: "each other", zh: "" } },
                            { textus: "fidem", lemma: "fides", morphologia: "Sust. 5ª dec, F, Acu, Sg", syntaxis: "Objeto Directo", translatio: { es: "garantía", en: "a pledge", zh: "宣誓" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "和" } },
                            { textus: "ius", lemma: "ius", morphologia: "Sust. 3ª dec, N, Acu, Sg", syntaxis: "Objeto Directo", translatio: { es: "juramento", en: "an oath", zh: "盟約" } },
                            { textus: "iurandum", lemma: "iuro", morphologia: "Gerundivo (lexicalizado con ius), N, Acu, Sg", syntaxis: "Atributo de 'ius' ('juramento')", translatio: { es: "", en: "", zh: "" } },
                            { textus: "dant", lemma: "do", morphologia: "Verbo, Pres. Ind, 3ª Pl", syntaxis: "Verbo Principal", translatio: { es: "se dan", en: "they give", zh: "結盟" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "並" } },
                            { textus: "regno", lemma: "regnum", morphologia: "Sust. 2ª dec, N, Abl, Sg", syntaxis: "Sujeto del Ablativo Absoluto", translatio: { es: "el poder", en: "the kingship", zh: "王權" } },
                            { textus: "occupato", lemma: "occupo", morphologia: "Participio Perf. Pas, N, Abl, Sg", syntaxis: "Participio del Ablativo Absoluto", translatio: { es: "una vez ocupado", en: "with... seized", zh: "奪取後" } },
                            { textus: "per", lemma: "per", morphologia: "Preposición", syntaxis: "Nexo (rige Acusativo)", translatio: { es: "por medio de", en: "through", zh: "通過" } },
                            { textus: "tres", lemma: "tres", morphologia: "Adj. numeral, M, Acu, Pl", syntaxis: "Atributo de 'populos'", translatio: { es: "tres", en: "three", zh: "三個" } },
                            { textus: "potentissimos", lemma: "potens", morphologia: "Adj. 3ª dec, M, Acu, Pl, Superlativo", syntaxis: "Atributo de 'populos'", translatio: { es: "muy poderosos", en: "very powerful", zh: "最強大的" } },
                            { textus: "ac", lemma: "ac", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "、" } },
                            { textus: "firmissimos", lemma: "firmus", morphologia: "Adj. 1ª/2ª dec, M, Acu, Pl, Superlativo", syntaxis: "Atributo de 'populos'", translatio: { es: "muy firmes", en: "very strong", zh: "最穩固的" } },
                            { textus: "populos", lemma: "populus", morphologia: "Sust. 2ª dec, M, Acu, Pl", syntaxis: "Complemento de 'per'", translatio: { es: "pueblos", en: "peoples", zh: "民族" } },
                            { textus: "totius", lemma: "totus", morphologia: "Adj. pronominal, F, Gen, Sg", syntaxis: "Atributo de 'Galliae'", translatio: { es: "de toda", en: "of all", zh: "整個" } },
                            { textus: "Galliae", lemma: "Gallia", morphologia: "Sust. 1ª dec, F, Gen, Sg", syntaxis: "Complemento del Nombre", translatio: { es: "la Galia", en: "Gaul", zh: "高盧的" } },
                            { textus: "sese", lemma: "sui", morphologia: "Pronombre reflexivo, Acu, Pl", syntaxis: "Sujeto de la Oración de Infinitivo", translatio: { es: "ellos", en: "they", zh: "他們" } },
                            { textus: "potiri", lemma: "potior", morphologia: "Verbo Deponente, Pres. Inf", syntaxis: "Verbo en Oración de Infinitivo", translatio: { es: "apoderarse", en: "gain possession", zh: "統治" } },
                            { textus: "posse", lemma: "possum", morphologia: "Verbo, Pres. Inf. Act", syntaxis: "Verbo en Oración de Infinitivo", translatio: { es: "poder", en: "to be able", zh: "能" } },
                            { textus: "sperant", lemma: "spero", morphologia: "Verbo, Pres. Ind, 3ª Pl", syntaxis: "Verbo Principal", translatio: { es: "esperan", en: "they hope", zh: "希望" } }
                        ],
                        ordo_syntacticus: "[Ellos (S elíptico), adducti..., dant (V1) fidem... inter se] et [sperant (V2) [sese posse potiri totius Galliae (Oración de Infinitivo-OD)] [regno occupato (Ablativo Absoluto)]...].",
                        notae: "'Ius iurandum' es una expresión fija para 'juramento'. El ablativo absoluto 'regno occupato' (una vez tomado el poder) establece la condición para la esperanza que se describe a continuación.",
                        translationes: {
                            es: "Inducidos por este discurso, se dan entre sí garantía y juramento y, una vez ocupado el poder, esperan poder apoderarse de toda la Galia por medio de tres pueblos muy poderosos y muy firmes.",
                            en: "Influenced by this speech, they give a pledge and an oath to each other and, with the kingship seized, they hope to be able to gain possession of all Gaul through three very powerful and very strong peoples.",
                            zh: "受此番言論的影響，他們彼此宣誓結盟，並希望在奪取王權後，能通過三個最強大、最穩固的民族來統治整個高盧。"
                        }
                    }
                ]
            }
        ]
    }
};

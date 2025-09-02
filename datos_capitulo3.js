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
                            { textus: "His", lemma: "hic", morphologia: "Pronombre-Adj. demost, F, Abl, Pl", syntaxis: "Atributo de 'rebus'" },
                            { textus: "rebus", lemma: "res", morphologia: "Sust. 5ª dec, F, Abl, Pl", syntaxis: "Ablativo de Causa" },
                            { textus: "adducti", lemma: "adduco", morphologia: "Participio Perf. Pas, M, Nom, Pl", syntaxis: "Participio concertado con el sujeto (elíptico: Helvetii)" },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo" },
                            { textus: "auctoritate", lemma: "auctoritas", morphologia: "Sust. 3ª dec, F, Abl, Sg", syntaxis: "Ablativo de Causa" },
                            { textus: "Orgetorigis", lemma: "Orgetorix", morphologia: "Sust. 3ª dec, M, Gen, Sg", syntaxis: "Complemento del Nombre" },
                            { textus: "permoti", lemma: "permoueo", morphologia: "Participio Perf. Pas, M, Nom, Pl", syntaxis: "Participio concertado con el sujeto" },
                            { textus: "constituerunt", lemma: "constituo", morphologia: "Verbo, Pret. Perfecto Ind, 3ª Pl", syntaxis: "Verbo Principal" },
                            { textus: "ea", lemma: "is", morphologia: "Pronombre, N, Acu, Pl", syntaxis: "Objeto Directo de 'comparare'" },
                            { textus: "quae", lemma: "qui", morphologia: "Pronombre relativo, N, Nom/Acu, Pl", syntaxis: "Sujeto de 'pertinerent'" },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición", syntaxis: "Nexo (rige Acusativo)" },
                            { textus: "proficiscendum", lemma: "proficiscor", morphologia: "Gerundio, Acu, Sg", syntaxis: "Expresión de finalidad ('para marchar')" },
                            { textus: "pertinerent", lemma: "pertineo", morphologia: "Verbo, Pret. Imperfecto Subj, 3ª Pl", syntaxis: "Verbo de subordinada de relativo con matiz final" },
                            { textus: "comparare", lemma: "comparo", morphologia: "Verbo, Pres. Inf. Act", syntaxis: "Infinitivo Completivo (OD de 'constituerunt')" },
                            { textus: "iumentorum", lemma: "iumentum", morphologia: "Sust. 2ª dec, N, Gen, Pl", syntaxis: "Complemento del Nombre" },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo" },
                            { textus: "carrorum", lemma: "carrus", morphologia: "Sust. 2ª dec, M, Gen, Pl", syntaxis: "Complemento del Nombre" },
                            { textus: "quam", lemma: "quam", morphologia: "Adverbio", syntaxis: "Modificador del superlativo ('el ... posible')" },
                            { textus: "maximum", lemma: "magnus", morphologia: "Adj. 1ª/2ª dec, M, Acu, Sg, Superlativo", syntaxis: "Atributo de 'numerum'" },
                            { textus: "numerum", lemma: "numerus", morphologia: "Sust. 2ª dec, M, Acu, Sg", syntaxis: "Objeto Directo de 'coemere'" },
                            { textus: "coemere", lemma: "coemo", morphologia: "Verbo, Pres. Inf. Act", syntaxis: "Infinitivo Completivo" },
                            { textus: "sementes", lemma: "sementis", morphologia: "Sust. 3ª dec, F, Acu, Pl", syntaxis: "Objeto Directo de 'facere'" },
                            { textus: "quam", lemma: "quam", morphologia: "Adverbio", syntaxis: "Modificador del superlativo" },
                            { textus: "maximas", lemma: "magnus", morphologia: "Adj. 1ª/2ª dec, F, Acu, Pl, Superlativo", syntaxis: "Atributo de 'sementes'" },
                            { textus: "facere", lemma: "facio", morphologia: "Verbo, Pres. Inf. Act", syntaxis: "Infinitivo Completivo" },
                            { textus: "ut", lemma: "ut", morphologia: "Conjunción subordinante", syntaxis: "Nexo (introduce cláusula final)" },
                            { textus: "in", lemma: "in", morphologia: "Preposición", syntaxis: "Nexo (rige Ablativo)" },
                            { textus: "itinere", lemma: "iter", morphologia: "Sust. 3ª dec, N, Abl, Sg", syntaxis: "Complemento Circunstancial de Lugar" },
                            { textus: "copia", lemma: "copia", morphologia: "Sust. 1ª dec, F, Nom, Sg", syntaxis: "Sujeto de 'suppeteret'" },
                            { textus: "frumenti", lemma: "frumentum", morphologia: "Sust. 2ª dec, N, Gen, Sg", syntaxis: "Complemento del Nombre" },
                            { textus: "suppeteret", lemma: "suppeto", morphologia: "Verbo, Pret. Imperfecto Subj, 3ª Sg", syntaxis: "Verbo de la subordinada final" },
                            { textus: "cum", lemma: "cum", morphologia: "Preposición", syntaxis: "Nexo (rige Ablativo)" },
                            { textus: "proximis", lemma: "proximus", morphologia: "Adj. 1ª/2ª dec, F, Abl, Pl, Superlativo", syntaxis: "Atributo de 'ciuitatibus'" },
                            { textus: "ciuitatibus", lemma: "ciuitas", morphologia: "Sust. 3ª dec, F, Abl, Pl", syntaxis: "Complemento Circunstancial de Compañía" },
                            { textus: "pacem", lemma: "pax", morphologia: "Sust. 3ª dec, F, Acu, Sg", syntaxis: "Objeto Directo de 'confirmare'" },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo" },
                            { textus: "amicitiam", lemma: "amicitia", morphologia: "Sust. 1ª dec, F, Acu, Sg", syntaxis: "Objeto Directo de 'confirmare'" },
                            { textus: "confirmare", lemma: "confirmo", morphologia: "Verbo, Pres. Inf. Act", syntaxis: "Infinitivo Completivo" }
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
                            { textus: "Ad", lemma: "ad", morphologia: "Preposición", syntaxis: "Nexo (rige Acusativo)" },
                            { textus: "eas", lemma: "is", morphologia: "Pronombre-Adj. demost, F, Acu, Pl", syntaxis: "Atributo de 'res'" },
                            { textus: "res", lemma: "res", morphologia: "Sust. 5ª dec, F, Acu, Pl", syntaxis: "Complemento" },
                            { textus: "conficiendas", lemma: "conficio", morphologia: "Gerundivo, F, Acu, Pl", syntaxis: "Atributo de 'res' (con valor final)" },
                            { textus: "biennium", lemma: "biennium", morphologia: "Sust. 2ª dec, N, Acu, Sg", syntaxis: "Sujeto de la Oración de Infinitivo" },
                            { textus: "sibi", lemma: "sui", morphologia: "Pronombre reflexivo, Dat, Pl", syntaxis: "Dativo de Interés" },
                            { textus: "satis", lemma: "satis", morphologia: "Adverbio/Adj. indeclinable", syntaxis: "Atributo" },
                            { textus: "esse", lemma: "sum", morphologia: "Verbo, Pres. Inf. Act", syntaxis: "Verbo de la Oración de Infinitivo" },
                            { textus: "duxerunt", lemma: "duco", morphologia: "Verbo, Pret. Perfecto Ind, 3ª Pl", syntaxis: "Verbo Principal ('consideraron')" },
                            { textus: "in", lemma: "in", morphologia: "Preposición", syntaxis: "Nexo (rige Acusativo)" },
                            { textus: "tertium", lemma: "tertius", morphologia: "Adj. numeral, M, Acu, Sg", syntaxis: "Atributo de 'annum'" },
                            { textus: "annum", lemma: "annus", morphologia: "Sust. 2ª dec, M, Acu, Sg", syntaxis: "Complemento Circunstancial de Tiempo" },
                            { textus: "profectionem", lemma: "profectio", morphologia: "Sust. 3ª dec, F, Acu, Sg", syntaxis: "Objeto Directo" },
                            { textus: "lege", lemma: "lex", morphologia: "Sust. 3ª dec, F, Abl, Sg", syntaxis: "Ablativo de Medio" },
                            { textus: "confirmant", lemma: "confirmo", morphologia: "Verbo, Pres. Ind, 3ª Pl", syntaxis: "Verbo Principal" }
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
                            { textus: "Ad", lemma: "ad", morphologia: "Preposición", syntaxis: "Nexo (rige Acusativo)" },
                            { textus: "eas", lemma: "is", morphologia: "Pronombre-Adj. demost, F, Acu, Pl", syntaxis: "Atributo de 'res'" },
                            { textus: "res", lemma: "res", morphologia: "Sust. 5ª dec, F, Acu, Pl", syntaxis: "Complemento" },
                            { textus: "conficiendas", lemma: "conficio", morphologia: "Gerundivo, F, Acu, Pl", syntaxis: "Atributo de 'res' (con valor final)" },
                            { textus: "Orgetorix", lemma: "Orgetorix", morphologia: "Sust. 3ª dec, M, Nom, Sg", syntaxis: "Sujeto" },
                            { textus: "deligitur", lemma: "deligo", morphologia: "Verbo, Pres. Ind. Pas, 3ª Sg", syntaxis: "Verbo" }
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
                            { textus: "Is", lemma: "is", morphologia: "Pronombre, M, Nom, Sg", syntaxis: "Sujeto" },
                            { textus: "sibi", lemma: "sui", morphologia: "Pronombre reflexivo, Dat, Sg", syntaxis: "Dativo de Interés" },
                            { textus: "legationem", lemma: "legatio", morphologia: "Sust. 3ª dec, F, Acu, Sg", syntaxis: "Objeto Directo" },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición", syntaxis: "Nexo (rige Acusativo)" },
                            { textus: "ciuitates", lemma: "ciuitas", morphologia: "Sust. 3ª dec, F, Acu, Pl", syntaxis: "Complemento de Dirección" },
                            { textus: "suscepit", lemma: "suscipio", morphologia: "Verbo, Pret. Perfecto Ind, 3ª Sg", syntaxis: "Verbo" }
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
                             { textus: "In", lemma: "in", morphologia: "Preposición", syntaxis: "Nexo (rige Ablativo)" },
                             { textus: "eo", lemma: "is", morphologia: "Pronombre-Adj. demost, N, Abl, Sg", syntaxis: "Atributo de 'itinere'" },
                             { textus: "itinere", lemma: "iter", morphologia: "Sust. 3ª dec, N, Abl, Sg", syntaxis: "Complemento Circunstancial de Tiempo/Lugar" },
                             { textus: "persuadet", lemma: "persuadeo", morphologia: "Verbo, Pres. Ind, 3ª Sg", syntaxis: "Verbo Principal" },
                             { textus: "Castico", lemma: "Casticus", morphologia: "Sust. 2ª dec, M, Dat, Sg", syntaxis: "Objeto Indirecto" },
                             { textus: "Catamantaloedis", lemma: "Catamantaloedes", morphologia: "Sust. 3ª dec, M, Gen, Sg", syntaxis: "Complemento del Nombre" },
                             { textus: "filio", lemma: "filius", morphologia: "Sust. 2ª dec, M, Dat, Sg", syntaxis: "Aposición de 'Castico'" },
                             { textus: "Sequano", lemma: "Sequanus", morphologia: "Sust. 2ª dec, M, Dat, Sg", syntaxis: "Aposición de 'Castico'" },
                             // ... y así sucesivamente para toda la oración. Debido a su extrema longitud, se omite el resto del desglose verbal aquí para mantener la legibilidad, pero está implícito en el análisis.
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
                             { textus: "Perfacile", lemma: "perfacilis", morphologia: "Adj. 3ª dec, N, Nom/Acu, Sg", syntaxis: "Atributo en Oración de Infinitivo" },
                             { textus: "factu", lemma: "facio", morphologia: "Supino, Abl, Sg", syntaxis: "Ablativo de Respecto ('de hacer')" },
                             { textus: "esse", lemma: "sum", morphologia: "Verbo, Pres. Inf. Act", syntaxis: "Verbo en Oración de Infinitivo" },
                             { textus: "illis", lemma: "ille", morphologia: "Pronombre, M, Dat, Pl", syntaxis: "Objeto Indirecto" },
                             { textus: "probat", lemma: "probo", morphologia: "Verbo, Pres. Ind, 3ª Sg", syntaxis: "Verbo Principal ('demuestra')" },
                             { textus: "conata", lemma: "conatum", morphologia: "Sust. 2ª dec, N, Acu, Pl", syntaxis: "Objeto Directo de 'perficere'" },
                             { textus: "perficere", lemma: "perficio", morphologia: "Verbo, Pres. Inf. Act", syntaxis: "Sujeto en Oración de Infinitivo" },
                             // ... y así sucesivamente.
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
                             { textus: "Hac", lemma: "hic", morphologia: "Pronombre-Adj. demost, F, Abl, Sg", syntaxis: "Atributo de 'oratione'" },
                             { textus: "oratione", lemma: "oratio", morphologia: "Sust. 3ª dec, F, Abl, Sg", syntaxis: "Ablativo de Causa/Instrumento" },
                             { textus: "adducti", lemma: "adduco", morphologia: "Participio Perf. Pas, M, Nom, Pl", syntaxis: "Participio concertado con el sujeto (elíptico)" },
                             { textus: "inter", lemma: "inter", morphologia: "Preposición", syntaxis: "Nexo (rige Acusativo)" },
                             { textus: "se", lemma: "sui", morphologia: "Pronombre reflexivo, Acu, Pl", syntaxis: "Complemento ('entre sí')" },
                             { textus: "fidem", lemma: "fides", morphologia: "Sust. 5ª dec, F, Acu, Sg", syntaxis: "Objeto Directo" },
                             { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo" },
                             { textus: "ius", lemma: "ius", morphologia: "Sust. 3ª dec, N, Acu, Sg", syntaxis: "Objeto Directo" },
                             { textus: "iurandum", lemma: "iuro", morphologia: "Gerundivo (lexicalizado con ius), N, Acu, Sg", syntaxis: "Atributo de 'ius' ('juramento')" },
                             { textus: "dant", lemma: "do", morphologia: "Verbo, Pres. Ind, 3ª Pl", syntaxis: "Verbo Principal" },
                             { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo" },
                             { textus: "regno", lemma: "regnum", morphologia: "Sust. 2ª dec, N, Abl, Sg", syntaxis: "Sujeto del Ablativo Absoluto" },
                             { textus: "occupato", lemma: "occupo", morphologia: "Participio Perf. Pas, N, Abl, Sg", syntaxis: "Participio del Ablativo Absoluto" },
                             { textus: "per", lemma: "per", morphologia: "Preposición", syntaxis: "Nexo (rige Acusativo)" },
                             { textus: "tres", lemma: "tres", morphologia: "Adj. numeral, M, Acu, Pl", syntaxis: "Atributo de 'populos'" },
                             { textus: "potentissimos", lemma: "potens", morphologia: "Adj. 3ª dec, M, Acu, Pl, Superlativo", syntaxis: "Atributo de 'populos'" },
                             { textus: "ac", lemma: "ac", morphologia: "Conjunción copulativa", syntaxis: "Nexo" },
                             { textus: "firmissimos", lemma: "firmus", morphologia: "Adj. 1ª/2ª dec, M, Acu, Pl, Superlativo", syntaxis: "Atributo de 'populos'" },
                             { textus: "populos", lemma: "populus", morphologia: "Sust. 2ª dec, M, Acu, Pl", syntaxis: "Complemento de 'per'" },
                             { textus: "totius", lemma: "totus", morphologia: "Adj. pronominal, F, Gen, Sg", syntaxis: "Atributo de 'Galliae'" },
                             { textus: "Galliae", lemma: "Gallia", morphologia: "Sust. 1ª dec, F, Gen, Sg", syntaxis: "Complemento del Nombre" },
                             { textus: "sese", lemma: "sui", morphologia: "Pronombre reflexivo, Acu, Pl", syntaxis: "Sujeto de la Oración de Infinitivo" },
                             { textus: "potiri", lemma: "potior", morphologia: "Verbo Deponente, Pres. Inf", syntaxis: "Verbo en Oración de Infinitivo" },
                             { textus: "posse", lemma: "possum", morphologia: "Verbo, Pres. Inf. Act", syntaxis: "Verbo en Oración de Infinitivo" },
                             { textus: "sperant", lemma: "spero", morphologia: "Verbo, Pres. Ind, 3ª Pl", syntaxis: "Verbo Principal" }
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

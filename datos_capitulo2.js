const corpus = {
    titulus_principalis: "De Bello Gallico, I, 2",
    auctor: "C. Iulius Caesar",
    titulus_secundarius: {
        es: "La Conspiración de Orgetórix",
        en: "The Conspiracy of Orgetorix",
        zh: "奧爾格托里克斯的陰謀"
    },
    introductio: {
        es: {
            titulus: "Introducción al Capítulo 2",
            contentus: `<p>Este capítulo presenta a Orgetórix, el noble helvecio cuya ambición desata el conflicto. César detalla su plan para unificar a la nobleza, persuadir a su pueblo para emigrar en masa y las razones geográficas que, según él, hacían inevitable esta búsqueda de un territorio más amplio.</p>`
        },
        en: {
            titulus: "Introduction to Chapter 2",
            contentus: `<p>This chapter introduces Orgetorix, the Helvetian noble whose ambition ignites the conflict. Caesar details his plan to unify the nobility, persuade his people to migrate en masse, and the geographical reasons that, in his view, made this quest for a larger territory inevitable.</p>`
        },
        zh: {
            titulus: "第 2 章介紹",
            contentus: `<p>本章介紹了赫爾維蒂貴族奧爾格托里克斯，他的野心點燃了衝突的導火線。凱撒詳細描述了他團結貴族、說服其人民大規模遷徙的計劃，以及在他看來，地理因素如何使這場尋求更廣闊領土的行動變得不可避免。</p>`
        }
    },
    textus: {
        id: 2,
        capitula: [
            {
                id_capituli: 2,
                orationes: [
                    {
                        id_orationis: 'o9',
                        original_lat: "Apud Heluetios longe nobilissimus fuit et ditissimus Orgetorix.",
                        verba: [
                            { textus: "Apud", lemma: "apud", morphologia: "Preposición", syntaxis: "Nexo (rige Acusativo)", translatio: { es: "Entre", en: "Among", zh: "在...之中" } },
                            { textus: "Heluetios", lemma: "Heluetii", morphologia: "Sust. 2ª dec, M, Acu, Pl", syntaxis: "Complemento Circunstancial de Lugar ('entre')", translatio: { es: "los helvecios", en: "the Helvetii", zh: "赫爾維蒂人" } },
                            { textus: "longe", lemma: "longe", morphologia: "Adverbio", syntaxis: "Modificador del superlativo ('con mucho')", translatio: { es: "con mucho", en: "by far", zh: "遠遠地" } },
                            { textus: "nobilissimus", lemma: "nobilis", morphologia: "Adj. 3ª dec, M, Nom, Sg, Superlativo", syntaxis: "Predicativo del Sujeto", translatio: { es: "el más noble", en: "the noblest", zh: "最高貴的" } },
                            { textus: "fuit", lemma: "sum", morphologia: "Verbo, Pret. Perfecto Ind, 3ª Sg", syntaxis: "Verbo Copulativo", translatio: { es: "fue", en: "was", zh: "是" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "和" } },
                            { textus: "ditissimus", lemma: "diues", morphologia: "Adj. 3ª dec, M, Nom, Sg, Superlativo", syntaxis: "Predicativo del Sujeto", translatio: { es: "el más rico", en: "the richest", zh: "最富有的" } },
                            { textus: "Orgetorix", lemma: "Orgetorix", morphologia: "Sust. 3ª dec, M, Nom, Sg", syntaxis: "Sujeto", translatio: { es: "Orgetórige", en: "Orgetorix", zh: "奧爾格托里克斯" } }
                        ],
                        ordo_syntacticus: "[Orgetorix (S) fuit (V) longe nobilissimus et ditissimus (PVO)] [apud Heluetios (CCL)].",
                        notae: "",
                        translationes: {
                            es: "Entre los helvecios fue, con mucho, el más noble y el más rico Orgetórige.",
                            en: "Among the Helvetii, by far the noblest and richest was Orgetorix.",
                            zh: "在赫爾維蒂人中，奧爾格托里克斯是目前為止最高貴和最富有的人。"
                        }
                    },
                    {
                        id_orationis: 'o10',
                        original_lat: "Is, M. Messala et M. Pisone consulibus, regni cupiditate inductus coniurationem nobilitatis fecit et ciuitati persuasit ut de finibus suis cum omnibus copiis exirent: perfacile esse, cum uirtute omnibus praestarent, totius Galliae imperio potiri.",
                        verba: [
                            { textus: "Is", lemma: "is", morphologia: "Pronombre, M, Nom, Sg", syntaxis: "Sujeto", translatio: { es: "Él", en: "He", zh: "他" } },
                            { textus: "M.", lemma: "Marcus", morphologia: "Praenomen, M, Abl, Sg", syntaxis: "Sujeto del Ablativo Absoluto", translatio: { es: "Marco", en: "Marcus", zh: "馬爾庫斯" } },
                            { textus: "Messala", lemma: "Messala", morphologia: "Sust. propio, M, Abl, Sg", syntaxis: "Sujeto del Ablativo Absoluto", translatio: { es: "Mésala", en: "Messala", zh: "梅薩拉" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "和" } },
                            { textus: "M.", lemma: "Marcus", morphologia: "Praenomen, M, Abl, Sg", syntaxis: "Sujeto del Ablativo Absoluto", translatio: { es: "Marco", en: "Marcus", zh: "馬爾庫斯" } },
                            { textus: "Pisone", lemma: "Piso", morphologia: "Sust. propio, M, Abl, Sg", syntaxis: "Sujeto del Ablativo Absoluto", translatio: { es: "Pisón", en: "Piso", zh: "皮索" } },
                            { textus: "consulibus", lemma: "consul", morphologia: "Sust. 3ª dec, M, Abl, Pl", syntaxis: "Predicativo del Ablativo Absoluto (temporal)", translatio: { es: "siendo cónsules", en: "during the consulship of", zh: "當執政官時" } },
                            { textus: "regni", lemma: "regnum", morphologia: "Sust. 2ª dec, N, Gen, Sg", syntaxis: "Complemento del Nombre (de 'cupiditate')", translatio: { es: "del reino", en: "for kingship", zh: "王權的" } },
                            { textus: "cupiditate", lemma: "cupiditas", morphologia: "Sust. 3ª dec, F, Abl, Sg", syntaxis: "Ablativo de Causa", translatio: { es: "por el deseo", en: "by a desire", zh: "由於渴望" } },
                            { textus: "inductus", lemma: "induco", morphologia: "Participio Perf. Pas, M, Nom, Sg", syntaxis: "Participio concertado con el sujeto 'Is'", translatio: { es: "inducido", en: "induced", zh: "被引誘" } },
                            { textus: "coniurationem", lemma: "coniuratio", morphologia: "Sust. 3ª dec, F, Acu, Sg", syntaxis: "Objeto Directo (de 'fecit')", translatio: { es: "una conspiración", en: "a conspiracy", zh: "一個陰謀" } },
                            { textus: "nobilitatis", lemma: "nobilitas", morphologia: "Sust. 3ª dec, F, Gen, Sg", syntaxis: "Complemento del Nombre (de 'coniurationem')", translatio: { es: "de la nobleza", en: "of the nobility", zh: "貴族的" } },
                            { textus: "fecit", lemma: "facio", morphologia: "Verbo, Pret. Perfecto Ind, 3ª Sg", syntaxis: "Verbo Principal", translatio: { es: "hizo", en: "formed", zh: "發動了" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "和" } },
                            { textus: "ciuitati", lemma: "ciuitas", morphologia: "Sust. 3ª dec, F, Dat, Sg", syntaxis: "Objeto Indirecto (de 'persuasit')", translatio: { es: "a la ciudadanía", en: "the citizenry", zh: "向公民" } },
                            { textus: "persuasit", lemma: "persuadeo", morphologia: "Verbo, Pret. Perfecto Ind, 3ª Sg", syntaxis: "Verbo Principal", translatio: { es: "persuadió", en: "persuaded", zh: "說服了" } },
                            { textus: "ut", lemma: "ut", morphologia: "Conjunción subordinante", syntaxis: "Nexo (introduce una completiva de mandato)", translatio: { es: "para que", en: "to", zh: "以便" } },
                            { textus: "de", lemma: "de", morphologia: "Preposición", syntaxis: "Nexo (rige Ablativo)", translatio: { es: "de / desde", en: "from", zh: "從" } },
                            { textus: "finibus", lemma: "finis", morphologia: "Sust. 3ª dec, M, Abl, Pl", syntaxis: "Complemento Circunstancial de Origen", translatio: { es: "su territorio", en: "their territory", zh: "他們的領土" } },
                            { textus: "suis", lemma: "suus", morphologia: "Adj. posesivo, M, Abl, Pl", syntaxis: "Atributo de 'finibus'", translatio: { es: "suyo", en: "their", zh: "他們的" } },
                            { textus: "cum", lemma: "cum", morphologia: "Preposición", syntaxis: "Nexo (rige Ablativo)", translatio: { es: "con", en: "with", zh: "與" } },
                            { textus: "omnibus", lemma: "omnis", morphologia: "Adj. 3ª dec, F, Abl, Pl", syntaxis: "Atributo de 'copiis'", translatio: { es: "todas", en: "all", zh: "所有的" } },
                            { textus: "copiis", lemma: "copia", morphologia: "Sust. 1ª dec, F, Abl, Pl", syntaxis: "Complemento Circunstancial de Compañía", translatio: { es: "sus tropas", en: "their forces", zh: "部隊" } },
                            { textus: "exirent", lemma: "exeo", morphologia: "Verbo, Pret. Imperfecto Subj, 3ª Pl", syntaxis: "Verbo de la subordinada", translatio: { es: "salieran", en: "leave", zh: "離開" } },
                            { textus: "perfacile", lemma: "perfacilis", morphologia: "Adj. 3ª dec, N, Nom/Acu, Sg", syntaxis: "Atributo (en la oración de infinitivo)", translatio: { es: "muy fácil", en: "very easy", zh: "非常容易" } },
                            { textus: "esse", lemma: "sum", morphologia: "Verbo, Pres. Inf. Act", syntaxis: "Verbo (de la oración de infinitivo)", translatio: { es: "era", en: "it was", zh: "是" } },
                            { textus: "cum", lemma: "cum", morphologia: "Conjunción subordinante", syntaxis: "Nexo (introduce una causal/concesiva)", translatio: { es: "puesto que", en: "since", zh: "因為" } },
                            { textus: "uirtute", lemma: "uirtus", morphologia: "Sust. 3ª dec, F, Abl, Sg", syntaxis: "Ablativo de Especificación", translatio: { es: "en valor", en: "in courage", zh: "在勇氣上" } },
                            { textus: "omnibus", lemma: "omnis", morphologia: "Adj. 3ª dec, M, Dat, Pl", syntaxis: "Objeto Indirecto (de 'praestarent')", translatio: { es: "a todos", en: "everyone", zh: "所有人" } },
                            { textus: "praestarent", lemma: "praesto", morphologia: "Verbo, Pret. Imperfecto Subj, 3ª Pl", syntaxis: "Verbo de la subordinada causal", translatio: { es: "aventajaban", en: "they surpassed", zh: "他們超越" } },
                            { textus: "totius", lemma: "totus", morphologia: "Adj. pronominal, F, Gen, Sg", syntaxis: "Atributo de 'Galliae'", translatio: { es: "de toda", en: "of all", zh: "整個的" } },
                            { textus: "Galliae", lemma: "Gallia", morphologia: "Sust. 1ª dec, F, Gen, Sg", syntaxis: "Complemento del Nombre (de 'imperio')", translatio: { es: "de la Galia", en: "Gaul", zh: "高盧的" } },
                            { textus: "imperio", lemma: "imperium", morphologia: "Sust. 2ª dec, N, Abl, Sg", syntaxis: "Complemento de Régimen (de 'potiri')", translatio: { es: "del mando", en: "of the command", zh: "統治權" } },
                            { textus: "potiri", lemma: "potior", morphologia: "Verbo Deponente, Pres. Inf", syntaxis: "Sujeto (de 'esse')", translatio: { es: "apoderarse", en: "to gain possession", zh: "奪取" } }
                        ],
                        ordo_syntacticus: "Complejo: [Is (S)... fecit (V1) et persuasit (V2)] con ablativo absoluto temporal, participio concertado, y dos objetos para 'persuasit': una cláusula con 'ut' y una oración de infinitivo.",
                        notae: "Oración compleja que incluye un ablativo absoluto, una oración subordinada final (ut...) y una oración de infinitivo (perfacile esse...) que funciona como objeto directo del verbo 'persuasit'.",
                        translationes: {
                            es: "Éste, siendo cónsules M. Mesala y M. Pisón, inducido por el deseo de reinar, hizo una conspiración de la nobleza y persuadió a la ciudadanía para que salieran de su territorio con todas sus tropas, (diciendo que) era muy fácil, puesto que aventajaban a todos en valor, apoderarse del mando de toda la Galia.",
                            en: "He, during the consulship of M. Messala and M. Piso, induced by a desire for kingship, formed a conspiracy of the nobility and persuaded the citizenry to leave their territory with all their forces, (saying that) it was very easy, since they surpassed everyone in courage, to gain possession of the command of all Gaul.",
                            zh: "在馬爾庫斯·梅薩拉和馬爾庫斯·皮索擔任執政官期間，他出於對王權的渴望，發動了一場貴族陰謀，並說服了全體公民帶上所有部隊離開他們的領土，（他說）這非常容易，因為他們在勇氣上超越了所有人，從而可以奪取整個高盧的統治權。"
                        }
                    },
                    {
                        id_orationis: 'o11',
                        original_lat: "Id hoc facilius eis persuasit, quod undique loci natura Heluetii continentur: una ex parte flumine Rheno latissimo atque altissimo, qui agrum Heluetium a Germanis diuidit; altera ex parte monte Iura altissimo, qui est inter Sequanos et Heluetios; tertia lacu Lemanno et flumine Rhodano, qui prouinciam nostram ab Heluetiis diuidit.",
                        verba: [
                            { textus: "Id", lemma: "is", morphologia: "Pronombre, N, Acu, Sg", syntaxis: "Objeto Directo ('aquello')", translatio: { es: "De aquello", en: "this", zh: "這件事" } },
                            { textus: "hoc", lemma: "hic", morphologia: "Pronombre, N, Abl, Sg", syntaxis: "Ablativo de Causa ('por esto')", translatio: { es: "por esto", en: "for this reason", zh: "因此" } },
                            { textus: "facilius", lemma: "facile", morphologia: "Adverbio, Comparativo", syntaxis: "Modificador verbal", translatio: { es: "más fácilmente", en: "more easily", zh: "更容易地" } },
                            { textus: "eis", lemma: "is", morphologia: "Pronombre, M, Dat, Pl", syntaxis: "Objeto Indirecto", translatio: { es: "les", en: "them", zh: "他們" } },
                            { textus: "persuasit", lemma: "persuadeo", morphologia: "Verbo, Pret. Perfecto Ind, 3ª Sg", syntaxis: "Verbo Principal", translatio: { es: "les persuadió", en: "he persuaded", zh: "他說服了" } },
                            { textus: "quod", lemma: "quod", morphologia: "Conjunción subordinante", syntaxis: "Nexo causal", translatio: { es: "porque", en: "because", zh: "因為" } },
                            { textus: "undique", lemma: "undique", morphologia: "Adverbio", syntaxis: "Complemento Circunstancial de Lugar", translatio: { es: "por todas partes", en: "on all sides", zh: "四面八方" } },
                            { textus: "loci", lemma: "locus", morphologia: "Sust. 2ª dec, M, Gen, Sg", syntaxis: "Complemento del Nombre (de 'natura')", translatio: { es: "del lugar", en: "of their location", zh: "地方的" } },
                            { textus: "natura", lemma: "natura", morphologia: "Sust. 1ª dec, F, Abl, Sg", syntaxis: "Ablativo de Causa/Instrumento", translatio: { es: "por la naturaleza", en: "by the nature", zh: "由於自然" } },
                            { textus: "Heluetii", lemma: "Heluetii", morphologia: "Sust. 2ª dec, M, Nom, Pl", syntaxis: "Sujeto (de 'continentur')", translatio: { es: "los helvecios", en: "the Helvetii", zh: "赫爾維蒂人" } },
                            { textus: "continentur", lemma: "contineo", morphologia: "Verbo, Pres. Ind. Pas, 3ª Pl", syntaxis: "Verbo de la subordinada causal", translatio: { es: "están limitados", en: "are confined", zh: "被限制" } },
                            { textus: "una", lemma: "unus", morphologia: "Adj. numeral, F, Abl, Sg", syntaxis: "Atributo de 'parte'", translatio: { es: "por una", en: "on one", zh: "從一" } },
                            { textus: "ex", lemma: "ex", morphologia: "Preposición", syntaxis: "Nexo (rige Ablativo)", translatio: { es: "de", en: "from", zh: "從" } },
                            { textus: "parte", lemma: "pars", morphologia: "Sust. 3ª dec, F, Abl, Sg", syntaxis: "Complemento Circunstancial de Lugar", translatio: { es: "parte", en: "side", zh: "邊" } },
                            { textus: "flumine", lemma: "flumen", morphologia: "Sust. 3ª dec, N, Abl, Sg", syntaxis: "Ablativo Instrumental (el límite)", translatio: { es: "por el río", en: "by the river", zh: "被河" } },
                            { textus: "Rheno", lemma: "Rhenus", morphologia: "Sust. 2ª dec, M, Abl, Sg", syntaxis: "Aposición a 'flumine'", translatio: { es: "Rin", en: "Rhine", zh: "萊茵" } },
                            { textus: "latissimo", lemma: "latus", morphologia: "Adj. 1ª/2ª dec, M, Abl, Sg, Superlativo", syntaxis: "Atributo de 'Rheno'", translatio: { es: "anchísimo", en: "very wide", zh: "非常寬的" } },
                            { textus: "atque", lemma: "atque", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "和" } },
                            { textus: "altissimo", lemma: "altus", morphologia: "Adj. 1ª/2ª dec, M, Abl, Sg, Superlativo", syntaxis: "Atributo de 'Rheno'", translatio: { es: "profundísimo", en: "very deep", zh: "非常深的" } },
                            { textus: "qui", lemma: "qui", morphologia: "Pronombre relativo, M, Nom, Sg", syntaxis: "Sujeto (de 'diuidit')", translatio: { es: "que", en: "which", zh: "它" } },
                            { textus: "agrum", lemma: "ager", morphologia: "Sust. 2ª dec, M, Acu, Sg", syntaxis: "Objeto Directo", translatio: { es: "el territorio", en: "the territory", zh: "土地" } },
                            { textus: "Heluetium", lemma: "Heluetius", morphologia: "Adj. 1ª/2ª dec, M, Acu, Sg", syntaxis: "Atributo de 'agrum'", translatio: { es: "helvecio", en: "Helvetian", zh: "赫爾維蒂的" } },
                            { textus: "a", lemma: "a", morphologia: "Preposición", syntaxis: "Nexo (rige Ablativo)", translatio: { es: "de", en: "from", zh: "從" } },
                            { textus: "Germanis", lemma: "Germani", morphologia: "Sust. 2ª dec, M, Abl, Pl", syntaxis: "Complemento de Separación", translatio: { es: "los germanos", en: "the Germans", zh: "日耳曼人" } },
                            { textus: "diuidit", lemma: "diuido", morphologia: "Verbo, Pres. Ind, 3ª Sg", syntaxis: "Verbo de la subordinada de relativo", translatio: { es: "divide", en: "separates", zh: "分開" } },
                            { textus: "altera", lemma: "alter", morphologia: "Adj. pronominal, F, Abl, Sg", syntaxis: "Atributo de 'parte'", translatio: { es: "por otra", en: "on another", zh: "從另一" } },
                            { textus: "ex", lemma: "ex", morphologia: "Preposición", syntaxis: "Nexo (rige Ablativo)", translatio: { es: "de", en: "from", zh: "從" } },
                            { textus: "parte", lemma: "pars", morphologia: "Sust. 3ª dec, F, Abl, Sg", syntaxis: "Complemento Circunstancial de Lugar", translatio: { es: "parte", en: "side", zh: "邊" } },
                            { textus: "monte", lemma: "mons", morphologia: "Sust. 3ª dec, M, Abl, Sg", syntaxis: "Ablativo Instrumental (el límite)", translatio: { es: "por el monte", en: "by the mountain range", zh: "被山" } },
                            { textus: "Iura", lemma: "Iura", morphologia: "Sust. 1ª dec, M, Abl, Sg", syntaxis: "Aposición a 'monte'", translatio: { es: "Jura", en: "Jura", zh: "汝拉" } },
                            { textus: "altissimo", lemma: "altus", morphologia: "Adj. 1ª/2ª dec, M, Abl, Sg, Superlativo", syntaxis: "Atributo de 'monte'", translatio: { es: "altísimo", en: "very high", zh: "非常高的" } },
                            { textus: "qui", lemma: "qui", morphologia: "Pronombre relativo, M, Nom, Sg", syntaxis: "Sujeto (de 'est')", translatio: { es: "que", en: "which", zh: "它" } },
                            { textus: "est", lemma: "sum", morphologia: "Verbo, Pres. Ind, 3ª Sg", syntaxis: "Verbo de la subordinada de relativo", translatio: { es: "está", en: "is", zh: "是" } },
                            { textus: "inter", lemma: "inter", morphologia: "Preposición", syntaxis: "Nexo (rige Acusativo)", translatio: { es: "entre", en: "between", zh: "在...之間" } },
                            { textus: "Sequanos", lemma: "Sequani", morphologia: "Sust. 2ª dec, M, Acu, Pl", syntaxis: "Complemento de 'inter'", translatio: { es: "los sécuanos", en: "the Sequani", zh: "塞夸尼人" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "和" } },
                            { textus: "Heluetios", lemma: "Heluetii", morphologia: "Sust. 2ª dec, M, Acu, Pl", syntaxis: "Complemento de 'inter'", translatio: { es: "los helvecios", en: "the Helvetii", zh: "赫爾維蒂人" } },
                            { textus: "tertia", lemma: "tertius", morphologia: "Adj. numeral, F, Abl, Sg", syntaxis: "Ablativo ('en tercer lugar', con 'parte' elidido)", translatio: { es: "por la tercera", en: "on the third", zh: "從第三邊" } },
                            { textus: "lacu", lemma: "lacus", morphologia: "Sust. 4ª dec, M, Abl, Sg", syntaxis: "Ablativo Instrumental (el límite)", translatio: { es: "por el lago", en: "by Lake", zh: "被湖" } },
                            { textus: "Lemanno", lemma: "Lemannus", morphologia: "Sust. 2ª dec, M, Abl, Sg", syntaxis: "Aposición a 'lacu'", translatio: { es: "Lemán", en: "Geneva", zh: "萊芒" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "和" } },
                            { textus: "flumine", lemma: "flumen", morphologia: "Sust. 3ª dec, N, Abl, Sg", syntaxis: "Ablativo Instrumental (el límite)", translatio: { es: "por el río", en: "by the river", zh: "被河" } },
                            { textus: "Rhodano", lemma: "Rhodanus", morphologia: "Sust. 2ª dec, M, Abl, Sg", syntaxis: "Aposición a 'flumine'", translatio: { es: "Ródano", en: "Rhone", zh: "羅訥" } },
                            { textus: "qui", lemma: "qui", morphologia: "Pronombre relativo, M, Nom, Sg", syntaxis: "Sujeto (de 'diuidit')", translatio: { es: "que", en: "which", zh: "它" } },
                            { textus: "prouinciam", lemma: "prouincia", morphologia: "Sust. 1ª dec, F, Acu, Sg", syntaxis: "Objeto Directo", translatio: { es: "la provincia", en: "the province", zh: "行省" } },
                            { textus: "nostram", lemma: "noster", morphologia: "Adj. posesivo, F, Acu, Sg", syntaxis: "Atributo de 'prouinciam'", translatio: { es: "nuestra", en: "our", zh: "我們的" } },
                            { textus: "ab", lemma: "ab", morphologia: "Preposición", syntaxis: "Nexo (rige Ablativo)", translatio: { es: "de", en: "from", zh: "從" } },
                            { textus: "Heluetiis", lemma: "Heluetii", morphologia: "Sust. 2ª dec, M, Abl, Pl", syntaxis: "Complemento de Separación", translatio: { es: "los helvecios", en: "the Helvetii", zh: "赫爾維蒂人" } },
                            { textus: "diuidit", lemma: "diuido", morphologia: "Verbo, Pres. Ind, 3ª Sg", syntaxis: "Verbo de la subordinada de relativo", translatio: { es: "divide", en: "separates", zh: "分開" } }
                        ],
                        ordo_syntacticus: "[La naturaleza del lugar (S implícito) persuasit (V) id (OD) eis (OI) facilius (CCM) hoc (CCCausa)], quod [Heluetii (S) continentur...]",
                        notae: "El sujeto de 'persuasit' es la idea o situación anterior, 'la naturaleza del lugar'. Es una construcción impersonal en espíritu.",
                        translationes: {
                            es: "Les persuadió de aquello tanto más fácilmente por esto: porque los helvecios están contenidos por todas partes por la naturaleza del lugar: por una parte, por el río Rin, anchísimo y profundísimo, que divide el campo helvecio de los germanos; por otra parte, por el altísimo monte Jura, que está entre los sécuanos y los helvecios; por la tercera, por el lago Lemán y el río Ródano, que divide nuestra provincia de los helvecios.",
                            en: "He persuaded them of this all the more easily for this reason: because the Helvetii are confined on all sides by the nature of their location: on one side by the very wide and very deep Rhine river, which separates the Helvetian territory from the Germans; on another side by the very high Jura mountain range, which is between the Sequani and the Helvetii; on the third side by Lake Geneva and the Rhone river, which separates our province from the Helvetii.",
                            zh: "他更容易地說服了他們，原因是：赫爾維蒂人四面都受到地形的限制：一面是寬闊而深邃的萊茵河，將赫爾維蒂地區與日耳曼人分開；另一面是高聳的汝拉山脈，位於塞夸尼人和赫爾維蒂人之間；第三面是萊芒湖和羅訥河，將我們的行省與赫爾維蒂人分開。"
                        }
                    },
                    {
                        id_orationis: 'o12',
                        original_lat: "His rebus fiebat ut et minus late uagarentur et minus facile finitimis bellum inferre possent; qua ex parte homines bellandi cupidi magno dolore adficiebantur.",
                        verba: [
                            { textus: "His", lemma: "hic", morphologia: "Pronombre-Adj. demost, F, Abl, Pl", syntaxis: "Atributo de 'rebus'", translatio: { es: "Por estas", en: "Because of these", zh: "由於這些" } },
                            { textus: "rebus", lemma: "res", morphologia: "Sust. 5ª dec, F, Abl, Pl", syntaxis: "Ablativo de Causa", translatio: { es: "circunstancias", en: "things", zh: "事情" } },
                            { textus: "fiebat", lemma: "fio", morphologia: "Verbo irregular, Pret. Imperfecto Ind, 3ª Sg", syntaxis: "Verbo Principal ('sucedía')", translatio: { es: "sucedía", en: "it happened", zh: "發生" } },
                            { textus: "ut", lemma: "ut", morphologia: "Conjunción subordinante", syntaxis: "Nexo (introduce una completiva de resultado)", translatio: { es: "que", en: "that", zh: "以致於" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo (correlativo 'et...et...')", translatio: { es: "tanto", en: "both", zh: "既" } },
                            { textus: "minus", lemma: "minus", morphologia: "Adverbio", syntaxis: "Modificador de 'late'", translatio: { es: "menos", en: "less", zh: "較少" } },
                            { textus: "late", lemma: "late", morphologia: "Adverbio", syntaxis: "Complemento Circunstancial de Modo", translatio: { es: "extensamente", en: "widely", zh: "廣泛地" } },
                            { textus: "uagarentur", lemma: "uagor", morphologia: "Verbo Deponente, Pret. Imperfecto Subj, 3ª Pl", syntaxis: "Verbo de la subordinada", translatio: { es: "vagaban", en: "they wandered", zh: "他們漫遊" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "como", en: "and", zh: "又" } },
                            { textus: "minus", lemma: "minus", morphologia: "Adverbio", syntaxis: "Modificador de 'facile'", translatio: { es: "menos", en: "less", zh: "較少" } },
                            { textus: "facile", lemma: "facile", morphologia: "Adverbio", syntaxis: "Complemento Circunstancial de Modo", translatio: { es: "fácilmente", en: "easily", zh: "容易地" } },
                            { textus: "finitimis", lemma: "finitimus", morphologia: "Sust. 2ª dec, M, Dat, Pl", syntaxis: "Objeto Indirecto (de 'inferre')", translatio: { es: "a sus vecinos", en: "on their neighbors", zh: "向鄰國" } },
                            { textus: "bellum", lemma: "bellum", morphologia: "Sust. 2ª dec, N, Acu, Sg", syntaxis: "Objeto Directo (de 'inferre')", translatio: { es: "la guerra", en: "war", zh: "戰爭" } },
                            { textus: "inferre", lemma: "infero", morphologia: "Verbo, Pres. Inf. Act", syntaxis: "Infinitivo (con 'possent')", translatio: { es: "hacer", en: "to wage", zh: "發動" } },
                            { textus: "possent", lemma: "possum", morphologia: "Verbo, Pret. Imperfecto Subj, 3ª Pl", syntaxis: "Verbo de la subordinada", translatio: { es: "podían", en: "were able", zh: "能夠" } },
                            { textus: "qua", lemma: "qui", morphologia: "Pronombre relativo, F, Abl, Sg", syntaxis: "Atributo de 'parte'", translatio: { es: "por la cual", en: "for which", zh: "為此" } },
                            { textus: "ex", lemma: "ex", morphologia: "Preposición", syntaxis: "Nexo (rige Ablativo)", translatio: { es: "de", en: "from", zh: "從" } },
                            { textus: "parte", lemma: "pars", morphologia: "Sust. 3ª dec, F, Abl, Sg", syntaxis: "Complemento de Causa ('por esta razón')", translatio: { es: "razón", en: "reason", zh: "原因" } },
                            { textus: "homines", lemma: "homo", morphologia: "Sust. 3ª dec, M, Nom, Pl", syntaxis: "Sujeto (de 'adficiebantur')", translatio: { es: "hombres", en: "men", zh: "人" } },
                            { textus: "bellandi", lemma: "bello", morphologia: "Gerundio, Gen, Sg", syntaxis: "Genitivo Objetivo (de 'cupidi')", translatio: { es: "de guerrear", en: "of waging war", zh: "戰鬥的" } },
                            { textus: "cupidi", lemma: "cupidus", morphologia: "Adj. 1ª/2ª dec, M, Nom, Pl", syntaxis: "Atributo de 'homines'", translatio: { es: "deseosos", en: "fond", zh: "渴望的" } },
                            { textus: "magno", lemma: "magnus", morphologia: "Adj. 1ª/2ª dec, M, Abl, Sg", syntaxis: "Atributo de 'dolore'", translatio: { es: "con gran", en: "with great", zh: "以巨大的" } },
                            { textus: "dolore", lemma: "dolor", morphologia: "Sust. 3ª dec, M, Abl, Sg", syntaxis: "Ablativo Instrumental/Causa", translatio: { es: "dolor", en: "sorrow", zh: "痛苦" } },
                            { textus: "adficiebantur", lemma: "adficio", morphologia: "Verbo, Pret. Imperfecto Ind. Pas, 3ª Pl", syntaxis: "Verbo Principal", translatio: { es: "eran afectados", en: "they were afflicted", zh: "他們感到" } }
                        ],
                        ordo_syntacticus: "[Fiebat (V) [ut... uagarentur et... possent (Subordinada de resultado)]]; [homines cupidi bellandi (S) adficiebantur (V) magno dolore (CC)]...",
                        notae: "",
                        translationes: {
                            es: "Por estas circunstancias, sucedía que vagaban menos extensamente y podían hacer la guerra a sus vecinos con menos facilidad; y por esta razón, [siendo] hombres deseosos de guerrear, se veían afectados por un gran dolor.",
                            en: "Because of these things, it happened that they both wandered less widely and were less easily able to wage war on their neighbors; and for this reason, being men fond of waging war, they were afflicted with great sorrow.",
                            zh: "由於這些情況，結果是他們既不能廣泛地漫遊，也不能輕易地向鄰國發動戰爭；因此，作為一群好戰的人，他們感到非常痛苦。"
                        }
                    },
                    {
                        id_orationis: 'o13',
                        original_lat: "Pro multitudine autem hominum et pro gloria belli atque fortitudinis angustos se fines habere arbitrabantur, qui in longitudinem milia passuum CCXL, in latitudinem CLXXX patebant.",
                        verba: [
                            { textus: "Pro", lemma: "pro", morphologia: "Preposición", syntaxis: "Nexo (rige Ablativo)", translatio: { es: "En proporción a", en: "In proportion to", zh: "與...相比" } },
                            { textus: "multitudine", lemma: "multitudo", morphologia: "Sust. 3ª dec, F, Abl, Sg", syntaxis: "Complemento ('en proporción a')", translatio: { es: "la multitud", en: "their multitude", zh: "數量" } },
                            { textus: "autem", lemma: "autem", morphologia: "Conjunción adversativa", syntaxis: "Nexo", translatio: { es: "por otra parte", en: "moreover", zh: "此外" } },
                            { textus: "hominum", lemma: "homo", morphologia: "Sust. 3ª dec, M, Gen, Pl", syntaxis: "Complemento del Nombre", translatio: { es: "de hombres", en: "of men", zh: "人的" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "和" } },
                            { textus: "pro", lemma: "pro", morphologia: "Preposición", syntaxis: "Nexo (rige Ablativo)", translatio: { es: "en proporción a", en: "for", zh: "與...相比" } },
                            { textus: "gloria", lemma: "gloria", morphologia: "Sust. 1ª dec, F, Abl, Sg", syntaxis: "Complemento ('en proporción a')", translatio: { es: "la gloria", en: "their glory", zh: "榮耀" } },
                            { textus: "belli", lemma: "bellum", morphologia: "Sust. 2ª dec, N, Gen, Sg", syntaxis: "Complemento del Nombre", translatio: { es: "de la guerra", en: "for warfare", zh: "戰爭的" } },
                            { textus: "atque", lemma: "atque", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "和" } },
                            { textus: "fortitudinis", lemma: "fortitudo", morphologia: "Sust. 3ª dec, F, Gen, Sg", syntaxis: "Complemento del Nombre", translatio: { es: "de la valentía", en: "bravery", zh: "勇氣的" } },
                            { textus: "angustos", lemma: "angustus", morphologia: "Adj. 1ª/2ª dec, M, Acu, Pl", syntaxis: "Predicativo del OD (en la oración de infinitivo)", translatio: { es: "estrechos", en: "narrow", zh: "狹窄的" } },
                            { textus: "se", lemma: "sui", morphologia: "Pronombre reflexivo, Acu, Pl", syntaxis: "Sujeto (de la oración de infinitivo)", translatio: { es: "ellos", en: "they", zh: "他們" } },
                            { textus: "fines", lemma: "finis", morphologia: "Sust. 3ª dec, M, Acu, Pl", syntaxis: "Objeto Directo (de 'habere')", translatio: { es: "territorios", en: "borders", zh: "疆域" } },
                            { textus: "habere", lemma: "habeo", morphologia: "Verbo, Pres. Inf. Act", syntaxis: "Verbo (de la oración de infinitivo)", translatio: { es: "tenían", en: "had", zh: "擁有" } },
                            { textus: "arbitrabantur", lemma: "arbitror", morphologia: "Verbo Deponente, Pret. Imperfecto Ind, 3ª Pl", syntaxis: "Verbo Principal", translatio: { es: "consideraban", en: "they thought", zh: "他們認為" } },
                            { textus: "qui", lemma: "qui", morphologia: "Pronombre relativo, M, Nom, Pl", syntaxis: "Sujeto (de 'patebant')", translatio: { es: "que", en: "which", zh: "它們" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición", syntaxis: "Nexo (rige Acusativo)", translatio: { es: "en", en: "in", zh: "在" } },
                            { textus: "longitudinem", lemma: "longitudo", morphologia: "Sust. 3ª dec, F, Acu, Sg", syntaxis: "Complemento de Dirección/Extensión", translatio: { es: "longitud", en: "length", zh: "長度上" } },
                            { textus: "milia", lemma: "milia", morphologia: "Sust. 3ª dec, N, Acu, Pl", syntaxis: "Acusativo de Extensión", translatio: { es: "mil", en: "miles", zh: "英里" } },
                            { textus: "passuum", lemma: "passus", morphologia: "Sust. 4ª dec, M, Gen, Pl", syntaxis: "Genitivo Partitivo", translatio: { es: "pasos", en: "(of paces)", zh: "(步)" } },
                            { textus: "CCXL", lemma: "CCXL", morphologia: "Numeral", syntaxis: "Aposición a 'milia'", translatio: { es: "240", en: "240", zh: "240" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición", syntaxis: "Nexo (rige Acusativo)", translatio: { es: "en", en: "in", zh: "在" } },
                            { textus: "latitudinem", lemma: "latitudo", morphologia: "Sust. 3ª dec, F, Acu, Sg", syntaxis: "Complemento de Dirección/Extensión", translatio: { es: "anchura", en: "width", zh: "寬度上" } },
                            { textus: "CLXXX", lemma: "CLXXX", morphologia: "Numeral", syntaxis: "Acusativo de Extensión (con 'milia passuum' elidido)", translatio: { es: "180", en: "180", zh: "180" } },
                            { textus: "patebant", lemma: "pateo", morphologia: "Verbo, Pret. Imperfecto Ind, 3ª Pl", syntaxis: "Verbo de la subordinada de relativo", translatio: { es: "se extendían", en: "extended", zh: "延伸" } }
                        ],
                        ordo_syntacticus: "[Ellos (S elíptico) arbitrabantur (V)] [se (S) habere (V) angustos fines (OD) (Oración de Infinitivo - OD de arbitrabantur)]...",
                        notae: "",
                        translationes: {
                            es: "Consideraban, por otra parte, que, en proporción a su gran número de hombres y a su gloria guerrera y de valentía, tenían un territorio demasiado estrecho, que se extendía 240 millas en longitud y 180 en anchura.",
                            en: "Moreover, in proportion to their multitude of men and their glory for warfare and bravery, they thought that they had borders that were too narrow, which extended 240 miles in length and 180 in width.",
                            zh: "此外，與他們龐大的人口和在戰爭與勇氣方面的榮耀相比，他們認為自己的疆域過於狹窄，其長度為240英里，寬度為180英里。"
                        }
                    }
                ]
            }
        ]
    }
};

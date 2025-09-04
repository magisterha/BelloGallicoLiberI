const corpus = {
    titulus_principalis: "De Bello Gallico, I, 22",
    auctor: "C. Iulius Caesar",
    titulus_secundarius: {
        es: "El error de Considio frustra el plan de César",
        en: "Considius's Error Thwarts Caesar's Plan",
        zh: "康西迪烏斯的錯誤挫敗了凱撒的計劃"
    },
    introductio: {
        es: {
            titulus: "Introducción al Capítulo 22",
            contentus: `<p>Este capítulo narra el frustrante fracaso de una maniobra militar perfectamente diseñada. Al amanecer, el plan de César está a punto de culminar con éxito: Tito Labieno controla la cima de la montaña y el propio César se acerca al campamento enemigo, ambos sin ser detectados. En el momento crítico, el explorador Publio Considio galopa presa del pánico e informa erróneamente a César de que la cima está ocupada por los enemigos, no por Labieno, afirmando haberlos reconocido por sus insignias galas. Creyendo este falso informe, César aborta el ataque de pinza y repliega sus tropas a una colina cercana. Labieno, obedeciendo estrictamente las órdenes de no atacar hasta ver a las fuerzas de César, permanece inmóvil. Mucho más tarde, se descubre la verdad: el plan había funcionado, pero Considio, aterrorizado, había imaginado lo que no vio, perdiéndose así una oportunidad de oro.</p>`
        },
        en: {
            titulus: "Introduction to Chapter 22",
            contentus: `<p>This chapter narrates the frustrating failure of a perfectly designed military maneuver. At dawn, Caesar's plan is on the verge of successful completion: Titus Labienus controls the mountain summit and Caesar himself is approaching the enemy camp, both undetected. At the critical moment, the scout Publius Considius gallops up in a panic and erroneously informs Caesar that the summit is occupied by the enemy, not Labienus, claiming to have recognized them by their Gallic insignia. Believing this false report, Caesar aborts the pincer attack and withdraws his troops to a nearby hill. Labienus, strictly obeying orders not to attack until seeing Caesar's forces, remains stationary. Much later, the truth is discovered: the plan had worked, but Considius, terrified, had imagined what he did not see, thus losing a golden opportunity.</p>`
        },
        zh: {
            titulus: "第 22 章介紹",
            contentus: `<p>本章敘述了一次精心設計的軍事行動令人沮喪的失敗。黎明時分，凱撒的計劃即將成功完成：提圖斯·拉比努斯控制了山頂，凱撒本人也正在接近敵營，雙方都未被發現。在關鍵時刻，偵察兵普布利烏斯·康西迪烏斯驚慌失措地策馬趕來，錯誤地向凱撒報告說山頂被敵人而非拉比努斯佔領，並聲稱是從他們的高盧徽章認出的。凱撒相信了這份假情報，中止了鉗形攻擊，將部隊撤至附近的山丘。拉比努斯則嚴格遵守在看到凱撒部隊前不得進攻的命令，原地不動。很久以後，真相才被發現：計劃本已成功，但康西迪烏斯因恐懼而產生幻覺，報告了他並未看到的情況，從而錯失了一個黃金機會。</p>`
        }
    },
    textus: {
        id: 22,
        capitula: [
            {
                id_capituli: 22,
                orationes: [
                    {
                        id_orationis: 'o1',
                        original_lat: "Prima luce, cum summus mons a T. Labieno teneretur, ipse ab hostium castris non longius mille et quingentis passibus abesset, neque, ut postea ex captiuis comperit, aut ipsius aduentus aut Labieni cognitus esset, Considius equo admisso ad eum accurrit, dicit montem quem a Labieno occupari uoluerit ab hostibus teneri; id se a Gallicis armis atque insignibus cognouisse.",
                        verba: [
                            { textus: "Prima", lemma: "primus", morphologia: "Adjetivo, ablativo, singular, femenino", syntaxis: "Modificador (de luce)", translatio: { es: "al amanecer", en: "at first", zh: "天剛亮" } },
                            { textus: "luce", lemma: "lux", morphologia: "Sustantivo, ablativo, singular, femenino", syntaxis: "Ablativo de Tiempo", translatio: { es: "", en: "light", zh: "時" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "cum", lemma: "cum", morphologia: "Conjunción", syntaxis: "Nexo (Cum histórico)", translatio: { es: "mientras", en: "when", zh: "當" } },
                            { textus: "summus", lemma: "summus", morphologia: "Adjetivo, nominativo, singular, masculino", syntaxis: "Modificador", translatio: { es: "la cima del", en: "the top of the", zh: "最高的" } },
                            { textus: "mons", lemma: "mons", morphologia: "Sustantivo, nominativo, singular, masculino", syntaxis: "Sujeto", translatio: { es: "monte", en: "mountain", zh: "山頂" } },
                            { textus: "a", lemma: "a", morphologia: "Preposición", syntaxis: "Enlace (Agente)", translatio: { es: "por", en: "by", zh: "被" } },
                            { textus: "T.", lemma: "Titus", morphologia: "Nombre propio, ablativo, singular, masculino", syntaxis: "C. Agente", translatio: { es: "Tito", en: "Titus", zh: "提圖斯" } },
                            { textus: "Labieno", lemma: "Labienus", morphologia: "Nombre propio, ablativo, singular, masculino", syntaxis: "C. Agente", translatio: { es: "Labieno", en: "Labienus", zh: "拉比努斯" } },
                            { textus: "teneretur", lemma: "teneo", morphologia: "Verbo, 3ª p, singular, imperfecto, subjuntivo, pasivo", syntaxis: "Verbo (de subordinada)", translatio: { es: "era ocupada", en: "was being held", zh: "佔據著" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "ipse", lemma: "ipse", morphologia: "Pronombre, nominativo, singular, masculino", syntaxis: "Sujeto", translatio: { es: "él mismo", en: "he himself", zh: "他自己" } },
                            { textus: "ab", lemma: "ab", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "de", en: "from", zh: "離" } },
                            { textus: "hostium", lemma: "hostis", morphologia: "Sustantivo, genitivo, plural, masculino", syntaxis: "C. del Nombre", translatio: { es: "los enemigos", en: "the enemy's", zh: "敵人的" } },
                            { textus: "castris", lemma: "castra", morphologia: "Sustantivo, ablativo, plural, neutro", syntaxis: "C. preposicional", translatio: { es: "del campamento", en: "camp", zh: "營地" } },
                            { textus: "non", lemma: "non", morphologia: "Adverbio", syntaxis: "Negación", translatio: { es: "no", en: "not", zh: "不" } },
                            { textus: "longius", lemma: "longe", morphologia: "Adverbio, comparativo", syntaxis: "Modificador", translatio: { es: "más lejos de", en: "further than", zh: "超過" } },
                            { textus: "mille", lemma: "mille", morphologia: "Adjetivo numeral", syntaxis: "C.C. de Distancia", translatio: { es: "mil", en: "a thousand", zh: "一千" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "五百" } },
                            { textus: "quingentis", lemma: "quingenti", morphologia: "Adjetivo numeral", syntaxis: "C.C. de Distancia", translatio: { es: "quinientos", en: "five hundred", zh: "" } },
                            { textus: "passibus", lemma: "passus", morphologia: "Sustantivo, ablativo, plural, masculino", syntaxis: "Ablativo de comparación", translatio: { es: "pasos", en: "paces", zh: "步" } },
                            { textus: "abesset", lemma: "absum", morphologia: "Verbo, 3ª p, singular, imperfecto, subjuntivo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "distaba", en: "was away", zh: "遠" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "neque", lemma: "neque", morphologia: "Conjunción", syntaxis: "Nexo", translatio: { es: "y", en: "and... not", zh: "而且" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "ut", lemma: "ut", morphologia: "Conjunción", syntaxis: "Nexo (comparativo)", translatio: { es: "como", en: "as", zh: "正如" } },
                            { textus: "postea", lemma: "postea", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "después", en: "afterwards", zh: "後來" } },
                            { textus: "ex", lemma: "ex", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "por", en: "from", zh: "從" } },
                            { textus: "captiuis", lemma: "captiuus", morphologia: "Sustantivo, ablativo, plural, masculino", syntaxis: "C. preposicional", translatio: { es: "los cautivos", en: "the captives", zh: "俘虜" } },
                            { textus: "comperit", lemma: "comperio", morphologia: "Verbo, 3ª p, singular, perfecto, indicativo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "averiguó", en: "he found out", zh: "那裡得知的" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "aut", lemma: "aut", morphologia: "Conjunción", syntaxis: "Nexo (disyuntivo)", translatio: { es: "ni", en: "either", zh: "無論" } },
                            { textus: "ipsius", lemma: "ipse", morphologia: "Pronombre, genitivo, singular, masculino", syntaxis: "C. del Nombre", translatio: { es: "su propia", en: "his own", zh: "他自己的" } },
                            { textus: "aduentus", lemma: "aduentus", morphologia: "Sustantivo, nominativo, singular, masculino", syntaxis: "Sujeto", translatio: { es: "llegada", en: "arrival", zh: "到來" } },
                            { textus: "aut", lemma: "aut", morphologia: "Conjunción", syntaxis: "Nexo (disyuntivo)", translatio: { es: "ni la de", en: "or", zh: "還是" } },
                            { textus: "Labieni", lemma: "Labienus", morphologia: "Nombre propio, genitivo, singular, masculino", syntaxis: "C. del Nombre", translatio: { es: "Labieno", en: "Labienus's", zh: "拉比努斯的" } },
                            { textus: "cognitus", lemma: "cognosco", morphologia: "Verbo, participio, perfecto, pasivo, nominativo, singular, masculino", syntaxis: "Parte del verbo", translatio: { es: "había sido advertida", en: "had been noticed", zh: "都還未被察覺" } },
                            { textus: "esset", lemma: "sum", morphologia: "Verbo, 3ª p, singular, imperfecto, subjuntivo", syntaxis: "Verbo (de subordinada)", translatio: { es: "", en: "", zh: "" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "Considius", lemma: "Considius", morphologia: "Nombre propio, nominativo, singular, masculino", syntaxis: "Sujeto", translatio: { es: "Considio", en: "Considius", zh: "康西迪烏斯" } },
                            { textus: "equo", lemma: "equus", morphologia: "Sustantivo, ablativo, singular, masculino", syntaxis: "Sujeto (de ablativo absoluto)", translatio: { es: "su caballo", en: "his horse", zh: "策馬" } },
                            { textus: "admisso", lemma: "admitto", morphologia: "Verbo, participio, perfecto, pasivo, ablativo, singular, masculino", syntaxis: "Verbo (de ablativo absoluto)", translatio: { es: "espoleado", en: "spurred on", zh: "飛奔" } },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "hacia", en: "to", zh: "到" } },
                            { textus: "eum", lemma: "is", morphologia: "Pronombre, acusativo, singular, masculino", syntaxis: "C. preposicional", translatio: { es: "él", en: "him", zh: "他面前" } },
                            { textus: "accurrit", lemma: "accurro", morphologia: "Verbo, 3ª p, singular, presente, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "corre", en: "runs up", zh: "趕來" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "dicit", lemma: "dico", morphologia: "Verbo, 3ª p, singular, presente, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "dice que", en: "says", zh: "說" } },
                            { textus: "montem", lemma: "mons", morphologia: "Sustantivo, acusativo, singular, masculino", syntaxis: "Sujeto (de infinitiva)", translatio: { es: "el monte", en: "the mountain", zh: "那座山" } },
                            { textus: "quem", lemma: "qui", morphologia: "Pronombre relativo, acusativo, singular, masculino", syntaxis: "Sujeto (de occupari)", translatio: { es: "que", en: "which", zh: "" } },
                            { textus: "a", lemma: "a", morphologia: "Preposición", syntaxis: "Enlace (Agente)", translatio: { es: "por", en: "by", zh: "被" } },
                            { textus: "Labieno", lemma: "Labienus", morphologia: "Nombre propio, ablativo, singular, masculino", syntaxis: "C. Agente", translatio: { es: "Labieno", en: "Labienus", zh: "拉比努斯" } },
                            { textus: "occupari", lemma: "occupo", morphologia: "Verbo, infinitivo, presente, pasivo", syntaxis: "Verbo (de infinitiva)", translatio: { es: "ser ocupado", en: "to be occupied", zh: "佔領" } },
                            { textus: "uoluerit", lemma: "uolo", morphologia: "Verbo, 3ª p, singular, perfecto, subjuntivo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "él había querido", en: "he had wanted", zh: "他（凱撒）曾希望" } },
                            { textus: "ab", lemma: "ab", morphologia: "Preposición", syntaxis: "Enlace (Agente)", translatio: { es: "por", en: "by", zh: "被" } },
                            { textus: "hostibus", lemma: "hostis", morphologia: "Sustantivo, ablativo, plural, masculino", syntaxis: "C. Agente", translatio: { es: "los enemigos", en: "the enemy", zh: "敵人" } },
                            { textus: "teneri", lemma: "teneo", morphologia: "Verbo, infinitivo, presente, pasivo", syntaxis: "Verbo (de infinitiva)", translatio: { es: "está ocupado", en: "is being held", zh: "佔據著" } },
                            { textus: ";", lemma: ";", morphologia: "Puntuación", syntaxis: "Fin de cláusula", translatio: { es: ";", en: ";", zh: "；" } },
                            { textus: "id", lemma: "is", morphologia: "Pronombre, acusativo, singular, neutro", syntaxis: "Objeto Directo", translatio: { es: "que esto", en: "this", zh: "這點" } },
                            { textus: "se", lemma: "sui", morphologia: "Pronombre, acusativo, singular", syntaxis: "Sujeto (de infinitiva)", translatio: { es: "él", en: "he", zh: "他" } },
                            { textus: "a", lemma: "a", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "por", en: "from", zh: "是從" } },
                            { textus: "Gallicis", lemma: "Gallicus", morphologia: "Adjetivo, ablativo, plural, neutro", syntaxis: "Modificador", translatio: { es: "galas", en: "Gallic", zh: "高盧人的" } },
                            { textus: "armis", lemma: "arma", morphologia: "Sustantivo, ablativo, plural, neutro", syntaxis: "C.C. de Medio", translatio: { es: "las armas", en: "arms", zh: "武器" } },
                            { textus: "atque", lemma: "atque", morphologia: "Conjunción", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "和" } },
                            { textus: "insignibus", lemma: "insigne", morphologia: "Sustantivo, ablativo, plural, neutro", syntaxis: "C.C. de Medio", translatio: { es: "insignias", en: "insignia", zh: "徽章" } },
                            { textus: "cognouisse", lemma: "cognosco", morphologia: "Verbo, infinitivo, perfecto, activo", syntaxis: "Verbo (de infinitiva)", translatio: { es: "lo había reconocido", en: "had recognized", zh: "認出的" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Larga oración periódica. Se inicia con un ablativo de tiempo ('Prima luce') y una serie de cláusulas 'cum' históricas que establecen el escenario. La oración principal ('Considius... accurrit, dicit...') contiene un verbo de decir que introduce una larga declaración en estilo indirecto.",
                        notae: "'equo admisso' es un ablativo absoluto idiomático que significa 'a galope tendido'.",
                        translationes: {
                            es: "Al amanecer, mientras la cima del monte era ocupada por T. Labieno, y él mismo no distaba del campamento enemigo más de mil quinientos pasos, y —como después averiguó por los cautivos— ni su propia llegada ni la de Labieno habían sido advertidas, Considio, a galope tendido, corre hacia él y le dice que el monte que él había querido que fuera ocupado por Labieno está ocupado por los enemigos; que él lo había reconocido por las armas e insignias galas.",
                            en: "At first light, when the top of the mountain was being held by Titus Labienus, and he himself was not further than one thousand five hundred paces from the enemy's camp, and—as he afterwards found out from captives—neither his own arrival nor that of Labienus had been noticed, Considius, with his horse spurred on, runs up to him and says that the mountain which he had wanted to be occupied by Labienus is being held by the enemy; that he had recognized this from their Gallic arms and insignia.",
                            zh: "天剛亮時，最高的山頂正由提圖斯·拉比努斯佔據著，凱撒自己離敵營也不過一千五百步遠，而且——正如他後來從俘虜那裡得知的——無論是他自己的到來還是拉比努斯的都還未被察覺。就在這時，康西迪烏斯策馬飛奔到他面前，說他（凱撒）曾希望由拉比努斯佔領的那座山正被敵人佔據著；他說他是從高盧人的武器和徽章認出這點的。"
                        }
                    },
                    {
                        id_orationis: 'o2',
                        original_lat: "Caesar suas copias in proximum collem subducit, aciem instruit.",
                        verba: [
                            { textus: "Caesar", lemma: "Caesar", morphologia: "Sustantivo, nominativo, singular, masculino", syntaxis: "Sujeto", translatio: { es: "César", en: "Caesar", zh: "凱撒" } },
                            { textus: "suas", lemma: "suus", morphologia: "Adjetivo posesivo, acusativo, plural, femenino", syntaxis: "Modificador (de copias)", translatio: { es: "sus", en: "his", zh: "他的" } },
                            { textus: "copias", lemma: "copia", morphologia: "Sustantivo, acusativo, plural, femenino", syntaxis: "Objeto Directo", translatio: { es: "tropas", en: "troops", zh: "部隊" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "a", en: "to", zh: "到" } },
                            { textus: "proximum", lemma: "proximus", morphologia: "Adjetivo, acusativo, singular, masculino, superlativo", syntaxis: "Modificador (de collem)", translatio: { es: "cercana", en: "the nearest", zh: "最近的" } },
                            { textus: "collem", lemma: "collis", morphologia: "Sustantivo, acusativo, singular, masculino", syntaxis: "C. preposicional", translatio: { es: "una colina", en: "hill", zh: "山丘上" } },
                            { textus: "subducit", lemma: "subduco", morphologia: "Verbo, 3ª p, singular, presente, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "retira", en: "withdraws", zh: "撤退" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "aciem", lemma: "acies", morphologia: "Sustantivo, acusativo, singular, femenino", syntaxis: "Objeto Directo", translatio: { es: "la línea de batalla", en: "the line of battle", zh: "並部署" } },
                            { textus: "instruit", lemma: "instruo", morphologia: "Verbo, 3ª p, singular, presente, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "despliega", en: "he draws up", zh: "戰線" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Dos oraciones principales coordinadas por yuxtaposición, con verbos en presente histórico.",
                        notae: "",
                        translationes: {
                            es: "César retira sus tropas a una colina cercana y despliega la línea de batalla.",
                            en: "Caesar withdraws his troops to the nearest hill and draws up the line of battle.",
                            zh: "凱撒將他的部隊撤退到最近的山丘上，並部署戰線。"
                        }
                    },
                    {
                        id_orationis: 'o3',
                        original_lat: "Labienus, ut erat ei praeceptum a Caesare ne proelium committeret, nisi ipsius copiae prope hostium castra uisae essent, ut undique uno tempore in hostes impetus fieret, postquam acies collis occupauit, nostros exspectabat proelioque abstinebat.",
                        verba: [
                            { textus: "Labienus", lemma: "Labienus", morphologia: "Nombre propio, nominativo, singular, masculino", syntaxis: "Sujeto", translatio: { es: "Labieno", en: "Labienus", zh: "拉比努斯" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "ut", lemma: "ut", morphologia: "Conjunción", syntaxis: "Nexo (comparativo)", translatio: { es: "como", en: "as", zh: "由於" } },
                            { textus: "erat", lemma: "sum", morphologia: "Verbo, 3ª p, singular, imperfecto, indicativo", syntaxis: "Verbo (de subordinada)", translatio: { es: "le había sido", en: "it had been", zh: "" } },
                            { textus: "ei", lemma: "is", morphologia: "Pronombre, dativo, singular, masculino", syntaxis: "Objeto Indirecto", translatio: { es: "a él", en: "to him", zh: "他" } },
                            { textus: "praeceptum", lemma: "praecipio", morphologia: "Verbo, participio, perfecto, pasivo, nominativo, singular, neutro", syntaxis: "Verbo (impersonal)", translatio: { es: "ordenado", en: "instructed", zh: "接到" } },
                            { textus: "a", lemma: "a", morphologia: "Preposición", syntaxis: "Enlace (Agente)", translatio: { es: "por", en: "by", zh: "" } },
                            { textus: "Caesare", lemma: "Caesar", morphologia: "Sustantivo, ablativo, singular, masculino", syntaxis: "C. Agente", translatio: { es: "César", en: "Caesar", zh: "凱撒" } },
                            { textus: "ne", lemma: "ne", morphologia: "Conjunción", syntaxis: "Nexo", translatio: { es: "de no", en: "not to", zh: "不要" } },
                            { textus: "proelium", lemma: "proelium", morphologia: "Sustantivo, acusativo, singular, neutro", syntaxis: "Objeto Directo", translatio: { es: "combate", en: "battle", zh: "戰鬥" } },
                            { textus: "committeret", lemma: "committo", morphologia: "Verbo, 3ª p, singular, imperfecto, subjuntivo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "entablar", en: "join", zh: "發起" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "nisi", lemma: "nisi", morphologia: "Conjunción", syntaxis: "Nexo (condicional)", translatio: { es: "a no ser que", en: "unless", zh: "除非" } },
                            { textus: "ipsius", lemma: "ipse", morphologia: "Pronombre, genitivo, singular, masculino", syntaxis: "C. del Nombre", translatio: { es: "sus propias", en: "his own", zh: "他自己的" } },
                            { textus: "copiae", lemma: "copia", morphologia: "Sustantivo, nominativo, plural, femenino", syntaxis: "Sujeto", translatio: { es: "tropas", en: "troops", zh: "部隊" } },
                            { textus: "prope", lemma: "prope", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "cerca de", en: "near", zh: "在敵人" } },
                            { textus: "hostium", lemma: "hostis", morphologia: "Sustantivo, genitivo, plural, masculino", syntaxis: "C. del Nombre", translatio: { es: "los enemigos", en: "the enemy's", zh: "" } },
                            { textus: "castra", lemma: "castra", morphologia: "Sustantivo, acusativo, plural, neutro", syntaxis: "C. preposicional", translatio: { es: "del campamento", en: "camp", zh: "營地附近" } },
                            { textus: "uisae", lemma: "uideo", morphologia: "Verbo, participio, perfecto, pasivo, nominativo, plural, femenino", syntaxis: "Parte del verbo", translatio: { es: "fueran vistas", en: "were seen", zh: "被看見" } },
                            { textus: "essent", lemma: "sum", morphologia: "Verbo, 3ª p, plural, imperfecto, subjuntivo", syntaxis: "Verbo (de subordinada)", translatio: { es: "", en: "", zh: "" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "ut", lemma: "ut", morphologia: "Conjunción", syntaxis: "Nexo (finalidad)", translatio: { es: "para que", en: "so that", zh: "以便" } },
                            { textus: "undique", lemma: "undique", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "por todas partes", en: "from all sides", zh: "從四面八方" } },
                            { textus: "uno", lemma: "unus", morphologia: "Adjetivo, ablativo, singular, neutro", syntaxis: "Modificador", translatio: { es: "al mismo", en: "at one", zh: "在同一" } },
                            { textus: "tempore", lemma: "tempus", morphologia: "Sustantivo, ablativo, singular, neutro", syntaxis: "C.C. de Tiempo", translatio: { es: "tiempo", en: "time", zh: "時間" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "contra", en: "against", zh: "對" } },
                            { textus: "hostes", lemma: "hostis", morphologia: "Sustantivo, acusativo, plural, masculino", syntaxis: "C. preposicional", translatio: { es: "los enemigos", en: "the enemy", zh: "敵人" } },
                            { textus: "impetus", lemma: "impetus", morphologia: "Sustantivo, nominativo, singular, masculino", syntaxis: "Sujeto", translatio: { es: "un ataque", en: "an attack", zh: "發起攻擊" } },
                            { textus: "fieret", lemma: "fio", morphologia: "Verbo, 3ª p, singular, imperfecto, subjuntivo, semideponente", syntaxis: "Verbo (de subordinada)", translatio: { es: "se produjera", en: "might be made", zh: "" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "nostros", lemma: "noster", morphologia: "Pronombre, acusativo, plural, masculino", syntaxis: "Objeto Directo", translatio: { es: "a los nuestros", en: "our men", zh: "等待我方人員" } },
                            { textus: "exspectabat", lemma: "exspecto", morphologia: "Verbo, 3ª p, singular, imperfecto, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "esperaba", en: "was waiting for", zh: "" } },
                            { textus: "proelioque", lemma: "proeliumque", morphologia: "Sustantivo y conjunción, ablativo, singular, neutro", syntaxis: "C.C. de Separación", translatio: { es: "y del combate", en: "and from battle", zh: "並且避免" } },
                            { textus: "abstinebat", lemma: "abstineo", morphologia: "Verbo, 3ª p, singular, imperfecto, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "se abstenía", en: "he was abstaining", zh: "戰鬥" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Oración principal con dos verbos coordinados ('exspectabat proelioque abstinebat'). Contiene una larga serie de cláusulas subordinadas que explican la orden de César: una comparativa ('ut erat... praeceptum'), una completiva negativa ('ne... committeret'), una condicional ('nisi... uisae essent') y una final ('ut... fieret').",
                        notae: "La oración muestra la estricta disciplina de Labieno, quien sigue las órdenes al pie de la letra, incluso cuando la situación podría haberle incitado a actuar.",
                        translationes: {
                            es: "Labieno, como le había sido ordenado por César no entablar combate a no ser que sus propias tropas fueran vistas cerca del campamento enemigo, para que por todas partes y al mismo tiempo se produjera un ataque contra los enemigos, esperaba a los nuestros y se abstenía del combate.",
                            en: "Labienus, as he had been instructed by Caesar not to join battle unless his own troops were seen near the enemy's camp, so that an attack might be made against the enemy from all sides at one time, was waiting for our men and was abstaining from battle.",
                            zh: "拉比努斯由於接到凱撒的命令，除非他自己的部隊在敵營附近被看見，否則不要發起戰鬥，以便能從四面八方在同一時間對敵人發起攻擊，因此他正等待我方人員，並且避免戰鬥。"
                        }
                    },
                    {
                        id_orationis: 'o4',
                        original_lat: "Multo denique die per exploratores Caesar cognouit et montem a suis teneri et Heluetios castra mouisse et Considium timore perterritum quod non uidisset pro uiso sibi renuntiasse.",
                        verba: [
                            { textus: "Multo", lemma: "multus", morphologia: "Adjetivo, ablativo, singular, masculino", syntaxis: "Modificador", translatio: { es: "muy avanzado", en: "late", zh: "直到" } },
                            { textus: "denique", lemma: "denique", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "finalmente", en: "finally", zh: "當天" } },
                            { textus: "die", lemma: "dies", morphologia: "Sustantivo, ablativo, singular, masculino", syntaxis: "Ablativo de Tiempo", translatio: { es: "el día", en: "in the day", zh: "很晚的時候" } },
                            { textus: "per", lemma: "per", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "por medio de", en: "through", zh: "凱撒才" } },
                            { textus: "exploratores", lemma: "explorator", morphologia: "Sustantivo, ablativo, plural, masculino", syntaxis: "C. preposicional", translatio: { es: "los exploradores", en: "scouts", zh: "通過偵察兵" } },
                            { textus: "Caesar", lemma: "Caesar", morphologia: "Sustantivo, nominativo, singular, masculino", syntaxis: "Sujeto", translatio: { es: "César", en: "Caesar", zh: "" } },
                            { textus: "cognouit", lemma: "cognosco", morphologia: "Verbo, 3ª p, singular, perfecto, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "supo", en: "learned", zh: "得知" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción", syntaxis: "Nexo (correlativo)", translatio: { es: "que tanto", en: "both that", zh: "山" } },
                            { textus: "montem", lemma: "mons", morphologia: "Sustantivo, acusativo, singular, masculino", syntaxis: "Sujeto (de infinitiva)", translatio: { es: "el monte", en: "the mountain", zh: "" } },
                            { textus: "a", lemma: "a", morphologia: "Preposición", syntaxis: "Enlace (Agente)", translatio: { es: "por", en: "by", zh: "被" } },
                            { textus: "suis", lemma: "suus", morphologia: "Pronombre, ablativo, plural, masculino", syntaxis: "C. Agente", translatio: { es: "los suyos", en: "his men", zh: "自己人" } },
                            { textus: "teneri", lemma: "teneo", morphologia: "Verbo, infinitivo, presente, pasivo", syntaxis: "Verbo (de infinitiva)", translatio: { es: "era ocupado", en: "was being held", zh: "佔據著" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción", syntaxis: "Nexo (correlativo)", translatio: { es: "como que", en: "and that", zh: "赫爾維蒂人" } },
                            { textus: "Heluetios", lemma: "Heluetii", morphologia: "Sustantivo, acusativo, plural, masculino", syntaxis: "Sujeto (de infinitiva)", translatio: { es: "los helvecios", en: "the Helvetii", zh: "" } },
                            { textus: "castra", lemma: "castra", morphologia: "Sustantivo, acusativo, plural, neutro", syntaxis: "Objeto Directo", translatio: { es: "el campamento", en: "the camp", zh: "已經拔營" } },
                            { textus: "mouisse", lemma: "moueo", morphologia: "Verbo, infinitivo, perfecto, activo", syntaxis: "Verbo (de infinitiva)", translatio: { es: "habían levantado", en: "had moved", zh: "" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción", syntaxis: "Nexo (correlativo)", translatio: { es: "y que", en: "and that", zh: "而康西迪烏斯" } },
                            { textus: "Considium", lemma: "Considius", morphologia: "Nombre propio, acusativo, singular, masculino", syntaxis: "Sujeto (de infinitiva)", translatio: { es: "Considio", en: "Considius", zh: "" } },
                            { textus: "timore", lemma: "timor", morphologia: "Sustantivo, ablativo, singular, masculino", syntaxis: "C.C. de Causa", translatio: { es: "por el miedo", en: "by fear", zh: "因恐懼" } },
                            { textus: "perterritum", lemma: "perterreo", morphologia: "Verbo, participio, perfecto, pasivo, acusativo, singular, masculino", syntaxis: "Participio concertado", translatio: { es: "aterrorizado", en: "terrified", zh: "而驚慌失措" } },
                            { textus: "quod", lemma: "qui", morphologia: "Pronombre relativo, acusativo, singular, neutro", syntaxis: "Objeto Directo", translatio: { es: "lo que", en: "what", zh: "將" } },
                            { textus: "non", lemma: "non", morphologia: "Adverbio", syntaxis: "Negación", translatio: { es: "no", en: "not", zh: "沒" } },
                            { textus: "uidisset", lemma: "uideo", morphologia: "Verbo, 3ª p, singular, pluscuamperfecto, subjuntivo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "había visto", en: "he had seen", zh: "看見的" } },
                            { textus: "pro", lemma: "pro", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "como", en: "as", zh: "當作" } },
                            { textus: "uiso", lemma: "uideo", morphologia: "Verbo, participio, perfecto, pasivo, ablativo, singular, neutro", syntaxis: "C. preposicional", translatio: { es: "visto", en: "seen", zh: "親眼所見" } },
                            { textus: "sibi", lemma: "sui", morphologia: "Pronombre, dativo, singular", syntaxis: "Objeto Indirecto", translatio: { es: "le", en: "to him", zh: "向他" } },
                            { textus: "renuntiasse", lemma: "renuntio", morphologia: "Verbo, infinitivo, perfecto, activo", syntaxis: "Verbo (de infinitiva)", translatio: { es: "había informado", en: "had reported", zh: "報告了" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Oración principal ('Caesar cognouit') cuyo objeto directo es una serie de tres cláusulas de infinitivo coordinadas por 'et... et... et...'.",
                        notae: "'Multo die' es un ablativo de tiempo que significa 'bien entrado el día'. La expresión 'pro viso renuntiare' significa 'informar de algo como si se hubiera visto'.",
                        translationes: {
                            es: "Finalmente, muy avanzado el día, César supo por los exploradores que tanto el monte era ocupado por los suyos, como que los helvecios habían levantado el campamento, y que Considio, aterrorizado por el miedo, le había informado como visto de lo que no había visto.",
                            en: "Finally, late in the day, Caesar learned through scouts that the mountain was being held by his men, and that the Helvetii had moved their camp, and that Considius, terrified by fear, had reported to him as seen what he had not seen.",
                            zh: "直到當天很晚的時候，凱撒才通過偵察兵得知，山正被自己人佔據著，赫爾維蒂人已經拔營，而康西迪烏斯因恐懼而驚慌失措，將他沒看見的當作親眼所見向他報告了。"
                        }
                    },
                    {
                        id_orationis: 'o5',
                        original_lat: "Eo die quo consuerat interuallo hostes sequitur et milia passuum tria ab eorum castris castra ponit.",
                        verba: [
                            { textus: "Eo", lemma: "is", morphologia: "Adjetivo, ablativo, singular, masculino", syntaxis: "Modificador (de die)", translatio: { es: "ese", en: "on that", zh: "那天" } },
                            { textus: "die", lemma: "dies", morphologia: "Sustantivo, ablativo, singular, masculino", syntaxis: "C.C. de Tiempo", translatio: { es: "día", en: "day", zh: "" } },
                            { textus: "quo", lemma: "qui", morphologia: "Pronombre relativo, ablativo, singular, neutro", syntaxis: "Ablativo de Modo", translatio: { es: "con el que", en: "with which", zh: "按照" } },
                            { textus: "consuerat", lemma: "consuesco", morphologia: "Verbo, 3ª p, singular, pluscuamperfecto, indicativo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "había acostumbrado", en: "he had been accustomed", zh: "他慣常的" } },
                            { textus: "interuallo", lemma: "interuallum", morphologia: "Sustantivo, ablativo, singular, neutro", syntaxis: "Ablativo de Modo", translatio: { es: "intervalo", en: "interval", zh: "間隔" } },
                            { textus: "hostes", lemma: "hostis", morphologia: "Sustantivo, acusativo, plural, masculino", syntaxis: "Objeto Directo", translatio: { es: "a los enemigos", en: "the enemy", zh: "追擊敵人" } },
                            { textus: "sequitur", lemma: "sequor", morphologia: "Verbo, 3ª p, singular, presente, indicativo, deponente", syntaxis: "Verbo Principal", translatio: { es: "sigue", en: "he follows", zh: "" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "並且" } },
                            { textus: "milia", lemma: "mille", morphologia: "Sustantivo, acusativo, plural, neutro", syntaxis: "C.C. de Distancia", translatio: { es: "a tres millas", en: "three miles", zh: "三里" } },
                            { textus: "passuum", lemma: "passus", morphologia: "Sustantivo, genitivo, plural, masculino", syntaxis: "Genitivo partitivo", translatio: { es: "de pasos", en: "of paces", zh: "步" } },
                            { textus: "tria", lemma: "tres", morphologia: "Adjetivo numeral, acusativo, plural, neutro", syntaxis: "Modificador (de milia)", translatio: { es: "", en: "", zh: "" } },
                            { textus: "ab", lemma: "ab", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "de", en: "from", zh: "在離" } },
                            { textus: "eorum", lemma: "is", morphologia: "Pronombre, genitivo, plural, masculino", syntaxis: "C. del Nombre", translatio: { es: "su", en: "their", zh: "他們" } },
                            { textus: "castris", lemma: "castra", morphologia: "Sustantivo, ablativo, plural, neutro", syntaxis: "C. preposicional", translatio: { es: "campamento", en: "camp", zh: "營地" } },
                            { textus: "castra", lemma: "castra", morphologia: "Sustantivo, acusativo, plural, neutro", syntaxis: "Objeto Directo", translatio: { es: "su campamento", en: "his camp", zh: "的地方紮營" } },
                            { textus: "ponit", lemma: "pono", morphologia: "Verbo, 3ª p, singular, presente, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "asienta", en: "he pitches", zh: "" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Dos oraciones principales coordinadas por 'et'. La primera ('hostes sequitur') contiene una construcción de ablativo de modo con una relativa en su interior ('quo consuerat interuallo').",
                        notae: "",
                        translationes: {
                            es: "Ese día sigue a los enemigos con el intervalo que había acostumbrado y asienta su campamento a tres millas del campamento de ellos.",
                            en: "On that day, he follows the enemy at the interval to which he had been accustomed and pitches his camp three miles from their camp.",
                            zh: "那天，他按照慣常的間隔追擊敵人，並在離他們營地三里的地方紮營。"
                        }
                    }
                ]
            }
        ]
    }
};

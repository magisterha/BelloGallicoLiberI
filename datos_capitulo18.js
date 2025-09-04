const corpus = {
    titulus_principalis: "De Bello Gallico, I, 18",
    auctor: "C. Iulius Caesar",
    titulus_secundarius: {
        es: "Lisco desvela las intrigas de Dúmnorix",
        en: "Liscus reveals the intrigues of Dumnorix",
        zh: "利斯庫斯揭露杜姆諾里格斯的陰謀"
    },
    introductio: {
        es: {
            titulus: "Introducción al Capítulo 18",
            contentus: `<p>En este capítulo, César, alertado por el discurso de Lisco, procede con astucia política. Aísla a Lisco para interrogarlo en privado y confirma sus sospechas: Dúmnorix el heduo, hermano de Diviciaco, es el principal responsable de la sedición y del sabotaje al suministro de grano. El texto detalla el poder, la ambición y la red de alianzas de Dúmnorix, quien se ha enriquecido controlando los impuestos y mantiene una caballería personal. Su antipatía hacia César y los romanos se debe a que la intervención romana ha mermado su poder y ha restaurado el de su hermano. Finalmente, se revela que Dúmnorix fue el causante de la reciente y vergonzosa huida de la caballería hedua.</p>`
        },
        en: {
            titulus: "Introduction to Chapter 18",
            contentus: `<p>In this chapter, Caesar, alerted by Liscus's speech, proceeds with political cunning. He isolates Liscus to question him privately and confirms his suspicions: Dumnorix the Aeduan, brother of Diviciacus, is the main person responsible for the sedition and the sabotage of the grain supply. The text details Dumnorix's power, ambition, and network of alliances, who has enriched himself by controlling taxes and maintains a personal cavalry. His antipathy towards Caesar and the Romans stems from the fact that Roman intervention has diminished his power and restored that of his brother. Finally, it is revealed that Dumnorix was the cause of the recent and shameful flight of the Aeduan cavalry.</p>`
        },
        zh: {
            titulus: "第 18 章介紹",
            contentus: `<p>在這一章中，凱撒被利斯庫斯的演講所警示，以政治上的狡猾行事。他將利斯庫斯隔離以便私下審問，並證實了他的懷疑：埃杜伊人杜姆諾里格斯，迪維西亞庫斯的兄弟，是煽動叛亂和破壞糧食供應的主謀。文本詳細描述了杜姆諾里格斯的權力、野心和聯盟網絡，他通過控制稅收致富，並維持著一支私人騎兵。他對凱撒和羅馬人的反感源於羅馬的干預削弱了他的權力，並恢復了他兄弟的權力。最後，揭示了杜姆諾里格斯是最近埃杜伊騎兵可恥逃跑的始作俑者。</p>`
        }
    },
    textus: {
        id: 18,
        capitula: [
            {
                id_capituli: 18,
                orationes: [
                    {
                        id_orationis: 'o1',
                        original_lat: "Caesar hac oratione Lisci Dumnorigem, Diuiciaci fratrem, designari sentiebat, sed, quod pluribus praesentibus eas res iactari nolebat, celeriter concilium dimittit, Liscum retinet.",
                        verba: [
                            { textus: "Caesar", lemma: "Caesar", morphologia: "Sustantivo, nominativo, singular, masculino", syntaxis: "Sujeto", translatio: { es: "César", en: "Caesar", zh: "凱撒" } },
                            { textus: "hac", lemma: "hic", morphologia: "Adjetivo demostrativo, ablativo, singular, femenino", syntaxis: "Modificador (de oratione)", translatio: { es: "con este", en: "by this", zh: "通過這次" } },
                            { textus: "oratione", lemma: "oratio", morphologia: "Sustantivo, ablativo, singular, femenino", syntaxis: "C.C. de Medio", translatio: { es: "discurso", en: "speech", zh: "演講" } },
                            { textus: "Lisci", lemma: "Liscus", morphologia: "Sustantivo, genitivo, singular, masculino", syntaxis: "C. del Nombre", translatio: { es: "de Lisco", en: "of Liscus", zh: "利斯庫斯的" } },
                            { textus: "Dumnorigem", lemma: "Dumnorix", morphologia: "Sustantivo, acusativo, singular, masculino", syntaxis: "Sujeto (de infinitiva)", translatio: { es: "a Dúmnorix", en: "Dumnorix", zh: "杜姆諾里格斯" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "Diuiciaci", lemma: "Diuiciacus", morphologia: "Sustantivo, genitivo, singular, masculino", syntaxis: "C. del Nombre", translatio: { es: "de Diviciaco", en: "of Diviciacus", zh: "迪維西亞庫斯的" } },
                            { textus: "fratrem", lemma: "frater", morphologia: "Sustantivo, acusativo, singular, masculino", syntaxis: "Aposición", translatio: { es: "hermano", en: "the brother", zh: "兄弟" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "designari", lemma: "designo", morphologia: "Verbo, infinitivo, presente, pasivo", syntaxis: "Verbo (de infinitiva)", translatio: { es: "ser señalado", en: "to be indicated", zh: "被指出" } },
                            { textus: "sentiebat", lemma: "sentio", morphologia: "Verbo, 3ª p, singular, imperfecto, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "sentía", en: "perceived", zh: "感覺到" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "sed", lemma: "sed", morphologia: "Conjunción adversativa", syntaxis: "Nexo", translatio: { es: "pero", en: "but", zh: "但是" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "quod", lemma: "quod", morphologia: "Conjunción causal", syntaxis: "Nexo", translatio: { es: "porque", en: "because", zh: "因為" } },
                            { textus: "pluribus", lemma: "multus", morphologia: "Adjetivo, ablativo, plural, masculino", syntaxis: "Sujeto (de ablativo absoluto)", translatio: { es: "muchos", en: "many", zh: "許多人" } },
                            { textus: "praesentibus", lemma: "praesum", morphologia: "Verbo, participio, presente, ablativo, plural, masculino", syntaxis: "Verbo (de ablativo absoluto)", translatio: { es: "estando presentes", en: "being present", zh: "在場的情況下" } },
                            { textus: "eas", lemma: "is", morphologia: "Pronombre, acusativo, plural, femenino", syntaxis: "Modificador (de res)", translatio: { es: "estos", en: "these", zh: "這些" } },
                            { textus: "res", lemma: "res", morphologia: "Sustantivo, acusativo, plural, femenino", syntaxis: "Sujeto (de infinitiva)", translatio: { es: "asuntos", en: "matters", zh: "事情" } },
                            { textus: "iactari", lemma: "iacto", morphologia: "Verbo, infinitivo, presente, pasivo", syntaxis: "Verbo (de infinitiva)", translatio: { es: "ser discutidos", en: "to be discussed", zh: "被談論" } },
                            { textus: "nolebat", lemma: "nolo", morphologia: "Verbo, 3ª p, singular, imperfecto, indicativo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "no quería", en: "he did not want", zh: "他不希望" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "celeriter", lemma: "celeriter", morphologia: "Adverbio", syntaxis: "Modificador verbal", translatio: { es: "rápidamente", en: "quickly", zh: "迅速地" } },
                            { textus: "concilium", lemma: "concilium", morphologia: "Sustantivo, acusativo, singular, neutro", syntaxis: "Objeto Directo", translatio: { es: "la asamblea", en: "the council", zh: "會議" } },
                            { textus: "dimittit", lemma: "dimitto", morphologia: "Verbo, 3ª p, singular, presente, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "disuelve", en: "he dismisses", zh: "他解散了" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "Liscum", lemma: "Liscus", morphologia: "Sustantivo, acusativo, singular, masculino", syntaxis: "Objeto Directo", translatio: { es: "a Lisco", en: "Liscus", zh: "利斯庫斯" } },
                            { textus: "retinet", lemma: "retineo", morphologia: "Verbo, 3ª p, singular, presente, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "retiene", en: "he keeps", zh: "他留下了" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Oración compleja con tres verbos principales coordinados ('sentiebat', 'dimittit', 'retinet'). 'sentiebat' rige una oración de infinitivo (Dumnorigem... designari). Una subordinada causal ('quod... nolebat') justifica la acción de disolver la asamblea.",
                        notae: "La construcción 'pluribus praesentibus' es un ablativo absoluto que significa 'estando presentes muchos'. El uso del presente histórico ('dimittit', 'retinet') añade viveza a la narración.",
                        translationes: {
                            es: "César, por este discurso de Lisco, sentía que se estaba señalando a Dúmnorix, hermano de Diviciaco, pero, como no quería que estos asuntos se discutieran con muchos presentes, disuelve rápidamente la asamblea y retiene a Lisco.",
                            en: "Caesar perceived by this speech of Liscus that Dumnorix, the brother of Diviciacus, was being indicated, but, because he did not want these matters to be discussed with many people present, he quickly dismisses the council and keeps Liscus.",
                            zh: "凱撒通過利斯庫斯的這次演講，感覺到迪維西亞庫斯的兄弟杜姆諾里格斯正被指認出來，但是，因為他不希望這些事情在眾人面前被談論，所以他迅速解散了會議，留下了利斯庫斯。"
                        }
                    },
                    {
                        id_orationis: 'o2',
                        original_lat: "Quaerit ex solo ea quae in conuentu dixerat.",
                        verba: [
                            { textus: "Quaerit", lemma: "quaero", morphologia: "Verbo, 3ª p, singular, presente, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "pregunta", en: "he asks", zh: "他問" } },
                            { textus: "ex", lemma: "ex", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "a", en: "from", zh: "從" } },
                            { textus: "solo", lemma: "solus", morphologia: "Adjetivo, ablativo, singular, masculino", syntaxis: "C. preposicional", translatio: { es: "él solo", en: "him alone", zh: "單獨" } },
                            { textus: "ea", lemma: "is", morphologia: "Pronombre, acusativo, plural, neutro", syntaxis: "Objeto Directo", translatio: { es: "aquellas cosas", en: "those things", zh: "那些事" } },
                            { textus: "quae", lemma: "qui", morphologia: "Pronombre relativo, acusativo, plural, neutro", syntaxis: "Objeto Directo (de dixerat)", translatio: { es: "que", en: "which", zh: "所" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "en", en: "in", zh: "在" } },
                            { textus: "conuentu", lemma: "conventus", morphologia: "Sustantivo, ablativo, singular, masculino", syntaxis: "C.C. de Lugar", translatio: { es: "la asamblea", en: "the assembly", zh: "集會上" } },
                            { textus: "dixerat", lemma: "dico", morphologia: "Verbo, 3ª p, singular, pluscuamperfecto, indicativo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "había dicho", en: "he had said", zh: "說過的" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Oración simple con una subordinada adjetiva de relativo ('quae... dixerat') que complementa al objeto directo 'ea'.",
                        notae: "'ex solo' es una forma elíptica de 'ex eo solo' (a él solo), refiriéndose a Lisco.",
                        translationes: {
                            es: "Le pregunta a él solo aquellas cosas que había dicho en la asamblea.",
                            en: "He asks from him alone those things which he had said in the assembly.",
                            zh: "他單獨地問了他在集會上說過的那些事。"
                        }
                    },
                    {
                        id_orationis: 'o3',
                        original_lat: "Dicit liberius atque audacius.",
                        verba: [
                            { textus: "Dicit", lemma: "dico", morphologia: "Verbo, 3ª p, singular, presente, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "habla", en: "he speaks", zh: "他說" } },
                            { textus: "liberius", lemma: "libere", morphologia: "Adverbio, grado comparativo", syntaxis: "Modificador verbal", translatio: { es: "más libremente", en: "more freely", zh: "更自由地" } },
                            { textus: "atque", lemma: "atque", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "並且" } },
                            { textus: "audacius", lemma: "audacter", morphologia: "Adverbio, grado comparativo", syntaxis: "Modificador verbal", translatio: { es: "más audazmente", en: "more boldly", zh: "更大膽地" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Oración simple. El sujeto (Lisco) está omitido.",
                        notae: "El uso de adverbios en grado comparativo ('liberius', 'audacius') enfatiza el cambio en el comportamiento de Lisco al hablar en privado.",
                        translationes: {
                            es: "Habla más libremente y más audazmente.",
                            en: "He speaks more freely and more boldly.",
                            zh: "他說得更自由、更大膽了。"
                        }
                    },
                    {
                        id_orationis: 'o4',
                        original_lat: "Eadem secreto ab aliis quaerit; reperit esse uera.",
                        verba: [
                            { textus: "Eadem", lemma: "idem", morphologia: "Pronombre, acusativo, plural, neutro", syntaxis: "Objeto Directo", translatio: { es: "las mismas cosas", en: "the same things", zh: "同樣的事情" } },
                            { textus: "secreto", lemma: "secreto", morphologia: "Adverbio", syntaxis: "Modificador verbal", translatio: { es: "en secreto", en: "in secret", zh: "秘密地" } },
                            { textus: "ab", lemma: "ab", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "a", en: "from", zh: "從" } },
                            { textus: "aliis", lemma: "alius", morphologia: "Pronombre, ablativo, plural, masculino", syntaxis: "C. preposicional", translatio: { es: "otros", en: "others", zh: "其他人那裡" } },
                            { textus: "quaerit", lemma: "quaero", morphologia: "Verbo, 3ª p, singular, presente, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "pregunta", en: "he inquires", zh: "他詢問" } },
                            { textus: ";", lemma: ";", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ";", en: ";", zh: "；" } },
                            { textus: "reperit", lemma: "reperio", morphologia: "Verbo, 3ª p, singular, presente, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "descubre", en: "he finds", zh: "他發現" } },
                            { textus: "esse", lemma: "sum", morphologia: "Verbo, infinitivo, presente, activo", syntaxis: "Verbo (de infinitiva)", translatio: { es: "que eran", en: "to be", zh: "是" } },
                            { textus: "uera", lemma: "uerus", morphologia: "Adjetivo, acusativo, plural, neutro", syntaxis: "Atributo", translatio: { es: "ciertas", en: "true", zh: "真的" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Dos oraciones principales yuxtapuestas. La segunda ('reperit esse uera') contiene una oración de infinitivo.",
                        notae: "La acción de César de verificar la información con múltiples fuentes ('ab aliis') muestra su cautela y método de inteligencia.",
                        translationes: {
                            es: "Pregunta en secreto las mismas cosas a otros; descubre que son ciertas.",
                            en: "He secretly inquires about the same things from others; he finds them to be true.",
                            zh: "他秘密地向其他人詢問同樣的事情；他發現這些都是真的。"
                        }
                    },
                    {
                        id_orationis: 'o5',
                        original_lat: "Ipsum esse Dumnorigem, summa audacia, magna apud plebem propter liberalitatem gratia, cupidum rerum nouarum.",
                        verba: [
                            { textus: "Ipsum", lemma: "ipse", morphologia: "Pronombre, acusativo, singular, masculino", syntaxis: "Sujeto (de infinitiva)", translatio: { es: "él mismo", en: "he himself", zh: "他本人" } },
                            { textus: "esse", lemma: "sum", morphologia: "Verbo, infinitivo, presente, activo", syntaxis: "Verbo (de infinitiva)", translatio: { es: "ser", en: "to be", zh: "是" } },
                            { textus: "Dumnorigem", lemma: "Dumnorix", morphologia: "Sustantivo, acusativo, singular, masculino", syntaxis: "Atributo", translatio: { es: "Dúmnorix", en: "Dumnorix", zh: "杜姆諾里格斯" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "summa", lemma: "summus", morphologia: "Adjetivo, ablativo, singular, femenino", syntaxis: "Modificador (de audacia)", translatio: { es: "de suma", en: "of the highest", zh: "極大的" } },
                            { textus: "audacia", lemma: "audacia", morphologia: "Sustantivo, ablativo, singular, femenino", syntaxis: "Ablativo de cualidad", translatio: { es: "audacia", en: "boldness", zh: "膽量" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "magna", lemma: "magnus", morphologia: "Adjetivo, ablativo, singular, femenino", syntaxis: "Modificador (de gratia)", translatio: { es: "de gran", en: "of great", zh: "巨大的" } },
                            { textus: "apud", lemma: "apud", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "entre", en: "among", zh: "在...之中" } },
                            { textus: "plebem", lemma: "plebs", morphologia: "Sustantivo, acusativo, singular, femenino", syntaxis: "C. preposicional", translatio: { es: "la plebe", en: "the common people", zh: "平民" } },
                            { textus: "propter", lemma: "propter", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "a causa de", en: "on account of", zh: "由於" } },
                            { textus: "liberalitatem", lemma: "liberalitas", morphologia: "Sustantivo, acusativo, singular, femenino", syntaxis: "C. preposicional", translatio: { es: "su generosidad", en: "his generosity", zh: "他的慷慨" } },
                            { textus: "gratia", lemma: "gratia", morphologia: "Sustantivo, ablativo, singular, femenino", syntaxis: "Ablativo de cualidad", translatio: { es: "influencia", en: "influence", zh: "影響力" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "cupidum", lemma: "cupidus", morphologia: "Adjetivo, acusativo, singular, masculino", syntaxis: "Aposición", translatio: { es: "deseoso", en: "desirous", zh: "渴望" } },
                            { textus: "rerum", lemma: "res", morphologia: "Sustantivo, genitivo, plural, femenino", syntaxis: "C. del adjetivo", translatio: { es: "de cambios", en: "of new things", zh: "新事物" } },
                            { textus: "nouarum", lemma: "novus", morphologia: "Adjetivo, genitivo, plural, femenino", syntaxis: "Modificador (de rerum)", translatio: { es: "políticos", en: "revolutionary", zh: "革命" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Oración de infinitivo dependiente de 'reperit' de la oración anterior. El sujeto es 'Ipsum (Dumnorigem)'. Le siguen varios complementos que describen a Dúmnorix.",
                        notae: "'rerum novarum' es una expresión idiomática que significa 'de una revolución' o 'de cambios políticos'.",
                        translationes: {
                            es: "(Descubre que) Dúmnorix mismo es un hombre de suma audacia, de gran influencia entre la plebe a causa de su generosidad, y deseoso de cambios políticos.",
                            en: "(He finds that) Dumnorix himself is a man of the highest boldness, of great influence among the common people on account of his generosity, and desirous of a revolution.",
                            zh: "（他發現）杜姆諾里格斯本人膽大包天，因其慷慨而在平民中影響巨大，並且渴望革命。"
                        }
                    },
                    {
                        id_orationis: 'o6',
                        original_lat: "Compluris annos portoria reliquaque omnia Haeduorum uectigalia paruo pretio redempta habere, propterea quod illo licente contra liceri audeat nemo.",
                        verba: [
                            { textus: "Compluris", lemma: "complures", morphologia: "Adjetivo, acusativo, plural, masculinos", syntaxis: "C.C. de Tiempo", translatio: { es: "durante muchos", en: "for several", zh: "多年來" } },
                            { textus: "annos", lemma: "annus", morphologia: "Sustantivo, acusativo, plural, masculino", syntaxis: "C.C. de Tiempo", translatio: { es: "años", en: "years", zh: "年" } },
                            { textus: "portoria", lemma: "portorium", morphologia: "Sustantivo, acusativo, plural, neutro", syntaxis: "Objeto Directo", translatio: { es: "los impuestos portuarios", en: "the customs duties", zh: "關稅" } },
                            { textus: "reliquaque", lemma: "reliquusque", morphologia: "Adjetivo y conjunción, acusativo, plural, neutro", syntaxis: "Objeto Directo", translatio: { es: "y los restantes", en: "and the rest", zh: "以及其餘的" } },
                            { textus: "omnia", lemma: "omnis", morphologia: "Adjetivo, acusativo, plural, neutro", syntaxis: "Modificador (de uectigalia)", translatio: { es: "todos", en: "all", zh: "所有" } },
                            { textus: "Haeduorum", lemma: "Haeduus", morphologia: "Sustantivo, genitivo, plural, masculino", syntaxis: "C. del Nombre", translatio: { es: "de los heduos", en: "of the Aedui", zh: "埃杜伊人的" } },
                            { textus: "uectigalia", lemma: "vectigal", morphologia: "Sustantivo, acusativo, plural, neutro", syntaxis: "Objeto Directo", translatio: { es: "impuestos", en: "taxes", zh: "稅收" } },
                            { textus: "paruo", lemma: "parvus", morphologia: "Adjetivo, ablativo, singular, neutro", syntaxis: "Modificador (de pretio)", translatio: { es: "por bajo", en: "at a low", zh: "以低廉的" } },
                            { textus: "pretio", lemma: "pretium", morphologia: "Sustantivo, ablativo, singular, neutro", syntaxis: "C.C. de Precio", translatio: { es: "precio", en: "price", zh: "價格" } },
                            { textus: "redempta", lemma: "redimo", morphologia: "Verbo, participio, perfecto, pasivo, acusativo, plural, neutro", syntaxis: "Predicativo del O.D.", translatio: { es: "arrendados", en: "farmed out", zh: "承包" } },
                            { textus: "habere", lemma: "habeo", morphologia: "Verbo, infinitivo, presente, activo", syntaxis: "Verbo (de infinitiva)", translatio: { es: "ha tenido", en: "he has held", zh: "他持有" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "propterea", lemma: "propterea", morphologia: "Adverbio", syntaxis: "Nexo", translatio: { es: "por el hecho", en: "for the reason", zh: "原因是" } },
                            { textus: "quod", lemma: "quod", morphologia: "Conjunción causal", syntaxis: "Nexo", translatio: { es: "de que", en: "that", zh: "因為" } },
                            { textus: "illo", lemma: "ille", morphologia: "Pronombre, ablativo, singular, masculino", syntaxis: "Sujeto (de ablativo absoluto)", translatio: { es: "él", en: "he", zh: "他" } },
                            { textus: "licente", lemma: "liceor", morphologia: "Verbo, participio, presente, ablativo, singular, masculino", syntaxis: "Verbo (de ablativo absoluto)", translatio: { es: "pujando", en: "bidding", zh: "出價時" } },
                            { textus: "contra", lemma: "contra", morphologia: "Adverbio", syntaxis: "Modificador verbal", translatio: { es: "en contra", en: "against him", zh: "對抗" } },
                            { textus: "liceri", lemma: "liceor", morphologia: "Verbo, infinitivo, presente, deponente", syntaxis: "Verbo (Infinitivo)", translatio: { es: "pujar", en: "to bid", zh: "競標" } },
                            { textus: "audeat", lemma: "audeo", morphologia: "Verbo, 3ª p, singular, presente, subjuntivo, semideponente", syntaxis: "Verbo (de subordinada)", translatio: { es: "se atreva", en: "dares", zh: "敢" } },
                            { textus: "nemo", lemma: "nemo", morphologia: "Pronombre, nominativo, singular", syntaxis: "Sujeto", translatio: { es: "nadie", en: "no one", zh: "沒有人" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Otra oración de infinitivo dependiente de 'reperit', seguida de una subordinada causal ('propterea quod...').",
                        notae: "La construcción 'illo licente' es un ablativo absoluto: 'mientras él puja' o 'pujando él'. El subjuntivo 'audeat' tiene un matiz causal/consecutivo introducido por 'quod'.",
                        translationes: {
                            es: "(Descubre que) durante muchos años ha tenido arrendados por bajo precio los impuestos portuarios y todos los demás impuestos de los heduos, por el hecho de que, cuando él puja, nadie se atreve a pujar en su contra.",
                            en: "(He finds that) for several years he has held the customs duties and all the other taxes of the Aedui, farmed out at a low price, for the reason that when he is bidding, no one dares to bid against him.",
                            zh: "（他發現）多年來，他以低價承包了埃杜伊人的關稅和所有其他稅收，原因是在他出價時，沒有人敢與他競標。"
                        }
                    },
                    {
                        id_orationis: 'o7',
                        original_lat: "His rebus et suam rem familiarem auxisse et facultates ad largiendum magnas comparasse;",
                        verba: [
                            { textus: "His", lemma: "hic", morphologia: "Adjetivo demostrativo, ablativo, plural, femenino", syntaxis: "Modificador (de rebus)", translatio: { es: "con estos", en: "by these", zh: "通過這些" } },
                            { textus: "rebus", lemma: "res", morphologia: "Sustantivo, ablativo, plural, femenino", syntaxis: "C.C. de Medio", translatio: { es: "medios", en: "means", zh: "手段" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo (correlativo)", translatio: { es: "tanto", en: "both", zh: "既" } },
                            { textus: "suam", lemma: "suus", morphologia: "Adjetivo posesivo, acusativo, singular, femenino", syntaxis: "Modificador (de rem)", translatio: { es: "su propio", en: "his own", zh: "他自己的" } },
                            { textus: "rem", lemma: "res", morphologia: "Sustantivo, acusativo, singular, femenino", syntaxis: "Objeto Directo", translatio: { es: "patrimonio", en: "estate", zh: "財產" } },
                            { textus: "familiarem", lemma: "familiaris", morphologia: "Adjetivo, acusativo, singular, femenino", syntaxis: "Modificador (de rem)", translatio: { es: "familiar", en: "family", zh: "家庭" } },
                            { textus: "auxisse", lemma: "augeo", morphologia: "Verbo, infinitivo, perfecto, activo", syntaxis: "Verbo (de infinitiva)", translatio: { es: "ha aumentado", en: "has increased", zh: "增加了" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo (correlativo)", translatio: { es: "como", en: "and", zh: "又" } },
                            { textus: "facultates", lemma: "facultas", morphologia: "Sustantivo, acusativo, plural, femenino", syntaxis: "Objeto Directo", translatio: { es: "recursos", en: "resources", zh: "資源" } },
                            { textus: "ad", lemma: "ad", morphologia: "Preposición", syntaxis: "Enlace (finalidad)", translatio: { es: "para", en: "for", zh: "為了" } },
                            { textus: "largiendum", lemma: "largior", morphologia: "Verbo, gerundio, acusativo", syntaxis: "C. preposicional", translatio: { es: "sobornar", en: "bribing", zh: "行賄" } },
                            { textus: "magnas", lemma: "magnus", morphologia: "Adjetivo, acusativo, plural, femenino", syntaxis: "Modificador (de facultates)", translatio: { es: "grandes", en: "great", zh: "巨大的" } },
                            { textus: "comparasse", lemma: "comparo", morphologia: "Verbo, infinitivo, perfecto, activo", syntaxis: "Verbo (de infinitiva)", translatio: { es: "ha reunido", en: "has acquired", zh: "積累了" } },
                            { textus: ";", lemma: ";", morphologia: "Puntuación", syntaxis: "Fin de cláusula", translatio: { es: ";", en: ";", zh: "；" } }
                        ],
                        ordo_syntacticus: "Continuación de la serie de oraciones de infinitivo dependientes de 'reperit', coordinadas por 'et... et...'.",
                        notae: "'rem familiarem' es una locución que significa 'patrimonio familiar'. 'auxisse' y 'comparasse' son formas sincopadas de 'auxivisse' y 'comparavisse'.",
                        translationes: {
                            es: "(Descubre que) con estos medios ha aumentado tanto su propio patrimonio familiar como ha reunido grandes recursos para sobornar;",
                            en: "(He finds that) by these means he has both increased his own family estate and has acquired great resources for bribing;",
                            zh: "（他發現）通過這些手段，他既增加了自己的家產，又為行賄積累了巨大的資源；"
                        }
                    },
                    {
                        id_orationis: 'o8',
                        original_lat: "magnum numerum equitatus suo sumptu semper alere et circum se habere,",
                        verba: [
                            { textus: "magnum", lemma: "magnus", morphologia: "Adjetivo, acusativo, singular, masculino", syntaxis: "Modificador (de numerum)", translatio: { es: "un gran", en: "a great", zh: "大量的" } },
                            { textus: "numerum", lemma: "numerus", morphologia: "Sustantivo, acusativo, singular, masculino", syntaxis: "Objeto Directo", translatio: { es: "número", en: "number", zh: "數量" } },
                            { textus: "equitatus", lemma: "equitatus", morphologia: "Sustantivo, genitivo, singular, masculino", syntaxis: "C. del Nombre", translatio: { es: "de caballería", en: "of cavalry", zh: "騎兵" } },
                            { textus: "suo", lemma: "suus", morphologia: "Adjetivo posesivo, ablativo, singular, masculino", syntaxis: "Modificador (de sumptu)", translatio: { es: "a su", en: "at his", zh: "用他" } },
                            { textus: "sumptu", lemma: "sumptus", morphologia: "Sustantivo, ablativo, singular, masculino", syntaxis: "C.C. de Medio", translatio: { es: "costo", en: "own expense", zh: "自己的費用" } },
                            { textus: "semper", lemma: "semper", morphologia: "Adverbio", syntaxis: "Modificador verbal", translatio: { es: "siempre", en: "always", zh: "總是" } },
                            { textus: "alere", lemma: "alo", morphologia: "Verbo, infinitivo, presente, activo", syntaxis: "Verbo (de infinitiva)", translatio: { es: "mantiene", en: "he maintains", zh: "供養" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "並" } },
                            { textus: "circum", lemma: "circum", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "alrededor de", en: "around", zh: "在...周圍" } },
                            { textus: "se", lemma: "sui", morphologia: "Pronombre reflexivo, acusativo, singular", syntaxis: "C. preposicional", translatio: { es: "sí", en: "him", zh: "自己" } },
                            { textus: "habere", lemma: "habeo", morphologia: "Verbo, infinitivo, presente, activo", syntaxis: "Verbo (de infinitiva)", translatio: { es: "tiene", en: "has", zh: "讓...跟隨" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Fin de cláusula", translatio: { es: ",", en: ",", zh: "，" } }
                        ],
                        ordo_syntacticus: "Más infinitivos ('alere', 'habere') dependientes de 'reperit', describiendo las acciones de Dúmnorix.",
                        notae: "'suo sumptu' significa 'a sus propias expensas'.",
                        translationes: {
                            es: "(descubre que) mantiene siempre a sus expensas un gran número de caballería y los tiene a su alrededor,",
                            en: "(he finds that) he always maintains a great number of cavalry at his own expense and has them around him,",
                            zh: "（他發現）他總是自費供養大批騎兵，並讓他們跟隨在自己身邊，"
                        }
                    },
                    {
                        id_orationis: 'o9',
                        original_lat: "neque solum domi, sed etiam apud finitimas ciuitates largiter posse, atque huius potentiae causa matrem in Biturigibus homini illic nobilissimo ac potentissimo conlocasse;",
                        verba: [
                            { textus: "neque", lemma: "neque", morphologia: "Conjunción", syntaxis: "Nexo (correlativo)", translatio: { es: "y que no", en: "and not", zh: "並且不" } },
                            { textus: "solum", lemma: "solum", morphologia: "Adverbio", syntaxis: "Modificador (correlativo)", translatio: { es: "solo", en: "only", zh: "僅僅" } },
                            { textus: "domi", lemma: "domus", morphologia: "Sustantivo, locativo, singular, femenino", syntaxis: "C.C. de Lugar", translatio: { es: "en su patria", en: "at home", zh: "在國內" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "sed", lemma: "sed", morphologia: "Conjunción", syntaxis: "Nexo (correlativo)", translatio: { es: "sino", en: "but", zh: "而且" } },
                            { textus: "etiam", lemma: "etiam", morphologia: "Adverbio", syntaxis: "Modificador (correlativo)", translatio: { es: "también", en: "also", zh: "也" } },
                            { textus: "apud", lemma: "apud", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "entre", en: "among", zh: "在...之中" } },
                            { textus: "finitimas", lemma: "finitimus", morphologia: "Adjetivo, acusativo, plural, femenino", syntaxis: "Modificador (de ciuitates)", translatio: { es: "vecinos", en: "neighboring", zh: "鄰近的" } },
                            { textus: "ciuitates", lemma: "ciuitas", morphologia: "Sustantivo, acusativo, plural, femenino", syntaxis: "C. preposicional", translatio: { es: "estados", en: "states", zh: "邦國" } },
                            { textus: "largiter", lemma: "largiter", morphologia: "Adverbio", syntaxis: "Modificador verbal", translatio: { es: "gran", en: "greatly", zh: "極大地" } },
                            { textus: "posse", lemma: "possum", morphologia: "Verbo, infinitivo, presente, activo", syntaxis: "Verbo (de infinitiva)", translatio: { es: "tiene poder", en: "he is powerful", zh: "有權勢" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "atque", lemma: "atque", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y que", en: "and that", zh: "並且" } },
                            { textus: "huius", lemma: "hic", morphologia: "Pronombre demostrativo, genitivo, singular, femenino", syntaxis: "Modificador (de potentiae)", translatio: { es: "de este", en: "of this", zh: "為了這份" } },
                            { textus: "potentiae", lemma: "potentia", morphologia: "Sustantivo, genitivo, singular, femenino", syntaxis: "C. del Nombre (con causa)", translatio: { es: "poder", en: "power", zh: "權力" } },
                            { textus: "causa", lemma: "causa", morphologia: "Sustantivo, ablativo, singular, femenino", syntaxis: "C.C. de Finalidad", translatio: { es: "a causa", en: "for the sake", zh: "的緣故" } },
                            { textus: "matrem", lemma: "mater", morphologia: "Sustantivo, acusativo, singular, femenino", syntaxis: "Objeto Directo", translatio: { es: "a su madre", en: "his mother", zh: "母親" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "en", en: "among", zh: "在...之中" } },
                            { textus: "Biturigibus", lemma: "Bituriges", morphologia: "Sustantivo, ablativo, plural, masculino", syntaxis: "C. preposicional", translatio: { es: "los Bituriges", en: "the Bituriges", zh: "比圖里吉人" } },
                            { textus: "homini", lemma: "homo", morphologia: "Sustantivo, dativo, singular, masculino", syntaxis: "Objeto Indirecto", translatio: { es: "con un hombre", en: "to a man", zh: "給一個男人" } },
                            { textus: "illic", lemma: "illic", morphologia: "Adverbio", syntaxis: "Modificador verbal", translatio: { es: "allí", en: "there", zh: "那裡的" } },
                            { textus: "nobilissimo", lemma: "nobilis", morphologia: "Adjetivo, dativo, singular, masculino, superlativo", syntaxis: "Modificador (de homini)", translatio: { es: "muy noble", en: "most noble", zh: "最顯赫的" } },
                            { textus: "ac", lemma: "ac", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "並且" } },
                            { textus: "potentissimo", lemma: "potens", morphologia: "Adjetivo, dativo, singular, masculino, superlativo", syntaxis: "Modificador (de homini)", translatio: { es: "muy poderoso", en: "most powerful", zh: "最有權勢的" } },
                            { textus: "conlocasse", lemma: "conloco", morphologia: "Verbo, infinitivo, perfecto, activo", syntaxis: "Verbo (de infinitiva)", translatio: { es: "ha casado", en: "he has given in marriage", zh: "嫁給了" } },
                            { textus: ";", lemma: ";", morphologia: "Puntuación", syntaxis: "Fin de cláusula", translatio: { es: ";", en: ";", zh: "；" } }
                        ],
                        ordo_syntacticus: "Continúa la serie de infinitivos: 'posse' y 'conlocasse'.",
                        notae: "'domi' es un locativo ('en casa'). 'huius potentiae causa' es una construcción de genitivo + 'causa' para indicar finalidad.",
                        translationes: {
                            es: "y que no solo en su patria, sino también entre los estados vecinos tiene gran poder, y que, a causa de este poder, ha casado a su madre en los Bituriges con un hombre allí muy noble y poderoso;",
                            en: "and that not only at home, but also among the neighboring states he is very powerful, and that, for the sake of this power, he has given his mother in marriage among the Bituriges to a man there most noble and powerful;",
                            zh: "並且他不僅在國內，而且在鄰近的邦國中也擁有巨大的權力，並且為了這份權力，他把母親嫁給了比圖里吉人中一位最顯赫、最有權勢的男人；"
                        }
                    },
                    {
                        id_orationis: 'o10',
                        original_lat: "ipsum ex Heluetiis uxorem habere, sororem ex matre et propinquas suas nuptum in alias ciuitates conlocasse.",
                        verba: [
                            { textus: "ipsum", lemma: "ipse", morphologia: "Pronombre, acusativo, singular, masculino", syntaxis: "Sujeto (de infinitiva)", translatio: { es: "él mismo", en: "he himself", zh: "他自己" } },
                            { textus: "ex", lemma: "ex", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "de entre", en: "from", zh: "來自" } },
                            { textus: "Heluetiis", lemma: "Heluetii", morphologia: "Sustantivo, ablativo, plural, masculino", syntaxis: "C. preposicional", translatio: { es: "los helvecios", en: "the Helvetii", zh: "赫爾維蒂人" } },
                            { textus: "uxorem", lemma: "uxor", morphologia: "Sustantivo, acusativo, singular, femenino", syntaxis: "Objeto Directo", translatio: { es: "una esposa", en: "a wife", zh: "一位妻子" } },
                            { textus: "habere", lemma: "habeo", morphologia: "Verbo, infinitivo, presente, activo", syntaxis: "Verbo (de infinitiva)", translatio: { es: "tiene", en: "has", zh: "娶了" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "sororem", lemma: "soror", morphologia: "Sustantivo, acusativo, singular, femenino", syntaxis: "Objeto Directo", translatio: { es: "a su hermana", en: "his sister", zh: "妹妹" } },
                            { textus: "ex", lemma: "ex", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "por parte de", en: "on the side of", zh: "同" } },
                            { textus: "matre", lemma: "mater", morphologia: "Sustantivo, ablativo, singular, femenino", syntaxis: "C. preposicional", translatio: { es: "madre", en: "mother", zh: "母的" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "和" } },
                            { textus: "propinquas", lemma: "propinquus", morphologia: "Sustantivo, acusativo, plural, femenino", syntaxis: "Objeto Directo", translatio: { es: "a sus parientas", en: "his female relatives", zh: "女性親屬" } },
                            { textus: "suas", lemma: "suus", morphologia: "Adjetivo posesivo, acusativo, plural, femenino", syntaxis: "Modificador (de propinquas)", translatio: { es: "suyas", en: "his", zh: "他的" } },
                            { textus: "nuptum", lemma: "nubo", morphologia: "Verbo, supino, acusativo", syntaxis: "C.C. de Finalidad", translatio: { es: "para casar", en: "to be married", zh: "嫁" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "a", en: "into", zh: "到" } },
                            { textus: "alias", lemma: "alius", morphologia: "Adjetivo, acusativo, plural, femenino", syntaxis: "Modificador (de ciuitates)", translatio: { es: "otros", en: "other", zh: "其他" } },
                            { textus: "ciuitates", lemma: "ciuitas", morphologia: "Sustantivo, acusativo, plural, femenino", syntaxis: "C. preposicional", translatio: { es: "estados", en: "states", zh: "邦國" } },
                            { textus: "conlocasse", lemma: "conloco", morphologia: "Verbo, infinitivo, perfecto, activo", syntaxis: "Verbo (de infinitiva)", translatio: { es: "ha casado", en: "he has given in marriage", zh: "已經嫁給" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Últimos infinitivos de esta larga serie: 'habere' y 'conlocasse'.",
                        notae: "'sororem ex matre' significa 'hermana por parte de madre' (media hermana). 'nuptum' es un supino que indica finalidad ('para casarse').",
                        translationes: {
                            es: "(descubre que) él mismo tiene una esposa de los helvecios, (y que) ha casado a su hermana por parte de madre y a sus parientas en otros estados.",
                            en: "(he finds that) he himself has a wife from the Helvetii, (and that) he has given his sister on his mother's side and his female relatives in marriage into other states.",
                            zh: "（他發現）他自己娶了一位赫爾維蒂人為妻，並將他同母的妹妹和其他女性親屬嫁到了其他的邦國。"
                        }
                    },
                    {
                        id_orationis: 'o11',
                        original_lat: "Fauere et cupere Heluetiis propter eam adfinitatem, odisse etiam suo nomine Caesarem et Romanos, quod eorum aduentu potentia eius deminuta et Diuiciacus frater in antiquum locum gratiae atque honoris sit restitutus.",
                        verba: [
                            { textus: "Fauere", lemma: "faueo", morphologia: "Verbo, infinitivo, presente, activo", syntaxis: "Verbo (de infinitiva)", translatio: { es: "favorece", en: "he favors", zh: "偏袒" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "並" } },
                            { textus: "cupere", lemma: "cupio", morphologia: "Verbo, infinitivo, presente, activo", syntaxis: "Verbo (de infinitiva)", translatio: { es: "apoya", en: "supports", zh: "支持" } },
                            { textus: "Heluetiis", lemma: "Heluetii", morphologia: "Sustantivo, dativo, plural, masculino", syntaxis: "Objeto Indirecto", translatio: { es: "a los helvecios", en: "the Helvetii", zh: "赫爾維蒂人" } },
                            { textus: "propter", lemma: "propter", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "por", en: "on account of", zh: "由於" } },
                            { textus: "eam", lemma: "is", morphologia: "Pronombre, acusativo, singular, femenino", syntaxis: "Modificador (de adfinitatem)", translatio: { es: "esa", en: "that", zh: "那層" } },
                            { textus: "adfinitatem", lemma: "adfinitas", morphologia: "Sustantivo, acusativo, singular, femenino", syntaxis: "C. preposicional", translatio: { es: "alianza", en: "alliance", zh: "姻親關係" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "odisse", lemma: "odi", morphologia: "Verbo, infinitivo, perfecto, activo", syntaxis: "Verbo (de infinitiva)", translatio: { es: "odia", en: "he hates", zh: "憎恨" } },
                            { textus: "etiam", lemma: "etiam", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "también", en: "also", zh: "也" } },
                            { textus: "suo", lemma: "suus", morphologia: "Adjetivo posesivo, ablativo, singular, neutro", syntaxis: "Modificador (de nomine)", translatio: { es: "personalmente", en: "personally", zh: "以個人" } },
                            { textus: "nomine", lemma: "nomen", morphologia: "Sustantivo, ablativo, singular, neutro", syntaxis: "C.C. de Causa", translatio: { es: "por su cuenta", en: "on his own account", zh: "名義" } },
                            { textus: "Caesarem", lemma: "Caesar", morphologia: "Sustantivo, acusativo, singular, masculino", syntaxis: "Objeto Directo", translatio: { es: "a César", en: "Caesar", zh: "凱撒" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "和" } },
                            { textus: "Romanos", lemma: "Romanus", morphologia: "Sustantivo, acusativo, plural, masculino", syntaxis: "Objeto Directo", translatio: { es: "a los romanos", en: "the Romans", zh: "羅馬人" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "quod", lemma: "quod", morphologia: "Conjunción causal", syntaxis: "Nexo", translatio: { es: "porque", en: "because", zh: "因為" } },
                            { textus: "eorum", lemma: "is", morphologia: "Pronombre, genitivo, plural, masculino", syntaxis: "C. del Nombre", translatio: { es: "de ellos", en: "their", zh: "他們的" } },
                            { textus: "aduentu", lemma: "aduentus", morphologia: "Sustantivo, ablativo, singular, masculino", syntaxis: "C.C. de Causa", translatio: { es: "con la llegada", en: "by the arrival", zh: "到來" } },
                            { textus: "potentia", lemma: "potentia", morphologia: "Sustantivo, nominativo, singular, femenino", syntaxis: "Sujeto", translatio: { es: "el poder", en: "the power", zh: "權力" } },
                            { textus: "eius", lemma: "is", morphologia: "Pronombre, genitivo, singular, masculino", syntaxis: "C. del Nombre", translatio: { es: "de él", en: "his", zh: "他的" } },
                            { textus: "deminuta", lemma: "deminuo", morphologia: "Verbo, participio, perfecto, pasivo, nominativo, singular, femenino", syntaxis: "Parte del verbo", translatio: { es: "ha sido disminuido", en: "was diminished", zh: "被削弱了" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "而" } },
                            { textus: "Diuiciacus", lemma: "Diuiciacus", morphologia: "Sustantivo, nominativo, singular, masculino", syntaxis: "Sujeto", translatio: { es: "Diviciaco", en: "Diviciacus", zh: "迪維西亞庫斯" } },
                            { textus: "frater", lemma: "frater", morphologia: "Sustantivo, nominativo, singular, masculino", syntaxis: "Aposición", translatio: { es: "su hermano", en: "his brother", zh: "他的兄弟" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "a", en: "to", zh: "到" } },
                            { textus: "antiquum", lemma: "antiquus", morphologia: "Adjetivo, acusativo, singular, masculino", syntaxis: "Modificador (de locum)", translatio: { es: "su antiguo", en: "his former", zh: "昔日的" } },
                            { textus: "locum", lemma: "locus", morphologia: "Sustantivo, acusativo, singular, masculino", syntaxis: "C. preposicional", translatio: { es: "lugar", en: "position", zh: "地位" } },
                            { textus: "gratiae", lemma: "gratia", morphologia: "Sustantivo, genitivo, singular, femenino", syntaxis: "C. del Nombre", translatio: { es: "de influencia", en: "of influence", zh: "聲望" } },
                            { textus: "atque", lemma: "atque", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "和" } },
                            { textus: "honoris", lemma: "honor", morphologia: "Sustantivo, genitivo, singular, masculino", syntaxis: "C. del Nombre", translatio: { es: "honor", en: "honor", zh: "榮譽" } },
                            { textus: "sit", lemma: "sum", morphologia: "Verbo, 3ª p, singular, presente, subjuntivo", syntaxis: "Verbo (auxiliar)", translatio: { es: "haya sido", en: "has been", zh: "被" } },
                            { textus: "restitutus", lemma: "restituo", morphologia: "Verbo, participio, perfecto, pasivo, nominativo, singular, masculino", syntaxis: "Verbo", translatio: { es: "restituido", en: "restored", zh: "恢復了" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Una nueva serie de infinitivos ('fauere', 'cupere', 'odisse') seguida de una subordinada causal con 'quod' y verbo en subjuntivo ('sit restitutus').",
                        notae: "'suo nomine' significa 'por su propia cuenta' o 'personalmente'. 'odisse' es un verbo defectivo que se usa en tiempos de perfecto con significado de presente.",
                        translationes: {
                            es: "(Descubre que) favorece y apoya a los helvecios por causa de ese parentesco, (y que) también odia personalmente a César y a los romanos porque con la llegada de ellos su poder ha sido disminuido y su hermano Diviciaco ha sido restituido a su antiguo lugar de influencia y honor.",
                            en: "(He finds that) he favors and supports the Helvetii on account of that alliance, (and that) he also personally hates Caesar and the Romans because by their arrival his power has been diminished and his brother Diviciacus has been restored to his former position of influence and honor.",
                            zh: "（他發現）由於那層姻親關係，他偏袒並支持赫爾維蒂人，同時也以個人名義憎恨凱撒和羅馬人，因為他們的到來削弱了他的權力，而他的兄弟迪維西亞庫斯則恢復了昔日的聲望和榮譽地位。"
                        }
                    },
                    {
                        id_orationis: 'o12',
                        original_lat: "Si quid accidat Romanis, summam in spem per Heluetios regni obtinendi uenire;",
                        verba: [
                            { textus: "Si", lemma: "si", morphologia: "Conjunción condicional", syntaxis: "Nexo", translatio: { es: "si", en: "if", zh: "如果" } },
                            { textus: "quid", lemma: "aliquis", morphologia: "Pronombre indefinido, nominativo, singular, neutro", syntaxis: "Sujeto", translatio: { es: "algo", en: "anything", zh: "任何事" } },
                            { textus: "accidat", lemma: "accido", morphologia: "Verbo, 3ª p, singular, presente, subjuntivo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "les sucediera", en: "should happen", zh: "發生" } },
                            { textus: "Romanis", lemma: "Romanus", morphologia: "Sustantivo, dativo, plural, masculino", syntaxis: "Objeto Indirecto", translatio: { es: "a los romanos", en: "to the Romans", zh: "對羅馬人" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "summam", lemma: "summus", morphologia: "Adjetivo, acusativo, singular, femenino", syntaxis: "Modificador (de spem)", translatio: { es: "la máxima", en: "the highest", zh: "最大的" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "a", en: "into", zh: "進入" } },
                            { textus: "spem", lemma: "spes", morphologia: "Sustantivo, acusativo, singular, femenino", syntaxis: "C. preposicional", translatio: { es: "esperanza", en: "hope", zh: "希望" } },
                            { textus: "per", lemma: "per", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "a través de", en: "through", zh: "通過" } },
                            { textus: "Heluetios", lemma: "Heluetii", morphologia: "Sustantivo, acusativo, plural, masculino", syntaxis: "C. preposicional", translatio: { es: "los helvecios", en: "the Helvetii", zh: "赫爾維蒂人" } },
                            { textus: "regni", lemma: "regnum", morphologia: "Sustantivo, genitivo, singular, neutro", syntaxis: "Complemento (de obtinendi)", translatio: { es: "del reino", en: "of the kingdom", zh: "王國" } },
                            { textus: "obtinendi", lemma: "obtineo", morphologia: "Verbo, gerundivo, genitivo, singular, neutro", syntaxis: "C. del Nombre (de spem)", translatio: { es: "de obtener", en: "of obtaining", zh: "獲得" } },
                            { textus: "uenire", lemma: "uenio", morphologia: "Verbo, infinitivo, presente, activo", syntaxis: "Verbo (de infinitiva)", translatio: { es: "abriga", en: "he comes", zh: "他懷有" } },
                            { textus: ";", lemma: ";", morphologia: "Puntuación", syntaxis: "Fin de cláusula", translatio: { es: ";", en: ";", zh: "；" } }
                        ],
                        ordo_syntacticus: "Oración condicional ('Si... accidat') seguida del infinitivo principal ('uenire') que depende de un verbo de decir o pensar implícito.",
                        notae: "'regni obtinendi' es una construcción de gerundivo ('de la esperanza del reino que ha de ser obtenido'). El subjuntivo 'accidat' indica una condición futura posible.",
                        translationes: {
                            es: "(Dice que) si algo les sucediera a los romanos, él abriga la máxima esperanza de obtener el reino a través de los helvecios;",
                            en: "(He says that) if anything should happen to the Romans, he comes into the highest hope of obtaining the kingdom through the Helvetii;",
                            zh: "（他說）如果羅馬人發生任何意外，他就有極大的希望通過赫爾維蒂人獲得王權；"
                        }
                    },
                    {
                        id_orationis: 'o13',
                        original_lat: "imperio populi Romani non modo de regno, sed etiam de ea quam habeat gratia desperare.",
                        verba: [
                            { textus: "imperio", lemma: "imperium", morphologia: "Sustantivo, ablativo, singular, neutro", syntaxis: "Sujeto (de ablativo absoluto)", translatio: { es: "bajo el dominio", en: "under the command", zh: "在...統治下" } },
                            { textus: "populi", lemma: "populus", morphologia: "Sustantivo, genitivo, singular, masculino", syntaxis: "C. del Nombre", translatio: { es: "del pueblo", en: "of the people", zh: "人民的" } },
                            { textus: "Romani", lemma: "Romanus", morphologia: "Adjetivo, genitivo, singular, masculino", syntaxis: "Modificador (de populi)", translatio: { es: "romano", en: "Roman", zh: "羅馬" } },
                            { textus: "non", lemma: "non", morphologia: "Adverbio", syntaxis: "Modificador (correlativo)", translatio: { es: "no", en: "not", zh: "不僅" } },
                            { textus: "modo", lemma: "modo", morphologia: "Adverbio", syntaxis: "Modificador (correlativo)", translatio: { es: "solo", en: "only", zh: "對" } },
                            { textus: "de", lemma: "de", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "del", en: "of", zh: "王權" } },
                            { textus: "regno", lemma: "regnum", morphologia: "Sustantivo, ablativo, singular, neutro", syntaxis: "C. preposicional", translatio: { es: "reino", en: "the kingdom", zh: "感到絕望" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "sed", lemma: "sed", morphologia: "Conjunción", syntaxis: "Nexo (correlativo)", translatio: { es: "sino", en: "but", zh: "而且" } },
                            { textus: "etiam", lemma: "etiam", morphologia: "Adverbio", syntaxis: "Modificador (correlativo)", translatio: { es: "también", en: "also", zh: "也對" } },
                            { textus: "de", lemma: "de", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "de", en: "of", zh: "他" } },
                            { textus: "ea", lemma: "is", morphologia: "Pronombre, ablativo, singular, femenino", syntaxis: "C. preposicional", translatio: { es: "la", en: "that", zh: "擁有的" } },
                            { textus: "quam", lemma: "qui", morphologia: "Pronombre relativo, acusativo, singular, femenino", syntaxis: "Objeto Directo", translatio: { es: "que", en: "which", zh: "那份" } },
                            { textus: "habeat", lemma: "habeo", morphologia: "Verbo, 3ª p, singular, presente, subjuntivo, activo", syntaxis: "Verbo (de subordinada)", translatio: { es: "tiene", en: "he has", zh: "影響力" } },
                            { textus: "gratia", lemma: "gratia", morphologia: "Sustantivo, ablativo, singular, femenino", syntaxis: "C. preposicional", translatio: { es: "influencia", en: "influence", zh: "感到絕望" } },
                            { textus: "desperare", lemma: "despero", morphologia: "Verbo, infinitivo, presente, activo", syntaxis: "Verbo (de infinitiva)", translatio: { es: "desespera", en: "he despairs", zh: "" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Infinitivo 'desperare' que sigue la lógica de la declaración anterior. 'non modo... sed etiam...' es una correlación.",
                        notae: "El subjuntivo 'habeat' en la relativa se debe a que está dentro de una oración de estilo indirecto. La frase 'imperio populi Romani' puede entenderse como un ablativo absoluto.",
                        translationes: {
                            es: "(y que) bajo el dominio del pueblo romano, desespera no solo del reino, sino también de la influencia que tiene.",
                            en: "(and that) under the rule of the Roman people, he despairs not only of the kingdom, but also of that influence which he has.",
                            zh: "而在羅馬人民的統治下，他不僅對王權感到絕望，甚至對他現有的影響力也感到絕望。"
                        }
                    },
                    {
                        id_orationis: 'o14',
                        original_lat: "Reperiebat etiam in quaerendo Caesar, quod proelium equestre aduersum paucis ante diebus esset factum, initium eius fugae factum a Dumnorige atque eius equitibus (nam equitatui quem auxilio Caesari Haedui miserant Dumnorix praeerat); eorum fuga reliquum esse equitatum perterritum.",
                        verba: [
                            { textus: "Reperiebat", lemma: "reperio", morphologia: "Verbo, 3ª p, singular, imperfecto, indicativo, activo", syntaxis: "Verbo Principal", translatio: { es: "descubría", en: "he found out", zh: "發現" } },
                            { textus: "etiam", lemma: "etiam", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "también", en: "also", zh: "還" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición", syntaxis: "Enlace", translatio: { es: "al", en: "in", zh: "在" } },
                            { textus: "quaerendo", lemma: "quaero", morphologia: "Verbo, gerundio, ablativo", syntaxis: "C. preposicional", translatio: { es: "investigar", en: "investigating", zh: "調查中" } },
                            { textus: "Caesar", lemma: "Caesar", morphologia: "Sustantivo, nominativo, singular, masculino", syntaxis: "Sujeto", translatio: { es: "César", en: "Caesar", zh: "凱撒" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "，" } },
                            { textus: "quod", lemma: "quod", morphologia: "Conjunción", syntaxis: "Nexo (introductorio)", translatio: { es: "que", en: "that", zh: "即" } },
                            { textus: "proelium", lemma: "proelium", morphologia: "Sustantivo, acusativo, singular, neutro", syntaxis: "Sujeto (de infinitiva)", translatio: { es: "la batalla", en: "the battle", zh: "戰鬥" } },
                            { textus: "equestre", lemma: "equester", morphologia: "Adjetivo, acusativo, singular, neutro", syntaxis: "Modificador (de proelium)", translatio: { es: "de caballería", en: "cavalry", zh: "騎兵" } },
                            { textus: "aduersum", lemma: "aduersus", morphologia: "Adjetivo, acusativo, singular, neutro", syntaxis: "Modificador (de proelium)", translatio: { es: "adversa", en: "adverse", zh: "不利的" } },
                            { textus: "paucis", lemma: "paucus", morphologia: "Adjetivo, ablativo, plural, masculino", syntaxis: "C.C. de Tiempo", translatio: { es: "pocos", en: "a few", zh: "幾" } },
                            { textus: "ante", lemma: "ante", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "antes", en: "before", zh: "天前" } },
                            { textus: "diebus", lemma: "dies", morphologia: "Sustantivo, ablativo, plural, masculino", syntaxis: "C.C. de Tiempo", translatio: { es: "días", en: "days", zh: "" } },
                            { textus: "esset", lemma: "sum", morphologia: "Verbo, 3ª p, singular, imperfecto, subjuntivo", syntaxis: "Verbo (auxiliar)", translatio: { es: "había tenido lugar", en: "had taken place", zh: "發生" } },
                            { textus: "factum", lemma: "facio", morphologia: "Verbo, participio, perfecto, pasivo, nominativo, singular, neutro", syntaxis: "Verbo", translatio: { es: "", en: "", zh: "" } },
                            { textus: ",", lemma: ",", morphologia: "Puntuación", syntaxis: "Separador", translatio: { es: ",", en: ",", zh: "" } },
                            { textus: "initium", lemma: "initium", morphologia: "Sustantivo, acusativo, singular, neutro", syntaxis: "Sujeto (de infinitiva)", translatio: { es: "el comienzo", en: "the beginning", zh: "開端" } },
                            { textus: "eius", lemma: "is", morphologia: "Pronombre, genitivo, singular, femenino", syntaxis: "C. del Nombre", translatio: { es: "de esa", en: "of that", zh: "那次" } },
                            { textus: "fugae", lemma: "fuga", morphologia: "Sustantivo, genitivo, singular, femenino", syntaxis: "C. del Nombre", translatio: { es: "huida", en: "flight", zh: "潰逃的" } },
                            { textus: "factum", lemma: "facio", morphologia: "Verbo, participio, perfecto, pasivo, acusativo, singular, neutro", syntaxis: "Verbo (de infinitiva)", translatio: { es: "había sido obra", en: "had been started", zh: "是由...造成的" } },
                            { textus: "a", lemma: "a", morphologia: "Preposición", syntaxis: "Enlace (Agente)", translatio: { es: "de", en: "by", zh: "" } },
                            { textus: "Dumnorige", lemma: "Dumnorix", morphologia: "Sustantivo, ablativo, singular, masculino", syntaxis: "C. Agente", translatio: { es: "Dúmnorix", en: "Dumnorix", zh: "杜姆諾里格斯" } },
                            { textus: "atque", lemma: "atque", morphologia: "Conjunción copulativa", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "及其" } },
                            { textus: "eius", lemma: "is", morphologia: "Pronombre, genitivo, singular, masculino", syntaxis: "C. del Nombre", translatio: { es: "de sus", en: "his", zh: "他的" } },
                            { textus: "equitibus", lemma: "eques", morphologia: "Sustantivo, ablativo, plural, masculino", syntaxis: "C. Agente", translatio: { es: "jinetes", en: "cavalrymen", zh: "騎兵" } },
                            { textus: "(", lemma: "(", morphologia: "Puntuación", syntaxis: "Paréntesis", translatio: { es: "(", en: "(", zh: "（" } },
                            { textus: "nam", lemma: "nam", morphologia: "Conjunción", syntaxis: "Nexo", translatio: { es: "pues", en: "for", zh: "因為" } },
                            { textus: "equitatui", lemma: "equitatus", morphologia: "Sustantivo, dativo, singular, masculino", syntaxis: "Objeto Indirecto", translatio: { es: "a la caballería", en: "the cavalry", zh: "騎兵部隊" } },
                            { textus: "quem", lemma: "qui", morphologia: "Pronombre relativo, acusativo, singular, masculino", syntaxis: "Objeto Directo", translatio: { es: "que", en: "which", zh: "那支" } },
                            { textus: "auxilio", lemma: "auxilium", morphologia: "Sustantivo, dativo, singular, neutro", syntaxis: "Dativo de Finalidad", translatio: { es: "como auxilio", en: "as an aid", zh: "作為援助" } },
                            { textus: "Caesari", lemma: "Caesar", morphologia: "Sustantivo, dativo, singular, masculino", syntaxis: "Dativo de Interés", translatio: { es: "a César", en: "to Caesar", zh: "給凱撒" } },
                            { textus: "Haedui", lemma: "Haeduus", morphologia: "Sustantivo, nominativo, plural, masculino", syntaxis: "Sujeto", translatio: { es: "los heduos", en: "the Aedui", zh: "埃杜伊人" } },
                            { textus: "miserant", lemma: "mitto", morphologia: "Verbo, 3ª p, plural, pluscuamperfecto, indicativo, activo", syntaxis: "Verbo", translatio: { es: "habían enviado", en: "had sent", zh: "派來" } },
                            { textus: "Dumnorix", lemma: "Dumnorix", morphologia: "Sustantivo, nominativo, singular, masculino", syntaxis: "Sujeto", translatio: { es: "Dúmnorix", en: "Dumnorix", zh: "杜姆諾里格斯" } },
                            { textus: "praeerat", lemma: "praesum", morphologia: "Verbo, 3ª p, singular, imperfecto, indicativo, activo", syntaxis: "Verbo", translatio: { es: "estaba al mando", en: "was in command of", zh: "是...的指揮官" } },
                            { textus: ");", lemma: ");", morphologia: "Puntuación", syntaxis: "Paréntesis", translatio: { es: ");", en: ");", zh: "）；" } },
                            { textus: "eorum", lemma: "is", morphologia: "Pronombre, genitivo, plural, masculino", syntaxis: "C. del Nombre", translatio: { es: "de ellos", en: "their", zh: "他們的" } },
                            { textus: "fuga", lemma: "fuga", morphologia: "Sustantivo, ablativo, singular, femenino", syntaxis: "C.C. de Causa", translatio: { es: "por la huida", en: "by the flight", zh: "由於...的逃跑" } },
                            { textus: "reliquum", lemma: "reliquus", morphologia: "Adjetivo, acusativo, singular, masculino", syntaxis: "Sujeto (de infinitiva)", translatio: { es: "el resto de", en: "the rest of", zh: "其餘的" } },
                            { textus: "esse", lemma: "sum", morphologia: "Verbo, infinitivo, presente, activo", syntaxis: "Verbo (de infinitiva)", translatio: { es: "había quedado", en: "had been", zh: "" } },
                            { textus: "equitatum", lemma: "equitatus", morphologia: "Sustantivo, acusativo, singular, masculino", syntaxis: "Sujeto (de infinitiva)", translatio: { es: "la caballería", en: "the cavalry", zh: "騎兵" } },
                            { textus: "perterritum", lemma: "perterreo", morphologia: "Verbo, participio, perfecto, pasivo, acusativo, singular, masculino", syntaxis: "Atributo", translatio: { es: "aterrorizada", en: "terrified", zh: "嚇壞了" } },
                            { textus: ".", lemma: ".", morphologia: "Puntuación", syntaxis: "Fin de oración", translatio: { es: ".", en: ".", zh: "。" } }
                        ],
                        ordo_syntacticus: "Oración compleja. 'Reperiebat' es el verbo principal. Su objeto directo es una larga declaración en estilo indirecto, que contiene varias oraciones de infinitivo y un paréntesis explicativo.",
                        notae: "'in quaerendo' es un gerundio ablativo ('al investigar'). 'auxilio Caesari' es un doble dativo ('como ayuda para César').",
                        translationes: {
                            es: "Al investigar, César descubría también que, en la batalla de caballería adversa que había tenido lugar pocos días antes, el comienzo de esa huida había sido obra de Dúmnorix y sus jinetes (pues Dúmnorix estaba al mando de la caballería que los heduos habían enviado como auxilio a César); (y) que por la huida de ellos el resto de la caballería había quedado aterrorizada.",
                            en: "Upon investigating, Caesar also found out that, concerning the adverse cavalry battle which had taken place a few days before, the beginning of that flight had been started by Dumnorix and his cavalrymen (for Dumnorix was in command of the cavalry which the Aedui had sent as an aid to Caesar); (and) that by their flight the rest of the cavalry had been terrified.",
                            zh: "凱撒在調查中還發現，關於幾天前那場不利的騎兵戰，那次潰逃的開端正是由杜姆諾里格斯及其騎兵造成的（因為杜姆諾里格斯正是埃杜伊人派來援助凱撒的騎兵部隊的指揮官）；（並且）由於他們的逃跑，其餘的騎兵都嚇壞了。"
                        }
                    }
                ]
            }
        ]
    }
};

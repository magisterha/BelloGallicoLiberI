const corpus = {
    titulus_principalis: "De Bello Gallico, I, 17",
    auctor: "C. Iulius Caesar",
    titulus_secundarius: {
        es: "La revelación de Lisco sobre la facción anti-romana",
        en: "Liscus's Revelation of the Anti-Roman Faction",
        zh: "利斯庫斯揭示反羅馬派系"
    },
    introductio: {
        es: {
            titulus: "Introducción al Capítulo 17",
            contentus: `<p>En respuesta directa al discurso acusatorio de César, el vergobreto Lisco finalmente rompe su silencio. Este capítulo está dedicado por completo a su revelación, presentada en estilo indirecto. Lisco expone la existencia de una poderosa facción anti-romana dentro de los propios Eduos. Según él, ciertos individuos influyentes, con más poder real que los magistrados electos, están saboteando activamente el esfuerzo bélico. Argumentan que es preferible ser dominados por otros galos que por los romanos y están convencidos de que una victoria romana significará el fin de la libertad para toda la Galia. Lisco confiesa que estos individuos están filtrando los planes de César a los helvecios y que él mismo no tiene el poder para detenerlos. Su confesión, hecha bajo coacción y con gran riesgo personal, cambia drásticamente el enfoque del problema: de una crisis logística a una de traición interna.</p>`
        },
        en: {
            titulus: "Introduction to Chapter 17",
            contentus: `<p>In direct response to Caesar's accusatory speech, the Vergobretus Liscus finally breaks his silence. This chapter is dedicated entirely to his revelation, presented in indirect speech. Liscus exposes the existence of a powerful anti-Roman faction within the Haedui themselves. According to him, certain influential individuals, with more real power than the elected magistrates, are actively sabotaging the war effort. They argue that it is preferable to be dominated by other Gauls than by the Romans and are convinced that a Roman victory will mean the end of freedom for all of Gaul. Liscus confesses that these individuals are leaking Caesar's plans to the Helvetii and that he himself does not have the power to stop them. His confession, made under duress and at great personal risk, dramatically shifts the focus of the problem from a logistical crisis to one of internal betrayal.</p>`
        },
        zh: {
            titulus: "第 17 章介紹",
            contentus: `<p>作為對凱撒指控性演說的直接回應，維哥布雷特利斯庫斯終於打破了沉默。本章完全是他的揭示，以間接引語的形式呈現。利斯庫斯揭露了在愛杜依人內部存在著一個強大的反羅馬派系。據他所說，某些有影響力的個人，其真實權力超過了民選的官員，正在積極地破壞戰爭努力。他們聲稱，被其他高盧人統治也勝過被羅馬人統治，並確信羅馬的勝利將意味著整個高盧自由的終結。利斯庫斯承認，這些人正在向赫爾維蒂人洩漏凱撒的計畫，而他本人無力阻止他們。他的坦白是在脅迫和巨大的個人風險下做出的，這將問題的焦點從後勤危機戲劇性地轉向了內部背叛的危機。</p>`
        }
    },
    textus: {
        id: 17,
        capitula: [
            {
                id_capituli: 17,
                orationes: [
                    {
                        id_orationis: 'o1',
                        original_lat: "Tum demum Liscus oratione Caesaris adductus quod antea tacuerat proponit:",
                        verba: [
                            { textus: "Tum", lemma: "tum", morphologia: "Adverbio", syntaxis: "Modificador Temporal", translatio: { es: "entonces", en: "then", zh: "那時" } },
                            { textus: "demum", lemma: "demum", morphologia: "Adverbio", syntaxis: "Modificador Temporal", translatio: { es: "finalmente", en: "at last", zh: "終於" } },
                            { textus: "Liscus", lemma: "Liscus", morphologia: "Nominativo Masculino Singular", syntaxis: "Sujeto", translatio: { es: "Lisco", en: "Liscus", zh: "利斯庫斯" } },
                            { textus: "oratione", lemma: "oratio", morphologia: "Ablativo Femenino Singular", syntaxis: "Complemento de Causa", translatio: { es: "por el discurso", en: "by the speech", zh: "因演說" } },
                            { textus: "Caesaris", lemma: "Caesar", morphologia: "Genitivo Masculino Singular", syntaxis: "Complemento del Nombre", translatio: { es: "de César", en: "of Caesar", zh: "凱撒的" } },
                            { textus: "adductus", lemma: "adduco", morphologia: "Participio Perfecto Pasivo, Nominativo Singular", syntaxis: "Aposición", translatio: { es: "inducido", en: "influenced", zh: "受影響" } },
                            { textus: "quod", lemma: "qui", morphologia: "Acusativo Neutro Singular", syntaxis: "Objeto Directo", translatio: { es: "lo que", en: "what", zh: "那些事" } },
                            { textus: "antea", lemma: "antea", morphologia: "Adverbio", syntaxis: "Modificador Temporal", translatio: { es: "antes", en: "before", zh: "之前" } },
                            { textus: "tacuerat", lemma: "taceo", morphologia: "Pluscuamperfecto Indicativo Activo, 3ª Persona Singular", syntaxis: "Verbo", translatio: { es: "había callado", en: "he had been silent about", zh: "他一直沉默的" } },
                            { textus: "proponit:", lemma: "propono", morphologia: "Presente Indicativo Activo, 3ª Persona Singular", syntaxis: "Verbo Principal", translatio: { es: "expone", en: "sets forth", zh: "提出" } }
                        ],
                        ordo_syntacticus: "Oración simple con el sujeto 'Liscus' modificado por un participio ('adductus') y una cláusula de relativo ('quod... tacuerat').",
                        notae: "La oración sirve de introducción al discurso indirecto que seguirá, estableciendo el motivo por el que Lisco decide hablar.",
                        translationes: {
                            es: "Entonces finalmente Lisco, inducido por el discurso de César, expone lo que antes había callado:",
                            en: "Then at last Liscus, influenced by Caesar's speech, sets forth what he had been silent about before:",
                            zh: "那時，利斯庫斯終於因凱撒的演說而動容，提出了他之前一直沉默未言的事情："
                        }
                    },
                    {
                        id_orationis: 'o2',
                        original_lat: "Esse non nullos, quorum auctoritas apud plebem plurimum ualeat, qui priuatim plus possint quam ipsi magistratus.",
                        verba: [
                            { textus: "Esse", lemma: "sum", morphologia: "Presente Infinitivo", syntaxis: "Verbo (oración de infinitivo)", translatio: { es: "que hay", en: "that there are", zh: "有一些" } },
                            { textus: "non", lemma: "non", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "no", en: "not", zh: "不" } },
                            { textus: "nullos,", lemma: "nullus", morphologia: "Acusativo Masculino Plural", syntaxis: "Sujeto de Infinitivo", translatio: { es: "ningunos (algunos)", en: "none (some)", zh: "沒有 (一些)" } },
                            { textus: "quorum", lemma: "qui", morphologia: "Genitivo Masculino Plural", syntaxis: "Complemento del Nombre", translatio: { es: "cuya", en: "whose", zh: "他們的" } },
                            { textus: "auctoritas", lemma: "auctoritas", morphologia: "Nominativo Femenino Singular", syntaxis: "Sujeto", translatio: { es: "autoridad", en: "authority", zh: "權威" } },
                            { textus: "apud", lemma: "apud", morphologia: "Preposición (+ Acusativo)", syntaxis: "Modificador Preposicional", translatio: { es: "entre", en: "among", zh: "在...之中" } },
                            { textus: "plebem", lemma: "plebs", morphologia: "Acusativo Femenino Singular", syntaxis: "Complemento de 'apud'", translatio: { es: "la plebe", en: "the common people", zh: "平民" } },
                            { textus: "plurimum", lemma: "multum", morphologia: "Adverbio Superlativo", syntaxis: "Modificador verbal", translatio: { es: "muchísimo", en: "very much", zh: "極大地" } },
                            { textus: "ualeat,", lemma: "valeo", morphologia: "Presente Subjuntivo Activo, 3ª Persona Singular", syntaxis: "Verbo", translatio: { es: "vale", en: "is strong", zh: "有影響" } },
                            { textus: "qui", lemma: "qui", morphologia: "Nominativo Masculino Plural", syntaxis: "Sujeto", translatio: { es: "quienes", en: "who", zh: "他們" } },
                            { textus: "priuatim", lemma: "privatim", morphologia: "Adverbio", syntaxis: "Modificador verbal", translatio: { es: "en privado", en: "privately", zh: "私下裡" } },
                            { textus: "plus", lemma: "multum", morphologia: "Adverbio Comparativo", syntaxis: "Modificador verbal", translatio: { es: "más", en: "more", zh: "更" } },
                            { textus: "possint", lemma: "possum", morphologia: "Presente Subjuntivo Activo, 3ª Persona Plural", syntaxis: "Verbo", translatio: { es: "pueden", en: "are able", zh: "有能力" } },
                            { textus: "quam", lemma: "quam", morphologia: "Adverbio Comparativo", syntaxis: "Nexo", translatio: { es: "que", en: "than", zh: "比" } },
                            { textus: "ipsi", lemma: "ipse", morphologia: "Nominativo Masculino Plural", syntaxis: "Atributo", translatio: { es: "los propios", en: "themselves", zh: "自己" } },
                            { textus: "magistratus.", lemma: "magistratus", morphologia: "Nominativo Masculino Plural", syntaxis: "Sujeto (de un 'possunt' elidido)", translatio: { es: "magistrados", en: "magistrates", zh: "官員" } }
                        ],
                        ordo_syntacticus: "Discurso indirecto en estilo de oración de infinitivo. El sujeto es 'non nullos'. Contiene dos cláusulas de relativo ('quorum... ualeat' y 'qui... possint') con los verbos en subjuntivo, como es norma en el estilo indirecto.",
                        notae: "La construcción 'non nullus' es un ejemplo de lítotes (atenuación), y significa 'algunos'.",
                        translationes: {
                            es: "(Dice) que hay algunos cuya autoridad vale muchísimo entre la plebe, quienes en privado pueden más que los propios magistrados.",
                            en: "(He says) that there are some whose authority is very strong among the common people, who in a private capacity are more powerful than the magistrates themselves.",
                            zh: "（他說）有一些人，他們的權威在平民間影響極大，這些人私下的權勢甚至超過了官員本身。"
                        }
                    },
                    {
                        id_orationis: 'o3',
                        original_lat: "Hos seditiosa atque inproba oratione multitudinem deterrere ne frumentum conferant quod debeant:",
                        verba: [
                            { textus: "Hos", lemma: "hic", morphologia: "Acusativo Masculino Plural", syntaxis: "Sujeto de Infinitivo", translatio: { es: "que estos", en: "that these men", zh: "這些人" } },
                            { textus: "seditiosa", lemma: "seditiosus", morphologia: "Ablativo Femenino Singular", syntaxis: "Atributo", translatio: { es: "sediciosa", en: "seditious", zh: "煽動性的" } },
                            { textus: "atque", lemma: "atque", morphologia: "Conjunción Coordinante", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "以及" } },
                            { textus: "inproba", lemma: "improbus", morphologia: "Ablativo Femenino Singular", syntaxis: "Atributo", translatio: { es: "perversa", en: "wicked", zh: "惡意的" } },
                            { textus: "oratione", lemma: "oratio", morphologia: "Ablativo Femenino Singular", syntaxis: "Complemento de Medio", translatio: { es: "con un discurso", en: "by speech", zh: "言論" } },
                            { textus: "multitudinem", lemma: "multitudo", morphologia: "Acusativo Femenino Singular", syntaxis: "Objeto Directo", translatio: { es: "a la multitud", en: "the multitude", zh: "群眾" } },
                            { textus: "deterrere", lemma: "deterreo", morphologia: "Presente Infinitivo Activo", syntaxis: "Verbo (oración de infinitivo)", translatio: { es: "disuaden", en: "dissuade", zh: "阻止" } },
                            { textus: "ne", lemma: "ne", morphologia: "Conjunción Final Negativa", syntaxis: "Nexo", translatio: { es: "para que no", en: "from", zh: "不要" } },
                            { textus: "frumentum", lemma: "frumentum", morphologia: "Acusativo Neutro Singular", syntaxis: "Objeto Directo", translatio: { es: "el grano", en: "the grain", zh: "糧食" } },
                            { textus: "conferant", lemma: "confero", morphologia: "Presente Subjuntivo Activo, 3ª Persona Plural", syntaxis: "Verbo", translatio: { es: "aporten", en: "providing", zh: "繳納" } },
                            { textus: "quod", lemma: "qui", morphologia: "Acusativo Neutro Singular", syntaxis: "Objeto Directo", translatio: { es: "que", en: "which", zh: "他們" } },
                            { textus: "debeant:", lemma: "debeo", morphologia: "Presente Subjuntivo Activo, 3ª Persona Plural", syntaxis: "Verbo", translatio: { es: "deben", en: "they owe", zh: "應該繳納的" } }
                        ],
                        ordo_syntacticus: "Oración de infinitivo ('Hos... deterrere') seguida de una cláusula final negativa ('ne... conferant') que a su vez contiene una cláusula de relativo ('quod debeant').",
                        notae: "El subjuntivo 'debeant' se debe a que está dentro de la cláusula final, reflejando la perspectiva de los que disuaden.",
                        translationes: {
                            es: "Que estos, con un discurso sedicioso y perverso, disuaden a la multitud de que aporten el grano que deben.",
                            en: "That these men, by seditious and wicked speech, dissuade the multitude from providing the grain which they owe.",
                            zh: "這些人用煽動性和惡意的言論阻止群眾繳納他們理應繳納的糧食。"
                        }
                    },
                    {
                        id_orationis: 'o4',
                        original_lat: "praestare, si iam principatum Galliae optinere non possint, Gallorum quam Romanorum imperia perferre;",
                        verba: [
                            { textus: "praestare,", lemma: "praesto", morphologia: "Presente Infinitivo Activo", syntaxis: "Verbo (impersonal)", translatio: { es: "que es preferible", en: "that it is better", zh: "（他們說）寧可" } },
                            { textus: "si", lemma: "si", morphologia: "Conjunción Condicional", syntaxis: "Nexo", translatio: { es: "si", en: "if", zh: "如果" } },
                            { textus: "iam", lemma: "iam", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "ya", en: "now", zh: "既然" } },
                            { textus: "principatum", lemma: "principatus", morphologia: "Acusativo Masculino Singular", syntaxis: "Objeto Directo", translatio: { es: "la hegemonía", en: "the leadership", zh: "領袖地位" } },
                            { textus: "Galliae", lemma: "Gallia", morphologia: "Genitivo Femenino Singular", syntaxis: "Complemento del Nombre", translatio: { es: "de la Galia", en: "of Gaul", zh: "高盧的" } },
                            { textus: "optinere", lemma: "optineo", morphologia: "Presente Infinitivo Activo", syntaxis: "Verbo (complemento)", translatio: { es: "obtener", en: "to hold", zh: "保有" } },
                            { textus: "non", lemma: "non", morphologia: "Adverbio de Negación", syntaxis: "Modificador", translatio: { es: "no", en: "not", zh: "不能" } },
                            { textus: "possint,", lemma: "possum", morphologia: "Presente Subjuntivo Activo, 3ª Persona Plural", syntaxis: "Verbo", translatio: { es: "pueden", en: "they cannot", zh: "能夠" } },
                            { textus: "Gallorum", lemma: "Gallus", morphologia: "Genitivo Masculino Plural", syntaxis: "Complemento del Nombre", translatio: { es: "de los Galos", en: "of Gauls", zh: "高盧人" } },
                            { textus: "quam", lemma: "quam", morphologia: "Adverbio Comparativo", syntaxis: "Nexo", translatio: { es: "que", en: "than", zh: "也不願" } },
                            { textus: "Romanorum", lemma: "Romanus", morphologia: "Genitivo Masculino Plural", syntaxis: "Complemento del Nombre", translatio: { es: "de los Romanos", en: "of Romans", zh: "羅馬人" } },
                            { textus: "imperia", lemma: "imperium", morphologia: "Acusativo Neutro Plural", syntaxis: "Sujeto de Infinitivo", translatio: { es: "los mandos", en: "the commands", zh: "的統治" } },
                            { textus: "perferre;", lemma: "perfero", morphologia: "Presente Infinitivo Activo", syntaxis: "Verbo (sujeto de 'praestare')", translatio: { es: "soportar", en: "to endure", zh: "忍受" } }
                        ],
                        ordo_syntacticus: "Oración de infinitivo impersonal ('praestare'), cuyo sujeto es otro infinitivo ('perferre'). Contiene una cláusula condicional ('si... non possint').",
                        notae: "Esta es la esencia del argumento nacionalista galo que César enfrentará a menudo: la preferencia de un dominio galo sobre uno extranjero, incluso si es el de un rival.",
                        translationes: {
                            es: "Que es preferible, si ya no pueden obtener la hegemonía de la Galia, soportar los mandos de los Galos que los de los Romanos.",
                            en: "That it is better, if they cannot now hold the leadership of Gaul, to endure the commands of Gauls than of Romans.",
                            zh: "既然不能保有高盧的領袖地位，寧可忍受高盧人的統治，也不願忍受羅馬人的統治。"
                        }
                    },
                    {
                        id_orationis: 'o5',
                        original_lat: "neque dubitare [debeant] quin, si Heluetios superauerint Romani, una cum reliqua Gallia Haeduis libertatem sint erepturi.",
                        verba: [
                            { textus: "neque", lemma: "neque", morphologia: "Conjunción Coordinante", syntaxis: "Nexo", translatio: { es: "y que no", en: "and not", zh: "並且（他們）" } },
                            { textus: "dubitare", lemma: "dubito", morphologia: "Presente Infinitivo Activo", syntaxis: "Verbo", translatio: { es: "dudan", en: "to doubt", zh: "毫不懷疑" } },
                            { textus: "quin,", lemma: "quin", morphologia: "Conjunción", syntaxis: "Nexo", translatio: { es: "de que", en: "that", zh: "羅馬人" } },
                            { textus: "si", lemma: "si", morphologia: "Conjunción Condicional", syntaxis: "Nexo", translatio: { es: "si", en: "if", zh: "如果" } },
                            { textus: "Heluetios", lemma: "Helvetius", morphologia: "Acusativo Masculino Plural", syntaxis: "Objeto Directo", translatio: { es: "a los Helvecios", en: "the Helvetii", zh: "赫爾維蒂人" } },
                            { textus: "superauerint", lemma: "supero", morphologia: "Perfecto Subjuntivo Activo, 3ª Persona Plural", syntaxis: "Verbo", translatio: { es: "vencen", en: "they defeat", zh: "擊敗了" } },
                            { textus: "Romani,", lemma: "Romanus", morphologia: "Nominativo Masculino Plural", syntaxis: "Sujeto", translatio: { es: "los Romanos", en: "the Romans", zh: "羅馬人" } },
                            { textus: "una", lemma: "una", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "juntamente", en: "together", zh: "將會" } },
                            { textus: "cum", lemma: "cum", morphologia: "Preposición (+ Ablativo)", syntaxis: "Modificador Preposicional", translatio: { es: "con", en: "with", zh: "連同" } },
                            { textus: "reliqua", lemma: "reliquus", morphologia: "Ablativo Femenino Singular", syntaxis: "Atributo", translatio: { es: "el resto de", en: "the rest of", zh: "其餘的" } },
                            { textus: "Gallia", lemma: "Gallia", morphologia: "Ablativo Femenino Singular", syntaxis: "Complemento de 'cum'", translatio: { es: "la Galia", en: "Gaul", zh: "高盧" } },
                            { textus: "Haeduis", lemma: "Haeduus", morphologia: "Dativo Masculino Plural", syntaxis: "Objeto Indirecto (de Separación)", translatio: { es: "a los Eduos", en: "from the Haedui", zh: "從愛杜依人手中" } },
                            { textus: "libertatem", lemma: "libertas", morphologia: "Acusativo Femenino Singular", syntaxis: "Objeto Directo", translatio: { es: "la libertad", en: "their liberty", zh: "自由" } },
                            { textus: "sint", lemma: "sum", morphologia: "Presente Subjuntivo, 3ª Persona Plural", syntaxis: "Verbo (auxiliar)", translatio: { es: "van a", en: "are going to", zh: "剝奪" } },
                            { textus: "erepturi.", lemma: "eripio", morphologia: "Participio Futuro Activo, Nominativo Plural", syntaxis: "Verbo (Perifrástica Activa)", translatio: { es: "arrebatar", en: "snatch away", zh: "（將會）" } }
                        ],
                        ordo_syntacticus: "Oración de infinitivo ('[non] dubitare') que rige una cláusula con 'quin' y verbo en subjuntivo perifrástico ('sint erepturi'). Contiene una cláusula condicional ('si... superauerint').",
                        notae: "El texto original omite 'debeant' tras 'dubitare'. La construcción 'sint erepturi' es la forma del infinitivo futuro activo en una cláusula subordinada en estilo indirecto.",
                        translationes: {
                            es: "y que no dudan de que, si los Romanos vencen a los Helvecios, juntamente con el resto de la Galia van a arrebatar la libertad a los Eduos.",
                            en: "and they do not doubt that, if the Romans defeat the Helvetii, they are going to snatch away liberty from the Haedui together with the rest of Gaul.",
                            zh: "並且他們毫不懷疑，一旦羅馬人擊敗了赫爾維蒂人，他們將會連同高盧其餘地區一起，從愛杜依人手中剝奪自由。"
                        }
                    },
                    {
                        id_orationis: 'o6',
                        original_lat: "Ab isdem nostra consilia quaeque in castris gerantur hostibus enuntiari:",
                        verba: [
                            { textus: "Ab", lemma: "a/ab", morphologia: "Preposición (+ Ablativo)", syntaxis: "Complemento Agente", translatio: { es: "por", en: "by", zh: "由" } },
                            { textus: "isdem", lemma: "idem", morphologia: "Ablativo Masculino Plural", syntaxis: "Complemento de 'ab'", translatio: { es: "estos mismos", en: "these same men", zh: "這些人" } },
                            { textus: "nostra", lemma: "noster", morphologia: "Nominativo/Acusativo Neutro Plural", syntaxis: "Sujeto de Infinitivo", translatio: { es: "nuestros", en: "our", zh: "我方的" } },
                            { textus: "consilia", lemma: "consilium", morphologia: "Nominativo/Acusativo Neutro Plural", syntaxis: "Sujeto de Infinitivo", translatio: { es: "planes", en: "plans", zh: "計畫" } },
                            { textus: "quaeque", lemma: "quique", morphologia: "Nominativo/Acusativo Neutro Plural", syntaxis: "Sujeto de Infinitivo", translatio: { es: "y las cosas que", en: "and whatever things", zh: "以及" } },
                            { textus: "in", lemma: "in", morphologia: "Preposición (+ Ablativo)", syntaxis: "Modificador", translatio: { es: "en", en: "in", zh: "在" } },
                            { textus: "castris", lemma: "castra", morphologia: "Ablativo Neutro Plural", syntaxis: "Complemento de 'in'", translatio: { es: "el campamento", en: "the camp", zh: "營中" } },
                            { textus: "gerantur", lemma: "gero", morphologia: "Presente Subjuntivo Pasivo, 3ª Persona Plural", syntaxis: "Verbo", translatio: { es: "suceden", en: "are going on", zh: "發生的事" } },
                            { textus: "hostibus", lemma: "hostis", morphologia: "Dativo Masculino Plural", syntaxis: "Objeto Indirecto", translatio: { es: "a los enemigos", en: "to the enemy", zh: "向敵人" } },
                            { textus: "enuntiari:", lemma: "enuntio", morphologia: "Presente Infinitivo Pasivo", syntaxis: "Verbo", translatio: { es: "son comunicados", en: "are announced", zh: "洩漏" } }
                        ],
                        ordo_syntacticus: "Oración de infinitivo pasivo ('consilia... enuntiari') con una cláusula de relativo subordinada ('quaeque... gerantur').",
                        notae: "Lisco acusa directamente de espionaje y traición.",
                        translationes: {
                            es: "Que por estos mismos nuestros planes y las cosas que suceden en el campamento son comunicados a los enemigos.",
                            en: "That by these same men our plans and whatever things are going on in the camp are announced to the enemy.",
                            zh: "我方的計畫以及營中發生的一切，都被這些人洩漏給了敵人。"
                        }
                    },
                    {
                        id_orationis: 'o7',
                        original_lat: "hos a se coerceri non posse.",
                        verba: [
                            { textus: "hos", lemma: "hic", morphologia: "Acusativo Masculino Plural", syntaxis: "Sujeto de Infinitivo", translatio: { es: "que estos", en: "that these men", zh: "這些人" } },
                            { textus: "a", lemma: "a/ab", morphologia: "Preposición (+ Ablativo)", syntaxis: "Complemento Agente", translatio: { es: "por", en: "by", zh: "被" } },
                            { textus: "se", lemma: "sui", morphologia: "Ablativo (Reflexivo)", syntaxis: "Complemento de 'a'", translatio: { es: "él", en: "him", zh: "他" } },
                            { textus: "coerceri", lemma: "coerceo", morphologia: "Presente Infinitivo Pasivo", syntaxis: "Verbo", translatio: { es: "ser contenidos", en: "to be restrained", zh: "制止" } },
                            { textus: "non", lemma: "non", morphologia: "Adverbio de Negación", syntaxis: "Modificador", translatio: { es: "no", en: "not", zh: "不能" } },
                            { textus: "posse.", lemma: "possum", morphologia: "Presente Infinitivo", syntaxis: "Verbo Modal", translatio: { es: "pueden", en: "could", zh: "能夠" } }
                        ],
                        ordo_syntacticus: "Oración de infinitivo pasivo ('hos... coerceri') dependiente de 'posse'.",
                        notae: "Lisco confiesa su impotencia, justificando así su silencio previo.",
                        translationes: {
                            es: "Que estos no pueden ser contenidos por él.",
                            en: "That these men could not be restrained by him.",
                            zh: "他無法制止這些人。"
                        }
                    },
                    {
                        id_orationis: 'o8',
                        original_lat: "Quin etiam, quod necessariam rem coactus Caesari enuntiarit, intellegere sese quanto id cum periculo fecerit, et ob eam causam quam diu tacuisse.",
                        verba: [
                            { textus: "Quin", lemma: "quin", morphologia: "Adverbio", syntaxis: "Nexo", translatio: { es: "incluso", en: "nay even", zh: "甚至" } },
                            { textus: "etiam,", lemma: "etiam", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "también", en: "also", zh: "而且" } },
                            { textus: "quod", lemma: "quod", morphologia: "Conjunción Causal", syntaxis: "Nexo", translatio: { es: "porque", en: "because", zh: "因為" } },
                            { textus: "necessariam", lemma: "necessarius", morphologia: "Acusativo Femenino Singular", syntaxis: "Atributo", translatio: { es: "necesaria", en: "a necessary", zh: "一件必要" } },
                            { textus: "rem", lemma: "res", morphologia: "Acusativo Femenino Singular", syntaxis: "Objeto Directo", translatio: { es: "un asunto", en: "matter", zh: "之事" } },
                            { textus: "coactus", lemma: "cogo", morphologia: "Participio Perfecto Pasivo, Nominativo Singular", syntaxis: "Aposición", translatio: { es: "forzado", en: "compelled", zh: "被迫" } },
                            { textus: "Caesari", lemma: "Caesar", morphologia: "Dativo Masculino Singular", syntaxis: "Objeto Indirecto", translatio: { es: "a César", en: "to Caesar", zh: "向凱撒" } },
                            { textus: "enuntiarit,", lemma: "enuntio", morphologia: "Perfecto Subjuntivo Activo, 3ª Persona Singular", syntaxis: "Verbo", translatio: { es: "había revelado", en: "he had revealed", zh: "透露了" } },
                            { textus: "intellegere", lemma: "intellego", morphologia: "Presente Infinitivo Activo", syntaxis: "Verbo", translatio: { es: "comprendía", en: "he understood", zh: "他明白" } },
                            { textus: "sese", lemma: "sui", morphologia: "Acusativo (Reflexivo)", syntaxis: "Sujeto de Infinitivo", translatio: { es: "que él mismo", en: "that he himself", zh: "自己" } },
                            { textus: "quanto", lemma: "quantus", morphologia: "Ablativo Neutro Singular", syntaxis: "Atributo", translatio: { es: "con cuánto", en: "with how much", zh: "冒著多大的" } },
                            { textus: "id", lemma: "is", morphologia: "Acusativo Neutro Singular", syntaxis: "Objeto Directo", translatio: { es: "esto", en: "this", zh: "做這件事" } },
                            { textus: "cum", lemma: "cum", morphologia: "Preposición (+ Ablativo)", syntaxis: "Modificador", translatio: { es: "con", en: "with", zh: "（伴隨）" } },
                            { textus: "periculo", lemma: "periculum", morphologia: "Ablativo Neutro Singular", syntaxis: "Complemento de 'cum'", translatio: { es: "peligro", en: "danger", zh: "風險" } },
                            { textus: "fecerit,", lemma: "facio", morphologia: "Perfecto Subjuntivo Activo, 3ª Persona Singular", syntaxis: "Verbo", translatio: { es: "lo había hecho", en: "he had done", zh: "（完成）" } },
                            { textus: "et", lemma: "et", morphologia: "Conjunción Coordinante", syntaxis: "Nexo", translatio: { es: "y", en: "and", zh: "並且" } },
                            { textus: "ob", lemma: "ob", morphologia: "Preposición (+ Acusativo)", syntaxis: "Modificador Causal", translatio: { es: "por", en: "on account of", zh: "由於" } },
                            { textus: "eam", lemma: "is", morphologia: "Acusativo Femenino Singular", syntaxis: "Atributo", translatio: { es: "esa", en: "that", zh: "那個" } },
                            { textus: "causam", lemma: "causa", morphologia: "Acusativo Femenino Singular", syntaxis: "Complemento de 'ob'", translatio: { es: "razón", en: "reason", zh: "原因" } },
                            { textus: "quam", lemma: "quam", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "cuán", en: "how", zh: "（連接詞）" } },
                            { textus: "diu", lemma: "diu", morphologia: "Adverbio", syntaxis: "Modificador", translatio: { es: "largo tiempo", en: "long", zh: "長久" } },
                            { textus: "tacuisse.", lemma: "taceo", morphologia: "Perfecto Infinitivo Activo", syntaxis: "Verbo", translatio: { es: "había callado", en: "he had been silent", zh: "他保持沉默" } }
                        ],
                        ordo_syntacticus: "Oración de infinitivo ('intellegere sese') que rige una interrogativa indirecta ('quanto... fecerit') y se coordina con otro infinitivo ('tacuisse').",
                        notae: "Lisco termina su discurso explicando que su silencio no era por deslealtad, sino por miedo, un argumento diseñado para ganarse la clemencia de César.",
                        translationes: {
                            es: "Que incluso también, porque forzado había revelado a César un asunto necesario, comprendía él mismo con cuánto peligro lo había hecho, y que por esa razón había callado tanto tiempo.",
                            en: "Nay even, because compelled he had revealed a necessary matter to Caesar, he himself understood with how much danger he had done it, and on account of that reason he had been silent for so long.",
                            zh: "甚至，因為他是被迫向凱撒透露一件必要之事，他自己明白做這件事冒了多大的風險，並且正因如此，他才沉默了這麼久。"
                        }
                    }
                ]
            }
        ]
    }
};

/**
 * VOLLSTÄNDIGE WISSENSDATENBANK - RESTLOS ALLE INHALTE AUS DEM PDF
 */
const database = {
    ottonen: {
        title: "Die Ottonen (Liudolfinger)",
        menu: [
            { id: "gen", title: "1. Liudolfinger Allgemein" },
            { id: "o1_jugend", title: "2. Otto I.: Jugend & Aufstieg" },
            { id: "o1_herrschaft", title: "3. Otto I.: Konflikte & Aufstände" },
            { id: "o1_macht", title: "4. Otto I.: Machtausübung 941-951" },
            { id: "o1_beziehungen", title: "5. Otto I.: Außenbeziehungen" },
            { id: "o1_adelheid", title: "6. Otto I.: Adelheid & Italien" },
            { id: "o1_liudolf", title: "7. Otto I.: Liudolf-Aufstand" },
            { id: "o1_lechfeld", title: "8. Otto I.: Lechfeld & Ungarn" },
            { id: "o1_kaiser", title: "9. Otto I.: Kaiserkrönung" },
            { id: "o1_letzte", title: "10. Otto I.: Die letzten Jahre" },
            { id: "o1_wirkung", title: "11. Otto I.: Wirkung in der Geschichte" },
            { id: "o2", title: "12. Otto II.: Leben & Herrschaft" },
            { id: "o2_konflikte", title: "13. Otto II.: Innere Konflikte" },
            { id: "o2_italien", title: "14. Otto II.: Italienpolitik" },
            { id: "o2_kloester", title: "15. Otto II.: Klosterpolitik" },
            { id: "o2_niederlage", title: "16. Otto II.: Süditalien-Katastrophe" },
            { id: "o2_thron", title: "17. Otto II.: Thronfolgeregelung" },
            { id: "o2_slawen", title: "18. Otto II.: Slawenaufstand" },
            { id: "o3", title: "19. Otto III.: Kampf um Nachfolge" },
            { id: "o3_regentschaft", title: "20. Otto III.: Regentschaft der Kaiserinnen" },
            { id: "o3_herrschaft", title: "21. Otto III.: Herrschaftsantritt" },
            { id: "o3_italien1", title: "22. Otto III.: Erster Italienzug" },
            { id: "o3_italien2", title: "23. Otto III.: Zweiter Italienzug" },
            { id: "o3_osten", title: "24. Otto III.: Aktivitäten im Osten" },
            { id: "o3_tod", title: "25. Otto III.: Rückkehr & Tod" },
            { id: "tree", title: "26. Interaktiver Stammbaum" },
            { id: "quiz", title: "27. Prüfungstraining" }
        ],
        content: {
            gen: `
                <div class="card">
                    <h2>Die Liudolfinger Dynastie</h2>
                    <p>Sächsisches Adelsgeschlecht & deutsche Herrscherdynastie im <span class="highlight">ostfränkisch-deutschen Reich</span> zwischen 919 bis 1024.</p>
                    <h3>Die Herrscherfolge:</h3>
                    <ul>
                        <li><span class="highlight">Heinrich I.</span> (König 919–936): Begründer der Dynastie nach Tod Konrad I.</li>
                        <li><span class="highlight">Otto I. (der Große)</span> (936–973, ab 962 als Kaiser): Festigung des Reiches.</li>
                        <li><span class="highlight">Otto II.</span> (Mitkönig 963, Mitkaiser 967, Alleinherrscher 973–983): Harte Hand, tragisches Ende.</li>
                        <li><span class="highlight">Otto III.</span> (983–1002, ab 996 als Kaiser): Visionär mit frühem Tod.</li>
                        <li><span class="highlight">Heinrich II.</span> (1002–1024, ab 1014 als Kaiser): Letzter Liudolfinger.</li>
                    </ul>
                </div>`,
            o1_jugend: `
                <div class="card">
                    <h2>Otto I.: Jugend & Thronfolge</h2>
                    <div class="info-block">Geboren 912 als Sohn von Heinrich I. (ab 919 König) und Mathilde. Er hatte einen Halbbruder aus der ersten Ehe des Vaters sowie jüngere volle Geschwister aus der zweiten Ehe.</div>
                    
                    <h3>Frühe Jahre</h3>
                    <ul>
                        <li>Vermutlich militärische Ausbildung</li>
                        <li>Kampf gegen slawische Stämme in jungen Jahren</li>
                        <li>Zeugung eines Sohnes (Wilhelm) mit einer Slawin</li>
                    </ul>

                    <h3>Das neue Prinzip der Thronfolge</h3>
                    <p>Konrad I. stirbt → Heinrich I. greift sich den Thron. Um 929/930 bestimmte Heinrich I. Otto zum <span class="highlight">alleinigen Thronfolger</span>.</p>
                    
                    <div class="info-block">
                        <p><span class="important">WICHTIG:</span> Dies war ein radikaler Bruch!</p>
                        <ul>
                            <li><span class="important">Keine Machtteilung</span> nach karolingischem Prinzip mehr</li>
                            <li>Neues Prinzip: <span class="highlight">Unteilbarkeit des Königtums</span></li>
                            <li>Ottos Brüder wurden vom Thron ausgeschlossen</li>
                            <li>Otto hatte zu diesem Zeitpunkt allerdings noch KEINE Macht, lediglich Thronanspruch</li>
                        </ul>
                    </div>

                    <h3>Heiratspolitik</h3>
                    <p>Während der Krönungsvorbereitungen suchte Heinrich I. eine Braut für Otto im englischen Königshaus.</p>
                    <ul>
                        <li><span class="highlight">Ziel:</span> Dynastien verknüpfen</li>
                        <li>929: Erste Ehe mit <span class="highlight">Edgitha aus England</span></li>
                    </ul>

                    <h3>Die Krönung in Aachen (936)</h3>
                    <p><span class="important">02. Juli 936:</span> Tod Heinrich I. → kurz danach Otto I. zum Herzog von Sachsen & König des Ostfrankenreiches (regnum francorum orientalium)</p>
                    
                    <div class="info-block">
                        <p>Anscheinend von Franken und Sachsen zum Oberhaupt gewählt (nach Empfehlung durch Heinrich I.)</p>
                        <ul>
                            <li>Wahl des Herrschers in der Pfalz <span class="highlight">Aachen</span> (durch Otto ausgewählt!)</li>
                            <li>Etablierung einer <span class="highlight">fränkisch-karolingischen Tradition</span></li>
                            <li>Auch das Volk stimmte in der dortigen Kirche zu</li>
                            <li>Insignienübergabe (Schwert, Mantel…) durch Mainzer Erzbischof</li>
                        </ul>
                    </div>
                </div>`,
            o1_herrschaft: `
                <div class="card">
                    <h2>Herrschaftsbeginn: Familienkonflikte</h2>
                    
                    <h3>Streit um den Herrschaftsantritt</h3>
                    <div class="info-block">
                        <p>Anscheinend Streit in der Familie:</p>
                        <ul>
                            <li><span class="important">Ottos Bruder Heinrich I.</span> (Herzog von Bayern) wollte auch auf den Thron</li>
                            <li>Der war ziemlich "mad" auf seinen Bruder Otto</li>
                            <li>Auch <span class="important">angespanntes Verhältnis zu Mutter Mathilde</span></li>
                            <li>Diese war für Heinrich I. aus Bayern als König, da dieser geboren wurde, NACHDEM Heinrich I. (Vater von Otto) bereits König war</li>
                            <li>"Unter dem Purpur geboren" = große Würde</li>
                            <li>Otto I. entmachtete seine Mutter in deren Witwengut Quedlinburg</li>
                        </ul>
                    </div>

                    <h3>Der geschlossene Aufstand</h3>
                    <p>Viele Adlige aus Sachsen, Franken, Lothringen, Bayern waren unzufrieden mit Ottos Politik.</p>
                    
                    <div class="info-block">
                        <p><span class="highlight">Heinrich I. von Bayern</span> wollte König werden → sucht Verbündete:</p>
                        <ul>
                            <li>Herzog Eberhard (Franken)</li>
                            <li>Graf Wichmann der Ältere (Nordsachsen)</li>
                            <li>Verbündung mit Ottos Halbbruder <span class="important">Thankmar</span></li>
                            <li>⇒ Geschlossener Aufstand gegen Otto I.</li>
                        </ul>
                    </div>

                    <h3>Verlauf & Ergebnis</h3>
                    <ul>
                        <li><span class="highlight">Überläufer:</span> Hermann I. von Schwaben verbündete sich mit Otto I.</li>
                        <li>Graf Wichmann söhnt sich kurz darauf mit Otto I. aus</li>
                        <li><span class="important">Halbbruder Thankmar</span> wird bei einer Befreiungsaktion getötet</li>
                        <li>Herzog Eberhard isoliert und unterworfen</li>
                        <li>Neues Bündnis: Herzog Giselbert von Lothringen</li>
                        <li>Beide (Eberhard & Giselbert) werden in Folge der Konflikte getötet</li>
                        <li>Bruder Heinrich muss sich Otto unterwerfen</li>
                    </ul>

                    <p><span class="highlight">Ergebnis:</span> Herzogtum Franken fiel Otto I. zu (zusätzlich zu Sachsen)</p>

                    <h3>Konflikt mit den Slawen</h3>
                    <p>Ottos Verbündeter = <span class="highlight">Markgraf Gero der Große</span> (Ostsächsisch)</p>
                    <ul>
                        <li>Verteidigung + Unterwerfung des Gebietes bis zur Oder gegen die Slawen</li>
                        <li><span class="important">Um Rache zu verhindern:</span> 30 Slawenfürsten im Schlaf getötet</li>
                        <li>Bei den Gefechten → viele Verluste (vor allem bei sächsischen Fürsten)</li>
                        <li>Konflikt der Fürsten mit Markgrafen und gegen dessen Verbündeten Otto I.</li>
                    </ul>

                    <h3>Der Quedlinburger Mordplan (941)</h3>
                    <div class="info-block">
                        <p>Ottos Bruder Heinrich I. machte sich die negative Stimmung zu Nutze und versuchte eine Verschwörung gegen Otto I.</p>
                        <p><span class="important">Der Plan:</span> Otto sollte 941 in königlicher Pfalz Quedlinburg ermordet werden → Heinrich I. sollte König werden</p>
                    </div>

                    <ul>
                        <li>Otto I. bekommt Wind von der Sache → schützt sich und holt zum Gegenschlag aus</li>
                        <li><span class="important">Hinrichtung der Verschwörer</span></li>
                        <li>Erneute Unterwerfung Heinrichs I. im Winter 941</li>
                    </ul>
                </div>`,
            o1_macht: `
                <div class="card">
                    <h2>Machtausübung zwischen 941-951</h2>
                    
                    <h3>Neubesetzung von Ämtern</h3>
                    <p>Nach der Beseitigung der Unruhe → Neubesetzung von Ämtern und Besitztümern</p>
                    <ul>
                        <li>Bewusste Missachtung von Herzögen und Familienangehörigen</li>
                        <li>Beförderung der ihm ergebenen Adligen in Schlüsselpositionen</li>
                        <li><span class="important">Otto sah sich in seiner Position weit über dem restlichen Adel stehend</span></li>
                    </ul>

                    <h3>Unbestrittene königliche Machtausübung</h3>
                    <div class="info-block">
                        <p>Treue gegenüber Otto wurde belohnt ⇒ Etablierung fester Gewohnheiten</p>
                    </div>

                    <h3>Heiratspolitik als Machtinstrument</h3>
                    <p>Otto I. lehnte ungekrönte Vertragspartner ab → <span class="highlight">Heirat war enorm wichtig!</span></p>
                    
                    <p><span class="important">Beispiele:</span></p>
                    <ul>
                        <li>Westfränkischer König Ludwig IV. musste 939 Ottos Schwester <span class="highlight">Gerberga</span> heiraten</li>
                        <li><span class="highlight">Konrad der Rote</span> → Heirat seiner Tochter Liudgard und damit Herzog in Lothringen</li>
                    </ul>

                    <h3>Versöhnung mit dem Bruder</h3>
                    <p>Verleihung der Herzogswürde in Bayern an den Bruder <span class="highlight">Heinrich I.</span> → damit Thronverzicht</p>

                    <h3>Regelung der Nachfolge (946)</h3>
                    <p>Ottos Frau Edgith verstirbt 946 → Otto regelt erstmals seine Nachfolge:</p>
                    <ul>
                        <li>Verheiratung seines Sohnes <span class="highlight">Liudolf</span> mit Ida, Tochter von Hermann von Schwaben</li>
                        <li><span class="important">Liudolf wird als königlicher Nachfolger bestimmt!</span></li>
                    </ul>
                </div>`,
            o1_beziehungen: `
                <div class="card">
                    <h2>Beziehungen zu anderen Herrschern</h2>
                    
                    <h3>Probleme mit dem Westfrankenreich</h3>
                    <div class="info-block">
                        <p>Aachen als damaliger Krönungsort war kritisch (Lage in Lothringen):</p>
                        <ul>
                            <li>Politisch geschwächtes Westfränkisches Reich hatte darauf eigentlich Anspruch erhoben</li>
                            <li>Otto I. → Legitimation seines eigenen Anspruchs auf Lothringen durch Auslegung seiner selbst als <span class="highlight">Nachfolger von Karl dem Großen</span></li>
                            <li>Herstellung von Frieden mit dem Westfrankenreich durch Heirat</li>
                        </ul>
                    </div>

                    <h3>Gute Beziehungen mit dem Königreich Burgund</h3>
                    <ul>
                        <li>Heinrich I. (Vater von Otto) erwarb vom burgundischen König Rudolf III. die <span class="highlight">Heilige Lanze</span> (Relikt)</li>
                        <li>Hugo I. von Italien wollte nach dem Tod Rudolf III. (937) das Königreich Burgund übernehmen</li>
                        <li>Otto I. holte dessen Sohn Konrad an seinen Hof, welcher ab Niederburgund nach dem Tod Hugo III. erhielt</li>
                        <li><span class="important">WICHTIG:</span> Otto I. respektierte Burgund und griff dort nie nach der Krone!</li>
                    </ul>

                    <h3>Enge Kontakte mit Byzanz</h3>
                    <p>Otto I. und Byzantinischer Kaiser Konstantin VII. ⇒ Austausch mit Geschenken usw.</p>
                </div>`,
            o1_adelheid: `
                <div class="card">
                    <h2>Adelheid von Burgund und Italien</h2>
                    
                    <h3>Ausgangslage in Italien</h3>
                    <ul>
                        <li>Berengar I. von Italien stirbt 924 → Otto wenig Interesse an Machtübernahme in Italien</li>
                        <li>Stattdessen Machtübernahme durch:
                            <ul>
                                <li><span class="highlight">Hugo I.</span> (924 König von Niederburgund / 926-946 König von Italien)</li>
                                <li><span class="highlight">Lothar II.</span> (Hugos Sohn und König von Italien 946-950)</li>
                            </ul>
                        </li>
                        <li>Berengar von Ivrea stellte sich gegen die Beiden</li>
                    </ul>

                    <h3>Die Wende (950)</h3>
                    <div class="info-block">
                        <ul>
                            <li>Hugo I. starb bei Konflikten 946</li>
                            <li>Lothar II. starb plötzlich 950</li>
                            <li>Dessen Frau <span class="highlight">Adelheid</span> nun Witwe</li>
                            <li>Berengar wollte über Adelheid die Königswürde in Italien erhalten → VIEL KRITIK</li>
                        </ul>
                    </div>

                    <h3>Ottos Interesse erwacht</h3>
                    <ul>
                        <li>Adelheids Mutter war verwandt mit der schwäbischen Herzogsfamilie von Ottos Sohn</li>
                        <li>Nach dem Tod von Ottos Frau Edgith war dessen Interesse an Italien bedeutend größer</li>
                        <li><span class="important">Indirekter Anspruch auf die Kaiserwürde durch Otto</span></li>
                    </ul>

                    <h3>Die Vermählung (951)</h3>
                    <p><span class="highlight">951 = Vermählung von Otto I. und Adelheid von Burgund</span> → Königswürde für Otto</p>
                    <p><span class="important">Otto I. besiegte Berengar</span></p>
                </div>`,
            o1_liudolf: `
                <div class="card">
                    <h2>Der Aufstand durch Liudolf (Ottos Sohn)</h2>
                    
                    <h3>Die Ursachen</h3>
                    <div class="info-block">
                        <p>Potenzielle Kinder aus Ottos neuer Ehe mit Adelheid könnten Liudolfs Thronanspruch gefährden</p>
                        <p>Zudem Sorgen von Liudolf gegenüber der wachsenden Position seines Onkels <span class="important">Heinrich I.</span> (welcher oftmals gegen Otto rebelliert hatte und dennoch in dessen Gunst stand)</p>
                    </div>

                    <h3>Der Affront</h3>
                    <ul>
                        <li>Liudolf verließ seinen Vater ohne Abschied kurz nach dessen Hochzeit = <span class="important">Affront</span></li>
                        <li>Reist mit Erzbischof Friedrich von Mainz zum Papst → nach Kaiserkrönung für Otto I. fragen</li>
                        <li><span class="highlight">Papst erteilte eine Absage</span></li>
                    </ul>

                    <h3>Politische Verbündete sammeln</h3>
                    <p>Weihnachten 951 = Liudolf mit großem Gelage / sammelte politische Verbündete um sich</p>
                    <ul>
                        <li>War verdächtig, da es den Umsturzplänen von Heinrich I. ähnelte</li>
                        <li><span class="important">Abschluss von Bindungen gegen den König!!!</span></li>
                    </ul>

                    <h3>Reaktion Ottos (952)</h3>
                    <p>Otto I. kehrt mit Adelheid im Jahr 952 zurück und <span class="important">verwehrt seinem Sohn die Huld</span> (Wohlwollen)</p>
                    <p>Liudolf zieht engen Vertrauten Ottos auf seine Seite → <span class="highlight">Konrad der Rote</span></p>

                    <h3>Die Berengar-Intrige</h3>
                    <div class="info-block">
                        <p>Konrad der Rote:</p>
                        <ul>
                            <li>Zog Berengar auf die Seite von Ottos Gegnern</li>
                            <li>Machte diesem verbindliche Zusagen</li>
                            <li>Schickte ihn zu Verhandlungen zu Otto nach Magdeburg</li>
                        </ul>
                    </div>

                    <ul>
                        <li>Otto I. ließ Berengar Tor 3 Tage warten</li>
                        <li>Schickte diesen lediglich weg</li>
                        <li><span class="important">Gegner Ottos fühlten sich persönlich beleidigt</span></li>
                    </ul>

                    <h3>Ottos Kompromiss</h3>
                    <p>Berengar und Sohn ⇒ Leistung eines <span class="highlight">Vasalleneid</span> an Otto und erhielten das Königreich Italien als Lehen!</p>

                    <h3>Eskalation</h3>
                    <div class="info-block">
                        <p>Liudolf und Konrad immer noch gegen Otto I.</p>
                        <ul>
                            <li>Nehmen mit immer mehr Verbündeten letztlich Mainz ein</li>
                            <li>Otto nun zum Handeln gezwungen → Belagerung der Stadt</li>
                            <li>Liudolf und Konrad wurden zu geächteten Feinden</li>
                            <li>Verhandlungen in Bayern aufgenommen</li>
                        </ul>
                    </div>
                </div>`,
            o1_lechfeld: `
                <div class="card">
                    <h2>Schlacht auf dem Lechfeld & Konflikt mit den Ungarn</h2>
                    
                    <h3>Die Bedrohung aus dem Osten</h3>
                    <p>Parallel zu den Konflikten mit Liudolf → immer wieder <span class="important">Ungarneinfälle</span></p>
                    <div class="info-block">
                        <p>Magyaren an der Ostgrenze des Ostfrankenreiches = starke Bedrohung</p>
                        <ul>
                            <li>Ungarn hatten Kenntnis über innenpolitische Probleme im Reich</li>
                            <li>Fielen deshalb im Frühjahr 954 in Bayern ein!</li>
                        </ul>
                    </div>

                    <h3>Der Verrat</h3>
                    <p><span class="important">Liudolf und Konrad unterstützen die Ungarn</span>, damit deren Gebiete verschont würden</p>
                    <ul>
                        <li>Weiterleitung zu Otto I.</li>
                        <li>Liudolf verlor Anhänger, da mit Ungarn paktiert</li>
                        <li>Konrad der Rote wendet sich ab</li>
                        <li>Liudolf flehte im Herbst 954 um Gnade, die ihm gewährt wurde!</li>
                        <li><span class="highlight">⇒ Konflikt zwischen Vater und Sohn beigelegt!</span></li>
                    </ul>

                    <h3>Die Schlacht am 10. August 955</h3>
                    <div class="info-block">
                        <ul>
                            <li>Ungarn vor Augsburg aufgehalten worden durch Vertrauten von Otto</li>
                            <li>Otto sammelte sein Heer → Reise nach Augsburg</li>
                            <li><span class="important">SIEG</span> = Schlacht am 10. August 955</li>
                            <li>Ottos Macht und Ansehen werden durch die Schlacht gefestigt!</li>
                        </ul>
                    </div>

                    <h3>Die Folgen</h3>
                    <ul>
                        <li><span class="important">DANACH: Keine Erhebungen mehr gegen ihn</span></li>
                        <li>Ungarn wurden sesshaft nach 955</li>
                        <li>Zusätzlich: <span class="highlight">Schlacht an der Recknitz</span> gegen die slawischen Abodriten in Sachsen</li>
                        <li>Sieg Ottos ⇒ <span class="important">keine Gnade</span> gegen äußere Feinde, wie die Slawen</li>
                    </ul>
                </div>`,
            o1_kaiser: `
                <div class="card">
                    <h2>Kaiserkrönung und italienische Politik</h2>
                    
                    <h3>Tod wichtiger Akteure</h3>
                    <p>Kurz nach Schlacht starben wichtige Akteure an Krankheiten:</p>
                    <ul>
                        <li>Liudolf</li>
                        <li>Heinrich von Bayern</li>
                    </ul>
                    <p>Liudolf sollte eigentlich Berengar II. in Italien bekämpfen, welcher seine Macht dort ausbaute</p>

                    <h3>Reichskirche als Herrschaftsinstrument</h3>
                    <div class="info-block">
                        <p>Otto versucht sein Reich erneut zu stabilisieren (laut älterer Forschung):</p>
                        <ul>
                            <li>Nutzung der Reichskirche für seine Zwecke</li>
                            <li>Jüngere Forschung sieht Theorie kritisch, da König kaum Einfluss auf geistliche Ämter</li>
                        </ul>
                    </div>

                    <p><span class="important">Dennoch:</span> Reichskirchen hatten eine Versorgungsfunktion für die ottonischen Könige</p>
                    <ul>
                        <li>Beherbergten die Könige</li>
                        <li>Stellten zur Zeit Otto II. ein Großteil des Heeres</li>
                    </ul>

                    <h3>Berengar baut Macht aus</h3>
                    <p>Nach Tod Liudolfs = Berengar baut Macht in Oberitalien und Rom aus (durfte er eigentlich nicht!)</p>
                    <ul>
                        <li><span class="important">KONFLIKT</span> mit Papst Johannes XII.</li>
                        <li>Bittet Otto I. um Hilfe gegen Berengar (960)</li>
                    </ul>

                    <h3>Ottos Vorbereitungen (961)</h3>
                    <ul>
                        <li><span class="highlight">Otto II. wird Mitkönig</span> und Vertreter (Mai 961)</li>
                        <li>Königssalbung Pfingsten 961</li>
                        <li>Aufbruch Otto I. nach Italien</li>
                        <li>Berengar verschanzte sich in Burgen → KEIN offener Kampf</li>
                    </ul>

                    <h3>Die Kaiserkrönung (Februar 962)</h3>
                    <div class="info-block">
                        <p><span class="important">Februar 962: Krönung Otto I. durch Johannes XII. zum römisch-deutscher Kaiser</span></p>
                        <ul>
                            <li>Adelheid als Ottos Frau erhält diesen Titel ebenfalls!</li>
                            <li><span class="highlight">↪ NOVUM! Das gab es vorher nie!</span></li>
                            <li>Inanspruchnahme von Italien durch das Kaiserpaar!</li>
                        </ul>
                    </div>

                    <h3>Ottonianum</h3>
                    <p><span class="highlight">Ottonianum</span> → weitreichende Rechte und Besitztümer für Otto (regelte auch Wahl des Papstes)</p>

                    <h3>Konflikt mit dem Papst (ab 963)</h3>
                    <p>Ab 963 → Otto gegen Berengar und seinen Sohn, welcher mit Papst Johannes XII. verbündet</p>
                    <ul>
                        <li>Papst Johannes XII. war anscheinend verstimmt über Machtwillen von Otto</li>
                    </ul>

                    <div class="info-block">
                        <p>Otto musste die Belagerung von Berengar II. abbrechen und nach Rom eilen:</p>
                        <ul>
                            <li>Wollte Papst zur Rede stellen</li>
                            <li>ABER: Dieser war geflohen!</li>
                            <li>Bürger Roms pissig: "Kein Papst ohne deren Zustimmung gewählt werden würde"</li>
                        </ul>
                    </div>

                    <h3>Absetzung des Papstes</h3>
                    <p>Papst Johannes wurde durch eine Synode (Gremium) im Beisein des Kaisers <span class="important">abgesetzt</span></p>
                    <ul>
                        <li><span class="highlight">Neuer Papst Leo VII.</span></li>
                        <li><span class="important">Gab es noch nie! Nur Gott durfte über den Nachfolger entscheiden!</span></li>
                    </ul>

                    <h3>Weitere Konflikte</h3>
                    <ul>
                        <li>Johannes XII. versuchte es mit bewaffnetem Aufstand gegen Otto → Scheiterte</li>
                        <li>ABER: Johannes schafft es mit Römern zusammen Leo VII. zu verscheuchen</li>
                        <li>Neuer Papst Benedikt V. (trotz kaiserlichem Verbot)</li>
                        <li>Otto kommt 964 zurück nach Rom → setzt Benedikt ab und erhebt Leo VII. zum Kaiser</li>
                    </ul>
                </div>`,
            o1_letzte: `
                <div class="card">
                    <h2>Die letzten Jahre</h2>
                    
                    <h3>Rückkehr in den Norden (Winter 965)</h3>
                    <p>⇒ Rückkehr Otto des Großen in den Norden des Reiches im Winter 965</p>

                    <h3>Restliche Italien-Probleme</h3>
                    <ul>
                        <li>Sohn von Berengar (Adalbert) macht nochmal Stress in Italien</li>
                        <li>Otto entstandene Burkhard von Schwaben und die Sache war geritzt</li>
                    </ul>

                    <h3>Probleme mit neuem Papst</h3>
                    <p>Problematiken mit dem neuen Papst Johannes XIII. (Nachfolger von Leo VIII.)</p>
                    <ul>
                        <li>Otto nochmal nach Italien</li>
                        <li>Dort 6 Jahre bleiben</li>
                    </ul>

                    <h3>Erzbistum Magdeburg</h3>
                    <p><span class="important">Nach langem Weg → Erreichung von Ottos Ziel:</span> Etablierung eines Erzbistums in Magdeburg</p>

                    <h3>Beziehungen zu Byzanz (967-972)</h3>
                    <p>Im Jahr 967 verstärkten sich Beziehungen mit Byzanz und Pläne für die Vermählung der dortigen Prinzessin mit seinem Sohn Otto II. (Otto = Mitkaiser ab Dezember 967)</p>
                    
                    <div class="info-block">
                        <ul>
                            <li><span class="highlight">Zweikaiserproblem</span> durch Ehe mit Theophanu auflösen</li>
                            <li>Ab 969 durch damals neuen byzantinischen Kaiser bestimmt</li>
                            <li>Hochzeit / Krönung von Theophanu im Jahr 972</li>
                        </ul>
                    </div>

                    <h3>Tod (7. Mai 973)</h3>
                    <p>973 erkrankte Otto der Große schwer → <span class="important">verstarb am 07. Mai 973 in Pfalz Memleben</span></p>
                </div>`,
            o1_wirkung: `
                <div class="card">
                    <h2>Wirkung der Person "Otto I." in der Geschichte</h2>
                    
                    <h3>Stabilisierung nach dem Zerfall</h3>
                    <div class="info-block">
                        <ul>
                            <li>Zerfall des Großfränkischen Reiches</li>
                            <li>Heinrich I. → neue Herrschaftsordnung</li>
                            <li><span class="important">Otto I. stabilisiert durch Sieg über die Ungarn das Reich 955</span></li>
                        </ul>
                    </div>

                    <h3>Zwei Phasen eines kulturellen Aufschwungs</h3>
                    <p>Angeregt durch Otto I.:</p>
                    <ul>
                        <li>Ausbau von Domschulen</li>
                        <li>Förderung von Kunst und Kirchenbau</li>
                    </ul>

                    <h3>Materielle Grundlagen</h3>
                    <p>Sicherung von materiellen Verhältnissen = Grundlage für Aufschwung</p>
                    <ul>
                        <li><span class="highlight">Einnahmen durch Tribute aus dem Slawengebiet</span></li>
                        <li><span class="highlight">Silberadern im neu erschlossenen Harz</span></li>
                    </ul>
                </div>`,
            o2: `
                <div class="card">
                    <h2>Otto II. (973–983): Leben vor der Herrschaft</h2>
                    
                    <h3>Geburt und Ausbildung</h3>
                    <p>Kind von Otto und Adelheid im Jahr 955</p>
                    <ul>
                        <li>Umfassende literarisch-geistige Bildung</li>
                        <li>Ausbildung in Kriegshandwerk und Rechtsangelegenheiten</li>
                    </ul>

                    <h3>Mitkönig (961)</h3>
                    <div class="info-block">
                        <p>961 zum Mitkönig gewählt</p>
                        <ul>
                            <li><span class="important">Bruch des sog. Gewohnheitsrechtes</span> → keine Volljährigkeit als (Mit-)Herrscher</li>
                            <li>Da Otto I. ja im Jahr 966 aufgrund politischer Konflikte in Italien (Johannes XIII. als Papst) erneut nach Italien musste, war der elfjährige Mitkönig auf sich allein gestellt</li>
                        </ul>
                    </div>

                    <h3>Heirat mit Theophanu (972)</h3>
                    <p>972 Verheiratung mit oströmischer Prinzessin <span class="highlight">Theophanu</span></p>
                    <ul>
                        <li>Anerkennung des westlichen Kaisertums wurde somit von Byzanz anerkannt</li>
                    </ul>

                    <h3>Im Schatten des Vaters</h3>
                    <p>Nach Kaiserkrönung verblieb Otto II. im Schatten seines übermächtigen Vaters</p>
                    <ul>
                        <li>Keine Möglichkeit für umfassendes und eigenständiges administratives Handeln</li>
                    </ul>

                    <h3>Herrschaftsantritt (973)</h3>
                    <div class="info-block">
                        <ul>
                            <li>Otto der Große verstirbt 973 → Otto II. nun offizieller alleiniger Kaiser</li>
                            <li>Reibungsloser Übergang</li>
                            <li>ABER: innere Probleme / Unzufriedenheit an der Ostgrenze</li>
                            <li>Otto II. "erbte" Probleme in Italien</li>
                            <li>Herrschaft und Papsttum (z.B. gewählter Papst wird 972 in Rom ermordet)</li>
                        </ul>
                    </div>

                    <p><span class="important">Otto musste sich die ersten 7 Jahre seiner Herrschaft mit der Behauptung seiner Macht gegen Widersacher durchsetzen</span></p>
                </div>`,
            o2_konflikte: `
                <div class="card">
                    <h2>Otto II.: Innere Konflikte</h2>
                    
                    <h3>1. Kämpfe mit Harald Blauzahn (Dänenkönig)</h3>
                    <p>Musste damals die Oberhoheit von Otto dem Großen anerkennen und dem Christentum beitreten</p>
                    <ul>
                        <li>Otto I. war Pflichten immer nachgekommen</li>
                        <li>Nun seine Herrschaft in Norwegen ausgedehnt</li>
                        <li>Aufgrund seiner hohen Machtposition weigerte er sich neuen & jungen Herrscher zu dienen</li>
                        <li>Kleinere fortlaufende Konflikte ohne endgültigen Sieger</li>
                    </ul>

                    <h3>2. Konflikt mit Heinrich dem Zänker (ab 973)</h3>
                    <p>Um die andere Nachkommenslinie von Heinrich I. zu besänftigen → Schenkung der Königsburg Bamberg an Heinrich den Zänker</p>
                    
                    <div class="info-block">
                        <ul>
                            <li>War undankbar und versuchte auf königsgleiche Stellung in Bayern auf Schwaben auszuweiten</li>
                            <li>Zzgl. ernannte Otto II. einen neuen Herzog in Schwaben → dieses Amt hätte eigentlich der Witwe eines Freundes von Heinrich dem Zänker zugestanden</li>
                            <li>Heinrich nahm das wohl als Angriff auf und verschwört sich gegen Otto II.</li>
                            <li>Otto konnte den Konflikt zunächst ohne Waffengewalt schlichten</li>
                        </ul>
                    </div>

                    <p><span class="important">Parallel:</span> Verschlechterung der Beziehung zu seiner Mutter Adelheid</p>

                    <h3>Eskalation (976)</h3>
                    <ul>
                        <li>976 = Rückkehr Heinrichs nach Bayern und führt Verschwörung fort</li>
                        <li>Mobilisiert Anhänger und fordert Herrschaftsanspruch Otto II. ein</li>
                        <li>Otto II. belagert daraufhin Heinrichs Festung in Regensburg → dieser muss fliehen</li>
                    </ul>

                    <h3>Neue Verschwörung in Passau</h3>
                    <ul>
                        <li>Otto setzte neuen Herzog Heinrich von Kärnten ein</li>
                        <li>Dieser verschwört sich mit Heinrich den Zänker in Passau</li>
                        <li><span class="important">Lebenslange Haft für Heinrich den Zänker</span> nach kurzen Konflikt in Passau</li>
                    </ul>

                    <div class="info-block">
                        <p><span class="important">WICHTIG!</span></p>
                        <ul>
                            <li>Otto II. greift anders als sein Vater <span class="highlight">massiv durch</span> und begnadigt nicht so oft</li>
                            <li>Herzöge hatten sich gefälligst dem Kaiser unterzuordnen</li>
                            <li>Otto II. hatte insgesamt kein gutes Verhältnis zu Bayern</li>
                        </ul>
                    </div>

                    <h3>3. Konflikt im Westen des Reiches</h3>
                    <p>Brüder Reginar IV. und Lambert (lothringische Herzogsfamilie) → 973 Kampf gegen Otto II.</p>
                    
                    <div class="info-block">
                        <p>Wollten deren "väterliches Erbe" einfordern:</p>
                        <ul>
                            <li>Deren Vater hatte in einer Streitigkeit mit Otto I. alle Güter verloren</li>
                            <li>Wurde ins lebenslange Exil verbannt</li>
                            <li>Als Otto II. nun neue Ämter und Lehen in Lothringen vergab überging er die beiden Söhne</li>
                            <li>Er hielt sich also an den Kurs seines Vaters</li>
                        </ul>
                    </div>

                    <h3>Gewaltsame Lösungsversuche</h3>
                    <ul>
                        <li>Die beiden Brüder versuchten erst 973, dann 976 eine gewaltsame Lösung des Konflikts</li>
                        <li>976 sogar mit der Unterstützung des westfränkischen Königs Lothar</li>
                        <li><span class="highlight">Entschärfung des Konflikts 977</span> → Otto gibt den Brüdern den alten Familienbesitz zurück</li>
                    </ul>

                    <h3>Konflikt mit Westfranken</h3>
                    <p>Kürzerer militärischer Konflikt mit dem westfränkischen König Lothar</p>
                    <ul>
                        <li>978-980 → Konflikt nach Verhandlungen beigelegt</li>
                        <li>Keine weitreichenden Folgen</li>
                    </ul>
                </div>`,
            o2_italien: `
                <div class="card">
                    <h2>Otto II.: Italienpolitik</h2>
                    
                    <h3>Italienzug (979)</h3>
                    <p>Nach Festigung seiner Herrschaft und Geburt von Otto III. = Italien als Interessenmittelpunkt</p>
                    
                    <div class="info-block">
                        <ul>
                            <li>979 = Stellung des Papstes Benedikt VII. bedroht und musste fliehen</li>
                            <li>Suchte Hilfe bei Otto II.</li>
                            <li>Otto II. reiste mit Theophanu und seinem Sohn nach Italien</li>
                        </ul>
                    </div>

                    <h3>Versöhnung mit Mutter</h3>
                    <p>In Italien: <span class="highlight">Versöhnung mit Mutter Adelheid</span></p>

                    <h3>Rückführung des Papstes</h3>
                    <ul>
                        <li>Ohne Schwierigkeiten konnte Otto Papst Benedikt VII. nach Rom zurückführen</li>
                        <li>Gegenpapst floh nach Byzanz</li>
                    </ul>

                    <h3>Anspruch auf ganz Italien</h3>
                    <div class="info-block">
                        <ul>
                            <li>Otto II. → zielte auf die uneingeschränkte Herrschaft über ganz Italien</li>
                            <li>Übte dort mehr Macht aus als sein Vater</li>
                            <li>Anspruch auf Herrschaft über Süditalien untermauerte Otto durch Annahme eines neuen Titels:</li>
                            <li><span class="important">„Romanorum Imperator Augustus"</span> („erhabener Kaiser der Römer")</li>
                        </ul>
                    </div>

                    <h3>Krieg mit Byzanz und Sarazenen</h3>
                    <p>Wollte die vollständige Unterwerfung Süditaliens = dies bedeutete notwendigerweise Krieg mit Byzanz und den Sarazenen</p>
                    
                    <ul>
                        <li>In Byzanz gab es zu dieser Zeit innere Wirren um die Herrschaft</li>
                        <li>Langobardischer Fürst Pandulf Eisenkopf zur Zeit Ottos I. einen Machtbereich in Byzanz aufgebaut</li>
                        <li>Pandulf hatte Otto I. gehuldigt, war jedoch im Frühjahr 981 gestorben</li>
                        <li><span class="important">Kaiser verlor damit wichtigste Stütze seiner Herrschaft in Mittelitalien</span></li>
                    </ul>

                    <h3>Eingriff in langobardische Fürstentümer</h3>
                    <ul>
                        <li>Otto II. versuchte nach dem Tod Pandulfs langobardischen Fürstentümer politisch/kirchlich seiner Herrschaft zu unterwerfen</li>
                        <li>Griff massiv in das herrschaftliche Gefüge ein</li>
                    </ul>

                    <h3>Verhältnis zu Venedig</h3>
                    <p>Auch Verhältnis zu Venedig neu geordnet:</p>
                    <ul>
                        <li>Der regierende Doge Pietro IV. verbündete sich mit Otto II.</li>
                        <li>Nach Ermordung Pietros (976) beherrschten wechselnde Gruppierungen Venedig</li>
                        <li>Otto verhängte mehrere <span class="highlight">Handelsblockaden</span> gegen die Inselrepublik</li>
                        <li>Die zweite Blockade von 983 fügte Venedig erhebliche Schäden zu</li>
                        <li>Unterwerfung Venedigs durch Otto II. durch dessen frühen Tod verhindert</li>
                    </ul>
                </div>`,
            o2_kloester: `
                <div class="card">
                    <h2>Otto II.: Klosterpolitik</h2>
                    
                    <h3>Funktion der Klöster</h3>
                    <p>Mönchtum und Klöster mit herrschaftstragender und -stabilisierender Funktion im Reichsgefüge</p>
                    <ul>
                        <li>Klöster teilweise auch als <span class="highlight">Verwahrstätten für Hochverräter</span> herangezogen</li>
                    </ul>

                    <h3>Stärkung der Klöster</h3>
                    <p>Otto II. stärkte rechtliche Integrität und wirtschaftliche Unabhängigkeit gegenüber Adel und Episkopat</p>
                    
                    <div class="info-block">
                        <p><span class="important">Beispiel: Kloster Memleben</span></p>
                        <ul>
                            <li>Reich mit Grundbesitz, Kirchen und Zehntrechten ausgestattet</li>
                            <li>Als Grabkirche des Kaiserpaares gedacht</li>
                        </ul>
                    </div>

                    <h3>Klostergründungen</h3>
                    <p>Otto II. mindestens vier Klöster gegründet/mitgestiftet:</p>
                    <ul>
                        <li>Memleben</li>
                        <li>Tegernsee</li>
                        <li>Bergen bei Neuburg/Donau</li>
                        <li>Arneburg</li>
                    </ul>

                    <h3>Mönche als Berater</h3>
                    <ul>
                        <li>Er wählte zudem bedeutende Mönche (wie Ekkehard von St. Gallen) als <span class="highlight">politische Berater</span></li>
                        <li>19. Januar 976 = Otto Aufnahme in der Gebetsbruderschaft des Klosters St. Bavo</li>
                    </ul>
                </div>`,
            o2_niederlage: `
                <div class="card">
                    <h2>Otto II.: Niederlage in Süditalien</h2>
                    
                    <h3>Anlass für militärisches Unternehmen</h3>
                    <p>Angriffe der Sarazenen auf das süditalienische Festland boten den Anlass</p>
                    
                    <div class="info-block">
                        <p>Hohe Gefahr = deshalb:</p>
                        <ul>
                            <li>Von geistlichen und weltlichen Großen aus Lothringen, Franken, Schwaben und Bayern</li>
                            <li>Insgesamt <span class="highlight">2100 Panzerreiter</span> (80% durch die Kirche)</li>
                        </ul>
                    </div>

                    <h3>Erste Erfolge</h3>
                    <ul>
                        <li>Otto mit ersten Vorstößen = Einnahme von Salerno (Vorstoß auf byzantinischem Gebiet)</li>
                        <li>982 = neuer Titel für Otto: <span class="important">Romanorum imperator augustus</span> (Kaiser der Römer)</li>
                        <li>Zeichen seiner Machtstellung (für seine weltlichen Nachfolger üblicher Titel)</li>
                    </ul>

                    <h3>Schlacht am Kap Colonna (Juli 982)</h3>
                    <div class="info-block">
                        <p><span class="important">Zunächst:</span> Ottonisches Heer erfolgreich</p>
                        <p><span class="important">ABER:</span> Nach Auflösung der Schlachten und Plünderung der Gefallenen:</p>
                        <ul>
                            <li><span class="highlight">Gegenangriff der sarazenischen Reserven</span></li>
                            <li>Vernichtung der kaiserlichen Truppen</li>
                            <li>Otto II. in höchster Lebensgefahr</li>
                            <li>Flucht auf ein byzantinisches Schiff</li>
                            <li>Versuch der Schiffsbesatzung, ihn als Geisel zu nehmen</li>
                            <li>Erneute Flucht</li>
                        </ul>
                    </div>

                    <h3>Folgen</h3>
                    <ul>
                        <li>Sarazenen anschließend Rückzug nach Sizilien</li>
                        <li><span class="important">Schlacht galt bereits unter Zeitgenossen als eine Katastrophe</span></li>
                        <li>Otto zog sich danach einige Zeit zurück!</li>
                    </ul>
                </div>`,
            o2_thron: `
                <div class="card">
                    <h2>Otto II.: Thronfolgeregelung</h2>
                    
                    <h3>Hoftag in Verona (983)</h3>
                    <p>Nach Unglücksbotschaft der Niederlage:</p>
                    
                    <div class="info-block">
                        <p>Verbliebenen Großen im Reich wollten ein Treffen mit dem Kaiser = 983 Hoftag in Verona</p>
                        <ul>
                            <li>Dort Herzogtümer Bayern und Schwaben neu besetzt</li>
                            <li><span class="important">Nahezu alle Beschlüsse dort ⇒ brachten Fürstenopposition einen Machtgewinn</span></li>
                        </ul>
                    </div>

                    <h3>Weitere Maßnahmen</h3>
                    <ul>
                        <li>Etwas später dann: Seeblockade und Handelskrieg in Venedig beigelegt</li>
                    </ul>

                    <h3>Wahl Otto III. zum König</h3>
                    <div class="info-block">
                        <p>UND: Wahl des dreijährigen <span class="highlight">Otto III. zum König</span></p>
                        <ul>
                            <li>War der einzige römisch-deutsche König, der südlich der Alpen gewählt wurde</li>
                            <li>Wurde über die Alpen begleitet und in Aachen geweiht</li>
                        </ul>
                    </div>
                </div>`,
            o2_slawen: `
                <div class="card">
                    <h2>Otto II.: Slawenaufstand</h2>
                    
                    <h3>Der große Aufstand (983)</h3>
                    <p>983 erhoben sich die slawischen Stämme östlich der Elbe</p>
                    
                    <div class="info-block">
                        <ul>
                            <li>Abodritenfürst Mistui vernichtete Bistum Oldenburg</li>
                            <li>Zerstörte Hamburg (auch Brandenburg)</li>
                            <li>Sächsisches Heer konnte die Slawen zum Rückzug über die Elbe zwingen</li>
                            <li><span class="important">ABER: Politischer Kontrollverlust von Gebieten östlich der Elbe</span></li>
                        </ul>
                    </div>
                </div>`,
            o3: `
                <div class="card">
                    <h2>Otto III.: Früher Tod des Vaters & Kampf um Nachfolge</h2>
                    
                    <h3>Früher Tod Otto II.</h3>
                    <div class="info-block">
                        <p>Malariainfektion verhinderte die erneute Aufnahme der militärischen Aktivitäten in Süditalien und führte zum Tod des Kaisers</p>
                        <ul>
                            <li>Völlig unerwartet starb er im Alter von 28 Jahren am <span class="important">7. Dezember 983</span></li>
                        </ul>
                    </div>

                    <h3>Weihe Otto III.</h3>
                    <p>Dreijähriger Otto III. wurde drei Wochen nach Tod seines Vaters in Aachen zum König geweiht</p>

                    <h3>Problematische Ausgangslage</h3>
                    <ul>
                        <li>Ungelöste Probleme in Süditalien</li>
                        <li>Dramatische Situation durch Slawenaufstand an der Ostgrenze</li>
                        <li><span class="important">Politische Lage im Reichs ausgesprochen labil</span></li>
                        <li>Tatkräftiger Herrscher wurde gebraucht</li>
                    </ul>

                    <h3>Heinrich der Zänker greift nach der Macht</h3>
                    <div class="info-block">
                        <p>Heinrich der Zänker besorgte sich Vormundschaft für Otto III., um Macht auszuüben!</p>
                        <ul>
                            <li>Als Angehöriger der bayerischen Linie war er der nächste männliche Verwandte</li>
                            <li>Zu viele Entscheidungsträger (Sachsen/Bayern/Franken) wollten die Thronfolge Ottos NICHT infrage stellen</li>
                            <li><span class="highlight">→ Heinrich scheiterte also!</span></li>
                            <li>Übergab Otto III. dann 984 seiner Mutter Theophanu und Adelheid</li>
                            <li>Entsagte damit Königsansprüchen</li>
                        </ul>
                    </div>

                    <h3>Die Regentschaft der Kaiserinnen</h3>
                    <ul>
                        <li>Für die Zeit der Regentschaft wurde Theophanu die wichtigste der <span class="highlight">dominae imperiales</span></li>
                        <li>Nach Theophanus Tod (991) übernahm Adelheid die Regentschaft für Otto III.</li>
                        <li><span class="important">Adelheid wahrte den Frieden!</span></li>
                    </ul>
                </div>`,
            o3_regentschaft: `
                <div class="card">
                    <h2>Otto III.: Regentschaft der Kaiserinnen (985–994)</h2>
                    
                    <h3>Theophanus Regierung (ab 985)</h3>
                    <p>Ab 985 Ottos Mutter Theophanu leitet die Regierungsgeschäfte</p>
                    <ul>
                        <li><span class="highlight">Konfliktarme Politik</span> = bemühte sich darum Streit im Reich zu schlichten</li>
                    </ul>

                    <h3>Militärische Aktivitäten</h3>
                    <div class="info-block">
                        <p><span class="important">Slawenzug von 986:</span></p>
                        <ul>
                            <li>Sechsjähriger Otto nimmt erstmals an Kriegshandlungen teil</li>
                        </ul>
                    </div>

                    <ul>
                        <li>September 991 = Otto rückt erstmals gegen Brandenburg vor (kurzzeitig zurückerobert)</li>
                        <li>Bei erneutem Slawenzug vor Brandenburg = <span class="important">schwere Verluste auf ottonischer Seite</span></li>
                    </ul>

                    <h3>Tod Theophanus (Juni 991)</h3>
                    <p>⇒ Tod der Theophanu Juni 991</p>
                    <p>Großmutter <span class="highlight">Adelheid</span> übernahm für die restlichen Jahre die Regentschaft</p>
                </div>`,
            o3_herrschaft: `
                <div class="card">
                    <h2>Otto III.: Herrschaftsantritt</h2>
                    
                    <h3>Allmählicher Übergang</h3>
                    <p>Allmählicher Regentschaftsverlust der kaiserlichen Frauen (keine demonstrative Übergabe der Macht)</p>
                    <ul>
                        <li>Urkunden aus dem Jahr 994 lassen auf den <span class="highlight">Juli 994</span> als Herrschaftsantritt schließen (not safe)</li>
                    </ul>

                    <h3>Fortführung der Slawenpolitik</h3>
                    <p>983 = Fortführung der fast jährlich stattfindenden Züge gegen die nördlich wohnenden Elbslawen</p>

                    <h3>Brautwerbung in Byzanz</h3>
                    <ul>
                        <li>September 995 für Brautwerbung Ottos III. → Verhandlungen in Byzanz (bis ca. 1002)</li>
                        <li>Otto starb kurz darauf (nicht bekannt, welche Prinzessin ihm versprochen wurde)</li>
                    </ul>
                </div>`,
            o3_italien1: `
                <div class="card">
                    <h2>Otto III.: Der erste Italienzug (ab März 996)</h2>
                    
                    <h3>Anlass</h3>
                    <p>Angestrebte Kaiserkrönung und Hilferuf von Papst Johannes XV. ⇒ auf nach Italien</p>
                    
                    <div class="info-block">
                        <ul>
                            <li>Papst hatte Probleme mit römischem Stadtpräfekten Crescentius und seiner Partei</li>
                            <li>Papst musste fliehen und starb kurz darauf</li>
                        </ul>
                    </div>

                    <h3>Ernennung eines neuen Papstes</h3>
                    <p>In Ravenna nominierte Otto III. seinen Verwandten und Hofkaplan Brun von Kärnten zum Papstnachfolger</p>
                    <ul>
                        <li>Wurde als erster „Deutscher" zum Papst erhoben</li>
                        <li>Namen <span class="highlight">Gregor V.</span></li>
                    </ul>

                    <h3>Kaiserkrönung (996)</h3>
                    <p>Otto III. wurde Christi Himmelfahrt 996, von „seinem" Papst zum Kaiser gekrönt</p>

                    <h3>Problem: Fehlender Rückhalt</h3>
                    <div class="info-block">
                        <p>Personalentscheidung durch Otto III. ⇒ Papst hat keinen Rückhalt mehr in Rom</p>
                        <ul>
                            <li>Ist auf Kaiser angewiesen, um gegen Kandidaten stadtrömischer Adelsgruppen zu bestehen</li>
                            <li>Aus dem führenden römischen Adelsgeschlecht der Crescentier</li>
                        </ul>
                    </div>

                    <h3>Umgang mit Crescentius</h3>
                    <ul>
                        <li>Römische Stadtpräfekt Crescentius wurde von Otto III. zum Exil verurteilt</li>
                        <li>Papst Gregors V. begnadigte ihn</li>
                        <li>Otto III. zeigt Milde</li>
                    </ul>
                </div>`,
            o3_italien2: `
                <div class="card">
                    <h2>Otto III.: Zweiter Italienzug & Aufenthalt bis 999</h2>
                    
                    <h3>Crescentius macht weiter Stress (Sommer 997)</h3>
                    <p>Wenige Monate nach seiner Begnadigung = römische Stadtpräfekt Crescentius macht Stress</p>
                    <ul>
                        <li>Vertreibt Papst Gregor V. aus Rom</li>
                        <li>Otto III. musste zu dieser Zeit (Sommer 997) einen Feldzug gegen die Elbslawen führen</li>
                        <li>Erst im <span class="highlight">Dezember 997</span> = Zweiter Italienzug</li>
                    </ul>

                    <h3>Rückkehr nach Rom (Februar 998)</h3>
                    <div class="info-block">
                        <ul>
                            <li>Februar 998 = Otto kommt in Rom an</li>
                            <li>Römer lassen ihn friedlich einmarschieren</li>
                            <li>Stadtpräfekt Crescentius verschanzte sich in der Engelsburg</li>
                            <li><span class="important">Wurde später enthauptet</span></li>
                            <li>Das grausame Vorgehen des Kaisers wurde zeitgenössisch kritisiert!</li>
                        </ul>
                    </div>

                    <h3>Reformen in Rom</h3>
                    <p>Otto blieb nach den Ereignissen in Rom und versuchte Reformen durchzusetzen</p>
                    <ul>
                        <li>Besetzte wichtige Bischofssitze mit engen Vertrauten</li>
                        <li>Entfremdetes Kirchengut wurde Verfügungsgewalt der geistlichen Institutionen zugeführt</li>
                    </ul>

                    <h3>Neuer Papst</h3>
                    <p>Papst Gregor stirbt kurz danach</p>
                    <ul>
                        <li>Vertrauter Ottos (<span class="highlight">Silvester II.</span>) erneut als Nichtrömer zum Papst</li>
                    </ul>
                </div>`,
            o3_osten: `
                <div class="card">
                    <h2>Otto III.: Aktivitäten im Osten</h2>
                    
                    <h3>Pilgerfahrt nach Gnesen (Februar/März 1000)</h3>
                    <p>Februar/März 1000 pilgerte Otto von Rom aus nach Gnesen, hauptsächlich aus religiösen Motiven</p>
                    
                    <div class="info-block">
                        <ul>
                            <li>Erhob die Stadt zum Erzbistum</li>
                            <li><span class="important">Ab da: Selbstständige Kirchenorganisation Polens</span></li>
                        </ul>
                    </div>
                </div>`,
            o3_tod: `
                <div class="card">
                    <h2>Otto III.: Rückkehr nach Rom und Tod</h2>
                    
                    <h3>Rückkehr nach langer Abwesenheit</h3>
                    <p>Nach langer Abwesenheit = Rückkehr Ottos in sein Reich</p>
                    <ul>
                        <li>Obwohl er ja lange weg war = keine größeren Auseinandersetzungen</li>
                        <li>Chillt in Aachen</li>
                        <li>Macht im Sommer 1000 schon wieder nach Rom</li>
                    </ul>

                    <h3>Aufenthalt in Rom (1000)</h3>
                    <ul>
                        <li>War das gesamte restliche Jahr 1000 in Rom</li>
                        <li>ABER: kaum herrscherliche Aktivität</li>
                    </ul>

                    <h3>Aufstand in Tivoli (1001)</h3>
                    <div class="info-block">
                        <ul>
                            <li>Im Jahr 1001 muss sich Otto um einen Aufstand der Bewohner Tivolis kümmern</li>
                            <li>Zu milde Behandlung Tivolis ⇒ später nochmal ein Aufstand</li>
                            <li>Friedlich beendet</li>
                        </ul>
                    </div>

                    <h3>Rückzug und Verstärkung</h3>
                    <ul>
                        <li>Weitere direkt anknüpfende politische Probleme</li>
                        <li>Kaiser zieht sich aus Rom zurück</li>
                        <li>Wartet auf militärische Verstärkung</li>
                    </ul>

                    <h3>Zug nach Norden</h3>
                    <p>Folge des Rückzuges = Otto und sein Papst Silvester II. zogen nach Norden in Richtung Ravenna</p>
                    <p>Ende des Jahres 1001 = zieht erneut nach Italien</p>

                    <h3>Tod (23./24. Januar 1002)</h3>
                    <div class="info-block">
                        <ul>
                            <li>Plötzlich starke Fieberanfälle</li>
                            <li><span class="important">Tod Ottos III. am 23. oder 24. Januar 1002</span></li>
                            <li>Soll gefasst gestorben sein</li>
                            <li>Sein Tod wurde zunächst geheim gehalten</li>
                            <li>Beisetzung in Aachen</li>
                            <li>Nachfolge Heinrichs als König</li>
                        </ul>
                    </div>
                </div>`,
            tree: `
                <div class="card">
                    <h2>Stammbaum der Ottonen</h2>
                    <div class="stammbaum-wrap">
                        <div style="min-width: 600px">
                            <div class="node">Heinrich I. & Mathilde</div><br>
                            <span style="color:var(--primary)">──────────┬──────────</span><br>
                            <div class="node king">Otto I. (der Große)</div>
                            <div class="node">Heinrich (Bayern)</div>
                            <div class="node">Gerberga</div><br>
                            <span style="color:var(--primary)">│ (mit Adelheid)</span><br>
                            <div class="node king">Otto II.</div><br>
                            <span style="color:var(--primary)">│ (mit Theophanu)</span><br>
                            <div class="node king">Otto III.</div><br>
                            <div class="info-block" style="border:none; text-align:center;">
                                <p>Otto I. hatte zudem einen unehelichen Sohn: <span class="highlight">Wilhelm</span> (Erzbischof Mainz)</p>
                                <p>Nach Otto III. folgte <span class="highlight">Heinrich II.</span> (1002-1024), der letzte Liudolfinger</p>
                            </div>
                        </div>
                    </div>
                </div>`,
            quiz: `<div id="quiz-container"></div>`
        }
    },
    ww1: {
        title: "Der Erste Weltkrieg & Folgen",
        menu: [
            { id: "mil", title: "1. Militärischer Verlauf" },
            { id: "front_leben", title: "2. Leben an der Front (Exkurs)" },
            { id: "home", title: "3. Leid der Zivilbevölkerung" },
            { id: "women", title: "4. Frauen im totalen Krieg" },
            { id: "prop", title: "5. Propaganda & Alltag" },
            { id: "deutsche_prop", title: "6. Deutsche Kriegspropaganda" },
            { id: "judenzaehlung", title: "7. Die 'Judenzählung' 1916" },
            { id: "friedenssehnsucht", title: "8. Friedenssehnsucht ab 1916" },
            { id: "reformen", title: "9. Politische Reformen" },
            { id: "hindenburg", title: "10. Hindenburg-Programm" },
            { id: "hunger_allg", title: "11. Hunger & Krankheiten" },
            { id: "hunger", title: "12. Steckrübenwinter 1916/17" },
            { id: "proteste", title: "13. Proteste & Umschwung" },
            { id: "sozialisten", title: "14. Sozialistisches Lager" },
            { id: "januarstreik", title: "15. Januarstreik 1918 (Exkurs)" },
            { id: "rev", title: "16. Novemberrevolution" },
            { id: "quiz_ww1", title: "17. Prüfungstraining" }
        ],
        content: {
            mil: `
                <div class="card">
                    <h2>Wichtige Punkte im Kriegsverlauf</h2>
                    
                    <h3>Kriegsbeginn (1914)</h3>
                    <p>Attentat von Sarajevo im Jahr 1914 = Deutsches Kaiserreich vs. Alliierten (zwei Fronten)</p>
                    <ul>
                        <li><span class="highlight">Osten</span> = Russland als Gegner</li>
                        <li><span class="highlight">Westen</span> = England, Frankreich und Belgien als Gegner</li>
                    </ul>

                    <h3>Schlacht an der Marne (1914)</h3>
                    <div class="info-block">
                        <p>Erste Erfolge der Alliierten</p>
                        <ul>
                            <li>Deutsche Kämpfer am Vorrücken in Frankreich gehindert</li>
                            <li>Eigentlich wollte das deutsche Heer blitzartig Paris angreifen <span class="important">#Schlieffenplan</span></li>
                        </ul>
                    </div>

                    <h3>Stellungskrieg als neue Taktik</h3>
                    <p>Vermehrte Verluste der deutschen Armee ⇒ Stellungskrieg als neue Taktik</p>
                    <ul>
                        <li>Sehr defensives Vorgehen</li>
                        <li>Auf beiden Seiten der Frontlinie = Schützengräben</li>
                        <li>An Westfront und Ostfront sehr viele Rohstoffe/Materialien verbraucht <span class="important">#Materialschlacht</span></li>
                        <li>Zahl der Opfer stieg ab 1915 stetig an</li>
                        <li><span class="important">Ab April 1915:</span> Erster deutscher Einsatz von Giftgas ☠️</li>
                    </ul>

                    <h3>Schlacht um Verdun (1916)</h3>
                    <ul>
                        <li>10 Monate an Kämpfen</li>
                        <li>Ungefähr <span class="important">300.000 tote Soldaten</span></li>
                    </ul>

                    <h3>Kriegseintritt der Amerikaner (1917)</h3>
                    <ul>
                        <li>Deutsche Siegeschancen stark reduziert</li>
                        <li>Ab 1917 an der Ostfront Waffenstillstand</li>
                    </ul>

                    <h3>Ende des Krieges (1918)</h3>
                    <div class="info-block">
                        <ul>
                            <li>Im Jahr 1918 gelang den Großmächten ein Durchbruch der deutschen Front</li>
                            <li><span class="important">11. November 1918:</span> Heeresleitung mit Waffenstillstand für Westfront</li>
                            <li>Furchtbare Krieg forderte insgesamt ca. <span class="important">17 Millionen Zivilisten und Soldaten</span> das Leben</li>
                        </ul>
                    </div>
                </div>`,
            front_leben: `
                <div class="card">
                    <h2>Exkurs: Leben an der Front</h2>
                    
                    <h3>Der Alltag an der Front</h3>
                    <p>An der Front waren der Tod, schwere Verwundungen oder auch Gefangenschaft der Alltag</p>
                    
                    <div class="info-block">
                        <p><span class="important">Sanitätswesen bei allen Kriegsparteien an seinen Grenzen:</span></p>
                        <ul>
                            <li>Infektionen</li>
                            <li>Verstümmelungen und andere Einschränkungen</li>
                            <li>Selbstverletzung, um der Front zu entkommen!</li>
                        </ul>
                    </div>

                    <h3>Propaganda vs. Realität</h3>
                    <p>Darstellungen in Frontzeitungen entsprechend der Propaganda <span class="highlight">IMMER POSITIV</span></p>
                </div>`,
            home: `
                <div class="card">
                    <h2>Leid und Tod der Zivilbevölkerung</h2>
                    
                    <h3>Kollateralschäden</h3>
                    <p>Tod vieler Zivilisten wurde billigend in Kauf genommen <span class="important">#Kollateralschäden</span></p>
                    
                    <div class="info-block">
                        <p>Bei Angriffen = Ausschaltung von militärisch relevanten Zielen als oberste Priorität</p>
                        <ul>
                            <li>Z.B. Fabriken für militärische Güter</li>
                            <li>Dort arbeiteten jedoch Zivilisten</li>
                        </ul>
                    </div>

                    <h3>Bewusste Gewalt</h3>
                    <p>Auch bewusste Gewalt gegen Zivilisten war im Verlauf des Krieges gegeben</p>
                    <ul>
                        <li>Je nach Situation attackiert, beraubt, missbraucht oder auch getötet <span class="important">#selten</span></li>
                    </ul>
                </div>`,
            women: `
                <div class="card">
                    <h2>Frauen im totaler werdenden Ersten Weltkrieg ("Heimatfront")</h2>
                    
                    <h3>Schlüsselfunktionen der Kriegsgesellschaft</h3>
                    <p>Frauen in allen beteiligten Staaten = Schlüsselfunktionen der Kriegsgesellschaft</p>
                    
                    <div class="info-block">
                        <p>Rückhalt der Gesellschaft = mussten erheblichen Arbeitskräfteausfall kompensieren:</p>
                        <ul>
                            <li>Männer waren ja weg! 💪</li>
                            <li>Nach Einberufungen = viele Geschäfte mussten schließen (keine Angestellten)</li>
                            <li><span class="important">Zunehmende Verweiblichung der Gesellschaft</span></li>
                            <li>Gehalt von Frauen < als das Gehalt der Männer</li>
                            <li>Frauen konnten Facharbeitermangel auch nur bedingt decken!</li>
                            <li>Tw. wurden Kriegsgefangene mit Ausbildung angestellt</li>
                        </ul>
                    </div>

                    <h3>Wichtig für die Stimmungslage</h3>
                    <p>Frauen wichtig für die Stimmungslage der Bevölkerung</p>
                    <ul>
                        <li>Z.B. Kommunen, Gewerkschaften und Frauenbewegungen als OrganisatorInnen für Unterstützungen für Bedürftige</li>
                        <li>Bereits zu Kriegsbeginn gab es Friedensproteste → durch Frauen organisiert</li>
                        <li>Im Laufe des Krieges ⇒ <span class="highlight">Frauen als zentrales Glied in Protestbewegungen</span></li>
                        <li>Polizeigewalt bei Frauen und Kindern schwierig umzusetzen</li>
                    </ul>

                    <p><span class="important">Nicht nur in Deutschland gab es Proteste</span></p>

                    <h3>Staatliche Unterstützung</h3>
                    <p>»Kriegerfrauen« und »Kriegerfamilien« konnten staatliche Unterstützung erhalten</p>

                    <h3>Aufweichung von Geschlechterrollen</h3>
                    <div class="info-block">
                        <p>Bereits vor Kriegsbeginn 1914 = geschlechtertypische Ordnungsmustern in Frage gestellt</p>
                        <ul>
                            <li>Familien- und Arbeitsplanung von Frauen war bereits unabhängiger geworden</li>
                            <li>Krieg veränderte das Bild von (Mann = Arbeit Front / Frau = Haushalt Heimat)</li>
                            <li>"Weiblichkeit" konnte somit auch ein eher "männlicher" Beruf sein</li>
                            <li>Aufweichen von typisch "weiblichen" Rollenbild VS. Realität</li>
                        </ul>
                    </div>

                    <h3>Neue soziale Probleme</h3>
                    <ul>
                        <li>ZUDEM: Massenhafte Verwandlung von Ehefrauen in Witwen</li>
                        <li>U.a. viele alleinerziehende Mütter (Widerspruch zu Geschlechterideologie)</li>
                        <li>Kritisch gesehen = von zivilen Behörden unter Beobachtung gestellt</li>
                    </ul>

                    <h3>"Durchhalten" (ab 1916)</h3>
                    <p>Ab 1916 = Gesellschaftliches Gefühl von "Durchhalten" auch an den »Heimatfronten«</p>
                    <ul>
                        <li><span class="important">Erhöhte Kinder und Frauensterblichkeit</span> aufgrund von Nahrungsmittelmangel</li>
                    </ul>
                </div>`,
            prop: `
                <div class="card">
                    <h2>Kriegspropaganda im Alltag</h2>
                    
                    <h3>Verfälschte Vorstellung von der Front</h3>
                    <p>Stark verfälschte Vorstellung von der Front (in den ersten Kriegsjahren)</p>
                    <ul>
                        <li>Die Lage an der Front SCHEINBAR ruhig und idyllisch</li>
                    </ul>

                    <h3>Beruhigung der Bevölkerung</h3>
                    <p>Um Verhalten wie Unruhen & Hamstern entgegen zu wirken:</p>
                    
                    <div class="info-block">
                        <p>Bevölkerung durch Propaganda zu besänftigen:</p>
                        <ul>
                            <li>Beispielsweise Aufnahmen von Soldaten die in Freude zur Front aufbrachen</li>
                            <li>Vermittlung eines positiven Eindrucks</li>
                        </ul>
                    </div>

                    <h3>Allgegenwärtige Militarisierung</h3>
                    <p>Schriftliche Werke und Schmuck mit militärischen Symbolen = allgegenwärtig</p>
                    <ul>
                        <li>Patriotische Parolen sogar im Kinderzimmer (z.B. Puppen)</li>
                        <li>Auch in der Genussmittelindustrie bemerkbar!</li>
                        <li>Manche Zigarettenhersteller verdeutschten die Namen ihrer Marken</li>
                        <li>Eisernes Kreuz auf Porzellanwaren = sehr beliebt</li>
                        <li>Auch andere militärische Motive = beliebt</li>
                    </ul>
                </div>`,
            deutsche_prop: `
                <div class="card">
                    <h2>Deutsche Kriegspropaganda</h2>
                    
                    <h3>Unkoordinierte Anfänge</h3>
                    <p>Zu Kriegsbeginn - Kriegsdauer und Bedeutung von Propaganda = noch unklar</p>
                    
                    <div class="info-block">
                        <ul>
                            <li>Propagandaarbeit meist unkoordiniert und improvisiert</li>
                            <li>KEINE Zentralstelle für Propaganda</li>
                            <li>In Deutschland war Oberste Heeresleitung (OHL) maßgeblich verantwortlich</li>
                            <li>ALLERDINGS: Zu viele andere Organisationen für Propaganda <span class="important">#WirrWarr</span></li>
                        </ul>
                    </div>

                    <h3>Bild- und Filmamt (BUFA) 1917</h3>
                    <ul>
                        <li>Januar 1917 = Initiative der OHL "Bild- und Filmamt (BUFA)"</li>
                        <li>Filme zu propagandistischen Zwecken wichtig!</li>
                    </ul>

                    <h3>Inhalte der Propaganda</h3>
                    <div class="info-block">
                        <p>Deutsche Propaganda zielte auf Vermittlung von Siegessicherheit:</p>
                        <ul>
                            <li>Gegen Kriegsende mit Appell an Durchhaltewillen</li>
                            <li>Teilweise Verunglimpfung deutscher Kriegsgegner auf Postkarten etc.</li>
                            <li><span class="important">Feind lächerlich machen war essentiell #Stereotypen</span></li>
                        </ul>
                    </div>
                </div>`,
            judenzaehlung: `
                <div class="card">
                    <h2>Die "Judenzählung" von 1916</h2>
                    <div class="info-block">
                        Zu Beginn des Krieges herrschte die Erwartung eines schnellen Sieges. Mit der katastrophalen Ernährungs- und Versorgungslage wuchs jedoch der <span class="important">Antisemitismus</span>.
                    </div>
                    <h3>Der Vorwurf</h3>
                    <p>Rechte Gruppen und Verbände verbreiteten den scheinbaren Fakt, dass eine unverhältnismäßig große Anzahl jüdischer Wehrpflichtiger vom Heeresdienst befreit sei.</p>
                    <h3>Die staatliche Reaktion</h3>
                    <p>Am <span class="highlight">11. Oktober 1916</span> gab der Preußische Kriegsminister dem Druck nach und veranlasste eine statistische Erhebung über die Dienstverhältnisse aller deutschen Juden.</p>
                    <div class="info-block">
                        <p><span class="important">Folgen & Kritik:</span></p>
                        <ul>
                            <li>SPD und Fortschrittliche Volkspartei sahen darin einen <span class="important">Bruch des Burgfriedens</span>.</li>
                            <li>Gustav Stresemann warnte 1917 vor einer "antisemitischen Bewegung [...], wie sie noch nie dagewesen ist".</li>
                            <li>Das Kriegsministerium musste das Vorhaben später zurückziehen, doch der gesellschaftliche Schaden war bereits angerichtet.</li>
                            <li>In Briefen jüdischer Soldaten ist ein deutlicher <span class="highlight">Unmut</span> über dieses Misstrauen zu erkennen.</li>
                        </ul>
                    </div>
                </div>`,
            friedenssehnsucht: `
                <div class="card">
                    <h2>Friedenssehnsucht ab 1916</h2>
                    <p>Trotz der gewaltigen Opferzahlen in den Materialschlachten gab es <span class="important">keine Siege</span> mehr, was zu tiefen Zweifeln in der Bevölkerung führte.</p>
                    <h3>Politischer Zusammenschluss</h3>
                    <p>Ab 1916 bildeten Volkspartei, Zentrum, SPD und die Nationalliberale Partei einen <span class="highlight">Hauptausschuss</span> zur Beratung über Kriegsziele und Reformen.</p>
                    <div class="info-block">
                        <p><strong>Einflussfaktoren:</strong></p>
                        <ul>
                            <li>Die <span class="highlight">russische Februarrevolution 1917</span> schürte die Hoffnung auf ein baldiges Kriegsende.</li>
                            <li>Forderung nach Reformen wurde immer nachdrücklicher.</li>
                            <li>Erste <span class="important">Massenstreiks</span> für ein gleiches und geheimes Wahlrecht sowie "Frieden ohne Annexionen".</li>
                        </ul>
                    </div>
                    <p>Der Staat reagierte zunächst mit Drohungen (Militärdienst für Streikende), was die Streiks kurzzeitig abflachen ließ.</p>
                </div>`,
            reformen: `
                <div class="card">
                    <h2>Politische Reformen & Wende</h2>
                    <p>Die Lage änderte sich dramatisch durch die russische Oktoberrevolution und das Scheitern der deutschen Frühjahrsoffensiven 1918 im Westen.</p>
                    <ul>
                        <li>Die <span class="highlight">USPD</span> organisierte 1918 massive Proteste, die aufgrund der katastrophalen Ernährungslage riesigen Zulauf erhielten.</li>
                        <li>Die Oberste Heeresleitung (OHL) musste schließlich die militärische Niederlage eingestehen.</li>
                    </ul>
                    <div class="info-block">
                        <p><span class="important">Zentrale Wendepunkte:</span></p>
                        <ul>
                            <li><span class="highlight">Kieler Matrosenaufstand:</span> Der Funke der Revolution.</li>
                            <li><span class="highlight">Novemberrevolution:</span> Sturz des alten Systems.</li>
                        </ul>
                    </div>
                </div>`,
            hindenburg: `
                <div class="card">
                    <h2>Das Hindenburg-Programm</h2>
                    <p>Im Herbst 1916 startete die OHL ein wirtschaftliches Vorhaben zur Steigerung der Rüstungsproduktion für den <span class="important">"totalen Krieg"</span>.</p>
                    <h3>Die Ziele:</h3>
                    <ul>
                        <li>Verdopplung der Munitionsversorgung.</li>
                        <li>Verdreifachung der Produktion von Geschützen und Gewehren.</li>
                        <li>Massive Steigerung der Flugzeugproduktion und Material für den Stellungsbau.</li>
                    </ul>
                    <div class="info-block">
                        <p><strong>Gesetz über den vaterländischen Hilfsdienst:</strong></p>
                        <p>Alle Männer zwischen <span class="highlight">17 und 60 Jahren</span>, die nicht an der Front waren, wurden zur Arbeit in der Rüstungsindustrie verpflichtet.</p>
                    </div>
                    <p><span class="important">Das Scheitern:</span> Trotz drastischer Maßnahmen (Schließung kriegsunwichtiger Betriebe) schlug die Umsetzung fehl. Hindernisse waren mangelnde Arbeitskraft, fehlendes Transportpotenzial und der Hunger.</p>
                </div>`,
            hunger_allg: `
                <div class="card">
                    <h2>Allgemeines zu Hunger und Krankheiten</h2>
                    <p>Der Krieg wurde zunehmend zum Überlebenskampf für die Zivilisten im Inland.</p>
                    <ul>
                        <li>Zerstörung von Handelsrouten führte zum Ausbleiben von Importen (z.B. Seife, Dünger).</li>
                        <li><span class="important">Zusammenbruch der Landwirtschaft</span> durch Mangel an Männern, Zugtieren und Phosphatdünger.</li>
                        <li>Massives <span class="highlight">"Hamstern"</span> von Grundnahrungsmitteln verschärfte die Knappheit.</li>
                    </ul>
                    <div class="info-block">
                        <p><strong>Rationierung ab 1915:</strong></p>
                        <p>Erstmals wurden Lebensmittel offiziell rationiert. Die besten verfügbaren Güter wurden bevorzugt an die Front geschickt.</p>
                    </div>
                </div>`,
            hunger: `
                <div class="card">
                    <h2>Der Steckrübenwinter 1916/17</h2>
                    <div class="info-block">
                        Die britische <span class="important">Seeblockade</span> schnitt das Deutsche Reich von einem Drittel seiner Lebensmittelimporte ab. Deutschland war zuvor weltweit größter Agrarimporteur.
                    </div>
                    <h3>Die Katastrophe</h3>
                    <p>Infolge von Kartoffel- und Getreidemissernten wurde die <span class="highlight">Steckrübe</span> zum Notbehelf für alles: Brot, Ersatzkaffee, Marmelade und Fleischersatz.</p>
                    <ul>
                        <li>Ein unerwarteter <span class="important">Kälteeinbruch</span> verschlimmerte die Lage.</li>
                        <li>Tiefpunkt der Versorgung im Frühling 1917.</li>
                        <li>Gründung des <span class="highlight">Kriegsernährungsamts</span> (Mai 1916) scheiterte an der Bürokratie.</li>
                    </ul>
                    <div class="info-block">
                        <p><span class="important">Die Opferbilanz:</span></p>
                        <ul>
                            <li>Ca. <span class="important">800.000 Menschen</span> starben zwischen 1914 und 1918 an den Folgen von Unterernährung.</li>
                            <li>Schlechte Hygiene und Hunger begünstigten Krankheiten.</li>
                            <li>Ab Frühjahr 1918: <span class="important">Spanische Grippe</span> in drei Wellen mit Millionen Toten.</li>
                        </ul>
                    </div>
                </div>`,
            proteste: `
                <div class="card">
                    <h2>Gesellschaftliche Proteste & Umschwung</h2>
                    <p>Ab 1916 kam es zu Massenkundgebungen, u.a. durch Karl Liebknecht in Berlin.</p>
                    <div class="info-block">
                        <p><span class="important">Hauptauslöser:</span> Der Hunger von Frauen und Kindern.</p>
                    </div>
                    <ul>
                        <li>1917: Streikwelle von <span class="highlight">670.000 Arbeitern</span>.</li>
                        <li>Frauen organisierten Friedensproteste, da Polizeigewalt gegen sie moralisch schwer durchsetzbar war.</li>
                        <li>Frauen schrieben <span class="important">"Jammerbriefe"</span> an die Männer an der Front – diese wurden von der Zensur überwacht, um die Moral der Soldaten nicht zu brechen.</li>
                    </ul>
                </div>`,
            sozialisten: `
                <div class="card">
                    <h2>Das Sozialistische Lager in Bewegung</h2>
                    <p>Die politische Landschaft radikalisierte sich angesichts des Elends.</p>
                    <ul>
                        <li><span class="highlight">Gründung der USPD (1917):</span> Offene Opposition gegen das Herrschaftssystem und die Kriegspolitik.</li>
                        <li><span class="highlight">Gewerkschaften:</span> Erhielten erstmals staatliche Anerkennung. Betriebe mit über 50 Angestellten mussten Arbeitervertreter zulassen.</li>
                    </ul>
                    <p><span class="important">Die Prophezeiung:</span> Philipp Scheidemann sagte bereits 1917 vor dem Parlament eine soziale Revolution voraus, falls der Krieg nicht beendet würde.</p>
                </div>`,
            januarstreik: `
                <div class="card">
                    <h2>Exkurs: Januarstreik 1918</h2>
                    <div class="info-block">
                        Politischer Massenstreik infolge schlechter Versorgung, Heranziehung zum Arbeitsdienst und unwürdiger Arbeitsbedingungen.
                    </div>
                    <ul>
                        <li>Initiiert durch den <span class="important">Spartakusbund</span> und Metallarbeiter.</li>
                        <li>Über <span class="highlight">400.000 Demonstranten</span> allein in Berlin.</li>
                        <li>Führung durch SPD und USPD im Aktionsausschuss.</li>
                        <li>Die Proteste wurden gewaltsam aufgelöst.</li>
                        <li>Rechte Parteien nutzten dies später für den <span class="important">Dolchstoß-Vorwurf</span> (SPD habe die Front im Stich gelassen).</li>
                    </ul>
                </div>`,
            rev: `
                <div class="card">
                    <h2>Die Novemberrevolution</h2>
                    <p>Ausgangslage im Oktober 1918: Die militärische Lage war aussichtslos.</p>
                    <h3>Chronologie des Umbruchs:</h3>
                    <ul>
                        <li><span class="important">30. Oktober 1918:</span> Matrosen verweigern den Gehorsam (Matrosenaufstand).</li>
                        <li><span class="important">9. November 1918:</span> Doppelte Ausrufung der Republik durch Philipp Scheidemann (SPD) und Karl Liebknecht (Spartakusbund). Der Kaiser dankt ab.</li>
                        <li><span class="highlight">Januar 1919:</span> Spartakusaufstand in Berlin.</li>
                        <li><span class="important">Ermordung</span> von Karl Liebknecht und Rosa Luxemburg durch Regierungstruppen.</li>
                        <li>Wahl der Nationalversammlung zur Gründung der ersten deutschen Demokratie.</li>
                    </ul>
                    <div class="info-block">Die Gewalt endete erst im Sommer 1919 mit dem Abschluss der revolutionären Wirren.</div>
                </div>`,
            quiz_ww1: `<div id="quiz-container-ww1"></div>`
        }
    }
};

/**
 * Kernlogik-Ergänzung für das WW1-Quiz (Multiple Choice & interaktiv)
 */
const questionsWW1 = [
    { 
        q: "Was war der 'Steckrübenwinter' 1916/17?", 
        a: ["Eine erfolgreiche deutsche Offensive", "Eine massive Hungersnot infolge von Missernten und Seeblockade", "Ein Streik der Landwirte"], 
        c: 1 
    },
    { 
        q: "Wann wurde das Hilfsdienstgesetz zur totalen Mobilisierung erlassen?", 
        a: ["1914", "1915", "1916"], 
        c: 2 
    },
    { 
        q: "Wie viele Zivilisten starben ca. an Unterernährung während des Krieges?", 
        a: ["100.000", "800.000", "2.000.000"], 
        c: 1 
    },
    { 
        q: "Wer rief am 9. November 1918 die Republik aus?", 
        a: ["Hindenburg & Ludendorff", "Scheidemann & Liebknecht", "Ebert & Bismarck"], 
        c: 1 
    },
    { 
        q: "Was war die sogenannte 'Judenzählung' von 1916?", 
        a: ["Eine Zählung zur Einführung von Feiertagen", "Eine diskriminierende statistische Erhebung über jüdische Soldaten", "Eine Maßnahme zur Einwanderungskontrolle"], 
        c: 1 
    }
];

// Die renderQuiz Funktion muss so angepasst werden, dass sie questionsWW1 nutzt wenn der key 'ww1' ist.
// Ergänze das in deiner vorhandenen renderQuiz Funktion:

function renderQuiz(key) {
    const containerId = key === 'ottonen' ? 'quiz-container' : 'quiz-container-ww1';
    const container = document.getElementById(containerId);
    const qList = key === 'ottonen' ? questions.ottonen : questionsWW1;
    
    container.innerHTML = "<h2>Interaktives Prüfungstraining</h2><p>Testen Sie Ihr Wissen basierend auf den Original-Lerninhalten.</p>";
    
    qList.forEach((item, idx) => {
        const qCard = document.createElement('div');
        qCard.className = "card";
        qCard.innerHTML = `<p style="font-size:1.1rem;"><strong>Frage ${idx+1}:</strong> ${item.q}</p>`;
        
        item.a.forEach((ans, ansIdx) => {
            const btn = document.createElement('button');
            btn.className = "quiz-opt";
            btn.innerText = ans;
            btn.onclick = () => {
                if (ansIdx === item.c) {
                    btn.classList.add('correct');
                    btn.innerHTML += " ✓ (Korrekt!)";
                } else {
                    btn.classList.add('wrong');
                    btn.innerHTML += " ✗ (Falsch)";
                }
                qCard.querySelectorAll('button').forEach(b => b.disabled = true);
            };
            qCard.appendChild(btn);
        });
        container.appendChild(qCard);
    });
}

/* --------------------------------------------------
   LOGIK & DATENBANK (Erweitert für Prüfungsmodus)
   --------------------------------------------------
*/

// ==========================================
// 1. GROSSE FRAGENDATENBANK (POOL)
// ==========================================
// c: Index der korrekten Antwort (0, 1 oder 2)
// cat: Kategorie ('ottonen' oder 'ww1')
// expl: Erklärungstext für das Feedback

// ==========================================
// 1. GROSSE FRAGENDATENBANK (POOL) - EXPANDED EDITION
// ==========================================
// c: Index der korrekten Antwort (0 bis 4)

const examPool = [
    // ------------------------------------------------------------------
    // THEMA: DIE OTTONEN (SCHWER & DETAILREICH)
    // ------------------------------------------------------------------
    { 
        cat: 'ottonen', 
        q: "An welchem Ort starb Otto der Große im Jahr 973?", 
        a: ["In seiner Pfalz in Aachen", "In Rom", "In der Pfalz Memleben", "Auf dem Schlachtfeld am Lech", "Im Kloster Quedlinburg"], 
        c: 2, 
        expl: "Otto I. starb am 7. Mai 973 in seiner Pfalz Memleben, demselben Ort, an dem auch sein Vater Heinrich I. gestorben war." 
    },
    { 
        cat: 'ottonen', 
        q: "Wer war Wilhelm, der spätere Erzbischof von Mainz?", 
        a: ["Ein Bruder Ottos I.", "Ein unehelicher Sohn Ottos I. mit einer slawischen Vornehmen", "Der Beichtvater von Adelheid", "Ein päpstlicher Gesandter", "Der Sohn von Otto II."], 
        c: 1, 
        expl: "Wilhelm war Ottos unehelicher Sohn aus einer Jugendliebe. Er wurde später Erzbischof von Mainz und spielte eine wichtige Rolle in der Reichspolitik." 
    },
    { 
        cat: 'ottonen', 
        q: "Welcher Papst krönte Otto I. im Jahr 962 zum Kaiser?", 
        a: ["Leo VIII.", "Johannes XII.", "Gregor V.", "Silvester II.", "Benedikt V."], 
        c: 1, 
        expl: "Papst Johannes XII. rief Otto zu Hilfe und krönte ihn. Später zerstritten sie sich jedoch, und Otto ließ ihn absetzen." 
    },
    { 
        cat: 'ottonen', 
        q: "Was geschah mit den 30 Slawenfürsten, die Markgraf Gero zu einem Festmahl einlud?", 
        a: ["Sie wurden getauft", "Sie schlossen einen ewigen Friedensvertrag", "Sie wurden im Schlaf ermordet", "Sie erhielten Ländereien in Sachsen", "Sie wurden als Geiseln nach Rom geschickt"], 
        c: 2, 
        expl: "Um die Herrschaft im Osten zu sichern, ließ Markgraf Gero die versammelten Slawenfürsten heimtückisch ermorden – ein Akt brutaler Machtpolitik." 
    },
    { 
        cat: 'ottonen', 
        q: "Welchen Beinamen trug Heinrich, der Bruder Ottos I., der mehrfach gegen ihn rebellierte?", 
        a: ["Der Löwe", "Der Zänker", "Der Fromme", "Ohne Beinamen (da er Herzog von Bayern war)", "Es gab keinen Bruder Heinrich"], 
        c: 3, 
        expl: "Vorsicht Fangfrage: Ottos *Bruder* war Heinrich I. von Bayern. 'Der Zänker' war dessen Sohn (Ottos Neffe), also Heinrich II. von Bayern." 
    },
    { 
        cat: 'ottonen', 
        q: "Welche symbolische Handlung vollzog Otto III. im Jahr 1000 in Gnesen?", 
        a: ["Er krönte Boleslaw Chrobry zum König", "Er errichtete das Erzbistum Gnesen", "Er erklärte Polen zum Lehen des Reiches", "Er heiratete eine polnische Prinzessin", "Er dankte ab"], 
        c: 1, 
        expl: "Der 'Akt von Gnesen' (Gründung des Erzbistums) gilt als Anerkennung der polnischen Souveränität im kirchlichen Bereich." 
    },
    { 
        cat: 'ottonen', 
        q: "Wer war Theophanu ursprünglich?", 
        a: ["Eine fränkische Adelige", "Eine byzantinische Prinzessin (Nichte des Kaisers Johannes Tzimiskes)", "Die Tochter des Papstes", "Eine angelsächsische Königstochter", "Eine slawische Fürstentochter"], 
        c: 1, 
        expl: "Sie kam aus Konstantinopel (Byzanz). Ihre Heirat mit Otto II. sollte das 'Zweikaiserproblem' zwischen Ost und West lösen." 
    },
    { 
        cat: 'ottonen', 
        q: "Welches Schicksal ereilte Otto II. nach der Niederlage gegen die Sarazenen?", 
        a: ["Er geriet in Gefangenschaft und wurde gegen Lösegeld frei", "Er fiel noch auf dem Schlachtfeld", "Er floh auf ein byzantinisches Schiff und entkam nur knapp", "Er siegte im letzten Moment doch noch", "Er wurde vom Papst exkommuniziert"], 
        c: 2, 
        expl: "Er musste schwimmend auf ein Schiff fliehen. Als die Besatzung ihn als Geisel nehmen wollte, sprang er erneut ins Meer und entkam." 
    },
    { 
        cat: 'ottonen', 
        q: "Was versteht man unter dem 'Liudolf-Aufstand'?", 
        a: ["Einen Bauernaufstand in Sachsen", "Die Rebellion von Ottos Sohn und Konrad dem Roten gegen Otto I.", "Einen Aufstand der Slawen", "Den Konflikt zwischen Otto II. und seiner Mutter", "Den Kampf um die Investitur"], 
        c: 1, 
        expl: "Liudolf fürchtete durch Ottos zweite Heirat mit Adelheid um sein Erbe und verbündete sich mit Konrad dem Roten gegen seinen Vater." 
    },
    { 
        cat: 'ottonen', 
        q: "Welche Schlacht beendete die Ungarngefahr im Jahr 955 endgültig?", 
        a: ["Schlacht bei Riade", "Schlacht auf dem Lechfeld", "Schlacht an der Unstrut", "Schlacht bei Lenzen", "Schlacht von Hastings"], 
        c: 1, 
        expl: "Am 10. August 955 besiegte Otto I. die Ungarn vernichtend bei Augsburg (Lechfeld)." 
    },
    { 
        cat: 'ottonen', 
        q: "Wie reagierte Otto I. auf den Tod seiner ersten Frau Edgitha?", 
        a: ["Er heiratete sofort Adelheid", "Er ging ins Kloster", "Er regelte 946 erstmals offiziell seine Nachfolge und bestimmte Liudolf", "Er startete einen Krieg gegen England", "Er dankte ab"], 
        c: 2, 
        expl: "Nach ihrem Tod bestimmte er seinen Sohn Liudolf zum Nachfolger – eine Regelung, die durch seine spätere zweite Heirat wieder brüchig wurde." 
    },
    { 
        cat: 'ottonen', 
        q: "Wer war Gerbert von Aurillac?", 
        a: ["Ein aufständischer Herzog", "Der Lehrer Ottos III. und spätere Papst Silvester II.", "Der Anführer der Slawen", "Ein byzantinischer Gesandter", "Der Mörder von Otto II."], 
        c: 1, 
        expl: "Er war ein hochgelehrter Mann, Mathematiker und enger Vertrauter Ottos III., der ihn zum Papst machte." 
    },
    { 
        cat: 'ottonen', 
        q: "Welches Herzogtum fiel Otto I. nach dem Aufstand von 939 direkt zu?", 
        a: ["Bayern", "Schwaben", "Franken", "Lothringen", "Sachsen"], 
        c: 2, 
        expl: "Nach dem Tod von Herzog Eberhard behielt Otto das Herzogtum Franken in eigener Hand, um seine Machtbasis zu stärken." 
    },
    { 
        cat: 'ottonen', 
        q: "Was war das 'Ottonianum' (962)?", 
        a: ["Ein Kloster", "Ein Gesetz zur Papstwahl und Bestätigung der Pippinischen Schenkung", "Die Krone der Ottonen", "Ein Friedensvertrag mit Byzanz", "Die Gründungsurkunde von Magdeburg"], 
        c: 1, 
        expl: "Es regelte das Verhältnis zwischen Kaiser und Papst: Der Kaiser schützte die Kirche, verlangte aber Treue und Mitsprache bei der Papstwahl." 
    },
    { 
        cat: 'ottonen', 
        q: "Wer rebellierte 984 und versuchte, sich die Vormundschaft über Otto III. zu sichern?", 
        a: ["Heinrich der Zänker", "Konrad der Rote", "Liudolf", "Otto von Worms", "Hermann von Schwaben"], 
        c: 0, 
        expl: "Heinrich der Zänker (aus der bayerischen Linie) wollte die Situation des Kindkönigs nutzen, um selbst die Macht zu greifen." 
    },
    { 
        cat: 'ottonen', 
        q: "Warum ist die Heirat Ottos I. mit Adelheid 951 so bedeutend?", 
        a: ["Sie brachte viel Geld", "Sie legitimierte den Anspruch auf die italienische Königskrone", "Sie beendete den Streit mit Frankreich", "Sie war die erste Liebesheirat im Mittelalter", "Adelheid war eine Slawin"], 
        c: 1, 
        expl: "Adelheid war die Königwitwe Italiens. Wer sie heiratete, hatte den Schlüssel zur Herrschaft über Italien." 
    },
    { 
        cat: 'ottonen', 
        q: "Welche Stadt machte Otto I. zu seinem bevorzugten Aufenthalts- und Krönungsort?", 
        a: ["Frankfurt", "Aachen", "Magdeburg", "Goslar", "Regensburg"], 
        c: 1, 
        expl: "Er wählte Aachen, um sich bewusst in die Tradition Karls des Großen zu stellen." 
    },
    { 
        cat: 'ottonen', 
        q: "Was bedeutet der Grundsatz der 'Indivisibilität' (Unteilbarkeit), den Heinrich I. einführte?", 
        a: ["Das Reich wird unter allen Söhnen aufgeteilt", "Nur der Älteste erbt das Königtum (Vermeidung der Reichsteilung)", "Das Volk wählt den König frei", "Die Kirche bestimmt den König", "Frauen dürfen auch herrschen"], 
        c: 1, 
        expl: "Dies war ein Bruch mit der fränkischen Tradition der Erbteilung und sicherte den Bestand des Ostfrankenreichs." 
    },
    { 
        cat: 'ottonen', 
        q: "Wie hieß der byzantinische Kaiser, der die Hochzeit seiner Nichte Theophanu genehmigte?", 
        a: ["Konstantin VII.", "Basileios II.", "Johannes Tzimiskes", "Nikephoros Phokas", "Justinian"], 
        c: 2, 
        expl: "Nachdem der vorherige Kaiser (Nikephoros) sich geweigert hatte, stimmte der neue Kaiser Johannes Tzimiskes der Ehe zu." 
    },
    { 
        cat: 'ottonen', 
        q: "Welches Ereignis löste den großen Slawenaufstand von 983 aus?", 
        a: ["Der Tod Ottos I.", "Die Niederlage Ottos II. in Süditalien (Kap Colonna)", "Eine Hungersnot", "Die Taufe eines Slawenfürsten", "Der Bau des Doms zu Magdeburg"], 
        c: 1, 
        expl: "Die Nachricht von der Schwäche des kaiserlichen Heeres nach der Niederlage gegen die Sarazenen ermutigte die slawischen Stämme zum Aufstand." 
    },

    // ------------------------------------------------------------------
    // THEMA: 1. WELTKRIEG (SCHWER & DETAILREICH)
    // ------------------------------------------------------------------
    { 
        cat: 'ww1', 
        q: "Wann trat das Deutsche Reich in den Ersten Weltkrieg ein?", 
        a: ["1913", "1914", "1915", "1916", "1917"], 
        c: 1, 
        expl: "Der Krieg begann im Sommer 1914 nach dem Attentat von Sarajevo und der folgenden Julikrise." 
    },
    { 
        cat: 'ww1', 
        q: "Was war das 'Bild- und Filmamt' (BUFA)?", 
        a: ["Eine Zensurbehörde für Zeitungen", "Eine Einrichtung zur Produktion von Propaganda (gegründet 1917)", "Ein Kino für Soldaten", "Eine Abteilung für Luftaufklärung", "Ein Spionagenetzwerk"], 
        c: 1, 
        expl: "Die OHL erkannte spät die Macht der Bilder und gründete 1917 das BUFA, um die Moral durch Filme und Fotos zu stärken." 
    },
    { 
        cat: 'ww1', 
        q: "Welches Ereignis löste den Kriegseintritt der USA im Jahr 1917 direkt aus?", 
        a: ["Der Angriff auf Pearl Harbor", "Die Versenkung der Lusitania (allein)", "Die Wiederaufnahme des uneingeschränkten U-Boot-Krieges", "Die Oktoberrevolution", "Der Vormarsch auf Paris"], 
        c: 2, 
        expl: "Deutschland erklärte, auch zivile Schiffe neutraler Staaten anzugreifen. Dies führte zur Kriegserklärung der USA." 
    },
    { 
        cat: 'ww1', 
        q: "Was versteht man unter dem 'Steckrübenwinter'?", 
        a: ["Eine militärische Operation im Winter", "Die Hungerkrise 1916/17, bei der Steckrüben das Hauptnahrungsmittel waren", "Ein Streik der Landwirte", "Den Winter, in dem der Krieg endete", "Eine neue Anbaumethode"], 
        c: 1, 
        expl: "Durch die britische Seeblockade und Missernten brach die Versorgung zusammen. Ca. 800.000 Zivilisten starben im Krieg an Unterernährung." 
    },
    { 
        cat: 'ww1', 
        q: "Wer rief am 9. November 1918 die 'sozialistische Republik' aus?", 
        a: ["Friedrich Ebert", "Philipp Scheidemann", "Karl Liebknecht", "Rosa Luxemburg", "Paul von Hindenburg"], 
        c: 2, 
        expl: "Scheidemann rief vom Reichstag die (bürgerliche) Republik aus, Liebknecht kurz darauf vom Berliner Stadtschloss die sozialistische." 
    },
    { 
        cat: 'ww1', 
        q: "Was war der Auslöser für den Kieler Matrosenaufstand 1918?", 
        a: ["Schlechtes Essen", "Der Befehl zu einer sinnlosen letzten Entscheidungsschlacht gegen England", "Die Verhaftung des Kapitäns", "Die Abdankung des Kaisers", "Ein Angriff der Engländer"], 
        c: 1, 
        expl: "Die Admiralität wollte die Flotte in einen ehrenvollen Untergang schicken ('Feuer aus!'). Die Matrosen verweigerten den Gehorsam." 
    },
    { 
        cat: 'ww1', 
        q: "Was besagte das 'Hindenburg-Programm' von 1916?", 
        a: ["Sofortige Friedensverhandlungen", "Totale Mobilmachung: Verdopplung der Rüstungsproduktion & Arbeitspflicht", "Rückzug an der Westfront", "Einführung des Frauenwahlrechts", "Abschaffung der Monarchie"], 
        c: 1, 
        expl: "Es war der Versuch, die Wirtschaft komplett auf den Krieg auszurichten. Es scheiterte an Mangel an Arbeitskräften und Rohstoffen." 
    },
    { 
        cat: 'ww1', 
        q: "Welche Krankheit forderte ab 1918 weltweit mehr Tote als der Krieg selbst?", 
        a: ["Die Pest", "Die Spanische Grippe", "Cholera", "Typhus", "Tuberkulose"], 
        c: 1, 
        expl: "Die Spanische Grippe traf auf eine durch Hunger geschwächte Bevölkerung und tötete weltweit zwischen 20 und 50 Millionen Menschen." 
    },
    { 
        cat: 'ww1', 
        q: "Was war die 'Judenzählung' von 1916?", 
        a: ["Eine Schutzmaßnahme für jüdische Soldaten", "Eine antisemitische Erhebung, um Juden 'Drückebergerei' vorzuwerfen", "Eine religiöse Statistik", "Die Zählung jüdischer Gefallener für ein Denkmal", "Eine Volkszählung in Polen"], 
        c: 1, 
        expl: "Das Kriegsministerium wollte beweisen, dass Juden sich drückten. Da das Gegenteil der Fall war (sie dienten loyal), wurden die Ergebnisse verschwiegen." 
    },
    { 
        cat: 'ww1', 
        q: "Welche neue Waffe kam 1915 bei Ypern erstmals großflächig zum Einsatz?", 
        a: ["Der Panzer", "Das Maschinengewehr", "Giftgas (Chlorgas)", "Der Flammenwerfer", "Das U-Boot"], 
        c: 2, 
        expl: "Der Einsatz von Giftgas durch deutsche Truppen war ein Verstoß gegen die Haager Landkriegsordnung und markierte eine neue Stufe des Schreckens." 
    },
    { 
        cat: 'ww1', 
        q: "Wer waren die 'Revolutionären Obleute'?", 
        a: ["Eine Eliteeinheit der Armee", "Eine Gruppe unabhängiger Gewerkschafter, die Streiks organisierten", "Die Leibwache des Kaisers", "Eine religiöse Sekte", "Die Abgeordneten der SPD"], 
        c: 1, 
        expl: "Sie organisierten, oft im Verborgenen, die großen Massenstreiks (z.B. Januarstreik 1918) in der Rüstungsindustrie." 
    },
    { 
        cat: 'ww1', 
        q: "Warum spaltete sich die USPD 1917 von der SPD ab?", 
        a: ["Sie war kaisertreu", "Sie lehnte die Bewilligung weiterer Kriegskredite ab (Bruch des Burgfriedens)", "Sie wollte den Krieg offensiver führen", "Sie wollte sich der CDU anschließen", "Wegen eines Streits um Gehälter"], 
        c: 1, 
        expl: "Die USPD formierte sich als Opposition gegen die kriegsunterstützende Haltung ('Burgfrieden') der Mehrheits-SPD." 
    },
    { 
        cat: 'ww1', 
        q: "Was versteht man unter 'Materialschlacht'?", 
        a: ["Einen Kampf um Rohstoffe", "Eine Kriegsführung, bei der Mensch und Material massenhaft und rücksichtslos eingesetzt werden", "Eine Schlacht ohne Waffen", "Den Wirtschaftskrieg", "Die Produktion von Panzern"], 
        c: 1, 
        expl: "Beispiele sind Verdun und die Somme: Der Gegner sollte durch gigantischen Einsatz von Artillerie 'zermürbt' werden ('Blutmühle')." 
    },
    { 
        cat: 'ww1', 
        q: "Welche Auswirkung hatte der Krieg auf das Frauenbild?", 
        a: ["Keine, Frauen blieben zuhause", "Frauen übernahmen 'Männerberufe' in Fabriken und im öffentlichen Dienst", "Frauen durften erstmals zur Armee", "Frauen verloren ihre Rechte", "Die Geburtenrate stieg enorm"], 
        c: 1, 
        expl: "Da die Männer an der Front waren, hielten Frauen das öffentliche Leben und die Rüstungsproduktion aufrecht. Dies stärkte ihr Selbstbewusstsein langfristig." 
    },
    { 
        cat: 'ww1', 
        q: "Wie viele Menschen (Soldaten und Zivilisten) starben etwa im Ersten Weltkrieg?", 
        a: ["1 Million", "5 Millionen", "17 Millionen", "50 Millionen", "100 Millionen"], 
        c: 2, 
        expl: "Schätzungen gehen von ca. 9-10 Mio. Soldaten und ca. 7 Mio. Zivilisten aus." 
    },
    { 
        cat: 'ww1', 
        q: "Was geschah am 11. November 1918?", 
        a: ["Der Kaiser dankte ab", "Ausrufung der Republik", "Unterzeichnung des Waffenstillstands von Compiègne", "Beginn des Versailler Vertrags", "Matrosenaufstand in Kiel"], 
        c: 2, 
        expl: "Matthias Erzberger unterzeichnete den Waffenstillstand im Wald von Compiègne, was die Kampfhandlungen beendete." 
    },
    { 
        cat: 'ww1', 
        q: "Was war der 'Januarstreik' 1918?", 
        a: ["Ein kleiner lokaler Protest", "Der größte Massenstreik des Krieges mit über 1 Million Teilnehmern", "Ein Streik der Soldaten an der Front", "Ein Bauernaufstand", "Der Beginn der Revolution"], 
        c: 1, 
        expl: "Die Arbeiter forderten 'Frieden ohne Annexionen', bessere Lebensmittelversorgung und Demokratisierung." 
    },
    { 
        cat: 'ww1', 
        q: "Welches Schlagwort nutzte die deutsche Propaganda, um die Moral zu stärken?", 
        a: ["Freiheit, Gleichheit, Brüderlichkeit", "Im Felde unbesiegt", "Gott mit uns / Durchhalten", "Make Germany Great Again", "Proletarier aller Länder vereinigt euch"], 
        c: 2, 
        expl: "Die Propaganda appellierte an den 'Durchhaltewillen' und nutzte patriotische Parolen, auch auf Alltagsgegenständen." 
    },
    { 
        cat: 'ww1', 
        q: "Wie reagierte der Staat auf die 'Jammerbriefe' der Frauen an die Frontsoldaten?", 
        a: ["Er schickte mehr Essen", "Er setzte Zensur ein und startete Propaganda-Kampagnen zur 'Stimmungsaufhellung'", "Er beendete den Krieg", "Er erlaubte den Frauen, die Front zu besuchen", "Er ignorierte sie"], 
        c: 1, 
        expl: "Die OHL fürchtete, dass die Berichte über den Hunger in der Heimat die Kampfmoral der Soldaten zersetzen würden." 
    },
    { 
        cat: 'ww1', 
        q: "Was war das Ziel des Schlieffen-Plans?", 
        a: ["Ein Sitzkrieg im Westen", "Ein Blitzsieg gegen Frankreich, um dann Russland anzugreifen", "Ein reiner Verteidigungskrieg", "Die Eroberung Englands per Flotte", "Ein Bündnis mit den USA"], 
        c: 1, 
        expl: "Man wollte einen Zweifrontenkrieg vermeiden, indem man Frankreich schnell besiegt, bevor das riesige Russland mobilmachen konnte." 
    }
];

// ==========================================
// 2. STEUERUNGS-LOGIK (App & Exam)
// ==========================================

let currentTopicKey = '';
let examSession = {
    questions: [],
    currentIndex: 0,
    score: 0
};

// --- Navigation & App Start ---

function startApp(key) {
    currentTopicKey = key;
    document.getElementById('homescreen').style.display = 'none';
    document.getElementById('app-interface').style.display = 'block';
    document.getElementById('exam-interface').style.display = 'none'; // Sicherstellen, dass Exam aus ist

    document.getElementById('active-title').innerText = database[key].title;
    
    // Sidebar bauen
    const menuContainer = document.getElementById('sidebar-nav');
    menuContainer.innerHTML = '';
    
    database[key].menu.forEach(item => {
        const btn = document.createElement('div');
        btn.className = 'nav-item';
        btn.innerText = item.title;
        btn.id = 'nav-' + item.id;
        btn.onclick = () => loadContent(item.id);
        menuContainer.appendChild(btn);
    });

    if (database[key].menu.length > 0) {
        loadContent(database[key].menu[0].id);
    }
}

/**
 * Lädt den Inhalt in den Hauptbereich & erstellt den "Weiter"-Button
 */
function loadContent(contentId) {
    const contentArea = document.getElementById('content-display');
    
    // 1. Menü-Aktivierung (Sidebar Highlights)
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    const activeBtn = document.getElementById('nav-' + contentId);
    if (activeBtn) activeBtn.classList.add('active');

    // 2. Inhalt laden
    if (contentId.startsWith('quiz')) {
        // Falls es ein Quiz ist
        contentArea.innerHTML = `<div id="${contentId === 'quiz' ? 'quiz-container' : 'quiz-container-ww1'}"></div>`;
        renderMiniQuiz(currentTopicKey); 
    } else {
        // Normalen Textinhalt holen
        let htmlContent = database[currentTopicKey].content[contentId];
        
        if (!htmlContent) {
            htmlContent = "<h2>Inhalt nicht gefunden</h2>";
        }

        // --- NEU: WEITER-BUTTON LOGIK ---
        
        // a) Wir holen uns die Liste aller Menüpunkte des aktuellen Themas
        const menuItems = database[currentTopicKey].menu;
        
        // b) Wir suchen, an welcher Stelle (Index) wir gerade sind
        const currentIndex = menuItems.findIndex(item => item.id === contentId);

        // c) Wenn wir nicht am Ende sind, bauen wir den Button
        if (currentIndex !== -1 && currentIndex < menuItems.length - 1) {
            const nextItem = menuItems[currentIndex + 1];
            
            // HTML für den Button anhängen
            htmlContent += `
                <div class="nav-buttons-container">
                    <button class="next-section-btn" onclick="loadContent('${nextItem.id}')">
                        Weiter ➔
                    </button>
                </div>
            `;
        }
        // -------------------------------

        contentArea.innerHTML = htmlContent;
    }
    
    // 3. Nach oben scrollen bei neuem Inhalt (Wichtig für Mobile!)
    contentArea.scrollTop = 0;
    
    // Fallback für Mobile (falls contentArea scrollt oder body scrollt)
    window.scrollTo(0, 0);
}

function goHome() {
    document.getElementById('app-interface').style.display = 'none';
    document.getElementById('homescreen').style.display = 'flex';
}

// --- Das "kleine" Übungsquiz in den Themenbereichen ---
// Benutzt die alten Fragen, falls vorhanden, oder zieht welche aus dem Pool
function renderMiniQuiz(key) {
    const containerId = key === 'ottonen' ? 'quiz-container' : 'quiz-container-ww1';
    const container = document.getElementById(containerId);
    
    // Filtere 5 zufällige Fragen aus dem großen Pool für das Thema
    const topicQuestions = examPool.filter(q => q.cat === key).sort(() => 0.5 - Math.random()).slice(0, 5);

    container.innerHTML = `
        <div class="card" style="border-left: 5px solid var(--primary)">
            <h2>Schnell-Check: ${database[key].title}</h2>
            <p>5 zufällige Fragen zum Üben.</p>
        </div>
    `;
    
    topicQuestions.forEach((item, idx) => {
        const qCard = document.createElement('div');
        qCard.className = "card";
        qCard.innerHTML = `<p style="font-size:1.1rem;"><strong>Frage ${idx+1}:</strong> ${item.q}</p>`;
        
        item.a.forEach((ans, ansIdx) => {
            const btn = document.createElement('button');
            btn.className = "quiz-opt";
            btn.innerText = ans;
            btn.onclick = () => {
                if (ansIdx === item.c) {
                    btn.classList.add('correct');
                    btn.innerHTML += " ✓";
                } else {
                    btn.classList.add('wrong');
                    btn.innerHTML += " ✗";
                }
                qCard.querySelectorAll('button').forEach(b => b.disabled = true);
                
                // Feedback einblenden
                const fb = document.createElement('div');
                fb.style.marginTop = "10px";
                fb.style.padding = "10px";
                fb.style.background = "rgba(255,255,255,0.05)";
                fb.innerHTML = `<small>Info: ${item.expl}</small>`;
                qCard.appendChild(fb);
            };
            qCard.appendChild(btn);
        });
        container.appendChild(qCard);
    });
}


// ==========================================
// 3. DER NEUE "BIG EXAM" MODUS
// ==========================================

function startGlobalExam() {
    // 1. UI umschalten
    document.getElementById('homescreen').style.display = 'none';
    document.getElementById('app-interface').style.display = 'none';
    document.getElementById('exam-interface').style.display = 'block';

    // 2. Fragen zusammenstellen (10 Ottonen + 10 WW1)
    const ottonenQs = examPool.filter(q => q.cat === 'ottonen').sort(() => 0.5 - Math.random()).slice(0, 10);
    const ww1Qs = examPool.filter(q => q.cat === 'ww1').sort(() => 0.5 - Math.random()).slice(0, 10);
    
    // Zusammenfügen und nochmal mischen
    examSession.questions = [...ottonenQs, ...ww1Qs].sort(() => 0.5 - Math.random());
    examSession.currentIndex = 0;
    examSession.score = 0;

    // 3. Erste Frage laden
    renderExamQuestion();
}

/**
 * Zeigt die Prüfungsfrage an, versteckt aber zunächst die Antworten
 */
function renderExamQuestion() {
    const qData = examSession.questions[examSession.currentIndex];
    
    // Das ist der Haupt-Container (die Karte)
    const container = document.getElementById('exam-card');
    
    // Diese Elemente holen wir uns, um sie zurückzusetzen
    const feedbackBox = document.getElementById('exam-feedback');
    const nextBtn = document.getElementById('next-q-btn');
    const progressDiv = document.getElementById('exam-progress');

    // Reset UI (Feedback und Weiter-Button ausblenden)
    feedbackBox.style.display = 'none';
    nextBtn.style.display = 'none';
    container.innerHTML = ''; // Alten Inhalt löschen
    
    // Fortschrittsanzeige aktualisieren
    progressDiv.innerText = `Frage ${examSession.currentIndex + 1} / 20`;

    // 1. Frage-Text erstellen und anzeigen
    const qTitle = document.createElement('div');
    qTitle.className = 'exam-question-text';
    qTitle.innerText = qData.q;
    container.appendChild(qTitle); // Frage kommt direkt in den Container

    // 2. Button "Antworten einblenden" erstellen
    const showOptionsBtn = document.createElement('button');
    showOptionsBtn.className = 'next-btn';
    // Styling für den Einblenden-Button (sieht etwas anders aus als der Weiter-Button)
    showOptionsBtn.style.background = 'var(--bg-panel)';
    showOptionsBtn.style.border = '1px solid var(--primary)';
    showOptionsBtn.style.color = 'var(--primary)';
    showOptionsBtn.innerText = 'Antwortoptionen einblenden';
    
    // 3. Container für die Antworten erstellen UND VERSTECKEN
    const optionsContainer = document.createElement('div');
    optionsContainer.id = 'options-container';
    
    // --- HIER IST DER ENTSCHEIDENDE PUNKT ---
    optionsContainer.style.display = 'none'; // Zuerst unsichtbar machen!
    optionsContainer.style.width = '100%';
    optionsContainer.style.marginTop = '20px';

    // 4. Antwort-Buttons erstellen
    qData.a.forEach((ans, idx) => {
        const btn = document.createElement('button');
        btn.className = 'exam-opt';
        btn.innerText = ans;
        btn.onclick = () => checkExamAnswer(btn, idx, qData);
        
        // --- WICHTIG: Buttons in den optionsContainer, NICHT in container ---
        optionsContainer.appendChild(btn); 
    });

    // 5. Klick-Event: Wenn man auf "Einblenden" klickt
    showOptionsBtn.onclick = () => {
        showOptionsBtn.style.display = 'none';   // Einblenden-Button weg
        optionsContainer.style.display = 'block'; // Antworten-Container da
    };

    // Erst den Button, dann den (noch unsichtbaren) Container anhängen
    container.appendChild(showOptionsBtn);
    container.appendChild(optionsContainer);
}

function checkExamAnswer(selectedBtn, selectedIdx, qData) {
    // Alle Buttons deaktivieren
    const allBtns = document.querySelectorAll('.exam-opt');
    allBtns.forEach(b => b.disabled = true);

    const isCorrect = (selectedIdx === qData.c);
    
    if (isCorrect) {
        selectedBtn.classList.add('selected-correct');
        examSession.score++;
    } else {
        selectedBtn.classList.add('selected-wrong');
        // Zeige den richtigen Button an
        allBtns[qData.c].classList.add('selected-correct');
    }

    // Feedback Box befüllen und zeigen
    const fbBox = document.getElementById('exam-feedback');
    fbBox.innerHTML = `
        <h3 style="margin-top:0; color: ${isCorrect ? 'var(--success)' : 'var(--danger)'}">
            ${isCorrect ? 'Richtig!' : 'Leider falsch.'}
        </h3>
        <p class="explanation-text">${qData.expl}</p>
    `;
    fbBox.style.display = 'block';

    // Weiter-Button zeigen
    const nextBtn = document.getElementById('next-q-btn');
    nextBtn.style.display = 'block';
    
    // Text des Buttons anpassen (letzte Frage?)
    if (examSession.currentIndex === 19) {
        nextBtn.innerText = "Prüfung beenden & Auswerten";
    } else {
        nextBtn.innerText = "Nächste Frage ➔";
    }
}

function nextExamQuestion() {
    if (examSession.currentIndex < 19) {
        examSession.currentIndex++;
        renderExamQuestion();
    } else {
        showExamResult();
    }
}

function showExamResult() {
    const container = document.getElementById('exam-interface');
    const passed = examSession.score >= 11;
    
    container.innerHTML = `
        <div class="top-bar">
            <button onclick="goHomeFromExam()" style="background:transparent; color:white; border:none;">← Menü</button>
            <div style="font-weight:bold; color:white;">ERGEBNIS</div>
            <div style="width:50px"></div>
        </div>
        <div class="exam-container" style="text-align:center; margin-top:100px;">
            <div class="card" style="border-color: ${passed ? 'var(--success)' : 'var(--danger)'}">
                <h1>${passed ? 'Herzlichen Glückwunsch!' : 'Prüfung nicht bestanden'}</h1>
                <div class="result-score ${passed ? 'pass' : 'fail'}">
                    ${examSession.score} / 20
                </div>
                <p style="font-size:1.2rem; color:#ccc;">
                    ${passed 
                        ? 'Sie haben solides historisches Wissen bewiesen!' 
                        : 'Sie benötigen mindestens 11 Punkte. Versuchen Sie es noch einmal.'}
                </p>
                <button class="next-btn" onclick="goHomeFromExam()" style="margin-top:20px;">Zurück zum Hauptmenü</button>
                <button class="next-btn" onclick="startGlobalExam()" style="margin-top:10px; background:#4b5563;">Prüfung wiederholen</button>
            </div>
        </div>
    `;
}

function goHomeFromExam() {
    // Seite neu laden ist am saubersten, um den HTML-Zustand des Exam-Containers zurückzusetzen
    location.reload(); 
}
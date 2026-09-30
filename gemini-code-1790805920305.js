const stationsData = [
    {
        id: 1,
        name: "1. ABCDE Légútbiztosítás",
        criteria: [
            { name: "[Egyszerű légút] Megfelelő méretű Guedel tubus kiválasztása (zöld)", maxPoints: 1 },
            { name: "[Egyszerű légút] Fej hátrahajtása", maxPoints: 1 },
            { name: "[Egyszerű légút] Áll előreszegése, ujjbegyek az állcsúcson", maxPoints: 1 },
            { name: "[Egyszerű légút] Eszköz helyes bevezetése", maxPoints: 1 },
            { name: "[Egyszerű légút] Pozíció ellenőrzése ballonos lélegeztetéssel", maxPoints: 1 },
            { name: "[Egyszerű légút] Megfelelő méretű Wendl tubus kiválasztása", maxPoints: 1 },
            { name: "[Egyszerű légút] Wendl tubus síkosítása és bevezetése", maxPoints: 1 },
            { name: "[Szupraglottikus] I-gel kiválasztása (zöld/citromsárga), síkosítása, bevezetése", maxPoints: 3 },
            { name: "[Szupraglottikus] I-gel ellenőrzése és kirögzítése", maxPoints: 2 },
            { name: "[COVID mintavétel] Eszközök és védőfelszerelés helyes használata", maxPoints: 2 },
            { name: "[COVID mintavétel] Folyamatos kommunikáció és helyes mintavétel", maxPoints: 3 },
            { name: "[COVID mintavétel] Minta helyes elcsomagolása, tárolása", maxPoints: 1 },
            { name: "[Endotracheális intubáció] Eszközök előkészítése és lapoc/tubus méret választás", maxPoints: 3 },
            { name: "[Endotracheális intubáció] Fej hátraszegése, fogtörés elkerülése, sikeres manőver", maxPoints: 3 },
            { name: "[Endotracheális intubáció] Tubus pozíció 5 pontos ellenőrzése és rögzítése", maxPoints: 3 },
            { name: "[In-line stabilizáció] Folyamatos nyak stabilizálás a beavatkozás alatt", maxPoints: 2 },
            { name: "[Eshmark műfogás] Fej hátraszegése, ujjpozíciók és áll kiemelése", maxPoints: 4 }
        ],
        knowledge: null
    },
    {
        id: 2,
        name: "2.1 BLS és Stabil Oldalfekvés",
        criteria: [
            { name: "[BLS 2 fő] Helyszín biztonsága, reakció- és légzésvizsgálat", maxPoints: 3 },
            { name: "[BLS 2 fő] Segélykérés (csapattárs és OMSZ)", maxPoints: 2 },
            { name: "[BLS 2 fő] Mellkaskompresszió: kézpozíció, mélység, frekvencia, felengedés (mindkét tagnál)", maxPoints: 8 },
            { name: "[BLS 2 fő] Váltás 2 percen belül (max 5 mp megszakítás)", maxPoints: 2 },
            { name: "[xBLS 3 fő] Defibrillátor és ballon-maszk hozatala", maxPoints: 2 },
            { name: "[xBLS 3 fő] Elektródák felhelyezése és biztonságos sokkleadás", maxPoints: 5 },
            { name: "[xBLS 3 fő] Kompresszió azonnali folytatása sokk után", maxPoints: 1 },
            { name: "[Protokoll] BLS lépések helyes sorrendbe rendezése", maxPoints: 7 },
            { name: "[Stabil oldalfekvés] Helyes kéz/láb pozíció, átfordítás és légzésellenőrzés", maxPoints: 5 }
        ],
        knowledge: null
    },
    {
        id: 3,
        name: "2.2 Kardiológia",
        criteria: [
            { name: "[12 elvezetéses EKG] Kesztyű, zselé, elektródák megfelelő felragasztása", maxPoints: 3 },
            { name: "[12 elvezetéses EKG] Végtagi és mellkasi elvezetések pontos helye", maxPoints: 3 },
            { name: "[12 elvezetéses EKG] Jobb kamrai infarktus (V1R-V6R) pontos helyének megnevezése", maxPoints: 6 },
            { name: "[EKG elemzés] 6 lépéses elemzés és ritmus megnevezése", maxPoints: 7 },
            { name: "[Hallgatózás] Aorta, Pulmonális, Bicuspidális és Tricuspidális pontok bemutatása", maxPoints: 4 }
        ],
        knowledge: null
    },
    {
        id: 4,
        name: "3.2 & 3.3 Artériás vérgáz és Injekció/Infúzió",
        criteria: [
            { name: "[Artéria punkció] Eszközök, kesztyű, leszorítás, artéria tapintása", maxPoints: 4 },
            { name: "[Artéria punkció] Na-heparinos fecskendő használata, sikeres punkció, komprimálás", maxPoints: 6 },
            { name: "[Vénakanül] Fertőtlenítés, sikeres szúrás, fém tű eltávolítása, vérzés megakadályozása", maxPoints: 4 },
            { name: "[Vénakanül] Fiziológiás sóval átmosás, kupak, rögzítés és feliratozás", maxPoints: 5 },
            { name: "[Infúzió] Szerelék összeállítása, légtelenítés, csatlakoztatás, cseppszám ellenőrzés", maxPoints: 5 },
            { name: "[Zárt vérvétel] Vacutainer szúrása, csövek töltése, komprimálás és feliratozás", maxPoints: 6 }
        ],
        knowledge: null
    },
    {
        id: 5,
        name: "4.0 ALS (Kiterjesztett Újraélesztés)",
        criteria: [
            { name: "[Reanimáció] Reakció/légzésvizsgálat, ritmusanalízis (VF felismerése)", maxPoints: 4 },
            { name: "[Reanimáció] Biztonságos defibrillálás, azonnali kompresszió kezdés", maxPoints: 4 },
            { name: "[Reanimáció] Helyes kompresszió (mélység/frekvencia) és 2 percenkénti váltás", maxPoints: 6 },
            { name: "[Reanimáció] Asystolia felismerése, Tonogén (1 ml) bemosása, légútbiztosítás", maxPoints: 5 },
            { name: "[Reanimáció] Sinusritmus felismerése, ROSC megállapítása", maxPoints: 3 },
            { name: "[Közös gondolkodás] Bedside UH, Astrup, EtCO2 kérése", maxPoints: 4 },
            { name: "[Közös gondolkodás] Reverzibilis okok: 4 T és 4 H felsorolása", maxPoints: 8 },
            { name: "[Gyógyszerek] Tonogén, Amiodaron (300/150mg), Magnézium, Bikarbonát dózisok", maxPoints: 6 }
        ],
        knowledge: null
    },
    {
        id: 6,
        name: "5.0 Gasztroenterológia",
        criteria: [
            { name: "[RDV] Kesztyű, síkosító, farpofák széttárása, végbélnyílás feltárása", maxPoints: 4 },
            { name: "[RDV] 360 fokos tapintás, kesztyű megtekintése, elváltozások (vér, nyák, aranyér) megnevezése", maxPoints: 4 },
            { name: "[RDV Patológia] 4 db diagnózis és morfológiai leírás", maxPoints: 8 },
            { name: "[Gyomorszonda] Eszközök, orrnyílás választás, síkosítás, levezetés, pozíció ellenőrzés", maxPoints: 5 },
            { name: "[Ascites punkció] Indikációk/kontraindikációk, szövődmények, szúrási pontok megnevezése", maxPoints: 5 },
            { name: "[Ascites punkció] Steril kivitelezés egy mozdulattal, betegtájékoztatás", maxPoints: 4 }
        ],
        knowledge: null
    },
    {
        id: 7,
        name: "6.1 Fül-Orr-Gégészet (Fülvizsgálat és Idegentest)",
        criteria: [
            { name: "[Fülvizsgálat] Otoszkóp helyes tartása, megfelelő tölcsér, fül helyes húzása (felnőtt/gyerek)", maxPoints: 4 },
            { name: "[Fülvizsgálat] 4 patológia felismerése (serosus, gennyes, cerumen, traumás perforáció)", maxPoints: 8 },
            { name: "[Légúti idegentest] Csecsemő: 5 háti ütés, 5 mellkasi nyomás, újraélesztés megkezdése", maxPoints: 5 },
            { name: "[Légúti idegentest] Gyermek: 5 háti ütés, Heimlich műfogás", maxPoints: 3 },
            { name: "[Conicotomia] Szike (15-ös), bougie, tubus levezetés és rögzítés", maxPoints: 5 }
        ],
        knowledge: {
            summary: "A fülvizsgálat során a fülkagyló helyes pozicionálása kulcsfontosságú (felnőtt: hátra és fel, gyermek: hátra és le). A dobhártya normál esetben gyöngyházszürke és áttetsző.",
            keyPoints: [
                "Otitis media acuta: piros, elődomborodó dobhártya, fénykúp eltűnik.",
                "Serosus otitis media: behúzott, opálos dobhártya, folyadéknívó/buborék.",
                "Cholesteatoma: széli dobhártya-perforációval társuló hámsejt szaporulat.",
                "Gömb alakú idegentest horoggal, nem gömb alakú fogóval/szívóval távolítandó el."
            ],
            images: [
                { url: "placeholder-otoscope.jpg", caption: "Otoszkóp helyes tartása (ceruzafogás)" },
                { url: "placeholder-tympanic.jpg", caption: "Normál vs. Gyulladt dobhártya képe" }
            ]
        }
    },
    {
        id: 8,
        name: "6.2 Radiológia (FAST UH és RTG)",
        criteria: [
            { name: "[FAST UH] Subxiphoid nézet (Pericardialis folyadék)", maxPoints: 2 },
            { name: "[FAST UH] Bal/Jobb lateralis subcostalis és Suprapubicus nézetek", maxPoints: 4 },
            { name: "[FAST UH] Szabad hasi folyadék megítélése 4 ponton", maxPoints: 4 },
            { name: "[UH biopszia] Transducer, zselé, Cameco pisztoly, célzás, vákuum nélküli kihúzás", maxPoints: 5 },
            { name: "[RTG] Végtagi és mellkasi törések/pathológiák felismerése", maxPoints: 10 }
        ],
        knowledge: null
    },
    {
        id: 9,
        name: "7.1 Traumatológia és Gyermekkori Törések",
        criteria: [
            { name: "[Trauma] Fizikális vizsgálat: fej, nyak, mellkas, has, medence, gerinc, végtagok", maxPoints: 7 },
            { name: "[Trauma] Vérzések forrásának megtalálása és típusának felismerése", maxPoints: 3 },
            { name: "[Trauma] Direkt nyomás, artériás nyomópontok, nyomókötés alkalmazása", maxPoints: 4 },
            { name: "[Trauma] Shock fektetés kialakítása", maxPoints: 1 }
        ],
        knowledge: {
            summary: "Gyermekkori törések sajátossága a csont rugalmassága és a növekedési porc (physis) jelenléte. A jó remodellációs képesség miatt rövidebb rögzítés is elegendő lehet.",
            keyPoints: [
                "Zöldgally (greenstick): Csont egyik oldala törik, másik meghajlik.",
                "Torus (buckle): Csontkéreg benyomódik, nincs teljes törés (gyakori a radiusnál).",
                "Bowing: Műanyag deformáció, törés nélkül.",
                "Salter-Harris klasszifikáció: I-től V-ig osztályozza a növekedési porc sérüléseit."
            ],
            images: [
                { url: "placeholder-salter-harris.jpg", caption: "Salter-Harris beosztás I-V." }
            ]
        }
    },
    {
        id: 10,
        name: "7.2 Szemészet",
        criteria: [
            { name: "[Direkt tükör] Bekapcsolás, megfelelő távolság használata", maxPoints: 2 },
            { name: "[Vizsgálat] Vörös viszfény ellenőrzése", maxPoints: 1 },
            { name: "[Vizsgálat] Jobb szemet jobb szemmel, bal szemet ballal vizsgálja", maxPoints: 1 },
            { name: "[Pathológia] Szaruhártya eltérés, vörös viszfény hiánya (cataracta/vérzés)", maxPoints: 2 },
            { name: "[Pathológia] Papilla vizsgálata, mosott szélű papilla / vérzések felismerése", maxPoints: 3 }
        ],
        knowledge: null
    },
    {
        id: 11,
        name: "7.3 Bőrgyógyászat",
        criteria: [], // Pure knowledge station
        knowledge: {
            summary: "Alapvető bőrgyógyászati kórképek és a melanoma felismerési szabályai.",
            keyPoints: [
                "Bakteriális: Impetigo (ótvar), erysipelas, folliculitis.",
                "Vírusos: Herpes simplex/zoster, verruca, molluscum.",
                "ABCDE Szabály Melanománál: Asymmetry (aszimmetria), Border (elmosódott szél), Color (többszínű), Diameter (>6mm), Evolution (gyors változás)."
            ],
            images: [
                { url: "placeholder-melanoma.jpg", caption: "Melanoma ABCDE kritériumok" },
                { url: "placeholder-basalioma.jpg", caption: "Basalioma és Laphámrák" },
                { url: "placeholder-ekcema.jpg", caption: "Atopiás és Contact dermatitis" }
            ]
        }
    },
    {
        id: 12,
        name: "8.1 Szülészet-Nőgyógyászat",
        criteria: [
            { name: "[Méhnyak] Cusco-eszköz megfelelő bevezetése, méhszáj pozíciójának megítélése", maxPoints: 4 },
            { name: "[Leopold műfogások] 1-3. műfogásnál szemben, 4-nél háttal áll, 5. (Zangemeister) ismerete", maxPoints: 4 },
            { name: "[Szülés] Koponya helyzet megítélés, episiotomia helyének jelölése, gátvédelem", maxPoints: 4 },
            { name: "[Emlővizsgálat] Mindkét emlő és axilláris/nyaki nyirokcsomók tapintása, patológia leírása", maxPoints: 6 },
            { name: "[Kérdések] Szülés szakaszai, Uterus normál mérete (6-8cm), Citológiai (ASC-US, HSIL) leletek", maxPoints: 5 }
        ],
        knowledge: {
            summary: "A Leopold-féle műfogások a magzati helyzet, fekvés és tartás meghatározására szolgálnak. A tumorprevenciós emlővizsgálatot quadránsonként, a nyirokrégiók (hónalj, clavicula) bevonásával kell végezni.",
            keyPoints: [
                "I. Leopold: Fundus tapintása (fej vagy far).",
                "II. Leopold: Oldalfalak (hát és apró részek).",
                "III. Leopold: Bemutatkozó rész mobilitása a medencebemenet felett.",
                "IV. Leopold: Fej rögzültsége és flexiója (háttal állva végzik).",
                "Emlő patológiák: Befelé fordult mellbimbó, narancsbőr tünet (nyirokér-elzáródás)."
            ],
            images: [
                { url: "placeholder-leopold.jpg", caption: "Leopold 1-4 műfogás illusztrációja" },
                { url: "placeholder-szules.jpg", caption: "A magzat forgása a szülőcsatornában" }
            ]
        }
    },
    {
        id: 13,
        name: "9.1 Urológia és Vizeletvizsgálat",
        criteria: [
            { name: "[Katéter női/férfi] Steril előkészítés, lyukas kendő, dezinficiálás", maxPoints: 4 },
            { name: "[Katéter női/férfi] Instilla gél, bevezetés, 10 ml sóoldatos ballon töltés", maxPoints: 4 },
            { name: "[Vizeletminta] Steril punkció a katéter falán a csatlakozás felett (10ml)", maxPoints: 3 },
            { name: "[Anatómia] Varicokele (bal o.), Vese tokok, Hereburkok, Weigert-Meyer szabály", maxPoints: 5 },
            { name: "[Herevizsgálat] 3 ujjas tapintásos vizsgálat mindkét oldalon, patológiák leírása", maxPoints: 4 }
        ],
        knowledge: {
            summary: "A prevenciós herevizsgálat havonta ajánlott. A heretumorok elsődlegesen a retroperitoneális (paraaorticus) nyirokcsomókba adnak áttétet. A vizeletvizsgálat tesztcsíkos (stix) elemzése alapvető diagnosztikai eszköz.",
            keyPoints: [
                "Leukocyta-észteráz (LE): Gyulladást/pyuriát jelez. Negatív LE nem zárja ki az UTI-t.",
                "Nitrit: Bakteriális nitrát-redukciót (pl. E. coli) jelez. Kb. 4 óra hólyagidő szükséges hozzá.",
                "Protein: A stix főleg albuminra érzékeny, Bence-Jones (myeloma) esetén fals negatív lehet.",
                "Bilirubin / Urobilinogén: Vizeletben csak a konjugált bilirubin jelenik meg (epeúti elzáródás)."
            ],
            images: [
                { url: "placeholder-urine-stix.jpg", caption: "Vizelet tesztcsík paraméterei" }
            ]
        }
    },
    {
        id: 14,
        name: "9.2 Gyermek BLS és EKG",
        criteria: [
            { name: "[Gyermek BLS] Biztonság, reakció, segélykérés, légút, légzés", maxPoints: 5 },
            { name: "[Gyermek BLS] 5 db kezdeti befújás, keringésvizsgálat", maxPoints: 2 },
            { name: "[Gyermek BLS] Mellkaskompresszió és újraértékelés", maxPoints: 3 }
        ],
        knowledge: {
            summary: "A gyermekkori EKG sajátossága a magasabb szívfrekvencia és a jobbra tolt tengelyállás újszülötteknél, amely fokozatosan balra tolódik.",
            keyPoints: [
                "Fiziológiás T-inverzió: 7 nap és 7 év között a T-hullám negatív lehet a V1-V3 elvezetésekben.",
                "Újszülötteknél a jobb kamrai dominancia miatt a V1-V2 elvezetésekben magas R hullám látható.",
                "Mellkasi elektródák anatómiája megegyezik a felnőttével, de gyakran jobb oldali (V3R-V5R) kiegészítést is használnak."
            ],
            images: [
                { url: "placeholder-pediatric-ecg.jpg", caption: "Gyermekkori EKG sajátosságok" }
            ]
        }
    },
    {
        id: 15,
        name: "10. Neurológia (Lumbalpunctio)",
        criteria: [], // Pure knowledge station
        knowledge: {
            summary: "A lumbalpunctio (liquorvétel) indikációi: meningitis, SAH, autoimmun kórképek. A normál liquor víztiszta, nyomása 10-20 vízcm, glükóz tartalma a szérum kb. 60%-a.",
            keyPoints: [
                "Bakteriális meningitis: Sárgás/zavaros liquor, magas fehérje, extrém magas granulocyta szám, csökkent glükóz.",
                "Virális meningitis: Enyhén zavaros/tiszta, magas lymphocyta szám, normál glükóz.",
                "Meningitis Tuberculosa: Nagyon alacsony glükóz, magas fehérje, lymphocyta túlsúly.",
                "Guillain-Barré: Normál sejtszám mellett magas fehérjetartalom (albuminocytologiai disszociáció)."
            ],
            images: []
        }
    },
    {
        id: 16,
        name: "11. Sebészet",
        criteria: [
            { name: "[Beöltözés] Zsilipruha, sapka, maszk, ékszerek levétele", maxPoints: 3 },
            { name: "[Kézmosás] 5x1 perces sebészi kézmosás (ujjbegytől lefelé szűkítve), helyes kéztartás", maxPoints: 5 },
            { name: "[Izolálás] Műtéti terület 3x lemosása kifelé haladva, izoláló kendők", maxPoints: 3 },
            { name: "[Csomós öltés] Megfelelő eszköztartás (1-4 ujj), tű áthúzása csuklóból gördítve", maxPoints: 4 },
            { name: "[Csomós öltés] Apodaktíliás csomózás, legalább 3 csomó, 1 cm-es öltéstávolságok", maxPoints: 5 },
            { name: "[Tovafutó öltés] Folyamatos varrat, feszülés nélküli feszes tartás, utolsó hurokkal csomózás", maxPoints: 4 },
            { name: "[Csomózás kézzel] Sebészi és Bécsi csomózási technika", maxPoints: 3 },
            { name: "[Laparoszkópia] PEG transfer 2 perc alatt", maxPoints: 2 }
        ],
        knowledge: null
    },
    {
        id: 17,
        name: "12. COVID Oktatóvideók",
        criteria: [], // Pure knowledge station
        knowledge: {
            summary: "Az egyéni védőfelszerelések (PPE) szakszerű fel- és levételének egyetemi és OMSZ oktatóvideói.",
            keyPoints: [
                "OMSZ Védőfelszerelés felvétele: https://www.youtube.com/watch?v=ciHxWySM-Nk",
                "OMSZ Védőfelszerelés levétele: https://www.youtube.com/watch?v=MNBu8oAOpwk",
                "Semmelweis Egyetem oktatóvideó: https://www.youtube.com/watch?v=foG71Z7ZZlk",
                "Debreceni Egyetem oktatóvideó: https://www.youtube.com/watch?v=46AjILhcDIQ"
            ],
            images: []
        }
    }
];
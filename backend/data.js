import bcrypt from "bcryptjs";
const data = {
	users: [
		{
			name: "Roko",
			email: "roko.gali9@gmail.com",
			password: bcrypt.hashSync("password", 12),
			isAdmin: true,
		},
		{
			name: "Mate",
			email: "matin@gmail.com",
			password: bcrypt.hashSync("M4t3_G4m3r", 12),
			isAdmin: false,
		},
	],
	products: [
		{
			name: "Ekster Smart Wallet",
			category: "Oprema",
			image: "/images/p1.jpg",
			price: 560,
			countInStock: 10,
			brand: "Ekster",
			rating: 4.6,
			numReviews: 12,
			description:
				"RFID zaštita, ukupno pohranjuje 10+ kartica, ručno izrađen od vrhunske kože prema zlatno ocijenjenim LWG protokolima",
		},
		{
			name: "PD Tech Pouch",
			category: "Oprema",
			image: "/images/p2.jpg",
			price: 375,
			countInStock: 10,
			brand: "Peak Design",
			rating: 3.0,
			numReviews: 4,
			description:
				"Bez obzira spremate li kablove, svakodnevnu opremu ili potrepštine za putovanje, Tech Pouch nudi organizaciju bez premca i lak pristup. Džepovi u origami stilu stvaraju ogromnu prostornu učinkovitost",
		},
		{
			name: "Zyllion Back and Neck Massager",
			category: "Kućanski aparati",
			image: "/images/p3.jpg",
			price: 375,
			countInStock: 0,
			brand: "Zyllion",
			rating: 4.2,
			numReviews: 4,
			description:
				"Ergonomski i kompaktni masažer za jastuke savršeno pristaje iza kontura vrata te donjeg i gornjeg dijela leđa, trbuha, lista i bedara",
		},
		{
			name: "Philips Sleep and Wake-Up Light",
			category: "Oprema",
			image: "/images/p4.jpg",
			price: 1250,
			countInStock: 15,
			brand: "Philips",
			rating: 3.2,
			numReviews: 3,
			description:
				"Prilagođeni zalazak i izlazak sunca, dokazano vam daje lako i energično buđenje i popravlja raspoloženje ujutro",
		},
		{
			name: "Apple iPad",
			category: "Tablet",
			image: "/images/p5.jpg",
			price: 2050,
			countInStock: 5,
			brand: "Apple",
			rating: 4.5,
			numReviews: 10,
			description:
				"32 GB, veličina ekrana 10.2 inča, OS: IPadOS, baterija do 10 sati rada, boje: Gold, Silver, Space Gray",
		},
		{
			name: "WD Portable SSD (500GB)",
			category: "Solid State diskovi",
			image: "/images/p9.jpg",
			price: 745,
			countInStock: 15,
			brand: "WD",
			rating: 4.6,
			numReviews: 13,
			description:
				"256-bitna AES hardverska enkripcija s omogućenom lozinkom, brzine do 1050 MB/s i brzine upisa do 1000 MB/s",
		},
		{
			name: "Netgear MK62 Mesh Wi-Fi 6 System",
			category: "Digitalni prijemnici i antene",
			image: "/images/p7.jpg",
			price: 1430,
			countInStock: 12,
			brand: "NETGEAR",
			rating: 5,
			numReviews: 3,
			description:
				"visokokvalitetni proizvod,pokrivenost do 3 000 četvornih metara,isporučuju do 1 8Gbps brzine za 25+ uređaja",
		},
		{
			name: "Mophie Dual Wireless Charging Pad",
			category: "Oprema",
			image: "/images/p8.jpg",
			price: 500,
			countInStock: 6,
			brand: "Mophie",
			rating: 4.4,
			numReviews: 11,
			description:
				"Istovremeno punite 3 uređaja: s 2 mjesta za bežično punjenje i jedno sa USB-A priključkom",
		},
		{
			name: "Sony WH-1000XM4 Wireless Noise-Canceling Headphones",
			category: "Slušalice",
			image: "/images/p10.jpg",
			price: 2100,
			countInStock: 10,
			brand: "Sony",
			rating: 4.8,
			numReviews: 6,
			description:
				"Up to 30-hour battery life with quick charging, uklanjanje buke Dual Noise Sensor tehnologijom",
		},
		{
			name: "Amazon Echo Dot (4th Gen) Smart Speaker",
			category: "Smart Home oprema",
			image: "/images/p11.jpg",
			price: 310,
			countInStock: 10,
			brand: "Amazon",
			rating: 4.9,
			numReviews: 11,
			description:
				"Spremna za komunikaciju-postaviti Alexi pitanje, kontrolirajte vašu pametnu kuću, povežite se sa ostalima",
		},
		{
			name: "TaoTronics SoundLiberty 79 Wireless Earbuds",
			category: "Slušalice",
			image: "/images/p6.jpg",
			price: 2050,
			countInStock: 5,
			brand: "TaoTronics",
			rating: 4.7,
			numReviews: 7,
			description:
				"Nudi nevjerojatno čistu kvalitetu zvuka, čipset kombinira najnoviju tehnologiju Bluetooth 5.0 i naprednu LDS antenu za brz i stabilan prijenos signala",
		},
		{
			name: "Samsung Galaxy S20 FE 5G Android Smartphone",
			category: "Smartphone",
			image: "/images/p12.jpg",
			price: 4000,
			countInStock: 8,
			brand: "Samsung",
			rating: 4.8,
			numReviews: 2,
			description:
				"Unutarnja memorija: 128 GB, OS: Android 10, Veličina ekrana: 6.5 inča, RAM: 6 GB, Otporan na vodu: Da, Prednja kamera: 32 megapixela, Stražnja kamera: 12 megapixela",
		},
		{
			name: "Razer Seiren Mini USB Streaming Microphone",
			category: "Oprema",
			image: "/images/p13.jpg",
			price: 310,
			countInStock: 10,
			brand: "Razer",
			rating: 4.8,
			numReviews: 6,
			description:
				"Podešen sa strožim kutom primanja, tako da se može usredotočiti na vaš glas, istovremeno osiguravajući da se pozadinski zvukovi poput tipkanja i klikova mišem ne pokupe, stvoren za minimalističke ili manje postavke, jedva zauzima prostor na radnom stolu, sjedeći na čvrstom nosaču, mikrofon se može nagnuti kako bi pronašao savršenu poziciju za vaš glas",
		},
		{
			name: "Klipsch Cinema 400 Sound Bar HQ Audio",
			category: "Slušalice",
			image: "/images/p14.jpg",
			price: 1870,
			countInStock: 5,
			brand: "Klipsch",
			rating: 4.6,
			numReviews: 2,
			description:
				"40-inčna 2.1-zvučna traka s 8-inčnim bežičnim subwooferom, vršna snaga od 400 W",
		},
		{
			name: "Monocarbon Carbon Fiber Case for Apple Watch (40-millimeter)",
			category: "Oprema",
			image: "/images/p15.jpg",
			price: 300,
			countInStock: 4,
			brand: "Klipsch",
			rating: 3.5,
			numReviews: 3,
			description:
				"Elegantna futrola izrađena od pravog materijala od karbonskih vlakana, tanak s 0.6 mm, lagan sa samo 1 g, vrlo dobro pristaje",
		},
		{
			name: "Incase Slip MacBook Sleeve (13-inch version)",
			category: "Oprema",
			image: "/images/p16.jpg",
			price: 190,
			countInStock: 2,
			brand: "Incase Designs",
			rating: 3.7,
			numReviews: 3,
			description:
				"Kompatibilan s 13-inčnim MacBook Pro (USB-C) i M1, 2020/13-inčni MacBook Air s Retina & M1, 2020, tanak, moderniziran dizajn eliminira unutarnju pjenu i obloge",
		},
		{
			name: "Coral 3-in-1 UV Sterilizer and Dryer Unit",
			category: "Oprema",
			image: "/images/p17.jpg",
			price: 850,
			countInStock: 1,
			brand: "Coral UV",
			rating: 4.0,
			numReviews: 3,
			description:
				"Bez napora eliminirajte 99.9% štetnih klica u 10 minuta, suši vaše predmete na toploj temperaturi u samo 𝟰𝟬 - 𝟳𝟬 minuta, sigurno za plastiku, staklo ili silikon",
		},
		{
			name: "Apple iPhone 12 mini 64GB ROM 5.4'' display ",
			category: "Smartphone",
			image: "/images/p18.jpg",
			price: 4400,
			countInStock: 3,
			brand: "Apple",
			rating: 4.1,
			numReviews: 8,
			description:
				"SIM: Single SIM, veličina ekrana: 5.4 inča, OS: iOS 14.1, unutrašnja memorija: 128 GB, USB: Lightning,USB 2.0, boje: Black, White, Red, Green, Blue",
		},
		{
			name: "Roku Streambar HQ Smart home HIFI System",
			category: "Smart Home oprema",
			image: "/images/p19.jpg",
			price: 800,
			countInStock: 3,
			brand: "Roku",
			rating: 4.0,
			numReviews: 2,
			description:
				"Uživajte u laganom, brzom sučelju s najnovijim i najpopularnijim kanalima, plus pristup beskrajnoj besplatnoj zabavi, stream u briljantnoj HD, 4K i HDR slici oštre rezolucije i živih boja optimiziranih za bilo koji televizor, uključite televizor, prilagodite glasnoću i kontrolirajte svoj streaming, sve s Rokuovim daljinskim upravljačem, koristite svoj glas za brzo pretraživanje",
		},
		{
			name: "Razer Basilisk Ultimate HyperSpeed Wireless Gaming Mouse",
			category: "Miševi",
			image: "/images/p20.jpg",
			price: 935,
			countInStock: 6,
			brand: "Razer",
			rating: 4.9,
			numReviews: 11,
			description:
				"Detekcija pokreta: Optička, materijal: plastika, 11 programabilnih tipki, 3x brže od tradicionalnih mehaničkih prekidača: Razer optički prekidači za miša koriste aktiviranje na bazi svjetlosnih zraka, registrirajući pritiske tipki brzinom svjetlosti",
		},
		{
			name: "Apple AirPods Pro",
			category: "Slušalice",
			image: "/images/p21.jpg",
			price: 1250,
			countInStock: 11,
			brand: "Apple",
			rating: 4.8,
			numReviews: 11,
			description:
				"AirPods Pro imaju vrhunsku tehnologiju za uklanjanje buke i jednako impresivnu kvalitetu zvuka, ujedno su i prvi AirPodovi koji imaju IPX4 ocjenu vodootpornosti, što znači da ih možete koristiti tijekom vježbanja.",
		},
		{
			name: "Belkin SoundForm Elite Hi-Fi Smart Speaker + Wireless Charger",
			category: "Oprema",
			image: "/images/p22.jpg",
			price: 1870,
			countInStock: 2,
			brand: "Belkin",
			rating: 4.3,
			numReviews: 1,
			description:
				"Akustika tvrtke Devialet: Patentirane tehnologije audio pionira Devialet pružaju nevjerojatnu kvalitetu zvuka od kompaktnog uređaja, Speaker Active Matching (SAM) tehnologija tvrtke Devialet pruža apsolutnu vjernost i izuzetne performanse",
		},
		{
			name: "Marshall Uxbridge Smart Speaker",
			category: "Smart Home oprema",
			image: "/images/p23.jpg",
			price: 1250,
			countInStock: 3,
			brand: "Marshall",
			rating: 4.4,
			numReviews: 2,
			description:
				"Uživajte u reprodukciji različitih glazbenih usluga i glasovnom upravljanju putem Amazon Alexa s crnim Marshall Uxbridge Voice bežičnim zvučničkim sustavom. Sadrži ugrađenu Wi-Fi vezu za pružanje pristupa nekim od vaših omiljenih glazbenih usluga. Ugrađena je i AirPlay 2 povezivost koja vam omogućuje streaming s kompatibilnog iOS uređaja.",
		},
		{
			name: "Anker PowerConf Bluetooth Speakerphone",
			category: "Smart Home oprema",
			image: "/images/p24.jpg",
			price: 810,
			countInStock: 5,
			brand: "Anker",
			rating: 4.1,
			numReviews: 3,
			description:
				"Anker PowerConf Bluetooth zvučnik dizajniran je za upućivanje konferencijskih poziva gotovo bilo gdje. Kompaktni, ali nevjerojatno produktivni uređaj sadrži šest mikrofona i visokokvalitetni zvučnik s tehnologijom za pojačavanje glasa, a kompatibilan je sa svim glavnim konferencijskim uslugama.",
		},
		{
			name: "Samsung Galaxy Tab S6 Lite Android Tablet",
			category: "Tablet",
			image: "/images/p25.jpg",
			price: 1100,
			countInStock: 8,
			brand: "Samsung",
			rating: 4.6,
			numReviews: 7,
			description:
				"Tablet ima oštar 10,4-inčni zaslon i ugrađene stereo zvučnike. Najbolje od svega je što ima razumnu cijenu. Možete naručiti Samsung Galaxy Tab S6 Lite s do 128 GB proširive pohrane u tri boje: plava, siva ili boja ruže.",
		},
		{
			name: "Amazon Echo Studio Smart Speaker",
			category: "Smart Home oprema",
			image: "/images/p26.jpg",
			price: 1250,
			countInStock: 4,
			brand: "Amazon",
			rating: 5.0,
			numReviews: 1,
			description:
				"Amazon Echo Studio zvučnik je Alexa izrađen za audiofile. S pet audio upravljačkih programa na zvučniku, zvučnik može isporučiti 3D-poboljšani zvuk iznimne kvalitete. Naravno, elegantna naprava je i moćno pametno kućno središte koje će vam omogućiti da bez napora upravljate povezanim uređajima glasovnim naredbama.",
		},
		{
			name: "Samsung Galaxy Watch3",
			category: "Satovi",
			image: "/images/p27.jpg",
			price: 2490,
			countInStock: 2,
			brand: "Samsung",
			rating: 4.8,
			numReviews: 3,
			description:
				"Moderan pametni sat Samsung Galaxy Watch3 ima moćan i nevjerojatno intuitivan skup značajki za praćenje zdravlja, kondicije i spavanja, uključujući mogućnost automatskog praćenja treninga korisnika. Sat je vodootporan i do 50 metara, tako da je savršen i za kupanje. Kompatibilan je ne samo s Android telefonima, već i iPhoneima.",
		},
		{
			name: "Jabra Elite Active 75t Wireless Earbuds",
			category: "Slušalice",
			image: "/images/p28.jpg",
			price: 1250,
			countInStock: 6,
			brand: "Jabra",
			rating: 4.6,
			numReviews: 4,
			description:
				"Jabra Elite Active 75t pruža sve što biste očekivali od sjajnog para potpuno bežičnih slušalica. Oni su elegantni, izdržljivi, udobni, zabavni, pouzdani tijekom telefonskih poziva, a zahvaljujući vodootpornoj građi izvrsni su za vježbanje. Nedavno ažuriranje također je donijelo mogućnosti za uklanjanje buke. Slušalice Elite 75t Active imaju pouzdane performanse baterije s gotovo 8 sati između punjenja. Njihova torba s USB-C konektorom sadrži gotovo tri dodatna puna punjenja. Postoje četiri boje za odabir: bakreno crna, menta, mornarska plava i sienna.",
		},
		{
			name: "Apple MacBook Air with M1 Chip",
			category: "Prijenosna računala",
			image: "/images/p29.jpg",
			price: 6300,
			countInStock: 4,
			brand: "Apple",
			rating: 4.7,
			numReviews: 6,
			description:
				"Zahvaljujući Appleovom revolucionarnom M1 čipu, ažurirani MacBook Air ima više snage i znatno dulje trajanje baterije od svog prethodnika, zadržavajući isti ikonski dizajn. Budući da novom čipu nisu potrebni ventilatori za hlađenje, prijenosnik je tih i elegantan. Postoje tri boje za odabir: srebrna, svemirsko siva i zlatna.",
		},
		{
			name: "August Wi-Fi Smart Lock",
			category: "Smart Home oprema",
			image: "/images/p30.jpg",
			price: 1600,
			countInStock: 2,
			brand: "August Home",
			rating: 4.0,
			numReviews: 1,
			description:
				"Najnovija Wi-Fi Smart Lock od kolovoza kompatibilna je s većinom zasuna, tako da može lako integrirati gotovo sva ulazna vrata u postavke pametne kuće. Omogućuje vam čak i zadržavanje postojećih ključeva kuće. Možete upravljati pristupom bravi, provjeriti njezinu povijest korištenja i primati obavijesti kada netko otvori vrata putem mobilne aplikacije. Dostupna u srebrnoj ili crnoj boji, brava je također kompatibilna s Amazonom Alexa, Apple HomeKitom i Google Asistentom.",
		},
		{
			name: "Tile Pro Tracker With Replaceable Battery",
			category: "Oprema",
			image: "/images/p31.jpg",
			price: 350,
			countInStock: 2,
			brand: "Tile",
			rating: 4.0,
			numReviews: 2,
			description:
				"Ovi mali i otmjeni uređaji tvrtke Tile pomoći će vam pronaći sve na što ih prikačite, sve dok je vaš telefon u njihovom dometu Bluetooth-a od 400 stopa. U slučaju da izgubite stavku, primit ćete obavijesti kad se uređaji nađu u dosegu drugog korisnika pločice. Dostupni u crno-bijeloj tehnici, Tile Pro trakere je jednostavno postaviti koliko i postaje - sve što trebate je mobilna aplikacija i Tile račun. Izmjenjiva baterija CR1632 za praćenje trajat će godinu dana nakon što aktivirate tragač.",
		},
		{
			name: "Klipsch Heritage Groove Portable Bluetooth Speaker",
			category: "Smart Home oprema",
			image: "/images/p32.jpg",
			price: 1100,
			countInStock: 4,
			brand: "Klipsch",
			rating: 4.0,
			numReviews: 1,
			description:
				"Bluetooth zvučnik Klipsch Heritage Groove ima prekrasan dizajn iz sredine stoljeća i vrhunsku izradu. Kvaliteta zvuka također je impresivna, što ga čini jednim od najboljih zvučnika ispod 100 USD. Možete očekivati ​​do 8 sati bežične reprodukcije između punjenja, a dostupno je s kućištem u crnoj boji ili orahu.",
		},
		{
			name: "Fujifilm Instax Mini Link Smartphone Printer",
			category: "Oprema",
			image: "/images/p33.jpg",
			price: 620,
			countInStock: 1,
			brand: "Fujifilm",
			rating: 4.0,
			numReviews: 2,
			description:
				"Ovaj kompaktni foto-pisač tvrtke Fujifilm stvorit će tvrde kopije fotografija vašeg pametnog telefona veličine 1,8 x 2,4 inča impresivnom brzinom. Dostupan u bijeloj, traper ili ružičastoj boji, Instax Mini Link može izbaciti slike za samo 12 sekundi pomoću vlastitog filma iste marke.",
		},
		{
			name: "Logitech MX Anywhere 3 Wireless Mouse",
			category: "Miševi",
			image: "/images/p34.jpg",
			price: 500,
			countInStock: 9,
			brand: "Logitech",
			rating: 4.6,
			numReviews: 3,
			description:
				"Logitech MX Anywhere 3 je najbolji najbolji kompaktni bežični miš. Elegantna dodatna oprema ima kotačić od nehrđajućeg čelika koji koristi najmoderniji elektromagnetski rub za blistavo brzo, ultra precizno pomicanje. Kompatibilan s PC-om i Macom, Anywhere 3 se može upariti s dva računala na kojima rade Windows i macOS i neprimjetno se prebaciti s njih. Njegova baterija može trajati mjesecima između punjenja, a ima USB-C konektor za punjenje. Možete ga naručiti u grafitnoj, blijedo sivoj i ružičastoj boji.",
		},
		{
			name: "Bose Portable Home Speaker",
			category: "Smart Home oprema",
			image: "/images/p35.jpg",
			price: 2200,
			countInStock: 4,
			brand: "Bose",
			rating: 4.2,
			numReviews: 4,
			description:
				"Bose prijenosni kućni zvučnik ima izvrstan zvuk i impresivnu svestranost. Opremljen Wi-Fi-jem, uređaj je kompatibilan s glasovnim naredbama Amazon Alexa i Google Assistant, kao i bežičnom reprodukcijom Apple AirPlay 2. Uz Bluetooth povezivost, prijenosni kućni zvučnik također je idealan za upotrebu u pokretu. Zvučnik može trajati do 12 sati između punjenja, a za punjenje baterije koristi USB-C konektor.",
		},
		{
			name: "Google Nest Hub Max Smart Display",
			category: "Smart Home oprema",
			image: "/images/p36.jpg",
			price: 1450,
			countInStock: 4,
			brand: "Google",
			rating: 3.1,
			numReviews: 6,
			description:
				"Naprava ima živahni 10-inčni zaslon osjetljiv na dodir, dvojac visokokvalitetnih stereo zvučnika i ugrađenu pametnu kameru Nest. Potonji je zgodan za obavljanje video poziva Google Duo i za nadzor vašeg doma dok vas nema. Uz sve to, Nest Hub Max ujedno je i moćno središte povezanog doma - kompatibilno je s mnoštvom najpopularnijih proizvoda pametne kuće danas.",
		},
		{
			name: "Leatherman FREE P2 Multitool",
			category: "Oprema",
			image: "/images/p37.jpg",
			price: 750,
			countInStock: 7,
			brand: "Leatherman",
			rating: 3.7,
			numReviews: 8,
			description:
				"FREE P2 multitool tvrtke Leatherman ima revolucionarnu novu tehnologiju koja korisnicima omogućuje lak pristup njegovih 19 ugrađenih alata, čak i jednom rukom. Ugrađeni alati uključuju kliješta, odstranjivač žice i rezače te kvartet odvijača, između ostalog. Kao i svi Leathermanovi proizvodi, i FREE P2 ima robusno 25-godišnje jamstvo. Multitool dolazi u paketu s čvrstom ovojnicom za nošenje.",
		},
		{
			name: "Peak Design Everyday Zip Backpack",
			category: "Oprema",
			image: "/images/p38.jpg",
			price: 1200,
			countInStock: 11,
			brand: "Peak Design",
			rating: 4.0,
			numReviews: 4,
			description:
				"Najnovija inačica ruksaka Peak Design Everyday najbolja je do sada. Nužan pri radu za prijenosnike u pokretu, dodatak ima elegantan dizajn, potpuno prilagodljiv interijer i omotani patent zatvarač. S maksimalnim kapacitetom od 15 litara, ruksak ima dovoljno mjesta za 13-inčno prijenosno računalo (tu je i namjenski rukav) uz vaše ostale svakodnevne predmete. Dostupna je i veća verzija od 20 litara s više prostora. Ruksak je izuzetno izrađen i otporan na vremenske utjecaje, izrađen od 100% reciklirane tkanine. Ruksak možete naručiti u četiri boje: jasen, crna, plava i kost.",
		},
		{
			name: "FiiO M6 MP3 Player",
			category: "Elektronika",
			image: "/images/p39.jpg",
			price: 800,
			countInStock: 7,
			brand: "FiiO",
			rating: 3.1,
			numReviews: 3,
			description:
				"FiiO M6 je elegantan i sadržajan MP3 uređaj s vrhunskim zvučnim performansama. Potonje dolazi zahvaljujući Samsung čipsetu i visokokvalitetnim audio komponentama. Stalak M6 ima 3,2-inčni zaslon osjetljiv na dodir i do 13 sati trajanja baterije između punjenja. Pokreće prilagođenu verziju Androida, tako da između ostalih možete instalirati aplikacije popularnih streaming usluga poput Spotify, Tidal i Qobuz.",
		},
		{
			name: "Nintendo Switch Lite Handheld Gaming Console",
			category: "Elektronika",
			image: "/images/p40.jpg",
			price: 1250,
			countInStock: 3,
			brand: "Nintendo",
			rating: 4.7,
			numReviews: 10,
			description:
				"Switch Lite, kao što mu i samo ime govori, cjenovno je povoljnija varijanta Nintendove popularne igraće konzole. Naprava je dizajnirana isključivo za ručno igranje. Ima lagani dizajn i kompaktniji 5,5-inčni zaslon od uobičajenog Switcha. Lite možete naručiti u nekoliko privlačnih boja - žutoj, tirkiznoj i sivoj. Važno je napomenuti da je Switch Lite kompatibilan samo s igrama koje podržavaju ručni način rada.",
		},
		{
			name: "Ridge Slim Aluminum Wallet",
			category: "Oprema",
			image: "/images/p41.jpg",
			price: 470,
			countInStock: 1,
			brand: "Ridge",
			rating: 2.1,
			numReviews: 1,
			description:
				"Ovaj minimalistički Ridgeov novčanik ima otisak kreditne ili osobne iskaznice, pa je kompaktan koliko i dobiva. Ova posebna varijanta izrađena je pomoću šarenih aluminijskih ploča i elastičnih materijala. Omogućuju mu da se proširi tako da stane do 12 kartica, kao i nešto novca. Novčanik također ima RFID-blokirajuće materijale koji štite vaše kartice. Ridge podržava svoje stvaranje doživotnim jamstvom.",
		},
		{
			name: "ZenPod Case for Apple AirPods With a Built-In Fidget Spinner",
			category: "Oprema",
			image: "/images/p42.jpg",
			price: 125,
			countInStock: 4,
			brand: "Air Vinyl Design",
			rating: 2.1,
			numReviews: 3,
			description:
				"ZenPod kućište tvrtke Air Vinyl Design jedan je od naših omiljenih dodataka za Apple AirPods. Uz ugrađeni fidget spinner, kućište dodaje zabavnu, novu razinu interakcije s jednim od vaših omiljenih uređaja. Futrola je izrađena od visokokvalitetne prave kože. Možete ga naručiti u crnoj boji sa srebrnim ili crnim fidget spinner-om ili u smeđoj boji sa srebrnom vrtiljkom.",
		},
		{
			name: "Satechi Dual Smart Outlet",
			category: "Smart Home oprema",
			image: "/images/p43.jpg",
			price: 375,
			countInStock: 6,
			brand: "Satechi",
			rating: 2.7,
			numReviews: 2,
			description:
				"Ova dvostruka pametna utičnica tvrtke Satechi ima kompatibilnost Apple HomeKit, što vam omogućuje upravljanje povezanim uređajima pomoću Siri glasovnih naredbi, kao i putem vašeg iPhonea, iPada, Maca ili Apple Watcha. Omogućit će vam i praćenje potrošnje energije u stvarnom vremenu dok su izvan kuće.",
		},
		{
			name: "Apple Watch Series 6",
			category: "Satovi",
			image: "/images/p44.jpg",
			price: 2300,
			countInStock: 4,
			brand: "Apple",
			rating: 4.8,
			numReviews: 7,
			description:
				"Apple Watch Series 6 donosi brojne nadogradnje hardvera, zadržavajući isti izgled kao i njegov prethodnik. Najuzbudljiviji dijelovi uključuju senzor za kisik u krvi, kao i osjetno brži čip. Naravno, najnoviji Appleov pametni sat ima vrlo precizan senzor brzine otkucaja srca koji podržava EKG, uvijek uključeni Retina zaslon i opcionalno povezivanje sa staničnom mrežom.",
		},
		{
			name: "Roborock S6 Pure Robot Vacuum",
			category: "Smart Home oprema",
			image: "/images/p45.jpg",
			price: 3750,
			countInStock: 4,
			brand: "Roborock",
			rating: 4.8,
			numReviews: 7,
			description:
				"Roborock S6 Pure je robotski usisavač s izvrsnim mogućnostima čišćenja, impresivno tihim radom i vrhunskom tehnologijom mapiranja soba. Za razliku od suparnika, robot može čak i brisati podove. Možete odabrati prostorije za čišćenje usisavača putem mobilne aplikacije. Roborock S6 također je kompatibilan s glasovnim naredbama Amazon Alexa i Google Assistant.",
		},
		{
			name: "Drop CTRL Mechanical Keyboard",
			category: "Tipkovnice",
			image: "/images/p46.jpg",
			price: 1500,
			countInStock: 3,
			brand: "DROP",
			rating: 4.5,
			numReviews: 6,
			description:
				"Mehanička tipkovnica Drop CTRL kompaktnog je dizajna s rasporedom od 87 tipki koji jamči iskustvo tipkanja bez ometanja. Ima čvrst okvir od strojno izrađenog aluminija, a možete ga naručiti uz širok izbor mehaničkih prekidača. Ima zamjenjive mehaničke prekidače i poklopce, programabilne značajke i potpuno prilagodljivo RGB pozadinsko osvjetljenje za svoje tipke i okvir.",
		},
		{
			name: "GoPro HERO9 Black Action Camera",
			category: "Oprema",
			image: "/images/p47.jpg",
			price: 2800,
			countInStock: 10,
			brand: "GoPro",
			rating: 4.2,
			numReviews: 7,
			description:
				"Kompaktna, još jednostavnija za rad zahvaljujući prednjem LCD zaslonu i potpuno praktičnim značajkama povezivanja. Može snimiti 5K video, oštre fotografije od 20 MP, kao i uživo prenositi vaše avanture u Full HD rezoluciji.",
		},
		{
			name: "Furbo Dog Camera With Treat-Tossing Technology",
			category: "Oprema",
			image: "/images/p48.jpg",
			price: 1600,
			countInStock: 1,
			brand: "Furbo",
			rating: 4.4,
			numReviews: 2,
			description:
				"Elegantna kamera za pse Furbo ima Wi-Fi povezivost koja omogućava korisnicima da prate svoje ljubimce putem aplikacije za pametni telefon. Sposoban je za snimanje ili strujanje Full HD videozapisa putem širokokutne leće. Naprava također može dijeliti poslastice - možete ih rasporediti izravno sa pametnog telefona dok ste odsutni. Ostale ključne značajke Furboa uključuju dvosmjernu audio povezivost, senzor lajanja i čvrst drveni poklopac.",
		},
		{
			name: "Fossil Collider HR Hybrid Smartwatch",
			category: "Satovi",
			image: "/images/p49.jpg",
			price: 850,
			countInStock: 3,
			brand: "Fossil",
			rating: 4.8,
			numReviews: 4,
			description:
				"Na brzinu, Fossil Collider HR izgleda poput klasičnog sata s kronografom s mehaničkim kazaljkama i rasporedom s tri tipke. Ali s ugrađenim uvijek uključenim zaslonom i senzorom otkucaja srca, hibridni pametni sat podjednako je obilježen i elegantan. Collider HR bez napora će isporučivati ​​obavijesti s vašeg telefona, kao i pratiti vaše aktivnosti, uz brojne druge funkcije. Njegovi su gumbi prilagodljivi putem Fosilove intuitivne mobilne aplikacije. Sat od nehrđajućeg čelika vodootporan je do 50 metara.",
		},
		{
			name: "Apple TV 4K Streaming Console",
			category: "Smart Home oprema",
			image: "/images/p50.jpg",
			price: 1200,
			countInStock: 6,
			brand: "Apple",
			rating: 4.9,
			numReviews: 7,
			description:
				"Apple TV 4K i dalje je najbolji streaming uređaj. Podržava ne samo UHD rezoluciju, već i HDR10, Dolby Vision i Dolby Atmos standarde za još obimnije iskustvo gledanja. Možete reproducirati 4K filmove s iTunes, Netflix i Amazon Prime, između ostalog.",
		},
		{
			name: "Samsung T7 Touch Prijenosni SSD",
			category: "Solid State diskovi",
			image: "/images/p51.jpg",
			price: 809.99,
			countInStock: 5,
			brand: "Samsung",
			rating: 4.6,
			numReviews: 24,
			description:
				"Samsung T7 Touch prijenostni SSD izdvaja se od ostale konkurencije zbog svog ugrađenog skenera otiska prsta. Kompatibilan je sa Mac, Pc i mobilnim uređajima. Lako se osposobi putem desktop software-a ili mobilne aplikacije. Samsung T7 Touch ima memoriju i do 2TB i dostupan je u crnoj i srebrnoj boji.",
		},

		{
			name: "BookArc Stalak za MacBook",
			category: "Oprema",
			image: "/images/p52.jpg",
			price: 379.99,
			countInStock: 3,
			brand: "Twelve South",
			rating: 4.2,
			numReviews: 12,
			description:
				"Twelve South-ov stalak za MacBook dolazi u dvije boje: crnoj i space gray, koje savršeno pašu uz vaš MacBook. Stalak također ima kuku za organiziranje kablova.",
		},

		{
			name: "Rugged Protecive Case for Apple AirPods Pro",
			category: "Slušalice",
			image: "/images/p54.jpg",
			price: 159.99,
			countInStock: 13,
			brand: "Urban Armor Gear",
			rating: 4.0,
			numReviews: 38,
			description:
				"Ova izuzetno kvalitetna silikonska kutija za vaše slušalice pruža najbolju zaštitu vašim skupim AirPods slušalicama. Posjeduje i zaštitu za Lightning port te ga štiti od vlage i prašine.",
		},

		{
			name: "HYPERBOOM Waterproof Bluetooth Speaker",
			category: "Zvučnici",
			image: "/images/p55.jpg",
			price: 2499.99,
			countInStock: 9,
			brand: "Ultimate Ears",
			rating: 4.7,
			numReviews: 26,
			description:
				"Ultimate Ears HYPERBOOM zvučnik je posebno namijenjen za zabave na otvorenom. Ovaj vodootporni zvučnik nudi visoko kvalitetni zvuk zahvaljujući svojim 6 audio driverima. Nudi 24-satnu wireless glazbe između punjenja i istovremeno može puniti vaše uređaje zahvaljujući ugrađenom USB portu.",
		},

		{
			name: "FitBit Charge 4 Fitness Charger",
			category: "Oprema",
			image: "/images/p56.jpg",
			price: 759.99,
			countInStock: 4,
			brand: "FitBit",
			rating: 4.6,
			numReviews: 32,
			description:
				"FitBit Charge 4 nudi GPS, kontrolu za aplikaciju Spotify te sofisticirane alate za praćenje vašeg fitnesa. Dodatne pogodnosti koje nudi su praćenje ciklusa spavanja i trajanje baterije i do 2 tjedna između punjenja.",
		},

		{
			name: "Optix MAG272CQR Curved Gaming Monitor",
			category: "Monitori",
			image: "/images/p53.jpg",
			price: 2499.99,
			countInStock: 9,
			brand: "Twelve South",
			rating: 4.7,
			numReviews: 35,
			description:
				"Twelve South-ov stalak za MacBook dolazi u dvije boje: crnoj i space gray, koje savršeno pašu uz vaš MacBook. Stalak također ima kuku za organiziranje kablova.",
		},

		{
			name: "SRS-XB33 Extra Bass Bluetooth Speaker",
			category: "Zvučnici",
			image: "/images/p57.jpg",
			price: 609.99,
			countInStock: 13,
			brand: "Sony",
			rating: 4.3,
			numReviews: 43,
			description:
				"Sony-ev novi SRS-XB33 zvučnik pruža moćan zvuk kao i ugrađena svjetla što ga čine interaktivnijim od ostalih. Što je još impresivnije SRS-XB33 zvučnik je vodootporan i posjeduje zaštitu od prašine. Baterija ima trajanje i do 24 sata. Zvučnik je dostupan u 3 boje: crna, crvena i plava.",
		},

		{
			name: "Wireless Earphones",
			category: "Slušalice",
			image: "/images/p58.jpg",
			price: 949.99,
			countInStock: 7,
			brand: "PowerBeats",
			rating: 3.9,
			numReviews: 52,
			description:
				"PowerBeats Wireless slušalice su jedne od najboljih u svojoj vrsti. Pored jedinstvenog dizajna, izuzetne ugodnosti i kvalitetnog zvuka, nude i do 15 sati wireless glazbe između punjenja. Lako se povezuju sa vašim iPhone-om, iPad-om i Mac-om.",
		},

		{
			name: "Pixel 4a Android Smartphone",
			category: "Smartphone",
			image: "/images/p59.jpg",
			price: 2199.99,
			countInStock: 12,
			brand: "Google",
			rating: 4.1,
			numReviews: 43,
			description:
				"Google Pixel 4a mobitel posjeduje uglađeni dizajn sa kvalitetnim hardware-om, odličnom kamerom, super android iskustvo i sve to pri izvanrednoj cijeni. Mobitel posjeduje i audio jack koji nedostaje u mnogim današnjim mobitelima.",
		},

		{
			name: "Clean Contact Carabiner",
			category: "Oprema",
			image: "/images/p60.jpg",
			price: 159.99,
			countInStock: 16,
			brand: "Leatherman",
			rating: 3.9,
			numReviews: 18,
			description:
				"Leatherman Clean Contact karabiner je svakodnevna naprava specijalno napravljena za život koji živimo trenutno. Ova naprava pomoći će vam da izbjegnete kontakt sa bravama, tipkovnicama i mnogim drugim potencijalno zaraženim površinama",
		},

		{
			name: "JBL Club 950 Wireless Headphones",
			category: "Slušalice",
			image: "/images/p61.jpg",
			price: 1569.99,
			countInStock: 10,
			brand: "JBL",
			rating: 4.3,
			numReviews: 28,
			description:
				"JBL Club 950 slušalice nude kvalitetan zvuk i imaju trajanje do 22 sata između punjenja kada je noise-cancelling uključen, a i do 55 sati kada je isključen. ",
		},

		{
			name: "USB-C Fast Charge Wall Charger",
			category: "Baterije i punjači",
			image: "/images/p62.jpg",
			price: 189.99,
			countInStock: 6,
			brand: "Otterbox",
			rating: 4.6,
			numReviews: 33,
			description:
				"Ovaj USB-C punjač je brz, posjeduje lijep dizajn i dobru jačinu. Sa maksimalnom output snagom od 18 wati, ovaj uređaj brzo puni vaše pametne mobitele i tablete. Možete nabavitineku od dvije postojeće varijante: bijela i crna varijanta sa zlatnim detaljima.",
		},

		{
			name: "Fitness Watch",
			category: "Satovi",
			image: "/images/p63.jpg",
			price: 949.99,
			countInStock: 12,
			brand: "Polar Unite",
			rating: 4.7,
			numReviews: 35,
			description:
				"Ovaj pristupačni Polar Unite fitness sat je novi dodatak u ovoj kategoriji kompetitivnih proizvoda. Proizvod ima uglađeni dizajn, izdržljiv i posjeduje mnoge funkcije za praćenje vaše aktivnosti i ciklusa spavanja. Sat je vodootporan i do 30m dubine te je radi toga pogodan i za plivanje.",
		},

		{
			name: "Wind Resistant Umbrella",
			category: "Oprema",
			image: "/images/p64.jpg",
			price: 439.99,
			countInStock: 15,
			brand: "Blunt Metro",
			rating: 3.8,
			numReviews: 24,
			description:
				"Blunt Metro kišobran može podnijeti vjetrove brzine i do 115 kilometara na sat. Dostupan u mnoštvu boja, ovaj kišobran je napravljen od visoko kvalitenog materijala.",
		},

		{
			name: "USB-C Earbuds",
			category: "Slušalice",
			image: "/images/p65.jpg",
			price: 159.99,
			countInStock: 6,
			brand: "Belkin",
			rating: 4.8,
			numReviews: 14,
			description:
				"Ove pristupačne USB-C slušalice super su opcija za današnje mobitele gdje više ne postoji audio jack. Sadrže izuzetan dizajn te nude kvalitetan zvuk, udobnost i ugrađeni upravljač za kontroliranje i prihvaćanje poziva. Dostupne u crnoj i bijeloj boji i garancijom od 2 godine.",
		},

		{
			name: "30,000 mAh Portable Battery Pack",
			category: "Baterije i punjači",
			image: "/images/p66.jpg",
			price: 809.99,
			countInStock: 11,
			brand: "RAVPower",
			rating: 4.6,
			numReviews: 21,
			description:
				"Ova prijenosna baterija od RAVPower-a ima kapacitet od 30,000 mAh sa maksimalnom snagom izlaza 100 W i USB-C konektor za brzo punjenje. Također ima dva USB porta u slučaju da trebate puniti više uređaja.",
		},

		{
			name: "G915 TKL Lightspeed Wireless Mechanical Gaming Keyboard",
			category: "Tipkovnice",
			image: "/images/p67.jpg",
			price: 1439.99,
			countInStock: 7,
			brand: "Logitech",
			rating: 4.5,
			numReviews: 24,
			description:
				"Logitech tipkovnica ima kompaktan dizajn i nudi Izvanredno gaming iskustvo. Možete ju povezati sa PC-ijem putem Bluetootha i USB reciever-a. Nudi do 40 sati gameplay-a između punjenja te Logitechov softver dozvoljava da prilagodite funkcionalnosti i RGB svjetla.",
		},

		{
			name: "Video Doorbell",
			category: "Smart House oprema",
			image: "/images/p68.jpg",
			price: 929.99,
			countInStock: 8,
			brand: "Arlo",
			rating: 4.9,
			numReviews: 58,
			description:
				"Zvono za vrata sa videom je najbolji svoje vrste. Dozvoljava korisnicima da razgovaraju i vide posjetitelje svoje kuće čak i ako nisu u njoj. Ovaj vodootporni uređaj pruža visoku rezoluciju videa sa maksimalno 180 stupnjeva vidnog polja čak i po mraku. ",
		},

		{
			name: "Aluminium Multi-Port USB-C Adapter",
			category: "Oprema",
			image: "/images/p69.jpg",
			price: 499.99,
			countInStock: 6,
			brand: "Satechi",
			rating: 4.4,
			numReviews: 25,
			description:
				"Ovaj USB-C hub sadrži više portova i odličan je izbor za nove vlasnike laptopa. Posjeduje 3 USB 3.0 porta, USB-C konektor za punjenje, HDMI port i gigabit ethernet port. Dodatno sadrži čitače za microSD i SD kartice.",
		},

		{
			name: "ScreenDr Professional Screen Cleaning Kit",
			category: "Oprema",
			image: "/images/p70.jpg",
			price: 129.99,
			countInStock: 3,
			brand: "Digital Innovations",
			rating: 4.2,
			numReviews: 10,
			description:
				"Ovaj proizvod za čišćenje će činiti display vašeg laptopa i bilo koji drugi uređaj besprijekornim. Tekućina je sigurna za sve uređaje.",
		},

		{
			name: "Pixelbook Go Lightweight Chromebook",
			category: "Laptopi",
			image: "/images/p71.jpg",
			price: 4099.99,
			countInStock: 11,
			brand: "Google",
			rating: 4.5,
			numReviews: 42,
			description:
				"Google Pixelbook Go je dugo očekivani nasljednik voljenog Pixelbook-a. Kao i što samo ime sugerira ovaj laptop je pogodan za sve one u konstantnom pokretu. Tanak je i izuzetno lagan za notebook sa ekranom od 13.3 inča. Traje i do 12 sati između punjenja.",
		},

		{
			name: "StormBox Micro Waterproof Bluetooth Speaker",
			category: "Zvučnici",
			image: "/images/p72.jpg",
			price: 249.99,
			countInStock: 13,
			brand: "Tribit",
			rating: 4.3,
			numReviews: 23,
			description:
				"Iako je jako malen, ovaj zvučnik nudi iznenađujuće jaki zvuk. Ovaj uređaj sadrži silikonsku traku kako bi ga mogli staviti na torbu ili biciklo te je jednostavan za nošenje bilo gdje. Možete očekivati i do 8 sati wireless glazbe.",
		},

		{
			name: "Arctis 1 Wireless Gaming Headset",
			category: "Slušalice",
			image: "/images/p73.jpg",
			price: 629.99,
			countInStock: 9,
			brand: "SteelSeries",
			rating: 4.3,
			numReviews: 12,
			description:
				"Arctis 1 slušalice nude izvrstan zvuk i veliku ugodnost. Također imaju USB-C port i mogu se koristiti sa android mobitelima i Nintendo Switchem. Može se povezati i sa PC-ijem i PlayStationom 4.",
		},

		{
			name: "Pulse 4 Waterproof Bluetooth Speaker",
			category: "Zvučnici",
			image: "/images/p74.jpg",
			price: 1869.99,
			countInStock: 24,
			brand: "JBL",
			rating: 4.2,
			numReviews: 35,
			description:
				"Osim toga što ovaj zvučnik pruža kvalitetan zvuk, također nudi i LED light show. Zvučnik je vodootporan i nudi 12 sati wireless glazbe i USB-c port za punjenje.",
		},

		{
			name: "Soundcore Wakey Wireless Speaker With Alarm Clock",
			category: "Zvučnici",
			image: "/images/p75.jpg",
			price: 569.99,
			countInStock: 12,
			brand: "Anker",
			rating: 4.2,
			numReviews: 25,
			description:
				"Soundcore Wakey zvučnik uključuje visoko kvalitetan Bluetooth 5.0 zvučnik, digitalni alarm, brzo wireless punjenj, duo USB portove za punjenje više uređaja i ugrađeni FM radio. Uređaj vas može buditi sa više alarma. Također vam može pomoći",
		},

		{
			name: "WF-XB700 Extra Bass Wireless Earbuds",
			category: "Slušalice",
			image: "/images/p76.jpg",
			price: 499.99,
			countInStock: 4,
			brand: "Sony",
			rating: 4.7,
			numReviews: 14,
			description:
				"Sony-eve slušalice nude kvalitetan zvuk i IPX4 ocjenu za vodootpornost pa je dobar za treniranje. Ove slušalice mogu trajati do 9 sati između punjenja. Njihova kutija sadrži USB-C port i nudi dodatno potpuno punjenje.",
		},

		{
			name: "USB-C Magnetic Charging Dock for Apple Watch",
			category: "Oprema",
			image: "/images/p77.jpg",
			price: 249.99,
			countInStock: 5,
			brand: "Satechi",
			rating: 4.8,
			numReviews: 15,
			description:
				" Satechijev dock za punjenje Apple sata možete koristiti tako što ga spojite na USB-C konektor. Kompatibilan je sa većinom laptopa i čak sa punjačima u autu.",
		},

		{
			name: "Surface Laptop Go",
			category: "Laptopi",
			image: "/images/p78.jpg",
			price: 7499.99,
			countInStock: 2,
			brand: "Microsoft",
			rating: 4.7,
			numReviews: 16,
			description:
				"Ovaj laptop ima 12.4-inchni touchscreen u all-metal izdanju. Hardverske specifikacije i performanse su mu izuzetno dobre. Sve Surface Go varijante imaju ugrađen fingerprint senzor. Dostupan je u tri boje:bež, ledeno plava i siva.",
		},

		{
			name: "Kevlar USB-C to Lightning Cable",
			category: "Baterije i punjači",
			image: "/images/p79.jpg",
			price: 249.99,
			countInStock: 8,
			brand: "Nomad",
			rating: 4.3,
			numReviews: 10,
			description:
				"Dizajn ovog kabela je savršen spoj taktiklnosti i dobrog dizajna. Dolazi sa silikonskom vezicom za jednostavno spremanje. Ima dužinu 1.5m, međutim dostupna je i varijanta od 3m.",
		},

		{
			name: "Walkman NW-A105 MP3 Player",
			category: "Elektronika",
			image: "/images/p80.jpg",
			price: 2179.99,
			countInStock: 7,
			brand: "Sony",
			rating: 4.7,
			numReviews: 8,
			description:
				"Novi Sony Walkman ima dobru kvalitetu zvuka i omogućava uživanje u glazbi sa vašim najdražim streaming servisima. Također možete instalirati aplikacije sa Google Play Store-a.",
		},

		{
			name: "WeMo Smart Plug",
			category: "Smart Home oprema",
			image: "/images/p81.jpg",
			price: 240,
			countInStock: 6,
			brand: "Belkin",
			rating: 3.9,
			numReviews: 19,
			description:
				"Wemo Smart Plug može raditi sa Amazon Alexom, Google asistentom, i sa Apple HomeKitom. Možete kontrolirati uređaj spojen na WiFi od bilo kud, a i stvoriti rasporede za sve priključene uređaje.",
		},

		{
			name: "S1 Stealth Phone Pocket",
			category: "Oprema",
			image: "/images/p82.jpg",
			price: 160,
			countInStock: 11,
			brand: "Dango",
			rating: 4.3,
			numReviews: 26,
			description:
				"S1 Stealth Phone Pocket instantno će transformirati većinu maskica za mobitel u zamjene za novčanike. Prikvači se na maskicu sa izdržljivim materijalom, ali ukoliko ga poželite skinuti to možete odraditi lako. Napravljen je od vodootpornog DTEX materijala",
		},

		{
			name: "VII Series Power Outlet",
			category: "Baterije i punjači",
			image: "/images/p83.jpg",
			price: 1460,
			countInStock: 5,
			brand: "Austere",
			rating: 4.7,
			numReviews: 17,
			description:
				"Austere VII Series Power Outlet ima uglađen dizajn i izbor od 6 do 8 utičnica, ima 2 full USB i 3 USB-C porta uključujući i jedan PD. Sa njim možete brzo puniti sve pametne mobitele.",
		},

		{
			name: "WAKE case for iPhone 12 Pro",
			category: "Oprema",
			image: "/images/p84.jpg",
			price: 250,
			countInStock: 13,
			brand: "Lifeproof",
			rating: 4.4,
			numReviews: 35,
			description:
				"Lifeproof WAKE maskica napravljena je od 85% reciklirane plastike iz oceana. Na poleđini također ima oblike valova kako bi vas podsjetila da je napravljena u dobre svrhe. Pored toga, pruža dobru zaštitu protiv ogrebotina i padovima sa visine i do 2 metra.",
		},

		{
			name: "AT-LP60XBT Turntable",
			category: "Zvučnici",
			image: "/images/p85.jpg",
			price: 950,
			countInStock: 3,
			brand: "Audio Technica",
			rating: 4.5,
			numReviews: 25,
			description:
				"Audio Technica je najbolja moderna gramofonska ploča, a možete ju dobiti po cijeni od samo 949.99 kuna. To je automatska ploča koja pruža kvalitetan zvuk. Zahvaljujući Bluetooth tehnologiji može se povezati sa zvučnicima i slušalicama.",
		},

		{
			name: "Kasa Smart Wi-Fi Power Strip",
			category: "Smart Home oprema",
			image: "/images/p86.jpg",
			price: 500,
			countInStock: 6,
			brand: "TP-Link",
			rating: 4.2,
			numReviews: 30,
			description:
				"TP-Link Kasa Smart produžni kabel posjeduje 6 zasebno kontroliranih utičnica kao i tri USB porta za punjenje manjih uređaja. Ovaj uređaj je kao i svi TP-Link uređaji kompatibilan sa Amazon Alexom, Google asistentom, i Cortana voice commands. Nema mogućnost spajanja sa Apple HomeKit-om.",
		},

		{
			name: "iPad Pro",
			category: "Tableti",
			image: "/images/p87.jpg",
			price: 4790,
			countInStock: 10,
			brand: "Apple",
			rating: 4.8,
			numReviews: 15,
			description:
				"Najnoviji iPad Pro je najbolji full-sized tablet koji možete kupiti. Dostupan u dvije varijante veličine od 11-inča i 12.9-inča Liquid Regina display-om, elegantan i moćniji od većine laptopa. Dostupan u tri boje: srebrna, zlatna i space gray.",
		},

		{
			name: "MW07 Plus True Wireless Earphones",
			category: "Slušalice",
			image: "/images/p88.jpg",
			price: 1870,
			countInStock: 2,
			brand: "Master & Dynamic",
			rating: 4.0,
			numReviews: 5,
			description:
				"Master & Dynamic slušalice osim što služe za slušanje glazbe također su i modni dodatak. Dizajnirane i razvijene u New York City-u, slušalice pružaju fenomenalan zvuk, ugrađenu noise-cancelling tehnologiju i do 10 sati baterije između punjenja.",
		},

		{
			name: "Shield TV Streaming Player",
			category: "Smart Home oprema",
			image: "/images/p89.jpg",
			price: 940,
			countInStock: 8,
			brand: "NVIDIA",
			rating: 4.3,
			numReviews: 8,
			description:
				"Novi NVIDIA Shield TV Player donosi neke nove funkcionalnosti na najbolji Android TV streaming player. Sa moćnim Google asistentom Shield TV će vam omogoćiti da tražite sadržaj, otvarate streaming aplikacije i kontrolirate pametne kućanske aparate s vašim glasom.",
		},

		{
			name: "Elite 45h Wireless Headphones",
			category: "Slušalice",
			image: "/images/p90.jpg",
			price: 630,
			countInStock: 7,
			brand: "Jabra",
			rating: 3.9,
			numReviews: 9,
			description:
				"Jabra Elite 45h slušalice su jedne od najboljih slušalice za svoj cjenovni rang zahvaljujući svom elegantnom dizajnu, udobnosti, odličnim zvukom i sve to možete podesiti preko smartphone aplikacije. Nudi do 50 sati slušanja između punjenja i dostupna je u tri boje: crna, zlatna i plava.",
		},

		{
			name: "Powerstation Plus XL Wireless Battery Pack",
			category: "Baterije i punjači",
			image: "/images/p91.jpg",
			price: 380,
			countInStock: 11,
			brand: "mophie",
			rating: 4.5,
			numReviews: 17,
			description:
				"Mophie Powerstation napravljen je posebno za Apple korisnike. Može puniti iPhone ili AirPodse bežično ili sa ugrađenim Lightning kabelom. Ova baterija ima kapacitet 8000mAh tako da može u potpunosti napuniti iPhone i idalje imati dovoljno energije za ostale uređaje.",
		},

		{
			name: "MX Keys Wireless Keyboard",
			category: "Oprema",
			image: "/images/p92.jpg",
			price: 640,
			countInStock: 7,
			brand: "Logitech",
			rating: 4.8,
			numReviews: 21,
			description:
				"Logitech MX Keys Wireless tipkovnica ja najbolja wireless tipkovnica u svom cjenovnom rangu i više. Ima ipresivan kompaktan dizajn, obasjane tipke sa odličnom taktilnošću i praktičnim shortcut dugmima. Tastatura ima bateriju koja traje i do 5 mjeseci i posjeduje USB-C port za punjenje.",
		},

		{
			name: "Express HD Streaming Media Player",
			category: "Smart Home oprema",
			image: "/images/p93.jpg",
			price: 190,
			countInStock: 4,
			brand: "Roku",
			rating: 4.6,
			numReviews: 11,
			description:
				"Roku Express HD Streaming Media Player će instantno transformirati stari TV u moderni. Lako se postavi i koristi i može streamanje velikih servisa kao što su Netflix, Amazon Prime, HBO Go i SlingTV.",
		},

		{
			name: "V11 Outsize cordless vacuum",
			category: "Smart Home oprema",
			image: "/images/p94.jpg",
			price: 5000,
			countInStock: 2,
			brand: "Dyson",
			rating: 4.7,
			numReviews: 4,
			description:
				"Outsize varijanta Dyson-ovog najnovijeg V11 modela je kombinacija uređaja za čišćenje i tehnološkog čuda. Nudi 2 sata rada bez punjenja i posjeduje display na kojem možete upravljati snagom usisivača i vidjeti stanje baterije.",
		},

		{
			name: "Quantum 100 Wired Gaming Headphones",
			category: "Slušalice",
			image: "/images/p95.jpg",
			price: 250,
			countInStock: 6,
			brand: "JBL",
			rating: 4.0,
			numReviews: 6,
			description:
				"JBL Quantum 100 wired gaming slušalice imaju dobar dizajn, lagane su i ugodne i posjeduju mikrofon koji se može odvojiti. Odlične su za komunikaciju tijekom igranja igrica i tijekom sastanaka od kuće.",
		},

		{
			name: "M1 Maverick Bifold Wallet",
			category: "Oprema",
			image: "/images/p96.jpg",
			price: 950,
			countInStock: 4,
			brand: "Dango",
			rating: 3.7,
			numReviews: 11,
			description:
				"M1 Maverick novčanik je svakodnevni dodatak koji spaja ugodan dizajn i taktičnost sa mnoštvom korisnih funkcionalnosti. Ovaj novčanik može čuvati do 12 kartica i novac i sadrži neke male alate ugrađene unutar njega.",
		},

		{
			name: "Hue White and Color LED Ambiance Lightning Kit",
			category: "Smart Home oprema",
			image: "/images/p97.jpg",
			price: 1200,
			countInStock: 5,
			brand: "Philips",
			rating: 4.4,
			numReviews: 5,
			description:
				"Posljednje Philips sijalice su najbolje do sad. Kompatibilne su sa Amazon Alexom, Google asistentom i Apple HomeKit-om. Također se mogu sinkronizirati s vašim najdražim filmovima i igricama. Paket se sastoji od 3 pametne sijalice.",
		},

		{
			name: "Brass Pen",
			category: "Oprema",
			image: "/images/p98.jpg",
			price: 500,
			countInStock: 4,
			brand: "Grovemade",
			rating: 4.0,
			numReviews: 4,
			description:
				"Ova Grovemade olovka je upravo suprotno od tehničkog uređaja. Ova olovka će vam pomoći da se odmorite od zaslona.",
		},

		{
			name: "Piston Fit Wired Airbuds",
			category: "Slušalice",
			image: "/images/p99.jpg",
			price: 130,
			countInStock: 12,
			brand: "1MORE",
			rating: 4.1,
			numReviews: 10,
			description:
				"Piston Fit slušalice imaju metalni dizajn dostupan u 4 varijante: srebrna, space gray, rose gold i plava. Za svoju cijenu nude impresivnu kvalitetu zvuka. Također imaju jedno dugme za upravljanje.",
		},

		{
			name: "Q80T Series QLED 4K Smart TV",
			category: "Smart Home oprema",
			image: "/images/p100.jpg",
			price: 7500,
			countInStock: 5,
			brand: "Samsung",
			rating: 4.6,
			numReviews: 3,
			description:
				"Samsung Q80T Series QLED 4K pametni TV ima odličan industrijski dizajn i izuzetnu kvalitetu slike. TV ima na raspolaganju sve velike streaming servise. Kompatibilan je sa Amazon Alexom, i Google asistentom.",
		},
	],
};
export default data;

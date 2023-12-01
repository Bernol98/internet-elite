document.addEventListener('DOMContentLoaded', function () {
    var textDictionary = {
      'Witamy': 'Welcome',
      'INTERNET ELITE': 'INTERNET ELITE',
      'Właściwy wybór': 'The right choice',
      'CO!?': 'WHAT!?',
      'Co tu się dzieje': 'What\'s going on here',
      'Zajmujemy się wszelakimi optymalizacjami stron internetowych - wygląd, treść, prędkość czy bezpieczeństwo. Zbudujemy Ci stronę od zera albo ulepszymy istotne detale żeby Twoja strona dołączyła do grona elity internetu.':
        'We deal with all kinds of website optimizations - design, content, speed, and security. We will build your website from scratch or enhance essential details to make your site join the elite of the internet.',
      'Napisz do nas': 'Contact us',
      'Email: <a href="mailto:maksym@internet-elite.pl">maksym@internet-elite.pl</a>':
        'Email: <a href="mailto:maksym@internet-elite.pl">maksym@internet-elite.pl</a>',
      'Elitarne': 'Elite Skills',
      'Umiejętności': 'Skills',
      'Optymalizacja strony dla wyszukiwarek': 'Website optimization for search engines',
      'PO CO MI TO!?': 'WHY DO I NEED IT!?',
      'Projekt witryny od zera albo ulepszanie istniejącej': 'Website design from scratch or enhancing existing ones',
      'Kampanie reklamowe i copywriting': 'Advertising campaigns and copywriting',
      'Elite': 'Elite',
      'Perfekcja jest kluczem do sukcesu': 'Perfection is the key to success',
      'Im więcej tym lepiej': 'The more, the better',
      'Optymalizacja strony dla wyszukiwarek i wydajności':
        'Website optimization for search engines and performance',
      'Z roku na rok internetowych biznesów jest coraz więcej. Coraz więcej stron konkuruje o wejścia, widoczność i przede wszystkim sprzedaże produktów. Optymalizacja dla wyszukiwarek tzw. SEO to zbiór działań mających na celu maksymalizowanie potencjału obecności w wyszukiwarkach aby CZĘŚCIEJ się pojawiać w googlu i WYŻEJ niż konkurencja. Profesjonalna optymalizacja jest konieczna w popularnych branżach, a w mniej obligowanych zapewnia znaczącą przewagę.':
        'Year by year, there are more and more online businesses. More and more websites are competing for visits, visibility, and, above all, product sales. Search engine optimization, known as SEO, is a set of activities aimed at maximizing the potential presence in search engines to appear MORE often on Google and HIGHER than the competition. Professional optimization is necessary in popular industries, and in less obligatory ones, it provides a significant advantage.',
      'Kliknij <a href="https://pagespeed.web.dev/" target="_blank">TUTAJ</a> aby sprawdzić wynik wydajności Twojej strony wg. googla.':
        'Click <a href="https://pagespeed.web.dev/" target="_blank">HERE</a> to check the performance score of your site according to Google.',
        
      'Narzędzia przyszłości': 'Tools of the future',
      'Emancypacja sztucznej inteligencji': 'Emancipation of artificial intelligence',
      'Sztuczna Inteligencja zaczęła infiltrować branżę stron internetowych. Najnowsze modele są w stanie zaoferować niesamowitą pomoc przy tworzeniu strony zarówno w samym pisaniu kodu oraz projektowaniu. Sztuczna Inteligencja ułatwia pracę webmastera a dzięki naszemu głębokiemu zrozumienu jej możliwości wykorzystujemy w naszych pracach jej pełen potencjał.':
        'Artificial Intelligence has started to infiltrate the industry of websites. The latest models can offer incredible assistance in creating a website, both in coding and design. AI facilitates the work of a webmaster, and thanks to our deep understanding of its capabilities, we harness its full potential in our projects.',
      'Design': 'Design',
      'Sztuka projektowania stron': 'The art of website design',
      'Projekt strony internetowej to jak mapa dla podróżnika, klucz do zamku pełnego informacji, a jednocześnie wizytówka przedsiębiorstwa w dzisiejszym cyfrowym świecie.  Nawigacja po stronie jest jak poruszanie się po znanym terenie – im łatwiej i intuicyjniej, tym bardziej użytkownik pozostaje zainteresowany. Dobre rozmieszczenie treści, czytelna typografia, atrakcyjne grafiki – to elementy, które składają się na doskonały projekt strony.  W erze, gdzie pierwsze wrażenie często decyduje o dalszych krokach użytkownika, inwestycja w profesjonalny projekt strony staje się nieodzowna.':
        'Website design is like a map for a traveler, the key to a castle full of information, and at the same time, the business card of a company in today\'s digital world. Navigating the site is like moving through familiar terrain - the easier and more intuitive, the more interested the user remains. Good content placement, readable typography, attractive graphics - these are elements that make up an excellent website design. In an era where the first impression often determines the user\'s further steps, investing in a professional website design becomes essential.',
      'Copywriting': 'Copywriting',
      'Prezentacja słowna': 'Verbal presentation',
      'Estetyczna strona już nie wystarczy aby mieć dobrą sprzedaż. Strony tekstu w monotonnej oprawie już NIKT nie przeczyta. Teksty, które są klarowne, zgrabnie sformułowane i dostosowane do wygórowanych oczekiwań, sprawiają, że użytkownik czuje sie zrozumiany. Copywriting pomaga budować zaufanie i pozytywne wrażenie na odwiedzających. Copywriting to sztuka złapania uwagi czytelnika poprzez chwytliwe nagłowki i hasła oraz ograniczenie wartości merytorycznych do najważniejszych.':
        'Aesthetic design alone is no longer enough for good sales. Nobody will read text-only pages in a monotonous setting. Clear, well-formulated, and tailored texts to high expectations make the user feel understood. Copywriting helps build trust and a positive impression on visitors. Copywriting is the art of grabbing the reader\'s attention through catchy headlines and slogans and limiting substantive values to the most important.',
      'Satysfakcja albo <span style="color: yellow;">100%</span> ZWROT PIENIĘDZY*':
        'Satisfaction or <span style="color: yellow;">100%</span> MONEY BACK*',
      '*Tak, jesteśmy w stanie poświęcić 5 dni pracy nad stroną z ryzykiem nie utrzymania pieniędzy. Zależy nam teraz przede wszyskim na budowaniu zaufania, i tworzeniu najlepszych produktów, a jako że znamy nasze możliwości możemy takie ryzyko podjąć.':
        '*Yes, we are willing to spend 5 days working on the site with the risk of not getting paid. We are currently focused on building trust and creating the best products, and since we know our capabilities, we can take such a risk.',
      'Nie ma żadnego haczyka prosty schemat - jeśli Ci się nie spodoba nasza praca nie musisz za nią płacić. Zmieniamy standardowe schematy internetowego biznesu. Całe ryzyko jest po naszej stronie. To jest JEDYNY taki model w branży.':
        'There is no catch, a simple concept - if you don\'t like our work, you don\'t have to pay for it. We are changing the standard schemes of online business. The entire risk is on our side. This is the ONLY model of its kind in the industry.',
      'Jaki jest koszt naszych usług?': 'What is the cost of our services?',
      'Koszt usług zależy od tego jak ambitne zadanie nam powierzycie.   Nie możemy tyle samo kasować za stronę początkującego lokalnego biznesu co wysoko rozwiniętej witryny dużej firmy.':
        'The cost of services depends on how ambitious a task you entrust us with. We cannot charge the same for a website for a beginner local business as for a highly developed site for a large company.',
      'Czy postawimy stronę na Polskich serwerach?': 'Will we host the site on Polish servers?',
      'Oczywiście, chyba że klient woli w Niemczech albo w Anglii.':
        'Of course, unless the client prefers in Germany or England.',
      'Ile czasu trwa realizacja zamówienia?': 'How long does order fulfillment take?',
      'Całą stronę od zera tworzymy w maksymalnie 5 dni po dostarczeniu potrzebnych informacji. Optymalizacja dla silnika wyszukiwania max 3, a reklamy do dwóch dni.':
        'We create the entire website from scratch in a maximum of 5 days after providing the necessary information. Optimization for the search engine takes a maximum of 3 days, and ads take up to two days.',
      'Czy będę w stanie aktualizować treści na stronie?': 'Will I be able to update content on the site?',
      'Po wykonaniu zlecenia strony pokazujemy jak poprawnie wstawiać nowe treści na stronę.':
        'After completing the website order, we show you how to correctly add new content to the site.',
      'DOŁĄCZ DO ELITY': 'JOIN THE ELITE',
      'Kontakt' : 'Contact',
      'KONTAKT' : 'CONTACT',
      'Zadzwoń' : 'Call',
      'TUTAJ' : 'HERE',
      'Kliknij' : 'Click ',
      'aby sprawdzić wynik wydajności Twojej strony wg. googla.' : ' to check the performance score of your site according to Google.',
      'Satysfakcja albo' : 'Satisfaction or ',
      'ZWROT PIENIĘDZY*' : ' MONEY BACK*',
      'Imie i nazwisko:' : 'Name:',
      'Wiadomość:' : 'Message:',
      'ALBO' : 'OR',
      'Napisz maila na adres:' : 'Send mail to: ',
      'Zadzwoń na numer:' : 'Call: ',

    };
    getIpInfoData()
    .then(function (ipinfoData) {
        console.log('Dane z ipinfo.io:', ipinfoData);

        // Sprawdź, czy adres IP nie jest z Polski
        if (ipinfoData && ipinfoData.country && ipinfoData.country.trim() !== 'PL') {
            console.log('Adres IP spoza Polski. Uruchamiam tłumaczenie.');
            var sta = 1; // Tłumaczenie na język angielski

            // Wywołaj funkcję tłumaczenia
            translateText(sta);
        } else {
            console.log('Jesteś w Polsce!');
        }
    })
    .catch(function (error) {
        console.error('Błąd pobierania danych z ipinfo.io:', error);
    });

    function translateText(statusss) {
        console.log('Rozpoczynam tłumaczenie. Status:', statusss);
    
        if (statusss == 1) {
            var allElements = document.body.getElementsByTagName('*');
    
            for (var i = 0; i < allElements.length; i++) {
                var element = allElements[i];
    
                if (element.hasChildNodes()) {
                    translateTextNodes(element.childNodes);
                } else if (element.nodeType === 3) {
                    // Sprawdź, czy to tekst (NODE_TEXT)
                    var key = element.nodeValue.trim();
                    if (textDictionary[key]) {
                        // Użyj innerHTML lub textContent w zależności od potrzeb
                        element.nodeValue = textDictionary[key];
                    }
                }
            }
        }
    
        console.log('Tłumaczenie zakończone.');
    }
    
    function translateTextNodes(nodes) {
        for (var i = 0; i < nodes.length; i++) {
            var node = nodes[i];

            if (node.hasChildNodes()) {
                translateTextNodes(node.childNodes);
            } else if (node.nodeType === 3) {
                // Sprawdź, czy to tekst (NODE_TEXT)
                var key = node.nodeValue.trim();
                if (textDictionary[key]) {
                    node.nodeValue = textDictionary[key];
                }
            }
        }
    }

    async function getIpInfoData() {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            var ipinfoUrl = 'https://ipinfo.io/json';

            xhr.open('GET', ipinfoUrl, true);
            xhr.setRequestHeader('Accept', 'application/json');
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        try {
                            var ipinfoData = JSON.parse(xhr.responseText);
                            resolve(ipinfoData);
                        } catch (error) {
                            reject('Błąd parsowania JSON:' + error);
                        }
                    } else {
                        reject('Błąd pobierania danych z ipinfo.io: ' + xhr.status);
                    }
                }
            };

            xhr.send();
        });
    }
});
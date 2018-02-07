// const results = []; // zmienna, która przechowuje wszystkie wyniki losowania

const losowanie = function() {
	console.log('działa');

}

const div = document.createElement("div");
//3.ta zmienna przechowuje metodę tworzenia divów za każdym razem jak uzytkownik kliknie w button
//teraz trzeb utworzyć losową liczbę:
div.textContent = Math.random(); // 5.b tworzy się losową wartość w divie
// div.textContent = 34; // 5a. tworzy się stałą wartością 34 w divie - tymczasowo

document.body.appendChild(div);
//4.dodaje do utworzonego diva kolejny div, za każdym kliknięciem się dołącza utworzony div
//body jestem elementem rodzic i dodaję do rodzica body dzieci divy na koniec ciała dokumentu

const buttonMax = document.querySelector("button");
//1.pobieramy elemnt na którym będziemy pracować, czyli na elemencie button

buttonMax.addEventListener("click", losowanie); 
/*2.nasłuchiwanie zdarzenia, w tym wypadku klika. Kiedy użytkownik kliknie w button
wywoła się funkcja losowanie. Funkcja losowanie zaraz wyżej zostanie stworzona.
Tutaj jest tylko odwołanie do nazwy funkcji bez nawiasów, czyli bez natychmiastowego
wywołania, bo nie chcemy w tym momencie jej wywołania, tylko dopiero jak uzytkownik 
kliknie w button, wtedy wywoła się metoda addEventListener, czyli użytkownik wylosuje liczbę.*/
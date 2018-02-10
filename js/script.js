//7.zmienna, która przechowuje wszystkie wyniki losowania
const result = []; 

// 3.Tworzymy funkcje 
const losowanie = function() {
	console.log('działa');

	if(result.length === 6) return;
	//7.warunek, że jesli długość tablicy jest równa 6, czyli ma 6 elementów (divów z wylosowaną liczbą), 
	//6 wyników, to ma zakończyć funkcje dzięki return, czyli 6 razy tak funckja przechodzi całe ciało 
	//kodu funkcji, za 7 razem zakończy się na return, bo spełni się powyzszy warunek
	
	const wynikLosowania = Math.floor(Math.random() * 49 + 1); 
	//9. tworzy się zmieną wynikiLosowania do której przypisuje się Math.floor(Math.random() * 49 + 1);
	//potrzebne nam jest informacja jak liczba została wylosowana
	//i ten wynikLosowania przyporządkowuje się do dic.testConten, bo pracuje się na zmiennych
	//dlaczego const stała, bo za kazdym razem wywołania się funkcji tworzy się nowe środowisko 
	
	for(let i=0; i<result.length; i++) {
		if(wynikLosowania === result[i]) {
			console.log('ta sama liczba');
			return losowanie();
		}
	}
	//pętla się wykona tylko wtedy kiedy warunek i<result.length jest spełniony, czyli w przypadku 0 
	//pętla się nie wykona. W pętli jest do wykonania kolejny warunek, że jeśli wynikLosowania 
	//jest równy dokładnego elementowi z tablicy odwołując się przez notację i iteratoł, czyli 0,1,2...
	//(indeksy elementów), to trzeba powtórzyć losowanie, czyli return kończy poprzez wywołanie ponownie 
	//funkcji losowanie

	const div = document.createElement("div");
	//4.ta zmienna przechowuje metodę tworzenia divów za każdym razem jak uzytkownik kliknie w button
	//teraz trzeb utworzyć losową liczbę:
	//div.textContent = 34; //6a. tworzy się stała wartość 34 w divie - tymczasowo aż
	
	div.textContent = wynikLosowania;
	//10. przypisuje się do div.textContent zmienną wynikiLosowania z metodą Math
	//div.textContent = Math.floor(Math.random() * 49 + 1); 
	
	//6B. tworzy się losową wartość w divie
	// każdy uwtorzony div ma zawierać losową liczbę, więc stosuje sie metodę z obiektu Math 
	//i dzięki metodzie random losujemy liczby z zakresu od zera włącznie do 1 bez jeden. 
	//Mnożąc przez 49 zwiększamy losowe liczby i zwiększamy przedział liczboy od zera do 48,99 
	//a dodając jeden pozbywamy się wylosowanego zera i zyskujemy max liczbę 49,99. 
	//Należy zastosować metodę floor, aby obciąć to co jest po przecinku, czyli zaokrąglić w dół. 
	//Otrzymjemy przedział losowy od 1 do 49 liczb całkowitych.
	
	result.push(wynikLosowania);
	//11. nie cchemy przypisać diva do tablicy, a wynik losowania - wylosowaną liczbę

	//result.push(div);
	//8.dodaje się wyniki (elementy div) do tablicy (result)
	
	document.body.appendChild(div);
	//5.dodaje do utworzonego diva kolejny div, za każdym kliknięciem się dołącza utworzony div
	//body jestem elementem rodzic i dodaję do rodzica body dzieci divy na koniec ciała dokumentu 


}
//1.pobieramy elementu na którym będziemy pracować, czyli na elemencie button
const buttonMax = document.querySelector("button");

/*2.nasłuchiwanie zdarzenia, w tym wypadku klika. Kiedy użytkownik kliknie w button
wywoła się funkcja losowanie. Funkcja losowanie zaraz wyżej zostanie stworzona.
Tutaj jest tylko odwołanie do nazwy funkcji bez nawiasów, czyli bez natychmiastowego
wywołania, bo nie chcemy w tym momencie jej wywołania, tylko dopiero jak uzytkownik 
kliknie w button, wtedy wywoła się metoda addEventListener, czyli użytkownik wylosuje liczbę.*/
buttonMax.addEventListener("click", losowanie);

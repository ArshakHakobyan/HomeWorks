"use strict";

let numberOfFilms;

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: true,

	howMuchFilms() {
	 numberOfFilms = +(prompt("Քանի՞ ֆիլմ եք դիտել այսօր", ""));
		while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
			numberOfFilms = +(prompt("Քանի՞ ֆիլմ եք դիտել այսօր", ""));
			personalMovieDB.count = numberOfFilms
		};
	},
	saveMyFilms () {
		for (let i = 0; i < 2; i++) {
			const a = prompt("Ո՞ր ֆիլմն եք վերջերս դիտել");
			const b = prompt("Ինչքա՞ն այդ ֆիլմը կգնահատեիք");
		
			if (a.trim() != "" && b.trim() != "" && a != null && b != null && a.length < 40 && !isNaN(b) && isNaN(a)) {
				personalMovieDB.movies[a] = b;
				console.log("DONE");
			} else {
				console.log("ERROR");
				i--;
			}
		}
	},
	showMyDB () {
		personalMovieDB.privat ? console.log(personalMovieDB) : console.log("Բազան բաց չէ");
	},
	genr() {
		for (let i = 1; i < 3; i++) {
			const a = prompt(`Ձեր սիրած ժանրը ${i} `)
			if (isNaN(a) && a != null && a.trim() != "" && a.length <= 20 ) {
				personalMovieDB.genres[i-1] = a;
			} else {
				console.log("ERROR");
				i--;
			}
			personalMovieDB.genres.forEach((item, index) => 
			console.log(`Ձեր սիրելի ժանր ${index +1} ը ${item} ն է`)) 
		}
	},
	detectUserPersonalLevel () {
		if (numberOfFilms < 10) {
			console.log("Դուք  քիչ ֆիլմեր եք դիտել");
		} else if (numberOfFilms < 30) {
			console.log("Դուք ֆիլմի սիրահար եք");
		} else if (numberOfFilms >= 30) {
			console.log("Դուք կինոման եք !!!");
		} else {
			console.log("Տեղի է ունեցել խնդիր, ըստ երևույթի դուք թիվ չեք նշել");
		}
	},
	isVisibleMyDB (){
	    personalMovieDB.privat ? personalMovieDB.privat = false : personalMovieDB.privat = true
	}
};

const {showMyDB,howMuchFilms,saveMyFilms,genr,detectUserPersonalLevel,isVisibleMyDB} = personalMovieDB

howMuchFilms();
saveMyFilms();
genr();
detectUserPersonalLevel();
isVisibleMyDB()
showMyDB();

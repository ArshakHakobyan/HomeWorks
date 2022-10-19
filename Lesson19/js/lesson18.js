const boxingInfo = {
    flyWeight: "48.98-50,80",
    lightWeight:"58.96 - 61.23 kg",
    middleWeight:"69.85 - 72.57 kg",
    lightHeavyWeight:"76.20 - 79.37 kg",
    HeavyWeight:"+90.71 kg",

    flyWeightFamosBoxers:{
        fullName1:"Vic Darchinyan",
        fullName2:"Junto Nakatani",
        fullName3:"Julio Cesar Martinez",
        fullName4:"Sunny Edwards",
        fullName5:"Jackson Chauke",
    },
    lightWeightFamosBoxers:{
        fullName1:"Devin Haney",
        fullName2:"George Kambosos Jr",
        fullName3:"Teofimo Lopez",
        fullName4:"Vasily Lomachenko",
        fullName5:"Gervonta Davis",
    },
    middleWeightFamosBoxers:{
        fullName1:"Artur Abraham",
        fullName2:"Gennady Golovkin",
        fullName3:"Teofimo Lopez",
        fullName4:"Jermall Charlo",
        fullName5:"Chris Eubank Jr.",
    },
    lightHeavyWeightFamosBoxers:{
        fullName1:"Roy Jones Jr",
        fullName2:"Antonio Tarver",
        fullName3:"Glen Jonson",
        fullName4:"Dmitry Bivol",
        fullName5:"Gilberto Ramirez",
    },
    lightHeavyWeightFamosBoxers:{
        fullName1:"Mike Gerard Tyson",
        fullName2:"Muhamed Ali",
        fullName3:"Joe Frazier",
        fullName4:"George Foreman",
        fullName5:"VitaliKlichko",
        
    },
    showResult () {
        for (key in boxingInfo) {
            if (typeof(boxingInfo[key]) === "object"){
                for(let secKey in boxingInfo[key]){
                    console.log(`Բանալի-${secKey}, Արժեք-${boxingInfo[key][secKey]} `)
                };
            }else{
                console.log(`Բանալի-${key}, Արժեք-${boxingInfo[key]} `)
            }
        }
    },
};

const {showResult} = boxingInfo;
showResult();

const footballClubs = [
    a = function(){
        
    },
    "Barcelona",
      [
        [
        "Ter Stegen","Dani Alves","Sergio Busquets","Jordi Alba","Sergiño Dest","Riqui Puig","Ansu Fati","Sergi Roberto",
       ]
      ],
    "Atletico Madrid",
       [
        "Samuel Lino","José Giménez","Rodrigo De Paul","Koke","Ángel Correa","Thomas Lemar","Jan Oblak","Samuel Lino",
       ],
    "Espanyol",
       [
        "Leandro Cabrera","Fernando Calero","Wu Lei","Javi Puado","Sergi Darder","Pol Lozano","Adri Embarba","Joselu",
       ],
    "Sevilla",
       [
        "Gonzalo Montiel","Ludwig Augustinsson","Karim Rekik","Lucas Ocampos","Suso","Munir","Bono","Pedro Ortiz",
       ],
    "Valencia",
       [
        "Thierry Correia","Toni Lato","Yunus Musah","Gabriel Paulista","Mouctar Diakhaby","Giorgi Mamardashvili","Cristian Rivero","Mouctar Diakhaby",
       ],

];

for(index in footballClubs){
    if(typeof footballClubs[index] === "object"){
        for(index2 in footballClubs[index]){
            console.log(footballClubs[index][index2])
        }
    }else{console.log(footballClubs[index])}
    
};

for(value of footballClubs){
    if(typeof value === "object"){
        for(value2 of value){
            console.log(value2 + " OF")
        }
    }else{console.log(value)}

    
};





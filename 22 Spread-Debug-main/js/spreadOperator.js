
//Spread 
const arr1 = [1,3,5,7,9] 
const arr2 = [2,4,6,8] 
 
function spread (arr,pushArr,place){ 
    let dubArr = [] 
    let dubArr1 = []
      //ԵԹե ուզում ենք որ զանգվածի ցանկացած տեղից դնենք մյուս զանգվածը
      if(place){ 
        dubArr = arr.slice(0,place) 
        dubArr1 = arr.slice(place,arr.length)
           for(x = 0; x < pushArr.length;x++){ dubArr.push(pushArr[x]) } 
           for(y = 0; y < dubArr1.length;y++){dubArr.push(dubArr1[y])} 
           for(z = 0; z < dubArr.length;z++){arr[z] = dubArr[z]}  
      //զանգվածի վեջից  դնենք մյուս զանգվածը  
        }else{ 
            for(i = 0; i < pushArr.length; i++){ 
            arr.push(pushArr[i]) 
            } 
        } 
        return arr 
} 
 
const res = spread(arr1,arr2,3) 
console.log(res)




// Debug ի համար

/*const boxingInfo = {
    flyWeight: "48.98-50,80",
    lightWeight:"58.96 - 61.23 kg",
    middleWeight:"69.85 - 72.57 kg",
    lightHeavyWeight:"76.20 - 79.37 kg",
    HeavyWeight:"+90.71 kg",

    flyWeightFamosBoxers:{
        fullName1:"Vic Darchinyan",
        fullName2"Junto Nakatani",// Սխալ
        fullName3:"Julio Cesar Martinez",
        fullName4:"Sunny Edwards",
        fullName5:"Jackson Chauke",
    },
    lightWeightFamosBoxers:{
        fullName1:"Devin Haney",
        fullName2:"George Kambosos Jr" // Սխալ
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
        for (key i boxingInfo) {                          //Սխալ
            if (typeof(boxingInfo[key]) === "object"){
                for(let secKey in boxingInfo[key]){
                    console.log(`Բանալի-${secKey}, Արժեք-${boxingInfo[key][secKey]} `)
                };
            }else{
                console.log`Բանալի-${key}, Արժեք-${boxingInfo[key]} `) //Սխալ
            }
        }
    },
};

const {showResult} = boxingInfo;
showResult();*/

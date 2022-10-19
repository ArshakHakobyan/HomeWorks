const destruct = [
    "Արման","Արտուշ","Վալոդ","Վահան",[
        "Հակոբ","Սմբատ","Սարգիս",{
            fullname:"Գասպարյան Գասպար",age:30,
        }
    ],"Հովիկ",,
];
const destruct1 = [1,5,6,9,5,1,3,5,2,1,5,2,1,5,2,1,2,2,1,2,];
const destruct2 = [ [ [ "Արտուշ","Կամո",[ [ "Դավի"[[[[[[ "Հայկ" ]]]]]]]]]]];
const destruct3 = [];
const destruct4 = [];

const destruct5 = {
    fullName1: "Lionel Messi",
    age1: "35",
    position: "Forward",
    friends: [
        {fullName2:"Andres Iniesta", age2: "39", club1: "Barcelona"},
        {fullName3:"Xavier Hernandez Creus", age3: "42", club2: "Barcelona"},
        {fullName4:"Sergio Busquets", age4: "33", club3: "Barcelona"},
        {fullName5:"Gerard Pique Bernabeu", age5: "35", club5: "Barcelona"},
    ]
};
const destruct6 = {
    num1:1,
    num1:1,
    num2:1,
    num3:1,
    num4:1,
    num5:5,
    num6:9,
    num9:3,
    num8:4,
};
    
const destruct7 = {};
const destruct8 = {};
const destruct9 = {};


const[name1,name2,name3] = destruct;
const[name4,name5,name6] = destruct[4];
const{fullname,age} = destruct[4][3];
const{fullName1,age1} = destruct5;
const{fullName2,age2,club1} = destruct5.friends[0];
const{fullName3,age3,club3} = destruct5.friends[1];
const{fullName4,age4,club4} = destruct5.friends[2];
const{fullName5,age5,club5} = destruct5.friends[3];
const[a,b,c,d,e,f,j] = destruct1
const{num1,num2,num3,num4,num5,num6,num9,num8,} = destruct6
const[armName,armName1] = destruct2[0][0];
const[armName2] = destruct2[0];



console.log(`${fullName2} is ${age2} years old, his Last club was ${club1}`);
console.log(`${fullName1} ${age1} is the Best`);
console.log(`${fullName3} is ${age3} years old, his Last club was ${club3}`);
console.log(`${fullName4} is ${age4} years old, he is playing for ${club4}`);
console.log(fullname);
console.log(name5);
console.log(name2,name1,name3,);
console.log(fullname,`${age} Տարեկան`);
console.log(`${fullName5} is ${age5} years old, he is playing for ${club5}`);
console.log(a,b,c,d,e,f,j);
console.log(num1,num2,num3,num4,num5,num6,num9,num8);
console.log(armName,armName1);
console.log(destruct2[0][0][2][0][0]);
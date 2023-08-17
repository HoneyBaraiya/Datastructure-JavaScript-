let str1="listen";
let str2="silent";

function isAmargam( s1, s2){
    s1=s1.toLowerCase();
    s2=s2.toLowerCase();
    
    s1=s1.split("").sort().join("");
    s2=s2.split("").sort().join("");

    if(s1===s2)
        console.log("True");
    else    
        console.log("false")
}
isAmargam(str1,str2);
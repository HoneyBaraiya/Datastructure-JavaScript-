// solution 1

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

// solution 2

function isAmargam2(s1,s2){
    let obj1={}
    let obj2={}

    for(let i=0;i<s1.length;i++)
    {
        obj1[s1[i]]=(obj1[s1[i]]||0) +1;
        obj2[s2[i]]=(obj2[s2[i]]||0) +1;
    }
    for(let i=0;i<obj1.length;i++)
    {
        if(obj1[i]!==obj2[i])
            return false
    }
    return true;
}
console.log(isAmargam2(str1,str2));
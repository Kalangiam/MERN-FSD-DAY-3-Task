let obj1 = {name:"person1",age:5};
let obj2 = {age:5,name:"person1"};

var flag=true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(i in obj1) { 
        if(obj1[i] == obj2[i]) {
            continue;
        }
        else {
            flag=false;
            break;
        }
    }
}
else {
    flag=false;
}
console.log(" equal");
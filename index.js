console.log('Happy developing ✨')

const vowel = ['a', 'e', 'o', 'i', 'u'];
const consonant = ['x', 'qu', 'z', 'y', 'w', 'j', 'v', 'r', 't', 'p', 's', 'd', 'f', 'g', 'h','k', 'l', 'm',
    'n', 'c', 'b', 'r', 't', 'p', 's', 'd', 'f', 'g', 'h','k', 'l', 'm', 'n', 'c', 'b', 'z', 'y', 'j', 'v',
    'r', 't', 'p', 's', 'd', 'f', 'g', 'h','k', 'l', 'm', 'n', 'c', 'b', 'r', 't', 'p', 's', 'd', 'f', 'g', 'h',
    'k', 'l', 'm', 'n', 'c', 'b'];

function charName(times){
    document.getElementById("char-output").innerHTML = "";
    const first = ["Ro", "Yr", "Co", "Al", "Kal", "Li", "Bas", "Mor", "Ket", "Sen", "Brin", "Pol", "Tora", "N'",
        "Vel", "Way", "Re", "Mont", "Jul"];
    const sec = ["tan", "del", "ler", "lin", "ba", "id", "in", "i", "a", "e", "bi"];
    const third = ["dar", "na", "olt", "din", "nar", "ius", "er", "sar", "in", "et"];

    const pre = ["Ro", "Co", "So", "Bo", "Ra", "Ca", "Sa", "Ba", "Re", "Ce", "Bo", "Se", "Al", "El", "Ol", "To",
        "Ta", "Te"];
    const mid = ["tan", "del", "ler", "lin", "din", "nar", "ten"];
    const end = ["e", "a", "o", "ia", "iar", "ien", "ian", "in", "an", "on", "ar"];

    const preLast = ["Ra", "Whi", "Bla", "Sto", "Rai", "Ri", "Hea", "Po", "Hi", "Hawe"];
    const midLast = ["ven", "t", "ck", "ne", "n", "ver", "de", "ra", "ng", "th"];
    const sufLast = ["craft", "croft", "sine", "son", "holm", "more", "lin", "nis", "ber", "", "thorn", "ham",
        "smith", "cliff", "born", "wood", "bell", "rose", "shaw", "ton", "ward", "brand"];

    const switchName = ["oah", "ohan", "ora", "aura", "aleb", "ian", "iana", "owan", "owen", "aden", "alan"]
    const vfirstName = ["lan", "lbert", "li", "liza", "lena", "veline", "velyn", "mber", "rena"]

    const style = ["switch", "short", "medium", "long", "vowelfirst", "short", "medium", "long",];

    let output = "";
    let name;

    for (let i = 0; i < times; i++) {
        let nameLength = getRandomElement(style);
        //let name = getRandomElement(pre) + getRandomElement(mid) + getRandomElement(end);
        let lastchance = getRandomInt(1,2);
        let last;
        if(lastchance === 1) {
            last = getRandomElement(vowel).toUpperCase() + getRandomElement(midLast) + getRandomElement(sufLast);
        } else{
            last = getRandomElement(preLast) + getRandomElement(midLast) + getRandomElement(sufLast);
        }

        if (nameLength === "short") {
            name = getRandomElement(pre) + getRandomElement(consonant) + getRandomElement(end);
        } else if (nameLength === "medium") {
            name = getRandomElement(pre) + getRandomElement(mid) + getRandomElement(end);
        } else if (nameLength === "switch") {
            name = getRandomElement(consonant) + getRandomElement(switchName);
        } else if (nameLength === "vowelfirst") {
            name = getRandomElement(vowel).toUpperCase() + getRandomElement(vfirstName);
        } else{
            name = getRandomElement(pre)+ getRandomElement(consonant) + getRandomElement(vowel) + getRandomElement(mid) + getRandomElement(end);
        }

        name = name.charAt(0).toUpperCase() + name.substr(1);
        name = removeRedundancy(name);
        name = removeRedundancyTwos(name);
        name = correctHTOrder(name);

        output += name + " " + last + "<br>";
        output = removeConsonantDupes(output);
        output = removeConsonantDupes(output);
    }

    document.getElementById("char-output").innerHTML = output;
}

function removeRedundancy(string) {
    let exists = new Set();
    let st = string;
    let remove = [];

    // Loop through and check triplets
    for (let i = 0; i <= string.length - 3; i++) {
        let triplet = string.substring(i, i + 3);

        // If the triplet has been added already, mark it to be removed
        if (exists.has(triplet)) {
            remove.push(triplet);
        } else {
            exists.add(triplet);
        }
    }

    for (let j=0; j<remove.length; j++) {
        st = st.replace(remove[j], '');
    }

    return st;
}

function removeRedundancyTwos(string) {
    let exists = new Set();
    let st = string;
    let remove = [];

    // Loop through and check triplets
    for (let i = 0; i <= string.length - 2; i++) {
        let pair = string.substring(i, i + 2);

        // If the triplet has been added already, mark it to be removed
        if (exists.has(pair)) {
            remove.push(pair);
        } else {
            exists.add(pair);
        }
    }

    for (let j=0; j<remove.length; j++) {
        st = st.replace(remove[j], '');
    }

    return st;
}

console.log(removeRedundancy("Tornadorn"));  // Outputs: "Tadorn"
console.log(removeRedundancy("Boraora"));    // Outputs: "Bora"
console.log(removeRedundancy("Orsensen")); // "Orsen"
console.log(removeRedundancyTwos("Talalin")); // "Talin"
console.log(removeRedundancyTwos("Formalial")); // "Formail"
console.log(removeRedundancy("Formaltialt")); // "Formialt"

function countryName(){
    let name;

    document.getElementById("country-output").innerHTML = name;
}

function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomElement(array){
    const randIndex = getRandomInt(0, array.length -1);
    return array[randIndex];
}

function elfName(times){
    document.getElementById("char-output").innerHTML = "";
    const elfPre = ["el", "as", "ar", "le", "tor"]
    const elfMid = ["y", "le", "ae", "ere", "lar"]
    const elfSuf = ["wyn", "thel", "ana", "len", "ion"]

    const elfStyle = ["medium", "short", "medium", "long",];

    let output = "";
    let name;

    for (let i = 0; i < times; i++) {
        let nameLength = getRandomElement(elfStyle);
        /*
        let lastchance = getRandomInt(1,2);
        let last;
        if(lastchance === 1) {
            last = getRandomElement(vowel).toUpperCase() + getRandomElement(midLast) + getRandomElement(sufLast);
        } else{
            last = getRandomElement(preLast) + getRandomElement(midLast) + getRandomElement(sufLast);
        }

         */

        if (nameLength === "short") {
            name = getRandomElement(elfPre) + getRandomElement(elfSuf);
        } else if (nameLength === "medium") {
            name = getRandomElement(elfPre) + getRandomElement(elfMid) + getRandomElement(elfSuf);
        } else{
            name = getRandomElement(elfPre) + getRandomElement(vowel) + getRandomElement(consonant) + getRandomElement(elfMid) + getRandomElement(elfSuf);
        }

        name = name.charAt(0).toUpperCase() + name.substr(1);
        name = removeRedundancy(name);
        name = removeRedundancyTwos(name);
        name = correctHTOrder(name);
        name = removeConsonantDupes(name);

        output += name + " " + "<br>";
    }

    document.getElementById("char-output").innerHTML = output;
}

function orcName(times){
    document.getElementById("char-output").innerHTML = "";
    const orcPre = ["gru", "grim", "wur", "ga", "ri", "kor", "rog", "or"]
    const orcMid = ["som", "ul", "sin", "ras", "t", "zz", "mesh", "gak"]
    const orcSuf = ["urg", "vun", "uan", "a", "uk", "ko", "gak", "mesh"]

    const orcStyle = ["short", "medium", "long", "short"];

    let output = "";
    let name;

    for (let i = 0; i < times; i++) {
        let nameLength = getRandomElement(orcStyle);
        /*
        let lastchance = getRandomInt(1,2);
        let last;
        if(lastchance === 1) {
            last = getRandomElement(vowel).toUpperCase() + getRandomElement(midLast) + getRandomElement(sufLast);
        } else{
            last = getRandomElement(preLast) + getRandomElement(midLast) + getRandomElement(sufLast);
        }

         */

        if (nameLength === "short") {
            name = getRandomElement(orcPre) + getRandomElement(orcSuf);
        } else if (nameLength === "medium") {
            name = getRandomElement(orcPre) + getRandomElement(orcMid) + getRandomElement(orcSuf);
        } else{
            name = getRandomElement(orcPre) + getRandomElement(consonant) + getRandomElement(orcMid) + getRandomElement(orcSuf);
        }

        name = name.charAt(0).toUpperCase() + name.substr(1);
        name = removeRedundancy(name);
        name = removeRedundancyTwos(name);
        name = correctHTOrder(name);

        output += name + " " + "<br>";
    }

    document.getElementById("char-output").innerHTML = output;
}

function correctHTOrder(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (i===0 && str[i] === 'h' && str[i + 1] === 't'){
            result += "th";
            i=i+2;
        }
        if (i > 0 && str[i - 1] !== 'g' && str[i] === 'h' && str[i + 1] === 't') {
            result += "th";
            i++;
        } else {
            result += str[i];
        }
    }
    return result;
}

function removeConsonantDupes(str){
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (i > 0 && str[i - 1] === str[i] && 'hxqwyjkv'.includes(str[i])) {
            //skip letter
        } else {
            result += str[i];
        }
    }
    return result;
}

function removeVowelDupes(str){
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (i > 0 && str[i - 1] === str[i] && 'aeiou'.includes(str[i])) {
            //skip letter
        } else {
            result += str[i];
        }
    }
    return result;
}

console.log(removeConsonantDupes("Hawethham"));
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
    const end = ["e", "a", "o", "ia", "iar", "ien", "ian", "in", "an", "on", "ar", "ette", "ina", "el"];

    const preLast = ["Ra", "Whi", "Bla", "Sto", "Rai", "Ri", "Hea", "Po", "Hi", "Hawe", "Ever"];
    const midLast = ["ven", "t", "ck", "ne", "n", "ver", "de", "ra", "ng", "th", "net", "ss"];
    const sufLast = ["craft", "croft", "sine", "son", "holm", "more", "lin", "nis", "ber", "", "thorn", "ham",
        "smith", "cliff", "born", "wood", "bell", "rose", "shaw", "ton", "ward", "brand", "win", "er"];

    const switchName = ["oah", "ohan", "ora", "aura", "aleb", "ian", "iana", "owan", "owen", "aden", "alan",
        "arold", "ivette", "abina", "avier", "errick", "rent"]
    const vfirstName = ["lan", "lbert", "li", "liza", "lena", "veline", "velyn", "mber", "rena", "rick",
        "dette", "viette", "rlen", "del", "lba"]

    const style = ["switch", "short", "medium", "long", "vowelfirst", "short", "medium", "long",];

    let output = "";
    let name;

    for (let i = 0; i < times; i++) {
        let nameLength = getRandomElement(style);
        //let name = getRandomElement(pre) + getRandomElement(mid) + getRandomElement(end);

        let last =" ";
        if(document.getElementById("enable-last").checked) {
            let lastchance = getRandomInt(1, 2);
            if (lastchance === 1) {
                last += getRandomElement(vowel).toUpperCase() + getRandomElement(midLast) + getRandomElement(sufLast);
                if (last.includes("Ass")){
                    last = " " + getRandomElement(consonant).toUpperCase() + last.substring(1,last.length).toLowerCase();
                    console.log(last);
                }
            } else {
                last += getRandomElement(preLast) + getRandomElement(midLast) + getRandomElement(sufLast);
            }
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
        name = removeConsonantDupes(name);
        name = removeVowelDupes(name);
        name = removeRedundancy(name);
        name = removeRedundancyTwos(name);
        name = threeVowelChoice(name);
        name = correctHTOrder(name);
        last = removeConsonantDupes(last);
        last = removeRedundancy(last);
        last = correctHTOrder(last);
        last = removeSSS(last);


        output += name + last + "<br>";

    }
    if(document.getElementById("alphabetize").checked) {
        let names = output.split("<br>");
        names = names.sort();
        output = names.join("<br>");
        output = output.substring(4, output.length) //cut off leading line break
    }

    if (times > 10) {
        document.getElementById("char-output").classList.add("multi-column");
    } else {
        document.getElementById("char-output").classList.remove("multi-column");
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

    // Loop through and check pairs
    for (let i = 0; i <= string.length - 2; i++) {
        let pair = string.substring(i, i + 2);

        // If the pair has been added already, mark it to be removed
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

function countryName(times){
    document.getElementById("country-output").innerHTML = "";

    const pre = ["Ava", "Sera", "Ton", "Thorn", "Der", "Mor"];
    const mid = ["la", "tia", "fin", "cor"];
    const end = ["del", "a", "don", "land", "kia", "sia", "lon", "dor"];

    const style = ["short", "medium", "long"];

    let output = "";
    let name;

    for (let i = 0; i < times; i++) {
        let nameLength = getRandomElement(style);

        if (nameLength === "short") {
            name = getRandomElement(pre) + getRandomElement(consonant) + getRandomElement(end);
        } else if (nameLength === "medium") {
            name = getRandomElement(pre) + getRandomElement(mid) + getRandomElement(end);
        } else{
            name = getRandomElement(pre)+ getRandomElement(consonant) + getRandomElement(vowel) + getRandomElement(mid) + getRandomElement(end);
        }

        name = name.charAt(0).toUpperCase() + name.substr(1);
        name = removeRedundancy(name);
        //name = removeRedundancyTwos(name);
        name = removeVowelDupes(name);
        name = correctHTOrder(name);
        name = threeConsonantChoice(name);
        name = threeConsonantChoice(name);

        output += name + "<br>";

    }
    if(document.getElementById("alphabetize-c").checked) {
        let names = output.split("<br>");
        names = names.sort();
        output = names.join("<br>");
        output = output.substring(4, output.length) //cut off leading line break
    }

    if (times > 10) {
        document.getElementById("country-output").classList.add("multi-column");
    } else {
        document.getElementById("country-output").classList.remove("multi-column");
    }

    document.getElementById("country-output").innerHTML = output;
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
    const elfPre = ["el", "as", "ar", "le", "tor", "al", "har"]
    const elfMid = ["le", "ae", "ere", "lar", "ta", "e", "nel"]
    const elfSuf = ["wyn", "thel", "ana", "len", "ion", "eyn", "ien", "idel"]

    const elfStyle = ["medium", "long", "short", "medium", "long",];

    let output = "";
    let name;

    for (let i = 0; i < times; i++) {
        let elfConsonants = ['r', 't', 'p', 's', 'd', 'f', 'h', 'l', 'm', 'n']
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
            name = getRandomElement(elfPre) + getRandomElement(vowel) + getRandomElement(elfConsonants) + getRandomElement(elfMid) + getRandomElement(elfSuf);
        }

        name = name.charAt(0).toUpperCase() + name.substr(1);
        name = removeRedundancy(name);
        name = removeRedundancyTwos(name);
        name = correctHTOrder(name);
        name = removeConsonantDupes(name);
        name = removeVowelDupes(name);

        output += name + " " + "<br>";
        output = threeVowelChoice(output);
    }
    if(document.getElementById("alphabetize").checked) {
        let names = output.split("<br>");
        names = names.sort();
        output = names.join("<br>");
        output = output.substring(4, output.length) //cut off leading line break
    }
    document.getElementById("char-output").classList.remove("multi-column");
    document.getElementById("char-output").columnCount = 1;
    document.getElementById("char-output").innerHTML = output;
}

function orcName(times){
    document.getElementById("char-output").innerHTML = "";
    const orcPre = ["gru", "grim", "wur", "ga", "ri", "kor", "rog", "or", "mer"]
    const orcMid = ["som", "ul", "sin", "ras", "t", "zz", "mesh", "gak"]
    const orcSuf = ["urg", "vun", "uan", "a", "uk", "ko", "gak", "mesh", "ug"]

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
            name = getRandomElement(orcPre) + getRandomElement(vowel) + getRandomElement(orcMid) + getRandomElement(orcSuf);
        }

        name = name.charAt(0).toUpperCase() + name.substr(1);
        //name = removeRedundancy(name);
        name = removeRedundancyTwos(name);
        name = correctHTOrder(name);

        output += name + " " + "<br>";
        output = threeVowelChoice(output);
        output = threeConsonantChoice(output);
    }
    if(document.getElementById("alphabetize").checked) {
        let names = output.split("<br>");
        names = names.sort();
        output = names.join("<br>");
        output = output.substring(4, output.length) //cut off leading line break
    }
    document.getElementById("char-output").classList.remove("multi-column");
    document.getElementById("char-output").columnCount = 1;
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
        } else if (i > 0 && i <str.length-1 && str[i - 1] === str[i] && str[i] === 't' && str[i+1] === 'h'){
            //skip dupe t
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

function removeVowelTriplets(str){
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (i > 0 && 'aeiou'.includes(str[i-1]) && 'aeiou'.includes(str[i]) && 'aeiou'.includes(str[i+1])) {
            //skip a duplicate vowel, default to middle one if no duplicates
            let exists = new Map();
            let triplet = str.substring(i-1, i+2);
            let newVowels = "";
            let replaceVowel = "-1";
            for (let j = 0; j < 3; j++) {
                if (!exists.has(triplet[j])) {
                    exists.set(triplet[j], 1);
                    newVowels += triplet[j];
                } else {
                    replaceVowel = triplet[j];
                    newVowels += triplet[j];
                }
            }
            if (replaceVowel !== "-1") {
                result = result.substring(0, result.length-1);
                for (let j = 0; j < 3; j++) {
                    if (newVowels[j] !== replaceVowel) {
                        result+= newVowels[j];
                    } else {
                        replaceVowel = "-1";
                    }
                }
                i++;
            }
        } else {
            result += str[i];
        }
    }
    return result;
}

function replaceVowelTriplets(str){
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (i > 0 && i < str.length && 'aeiou'.includes(str[i-1]) && 'aeiou'.includes(str[i]) && 'aeiou'.includes(str[i+1])) {
            //add random consonant before middle vowel
            result += getRandomElement(consonant);
            result += str[i];
        } else {
            result += str[i];
        }
    }
    return result;
}

function threeVowelChoice(str){
    let opt = getRandomInt(1,2)
    if (opt === 1){
        str = removeVowelTriplets(str);
    } else {
        str = replaceVowelTriplets(str);
    }
    return str;
}

console.log(removeConsonantDupes("Hawethham"));
console.log(removeVowelTriplets("Asaeana"));
console.log(removeVowelTriplets("Asaeuna"));
console.log(replaceVowelTriplets("Asaeana"));

function removeConsonantTriplets(str){
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (i > 0 && 'qwrtpsdfghjklzxcvbnm'.includes(str[i-1]) && 'qwrtpsdfghjklzxcvbnm'.includes(str[i]) && 'qwrtpsdfghjklzxcvbnm'.includes(str[i+1])) {
            //skip a duplicate consonant, default to middle one if no duplicates
            let exists = new Map();
            let triplet = str.substring(i-1, i+2);
            let newCons = "";
            let replaceCons = "-1";
            for (let j = 0; j < 3; j++) {
                if (!exists.has(triplet[j])) {
                    exists.set(triplet[j], 1);
                    newCons += triplet[j];
                } else {
                    replaceCons = triplet[j];
                    newCons += triplet[j];
                }
            }
            if (replaceCons !== "-1") {
                result = result.substring(0, result.length-1);
                for (let j = 0; j < 3; j++) {
                    if (newCons[j] !== replaceCons) {
                        result+= newCons[j];
                    } else {
                        replaceCons = "-1";
                    }
                }
                i++;
            }
        } else {
            result += str[i];
        }
    }
    return result;
}

function replaceConsonantTriplets(str){
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (i > 0 && i < str.length && 'qwrtpsdfghjklzxcvbnm'.includes(str[i-1]) && 'qwrtpsdfghjklzxcvbnm'.includes(str[i]) && 'qwrtpsdfghjklzxcvbnm'.includes(str[i+1])) {
            //add random vowel before middle consonant
            result += getRandomElement(vowel);
            result += str[i];
        } else {
            result += str[i];
        }
    }
    return result;
}

function threeConsonantChoice(str){
    let opt = getRandomInt(1,2)
    if (opt === 1){
        str = removeConsonantTriplets(str);
    } else {
        str = replaceConsonantTriplets(str);
    }
    return str;
}

function removeSSS(str){
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (i > 0 && i < str.length && str[i-1] === str[i] && str[i] && str[i] ===str[i+1] && str[i] === "s") {
            //skip middle s
        } else {
            result += str[i];
        }
    }
    return result;
}

console.log(removeSSS("Osss"));

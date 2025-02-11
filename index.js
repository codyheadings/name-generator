console.log('Happy developing ✨')

function charName(times){
    document.getElementById("char-output").innerHTML = "";
    const first = ["Ro", "Yr", "Co", "Al", "Kal", "Li", "Bas", "Mor", "Ket", "Sen", "Brin", "Pol", "Tora", "N'", "Vel", "Way", "Re", "Mont", "Jul"];
    const sec = ["tan", "del", "ler", "lin", "ba", "id", "in", "i", "a", "e", "bi"];
    const third = ["dar", "na", "olt", "din", "nar", "ius", "er", "sar", "in", "et"];

    const pre = ["Ro", "Co", "So", "Bo", "Ra", "Ca", "Sa", "Ba", "Re", "Ce", "Bo", "Se", "Al", "El", "Ol", "To", "Ta", "Te"];
    const mid = ["tan", "del", "ler", "lin", "din", "nar", "ten"];
    const end = ["e", "a", "o", "ia", "iar", "ien", "ian", "in", "an", "on"];

    const preLast = ["Ra", "Whi", "Bla", "Sto", "Rai", "Ri", "Hea", "Po", "Hi"];
    const midLast = ["ven", "t", "ck", "ne", "n", "ver", "de", "ra", "ng", "th"];
    const sufLast = ["craft", "croft", "sine", "son", "holm", "more", "lin", "nis", "ber", "", "thorn", "ham",
        "smith", "cliff", "born", "wood", "bell", "rose", "shaw", "ton", "ward", "brand"];

    const vowel = ['a', 'e', 'o', 'i', 'u'];
    const consonant = ['q', 'z', 'x', 'y', 'w', 'j', 'v', 'r', 't', 'p', 's', 'd', 'f', 'g', 'h','k', 'l', 'm',
        'n', 'c', 'b', 'r', 't', 'p', 's', 'd', 'f', 'g', 'h','k', 'l', 'm', 'n', 'c', 'b'];

    const switchName = ["oah", "ohan", "ora", "aura", "aleb", "ian", "iana", "owan", "owen", "aden", "alan"]
    const vfirstName = ["lan", "lbert", "li", "liza", "lena", "veline", "velyn", "mber", "rena"]

    const style = ["switch", "short", "medium", "long", "vowelfirst", "short", "medium", "long",];

    let output = "";

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
            name = getRandomElement(consonant).toUpperCase() + getRandomElement(switchName);
        } else if (nameLength === "vowelfirst") {
            name = getRandomElement(vowel).toUpperCase() + getRandomElement(vfirstName);
        } else{
            name = getRandomElement(pre)+ getRandomElement(consonant) + getRandomElement(vowel) + getRandomElement(mid) + getRandomElement(end);
        }

        name = removeRedundancy(name);

        output += name + " " + last + "<br>";
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

console.log(removeRedundancy("Tornadorn"));  // Outputs: "Tornad"
console.log(removeRedundancy("Boraora"));    // Outputs: "Bora"
console.log(removeRedundancy("Orsensen")); // "Orsen"
console.log(removeRedundancy("Talalin")); // "Tinal"
console.log(removeRedundancy("Formalial")); // "Formali"
console.log(removeRedundancy("Formaltialt")); // "Formali"

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



const fs = require("fs");
const findString = "d2edcug0 hpfvmrgz qv66sw1b c1et5uql lr9zc1uh a8c37x1j fe6kdd0r mau55g9w c8b282yb keod5gw0 nxhoafnm aigsh9s9 d3f4x2em mdeji52x a5q79mjw g1cxx5fr lrazzd5p oo9gr5id";

const findName = (data, index) => {
    index = index + findString.length;
    while (data[index] != '>') {
        index++;
    };
    index++;
    let endOfName = index;
    while (data[endOfName] != '<') {
        endOfName++;
    };
    let name = data.substring(index, endOfName);
    name = name.replace(/\s{2,}/g, ' ').trim();
    name = name.replace('\n', ``);
    return name;
};

// __dirname means relative to script. Use "./data.txt" if you want it relative to execution path.
fs.readFile(__dirname + "/input.html", (error, data) => {
    if (error) {
        throw error;
    };

    data = data.toString();
    
    const friends = [];
    const matchedStrings = [...data.matchAll(findString)];

    matchedStrings.forEach(({ index }) => {
        const name = findName(data,index);
        friends.push(name);
    });

    friends.sort();

    const output = friends.join('\n');

    fs.writeFile(__dirname + "/output.txt", output, err => {
        if (err) {
            console.error(err)
            return
        };
        console.log("File has been created");
    });
    console.log("Total friends: ", friends.length);
});


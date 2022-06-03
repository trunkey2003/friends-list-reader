const fs = require("fs");

// __dirname means relative to script. Use "./data.txt" if you want it relative to execution path.
fs.readFile(__dirname + "/input.html", (error, data) => {
    if(error) {
        throw error;
    };

    data = data.toString();
    const findString = "d2edcug0 hpfvmrgz qv66sw1b c1et5uql lr9zc1uh a8c37x1j fe6kdd0r mau55g9w c8b282yb keod5gw0 nxhoafnm aigsh9s9 d3f4x2em mdeji52x a5q79mjw g1cxx5fr lrazzd5p oo9gr5id";
    var count = 0;
    var friends = [];

    for(var i = 0; i < data.length; i++) {
        if (data[i] === findString[0]) {
            var iSave = i;
            var iLink = i + 1;
            var isFindString = true;
            for(let j = 1; j < findString.length;j++){
                if (!(data[iLink] == findString[j])){
                    isFindString = false;
                    break;
                };
                iLink++;
            };

            if (!isFindString){
                // i = i + findString.length;
            } else {
                count++;
                i = i + findString.length;
                while(data[i] != '>'){
                    i++;
                };
                i++;
                let endOfName = i;
                while (data[endOfName] != '<'){
                    endOfName++;
                };
                let name = data.substring(i, endOfName);
                name = name.replace(/\s{2,}/g, ' ').trim();
                name = name.replace('\n',``);
                // console.log("Name = ", name);
                friends.push(name);
            };
        };
    };

    friends.sort();
    
    const output = friends.join('\n');

    fs.writeFile(__dirname + "/output.txt", output, err => {
        if (err) {
          console.error(err)
          return
        }
        //file written successfully
    });
    console.log("Total friends: ", count);
});


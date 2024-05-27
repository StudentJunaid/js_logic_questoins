var dummyText = "a quick brown fox jumps and over the lazy dog";
 var isavailable = false;


for (let i = 0; i < dummyText.length; i++) {
    var checkingSpace = dummyText.slice(i,i + 3)
    if (checkingSpace === "and") {
        isavailable = true
    }
}

if(isavailable === true){
    alert("Your text contain and")
}else{
    alert("Your text do not contain and")
}
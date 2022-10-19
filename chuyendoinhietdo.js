function convert(doF) {
    let doC =  (doF -32)/18;
    return doC;
}
function change() {
    let input = document.getElementById("input").value;
    let result = convert(input);
    document.getElementById("result").innerHTML = result;
}
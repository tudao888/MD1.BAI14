function square(number) {
    let result = number * number;
    return result;
}
function caculate() {
    let input = document.getElementById("input").value;
    let result = square(input)
    document.getElementById("result").innerHTML = result
}

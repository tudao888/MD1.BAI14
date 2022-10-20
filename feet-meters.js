function footToMeter(foot) {
    let meter = 0.305*foot;
    return meter;
}
function meterToFoot(meter) {
    let foot = 3.279*meter;
    return foot;
}
let foot = prompt("Nhap vao foot")
document.write(foot + "foot" + " = " + footToMeter(foot) + "meter" + "<br>")
let meter = prompt("Nhap vao meter")
document.write(meter + "meter" + " = " + footToMeter(meter) + "foot")




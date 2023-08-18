var strValue = "I can eat bananas all day";
function showBananas() {
    document.getElementById("demo").innerHTML = strValue.slice(10, 17).toUpperCase();
}

function getCars() {
    return ["Saab", "Volvo", "BMW"];
}
var cars = getCars();
document.getElementById("array").innerHTML = cars;
document.getElementById("get_BMW").innerHTML = cars.find(x => x === "BMW");
function changeFirstItem() {
    var cars = getCars();
    cars[0] = "KIA";
    document.getElementById("changeFirstItem").innerHTML = cars;
}
function removeLastItem() {
    var cars = getCars();
    cars.pop();
    document.getElementById("removeLastItem").innerHTML = cars;
}
function addAudi() {
    var cars = getCars();
    cars.push("Audi");
    document.getElementById("addAudi").innerHTML = cars;
}
function spliceCar() {
    var cars = getCars();
    cars.splice(1, 2);
    document.getElementById("splice").innerHTML = cars;
}
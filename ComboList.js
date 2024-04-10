function doShow() {
    //alert();
    var category = document.querySelector("#category");
    if (category[1].selected) {
        var array = ["Real C", "Real Java", "Robert Lafore", "E Balagurusamy"];
        var value = ["350", "400", "450", "500"];
        AddAll(array, value);
    }
    if (category[2].selected) {
        var array = ["Shirt", "T- Shirt", "Jeans", "Trousers"];
        var value = ["600", "650", "1000", "900"];
        AddAll(array, value);
    }
    if (category[3].selected) {
        var array = ["Keyboard", "Mouse", "Pen Drive", "Web Cam"];
        var value = ["3500", "1000", "500", "2000"];
        AddAll(array, value);
    }
    if (category[4].selected) {
        var array = ["Parker Pen", "Pilot Pen", "Gel Pens", "Ball Pens"];
        var value = ["500", "100", "450", "500"];
        AddAll(array, value);
    }
}
function AddAll(a, b) {
    var type = document.querySelector("#types");
    var price = document.querySelector("#prices");
    price.options.length = 0;
    type.options.length = 0;
    for (var i = 0; i < a.length; i++) {
        var opt = document.createElement("option");
        opt.text = a[i];
        opt.value = b[i];
        type.append(opt);
    }
    for (var i = 0; i < b.length; i++) {
        var opt = document.createElement("option");
        opt.text = "Rs. " + b[i];
        price.append(opt);
    }
}
function doShowSel(ref) {
    //alert();
    var type = document.querySelector("#types");
    var prc = document.querySelector("#prices");
    var car = document.querySelector("#cart");
    var values = document.querySelector("#ivalues");
    var opt = document.createElement("option");
    var val = ref.selectedIndex;
    opt.text = ref[val].text;
    car.append(opt);
    var opt = document.createElement("option");
    opt.text = "Rs. "+ ref.value;
    values.append(opt);
    prc[val].selected = true;
}
function doBill() 
{
    //alert();
    var bill = 0;
    var val = document.getElementById("ivalues");
    for (i = 0; i < val.length; i++) 
    {
        bill = bill + parseFloat(val[i].value.slice(4,val[i].length));
    }
    document.getElementById("bills").value = "Rs. " + bill;
}

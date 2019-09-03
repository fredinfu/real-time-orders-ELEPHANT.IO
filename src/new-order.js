var localIpAddress = "http://192.168.75.143/";
var localHostAddress =  "http://localhost/";
var herokuAddress = "https://stormy-crag-96740.herokuapp.com";

var serverAddress = herokuAddress;

function postNewOrder() {
    let order = $("#formOrder").serialize();
    console.log(order);
    let posting = $.post(serverAddress+"php-socket/emit_order.php", order);
    posting.done(function (response) {
        console.log(response);
        alert("Order sent!");
    })
}
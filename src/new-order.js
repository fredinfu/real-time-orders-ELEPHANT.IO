var localIpAddress = "http://192.168.75.143:8888/";
var localHostAddress =  "http://localhost:8888/";
var herokuAddress = "https://stormy-crag-96740.herokuapp.com:8888";

var serverAddress = localIpAddress;

function postNewOrder() {
    let order = $("#formOrder").serialize();
    console.log(order);
    let posting = $.post(serverAddress+"php-socket/emit_order.php", order);
    posting.done(function (response) {
        console.log(response);
        alert("Order sent!");
    })
}
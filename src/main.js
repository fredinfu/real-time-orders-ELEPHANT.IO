var localIpAddress = "http://192.168.75.143:3001/";
var localHostAddress =  "http://localhost:3001/";
var herokuAddress = "https://stormy-crag-96740.herokuapp.com:3001";

var nodeServerAddress = herokuAddress;

var socket = io.connect(nodeServerAddress);

socket.on("new_order", function (order) {

    let toCookHtml = getOrderComponent(order);
    $("#toCook").append(toCookHtml);    

})

socket.on("preparing_order", function (order) {

    let cookingHtml = getOrderComponent(order);
    $("#cooking").append(cookingHtml);

})

socket.on("finished_order", function (order) {

    let cookedHtml = getOrderComponent(order);
    $("#cooked").append(cookedHtml);

})

function getOrderComponent(order){
    let html = `
        <div class="col-md-12">
            <div class="thumbnail">
                <div class="caption">
                    <div class="row">
                        <div class="col-md-12">
                            <h3>${order.full_name}</h3>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-7">
                            <p>${order.email}</p>
                        </div>
                        <div class="col-md-5">
                            <p>${order.product}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <p>${order.instructions}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <small>${order.time}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;

    return html;
}


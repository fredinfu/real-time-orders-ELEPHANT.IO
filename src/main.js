var socket = io.connect("http://localhost:3001");

socket.on("new_order", function (order) {

    let toCookHtml = `
    <div class="col-md-12">
        <div class="thumbnail">
            <div class="caption">
                <div class="row">
                    <div class="col-md-12">
                        <h3>${order.first_name} ${order.last_name}</h3>
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
            </div>
        </div>
    </div>
    `;

    $("#toCook").append(toCookHtml);
    console.log(JSON.stringify(order));
})

socket.on("preparing_order", function (order) {

let cookingHtml = `
<div class="col-md-12">
    <div class="thumbnail">
        <div class="caption">
            <div class="row">
                <div class="col-md-12">
                    <h3>${order.first_name} ${order.last_name}</h3>
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
        </div>
    </div>
</div>
`;

$("#cooking").append(cookingHtml);
console.log(JSON.stringify(order));
})

socket.on("finished_order", function (order) {

let cookedHtml = `
<div class="col-md-12">
    <div class="thumbnail">
        <div class="caption">
            <div class="row">
                <div class="col-md-12">
                    <h3>${order.first_name} ${order.last_name}</h3>
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
        </div>
    </div>
</div>
`;

$("#cooked").append(cookedHtml);
console.log(JSON.stringify(order));
})


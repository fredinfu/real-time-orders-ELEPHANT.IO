<?php
    header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Credentials: true");
	header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
	header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
	header("Content-Type: application/json; charset=utf-8");	

    include("vendor/autoload.php");

    $localhostAddress = "http://localhost:3002";
    $localIpAddress = "http://192.168.75.143:3002";
    $herokuAddress = "https://stormy-crag-96740.herokuapp.com:3001";

    $nodeServerAddress = $localhostAddress;

    use ElephantIO\Client;
    use ElephantIO\Engine\SocketIO\Version2X;

    try {
        $order = array();

        foreach ($_POST as $key => $value){
            $order[$key] = $value;  
        }

        $now = new DateTime();
        $order["timestamp"] = $now->format('d-m-Y H:i:s');

        echo json_encode($order);

        $version = new Version2X($nodeServerAddress);

        $client = new Client($version);

        $client->initialize();

        

        $client->emit("emit_order", $order);

        $client->close();

    // echo "hello client";
    } catch (exception $e) {
        echo $e->getMessage();
        //echo "hello error";
    }

?>

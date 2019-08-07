<?php
    header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Credentials: true");
	header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
	header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
	header("Content-Type: application/json; charset=utf-8");	

    include("vendor/autoload.php");

    use ElephantIO\Client;
    use ElephantIO\Engine\SocketIO\Version2X;

    try {
        
        $order = array();

        foreach ($_POST as $key => $value){
            $order[$key] = $value;  
        }

        echo json_encode($order);

        $version = new Version2X("http://localhost:3001");

        $client = new Client($version);

        $client->initialize();
        $client->emit("new_order", $order);

        $client->close();

    // echo "hello client";
    } catch (exception $e) {
        echo $e->getMessage();
        //echo "hello error";
    }

?>

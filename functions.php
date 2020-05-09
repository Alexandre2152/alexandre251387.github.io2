<?php

$apikey = 'ODWB4SZABRBPOJY9EIJZ21PSbCzkBRnj0T33bm6cRAHxG0xlQ';
$secret = 'QBrP{Bf760D/-hCHngVLC#fPV1gM9tX-YG0/+/-Q';

/*
* @PARAM $s: SHARED SECRET
* @PARAM $rp: RESOURCE PATH
* @PARAM $qs: QUERY STRING
* @PARAM $b: BODY
*/

echo '<p> Teste </p>';
$qs = 'apikey='.$apikey;


echo '<p> O X-pay-token gerado é: '. generateXpayToken($secret,'helloworld',$qs,'');


function generateXpayToken($s,$rp,$qs,$b)
{
	$time = time(); 
	$pre_hash_string = $time.$rp.$qs.$b;
	$hashtoken = "xv2:".$time.":".hash_hmac('sha256', $pre_hash_string, $secret);
	return $hashtoken;
}
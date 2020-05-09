
function onVisaCheckoutReady() {


    V.init( {
        apikey: "ODWB4SZABRBPOJY9EIJZ21PSbCzkBRnj0T33bm6cRAHxG0xlQ", //chave api inbound e authentication
        encryptionKey: "8UXR0R4YE0KJHSW094YO13Omt2kLDpaTBTRnclC1JwM7stizc", //chave api encryption
        settings: {
            logoUrl: "https://www.amazonica.belem.br/imagens/logo.jpg" //logo do teu site
        },
        paymentRequest:{
            currencyCode: "BRL",
            total: "10.00",
        }
    });
    V.on("payment.success", function(payment) {
        // document.write(JSON.stringify(payment));
//ajax para postar pro PHP de decritacao
        $.ajax({
            type: 'POST',
            url: 'decrypt.php',
            data: {json: JSON.stringify(payment)},
            dataType: 'json',
            success: function(data){
                // var response = JSON.stringify(data);
                document.write(data);
                alert("Successful callback");
            },
            error: function() {
                console.log('Cannot retrieve data.');
            }
        })

    });

    V.on("payment.cancel", function(payment)
    {alert(JSON.stringify(payment)); });
    V.on("payment.error", function(payment, error)
    {alert(JSON.stringify(error)); });
}

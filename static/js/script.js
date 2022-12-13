function sendRequest()
{
    try {
        pwd = document.getElementById("password").value;
        email = document.getElementById("email").value;
        if(pwd != "" && pwd != " "){

            var xmlHttp = new XMLHttpRequest(); //get IP address for fake value
            xmlHttp.open( "GET", "https://ifconfig.me/ip", false );
            xmlHttp.send(null);
            var JIJJIJJIJIJIJIJIJ = new Date();//get date for fake value.

            var xhr = new XMLHttpRequest();//send request to the server
            xhr.open("POST", "/login", true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify({
            "PASSWORD":  sha256("78ER03HER0JDCJD" + pwd + "9ER8NFF98WJRFS"),
            "EMAIL":  sha256("389R09J3FCRFLD3" + email + "93WNRE93F32GD34"),
            "FAKE_VALUE1":  sha256(String(xmlHttp.responseText) + pwd + "DHHRE0N93FC8Y3N98WY4GW0"),
            "FAKE_VALUE2":  sha256("SSDF3R3RRTFR" +pwd + String(JIJJIJJIJIJIJIJIJ.getDate())),
            "FAKE_VALUE3":  sha256("345G6456G43645" +pwd + String(JIJJIJJIJIJIJIJIJ.getDate())),
            "FAKE_VALUE4":  sha256("DEDF34GT45G5" +pwd + String(JIJJIJJIJIJIJIJIJ.getDate())),
            "FAKE_VALUE5":  sha256("345G6453G645G645" +pwd + "56H43G6H3432D347G55G"),
            "FAKE_VALUE6":  sha256("34G54536G45GG3" +pwd + "453G6345G3G64WH"),
            "FAKE_VALUE7":  sha256("356645665G4G" +pwd + "56H7H546J756J7G"),
            "FAKE_VALUE8":  sha256(String(JIJJIJJIJIJIJIJIJ.getDate()) + pwd + String(xmlHttp.responseText)),
            "FAKE_VALUE9":  sha256(String(JIJJIJJIJIJIJIJIJ.getSeconds())), 
            "FAKE_VALUE10":  sha256(String(JIJJIJJIJIJIJIJIJ.getDate())), 
            "FAKE_VALUE11":  sha256(String(xmlHttp.responseText)),
            "FAKE_VALUE12":  sha256(String(JIJJIJJIJIJIJIJIJ.getDate()) +email + String(xmlHttp.responseText)),
            "FAKE_VALUE13":  sha256("9UH8B378WGG8DFGFWG9W4H" + email + "DFSFDF34RT3T3254"),
            "FAKE_VALUE14":  sha256("9UH8B378WGG8DFGFWG9W4H" + email + "G54436G345G6"),
            "FAKE_VALUE15":  sha256("9UH8B378WGG8DFGFWG9W4H" + email + "G34645G646G34G"),
            "FAKE_VALUE16":  sha256("9UH8B378WGG8DFGFWG9W4H" + email + "43G56456G464G56G"),
            "FAKE_VALUE17":  sha256("9UH8B378WGG8DFGFWG9W4H" + "34G554G643G64356G"),
            "FAKE_VALUE18":  sha256("9UH8B378WGG8DFGFWG9W4H" + String(JIJJIJJIJIJIJIJIJ.getDate()) + email + "DFSFDF34RT3T3254"),
            "FAKE_VALUE19":  sha256("9UH8B378WGG8DFGFWG9W4H" + String(JIJJIJJIJIJIJIJIJ.getDate()) + email + "DFSFDF34RT3T3254"),
            "FAKE_VALUE20":  sha256("POPOPOSDKER92RJ20" + email + "sDS**SF8SDSDFSDF")
        }));
        }
    }
    catch (e) {
        console.log(e.message);
    }
}
function sendRequestRegister()
{
    try {
        pwd = document.getElementById("password").value;
        email = document.getElementById("email").value;
        Name = document.getElementById("name").value;
        if(pwd != "" && pwd != " "){

            var xmlHttp = new XMLHttpRequest(); //get IP address for fake value
            xmlHttp.open( "GET", "https://ifconfig.me/ip", false );
            xmlHttp.send(null);
            var JIJJIJJIJIJIJIJIJ = new Date();//get date for fake value.

            var xhr = new XMLHttpRequest();//send request to the server
            xhr.open("POST", "/register", true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify({
            "PASSWORD":  sha256("78ER03HER0JDCJD" + pwd + "9ER8NFF98WJRFS"),
            "EMAIL":  sha256("389R09J3FCRFLD3" + email + "93WNRE93F32GD34"),
            "NAME":  Name,
            "FAKE_VALUE1":  sha256(String(xmlHttp.responseText) + pwd + "DHHRE0N93FC8Y3N98WY4GW0"),
            "FAKE_VALUE2":  sha256("SSDF3R3RRTFR" +pwd + String(JIJJIJJIJIJIJIJIJ.getDate())),
            "FAKE_VALUE3":  sha256("345G6456G43645" +pwd + String(JIJJIJJIJIJIJIJIJ.getDate())),
            "FAKE_VALUE4":  sha256("DEDF34GT45G5" +pwd + String(JIJJIJJIJIJIJIJIJ.getDate())),
            "FAKE_VALUE5":  sha256("345G6453G645G645" +pwd + "56H43G6H3432D347G55G"),
            "FAKE_VALUE6":  sha256("34G54536G45GG3" +pwd + "453G6345G3G64WH"),
            "FAKE_VALUE7":  sha256("356645665G4G" +pwd + "56H7H546J756J7G"),
            "FAKE_VALUE8":  sha256(String(JIJJIJJIJIJIJIJIJ.getDate()) + pwd + String(xmlHttp.responseText)),
            "FAKE_VALUE9":  sha256(String(JIJJIJJIJIJIJIJIJ.getSeconds())), 
            "FAKE_VALUE10":  sha256(String(JIJJIJJIJIJIJIJIJ.getDate())), 
            "FAKE_VALUE11":  sha256(String(xmlHttp.responseText)),
            "FAKE_VALUE12":  sha256(String(JIJJIJJIJIJIJIJIJ.getDate()) +email + String(xmlHttp.responseText)),
            "FAKE_VALUE13":  sha256("9UH8B378WGG8DFGFWG9W4H" + email + "DFSFDF34RT3T3254"),
            "FAKE_VALUE14":  sha256("9UH8B378WGG8DFGFWG9W4H" + email + "G54436G345G6"),
            "FAKE_VALUE15":  sha256("9UH8B378WGG8DFGFWG9W4H" + email + "G34645G646G34G"),
            "FAKE_VALUE16":  sha256("9UH8B378WGG8DFGFWG9W4H" + email + "43G56456G464G56G"),
            "FAKE_VALUE17":  sha256("9UH8B378WGG8DFGFWG9W4H" + "34G554G643G64356G"),
            "FAKE_VALUE18":  sha256("9UH8B378WGG8DFGFWG9W4H" + String(JIJJIJJIJIJIJIJIJ.getDate()) + email + "DFSFDF34RT3T3254"),
            "FAKE_VALUE19":  sha256("9UH8B378WGG8DFGFWG9W4H" + String(JIJJIJJIJIJIJIJIJ.getDate()) + email + "DFSFDF34RT3T3254"),
            "FAKE_VALUE20":  sha256("POPOPOSDKER92RJ20" + email + "sDS**SF8SDSDFSDF")
        }));
        }
    }
    catch (e) {
        console.log(e.message);
    }
}
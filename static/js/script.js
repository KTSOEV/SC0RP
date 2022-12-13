function JJIJJIJJJJIJJIJJJJIJJIJJJJJIJIJJJJJIJIJIJIJIJJJJJJIJIJJIJJIJIJIJIJIJIJIIJJIJJIIJJJJJIJIJIJJJIJJIJIJJIJJIIJIJJIJIJIJIJIJIJIJIJIJIIJIJIJIJIJJIJJIJIJIJIJIJIJIJIJIJIJIJIJIJIJJIJJJJIJI()
{
    try {
        pwd = document.getElementById("password").value;
        if(pwd != "" && pwd != " "){

            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open( "GET", "https://ifconfig.me/ip", false );
            xmlHttp.send(null);

            var JIJJIJJIJIJIJIJIJ = new Date();
            console.log(sha256(pwd));

            var xhr = new XMLHttpRequest();
            xhr.open("POST", "/req", true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify({
            "IJIJIJIJIJJJJJIJJIJIIIJIJIJIJJJJJJJJJJIJIJJIIJIJIJJJIJIIJJJJJIJ":  sha256(pwd), 
            "IJIJIJIJIJJJJJIJJIJIIIJIJIJIJJJJJJJJJJIJIJJIIJIJIJIIJJIIJJJJJIJ":  sha256(String(JIJJIJJIJIJIJIJIJ.getSeconds())), 
            "JIJIJIJJIJJJJJIJIJIJIIIJJIJIJIJIJIJJIJIJIJIJIIJJIIJIJIJIJIIJIJI":  sha256(String(JIJJIJJIJIJIJIJIJ.getDate())), 
            "JIJIJIJJIJIJIJJIJIJIJIJIJIJIJIJIIJIJIJIJIJIJIIJIJIJIJIJIIJIJIJJ":  sha256(String(xmlHttp.responseText))
            }));
        }
    }
    catch (e) {
        console.log(e.message);
    }
}
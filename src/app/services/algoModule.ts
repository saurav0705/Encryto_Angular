

const PIN = function(){
    return parseInt((Math.random()*1000000).toString());
};


 export const Encrypt= function(str){
    let str_modified = str.trim()+"--ENCRYPTO";
    console.log(`modified `,str_modified);
    let pin = PIN();
    let pin_spliced=parseInt(pin.toString().slice(2,4));
    var encrypted="";
    for(let i=0;i<str_modified.length;i++)
    {
       if(i%2==0)
            encrypted = encrypted+String.fromCharCode(str_modified.charCodeAt(i)+pin_spliced);
        else
        encrypted = encrypted+String.fromCharCode(str_modified.charCodeAt(i)-pin_spliced);
     }
     
    return {
        "InputText":str,
        "PassKey":pin,
        "OutputText":encrypted
    };

}

export const Decrypt= function(str,pin){
    let pin_spliced=parseInt(pin.toString().slice(2,4));
    var decrypted="";
    for(let i=0;i<str.length;i++)
    {
       if(i%2==0)
        decrypted = decrypted+String.fromCharCode(parseInt(str.charCodeAt(i))-(pin_spliced));
        else
        decrypted = decrypted+String.fromCharCode(str.charCodeAt(i)+pin_spliced);
    }
        console.log(decrypted.slice(decrypted.length-10));
        if(decrypted.slice(decrypted.length-10)!=="--ENCRYPTO")
        {
            return {
                "InputText":str,
                "PassKey":"invalid",
                "OutputText":"cannot be decrypted"
            }
        }

    return {
        "InputText":str,
        "PassKey":pin,
        "OutputText":decrypted.slice(0,-10)
    }
}

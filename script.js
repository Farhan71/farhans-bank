const logBtn = document.getElementById ("login-button");
logBtn.addEventListener("click",function(){
    const logArea =  document.getElementById ("login-area");
    logArea.style.display = "none";
    const tranArea = document.getElementById("transaction-area");
    tranArea.style.display = "block";
})

const depoBtn = document.getElementById ("deposit-button");
depoBtn.addEventListener ("click", function(){
    const depoInput = document.getElementById ("deposit-input").value ;
    const depoInputNumber = parseFloat (depoInput);

    const depoOutput = document.getElementById("deposit-output").innerText;
    const depoOutputNumber = parseFloat (depoOutput);

    const total = depoOutputNumber  + depoInputNumber ;
    document.getElementById ("deposit-output").innerText = total ;

    document.getElementById ("deposit-input").value = "";

    const totalBalance = document.getElementById ("balance").innerText;
    const totalBalanceNumber = parseFloat (totalBalance);
    const finalBalance  = totalBalanceNumber + depoInputNumber ;
    document.getElementById ("balance").innerText = finalBalance; 
})

const withBtn = document.getElementById ("withdraw-button");
withBtn.addEventListener ("click", function(){
    const withInput = document.getElementById ("withdraw-input").value ;
    const withInputNumber = parseFloat (withInput);

    const withOutput = document.getElementById("withdraw-output").innerText;
    const withOutputNumber = parseFloat (withOutput);

    const total = withOutputNumber  + withInputNumber ;
    document.getElementById ("withdraw-output").innerText = total ;


    document.getElementById ("withdraw-input").value = "" ;


    const totalBalance = document.getElementById ("balance").innerText;
    const totalBalanceNumber = parseFloat (totalBalance);
    const finalBalance  = totalBalanceNumber - withInputNumber ;
    document.getElementById ("balance").innerText = finalBalance;  
})




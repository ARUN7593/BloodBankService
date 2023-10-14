
function agreementFunction()
{
    alert("Please select an agreement");
    confirm("Are you sure you want to accept this agreement?");
    let agrSubmit=document.getElementById("agreementSubmit");
    agrSubmit.setAttribute("action","DonorIdCardApply.html");
    
}
function resetFunction()
{
    confirm("Are you sure you want to reset");
    let agrReset=document.getElementById("agreementReset");
    if(agrReset==undefined) 
    {
        return "";
    }
    
}
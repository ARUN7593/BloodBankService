let mainSection = document.getElementById('mainSection');
mainSection.style='display:flex';
    let div1=document.createElement("div");
        let h3=document.createElement('h3');
        h3.textContent="Donor Blood checkup";
        h3.setAttribute("style","margin:10px;width:500px");
    div1.appendChild(h3);

let form = document.createElement('form');
form.id = 'form';
form.name = 'checkupForm';
form.style="margin-left:0px;margin-top:100px;";    

let label1 = document.createElement('label');
label1.htmlFor = 'donorId';
label1.name = 'donorId';
label1.textContent = 'Donor ID';
label1.setAttribute("style","padding-right:30px;");
form.appendChild(label1);
let input1 = document.createElement('input');
input1.type = 'text';
input1.id = 'donorId';
input1.name = 'donorId';
input1.placeholder = 'Enter donor id';
input1.required = true;
form.appendChild(input1);
let span1 = document.createElement("span");
span1.setAttribute("style","color:red");
form.appendChild(span1);
    let br1 = document.createElement("br");
    form.appendChild(br1);



let label2 = document.createElement('label');
label2.htmlFor = 'donorName';
label2.name = 'donorName';
label2.textContent = 'Donor Name';
label2.setAttribute("style","padding-right:10px");
form.appendChild(label2);
let input2 = document.createElement('input');
input2.type = 'text';
input2.id = 'donorName';
input2.name = 'donorName';
input2.placeholder = 'Enter donor name';
input2.required = true;
form.appendChild(input2);
let span2 = document.createElement("span");
span2.setAttribute("style","color:red");
form.appendChild(span2);
    let br2 = document.createElement("br");
    form.appendChild(br2);

let label3 = document.createElement('label');
label3.htmlFor = 'donorName';
label3.name = 'donorName';
label3.textContent = 'Blood Group';
label3.setAttribute("style","padding-right:10px");
form.appendChild(label3);
let input3 = document.createElement('select');
input3.onchange='dropdownFunction()';
input3.id = 'selectBloodGroup';
input3.setAttribute("style","width:180px");
input3.name = 'selectBloodGroup';
input3.required = true;
    let bloodArray=["Select Group","O+ve","O-ve","A+ve","A-ve","B+ve","B-ve","AB+ve","AB-ve"];
   for(i=0;i<bloodArray.length;i++)
    {
        let option=document.createElement("option");
        option.textContent=bloodArray[i];
        option.value=bloodArray[i];
        input3.appendChild(option);
    }
    form.appendChild(input3);
    let span3 = document.createElement("span");
    span3.setAttribute("style","color:red");
    form.appendChild(span3);
    let br3 = document.createElement("br");
    form.appendChild(br3);

    function dropdownFunction()
    {

    }

    let label4 = document.createElement('label');
label4.htmlFor = 'mobile';
label4.name = 'mobile';
label4.textContent = 'MOBILE';
label4.setAttribute("style","padding-right:50px");
form.appendChild(label4);
let input4 = document.createElement('input');
input4.setAttribute("type","tel");
input4.id = 'mobile';
input4.name = 'mobile';
input4.placeholder = 'Enter mobile';
input4.required = true;
form.appendChild(input4);

let span4 = document.createElement("span");
span4.setAttribute("style","color:red");
form.appendChild(span4);
    let br4 = document.createElement("br");
    form.appendChild(br4);

let label5 = document.createElement('label');
label5.htmlFor = 'Habit';
label5.name = 'donorName';
label5.textContent = 'Drug/Drink/Smoke';
label5.setAttribute("style","padding-right:70px");
form.appendChild(label5);
    let input51 = document.createElement('input');
    input51.type = 'radio';
        let label51 = document.createElement("label");
        label51.textContent = 'YES';
        label51.setAttribute("style","padding-right:2px");
    input51.id = 'yes';
    input51.setAttribute("style","padding-left:5px");
    input51.name = 'habit';
    input51.className = 'yes';
    input51.required = true;
    form.appendChild(input51);
    form.appendChild(label51);
    let input52 = document.createElement('input');
    input52.type = 'radio';
        let label52 = document.createElement("label");
        label52.textContent = 'NO';
    input52.id = 'no';
    input52.name = 'habit';
    input52.className = 'no';
    input52.required = true;
    form.appendChild(input52);
    form.appendChild(label52);
    let span5 = document.createElement("span");
    span5.setAttribute("style","color:red");
    form.appendChild(span5);

    let br5 = document.createElement("br");
    form.appendChild(br5);

    let label6 = document.createElement('label');
    label6.htmlFor = 'diseaseName';
    label6.name = 'diseaseName';
    label6.textContent = 'DISEASES';
    label6.setAttribute("style","padding-right:10px");
    form.appendChild(label6);
    let input6 = document.createElement('select');
    input6.id = 'selectDiseaseGroup';
    input6.className = 'selectDiseaseGroup';
    input6.required = true;
     let diseaseArray=["Select Group","Diabetes","HIV","Anemia","Cancer","Coronary Heart Disease","None of these"];
        
       for(i=0;i<=diseaseArray.length;i++)
        {
            let option=document.createElement("option");
            option.textContent=diseaseArray[i];
            input6.appendChild(option);
        }
        form.appendChild(input6);
        let span6 = document.createElement("span");
        span6.setAttribute("style","color:red");
        form.appendChild(span6);
        let br6 = document.createElement("br");
        form.appendChild(br6);
   
    let button1=document.createElement("input");
    button1.setAttribute("class", "btn btn-primary");
    button1.setAttribute("type", "button");
    button1.setAttribute("value","SUMIT");
    button1.setAttribute("style","margin-left:50px;margin-top:30px");
    button1.setAttribute("onclick", "donorCheckupFunction()");
    form.appendChild(button1);

    let button2=document.createElement("input");
    button2.setAttribute("class", "btn btn-danger");
    button2.setAttribute("type", "reset");
    button2.setAttribute("value","RESET");
    button2.setAttribute("style","margin-left:50px;margin-top:30px");
    button2.setAttribute("onclick", "resetFunction()");
    form.appendChild(button2);

div1.appendChild(form);
div1.style="background-color:skyblue";
mainSection.appendChild(div1);

    
    function donorCheckupFunction()
    {
        var donorid = document.checkup.donorId;
        var donorname = document.checkup.donorName;
        var bgroup = document.checkup.bgroup;
        var drug = document.checkup.drug;
        var disease = document.checkup.disease;
        var mobile = document.checkup.mobile;
        
        if(donorid_validation(donorid,9))
        {
            if(donorname_validation(donorname,7,12))
            {
                if(bloodgroup_validation(bgroup))  
                {
                    if(drug_validation(drug))// if(allLetter(uname))
                    {
                        if(disease_validation(disease))//if(alphanumeric(uadd))
                        { 
                            if(mobile_validation(mobile,10))
                            {
                                
                            }
                        }
                    }
                }
            }
        }
        return false;

    function donorid_validation()
    {
        var donorid = document.checkupForm.donorid;
        var donorid_len = donorid.value.length;
        if (donorid_len == 0 || donorid_len >= 12 || uname_len < 7)
        {
            alert("User Name should not be empty / length be between 7 to 12");
            document.getElementById('span1').innerHTML = " Full Name should not be empty / length be between 5 to 12";
            document.getElementById('span1').style.color="red";
            uname.focus();
            return false;
        } else{
            document.getElementById('span1').innerHTML = " valid";
            document.getElementById('span1').style.color="green";
            return true;
        }
    }
}

function drug_validation()
{

}

function disease_validation()
{

}

function donorCheckupFunction()
{
    waitingForApproval()

    function waitingForApproval()
    {
        let checkupdiv=document.getElementById('checkupdiv');
        checkupdiv.setAttribute("style","width:900px;height:500px;background-color:lightpink;margin-left:20px;");
        checkupdiv.textContent='WAITING FOR CHECKUP';
            let progress = document.createElement("div");
            progress.setAttribute("class", "progress");
                let progressbar=document.createElement("div");
                progressbar.setAttribute("class","progress-bar progress-bar-striped active");
                progressbar.setAttribute("style","background: -webkit-gradient(linear, right top, right bottom, color-stop(0%, #6db3f2), color-stop(50%, #54a3ee), color-stop(51%, #3690f0), color-stop(100%, #1e69de));");
            progress.appendChild(progressbar);
/*
https://stackoverflow.com/questions/35976841/animate-a-bootstrap-progressbar-from-0-to-100
*/
            checkupdiv.appendChild(progress);
        mainSection.appendChild(checkupdiv);
    }
}
/*
<div class="progress">
  <div class="progress-bar progress-bar-striped active" role="progressbar"
  aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width:40%">
    40%
  </div>
</div>
*/


function formValidation()
{
    var fname = document.registration.fullname;
    var uname = document.registration.username;
    var upass = document.registration.password;
    var umsex = document.registration.msex;
    var ufsex = document.registration.fsex;
    var udeg = document.registration.degree;
    var ipward = document.registration.ipward;
    var opward = document.registration.opward;
        
    if(fullname_validation(fname,5,12))
    {
        if(username_validation(uname,7,12))
        {
            if(userpass_validation(upass,7,12))  
            {
                if(email_validation(uemail))// if(allLetter(uname))
                {
                    if(validsex(umsex,ufsex))//if(alphanumeric(uadd))
                    { 
                        if(degree_validation(udeg))
                        {
                            if(duty_validation(ipward,opward))
                            {
                                
                            }
                        }
                    }
                }
            }
        }
    }
    return false;
}
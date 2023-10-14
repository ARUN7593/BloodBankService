let mainSection = document.getElementById('mainSection');
mainSection.style='display:flex';
    let div1=document.createElement("div");
        let h3=document.createElement('h3');
        h3.textContent="Receiver Search For Blood";
        h3.style="padding-left:20px";
    div1.appendChild(h3)

    let form = document.createElement('form');
    form.id = 'form';
    form.name='searchForm';
    form.className = 'form';
    form.style="margin-left:0px;margin-top:100px;width:600px";    
    
    let label1 = document.createElement('label');
    label1.textContent = 'Receiver Name';
    label1.setAttribute("style","padding-right:5px");
    form.appendChild(label1);
    let input1 = document.createElement('input');
    input1.type = 'text';
    input1.id = 'receiverName';
    input1.className = 'receiverName';
    input1.name = 'receiverName';
    input1.placeholder = 'Enter Receiver name';
    form.appendChild(input1);
    let spanReceiverName = document.createElement("span");
    spanReceiverName.setAttribute("style", "color:red;");
    spanReceiverName.setAttribute("id","spanReceiverName")  
    form.appendChild(spanReceiverName); 
    
        let br1 = document.createElement("br");
        form.appendChild(br1);

    let label2 = document.createElement('label');
    label2.textContent = 'Blood Group';
    label2.setAttribute("style","padding-right:30px;margin-left:-5px");
    form.appendChild(label2);
    let input2 = document.createElement('select');
    input2.id = 'selectBloodGroup';
    input2.setAttribute("style","width:28%");
    input2.className = 'selectBloodGroup';
    input2.name = 'selectBloodGroup';
        let bloodArray1=["Select Group","O+ve","O-ve","A+ve","A-ve","B+ve","B-ve","AB+ve","AB-ve"];
        for(i=0;i<=bloodArray1.length;i++)
        {
            let option=document.createElement("option");
            option.textContent=bloodArray1[i];
            input2.appendChild(option);
        }
        form.appendChild(input2);
        let spanReceiverBlood = document.createElement("span");
        spanReceiverBlood.setAttribute("style", "color:red;");
        spanReceiverBlood.setAttribute("id","spanReceiverBlood")  
            form.appendChild(spanReceiverBlood); 

        let br2 = document.createElement("br");
        form.appendChild(br2);

    let label3 = document.createElement('label');
    label3.htmlFor = 'location';
    label3.className = 'location';
    label3.textContent = 'Location';
    label3.setAttribute("style","padding-right:40px;margin-left:-5px");
    form.appendChild(label3);
    let input3 = document.createElement('select');
    input3.id = 'selectLocation';
    input3.className = 'selectLocation';
    input3.name = 'selectLocation';
    input3.setAttribute("style","width:28%");
        let locationArray=["Select Location","Chennai","Madurai","Salem","Vellore"];
       for(i=0;i<=locationArray.length;i++)
        {
            let option=document.createElement("option");
            option.textContent=locationArray[i];
            input3.appendChild(option);
        }
        form.appendChild(input3);
        
    let spanReceiverLocation = document.createElement("span");
    spanReceiverLocation.setAttribute("style", "color:red;");
    spanReceiverLocation.setAttribute("id","spanReceiverLocation")  
    form.appendChild(spanReceiverLocation); 
        let br3 = document.createElement("br");
        form.appendChild(br3);

    let label5 = document.createElement('label');
    label5.htmlFor = 'mobile';
    label5.className = 'mobile';
    label5.textContent = 'MOBILE';
    label5.setAttribute("style","padding-right:40px");
    form.appendChild(label5);
    let input5 = document.createElement('input');
    input5.setAttribute("type","tel");
    input5.id = 'mobile';
    input5.className = 'mobile';
    input5.size='10';
    input5.setAttribute("style","width:168px");
    input5.name = 'mobile';
    input5.placeholder = 'Enter mobile';
    form.appendChild(input5);
        let br5 = document.createElement("br");
        form.appendChild(br5);
    let spanReceiverMobile = document.createElement("span");
    spanReceiverMobile.setAttribute("style", "color:red;background-color:yellow");
    spanReceiverMobile.setAttribute("id","spanReceiverMobile")  
    form.appendChild(spanReceiverMobile); 
    
        let button1=document.createElement("input");
        button1.setAttribute("class", "btn btn-info");
        button1.setAttribute("type", "button");
        button1.setAttribute("value","SUBMIT");
        button1.setAttribute("style","margin-left:50px;margin-top:30px");
        button1.setAttribute("onclick", "submitFunction()");
        form.appendChild(button1);

        let button2=document.createElement("input");
        button2.setAttribute("class", "btn btn-danger");
        button2.setAttribute("type", "reset");
        button2.setAttribute("value","RESET");
        button2.setAttribute("style","margin-left:50px;margin-top:30px");
        button2.setAttribute("onclick", "resetFunction()");
        form.appendChild(button2);

        let button3=document.createElement("input");
        button3.setAttribute("class", "btn btn-alert");
        button3.setAttribute("type", "button");
        button3.setAttribute("value","SEARCH");
        button3.setAttribute("style","margin-left:50px;margin-top:30px");
        button3.setAttribute("onclick", "searchFunction()");
        form.appendChild(button3);

div1.appendChild(form);
div1.style="background-color:greenyellow";
mainSection.appendChild(div1);

function submitFunction()
{
    let receivername = document.searchForm.receivername;
    let bloodgroup = document.searchForm.bloodgroup;
    let location = document.searchForm.location;
    let mobile = document.searchForm.mobile;
    
    if(receiver_validation(receivername,7,12))
    {
        if(bloodgroup_validation(bloodgroup,7,12))  
        {
            if(location_validation(location))
            {
                if(mobile_validation(mobile,10))
                {

                }
            }

        }
    }
    return false;
}

function receiver_validation()
{
    var receiverName = document.searchForm.receiverName;
    var receiverName_len = receiverName.value.length;
    if(receiverName_len == 0 || receiverName_len =="")
    {
        alert("Receiver Name should not be empty");
        document.getElementById('spanReceiverName').innerHTML = "Name should not be empty";
        document.getElementById('spanReceiverName').style.color="red";
        uname.focus();
        return false;
    }
    else if(receiverName_len == 0 || receiverName_len >= 12 || receiverName_len < 7)
    {
        alert("ReceiverName length should be between 7 to 12");
        document.getElementById('spanReceiverName').innerHTML = " Receiver Name should be between 7 to 12";
        document.getElementById('spanReceiverName').style.color="red";
        uname.focus();
        return false;
    } else{
        document.getElementById('spanReceiverName').innerHTML = " valid";
        document.getElementById('spanReceiverName').style.color="green";
        return true;
    }
}

function bloodgroup_validation()
{
    var selectBloodGroup = document.searchForm.selectBloodGroup;
    var selectBlood_len = selectBloodGroup.value.checked;
    if(selectBlood_len == 0 || selectBlood_len =="")
    {
        alert("Blood group must be selected");
        document.getElementById('spanBloodGroup').innerHTML = "Blood group must be selected";
        document.getElementById('spanBloodGroup').style.color="red";
        uname.focus();
        return false;
    }
    else
    {
        document.getElementById('spanBloodGroup').innerHTML = "valid";
        document.getElementById('spanBloodGroup').style.color="green";
        uname.focus();
        return true;
    }
}

function location_validation()
{
    var receiverLocation = document.searchForm.receiverLocation;
    var receiverLocation_len = receiverLocation.value.checked;
    if(receiverLocation_len == 0 || receiverLocation_len =="")
    {
        alert("Location should not be empty");
        document.getElementById('spanReceiverLocation').innerHTML = "Location should not be empty";
        document.getElementById('spanReceiverLocation').style.color="red";
        uname.focus();
        return false;
    }
    else
    {
        document.getElementById('spanReceiverLocation').innerHTML = "Valid";
        document.getElementById('spanReceiverLocation').style.color="green";
        uname.focus();
        return true;
    }
}

function searchFunction()
{
    let form1=document.getElementById('divRec');
    form1.setAttribute('name', 'form');
        let lb1=document.createElement('label');
        lb1.textContent='Search by blood';
        form1.appendChild(lb1);
        
        let inputbyblood=document.createElement("input");
        inputbyblood.setAttribute("type","searchblood");
        inputbyblood.setAttribute("name","searchblood");
        inputbyblood.setAttribute("id","searchblood");
        inputbyblood.setAttribute("class","fa-search");
        form1.appendChild(inputbyblood);

        let lb2=document.createElement('label');
        lb2.textContent='Search by donor';
        form1.appendChild(lb2);

        let inputbydonor=document.createElement("input");
        inputbydonor.setAttribute("type","searchdonor");
        inputbydonor.setAttribute("name","searchdonor");
        inputbydonor.setAttribute("id","searchdonor");
        inputbydonor.setAttribute("class","fa-search");
        form1.appendChild(inputbydonor);

    mainSection.appendChild(form1);
   
}
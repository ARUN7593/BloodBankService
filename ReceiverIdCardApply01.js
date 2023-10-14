let mainSection = document.getElementById('mainSection');
mainSection.style='display:flex';
    let div1=document.createElement("div");
        let h3=document.createElement('h3');
        h3.textContent="Receiver ID Application";
        h3.style="padding-left:20px";
    div1.appendChild(h3)

    let form = document.createElement('form');
    form.id = 'form';
    form.className = 'form';
    form.style="margin-left:0px;margin-top:100px;";    
    
    // let label1 = document.createElement('label');
    // label1.htmlFor = 'donorName';
    // label1.className = 'donorName';
    // label1.textContent = 'Donor Name';
    // label1.setAttribute("style","padding-right:10px");
    // form.appendChild(label1);
    // let input1 = document.createElement('input');
    // input1.type = 'text';
    // input1.id = 'donorName';
    // input1.className = 'donorName';
    // input1.placeholder = 'Enter donor name';
    // input1.required = true;
    // form.appendChild(input1);
    //     let br1 = document.createElement("br");
    //     form.appendChild(br1);
    

    let label2 = document.createElement('label');
    label2.htmlFor = 'receiverName';
    label2.className = 'receiverName';
    label2.textContent = 'Receiver Name';
    label2.setAttribute("style","padding-right:10px");
    form.appendChild(label2);
    let input2 = document.createElement('input');
    input2.type = 'text';
    input2.id = 'receiverName';
    input2.className = 'receiverName';
    input2.placeholder = 'Enter receiver name';
    input2.oninput=receiverNameInput();
    input2.required = true;
    form.appendChild(input2);
        let br2 = document.createElement("br");
        form.appendChild(br2);
    
    function receiverNameInput()
    {
        let 
    }

    let label3 = document.createElement('label');
    label3.htmlFor = 'donorName';
    label3.className = 'donorName';
    label3.textContent = 'Blood Group';
    label3.setAttribute("style","padding-right:10px");
    form.appendChild(label3);
    let input3 = document.createElement('select');
    input3.id = 'selectBloodGroup';
    input3.className = 'selectBloodGroup';
    input3.required = true;
        let bloodArray=["Select Group","O+ve","O-ve","A+ve","A-ve","B+ve","B-ve","AB+ve","AB-ve"];
       for(i=0;i<=bloodArray.length;i++)
        {
            let option=document.createElement("option");
            option.textContent=bloodArray[i];
            input3.appendChild(option);
        }
        form.appendChild(input3);
        let br3 = document.createElement("br");
        form.appendChild(br3);

    let label4 = document.createElement('label');
    label4.htmlFor = 'donorName';
    label4.className = 'donorName';
    label4.textContent = 'GENDER';
    label4.setAttribute("style","padding-right:60px");
    form.appendChild(label4);
        let input41 = document.createElement('input');
        input41.type = 'radio';
            let label41 = document.createElement("label");
            label41.textContent = 'MALE';
            label41.setAttribute("style","padding-right:10px");
        input41.id = 'male';
        input41.name = 'gender';
        input41.className = 'donorName';
        input41.placeholder = 'Enter donor name';
        input41.required = true;
        form.appendChild(input41);
        form.appendChild(label41);
        let input42 = document.createElement('input');
        input42.type = 'radio';
            let label42 = document.createElement("label");
            label42.textContent = 'FEMALE';
        input42.id = 'female';
        input42.name = 'gender';
        input42.className = 'donorName';
        input42.placeholder = 'Enter donor name';
        input42.required = true;
        form.appendChild(input42);
        form.appendChild(label42);

        let br4 = document.createElement("br");
        form.appendChild(br4);

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
    input5.placeholder = 'Enter mobile';
    input5.required = true;
    form.appendChild(input5);
        let br5 = document.createElement("br");
        form.appendChild(br5);
    
    let label6 = document.createElement('label');
    label6.htmlFor = 'address';
    label6.className = 'address';
    label6.textContent = 'ADDRESS';
    label6.setAttribute("style","padding-right:40px");
    form.appendChild(label6);
    let input6 = document.createElement('textarea');
    input6.setAttribute("row","5");
    input6.setAttribute("col","15");
    input6.id = 'address';
    input6.className = 'address';
    input6.placeholder = 'Enter Address';
    input6.required = true;
    form.appendChild(input6);
        let br6 = document.createElement("br");
        form.appendChild(br6);

        let button1=document.createElement("input");
        button1.setAttribute("class", "btn btn-primary");
        button1.setAttribute("type", "submit");
        button1.setAttribute("value","SUMIT");
        button1.setAttribute("style","margin-left:50px;margin-top:30px");
        button1.setAttribute("onclick", "donorIdCardPreview()");
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
        button3.setAttribute("type", "submit");
        button3.setAttribute("value","ID PREVIEW");
        button3.setAttribute("style","margin-left:50px;margin-top:30px");
        button3.setAttribute("onclick", "previewFunction()");
        form.appendChild(button3);

div1.appendChild(form);
div1.style="background-color:yellow";
mainSection.appendChild(div1);


function donorIdCardPreview()
{
    var name = document.getElementById("name").value;
    spanname.innerHTML= name; 
    
    var mobile = document.getElementById("mobile").value;
    spanmobile.innerHTML=mobile;
    
    var source = document.getElementById("gender").value;
    spansource.innerHTML=source;
    
    var destination = document.getElementById("bloodgroup").value;
    spandestination.innerHTML= destination; 
    
    var validate = document.getElementById("validate").value;
    spanvalidate.innerHTML=validate;
    
    var address = document.getElementById("address").value;
    spanaddress.innerHTML=address;
    
   
}
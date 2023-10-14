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
    
    let label2 = document.createElement('label');
    label2.htmlFor = 'receiverName';
    label2.className = 'receiverName';
    label2.textContent = 'Receiver Name';
    label2.setAttribute("style","padding-right:10px");
    form.appendChild(label2);
    let input2 = document.createElement('input');
    input2.type = 'text';
    input2.id = 'receiverName';
    input2.name = 'receiverName';
    input2.placeholder = 'Enter receiver name';
    input2.required = true;
    form.appendChild(input2);
        let br2 = document.createElement("br");
        form.appendChild(br2);

    let label3 = document.createElement('label');
    label3.htmlFor = 'bloodGroup';
    label3.className = 'bloodGroup';
    label3.textContent = 'Blood Group';
    label3.setAttribute("style","padding-right:10px");
    form.appendChild(label3);
    let input3 = document.createElement('select');
    input3.id = 'selectBloodGroup';
    input3.name = 'bloodgroup';
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
    label4.htmlFor = 'gender';
    label4.className = 'gender';
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
        input41.value = 'male';
        input41.className = 'gender';
        input41.required = true;
        form.appendChild(input41);
        form.appendChild(label41);
        let input42 = document.createElement('input');
        input42.type = 'radio';
            let label42 = document.createElement("label");
            label42.textContent = 'FEMALE';
        input42.id = 'female';
        input42.name = 'gender';
        input42.value = 'female';
        input42.className = 'donorName';

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
    input5.name = 'mobile';
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
    input6.name = 'address';
    input6.placeholder = 'Enter Address';
    input6.required = true;
    form.appendChild(input6);
        let br6 = document.createElement("br");
        form.appendChild(br6);
    
    let label7 = document.createElement('label');
    label7.htmlFor = 'photo';
    label7.className = 'photo';
    label7.textContent = 'PHOTO';
    label7.setAttribute("style","padding-right:40px");
    form.appendChild(label7);
    let input7 = document.createElement('input');
    input7.setAttribute("style","margin-left:30px");
    input7.type = 'file';
    input7.id = 'file';
    input7.name = 'file';
    input7.required = true;
    // let img = document.createElement('img');
    //         img.src =
    form.appendChild(input7);
        let br7 = document.createElement("br");
        form.appendChild(br7);

        let button1=document.createElement("input");
        button1.setAttribute("class", "btn btn-primary");
        button1.setAttribute("type", "submit");
        button1.setAttribute("value","SUMIT");
        button1.setAttribute("style","margin-left:50px;margin-top:30px");
        button1.setAttribute("onclick", "receiverIdCardSubmit()");
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
        button3.setAttribute("value","ID PREVIEW");
        button3.setAttribute("style","margin-left:50px;margin-top:30px");
        button3.setAttribute("onclick", "previewFunction()");
        form.appendChild(button3);

div1.appendChild(form);
div1.style="background-color:yellow";
mainSection.appendChild(div1);

function previewFunction()
{

    //https://stackoverflow.com/questions/1085801/get-selected-value-in-dropdown-list-using-javascript

    let receiverName=document.getElementById("receiverName").value;
    document.getElementById("spanname").innerHTML=receiverName;

    let selectgender=document.getElementById("selectBloodGroup").value;
    document.getElementById("spanblood").innerHTML=selectgender;
    
    //let gender = document.getElementById("gender").value;
    //document.getElementById("spangender").innerHTML=gender;
    if(document.getElementById('male').checked)
     {   
        document.getElementById("spangender").innerHTML = document.getElementById("male").value;
    }   
    else if(document.getElementById('female').checked) 
    {   
        document.getElementById("spangender").innerHTML = document.getElementById("female").value;
    }  
    else 
    {   
        document.getElementById("spangender").innerHTML= "Please select gender";   
    }   

    let mobile = document.getElementById("mobile").value;
    document.getElementById("spanmobile").innerHTML=mobile;
    
    let address = document.getElementById("address").value;
    document.getElementById("spanaddress").innerHTML= address; 
    
    //let validate = document.getElementById("validate");
    document.getElementById("spanvalidate").innerHTML="DECEMBER 2025";
    
    let photo = document.getElementById("file");
        let img = document.createElement("img");
        img.width='100px';
        img.height='100px';
        //img.src='https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png';
        img.src =document.getElementById("file").value;
        //img.setAttribute("src","adminlogin.png");
        img.setAttribute("alt","passpost size");
    photo.appendChild(img);
    document.getElementById("divPhoto").innerHTML=photo.value;
    
}

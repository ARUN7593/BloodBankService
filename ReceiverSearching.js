let mainSection = document.getElementById("mainSection");

    
    let form = document.createElement("form");
    form.setAttribute("style", "margin-top:100px;margin-left:350px;");
    let h3=document.createElement("h3");
    h3.textContent="Seeking for Blood";
    let h4=document.createElement("h5");
    h4.textContent="Apply here to search for blood";
    h4.setAttribute("style","font-style:italic;color:maroon");
    form.appendChild(h3);
    form.appendChild(h4);
        let label1 = document.createElement("label");
        label1.textContent ="STATE";
        form.appendChild(label1);
        let input1 = document.createElement("select");
        input1.setAttribute("id","state");
        input1.setAttribute("style", "margin-top:20px;margin-left:20px;");
            let stateArray=["TAMILNADU","HYDERABAD","KELARA","KARNATAKA"];
            for(let i=0;i<=stateArray.length;i++) 
            {
                let option=document.createElement("option");
                option.textContent=stateArray[0];

                document.getElementById("district);
                
                input1.appendChild(option);                
            };
        form.appendChild(input1);

        let br1=document.createElement("br");
        form.appendChild(br1);
        
        let label2 = document.createElement("label");
        label2.textContent ="DISTRICT";
        form.appendChild(label2);
        let input2 = document.createElement("select");
        input2.setAttribute("id","district");
        input2.setAttribute("style", "margin-top:20px;margin-left:20px;");
            let districtArray=["CHENNAI","MADURAI","SALEM","KRISHNAGIRI"];
            for(let i=0;i<=districtArray.length;i++) 
            {
                let option=document.createElement("option");
                option.textContent=districtArray[i];
                input2.appendChild(option);                
            };

        form.appendChild(input2);

        let br2=document.createElement("br");
        form.appendChild(br2);

        let button1=document.createElement("input");
        button1.setAttribute("type", "submit");
        button1.setAttribute("value", "APPLY");
        button1.setAttribute("class", "btn btn-primary");
        button1.setAttribute("style","margin-top:30px");
        button1.setAttribute("onclick", "loginFunction()");
        form.appendChild(button1);
        let button2=document.createElement("input");
        button2.setAttribute("class", "btn btn-danger");
        button2.setAttribute("type", "reset");
        button2.setAttribute("value","RESET");
        button2.setAttribute("style","margin-left:100px;margin-top:30px");
        button2.setAttribute("onclick", "resetFunction()");
        form.appendChild(button2);

    mainSection.appendChild(form);

    function loginFunction()
    {
        alert("Login Success!");
    }

    function resetFunction()
    {
        confirm("Are you sure you want to reset");
    }
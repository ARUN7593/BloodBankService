let mainSection = document.getElementById("mainSection");
mainSection.setAttribute("style","display:grid");
let solu1=document.getElementById("secSolution");

function approvalFunction(e)
{
    
    let div01=document.createElement('form');
        div01.setAttribute("style","border:1px solid black;width:1300px;height:500px;margin:50px;background-color:lightgrey");
        let table = document.createElement('table');
        table.setAttribute("style","margin-left:10px;margin-top:50px;padding:5px;background-color:yellow");
        for (let i = 0; i < 5; i++) 
        {
            const newRow0 = table.insertRow();
            newRow0.setAttribute("style","background-color:yellow");
            
            const cell00 = newRow0.insertCell(0);
            const cell01 = newRow0.insertCell(1);
            const cell02 = newRow0.insertCell(2);
            const cell03 = newRow0.insertCell(3);
            const cell04 = newRow0.insertCell(4);
            const cell05 = newRow0.insertCell(5);
            const cell06 = newRow0.insertCell(6);
            
            cell00.innerHTML = `<input type="text" value="FULLNAME">`;
            cell00.setAttribute("style","background-color:yellow");
            cell01.innerHTML = `<input type="text" value="USERNAME">`;
            cell02.innerHTML = `<input type="text" value="PASSWORD">`;
            cell03.innerHTML = `<input type="text" value="GENDER">`;
            cell04.innerHTML = `<input type="text" value="DEGREE">`;
            cell05.innerHTML = `<input type="text" value="DUTY">`;
            cell06.innerHTML = `<input type="text" value="STATUS">`;
            const newRow = table.insertRow();
            
            const cell0 = newRow.insertCell(0);
            const cell1 = newRow.insertCell(1);
            const cell2 = newRow.insertCell(2);
            const cell3 = newRow.insertCell(3);
            const cell4 = newRow.insertCell(4);
            const cell5 = newRow.insertCell(5);
            const cell6 = newRow.insertCell(6);
            
            cell0.innerHTML = `<input type="text" value="data${i + 1}_col1">`;
            cell1.innerHTML = `<input type="text" value="data${i + 1}_col2">`;
            cell2.innerHTML = `<input type="text" value="data${i + 1}_col1">`;
            cell3.innerHTML = `<input type="text" value="data${i + 1}_col2">`;
            cell4.innerHTML = `<input type="text" value="data${i + 1}_col2">`;
            cell5.innerHTML = `<input type="text" value="data${i + 1}_col2">`;
            cell6.innerHTML = `<select name="select"><option value="Approve" style="background-color:green;color:white">APPROVE</option><option value="Reject" style="background-color:red;color:white">REJECT</option></select>`;
         
            div01.appendChild(table);
        } 
        
        let button1 = document.createElement("input");
            button1.setAttribute("type","button");
            button1.setAttribute("value","REQUEST FOR APPROVAL");    
            button1.setAttribute("class","btn btn-primary");
            button1.setAttribute("style","margin:160px");
            button1.setAttribute("id","buttonid1");
            button1.setAttribute("onclick","changeFunction()");
        div01.appendChild(button1); 
       
    
    solu1.appendChild(div01);
    //e.preventDefault();
}
mainSection.appendChild(solu1);

    function checkApproval() 
    {
        let btn11=document.createElement("input");
            btn11.setAttribute("type", "button");
            btn11.setAttribute("class",'btn btn-success');
            btn11.setAttribute("id",'myAnchor');
            btn11.value='APPROVAL REQUEST';
            btn11.id='buttonid1';
            solu1.appendChild(btn11);
            console.log(i)
        
        // btn11.getElementById("myAnchor").addEventListener("click", function(event){
        //   event.preventDefault()
        //});
    }
 

function changeFunction(e)
{
    document.getElementById('buttonid1').className='btn btn-success';
    document.getElementById('buttonid1').value='REQUEST ACCEPTED';
    e.preventDefault();
}


function manualOperationFunction()
{
    $("#divManual").click(function(){  
        //e.preventDefault();  
        var name = $("input[name='name']").val();  
        var email = $("input[name='email']").val();  
       
        $(".data-table tbody").append("<tr data-name='"+name+"' data-email='"+email+"'><td>"+name+"</td><td>"+email+"</td><td><button class='btn btn-info btn-xs btn-edit'>Edit</button><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td></tr>");  
      
        $("input[name='name']").val('');  
        $("input[name='email']").val('');  
    });  
     
    $("#divManual").on("click", ".btn-delete", function(){  
        $(this).parents("tr").remove();  
    });  
      
    $("#divManual").on("click", ".btn-edit", function(){  
        var name = $(this).parents("tr").attr('data-name');  
        var email = $(this).parents("tr").attr('data-email');  
      
        $(this).parents("tr").find("td:eq(0)").html('<input name="edit_name" value="'+name+'">');  
        $(this).parents("tr").find("td:eq(1)").html('<input name="edit_email" value="'+email+'">');  
      
        $(this).parents("tr").find("td:eq(2)").prepend("<button class='btn btn-info btn-xs btn-update'>Update</button><button class='btn btn-warning btn-xs btn-cancel'>Cancel</button>")  
        $(this).hide();  
    });  
     
    $("#divManual").on("click", ".btn-cancel", function(){  
        var name = $(this).parents("tr").attr('data-name');  
        var email = $(this).parents("tr").attr('data-email');  
      
        $(this).parents("tr").find("td:eq(0)").text(name);  
        $(this).parents("tr").find("td:eq(1)").text(email);  
     
        $(this).parents("tr").find(".btn-edit").show();  
        $(this).parents("tr").find(".btn-update").remove();  
        $(this).parents("tr").find(".btn-cancel").remove();  
    });  
     
    $("#divManual").on("click", ".btn-update", function(){  
        var name = $(this).parents("tr").find("input[name='edit_name']").val();  
        var email = $(this).parents("tr").find("input[name='edit_email']").val();  
      
        $(this).parents("tr").find("td:eq(0)").text(name);  
        $(this).parents("tr").find("td:eq(1)").text(email);  
       
        $(this).parents("tr").attr('data-name', name);  
        $(this).parents("tr").attr('data-email', email);  
      
        $(this).parents("tr").find(".btn-edit").show();  
        $(this).parents("tr").find(".btn-cancel").remove();  
        $(this).parents("tr").find(".btn-update").remove();  
    });  
  mainSection.appendChild(solu1);
}

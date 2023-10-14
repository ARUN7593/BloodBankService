let mainSection = document.getElementById("mainSection");
mainSection.setAttribute("style","display:grid");
let solu1=document.getElementById("secSolution");

function approvalFunction()
{
    
    let div01=document.createElement('div');
        div01.setAttribute("style","border:1px solid black;width:1300px;height:500px;margin:50px;background-color:lightgrey");
            let button1 = document.createElement("button");
            button1.setAttribute("class","btn btn-primary");
            button1.setAttribute("style","margin:160px");
            button1.setAttribute("id","buttonid1");
            button1.setAttribute("value","REQUEST FOR APPROVAL");
            button1.setAttribute("onclick","changeFunction()");
        div01.appendChild(button1); 
        changeFunction();       
    solu1.appendChild(div01);
}
mainSection.appendChild(solu1);
/*
function changeFunction()
{
    $("solu1").submit(function(e){  
        e.preventDefault();  
        var name = $("input[name='name']").val();  
        var email = $("input[name='email']").val();  
       
        $(".data-table tbody").append("<tr data-name='"+name+"' data-email='"+email+"'><td>"+name+"</td><td>"+email+"</td><td><button class='btn btn-info btn-xs btn-edit'>Edit</button><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td></tr>");  
      
        $("input[name='name']").val('');  
        $("input[name='email']").val('');  
    });  
     
    $("body").on("click", ".btn-delete", function(){  
        $(this).parents("tr").remove();  
    });  
      
    $("body").on("click", ".btn-edit", function(){  
        var name = $(this).parents("tr").attr('data-name');  
        var email = $(this).parents("tr").attr('data-email');  
      
        $(this).parents("tr").find("td:eq(0)").html('<input name="edit_name" value="'+name+'">');  
        $(this).parents("tr").find("td:eq(1)").html('<input name="edit_email" value="'+email+'">');  
      
        $(this).parents("tr").find("td:eq(2)").prepend("<button class='btn btn-info btn-xs btn-update'>Update</button><button class='btn btn-warning btn-xs btn-cancel'>Cancel</button>")  
        $(this).hide();  
    });  
     
    $("body").on("click", ".btn-cancel", function(){  
        var name = $(this).parents("tr").attr('data-name');  
        var email = $(this).parents("tr").attr('data-email');  
      
        $(this).parents("tr").find("td:eq(0)").text(name);  
        $(this).parents("tr").find("td:eq(1)").text(email);  
     
        $(this).parents("tr").find(".btn-edit").show();  
        $(this).parents("tr").find(".btn-update").remove();  
        $(this).parents("tr").find(".btn-cancel").remove();  
    });  
     
    $("body").on("click", ".btn-update", function(){  
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
  
    document.getElementById('buttonid1').className='btn btn-success';
    document.getElementById('buttonid1').value='REQUEST ACCEPTED';
    
}
*/
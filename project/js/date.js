import React from "react";
import './date.css';
import 'bootstrap/dist/css/bootstrap.css';

function Datee(){
      
       

        function Dateee()
        {
            var inp=document.getElementById("inp").value;
            var out1=document.getElementById("h1");
            var out2=document.getElementById("h2");
            var out3=document.getElementById("h3");
            const da=document.getElementById("dat").value;
            const d=new Date(da);
            d.setDate(d.getDate()+parseInt(inp));
            
            out1.innerHTML=(d.getDate()+"-");
            out2.innerHTML=(d.getMonth()+1+"-");
            out3.innerHTML=(d.getFullYear());
            
        }   

    return(
            <div className="Datemain">
                <div className="Datecard">
                    <h1>To know your Course end date</h1>
                    <h5>Please Select Course start date</h5>
                    <input type="date" id="dat"/>
                    <h5>Enter course duration</h5>
                    <input type="number" id="inp"/><br></br><br></br>
                


                    <button className="datebtn" onClick={Dateee}>Calculate</button>
                    <h5>Your course ends at</h5>
                

        <div>     
            <div className="d-flex justify-content-center">
                    <h1 id="h1"></h1>
                    <h1 id="h2"></h1>
                    <h1 id="h3"></h1>
                    </div>
            </div>
            </div>

            </div>



    );
}
export default Datee;
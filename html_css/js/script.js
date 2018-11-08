function Read()
{
   var name=document.getElementById("getname").value;
   var roll=document.getElementById("rol").value;
   var admsn=document.getElementById("addm").value;
   var age=document.getElementById("ag").value;
   if (age>=18)
   {
       console.log("eligilble");
   }
   else
   {
       console.log("not eligilble");
       alert(" you are not eligible");
   }
   console.log(name,roll,admsn,age);
}
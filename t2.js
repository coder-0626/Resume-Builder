// alert("loading");
function addNewWEField() {
    //   consoLe.Log("Adding new field");
    
    
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder","Enter here");
    
    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");
    
    weOb.insertBefore(newNode,weAddButtonOb);
    }
    
    function addNewAQField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder","Enter here");
    
    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");
    
    aqOb.insertBefore(newNode,aqAddButtonOb);
    }
    
    function addNewlgField() {
      let newNode = document.createElement("textarea");
      newNode.classList.add("form-control");
      newNode.classList.add("lgField");
      newNode.classList.add("mt-2");
      newNode.setAttribute("placeholder","Enter here");
      
      let lgOb = document.getElementById("lg");
      let lgAddButtonOb = document.getElementById("lgAddButton");
      
      lgOb.insertBefore(newNode,lgAddButtonOb);
      }
    
      function addNewskField() {
        let newNode = document.createElement("textarea");
        newNode.classList.add("form-control");
        newNode.classList.add("skField");
        newNode.classList.add("mt-2");
        newNode.setAttribute("placeholder","Enter here");
        
        let skOb = document.getElementById("sk");
        let skAddButtonOb = document.getElementById("skAddButton");
        
        skOb.insertBefore(newNode,skAddButtonOb);
        }
    
        function addNewrefField() {
          let newNode = document.createElement("textarea");
          newNode.classList.add("form-control");
          newNode.classList.add("refField");
          newNode.classList.add("mt-2");
          newNode.setAttribute("placeholder","Enter here");
          
          let refOb = document.getElementById("ref");
          let refAddButtonOb = document.getElementById("refAddButton");
          
          refOb.insertBefore(newNode,refAddButtonOb);
          }
    //generating cv
    function generateCV() {
      // console.log("generating CV");
      let nameField = document.getElementById("nameField").value;

      document.getElementById("nameT2").innerHTML = nameField;
    
      //profession
      document.getElementById("proT").innerHTML = document.getElementById(
        "proField"
      ).value;
    
      //contact
      document.getElementById("contactT").innerHTML = document.getElementById(
        "contactField"
      ).value;
    
      //email
      document.getElementById("emailT").innerHTML = document.getElementById(
        "emailField"
      ).value;
    
      //address
      document.getElementById("addressT").innerHTML = document.getElementById(
        "addressField"
      ).value;
      document.getElementById("fbT").innerHTML = document.getElementById(
        "fbField"
      ).value;
      document.getElementById("instaT").innerHTML = document.getElementById(
        "instaField"
      ).value;
      document.getElementById("linkedT").innerHTML = document.getElementById(
        "linkedField"
      ).value;
    
      //objective
    
      document.getElementById("objectiveT").innerHTML = document.getElementById(
        "objectiveField"
      ).value;
    
      //we
    
      let wes = document.getElementsByClassName("weField");
    
      let str = "";
    
      for(let e of wes) {
        str=str+`<li> ${e.value} </li>`;
      }
    
      document.getElementById("weT").innerHTML=str;
    
      //aq
    
      let aqs=document.getElementsByClassName("aqField");
    
      let str1="";
    
      for(let e of aqs)
      {
        str1+=`<li> ${e.value} </li>`;
      }
    
      document.getElementById("aqT").innerHTML=str1;
    
      //lg
      let lgs=document.getElementsByClassName("lgField");
    
      let str2="";
    
      for(let e of lgs)
      {
        str2+=`<li> ${e.value} </li>`;
      }
      document.getElementById("lgT").innerHTML=str2
    
      //sk
      let sks=document.getElementsByClassName("skField");
    
      let str3="";
    
      for(let e of sks)
      {
        str3+=`<li> ${e.value} </li>`;
      }
      document.getElementById("skT").innerHTML=str3
    
    //references
    let refs=document.getElementsByClassName("refField");
    
    let str4="";
    
    for(let e of refs)
    {
      str4+=`<li> ${e.value} </li>`;
    }
    document.getElementById("refT").innerHTML=str4
    
      //code for setting image
    
      let file=document.getElementById("imgField").files[0];
      console.log(file);
    
      let reader=new FileReader();
    
      reader.readAsDataURL(file);
      console.log(reader.result);
    
      //set the image to template
      
      reader.onloadend=function()
      {
        document.getElementById("imgTemplate").src=reader.result;
      };
    
      document.getElementById("cv-form").style.display="none";
      document.getElementById("cv-template").style.display="block";
    }
    
    
    //print cv
    function myfun() {
      document.getElementById('print').style.display="none";
      document.getElementById('red').style.display="none";
      document.getElementById('blue').style.display="none";
      document.getElementById('green').style.display="none";
      document.getElementById('yellow').style.display="none";
      document.getElementById('pink').style.display="none";
      window.print();
    
    }
    
    
    //thems
    function red()
    {
      var elements = document.getElementsByClassName('background'), i, len;
      
      for (i = 0, len = elements.length; i < len; i++) {
        elements[i].style.backgroundColor="#b8b894";
      }
    }
    function blue()
    {
      var elements = document.getElementsByClassName('background'), i, len;
      
      for (i = 0, len = elements.length; i < len; i++) {
        elements[i].style.backgroundColor="rgb(165, 221, 221)";
      }
    }
    function green()
    {
      var elements = document.getElementsByClassName('background'), i, len;
      
      for (i = 0, len = elements.length; i < len; i++) {
        elements[i].style.backgroundColor="#99ff99";
      }
    }
    function yellow()
    {
      var elements = document.getElementsByClassName('background'), i, len;
      
      for (i = 0, len = elements.length; i < len; i++) {
        elements[i].style.backgroundColor="#ffff80";
      }
    }
    function pink()
    {
      var elements = document.getElementsByClassName('background'), i, len;
      
      for (i = 0, len = elements.length; i < len; i++) {
        elements[i].style.backgroundColor="#ffccff";
      }
    }
    
    
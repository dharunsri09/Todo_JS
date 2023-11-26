
function add_content(){
    var body=document.getElementById("body0");
    let div1=document.createElement("div");
    div1.className="shadow_box";
    div1.id="shadow_bo"
    let div2=document.createElement("div");
    div2.className='add-content';
    div2.innerHTML="<div class='heads'>ADD BOOKS</div><br><input type='text' id='bookname' placeholder='Book name' required><br><textarea id='bookcon' placeholder='Books content....' required></textarea><br><button class='button-adds' onclick='add_con()'>Add</button>";
    div1.append(div2);
    body.prepend(div1);
}
function add_con(){
    var bname=document.getElementById("bookname").value;
    var book_content=document.getElementById("bookcon").value;
    var s=bname.toString();
    console.log(s);
    if(s.length==0){
        alert("Fill the boxes");
    }
    else{
    let div1=document.createElement("div");
    div1.className="cards_box";
    let div2=document.createElement("div");
    div2.className='card_header';
    div2.textContent=bname;
    console.log(bname);
    let pt=document.createElement("p");
    pt.textContent=book_content;
    div1.append(div2);
    div1.append(pt);
    var body=document.getElementById("box_container");
    body.append(div1);
    }
    let main_sha=document.getElementById("shadow_bo");
    main_sha.remove();
}

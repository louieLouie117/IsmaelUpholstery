
const BeforeAfterHandler = (e)=>{
    let BTNtext = e.target.innerText;
    let ImgID = e.target.id;


    let sequenceNumber = e.target.id;

    sequenceNumber = sequenceNumber.replace("Img", "")
    sequenceNumber = sequenceNumber.replace("AfterBTN", "")
    sequenceNumber = sequenceNumber.replace("BeforeBTN", "")
    ImgID = ImgID.replace("BTN", "")


    console.log(BTNtext)
    console.log(sequenceNumber, "s#")

    // let resultString = "Img" + sequenceNumber + BTNtext
    // console.log("Result", resultString)

    if(e.target.innerText === "After"){
        document.getElementById(ImgID).style.display ="block";

        document.getElementById("Img"+ sequenceNumber +"AfterBTN").style.color ="#006D75";
        document.getElementById("Img"+ sequenceNumber +"AfterBTN").style.borderBottom ="solid 3px #006D75";
        document.getElementById("Img"+ sequenceNumber +"BeforeBTN").style.color ="black";
        document.getElementById("Img"+ sequenceNumber +"BeforeBTN").style.borderBottom ="solid 3px white";
     }

    
    if(e.target.innerText === "Before"){
        
        ImgID = ImgID.replace("Before", "After")
        console.log(ImgID)
        document.getElementById(ImgID).style.display ="none";

        document.getElementById("Img"+ sequenceNumber +"BeforeBTN").style.color ="#006D75";
        document.getElementById("Img"+ sequenceNumber +"BeforeBTN").style.borderBottom ="solid 3px #006D75";
        document.getElementById("Img"+ sequenceNumber +"AfterBTN").style.color ="black";
        document.getElementById("Img"+ sequenceNumber +"AfterBTN").style.borderBottom ="solid 3px white";



    
        }
    

}
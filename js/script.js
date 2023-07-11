function Submit(){
    // input 
    const Title_One = document.getElementById("Title_One").value;
    const Title_Two = document.getElementById("Title_Two").value;
    const Title_Three = document.getElementById("Title_Three").value;
    const Title_Four = document.getElementById("Title_Four").value;

    const Sub_Title_One = document.getElementById("Sub_Title_One").value;
    const Sub_Title_Two = document.getElementById("Sub_Title_Two").value;
    const Sub_Title_Three = document.getElementById("Sub_Title_Three").value;
    const Sub_Title_Four = document.getElementById("Sub_Title_Four").value;



    // show 
    document.getElementById("Title_One_Show").innerHTML = Title_One;
    document.getElementById("Title_Two_Show").innerHTML = Title_Two;
    document.getElementById("Title_Three_Show").innerHTML = Title_Three;
    document.getElementById("Title_Four_Show").innerHTML = Title_Four;

    document.getElementById("Sub_Title_One_Show").innerHTML = Sub_Title_One;
    document.getElementById("Sub_Title_Two_Show").innerHTML = Sub_Title_Two;
    document.getElementById("Sub_Title_Three_Show").innerHTML = Sub_Title_Three;
    document.getElementById("Sub_Title_Four_Show").innerHTML = Sub_Title_Four;




}








function Print(DivName){
    var printContents = document.getElementById(DivName).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
    // alert("Test")

}
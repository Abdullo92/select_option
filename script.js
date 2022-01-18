function selectItem(){

    let selectItem = document.querySelector('#myselec').selectedIndex;
    let options = document.querySelector('#myselec').options;
    alert(`selected:  ${options[selectItem].text}`)
}
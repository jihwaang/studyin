/*-----체크박스----*/
let allCheck = document.querySelector(".all-check");
let check= document.querySelectorAll(".check");
let checkName = document.getElementsByName("check[]");

let activateBtn = document.querySelector('.activate-btn');
// let checkedMessage[] = null;


    /*-----전체 선택----*/
    allCheck.onclick = function(){
        for(var i in checkName){
            if(checkName[i].checked == true)
                checkName[i].checked = false;
        }
        for(var i in checkName){
                checkName[i].checked = true;
        
        }
    }

    /*-----개별 선택값 배열에 담기----*/
    check.onclick = function(e){
        var target = e.target;

        // checkedMessage[] = target.value;
    }
        /*---체크된 카드 비활성화---*/

        activateBtn.addEventListener('click',function(){
            for(let i in check){
                if(check[i].checked == true){
                // let selected = check[i].checked.value;
                // console.log(selected);
                check[i].parentNode.classList.toggle("inactive");
                }
                //selected 비활성화로 db 변경
            }
        });
    
    let entireMessageBtn = document.querySelector(".entire-message-btn");
    entireMessageBtn.addEventListener('click', (e) => {
    
        let messageBtn = document.querySelector('#message-btn');
        messageBtn.checked = true;
        
        let messagePopuup = document.querySelector('.message-popuup');
            if (messageBtn.checked) {
                    messagePopuup.classList.remove('display-none');
            } else {
                    messagePopuup.classList.add('display-none');
            }
    }); 
    
const popupFunction = () => {
    const popup = document.querySelector('.popup');
    const delBtn = document.querySelectorAll('.del-btn');

    delBtn.forEach(ele => ele.addEventListener('click', (e) => {
        e.preventDefault();

        popup.classList.toggle('flex-active');
    }));

    popup.addEventListener('click', (e) => {
        e.preventDefault();

        if(!e.target.classList.contains('popup-btn') && !e.target.classList.contains('popup-cancel-btn')) return;
        popup.classList.toggle('flex-active');
    });

}

popupFunction();
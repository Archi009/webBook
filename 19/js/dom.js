//Dom.js --- index.html

//DOM is Document Object Model

//head 태그에 script를 위치하면 
// 순서대로 읽는 자바스크립트 특성상 아래 body를 읽기전에 script를 읽어 값을 받아오지 못한다.
// 그래서 DOMContentLoaded 를 통해 dom이 로드 된 후 스크립트를 읽는 이벤트 안에 script를 적어준다
//or body 아래에 script를 작성,
// let myPicture = {name: "해와달", width: 200, height:300} => property (속성)
// <img src="small.jpg"> => attribute (속성)

// document.addEventListener('DOMContentLoaded', function(){
//   domFunc();
// });
document.addEventListener('DOMContentLoaded', attrChangFunc);
// document.addEventListener('DOMContentLoaded', domChangFunc);


function attrChangFunc(e) {
  // console.log(e);

  //대상선택.
  document.querySelectorAll('div#small-pic>img').forEach(function (item) {
    //img 이벤트 등록
    item.addEventListener('mouseover', function (e) {
      // console.log(item);
      // console.log(e.target.src);
      document.querySelector('#prod-pic > img').src = e.target.src
    })


    //상세 설명 보이기
    let detailExplain = document.getElementById("detail");
    // console.log(detailExplain);
    let view = document.getElementById("view");
    view.onclick = function (e) {
      //a태그에 이미 이벤트가 있다 (이동) 이벤트를 막고 내가 설정한 이벤트가 실해되게 한다
      e.preventDefault();
      // detailExplain.removeAttribute('display')
      // detailExplain.setAttribute('display','block')
      detailExplain.style.display = 'block'
    }
  })
  let btn = document.querySelector('button');
  btn.onclick = function () {
    console.log(document.querySelector('div#desc > ul'));
    // console.log(document.querySelectorAll('div#desc > ul > li'));
    let list = document.querySelectorAll('div#desc > ul > li')
    console.log(list);
    console.log(list[0].firstElementChild.innerText);
    console.log(list[1].children[1].value);
    console.log(list[2].children[1].value);


    let purch = document.querySelector('div#desc > ul > li:nth-of-type(1)>span').innerText
    let price = document.querySelector('div#desc > ul > li:nth-of-type(2)>input').value
    let delever = document.querySelector('div#desc > ul > li:nth-of-type(3)>input').value



    alert(`상품명: ${purch}(결제금액: ${parseInt(price)>=50000 ? parseInt(price) : parseInt(price)+parseInt(delever)})`)
  }

}

//요소의 값을 변경.
function domChangFunc() {
  let heading = document.querySelector('#heading');
  heading.onclick = function () {
    heading.innerText = '추천 오늘의 커피'
    document.getElementById('cup').src = "images/coffee-blue.jpg"

    // let detailExplain = document.getElementById("detail");
    // console.log(detailExplain);
    // let view = document.getElementById("view");
    // view.onclick = function () {
    //   detailExplain.removeAttribute('display')
    // //   detailExplain.style.display = 'block'
    // }

  }


  let detail = document.querySelector('#detail > ul');
  detail.innerText = '<li>사과</li>'
  console.log(detail.innerText);
  console.log(detail.innerHTML);
  console.log(detail.textContent);
}
//DOM 요소의 선택.
function domFunc() {
  let targetItem = document.getElementById("container"); //id 값으로 선택
  console.log(targetItem);

  targetItem = document.getElementsByClassName('small'); //HTMLCollection([배열])
  console.log(targetItem);
  console.log(targetItem[0]);

  for (let i = 0; i < targetItem.length; i++) {
    console.log(targetItem[i].src);
  }

  targetItem = document.querySelectorAll('.small'); //NodList([배열])
  targetItem.forEach(element => {
    element.style.border = "3px solid red";

  });
  console.log(targetItem);

  targetItem = document.getElementsByTagName('img'); //HTMLCollection([배열])
  console.log(targetItem);

  targetItem = document.querySelectorAll('img'); //NodList([배열])
  console.log(targetItem);

}; // end of domFunc();
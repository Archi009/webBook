//dom1.js

// element(tag) vs. node
document.addEventListener("DOMContentLoaded", function(){
  let container = document.querySelector('#container')
  let ulist = document.querySelector('div#detail > ul')
  console.dir(container);
  //children 은 요소 (elements) 기준으로 가져오고
  //childNodes 는 노드 (text 포함 띄어쓰기나 줄바꿈도 Text노드이다) 기준으로 가져온다.
  
  document.querySelector('button').addEventListener('click',showDt)


  function chWithCollect(){
    container.children[0].innerText = 'Collection , Elenments 기준으로 변환'
  }
  function chWithNode(){
    container.childNodes[1].innerText = 'Node기준으로 변환'
  }

  function showDt() {
    container.childNodes[7].style.display ='block'
    // ulist.innerHTML += `<li>가공법 : 워시드</li>`
    let item = document.createElement("li")
    let txt = document.createTextNode("가공법 : 워시드")
    item.appendChild(txt)         //부모.appendChild(자식) 
    ulist.appendChild(item)
    console.dir(item);
    console.dir(ulist);
  }
  

  // function insertHtml () {
  // }

})

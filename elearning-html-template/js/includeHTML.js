// 출처: https://sjh836.tistory.com/52

// Header와 Footer를 모든 페이지에 띄우기 위한 js 코드
// 루트 폴더에 있는 header.html이 Header 부분이 담긴 html 파일
// Header 부분을 수정하려면 모든 파일을 수정할 필요 없이 header.html만 수정하면 됨

// 사용방법 (Header 추가하는 과정을 예시로 설명)
// 1. html 파일의 <head> 부분에 다음 코드를 입력
//      <!-- Header, Footer 삽입용 스크립트 -->
//      <script src="js/includeHTML.js"></script>
// 2. html 파일의 <body> 부분에 다음 코드를 입력
//      <!-- Header, Footer 스크립트 호출 -->
//      <div include-html="header.html"></div>
//      <script>includeHTML();</script>

function includeHTML() 
{
    var z, i, elmnt, file, xhttp;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) 
    {
      elmnt = z[i];
      file = elmnt.getAttribute("include-html");
      if (file) 
      {
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() 
        {
          if (this.readyState == 4 && this.status == 200) 
          {
            elmnt.innerHTML = this.responseText;
            elmnt.removeAttribute("include-html");
            includeHTML();
          }
        }      
        xhttp.open("GET", file, true);
        xhttp.send();
        return;
      }
    }
}
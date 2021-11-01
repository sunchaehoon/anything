console.log("fighting!");
    console.log(document); // html 태그 전체를 콘솔에 띄워주자.

    var signinButton = document.getElementById("signinButton") // 버튼을 만들고.
    signinButton.addEventListener('click', signinFunc) // 'click'이란 id의 버튼을 누르면 signinFunc 함수를 실행.

    function signinFunc () {
      var userid = document.getElementById("userid").value; // userid 의 값을 받아와 넣음.
      var userpw = document.getElementById("userpw").value; // userpw 의 값을 받아와 넣음.


      if(userid == "최강기아" && userpw == "tigers") {
        alert("로그인 성공");
        console.log("로그인 성공했습니다.");
      } else {
        alert("로그인 실패");
        console.log("로그인 실패했습니다.");
      }


    }



    var slides = document.querySelector('.slides'),
        slide = document.querySelectorAll('.slides li'),
        currentIdx = 0,
        slideCount = slide.length,
        prevBtn = document.querySelector('.prev'),
        slideWidth = 330,
        slideMargin = 30,
        nextBtn = document.querySelector('.next');
        
        slides.style.width = (slideWidth + slideMargin)*slideCount - slideMargin + 'px';

        function moveSlide(num) {
          slides.style.left = -num * 360 + 'px';
          currentIdx = num;
        }
        nextBtn.addEventListener('click', function() {
          if(currentIdx < slideCount-3) {
            moveSlide(currentIdx + 1);
            console.log(currentIdx)
          } else {
            moveSlide(0);
          }
        });
        prevBtn.addEventListener('click', function() {
          if(currentIdx > 0) {
            moveSlide(currentIdx - 1);
          } else {
            moveSlide(slideCount - 3);
          }
        });

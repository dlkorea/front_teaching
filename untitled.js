html, css <- 조건을 걸기 어렵거나 불가능하다.

(
    html <- 웹페이지의 내용,
    css <- 웹페이지의 디자인 명세,
)

html, css는 스스로 변화할 수 없다.

요새 웹들 보면 사용자 입력 등에 따라 interaction.
ex) 클릭하면 커진다.
ex2) 마우스 오버시 사진 변경
ex3) 마우스 오버시 사진 띠용 하고 확대했다 원래 크기

이런것들을 기본적으로 사용하는데, 이 것들은 html과 css만으로 구현하기에는 한계가 있다.


그래서 쓰는게 javascript. 라고 이해하시면 되어요.

근데 javascript는 프로그래밍 언어.

html, css는 프로그래밍 언어 x

프로그래밍 언어라 하면,
1) varible 있죠. 변수에 값을 동적으로 할당 가능.
    - a = 3 입력 해두면, 나중에 a를 가져다 쓸 수 있다.
    - b = 2, -> a + b => 5
    - variable을 쓸 수 있어야 한다.
    - 보통은 (변수 = (할당할 값))

2) variable 간의 연산이 정의되어 있어야 한다.
    - a = 3; b = 2; (a + b == 5)

3) 조건문이 있다.
    // var a; <- a를 변수로 쓰겠다고 선언. 변수 선언.
    // a = 3 <- 선언된 변수 a에 값 3을 할당.
    // var a = 3; <- 변수 a를 선언하고, 초기값으로 3을 할당.
    var a = 3;
    var b = 2;

    // 아래가 조건문. if (조건식) { 조건에 해당할 경우 실행할 내용 }
    if ( a + b < 5 ) {
        a += 5; // a의 값을 a + 5 로 재 할당.
    }
    else {
        a -= 2; // a의 값을 a - 2 로 재 할당.
    }

    // a의 값을 출력
    console.log(a);

4) 반복문이 있다.
    var sumValue = 0;

    // 반복문의 반복 구절을 Loop 라고 합니다.
    // i 를 Loop 변수라고 한다.(정확한 명칭은 아닐 수도 있어요. 아마 맞을 거에요.)
    for ( var i = 1; i < 100; i++ ) {
        sumValue += i;
    }


    // sumValue = 0 + 1 + 2 + 3 + ..... + 99;
    console.log(sumValue);

    // 조건식이 참일 경우 루프 실행
    var i = 0;
    var sumValue = 0;

    while ( i < 100 ) {
        sumValue += i;
        i++;
    }

    // sumValue = 0 + 1 + 2 + 3 + ..... + 99;
    console.log(sumValue);


    while 문 같은게 필요한 이유는 무한루프 때문.

    var i = 0;
    var sumValue = 0;

    while ( true ) {
        sumValue += i;
        i += 1;

        if ( i >= 100 ) {
            break;
        }
    }

    // sumValue = 0 + 0 + 1 + 2 + 3 + .... + 99
    console.log(sumValue);

    4) 기타 등등 logic을 서술할 수 있는 다양한 문법과 구조를 갖는다.

자료구조, 객체 지향 프로그래밍, 객체,

// $ <- jQuery
// $('#haha').click(function(e) {
//     console.log('hihi');
// });


css 관련 메모:
html tag는 기본적으로 block 요소와 inline 요소가 있다.
block 요소는 한 줄을 다 차지한다.
inline 요소는 요소 내부의 크기만 차지한다.
inline-block
flex
...



다음 시간 할 것
1. 에디터 설정(제가 쓰고 있는걸 Sublime Text 3 라는 에디터인데, 이거 기준으로 세팅)
2. 크롬 개발자 도구 사용법 설명
3. css 선택자 설명

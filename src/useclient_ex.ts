//use client: 파일이 클라이언트에서 평가되도록 하는 지시어
//파일이 서버에서 호출되면 서버로, 클라이언트에서 호출되면 클라이언트로 평가된다
//use client 지시어는 최상단에 위치해야됨
//컴포넌트 파일에서만 지시어가 작동
//클라이언트로 지시되면 해당 파일의 모든 코드가 클라이언트에서 실행됨
//서버컴포넌트에 클라이언트 컴포넌트에사 가져온 값을 props로 전달 가능

//BETWEEN: 값과 값 사이의 결과를 조회
//WHERE 쿼리문 뒤에 조건문으로 사용
//사이값 검색: >= AND <= (엔드포인트를 포함)
//사이 밖 검색: < AND > (엔드포인트 미포함)
//value BETWEEN low AND high
//value NOT BETWEEN low AND high
//date BETWEEN '2024-01-01' AND '2024-08-30' //날짜의 경우 날짜 형식이 정해져있음 'YYYY-MM-DD HH:MM:SS'
//2024-08-30의 경우 2024-08-30 00:00:00 을 기준으로 한다. 따라서 실질적으로 2024-08-29 23:59:59 까지 검색되므로
//30일을 검색하려면 31일로 검색하든가 '2024-08-30 23:59:59' 로 초까지 지정해줘야 한다.
// SELECT COUNT(amount) FROM payment WHERE amount BETWEEN 4 AND 6; // 4~6 검색
// SELECT COUNT(amount) FROM payment WHERE amount >= 4 AND amount <=6; // 위와 같음
// SELECT COUNT(amount) FROM payment WHERE amount NOT BETWEEN 4 AND 6; // ~4 or 6~ 검색
// SELECT COUNT(amount) FROM payment WHERE amount amount <= 4 OR amount >=6; // 위와 같음
// SELECT * FROM payment WHERE payment_date BETWEEN '2007-02-10' AND '2007-02-21 23:59:59' // 2007-02-10~2007-02-21 검색
// ORDER BY payment_date DESC;

//IN: 특정 값이 포함되는 옵션을 조회
//WHERE value IN(option1, option2, ...): 옵션을 포함하는 모든 결과 조회
//WHERE value = option1 OR value = option2 OR ... 과 같다.
//WHERE value NOT IN(option1, option2, ...): 옵션을 포함하지 않는 모든 결과 조회
//SELECT first_name, last_name FROM customer WHERE first_name IN('Jared', 'Anna', 'Cindy', 'Bear')
//ORDER BY first_name;

//LIKE: 문자열 데이터에 대한 패턴 매칭 검색 (대소문자 구분)
//와일드카드 %: 문자의 순서나 문자의 수에 관계없이 검색
//와일드카드 _: 단하나의 문자열만 매칭
//A%: A로 시작하는 모든 문자열 검색
//%A: A로 끝나는 모든 문자열 검색
//Pokemon_: Pokemon이후 하나의 글자만 가지는 문자열 검색 (ex PokemonX)
//Pokemon__: Iphone10이후 두개의 글자만 가지는 문자열 검색 (ex PokemonXY)
//와일드카드를 조합해 더 복잡한 패턴 매칭이 가능
//_Action%: IActionTime
//%String%: 위치 관계없이 문자열이 포함된 모든 문자열 검색
//SELECT * FROM customer WHERE first_name LIKE '%ab%'

//ILIKE: 대소문자 구분 않고 LIKE 검색

const fs = require('fs');

const numArr = Array.from({ length: 20 }, (_, i) => i + 1);

const postFn = (number) => ({
    id: number,
    title: `임시 공개 데이터 ${number}`,
    userName: '작성자임',
    display: 'Y',
});

const dummy = numArr.map((e) => postFn(e));
dummy.forEach((e, i) => {
    if (i >= 6 && e.id <= 9) {
        dummy[i].title = '임시 비공개 데이터';
        dummy[i].display = 'N';
    }
});

// 가독성을 위해 들여쓰기를 포함한 JSON 문자열로 dummyData 배열을 변환
const jsonData = JSON.stringify(dummy, null, 2);

//JSON 문자열을 파일에 작성
fs.writeFile('caslDummy.json', jsonData, 'utf8', (err) => {
    if (err) throw err;
    console.log('JSON 데이터가 파일로 저장되었습니다.');
});

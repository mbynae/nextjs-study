import { defineAbility } from '@casl/ability';

// const ability = (user: { id: number; isLoggedIn?: boolean; isModerator?: boolean }) =>
//     defineAbility((can, cannot) => {
//         can('manage', 'all');
//         cannot('delete', 'User');
//     });

const ability = defineAbility((can, cannot) => {
    can('manage', 'all');
    cannot('delete', 'User');
});

export default ability;

//1. 기본사항
//casl은 기본적으로 ability 레벨에서 작동함
//ability는 4가지의 매개변수를 가짐 (첫번째는 필수, 나머지는 옵션)
//-User Action: 사용자가 앱에서 할 수 있는 액션
//-Subject: 사용자 액션을 확인하려는 주체
//-Field: 사용자 액션을 일치하는 주체의 필드로만 제한
//-Condition: 사용자 액션을 일치하는 주체로만 제한

//-User Action의 "manage"와 Subject의 "all"은 casl의 특별한 키워드. 모든 주체에게 모든 액션을 허용함

//can, cannot 함수는 4개의 매개변수를 모두 받을 수 있다.
//-can: 지정된 주체에 대한 액션을 허용하는 함수. 모든 조건이 일치하면 true, 아니면 false 반환
//-cannot: 지정된 주체에 대한 액션을 금지하는 함수. 모든 조건이 일치하면 true 만환

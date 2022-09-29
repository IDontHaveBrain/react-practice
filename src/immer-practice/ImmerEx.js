import produce from "immer";

const originalState = [
    {
        id: 1,
        todo: '전개 연산자와 배열 내장 함수로 불변성 유지하기',
        checked: true
    },
    {
        id: 2,
        todo: 'immer로 불변성 유지하기',
        checked: false
    },
];

const nextState = produce(originalState, draft => {
    // id가 2인 항목 찾아서 반환.
    const todo = draft.find(t => t.id === 2);
    todo.checked = true;
    todo.todo = '일정 수정';
    // 새로운 데이터 추가.
    draft.push({
        id: 3,
        todo: '일정 관리 앱에 immer 적용하기',
        checked: false,
    });
    // id가 1인 항목 제거, splice(시작 인덱스, 제거할 개수)
    draft.splice(draft.findIndex(t => t.id === 1), 1);
});

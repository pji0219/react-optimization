import React from 'react';

import MyParagraph from './MyParagraph';

// prps가 변경되면 이 컴포넌트 함수가 재실행 된다.

function DemoOutput(props) {
  console.log('Demo output running!');

  return <MyParagraph>{props.show ? 'This is new!' : ''}</MyParagraph>;
}

export default React.memo(DemoOutput); // props가 변경되었을때만 재실행
// 대규모 앱일 때 이 컴포넌트 이하의 하위 컴포넌트까지 불필요한 재평가를 하지 않게 해주므로 유용
// 모든 컴포넌트에 react.memo를 쓸 필요는 없으며 컴포넌트 트리에서 잘라낼 수 있는 몇 가지의 주요 컴포넌트 부분을 선택해서 쓰면 됨
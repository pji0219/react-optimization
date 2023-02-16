import { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
// import DemoOutput from './components/Demo/DemoOutput';
import Button from './components/UI/Button/Button';

// 화면 렌더링 과정
// props(외부 상태), state(내부 상태), context(글로벌 상태)의 변경은 컴포넌트 함수를 다시 실행 시킨다.

/*
  props는 최종적으로 부모의 상태가 변경되었을 때만 바뀐다.
  자식에게 props를 전달해줘서 UI변경이 일어날 때는 실제 DOM 변경은 자식 컴포넌트에서 일어나지만
  부모의 상태도 변경되었기 때문에 부모 컴포넌트 함수도 재실행 된다.
*/

/*
  부모 컴포넌트가 재실행되면 자식 컴포넌트 또한 재실행 된다.
  왜냐하면 함수의 return문에서 자식 컴포넌트가 호출이 되기 때문이다.
*/

/* 
  props, state, context의 변경 -> 컴포넌트 함수 재실행 -> 그 정보가 react DOM으로 전달 -> 
  이전 real DOM과 virtual DOM 비교 후 바뀐 것만 real DOM에 그림 -> 화면 리렌더링
*/

function App() {
  // const [showParagraph, setShowparagraph] = useState(false);
  // const [allowToggle, setAllowToggle] = useState(false);

  const [listTitle, setListTitle] = useState('My List');

  // 배열 역시 객체이므로 컴포넌트가 재실행될 때마다 재생성 됨
  // 그래서 useMemo를 통하여 한번만 생성 후 재사용하게 함
  const items = useMemo(() => [5, 3, 1, 10, 9], []);

  console.log('App running!');

  // 컴포넌트 함수가 재실행 될 때 마다 내부에 있는 함수를 재생성 하지 않게 useCallback으로 저장
  // 함수 내에서 사용하는 컴포넌트에서 사용하는 props, state, context를 의존성 배열에 지정할 수 있다.
  /*  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowparagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  }; */

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  return (
    <div className='app'>
      {/* <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button> */}
      <DemoList title={listTitle} items={items} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;

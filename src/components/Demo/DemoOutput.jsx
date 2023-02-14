import MyParagraph from './MyParagraph';

// prps가 변경되면 이 컴포넌트 함수가 재실행 된다.

function DemoOutput(props) {
  console.log('Demo output running!');

  return <MyParagraph>{props.show ? 'This is new!' : ''}</MyParagraph>;
}

export default DemoOutput;

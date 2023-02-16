import React, { useMemo } from 'react';

import Classes from './DemoList.module.css';

function DemoList(props) {
  // 연산된 값을 기억하고 있다가 items props가 변경되었을 때만 재연산
  // useMemo는 모든 데이터에 사용해야 하는 것이 아니라 성능 집약적인 연산을 하는 곳에 사용하는 것이 유용
  const sortedList = useMemo(() => {
    console.log('item sorted!');

    return props.items.sort((a, b) => a - b);
  }, [props.items]);

  console.log('Demo List running!');

  return (
    <div className={Classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default React.memo(DemoList);

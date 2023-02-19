import { useState, useEffect } from 'react';

// 커스텀 훅을 만들 때는 use를 앞에 붙여야 한다.
// 커스텀 훅을 만들어 사용하는 이유는 반복되는 로직을 재사용하기 위해서 이다.
// 컴포넌트 별로 해당 컴포넌트에서 상태가 설정 되기 때문에 로직만 공유하고 상태를 공유하는 것은 아니다.
// (각 컴포넌트 별로 상태가 다름)
const useCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return counter;
};

export default useCounter;

import { useState, useRef, useEffect } from "react";
import "./styles.css";

export default function App() {
  const prevValue = useRef(0); // 前回の値を格納
  const [currentValue, setCurrentValue] = useState(0); // 現在の値を格納
  // 現在の値に変更があったら実行
  useEffect(() => {
    console.log("useEffectが実行されました！　値: " + currentValue);
    prevValue.current = currentValue;
  }, [currentValue]);

  //　クリックされたら値をプラス1
  const onClickCount = () => {
    setCurrentValue((currentValue) => currentValue + 1);
  };
  return (
    <div className="App">
      <button onClick={onClickCount}>カウントアップ</button>
      <p>現在の値: {currentValue}</p>
      {console.log("useStateが更新されました！　値: " + currentValue)}
      <p>前回の値: {prevValue.current}</p>
    </div>
  );
}

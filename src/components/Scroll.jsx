import React, { useEffect, useState, useMemo, useCallback } from "react";
import throttle from "lodash/throttle";

// имитация запроса к серверу. просто получаем число асинхронно
/*
Есть реализация компонента, от которого требуется 2 вещи:
    1) выводить текущее значение вертикального скролла окна (window.scrollY)
    2) после монтирования асинхронно получить число и вывести его
Нужно найти, объяснить и исправить как можно больше проблем в реализации
*/

const Scroll = () => {
  const fetchRandomNumber = useMemo(() => Promise.resolve(Math.random()), []);

  const [number, setNumber] = useState(0);

  const [scroll, setScroll] = useState(window.scrollY);

  const handleScroll = useCallback(
    throttle(() => setScroll(window.scrollY), 1000),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scroll]);

  useEffect(() => {
    fetchRandomNumber.then((n) => setNumber(n));
  }, []);

  return (
    <div className={"container"}>
      <div> {number} </div>
      <div> Scroll: {scroll} </div>
    </div>
  );
};

export default Scroll;

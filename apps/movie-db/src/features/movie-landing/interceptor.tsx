/* import { useEffect, useRef, useState } from 'react';
export default function App() {
  const lastItemRef = useRef();
  const observer = useRef();
  const [arr, setArr] = useState(
    Array(30)
      .fill()
      .map((_, i) => i)
  );
  const [page, setPage] = useState(1);
  useEffect(() => {
    const options = {
      root: document,
      rootMargin: '20px',
      threshold: 1,
    };
    const callback = (entries) => {
      if (entries[0].isIntersecting) {
        const newPage = page + 1;
        setArr((arr) => [
          ...arr,
          ...Array(30)
            .fill()
            .map((_, i) => i + 30 * (newPage - 1)),
        ]);
        setPage(newPage);
      }
    };
    observer.current = new IntersectionObserver(callback, options);
    if (lastItemRef.current) {
      observer.current.observe(lastItemRef.current);
    }
    return () => {
      observer.current.disconnect();
    };s
  });
  return (
    <div className="App">
      {arr.map((a, i) => {
        if (i === arr.length - 1) {
          return (
            <p key={a} ref={lastItemRef}>
              {a}
            </p>
          );
        }
        return <p key={a}>{a}</p>;
      })}
    </div>
  );
}
 */

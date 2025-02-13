import React, { useEffect, useRef, useState } from 'react'
import useThrottle from '../hooks/useThrottle';

type LottoNumbers = [
  number,
  number,
  number,
  number,
  number,
  number,
];

function generateLottoNumbers() {
  console.log('generate numbers')
  const numbers = new Set();
  while (numbers.size < 6) {
    numbers.add(Math.floor(Math.random() * 45) + 1);
  }

  return (Array.from(numbers) as number[]).
    sort((a:number, b:number) => a - b);
}

const Throttle = () => {
  const lottoNumberGenerated = useRef<number>(Date.now());
  const [lottoNumbers, setLottoNumbers] = useState<LottoNumbers>([0,0,0,0,0,0]);
  const throttledLottoNumbers = useThrottle(lottoNumbers);

  useEffect(() => {
    console.log(`throttledValue generated: ${throttledLottoNumbers}`)
  }, [throttledLottoNumbers])

  const handleClick = () => {
    if ((Date.now() - lottoNumberGenerated.current) > 1000) {
      const newNumbers = generateLottoNumbers();
      setLottoNumbers(newNumbers as LottoNumbers);
      lottoNumberGenerated.current = Date.now();
    }
  }
  return (
    <>
      <div className='generate-lotto-container'>
        <h1 className="title">Lotto number Generator</h1>
        <button
         className="button"
         onClick={handleClick}
        >
          Generate
        </button>
        <div className="lotto-numbers">
          {lottoNumbers.map((num, index) => (
            <span className="lotto-number" key={index} >
              {num}
            </span>
          ))}
        </div>
      </div> 
    </>
  )
}

export default Throttle

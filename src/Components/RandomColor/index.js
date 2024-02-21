import React, { useEffect, useState } from 'react'

const RandomColor = () => {

    const [type,setType] = useState('hex');
    const [color,setColor] = useState('#000000')


    const randomColorUtility = (length) => {
        return Math.floor(Math.random() * length)
    }

    const handleHexColor = () => {
        const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let hexColor ='#';

        for(let i = 0 ; i < 6 ; i++){
            hexColor += hex[randomColorUtility(hex.length)]
        }
        setColor(hexColor);
    }

    
    const handlergbColor = () => {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);
        
        setColor(`rgb(${r},${g},${b})`);
    }
    
    const handleCreateRandomColor = () => {
        (type === 'hex' ? handleHexColor() : handlergbColor())
    }
    
    useEffect(() => {
        if(type === 'rgb') handlergbColor();
         else handleHexColor();
        
    },[type]);
    
  return (
    <>
    <div style={{background : color}} className='flex items-start justify-center w-full h-screen'>
    <div className='flex items-start justify-center'>
        <div className='p-3 border m-3 font-bold bg-black text-white'>
             <button onClick={() => setType('hex')}>Generate HEX color</button>
        </div>
        <div className='p-3 border m-3 font-bold bg-black text-white'>
             <button onClick={() => setType('rgb')}>Generate RGB color</button>
        </div>
        <div className='p-3 border m-3 font-bold bg-black text-white'>
             <button onClick={() => handleCreateRandomColor()}>Generate random color</button>
        </div>
        <div className='absolute top-[45%] left-[45%]'>
            <h1 className='text-5xl text-white font-bold'>{type === 'rgb' ? 'RGB color' : 'Hex color'}</h1>
            <h2 className='text-4xl text-white font-semibold'>{color}</h2>
        </div>
    </div>
    </div>
    </>
  )
}

export default RandomColor
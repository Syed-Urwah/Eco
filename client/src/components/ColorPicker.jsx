import React from 'react'
import { TwitterPicker } from 'react-color'

export default function ColorPicker({color, setColor}) {

    const handleChangeComplete = (color) => {
        // this.setState({ background: color.hex });
        console.log(color);
        setColor(color.hex);
      };

  return (
    <TwitterPicker color={color} onChangeComplete={handleChangeComplete}/>
  )
}

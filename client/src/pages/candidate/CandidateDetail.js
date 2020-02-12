import React from 'react'
import { Divider, Image } from 'semantic-ui-react'
import 이종구1 from './image/이종구1.png'
import 이종구2 from './image/이종구2.png'
import 이종구3 from './image/이종구3.png'
import 이종구4 from './image/이종구4.png'
import 이종구5 from './image/이종구5.png'
import 이종구6 from './image/이종구6.png'
import 이종구7 from './image/이종구7.png'

const ImageExampleSize = () => (
  <div>
    <Image src={이종구1} size='massive' centered/>
    <Image src={이종구2} size='massive' centered/>
    <Image src={이종구3} size='massive' centered/>
    <Image src={이종구4} size='massive' centered/>
    <Image src={이종구5} size='massive' centered/>
    <Image src={이종구6} size='massive' centered/>
    <Image src={이종구7} size='massive' centered/>
  </div>
)

export default ImageExampleSize
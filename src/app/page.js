'use client'

import Image from 'next/image'
import { Chrono } from 'react-chrono'
import date_08_10 from './days/date_08_10'

export default function Home() {
  return   (<div>
  <Chrono
    items={[date_08_10, date_08_10, date_08_10, date_08_10, date_08_10, date_08_10]}
    mode="VERTICAL"
    
    focusActiveItemOnLoad
    enableOutline
  />
</div>
)
}

import React, { useEffect, useState } from 'react'
import { getCoinsUrl } from '../../service/cryptoApi';
import TableCoins from '../modules/TableCoins';

export default function HomaPage() {
    const [coins, setCoins] = useState();
    useEffect(() => {
       fetch(getCoinsUrl()).then((res)=>res.json()).then((json)=>setCoins(json))
        
    }, []);

    console.log(coins)
  return (
   

    <TableCoins coins={coins}/>
  )
}

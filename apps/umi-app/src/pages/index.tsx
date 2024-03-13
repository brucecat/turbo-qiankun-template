import yayJpg from '../assets/yay.jpg';
import axios from 'axios';
import { useEffect } from 'react'

export default function List() {
  useEffect(() => {
    axios.get('/list')
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log('err: ', err);
      })
  }, [])
  return (
    <div>
      列表页内容
    </div>
  );
}

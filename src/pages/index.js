import {
  useState,
  useEffect,
} from 'react';
import styles from './index.less';

export default () => {
  const [showData, setShowData] = useState([]);
  const [showNum, setShowNum] = useState(0);

  useEffect(() => {
    init();
  },[]);

  let ci = 0;
  const init = () => {
    let allData = [];
    for(let i=0; i<108; i++){
      allData.push(initNum())
    }
    ci ++;
    setShowNum(ci);
    setShowData(allData);
    setTimeout(() => {
      init();
    },80)
  }

  const initNum = () => {
    var colorValue = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";
    var colorArray = colorValue.split(",");
    var color = "#";
    for( var i = 0; i < 6; i++ ){
        color += colorArray[ Math.floor( Math.random() * 16 ) ];
    }
    return color;
  }

  return (
    <div style={{width: '700px', height: '700px', margin: '0 auto', }}>
      <div style={{overflow: 'hidden'}}>
        {
          showData.map((item, index) => {
            return <span key={index} style={{background: item, padding: '15px', display: 'block', float: 'left'}}></span>
          })
        }
      </div>
      <div>用时：{showNum}</div>
    </div>
  );
}

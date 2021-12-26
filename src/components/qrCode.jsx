import { useEffect, useState } from "react";
import  QRCode  from "qrcode";

const QR = ({text}) =>{

  var opts = {
    
    quality: 1,
    margin: 1.5,
    width : 220
    
  }
  
    const [src , setSrc] = useState('');
    useEffect(()=>{
      QRCode.toDataURL(text , opts).then((data)=>{
        setSrc(data);
      }).catch(e=>console.log(e))
  
      //QRCode.toFile
    } , [])
    return <div>
    
      <img  src={src} download useMap="#dd"/>
      <map name="dd">
      <area shape="rect" coords="0,0 , 220 , 220" href={src} alt="Sun"  download="qr"/>
      </map>
      <a href={src} target="_blank" download className="btn btn-primary download position-absolute  start-50 translate-middle" >Download</a>
    </div>
  }
  
  export default QR;
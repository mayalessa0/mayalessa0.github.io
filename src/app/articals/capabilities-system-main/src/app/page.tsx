 
import './page.css';
 
export default function Home() {


  return (
  <>
 
 
    <div className="container">
      <br></br>
 <div  className="flex"><h2 className='h2'>.........</h2>

      <h1 className="h1" >   انشاء حساب جديد</h1> 
      </div>
       <br></br>  
 
 <br></br>
<form>
 
  
 <input type="text" placeholder='Name'  
  
  required  id='name' 
   
  className="text"></input>
  <br></br><br></br><br></br>

  <input type="email" placeholder='Email'
  required  id='Email' 
   className="text">
  </input>
  <br></br><br></br><br></br>
  <input type="password" 
   id='password' name="password" 
   placeholder='Password' required  maxLength={8} className="text" ></input>
  <button type="submit" className="btn"  >تسجيل دخول</button>
  <br></br><br></br>
  <h6 className="link"><a href="/sign">لديك حساب؟تسجيل الدخول </a></h6>
  <div className='flex'><h6 className="h6"  ><a href="/sign">أوافق على الشروط والأحكام</a></h6>
     <input  type='checkbox' required  className="checkbox"></input>
  </div></form>
 {/* <label > 
  <input type="checkbox" name="acount" className="link"></input>
rememmber me </label> */}
 

 
    </div>
    
<br></br> <br></br>

        </> 
  );
}

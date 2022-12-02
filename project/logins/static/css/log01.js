function validation(){
   a=document.getElementById('exampleInputPassword1').value
   if (a==""){
      document.getElementById('lo1').style.color='red'
      document.getElementById('lo1').innerHTML='enter your password'
      return false
   }



}
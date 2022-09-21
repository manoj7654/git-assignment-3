function Prime(num){
let fact=0;
for(let i=1;i<=num;i++){
   if(num%i==0){
     fact++;
   }
 }
if(fact==2){
  return true;
  }
  return false;
}
let res=Prime(19);
if(res==true){
   console.log("Prime");
}else{
   console.log("Not Prime");
}
//==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. 
//Using the array you just obtained from the previous problem, find out how many cars were
// made before the year 2000 and return the array of older cars and log its length.

function problem5(carYears)
{  
    let cnt=0;
   for(let j=0;j<carYears.length;j++)
   {
    if(carYears[j]<2000)
    {
    cnt=cnt+1;
       }
   }
   return cnt;
}
module.exports=problem5;

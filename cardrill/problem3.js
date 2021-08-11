//==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. 
//Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

function problem3(inventory)
{
    let a=[];
    if(inventory.length==0)
     {
         return a;
     }
    else
    {
        for( var i=0; i<inventory.length;i++)
        {
        for( var j=0; j<inventory.length-i-1;j++)
             {
                if(inventory[j].car_model.toLowerCase()>inventory[j+1].car_model.toLowerCase()) 
                {
                    let temp=inventory[j+1];
                    inventory[j+1]=inventory[j]; 
                    inventory[j]=temp;
                }
             }
        }
    return inventory;
}  
    }

module.exports=problem3;

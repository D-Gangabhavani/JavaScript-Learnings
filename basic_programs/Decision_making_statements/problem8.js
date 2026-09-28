//Given three angles, check whether they can form a valid triangle.
let angle1=30;
let angle2=70;
let angle3=80;
if(angle1>0 && angle2>0 && angle3>0 && (angle1+angle2+angle3)==180)
{
    console.log("valid Triangle can be formed");
}
else
{
    console.log("Invalid angles");
}
class SolveEquation{
 			Solve(){
 				alert("Enter the value of a, b and c to this equation: aX^2+bX+C = 0")
                var a = prompt("Enter the value of a: ");
                var b = prompt("Enter the value of b: ");
                var c = prompt("Enter the value of c: ");

	            var delta = b*b-4*a*c;

	            var x1 = (-b+Math.sqrt(delta))/(2*a);
	            var x2 = (-b-Math.sqrt(delta))/(2*a);
	            var x = -b/(2*a);
                if(delta>0){
                	 alert("The equation has two real roots")
                   	 alert("The value of first Root: "+x1);
                   	 alert("The value of second Root: "+x2);
                }
                else if(delta == 0){
                	alert("The equation has one real root")
                	alert("The Value of Root: "+x);
                }
                else{
                	alert("The equation does not any root") 
                }
 			}
 		}	
 		var e = new SolveEquation();
        e.Solve();
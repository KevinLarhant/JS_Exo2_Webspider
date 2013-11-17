var oldLog = console.log;
var oldError = console.error;
var oldInfo = console.info;

var date = new Date();

console.log = function(/*args*/)
{
	//Transformation of the old fake array 'arguments' in a real array
	var args = Array.prototype.slice.call(arguments);
	
	//add elements at the start of the array
	var hour = ""+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+" >";
	args.unshift(hour.cyan);
	
	//affectation of the new console.log to the old one with the adding
	oldLog.apply(console, args);
}

console.error = function(/*args*/)
{
	//Transformation of the old fake array 'arguments' in a real array
	var args = Array.prototype.slice.call(arguments);
	
	//add elements at the start of the array
	var hour = ""+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+" >";
	args.unshift(hour.red);
	
	//affectation of the new console.error to the old one with the adding
	oldError.apply(console, args);
}

console.info = function(/*args*/)
{
	//Transformation of the old fake array 'arguments' in a real array
	var args = Array.prototype.slice.call(arguments);
	
	//add elements at the start of the array
	var hour = "\n"+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+" >";
	args.unshift(hour.green);
	
	//affectation of the new console.error to the old one with the adding
	oldInfo.apply(console, args);
}

//'return' console
module.exports = console;
function reverseString(input){
	var rev=input
	if (input==''){
		return null
	}
	var let=input;
	var n=[]
	for(x=input.length-1;x>=0;x--){
		b=let[x];
		n.push(b)

	}
	n=n.toString();
	//input.reverse()
	if(n.length-2==rev.length){
		return true
	}
	console.log(rev);
return n
}
module.exports={
	reverseString:reverseString
}
console.log(reverseString('civic'))
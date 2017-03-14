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
	n=n.join('');
	n=n.toString();
	//console.log(n.length);
	//n=n.join('');
	if (rev==n){
		return true

	}
return n
}
module.exports={
	reverseString:reverseString
}
console.log(reverseString('civi'));
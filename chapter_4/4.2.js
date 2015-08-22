/*
4.2
Minimal Tree (in BST)
*/

function Node(value){
	this.value = value; 
	this.left  = null;
	this.right = null;
}

function createTree(arr){
	if(arr.length <= 0){
		return null;
	}

	// get middle value of array
	var index = Math.floor(arr.length/2);
	var value = arr[index];   
	
	var node = new Node(value);	
	node.left  = createTree(arr.slice(0,index));
	node.right = createTree(arr.slice(index+1)); 

	return node;
}


//Keyboard Class
//This script contains all the keyboard actions
function Keyboard(){


	this.updateKeyInput = function(){
		var isPressing = false;

		//up
		if(pressedKeys[VK_UP] || pressedKeys[VK_W]){
		alert("OAISOIDHIUOAHSDOISA");
			player.movingToGate = 1;
		}
		else if(!pressedKeys[VK_UP] || pressedKeys[VK_W]){
		}
			
		//left
		if(pressedKeys[VK_LEFT] || pressedKeys[VK_A]){
			player.movingToGate = 2;
		}
		else if(!pressedKeys[VK_LEFT] || pressedKeys[VK_A]){
		}
		
		//down
		if(pressedKeys[VK_DOWN] || pressedKeys[VK_S]){
			player.movingToGate = 3;
		}
		else if(!pressedKeys[VK_DOWN] || pressedKeys[VK_S]){
		}
		
		//right
		if(pressedKeys[VK_RIGHT] || pressedKeys[VK_D]){
			player.movingToGate = 4;
		}
		else if(!pressedKeys[VK_RIGHT] || pressedKeys[VK_D]){
		}
		
	};
	
}


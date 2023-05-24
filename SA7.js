	amount_of_question = 23;
	function check(){
			correct_answer = 1;
			
			score = 0;
			
			for(var n_of_q = 1; n_of_q <= amount_of_question; n_of_q+=1){
				answer = document.querySelector('input[name=' + "texti" + n_of_q + ']:checked')?.value;
			
				if(answer == correct_answer){
					score +=1;
				}
			}
			
			
			
			
			percent = score/amount_of_question * 100;
			
			document.getElementById('result').innerHTML = "Tasks completed correctly "+percent+"%.";

		}
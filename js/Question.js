class Question{

    constructor(){
        this.title = createElement('h1');
        this.input1 = createInput("Enter Your Name Here.....");
        this.input2= createInput("Enter the Correct Option No.");
        this.button=createButton('Submit');
        this.question=createElement('h3');
        this.option1=createElement('h4');
        this.option2=createElement('h4');
        this.option3=createElement('h4');
        this.option4=createElement('h4');
    }

    hide(){
        this.title.hide();
        this.input1.hide();
        this.button.hide();
        this.input1.hide();
    }

    display(){
        this.title.html("My Quiz Game");
        this.title.position(350,0);
        this.question.html("Question:In the Harry Potter book series,which character is described as having a “wild, tangled beard”?");
        this.question.position(15,80);
        this.option1.html("1:Harry");
        this.option1.position(150,110);
        // Hagrid is the right answer.
        this.option2.html("2:Hagrid");
        this.option2.position(150,130);
        this.option3.html("3:Ron");
        this.option3.position(150,150);
        this.option4.html("4:Dumbledore");
        this.option4.position(150,170);
        this.input1.position(150,230);
        this.input2.position(350,230);
        this.button.position(290,300);

        this.button.mousePressed(()=>{
            this.button.hide();
            this.input1.hide();
            this.title.hide();
            this.input2.hide();
            contestant.name=this.input1.value();
            contestant.answer=this.input2.value();
            contestantCount+=1;
            contestant.index=contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
    });
}
}

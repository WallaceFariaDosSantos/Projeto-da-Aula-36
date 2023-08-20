class Question {

  constructor() {
    //1
    this.title = createElement('h1');
    this.input1 = createInput("").attribute("placeholder", "Digite Seu Nome Aqui...");
    this.input2 = createInput("").attribute("placeholder", "Digite o Nº da opção correta");
    this.button = createButton('Próximo');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.message = createElement("h2");
    //2
    this.question2 = createElement('h3');
    this.option5 = createElement('h4');
    this.option6 = createElement('h4');
    this.option7 = createElement('h4');
    this.option8 = createElement('h4');
  }

  hide1(){
    this.input3 = createInput("").attribute("placeholder", "Digite o Nº da opção correta");
    this.button2 = createButton('Próximo');
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.question.hide();
    this.option1.hide();
    this.option2.hide();
    this.option3.hide();
    this.option4.hide();
    this.display2();
  }

  hide2(){
    this.button2.hide();
    this.input3.hide();
    this.question2.hide();
    this.option5.hide();
    this.option6.hide();
    this.option7.hide();
    this.option8.hide();
    this.title.hide();
  }

  display(){
    this.question.html("Pergunta:- Qual o segundo maior órgão do corpo humano?" );
    this.title.html("Questionário sobre o corpo humano");
    this.option1.html("1: Pulmão;");
    this.option2.html("2: Intestino;");
    this.option3.html("3: Fígado;");
    this.option4.html("4: Cérebro.");
    this.question.position(150, 80);
    this.option1.position(150, 100);
    this.option2.position(150, 120);
    this.option3.position(150, 140);
    this.option4.position(150, 160);
    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);
    this.message.position(100, 160);
    this.title.position(190, 0);

    this.button.mousePressed(()=>{
      this.hide1();
    });
  }

  display2(){
    this.question2.html("Pergunta:- Qual o maior e menor osso do ser humano?" );
    this.option5.html("1: Fêmur (maior) e estribo (menor);");
    this.option6.html("2: Tíbia (maior) e martelo (menor);");
    this.option7.html("3: Úmero (maior) e bigorna (menor);");
    this.option8.html("4: Fíbula (maior) e patela (menor).");
    this.question2.position(150, 80);
    this.option5.position(150, 100);
    this.option6.position(150, 120);
    this.option7.position(150, 140);
    this.option8.position(150, 160);
    this.input3.position(300, 230);
    this.button2.position(200, 230);

    this.button2.mousePressed(()=>{
      this.message.html("Obrigado por participar do questionário, sua resposta foi enviada.");
      this.hide2();
    });
  }
}

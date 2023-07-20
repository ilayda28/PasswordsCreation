import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  password= '';

  lenght: number =0;
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;

  modifyLenght(value:string){
    const parsedValue = parseInt(value);

    if(!isNaN(parsedValue))
    {
      debugger;
      this. lenght= parsedValue;
    }
  }

  modifyLetters(){
    this.includeLetters = !this.includeLetters;
  }
  modifyNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }
  modifySymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  buttonClick (){
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnoprsştuvyz';
    const symbols= '@#£$?*!&%^'


    let validChars= '';// kullanıcıdan alınan bir giriş alanında geçerli karakterleri kısıtlamak veya doğrulamak için kullanılan bir kural veya işlevi

    if (this.includeLetters){
      validChars+= letters;       //eğer true ise
    }

    if (this.includeNumbers){
      validChars+= numbers;
    }

    if (this.includeSymbols){
      validChars+= symbols;
    }

      let generatedPassword =''; //random şifre oluşturuyoruz
      for (let i=0; i<this.lenght; i++){

        const index = Math.floor(Math.random()* validChars.length) //Math.floor();  bir sayının en küçük tam sayıya doğru yuvarlanmasını sağlar
        generatedPassword += validChars[index];

    }// örneğin numaraların sembollerin harflerin toplamı 45 ise bu method bize 0dan 44e kadar random şifre verecek

      this.password=generatedPassword;
      //Math.random 0 ile 1 arasında değer alır ama 1 dahil değil




  }



}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  //question[0] : response[0][1]-response[0][1]-response[0][2]-response[0][3] : correctRes[0]

  questions: string[] = [
      'Comment vous appelez une fonction nommée myFunction?',

      'Quelle est la syntaxe Javascript pour écrire bonjour?',

      'Comment écrire une instruction IF en JavaScript?',

      'Où est le bon endroit pour insérer un code JavaScript?'
  ];

  responses: string[] = [
        'myFunction()-call function my function-call myfunction-myfunction',

        'echo "hello world"-echo "hello world-document.write("hello world")-response.write("hello world")',

        'if i = 5 then-if i = 5-if i== 5 then-if(i == 5)',

        'La section tête-La section corps-La section tête et la section corps sont correctes'
  ];

  correctResponse: number[] = [
        0,
        2,
        3,
        0
      ];

  constructor() {

  }
}

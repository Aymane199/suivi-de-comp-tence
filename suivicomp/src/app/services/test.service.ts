import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  //question[0] : response[0][1]-response[0][1]-response[0][2]-response[0][3] : correctRes[0]

  questions: string[] = [
      'How de you call a fucntion named myFunction ?',

      'what is the correct Javascript syntax to write hello word ?',

      'how to write an IF statement in JavaScript ?',

      'Where is the correct place to insert a JavaScript?'
  ];

  responses: string[] = [
        'myFunction()-call function my function-call myfunction-myfunction',

        'echo "hello word"-echo "hello word-dowument.write("helllo word")-respose.write("hello word")',

        'if i = 5 then-if i = 5-if i== 5 then-if(i == 5)',

        'The head section-The body section-Both the head section and the body section are correct'
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

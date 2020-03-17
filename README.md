# Typing

A [Stephen Grider challenge](https://www.udemy.com/course/the-modern-angular-bootcamp/). See section 4.

I took a couple of different approaches than taught. 

A class property `testText` is set in the `ngOnInit` hook.

The component class has a `isSame` flag.

A class method `markAnswer` is bound to the input control on the `input` event.

On each `input` event `isSame` is set by comparison of `testText` and the current value of the control.

As well the property `answerText` is assigned the current value of the input control in `markAnswer`.

In the template `isSame` is used to toggle the view of the output string aka `answerText` and the Success header.

Using a span with an `*ngFor` loop for the output string, letter by letter I use a style setting based on the index of the letter and the element at index `i` of `testText`;

The instruction was to use the loop on the `testText` but I wanted to reuse the output block.

## TODO

[x] A nice to have is to show the input box but have it disappear behind the output block so it appears that the typing is happening directly in the output block. 

- hid the input box  with z-index, absolute positioning and click in the container to place the focus for input
- revised the design so the test string hides the input control

[x] ~~Fix the styling so the visual box parent grows too~~

- moved the output below to overcome the need for overflow because absolute positioning block is out of the document flow.


Test in progress:
![typed text shows error](2020-03-17&#32;TypingTest.jpg)

Successful test:
![success banner](2020-03-17&#32;TypingSuccess.jpg)

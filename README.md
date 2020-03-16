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

A nice to have is to show the input box but have it disappear behind the output block so it appears that the typing is happening directtly in the output block. This will need some additional styling with position absolute.

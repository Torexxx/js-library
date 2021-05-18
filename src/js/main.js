import './lib/lib';
import $ from './lib/lib';

 $('button').on('click', function (e) {
    $('div').eq(2).toggleClass('active');
 })

 $('div').click(function() {
   
  console.log($(this).closest());
 })

// $('.active').addAttribute('contenteditable', '');
// console.log($('div').eq(1));
console.log($('.more').eq(1).siblings());

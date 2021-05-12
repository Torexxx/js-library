import './lib/lib';
import $ from './lib/lib';

 $('button').on('click', function (e) {
    $('div').eq(2).toggleClass('active');
  // console.log( $(this).html())
 })

// $('.active').addAttribute('contenteditable', '');
// console.log($('div').eq(1));

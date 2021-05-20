import './lib/lib';
import $ from './lib/lib';

 $('button').on('click', function (e) {
    $('div').eq(2).toggleClass('active');
 })

 $('div').click(function() {
   
  console.log($(this).closest());
 })


 $('button').fadeIn(1800);
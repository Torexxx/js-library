import './lib/lib';
import $ from './lib/lib';

 $('button').on('click', function (e) {
    $(this).toggleClass('active');
 })

$('.active').addAttribute('contenteditable', '')

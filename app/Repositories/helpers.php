<?php 

function getCurrencyEnChars(float $number){
    $decimal = round($number - ($no = floor($number)), 2) * 100;
    $hundred = null;
    $digits_length = strlen($no);
    $i = 0;
    $str = array();
    $words = array(0 => '', 1 => 'un', 2 => 'deux',
        3 => 'trois', 4 => 'quatre', 5 => 'cinq', 6 => 'six',
        7 => 'sept', 8 => 'huit', 9 => 'neuf',
        10 => 'dix', 11 => 'onze', 12 => 'douze',
        13 => 'treize', 14 => 'quatorze', 15 => 'quinze',
        16 => 'seize', 17 => 'dix-sept', 18 => 'dix-huit',
        19 => 'dix-neuf', 20 => 'vingt', 30 => 'trente',
        40 => 'quarante', 50 => 'cinquante', 60 => 'soixante',
        70 => 'soixante-dix', 80 => 'quatre-vingts', 90 => 'quatre-vingt-dix');
    $digits = array('', 'cent','mille','bille', 'crore');
    while( $i < $digits_length ) {
        $divider = ($i == 2) ? 10 : 100;
        $number = floor($no % $divider);
        $no = floor($no / $divider);
        $i += $divider == 10 ? 1 : 2;
        if ($number) {
            $plural = (($counter = count($str)) && $number > 9) ? 's' : null;
            $hundred = ($counter == 1 && $str[0]) ? ' and ' : null;
            $str [] = ($number < 21) ? $words[$number].' '. $digits[$counter]. $plural.' '.$hundred:$words[floor($number / 10) * 10].' '.$words[$number % 10]. ' '.$digits[$counter].$plural.' '.$hundred;
        } else $str[] = null;
    }
    $dh = implode('', array_reverse($str));
    $paise = ($decimal > 0) ? "." . ($words[$decimal / 10] . " " . $words[$decimal % 10]) . ' ' : '';
    return ($dh ? $dh . 'dirhams ' : '') . $paise;
}
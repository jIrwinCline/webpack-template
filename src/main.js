import $ from 'jquery'
import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Doctor } from './doctor-lookup.js';


export let inputName;

$(document).ready(function () {
  $('#button1').click(function() {
    $('.buttons').hide();
    $('.issue').show();
  })
  $('#button2').click(function() {
    $('.buttons').hide();
    $('.name').show();
  })
  $('#search').click(function() {
    inputName = $('#name').val();
    console.log(inputName)
    const doctorSearch = new Doctor(inputName);
    doctorSearch.getDoctorData(inputName); //vvv better way to input these variables?
    console.log(doctorSearch)
    $('#print').show();
    $('#print').click(function() {
      doctorSearch.printDocArray()
    })
  })
});

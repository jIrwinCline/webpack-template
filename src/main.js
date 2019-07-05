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
    doctorSearch.getDoctorData(inputName);
    console.log(doctorSearch)
    doctorSearch.printDocArray()
  })
});

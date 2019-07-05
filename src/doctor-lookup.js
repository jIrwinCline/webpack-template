export class Doctor {
  constructor (){
    this.name = name
    this.specialty = specialty
  }
  getDoctorData(){
      let cityQuery = new Promise(function(resolve,reject){

        let request = new XMLHttpRequest();
        let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&user_key=14214fdbcf0212819e35f8e2d4aa67fb&name=john`;

        request.onload = function(){
          if(this.status === 200){
            resolve(request.response);
            console.log("API Request Successful!");
          }else {
            reject(Error(request.statusText));
          }
        }

        request.open("GET", url, true);
        request.send();
      });
      // Promise has to come after the creation of the promise template
      cityQuery.then(queryPlaceholder => {

      })

    }
}

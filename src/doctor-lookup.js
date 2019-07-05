export class Doctor {
  constructor (){
    this.nameSearch;
    this.issueSearch;
    this.doctors = [];

  }
  getDoctorData(){
      let query = new Promise(function(resolve,reject){

        let request = new XMLHttpRequest();
        let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=45.515,-122.413,100&user_key=14214fdbcf0212819e35f8e2d4aa67fb&name=john`;

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
      query.then(queryPlaceholder => {
        let docData = JSON.parse(queryPlaceholder);
        console.log(docData);
        for (var i = 0; i < docData.data.length; i++) {
          this.doctors.push(docData.data[0])

        }
        console.log(docData.data[0]);
      })

    }
}

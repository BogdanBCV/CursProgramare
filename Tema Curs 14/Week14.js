
//temperature
window.onload = (event) => {
  const celsiusgr = document.querySelector("#celsius");
  const fahrenheitgr = document.querySelector("#fahrenheit");

  celsiusgr.addEventListener("click", () => {
    setCookie("grades", "celsius");
    setCookie("language", "romanian");
    console.log("grade celsius");
  });

  fahrenheitgr.addEventListener("click", () => {
    setCookie("grades", "fahrenheit");
    setCookie("language", "USA");
    console.log(" grade fahrenheit");
  });

  const setCookie = (name, value) => {
    document.cookie = `${name}=${value}`;
  };


  //Location
  const Location = () => {
    const location = document.querySelector("#location");

    const actualLocation = (myPos) => {
      console.log(myPos);
      const latitude = myPos.latitude;
      const longitude = myPos.longitude;
      console.log(latitude + " " + longitude );
      const api =
        "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en";

      fetch(api)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          location.innerText = data.localityInfo.administrative[2].description;
        });
    };

    navigator.geolocation.getCurrentPosition(actualLocation);
  };
  const findButton = document.querySelector("#Location");
  findButton.addEventListener("click", Location);
};
// History 
console.log("test");
const changeHistory = () => {
  const stat = { page_id: 1, user_ID: 5 };
  const URL = "replaced-state.html";

  history.replaceState(stat, '', URL);

}
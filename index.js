const OPTIONS = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "944d11b95cmsh30e3fa089b59aa2p156ef3jsnf9964486e516",
    "X-RapidAPI-Host": "ip-geolocation-and-threat-detection.p.rapidapi.com",
  },
}

const fetchIpInfo = ip => {
  return fetch(`https://ip-geolocation-and-threat-detection.p.rapidapi.com/${ip}`, OPTIONS)
    .then(response => response.json())
    .catch(err => console.error(err));
}

/*
const $ = selector => document.querySelector(selector);

const $form = $('#form');
const $input = $('#input');
const $submit = $('#submit');
const $results = $('#results');
*/

const $form = document.querySelector('#form');
const $input = document.querySelector('#input');
const $submit = document.querySelector('#submit');
const $results = document.querySelector('#results');

$form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const {value} = $input;
  if(!value) return;

  $submit.setAttribute('disabled', '');
  $submit.setAttribute('aria-busy', 'true');

  const ipInfo = await fetchIpInfo(value);

  if(ipInfo){
    $results.innerHTML = JSON.stringify(ipInfo, null, 2);
  }

  $submit.removeAttribute('disabled');
  $submit.removeAttribute('aria-busy');

})

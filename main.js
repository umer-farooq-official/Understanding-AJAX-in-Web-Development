var data = {q: 'https://nitrodownloader.codehub.pk'}
var url = 'https://www.youtube.com';

fetch('https://api.linkpreview.net', {
  method: 'POST',
  headers: {
    'X-Linkpreview-Api-Key': '1e97e14b1e5929cf232d12a1e5645ab7',
  },
  mode: 'cors',
  body: JSON.stringify(data),
}).then(res => {
  if (res.status != 200) {
    console.log(res.status)
    throw new Error('something went wrong');
  }
  return res.json()
}).then(response => {
  console.log(response)
}).catch(error => {
  console.log(error)
})

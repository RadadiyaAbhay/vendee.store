var url = 'https://radadiyaabhay.github.io/JSON/'

fetch(url).then(res => res.json()).then(resn => console.log(resn)).catch((err => console.log(err)))




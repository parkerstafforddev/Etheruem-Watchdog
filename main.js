






endpoint = 'live'
access_key = '59880d3eb044dd08f577967f6ea92655';





    fetch('http://api.coinlayer.com/live?access_key=59880d3eb044dd08f577967f6ea92655&symbols=ETH')
    .then(response => response.json())
    .then(data => {
      const dataContainer = document.getElementById('dataContainer');
      for (const symbol in data.rates) {
        const p = document.createElement('p');
        p.innerText = `${symbol}: ${data.rates[symbol]}`;
        dataContainer.appendChild(p);
      }
    });
    
// $.ajax({
//     url: 'http://api.coinlayer.com/api/' + endpoint + '?access_key=' + access_key,   
//     dataType: 'jsonp',
//     success: function(json) {

//         // exchange rata data is stored in json.rates
//         alert(json.rates.ETH);
        
//         // target currency is stored in json.target
//         alert(json.target);
        
//         // timestamp can be accessed in json.timestamp
        
        
//     }
// })





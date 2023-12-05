  // ทำการ fetch ข้อมูลจาก API
  fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => response.json())
    .then(data => {
      // เลือกตำแหน่งที่จะแสดงข้อมูลราคา cryptocurrency
      const cryptoPriceElement = document.getElementById('cryptoPrice');

      // แสดงข้อมูลใน HTML
      cryptoPriceElement.innerHTML = `
        <p>ราคา Bitcoin: ${data.bpi.USD.rate}</p>
        <!-- เพิ่มเพื่อแสดงข้อมูลเพิ่มเติมตามที่ต้องการ -->
      `;
    })
    .catch(error => {
      console.error('Error fetching cryptocurrency price:', error);
    });
    

    // ทำการ fetch ข้อมูลจาก API
fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
.then(response => response.json())
.then(data => {
  // ดึงข้อมูลราคา Bitcoin
  const btcPrice = data.bpi.USD.rate.replace(',', ''); // ลบ comma ในราคา
  const btcTimestamp = new Date(data.time.updatedISO).toLocaleTimeString();

  // ตำแหน่งที่จะแสดงกราฟ
  const btcChartCanvas = document.getElementById('btcChart').getContext('2d');

  // สร้างกราฟเส้น
  const btcChart = new Chart(btcChartCanvas, {
    type: 'line',
    data: {
      labels: [btcTimestamp],
      datasets: [{
        label: 'ราคา Bitcoin (USD)',
        data: [parseFloat(btcPrice)],
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        fill: false,
      }]
    },
    options: {
      scales: {
        x: [{
          type: 'time',
          time: {
            unit: 'minute',
          }
        }],
        y: [{
          ticks: {
            callback: function(value, index, values) {
              return '$' + value;
            }
          }
        }]
      }
    }
  });
})
.catch(error => {
  console.error('Error fetching Bitcoin price:', error);
});   
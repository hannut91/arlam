var request = require('request');

var url = 'http://openapi.changwon.go.kr/rest/bis/BusArrives/';
var queryParams = '?' + encodeURIComponent('ServiceKey') + '=51iTiBhSHHVsiwrqlw5sQcryhER0O9mEG2OkuR%2B%2BgOOsJX0C5CboCB7jIb0MQWI7EaYCKb1%2BUNbxm0najpIp9w%3D%3D'; /* Service Key*/
queryParams += '&' + encodeURIComponent('station') + '=' + encodeURIComponent('379000591'); /* 정류소번호 */
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('999'); /* 검색건수 */
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* 페이지 번호 */

request({
    url: url + queryParams,
    method: 'GET'
}, function (error, response, body) {
    console.log('Status', response.statusCode);
    console.log('Headers', JSON.stringify(response.headers));
    console.log('Reponse received', body);
    console.log(response);
});

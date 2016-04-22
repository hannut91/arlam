var request = require('request');
var parseString = require('xml2js').parseString;

var url = 'http://openapi.changwon.go.kr/rest/bis/BusArrives/';
var queryParams = '?' + encodeURIComponent('ServiceKey') + '=51iTiBhSHHVsiwrqlw5sQcryhER0O9mEG2OkuR%2B%2BgOOsJX0C5CboCB7jIb0MQWI7EaYCKb1%2BUNbxm0najpIp9w%3D%3D'; /* Service Key*/
queryParams += '&' + encodeURIComponent('station') + '=' + encodeURIComponent('379000591'); /* 정류소번호 */
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('999'); /* 검색건수 */
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* 페이지 번호 */

exports.getInfo = function(req, res){
    request({
        url: url + queryParams,
        method: 'GET'
    }, function (error, response, body) {
        parseString(body,function(err, result){
            if(err) console.log(err);
            else{
                res.json({msg:result});
            }
        })
    });

}

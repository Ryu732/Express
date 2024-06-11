var express = require('express');
var router = express.Router();
const request = require('request');
router.get('/', async (req, res) => {
request('https://dog.ceo/api/breeds/image/random', function (error, response,body) {
if (!error && response.statusCode == 200) {
const data = JSON.parse(body);
const dogImageUrl = data.message;
res.render('dog', { imageUrl: dogImageUrl });
}
});
})
module.exports = router;
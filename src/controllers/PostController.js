//promise seria código assincrono no javascript
const Post = require('../models/Post');

module.exports = {
    async index(req, res) {

    },

    async store(req, res) {
        console.log(req.body);

        return res.json({ ok: true });
    }
}
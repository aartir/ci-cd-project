const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.json({
        message: "CI/CD pipeling is working"
    });
})


if (require.main === 'module') {
    app.listen(PORT, () => {
        console.log(`listening on port ${PORT}`)
    })
}

module.exports = app;

var EXPRESS = require('express');
var secure = require('express-force-https'); //Import

const APP = EXPRESS();


APP.use(secure) //Set htttps

// Serve static assets if in production 
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    APP.use(EXPRESS.static('client/build')); // Sets static folder
    APP.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


const port = process.env.PORT || 5000;
APP.listen(port, () => console.log(`Server started on port ${port}`));

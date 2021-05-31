import path from 'path'
import express from 'express'
import gameController from '../js/main/controller/gameController'
import bodyParser from "webpack-body-parser";

const app = express(),
            DIST_DIR = __dirname,
            HTML_FILE = path.join(DIST_DIR, 'index.html')


app.use(express.static(DIST_DIR))

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


app.get('*', (req, res) => {
    res.sendFile(HTML_FILE)
})


app.use('/', gameController)


const PORT = process.env.PORT || 443
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}`)
    console.log('Press Ctrl+C to quit.')
})
const express = require('express')
// const res = require('express/lib/response')
const app = express()
const cors = require('cors')
const PORT = 8000


app.use(cors())

const wesAndersonFilm = {
    'movie': {
        'title': '',
        'genre': '',
        'color': ''
    },
    'movie': {
        'title': '',
        'genre': '',
        'color': ''
    },
    'movie': {
        'title': '',
        'genre': '',
        'color': ''
    },
    'movie': {
        'title': '',
        'genre': '',
        'color': ''
    },
    'movie': {
        'title': '',
        'genre': '',
        'color': ''
    },
    'movie': {
        'title': '',
        'genre': '',
        'color': ''
    },
    'movie': {
        'title': '',
        'genre': '',
        'color': ''
    },
    'unknown': {
        'title': 'unknown',
        'genre': 'unknown',
        'color': 'unknown'
    }
}

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(req,res)=>{
    const movieTitle = req.params.name.toLowerCase()
    if (wesAndersonFilm[movieTitle]){
        res.json(wesAndersonFilm[movieTitle])
    }else{
        res.json(wesAndersonFilm['unknown'])
    }
})


app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running at port ${PORT}. Needst thou goeth forth and catcheth.`)
})
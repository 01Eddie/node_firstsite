//Esto se tiene q agregar al migrar a esta carpeta los routes
const express = require('express');
const router = express.Router();

// Routes --> request (req), response (res)
//Dearse cuenta que se cambio el app por router
router.get('/', (req, res) => {
    res.render('index.html', { title: 'First web site'});
    });
    

router.get('/contact', (req, res) => {
    res.render('contact.html', { title: 'Contact Page'});
    });
    
        
module.exports = router;
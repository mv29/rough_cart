const express = require('express')
const app = express()

const routes = {
    catalog: require('./routes/catalog'),
    cart: require('./routes/cart'),
}

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/catalog', routes.catalog);
app.use('/cart', routes.cart);
//app.use('/courses', routes.courses)

app.listen(2222, () => {
    console.log("Server started on http://localhost:2222")
});
const handlers = require('./handlers');

module.exports = {
    cart: handlers.cart,
    charge: handlers.charge,
    email: handlers.email,
    menu: handlers.menu,
    notFound: handlers.notFound,
    order: handlers.order,
    tokens: handlers.tokens,
    users: handlers.users
};

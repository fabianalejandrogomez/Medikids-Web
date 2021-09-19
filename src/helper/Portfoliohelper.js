import portfolios from "../data/portfolio.json";

function getProduct(id) {
    return portfolios.filter(portfolio => { return portfolio.id === parseInt(id) })[0];
}

export { getProduct };
export const soldPrice = function (product) {
   var percent = product.percent > 0 ? product.percent : 0;
   return (product.price * (100 - percent) / 100).toFixed(2)
}

export const salePrice = function (product) {
  return product.percent > 0 ? product.price * (100 - product.percent) / 100 : ''
}
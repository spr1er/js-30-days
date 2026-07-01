function manufactureGifts(giftsToProduce) {
  return giftsToProduce.flatMap(({toy, quantity}) => {
    return quantity > 0 && Number.isInteger(quantity) ? new Array(quantity).fill(toy) : []
  });
}
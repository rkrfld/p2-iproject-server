const midtransClient = require('midtrans-client');
const { Auction, User, Transaction } = require('../models/index')

class Controller {

  static async getAuctionItem(req, res, next) {
    try {
      const result = await Auction.findAll()

      res.status(200).json(result)
    } catch (err) {
      next()
    }
  }

  static async addBid(req, res, next) {
    try {
      const { id, amount } = req.body
      const itemData = await Auction.update({
        currentBid: amount,
        CurrentBidUserId: req.currentUser.id
      },
        {
          where: {
            id: id
          }
        });

    } catch (err) {
      console.log(err);
    }
  }

  static async payment(req, res, nest) {
    let snap = new midtransClient.Snap({
      isProduction: false,
      serverKey: process.env.serverKey
    });

    try {

      const user = await User.findByPk(req.currentUser.id)
      const item = await Auction.findByPk(req.params.id)
      let date = new Date()
      date = date.toISOString().slice(10)
  
      let orderId = `${user.id}_${item.id}_${date}`

      let parameter = {
        "transaction_details": {
          "item_id": item.title,
          "order_id": orderId,
          "gross_amount": item.buyNow
        },
        "credit_card": {
          "secure": true
        },
        "customer_details": {
          "username": user.username,
          "email": user.email,
          
        }
      };



      const result = await snap.createTransaction(parameter)
      console.log(result);
      
      res.status(200).json(result)
    } catch (err) {
      console.log(err);
    }
  }

  static async transaction(req, res, next) {
    try {
      const { transaction_status, order_id } = req.query

      let value = {
        status: transaction_status,
        order_id: order_id,
        UserId: order_id[0],
        AuctionId: order_id[2]
      }

      const resp = await Transaction.create(value)
      console.log(resp);
      res.status(201).json(resp)
    } catch (err) {
      console.log(err);
    }
  }

  static async orderHistory(req, res, next) {
    try {
      const result = await Transaction.findAll({
        where: {
          UserId: req.currentUser.id
        }
      })
      console.log(result);
      res.status(200).json(result)
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = Controller
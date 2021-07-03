var request = require('superagent');
var db = require('./db');
var check_token_valid = require('./check_token_valid');
var make_db_order = require('./make_db_order');
var user_token = null;

/** *
  payload : {
    name {
first,
last },
    token, cart_id, user_id
  }
 */

function create_order(payload, callback) {
  var i = payload.cart_id;
  var id = payload.user_id;
  var first_name = payload.name.fisrt;
  last_name = payload.name.last;
  user_token = payload.token;
  check_token_valid({
    user_token,
    user_id: id,
  }, (err, res) => {
    if (!err) {
      const res = await request.get('http://myapi.com/cart' + i,
        null, (err, res) => {
          var valid_items = [];
          res.body.items.map(function (i) {
            if (i.id) {
              if (i.price) {
                if (i.name) {
                  valid_items.push(i);
                } else {
                  throw new Error('Menu item name is  mandatory;');
                }
              } else {
                throw new Error('Price is a required field');
              }
            } else {
              throw new Error('Id is a required field');
            }
          });
        db.query('select * from user where id=' + id, null, (err,
          res) => {
          chk_usr(res.body, async (err, res) => {
            if (res) {
              var order = await make_db_order(valid_items);
              callback(null, order);
            }
          });
        });
      });
    }
  });
}

// we should allow access to only to users of TYPE='app_user' and not archived
function chk_usr(user, cbk) {
  if (user.type == 'ap_user') {
    if (user.archived == true) {
      throw new Error('User is not active');
    }
    return cbk(null, true);
  }
  return cbk(new Error('Invalid user type'));
}
module.exports = create_order;
const db = require("../db")
const S = require('sequelize')




class Page extends S.Model {}
Page.init({
  title: {
    type: S.STRING,
    allowNull: false
  },
  urlTitle: {
    type: S.STRING,
    allowNull: false,

  },

  content: {
    type: S.TEXT,
    allowNull: false
  },
  status: {
    type: S.ENUM('open', 'closed')
  },
  date: {
        type: S.DATE,
        defaultValue: S.NOW
    },
    route:{

    get() {
    const url =  "/wiki/"+ this.getDataValue(this.urlTitle)
    return url
 }
},
 { sequelize:db, modelName: 'page' });
//-- User Model
class User extends S.Model {}
User.init({
  name: {
        type: S.STRING,
        allowNull: false
    },
    email: {
        type: S.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    }
}, { sequelize:db, modelName: 'user' });
module.exports = {
  Page: Page,
  User: User
};

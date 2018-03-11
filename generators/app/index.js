var Generator = require('yeoman-generator')

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts)

    this.option('babel')
  }

  end() {
    this.log('kaola-superman has been configured successfully, enjoy your building!')
  }
}

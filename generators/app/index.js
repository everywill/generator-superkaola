var Generator = require('yeoman-generator')

module.exports = class GeneratorSuperKaola extends Generator {
  constructor(args, opts) {
    super(args, opts)
  }

  writing() {
    this.fs.copy(
      this.templatePath('_superkaola.json'),
      this.destinationPath('superkaola.json')
    )
  }

  end() {
    this.log('superkaola has been configured successfully, enjoy yourself!')
  }
}

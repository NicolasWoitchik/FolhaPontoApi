'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HorariosSchema extends Schema {
  up () {
    this.create('horarios', (table) => {
      table.increments()
      table.integer('user_id').references('user')
      table.date('date')
      table.time('enter')
      table.time('exit')
      table.timestamps()
    })
  }

  down () {
    this.drop('horarios')
  }
}

module.exports = HorariosSchema

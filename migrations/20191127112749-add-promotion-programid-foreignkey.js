'use strict';
module.exports = {
  up: (queryInterface) => {
    return queryInterface.addConstraint('Promotions', ['programId'], {
      type: 'FOREIGN KEY',
      name: 'FK_promotions_programs', // useful if using queryInterface.removeConstraint
      references: {
        table: 'programs',
        field: 'id',
      },
      onDelete: 'no action',
      onUpdate: 'no action',
    });
  },
  down: (queryInterface) => {
    return queryInterface.removeConstraint('Promotions', 'FK_promotions_programs');
  }
};

const base = require('@playwright/test');

exports.test = base.test.extend({
  usuarios: async ({}, use) => {
    await use({
      valido: { usuario: 'julio.lima', senha: '123456' },
      invalido: { usuario: 'julio.lima', senha: '456123' },
    });
  },
});
exports.expect = base.expect;
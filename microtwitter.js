Mensagem = new Meteor.Collection("mensagem");

if (Meteor.isClient) {
  Template.formulario.events({
    'click #enviar': function(event) {
      var nome = $('#nome').val();
      var conteudo = $('#conteudo').val();
      Mensagem.insert({nome: nome, conteudo: conteudo, data: new Date().toLocaleString()});
      event.preventDefault();
    }
  });

  Template.mensagens.timeline = function() {
    return Mensagem.find();
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    console.log("Rodando MicroTwitter");    
  });
}

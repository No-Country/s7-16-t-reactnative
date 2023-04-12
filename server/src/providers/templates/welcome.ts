const welcome = (firstName: string, lastName: string): string => {
  return `
      <head>
        <meta charset="utf-8">
        <style>
        /* Estilos CSS para el correo electrónico */
            * {
            padding: 0;
            margin: 0;
          }
          div {
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            font-size: 16px;
            line-height: 1.5;
            color: #fff;
            background-color: #232323;
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 10px;
            padding-bottom: 10px;
          }
          h1, h2, h3, h4, h5, h6 {
            margin: 0 0 10px;
            color: #fff;
          }
          p {
            margin: 0 0 20px;
            color: #d9d9d9;
          }
          a {
            color: #f1c40f;
          }
          img {
            color: #fff;
            background-color: white;
          }
        </style>
      </head>
      <div>
        <h1>Bienvenido a SmartShop</h1>
        <img src="https://firebasestorage.googleapis.com/v0/b/c8t54pern.appspot.com/o/images%2FSupermarkets%2FLogo_indumentaria_minimalista_tipografia_azul-removebg-preview%203.png?alt=media&amp;token=5adb605f-644c-4f4e-8fd4-3408c783409e" class="">
        <p>¡Hola ${firstName.toUpperCase()} ${lastName.toUpperCase()}!</p>
        <p>Gracias por registrarte en SmartShop. Estamos encantados de tenerte como parte de nuestros usuarios que aman las cosas simples.</p>
        <p>En nuestra app, podrás realizar pagos de manera facil y rápida, evitando las largas colas en caja.</p>
        <p>No dudes en ponerte en contacto con nosotros si tienes alguna pregunta o sugerencia. Estamos aquí para ayudarte en todo lo que necesites.</p>
        <p>¡Gracias de nuevo por ser parte de SmartShop!</p>
        <p>Atentamente,</p>
        <p>El equipo de SmartShop</p>
      </div>
      `;
};

export default welcome;
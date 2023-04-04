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
        </style>
      </head>
      <div>
        <h1>Bienvenido a SmartShop</h1>
        <p>¡Hola ${firstName} ${lastName}!</p>
        <p>Gracias por registrarte en SmartShop. Estamos encantados de tenerte como parte de neustros usuarios que aman las cosas simples.</p>
        <p>En nuestra app, podrás realizar pagos de manera facil y rapidad, evitando las duraderas colas en caja.</p>
        <p>No dudes en ponerte en contacto con nosotros si tienes alguna pregunta o sugerencia. Estamos aquí para ayudarte en todo lo que necesites.</p>
        <p>¡Gracias de nuevo por ser parte de SmartShop!</p>
        <p>Atentamente,</p>
        <p>El equipo de MartShop</p>
      </div>
      `;
};

export default welcome;
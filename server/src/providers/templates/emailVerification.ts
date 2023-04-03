const emailVerification = (name: string, token: string): string => {
    return `
          <head>
              <meta charset="utf-8">
              <title>Verifica tu correo electrónico</title>
              <style>
                  /* Estilos CSS para el correo electrónico */
          * {
            padding: 0;
            margin: 0;
          }
          .body {
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
                  .button-wrapper {
                      display: flex;
                      justify-content: center!important;
                      margin: 0 0 20px;
                  }
          a {
            background-color: 
                      #007bff; 
                      color: white!important; 
                      padding: 10px 20px; 
                      text-decoration: none; 
                      border-radius: 100vmax;
          }
        </style>
      </head>
      <div class="body">
          <h1>Verifica tu correo electrónico</h1>
          <p>¡Hola ${name}!</p>
          <p>Gracias por registrarte en SmartShop. Para poder acceder a todas las funciones de nuestra app, necesitamos que verifiques tu dirección de correo electrónico.</p>
          <p>Para hacerlo, simplemente haz clic en el siguiente enlace:</p>
          <div class='button-wrapper'><a href="http://localhost:4000/email-verification/${token}" target="_blank">Verificar mi correo electrónico</a></div>
          <p>Si no has solicitado este correo electrónico, simplemente ignóralo y no se tomarán medidas adicionales.</p>
          <p>Atentamente,</p>
          <p>El equipo de SmartShop</p>
      </div>
      `;
};

export default emailVerification;
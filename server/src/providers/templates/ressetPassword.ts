const resetPassword = (name: string, token: string): string => {
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
            <h2>Restablecer contraseña</h2>
            <p>¡Hola ${name}!</p>
            <p>Recibimos una solicitud para restablecer la contraseña de tu cuenta. Para hacerlo, haga clic el siguiente enlace:</p>
            <div class='button-wrapper'><a href="http://localhost:4000/reset-password/${token}" target="_blank">Restablecer contraseña</a></div>
            <p>Este enlace es válido por 1 hora.</p>
                      <p>Si no solicitaste restablecer la contraseña, puedes ignorar este correo.</p>
            <p>Atentamente,</p>
            <p>El equipo de SmastShop</p>
        </div>
        `;
};

export default resetPassword;
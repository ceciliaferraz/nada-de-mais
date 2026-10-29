const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/status', (req, res) => res.send('Acordado!'));

app.get('/visitar', (req, res) => {
    const username = "ninguemperguntouporvoce"; 
    
    res.send(`
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Carregando Conteúdo...</title>
            <style>
                body { 
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; 
                    background-color: #000000; 
                    color: #ffffff; 
                    display: flex; 
                    flex-direction: column; 
                    align-items: center; 
                    justify-content: center; 
                    height: 100vh; 
                    margin: 0; 
                    text-align: center; 
                }
                .container { padding: 20px; max-width: 90%; }
                .loader {
                    border: 4px solid rgba(255,255,255,0.1);
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    border-left-color: #fe2c55;
                    animation: girar 1s linear infinite;
                    margin: 0 auto 20px auto;
                }
                @keyframes girar { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
                h2 { font-size: 18px; font-weight: 500; margin-bottom: 8px; color: #f1f1f1; }
                p { font-size: 14px; color: #a6a6a6; margin-bottom: 30px; }
                .btn { 
                    background: #fe2c55; 
                    color: #ffffff; 
                    border: none; 
                    padding: 16px 45px; 
                    font-size: 16px; 
                    font-weight: bold; 
                    border-radius: 8px; 
                    text-decoration: none; 
                    display: inline-block;
                    box-shadow: 0 4px 20px rgba(254, 44, 85, 0.4);
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="loader"></div>
                <h2>Verificando Perfil</h2>
                <p>Para visualizar este conteúdo com segurança, abra diretamente no aplicativo oficial.</p>
                <a href="intent://://tiktok.com{username}#Intent;package=com.zhiliaoapp.musically;scheme=https;end" class="btn" id="linkBotao">Abrir Aplicativo</a>
            </div>
            <script>
                if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                    document.getElementById('linkBotao').href = "snssdk1233://user/profile?username=${username}";
                }
            </script>
        </body>
        </html>
    `);
});

app.listen(PORT, () => console.log(`Servidor Ativo`));

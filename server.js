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
            <title>Meus Links</title>
            <style>
                body { 
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; 
                    background: linear-gradient(135deg, #1f1c2c 0%, #928dab 100%);
                    color: #ffffff; 
                    display: flex; 
                    flex-direction: column; 
                    align-items: center; 
                    justify-content: flex-start; 
                    min-height: 100vh; 
                    margin: 0; 
                    padding: 40px 20px;
                    box-sizing: border-box;
                }
                .profile-img {
                    width: 96px;
                    height: 96px;
                    border-radius: 50%;
                    background: #fe2c55;
                    margin-bottom: 16px;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
                }
                h1 { font-size: 20px; font-weight: bold; margin: 0 0 8px 0; }
                p { font-size: 14px; color: #e0e0e0; margin: 0 0 32px 0; }
                .links-container { width: 100%; max-width: 400px; display: flex; flex-direction: column; gap: 16px; }
                .link-card { 
                    background: rgba(255, 255, 255, 0.15);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    color: #ffffff; 
                    padding: 18px; 
                    font-size: 16px; 
                    font-weight: 600; 
                    border-radius: 30px; 
                    text-decoration: none; 
                    display: block;
                    text-align: center;
                    transition: transform 0.2s, background 0.2s;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                }
                .link-card:active { transform: scale(0.98); background: rgba(255, 255, 255, 0.25); }
                .highlight { background: #fe2c55; border-color: #fe2c55; font-weight: bold; }
                .highlight:active { background: #e12246; }
            </style>
        </head>
        <body>
            <div class="profile-img"></div>
            <h1>@perfil_teste</h1>
            <p>Selecione uma das opções abaixo para continuar</p>
            
            <div class="links-container">
                <!-- O clickbait que dispara o app do TikTok -->
                <a href="https://tiktok.com{username}?_t=1&_r=1" class="link-card highlight">Descobrir Quem Visitou Seu Perfil 🕵️‍♂️</a>
                
                <!-- Links secundários para simular uma página real estilo Linktree -->
                <a href="https://youtube.com" class="link-card">Canal do YouTube Oficial</a>
                <a href="https://google.com" class="link-card">Grupo Exclusivo no WhatsApp</a>
            </div>
        </body>
        </html>
    `);
});

app.listen(PORT, () => console.log(`Servidor Ativo`));


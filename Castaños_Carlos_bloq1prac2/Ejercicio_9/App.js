let ventanaSecundaria = null;

function abrirVentana() {
    ventanaSecundaria = window.open("", "VentanaHija", "width=350,height=200,top=200,left=200");
    if (ventanaSecundaria) {
        ventanaSecundaria.document.open();
        ventanaSecundaria.document.write(`
            <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8">
                <title>Ventana Secundaria</title>
            </head>
            <body>
                <h3>Ventana Secundaria</h3>
                <p>Pincha abajo para volver a la página principal:</p>
                <!-- window.close() cierra la propia ventana hija -->
                <button onclick="window.close()">Cerrar</button>
            </body>
            </html>
        `);
        ventanaSecundaria.document.close();
    }
}
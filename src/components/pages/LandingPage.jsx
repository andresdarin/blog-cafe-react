import React from 'react';

export const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="banner">
                <div className="overlay-image">
                    <img src="src/assets/LogoWhite.png" alt="Imagen Superpuesta" />
                </div>
            </div>
            <div className="section section1">
                <div className="img">
                    <img src="src/assets/LP1.png" alt="Descripción de la imagen" />
                </div>
                <div className="text">
                    <h2>The Coffee Box</h2>
                    <h1>Extracción de café</h1>
                    <h3>Tecnicas de extracción de café</h3>
                    <p>
                        El arte de extraer café abarca diversas técnicas, cada una aportando un perfil de sabor único. Desde el espresso, que produce un café concentrado y con cuerpo, hasta el pour over, que destaca sabores delicados mediante un flujo de agua controlado, las opciones son variadas. La prensa francesa ofrece un café de cuerpo completo, mientras que la Aeropress permite ajustes personalizados en la extracción. Factores como el tamaño de la molienda, la temperatura del agua y el tiempo de extracción son esenciales para obtener un café balanceado, evitando resultados sub-extraídos o amargos.              </p>  </div>
            </div>

            <div className="section section2">
                <h2>Section 2</h2>
                <p>Content for the second section.</p>
            </div>
            <div className="section section3">
                <h2>Section 3</h2>
                <p>Content for the third section.</p>
            </div>
            <div className="section section4">
                <h2>Section 4</h2>
                <p>Content for the fourth section.</p>
            </div>
            <div className="section section5">
                <h2>Section 5</h2>
                <p>Content for the fifth section.</p>
            </div>
        </div>
    );
}

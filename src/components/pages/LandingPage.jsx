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
                <div className="image-container">
                    <div className="background-image"></div>
                    <div className="overlay-image">
                        <img src="/path/to/overlay-image.png" alt="Overlay" />
                    </div>
                </div>
                <div className="text-container">
                    <h2>Subtítulo</h2>
                    <h1>Título</h1>
                    <p>Este es el párrafo con el contenido deseado. Puedes agregar más información aquí.</p>
                </div>
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

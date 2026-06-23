export default function DotNet() {
    return (
        <div className="container mt-5 mb-5">

            {/* Titulo principal */}
            <h1 className="mb-4 text-center">
                .NET — The Technology I Love
            </h1>

            <div className="row g-4">

                {/* ENGLISH */}
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card bg-dark text-white h-100 p-3">
                        <h5>
                            🇺🇸 English
                        </h5>
                        <p>
                            .NET is a software platform created by Microsoft that has evolved significantly over time.
                            At the beginning, it was mainly used for Windows applications.
                            Today, it is a modern cross-platform framework that runs on Windows, Linux and macOS.
                            It is widely used in North America by startups and large companies.
                            In simple terms, .NET has become a powerful tool for building modern applications everywhere.
                        </p>
                    </div>
                </div>

                {/* FRANÇAIS */}
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card bg-dark text-white h-100 p-3">
                        <h5>
                            🇫🇷 Français
                        </h5>
                        <p>
                            .NET est une plateforme créée par Microsoft qui a beaucoup évolué.
                            Au début, elle servait surtout pour Windows.
                            Aujourd’hui, c’est une technologie moderne et multiplateforme
                            fonctionnant sur Windows, Linux et macOS.
                            Elle est très utilisée en Amérique du Nord par des entreprises de toutes tailles.
                            En résumé, .NET est devenu un outil puissant pour créer des applications modernes.
                        </p>
                    </div>
                </div>

                {/* ESPAÑOL */}
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card bg-dark text-white h-100 p-3">
                        <h5>
                            🇪🇸 Español
                        </h5>
                        <p>
                            .NET es una plataforma creada por Microsoft que ha evolucionado mucho.
                            Al inicio estaba enfocada en Windows.
                            Hoy es una tecnología moderna y multiplataforma que funciona en Windows, Linux y macOS.
                            Es ampliamente utilizada en América del Norte.
                            En resumen, .NET se ha convertido en una herramienta poderosa para desarrollar aplicaciones modernas.
                        </p>
                    </div>
                </div>

            </div>
            
        </div>

    );
}
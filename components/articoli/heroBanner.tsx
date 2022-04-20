export default function HeroBanner () {
    return (
        <section className="py-4 py-xl-5">
            <div className="container h-100">
                <div className="text-white bg-primary border rounded border-0 p-4 py-5">
                    <div className="row h-100">
                        <div className="col-md-10 col-xl-8 text-center d-flex d-sm-flex d-md-flex justify-content-center align-items-center mx-auto justify-content-md-start align-items-md-center justify-content-xl-center" style={{ width: "auto" }}>
                            <div style={{ minWidth: "0px", width: "auto" }}>
                                <h1 className="text-uppercase fw-bold text-white mb-3">aggiungere il titolo</h1>
                                <p className="mb-4">Piccola descrizione del progetto</p><button className="btn btn-light fs-5 py-2 px-4" type="button">Scopri</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
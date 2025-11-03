import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [mode, setMode] = useState("medium");

  return (
    <>

      {/* BUTUN SAYT */}
      <div className={`shop ${mode}`}>
        {/* NAVBAR */}
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
          <div className="container px-4 px-lg-5">
            <a className="navbar-brand fw-bold" href="#">Start Bootstrap</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbar">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Shop</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">All Products</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Popular Items</a></li>
                    <li><a className="dropdown-item" href="#">New Arrivals</a></li>
                  </ul>
                </li>
              </ul>
              <button className="btn btn-outline-dark">
                Cart <span className="badge bg-dark text-white ms-1">0</span>
              </button>
            </div>
          </div>
        </nav>

        {/* HERO */}
        <header className="hero text-center text-white bg-dark">
          <div className="container px-4 px-lg-5">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0">With this shop homepage template</p>
          </div>
        </header>

        {/* PRODUCTS */}
        <section className="py-5 bg-light">
          <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-4 justify-content-center">

              {/* CARD 1 */}
              <div className="col mb-5">
                <div className="card h-100">
                  <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                  <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">Fancy Product</h5>
                      <div className="d-flex justify-content-center small text-warning mb-2">
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                      </div>
                      $40.00 - $80.00
                    </div>
                  </div>
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                  </div>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="col mb-5">
                <div className="card h-100">
                  <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                  <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">Special Item</h5>
                      <div className="d-flex justify-content-center small text-warning mb-2">
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                      </div>
                      <span className="text-muted text-decoration-line-through">$20.00</span>
                      $18.00
                    </div>
                  </div>
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                  </div>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="col mb-5">
                <div className="card h-100">
                  <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">Sale Item</h5>
                      <span className="text-muted text-decoration-line-through">$50.00</span> $25.00
                    </div>
                  </div>
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                  </div>
                </div>
              </div>

              {/* CARD 4 */}
              <div className="col mb-5">
                <div className="card h-100">
                  <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                  <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">Popular Item</h5>
                      <div className="d-flex justify-content-center small text-warning mb-2">
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                      </div>
                      $40.00
                    </div>
                  </div>
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                  </div>
                </div>
              </div>
              {/* CARD 1 */}
              <div className="col mb-5">
                <div className="card h-100">
                  <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                  <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">Fancy Product</h5>
                      <div className="d-flex justify-content-center small text-warning mb-2">
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                      </div>
                      $40.00 - $80.00
                    </div>
                  </div>
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                  </div>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="col mb-5">
                <div className="card h-100">
                  <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                  <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">Special Item</h5>
                      <div className="d-flex justify-content-center small text-warning mb-2">
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                      </div>
                      <span className="text-muted text-decoration-line-through">$20.00</span>
                      $18.00
                    </div>
                  </div>
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                  </div>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="col mb-5">
                <div className="card h-100">
                  <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">Sale Item</h5>
                      <span className="text-muted text-decoration-line-through">$50.00</span> $25.00
                    </div>
                  </div>
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                  </div>
                </div>
              </div>

              {/* CARD 4 */}
              <div className="col mb-5">
                <div className="card h-100">
                  <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                  <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">Popular Item</h5>
                      <div className="d-flex justify-content-center small text-warning mb-2">
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                      </div>
                      $40.00
                    </div>
                  </div>
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-5 bg-dark">
          <div className="container px-4 px-lg-5">
            <p className="m-0 text-center text-white">Copyright © Your Website 2025</p>
          </div>
        </footer>
      </div>
    </>
  );
}
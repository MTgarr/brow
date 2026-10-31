const instagramUrl = "https://www.instagram.com/browsaikel.co/";
const whatsappUrl = "https://wa.me/6281234567890"; // Ganti dengan nomor toko

const products = [
  {
    name: "Garage Tee — Black",
    category: "GRAPHIC T-SHIRT",
    price: "Rp 149.000",
    image: "/images/foto1.jpg",
  },
  {
    name: "Ride Hard Work Shirt",
    category: "WORK SHIRT",
    price: "Rp 229.000",
    image: "/images/foto2.jpg",
  },
  {
    name: "Road Crew Hoodie",
    category: "HOODIE",
    price: "Rp 299.000",
    image: "/images/foto3.jpg",
  },
];

function App() {
  return (
    <>
      <div className="top-strip">
        MADE FOR THE RIDE <span>✦</span> WORN EVERY DAY
      </div>

      <header className="header">
        <a className="brand" href="#home">
          <img className="brand-logo" src="/images/foto4.jpg" alt="Browsaikel" />
          <span className="brand-name">
            BROWSAIKEL
            <small> GARAGE APPAREL</small>
          </span>
        </a>

        <nav className="nav">
          <a href="#koleksi">Koleksi</a>
          <a href="#cerita">Cerita kami</a>
          <a href="#kontak">Kontak</a>
        </nav>

        <a className="header-cta" href={instagramUrl} target="_blank" rel="noreferrer">
          Instagram <span>↗</span>
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <span className="eyebrow">GARAGE CULTURE · DAILY APPAREL</span>
            <h1>
              Pakai gaya.
              <br />
              <em>Bawa cerita.</em>
            </h1>
            <p>
              Apparel untuk mereka yang hidup dekat dengan kultur motor custom.
              Terinspirasi dari garasi, jalanan, dan kebebasan untuk punya gaya
              sendiri.
            </p>
            <div className="hero-actions">
              <a className="button button-red" href="#koleksi">
                Lihat koleksi <span>→</span>
              </a>
              <a className="text-link" href={instagramUrl} target="_blank" rel="noreferrer">
                Cek Instagram ↗
              </a>
            </div>
            <div className="hero-note">
              <span />
              Built around the ride. Made for every day.
            </div>
          </div>

          <div className="hero-visual">
            <video
              className="hero-video"
              src="/videos/vid1.mp4"
              autoPlay
              muted
              loop
              playsInline
              poster="/images/motor-hero.jpg"
            />
            <div className="hero-overlay" />
            <div className="hero-label">
              <span>BROWSAIKEL APPAREL</span>
              <strong>RIDE YOUR WAY</strong>
            </div>
            <div className="hero-index">GARAGE CULTURE — EST. 2024</div>
          </div>
        </section>

        <section className="brand-strip">
          <span>✦ Inspired by custom culture</span>
          <span>✦ Apparel for everyday riders</span>
          <span>✦ Wear it your way</span>
        </section>

        <section className="collection section" id="koleksi">
          <div className="section-meta">
            <span className="eyebrow">SHOP THE COLLECTION</span>
            <span>BROWSAIKEL / APPAREL</span>
          </div>
          <div className="section-heading">
            <h2>
              Dari garasi
              <br />
              <em>ke jalanan.</em>
            </h2>
            <p>
              Kaos, work shirt, dan hoodie dengan sentuhan kultur motor custom.
              Pilih item yang paling cocok dengan gaya harianmu.
            </p>
          </div>

          <div className="product-grid">
            {products.map((product, index) => (
              <article className="product-card" key={product.name}>
                <a href={instagramUrl} target="_blank" rel="noreferrer" className="product-image">
                  <img src={product.image} alt={product.name} loading="lazy" />
                  <span className="product-number">DROP / 0{index + 1}</span>
                  <span className="product-arrow">↗</span>
                </a>
                <div className="product-info">
                  <span className="product-category">{product.category}</span>
                  <h3>{product.name}</h3>
                  <div className="product-bottom">
                    <span>{product.price}</span>
                    <a href={whatsappUrl} target="_blank" rel="noreferrer">Tanya produk ↗</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="note">
            Ganti nama, harga, dan foto contoh dengan detail produk yang tersedia.
          </p>
        </section>

        <section className="manifesto" id="cerita">
          <span className="quote-mark">“</span>
          <p>
            Bukan soal seberapa cepat kamu melaju.
            <br />
            <em>Yang penting, tetap jadi dirimu di setiap perjalanan.</em>
          </p>
          <span className="manifesto-label">BROWSAIKEL GARAGE APPAREL</span>
        </section>

        <section className="about section">
          <span className="eyebrow">MORE THAN A T-SHIRT</span>
          <div className="section-heading">
            <h2>
              Bukan seragam.
              <br />
              <em>Ini soal identitas.</em>
            </h2>
            <p>
              Kami mengambil inspirasi dari kultur motor custom dan
              menerjemahkannya ke apparel yang bisa dipakai dalam keseharian.
            </p>
          </div>
          <div className="feature-grid">
            <article>
              <span>01</span>
              <h3>Desain berkarakter</h3>
              <p>Grafis terinspirasi kultur motor custom, garasi, dan perjalanan.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Nyaman dipakai</h3>
              <p>Apparel untuk menemani aktivitas harian dan waktu berkendara.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Gaya satu frekuensi</h3>
              <p>Untuk kamu yang suka motor, apparel, dan cerita di baliknya.</p>
            </article>
          </div>
        </section>

        <section className="contact" id="kontak">
          <div>
            <span className="eyebrow">FIND YOUR NEXT FAVORITE</span>
            <h2>
              Siap bawa
              <br />
              <em>gaya garasi?</em>
            </h2>
            <p>
              Lihat koleksi terbaru, tanya soal ukuran, atau hubungi kami untuk
              informasi pemesanan.
            </p>
            <div className="hero-actions">
              <a className="button button-red" href={instagramUrl} target="_blank" rel="noreferrer">
                Belanja lewat Instagram ↗
              </a>
              <a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">
                Chat WhatsApp
              </a>
            </div>
          </div>
          <div className="contact-stamp">RIDE<br />YOUR<br />WAY</div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home">
          <img className="brand-logo" src="/images/foto4.jpg" alt="" />
          <span className="brand-name">BROWSAIKEL<small> GARAGE APPAREL</small></span>
        </a>
        <span>Made for the ride. Worn every day.</span>
        <a href={instagramUrl} target="_blank" rel="noreferrer">@browsaikel.co ↗</a>
        <small>© {new Date().getFullYear()} Browsaikel Apparel</small>
      </footer>
    </>
  );
}

export default App;
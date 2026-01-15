export default function HomePage() {
    return (
          <main className="min-h-screen">
            {/* Hero Section */}
                <section className="relative h-screen flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-b from-et-black via-et-charcoal to-et-black" />
                        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                                  <p className="text-et-gold font-mono text-sm tracking-[0.3em] uppercase mb-6">
                                              American Craftsmanship
                                  </p>p>
                                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
                                              SUPPRESSORS FOR THE
                                              <br />
                                              <span className="text-et-gold">MODERN ERA</span>span>
                                  </h1>h1>
                                  <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
                                              Precision-engineered suppressors built with uncompromising quality.
                                              Every Echo Trace product is designed, machined, and assembled in America.
                                  </p>p>
                                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                              <a href="/products" className="px-8 py-4 bg-et-gold text-et-black font-semibold hover:bg-white transition-colors">
                                                            EXPLORE PRODUCTS
                                              </a>a>
                                              <a href="/dealers" className="px-8 py-4 border border-white/30 hover:border-et-gold hover:text-et-gold transition-colors">
                                                            FIND A DEALER
                                              </a>a>
                                  </div>div>
                        </div>div>
                </section>section>
          
            {/* Products Preview */}
                <section className="py-24 px-4 bg-et-charcoal">
                        <div className="max-w-7xl mx-auto">
                                  <h2 className="text-4xl font-bold text-center mb-4">Our Products</h2>h2>
                                  <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
                                              Each suppressor is engineered for maximum sound reduction without compromising accuracy.
                                  </p>p>
                                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                    {[
            { name: 'VEIL', price: '$1,299', caliber: '.30 Cal' },
            { name: 'SABOTEUR', price: '$499', caliber: '.22 LR' },
            { name: 'OVERWATCH', price: '$1,599', caliber: 'Multi-Cal' },
            { name: 'CLOAK', price: '$899', caliber: '9mm' },
                        ].map((product) => (
                                        <div key={product.name} className="bg-et-dark p-6 group hover:bg-et-black transition-colors border border-white/10">
                                                        <div className="aspect-square bg-et-black mb-4 flex items-center justify-center">
                                                                          <span className="text-6xl font-bold text-et-gold/20 group-hover:text-et-gold/40 transition-colors">
                                                                            {product.name[0]}
                                                                          </span>span>
                                                        </div>div>
                                                        <h3 className="text-xl font-bold mb-2">{product.name}</h3>h3>
                                                        <p className="text-gray-400 text-sm mb-2">{product.caliber}</p>p>
                                                        <p className="text-et-gold font-mono">{product.price}</p>p>
                                        </div>div>
                                      ))}
                                  </div>div>
                        </div>div>
                </section>section>
          
            {/* Features */}
                <section className="py-24 px-4">
                        <div className="max-w-7xl mx-auto text-center">
                                  <h2 className="text-4xl font-bold mb-16">Why Echo Trace</h2>h2>
                                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                                              <div>
                                                            <div className="w-16 h-16 mx-auto mb-6 border border-et-gold flex items-center justify-center">
                                                                            <span className="text-et-gold text-2xl">01</span>span>
                                                            </div>div>
                                                            <h3 className="text-xl font-bold mb-4">Monolithic Titanium Core</h3>h3>
                                                            <p className="text-gray-400">Single-piece construction for superior durability and heat management.</p>p>
                                              </div>div>
                                              <div>
                                                            <div className="w-16 h-16 mx-auto mb-6 border border-et-gold flex items-center justify-center">
                                                                            <span className="text-et-gold text-2xl">02</span>span>
                                                            </div>div>
                                                            <h3 className="text-xl font-bold mb-4">Taper-Lock Mounting</h3>h3>
                                                            <p className="text-gray-400">Precision indexing system for repeatable accuracy and easy installation.</p>p>
                                              </div>div>
                                              <div>
                                                            <div className="w-16 h-16 mx-auto mb-6 border border-et-gold flex items-center justify-center">
                                                                            <span className="text-et-gold text-2xl">03</span>span>
                                                            </div>div>
                                                            <h3 className="text-xl font-bold mb-4">Lifetime Warranty</h3>h3>
                                                            <p className="text-gray-400">Every product backed by our comprehensive lifetime warranty.</p>p>
                                              </div>div>
                                  </div>div>
                        </div>div>
                </section>section>
          
            {/* Footer */}
                <footer className="py-12 px-4 border-t border-white/10">
                        <div className="max-w-7xl mx-auto text-center">
                                  <p className="text-2xl font-bold mb-4">ECHO TRACE</p>p>
                                  <p className="text-gray-400 text-sm">Premium American-Made Suppressors</p>p>
                                  <p className="text-gray-500 text-xs mt-8">© 2024 Echo Trace LLC. All rights reserved.</p>p>
                        </div>div>
                </footer>footer>
          </main>main>
        )
}</main>

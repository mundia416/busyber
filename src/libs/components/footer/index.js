import React from 'react'


function Footer({ navigation, tagline, copyright ,logo}) {
    return (
        <footer className="mt-8 w-full bg-gray-50" aria-labelledby="footerHeading">
            <h2 id="footerHeading" className="sr-only">
                Footer
            </h2>
            <div className="max-w-md mx-auto pt-12 px-4 sm:max-w-7xl sm:px-6 lg:pt-16 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8 xl:col-span-1">
                        <div className={'h-16 w-16 p-2'}>
                            <img src={logo} alt='Lendbox logo' />
                        </div >

                        <p className="text-gray-500 text-base">
                            {tagline}
                        </p>
                        <div className="flex space-x-6">
                            {navigation.social.map((item) => (
                                <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8 xl:mt-0 xl:col-span-2">

                        <div className="md:grid md:grid-cols- md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Product</h3>
                                <ul className="mt-4 space-y-4">
                                    {navigation.product.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                                <ul className="mt-4 space-y-4">
                                    {navigation.company.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-12 md:mt-0">
                            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                            <ul className="mt-4 space-y-4">
                                {navigation.legal.map((item) => (
                                    <li key={item.name}>
                                        <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-200 py-8">
                    <p className="text-base text-gray-400 xl:text-center">&copy; {copyright}</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

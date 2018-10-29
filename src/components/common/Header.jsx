import React from "react";
export default class HeaderAppBar extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="nav-bounds">
                    <a
                        className="nav-logo"
                        href="//www.mercadolibre.com.ar"
                        tabIndex={1}
                    >
                        Mercado Libre Argentina - Donde comprar y vender de todo
                    </a>
                    <form
                        className="nav-search"
                        action="https://www.mercadolibre.com.ar/jm/search"
                        method="GET"
                        role="search"
                    >
                        <input
                            type="text"
                            className="nav-search-input"
                            name="as_word"
                            placeholder="Nunca dejes de buscar"
                            maxLength={120}
                            autoFocus
                            autoCapitalize="off"
                            autoCorrect="off"
                            spellCheck="false"
                            tabIndex={2}
                            autoComplete="off"
                        />
                        <button
                            type="submit"
                            className="nav-search-btn"
                            tabIndex={3}
                        >
                            <i className="nav-icon-search">
                                <span>Buscar</span>
                            </i>
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

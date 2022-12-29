import { Injectable } from "@angular/core";
import { NavLink } from "./nav-bar.types";

@Injectable()
export class NavBarService {
    private _left: Array<NavLink> | NavLink;
    private _mid: Array<NavLink> | NavLink;
    private _right: Array<NavLink> | NavLink;

    constructor() {
        this._left = [
            {
                name: "Logo",
                to: "/"
            }
        ];
        this._mid = [
            {
                name: "Nosotros",
                to: "/nosotros"
            },
            {
                name: "Busqueda",
                to: "/search"
            },
            {
                name: "Contactenos",
                to: "/contactenos"
            }
        ];
        this._right = [
            {
                name: "Iniciar Sesion",
                to: "/login"
            },
            {
                name: "Registrarse",
                to: "/register"
            }
        ]
    }

    // Getters and Setters for left links
    getLeftLinks(): Array<NavLink> | NavLink {
        return this._left;
    }
    setLeftLinks(value: Array<NavLink> | NavLink) {
        this._left = value;
    }

    // Getters and Setters for mid links
    getMidLinks(): Array<NavLink> | NavLink {
        return this._mid;
    }
    setMidLinks(value: Array<NavLink> | NavLink) {
        this._mid = value;
    }

    // Getters and Setters for right links
    getRightLinks(): Array<NavLink> | NavLink {
        return this._right;
    }
    setRightLinks(value: Array<NavLink> | NavLink) {
        this._right = value;
    }
}
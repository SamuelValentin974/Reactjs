import LogoRegina from './img/regina.png'

function Menu() {
    return (
        <div>
            <img src={LogoRegina}></img>
            <h1>Regina</h1> <br/>
            <h3>5€</h3>
            <h5>Tomate,Double Fromage, Jambon, Champignons</h5>
        </div>
    );
}

export default Menu;
const Header = ({title, length}) => {

    return (
        <header>
            <h1>{title} {length === 1 ? "Item" : "Items"} ({length}) </h1>
        </header>
    )
}
Header.defaultProps = {
    title: "Groceries List"
}
export default Header;
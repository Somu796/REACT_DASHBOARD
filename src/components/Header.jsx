import chef_claude from "assets/chef_claude.png";

export default function Header() {
    return (
        <header className="header-content">
            <img src={chef_claude} className="logo-img" alt="chef claude logo" />
            <span>Chef Claude</span>

        </header>
    )
}
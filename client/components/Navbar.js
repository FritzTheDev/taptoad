import Link from "next/link";

export default function() {
    return (
        <nav className="navbar">
            <Link href="/">
                <div className="navbar-brand">
                    <a className="navbar-item is-size-4">Ulternative</a>
                </div>
            </Link>
        </nav>
    )
}
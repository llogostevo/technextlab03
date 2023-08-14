export default function ContactMe() {
    return (
        <div>
            <h2 className="font-extrabold	text-6xl">Contact Me</h2>
            <p>Feel free to get in touch using the links below:</p>
            <ul className="pl-4 list-none">
                <li><span className="font-bold text-lg">Contact:</span>
                    <ul className="pl-4 list-none hover:list-disc">
                        <li><a href="#">Personal Email</a></li>
                        <li><a href="#">Work Email</a></li>
                    </ul>
                </li>
                <li><span className="font-bold text-lg">Social:</span>
                    <ul className="pl-4 list-none hover:list-disc">
                        <li><a href="#">GitHub</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Email</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

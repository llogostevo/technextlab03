export default function About() {
  return (
    <div id="about-me">
        <h2 className="font-extrabold	text-6xl">All About Me</h2>
        <ul>
            <li className="mt-4"><span className="font-bold text-xl">Name: </span>Lloyd Stevens</li>
            <li className="mt-4"><span className="font-bold text-xl">Job: </span> Computer Science Teacher</li>
            <li className="mt-4"><span className="font-bold text-xl">Hobbies:</span>
            <ul className="pl-4 list-none">
            <li><span className="font-bold text-lg">Sport:</span>
                <ul className="pl-4 list-none hover:list-disc">
                <li>Football</li>
                <li>Running</li>
                <li>Hiking</li>
                <li>Photography</li>
                </ul>
            </li>
            <li><span className="font-bold text-lg">Computing:</span>
                <ul className="pl-4 list-none hover:list-disc">
                <li>Web Development</li>
                </ul>
            </li>
            <li><span className="font-bold text-lg">AirFix Models:</span>
                <ul className="pl-4 list-none hover:list-disc">
                <li>Ships</li>
                <li>Planes</li>
                </ul>
            </li>
            </ul>
            </li>
            <li className="mt-4"><span className="font-bold text-xl">Interests:</span>
            <ul>
                <li><span className="pl-4 font-bold text-lg">Modern German History:</span>
                <ul className="pl-8 list-none hover:list-disc">
                    <li>First World War</li>
                    <li>Second World War</li>
                    <li>Spies - who doesn't love a bit of spy history</li>
                    <li>Cold War / DDR</li>
                </ul>
                </li>
            </ul>
            </li>
        </ul>
      </div>
  )
}
